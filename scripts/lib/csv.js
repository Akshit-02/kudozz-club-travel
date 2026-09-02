// Tiny dependency-free CSV reader/writer. Handles the common cases:
// quoted fields, embedded commas, embedded quotes ("" escaping), and both
// \n and \r\n line endings. Not a full RFC4180 implementation, but enough
// for hand-maintained campaign CSVs.

const fs = require("fs");

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  const pushField = () => {
    row.push(field);
    field = "";
  };
  const pushRow = () => {
    pushField();
    rows.push(row);
    row = [];
  };

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        field += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      pushField();
    } else if (char === "\r") {
      // skip; \n (or end of input) handles the row break
    } else if (char === "\n") {
      pushRow();
    } else {
      field += char;
    }
  }

  // last field/row if the file doesn't end with a newline
  if (field.length > 0 || row.length > 0) {
    pushRow();
  }

  return rows.filter((r) => !(r.length === 1 && r[0] === ""));
}

/** Reads a CSV file with a header row and returns an array of plain objects. */
function readCsvFile(path) {
  if (!fs.existsSync(path)) return [];
  const text = fs.readFileSync(path, "utf8");
  const rows = parseCsv(text);
  if (rows.length === 0) return [];

  const header = rows[0].map((h) => h.trim());
  return rows.slice(1).map((r) => {
    const obj = {};
    header.forEach((key, idx) => {
      obj[key] = (r[idx] ?? "").trim();
    });
    return obj;
  });
}

function csvEscape(value) {
  const str = String(value ?? "");
  if (/[",\n\r]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function toCsvLine(fields) {
  return fields.map(csvEscape).join(",");
}

/**
 * Appends one row (object) to a CSV file, writing the header first if the
 * file doesn't exist yet. `columns` fixes the column order.
 */
function appendCsvRow(path, columns, rowObject) {
  const fileExists = fs.existsSync(path);
  if (!fileExists) {
    fs.writeFileSync(path, toCsvLine(columns) + "\n", "utf8");
  }
  const line = toCsvLine(columns.map((c) => rowObject[c] ?? ""));
  fs.appendFileSync(path, line + "\n", "utf8");
}

module.exports = { parseCsv, readCsvFile, appendCsvRow, toCsvLine };
