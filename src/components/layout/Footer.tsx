import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/site-config";
import { HalaalBadge } from "@/components/marketing/HalaalBadge";
import { buildTelLink } from "@/lib/utils/format";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-edge/20 bg-emerald-brand-dark text-cream">
      <div className="container-prose grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-display text-2xl font-bold"
            aria-label={`${siteConfig.name}, home`}
          >
            <span
              aria-hidden="true"
              className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-terracotta to-saffron font-display text-xl font-bold text-cream shadow-lg transition-transform group-hover:scale-110"
            >
              J
            </span>
            <div className="flex flex-col">
              <span className="leading-none">Jazzies</span>
              <span className="text-xs font-normal text-cream/70">Halaal Kitchen</span>
            </div>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/80">
            {siteConfig.shortDescription}
          </p>
          <div className="mt-6">
            <HalaalBadge variant="ghost" showCertNumber />
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-display text-base font-semibold text-cream mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-cream/80">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-cream hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-base font-semibold text-cream mb-4">Get in touch</h3>
          <ul className="space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron-soft" aria-hidden="true" />
              <span>{siteConfig.address.display}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-saffron-soft" aria-hidden="true" />
              <a
                href={buildTelLink(siteConfig.contact.phoneDigits)}
                className="transition-colors hover:text-cream"
              >
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-saffron-soft" aria-hidden="true" />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="transition-colors hover:text-cream"
              >
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="font-display text-base font-semibold text-cream mb-4">Trading Hours</h3>
          <ul className="space-y-2 text-sm text-cream/80">
            {siteConfig.hours.map((row) => (
              <li
                key={row.day}
                className="flex items-baseline justify-between gap-3"
              >
                <span className="font-medium text-cream">{row.day}</span>
                <span>{row.display}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="container-prose flex flex-col items-start justify-between gap-6 py-6 md:flex-row md:items-center">
          <p className="flex items-center gap-2 text-xs text-cream/60">
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
            <span className="hidden sm:inline">Made with</span>
            <Heart className="h-3 w-3 fill-terracotta text-terracotta hidden sm:inline" />
            <span className="hidden sm:inline">in Cape Town</span>
          </p>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jazzies on Instagram"
              className="grid h-10 w-10 place-items-center rounded-xl border border-cream/20 bg-cream/5 text-cream/70 transition-all hover:border-cream/60 hover:bg-cream/10 hover:text-cream"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jazzies on Facebook"
              className="grid h-10 w-10 place-items-center rounded-xl border border-cream/20 bg-cream/5 text-cream/70 transition-all hover:border-cream/60 hover:bg-cream/10 hover:text-cream"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
