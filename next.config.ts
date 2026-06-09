import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === 'production' ? '/academic-research-portfolio' : '';

const nextConfig: NextConfig = {
  basePath: basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
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
