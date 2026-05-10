import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Pin the app root when another lockfile exists higher in the directory tree
// (e.g. C:\Users\...\package-lock.json). Otherwise Turbopack may pick the wrong root.
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
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
