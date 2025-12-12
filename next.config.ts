import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', 'cra2ycoder.sirv.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cra2ycoder.sirv.com',
      },
    ],
  },
}

export default nextConfig
