"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { siteConfig } from "@/data/site-config";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CallButton } from "@/components/ui/CallButton";
import { HalaalBadge } from "@/components/marketing/HalaalBadge";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-colors duration-200",
          isScrolled || isOpen
            ? "border-b border-edge bg-cream/95 backdrop-blur"
            : "bg-cream/0"
        )}
      >
        <div className="container-prose flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-display text-xl font-semibold text-emerald-brand md:text-2xl"
            aria-label={`${siteConfig.name}, home`}
          >
            <span
              aria-hidden="true"
              className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-brand font-display text-base font-bold text-cream md:h-10 md:w-10 md:text-lg"
            >
              J
            </span>
            <span className="hidden sm:inline">Jazzies</span>
            <span className="hidden sm:inline text-ink-muted">Halaal Kitchen</span>
            <span className="sm:hidden">Jazzies</span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {siteConfig.navigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "text-emerald-brand"
                          : "text-ink-muted hover:text-ink"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <WhatsAppButton size="md" label="WhatsApp" />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-xl border border-edge bg-white text-ink lg:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          "fixed inset-0 top-16 z-30 flex flex-col bg-cream transition-opacity duration-200 lg:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <nav aria-label="Mobile primary" className="container-prose pt-6">
          <ul className="flex flex-col gap-1">
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={cn(
                      "block rounded-xl px-4 py-3.5 text-lg font-medium",
                      isActive
                        ? "bg-emerald-brand/10 text-emerald-brand"
                        : "text-ink hover:bg-cream-warm"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="container-prose mt-auto flex flex-col gap-3 pb-10 pt-8">
          <HalaalBadge variant="soft" className="self-start" />
          <div className="flex flex-col gap-3">
            <WhatsAppButton size="lg" />
            <CallButton size="lg" variant="outline" />
          </div>
          <p className="mt-4 text-sm text-ink-muted">
            {siteConfig.address.display}
          </p>
          <p className="text-sm text-ink-muted">{siteConfig.hoursSummary}</p>
        </div>
      </div>
    </>
  );
}
