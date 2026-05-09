import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site-config";

export const alt = `${siteConfig.name} | ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(135deg, #0F5132 0%, #0A3A24 70%, #1C1917 100%)",
          color: "#FAF7F2",
          fontFamily: "ui-serif, Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#D97706",
              color: "#0A3A24",
              fontSize: 44,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "ui-serif, Georgia, serif",
            }}
          >
            J
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 28, fontWeight: 600, lineHeight: 1 }}>
              Jazzies
            </span>
            <span
              style={{
                fontSize: 18,
                color: "#F0A830",
                letterSpacing: 2,
                textTransform: "uppercase",
                marginTop: 4,
              }}
            >
              Halaal Kitchen
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 22,
              color: "#F0A830",
              textTransform: "uppercase",
              letterSpacing: 4,
              marginBottom: 18,
            }}
          >
            Cape Town
          </span>
          <span
            style={{
              fontSize: 80,
              lineHeight: 1.05,
              fontWeight: 600,
              maxWidth: 980,
            }}
          >
            Cape Town&apos;s Home of Soulful Halaal Cooking
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 24, color: "rgba(250, 247, 242, 0.85)" }}>
            MJC Halaal Certified | Cape Malay heritage
          </span>
          <span
            style={{
              fontSize: 22,
              padding: "10px 22px",
              borderRadius: 999,
              border: "1px solid rgba(250, 247, 242, 0.4)",
            }}
          >
            jazzieshalaalkitchen.co.za
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
