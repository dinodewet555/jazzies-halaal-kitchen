import Image from "next/image";
import {
  ArrowRight,
  Clock,
  Heart,
  Flower2,
  Building2,
  GraduationCap,
  Moon,
  Cake,
} from "lucide-react";
import { Hero } from "@/components/marketing/Hero";
import { TrustBar } from "@/components/marketing/TrustBar";
import { HalaalBadge } from "@/components/marketing/HalaalBadge";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { FeaturedDishCard } from "@/components/marketing/FeaturedDishCard";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CallButton } from "@/components/ui/CallButton";
import { siteConfig } from "@/data/site-config";
import { getFeatured } from "@/data/menu";

const HERO_IMAGE = "/images/chicken-breyani.jpg";
const HERO_VIDEO = "/video/Jazzies-halaal-kitchen.mp4";
const HERITAGE_IMAGE = "/images/jazz-featured.jpg";
const CATERING_IMAGE = "/images/chicken-half-grilled-meal.jpg";

const cateringOccasions = [
  { icon: Heart, label: "Weddings" },
  { icon: Flower2, label: "Aqeeqahs" },
  { icon: Moon, label: "Ramadan iftars" },
  { icon: Building2, label: "Corporate" },
  { icon: GraduationCap, label: "Madrasah" },
  { icon: Cake, label: "Birthdays" },
];

export default function HomePage() {
  const featured = getFeatured(6);

  // JSON-LD intentionally omits street address and geo coordinates per the
  // brand decision not to publish a specific location.
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
    image: `${siteConfig.url}${HERO_IMAGE}`,
    hasMenu: `${siteConfig.url}/menu`,
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
      <Hero
        imageSrc={HERO_IMAGE}
        videoSrc={HERO_VIDEO}
        imageAlt="Aromatic Cape Malay chicken breyani served with sambals"
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

      {/* Heritage strip */}
      <section className="border-y border-edge bg-cream-warm">
        <div className="container-prose grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-edge md:aspect-[4/5]">
            <Image
              src={HERITAGE_IMAGE}
              alt="A spread of Jazzies dishes laid out on a wooden table: bobotie, chicken akhni, half grilled chicken, masala steak gatsby, yellow rice, and sambals"
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

      {/* Catering CTA — redesigned */}
      <section className="container-prose py-16 md:py-24" aria-labelledby="catering-heading">
        <div className="overflow-hidden rounded-2xl bg-emerald-brand-dark text-cream">
          <div className="grid md:grid-cols-[1.05fr_1fr]">
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px]">
              <Image
                src={CATERING_IMAGE}
                alt="Half chicken grilled meal plated with chips, salad, and dhania chutney"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-emerald-brand-dark/60 md:bg-gradient-to-l md:via-transparent md:to-emerald-brand-dark/95"
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron-soft">
                Catering
              </p>
              <h2
                id="catering-heading"
                className="mt-4 text-balance text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
              >
                Catering for{" "}
                <span className="font-display-italic text-saffron-soft">
                  every
                </span>{" "}
                occasion
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-cream/85 md:text-lg">
                Big breyani pots, full buffet setups, dessert tables. From an
                aqeeqah lunch to a wedding for four hundred, cooked with the
                same care we put into a single plate.
              </p>

              <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                {cateringOccasions.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2.5 text-cream/85"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-cream/10 text-saffron-soft">
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/catering" variant="secondary" size="lg">
                  Enquire about catering
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <WhatsAppButton
                  size="lg"
                  message={siteConfig.ctaMessages.cateringEnquiry}
                />
              </div>

              <p className="mt-5 text-xs text-cream/55">
                Replies within one working day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in touch — replaces "Visit us in Athlone" since we don't surface a
          specific location publicly. */}
      <section className="container-prose pb-20 md:pb-28" aria-labelledby="getintouch-heading">
        <div className="rounded-2xl border border-edge bg-white p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
                Cape Town based
              </p>
              <h2
                id="getintouch-heading"
                className="mt-3 text-balance text-3xl md:text-4xl lg:text-5xl"
              >
                Hungry now? We're a phone call away.
              </h2>
              <p className="mt-4 max-w-xl text-base text-ink-muted md:text-lg">
                Order ahead by phone or WhatsApp. Cape Town based, family run,
                halaal certified.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <CallButton size="lg" variant="primary" />
                <WhatsAppButton size="lg" />
              </div>
            </div>

            <div className="rounded-2xl bg-cream-warm p-6 md:p-7">
              <div className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-ink-muted">
                <Clock className="h-4 w-4" aria-hidden="true" />
                Trading hours
              </div>
              <ul className="mt-5 divide-y divide-edge text-sm">
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
