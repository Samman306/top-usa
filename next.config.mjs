/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use the most compatible output format for Vercel
  output: 'standalone',
  
  // Disable features that might cause deployment issues
  productionBrowserSourceMaps: false,
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Simplify image configuration
  images: {
    unoptimized: true,
    domains: ['placeholder.co'],
  },
  
  // Optimize build size
  swcMinify: true,
  
  // Disable unnecessary features
  reactStrictMode: true,
  poweredByHeader: false,
  
  // Remove all experimental features
  experimental: {},
}

export default nextConfig
