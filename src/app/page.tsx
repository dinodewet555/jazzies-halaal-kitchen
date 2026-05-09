import Image from "next/image";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Hero } from "@/components/marketing/Hero";
import { TrustBar } from "@/components/marketing/TrustBar";
import { HalaalBadge } from "@/components/marketing/HalaalBadge";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { FeaturedDishCard } from "@/components/marketing/FeaturedDishCard";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CallButton } from "@/components/ui/CallButton";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { siteConfig } from "@/data/site-config";
import { getFeatured } from "@/data/menu";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=2200&q=70";
const HERITAGE_IMAGE =
  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=70";
const CATERING_IMAGE =
  "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=2200&q=70";

export default function HomePage() {
  const featured = getFeatured(6);

  const restaurantJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteConfig.url}/#restaurant`,
    name: siteConfig.name,
    description: siteConfig.shortDescription,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneDigits,
    email: siteConfig.contact.email,
    priceRange: siteConfig.priceRange,
    servesCuisine: [...siteConfig.servesCuisine],
    image: HERO_IMAGE,
    hasMenu: `${siteConfig.url}/menu`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.suburb,
      addressRegion: siteConfig.address.province,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.geo.latitude,
      longitude: siteConfig.address.geo.longitude,
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
      <Hero
        imageSrc={HERO_IMAGE}
        imageAlt="Aromatic Cape Malay breyani served with sambals"
        priority
        badge={<HalaalBadge variant="ghost" />}
        eyebrow="Cape Malay since the start"
        heading="Cape Town's Home of Soulful Halaal Cooking"
        subheading="Cape Malay classics, family recipes, and halaal comfort food, made the way grandmothers made them."
        actions={
          <>
            <Button href="/menu" variant="primary" size="lg">
              View our menu
            </Button>
            <WhatsAppButton size="lg" label="WhatsApp to order" />
          </>
        }
      />

      <TrustBar />

      <section className="container-prose py-16 md:py-24" aria-labelledby="favourites-heading">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Family Favourites"
            title="The dishes our regulars come back for"
            description="Every plate is cooked from scratch, in the kind of pots that have been in the kitchen for years."
          />
          <Button href="/menu" variant="ghost" size="md" className="hidden md:inline-flex">
            See full menu
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        <h2 id="favourites-heading" className="sr-only">
          Family favourites
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <FeaturedDishCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Button href="/menu" variant="outline" size="lg" className="w-full">
            See full menu
          </Button>
        </div>
      </section>

      <section className="border-y border-edge bg-cream-warm">
        <div className="container-prose grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-edge md:aspect-square">
            <Image
              src={HERITAGE_IMAGE}
              alt="Cape Malay home cooking, hands working over a pot of curry"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Our heritage"
              title="Recipes that travelled four generations to land on your plate"
              description="Cape Malay cooking carries the story of the Cape: spice routes, Sunday lunches with the whole family, and grandmothers who measured by hand. Jazzies cooks the way they cooked, and we feed people the way they fed people."
            />
            <Button href="/about" variant="outline" size="lg" className="mt-7">
              Read our story
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      <section className="container-prose py-16 md:py-24">
        <div className="relative isolate overflow-hidden rounded-2xl">
          <Image
            src={CATERING_IMAGE}
            alt="Catering platter of Cape Malay dishes laid out for guests"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-brand-dark/90 via-emerald-brand-dark/70 to-emerald-brand-dark/40" aria-hidden="true" />
          <div className="relative z-10 max-w-xl px-6 py-16 text-cream md:px-12 md:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-soft">
              Catering
            </p>
            <h2 className="mt-3 text-balance text-3xl md:text-5xl">
              Catering for every occasion
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream/90 md:text-lg">
              Weddings, aqeeqahs, janazah meals, madrasah functions, corporate
              lunches, Ramadan iftars. Big breyani pots and full buffet setups,
              cooked with the same care we put into a single plate.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/catering" variant="secondary" size="lg">
                Enquire about catering
              </Button>
              <WhatsAppButton size="lg" message={siteConfig.ctaMessages.cateringEnquiry} />
            </div>
          </div>
        </div>
      </section>

      <section className="container-prose pb-20 md:pb-28" aria-labelledby="visit-heading">
        <SectionHeading
          eyebrow="Visit us"
          title="Find us in Athlone"
          description="Walk-in tables, takeaway, or call ahead. We're easiest to find on the corner."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <MapEmbed className="aspect-[4/3] lg:aspect-auto lg:min-h-[420px]" />

          <div className="rounded-2xl border border-edge bg-white p-7 md:p-9">
            <h2 id="visit-heading" className="sr-only">
              Visit us
            </h2>

            <dl className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-emerald-brand" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-semibold text-ink">Address</dt>
                  <dd className="mt-1 text-sm text-ink-muted">
                    {siteConfig.address.formatted}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-emerald-brand" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-semibold text-ink">Trading hours</dt>
                  <dd className="mt-1 text-sm text-ink-muted">
                    {siteConfig.hoursSummary}
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={siteConfig.address.googleMapsUrl}
                external
                variant="primary"
                size="lg"
                className="flex-1"
              >
                Get directions
              </Button>
              <CallButton size="lg" variant="outline" className="flex-1" />
            </div>
            <div className="mt-3">
              <WhatsAppButton size="lg" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(restaurantJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
