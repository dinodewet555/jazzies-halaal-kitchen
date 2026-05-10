import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { AboutPageContent } from "./AboutPageContent";

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

export default function AboutPage() {
  return <AboutPageContent />;
}
