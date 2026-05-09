import type { Metadata } from "next";
import { Phone, MessageCircle, Info } from "lucide-react";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { MenuItemCard } from "@/components/marketing/MenuItemCard";
import { MenuCategoryNav } from "@/components/marketing/MenuCategoryNav";
import { StickyMobileBar } from "@/components/layout/StickyMobileBar";
import { siteConfig } from "@/data/site-config";
import { categories, getByCategory, menu } from "@/data/menu";
import { buildTelLink, buildWhatsAppLink } from "@/lib/utils/format";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Halaal Cape Malay menu in Cape Town. Breyani, akhni, curries, gatsbies, grills, and traditional desserts. Made fresh daily.",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: `Menu | ${siteConfig.name}`,
    description:
      "Browse our full halaal Cape Malay menu. To order, call us or send a WhatsApp.",
    url: `${siteConfig.url}/menu`,
  },
};

export default function MenuPage() {
  const menuJsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${siteConfig.name} menu`,
    inLanguage: "en-ZA",
    hasMenuSection: categories.map((cat) => ({
      "@type": "MenuSection",
      name: cat.label,
      description: cat.blurb,
      hasMenuItem: getByCategory(cat.id).map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        offers: {
          "@type": "Offer",
          price: item.price.toFixed(2),
          priceCurrency: "ZAR",
        },
      })),
    })),
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
      <header className="border-b border-edge bg-cream-warm">
        <div className="container-prose py-14 md:py-20">
          <SectionHeading
            eyebrow="Our Menu"
            title="Authentic Cape Malay cooking, made fresh daily"
            description="Halaal certified by the MJC. Cooked to order. Prices are in South African Rand and may change without notice."
          />
        </div>
      </header>

      <div className="container-prose pb-32 md:pb-24">
        <div
          role="note"
          className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-emerald-brand/20 bg-emerald-brand/5 p-5 md:p-6"
        >
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-emerald-brand" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-ink md:text-base">
              <span className="font-semibold">To place an order, please call us or WhatsApp.</span>
              {" "}We do not take orders through this site.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={buildTelLink(siteConfig.contact.phoneDigits)}
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-emerald-brand px-4 text-sm font-semibold text-emerald-brand hover:bg-emerald-brand hover:text-cream"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.contact.phone}
            </a>
            <a
              href={buildWhatsAppLink(
                siteConfig.contact.whatsappDigits,
                siteConfig.ctaMessages.menuQuestion
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#25D366] px-4 text-sm font-semibold text-white hover:bg-[#1ebe5a]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-8">
          <MenuCategoryNav categories={categories.map((c) => ({ id: c.id, label: c.label }))} />
        </div>

        <div className="mt-12 space-y-16 md:space-y-20">
          {categories.map((cat) => {
            const items = getByCategory(cat.id);
            if (items.length === 0) return null;
            return (
              <section
                key={cat.id}
                id={cat.id}
                aria-labelledby={`${cat.id}-heading`}
                className="scroll-mt-32 md:scroll-mt-40"
              >
                <div className="max-w-2xl">
                  <h2
                    id={`${cat.id}-heading`}
                    className="text-balance text-2xl md:text-3xl"
                  >
                    {cat.label}
                  </h2>
                  <p className="mt-2 text-sm text-ink-muted md:text-base">
                    {cat.blurb}
                  </p>
                </div>

                <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <p className="mt-16 text-center text-sm text-ink-muted">
          {menu.length} dishes on the menu. All halaal certified.
        </p>
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
