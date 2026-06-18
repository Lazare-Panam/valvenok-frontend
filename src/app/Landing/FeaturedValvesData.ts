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
  id: "pf-bf31",
  name: "BF 31 Butterfly Valve",
  category: "Butterfly Valves",
  categoryId: "butterfly-valves",
  brand: "Pietro Fiorentini",
  brandLogo: "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/logo.svg",
  logoHeight: 48,
  thumbnail: "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/bf-31.jpg",
  href: "/valves/industrial-valves/butterfly-valve/pf-bf31",
  specs: [
    { label: "Size Range", value: 'DN 300–600 | 12"–24"' },
    { label: "Max Pressure", value: "16 bar (UNI PN16) / 19 bar (ANSI 150 RF)" },
    { label: "Seals", value: "NBR / FKM (Viton)" },
  ],
},
{
  id: "pf-bf32",
  name: "BF 32 Butterfly Valve",
  category: "Butterfly Valves",
  categoryId: "butterfly-valves",
  brand: "Pietro Fiorentini",
  brandLogo: "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/logo.svg",
  logoHeight: 48,
  thumbnail: "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/bf-32.jpg",
  href: "/valves/industrial-valves/butterfly-valve/pf-bf32",
  specs: [
    { label: "Size Range", value: 'DN 50–250 | 2"–10"' },
    { label: "Max Pressure", value: "16 bar (UNI PN16) / 19 bar (ANSI 150 RF)" },
    { label: "Seals", value: "VITON standard / NBR on request" },
  ],
},
  {
    id: "itq-electric-rotary",
    name: "ITQ Series Rotary Electric Actuator",
    category: "Electric Actuators",
    categoryId: "electric-actuators",
    brand: "Susin",
    brandLogo:
      "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
    logoHeight: 66,
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itq.webp",
    href: "/actuators/electric/itq",
    specs: [
      { label: "Torque", value: "100 – 9,000 Nm" },
      { label: "Protection", value: "IP67 / NEMA 4X & 6" },
      { label: "Mounting", value: "ISO 5211" },
    ],
  },
  {
    id: "itm-multiturn-electric",
    name: "ITM Series Multi-Turn Electric Actuator",
    category: "Electric Actuators",
    categoryId: "electric-actuators",
    brand: "Susin",
    brandLogo:
      "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
    logoHeight: 66,
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itm.webp",
    href: "/actuators/electric/itm",
    specs: [
      { label: "Type", value: "Multi-Turn Heavy-Duty" },
      { label: "Protection", value: "IP68 Waterproof" },
      { label: "Feedback", value: "Hall Incremental Encoder" },
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
    id: "adf-electro-hydraulic",
    name: "Electro-Hydraulic Rotary Actuator",
    category: "Hydraulic Actuators",
    categoryId: "hydraulic-actuators",
    brand: "Susin",
    brandLogo:
      "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
    logoHeight: 66,
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/hydraulic/adf.webp",
    href: "/actuators/hydraulic/adf",
    specs: [
      { label: "Torque", value: "46 – 10,000 Nm" },
      { label: "Protection", value: "IP67 / IP68" },
      { label: "Certifications", value: "ATEX Zone 1 & 2 / SIL3" },
    ],
  },
  {
    id: "maw-worm-gear",
    name: "MAW Series Worm Gear Actuator",
    category: "Mechanical Actuators",
    categoryId: "mechanical-actuators",
    brand: "Susin",
    brandLogo:
      "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
    logoHeight: 66,
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/mechanical/worm-gearboxes.webp",
    href: "/actuators/mechanical/maw",
    specs: [
      { label: "Torque", value: "100 – 32,000 Nm" },
      { label: "Protection", value: "Up to IP67M" },
      { label: "Mounting", value: "ISO 5211 / MOV Compatible" },
    ],
  },
];
