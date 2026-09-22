import { NextResponse } from "next/server";
import { escapeHtml, isValidEmail, sendNotificationEmail } from "@/lib/mailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const destination = typeof body.destination === "string" ? body.destination.trim() : "";
  const travelDates = typeof body.travelDates === "string" ? body.travelDates.trim() : "";
  const travelers = typeof body.travelers === "string" ? body.travelers.trim() : "";
  const tripType = typeof body.tripType === "string" ? body.tripType.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

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

  try {
    await sendNotificationEmail({
      subject: `New Trip Planning Enquiry: ${destination}`,
      replyTo: email,
      html: `
        <h2>New trip-planning enquiry from club.kudozz.in/plan-your-trip</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Destination:</strong> ${escapeHtml(destination)}</p>
        ${travelDates ? `<p><strong>Travel dates:</strong> ${escapeHtml(travelDates)}</p>` : ""}
        ${travelers ? `<p><strong>Number of travelers:</strong> ${escapeHtml(travelers)}</p>` : ""}
        ${tripType ? `<p><strong>Trip type:</strong> ${escapeHtml(tripType)}</p>` : ""}
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
