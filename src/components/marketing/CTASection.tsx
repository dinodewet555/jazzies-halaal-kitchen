import { type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface CTASectionProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  actions: ReactNode;
  variant?: "emerald" | "cream";
  className?: string;
}

export function CTASection({
  eyebrow,
  heading,
  description,
  actions,
  variant = "emerald",
  className,
}: CTASectionProps) {
  const styles =
    variant === "emerald"
      ? "bg-emerald-brand text-cream"
      : "bg-cream-warm text-ink border border-edge";

  return (
    <section className={cn("rounded-2xl p-8 md:p-12", styles, className)}>
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow && (
          <p
            className={cn(
              "mb-3 text-xs font-semibold uppercase tracking-[0.18em]",
              variant === "emerald" ? "text-saffron-soft" : "text-terracotta"
            )}
          >
            {eyebrow}
          </p>
        )}
        <h2 className="text-balance text-3xl md:text-4xl">{heading}</h2>
        {description && (
          <p
            className={cn(
              "mx-auto mt-4 max-w-2xl text-base md:text-lg",
              variant === "emerald" ? "text-cream/85" : "text-ink-muted"
            )}
          >
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-3">{actions}</div>
      </div>
    </section>
  );
}
