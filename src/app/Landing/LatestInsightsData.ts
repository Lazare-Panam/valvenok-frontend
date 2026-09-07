export interface InsightPost {
  title: string;
  desc: string;
  thumbnail: string;
  category: string;
  date: string;
  link: string;
}

// Curated subset of the full article list in src/app/news/page.tsx —
// duplicated intentionally (not imported) so the homepage stays
// decoupled from the news page's local POSTS array.
export const LATEST_INSIGHTS: InsightPost[] = [
  {
    title:
      "Ball Valve vs Gate Valve: Technical Guide to Key Differences & How to Choose",
    desc: "A technical breakdown of ball valves and gate valves — covering sealing performance, pressure ratings, industry applications, and a clear decision framework for engineers and procurement teams.",
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/apollo-valves-88a10a01.webp",
    category: "Technical Guide",
    date: "April 2026",
    link: "/news/ball-valve-vs-gate-valve",
  },
  {
    title: "Butterfly Valve Instrumentation and Connection Packages",
    desc: "Triple offset, pneumatically actuated, and process butterfly valves — fully engineered from the primary isolation to the instrumentation layer, with UK stock and 24-hour engineering response.",
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/ptfe_lined_butterfly.png",
    category: "Technical Guide",
    date: "June 2026",
    link: "/news/butterfly-valve-guide",
  },
  {
    title: "Industrial Mechanical Seals Guide: Engineering Specs & Selection",
    desc: "A comprehensive engineer's guide to Valvenok mechanical seals. Learn about material selection, API flush plans, and performance specs for high-pressure industrial systems.",
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/seals/Seals.jpg",
    category: "Engineering",
    date: "April 2026",
    link: "/news/mechanical-seals-guide",
  },
  {
    title:
      "Valvenok Partners with VSI to Bring the Atlas SSCV to Severe Service",
    desc: "Valvenok has partnered with Valve Systems International to represent the Atlas Severe Service Control Valve — engineered from first principles to eliminate cavitation at the source.",
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/blogs/vsi.jpeg",
    category: "Partnership Announcement",
    date: "June 2026",
    link: "/news/valvenok-vsi-atlas-sscv-partnership",
  },
];
