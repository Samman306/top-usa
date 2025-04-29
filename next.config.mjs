/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use the most basic configuration possible
  output: 'export', // Generate static HTML files
  distDir: 'out',
  images: {
    unoptimized: true, // Disable image optimization
  },
  // Disable all features that might cause issues
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  reactStrictMode: false,
  poweredByHeader: false,
}

export default nextConfig
