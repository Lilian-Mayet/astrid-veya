import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholders en attendant les visuels finaux du client (cf. CLAUDE.md > Assets)
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
