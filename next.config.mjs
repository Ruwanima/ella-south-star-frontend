/** @type {import('next').NextConfig} */
import path from 'path'

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Ensure '@' resolves to project root for imports like '@/components/...'
    config.resolve = config.resolve || {}
    config.resolve.alias = config.resolve.alias || {}
    config.resolve.alias['@'] = path.resolve(process.cwd())
    return config
  },
}

export default nextConfig
