import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sai-zack-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
