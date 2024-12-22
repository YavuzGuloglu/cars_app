import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.imagin.studio',
        pathname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
