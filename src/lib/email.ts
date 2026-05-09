import { siteConfig } from "@/data/site-config";

// Resend is loaded lazily inside `sendEmail` so the dependency is only required
// when an API key is configured. This keeps local/dev usage working without
// installing the package on the user's environment until they choose to enable
// real email delivery.

const TO = siteConfig.contact.email; // jazzkitchencpt@gmail.com
const FROM = process.env.CONTACT_EMAIL_FROM ?? "Jazzies Kitchen <onboarding@resend.dev>";

export interface EmailPayload {
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
}

export type EmailResult =
  | { ok: true; provider: "resend" }
  | { ok: true; provider: "log" }
  | { ok: false; error: string };

export async function sendEmail(payload: EmailPayload): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // No provider configured. Log so the message is still captured server-side
    // and return success so the UI flow completes.
    console.log("[email:no-provider]", {
      to: TO,
      from: FROM,
      ...payload,
    });
    return { ok: true, provider: "log" };
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      subject: payload.subject,
      text: payload.text,
      html: payload.html,
      replyTo: payload.replyTo,
    });
    if (error) {
      console.error("[email:resend-error]", error);
      return { ok: false, error: error.message };
    }
    return { ok: true, provider: "resend" };
  } catch (err) {
    console.error("[email:exception]", err);
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Unknown email error",
    };
  }
}
