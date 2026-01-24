import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable image optimization for external domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.figma.com',
        pathname: '/api/mcp/asset/**',
      },
      {
        protocol: 'https',
        hostname: 'figma.com',
        pathname: '/api/mcp/asset/**',
      },
    ],
    // Optimize image loading
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
    formats: ['image/webp', 'image/avif'],
  },
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['@/components/ui', '@/components/sections'],
  },

  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Enable compression
  compress: true,

  // Reduce JavaScript bundle size
  poweredByHeader: false,
};

export default nextConfig;
