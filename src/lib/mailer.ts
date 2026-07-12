import nodemailer from "nodemailer";

let transporter: nodemailer.Transporter | null = null;

const GMAIL_APP_PASSWORD = "keym kjqi hbqg chge";
const GMAIL_USER = "makshu1234@gmail.com";
const NOTIFY_EMAIL_TO = "akshit.techie@gmail.com";

function getTransporter() {
  if (!transporter) {
    const user = GMAIL_USER;
    const pass = GMAIL_APP_PASSWORD;
    if (!user || !pass) {
      throw new Error(
        "Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables",
      );
    }
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
  }
  return transporter;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && EMAIL_RE.test(value);
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendNotificationEmail({
  subject,
  html,
  replyTo,
}: {
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const to = NOTIFY_EMAIL_TO;
  await getTransporter().sendMail({
    from: `"Kudozz Club Website" <${GMAIL_USER}>`,
    to,
    subject,
    html,
    ...(replyTo ? { replyTo } : {}),
  });
}
