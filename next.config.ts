import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cra2ycoder.sirv.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
