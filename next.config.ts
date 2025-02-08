// next.config.ts
import type { NextConfig } from "next";
import withMDX from "@next/mdx";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"] as const, // Using const assertion
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.vercel.com",
        port: "",
        pathname: "/image/upload/**",
      },
    ],
  },
  reactStrictMode: true,
};

// Create the MDX configuration
const mdxConfig = withMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

// Apply the MDX configuration to your Next.js config
export default mdxConfig(nextConfig);
