import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/site-config";
import { HalaalBadge } from "@/components/marketing/HalaalBadge";
import { buildTelLink } from "@/lib/utils/format";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-edge bg-emerald-brand-dark text-cream">
      <div className="container-prose grid gap-10 py-14 md:grid-cols-4 md:py-16">
        <div className="md:col-span-2">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-display text-2xl font-semibold"
            aria-label={`${siteConfig.name}, home`}
          >
            <span
              aria-hidden="true"
              className="grid h-10 w-10 place-items-center rounded-xl bg-saffron font-display text-lg font-bold text-emerald-brand-dark"
            >
              J
            </span>
            Jazzies Halaal Kitchen
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/80">
            {siteConfig.shortDescription}
          </p>
          <div className="mt-5">
            <HalaalBadge variant="ghost" showCertNumber />
          </div>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold text-cream">Visit us</h2>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron-soft" aria-hidden="true" />
              <span>{siteConfig.address.formatted}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-saffron-soft" aria-hidden="true" />
              <a
                href={buildTelLink(siteConfig.contact.phoneDigits)}
                className="hover:text-cream"
              >
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-saffron-soft" aria-hidden="true" />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-cream"
              >
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold text-cream">Hours</h2>
          <ul className="mt-4 space-y-1.5 text-sm text-cream/80">
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

      <div className="border-t border-cream/10">
        <div className="container-prose flex flex-col items-start justify-between gap-5 py-6 md:flex-row md:items-center">
          <ul className="flex flex-wrap gap-4 text-sm text-cream/70">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jazzies on Instagram"
              className="grid h-10 w-10 place-items-center rounded-xl border border-cream/20 hover:border-cream/60"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jazzies on Facebook"
              className="grid h-10 w-10 place-items-center rounded-xl border border-cream/20 hover:border-cream/60"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="container-prose pb-8 text-xs text-cream/60">
          &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
