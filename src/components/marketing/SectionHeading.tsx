import { cn } from "@/lib/utils/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  variant?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  variant = "light",
  className,
}: SectionHeadingProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className={cn(
          "mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em]",
          isDark ? "text-saffron-soft" : "text-saffron"
        )}>
          {align === "center" && (
            <span className={cn(
              "h-px w-8 bg-gradient-to-r from-transparent",
              isDark ? "to-saffron-soft" : "to-saffron"
            )} />
          )}
          {eyebrow}
          {align === "center" && (
            <span className={cn(
              "h-px w-8 bg-gradient-to-l from-transparent",
              isDark ? "to-saffron-soft" : "to-saffron"
            )} />
          )}
        </p>
      )}
      <Tag className={cn(
        "text-balance text-3xl font-bold leading-tight md:text-4xl lg:text-5xl",
        isDark ? "text-white" : "text-ink"
      )}>
        {title}
      </Tag>
      {description && (
        <p className={cn(
          "mt-4 text-base leading-relaxed md:text-lg",
          isDark ? "text-white/80" : "text-ink-muted"
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
