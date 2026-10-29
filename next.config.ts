import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
  compress: true,
  // Static games built elsewhere and copied into public/ (e.g. fun-projects/dice).
  async rewrites() {
    return [{ source: '/dice', destination: '/dice/index.html' }];
  },
};

export default nextConfig;
