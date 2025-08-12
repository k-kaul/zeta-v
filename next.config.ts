import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://brandlogos.net/**'), 
      new URL('https://zeta-v.com/wp-content/**'),
      new URL('https://base.demo.nextjstemplates.com/**'), 
      new URL('https://aceternity.com/**'),
      new URL('https://split-xi.vercel.app/**'),
      new URL('https://cdn.mrkhub.com/**'),
      new URL('https://www.eetimes.com/**'),
      new URL('https://assets.gqindia.com/**'),
      new URL('https://architecture.live/**'),
      new URL('https://png.pngtree.com/**'),
      new URL('https://t3.ftcdn.net/**'),
      new URL('https://img.freepik.com/free-photo/**'),
      new URL('https://archello.s3.eu-central-1.amazonaws.com/**'),
      new URL('https://as1.ftcdn.net/jpg/03/18/55/70/**'),
      new URL('https://images.pexels.com/**'),
      new URL('https://www.shutterstock.com/**'),
      new URL('https://w0.peakpx.com/wallpaper/**'),
      new URL('https://t3.ftcdn.net/**'),
      new URL('https://i0.wp.com/zeta-v.com/**'),
    ]
  }
};

export default nextConfig;
