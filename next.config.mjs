/** @type {import('next').NextConfig} */
const nextConfig = {
  // Reduce the size of the build output
  output: 'standalone',

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
  
  // Disable CSS optimization that's causing the critters issue
  experimental: {
    optimizeCss: false,
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
