export interface FeaturedValve {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  brand: string;
  brandLogo: string;
  logoHeight?: number;
  thumbnail: string;
  href: string;
  specs: { label: string; value: string }[];
}

export const FEATURED_PRODUCTS: FeaturedValve[] = [
  {
    id: "mars-series-33",
    name: "Series 33 Multi-Way Semi-Trunnion Ball Valve",
    category: "Ball Valves",
    categoryId: "ball-valves",
    brand: "Mars Valves",
    brandLogo: "https://pblol2.blob.core.windows.net/mars-valves/logo.jpg",
    logoHeight: 58,
    thumbnail:
      "https://pblol2.blob.core.windows.net/mars-valves/ball-valves/series-33.png",
    href: "/brands/mars-valves",
    specs: [
      { label: "Size Range", value: '1/4" – 4" | Full Port' },
      { label: "Pressure Rating", value: "1000 PSI | ANSI CL150/300, PN16/40" },
      {
        label: "Port Options",
        value: "L, T, I, X, LL, TT | Fire Safe Standard",
      },
    ],
  },
  {
    id: "cameron-wkm-370d",
    name: "WKM 370D Series",
    category: "Ball Valves",
    categoryId: "ball-valves",
    brand: "Cameron",
    brandLogo:
      "https://pblol2.blob.core.windows.net/valvenok-images/brands/cameron-logo.png",
    logoHeight: 36,
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/featured/wkm-370d.jpg",
    href: "/valves/industrial-valves/ball-valves/cameron-wkm-370d",
    specs: [
      { label: "Size Range", value: '2"–16" [50–400 mm]' },
      { label: "Pressure Class", value: "ASME 150–2,500" },
      { label: "End Type", value: "Standard Flanged Ends" },
    ],
  },
  {
    id: "bettis-rpx",
    name: "RPX Actuated SS ANSI 150 Flanged Ball Valves",
    category: "Ball Valves",
    categoryId: "ball-valves",
    brand: "Bettis",
    brandLogo:
      "https://pblol2.blob.core.windows.net/valvenok-images/brands/bettis-logo.png",
    logoHeight: 36,
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/featured/rps-actuated-ss.webp",
    href: "/valves/industrial-valves/ball-valves/bettis-rpx",
    specs: [
      { label: "Size Range", value: "NPS 1/2 to 8 | DN 15–200" },
      { label: "Pressure Rating", value: "ANSI 150" },
      { label: "End Type", value: "Flanged End Connections" },
    ],
  },
  {
    id: "velan-swing-check",
    name: "Cast Steel Swing Check Valves",
    category: "Check Valves",
    categoryId: "check-valves",
    brand: "Velan",
    brandLogo:
      "https://pblol2.blob.core.windows.net/valvenok-images/brands/velan-logo.png",
    logoHeight: 46,
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/featured/API-594-cast-steel-swing-check.png",
    href: "/valves/industrial-valves/check-valves/velan-swing-check",
    specs: [
      { label: "Size Range", value: "NPS 2–48 | DN 50–1200" },
      { label: "Pressure Class", value: "ASME 150–1500" },
      { label: "Pressure Rating", value: "High-pressure up to Class 1500" },
    ],
  },
  {
    id: "ag-fasani",
    name: "Fasani Bolted Bonnet Check Valves",
    category: "Check Valves",
    categoryId: "check-valves",
    brand: "Anderson Greenwood",
    brandLogo:
      "https://pblol2.blob.core.windows.net/valvenok-images/brands/anderson-greewood-logo.jpg",
    logoHeight: 74,
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/featured/bolted-bonnet-check-valves.png",
    href: "/valves/industrial-valves/check-valves/ag-fasani-check",
    specs: [
      { label: "Size Range", value: "NPS 2 to 6+ | DN 50–150+" },
      { label: "Pressure Class", value: "ASME CL150–CL2500" },
      { label: "Temperature", value: "Up to 400°F+ (204°C+)" },
    ],
  },
  {
    id: "pf-bf32",
    name: "BF 32 Butterfly Valve",
    category: "Butterfly Valves",
    categoryId: "butterfly-valves",
    brand: "Pietro Fiorentini",
    brandLogo:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/logo.svg",
    logoHeight: 48,
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/bf-32.jpg",
    href: "/valves/industrial-valves/butterfly-valve/pf-bf32",
    specs: [
      { label: "Size Range", value: 'DN 50–250 | 2"–10"' },
      {
        label: "Max Pressure",
        value: "16 bar (UNI PN16) / 19 bar (ANSI 150 RF)",
      },
      { label: "Seals", value: "VITON standard / NBR on request" },
    ],
  },
  {
    id: "hd-scotch-yoke",
    name: "HD Series Heavy-Duty Scotch Yoke Actuator",
    category: "Pneumatic Actuators",
    categoryId: "pneumatic-actuators",
    brand: "Susin",
    brandLogo:
      "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
    logoHeight: 66,
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/hd.webp",
    href: "/pneumatic/actuators/hd",
    specs: [
      { label: "Torque", value: "132 – 120,867 Nm" },
      { label: "Pressure", value: "3.5 – 10 bar" },
      { label: "Certifications", value: "ATEX / SIL3 / PED" },
    ],
  },
  {
    id: "kosaplus-scotch-yoke",
    name: "AD Series Scotch Yoke Heavy-Duty Actuator",
    category: "Pneumatic Actuators",
    categoryId: "pneumatic-actuators",
    brand: "Kosaplus",
    brandLogo:
      "https://pblol2.blob.core.windows.net/valvenok-images/brands/kosaplus-logo.png",
    logoHeight: 48,
    thumbnail:
      "https://pblol2.blob.core.windows.net/panam-images/products/actuators/AD-Series.jpeg",
    href: "/pneumatic/actuators/scotch-yoke",
    specs: [
      { label: "Type", value: "Scotch Yoke — High Torque" },
      { label: "Operation", value: "Double Acting & Spring Return" },
      { label: "Rotation", value: "90° Quarter-Turn" },
    ],
  },
];
