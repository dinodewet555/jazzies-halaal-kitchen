import { Flame, Leaf, Soup, ChefHat, Drumstick, Sandwich, Wheat, IceCream } from "lucide-react";
import type { MenuItem, MenuCategory } from "@/data/menu";
import { formatZAR } from "@/lib/utils/format";
import { cn } from "@/lib/utils/cn";

interface MenuItemCardProps {
  item: MenuItem;
}

// Category-themed placeholder for the card image. Each category gets a
// gradient and an icon so cards read at a glance without misleading photos.
// TODO (Dino): Replace with real photography per dish, then bring back next/image.
const placeholderByCategory: Record<
  MenuCategory,
  { gradient: string; Icon: typeof Soup; label: string }
> = {
  "breyani-akhni": {
    gradient: "from-saffron via-terracotta to-emerald-brand-dark",
    Icon: Soup,
    label: "Breyani and Akhni",
  },
  "curries-stews": {
    gradient: "from-terracotta via-terracotta-soft to-saffron",
    Icon: ChefHat,
    label: "Curries and Stews",
  },
  "grills-roasts": {
    gradient: "from-emerald-brand-dark via-emerald-brand to-saffron",
    Icon: Drumstick,
    label: "Grills and Roasts",
  },
  "burgers-gatsbies": {
    gradient: "from-saffron-soft via-terracotta-soft to-terracotta",
    Icon: Sandwich,
    label: "Burgers and Gatsbies",
  },
  "sides-starters": {
    gradient: "from-emerald-brand via-emerald-brand-dark to-ink",
    Icon: Wheat,
    label: "Sides and Starters",
  },
  "drinks-desserts": {
    gradient: "from-terracotta-soft via-saffron to-saffron-soft",
    Icon: IceCream,
    label: "Drinks and Desserts",
  },
};

export function MenuItemCard({ item }: MenuItemCardProps) {
  const placeholder = placeholderByCategory[item.category];
  const { Icon } = placeholder;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-edge bg-white">
      <div
        role="img"
        aria-label={item.imageAlt}
        className={cn(
          "relative aspect-[4/3] bg-gradient-to-br",
          placeholder.gradient
        )}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.55), transparent 45%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.25), transparent 50%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-cream">
          <Icon className="h-12 w-12 opacity-90" aria-hidden="true" />
          <span className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/85">
            {placeholder.label}
          </span>
        </div>

        {item.dietary && item.dietary.length > 0 && (
          <ul className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {item.dietary.includes("vegetarian") && (
              <li className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[11px] font-semibold text-emerald-brand backdrop-blur">
                <Leaf className="h-3 w-3" aria-hidden="true" /> Veg
              </li>
            )}
            {item.dietary.includes("spicy") && (
              <li className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[11px] font-semibold text-terracotta backdrop-blur">
                <Flame className="h-3 w-3" aria-hidden="true" /> Spicy
              </li>
            )}
            {item.dietary.includes("contains-nuts") && (
              <li className="rounded-full bg-white/90 px-2 py-0.5 text-[11px] font-semibold text-ink backdrop-blur">
                Contains nuts
              </li>
            )}
          </ul>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold leading-tight text-ink">
            {item.name}
          </h3>
          <p className="shrink-0 font-display text-lg font-semibold text-emerald-brand">
            {formatZAR(item.price)}
          </p>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {item.description}
        </p>
      </div>
    </article>
  );
}
