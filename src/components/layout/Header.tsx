"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled || isOpen
            ? "bg-emerald-brand-dark/95 backdrop-blur-md border-b border-edge/20 py-3 shadow-xl"
            : "bg-emerald-brand-dark py-4"
        )}
      >
        <div className="container-prose flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="group flex items-center gap-3 font-display text-xl font-bold text-white md:text-2xl"
            aria-label={`${siteConfig.name}, home`}
          >
            <span
              aria-hidden="true"
              className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-terracotta to-saffron font-display text-xl font-bold text-white shadow-lg shadow-terracotta/30 transition-transform group-hover:scale-110 md:h-14 md:w-14 md:text-2xl ring-4 ring-terracotta/20"
            >
              J
            </span>
            <div className="flex flex-col">
              <span className="leading-none tracking-tight">Jazzies</span>
              <span className="text-xs font-normal text-white/60">Halaal Kitchen</span>
            </div>
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
                        "relative rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200",
                        isActive
                          ? "text-white bg-white/10"
                          : "text-white/80 hover:text-white hover:bg-white/5"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-terracotta to-saffron" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${siteConfig.contact.phoneDigits}`}
              className="flex items-center gap-2 rounded-xl border-2 border-saffron/50 bg-saffron/10 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-saffron/20 hover:border-saffron"
            >
              <Phone className="h-4 w-4 text-saffron" />
              {siteConfig.contact.phone}
            </a>
            <WhatsAppButton size="md" label="WhatsApp" />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="grid h-12 w-12 place-items-center rounded-xl border-2 border-white/20 bg-white/10 text-white transition-all hover:bg-white/20 lg:hidden"
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
          "fixed inset-0 top-16 z-40 flex flex-col bg-emerald-brand-dark transition-opacity duration-300 lg:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <nav aria-label="Mobile primary" className="container-prose pt-6">
          <ul className="flex flex-col gap-2">
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
                      "block rounded-2xl px-5 py-4 text-lg font-semibold transition-all",
                      isActive
                        ? "bg-gradient-to-r from-terracotta/30 to-saffron/30 text-white border-l-4 border-terracotta"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
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

        <div className="container-prose mt-auto flex flex-col gap-4 pb-10 pt-8">
          <HalaalBadge variant="soft" className="self-start" />
          <div className="flex flex-col gap-3">
            <WhatsAppButton size="lg" />
            <CallButton size="lg" variant="outline" />
          </div>
          <div className="mt-4 space-y-2 text-sm text-white/60">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {siteConfig.contact.phone}
            </p>
            <p>{siteConfig.address.display}</p>
            <p>{siteConfig.hoursSummary}</p>
          </div>
        </div>
      </div>
    </>
  );
}
