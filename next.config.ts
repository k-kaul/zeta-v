import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://brandlogos.net/**'), 
      new URL('https://zeta-v.com/wp-content/**'),
      new URL('https://base.demo.nextjstemplates.com/**'), 
      new URL('https://aceternity.com/**'),
      new URL('https://split-xi.vercel.app/**')
    ]
  }
};

export default nextConfig;
