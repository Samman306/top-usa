/** @type {import('next').NextConfig} */
const nextConfig = {
  // Increase memory limit for builds
  experimental: {
    // Reduce memory usage during builds
    memoryBasedWorkersCount: true,
    // Optimize image handling
    optimizePackageImports: ['lucide-react'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable image optimization during build if causing issues
  images: {
    // Add domains for external images
    domains: ['www.shutterstock.com', 'v0.blob.com'],
    // Increase timeout for image optimization
    minimumCacheTTL: 60,
    unoptimized: true,
  },
  // Increase timeout for API routes
  api: {
    responseLimit: false,
  },
  // Optimize build output
  output: 'standalone',
  // Disable source maps in production to reduce build size
  productionBrowserSourceMaps: false,
  // Add Vercel-specific optimizations
  poweredByHeader: false,
}

export default nextConfig
