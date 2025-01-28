import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/Portfolio_next",
  output: "export",
  reactStrictMode: true,
  /* config options here */
  images: {
    domains: ['images.unsplash.com'], // Add the domain here
  },
  
 
};

export default nextConfig;
