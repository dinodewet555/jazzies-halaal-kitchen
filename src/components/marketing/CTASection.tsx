import { type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface CTASectionProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  actions: ReactNode;
  variant?: "emerald" | "cream" | "dark";
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
      : variant === "dark"
      ? "bg-emerald-brand-dark text-cream"
      : "bg-cream-warm text-ink border border-edge";

  return (
    <section className={cn("rounded-3xl p-10 md:p-14 shadow-2xl", styles, className)}>
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow && (
          <p
            className={cn(
              "mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em]",
              variant === "emerald" || variant === "dark" ? "text-saffron-soft" : "text-terracotta"
            )}
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-current" />
            {eyebrow}
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-current" />
          </p>
        )}
        <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">{heading}</h2>
        {description && (
          <p
            className={cn(
              "mx-auto mt-5 max-w-2xl text-base md:text-lg",
              variant === "emerald" || variant === "dark" ? "text-cream/85" : "text-ink-muted"
            )}
          >
            {description}
          </p>
        )}
        <div className="mt-10 flex flex-wrap justify-center gap-4">{actions}</div>
      </div>
    </section>
  );
}
