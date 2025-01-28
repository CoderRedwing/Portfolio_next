import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/Portfolio_next',
  assetPrefix: '/Portfolio_next',
  output: "export",
  reactStrictMode: true,
  
  images: {
    domains: ['images.unsplash.com'], // Add the domain here
  },
  
 
};

export default nextConfig;
