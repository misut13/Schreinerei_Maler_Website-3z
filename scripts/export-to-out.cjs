const fs = require("fs-extra");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");
const buildDir = path.join(__dirname, "..", ".next");
const publicDir = path.join(__dirname, "..", "public");

async function run() {
  console.log("📦 Kopiere statischen Export...");

  await fs.remove(outDir);
  await fs.ensureDir(outDir);

  // Kopiere HTML-Seiten
  await fs.copy(path.join(buildDir, "server", "app"), outDir, {
    filter: (src) => src.endsWith(".html") || fs.lstatSync(src).isDirectory(),
  });

  // Kopiere _next/static für JS/CSS
  await fs.copy(path.join(buildDir, "static"), path.join(outDir, "_next", "static"));

  // ⬇️ Wichtig: Kopiere public/
  if (await fs.pathExists(publicDir)) {
    await fs.copy(publicDir, outDir);
    console.log("🖼️ Bilder & Assets aus /public wurden kopiert.");
  } else {
    console.warn("⚠️ Kein public-Ordner gefunden. Bilder könnten fehlen.");
  }

  console.log("✅ Export abgeschlossen! Inhalte liegen in /out");
}

run().catch((err) => {
  console.error("❌ Fehler:", err);
  process.exit(1);
});
