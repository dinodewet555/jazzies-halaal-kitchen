import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Clock } from "lucide-react";
import type { MenuItem } from "@/data/menu";

interface FeaturedDishCardProps {
  item: MenuItem;
  href?: string;
}

export function FeaturedDishCard({ item, href = "/menu" }: FeaturedDishCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-3xl border border-edge bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-warm">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {item.isFeatured && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-emerald-brand/90 px-3 py-1.5 text-xs font-semibold text-cream backdrop-blur-sm">
            <Star className="h-3 w-3 fill-saffron text-saffron" />
            Featured
          </div>
        )}
        <div className="absolute bottom-3 right-3 rounded-full bg-cream/90 px-3 py-1.5 text-sm font-bold text-emerald-brand backdrop-blur-sm">
          R{item.price}
        </div>
      </div>
      <div className="p-5 md:p-6">
        <h3 className="text-xl font-semibold text-ink group-hover:text-emerald-brand transition-colors">
          {item.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted line-clamp-2">
          {item.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-brand group-hover:gap-2 transition-all">
            View details
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
