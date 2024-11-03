import type { NextConfig } from "next";
import config from "./config";

const nextConfig: NextConfig = {
  env: {
    DB_URI: config.DB_URI,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.vercel.com",
        port: "",
        pathname: "/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
