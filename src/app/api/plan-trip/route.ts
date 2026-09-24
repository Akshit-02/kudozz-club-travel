import { NextResponse } from "next/server";
import { escapeHtml, isValidEmail, sendNotificationEmail } from "@/lib/mailer";

export const runtime = "nodejs";

// Optional fields, in the order they appear in the notification email.
const OPTIONAL_FIELDS: [key: string, label: string, max: number][] = [
  ["phone", "Phone", 30],
  ["departureCity", "Departure city", 120],
  ["travelDates", "Travel dates", 120],
  ["travelers", "Number of travellers", 20],
  ["adults", "Adults", 3],
  ["children", "Children", 3],
  ["tripType", "Trip type", 60],
  ["budget", "Budget", 60],
  ["accommodation", "Accommodation preference", 60],
  ["specialRequirements", "Special requirements", 300],
  ["sourcePage", "Came from", 200],
];

function str(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot: real visitors never see this field. Pretend success for bots.
  if (str(body.company, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = str(body.name, 120);
  const email = str(body.email, 200);
  const destination = str(body.destination, 200);
  const message = str(body.message, 3000);

  if (!name || !email || !destination) {
    return NextResponse.json(
      { error: "Name, email, and destination are required." },
      { status: 400 },
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const optionalRows = OPTIONAL_FIELDS.map(([key, label, max]) => [label, str(body[key], max)])
    .filter(([, value]) => value)
    .map(([label, value]) => `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>`)
    .join("\n");

  try {
    await sendNotificationEmail({
      subject: `New Trip Planning Enquiry: ${destination}`,
      replyTo: email,
      html: `
        <h2>New trip-planning enquiry from club.kudozz.in</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Destination:</strong> ${escapeHtml(destination)}</p>
        ${optionalRows}
        ${message ? `<p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>` : ""}
      `,
    });
  } catch (err) {
    console.error("Failed to send trip planning enquiry email:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your enquiry. Please try again or email connect@kudozz.in directly." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
