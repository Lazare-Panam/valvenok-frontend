// Ball valve detail data. Kept out of the "use client" page so the server layout
// can read it for each product's sharing image.
import type { FeaturedValve } from "../../page";

export const BALL_VALVES: FeaturedValve[] = [
  {
    id: "cameron-wkm-370d",
    name: "WKM 370D Flanged Ball Valve",
    category: "Ball Valves",
    categoryId: "ball-valves",
    brand: "Cameron",
    brandLogo:
      "https://pblol2.blob.core.windows.net/valvenok-images/brands/cameron-logo.png",
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/featured/wkm-370d.jpg",
    specs: [
      { label: "Size Range", value: '2"–16" | 50–400 mm' },
      { label: "Pressure Class", value: "ASME CL 150–2500" },
      { label: "End Connections", value: "Flanged" },
      { label: "Service", value: "High-Integrity Isolation" },
      { label: "Applications", value: "Oil & Gas, Petrochemical, Refining" },
    ],
  },
  {
    id: "bettis-rpx",
    name: "RPX Actuated Ball Valve",
    category: "Ball Valves",
    categoryId: "ball-valves",
    brand: "Bettis",
    brandLogo:
      "https://pblol2.blob.core.windows.net/valvenok-images/brands/bettis-logo.png",
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/featured/rps-actuated-ss.webp",
    specs: [
      { label: "Size Range", value: "NPS 1/2–8 | DN 15–200" },
      { label: "Pressure Class", value: "ANSI 150" },
      { label: "End Connections", value: "Flanged" },
      { label: "Body Material", value: "Stainless Steel" },
      { label: "Operation", value: "Actuated" },
      { label: "Service", value: "Automated Flow Control" },
    ],
  },
  {
    id: "pf-deltaflux",
    name: "Deltaflux Trunnion Mounted Control Ball Valve",
    category: "Ball Valves",
    categoryId: "ball-valves",
    brand: "Pietro Fiorentini",
    brandLogo:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/logo.svg",
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/ball-valves/deltaflux.jpg",
    specs: [
      { label: "Size Range", value: '2"–48" | NPS 50–1200' },
      { label: "Pressure Rating", value: "ANSI Class 150–2500" },
      {
        label: "Design Temperature",
        value: "-196°C to +425°C (-321°F to +800°F)",
      },
      {
        label: "Connections",
        value:
          "RF & RTJ Flanged (ASME B16.5 / B16.47) / Butt Weld (ASME B16.25)",
      },
      {
        label: "Construction",
        value: "Side Entry Bolted / Welded / Top Entry Bolted",
      },
      {
        label: "Seat Configuration",
        value: "Unidirectional / DIB-1 / DIB-2 / DBB per API 6D",
      },
      {
        label: "Metallic Materials",
        value:
          "Carbon Steel, Stainless Steel, Duplex, Super-Duplex, Exotic Alloys",
      },
      { label: "Soft Parts", value: "RPTFE, PEEK, FKM, FFKM, HNBR, Graphite" },
      {
        label: "Coatings",
        value: "ENP, Weld Overlay (316SS / N06625), HVOF (TCC / CCC)",
      },
      {
        label: "Certifications",
        value: "API 6D, API 6A, API 6DSS, IEC 61508 SIL 2, PED 2014/68/EU",
      },
      { label: "Fire Safe", value: "API 607 / API 6FA" },
      { label: "Fugitive Emissions", value: "ISO 15848-1" },
      {
        label: "Operator",
        value: "Bare Stem / Pneumatic / Hydraulic / Electric Actuator",
      },
    ],
  },
  

  {
    id: "two-piece-ball-valve",
    name: "2-Piece Floating Ball Valve",
    category: "Ball Valves",
    categoryId: "ball-valves",
    brand: "Value Valves",
    brandLogo:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/logo.svg",
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/ball-valves/2-piece-bv.jpg",
    specs: [
      { label: "Size Range", value: '1/2"–12" (DN15–DN300)' },
      {
        label: "Pressure Rating",
        value: "ANSI 150LB / 300LB · PN10 / PN16 / PN25 / PN40",
      },
      { label: "Temperature", value: "-20°C to +200°C (-4°F to +392°F)" },
      {
        label: "Body Design",
        value: "2-Piece Split Body · Floating Ball · Bi-Directional",
      },
      { label: "Stem", value: "Blow-Out Proof" },
      { label: "Anti-Static", value: "Ball To Stem To Body" },
      { label: "Mounting", value: "ISO 5211" },
      { label: "Fire Safe", value: "API 607 · ISO 10497" },
      { label: "Certifications", value: "ISO 9001 · ISO 10497 · API 607" },
    ],
  },
];
