"use client";

import Image from "next/image";
import { Phone, Info, Clock, Flame, Leaf, Heart, Star, ChefHat } from "lucide-react";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { StickyMobileBar } from "@/components/layout/StickyMobileBar";
import { siteConfig } from "@/data/site-config";
import { getFeatured } from "@/data/menu";
import { buildTelLink } from "@/lib/utils/format";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const featuredDetails = {
  "chicken-breyani": {
    fullDescription: "Our signature chicken breyani is a labour of love. Long-grain basmati rice is layered with marinated chicken pieces, lentils, and fried onions, then slow-cooked with saffron and whole spices. The bottom layer crisps to golden perfection—the mark of a breyani made right. Served with dhal and our house sambals: carrot and chilli, dhania chutney, and tomato and onion.",
    preparation: "Marinated overnight, layered and slow-cooked for 3 hours",
    serves: "Generous portion for one hungry person",
    bestWith: "Extra dhal and fresh roti",
    spice: "Medium",
    tags: ["Signature", "Best Seller"],
  },
  "lamb-breyani": {
    fullDescription: "Karoo lamb breyani, cooked the way it should be. Tender lamb pieces are slow-cooked with whole spices until the meat falls apart, then layered with basmati rice and fried onions. The long cook time lets the spices deepen and the lamb flavour infuse every grain. The bottom layer crisps to perfection—this is the breyani our regulars come back for.",
    preparation: "Slow-cooked for 4 hours to develop depth",
    serves: "Hearty portion, perfect for sharing",
    bestWith: "Raita and extra sambals",
    spice: "Medium-Hot",
    tags: ["Premium", "Slow-Cooked"],
  },
  "chicken-akhni": {
    fullDescription: "A lighter, fragrant one-pot rice dish. Chicken pieces are cooked through basmati rice with green chilli, fresh coriander, and toasted whole spices. Less rich than breyani but packed with flavour—the kind of dish that feels like home. The rice absorbs every bit of the chicken flavour, and the fresh herbs keep it bright.",
    preparation: "One-pot cooking, finished with fresh herbs",
    serves: "Comfortable portion for one",
    bestWith: "Raita and a side salad",
    spice: "Mild-Medium",
    tags: ["Light", "Fragrant"],
  },
  "bobotie": {
    fullDescription: "The Cape Malay classic that tells the story of the Cape. Spiced minced beef is baked with dried fruit, curry powder, and turmeric, then topped with a savoury egg custard and bay leaves. Slightly sweet, slightly tart, deeply spiced. Served with yellow rice cooked with cinnamon and raisins, plus our chutney on the side.",
    preparation: "Baked with egg custard topping",
    serves: "Classic portion, very filling",
    bestWith: "Yellow rice and chutney",
    spice: "Mild",
    tags: ["Traditional", "Cape Malay"],
  },
  "half-chicken-grill": {
    fullDescription: "Half chicken, marinated overnight in our house spice blend and grilled over open flame. The skin crisps, the meat stays juicy, and the spice penetrates right through. Served with golden chips, a fresh garden salad, and our signature dhania chutney. This is the meal that built our reputation.",
    preparation: "Marinated overnight, grilled to order",
    serves: "Substantial meal for one",
    bestWith: "Extra sauce and cold drink",
    spice: "Medium",
    tags: ["Grilled", "House Special"],
  },
  "masala-steak-gatsby": {
    fullDescription: "The Cape Town legend, done right. A footlong Portuguese roll piled high with masala steak, slap chips, lettuce, tomato, and our mother-in-law sauce. Cuts into four generous quarters. The steak is marinated in our spice blend, the chips are double-fried for crunch, and the sauce ties it all together.",
    preparation: "Steak marinated, chips double-fried",
    serves: "Feeds 2-3 people comfortably",
    bestWith: "Extra sauce and cold drinks",
    spice: "Medium-Hot",
    tags: ["Cape Town", "Legendary"],
  },
};

export function MenuPageContent() {
  const featured = getFeatured(6);

  const menuJsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${siteConfig.name} menu`,
    inLanguage: "en-ZA",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Featured Dishes",
        description: "Our most popular dishes, made fresh daily",
        hasMenuItem: featured.map((item) => ({
          "@type": "MenuItem",
          name: item.name,
          description: item.description,
          offers: {
            "@type": "Offer",
            price: item.price.toFixed(2),
            priceCurrency: "ZAR",
          },
        })),
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Menu", item: `${siteConfig.url}/menu` },
    ],
  };

  return (
    <>
      {/* Hero section with fixed cover image */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/menu-hero.jpg"
            alt="Delicious chicken breyani with aromatic spices"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-brand/80 via-emerald-brand/60 to-emerald-brand/90" />
        </div>
        <div className="relative flex h-full items-center justify-center">
          <div className="container-prose text-center">
            <ScrollReveal direction="up">
              <h1 className="text-balance text-5xl font-bold text-cream md:text-6xl lg:text-7xl">
                Our Menu
              </h1>
              <p className="mt-4 max-w-2xl text-balance text-xl text-cream/90 md:text-2xl">
                Authentic Cape Malay cooking, made fresh daily
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Order notice */}
      <div className="border-b border-edge bg-emerald-brand-dark">
        <div className="container-prose py-8">
          <ScrollReveal direction="up">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-emerald-brand/30 bg-emerald-brand/10 p-5 md:p-6">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-saffron-soft" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-cream md:text-base">
                  <span className="font-semibold text-cream">To place an order, please call us.</span>
                  {" "}We do not take orders through this site.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={buildTelLink(siteConfig.contact.phoneDigits)}
                  className="inline-flex h-10 items-center gap-2 rounded-xl border border-saffron px-4 text-sm font-semibold text-saffron hover:bg-saffron hover:text-emerald-brand-dark"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Featured dishes */}
      <div className="section-spacing bg-cream">
        <div className="container-prose">
          <ScrollReveal direction="up">
            <SectionHeading
              eyebrow="Featured Dishes"
              title="Our most popular dishes"
              description="Each one tells a story of Cape Malay cooking, family recipes, and the flavours that make Cape Town special."
            />
          </ScrollReveal>

          <StaggerContainer className="mt-12 space-y-16 md:space-y-20">
            {featured.map((item) => {
              const details = featuredDetails[item.id as keyof typeof featuredDetails];
              if (!details) return null;

              return (
                <StaggerItem key={item.id}>
                  <section
                    id={item.id}
                    aria-labelledby={`${item.id}-heading`}
                    className="scroll-mt-32 md:scroll-mt-40"
                  >
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1fr_1.2fr]">
                      <ScrollReveal direction="left" delay={0.1}>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-edge shadow-xl">
                          <Image
                            src={item.image}
                            alt={item.imageAlt}
                            fill
                            sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 hover:scale-105"
                          />
                          {details.tags && details.tags.length > 0 && (
                            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                              {details.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="badge-modern bg-emerald-brand/90 text-cream backdrop-blur-sm"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </ScrollReveal>

                      <ScrollReveal direction="right" delay={0.2}>
                        <div className="flex flex-col">
                          <div className="flex flex-wrap items-center gap-3">
                            <h2
                              id={`${item.id}-heading`}
                              className="text-balance text-2xl font-semibold md:text-3xl"
                            >
                              {item.name}
                            </h2>
                            <span className="text-2xl font-semibold text-emerald-brand md:text-3xl">
                              R{item.price}
                            </span>
                          </div>

                          <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
                            {details.fullDescription}
                          </p>

                          <div className="mt-6 space-y-4">
                            <div className="flex items-start gap-3">
                              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" aria-hidden="true" />
                              <div>
                                <p className="text-sm font-semibold text-ink">Preparation</p>
                                <p className="text-sm text-ink-muted">{details.preparation}</p>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <Heart className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" aria-hidden="true" />
                              <div>
                                <p className="text-sm font-semibold text-ink">Serves</p>
                                <p className="text-sm text-ink-muted">{details.serves}</p>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <Flame className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" aria-hidden="true" />
                              <div>
                                <p className="text-sm font-semibold text-ink">Best enjoyed with</p>
                                <p className="text-sm text-ink-muted">{details.bestWith}</p>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <ChefHat className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" aria-hidden="true" />
                              <div>
                                <p className="text-sm font-semibold text-ink">Spice level</p>
                                <p className="text-sm text-ink-muted">{details.spice}</p>
                              </div>
                            </div>
                          </div>

                          {item.dietary && item.dietary.length > 0 && (
                            <div className="mt-6 flex flex-wrap gap-2">
                              {item.dietary.map((tag) => (
                                <span
                                  key={tag}
                                  className="inline-flex items-center gap-1.5 rounded-full border border-edge bg-cream-warm px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink-muted"
                                >
                                  {tag === "halaal" && <Leaf className="h-3 w-3" aria-hidden="true" />}
                                  {tag === "spicy" && <Flame className="h-3 w-3" aria-hidden="true" />}
                                  {tag === "vegetarian" && <span className="text-emerald-brand">V</span>}
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </ScrollReveal>
                    </div>
                  </section>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="mt-16 text-center text-sm text-ink-muted">
              {featured.length} featured dishes. All halaal certified.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <StickyMobileBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(menuJsonLd).replace(/</g, "\\u003c"),
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
export { MenuPageContent };
