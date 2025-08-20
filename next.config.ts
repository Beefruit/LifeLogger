import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fxqmzpylnnfjsuurwlxt.supabase.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
