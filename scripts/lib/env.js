// Minimal .env loader — no external dependency.
// Reads KEY=VALUE lines, ignores blank lines and lines starting with #,
// strips surrounding quotes, and merges into process.env WITHOUT
// overwriting variables already set in the real environment.

const fs = require("fs");

function loadEnv(path) {
  if (!fs.existsSync(path)) return;

  const content = fs.readFileSync(path, "utf8");
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const eq = line.indexOf("=");
    if (eq === -1) continue;

    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

module.exports = { loadEnv };
