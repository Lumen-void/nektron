import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Activity,
  BadgeIndianRupee,
  CheckCircle2,
  Clock,
  Cuboid,
  History,
  Home,
  MapPin,
  Play,
  QrCode,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Video,
  Wifi,
  WifiOff
} from "lucide-react";
import EngineeringViewer from "./EngineeringViewer.jsx";
import "./styles.css";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
const USER_ID = "user_demo";

const stageOrder = [
  "starting",
  "air_cleaning",
  "uv_sanitizing",
  "mist_deodorizing",
  "drying",
  "done"
];

const stageCopy = {
  idle: "Ready",
  starting: "Starting",
  air_cleaning: "Air Cleaning",
  uv_sanitizing: "UV Sanitizing",
  mist_deodorizing: "Mist Deodorizing",
  drying: "Drying",
  done: "Complete",
  error: "Error",
  service_required: "Service Required"
};

function loadRazorpayCheckout() {
  if (window.Razorpay) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = resolve;
    script.onerror = () => reject(new Error("Unable to load Razorpay Checkout"));
    document.body.appendChild(script);
  });
}

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [machineCode, setMachineCode] = useState("NEK-DEL-001");
  const [machine, setMachine] = useState(null);
  const [status, setStatus] = useState(null);
  const [order, setOrder] = useState(null);
  const [session, setSession] = useState(null);
  const [history, setHistory] = useState([]);
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [sanitizationReport, setSanitizationReport] = useState(null);
  const [message, setMessage] = useState("Scan or enter a NEKTRON machine code to begin.");
  const [loading, setLoading] = useState(false);

  const currentStage = status?.current_stage || machine?.current_stage || "idle";
  const progress = useMemo(() => {
    const index = stageOrder.indexOf(currentStage);
    if (currentStage === "done") return 100;
    if (index < 0) return 0;
    return Math.round(((index + 1) / stageOrder.length) * 100);
  }, [currentStage]);

  async function api(path, options = {}) {
    const response = await fetch(`${API_BASE}${path}`, {
      headers: { "Content-Type": "application/json", ...(options.headers || {}) },
      ...options
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Request failed");
    return data;
  }

  async function scanMachine(event) {
    event?.preventDefault();
    setLoading(true);
    try {
      const data = await api("/scan", {
        method: "POST",
        body: JSON.stringify({ machine_code: machineCode.trim() })
      });
      setMachine(data.machine);
      setStatus(null);
      setOrder(null);
      setMessage(`${data.machine.name} detected at ${data.machine.location_name}.`);
      const qr = await api(`/qr/${data.machine.machine_code}`);
      setQrDataUrl(qr.qrDataUrl);
      await refreshHistory();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function refreshStatus(target = machine) {
    if (!target) return;
    const data = await api(`/machines/${target.machine_code}/status`);
    setStatus(data.status);
  }

  async function refreshHistory() {
    const data = await api(`/users/${USER_ID}/history`);
    setHistory(data.history);
    const latest = data.history[0];
    if (latest?.id) {
      const report = await api(`/usage/${latest.id}/report`);
      setSanitizationReport(report.report);
    }
  }

  async function createPayment() {
    if (!machine) return;
    setLoading(true);
    try {
      const data = await api("/payments/create-order", {
        method: "POST",
        body: JSON.stringify({ machine_code: machine.machine_code, amount: machine.price })
      });
      setOrder(data.order);
      setMessage(data.order.provider === "razorpay"
        ? "Razorpay order created. Complete checkout to start Quick Clean."
        : "Mock Razorpay order created. Confirm payment to start Quick Clean.");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function startClean() {
    if (!machine || !order) return;
    setLoading(true);
    try {
      let verification;
      if (order.provider === "razorpay") {
        await loadRazorpayCheckout();
        const response = await new Promise((resolve, reject) => {
          const checkout = new window.Razorpay({
            key: order.checkout_key_id,
            amount: order.amount_subunits,
            currency: order.currency,
            name: "NEKTRON",
            description: "Quick helmet cleaning",
            order_id: order.provider_order_id,
            prefill: { contact: "9999999999" },
            theme: { color: "#ef233c" },
            handler: resolve,
            modal: { ondismiss: () => reject(new Error("Payment cancelled")) }
          });
          checkout.open();
        });
        verification = await api("/payments/verify", {
          method: "POST",
          body: JSON.stringify({
            order_id: order.id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature
          })
        });
      } else {
        verification = await api("/payments/verify", {
          method: "POST",
          body: JSON.stringify({ order_id: order.id, paymentStatus: "success" })
        });
      }
      const data = await api(`/machines/${machine.machine_code}/start`, {
        method: "POST",
        body: JSON.stringify({
          user_id: USER_ID,
          service_type: "quick_clean",
          amount: order.amount,
          payment_id: verification.payment.payment_id,
          payment_status: "paid"
        })
      });
      setSession(data.session);
      setSanitizationReport(data.session.sanitization_report);
      setMachine(data.machine);
      setMessage("Quick Clean started. Keep the helmet inside until the cycle completes.");
      await refreshStatus(data.machine);
      await refreshHistory();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  function goTo(nextPath) {
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    scanMachine();
  }, []);

  useEffect(() => {
    if (!machine) return undefined;
    const timer = setInterval(() => {
      refreshStatus().catch((error) => setMessage(error.message));
      refreshHistory().catch(() => {});
    }, 1800);
    return () => clearInterval(timer);
  }, [machine?.machine_code]);

  if (path === "/engineering") {
    return <EngineeringViewer stage={currentStage} variant="cad" />;
  }

  return (
    <main className="app-shell">
      <section className="hero-panel">
        <nav className="topbar">
          <div className="brand-mark">
            <span className="brand-icon">N</span>
            <span>NEKTRON</span>
          </div>
          <div className="top-actions">
            <button className="nav-action active" onClick={() => goTo("/")}>
              <Home size={16} />
              Operate
            </button>
            <button className="nav-action" onClick={() => goTo("/engineering")}>
              <Cuboid size={16} />
              3D CAD
            </button>
            <div className="status-pill">
              {status?.is_online ? <Wifi size={16} /> : <WifiOff size={16} />}
              {status?.is_online ? "Machine online" : "Machine offline"}
            </div>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <h1>Smart helmet cleaning from your phone.</h1>
            <p>
              Scan the kiosk QR, pay ₹49, place the helmet, and watch the 3-minute cleaning
              cycle update live.
            </p>
            <form className="scan-box" onSubmit={scanMachine}>
              <label htmlFor="machineCode">Machine QR / Code</label>
              <div className="scan-row">
                <input
                  id="machineCode"
                  value={machineCode}
                  onChange={(event) => setMachineCode(event.target.value)}
                  placeholder="NEK-DEL-001"
                />
                <button type="submit" disabled={loading}>
                  <ScanLine size={18} />
                  Scan
                </button>
              </div>
            </form>
            <div className="message-line">{message}</div>
          </div>

          <div className="machine-card">
            <div className="ad-screen">
              <Video size={18} />
              Powered by Laila · Hygiene loop
            </div>
            <div className="kiosk">
              <div className="kiosk-led" />
              <div className="round-display">
                {currentStage === "idle" ? <QrCode size={42} /> : <Activity size={42} />}
                <span>{stageCopy[currentStage]}</span>
              </div>
              <div className="kiosk-brand">NEKTRON</div>
              <div className="status-strip">
                <span>SCAN QR</span>
                <i className="red" />
                <span>PAY & START</span>
                <i className="red glow" />
                <span>DONE</span>
                <i className="green" />
              </div>
              <div className="glass-door">
                <div className="helmet-shape" />
                <div className="uv-line one" />
                <div className="uv-line two" />
                <div className="mist-cloud" />
              </div>
              <div className="safe-ride">CLEAN HELMET. SAFE RIDE.</div>
              <div className="service-bay" />
            </div>
          </div>
        </div>
      </section>

      <section className="workflow-grid">
        <article className="panel machine-detail">
          <div className="panel-title">
            <MapPin size={18} />
            Machine Detail
          </div>
          {machine ? (
            <>
              <h2>{machine.name}</h2>
              <dl>
                <div><dt>ID</dt><dd>{machine.machine_code}</dd></div>
                <div><dt>Location</dt><dd>{machine.location_name}</dd></div>
                <div><dt>Status</dt><dd>{status?.status || machine.status}</dd></div>
                <div><dt>Helmet Cleaning</dt><dd>₹{machine.price} · {machine.estimated_minutes} min</dd></div>
              </dl>
              <div className="sensor-strip">
                <span>{status?.door_closed ? "Door closed" : "Door open"}</span>
                <span>{status?.temperature ?? machine.temperature}°C</span>
                <span>{status?.mist_level ?? machine.mist_level}% mist</span>
              </div>
              {qrDataUrl && (
                <div className="machine-qr-card">
                  <img src={qrDataUrl} alt={`${machine.machine_code} QR`} />
                  <span>Machine QR value: {machine.qr_code_value}</span>
                </div>
              )}
              <button className="primary-action" onClick={createPayment} disabled={loading || !status?.is_online}>
                <BadgeIndianRupee size={18} />
                Create Payment
              </button>
            </>
          ) : (
            <p>No machine selected.</p>
          )}
        </article>

        <article className="panel payment-panel">
          <div className="panel-title">
            <ShieldCheck size={18} />
            Payment & Start
          </div>
          <div className="payment-card">
            <div>
              <span>Service</span>
              <strong>Helmet Cleaning</strong>
            </div>
            <div>
              <span>Payment</span>
              <strong>{order ? `₹${order.amount} ready` : "Not created"}</strong>
            </div>
          </div>
          <button className="start-action" onClick={startClean} disabled={loading || !order}>
            <Play size={18} />
            Pay & Start Cleaning
          </button>
          {session && <p className="session-note">Session {session.id} is linked to this clean.</p>}
        </article>

        <article className="panel live-panel">
          <div className="panel-title">
            <Sparkles size={18} />
            Live Cleaning
          </div>
          <div className="progress-ring" style={{ "--progress": `${progress}%` }}>
            <span>{progress}%</span>
          </div>
          <div className="stage-list">
            {stageOrder.map((stage) => (
              <div className={stage === currentStage || (currentStage === "done" && stage === "done") ? "stage active" : "stage"} key={stage}>
                <CheckCircle2 size={16} />
                {stageCopy[stage]}
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="report-section">
        <article className="panel report-panel">
          <div className="panel-title">
            <ShieldCheck size={18} />
            Helmet Sanitization Report
          </div>
          {sanitizationReport ? (
            <>
              <div className="report-status">
                <span>{sanitizationReport.status === "complete" ? "After-clean report ready" : "Before-clean baseline ready"}</span>
                <strong>{sanitizationReport.method}</strong>
              </div>
              <div className="before-after-grid">
                <div className="report-card before">
                  <span>Before</span>
                  <strong>{sanitizationReport.before.hygiene_score}/100</strong>
                  <small>Germ load: {sanitizationReport.before.estimated_germ_load}</small>
                  <small>Odor: {sanitizationReport.before.odor_level}</small>
                  <small>Moisture: {sanitizationReport.before.moisture_level}</small>
                </div>
                <div className="report-card after">
                  <span>After</span>
                  <strong>{sanitizationReport.after ? `${sanitizationReport.after.hygiene_score}/100` : "Pending"}</strong>
                  <small>Germ load: {sanitizationReport.after?.estimated_germ_load || "Pending"}</small>
                  <small>Odor: {sanitizationReport.after?.odor_level || "Pending"}</small>
                  <small>Drying: {sanitizationReport.after?.hot_air_drying || "Pending"}</small>
                </div>
              </div>
              <div className="report-proof">
                <span>UV-C</span>
                <span>Mist deodorized</span>
                <span>Hot-air dried</span>
                <strong>{sanitizationReport.improvement?.rider_message || "Report will complete when the cycle finishes."}</strong>
              </div>
            </>
          ) : (
            <p>Start a helmet cleaning session to generate the before/after sanitization report.</p>
          )}
        </article>
      </section>

      <section className="lower-grid">
        <article className="panel">
          <div className="panel-title">
            <History size={18} />
            History
          </div>
          <div className="history-list">
            {history.length === 0 ? (
              <p>No cleans yet.</p>
            ) : (
              history.slice(0, 5).map((item) => (
                <div className="history-item" key={item.id}>
                  <span>{item.service_type}</span>
                  <strong>₹{item.amount}</strong>
                  <small>{item.machine_status}</small>
                </div>
              ))
            )}
          </div>
        </article>
        <article className="panel tutorial-panel">
          <div className="panel-title">
            <Clock size={18} />
            Tutorial
          </div>
          <ol>
            <li>Place helmet on the chamber stand.</li>
            <li>Close the transparent front door.</li>
            <li>Scan QR, pay, and wait for completion.</li>
          </ol>
        </article>
      </section>

    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
