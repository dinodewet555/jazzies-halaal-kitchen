import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MenuItem } from "@/data/menu";

interface FeaturedDishCardProps {
  item: MenuItem;
  href?: string;
}

export function FeaturedDishCard({ item, href = "/menu" }: FeaturedDishCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl border border-edge bg-white transition-shadow duration-200 hover:shadow-md focus-visible:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-warm">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 md:p-6">
        <h3 className="text-xl font-semibold text-ink">{item.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
          {item.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-brand">
          See on the menu
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
