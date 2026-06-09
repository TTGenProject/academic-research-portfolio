import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/academic-research-portfolio',
  assetPrefix: '/academic-research-portfolio',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
