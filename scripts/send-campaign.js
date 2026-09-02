#!/usr/bin/env node
// scripts/send-campaign.js
//
// Reads scripts/input.csv (just `email,name`), sends each recipient the
// plain-text "09" template via nodemailer. For every send, this:
//   - picks one random destination from the DESTINATIONS list below
//   - picks one random SUBJECT, FIRST LINE, SECOND LINE, and BLOG LINE from
//     the variant sections inside the template file itself
// ...so the email is worded differently almost every time, on top of the
// destination varying — see email-templates/09-plaintext-destination-checklist.txt
// for where those variant lines live and how to edit them.
//
// Skips anyone already present in scripts/sent_mails_09.csv, and appends
// every successful send to that file, so re-running the script after an
// interruption is always safe (it never double-sends).
//
// Usage:
//   node scripts/send-campaign.js                 send for real
//   node scripts/send-campaign.js --dry-run        preview only, sends nothing
//   node scripts/send-campaign.js --limit=25       cap how many sends this run
//   node scripts/send-campaign.js --input=scripts/other.csv --sent-log=scripts/other_sent.csv
//
// Configure credentials in scripts/.env first — see scripts/.env.example.

const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

const { loadEnv } = require("./lib/env");
const { readCsvFile, appendCsvRow } = require("./lib/csv");
const {
  loadPlainTextTemplate,
  loadVariantTemplate,
  renderVariantEmail,
  renderTemplate,
} = require("./lib/template");

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const args = { dryRun: false, limit: Infinity };
  for (const raw of argv) {
    if (raw === "--dry-run") args.dryRun = true;
    else if (raw.startsWith("--limit=")) args.limit = Number(raw.split("=")[1]) || Infinity;
    else if (raw.startsWith("--input=")) args.input = raw.split("=")[1];
    else if (raw.startsWith("--sent-log=")) args.sentLog = raw.split("=")[1];
    else if (raw.startsWith("--template=")) args.template = raw.split("=")[1];
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));

// ---------------------------------------------------------------------------
// Destinations — edit this list. One is picked at random for each recipient.
// `name` fills {{DESTINATION}}, `url` fills {{DESTINATION_URL}} in the template.
// ---------------------------------------------------------------------------

const DESTINATIONS = [
  { name: "Manali", url: "https://club.kudozz.in/blog/manali-travel-guide" },
  { name: "Uttarakhand", url: "https://club.kudozz.in/blog/uttarakhand-travel-guide" },
  { name: "Kerala", url: "https://club.kudozz.in/blog/kerala-backwaters-travel-guide" },
  { name: "Goa", url: "https://club.kudozz.in/blog/goa-beaches-travel-guide" },
  { name: "Udaipur", url: "https://club.kudozz.in/blog/udaipur-city-of-lakes-travel-guide" },
  { name: "Meghalaya", url: "https://club.kudozz.in/blog/meghalaya-travel-guide" },
  { name: "Rishikesh", url: "https://club.kudozz.in/blog/rishikesh-adventure-travel-guide" },
  { name: "Ladakh", url: "https://club.kudozz.in/blog/leh-ladakh-road-trip-travel-guide" },
  { name: "Srinagar", url: "https://club.kudozz.in/blog/srinagar-travel-guide" },
  { name: "Darjeeling", url: "https://club.kudozz.in/blog/darjeeling-travel-guide" },
];

function pickRandomDestination() {
  return DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)];
}

// ---------------------------------------------------------------------------
// Paths & config
// ---------------------------------------------------------------------------

const SCRIPTS_DIR = __dirname;
const REPO_ROOT = path.join(SCRIPTS_DIR, "..");

loadEnv(path.join(SCRIPTS_DIR, ".env"));
loadEnv(path.join(REPO_ROOT, ".env")); // fallback: repo-root .env, if present

const INPUT_CSV = path.resolve(REPO_ROOT, args.input || "scripts/input.csv");
const SENT_LOG_CSV = path.resolve(REPO_ROOT, args.sentLog || "scripts/sent_mails_09.csv");
const FAILED_LOG_CSV = SENT_LOG_CSV.replace(/sent_mails_09\.csv$/, "failed_mails_09.csv");
const TEMPLATE_PATH = path.resolve(
  REPO_ROOT,
  args.template || "email-templates/09-plaintext-destination-checklist.txt",
);

const SEND_DELAY_MS = Number(process.env.SEND_DELAY_MS || 3000);

const FROM_NAME = process.env.FROM_NAME || "Arjun @ Kudozz Club";
const FROM_EMAIL = process.env.FROM_EMAIL || process.env.GMAIL_USER;
const REPLY_TO = process.env.REPLY_TO_EMAIL || FROM_EMAIL;

// Template 09's assembled body doesn't use these (it ends at the "Kudozz
// Club" sign-off, no footer) — kept for the other plain-text templates
// (08, 10, 11), which do still reference {{COMPANY_NAME}} / {{COMPANY_ADDRESS}}
// / {{UNSUBSCRIBE_URL}} in their own file text if sent via --template=.
const COMPANY_NAME = process.env.COMPANY_NAME || "Kudozz Club";
const COMPANY_ADDRESS = process.env.COMPANY_ADDRESS || "";
const UNSUBSCRIBE_BASE_URL =
  process.env.UNSUBSCRIBE_BASE_URL || "https://club.kudozz.in/unsubscribe";

const SENT_LOG_COLUMNS = [
  "email",
  "name",
  "destination",
  "subject",
  "sentAt",
  "status",
];
const FAILED_LOG_COLUMNS = ["email", "name", "destination", "error", "attemptedAt"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ---------------------------------------------------------------------------
// Template loading — auto-detects variant-style (SUBJECT 1:, SUBJECT 2:, ...)
// vs. the older single-subject style (SUBJECT:, ALT SUBJECT 1:, ...).
// ---------------------------------------------------------------------------

function loadTemplate(templatePath) {
  const raw = fs.readFileSync(templatePath, "utf8");
  const isVariant = /^SUBJECT\s+\d+:/m.test(raw);

  if (isVariant) {
    const variantTemplate = loadVariantTemplate(templatePath);
    return {
      mode: "variant",
      render: (mergeData) => renderVariantEmail(variantTemplate, mergeData),
      summary: `variant mode — ${variantTemplate.subjects.length} subjects × ${variantTemplate.firstLines.length} first lines × ${variantTemplate.secondLines.length} second lines × ${variantTemplate.blogLines.length} blog lines`,
    };
  }

  const plainTemplate = loadPlainTextTemplate(templatePath);
  return {
    mode: "single",
    render: (mergeData) => ({
      subject: renderTemplate(plainTemplate.subject, mergeData),
      body: renderTemplate(plainTemplate.body, mergeData),
    }),
    summary: "single-subject mode",
  };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function buildTransporter() {
  if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
    });
  }
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: process.env.SMTP_USER
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
    });
  }
  throw new Error(
    "No mail credentials found. Set GMAIL_USER + GMAIL_APP_PASSWORD, or SMTP_HOST " +
      "(+ SMTP_PORT/SMTP_SECURE/SMTP_USER/SMTP_PASS), in scripts/.env — see scripts/.env.example.",
  );
}

function loadAlreadySent(sentLogPath) {
  const rows = readCsvFile(sentLogPath);
  const set = new Set();
  for (const row of rows) {
    if (row.email) set.add(row.email.trim().toLowerCase());
  }
  return set;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const template = loadTemplate(TEMPLATE_PATH);

  console.log(`Template:  ${path.relative(REPO_ROOT, TEMPLATE_PATH)} (${template.summary})`);
  console.log(`Input:     ${path.relative(REPO_ROOT, INPUT_CSV)}`);
  console.log(`Sent log:  ${path.relative(REPO_ROOT, SENT_LOG_CSV)}`);
  console.log(`Mode:      ${args.dryRun ? "DRY RUN (nothing will be sent)" : "LIVE SEND"}`);
  console.log("");

  const rows = readCsvFile(INPUT_CSV);
  if (rows.length === 0) {
    console.log(`No rows found in ${INPUT_CSV}. Nothing to do.`);
    return;
  }

  const alreadySent = loadAlreadySent(SENT_LOG_CSV);
  const seenThisRun = new Set();

  const transporter = args.dryRun ? null : buildTransporter();

  let sentCount = 0;
  let skippedCount = 0;
  let failedCount = 0;

  for (const row of rows) {
    const email = (row.email || "").trim();
    const name = (row.name || row.firstName || "there").trim();
    const firstName = name.split(/\s+/)[0] || "there";
    const key = email.toLowerCase();

    if (!email || !EMAIL_RE.test(email)) {
      console.log(`SKIP  (invalid email)        ${email || "<blank>"}`);
      skippedCount++;
      continue;
    }
    if (alreadySent.has(key) || seenThisRun.has(key)) {
      console.log(`SKIP  (already sent)         ${email}`);
      skippedCount++;
      continue;
    }
    if (sentCount >= args.limit) {
      console.log(`SKIP  (over --limit=${args.limit})   ${email}`);
      skippedCount++;
      continue;
    }

    const destination = pickRandomDestination();

    const mergeData = {
      FIRST_NAME: firstName,
      DESTINATION: destination.name,
      DESTINATION_URL: destination.url,
      COMPANY_NAME,
      COMPANY_ADDRESS,
      UNSUBSCRIBE_URL: `${UNSUBSCRIBE_BASE_URL}?email=${encodeURIComponent(email)}`,
    };

    const { subject, body } = template.render(mergeData);

    if (args.dryRun) {
      console.log("----------------------------------------------------------");
      console.log(`TO:          ${email}`);
      console.log(`DESTINATION: ${destination.name} (random pick)`);
      console.log(`SUBJECT:     ${subject}`);
      console.log(body);
      console.log("----------------------------------------------------------\n");
      seenThisRun.add(key);
      sentCount++;
      continue;
    }

    try {
      await transporter.sendMail({
        from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
        to: email,
        replyTo: REPLY_TO,
        subject,
        text: body,
      });

      appendCsvRow(SENT_LOG_CSV, SENT_LOG_COLUMNS, {
        email,
        name,
        destination: destination.name,
        subject,
        sentAt: new Date().toISOString(),
        status: "sent",
      });

      seenThisRun.add(key);
      sentCount++;
      console.log(`SENT  ${email}  (${destination.name})`);
    } catch (err) {
      failedCount++;
      appendCsvRow(FAILED_LOG_CSV, FAILED_LOG_COLUMNS, {
        email,
        name,
        destination: destination.name,
        error: err.message || String(err),
        attemptedAt: new Date().toISOString(),
      });
      console.error(`FAIL  ${email}  — ${err.message || err}`);
    }

    if (sentCount < args.limit) await sleep(SEND_DELAY_MS);
  }

  console.log("");
  console.log(
    `Done. ${sentCount} ${args.dryRun ? "previewed" : "sent"}, ${skippedCount} skipped, ${failedCount} failed.`,
  );
  if (failedCount > 0) {
    console.log(`Failures logged to ${path.relative(REPO_ROOT, FAILED_LOG_CSV)}`);
  }
}

main().catch((err) => {
  console.error("Fatal error:", err.message || err);
  process.exit(1);
});
