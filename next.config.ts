import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://brandlogos.net/**', 'https://zeta-v.com/wp-content')]
  }
};

export default nextConfig;
