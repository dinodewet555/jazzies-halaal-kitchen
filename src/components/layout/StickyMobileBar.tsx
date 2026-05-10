import { Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { buildTelLink } from "@/lib/utils/format";

interface StickyMobileBarProps {
  message?: string;
}

export function StickyMobileBar({
  message = siteConfig.ctaMessages.generalOrder,
}: StickyMobileBarProps) {
  const telHref = buildTelLink(siteConfig.contact.phoneDigits);

  return (
    <div
      role="region"
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-1 gap-3 border-t border-edge/20 bg-emerald-brand-dark/95 p-4 shadow-2xl backdrop-blur lg:hidden"
    >
      <a
        href={telHref}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-terracotta to-saffron text-sm font-semibold text-cream shadow-lg hover:shadow-xl transition-all"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Call to order
      </a>
    </div>
  );
}
