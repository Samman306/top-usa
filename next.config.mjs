/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use server-side rendering instead of static export
  output: 'standalone',
  
  // Disable any export-related features
  trailingSlash: false,
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Optimize images
  images: {
    domains: ['placeholder.co'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeholder.co',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  
  // Reduce the size of the JavaScript bundles
  swcMinify: true,
  
  // Disable unnecessary features
  reactStrictMode: true,
  poweredByHeader: false,
  
  // Disable all experimental features
  experimental: {
    // Disable all experimental features that might cause issues
    optimizeCss: false,
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
