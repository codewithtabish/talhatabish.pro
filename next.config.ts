import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // disables Next.js image optimization, allows all external images
  },
};

export default nextConfig;
