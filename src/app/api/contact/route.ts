import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas/contact";
import { sendEmail } from "@/lib/email";

// Contact form handler.
// Delivery: emails the message to jazzkitchencpt@gmail.com via Resend when
// RESEND_API_KEY is set. Without a key, the message is logged to the server
// console and the form still reports success.

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

  const parsed = contactFormSchema.safeParse(raw);
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

  const m = parsed.data;

  const text = [
    `New message from ${m.name}`,
    "",
    `Phone: ${m.phone}`,
    m.email ? `Email: ${m.email}` : null,
    "",
    "Message:",
    m.message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <h2>New contact form message</h2>
    <p><strong>From:</strong> ${escapeHtml(m.name)}</p>
    <ul>
      <li><strong>Phone:</strong> ${escapeHtml(m.phone)}</li>
      ${m.email ? `<li><strong>Email:</strong> ${escapeHtml(m.email)}</li>` : ""}
    </ul>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(m.message).replace(/\n/g, "<br/>")}</p>
  `;

  const result = await sendEmail({
    subject: `Contact form: ${m.name}`,
    text,
    html,
    replyTo: m.email,
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
