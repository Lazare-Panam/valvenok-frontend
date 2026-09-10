import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  transpilePackages: ["@mui/material", "@emotion/react", "@emotion/styled"],
  async redirects() {
    return [
      {
        source: "/pages/catalogs",
        destination: "/categories",
        permanent: true,
      },
      {
        source: "/pages/brands",
        destination: "/brands",
        permanent: true,
      },
      {
        source: "/collections/all",
        destination: "/categories",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://valvenok-api-container.mangobeach-29eb5614.ukwest.azurecontainerapps.io/api/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pblol2.blob.core.windows.net",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
  },
};

export default nextConfig;
