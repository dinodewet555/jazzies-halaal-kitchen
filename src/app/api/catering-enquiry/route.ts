import { NextResponse } from "next/server";
import { cateringEnquirySchema } from "@/lib/schemas/catering";

// Placeholder catering enquiry handler.
// TODO (Dino): Wire this up to Resend, Formspree, or another email/CRM provider.
//   - With Resend: import { Resend } from "resend"; await resend.emails.send({...})
//   - With Formspree: forward to your formspree.io/f/<id> endpoint server-side
//   - Or push to a Google Sheet / Airtable via their API
// For now, the handler validates input and logs to the server console.

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

  const enquiry = parsed.data;

  console.log("[catering-enquiry]", {
    receivedAt: new Date().toISOString(),
    ...enquiry,
  });

  return NextResponse.json({ ok: true });
}
