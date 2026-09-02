// Parses the kit's plain-text email templates (email-templates/*.txt) into
// { subject, altSubjects, body }, and renders {{MERGE_TAG}} placeholders.
//
// Two template shapes are supported:
//
// 1. Single-subject templates (08, 10, 11):
//   SUBJECT: ...
//   ALT SUBJECT 1: ...
//   ALT SUBJECT 2: ...
//   <free-form notes, ignored>
//   -----------------------------------------------------------
//   BODY (plain text — paste as-is, no HTML)
//   -----------------------------------------------------------
//   <body text — whatever is in the file's BODY section is sent verbatim,
//    footer included if the file has one>
//
// 2. Variant-based templates (09) — see loadVariantTemplate() below. This
// one assembles its own fixed skeleton in renderVariantEmail() rather than
// reading a body from the file, and — by request — that skeleton ends at
// the "— Arjun / Kudozz Club" sign-off with no unsubscribe/address footer.
// Note: removing that footer is a real compliance decision, not just a
// style choice — CAN-SPAM (US) and similar laws elsewhere require a postal
// address and a working opt-out in commercial email.
//
// A line made up of only dashes ("-----...") is treated as a pure divider
// and skipped wherever it appears in a parsed body.

const fs = require("fs");

const DIVIDER_RE = /^-{3,}$/;

function loadPlainTextTemplate(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const lines = raw.split(/\r?\n/);

  let subject = "";
  const altSubjects = [];
  const bodyLines = [];
  let inBody = false;

  for (const line of lines) {
    if (line.startsWith("SUBJECT:")) {
      subject = line.slice("SUBJECT:".length).trim();
    } else if (line.startsWith("ALT SUBJECT")) {
      const idx = line.indexOf(":");
      if (idx !== -1) altSubjects.push(line.slice(idx + 1).trim());
    } else if (line.trim().startsWith("BODY (plain text")) {
      inBody = true;
    } else if (inBody && DIVIDER_RE.test(line.trim())) {
      // skip pure divider lines, but keep everything else (including the
      // footer that follows the closing divider)
    } else if (inBody) {
      bodyLines.push(line);
    }
  }

  while (bodyLines.length && bodyLines[0].trim() === "") bodyLines.shift();
  while (bodyLines.length && bodyLines[bodyLines.length - 1].trim() === "")
    bodyLines.pop();

  return { subject, altSubjects, body: bodyLines.join("\n") };
}

// ---------------------------------------------------------------------------
// Variant-based templates (currently: 09-plaintext-destination-checklist.txt)
// ---------------------------------------------------------------------------
//
// File shape: numbered lines like
//   SUBJECT 1: ...
//   FIRST LINE 1: ...
//   SECOND LINE 1: ...
//   BLOG LINE 1: ...
// (any count per section, not just 5 — everything else in the file is
// free-form commentary and ignored). Returns one array per section.

const VARIANT_LINE_RE = /^(SUBJECT|FIRST LINE|SECOND LINE|BLOG LINE)\s+\d+:\s*(.*)$/;

function loadVariantTemplate(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const lines = raw.split(/\r?\n/);

  const sections = { SUBJECT: [], "FIRST LINE": [], "SECOND LINE": [], "BLOG LINE": [] };

  for (const line of lines) {
    const match = line.match(VARIANT_LINE_RE);
    if (match) {
      sections[match[1]].push(match[2].trim());
    }
  }

  for (const key of Object.keys(sections)) {
    if (sections[key].length === 0) {
      throw new Error(`Template ${filePath} has no "${key} N:" lines.`);
    }
  }

  return {
    subjects: sections.SUBJECT,
    firstLines: sections["FIRST LINE"],
    secondLines: sections["SECOND LINE"],
    blogLines: sections["BLOG LINE"],
  };
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Picks one random line from each of the variant template's four sections,
 * renders every {{TAG}} in them (two passes — the picked lines can contain
 * {{DESTINATION}} etc., and the assembled skeleton contains {{FIRST_LINE}}
 * etc.), and returns the final { subject, body } for this send.
 */
function renderVariantEmail(variantTemplate, mergeData) {
  const rawSubject = pickRandom(variantTemplate.subjects);
  const firstLine = renderTemplate(pickRandom(variantTemplate.firstLines), mergeData);
  const secondLine = renderTemplate(pickRandom(variantTemplate.secondLines), mergeData);
  const blogLine = renderTemplate(pickRandom(variantTemplate.blogLines), mergeData);

  const subject = renderTemplate(rawSubject, mergeData);

  const skeleton = [
    "Hi {{FIRST_NAME}},",
    "",
    "{{FIRST_LINE}}",
    "",
    "{{SECOND_LINE}}",
    "",
    "{{BLOG_LINE}}",
    "",
    "— Arjun",
    "Kudozz Club",
  ].join("\n");

  const body = renderTemplate(skeleton, {
    ...mergeData,
    FIRST_LINE: firstLine,
    SECOND_LINE: secondLine,
    BLOG_LINE: blogLine,
  });

  return { subject, body };
}

/** Replaces every {{KEY}} in `text` with data[KEY], leaving unknown tags untouched. */
function renderTemplate(text, data) {
  return text.replace(/{{\s*([A-Z0-9_]+)\s*}}/g, (match, key) => {
    const value = data[key];
    return value === undefined || value === null || value === "" ? match : String(value);
  });
}

module.exports = {
  loadPlainTextTemplate,
  loadVariantTemplate,
  renderVariantEmail,
  renderTemplate,
};
