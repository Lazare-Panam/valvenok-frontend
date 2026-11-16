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
    title: "L-Port vs T-Port 3-Way Ball Valves: Flow Paths, Applications and How to Specify",
    desc: "Every flow position for L-port and T-port 3-way ball valves, when to use each for diverting, mixing and bypass, and an enquiry checklist.",
    thumbnail: "https://pblol2.blob.core.windows.net/valvenok-images/blogs/l-port-vs-t-port-3-way-ball-valve.jpg",
    date: "November 2026",
    category: "Technical Guide",
    link: "/news/l-port-vs-t-port-3-way-ball-valve",
  },
  {
    title: "Valve Actuator Sizing Explained: Torque, Safety Factors and Why Actuators Fail to Seat",
    desc: "How to size a pneumatic valve actuator: breakaway, running and seating torque, safety factors, minimum air supply, spring-return checks and common mistakes.",
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/blogs/valve-actuator-sizing-torque-guide.jpg",
    date: "October 2026",
    category: "Technical Guide",
    link: "/news/valve-actuator-sizing-torque-guide",
  },
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
    desc: "Triple offset, pneumatically actuated, and process butterfly valves — fully engineered from the primary isolation to the instrumentation layer, with UK-based engineering support.",
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/blogs/butterfly-valve-guide.jpg",
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

];
