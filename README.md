# NEKTRON Smart Helmet Cleaning Station

NEKTRON is a smart single-chamber helmet cleaning kiosk with app-based QR operation, IoT machine control, payment support, machine health monitoring, digital ad screens, and a 3D/AR visualization pipeline.

Sprint 1/Sprint 2 delivers a runnable prototype monorepo:

- `backend`: Express API with in-memory machines, payments, command polling, telemetry, simulator, usage, faults, ads, and admin routes.
- `apps/web`: Responsive user app for scan/manual machine code, Quick Clean payment mock, and live cleaning status.
- `apps/admin`: Admin dashboard for KPIs, machines, health, faults, usage, and ad management.
- `firmware/esp32`: Arduino ESP32 firmware skeleton for relay control, sensor checks, HTTP polling, and telemetry.
- `3d/scripts`: Blender Python generator for the NEKTRON kiosk model.
- `docs`: Machine, electronics, API, database, deployment, BOM, wiring, prototype testing, and RealityKit/USDZ documentation.

## Product Vision

NEKTRON is more than a helmet cleaner. It is:

- a smart hygiene machine
- an IoT device
- a digital advertising unit
- a machine network platform
- a scalable location-based service

## Machine V1

- Quick helmet cleaning only
- Reference price: `₹49`
- Reference cleaning time: `3 minutes`
- UV sanitization
- Mist deodorization
- Hot-air drying
- QR-based machine identification
- App-based payment and operation
- IoT monitoring
- Admin control dashboard

## Setup

```bash
npm install
npm run dev:backend
npm run dev:web
npm run dev:admin
```

Default local services:

- Backend: `http://localhost:4000`
- User web app: `http://localhost:5173`
- User app CAD page: `http://localhost:5173/engineering`
- Admin dashboard: `http://localhost:5174`

The apps default to `VITE_API_BASE_URL=http://localhost:4000` when no environment variable is provided.

## Demo Machine

The seeded demo machine code is:

```text
NEK-DEL-001
```

Use it in the user app manual scanner to test the full Quick Clean flow.

## Prototype / Engineering Docs

- `backend/migrations/001_initial_schema.sql`: PostgreSQL production schema target.
- `docs/prototype/production-bom.md`: prototype bill of materials.
- `docs/prototype/component-sourcing-plan.md`: purchase decisions, vendor questions, and procurement gate.
- `docs/prototype/manufacturing-cad-pack.md`: fabrication-ready CAD deliverables and acceptance checklist.
- `docs/prototype/wiring-diagram.md`: ESP32, relay, sensor, and power wiring.
- `docs/prototype/electrical-safety-validation.md`: qualified electrical safety review checklist.
- `docs/prototype/prototype-test-checklist.md`: bench, safety, cycle, and app checks.
- `docs/prototype/prototype-acceptance-report.md`: physical prototype sign-off template.
- `docs/prototype/realitykit-usdz.md`: Xcode, RealityKit, and AR Quick Look notes.
- `docs/hardware-integration-plan.md`: backend/admin/ESP32 integration sequence.
- `docs/production-deployment-runbook.md`: pilot deployment and rollback runbook.
- `docs/go-live-master-checklist.md`: master demo, software, hardware, and pilot readiness tracker.

## Pilot Deployment Assets

Production-oriented Docker assets are included for a pilot stack:

```bash
cp .env.example .env
docker compose -f deployment/docker-compose.production.yml --env-file .env up --build
```

Generate a machine QR sticker PNG:

```bash
npm run qr:machine -- NEK-DEL-001 https://app.nektron.example
```

The QR image is written to `output/qr/NEK-DEL-001.png`.

## Telemetry Simulator

The admin dashboard can run a mock telemetry stream for a selected machine. Use it before real ESP32 hardware is connected:

1. Open `http://localhost:5174`.
2. Select `NEK-DEL-001`.
3. Click `Start simulator` in Machine Health.
4. Watch Live Telemetry update and test simulated fault handling.

## Blender Model

Run the model generator from Blender:

```bash
blender --background --python 3d/scripts/build_nektron_machine.py
```

The script builds a scene with the kiosk body, LED frame, glass chamber, top ad display, circular QR/process display, helmet stand, blower, UV bars, mist nozzle, heater block, airflow arrows, and a basic cleaning animation timeline.

If Apple `usdz_converter` is not available, package the generated USD as USDZ:

```bash
python3 3d/scripts/package_usdz.py
```

## Firmware

Open `firmware/esp32/nektron_station/nektron_station.ino` in Arduino IDE with ESP32 board support installed. Update Wi-Fi and API constants before flashing.
