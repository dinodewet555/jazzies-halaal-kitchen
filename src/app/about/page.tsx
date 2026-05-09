import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Heart, Users } from "lucide-react";
import { Hero } from "@/components/marketing/Hero";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { HalaalBadge } from "@/components/marketing/HalaalBadge";
import { CTASection } from "@/components/marketing/CTASection";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Family-run halaal Cape Malay kitchen in Athlone, Cape Town. MJC certified. Recipes passed down four generations.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `Our Story | ${siteConfig.name}`,
    description:
      "Halaal Cape Malay cooking, family heritage, and the meaning of MJC certification.",
    url: `${siteConfig.url}/about`,
  },
};

const ABOUT_HERO =
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=2200&q=70";
const KITCHEN_IMAGE =
  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=70";

const values = [
  {
    icon: ShieldCheck,
    title: "Halaal integrity",
    body:
      "Every ingredient is checked. Every supplier is vetted. The kitchen is certified by the MJC and audited regularly.",
  },
  {
    icon: Heart,
    title: "Family recipes",
    body:
      "We measure by hand and taste before we plate. The recipes that left grandma's kitchen come out of ours the same way.",
  },
  {
    icon: Users,
    title: "Community first",
    body:
      "Aqeeqahs, janazah meals, madrasah events. We've fed generations of Athlone families and we don't take that lightly.",
  },
];

export default function AboutPage() {
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
        height="regular"
        eyebrow="Our story"
        heading="A Cape Malay kitchen built on family"
        subheading="Jazzies started the way most family kitchens start: feeding people we love, one pot at a time. The rest of the story is how that became a kitchen for the whole community."
        badge={<HalaalBadge variant="ghost" />}
      />

      {/* Origin */}
      <section className="container-prose py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <SectionHeading
              eyebrow="The beginning"
              title="From a family kitchen in Athlone, to your table"
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-muted md:text-lg">
              {/* TODO (Dino): Replace this paragraph with the real origin story.
                  Suggested points: who started Jazzies, what year, what street,
                  the dish that drew the first regulars, family roles today. */}
              <p>
                Jazzies grew out of a kitchen on Klipfontein Road, where Sunday
                lunches turned into Sunday queues, and queues turned into
                regulars asking if they could buy a portion to take home. We
                cooked then the way we cook now: bone-in lamb for the curry,
                whole spice toasted in the pan, and rice that gets the time it
                needs.
              </p>
              <p>
                Today the kitchen is run by Jasmine, with the next generation
                already learning the timing on the breyani pot. The menu has
                grown but the standard hasn&apos;t moved. We still make samoosas
                by hand. We still cook the dhal from dry beans.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-edge">
            <Image
              src={KITCHEN_IMAGE}
              alt="Inside the Jazzies kitchen, bay leaves and whole spice on the counter"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Halaal certification */}
      <section className="border-y border-edge bg-emerald-brand text-cream">
        <div className="container-prose grid gap-10 py-16 md:grid-cols-[1.3fr_1fr] md:items-center md:py-24">
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
                Halaal is more than a label for us. It&apos;s the trust that lets a
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
          <div className="rounded-2xl border border-cream/20 bg-emerald-brand-dark p-7 md:p-9">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-saffron text-emerald-brand-dark">
              <ShieldCheck className="h-9 w-9" aria-hidden="true" />
            </div>
            <h3 className="mt-5 font-display text-xl text-cream">
              What MJC certification means
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/85">
              <li>Meat sourced from MJC-approved abattoirs only.</li>
              <li>Separate utensils, surfaces, and storage.</li>
              <li>Routine independent audits and traceability.</li>
              <li>No alcohol or non-halaal ingredients on the premises.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cape Malay heritage */}
      <section className="container-prose py-16 md:py-24">
        <SectionHeading
          eyebrow="Cape Malay heritage"
          title="Spice, slow time, and Sunday tables"
          align="center"
        />
        <div className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-ink-muted md:text-lg">
          <p>
            Cape Malay food carries the layered story of the Cape itself. Spice
            traders, displaced communities, and centuries of Sunday tables
            shaped a cuisine that is unmistakably South African and unmistakably
            Muslim. Cinnamon and cardamom in savoury rice. Apricot and tamarind
            in stew. Sweetness used like seasoning, not dessert.
          </p>
          <p>
            We cook these dishes the way they were taught to us. We don&apos;t
            shortcut the breyani pot. We don&apos;t skip the sambals. Tradition,
            given the time it needs, tastes like itself.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-edge bg-cream-warm">
        <div className="container-prose py-16 md:py-24">
          <SectionHeading
            eyebrow="What we stand for"
            title="Three things we do not compromise on"
            align="center"
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <li
                key={value.title}
                className="rounded-2xl border border-edge bg-white p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-brand/10 text-emerald-brand">
                  <value.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {value.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="container-prose py-16 md:py-24">
        <div className="rounded-2xl border border-dashed border-edge bg-white p-8 text-center md:p-12">
          {/* TODO (Dino): Add team photos and short bios for the kitchen team.
              Suggested layout: 3 columns on desktop, 1 on mobile, with name,
              role, and one-line origin story under each headshot. */}
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
            Meet the kitchen
          </p>
          <p className="mx-auto mt-3 max-w-xl text-base text-ink-muted md:text-lg">
            Headshots and short bios for the kitchen team are coming soon. The
            people behind every plate, in their own words.
          </p>
        </div>
      </section>

      <section className="container-prose pb-20 md:pb-24">
        <CTASection
          eyebrow="Come and eat with us"
          heading="Tradition tastes better at the table"
          description="Walk in for lunch, send a WhatsApp for an order, or browse the menu first."
          actions={
            <>
              <Button href="/menu" variant="secondary" size="lg">
                See the menu
              </Button>
              <WhatsAppButton size="lg" />
              <Button href="/contact" variant="outline" size="lg" className="border-cream text-cream hover:bg-cream hover:text-emerald-brand">
                Visit us
              </Button>
            </>
          }
        />
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
