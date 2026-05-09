import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { buildTelLink, buildWhatsAppLink } from "@/lib/utils/format";

interface StickyMobileBarProps {
  message?: string;
}

export function StickyMobileBar({
  message = siteConfig.ctaMessages.generalOrder,
}: StickyMobileBarProps) {
  const telHref = buildTelLink(siteConfig.contact.phoneDigits);
  const waHref = buildWhatsAppLink(siteConfig.contact.whatsappDigits, message);

  return (
    <div
      role="region"
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-edge bg-cream/95 p-3 shadow-[0_-8px_24px_rgba(28,25,23,0.06)] backdrop-blur lg:hidden"
    >
      <a
        href={telHref}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-emerald-brand text-sm font-semibold text-cream"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call to order
      </a>
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] text-sm font-semibold text-white"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
}
