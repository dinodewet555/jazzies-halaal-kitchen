import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { siteConfig } from "@/data/site-config";

interface HalaalBadgeProps {
  variant?: "solid" | "soft" | "ghost";
  className?: string;
  showCertNumber?: boolean;
}

// The halaal badge keeps its heritage green (--color-halaal) regardless of the
// rest of the brand palette. Green is the universal halaal signal and the
// badge is the one place where that recognition matters more than visual
// consistency with the rest of the site.
export function HalaalBadge({ variant = "solid", className, showCertNumber = false }: HalaalBadgeProps) {
  const styles = {
    solid: "bg-halaal text-cream",
    soft: "bg-cream text-halaal border border-halaal/20",
    ghost: "bg-white/85 text-halaal backdrop-blur",
  } as const;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider",
        styles[variant],
        className
      )}
      role="img"
      aria-label={`${siteConfig.certification.bodyShort} halaal certified`}
    >
      <ShieldCheck className="h-4 w-4" aria-hidden="true" />
      <span>{siteConfig.certification.bodyShort} Halaal Certified</span>
      {showCertNumber && (
        <span className="ml-1 text-[10px] font-normal opacity-80">
          {siteConfig.certification.number}
        </span>
      )}
    </div>
  );
}
