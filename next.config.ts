import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:"export",
  /* config options here */
  images: {
    domains: ['images.unsplash.com'], // Add the domain here
  },
  
 
};

export default nextConfig;
