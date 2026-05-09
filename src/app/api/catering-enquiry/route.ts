import { NextResponse } from "next/server";
import { cateringEnquirySchema } from "@/lib/schemas/catering";
import { sendEmail } from "@/lib/email";

// Catering enquiry handler.
// Delivery: emails the enquiry to jazzkitchencpt@gmail.com via Resend
// when RESEND_API_KEY is set in the environment. Without a key, the enquiry
// is logged to the server console and the form still reports success so the
// UX flow works during local development.

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const parsed = cateringEnquirySchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  const e = parsed.data;

  const lines = [
    `New catering enquiry from ${e.fullName}`,
    "",
    `Name: ${e.fullName}`,
    `Phone: ${e.phone}`,
    e.email ? `Email: ${e.email}` : null,
    `Event type: ${e.eventType}`,
    `Event date: ${e.eventDate}`,
    `Guests: ${e.guests}`,
    e.notes ? `\nNotes:\n${e.notes}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <h2>New catering enquiry</h2>
    <p><strong>From:</strong> ${escapeHtml(e.fullName)}</p>
    <ul>
      <li><strong>Phone:</strong> ${escapeHtml(e.phone)}</li>
      ${e.email ? `<li><strong>Email:</strong> ${escapeHtml(e.email)}</li>` : ""}
      <li><strong>Event type:</strong> ${escapeHtml(e.eventType)}</li>
      <li><strong>Event date:</strong> ${escapeHtml(e.eventDate)}</li>
      <li><strong>Guests:</strong> ${e.guests}</li>
    </ul>
    ${e.notes ? `<p><strong>Notes:</strong></p><p>${escapeHtml(e.notes).replace(/\n/g, "<br/>")}</p>` : ""}
  `;

  const result = await sendEmail({
    subject: `Catering enquiry: ${e.eventType} for ${e.guests} on ${e.eventDate}`,
    text: lines,
    html,
    replyTo: e.email,
  });

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: "Email delivery failed" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
