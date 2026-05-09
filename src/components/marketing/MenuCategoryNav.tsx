"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";
import type { MenuCategory } from "@/data/menu";

interface MenuCategoryNavProps {
  categories: { id: MenuCategory; label: string }[];
}

export function MenuCategoryNav({ categories }: MenuCategoryNavProps) {
  const [activeId, setActiveId] = useState<MenuCategory>(categories[0]?.id);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = categories
      .map((cat) => document.getElementById(cat.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id as MenuCategory);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [categories]);

  // Keep the active chip horizontally visible inside the nav.
  // Scroll only the nav element, never the page (using scrollIntoView would
  // hijack vertical page scroll on mobile).
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const activeEl = nav.querySelector<HTMLAnchorElement>(`a[data-active="true"]`);
    if (!activeEl) return;
    const navRect = nav.getBoundingClientRect();
    const elRect = activeEl.getBoundingClientRect();
    const targetLeft =
      nav.scrollLeft + (elRect.left - navRect.left) - (navRect.width - elRect.width) / 2;
    nav.scrollTo({ left: targetLeft, behavior: "smooth" });
  }, [activeId]);

  return (
    <div className="sticky top-16 z-20 -mx-5 border-b border-edge bg-cream/95 backdrop-blur md:top-20 md:mx-0 md:rounded-2xl md:border md:bg-white/90">
      <nav
        ref={navRef}
        aria-label="Menu categories"
        className="scrollbar-hide flex gap-1 overflow-x-auto px-5 py-3 md:px-3"
      >
        {categories.map((cat) => {
          const isActive = activeId === cat.id;
          return (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              data-active={isActive}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-emerald-brand text-cream"
                  : "text-ink-muted hover:bg-cream-warm hover:text-ink"
              )}
            >
              {cat.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
