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
        opens: h.opens,
        closes: h.closes,
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
        subheading="Cape Malay classics, family recipes, and halaal comfort food."
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
                description="Every plate is cooked from scratch."
              />
            </div>
          </GSAPReveal>

          <GSAPStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => (
              <FeaturedDishCard key={item.id} item={item} />
            ))}
          </GSAPStagger>
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
                title="Recipes that travelled four generations"
              />
              <Button href="/about" variant="secondary" size="lg" className="mt-7">
                Read our story
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
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
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <h2 className="text-4xl">Catering for every occasion</h2>
                  <ul className="mt-8 grid grid-cols-2 gap-y-3 text-sm">
                    {cateringOccasions.map(({ icon: Icon, label }) => (
                      <li key={label} className="flex items-center gap-2.5">
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(restaurantJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}