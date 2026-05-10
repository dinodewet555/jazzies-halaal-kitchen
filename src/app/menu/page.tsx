import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { MenuPageContent } from "./MenuPageContent";

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
  return <MenuPageContent />;
}
