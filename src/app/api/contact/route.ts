import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas/contact";

// Placeholder contact form handler.
// TODO (Dino): Wire this up to an email service (Resend, Postmark, SendGrid)
// or forward to Formspree/Web3Forms. For now it validates and logs.

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

  const message = parsed.data;

  console.log("[contact-form]", {
    receivedAt: new Date().toISOString(),
    ...message,
  });

  return NextResponse.json({ ok: true });
}
