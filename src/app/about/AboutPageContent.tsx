"use client";

import Image from "next/image";
import { ShieldCheck, Heart, Users, Sparkles, Award, Clock } from "lucide-react";
import { Hero } from "@/components/marketing/Hero";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { HalaalBadge } from "@/components/marketing/HalaalBadge";
import { CTASection } from "@/components/marketing/CTASection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";
import { GSAPReveal, GSAPStagger } from "@/components/ui/GSAPAnimations";

const ABOUT_HERO = "/images/about-hero.jpg";
const KITCHEN_IMAGE = "/images/about-kitchen.jpg";
const ABOUT_VIDEO = "/video/about.mp4";

const values = [
  {
    icon: ShieldCheck,
    title: "Halaal integrity",
    body: "Every ingredient is checked. Every supplier is vetted. The kitchen is certified by the MJC and audited regularly.",
    color: "text-emerald-brand",
    bg: "bg-emerald-brand/10",
  },
  {
    icon: Heart,
    title: "Family recipes",
    body: "We measure by hand and taste before we plate. The recipes that left grandma's kitchen come out of ours the same way.",
    color: "text-terracotta",
    bg: "bg-terracotta/10",
  },
  {
    icon: Users,
    title: "Community first",
    body: "Aqeeqahs, janazah meals, madrasah events. We've fed generations of Athlone families and we don't take that lightly.",
    color: "text-saffron",
    bg: "bg-saffron/10",
  },
];

const highlights = [
  {
    icon: Award,
    label: "MJC Certified",
    value: "100%",
    description: "Halaal compliance",
    color: "text-cream",
    bg: "bg-white/10",
  },
  {
    icon: Clock,
    label: "Fresh Daily",
    value: "Every",
    description: "Dish made to order",
    color: "text-cream",
    bg: "bg-white/10",
  },
  {
    icon: Sparkles,
    label: "Heritage",
    value: "4th",
    description: "Generation recipes",
    color: "text-cream",
    bg: "bg-white/10",
  },
];

export function AboutPageContent() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "About", item: `${siteConfig.url}/about` },
    ],
  };

  return (
    <>
      <Hero
        imageSrc={ABOUT_HERO}
        imageAlt="Cape Malay cooking pots and traditional ingredients"
        height="tall"
        eyebrow="Our story"
        heading="A Cape Malay kitchen built on family"
        subheading="Jazzies started the way most family kitchens start: feeding people we love, one pot at a time. The rest of the story is how that became a kitchen for the whole community."
        badge={<HalaalBadge variant="ghost" />}
      />

      {/* Stats highlights */}
      <section className="border-b border-edge bg-emerald-brand text-cream">
        <div className="container-prose py-12 md:py-16">
          <GSAPStagger className="grid gap-8 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg} ${item.color}`}>
                  <item.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <p className="mt-3 text-3xl font-bold md:text-4xl">{item.value}</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-saffron-soft">
                  {item.label}
                </p>
                <p className="mt-1 text-sm text-cream/70">{item.description}</p>
              </div>
            ))}
          </GSAPStagger>
        </div>
      </section>

      {/* Origin */}
      <section className="section-spacing bg-cream">
        <div className="container-prose">
          <GSAPReveal direction="up">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr] md:items-center">
              <div>
                <SectionHeading
                  eyebrow="About Jazzies Halaal Kitchen"
                  title="A passion for authentic flavors"
                />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-muted md:text-lg">
                  <p>
                    Established by Jasmine, a passionate culinary expert from the heart of Cape Town, Jazzies Halaal Kitchen is the realization of a lifelong love for authentic flavors. With a deep heritage rooted in traditional Halaal cuisine, Jasmine has become well-known across the Cape for her commitment to quality and her ability to turn simple ingredients into excellent, soul-warming dishes.
                  </p>
                  <p>
                    At Jazzies, we believe that food is more than just a meal—it's a celebration of culture and community. Every dish is prepared with the utmost care, ensuring the highest Halaal standards while staying true to the rich, aromatic spices that define our local heritage. Whether we are catering for a special event or serving a family dinner, our mission remains the same: to provide an unforgettable taste of Cape Town, served with love.
                  </p>
                </div>
              </div>
              <GSAPReveal direction="right" delay={0.2}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-edge shadow-2xl">
                  <Image
                    src={KITCHEN_IMAGE}
                    alt="Inside the Jazzies kitchen, bay leaves and whole spice on the counter"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-brand/20 to-transparent" />
                </div>
              </GSAPReveal>
            </div>
          </GSAPReveal>
        </div>
      </section>

      {/* Video section */}
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
                  src={ABOUT_VIDEO}
                  controls
                  className="h-full w-full object-cover"
                  poster={ABOUT_HERO}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="mt-4 text-center text-sm text-cream/70">
                Watch our kitchen in action—where tradition meets every plate.
              </p>
            </div>
          </GSAPReveal>
        </div>
      </section>

      {/* Halaal certification */}
      <section className="section-spacing bg-emerald-brand text-cream">
        <div className="container-prose">
          <GSAPReveal direction="up">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-soft">
                  Halaal certification
                </p>
                <h2 className="mt-3 text-balance text-3xl md:text-4xl">
                  Certified by the {siteConfig.certification.body}
                </h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-cream/90 md:text-lg">
                  <p>
                    {siteConfig.certification.description}
                  </p>
                  <p>
                    Halaal is more than a label for us. It's the trust that lets a
                    family book us for an aqeeqah without thinking twice. We hold
                    ourselves to that trust every single shift.
                  </p>
                  <p className="text-sm text-cream/75">
                    Certificate number:{" "}
                    <span className="font-mono">{siteConfig.certification.number}</span>
                    {" "}(displayed in store, available on request).
                  </p>
                </div>
              </div>
              <GSAPReveal direction="right" delay={0.2}>
                <div className="rounded-3xl border border-cream/20 bg-emerald-brand-dark p-8 md:p-10 shadow-2xl">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-saffron text-emerald-brand-dark">
                    <ShieldCheck className="h-9 w-9" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-xl text-cream">
                    What MJC certification means
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-cream/85">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-soft" />
                      Meat sourced from MJC-approved abattoirs only.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-soft" />
                      Separate utensils, surfaces, and storage.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-soft" />
                      Routine independent audits and traceability.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-soft" />
                      No alcohol or non-halaal ingredients on the premises.
                    </li>
                  </ul>
                </div>
              </GSAPReveal>
            </div>
          </GSAPReveal>
        </div>
      </section>

      {/* Cape Malay heritage */}
      <section className="section-spacing bg-cream-warm">
        <div className="container-prose">
          <GSAPReveal direction="up">
            <SectionHeading
              eyebrow="Cape Malay heritage"
              title="Spice, slow time, and Sunday tables"
              align="center"
            />
          </GSAPReveal>
          <GSAPReveal direction="up" delay={0.2}>
            <div className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-ink-muted md:text-lg">
              <p>
                Cape Malay food carries the layered story of the Cape itself. Spice
                traders, displaced communities, and centuries of Sunday tables
                shaped a cuisine that is unmistakably South African and unmistakably
                Muslim. Cinnamon and cardamom in savoury rice. Apricot and tamarind
                in stew. Sweetness used like seasoning, not dessert.
              </p>
              <p>
                We cook these dishes the way they were taught to us. We don't
                shortcut the breyani pot. We don't skip the sambals. Tradition,
                given the time it needs, tastes like itself.
              </p>
            </div>
          </GSAPReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-emerald-brand-dark grid-pattern-dark">
        <div className="container-prose">
          <GSAPReveal direction="up">
            <SectionHeading
              eyebrow="What we stand for"
              title="Three things we do not compromise on"
              align="center"
              variant="dark"
            />
          </GSAPReveal>
          <GSAPStagger className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-3xl bg-white/5 p-8 border border-white/10">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${value.bg} ${value.color}`}>
                  <value.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl text-cream">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/80">
                  {value.body}
                </p>
              </div>
            ))}
          </GSAPStagger>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="section-spacing bg-cream">
        <div className="container-prose">
          <GSAPReveal direction="up">
            <div className="rounded-3xl border-2 border-dashed border-edge bg-white p-10 text-center md:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
                Meet the kitchen
              </p>
              <p className="mx-auto mt-3 max-w-xl text-base text-ink-muted md:text-lg">
                Headshots and short bios for the kitchen team are coming soon. The
                people behind every plate, in their own words.
              </p>
            </div>
          </GSAPReveal>
        </div>
      </section>

      <section className="section-spacing bg-emerald-brand">
        <GSAPReveal direction="up">
          <CTASection
            eyebrow="Come and eat with us"
            heading="Tradition tastes better at the table"
            description="Walk in for lunch, send a WhatsApp for an order, or browse the menu first."
            actions={
              <>
                <Button href="/menu" variant="secondary" size="lg">
                  See the menu
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="border-cream text-cream hover:bg-cream hover:text-emerald-brand">
                  Visit us
                </Button>
              </>
            }
          />
        </GSAPReveal>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}

export default AboutPageContent;