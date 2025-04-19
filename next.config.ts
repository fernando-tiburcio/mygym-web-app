import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.github.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
