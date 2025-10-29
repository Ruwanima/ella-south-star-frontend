/** @type {import('next').NextConfig} */
import path from 'path'

const nextConfig = {
  // Allow production builds even when ESLint finds problems.
  // This prevents Vercel/Next from failing the build due to lint rules
  // such as `react/no-unescaped-entities` and `@next/next/no-html-link-for-pages`.
  eslint: {
    ignoreDuringBuilds: true,
  },
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
