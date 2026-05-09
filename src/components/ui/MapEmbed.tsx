import { cn } from "@/lib/utils/cn";
import { siteConfig } from "@/data/site-config";

interface MapEmbedProps {
  className?: string;
  title?: string;
}

// Google Maps embed using a search query.
// TODO (Dino): Replace the q= parameter with the precise place ID or coords
// once the storefront listing is verified on Google Business.
export function MapEmbed({ className, title = "Jazzies Halaal Kitchen location on Google Maps" }: MapEmbedProps) {
  const query = encodeURIComponent(siteConfig.address.formatted);
  const src = `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <div className={cn("relative w-full overflow-hidden rounded-2xl border border-edge bg-cream-warm", className)}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}
