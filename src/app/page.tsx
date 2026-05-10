import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { HomePageContent } from "./HomePageContent";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.shortDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.shortDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_ZA",
    type: "website",
  },
};

export default function HomePage() {
  return <HomePageContent />;
}
