import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  AlertTriangle,
  BarChart3,
  CircleDollarSign,
  Cpu,
  DoorClosed,
  Droplets,
  Film,
  Flame,
  Gauge,
  MonitorPlay,
  Plus,
  Power,
  RefreshCw,
  Thermometer,
  Wifi,
  WifiOff
} from "lucide-react";
import "./styles.css";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
const ADMIN_API_KEY = import.meta.env.VITE_ADMIN_API_KEY || "";

function App() {
  const [adminToken, setAdminToken] = useState(() => localStorage.getItem("nektron_admin_token") || "");
  const [adminPassword, setAdminPassword] = useState("");
  const [authRequired, setAuthRequired] = useState(false);
  const [dashboard, setDashboard] = useState(null);
  const [machines, setMachines] = useState([]);
  const [usage, setUsage] = useState([]);
  const [faults, setFaults] = useState([]);
  const [ads, setAds] = useState([]);
  const [telemetry, setTelemetry] = useState([]);
  const [selectedMachineCode, setSelectedMachineCode] = useState("NEK-DEL-001");
  const [message, setMessage] = useState("Admin console connected to Sprint 1 backend.");
  const [newMachineName, setNewMachineName] = useState("");

  const selectedMachine = useMemo(
    () => machines.find((machine) => machine.machine_code === selectedMachineCode) || machines[0],
    [machines, selectedMachineCode]
  );

  async function api(path, options = {}) {
    const response = await fetch(`${API_BASE}${path}`, {
      headers: {
        "Content-Type": "application/json",
        ...(ADMIN_API_KEY ? { "x-admin-api-key": ADMIN_API_KEY } : {}),
        ...(adminToken ? { Authorization: `Bearer ${adminToken}` } : {}),
        ...(options.headers || {})
      },
      ...options
    });
    const data = await response.json();
    if (response.status === 401) setAuthRequired(true);
    if (!response.ok) throw new Error(data.error || "Request failed");
    return data;
  }

  async function login(event) {
    event.preventDefault();
    try {
      const data = await api("/admin/auth/login", {
        method: "POST",
        body: JSON.stringify({ password: adminPassword })
      });
      localStorage.setItem("nektron_admin_token", data.token);
      setAdminToken(data.token);
      setAuthRequired(false);
      setAdminPassword("");
      setMessage("Admin session connected.");
      await loadAll();
    } catch (error) {
      setMessage(error.message);
    }
  }

  async function loadAll() {
    try {
      const [dash, machineData, usageData, faultData, adData, telemetryData] = await Promise.all([
        api("/admin/dashboard"),
        api("/admin/machines"),
        api("/admin/usage"),
        api("/admin/faults"),
        api("/admin/ads"),
        api(`/admin/telemetry?limit=40${selectedMachineCode ? `&machine_code=${selectedMachineCode}` : ""}`)
      ]);
      setDashboard(dash.dashboard);
      setMachines(machineData.machines);
      setUsage(usageData.usage);
      setFaults(faultData.faults);
      setAds(adData.ads);
      setTelemetry(telemetryData.telemetry);
      if (!selectedMachineCode && machineData.machines[0]) {
        setSelectedMachineCode(machineData.machines[0].machine_code);
      }
    } catch (error) {
      setMessage(error.message);
    }
  }

  async function addMachine(event) {
    event.preventDefault();
    try {
      const code = `NEK-${Math.random().toString(36).slice(2, 5).toUpperCase()}-${Math.floor(Math.random() * 900 + 100)}`;
      const data = await api("/admin/machines", {
        method: "POST",
        body: JSON.stringify({
          machine_code: code,
          name: newMachineName || "NEKTRON Expansion Station",
          location_name: "Unassigned Partner Site",
          price: 49,
          estimated_minutes: 3,
          dimensions_mm: { width: 600, depth: 430, height: 1020 }
        })
      });
      setNewMachineName("");
      setSelectedMachineCode(data.machine.machine_code);
      setMessage(`Machine ${data.machine.machine_code} generated with QR value.`);
      await loadAll();
    } catch (error) {
      setMessage(error.message);
    }
  }

  async function createAd() {
    try {
      const data = await api("/admin/ads", {
        method: "POST",
        body: JSON.stringify({
          title: `NEKTRON Brand Loop ${ads.length + 1}`,
          file_url: "https://example.com/nektron-brand-loop.mp4",
          thumbnail_url: "https://example.com/nektron-brand-loop.jpg",
          duration: 18,
          status: "active"
        })
      });
      setMessage(`Ad ${data.ad.title} created.`);
      await loadAll();
    } catch (error) {
      setMessage(error.message);
    }
  }

  async function simulator(action) {
    if (!selectedMachine) return;
    try {
      const body = action === "fault"
        ? { fault_type: "simulated_service_check", severity: "warning", message: "Admin simulator generated a service check." }
        : {};
      await api(`/admin/simulators/${selectedMachine.machine_code}/${action}`, {
        method: "POST",
        body: JSON.stringify(body)
      });
      setMessage(`Simulator ${action} command sent for ${selectedMachine.machine_code}.`);
      await loadAll();
    } catch (error) {
      setMessage(error.message);
    }
  }

  async function resolveFault(faultId) {
    try {
      await api(`/admin/faults/${faultId}/resolve`, {
        method: "POST",
        body: JSON.stringify({ resolved_by: "admin_dashboard" })
      });
      setMessage("Fault marked resolved.");
      await loadAll();
    } catch (error) {
      setMessage(error.message);
    }
  }

  useEffect(() => {
    loadAll();
    const timer = setInterval(loadAll, 2500);
    return () => clearInterval(timer);
  }, [adminToken]);

  if (authRequired && !ADMIN_API_KEY && !adminToken) {
    return (
      <main className="login-shell">
        <form className="login-panel" onSubmit={login}>
          <div className="brand">
            <span>N</span>
            <strong>NEKTRON</strong>
          </div>
          <h1>Admin Login</h1>
          <p>{message}</p>
          <input
            type="password"
            value={adminPassword}
            onChange={(event) => setAdminPassword(event.target.value)}
            placeholder="Admin password"
            autoFocus
          />
          <button type="submit">Unlock Console</button>
        </form>
      </main>
    );
  }

  return (
    <main className="admin-shell">
      <aside className="sidebar">
        <div className="brand">
          <span>N</span>
          <strong>NEKTRON</strong>
        </div>
        <nav>
          <a href="#dashboard"><BarChart3 size={18} /> Dashboard</a>
          <a href="#machines"><Cpu size={18} /> Machines</a>
          <a href="#faults"><AlertTriangle size={18} /> Faults</a>
          <a href="#ads"><MonitorPlay size={18} /> Ads</a>
        </nav>
      </aside>

      <section className="workspace">
        <header className="admin-header">
          <div>
            <h1>Machine Network Command</h1>
            <p>{message}</p>
          </div>
          <button onClick={loadAll}>
            <RefreshCw size={18} />
            Refresh
          </button>
        </header>

        <section id="dashboard" className="kpi-grid">
          <Kpi icon={<Cpu />} label="Total machines" value={dashboard?.total_machines ?? 0} />
          <Kpi icon={<Wifi />} label="Online" value={dashboard?.online_machines ?? 0} />
          <Kpi icon={<WifiOff />} label="Offline" value={dashboard?.offline_machines ?? 0} />
          <Kpi icon={<CircleDollarSign />} label="Revenue" value={`₹${dashboard?.revenue ?? 0}`} />
          <Kpi icon={<Gauge />} label="Today's usage" value={dashboard?.today_usage ?? 0} />
          <Kpi icon={<AlertTriangle />} label="Active faults" value={dashboard?.active_faults ?? 0} />
        </section>

        <section id="machines" className="content-grid">
          <article className="panel wide">
            <div className="panel-head">
              <h2>Machine Management</h2>
              <form onSubmit={addMachine} className="add-form">
                <input
                  value={newMachineName}
                  onChange={(event) => setNewMachineName(event.target.value)}
                  placeholder="New machine name"
                />
                <button type="submit">
                  <Plus size={16} />
                  Add
                </button>
              </form>
            </div>
            <div className="machine-table">
              <div className="table-row table-head">
                <span>Machine</span>
                <span>Location</span>
                <span>Stage</span>
                <span>Online</span>
              </div>
              {machines.map((machine) => (
                <button
                  className={machine.machine_code === selectedMachine?.machine_code ? "table-row active" : "table-row"}
                  key={machine.machine_code}
                  onClick={() => setSelectedMachineCode(machine.machine_code)}
                >
                  <span>{machine.machine_code}</span>
                  <span>{machine.location_name}</span>
                  <span>{machine.stage_label}</span>
                  <span>{machine.is_online ? "Yes" : "No"}</span>
                </button>
              ))}
            </div>
          </article>

          <article className="panel health-card">
            <h2>Machine Health</h2>
            {selectedMachine ? (
              <>
                <div className="health-title">
                  <strong>{selectedMachine.name}</strong>
                  <span>{selectedMachine.machine_code}</span>
                  {selectedMachine.api_key && <code>{selectedMachine.api_key}</code>}
                </div>
                <Metric icon={<DoorClosed />} label="Door" value={selectedMachine.door_closed ? "Closed" : "Open"} />
                <Metric icon={<Thermometer />} label="Temperature" value={`${selectedMachine.temperature}°C`} />
                <Metric icon={<Droplets />} label="Mist liquid" value={`${selectedMachine.mist_level}%`} />
                <Metric icon={<Power />} label="Blower" value={selectedMachine.blower_on ? "On" : "Off"} />
                <Metric icon={<Flame />} label="Heater" value={selectedMachine.heater_on ? "On" : "Off"} />
                <Metric icon={<Gauge />} label="UV" value={selectedMachine.uv_on ? "On" : "Off"} />
                <div className="sim-actions">
                  <button onClick={() => simulator("start")}>Start simulator</button>
                  <button onClick={() => simulator("stop")}>Stop</button>
                  <button onClick={() => simulator("fault")}>Sim fault</button>
                </div>
              </>
            ) : (
              <p>No machine selected.</p>
            )}
          </article>
        </section>

        <section className="content-grid">
          <article className="panel">
            <h2>Usage Logs</h2>
            <div className="log-list">
              {usage.length === 0 ? <p>No sessions yet.</p> : usage.map((item) => (
                <div className="log-item" key={item.id}>
                  <span>{item.machine_code}</span>
                  <strong>{item.service_type}</strong>
                  <small>₹{item.amount} · {item.machine_status}</small>
                </div>
              ))}
            </div>
          </article>

          <article id="faults" className="panel">
            <h2>Fault Logs</h2>
            <div className="log-list">
              {faults.map((fault) => (
                <div className={`log-item severity-${fault.severity}`} key={fault.id}>
                  <span>{fault.machine_code}</span>
                  <strong>{fault.fault_type}</strong>
                  <small>{fault.severity} · {fault.resolved ? "resolved" : "open"}</small>
                  {!fault.resolved && <button className="mini-action" onClick={() => resolveFault(fault.id)}>Resolve</button>}
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="panel">
          <div className="panel-head">
            <h2>Live Telemetry</h2>
            <span className="muted">Simulator and ESP32 heartbeat stream</span>
          </div>
          <div className="telemetry-table">
            <div className="telemetry-row telemetry-head">
              <span>Time</span>
              <span>Stage</span>
              <span>Temp</span>
              <span>Mist</span>
              <span>Door</span>
              <span>Source</span>
            </div>
            {telemetry.length === 0 ? (
              <p className="muted">No telemetry yet. Start the simulator from Machine Health.</p>
            ) : telemetry.slice(0, 12).map((item) => (
              <div className="telemetry-row" key={item.id}>
                <span>{new Date(item.created_at).toLocaleTimeString()}</span>
                <span>{item.current_stage}</span>
                <span>{item.temperature}°C</span>
                <span>{item.mist_level}%</span>
                <span>{item.door_closed ? "Closed" : "Open"}</span>
                <span>{item.source}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="ads" className="panel">
          <div className="panel-head">
            <h2>Ad / Video Management</h2>
            <button onClick={createAd}>
              <Film size={16} />
              Add demo ad
            </button>
          </div>
          <div className="ad-grid">
            {ads.map((ad) => (
              <div className="ad-card" key={ad.id}>
                <div className="ad-thumb"><MonitorPlay size={30} /></div>
                <strong>{ad.title}</strong>
                <span>{ad.duration}s · {ad.status}</span>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

function Kpi({ icon, label, value }) {
  return (
    <article className="kpi-card">
      <div>{icon}</div>
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  );
}

function Metric({ icon, label, value }) {
  return (
    <div className="metric">
      <span>{icon}{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
