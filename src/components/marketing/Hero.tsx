import Image from "next/image";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps {
  imageSrc: string;
  imageAlt: string;
  /**
   * Optional looping background video. When provided, the video plays
   * (autoplay, muted, loop, playsInline) over the image, which acts as the
   * poster fallback.
   */
  videoSrc?: string;
  videoType?: string;
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
  videoSrc,
  videoType = "video/mp4",
  eyebrow,
  heading,
  subheading,
  actions,
  badge,
  height = "tall",
  priority = false,
}: HeroProps) {
  const heightClass = {
    tall: "min-h-[85vh] md:min-h-[750px]",
    regular: "min-h-[65vh] md:min-h-[580px]",
    short: "min-h-[45vh] md:min-h-[400px]",
  }[height];

  return (
    <section
      className={cn(
        "relative isolate flex w-full items-center overflow-hidden",
        heightClass
      )}
    >
      {/* Background */}
      <div className="absolute inset-0">
        {videoSrc ? (
          <>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority={priority}
              sizes="100vw"
              className="object-cover"
            />
            <video
              src={videoSrc}
              poster={imageSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={videoSrc} type={videoType} />
            </video>
          </>
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority={priority}
            sizes="100vw"
            className="object-cover"
          />
        )}
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-brand/90 via-emerald-brand/70 to-emerald-brand/90" aria-hidden="true" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 grid-pattern-dark opacity-30" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="container-prose relative z-10 w-full py-20 md:py-24">
        <div className="max-w-4xl text-cream">
          {badge && (
            <div className="mb-6 inline-flex">
              {badge}
            </div>
          )}
          {eyebrow && (
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-saffron-soft">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-saffron-soft" />
              {eyebrow}
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-saffron-soft" />
            </p>
          )}
          <h1 className="text-balance text-5xl font-bold leading-[1.05] text-cream md:text-6xl lg:text-7xl">
            {heading}
          </h1>
          {subheading && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/90 md:text-xl">
              {subheading}
            </p>
          )}
          {actions && (
            <div className="mt-10 flex flex-wrap gap-4">
              {actions}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-12 w-6 items-center justify-center rounded-full border-2 border-cream/30">
          <div className="h-2 w-1 rounded-full bg-cream/50" />
        </div>
      </div>
    </section>
  );
}
