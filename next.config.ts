import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Stock food photography from Unsplash. Replace once real photography
    // is shot for the site. See src/data/menu.ts for usage.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
