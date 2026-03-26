import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  transpilePackages: ['@mui/material', '@emotion/react', '@emotion/styled'],
};

export default nextConfig;
