"use client";

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
  Star,
} from "lucide-react";
import { Hero } from "@/components/marketing/Hero";
import { TrustBar } from "@/components/marketing/TrustBar";
import { HalaalBadge } from "@/components/marketing/HalaalBadge";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { FeaturedDishCard } from "@/components/marketing/FeaturedDishCard";
import { Button } from "@/components/ui/Button";
import { CallButton } from "@/components/ui/CallButton";
import { siteConfig } from "@/data/site-config";
import { getFeatured } from "@/data/menu";
import { GSAPReveal, GSAPStagger } from "@/components/ui/GSAPAnimations";

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

const testimonials = [
  {
    name: "Fatima",
    location: "Athlone",
    text: "The breyani reminds me of my grandmother's cooking. The spices are perfect—not too hot, just right.",
    rating: 5,
  },
  {
    name: "Ahmed",
    location: "Rylands",
    text: "Best gatsby in Cape Town, hands down. The mother-in-law sauce is something special.",
    rating: 5,
  },
  {
    name: "Zainab",
    location: "Manenberg",
    text: "We've been ordering from Jazzies for years. Consistent quality, always halaal, always delicious.",
    rating: 5,
  },
];

// Replaced Named Export on line 63 with a simple function definition
// to resolve the "Cannot redeclare" error.
export function HomePageContent() {
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
            <Button href="/contact" variant="secondary" size="lg">
              Contact us
            </Button>
          </>
        }
      />

      <TrustBar />

      <section className="section-spacing bg-cream">
        <div className="container-prose">
          <GSAPReveal direction="up">
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
          </GSAPReveal>

          <h2 className="sr-only">Family favourites</h2>

          <GSAPStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => (
              <FeaturedDishCard key={item.id} item={item} />
            ))}
          </GSAPStagger>

          <GSAPReveal direction="up" delay={0.3}>
            <div className="mt-8 md:hidden">
              <Button href="/menu" variant="outline" size="lg" className="w-full">
                See full menu
              </Button>
            </div>
          </GSAPReveal>
        </div>
      </section>

      <section className="border-y border-edge bg-emerald-brand-dark grid-pattern-dark">
        <div className="container-prose grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
          <GSAPReveal direction="left">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-edge/20 shadow-2xl md:aspect-[4/5]">
              <Image
                src={HERITAGE_IMAGE}
                alt="Heritage spread"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </GSAPReveal>
          <GSAPReveal direction="right" delay={0.2}>
            <div>
              <SectionHeading
                eyebrow="Our heritage"
                title="Recipes that travelled four generations to land on your plate"
                description="Cape Malay cooking carries the story of the Cape: spice routes, Sunday lunches with the whole family, and grandmothers who measured by hand."
              />
              <Button href="/about" variant="secondary" size="lg" className="mt-7">
                Read our story
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </GSAPReveal>
        </div>
      </section>

      <section className="section-spacing bg-cream-warm">
        <div className="container-prose">
          <GSAPReveal direction="up">
            <SectionHeading
              eyebrow="What our customers say"
              title="Voices from the community"
              align="center"
            />
          </GSAPReveal>
          <GSAPStagger className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-modern p-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-saffron text-saffron" />
                  ))}
                </div>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">
                  "{testimonial.text}"
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-brand text-cream font-semibold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
                    <p className="text-xs text-ink-muted">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </GSAPStagger>
        </div>
      </section>

      <section className="section-spacing bg-emerald-brand-dark grid-pattern-dark">
        <div className="container-prose">
          <GSAPReveal direction="up">
            <SectionHeading
              eyebrow="Our kitchen in action"
              title="See how we bring tradition to your table"
              align="center"
              variant="dark"
            />
          </GSAPReveal>
          <GSAPReveal direction="scale" delay={0.2}>
            <div className="mx-auto mt-10 max-w-4xl">
              <div className="relative aspect-video overflow-hidden rounded-3xl border border-edge/20 shadow-2xl">
                <video
                  src="/video/jazz.mp4"
                  controls
                  className="h-full w-full object-cover"
                  poster={HERO_IMAGE}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </GSAPReveal>
        </div>
      </section>

      <section className="section-spacing bg-emerald-brand text-cream">
        <div className="container-prose">
          <GSAPReveal direction="up">
            <div className="overflow-hidden rounded-3xl border border-cream/20 bg-emerald-brand-dark shadow-2xl">
              <div className="grid md:grid-cols-[1.05fr_1fr]">
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px]">
                  <Image
                    src={CATERING_IMAGE}
                    alt="Catering meal"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-emerald-brand-dark/60" />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron-soft">Catering</p>
                  <h2 className="mt-4 text-balance text-4xl leading-[1.05] md:text-5xl">Catering for every occasion</h2>
                  <p className="mt-5 text-cream/85">Big breyani pots, full buffet setups, dessert tables.</p>
                  <ul className="mt-8 grid grid-cols-2 gap-y-3 text-sm">
                    {cateringOccasions.map(({ icon: Icon, label }) => (
                      <li key={label} className="flex items-center gap-2.5 text-cream/85">
                        <Icon className="h-4 w-4 text-saffron-soft" />
                        <span>{label}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <Button href="/catering" variant="secondary" size="lg">Enquire</Button>
                    <Button href="/contact" variant="outline" size="lg">Contact</Button>
                  </div>
                </div>
              </div>
            </div>
          </GSAPReveal>
        </div>
      </section>

      <section className="section-spacing bg-cream">
        <div className="container-prose">
          <GSAPReveal direction="up">
            <div className="card-modern p-8 md:p-12">
              <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">Cape Town based</p>
                  <h2 className="mt-3 text-3xl md:text-4xl">Hungry now? We're a phone call away.</h2>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <CallButton size="lg" variant="primary" />
                    <Button href="/contact" variant="secondary" size="lg">Send a message</Button>
                  </div>
                </div>
                <div className="rounded-3xl bg-cream-warm p-6 border border-edge">
                  <div className="flex items-center gap-2.5 text-sm font-semibold uppercase text-ink-muted">
                    <Clock className="h-4 w-4" /> Trading hours
                  </div>
                  <ul className="mt-5 divide-y divide-edge text-sm">
                    {siteConfig.hours.map((row) => (
                      <li key={row.day} className="flex justify-between py-2.5">
                        <span className="font-medium text-ink">{row.day}</span>
                        <span className="text-ink-muted">{row.display}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </GSAPReveal>
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

// REMOVED the redundant Named Export at the bottom to fix the Type Error