import type { NextConfig } from "next";

const API_HOST = "https://valvenok-api-container.mangobeach-29eb5614.ukwest.azurecontainerapps.io";
//const API_HOST = "http://localhost:5260"; 

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
      {
        source: "/products",
        destination: "/categories",
        permanent: true,
      },
      {
        // Placeholder page that was indexed; the real valves hub is /valves
        source: "/categories/valves",
        destination: "/valves",
        permanent: true,
      },
      // Old URLs that still rank (SE Ranking, Oct 2026). Specific matches must stay above the catch-alls.
      {
        source: "/filters/sight-glass",
        destination: "/filters-sight-glass/sight-glass",
        permanent: true,
      },
      {
        source: "/products/adapter-bspp-f-npt-m",
        destination: "/fittings-tubing/instrumentation-fittings/pipe-fittings/adapters-plugs",
        permanent: true,
      },
      {
        source: "/products/pilot-operated-check-valve-parker",
        destination: "/valves/industrial-valves/check-valves",
        permanent: true,
      },
      {
        source: "/products/3-way-ball-valve-reduction-bore-flanged-steel",
        destination: "/valves/industrial-valves/ball-valves",
        permanent: true,
      },
      {
        source: "/collections/needle-valves",
        destination: "/valves/instrumentation-valves/needle-valves",
        permanent: true,
      },
      {
        source: "/collections/relief-valves",
        destination: "/valves/instrumentation-valves/relief-valves",
        permanent: true,
      },
      {
        source: "/collections/actuator",
        destination: "/actuators",
        permanent: true,
      },
      {
        source: "/collections/industrial-valves",
        destination: "/valves/industrial-valves",
        permanent: true,
      },
      {
        source: "/collections/hydrogen-application",
        destination: "/hydrogen-cryogenic",
        permanent: true,
      },
      {
        source: "/collections/temperature-gauges",
        destination: "/instrumentation",
        permanent: true,
      },
      {
        source: "/blogs/news/understanding-pipe-thread-types-bspp-bspt-npt-and-nptf-explained",
        destination: "/news/instrumentation-fittings-hydrogen-leak-tight-threads",
        permanent: true,
      },
      {
        source: "/blogs/news/top-10-industrial-valves-used-in-uk-manufacturing-and-how-to-choose-the-right-one",
        destination: "/valves",
        permanent: true,
      },
      {
        source: "/pages/contact",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/pages/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/blogs/news",
        destination: "/news",
        permanent: true,
      },
      {
        source: "/blogs/news/:slug",
        destination: "/news",
        permanent: true,
      },
      {
        source: "/collections/:slug",
        destination: "/categories",
        permanent: true,
      },
      {
        source: "/filters-sight-glass/filteration",
        destination: "/filters-sight-glass/filtration",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_HOST}/api/:path*`,
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
