import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: ""
      }
    ],
    unoptimized: true,
  },
};

export default nextConfig;
