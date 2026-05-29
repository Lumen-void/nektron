#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

// NEKTRON ESP32 starter firmware.
// Install ArduinoJson from Library Manager before compiling.

const char* WIFI_SSID = "YOUR_WIFI_SSID";
const char* WIFI_PASSWORD = "YOUR_WIFI_PASSWORD";
const char* API_BASE_URL = "http://192.168.1.10:4000";
const char* MACHINE_ID = "NEK-DEL-001";
const char* MACHINE_API_KEY = "PASTE_MACHINE_API_KEY_FROM_ADMIN";

const int PIN_BLOWER = 14;
const int PIN_HEATER = 27;
const int PIN_UV = 26;
const int PIN_MIST = 25;
const int PIN_LED_FRAME = 33;
const int PIN_DOOR_SENSOR = 32;
const int PIN_TEMP_SENSOR = 4;
const int PIN_LIQUID_LEVEL = 35;
const int PIN_EMERGENCY_STOP = 34;

const bool RELAY_ACTIVE_HIGH = true;
const bool DOOR_CLOSED_HIGH = true;
const bool ESTOP_OK_HIGH = true;

const int MAX_SAFE_TEMP_C = 70;
const int MIN_LIQUID_LEVEL_PERCENT = 15;
const unsigned long POLL_INTERVAL_MS = 3000;
const unsigned long AIR_CLEANING_MS = 45000;
const unsigned long UV_SANITIZING_MS = 45000;
const unsigned long MIST_DEODORIZING_MS = 20000;
const unsigned long HOT_AIR_DRYING_MS = 70000;

String currentStage = "idle";
bool cleaningInProgress = false;
unsigned long lastPollAt = 0;

void setOutput(int pin, bool enabled) {
  digitalWrite(pin, enabled == RELAY_ACTIVE_HIGH ? HIGH : LOW);
}

void allOutputsOff() {
  setOutput(PIN_BLOWER, false);
  setOutput(PIN_HEATER, false);
  setOutput(PIN_UV, false);
  setOutput(PIN_MIST, false);
}

bool isDoorClosed() {
  return digitalRead(PIN_DOOR_SENSOR) == (DOOR_CLOSED_HIGH ? HIGH : LOW);
}

bool isEmergencyStopOk() {
  return digitalRead(PIN_EMERGENCY_STOP) == (ESTOP_OK_HIGH ? HIGH : LOW);
}

int readTemperatureC() {
  // Replace with DS18B20/DHT implementation for prototype hardware.
  int raw = analogRead(PIN_TEMP_SENSOR);
  return map(raw, 0, 4095, 20, 85);
}

int readLiquidLevelPercent() {
  int raw = analogRead(PIN_LIQUID_LEVEL);
  return constrain(map(raw, 0, 4095, 0, 100), 0, 100);
}

void postFault(const char* faultType, const char* severity, const char* message) {
  if (WiFi.status() != WL_CONNECTED) return;

  HTTPClient http;
  String url = String(API_BASE_URL) + "/machines/" + MACHINE_ID + "/fault";
  http.begin(url);
  http.addHeader("Content-Type", "application/json");
  http.addHeader("x-machine-api-key", MACHINE_API_KEY);

  StaticJsonDocument<256> doc;
  doc["fault_type"] = faultType;
  doc["severity"] = severity;
  doc["message"] = message;

  String payload;
  serializeJson(doc, payload);
  http.POST(payload);
  http.end();
}

void sendTelemetry() {
  if (WiFi.status() != WL_CONNECTED) return;

  HTTPClient http;
  String url = String(API_BASE_URL) + "/machines/" + MACHINE_ID + "/telemetry";
  http.begin(url);
  http.addHeader("Content-Type", "application/json");
  http.addHeader("x-machine-api-key", MACHINE_API_KEY);

  StaticJsonDocument<512> doc;
  doc["current_stage"] = currentStage;
  doc["door_closed"] = isDoorClosed();
  doc["temperature"] = readTemperatureC();
  doc["mist_level"] = readLiquidLevelPercent();
  doc["blower_on"] = digitalRead(PIN_BLOWER) == HIGH;
  doc["heater_on"] = digitalRead(PIN_HEATER) == HIGH;
  doc["uv_on"] = digitalRead(PIN_UV) == HIGH;
  doc["mist_on"] = digitalRead(PIN_MIST) == HIGH;
  doc["led_frame_on"] = digitalRead(PIN_LED_FRAME) == HIGH;

  String payload;
  serializeJson(doc, payload);
  int code = http.POST(payload);

  if (code == 200) {
    String response = http.getString();
    StaticJsonDocument<512> resDoc;
    DeserializationError error = deserializeJson(resDoc, response);
    if (!error) {
      const char* command = resDoc["command"]["command"] | "none";
      if (String(command) == "start_cleaning" && !cleaningInProgress) {
        runCleaningCycle();
      }
    }
  }

  http.end();
}

bool safetyCheckBeforeStart() {
  if (!isEmergencyStopOk()) {
    postFault("emergency_stop_active", "critical", "Emergency stop is active. Cycle refused.");
    return false;
  }
  if (!isDoorClosed()) {
    postFault("door_open_start_blocked", "critical", "Door is open. Cycle refused.");
    return false;
  }
  if (readTemperatureC() >= MAX_SAFE_TEMP_C) {
    postFault("temperature_start_blocked", "critical", "Temperature is above safe start limit.");
    return false;
  }
  if (readLiquidLevelPercent() < MIN_LIQUID_LEVEL_PERCENT) {
    postFault("mist_liquid_low", "warning", "Mist liquid is below threshold.");
  }
  return true;
}

bool liveSafetyCheck() {
  if (!isEmergencyStopOk()) {
    currentStage = "error";
    allOutputsOff();
    postFault("emergency_stop_mid_cycle", "critical", "Emergency stop activated during cleaning cycle.");
    return false;
  }
  if (!isDoorClosed()) {
    currentStage = "error";
    allOutputsOff();
    postFault("door_open_mid_cycle", "critical", "Door opened during cleaning cycle.");
    return false;
  }
  if (readTemperatureC() >= MAX_SAFE_TEMP_C) {
    currentStage = "error";
    allOutputsOff();
    postFault("temperature_cutoff", "critical", "Heater shut off due to high temperature.");
    return false;
  }
  return true;
}

void holdStage(const char* stage, unsigned long durationMs) {
  currentStage = String(stage);
  unsigned long startedAt = millis();
  while (millis() - startedAt < durationMs) {
    if (!liveSafetyCheck()) return;
    if (millis() - lastPollAt > POLL_INTERVAL_MS) {
      lastPollAt = millis();
      sendTelemetry();
    }
    delay(100);
  }
}

void runCleaningCycle() {
  if (!safetyCheckBeforeStart()) {
    currentStage = "error";
    allOutputsOff();
    sendTelemetry();
    return;
  }

  cleaningInProgress = true;
  setOutput(PIN_LED_FRAME, true);

  currentStage = "starting";
  sendTelemetry();
  delay(600);

  setOutput(PIN_BLOWER, true);
  holdStage("air_cleaning", AIR_CLEANING_MS);
  setOutput(PIN_BLOWER, false);

  if (currentStage != "error") {
    setOutput(PIN_UV, true);
    holdStage("uv_sanitizing", UV_SANITIZING_MS);
    setOutput(PIN_UV, false);
  }

  if (currentStage != "error" && readLiquidLevelPercent() >= MIN_LIQUID_LEVEL_PERCENT) {
    setOutput(PIN_MIST, true);
    holdStage("mist_deodorizing", MIST_DEODORIZING_MS);
    setOutput(PIN_MIST, false);
  }

  if (currentStage != "error") {
    setOutput(PIN_BLOWER, true);
    setOutput(PIN_HEATER, true);
    holdStage("drying", HOT_AIR_DRYING_MS);
    setOutput(PIN_HEATER, false);
    setOutput(PIN_BLOWER, false);
  }

  if (currentStage != "error") {
    currentStage = "done";
    sendTelemetry();
    delay(3000);
    currentStage = "idle";
  }

  allOutputsOff();
  cleaningInProgress = false;
  sendTelemetry();
}

void connectWiFi() {
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  unsigned long startedAt = millis();
  while (WiFi.status() != WL_CONNECTED && millis() - startedAt < 15000) {
    delay(300);
  }
}

void setup() {
  Serial.begin(115200);

  pinMode(PIN_BLOWER, OUTPUT);
  pinMode(PIN_HEATER, OUTPUT);
  pinMode(PIN_UV, OUTPUT);
  pinMode(PIN_MIST, OUTPUT);
  pinMode(PIN_LED_FRAME, OUTPUT);
  pinMode(PIN_DOOR_SENSOR, INPUT_PULLDOWN);
  pinMode(PIN_EMERGENCY_STOP, INPUT_PULLDOWN);
  pinMode(PIN_TEMP_SENSOR, INPUT);
  pinMode(PIN_LIQUID_LEVEL, INPUT);

  allOutputsOff();
  setOutput(PIN_LED_FRAME, true);
  connectWiFi();
  sendTelemetry();
}

void loop() {
  if (WiFi.status() != WL_CONNECTED) {
    allOutputsOff();
    connectWiFi();
  }

  if (!isEmergencyStopOk()) {
    currentStage = "error";
    allOutputsOff();
    sendTelemetry();
    delay(500);
    return;
  }

  if (millis() - lastPollAt > POLL_INTERVAL_MS) {
    lastPollAt = millis();
    sendTelemetry();
  }

  delay(100);
}
