import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import {
  Box,
  Boxes,
  Cable,
  CircuitBoard,
  Cpu,
  Download,
  Eye,
  FileText,
  Gauge,
  Layers3,
  Maximize2,
  Move3D,
  PlayCircle,
  RotateCw,
  Ruler,
  ScanSearch,
  SquareDashedMousePointer
} from "lucide-react";

const stageLabels = {
  idle: "Idle QR display",
  starting: "Door lock and safety check",
  air_cleaning: "Blower airflow cleaning",
  uv_sanitizing: "UV tube sanitization",
  mist_deodorizing: "Mist deodorizer pulse",
  drying: "PTC heater + blower drying",
  done: "Cycle complete",
  error: "Fault state"
};

const demoScenes = [
  {
    id: "customer",
    label: "Customer View",
    mode: "external",
    camera: "front",
    stage: "idle",
    selected: "display",
    title: "Customer payment face",
    detail: "QR display, ad screen, status lights, safety button, and branded kiosk body."
  },
  {
    id: "open",
    label: "Internal View",
    mode: "backOpen",
    camera: "backOpen",
    stage: "starting",
    selected: "body",
    title: "Open view internal",
    detail: "Large glass door, fan module, helmet, UV bars, bottles, pump, power supply, and wiring harness."
  },
  {
    id: "cycle",
    label: "Cleaning Cycle",
    mode: "backOpen",
    camera: "backOpen",
    stage: "uv_sanitizing",
    selected: "uv",
    title: "3 minute cleaning sequence",
    detail: "Fans spin, UV bars pulse, mist particles move, and heat/airflow effects show the process."
  },
  {
    id: "service",
    label: "Service View",
    mode: "backOpen",
    camera: "service",
    stage: "mist_deodorizing",
    selected: "service",
    title: "Maintainable lower bay",
    detail: "Refill bottles, pump, AC/DC supply, ESP32, relay module, cable glands, and service tray are visible."
  },
  {
    id: "wiring",
    label: "Wiring Proof",
    mode: "circuit",
    camera: "service",
    stage: "drying",
    selected: "wiring",
    title: "Relay and sensor map",
    detail: "Color-coded wires explain blower, heater, UV, mist, LEDs, door interlock, and liquid sensing."
  }
];

const componentCatalog = {
  body: {
    number: "01",
    title: "Body shell",
    detail: "Matte black compact cabinet with red LED perimeter and rounded kiosk face.",
    placement: "Outer structural enclosure around the chamber and service bay.",
    wiring: "Grounded metal body, separated low-voltage LED wiring channel.",
    pins: "LED frame GPIO 33 through MOSFET/driver",
    preview: "body"
  },
  display: {
    number: "02",
    title: "Front display",
    detail: "10.1 inch front screen for ads, QR prompt, price, timer, and process status.",
    placement: "Upper front panel, above the helmet chamber.",
    wiring: "Powered from regulated DC rail; data from media controller/backend player.",
    pins: "Display controller / HDMI or serial media board",
    preview: "display"
  },
  status: {
    number: "03",
    title: "QR/status strip",
    detail: "Scan QR, Pay & Start, Helmet Cleaning, and Done indicator stack.",
    placement: "Right side of the front panel for quick process visibility.",
    wiring: "Low-voltage LED indicators from ESP32 output driver.",
    pins: "Status LEDs mapped beside GPIO 33 frame output",
    preview: "status"
  },
  chamber: {
    number: "04",
    title: "Glass chamber",
    detail: "Transparent red-lit helmet chamber door with side handle and hinge blocks.",
    placement: "Front center, sealed from the lower electronics bay.",
    wiring: "Door interlock enters ESP32 safety input before UV/heater can start.",
    pins: "Door sensor GPIO 32",
    preview: "chamber"
  },
  stand: {
    number: "05",
    title: "Helmet stand",
    detail: "Central post and support plate positions one helmet inside the cleaning airflow.",
    placement: "Center of chamber floor, below UV tubes and mist nozzle.",
    wiring: "Passive mechanical part; no direct wiring.",
    pins: "Mechanical assembly",
    preview: "stand"
  },
  blower: {
    number: "06",
    title: "Dual fan blower",
    detail: "Rear/top fan module pushes air around helmet shell for cleaning and drying.",
    placement: "Upper rear of cleaning chamber with duct opening into the cabin.",
    wiring: "Relay/SSR switched AC/DC fan line with current sensor planned later.",
    pins: "Blower relay GPIO 14",
    preview: "fan"
  },
  heater: {
    number: "07",
    title: "PTC heater block",
    detail: "Hot-air drying element placed after the fan path.",
    placement: "Upper chamber air path, isolated from direct helmet contact.",
    wiring: "SSR controlled heater line, disabled on over-temperature.",
    pins: "Heater relay GPIO 27, temperature GPIO 4",
    preview: "heater"
  },
  uv: {
    number: "08",
    title: "UV tubes",
    detail: "Vertical UV-C bars on both chamber sides for sanitization exposure.",
    placement: "Left and right inside chamber walls behind the glass door.",
    wiring: "Relay-switched UV ballast/driver with door interlock safety.",
    pins: "UV relay GPIO 26",
    preview: "uv"
  },
  mist: {
    number: "09",
    title: "Mist nozzle",
    detail: "High-pressure deodorizer mist outlet aimed across the helmet surface.",
    placement: "Top-center chamber roof, angled into the helmet volume.",
    wiring: "Mist maker/pump relay, blocked when liquid sensor reports empty.",
    pins: "Mist relay GPIO 25, liquid sensor GPIO 35",
    preview: "mist"
  },
  service: {
    number: "10",
    title: "Service bay",
    detail: "ESP32, relay board, power supply, fan access, and mist/chemical bottles.",
    placement: "Bottom electronics/service section behind maintenance panel.",
    wiring: "Main harness origin: AC in, DC supply, ESP32, relay board, sensors, loads.",
    pins: "ESP32 control board and relay outputs",
    preview: "service"
  },
  wiring: {
    number: "11",
    title: "Circuit wiring harness",
    detail: "Color-coded routed wires from service bay to blower, heater, UV, mist, LEDs, sensors.",
    placement: "Side channel and rear path, away from wet mist zone and service access.",
    wiring: "Red power, yellow signal, cyan sensor, purple UV, orange heater, blue blower.",
    pins: "GPIO 14, 27, 26, 25, 33, 32, 4, 35",
    preview: "wiring"
  }
};

function makeLabel(text, color = "#ffffff") {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(5, 5, 5, 0.72)";
  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  ctx.roundRect(8, 18, 496, 86, 18);
  ctx.fill();
  ctx.stroke();
  ctx.font = "700 34px Inter, Arial, sans-serif";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 256, 64);

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(0.48, 0.12, 1);
  return sprite;
}

function addBox(group, name, size, position, material, extras = {}) {
  const geometry = extras.rounded
    ? new RoundedBoxGeometry(size[0], size[1], size[2], extras.segments || 5, extras.radius || 0.05)
    : new THREE.BoxGeometry(...size);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = name;
  mesh.userData.componentKey = extras.componentKey;
  mesh.position.set(...position);
  if (extras.rotation) mesh.rotation.set(...extras.rotation);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  group.add(mesh);
  if (extras.label) {
    const label = makeLabel(extras.label, extras.color || "#ffffff");
    label.userData.componentKey = extras.componentKey;
    label.userData.isPartLabel = true;
    label.position.set(position[0] + (extras.labelOffset?.[0] || 0), position[1] + (extras.labelOffset?.[1] || 0), position[2] + (extras.labelOffset?.[2] || 0));
    group.add(label);
  }
  return mesh;
}

function addBrandPlate(group, text, position, scale, color = "#ffffff", componentKey = "body") {
  const plate = makeLabel(text, color);
  plate.name = `${text} decal`;
  plate.userData.componentKey = componentKey;
  plate.position.set(...position);
  plate.scale.set(...scale, 1);
  group.add(plate);
  return plate;
}

function addVentPattern(group, origin, rows, cols, spacing, material, componentKey = "body") {
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      addBox(group, `punched side vent ${row + 1}-${col + 1}`, [0.036, 0.014, 0.014], [
        origin[0],
        origin[1] + col * spacing[0],
        origin[2] - row * spacing[1]
      ], material, { componentKey });
    }
  }
}

function addBoltPattern(group, name, positions, material, componentKey = "body") {
  positions.forEach((position, index) => {
    addCylinder(group, `${name} bolt ${index + 1}`, 0.018, 0.014, position, material, [Math.PI / 2, 0, 0], { componentKey });
  });
}

function addCylinder(group, name, radius, depth, position, material, rotation = [0, 0, 0], extras = {}) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, depth, 48), material);
  mesh.name = name;
  mesh.userData.componentKey = extras.componentKey;
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  group.add(mesh);
  if (extras.label) {
    const label = makeLabel(extras.label, extras.color || "#ffffff");
    label.userData.componentKey = extras.componentKey;
    label.userData.isPartLabel = true;
    label.position.set(position[0] + (extras.labelOffset?.[0] || 0), position[1] + (extras.labelOffset?.[1] || 0), position[2] + (extras.labelOffset?.[2] || 0));
    group.add(label);
  }
  return mesh;
}

function addTorus(group, name, radius, tube, position, material, rotation = [0, 0, 0], extras = {}) {
  const mesh = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, 12, 72), material);
  mesh.name = name;
  mesh.userData.componentKey = extras.componentKey;
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  group.add(mesh);
  return mesh;
}

function addWire(group, name, points, material, componentKey = "wiring") {
  const curve = new THREE.CatmullRomCurve3(points.map(([x, y, z]) => new THREE.Vector3(x, y, z)));
  const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 36, 0.012, 10, false), material);
  mesh.name = name;
  mesh.userData.componentKey = componentKey;
  group.add(mesh);
  return mesh;
}

function addWireTag(group, text, position, color = "#facc15") {
  const tag = makeLabel(text, color);
  tag.name = `wire tag ${text}`;
  tag.userData.componentKey = "wiring";
  tag.userData.isPartLabel = true;
  tag.position.set(...position);
  tag.scale.set(0.36, 0.09, 1);
  group.add(tag);
  return tag;
}

function addEngravedTag(group, text, position, size, material, componentKey = "body") {
  const plate = addBox(group, `${text} engraved equipment tag`, size, position, material, {
    rounded: true,
    radius: Math.min(size[0], size[2]) * 0.12,
    segments: 4,
    componentKey
  });
  plate.userData.isEngravedTag = true;
  return plate;
}

function addCableClips(group, points, material, componentKey = "wiring") {
  points.forEach((point, index) => {
    addBox(group, `snap cable clip ${index + 1}`, [0.09, 0.035, 0.035], point, material, {
      rounded: true,
      radius: 0.01,
      componentKey
    });
  });
}

function addHelmetDetailSet(group, materials, prefix, centerY) {
  addBox(group, `${prefix} brow vent intake`, [0.34, 0.035, 0.045], [0, centerY - 0.34, 2.84], materials.satinEdge, {
    rounded: true,
    radius: 0.018,
    componentKey: "stand"
  });
  [-0.2, 0, 0.2].forEach((x, index) => {
    addBox(group, `${prefix} top shell vent slot ${index + 1}`, [0.09, 0.026, 0.035], [x, centerY - 0.22, 3.05], materials.rubber, {
      rounded: true,
      radius: 0.014,
      componentKey: "stand"
    });
  });
  [-0.44, 0.44].forEach((x, index) => {
    addCylinder(group, `${prefix} visor hinge pivot ${index + 1}`, 0.055, 0.038, [x, centerY - 0.38, 2.67], materials.metal, [Math.PI / 2, 0, 0], { componentKey: "stand" });
    addBox(group, `${prefix} cheek padding insert ${index + 1}`, [0.11, 0.04, 0.2], [x * 0.72, centerY - 0.44, 2.44], materials.rubber, {
      rounded: true,
      radius: 0.025,
      componentKey: "stand"
    });
  });
}

function makeScreenTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 768;
  canvas.height = 432;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#090b12");
  gradient.addColorStop(1, "#010103");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#ef233c";
  ctx.lineWidth = 6;
  ctx.strokeRect(18, 18, canvas.width - 36, canvas.height - 36);
  ctx.fillStyle = "#ffffff";
  ctx.font = "700 54px Inter, Arial, sans-serif";
  ctx.fillText("Helmet Cleaning", 60, 105);
  ctx.fillText("in 3 Minutes", 60, 165);
  ctx.fillStyle = "#ef233c";
  ctx.font = "900 76px Inter, Arial, sans-serif";
  ctx.fillText("₹49", 60, 255);
  ctx.fillStyle = "#d4d4d8";
  ctx.font = "600 25px Inter, Arial, sans-serif";
  ctx.fillText("Scan QR to start", 60, 315);
  ctx.strokeStyle = "#9ca3af";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(575, 205, 95, 62, -0.25, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(502, 210);
  ctx.quadraticCurveTo(574, 120, 668, 188);
  ctx.quadraticCurveTo(646, 292, 523, 266);
  ctx.stroke();
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(610, 285, 62, 62);
  ctx.fillStyle = "#111";
  for (let x = 0; x < 5; x += 1) {
    for (let y = 0; y < 5; y += 1) {
      if ((x + y) % 2 === 0 || x === 0 || y === 4) ctx.fillRect(616 + x * 11, 291 + y * 11, 8, 8);
    }
  }
  return new THREE.CanvasTexture(canvas);
}

function makeCircularDisplayTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#050505";
  ctx.fillRect(0, 0, 512, 512);
  ctx.strokeStyle = "#ef233c";
  ctx.lineWidth = 18;
  ctx.beginPath();
  ctx.arc(256, 256, 220, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(178, 168, 156, 156);
  ctx.fillStyle = "#111";
  for (let x = 0; x < 9; x += 1) {
    for (let y = 0; y < 9; y += 1) {
      if ((x * 3 + y * 5) % 4 < 2) ctx.fillRect(190 + x * 16, 180 + y * 16, 11, 11);
    }
  }
  ctx.fillStyle = "#f8fafc";
  ctx.font = "800 38px Inter, Arial";
  ctx.textAlign = "center";
  ctx.fillText("SCAN", 256, 370);
  ctx.fillText("NEK-001", 256, 414);
  return new THREE.CanvasTexture(canvas);
}

function addFanAssembly(group, center, radius, material, componentKey) {
  addCylinder(group, "fan outer guard ring", radius, 0.025, center, material, [Math.PI / 2, 0, 0], { componentKey });
  addCylinder(group, "fan central hub", radius * 0.28, 0.04, [center[0], center[1] - 0.02, center[2]], material, [Math.PI / 2, 0, 0], { componentKey });
  for (let i = 0; i < 5; i += 1) {
    const blade = addBox(group, `fan curved blade ${i + 1}`, [radius * 0.82, 0.018, radius * 0.16], [center[0], center[1] - 0.034, center[2]], material, { componentKey });
    blade.rotation.y = (Math.PI * 2 * i) / 5 + 0.32;
  }
  for (let i = 0; i < 4; i += 1) {
    const screw = addCylinder(group, `fan guard screw ${i + 1}`, 0.014, 0.018, [
      center[0] + Math.cos((Math.PI * 2 * i) / 4) * radius * 0.74,
      center[1] - 0.046,
      center[2] + Math.sin((Math.PI * 2 * i) / 4) * radius * 0.74
    ], material, [Math.PI / 2, 0, 0], { componentKey });
    screw.scale.z = 0.5;
  }
}

function addFrontFanGrille(group, center, radius, materials, componentKey) {
  const grilleMaterial = materials.metal;
  addBox(group, "square fan housing with rounded corners", [radius * 2.25, 0.05, radius * 2.25], center, materials.duct, {
    rounded: true,
    radius: 0.035,
    segments: 5,
    componentKey
  });
  [0.98, 0.72, 0.46].forEach((scale, index) => {
    addTorus(group, `concentric circular fan guard ${index + 1}`, radius * scale, 0.008, [center[0], center[1] - 0.04, center[2]], grilleMaterial, [Math.PI / 2, 0, 0], { componentKey });
  });
  addCylinder(group, "front fan center cap", radius * 0.23, 0.04, [center[0], center[1] - 0.055, center[2]], materials.satinEdge, [Math.PI / 2, 0, 0], { componentKey });
  for (let i = 0; i < 8; i += 1) {
    const spoke = addBox(group, `radial fan guard spoke ${i + 1}`, [radius * 1.72, 0.018, 0.014], [center[0], center[1] - 0.062, center[2]], grilleMaterial, { componentKey });
    spoke.rotation.y = (Math.PI * 2 * i) / 8;
  }
  for (let i = 0; i < 5; i += 1) {
    const blade = addBox(group, `dark fan blade behind grille ${i + 1}`, [radius * 0.72, 0.016, radius * 0.16], [center[0], center[1] - 0.08, center[2]], materials.rubber, { componentKey });
    blade.rotation.y = (Math.PI * 2 * i) / 5 + 0.35;
  }
}

function addRearFanFace(group, center, radius, materials, componentKey) {
  addCylinder(group, "rear visible fan guard disc", radius, 0.035, center, materials.rubber, [0, 0, 0], { componentKey });
  addCylinder(group, "rear visible fan hub", radius * 0.25, 0.045, [center[0], center[1] + 0.03, center[2]], materials.metal, [0, 0, 0], { componentKey });
  for (let i = 0; i < 5; i += 1) {
    const blade = addBox(group, `rear visible fan blade ${i + 1}`, [radius * 0.72, 0.025, radius * 0.14], [center[0], center[1] + 0.05, center[2]], materials.satinEdge, { componentKey });
    blade.rotation.y = (Math.PI * 2 * i) / 5;
  }
  addCylinder(group, "rear visible fan chrome rim", radius * 1.08, 0.018, [center[0], center[1] + 0.06, center[2]], materials.metal, [0, 0, 0], { componentKey });
}

function addLcdScreen(group, materials) {
  addBox(group, "real LCD metal bezel", [1.3, 0.075, 0.54], [-0.14, -0.505, 4.04], materials.rubber, {
    rounded: true,
    radius: 0.04,
    segments: 6,
    componentKey: "display"
  });
  const screenMaterial = new THREE.MeshStandardMaterial({
    map: makeScreenTexture(),
    color: "#ffffff",
    emissive: "#ffffff",
    emissiveMap: makeScreenTexture(),
    emissiveIntensity: 0.55,
    roughness: 0.18
  });
  addBox(group, "real 10.1 inch LCD screen with UI", [1.14, 0.035, 0.4], [-0.14, -0.55, 4.04], screenMaterial, {
    rounded: true,
    radius: 0.025,
    segments: 5,
    label: "10.1 inch LCD",
    color: "#fecdd3",
    labelOffset: [0, -0.2, 0.36],
    componentKey: "display"
  });
  addBox(group, "LCD driver board behind screen", [0.46, 0.05, 0.18], [-0.14, -0.25, 4.04], materials.board, { componentKey: "display" });
}

function addCircularDisplay(group, materials) {
  addCylinder(group, "circular display black bezel", 0.24, 0.08, [0.62, -0.515, 4.04], materials.rubber, [Math.PI / 2, 0, 0], { componentKey: "display" });
  const circularMaterial = new THREE.MeshStandardMaterial({
    map: makeCircularDisplayTexture(),
    color: "#ffffff",
    emissive: "#ffffff",
    emissiveMap: makeCircularDisplayTexture(),
    emissiveIntensity: 0.7,
    roughness: 0.12
  });
  addCylinder(group, "real circular QR status display glass", 0.19, 0.035, [0.62, -0.565, 4.04], circularMaterial, [Math.PI / 2, 0, 0], {
    label: "Circular QR display",
    color: "#fecdd3",
    labelOffset: [0.5, -0.08, 0.18],
    componentKey: "display"
  });
}

function addTerminalStrip(group, origin, count, material, componentKey) {
  for (let i = 0; i < count; i += 1) {
    addBox(group, `relay terminal block ${i + 1}`, [0.07, 0.055, 0.035], [origin[0] + i * 0.082, origin[1], origin[2]], material, { componentKey });
    addCylinder(group, `terminal screw ${i + 1}`, 0.012, 0.012, [origin[0] + i * 0.082, origin[1] - 0.035, origin[2] + 0.004], material, [Math.PI / 2, 0, 0], { componentKey });
  }
}

function createMachine(scene) {
  const root = new THREE.Group();
  root.name = "NEKTRON engineering machine";
  root.scale.setScalar(0.78);
  root.position.z = 1.65;
  scene.add(root);

  const materials = {
    body: new THREE.MeshStandardMaterial({ color: "#25272e", metalness: 0.38, roughness: 0.4 }),
    face: new THREE.MeshStandardMaterial({ color: "#1b1d23", metalness: 0.2, roughness: 0.3 }),
    satinEdge: new THREE.MeshStandardMaterial({ color: "#4c5562", metalness: 0.42, roughness: 0.3 }),
    innerBody: new THREE.MeshStandardMaterial({ color: "#4a535f", metalness: 0.12, roughness: 0.5 }),
    glass: new THREE.MeshPhysicalMaterial({ color: "#9bdcff", transparent: true, opacity: 0.22, roughness: 0.04, transmission: 0.45 }),
    led: new THREE.MeshStandardMaterial({ color: "#ff1f3d", emissive: "#ff1238", emissiveIntensity: 2.3 }),
    screen: new THREE.MeshStandardMaterial({ color: "#151b24", metalness: 0.08, roughness: 0.2 }),
    uv: new THREE.MeshStandardMaterial({ color: "#9567ff", emissive: "#8b5cf6", emissiveIntensity: 1.5 }),
    air: new THREE.MeshStandardMaterial({ color: "#5ad7ff", emissive: "#38bdf8", emissiveIntensity: 1.1, transparent: true, opacity: 0.78 }),
    mist: new THREE.MeshStandardMaterial({ color: "#d8fbff", emissive: "#a5f3fc", emissiveIntensity: 1, transparent: true, opacity: 0.55 }),
    heat: new THREE.MeshStandardMaterial({ color: "#ff6b35", emissive: "#ff4d00", emissiveIntensity: 1.2 }),
    metal: new THREE.MeshStandardMaterial({ color: "#6b7280", metalness: 0.65, roughness: 0.24 }),
    wirePower: new THREE.MeshStandardMaterial({ color: "#ef233c", emissive: "#ef233c", emissiveIntensity: 0.65 }),
    wireSignal: new THREE.MeshStandardMaterial({ color: "#facc15", emissive: "#f59e0b", emissiveIntensity: 0.45 }),
    wireSensor: new THREE.MeshStandardMaterial({ color: "#38bdf8", emissive: "#38bdf8", emissiveIntensity: 0.55 }),
    wireUv: new THREE.MeshStandardMaterial({ color: "#a78bfa", emissive: "#8b5cf6", emissiveIntensity: 0.55 }),
    wireHeat: new THREE.MeshStandardMaterial({ color: "#fb923c", emissive: "#f97316", emissiveIntensity: 0.55 }),
    board: new THREE.MeshStandardMaterial({ color: "#0f7a47", metalness: 0.08, roughness: 0.42 }),
    terminal: new THREE.MeshStandardMaterial({ color: "#f59e0b", metalness: 0.2, roughness: 0.3 }),
    rubber: new THREE.MeshStandardMaterial({ color: "#0b0c10", metalness: 0.04, roughness: 0.82 }),
    duct: new THREE.MeshStandardMaterial({ color: "#596371", metalness: 0.28, roughness: 0.38 }),
    copper: new THREE.MeshStandardMaterial({ color: "#b45309", metalness: 0.6, roughness: 0.22 }),
    warning: new THREE.MeshStandardMaterial({ color: "#facc15", emissive: "#f59e0b", emissiveIntensity: 0.4, roughness: 0.28 }),
    blueSeal: new THREE.MeshStandardMaterial({ color: "#2563eb", metalness: 0.18, roughness: 0.36 }),
    translucentRed: new THREE.MeshPhysicalMaterial({ color: "#ef233c", transparent: true, opacity: 0.34, roughness: 0.08, transmission: 0.18 }),
    helmetShell: new THREE.MeshStandardMaterial({ color: "#11131a", metalness: 0.32, roughness: 0.24 }),
    visorGlass: new THREE.MeshPhysicalMaterial({ color: "#111827", transparent: true, opacity: 0.72, roughness: 0.02, transmission: 0.12 })
  };

  const exterior = new THREE.Group();
  exterior.name = "External body shell";
  const internal = new THREE.Group();
  internal.name = "Internal cleaning system";
  const airflow = new THREE.Group();
  airflow.name = "Animated airflow and mist";
  const wiring = new THREE.Group();
  wiring.name = "Circuit wiring harness";
  root.add(exterior, internal, airflow, wiring);

  addBox(exterior, "wide weighted base plinth with bevel", [2.42, 1.12, 0.24], [0, 0.02, 0.13], materials.body, {
    rounded: true,
    radius: 0.08,
    segments: 8,
    componentKey: "body"
  });
  addBox(exterior, "raised machine foot pad", [2.02, 0.78, 0.12], [0, 0.01, 0.33], materials.satinEdge, {
    rounded: true,
    radius: 0.045,
    segments: 6,
    componentKey: "body"
  });
  [[-0.82, -0.34], [0.82, -0.34], [-0.82, 0.36], [0.82, 0.36]].forEach(([x, y], index) => {
    addCylinder(exterior, `adjustable leveling foot ${index + 1}`, 0.085, 0.08, [x, y, -0.02], materials.rubber, [0, 0, 0], { componentKey: "body" });
    addCylinder(exterior, `stainless leveling foot washer ${index + 1}`, 0.105, 0.018, [x, y, 0.04], materials.metal, [0, 0, 0], { componentKey: "body" });
  });
  addBox(exterior, "front anti-slip base tread", [1.18, 0.06, 0.035], [0, -0.57, 0.24], materials.rubber, { rounded: true, radius: 0.018, componentKey: "body" });
  addEngravedTag(exterior, "serial NEK-001", [-0.52, -0.57, 0.42], [0.34, 0.026, 0.08], materials.metal, "body");
  addEngravedTag(exterior, "warning UV interlock", [0.52, -0.57, 0.42], [0.38, 0.026, 0.08], materials.warning, "chamber");
  addBoltPattern(exterior, "base plinth", [[-0.86, -0.5, 0.28], [0.86, -0.5, 0.28], [-0.86, 0.5, 0.28], [0.86, 0.5, 0.28]], materials.metal, "body");
  addBox(exterior, "matte black rounded kiosk body 1020x600x430", [2.0, 0.72, 4.2], [0, 0, 2.55], materials.body, {
    rounded: true,
    radius: 0.11,
    segments: 10,
    label: "Matte black outer body",
    color: "#fda4af",
    labelOffset: [0, -0.85, 2.1],
    componentKey: "body"
  });
  addBox(exterior, "glossy front inset face panel", [1.78, 0.045, 3.84], [0, -0.385, 2.63], materials.face, {
    rounded: true,
    radius: 0.095,
    segments: 8,
    componentKey: "body"
  });
  addBox(exterior, "top rounded cap seam", [1.86, 0.08, 0.12], [0, -0.36, 4.92], materials.satinEdge, {
    rounded: true,
    radius: 0.055,
    segments: 6,
    componentKey: "body"
  });
  addBrandPlate(exterior, "NEKTRON", [0, -0.43, 4.62], [0.72, 0.16], "#ffffff", "body");
  addBrandPlate(exterior, "POWERED BY LAILA", [0, -0.43, 4.42], [0.45, 0.09], "#fecdd3", "body");
  addBox(exterior, "thick red acrylic chamber frame", [1.62, 0.08, 1.96], [0, -0.36, 2.72], materials.led, {
    rounded: true,
    radius: 0.08,
    segments: 8,
    componentKey: "chamber"
  });
  addBox(exterior, "black chamber frame cutout face", [1.5, 0.09, 1.82], [0, -0.39, 2.72], materials.rubber, {
    rounded: true,
    radius: 0.07,
    segments: 8,
    componentKey: "chamber"
  });
  addBox(exterior, "transparent acrylic chamber door", [1.42, 0.06, 1.72], [0, -0.44, 2.72], materials.glass.clone(), {
    rounded: true,
    radius: 0.065,
    segments: 8,
    label: "Glass chamber door",
    color: "#bae6fd",
    labelOffset: [0.9, -0.3, 0.2],
    componentKey: "chamber"
  });
  addBox(exterior, "rubber door gasket top", [1.48, 0.035, 0.055], [0, -0.47, 3.61], materials.rubber, { rounded: true, radius: 0.02, componentKey: "chamber" });
  addBox(exterior, "rubber door gasket bottom", [1.48, 0.035, 0.055], [0, -0.47, 1.83], materials.rubber, { rounded: true, radius: 0.02, componentKey: "chamber" });
  addBox(exterior, "rubber door gasket left", [0.055, 0.035, 1.78], [-0.74, -0.47, 2.72], materials.rubber, { rounded: true, radius: 0.02, componentKey: "chamber" });
  addBox(exterior, "rubber door gasket right", [0.055, 0.035, 1.78], [0.74, -0.47, 2.72], materials.rubber, { rounded: true, radius: 0.02, componentKey: "chamber" });
  const openDoor = new THREE.Group();
  openDoor.name = "left hinged open chamber door assembly";
  openDoor.userData.componentKey = "chamber";
  exterior.add(openDoor);
  addBox(openDoor, "open helmet chamber door thick dark inner panel", [0.92, 0.085, 2.28], [-1.36, -0.52, 2.62], materials.rubber, {
    rounded: true,
    radius: 0.09,
    segments: 8,
    componentKey: "chamber"
  });
  addBox(openDoor, "open helmet chamber door thick silver rounded frame", [1.02, 0.105, 2.46], [-1.36, -0.515, 2.62], materials.metal, {
    rounded: true,
    radius: 0.115,
    segments: 8,
    componentKey: "chamber"
  });
  addBox(openDoor, "open helmet chamber door smoked glass panel", [0.8, 0.115, 2.08], [-1.36, -0.59, 2.62], materials.glass.clone(), {
    rounded: true,
    radius: 0.085,
    segments: 8,
    componentKey: "chamber"
  });
  addBox(openDoor, "open door inner rubber gasket top", [0.76, 0.04, 0.045], [-1.36, -0.65, 3.62], materials.rubber, { rounded: true, radius: 0.014, componentKey: "chamber" });
  addBox(openDoor, "open door inner rubber gasket bottom", [0.76, 0.04, 0.045], [-1.36, -0.65, 1.62], materials.rubber, { rounded: true, radius: 0.014, componentKey: "chamber" });
  addEngravedTag(openDoor, "tempered glass", [-1.36, -0.665, 3.42], [0.42, 0.024, 0.06], materials.satinEdge, "chamber");
  addEngravedTag(openDoor, "magnetic seal", [-1.36, -0.665, 1.82], [0.36, 0.024, 0.06], materials.satinEdge, "chamber");
  addCylinder(openDoor, "open helmet door long vertical pull handle", 0.04, 0.98, [-1.94, -0.66, 2.54], materials.metal, [0, 0, 0], { componentKey: "chamber" });
  addBox(openDoor, "open door upper handle standoff", [0.1, 0.12, 0.14], [-1.9, -0.61, 3.02], materials.metal, { rounded: true, radius: 0.034, componentKey: "chamber" });
  addBox(openDoor, "open door lower handle standoff", [0.1, 0.12, 0.14], [-1.9, -0.61, 2.06], materials.metal, { rounded: true, radius: 0.034, componentKey: "chamber" });
  openDoor.visible = false;
  addLcdScreen(exterior, materials);
  addCircularDisplay(exterior, materials);
  addBox(exterior, "right process status strip", [0.28, 0.085, 1.42], [0.74, -0.455, 3.25], materials.screen, {
    rounded: true,
    radius: 0.055,
    segments: 6,
    label: "Scan / Pay / Clean / Done strip",
    color: "#fecdd3",
    labelOffset: [0.58, -0.18, 0.22],
    componentKey: "status"
  });
  addBox(exterior, "recessed QR scanner lens housing", [0.18, 0.065, 0.18], [0.74, -0.508, 3.76], materials.rubber, {
    rounded: true,
    radius: 0.025,
    segments: 5,
    componentKey: "status"
  });
  addBox(exterior, "gloss scanner camera glass", [0.11, 0.022, 0.11], [0.74, -0.55, 3.76], materials.glass.clone(), {
    rounded: true,
    radius: 0.016,
    segments: 5,
    componentKey: "status"
  });
  addBox(exterior, "UPI NFC reader contact plate", [0.19, 0.03, 0.12], [0.74, -0.555, 3.57], materials.blueSeal, {
    rounded: true,
    radius: 0.018,
    segments: 5,
    componentKey: "status"
  });
  addCylinder(exterior, "emergency stop red mushroom button", 0.075, 0.055, [0.74, -0.55, 2.48], materials.translucentRed, [Math.PI / 2, 0, 0], { componentKey: "status" });
  addBox(exterior, "laser etched safety label", [0.34, 0.026, 0.12], [-0.46, -0.545, 1.55], materials.warning, {
    rounded: true,
    radius: 0.014,
    segments: 4,
    componentKey: "chamber"
  });
  addCylinder(exterior, "pay and start red lamp", 0.055, 0.035, [0.74, -0.52, 3.42], materials.led, [Math.PI / 2, 0, 0], { componentKey: "status" });
  addCylinder(exterior, "helmet cleaning red lamp", 0.055, 0.035, [0.74, -0.52, 3.08], materials.led, [Math.PI / 2, 0, 0], { componentKey: "status" });
  addCylinder(exterior, "done green lamp", 0.055, 0.035, [0.74, -0.52, 2.73], new THREE.MeshStandardMaterial({ color: "#22c55e", emissive: "#22c55e", emissiveIntensity: 2 }), [Math.PI / 2, 0, 0], { componentKey: "status" });
  addBox(exterior, "rounded tubular door handle left standoff", [0.09, 0.1, 0.12], [-0.83, -0.52, 2.9], materials.metal, { rounded: true, radius: 0.035, componentKey: "chamber" });
  addBox(exterior, "rounded tubular door handle right standoff", [0.09, 0.1, 0.12], [-0.83, -0.52, 2.36], materials.metal, { rounded: true, radius: 0.035, componentKey: "chamber" });
  addCylinder(exterior, "curved vertical door pull handle", 0.035, 0.58, [-0.86, -0.56, 2.63], materials.metal, [0, 0, 0], { componentKey: "chamber" });
  addBox(exterior, "upper chamber hinge block with pins", [0.1, 0.14, 0.3], [0.82, -0.51, 3.08], materials.metal, { rounded: true, radius: 0.022, componentKey: "chamber" });
  addBox(exterior, "lower chamber hinge block with pins", [0.1, 0.14, 0.3], [0.82, -0.51, 2.32], materials.metal, { rounded: true, radius: 0.022, componentKey: "chamber" });
  addBox(exterior, "right side upper recessed vent panel", [0.04, 0.42, 0.66], [1.03, 0.03, 4.0], materials.satinEdge, { rounded: true, radius: 0.03, componentKey: "body" });
  addBox(exterior, "right side lower recessed vent panel", [0.04, 0.42, 0.52], [1.03, 0.03, 1.0], materials.satinEdge, { rounded: true, radius: 0.03, componentKey: "body" });
  addVentPattern(exterior, [1.058, -0.13, 4.2], 6, 7, [0.048, 0.07], materials.rubber, "body");
  addVentPattern(exterior, [1.058, -0.13, 1.16], 5, 7, [0.048, 0.07], materials.rubber, "body");
  addBox(exterior, "removable rear back sheet service door", [1.62, 0.06, 3.58], [0, 0.405, 2.68], materials.satinEdge, {
    rounded: true,
    radius: 0.075,
    segments: 8,
    label: "Removable back sheet",
    color: "#fecdd3",
    labelOffset: [0, 0.28, 1.92],
    componentKey: "body"
  });
  addBox(exterior, "rear upper ventilation grille panel", [0.78, 0.045, 0.46], [0, 0.448, 4.1], materials.rubber, {
    rounded: true,
    radius: 0.035,
    componentKey: "body"
  });
  addVentPattern(exterior, [-0.33, 0.482, 4.22], 5, 12, [0.06, 0.06], materials.satinEdge, "body");
  addCylinder(exterior, "rear service exhaust fan guard", 0.22, 0.04, [0, 0.458, 1.72], materials.rubber, [Math.PI / 2, 0, 0], { componentKey: "body" });
  addFanAssembly(exterior, [0, 0.49, 1.72], 0.16, materials.satinEdge, "body");
  addBox(exterior, "rear AC inlet socket", [0.18, 0.035, 0.12], [-0.48, 0.46, 0.74], materials.rubber, { rounded: true, radius: 0.018, componentKey: "service" });
  addBox(exterior, "rear master rocker switch", [0.14, 0.035, 0.1], [0.48, 0.46, 0.74], materials.led, { rounded: true, radius: 0.018, componentKey: "service" });
  [-0.68, 0.68].forEach((x) => {
    [0.98, 4.36].forEach((z) => addCylinder(exterior, "rear panel captive screw", 0.026, 0.018, [x, 0.462, z], materials.metal, [Math.PI / 2, 0, 0], { componentKey: "body" }));
  });

  addBox(exterior, "left red LED frame", [0.052, 0.07, 3.88], [-0.86, -0.47, 2.62], materials.led, { rounded: true, radius: 0.026, componentKey: "body" });
  addBox(exterior, "right red LED frame", [0.052, 0.07, 3.88], [0.86, -0.47, 2.62], materials.led, { rounded: true, radius: 0.026, componentKey: "body" });
  addBox(exterior, "top red LED frame", [1.72, 0.07, 0.052], [0, -0.47, 4.56], materials.led, { rounded: true, radius: 0.026, componentKey: "body" });
  addBox(exterior, "bottom red LED frame", [1.72, 0.07, 0.052], [0, -0.47, 0.68], materials.led, { rounded: true, radius: 0.026, componentKey: "body" });
  addBox(exterior, "bottom electronics service bay", [1.42, 0.08, 0.5], [0, -0.455, 0.85], materials.screen, {
    rounded: true,
    radius: 0.055,
    segments: 6,
    label: "Service bay",
    color: "#e5e7eb",
    labelOffset: [0.74, -0.22, -0.15],
    componentKey: "service"
  });
  addBox(exterior, "removable lower service access panel", [1.28, 0.045, 0.38], [0, -0.51, 0.85], materials.duct, { rounded: true, radius: 0.035, componentKey: "service" });
  [-0.55, 0.55].forEach((x) => {
    [0.72, 0.98].forEach((z) => addCylinder(exterior, "quarter turn service panel screw", 0.022, 0.016, [x, -0.545, z], materials.metal, [Math.PI / 2, 0, 0], { componentKey: "service" }));
  });

  addBox(internal, "single helmet container stainless chamber tub", [1.42, 0.78, 1.82], [0, 0.08, 2.72], materials.innerBody, {
    rounded: true,
    radius: 0.055,
    segments: 6,
    componentKey: "chamber"
  });
  addBox(internal, "helmet container rear wall", [1.3, 0.055, 1.64], [0, 0.43, 2.72], materials.duct, {
    rounded: true,
    radius: 0.04,
    segments: 5,
    componentKey: "chamber"
  });
  addBox(internal, "helmet container bottom tray", [1.18, 0.64, 0.08], [0, 0.02, 1.84], materials.metal, { rounded: true, radius: 0.04, componentKey: "chamber" });
  addBox(internal, "removable perforated drain grate", [0.74, 0.42, 0.035], [0, -0.02, 1.91], materials.satinEdge, { rounded: true, radius: 0.026, componentKey: "chamber" });
  addVentPattern(internal, [-0.3, -0.17, 1.94], 4, 9, [0.075, 0.055], materials.rubber, "chamber");
  addBox(internal, "magnetic door interlock sensor", [0.08, 0.05, 0.16], [0.69, -0.38, 2.42], materials.blueSeal, {
    rounded: true,
    radius: 0.018,
    label: "Door interlock",
    color: "#bfdbfe",
    labelOffset: [0.38, -0.18, -0.04],
    componentKey: "chamber"
  });
  addBox(internal, "UV safety micro-switch strike plate", [0.04, 0.04, 0.18], [0.78, -0.43, 2.42], materials.metal, { rounded: true, radius: 0.012, componentKey: "chamber" });
  addBox(internal, "left helmet guide rail", [0.08, 0.62, 0.07], [-0.48, -0.02, 2.12], materials.metal, { componentKey: "stand" });
  addBox(internal, "right helmet guide rail", [0.08, 0.62, 0.07], [0.48, -0.02, 2.12], materials.metal, { componentKey: "stand" });
  addBox(internal, "drain and mist collection channel", [0.58, 0.08, 0.04], [0, -0.25, 1.95], materials.rubber, { componentKey: "chamber" });
  addCylinder(internal, "helmet stand post", 0.055, 0.78, [0, -0.02, 2.04], materials.metal, [0, 0, 0], { componentKey: "stand" });
  addCylinder(internal, "helmet stand plate", 0.38, 0.06, [0, -0.02, 2.45], materials.metal, [0, 0, 0], { componentKey: "stand" });

  const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.44, 64, 32, 0, Math.PI * 2, 0, Math.PI * 0.74), materials.helmetShell);
  helmet.name = "helmet reference object";
  helmet.userData.componentKey = "stand";
  helmet.position.set(0, -0.02, 2.7);
  helmet.scale.set(1.15, 0.85, 0.62);
  internal.add(helmet);
  const visor = addBox(internal, "helmet smoked curved visor", [0.62, 0.035, 0.18], [0, -0.42, 2.72], materials.visorGlass, {
    rounded: true,
    radius: 0.035,
    segments: 6,
    componentKey: "stand"
  });
  visor.rotation.x = -0.08;
  addBox(internal, "helmet lower chin guard", [0.48, 0.08, 0.11], [0, -0.42, 2.52], materials.helmetShell, {
    rounded: true,
    radius: 0.04,
    segments: 6,
    componentKey: "stand"
  });
  addBox(internal, "helmet top air scoop", [0.26, 0.08, 0.055], [0, -0.25, 3.02], materials.rubber, {
    rounded: true,
    radius: 0.025,
    segments: 5,
    componentKey: "stand"
  });
  addCylinder(internal, "helmet left visor hinge", 0.035, 0.035, [-0.42, -0.39, 2.72], materials.metal, [Math.PI / 2, 0, 0], { componentKey: "stand" });
  addCylinder(internal, "helmet right visor hinge", 0.035, 0.035, [0.42, -0.39, 2.72], materials.metal, [Math.PI / 2, 0, 0], { componentKey: "stand" });
  addHelmetDetailSet(internal, materials, "front helmet", -0.02);

  const blower = addBox(internal, "rear mounted dual fan blower module", [1.0, 0.16, 0.42], [0, 0.45, 3.5], materials.metal, {
    rounded: true,
    radius: 0.04,
    segments: 5,
    label: "Rear dual fans",
    color: "#93c5fd",
    labelOffset: [-0.8, 0.2, 0.22],
    componentKey: "blower"
  });
  addFanAssembly(internal, [-0.26, 0.36, 3.52], 0.17, materials.screen, "blower");
  addFanAssembly(internal, [0.26, 0.36, 3.52], 0.17, materials.screen, "blower");
  addBox(internal, "open view top fan mounting plate", [0.9, 0.055, 0.44], [0, -0.47, 3.48], materials.duct, {
    rounded: true,
    radius: 0.03,
    componentKey: "blower"
  });
  addFrontFanGrille(internal, [-0.28, -0.54, 3.5], 0.17, materials, "blower");
  addFrontFanGrille(internal, [0.28, -0.54, 3.5], 0.17, materials, "blower");
  addRearFanFace(internal, [-0.27, 0.58, 3.58], 0.18, materials, "blower");
  addRearFanFace(internal, [0.27, 0.58, 3.58], 0.18, materials, "blower");
  addBox(internal, "blower HEPA filter cassette", [0.9, 0.08, 0.24], [0, 0.3, 3.18], materials.rubber, { rounded: true, radius: 0.03, componentKey: "blower" });
  addBox(internal, "removable fan service cover", [1.08, 0.045, 0.54], [0, 0.52, 3.5], materials.glass.clone(), { rounded: true, radius: 0.045, componentKey: "blower" });
  addBox(internal, "blower outlet duct", [0.94, 0.32, 0.18], [0, 0.24, 3.18], materials.duct, { rounded: true, radius: 0.035, componentKey: "blower" });
  addBox(internal, "left vertical air return duct", [0.16, 0.56, 1.22], [-0.67, 0.08, 2.65], materials.duct, { rounded: true, radius: 0.035, componentKey: "blower" });
  addBox(internal, "right vertical air return duct", [0.16, 0.56, 1.22], [0.67, 0.08, 2.65], materials.duct, { rounded: true, radius: 0.035, componentKey: "blower" });
  addBox(internal, "PTC heater block", [0.56, 0.18, 0.24], [0.42, 0.28, 3.18], materials.heat, {
    rounded: true,
    radius: 0.035,
    segments: 5,
    label: "PTC heater",
    color: "#fed7aa",
    labelOffset: [0.42, 0.24, 0.16],
    componentKey: "heater"
  });
  for (let i = 0; i < 6; i += 1) {
    addBox(internal, `ptc heater aluminum fin ${i + 1}`, [0.035, 0.2, 0.28], [0.27 + i * 0.058, 0.22, 3.18], materials.metal, { componentKey: "heater" });
  }
  addCylinder(internal, "left UV tube", 0.042, 1.5, [-0.58, -0.32, 2.72], materials.uv, [0, 0, 0], {
    label: "UV tubes",
    color: "#ddd6fe",
    labelOffset: [-0.54, -0.28, 0.72],
    componentKey: "uv"
  });
  addCylinder(internal, "right UV tube", 0.042, 1.5, [0.58, -0.32, 2.72], materials.uv, [0, 0, 0], { componentKey: "uv" });
  addCylinder(internal, "left red sanitizer light bar open view", 0.035, 1.42, [-0.55, -0.46, 2.72], materials.led, [0, 0, 0], { componentKey: "uv" });
  addCylinder(internal, "right red sanitizer light bar open view", 0.035, 1.42, [0.55, -0.46, 2.72], materials.led, [0, 0, 0], { componentKey: "uv" });
  addBox(internal, "open view center shelf separating chamber and service bay", [1.18, 0.08, 0.055], [0, -0.44, 1.72], materials.metal, {
    rounded: true,
    radius: 0.018,
    componentKey: "service"
  });
  const openHelmet = new THREE.Mesh(new THREE.SphereGeometry(0.43, 64, 32, 0, Math.PI * 2, 0, Math.PI * 0.78), materials.helmetShell);
  openHelmet.name = "open view centered helmet silhouette";
  openHelmet.userData.componentKey = "stand";
  openHelmet.position.set(0, -0.58, 2.55);
  openHelmet.scale.set(1.18, 0.82, 0.98);
  internal.add(openHelmet);
  addBox(internal, "open view glossy helmet visor", [0.54, 0.04, 0.16], [0, -0.9, 2.56], materials.visorGlass, {
    rounded: true,
    radius: 0.03,
    segments: 6,
    componentKey: "stand"
  });
  addHelmetDetailSet(internal, materials, "open view helmet", -0.58);
  addBox(internal, "left UV aluminum guard rail", [0.1, 0.06, 1.58], [-0.58, -0.36, 2.72], materials.metal, { rounded: true, radius: 0.018, componentKey: "uv" });
  addBox(internal, "right UV aluminum guard rail", [0.1, 0.06, 1.58], [0.58, -0.36, 2.72], materials.metal, { rounded: true, radius: 0.018, componentKey: "uv" });
  addCylinder(internal, "mist nozzle", 0.055, 0.26, [0, -0.34, 3.54], materials.mist, [Math.PI / 2, 0, 0], {
    label: "Mist nozzle",
    color: "#cffafe",
    labelOffset: [0, -0.32, 0.26],
    componentKey: "mist"
  });
  addWire(internal, "transparent mist feed tube", [[0.55, 0.03, 1.03], [0.42, -0.08, 1.65], [0.2, -0.22, 2.5], [0, -0.3, 3.55]], materials.mist, "mist");
  addWire(internal, "condensate drain hose", [[0, -0.12, 1.9], [0.34, -0.2, 1.45], [0.55, 0.03, 0.98]], materials.blueSeal, "mist");
  addBox(internal, "relay board and ESP32 control plate", [0.82, 0.22, 0.34], [-0.36, 0.02, 0.78], materials.metal, {
    label: "ESP32 + relay board",
    color: "#bbf7d0",
    labelOffset: [-0.28, 0.3, -0.04],
    componentKey: "service"
  });
  addBox(internal, "green relay pcb board", [0.72, 0.05, 0.28], [-0.36, -0.11, 0.79], materials.board, { componentKey: "service" });
  addBox(internal, "ESP32 dev module", [0.2, 0.045, 0.12], [-0.62, -0.15, 0.79], materials.screen, { componentKey: "service" });
  addBox(internal, "four channel relay module", [0.28, 0.05, 0.16], [-0.28, -0.15, 0.79], materials.board, { componentKey: "service" });
  addTerminalStrip(internal, [-0.02, -0.18, 0.89], 5, materials.terminal, "service");
  addTerminalStrip(internal, [-0.02, -0.18, 0.69], 5, materials.terminal, "service");
  addCableClips(internal, [[-0.52, -0.2, 0.98], [-0.18, -0.22, 1.08], [0.24, -0.22, 1.0], [0.58, -0.16, 1.12]], materials.satinEdge, "wiring");
  addBox(internal, "5V regulator power supply", [0.18, 0.055, 0.16], [-0.62, -0.15, 0.58], materials.duct, { componentKey: "service" });
  addBox(internal, "AC inlet fuse switch module", [0.2, 0.055, 0.12], [-0.08, -0.16, 0.55], materials.rubber, { componentKey: "service" });
  addCylinder(internal, "mist liquid tank", 0.16, 0.48, [0.55, 0.03, 0.76], materials.mist, [0, 0, 0], {
    label: "Mist tank",
    color: "#cffafe",
    labelOffset: [0.46, 0.25, 0.04],
    componentKey: "service"
  });
  addCylinder(internal, "mist tank screw cap", 0.095, 0.055, [0.55, 0.03, 1.03], materials.terminal, [0, 0, 0], { componentKey: "service" });
  addCylinder(internal, "cleaning chemical bottle", 0.13, 0.42, [0.18, 0.03, 0.74], materials.mist, [0, 0, 0], { componentKey: "service" });
  addCylinder(internal, "chemical bottle screw cap", 0.075, 0.045, [0.18, 0.03, 0.98], materials.terminal, [0, 0, 0], { componentKey: "service" });
  addBox(internal, "cable gland bundle entry", [0.18, 0.08, 0.08], [0.84, -0.08, 0.86], materials.rubber, { componentKey: "wiring" });
  addBox(internal, "rear access galvanized mounting plate", [1.28, 0.045, 0.76], [0, 0.5, 1.05], materials.metal, {
    rounded: true,
    radius: 0.035,
    label: "Rear access electronics",
    color: "#bbf7d0",
    labelOffset: [0, 0.2, 0.52],
    componentKey: "service"
  });
  addBox(internal, "left vertical DIN mounting rail", [0.045, 0.04, 0.68], [-0.62, 0.555, 1.08], materials.satinEdge, { rounded: true, radius: 0.012, componentKey: "service" });
  addBox(internal, "right vertical DIN mounting rail", [0.045, 0.04, 0.68], [0.62, 0.555, 1.08], materials.satinEdge, { rounded: true, radius: 0.012, componentKey: "service" });
  addBox(internal, "rear cable duct left with slotted cover", [0.08, 0.045, 0.62], [-0.76, 0.555, 1.12], materials.rubber, { rounded: true, radius: 0.014, componentKey: "wiring" });
  addBox(internal, "rear cable duct right with slotted cover", [0.08, 0.045, 0.62], [0.76, 0.555, 1.12], materials.rubber, { rounded: true, radius: 0.014, componentKey: "wiring" });
  addBox(internal, "upper blower mounting cross bracket", [1.08, 0.045, 0.055], [0, 0.565, 3.88], materials.metal, { rounded: true, radius: 0.014, componentKey: "blower" });
  addBox(internal, "lower blower mounting cross bracket", [1.08, 0.045, 0.055], [0, 0.565, 3.22], materials.metal, { rounded: true, radius: 0.014, componentKey: "blower" });
  addBox(internal, "rear visible ESP32 controller", [0.26, 0.04, 0.16], [-0.44, 0.54, 1.16], materials.screen, { rounded: true, radius: 0.018, componentKey: "service" });
  addBox(internal, "rear visible relay board", [0.42, 0.04, 0.22], [-0.04, 0.54, 1.16], materials.board, { rounded: true, radius: 0.018, componentKey: "service" });
  addTerminalStrip(internal, [-0.18, 0.565, 1.28], 5, materials.terminal, "service");
  addBox(internal, "rear visible AC power supply", [0.3, 0.05, 0.18], [0.44, 0.54, 1.16], materials.duct, { rounded: true, radius: 0.02, componentKey: "service" });
  addBox(internal, "rear visible fuse inlet module", [0.2, 0.04, 0.12], [0.44, 0.545, 0.88], materials.rubber, { rounded: true, radius: 0.018, componentKey: "service" });
  addCylinder(internal, "rear visible mist refill bottle", 0.12, 0.36, [-0.48, 0.46, 0.78], materials.mist, [0, 0, 0], { componentKey: "service" });
  addCylinder(internal, "rear visible deodorizer bottle", 0.1, 0.32, [-0.22, 0.46, 0.76], materials.mist, [0, 0, 0], { componentKey: "service" });
  addCylinder(internal, "open view white refill bottle", 0.14, 0.52, [-0.42, -0.48, 1.05], new THREE.MeshStandardMaterial({ color: "#e5e7eb", metalness: 0.04, roughness: 0.38 }), [0, 0, 0], { componentKey: "service" });
  addCylinder(internal, "open view teal deodorizer bottle", 0.12, 0.42, [-0.08, -0.48, 0.98], new THREE.MeshStandardMaterial({ color: "#0f766e", metalness: 0.08, roughness: 0.34 }), [0, 0, 0], { componentKey: "service" });
  addCylinder(internal, "open view white bottle blue cap", 0.07, 0.05, [-0.42, -0.48, 1.33], materials.blueSeal, [0, 0, 0], { componentKey: "service" });
  addCylinder(internal, "open view teal bottle dark cap", 0.065, 0.045, [-0.08, -0.48, 1.22], materials.rubber, [0, 0, 0], { componentKey: "service" });
  addBox(internal, "open view compact pump module", [0.22, 0.1, 0.24], [0.24, -0.52, 0.98], materials.duct, { rounded: true, radius: 0.025, componentKey: "service" });
  addCylinder(internal, "open view pump pressure head", 0.05, 0.075, [0.24, -0.6, 1.11], materials.metal, [Math.PI / 2, 0, 0], { componentKey: "service" });
  addBox(internal, "open view vented power supply case", [0.32, 0.08, 0.38], [0.58, -0.52, 1.02], materials.duct, { rounded: true, radius: 0.02, componentKey: "service" });
  addVentPattern(internal, [0.46, -0.57, 1.16], 4, 4, [0.055, 0.055], materials.rubber, "service");
  addBox(internal, "open view small relay PCB", [0.34, 0.055, 0.16], [0.1, -0.58, 0.73], materials.board, { rounded: true, radius: 0.018, componentKey: "service" });
  addCableClips(internal, [[-0.3, -0.61, 1.22], [0.05, -0.62, 1.18], [0.36, -0.62, 1.4], [0.48, -0.58, 0.82]], materials.satinEdge, "wiring");
  addEngravedTag(internal, "24V AC/DC", [0.58, -0.585, 1.26], [0.22, 0.022, 0.06], materials.metal, "service");
  addEngravedTag(internal, "pump 12V", [0.24, -0.605, 0.82], [0.18, 0.022, 0.05], materials.metal, "service");
  addWire(internal, "open view bottle to pump hose", [[-0.08, -0.5, 1.18], [0.08, -0.6, 1.14], [0.24, -0.6, 1.1]], materials.mist, "service");
  addWire(internal, "open view pump to nozzle hose", [[0.24, -0.6, 1.12], [0.42, -0.6, 1.7], [0.28, -0.55, 2.2], [0.05, -0.5, 3.3]], materials.mist, "service");
  addWire(internal, "open view power harness red", [[0.58, -0.58, 0.86], [0.3, -0.62, 0.78], [0.05, -0.58, 0.75]], materials.wirePower, "wiring");
  addWire(internal, "open view sensor harness yellow", [[0.05, -0.58, 0.75], [-0.22, -0.58, 1.1], [-0.4, -0.52, 1.35]], materials.wireSignal, "wiring");
  addCylinder(internal, "rear refill bottle cap", 0.07, 0.04, [-0.48, 0.46, 0.98], materials.terminal, [0, 0, 0], { componentKey: "service" });
  addCylinder(internal, "rear deodorizer bottle cap", 0.06, 0.04, [-0.22, 0.46, 0.94], materials.terminal, [0, 0, 0], { componentKey: "service" });
  addWireTag(internal, "ESP32", [-0.44, 0.6, 1.4], "#bbf7d0");
  addWireTag(internal, "4CH RELAY", [-0.04, 0.6, 1.42], "#facc15");
  addWireTag(internal, "AC/DC", [0.44, 0.6, 1.4], "#fb923c");

  const serviceTray = new THREE.Group();
  serviceTray.name = "slide out service tray with real parts";
  internal.add(serviceTray);
  addBox(serviceTray, "sliding metal service tray", [1.08, 0.08, 0.08], [0, -0.64, 0.82], materials.duct, {
    label: "Slide-out service tray",
    color: "#e5e7eb",
    labelOffset: [0, -0.22, 0.15],
    componentKey: "service"
  });
  addBox(serviceTray, "visible ESP32 dev board on tray", [0.25, 0.045, 0.14], [-0.35, -0.69, 0.94], materials.screen, { componentKey: "service" });
  addBox(serviceTray, "visible green relay board on tray", [0.38, 0.045, 0.16], [0.05, -0.69, 0.94], materials.board, { componentKey: "service" });
  addTerminalStrip(serviceTray, [-0.08, -0.73, 1.05], 5, materials.terminal, "service");
  addTerminalStrip(serviceTray, [-0.08, -0.73, 0.83], 5, materials.terminal, "service");
  addBox(serviceTray, "visible AC to DC power supply", [0.25, 0.06, 0.16], [0.42, -0.69, 0.94], materials.duct, { componentKey: "service" });
  addBox(serviceTray, "visible fuse and inlet switch", [0.18, 0.055, 0.12], [0.42, -0.7, 0.73], materials.rubber, { componentKey: "service" });
  addCylinder(serviceTray, "visible mist tank cap", 0.08, 0.04, [-0.55, -0.69, 1.02], materials.terminal, [0, 0, 0], { componentKey: "service" });
  addCylinder(serviceTray, "visible chemical bottle cap", 0.065, 0.035, [-0.55, -0.69, 0.82], materials.terminal, [0, 0, 0], { componentKey: "service" });
  addWireTag(serviceTray, "ESP32", [-0.35, -0.78, 1.08], "#bbf7d0");
  addWireTag(serviceTray, "RELAY TERMINALS", [0.08, -0.78, 1.12], "#facc15");
  addWireTag(serviceTray, "POWER + FUSE", [0.42, -0.78, 1.06], "#fb923c");

  addWire(wiring, "GPIO 14 blower wiring", [[-0.36, 0.18, 0.96], [-0.86, 0.3, 1.9], [-0.88, 0.28, 3.45], [-0.55, 0.08, 3.72]], materials.wireSensor, "blower");
  addWire(wiring, "GPIO 27 heater wiring", [[-0.24, 0.18, 0.96], [0.82, 0.28, 1.8], [0.88, 0.28, 3.46], [0.55, 0.08, 3.7]], materials.wireHeat, "heater");
  addWire(wiring, "GPIO 26 UV wiring", [[-0.46, 0.18, 0.85], [-0.78, 0.2, 1.7], [-0.64, -0.12, 2.9], [0.64, -0.12, 2.9]], materials.wireUv, "uv");
  addWire(wiring, "GPIO 25 mist wiring", [[-0.16, 0.18, 0.84], [0.28, 0.26, 1.9], [0.28, -0.18, 3.34], [0, -0.3, 3.62]], materials.wireSignal, "mist");
  addWire(wiring, "GPIO 33 LED frame wiring", [[-0.55, 0.18, 0.78], [-1.0, 0.12, 1.2], [-1.0, -0.3, 2.9], [-0.92, -0.36, 4.9]], materials.wirePower, "body");
  addWire(wiring, "GPIO 32 door sensor wiring", [[-0.08, 0.18, 0.72], [0.92, 0.18, 1.6], [0.93, -0.34, 2.38], [0.83, -0.44, 2.38]], materials.wireSensor, "chamber");
  addWire(wiring, "temperature and liquid sensor wiring", [[0.02, 0.18, 0.72], [0.52, 0.2, 0.88], [0.78, 0.2, 2.7], [0.55, 0.08, 3.7]], materials.wireSignal, "wiring");
  addWireTag(wiring, "GPIO14 BLOWER", [-0.82, 0.33, 2.35], "#38bdf8");
  addWireTag(wiring, "GPIO27 HEATER", [0.92, 0.33, 2.55], "#fb923c");
  addWireTag(wiring, "GPIO26 UV", [-0.72, 0.25, 2.08], "#a78bfa");
  addWireTag(wiring, "GPIO25 MIST", [0.35, 0.3, 2.28], "#facc15");
  addWireTag(wiring, "GPIO32 DOOR", [0.94, 0.23, 1.72], "#38bdf8");

  for (let i = 0; i < 7; i += 1) {
    const arrow = addCylinder(airflow, `airflow vector ${i + 1}`, 0.025, 0.58, [-0.48 + i * 0.16, -0.32, 3.16 - (i % 3) * 0.22], materials.air, [Math.PI / 2, 0, 0]);
    arrow.userData.baseX = arrow.position.x;
    arrow.userData.phase = i * 0.35;
  }

  for (let i = 0; i < 10; i += 1) {
    const particle = new THREE.Mesh(new THREE.SphereGeometry(0.04, 16, 12), materials.mist);
    particle.name = `mist particle ${i + 1}`;
    particle.position.set(-0.36 + i * 0.08, -0.36, 3.38 - (i % 4) * 0.16);
    particle.userData.phase = i * 0.42;
    airflow.add(particle);
  }

  const parts = {
    exterior,
    internal,
    airflow,
    wiring,
    ledFrame: exterior.children.filter((item) => item.name.includes("LED frame")),
    uvTubes: internal.children.filter((item) => item.name.includes("UV tube")),
    heater: internal.children.find((item) => item.name.includes("heater")),
    blower,
    fanBlades: internal.children.filter((item) => item.name.includes("fan blade")),
    openHelmet,
    serviceTray,
    rearPanel: exterior.children.filter((item) => item.name.includes("rear") || item.name.includes("back sheet")),
    mistParticles: airflow.children.filter((item) => item.name.includes("mist particle")),
    airVectors: airflow.children.filter((item) => item.name.includes("airflow vector")),
    door: exterior.children.find((item) => item.name.includes("door")),
    openDoor,
    root
  };

  return { root, parts, materials };
}

const assemblyItems = [
  ["body", "Body shell", "Compact 1020 x 600 x 430 mm kiosk cabinet"],
  ["display", "Front display", "10.1 inch ad, price, QR prompt, and timer screen"],
  ["status", "Status strip", "Scan QR, Pay & Start, Helmet Cleaning, Done indicators"],
  ["chamber", "Glass chamber", "Transparent red-lit door, handle, and hinges"],
  ["stand", "Helmet stand", "Center stand and support plate"],
  ["blower", "Dual fans", "Rear/top air movement and exhaust"],
  ["heater", "PTC heater", "Hot-air drying source"],
  ["uv", "UV tubes", "Sanitization bars"],
  ["mist", "Spray nozzle", "High-pressure mist/deodorizer outlet"],
  ["service", "Service bay", "ESP32, relay board, supply, bottles, fan, vents"],
  ["wiring", "Wiring harness", "ESP32 relay and sensor routing inside the machine"]
];

const cameraPresets = {
  front: {
    label: "Front",
    position: [0, -16.0, 2.55],
    target: [0, -0.08, 2.12]
  },
  side: {
    label: "Side",
    position: [13.4, -5.2, 2.55],
    target: [0, -0.02, 2.12]
  },
  rear: {
    label: "Rear",
    position: [0, 15.0, 2.55],
    target: [0, 0.04, 2.15]
  },
  backOpen: {
    label: "Back Open",
    position: [0, -5.35, 2.62],
    target: [0, -0.52, 2.5]
  },
  top: {
    label: "Top",
    position: [0.2, -0.3, 8.5],
    target: [0, 0, 2.35]
  },
  service: {
    label: "Service bay",
    position: [3.6, -5.2, 1.55],
    target: [0.12, 0.02, 0.95]
  }
};

function ComponentPreview({ type }) {
  return (
    <div className={`component-preview component-${type}`}>
      <span className="preview-shadow" />
      <span className="preview-body" />
      <span className="preview-detail a" />
      <span className="preview-detail b" />
      <span className="preview-detail c" />
    </div>
  );
}

export default function EngineeringViewer({ stage = "idle", variant = "embedded" }) {
  const mountRef = useRef(null);
  const machineRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const stageRef = useRef(stage);
  const playingRef = useRef(true);
  const selectedRef = useRef("body");
  const viewModeRef = useRef("external");
  const presentationRef = useRef(false);
  const selectComponentRef = useRef(() => {});
  const [viewMode, setViewMode] = useState("external");
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedKey, setSelectedKey] = useState("body");
  const [cameraPreset, setCameraPreset] = useState("front");
  const [presentationMode, setPresentationMode] = useState(false);
  const [demoMode, setDemoMode] = useState(false);
  const [demoSceneIndex, setDemoSceneIndex] = useState(0);
  const [demoStage, setDemoStage] = useState("");
  const activeScene = demoScenes[demoSceneIndex] || demoScenes[0];
  const effectiveStage = demoStage || stage;
  const selectedComponent = componentCatalog[selectedKey] || componentCatalog.body;

  useEffect(() => {
    selectedRef.current = selectedKey;
    selectComponentRef.current?.(selectedKey);
  }, [selectedKey]);

  useEffect(() => {
    viewModeRef.current = viewMode;
  }, [viewMode]);

  useEffect(() => {
    stageRef.current = effectiveStage;
  }, [effectiveStage]);

  useEffect(() => {
    playingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    presentationRef.current = presentationMode;
  }, [presentationMode]);

  useEffect(() => {
    if (!demoMode) return undefined;
    setPresentationMode(true);
    const timer = window.setInterval(() => {
      setDemoSceneIndex((index) => (index + 1) % demoScenes.length);
    }, 3600);
    return () => window.clearInterval(timer);
  }, [demoMode]);

  useEffect(() => {
    if (!demoMode) return;
    const scene = demoScenes[demoSceneIndex] || demoScenes[0];
    setViewMode(scene.mode);
    setCameraPreset(scene.camera);
    setSelectedKey(scene.selected);
    setDemoStage(scene.stage);
    setIsPlaying(true);
  }, [demoMode, demoSceneIndex]);

  useEffect(() => {
    const preset = cameraPresets[cameraPreset];
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!preset || !camera || !controls) return;
    const position = [...preset.position];
    const target = [...preset.target];
    if (presentationMode && viewMode === "backOpen") {
      const isMobile = window.innerWidth < 640;
      position[1] = isMobile ? -6.2 : -5.95;
      position[2] = isMobile ? 2.74 : 2.72;
      target[1] = -0.55;
      target[2] = isMobile ? 2.6 : 2.62;
      camera.zoom = isMobile ? 1.06 : 1.18;
    } else {
      camera.zoom = 1;
    }
    camera.updateProjectionMatrix();
    camera.position.set(...position);
    controls.target.set(...target);
    camera.lookAt(...target);
    controls.update();
  }, [cameraPreset, presentationMode, viewMode]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    scene.background = null;
    scene.fog = null;

    const camera = new THREE.PerspectiveCamera(62, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.up.set(0, 0, 1);
    camera.position.set(...cameraPresets.front.position);
    camera.lookAt(...cameraPresets.front.target);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, premultipliedAlpha: false, preserveDrawingBuffer: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(...cameraPresets.front.target);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minDistance = 2.7;
    controls.maxDistance = 13;
    controls.screenSpacePanning = true;
    controlsRef.current = controls;

    const ambient = new THREE.HemisphereLight("#ffffff", "#454850", 3.45);
    scene.add(ambient);
    const key = new THREE.DirectionalLight("#ffffff", 4.35);
    key.position.set(3, -5, 6);
    key.castShadow = true;
    scene.add(key);
    const fill = new THREE.DirectionalLight("#f8fafc", 2.85);
    fill.position.set(-4, -3, 4);
    scene.add(fill);
    const frontFill = new THREE.PointLight("#f8fafc", 3.75, 7);
    frontFill.position.set(0, -3.2, 2.8);
    scene.add(frontFill);
    const red = new THREE.PointLight("#ff1238", 5, 6);
    red.position.set(0, -1.3, 3.6);
    scene.add(red);
    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(3.4, 96),
      new THREE.MeshStandardMaterial({ color: "#474852", metalness: 0.08, roughness: 0.78, transparent: true, opacity: 0.24 })
    );
    floor.name = "transparent inspection floor";
    floor.position.z = -0.16;
    floor.receiveShadow = true;
    scene.add(floor);

    const machine = createMachine(scene);
    machineRef.current = machine;

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const selectionBox = new THREE.Box3Helper(new THREE.Box3(), "#ff4d63");
    selectionBox.name = "selected component bounding box";
    selectionBox.visible = false;
    scene.add(selectionBox);

    const setSelection = (componentKey) => {
      const key = componentCatalog[componentKey] ? componentKey : "body";
      selectionBox.visible = false;
      const selectedMeshes = [];
      machine.root.traverse((object) => {
        if (object.isSprite) {
          object.visible = !presentationRef.current && viewModeRef.current !== "backOpen" && object.userData.isPartLabel && (object.userData.componentKey === key || (key === "display" && ["display", "status"].includes(object.userData.componentKey)));
          return;
        }
        if (!object.isMesh) return;
        const isSelected = object.userData.componentKey === key;
        object.userData.isSelected = isSelected;
        if (isSelected) selectedMeshes.push(object);
        if (object.material && "emissiveIntensity" in object.material) {
          object.material.emissiveIntensity = object.userData.baseEmissiveIntensity ?? object.material.emissiveIntensity;
        }
      });
      if (selectedMeshes.length) {
        const box = new THREE.Box3();
        selectedMeshes.forEach((mesh) => box.expandByObject(mesh));
        selectionBox.box.copy(box);
        selectionBox.visible = key !== "body" && !presentationRef.current && viewModeRef.current !== "backOpen";
      }
    };
    selectComponentRef.current = setSelection;
    setSelection(selectedRef.current);

    let pointerDown = null;
    const getPointer = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };
    const handlePointerDown = (event) => {
      pointerDown = { x: event.clientX, y: event.clientY };
    };
    const handlePointerUp = (event) => {
      if (!pointerDown) return;
      const moved = Math.hypot(event.clientX - pointerDown.x, event.clientY - pointerDown.y);
      pointerDown = null;
      if (moved > 5) return;
      getPointer(event);
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster
        .intersectObjects(machine.root.children, true)
        .filter((hit) => hit.object.userData.componentKey);
      if (hits[0]) {
        const key = hits[0].object.userData.componentKey;
        setSelectedKey(key);
        setSelection(key);
      }
    };
    renderer.domElement.addEventListener("pointerdown", handlePointerDown);
    renderer.domElement.addEventListener("pointerup", handlePointerUp);

    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      const { root, parts } = machineRef.current;
      const activeStage = stageRef.current;
      controls.update();
      if (viewModeRef.current === "backOpen" || presentationRef.current) {
        selectionBox.visible = false;
        root.traverse((object) => {
          if (object.isSprite) object.visible = false;
        });
      }
      if (playingRef.current) {
        parts.airVectors.forEach((arrow) => {
          arrow.position.y = -0.42 + ((t * 0.75 + arrow.userData.phase) % 1) * 0.42;
          arrow.scale.z = activeStage === "air_cleaning" || activeStage === "drying" ? 1.45 : 0.65;
        });
        parts.mistParticles.forEach((particle) => {
          particle.position.y = -0.36 + Math.sin(t * 2.2 + particle.userData.phase) * 0.08;
          particle.position.z += Math.sin(t + particle.userData.phase) * 0.0008;
          particle.visible = activeStage === "mist_deodorizing" || viewMode !== "external";
        });
        parts.uvTubes.forEach((tube) => {
          tube.scale.setScalar(activeStage === "uv_sanitizing" ? 1.28 + Math.sin(t * 8) * 0.06 : 1);
        });
        if (parts.heater) {
          parts.heater.scale.setScalar(activeStage === "drying" ? 1.08 + Math.sin(t * 5) * 0.03 : 1);
        }
        if (parts.door) {
          parts.door.position.x = activeStage === "starting" ? Math.sin(t * 3) * 0.05 : 0;
        }
        parts.wiring.children.forEach((wire, index) => {
          wire.scale.setScalar(wire.userData.componentKey === selectedRef.current ? 1.35 + Math.sin(t * 5 + index) * 0.03 : 1);
        });
        parts.ledFrame.forEach((led, index) => {
          led.material.emissiveIntensity = 1.8 + Math.sin(t * 2.2 + index) * 0.28;
        });
        if (parts.blower) {
          parts.blower.rotation.z = activeStage === "air_cleaning" || activeStage === "drying" ? Math.sin(t * 8) * 0.015 : 0;
        }
        parts.fanBlades.forEach((blade, index) => {
          if (["air_cleaning", "drying", "uv_sanitizing"].includes(activeStage) || viewModeRef.current === "backOpen") {
            blade.rotation.y += 0.12 + index * 0.002;
          }
        });
        if (parts.openDoor) {
          const doorPulse = viewModeRef.current === "backOpen" ? Math.sin(t * 1.4) * 0.018 : 0;
          parts.openDoor.rotation.z = -0.04 + doorPulse;
        }
        if (parts.openHelmet) {
          parts.openHelmet.rotation.z = Math.sin(t * 0.8) * 0.025;
        }
        if (parts.serviceTray) {
          parts.serviceTray.position.y = viewModeRef.current === "backOpen" ? -0.02 + Math.sin(t * 0.9) * 0.01 : 0;
        }
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mount);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      renderer.domElement.removeEventListener("pointerdown", handlePointerDown);
      renderer.domElement.removeEventListener("pointerup", handlePointerUp);
      controls.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    const machine = machineRef.current;
    if (!machine) return;
    const { parts } = machine;
    const internalVisible = viewMode !== "external";
    const shellOpacity = viewMode === "internal" ? 0.24 : viewMode === "section" ? 0.1 : viewMode === "exploded" ? 0.38 : viewMode === "circuit" ? 0.14 : 1;

    parts.internal.visible = internalVisible;
    parts.airflow.visible = internalVisible || ["air_cleaning", "mist_deodorizing", "drying"].includes(effectiveStage);
    parts.wiring.visible = viewMode === "circuit";
    parts.openDoor.visible = viewMode === "backOpen";
    parts.root.traverse((object) => {
      if (!object.isSprite) return;
      if (presentationMode || viewMode === "backOpen") {
        object.visible = false;
        return;
      }
      object.visible = object.userData.isPartLabel && (object.userData.componentKey === selectedKey || (selectedKey === "display" && ["display", "status"].includes(object.userData.componentKey)));
    });
    parts.exterior.children.forEach((child) => {
      child.visible = true;
      if (viewMode === "backOpen") {
        if (child === parts.openDoor) return;
        const hideForOpenInternal =
          child.userData.componentKey === "display" ||
          child.userData.componentKey === "status" ||
          child.name.includes("black chamber frame cutout face") ||
          child.name.includes("transparent acrylic chamber door") ||
          child.name.includes("rounded tubular door handle") ||
          child.name.includes("curved vertical door pull handle") ||
          child.name.includes("hinge block") ||
          child.name.includes("rear") ||
          child.name.includes("back sheet") ||
          child.name.includes("bottom electronics service bay") ||
          child.name.includes("removable lower service access panel");
        if (hideForOpenInternal) {
          child.visible = false;
          return;
        }
      }
      if (child.material && child.name.includes("transparent acrylic chamber door")) {
        const doorOpacity = viewMode === "external" ? 0.24 : viewMode === "internal" ? 0.14 : 0.1;
        child.material.transparent = true;
        child.material.opacity = doorOpacity;
        return;
      }
      if (child.material && (child.name.includes("kiosk body") || child.userData.componentKey === "body")) {
        child.material.transparent = shellOpacity < 1;
        child.material.opacity = shellOpacity;
      }
      if (child.material && (child.name.includes("service") || child.name.includes("gasket"))) {
        const partOpacity = viewMode === "external" ? 1 : viewMode === "internal" ? 0.3 : viewMode === "backOpen" ? 0.12 : viewMode === "circuit" ? 0.18 : 0.42;
        child.material.transparent = partOpacity < 1;
        child.material.opacity = partOpacity;
      }
      if (child.name.includes("removable lower service access panel") || child.name.includes("bottom electronics service bay")) {
        const openForService = selectedKey === "service" || selectedKey === "wiring";
        child.material.transparent = openForService || viewMode !== "external";
        child.material.opacity = openForService ? 0.08 : viewMode === "external" ? 1 : 0.2;
        if (child.name.includes("removable lower service access panel")) {
          child.position.x = openForService ? 1.05 : 0;
          child.position.y = openForService ? -0.72 : -0.392;
          child.position.z = openForService ? 0.62 : 0.74;
        }
      }
    });
    parts.rearPanel.forEach((child) => {
      if (!child.material) return;
      const isOpen = viewMode === "backOpen";
      child.visible = !isOpen;
      if (isOpen) return;
      child.material.transparent = isOpen || shellOpacity < 1;
      child.material.opacity = isOpen ? 0.08 : shellOpacity < 1 ? Math.min(shellOpacity + 0.08, 0.34) : 1;
      if (child.name.includes("removable rear back sheet service door")) {
        child.position.x = isOpen ? 2.15 : 0;
        child.position.y = isOpen ? 0.88 : 0.405;
        child.rotation.z = isOpen ? -0.18 : 0;
      }
    });

    parts.internal.children.forEach((child) => {
      child.visible = true;
      if (!child.material) return;
      const isSelected = child.userData.componentKey === selectedKey;
      if (child.name.includes("fan service cover")) {
        child.material.transparent = true;
        child.material.opacity = viewMode === "external" ? 0.22 : 0.12;
        return;
      }
      if (viewMode === "backOpen") {
        if (child.name.includes("single helmet container")) {
          child.material.transparent = true;
          child.material.opacity = 0.08;
          return;
        }
        if (child.name.includes("helmet container rear wall")) {
          child.material.transparent = false;
          child.material.opacity = 1;
          return;
        }
        child.material.transparent = child.userData.componentKey === "mist";
        child.material.opacity = child.userData.componentKey === "mist" ? 0.58 : 1;
        return;
      }
      child.material.transparent = viewMode === "circuit" && !isSelected;
      if (viewMode === "circuit" && !isSelected) child.material.opacity = 0.38;
      if (viewMode !== "circuit" && child.material.opacity < 1 && child.userData.componentKey !== "mist") child.material.opacity = 1;
    });

    if (parts.serviceTray) {
      parts.serviceTray.visible = selectedKey === "service" || cameraPreset === "service";
    }

    if (viewMode === "exploded") {
      parts.internal.position.set(1.15, 0.2, 0);
      parts.airflow.position.set(1.15, 0.2, 0);
      parts.wiring.position.set(0.45, 0.16, 0);
    } else if (viewMode === "backOpen") {
      parts.internal.position.set(0, 0, 0);
      parts.airflow.position.set(0, 0, 0);
      parts.wiring.position.set(0, 0.02, 0);
    } else if (viewMode === "section") {
      parts.internal.position.set(0.34, 0.08, 0);
      parts.airflow.position.set(0.34, 0.08, 0);
      parts.wiring.position.set(0.12, 0.04, 0);
    } else if (viewMode === "circuit") {
      parts.internal.position.set(0.16, 0.04, 0);
      parts.airflow.position.set(0.16, 0.04, 0);
      parts.wiring.position.set(0, 0, 0);
    } else {
      parts.internal.position.set(0, 0, 0);
      parts.airflow.position.set(0, 0, 0);
      parts.wiring.position.set(0, 0, 0);
    }
  }, [viewMode, effectiveStage, selectedKey, cameraPreset, presentationMode]);

  const chooseComponent = (key) => {
    setDemoMode(false);
    setDemoStage("");
    setSelectedKey(key);
    if (key === "service") {
      setViewMode("backOpen");
      setCameraPreset("backOpen");
    } else if (key === "wiring") {
      setViewMode("circuit");
      setCameraPreset("service");
    } else if (["blower", "heater"].includes(key)) {
      setViewMode("backOpen");
      setCameraPreset("backOpen");
    } else if (["uv", "mist", "stand", "chamber"].includes(key)) {
      setViewMode("internal");
      setCameraPreset("front");
    } else if (key === "body" || key === "display" || key === "status") {
      setViewMode("external");
      setCameraPreset("front");
    }
  };

  const setMode = (mode) => {
    setDemoMode(false);
    setDemoStage("");
    setViewMode(mode);
    if (mode === "external") {
      setCameraPreset("front");
      setSelectedKey("body");
    } else if (mode === "circuit") {
      setCameraPreset("service");
      setSelectedKey("wiring");
    } else if (mode === "backOpen") {
      setCameraPreset("backOpen");
      setSelectedKey("body");
    } else if (mode === "exploded" || mode === "section") {
      setCameraPreset("side");
    } else {
      setCameraPreset("front");
    }
  };

  const activateDemoScene = (index) => {
    const scene = demoScenes[index] || demoScenes[0];
    setDemoMode(false);
    setDemoSceneIndex(index);
    setDemoStage(scene.stage);
    setViewMode(scene.mode);
    setCameraPreset(scene.camera);
    setSelectedKey(scene.selected);
    setIsPlaying(true);
  };

  const downloadScreenshot = () => {
    const canvas = mountRef.current?.querySelector("canvas");
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `nektron-${viewMode}-pitch.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const exportPitchPdf = () => {
    window.print();
  };

  if (variant === "cad") {
    return (
      <main className={presentationMode ? `cad-shell presentation-mode${demoMode ? " demo-mode" : ""}` : "cad-shell"}>
        <header className="cad-topbar">
          <a className="cad-brand" href="/" aria-label="Back to NEKTRON operation page">
            <span>N</span>
            <strong>NEKTRON CAD</strong>
          </a>
          <div className="cad-toolstrip" aria-label="CAD tools">
            <button className={viewMode === "external" ? "active" : ""} onClick={() => setMode("external")}><Eye size={16} /> Exterior</button>
            <button className={viewMode === "internal" ? "active" : ""} onClick={() => setMode("internal")}><ScanSearch size={16} /> X-Ray</button>
            <button className={viewMode === "backOpen" ? "active" : ""} onClick={() => setMode("backOpen")}><Box size={16} /> Back Open</button>
            <button className={viewMode === "section" ? "active" : ""} onClick={() => setMode("section")}><SquareDashedMousePointer size={16} /> Section</button>
            <button className={viewMode === "exploded" ? "active" : ""} onClick={() => setMode("exploded")}><Boxes size={16} /> Exploded</button>
            <button className={viewMode === "circuit" ? "active" : ""} onClick={() => setMode("circuit")}><Cable size={16} /> Wiring</button>
            <button className={isPlaying ? "active" : ""} onClick={() => setIsPlaying((value) => !value)}><PlayCircle size={16} /> Motion</button>
            <button className={demoMode ? "active demo-toggle" : "demo-toggle"} onClick={() => setDemoMode((value) => !value)}><RotateCw size={16} /> Demo</button>
            <button className={presentationMode ? "active present-toggle" : "present-toggle"} onClick={() => setPresentationMode((value) => !value)}><Maximize2 size={16} /> Present</button>
          </div>
          <div className="cad-export-group">
            <button className="cad-export" onClick={downloadScreenshot}><Download size={16} /> Screenshot</button>
            <button className="cad-export" onClick={exportPitchPdf}><FileText size={16} /> PDF</button>
            <a className="cad-export" href="/models/nektron_machine.usdz"><Maximize2 size={16} /> AR</a>
          </div>
        </header>

        <section className="cad-workspace">
          <aside className="cad-panel cad-tree">
            <div className="cad-panel-title"><Layers3 size={16} /> Assembly</div>
            <div className="assembly-list">
              {assemblyItems.map(([key, title, detail]) => (
                <button key={key} className={selectedKey === key ? "active" : ""} onClick={() => chooseComponent(key)}>
                  <span><b>{componentCatalog[key]?.number}</b>{title}</span>
                  <small>{detail}</small>
                </button>
              ))}
            </div>
          </aside>

          <section className="cad-viewport-wrap">
            <div className="cad-viewport-header">
              <div>
                <strong>NEKTRON Smart Helmet Cleaning Station · Powered by Laila</strong>
                <span>Use camera presets for clear engineering views, then drag to inspect every side.</span>
              </div>
              <div className="cad-view-actions">
                {Object.entries(cameraPresets).map(([key, preset]) => (
                  <button key={key} className={cameraPreset === key ? "active" : ""} onClick={() => setCameraPreset(key)}>
                    {preset.label}
                  </button>
                ))}
                <button className={presentationMode ? "active" : ""} onClick={() => setPresentationMode((value) => !value)}>
                  {presentationMode ? "Exit" : "Present"}
                </button>
                <div className="cad-stage-chip">
                  <Gauge size={16} />
                  {stageLabels[effectiveStage] || effectiveStage}
                </div>
              </div>
            </div>
            <div className="cad-viewer-frame" ref={mountRef}>
              <div className="demo-scene-strip">
                {demoScenes.map((scene, index) => (
                  <button key={scene.id} className={activeScene.id === scene.id ? "active" : ""} onClick={() => activateDemoScene(index)}>
                    {scene.label}
                  </button>
                ))}
              </div>
              <div className="viewer-hud">
                <div className="orbit-help">Drag rotate · Scroll zoom · Click part</div>
                <div className="view-explainer">
                  <strong>{demoMode ? activeScene.title : viewMode === "external" ? "External body" : viewMode === "internal" ? "X-Ray internal" : viewMode === "backOpen" ? "Open view internal" : viewMode === "section" ? "Section view" : viewMode === "exploded" ? "Exploded layout" : "Circuit routing"}</strong>
                  <span>{demoMode ? activeScene.detail : viewMode === "external" ? "Final kiosk shell and front design." : viewMode === "internal" ? "Transparent shell reveals internals." : viewMode === "backOpen" ? "Helmet door open with fans, UV bars, helmet, bottles, pump, power supply, and harness visible." : viewMode === "section" ? "Offset internals for placement review." : viewMode === "exploded" ? "Separated assemblies show where modules go." : "Color-coded ESP32 relay paths."}</span>
                </div>
              </div>
              <div className="dimension dim-height">1020 mm height</div>
              <div className="dimension dim-width">600 mm width</div>
              <div className="dimension dim-depth">430 mm depth</div>
              {viewMode === "circuit" && (
                <div className="wiring-legend">
                  <span><i className="wire-red" /> LED / power</span>
                  <span><i className="wire-orange" /> Heater</span>
                  <span><i className="wire-purple" /> UV</span>
                  <span><i className="wire-blue" /> Blower / sensors</span>
                  <span><i className="wire-yellow" /> Mist / signal</span>
                </div>
              )}
              <div className="callout-board">
                {assemblyItems.slice(0, 6).map(([key, title]) => (
                  <button key={key} className={selectedKey === key ? "active" : ""} onClick={() => chooseComponent(key)}>
                    <b>{componentCatalog[key]?.number}</b>
                    <span>{title}</span>
                  </button>
                ))}
              </div>
              <div className="axis-widget">
                <span className="axis-z">Z</span>
                <span className="axis-y">Y</span>
                <span className="axis-x">X</span>
              </div>
            </div>
          </section>

          <aside className="cad-panel cad-properties">
            <div className="cad-panel-title"><CircuitBoard size={16} /> Properties</div>
            <div className="property-group selected-component">
              <h3><span className="component-number">{selectedComponent.number}</span>{selectedComponent.title}</h3>
              <ComponentPreview type={selectedComponent.preview} />
              <p><span>Placement</span><strong>{selectedComponent.placement}</strong></p>
              <p><span>Control</span><strong>{selectedComponent.pins}</strong></p>
              <p><span>Wiring</span><strong>{selectedComponent.wiring}</strong></p>
              <small>{selectedComponent.detail}</small>
            </div>
            <div className="property-group">
              <h3>Machine Envelope</h3>
              <p><span>Height</span><strong>1020 mm</strong></p>
              <p><span>Width</span><strong>600 mm</strong></p>
              <p><span>Depth</span><strong>430 mm</strong></p>
              <p><span>Weight</span><strong>65 kg</strong></p>
              <p><span>Body</span><strong>Matte black</strong></p>
              <p><span>LED</span><strong>Red emission frame</strong></p>
            </div>
            <div className="property-group">
              <h3>Cleaning Hardware</h3>
              <p><span>Air</span><strong>Blower relay GPIO 14</strong></p>
              <p><span>Heat</span><strong>PTC relay GPIO 27</strong></p>
              <p><span>UV</span><strong>UV relay GPIO 26</strong></p>
              <p><span>Mist</span><strong>Mist relay GPIO 25</strong></p>
              <p><span>Power</span><strong>220V AC · 850W</strong></p>
              <p><span>Cycle</span><strong>3 minutes · ₹49</strong></p>
            </div>
            <div className="property-group">
              <h3>Color Variants</h3>
              <div className="variant-swatches">
                <span className="swatch black-red">Black + red</span>
                <span className="swatch white-red">White + red</span>
                <span className="swatch black-mono">Black mono</span>
                <span className="swatch white-mono">White mono</span>
              </div>
            </div>
            <div className="property-group">
              <h3>Reference Videos</h3>
              <div className="reference-videos">
                <video src="/media/nektron-reference-031838.mp4" controls muted playsInline preload="metadata" />
                <video src="/media/nektron-reference-033150.mp4" controls muted playsInline preload="metadata" />
              </div>
            </div>
            <div className="property-group">
              <h3>Engineer Checks</h3>
              <ul>
                <li>Door interlock before UV/heater</li>
                <li>Service bay separated from wet chamber</li>
                <li>Refill tank reachable from lower bay</li>
                <li>Airflow vectors clear helmet shell</li>
              </ul>
            </div>
          </aside>
        </section>

        <footer className="cad-statusbar">
          <span><Move3D size={14} /> Drag orbit and zoom enabled</span>
          <span><Ruler size={14} /> Dimension annotations visible</span>
          <span><Cpu size={14} /> ESP32 relay map aligned with firmware</span>
        </footer>

        <section className="cad-pitch-board">
          <div className="pitch-copy">
            <span>Pitch summary</span>
            <h2>Smart helmet cleaning kiosk with payment, safety interlocks, and serviceable internals.</h2>
            <p>Use this board with Demo mode for investor/client walkthroughs: customer QR flow, open internal view, cleaning cycle, service bay, wiring proof, and revenue logic.</p>
          </div>
          <div className="pitch-grid">
            <article>
              <b>Problem</b>
              <strong>Shared helmets carry sweat, odor, and hygiene concerns.</strong>
              <span>High-frequency riders need a quick visible cleaning step before reuse.</span>
            </article>
            <article>
              <b>Solution</b>
              <strong>Scan, pay, insert helmet, run a 3-minute automated cycle.</strong>
              <span>Airflow, UV, deodorizer mist, and drying are presented as a compact self-service kiosk.</span>
            </article>
            <article>
              <b>Revenue</b>
              <strong>₹49 quick clean with deployable kiosk fleet tracking.</strong>
              <span>Good for malls, petrol pumps, bike parking, delivery hubs, and campuses.</span>
            </article>
            <article>
              <b>Technical proof</b>
              <strong>ESP32 relay map, door interlock, UV safety, pump, fans, and AC/DC bay.</strong>
              <span>CAD views expose the parts buyers will ask about during demo discussions.</span>
            </article>
          </div>
          <div className="pitch-proof-row">
            <span>Safety path: Door sensor → ESP32 → relay lockout → UV/heater disabled when open</span>
            <span>Service path: lower tray → bottles + pump → cable glands → relay board → power supply</span>
            <span>Demo exports: screenshot button + browser PDF print flow</span>
          </div>
        </section>
      </main>
    );
  }

  return (
    <article className="engineering-panel">
      <div className="engineering-copy">
        <div className="panel-title">
          <Layers3 size={18} />
          Engineering 3D Visualization
        </div>
        <h2>External shell, internal cleaning hardware, and animated process flow.</h2>
        <p>
          Use this model as a prototype review surface for body layout, service bay placement,
          chamber internals, airflow path, UV position, heater zone, mist nozzle, and ESP32 relay bay.
        </p>
        <div className="viewer-controls">
          <button className={viewMode === "external" ? "active" : ""} onClick={() => setViewMode("external")}>
            <Eye size={16} /> External
          </button>
          <button className={viewMode === "internal" ? "active" : ""} onClick={() => setViewMode("internal")}>
            <Cpu size={16} /> Internal
          </button>
          <button className={viewMode === "backOpen" ? "active" : ""} onClick={() => setViewMode("backOpen")}>
            <Box size={16} /> Back Open
          </button>
          <button className={viewMode === "exploded" ? "active" : ""} onClick={() => setViewMode("exploded")}>
            <Box size={16} /> Exploded
          </button>
          <button className={viewMode === "circuit" ? "active" : ""} onClick={() => setViewMode("circuit")}>
            <Cable size={16} /> Wiring
          </button>
          <button className={isPlaying ? "active" : ""} onClick={() => setIsPlaying((value) => !value)}>
            <PlayCircle size={16} /> {isPlaying ? "Animating" : "Paused"}
          </button>
        </div>
        <div className="stage-readout">
          <strong>{stageLabels[effectiveStage] || effectiveStage}</strong>
          <span>Current stage drives UV glow, mist particles, heater pulse, and airflow vectors.</span>
        </div>
      </div>
      <div className="viewer-frame" ref={mountRef} />
    </article>
  );
}
