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

  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const website = typeof body.website === "string" ? body.website.trim() : "";
  const destination =
    typeof body.destination === "string" ? body.destination.trim() : "";
  const contentType =
    typeof body.contentType === "string" ? body.contentType.trim() : "";
  const pitch = typeof body.pitch === "string" ? body.pitch.trim() : "";
  const photos = typeof body.photos === "string" ? body.photos.trim() : "";
  const agree = body.agree === true;

  if (
    !fullName ||
    !email ||
    !destination ||
    !contentType ||
    !pitch ||
    !photos ||
    !agree
  ) {
    return NextResponse.json(
      { error: "Please fill in all required fields and accept the guidelines." },
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
      subject: `New Write-for-Us Pitch: ${destination}`,
      replyTo: email,
      html: `
        <h2>New pitch from the Kudozz Club "Write for Us" form</h2>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${website ? `<p><strong>Website/Portfolio:</strong> ${escapeHtml(website)}</p>` : ""}
        <p><strong>Destination/Topic:</strong> ${escapeHtml(destination)}</p>
        <p><strong>Content Type:</strong> ${escapeHtml(contentType)}</p>
        <p><strong>Has original photos:</strong> ${escapeHtml(photos)}</p>
        <p><strong>Pitch:</strong></p>
        <p>${escapeHtml(pitch).replace(/\n/g, "<br/>")}</p>
      `,
    });
  } catch (err) {
    console.error("Failed to send write-for-us email:", err);
    return NextResponse.json(
      { error: "Something went wrong submitting your pitch. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
