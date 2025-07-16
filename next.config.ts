import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // allows all HTTPS domains
      },
      {
        protocol: 'http',
        hostname: '**', // optional: allows all HTTP domains too
      },
    ],
  },
};

export default nextConfig;
