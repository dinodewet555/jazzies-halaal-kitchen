import Image from "next/image";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface HeroProps {
  imageSrc: string;
  imageAlt: string;
  eyebrow?: string;
  heading: string;
  subheading?: string;
  actions?: ReactNode;
  badge?: ReactNode;
  height?: "tall" | "regular" | "short";
  priority?: boolean;
}

export function Hero({
  imageSrc,
  imageAlt,
  eyebrow,
  heading,
  subheading,
  actions,
  badge,
  height = "tall",
  priority = false,
}: HeroProps) {
  const heightClass = {
    tall: "min-h-[78vh] md:min-h-[680px]",
    regular: "min-h-[58vh] md:min-h-[520px]",
    short: "min-h-[40vh] md:min-h-[360px]",
  }[height];

  return (
    <section
      className={cn(
        "relative isolate flex w-full items-end overflow-hidden",
        heightClass
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/10" aria-hidden="true" />

      <div className="container-prose relative z-10 w-full pb-12 pt-32 md:pb-16 md:pt-24">
        <div className="max-w-3xl text-cream">
          {badge && <div className="mb-5">{badge}</div>}
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-saffron-soft">
              {eyebrow}
            </p>
          )}
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] text-cream md:text-6xl lg:text-7xl">
            {heading}
          </h1>
          {subheading && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/90 md:text-lg">
              {subheading}
            </p>
          )}
          {actions && (
            <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
          )}
        </div>
      </div>
    </section>
  );
}
