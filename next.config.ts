import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  transpilePackages: ['@mui/material', '@emotion/react', '@emotion/styled'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pblol2.blob.core.windows.net',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
    ],
  },
};

export default nextConfig;