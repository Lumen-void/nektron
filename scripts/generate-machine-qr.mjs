import fs from "node:fs";
import path from "node:path";
import QRCode from "qrcode";

const machineCode = process.argv[2] || "NEK-DEL-001";
const appBaseUrl = process.argv[3] || process.env.NEKTRON_APP_URL || "http://localhost:5173";
const outputDir = path.resolve("output/qr");
const targetUrl = `${appBaseUrl.replace(/\/$/, "")}/?machine=${encodeURIComponent(machineCode)}`;
const outputPath = path.join(outputDir, `${machineCode}.png`);

fs.mkdirSync(outputDir, { recursive: true });
await QRCode.toFile(outputPath, targetUrl, {
  type: "png",
  width: 1024,
  margin: 2,
  errorCorrectionLevel: "H",
  color: {
    dark: "#050505",
    light: "#ffffff"
  }
});

console.log(JSON.stringify({ machineCode, targetUrl, outputPath }, null, 2));

