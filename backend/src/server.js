import express from "express";
import cors from "cors";
import morgan from "morgan";
import QRCode from "qrcode";
import crypto from "node:crypto";
import pg from "pg";

const app = express();
const PORT = process.env.PORT || 4000;

const STAGES = [
  "idle",
  "starting",
  "air_cleaning",
  "uv_sanitizing",
  "mist_deodorizing",
  "drying",
  "done",
  "error",
  "service_required"
];

const stageLabels = {
  idle: "Idle",
  starting: "Starting",
  air_cleaning: "Air Cleaning",
  uv_sanitizing: "UV Sanitizing",
  mist_deodorizing: "Mist Deodorizing",
  drying: "Drying",
  done: "Done",
  error: "Error",
  service_required: "Service Required"
};

const now = () => new Date().toISOString();
const id = (prefix) => `${prefix}_${crypto.randomUUID().slice(0, 8)}`;

let bootstrapping = true;
let persistTimer = null;
let pgPool = null;

class PersistedMap extends Map {
  set(key, value) {
    const result = super.set(key, value);
    schedulePersist();
    return result;
  }

  delete(key) {
    const result = super.delete(key);
    schedulePersist();
    return result;
  }

  clear() {
    super.clear();
    schedulePersist();
  }
}

const machines = new PersistedMap();
const users = new PersistedMap();
const usageSessions = new PersistedMap();
const payments = new PersistedMap();
const faults = new PersistedMap();
const ads = new PersistedMap();
const adAssignments = new PersistedMap();
const pendingCommands = new PersistedMap();
const otpChallenges = new PersistedMap();
const adminSessions = new PersistedMap();
const webhookEvents = new PersistedMap();
const telemetryLogs = [];
const simulatorTimers = new Map();

const storageMode = process.env.DATABASE_URL ? "postgres" : "memory";
const adminApiKey = process.env.ADMIN_API_KEY || "";
const adminPassword = process.env.ADMIN_PASSWORD || "";
const razorpayKeyId = process.env.RAZORPAY_KEY_ID || "";
const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET || "";
const razorpayWebhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET || "";
const authMode = process.env.AUTH_MODE || (process.env.NODE_ENV === "production" ? "otp" : "demo");
const requireMachineApiKeys = process.env.REQUIRE_MACHINE_API_KEYS === "true";

const CLEANING_TIMELINE = [
  { stage: "starting", seconds: 12, outputs: { blower_on: false, heater_on: false, uv_on: false, mist_on: false } },
  { stage: "air_cleaning", seconds: 45, outputs: { blower_on: true, heater_on: false, uv_on: false, mist_on: false } },
  { stage: "uv_sanitizing", seconds: 45, outputs: { blower_on: true, heater_on: false, uv_on: true, mist_on: false } },
  { stage: "mist_deodorizing", seconds: 20, outputs: { blower_on: true, heater_on: false, uv_on: false, mist_on: true } },
  { stage: "drying", seconds: 70, outputs: { blower_on: true, heater_on: true, uv_on: false, mist_on: false } },
  { stage: "done", seconds: 8, outputs: { blower_on: false, heater_on: false, uv_on: false, mist_on: false } }
];

function snapshotState() {
  return {
    machines: [...machines.entries()],
    users: [...users.entries()],
    usageSessions: [...usageSessions.entries()],
    payments: [...payments.entries()],
    faults: [...faults.entries()],
    ads: [...ads.entries()],
    adAssignments: [...adAssignments.entries()],
    pendingCommands: [...pendingCommands.entries()],
    otpChallenges: [...otpChallenges.entries()],
    adminSessions: [...adminSessions.entries()],
    webhookEvents: [...webhookEvents.entries()],
    telemetryLogs: telemetryLogs.slice(-1000)
  };
}

function restoreState(snapshot) {
  if (!snapshot) return false;
  const restoreMap = (target, entries = []) => {
    target.clear();
    entries.forEach(([key, value]) => target.set(key, value));
  };
  restoreMap(machines, snapshot.machines);
  restoreMap(users, snapshot.users);
  restoreMap(usageSessions, snapshot.usageSessions);
  restoreMap(payments, snapshot.payments);
  restoreMap(faults, snapshot.faults);
  restoreMap(ads, snapshot.ads);
  restoreMap(adAssignments, snapshot.adAssignments);
  restoreMap(pendingCommands, snapshot.pendingCommands);
  restoreMap(otpChallenges, snapshot.otpChallenges);
  restoreMap(adminSessions, snapshot.adminSessions);
  restoreMap(webhookEvents, snapshot.webhookEvents);
  telemetryLogs.splice(0, telemetryLogs.length, ...(snapshot.telemetryLogs || []));
  return machines.size > 0;
}

async function initStorage() {
  if (storageMode !== "postgres") return false;
  pgPool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : undefined
  });
  await pgPool.query(`
    CREATE TABLE IF NOT EXISTS app_state (
      key TEXT PRIMARY KEY,
      snapshot JSONB NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `);
  const result = await pgPool.query("SELECT snapshot FROM app_state WHERE key = $1", ["nektron"]);
  return restoreState(result.rows[0]?.snapshot);
}

async function persistState() {
  if (bootstrapping || storageMode !== "postgres" || !pgPool) return;
  const snapshot = snapshotState();
  await pgPool.query(
    `INSERT INTO app_state (key, snapshot, updated_at)
     VALUES ($1, $2, now())
     ON CONFLICT (key) DO UPDATE SET snapshot = EXCLUDED.snapshot, updated_at = now()`,
    ["nektron", snapshot]
  );
}

function schedulePersist() {
  if (bootstrapping || storageMode !== "postgres") return;
  if (persistTimer) clearTimeout(persistTimer);
  persistTimer = setTimeout(() => {
    persistState().catch((error) => console.error("PostgreSQL persistence failed:", error.message));
  }, 150);
}

function createToken(prefix = "token") {
  return `${prefix}_${crypto.randomBytes(24).toString("hex")}`;
}

function isExpired(isoDate) {
  return !isoDate || new Date(isoDate).getTime() < Date.now();
}

function sha256(value) {
  return crypto.createHash("sha256").update(String(value)).digest("hex");
}

function hmacSha256(value, secret) {
  return crypto.createHmac("sha256", secret).update(value).digest("hex");
}

function seed() {
  if (machines.size > 0) return;
  const createdAt = now();
  const machine = {
    id: "machine_demo_delhi",
    machine_code: "NEK-DEL-001",
    name: "NEKTRON Pilot Station",
    location_name: "Cyber Hub Demo Bay",
    latitude: 28.495,
    longitude: 77.088,
    status: "available",
    is_online: true,
    current_stage: "idle",
    cleaning_in_progress: false,
    mist_level: 82,
    temperature: 31,
    door_closed: true,
    blower_on: false,
    heater_on: false,
    uv_on: false,
    mist_on: false,
    led_frame_on: true,
    last_heartbeat: createdAt,
    qr_code_value: "NEK-DEL-001",
    api_key: process.env.DEMO_MACHINE_API_KEY || createToken("machine"),
    price: 49,
    estimated_minutes: 3,
    dimensions_mm: { width: 600, depth: 430, height: 1020 },
    created_at: createdAt,
    updated_at: createdAt
  };
  machines.set(machine.machine_code, machine);

  const user = {
    id: "user_demo",
    phone: "+919999999999",
    name: "Demo Rider",
    created_at: createdAt,
    last_login: createdAt
  };
  users.set(user.id, user);

  const fault = {
    id: "fault_demo_low_mist",
    machine_id: machine.id,
    machine_code: machine.machine_code,
    fault_type: "mist_level_low_warning",
    severity: "warning",
    message: "Mist liquid is below refill threshold for next service window.",
    resolved: false,
    created_at: createdAt,
    resolved_at: null
  };
  faults.set(fault.id, fault);

  const ad = {
    id: "ad_demo_hygiene",
    title: "Helmet Hygiene Loop",
    file_url: "https://example.com/nektron-hygiene-loop.mp4",
    thumbnail_url: "https://example.com/nektron-hygiene-loop.jpg",
    duration: 20,
    status: "active",
    created_at: createdAt
  };
  ads.set(ad.id, ad);
}

function ensureMachineSecrets() {
  [...machines.values()].forEach((machine) => {
    if (!machine.api_key) {
      machine.api_key = createToken("machine");
      machines.set(machine.machine_code, machine);
    }
  });
}

app.use(cors());
app.use(express.json({
  limit: "2mb",
  verify: (req, _res, buffer) => {
    req.rawBody = buffer;
  }
}));
app.use(morgan("dev"));

function findMachine(machineId) {
  return [...machines.values()].find(
    (machine) => machine.machine_code === machineId || machine.id === machineId
  );
}

function machinePayload(machine, options = {}) {
  const latestTelemetry = [...telemetryLogs].reverse().find((item) => item.machine_code === machine.machine_code) || null;
  const { api_key, ...publicMachine } = machine;
  return {
    ...publicMachine,
    ...(options.includeSecrets ? { api_key } : {}),
    stage_label: stageLabels[machine.current_stage] || machine.current_stage,
    latest_telemetry: latestTelemetry,
    command_pending: pendingCommands.has(machine.machine_code)
  };
}

function requireMachine(req, res, next) {
  const machine = findMachine(req.params.machineId);
  if (!machine) {
    res.status(404).json({ ok: false, error: "Machine not found" });
    return;
  }
  req.machine = machine;
  next();
}

function requireMachineAuth(req, res, next) {
  if (!requireMachineApiKeys) {
    next();
    return;
  }
  const apiKey = req.headers["x-machine-api-key"];
  if (apiKey && req.machine.api_key && apiKey === req.machine.api_key) {
    next();
    return;
  }
  res.status(401).json({ ok: false, error: "Machine API key required" });
}

function adminProtectionEnabled() {
  return Boolean(adminApiKey || adminPassword);
}

function getBearerToken(req) {
  const header = req.headers.authorization || "";
  if (!header.startsWith("Bearer ")) return "";
  return header.slice("Bearer ".length);
}

function requireAdmin(req, res, next) {
  if (!adminProtectionEnabled()) {
    next();
    return;
  }

  const apiKey = req.headers["x-admin-api-key"];
  if (adminApiKey && apiKey === adminApiKey) {
    next();
    return;
  }

  const token = getBearerToken(req);
  const session = adminSessions.get(token);
  if (session && !isExpired(session.expires_at)) {
    session.last_seen_at = now();
    adminSessions.set(token, session);
    next();
    return;
  }

  res.status(401).json({ ok: false, error: "Admin authorization required" });
}

function updateMachine(machine, patch) {
  Object.assign(machine, patch, { updated_at: now() });
  machines.set(machine.machine_code, machine);
  return machine;
}

function createFault(machine, fault_type, severity, message) {
  const fault = {
    id: id("fault"),
    machine_id: machine.id,
    machine_code: machine.machine_code,
    fault_type,
    severity,
    message,
    resolved: false,
    created_at: now(),
    resolved_at: null
  };
  faults.set(fault.id, fault);
  return fault;
}

function timelineWithDelays(speed = 14) {
  let delay = 0;
  const compact = CLEANING_TIMELINE.map((step) => {
    delay += Math.max(500, Math.round((step.seconds * 1000) / speed));
    return { ...step, delay };
  });
  return [...compact, { stage: "idle", delay: delay + 1200, outputs: { blower_on: false, heater_on: false, uv_on: false, mist_on: false } }];
}

function queueCleaningSimulation(machine, sessionId, speed = 14) {
  timelineWithDelays(speed).forEach(({ stage, delay, outputs }) => {
    setTimeout(() => {
      const latest = findMachine(machine.machine_code);
      if (!latest || latest.current_stage === "error") return;

      const outputState = {
        blower_on: outputs.blower_on,
        heater_on: outputs.heater_on,
        uv_on: outputs.uv_on,
        mist_on: outputs.mist_on,
        led_frame_on: true
      };

      updateMachine(latest, {
        current_stage: stage,
        status: stage === "idle" ? "available" : stage === "done" ? "complete" : "busy",
        cleaning_in_progress: !["idle", "done"].includes(stage),
        ...outputState
      });

      const session = usageSessions.get(sessionId);
      if (session) {
        session.machine_status = stage;
        if (stage === "done") {
          session.completed_at = now();
          session.sanitization_report = buildSanitizationReport(latest, session, true);
        }
        usageSessions.set(session.id, session);
      }
    }, delay);
  });
}

function recordTelemetry(machine, input = {}) {
  const telemetry = {
    id: id("tel"),
    machine_id: machine.id,
    machine_code: machine.machine_code,
    current_stage: machine.current_stage,
    temperature: machine.temperature,
    mist_level: machine.mist_level,
    door_closed: machine.door_closed,
    blower_on: machine.blower_on,
    heater_on: machine.heater_on,
    uv_on: machine.uv_on,
    mist_on: machine.mist_on,
    led_frame_on: machine.led_frame_on,
    source: input.source || "api",
    created_at: now()
  };
  telemetryLogs.push(telemetry);
  if (telemetryLogs.length > 1000) telemetryLogs.splice(0, telemetryLogs.length - 1000);
  schedulePersist();
  return telemetry;
}

function buildSanitizationReport(machine, session, completed = false) {
  const beforeScore = session?.sanitization_report?.before?.hygiene_score ?? Math.max(38, Math.round(58 - (100 - machine.mist_level) * 0.12));
  const afterScore = completed ? Math.min(99, beforeScore + 36 + Math.round(Math.random() * 4)) : null;
  return {
    status: completed ? "complete" : "pending",
    generated_at: completed ? now() : null,
    method: "UV-C sanitization + deodorizing mist + hot-air drying",
    before: {
      hygiene_score: beforeScore,
      estimated_germ_load: "High",
      odor_level: "High",
      moisture_level: "Medium",
      note: "Estimated from usage profile and pre-cycle machine sensors."
    },
    after: completed ? {
      hygiene_score: afterScore,
      estimated_germ_load: "Low",
      odor_level: "Low",
      moisture_level: "Dry",
      uv_exposure: "Completed",
      mist_deodorization: "Completed",
      hot_air_drying: "Completed"
    } : null,
    improvement: completed ? {
      hygiene_score_delta: afterScore - beforeScore,
      visible_result: "Helmet sanitized, deodorized, and dried.",
      rider_message: "Your helmet is fresh and ready for the next ride."
    } : null
  };
}

function safetyCheck(machine) {
  if (!machine.door_closed && machine.cleaning_in_progress) {
    createFault(machine, "door_open_during_cycle", "critical", "Door opened during cleaning cycle. Outputs shut down.");
    return updateMachine(machine, {
      current_stage: "error",
      status: "fault",
      cleaning_in_progress: false,
      blower_on: false,
      heater_on: false,
      uv_on: false,
      mist_on: false
    });
  }
  if (machine.temperature >= 70) {
    createFault(machine, "temperature_cutoff", "critical", `Temperature cutoff at ${machine.temperature}C.`);
    return updateMachine(machine, {
      current_stage: "error",
      status: "fault",
      cleaning_in_progress: false,
      heater_on: false,
      blower_on: false,
      uv_on: false,
      mist_on: false
    });
  }
  if (machine.mist_level <= 12) {
    const existing = [...faults.values()].find((fault) => fault.machine_code === machine.machine_code && fault.fault_type === "mist_level_low_warning" && !fault.resolved);
    if (!existing) createFault(machine, "mist_level_low_warning", "warning", "Mist liquid is below refill threshold.");
  }
  return machine;
}

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    service: "nektron-backend",
    storage: storageMode,
    payments: razorpayKeyId && razorpayKeySecret ? "razorpay" : "mock",
    admin_protected: adminProtectionEnabled(),
    stages: STAGES,
    timestamp: now()
  });
});

app.post("/auth/send-otp", (req, res) => {
  const { phone } = req.body;
  if (!phone) {
    res.status(400).json({ ok: false, error: "phone is required" });
    return;
  }
  const otp = authMode === "demo" ? "123456" : String(crypto.randomInt(100000, 999999));
  otpChallenges.set(phone, {
    phone,
    otp_hash: sha256(otp),
    attempts: 0,
    expires_at: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
    created_at: now()
  });

  res.json({
    ok: true,
    phone,
    expires_in_seconds: 300,
    delivery: process.env.OTP_PROVIDER || "manual",
    ...(authMode === "demo" ? { otp } : {})
  });
});

app.post("/auth/verify-otp", (req, res) => {
  const { phone, otp } = req.body;
  if (!phone || !otp) {
    res.status(400).json({ ok: false, error: "phone and otp are required" });
    return;
  }
  const challenge = otpChallenges.get(phone);
  if (!challenge || isExpired(challenge.expires_at)) {
    res.status(401).json({ ok: false, error: "OTP expired or not requested" });
    return;
  }
  challenge.attempts += 1;
  otpChallenges.set(phone, challenge);
  if (challenge.attempts > 5 || sha256(otp) !== challenge.otp_hash) {
    res.status(401).json({ ok: false, error: "Invalid OTP" });
    return;
  }
  otpChallenges.delete(phone);
  let user = [...users.values()].find((candidate) => candidate.phone === phone);
  if (!user) {
    user = { id: id("user"), phone, name: "NEKTRON Rider", created_at: now(), last_login: now() };
  } else {
    user.last_login = now();
  }
  const token = createToken("user");
  user.session_token = token;
  users.set(user.id, user);
  res.json({ ok: true, user, token });
});

app.post("/admin/auth/login", (req, res) => {
  if (!adminProtectionEnabled()) {
    res.json({ ok: true, token: "development-admin", expires_in_seconds: 0 });
    return;
  }
  if (!adminPassword || req.body.password !== adminPassword) {
    res.status(401).json({ ok: false, error: "Invalid admin password" });
    return;
  }
  const token = createToken("admin");
  adminSessions.set(token, {
    token,
    created_at: now(),
    last_seen_at: now(),
    expires_at: new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString()
  });
  res.json({ ok: true, token, expires_in_seconds: 43200 });
});

app.post("/admin/machines", requireAdmin, (req, res) => {
  const machine_code = req.body.machine_code || `NEK-${crypto.randomUUID().slice(0, 6).toUpperCase()}`;
  if (machines.has(machine_code)) {
    res.status(409).json({ ok: false, error: "Machine code already exists" });
    return;
  }
  const createdAt = now();
  const machine = {
    id: id("machine"),
    machine_code,
    name: req.body.name || "NEKTRON Station",
    location_name: req.body.location_name || "Unassigned",
    latitude: req.body.latitude ?? null,
    longitude: req.body.longitude ?? null,
    status: "available",
    is_online: false,
    current_stage: "idle",
    cleaning_in_progress: false,
    mist_level: 100,
    temperature: 28,
    door_closed: true,
    blower_on: false,
    heater_on: false,
    uv_on: false,
    mist_on: false,
    led_frame_on: true,
    last_heartbeat: null,
    qr_code_value: machine_code,
    api_key: req.body.api_key || createToken("machine"),
    price: req.body.price ?? 49,
    estimated_minutes: req.body.estimated_minutes ?? 3,
    dimensions_mm: req.body.dimensions_mm || { width: 600, depth: 430, height: 1020 },
    created_at: createdAt,
    updated_at: createdAt
  };
  machines.set(machine.machine_code, machine);
  res.status(201).json({ ok: true, machine: machinePayload(machine, { includeSecrets: true }) });
});

app.get("/machines/:machineId", requireMachine, (req, res) => {
  res.json({ ok: true, machine: machinePayload(req.machine) });
});

app.get("/machines/:machineId/status", requireMachine, (req, res) => {
  const recentTelemetry = telemetryLogs
    .filter((item) => item.machine_code === req.machine.machine_code)
    .slice(-20)
    .reverse();
  res.json({
    ok: true,
    status: {
      machine_code: req.machine.machine_code,
      status: req.machine.status,
      is_online: req.machine.is_online,
      current_stage: req.machine.current_stage,
      stage_label: stageLabels[req.machine.current_stage],
      cleaning_in_progress: req.machine.cleaning_in_progress,
      temperature: req.machine.temperature,
      mist_level: req.machine.mist_level,
      door_closed: req.machine.door_closed,
      last_heartbeat: req.machine.last_heartbeat,
      outputs: {
        blower_on: req.machine.blower_on,
        heater_on: req.machine.heater_on,
        uv_on: req.machine.uv_on,
        mist_on: req.machine.mist_on,
        led_frame_on: req.machine.led_frame_on
      },
      recentTelemetry
    }
  });
});

app.get("/machines/:machineId/commands/next", requireMachine, requireMachineAuth, (req, res) => {
  const command = pendingCommands.get(req.machine.machine_code) || { command: "none" };
  pendingCommands.delete(req.machine.machine_code);
  res.json({ ok: true, machine_code: req.machine.machine_code, command });
});

app.post("/machines/:machineId/start", requireMachine, (req, res) => {
  const machine = req.machine;
  if (!machine.is_online) {
    res.status(409).json({ ok: false, error: "Machine is offline" });
    return;
  }
  if (!machine.door_closed) {
    createFault(machine, "door_open_start_blocked", "critical", "Door is open. Cleaning cannot start.");
    res.status(409).json({ ok: false, error: "Door is open" });
    return;
  }
  if (machine.cleaning_in_progress) {
    res.status(409).json({ ok: false, error: "Machine is already running" });
    return;
  }

  const session = {
    id: id("session"),
    user_id: req.body.user_id || "user_demo",
    machine_id: machine.id,
    machine_code: machine.machine_code,
    service_type: req.body.service_type || "quick_clean",
    amount: req.body.amount ?? machine.price,
    payment_id: req.body.payment_id || null,
    payment_status: req.body.payment_status || "paid",
    machine_status: "starting",
    started_at: now(),
    completed_at: null,
    sanitization_report: buildSanitizationReport(machine, null, false),
    created_at: now()
  };

  usageSessions.set(session.id, session);
  pendingCommands.set(machine.machine_code, {
    command: "start_cleaning",
    session_id: session.id,
    service_type: session.service_type,
    timeline: CLEANING_TIMELINE,
    created_at: now()
  });
  updateMachine(machine, {
    current_stage: "starting",
    status: "busy",
    cleaning_in_progress: true
  });
  queueCleaningSimulation(machine, session.id);

  res.status(202).json({ ok: true, session, machine: machinePayload(machine) });
});

app.post("/machines/:machineId/telemetry", requireMachine, requireMachineAuth, (req, res) => {
  const telemetry = req.body || {};
  const patch = {
    is_online: true,
    last_heartbeat: now(),
    temperature: telemetry.temperature ?? req.machine.temperature,
    mist_level: telemetry.mist_level ?? req.machine.mist_level,
    door_closed: telemetry.door_closed ?? req.machine.door_closed,
    current_stage: telemetry.current_stage ?? req.machine.current_stage,
    blower_on: telemetry.blower_on ?? req.machine.blower_on,
    heater_on: telemetry.heater_on ?? req.machine.heater_on,
    uv_on: telemetry.uv_on ?? req.machine.uv_on,
    mist_on: telemetry.mist_on ?? req.machine.mist_on,
    led_frame_on: telemetry.led_frame_on ?? req.machine.led_frame_on
  };

  const machine = updateMachine(req.machine, patch);
  const safeMachine = safetyCheck(machine);
  const telemetryRecord = recordTelemetry(safeMachine, { source: telemetry.source || "machine" });

  const command = pendingCommands.get(machine.machine_code) || { command: "none" };
  pendingCommands.delete(machine.machine_code);
  res.json({ ok: true, machine: machinePayload(safeMachine), telemetry: telemetryRecord, command });
});

app.post("/machines/:machineId/fault", requireMachine, requireMachineAuth, (req, res) => {
  const fault = createFault(
    req.machine,
    req.body.fault_type || "machine_fault",
    req.body.severity || "warning",
    req.body.message || "Machine reported a fault."
  );
  updateMachine(req.machine, {
    current_stage: req.body.severity === "critical" ? "error" : req.machine.current_stage,
    status: req.body.severity === "critical" ? "fault" : req.machine.status,
    cleaning_in_progress: req.body.severity === "critical" ? false : req.machine.cleaning_in_progress
  });
  res.status(201).json({ ok: true, fault });
});

app.get("/qr/:machineId", requireMachine, async (req, res) => {
  const qrDataUrl = await QRCode.toDataURL(req.machine.qr_code_value, {
    color: { dark: "#f43f5e", light: "#050505" },
    margin: 1,
    width: 512
  });
  res.json({ ok: true, machine_code: req.machine.machine_code, value: req.machine.qr_code_value, qrDataUrl });
});

app.post("/scan", (req, res) => {
  const machine = findMachine(req.body.qr_code_value || req.body.machine_code || req.body.value);
  if (!machine) {
    res.status(404).json({ ok: false, error: "No machine found for scanned QR" });
    return;
  }
  res.json({ ok: true, machine: machinePayload(machine) });
});

async function createRazorpayOrder({ amount, currency, receipt, notes }) {
  if (!razorpayKeyId || !razorpayKeySecret) return null;
  const response = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`${razorpayKeyId}:${razorpayKeySecret}`).toString("base64")}`
    },
    body: JSON.stringify({
      amount: Number(amount) * 100,
      currency,
      receipt,
      notes
    })
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.description || "Razorpay order creation failed");
  }
  return data;
}

app.post("/payments/create-order", async (req, res) => {
  const machine = findMachine(req.body.machine_id || req.body.machine_code);
  if (!machine) {
    res.status(404).json({ ok: false, error: "Machine not found" });
    return;
  }
  if (!machine.is_online || machine.cleaning_in_progress) {
    res.status(409).json({ ok: false, error: "Machine is not available for payment" });
    return;
  }
  const amount = Number(req.body.amount ?? machine.price);
  const internalOrderId = id("order");
  let providerOrder = null;
  try {
    providerOrder = await createRazorpayOrder({
      amount,
      currency: "INR",
      receipt: internalOrderId.slice(0, 40),
      notes: {
        machine_code: machine.machine_code,
        service_type: req.body.service_type || "quick_clean"
      }
    });
  } catch (error) {
    res.status(502).json({ ok: false, error: error.message });
    return;
  }
  const order = {
    id: internalOrderId,
    machine_code: machine.machine_code,
    amount,
    currency: "INR",
    status: "created",
    provider: providerOrder ? "razorpay" : "mock_razorpay",
    provider_order_id: providerOrder?.id || null,
    checkout_key_id: providerOrder ? razorpayKeyId : null,
    amount_subunits: providerOrder?.amount || amount * 100,
    created_at: now()
  };
  payments.set(order.id, order);
  res.status(201).json({ ok: true, order });
});

app.post("/payments/verify", (req, res) => {
  const order = payments.get(req.body.order_id) || [...payments.values()].find((item) => item.provider_order_id === req.body.razorpay_order_id);
  if (!order) {
    res.status(404).json({ ok: false, error: "Payment order not found" });
    return;
  }
  if (order.provider === "razorpay") {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const expected = hmacSha256(`${razorpay_order_id}|${razorpay_payment_id}`, razorpayKeySecret);
    if (!razorpay_order_id || !razorpay_payment_id || expected !== razorpay_signature) {
      order.status = "verification_failed";
      payments.set(order.id, order);
      res.status(401).json({ ok: false, error: "Invalid Razorpay payment signature" });
      return;
    }
    order.status = "paid";
    order.provider_payment_id = razorpay_payment_id;
    order.provider_signature = razorpay_signature;
  } else {
    order.status = req.body.paymentStatus === "failure" ? "failed" : "paid";
    order.provider_payment_id = req.body.payment_id || id("pay");
  }
  order.payment_id = order.provider_payment_id;
  order.verified_at = now();
  payments.set(order.id, order);
  res.json({ ok: order.status === "paid", payment: order });
});

app.post("/payments/webhook/razorpay", (req, res) => {
  if (!razorpayWebhookSecret) {
    res.status(501).json({ ok: false, error: "Razorpay webhook secret is not configured" });
    return;
  }
  const signature = req.headers["x-razorpay-signature"];
  const expected = hmacSha256(req.rawBody || JSON.stringify(req.body), razorpayWebhookSecret);
  if (signature !== expected) {
    res.status(401).json({ ok: false, error: "Invalid webhook signature" });
    return;
  }
  const eventId = req.headers["x-razorpay-event-id"] || id("webhook");
  if (webhookEvents.has(eventId)) {
    res.json({ ok: true, duplicate: true });
    return;
  }
  webhookEvents.set(eventId, { id: eventId, event: req.body.event, received_at: now() });
  const entity = req.body.payload?.payment?.entity;
  if (entity?.order_id) {
    const order = [...payments.values()].find((item) => item.provider_order_id === entity.order_id);
    if (order) {
      order.status = entity.status === "captured" ? "paid" : entity.status;
      order.provider_payment_id = entity.id;
      order.webhook_at = now();
      payments.set(order.id, order);
    }
  }
  res.json({ ok: true });
});

app.get("/users/:userId/history", (req, res) => {
  const sessions = [...usageSessions.values()].filter((session) => session.user_id === req.params.userId);
  res.json({ ok: true, history: sessions.sort((a, b) => b.created_at.localeCompare(a.created_at)) });
});

app.get("/usage/:sessionId/report", (req, res) => {
  const session = usageSessions.get(req.params.sessionId);
  if (!session) {
    res.status(404).json({ ok: false, error: "Session not found" });
    return;
  }
  const machine = findMachine(session.machine_code);
  const report = session.sanitization_report || (machine ? buildSanitizationReport(machine, session, Boolean(session.completed_at)) : null);
  if (!report) {
    res.status(404).json({ ok: false, error: "Report source machine not found" });
    return;
  }
  res.json({ ok: true, session, machine: machine ? machinePayload(machine) : null, report });
});

app.get("/admin/dashboard", requireAdmin, (_req, res) => {
  const machineList = [...machines.values()];
  const usageList = [...usageSessions.values()];
  const today = new Date().toISOString().slice(0, 10);
  const todayUsage = usageList.filter((session) => session.created_at.startsWith(today));
  res.json({
    ok: true,
    dashboard: {
      total_machines: machineList.length,
      online_machines: machineList.filter((machine) => machine.is_online).length,
      offline_machines: machineList.filter((machine) => !machine.is_online).length,
      revenue: usageList.reduce((total, session) => total + Number(session.amount || 0), 0),
      today_usage: todayUsage.length,
      active_faults: [...faults.values()].filter((fault) => !fault.resolved).length
    }
  });
});

app.get("/admin/machines", requireAdmin, (_req, res) => {
  res.json({ ok: true, machines: [...machines.values()].map((machine) => machinePayload(machine, { includeSecrets: true })) });
});

app.get("/admin/usage", requireAdmin, (_req, res) => {
  res.json({ ok: true, usage: [...usageSessions.values()].sort((a, b) => b.created_at.localeCompare(a.created_at)) });
});

app.get("/admin/faults", requireAdmin, (_req, res) => {
  res.json({ ok: true, faults: [...faults.values()].sort((a, b) => b.created_at.localeCompare(a.created_at)) });
});

app.post("/admin/faults/:faultId/resolve", requireAdmin, (req, res) => {
  const fault = faults.get(req.params.faultId);
  if (!fault) {
    res.status(404).json({ ok: false, error: "Fault not found" });
    return;
  }
  fault.resolved = true;
  fault.resolved_at = now();
  fault.resolved_by = req.body.resolved_by || "admin";
  faults.set(fault.id, fault);
  const machine = findMachine(fault.machine_code);
  if (machine && machine.current_stage === "error") {
    updateMachine(machine, {
      current_stage: "idle",
      status: "available",
      cleaning_in_progress: false,
      blower_on: false,
      heater_on: false,
      uv_on: false,
      mist_on: false
    });
  }
  res.json({ ok: true, fault });
});

app.get("/admin/telemetry", requireAdmin, (req, res) => {
  const machine_code = req.query.machine_code;
  const limit = Math.min(Number(req.query.limit || 100), 500);
  const items = telemetryLogs
    .filter((item) => !machine_code || item.machine_code === machine_code)
    .slice(-limit)
    .reverse();
  res.json({ ok: true, telemetry: items });
});

app.post("/admin/simulators/:machineId/start", requireAdmin, requireMachine, (req, res) => {
  const machine = req.machine;
  const existing = simulatorTimers.get(machine.machine_code);
  if (existing) clearInterval(existing);
  let tick = 0;
  const timer = setInterval(() => {
    tick += 1;
    const latest = findMachine(machine.machine_code);
    if (!latest) return;
    const warm = latest.heater_on ? 7 : latest.blower_on ? 2 : -1;
    const mistUse = latest.mist_on ? 2 : 0.3;
    const next = updateMachine(latest, {
      is_online: true,
      last_heartbeat: now(),
      temperature: Math.max(25, Math.min(68, Math.round((latest.temperature + warm + Math.sin(tick / 2)) * 10) / 10)),
      mist_level: Math.max(0, Math.round((latest.mist_level - mistUse) * 10) / 10),
      door_closed: req.body.door_closed ?? true
    });
    recordTelemetry(safetyCheck(next), { source: "simulator" });
  }, Number(req.body.interval_ms || 1600));
  simulatorTimers.set(machine.machine_code, timer);
  res.json({ ok: true, machine: machinePayload(updateMachine(machine, { is_online: true, last_heartbeat: now() })) });
});

app.post("/admin/simulators/:machineId/stop", requireAdmin, requireMachine, (req, res) => {
  const timer = simulatorTimers.get(req.machine.machine_code);
  if (timer) clearInterval(timer);
  simulatorTimers.delete(req.machine.machine_code);
  res.json({ ok: true, machine: machinePayload(req.machine) });
});

app.post("/admin/simulators/:machineId/fault", requireAdmin, requireMachine, (req, res) => {
  const type = req.body.fault_type || "simulated_fault";
  const severity = req.body.severity || "warning";
  const fault = createFault(req.machine, type, severity, req.body.message || `Simulated ${severity} fault.`);
  if (severity === "critical") {
    updateMachine(req.machine, {
      current_stage: "error",
      status: "fault",
      cleaning_in_progress: false,
      blower_on: false,
      heater_on: false,
      uv_on: false,
      mist_on: false
    });
  }
  res.status(201).json({ ok: true, fault, machine: machinePayload(req.machine) });
});

app.post("/admin/ads", requireAdmin, (req, res) => {
  const ad = {
    id: id("ad"),
    title: req.body.title || "NEKTRON Ad",
    file_url: req.body.file_url || "",
    thumbnail_url: req.body.thumbnail_url || "",
    duration: req.body.duration || 15,
    status: req.body.status || "draft",
    created_at: now()
  };
  ads.set(ad.id, ad);
  res.status(201).json({ ok: true, ad });
});

app.get("/admin/ads", requireAdmin, (_req, res) => {
  res.json({ ok: true, ads: [...ads.values()], assignments: [...adAssignments.values()] });
});

app.post("/admin/ads/assign", requireAdmin, (req, res) => {
  const ad = ads.get(req.body.ad_id);
  const machine = findMachine(req.body.machine_id || req.body.machine_code);
  if (!ad || !machine) {
    res.status(404).json({ ok: false, error: "Ad or machine not found" });
    return;
  }
  const assignment = {
    id: id("assignment"),
    ad_id: ad.id,
    machine_id: machine.id,
    machine_code: machine.machine_code,
    schedule_start: req.body.schedule_start || now(),
    schedule_end: req.body.schedule_end || null,
    priority: req.body.priority || 1
  };
  adAssignments.set(assignment.id, assignment);
  res.status(201).json({ ok: true, assignment });
});

app.use((req, res) => {
  res.status(404).json({ ok: false, error: `Route not found: ${req.method} ${req.path}` });
});

async function start() {
  try {
    const restored = await initStorage();
    if (!restored) seed();
    ensureMachineSecrets();
    bootstrapping = false;
    await persistState();
    app.listen(PORT, () => {
      console.log(`NEKTRON backend listening on http://localhost:${PORT}`);
      console.log(`Storage mode: ${storageMode}`);
      console.log(`Payment mode: ${razorpayKeyId && razorpayKeySecret ? "razorpay" : "mock"}`);
      console.log(`Admin protection: ${adminProtectionEnabled() ? "enabled" : "disabled"}`);
    });
  } catch (error) {
    console.error("Failed to start NEKTRON backend:", error);
    process.exit(1);
  }
}

start();
