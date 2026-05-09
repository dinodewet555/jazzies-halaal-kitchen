import type { Metadata } from "next";
import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";
import { buildTelLink, buildWhatsAppLink } from "@/lib/utils/format";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Phone, WhatsApp, email, and trading hours for Jazzies Halaal Kitchen. Cape Town based, halaal certified by the MJC.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description: "Cape Town based. Call, WhatsApp, or send a message.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${siteConfig.url}/contact` },
    ],
  };

  // LocalBusiness schema intentionally omits street address and geo
  // coordinates per the brand decision not to surface a specific location.
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.shortDescription,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneDigits,
    email: siteConfig.contact.email,
    priceRange: siteConfig.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.province,
      addressCountry: siteConfig.address.countryCode,
    },
    openingHoursSpecification: siteConfig.hours
      .filter((h) => h.openTime && h.closeTime)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: h.openTime,
        closes: h.closeTime,
      })),
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  };

  return (
    <>
      <header className="border-b border-edge bg-cream-warm">
        <div className="container-prose py-14 md:py-20">
          <SectionHeading
            eyebrow="Get in touch"
            title="Cape Town based, family run"
            description="Phone, WhatsApp, email, or the form below. We answer fastest on phone or WhatsApp."
          />
        </div>
      </header>

      <section className="container-prose py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          {/* Contact details */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-edge bg-white p-7 md:p-8">
              <h2 className="font-display text-2xl text-ink">Contact details</h2>
              <ul className="mt-5 space-y-5 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-brand" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink">Location</p>
                    <p className="mt-0.5 text-ink-muted">
                      {siteConfig.address.display}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-emerald-brand" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink">Phone</p>
                    <a
                      href={buildTelLink(siteConfig.contact.phoneDigits)}
                      className="mt-0.5 block text-ink-muted hover:text-ink"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-brand" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink">WhatsApp</p>
                    <a
                      href={buildWhatsAppLink(siteConfig.contact.whatsappDigits, siteConfig.ctaMessages.generalOrder)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 block text-ink-muted hover:text-ink"
                    >
                      {siteConfig.contact.whatsapp}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-emerald-brand" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink">Email</p>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="mt-0.5 block text-ink-muted hover:text-ink"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-edge bg-white p-7 md:p-8">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-emerald-brand" aria-hidden="true" />
                <h2 className="font-display text-2xl text-ink">Trading hours</h2>
              </div>
              <ul className="mt-5 divide-y divide-edge text-sm md:text-base">
                {siteConfig.hours.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-baseline justify-between gap-3 py-2.5"
                  >
                    <span className="font-medium text-ink">{row.day}</span>
                    <span className="text-ink-muted">{row.display}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-ink-muted">
                {/* TODO (Dino): Confirm hours and update if they shift on public holidays. */}
                Hours can change on public holidays. Call ahead if in doubt.
              </p>
            </div>

            <div className="rounded-2xl border border-edge bg-white p-7 md:p-8">
              <h2 className="font-display text-2xl text-ink">Follow along</h2>
              <p className="mt-2 text-sm text-ink-muted md:text-base">
                Daily specials, fresh batches, and behind-the-scenes from the kitchen.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button
                  href={siteConfig.social.instagram}
                  external
                  variant="outline"
                  size="md"
                >
                  <InstagramIcon className="h-4 w-4" aria-hidden="true" />
                  Instagram
                </Button>
                <Button
                  href={siteConfig.social.facebook}
                  external
                  variant="outline"
                  size="md"
                >
                  <FacebookIcon className="h-4 w-4" aria-hidden="true" />
                  Facebook
                </Button>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="font-display text-2xl text-ink">Send a message</h2>
            <p className="mt-2 text-sm text-ink-muted md:text-base">
              For catering, big orders, or general questions. Replies within one working day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
