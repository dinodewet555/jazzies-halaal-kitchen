import type { Metadata } from "next";
import {
  Heart,
  Users,
  Building2,
  GraduationCap,
  Cake,
  Moon,
  Flower2,
  ChefHat,
  Soup,
  UtensilsCrossed,
  Cookie,
  Phone,
  Mail,
} from "lucide-react";
import { Hero } from "@/components/marketing/Hero";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { CateringEnquiryForm } from "@/components/forms/CateringEnquiryForm";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CallButton } from "@/components/ui/CallButton";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Halaal Catering, Cape Town",
  description:
    "Halaal catering in Cape Town. Cape Malay platters, breyani pots, and full buffet setups for weddings, aqeeqahs, corporate functions, madrasah events, and Ramadan iftars.",
  alternates: { canonical: "/catering" },
  openGraph: {
    title: `Catering | ${siteConfig.name}`,
    description:
      "Halaal Cape Malay catering for every occasion. Get a quote within one working day.",
    url: `${siteConfig.url}/catering`,
  },
};

const CATERING_HERO =
  "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=2200&q=70";

const occasions = [
  { icon: Heart, label: "Weddings", body: "From the nikkah to the reception, full setups for hundreds of guests." },
  { icon: Flower2, label: "Aqeeqahs", body: "Traditional aqeeqah meals, packaged for distribution or table service." },
  { icon: Users, label: "Janazah meals", body: "Quiet, dignified catering during a difficult time. Same-week notice accepted." },
  { icon: Building2, label: "Corporate functions", body: "Office lunches, year-end events, and conference catering." },
  { icon: GraduationCap, label: "Madrasah events", body: "Big-batch breyani pots and curry trays for school and madrasah days." },
  { icon: Cake, label: "Birthday parties", body: "Family-style platters and gatsby setups for milestone birthdays." },
  { icon: Moon, label: "Ramadan iftars", body: "Daily iftar boxes or community-scale setups for the masjid." },
];

const offerings = [
  { icon: ChefHat, title: "Standard platters", body: "Mixed savoury platters of samoosas, dhaltjies, pies, sausage rolls, and frikkadels." },
  { icon: Soup, title: "Breyani and akhni pots", body: "Whole pots of chicken or lamb breyani, served buffet-style with sambals and dhal." },
  { icon: UtensilsCrossed, title: "Full buffet setups", body: "Curry stations, rice, sides, and salads. Crockery, chafing dishes, and staff on request." },
  { icon: Cookie, title: "Dessert tables", body: "Koeksisters, malva pudding, milk tart, and traditional sweet platters." },
];

export default function CateringPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Catering", item: `${siteConfig.url}/catering` },
    ],
  };

  return (
    <>
      <Hero
        imageSrc={CATERING_HERO}
        imageAlt="Cape Malay catering platter laid out on a long table"
        height="regular"
        eyebrow="Catering"
        heading="Catering for every occasion"
        subheading="From an aqeeqah lunch for the family to a wedding for 400. Cape Malay food at scale, cooked the way it's meant to be."
        actions={
          <>
            <Button href="#enquiry" variant="primary" size="lg">
              Send an enquiry
            </Button>
            <WhatsAppButton size="lg" message={siteConfig.ctaMessages.cateringEnquiry} />
          </>
        }
      />

      {/* Occasions */}
      <section className="container-prose py-16 md:py-24" aria-labelledby="occasions-heading">
        <SectionHeading
          eyebrow="Occasions we cater"
          title="Trusted with the moments that matter"
          description="Halaal certified, family-run, and used to running big kitchens for big days."
          align="center"
        />
        <h2 id="occasions-heading" className="sr-only">
          Occasions we cater for
        </h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {occasions.map((item) => (
            <li
              key={item.label}
              className="flex gap-4 rounded-2xl border border-edge bg-white p-5"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-brand/10 text-emerald-brand">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-ink">{item.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Offerings */}
      <section className="border-y border-edge bg-cream-warm">
        <div className="container-prose py-16 md:py-24">
          <SectionHeading
            eyebrow="What we offer"
            title="Choose what suits the day"
            align="center"
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {offerings.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-edge bg-white p-6"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-saffron/15 text-saffron">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquiry" className="container-prose py-16 md:py-24 scroll-mt-24">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Catering enquiry"
              title="Tell us about the day"
              description="Fill in the form and we'll come back to you with a quote and options. Faster on phone or WhatsApp."
            />
            <div className="mt-8">
              <CateringEnquiryForm />
            </div>
          </div>

          <aside className="rounded-2xl border border-edge bg-emerald-brand p-7 text-cream md:p-8">
            <h2 className="font-display text-2xl text-cream">Prefer to talk?</h2>
            <p className="mt-3 text-sm leading-relaxed text-cream/85">
              For weddings, large bookings, or anything urgent, give us a call.
              We answer faster than email.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <CallButton size="lg" variant="secondary" />
              <WhatsAppButton size="lg" message={siteConfig.ctaMessages.cateringEnquiry} />
            </div>
            <div className="mt-7 space-y-3 border-t border-cream/15 pt-6 text-sm text-cream/85">
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-saffron-soft" aria-hidden="true" />
                {siteConfig.contact.phone}
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-saffron-soft" aria-hidden="true" />
                {siteConfig.contact.email}
              </p>
            </div>
            <p className="mt-6 text-xs text-cream/65">
              We require a deposit to confirm catering bookings. Final headcount
              must be confirmed at least 5 working days before the event.
            </p>
          </aside>
        </div>
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
