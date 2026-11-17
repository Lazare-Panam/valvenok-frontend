"use client";

import { showcaseFor, type ShowcaseCategory } from "../showcase";

export interface NavItem {
  label: string;
  /** Manufacturer shown above the label on series tiles */
  brand?: string;
  href?: string;
  /** Opens another group website in a new tab ("Also in our group") */
  external?: boolean;
  /** Showcase items: photo and one line shown in the third column */
  image?: string;
  line?: string;
  /** Showcase items: name of the website they open, e.g. "KOSAPLUS UK" */
  siteName?: string;
  children?: NavItem[];
}

export interface NavColumn {
  header: string;
  href?: string;
  items: NavItem[];
}

export interface NavGroup {
  id: string;
  label: string;
  href?: string;
  columns: NavColumn[];
}

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Applications", href: "/applications" },
  { label: "News & Blog", href: "/news" },
  { label: "Brands", href: "/brands" },
  // { label: "Track Order", href: "/track-order" },
  { label: "Contact Us", href: "/contact" },
   { label: "About Us", href: "/about" },
];

export const NAV_GROUPS: NavGroup[] = [
  {
    id: "valves",
    label: "Valves & Manifolds",
    href: "/valves",
    columns: [
      {
        header: "Process Valves",
        href: "/valves",
        items: [
          {
            label: "Butterfly Valves",
            href: "/valves/industrial-valves/butterfly-valves",
            children: [
              { label: "Centric", href: "/valves/industrial-valves/butterfly-valves/centric-butterfly-valve" },
              { label: "Double Eccentric", href: "/valves/industrial-valves/butterfly-valves/double-eccentric-butterfly-valve" },
              { label: "Triple Offset", href: "/valves/industrial-valves/butterfly-valves/triple-offset-butterfly-valve" },
              { label: "AWWA C504 Double Flanged", href: "/valves/industrial-valves/butterfly-valves/awwa-c504-double-flanged-butterfly-valve" },
              { label: "PTFE Lined", href: "/valves/industrial-valves/butterfly-valves/ptfe-lined-butterfly-valve" },
              { label: "Butt Welded", href: "/valves/industrial-valves/butterfly-valves/butt-welded-butterfly-valve" },
              { label: "Anti-Condensation", href: "/valves/industrial-valves/butterfly-valves/anti-condensation-butterfly-valve" },
              { label: "Damper", href: "/valves/industrial-valves/butterfly-valves/damper-butterfly-valve" },
              { label: "Shipbuilding", href: "/valves/industrial-valves/butterfly-valves/ship-building-butterfly-valve" },
            ],
          },
          {
            label: "Ball Valves",
            href: "/valves/industrial-valves/ball-valves",
            children: [
              { brand: "Mars", label: "Ball Valves — Standard Two-Piece", href: "/brands/mars-valves" },
              { brand: "Cameron", label: "WKM 370D Flanged Ball Valve", href: "/valves/industrial-valves/ball-valves/cameron-wkm-370d" },
              { brand: "Pietro Fiorentini", label: "Deltaflux Control Ball Valve", href: "/valves/industrial-valves/ball-valves/pf-deltaflux" },
              { brand: "Value Valves", label: "2-Piece Ball Valve", href: "/valves/industrial-valves/ball-valves/two-piece-ball-valve" },
              { brand: "Bettis", label: "Actuated Ball Valves", href: "/valves/industrial-valves/ball-valves/bettis-rpx" },
            ],
          },
          {
            label: "Globe Valves",
            href: "/valves/industrial-valves/globe-valve",
            children: [
              { brand: "Fisher", label: "Lined Globe Valve", href: "/valves/industrial-valves/globe-valve/fisher-rss-lined" },
              { brand: "Bonney Forge", label: "Globe Valves — Welded Bonnet", href: "/valves/industrial-valves/globe-valve/bonney-forge-welded-bonnet" },
            ],
          },
          {
            label: "Check Valves",
            href: "/valves/industrial-valves/check-valves",
            children: [
              { brand: "Velan", label: "Cast Steel Swing Check Valves", href: "/valves/industrial-valves/check-valves/velan-swing-check" },
              { brand: "Anderson Greenwood", label: "Bolted Bonnet Check Valves", href: "/valves/industrial-valves/check-valves/ag-fasani-check" },
              { brand: "Value Valves", label: "Dual Plate Check Valve", href: "/valves/industrial-valves/check-valves/dual-plate-check-valve" },
            ],
          },
        ],
      },
      {
        header: "Instrumentation Valves",
        href: "/valves/instrumentation-valves",
        items: [
          {
            label: "Needle Valves",
            href: "/valves/instrumentation-valves/needle-valves",
            children: [
              {
                label: "IB Series — Integrated Bonnet",
                href: "/valves/instrumentation-valves/needle-valves/ib",
              },
              {
                label: "HB Series — Hex Body",
                href: "/valves/instrumentation-valves/needle-valves/hb",
              },
              {
                label: "HP Series — High Pressure",
                href: "/valves/instrumentation-valves/needle-valves/hp",
              },
              {
                label: "SB Series — Square Body",
                href: "/valves/instrumentation-valves/needle-valves/sb",
              },
            ],
          },
          {
            label: "Ball Valves",
            href: "/valves/instrumentation-valves/ball-valves",
          },
          {
            label: "Check Valves",
            href: "/valves/instrumentation-valves/check-valves",
          },
          {
            label: "Relief Valves",
            href: "/valves/instrumentation-valves/relief-valves",
          },
          {
            label: "Double Block & Bleed Valves",
            href: "/dbb-manifolds/double-block-and-bleed-valves",
            children: [
              {
                label: "Flange to Flange",
                href: "/dbb-manifolds/double-block-and-bleed-valves/flange-to-flange",
              },
              {
                label: "Flange to Pipe",
                href: "/dbb-manifolds/double-block-and-bleed-valves/flange-to-pipe",
              },
              {
                label: "Pipe to Pipe",
                href: "/dbb-manifolds/double-block-and-bleed-valves/pipe-to-pipe",
              },
            ],
          },
          {
            label: "Valve Manifolds",
            href: "/dbb-manifolds/manifolds",
            children: [
              {
                label: "2-Valve Manifold",
                href: "/dbb-manifolds/manifolds/2VM",
              },
              {
                label: "3-Valve Manifold",
                href: "/dbb-manifolds/manifolds/3VM",
              },
              {
                label: "5-Valve Manifold",
                href: "/dbb-manifolds/manifolds/5VM",
              },
            ],
          },
        ],
      },
      {
        header: "Sealed Valves",
        href: "/valves/sealed-valves",
        items: [
          { label: "Globe Valve", href: "/valves/sealed-valves/globe-valves", children: [{ label: "View All Models", href: "/valves/sealed-valves/globe-valves/products" }] },
          { label: "Gate Valve", href: "/valves/sealed-valves/gate-valves", children: [{ label: "View All Models", href: "/valves/sealed-valves/gate-valves/products" }] },
          { label: "Check Valve", href: "/valves/sealed-valves/check-valves" },
        ],
      },

    ],
  },
  {
    id: "actuators",
    label: "Actuators",
    href: "/actuators",
    columns: [
      {
        header: "Pneumatic Actuators",
        href: "/pneumatic/actuators",
        items: [
          {
            label: "PDS Series — Double & Single Acting",
            href: "/pneumatic/actuators/pds",
            children: [
              { label: "View All Models", href: "/pneumatic/actuators/pds/products" },
            ],
          },
          {
            label: "HD Series — Heavy-Duty IS & IC",
            href: "/pneumatic/actuators/hd",
            children: [
              { label: "View All Models", href: "/pneumatic/actuators/hd/products" },
            ],
          },
          {
            label: "MHD Series — Micro Scotch Yoke IS & IC",
            href: "/pneumatic/actuators/mhd",
            children: [
              { label: "View All Models", href: "/pneumatic/actuators/mhd/products" },
            ],
          },
          {
            label: "PLDS Series — Linear Double Acting",
            href: "/pneumatic/actuators/plds",
            children: [
              { label: "View All Models", href: "/pneumatic/actuators/plds/products" },
            ],
          },
          {
            label: "MPLDS Series — Micro Linear Double Acting",
            href: "/pneumatic/actuators/mplds",
            children: [
              { label: "View All Models", href: "/pneumatic/actuators/mplds/products" },
            ],
          },
        ],
      },
      {
        header: "Electric Actuators",
        href: "/actuators/electric",
        items: [
          {
            label: "ITQ Series — Rotary Electric Actuator",
            href: "/actuators/electric/itq",
            children: [
              { label: "View All Models", href: "/actuators/electric/itq/products" },
            ],
          },
          {
            label: "ITQ Micro Series — Compact for Small Valves",
            href: "/actuators/electric/itq-micro",
            children: [
              { label: "View All Models", href: "/actuators/electric/itq-micro/products" },
            ],
          },
          {
            label: "QS Series — Fail-Safe Spring Return",
            href: "/actuators/electric/qs",
            children: [
              { label: "View All Models", href: "/actuators/electric/qs/products" },
            ],
          },
          {
            label: "IQL Series — Linear Electric Actuator",
            href: "/actuators/electric/iql",
            children: [
              { label: "View All Models", href: "/actuators/electric/iql/products" },
            ],
          },
          {
            label: "ITL Series — Compact Linear 100% Duty Cycle",
            href: "/actuators/electric/itl",
            children: [
              { label: "View All Models", href: "/actuators/electric/itl/products" },
            ],
          },
          {
            label: "ITM Series — Multi-Turn Heavy-Duty",
            href: "/actuators/electric/itm",
            children: [
              { label: "View All Models", href: "/actuators/electric/itm/products" },
            ],
          },

        ],
      },
      {
        header: "Hydraulic Actuators",
        href: "/actuators/hydraulic",
        items: [
          {
            label: "PANDA Series — Electro-Hydraulic, Low Pressure",
            href: "/actuators/hydraulic/panda",
            children: [
              { label: "View All Models", href: "/actuators/hydraulic/panda/products" },
            ],
          },
          {
            label: "PA Series — Electro-Hydraulic, High Pressure",
            href: "/actuators/hydraulic/pa",
            children: [
              { label: "View All Models", href: "/actuators/hydraulic/pa/products" },
            ],
          },
          {
            label: "PA-HX Series — Hydraulic Rack & Pinion",
            href: "/actuators/hydraulic/pa-hx",
            children: [
              { label: "View All Models", href: "/actuators/hydraulic/pa-hx/products" },
            ],
          },
          {
            label: "HRSDA / HRSSA — Hydraulic Scotch Yoke",
            href: "/actuators/hydraulic/scotch-yoke",
            children: [
              { label: "View All Models", href: "/actuators/hydraulic/scotch-yoke/products" },
            ],
          },
          {
            label: "HLDA Series — Linear Piston",
            href: "/actuators/hydraulic/hlda",
            children: [
              { label: "View All Models", href: "/actuators/hydraulic/hlda/products" },
            ],
          },
          {
            label: "LP-HD / LP-HS — Low-Pressure Scotch Yoke",
            href: "/actuators/hydraulic/lp-scotch-yoke",
            children: [
              { label: "View All Models", href: "/actuators/hydraulic/lp-scotch-yoke/products" },
            ],
          },
        ],
      },
      {
        header: "Mechanical Actuators",
        href: "/actuators/mechanical",
        items: [
          {
            label: "MAB Series — Bevel Gear Multi-Turn",
            href: "/actuators/mechanical/mab",
            children: [
              { label: "View All Models", href: "/actuators/mechanical/mab/products" },
            ],
          },
          {
            label: "MAW Series — Worm Gear Quarter-Turn",
            href: "/actuators/mechanical/maw",
            children: [
              { label: "View All Models", href: "/actuators/mechanical/maw/products" },
            ],
          },
          {
            label: "ITG Series — Industrial Gear Quarter-Turn",
            href: "/actuators/mechanical/itg",
            children: [
              { label: "View All Models", href: "/actuators/mechanical/itg/products" },
            ],
          },
        ],
      },
      {
        // More accessory series will be added later
        header: "Accessories",
        href: "/actuators/accessories",
        items: [
          {
            label: "ITS Series — Limit Switch Box",
            href: "/actuators/limit-switches/its",
            children: [
              { label: "View All Models", href: "/actuators/limit-switches/its/products" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "hydrogen-cryogenic",
    label: "Hydrogen & High Pressure",
    href: "/hydrogen-cryogenic",
    columns: [
      {
        header: "Hydrogen Valves",
        href: "/high-pressure/valves",
        items: [
         
          {
            label: "Needle Valves",
            href: "/high-pressure/valves/needle-valves",
            children: [
              { brand: "Panam", label: "High Pressure Needle Valves", href: "/high-pressure/valves/needle-valves/products?brand=Panam" },
              { brand: "Hiflux", label: "High Pressure Needle Valves", href: "/high-pressure/valves/needle-valves/products?brand=Hiflux" },
              { label: "View All Products", href: "/high-pressure/valves/needle-valves/products" },
            ],
          },
          {
            label: "Ball Valves",
            href: "/high-pressure/valves/ball-valves",
            children: [
              { brand: "Panam", label: "High Pressure Ball Valves", href: "/high-pressure/valves/ball-valves/products?brand=Panam" },
              { brand: "Hiflux", label: "High Pressure Ball Valves", href: "/high-pressure/valves/ball-valves/products?brand=Hiflux" },
              { label: "View All Products", href: "/high-pressure/valves/ball-valves/products" },
            ],
          },
          {
            label: "Check Valves",
            href: "/high-pressure/valves/check-valves",
            children: [
              { label: "View All Products", href: "/high-pressure/valves/check-valves/products" },
            ],
          },
          {
            label: "Air Operated Valves",
            href: "/high-pressure/valves/aov",
            children: [
              { label: "View All Products", href: "/high-pressure/valves/aov/products" },
            ],
          },
          {
            label: "DBB Valves",
            href: "/high-pressure/valves/dbb-valves",
            children: [
              { label: "View All Products", href: "/high-pressure/valves/dbb-valves/products" },
            ],
          },
          { label: "Safety & Relief Valves", href: "/hydrogen-cryogenic/valves/products?type=Safety%20Valve" },
          { label: "Special Valves", href: "/hydrogen-cryogenic/valves/products?type=Special%20Valve" },
          { label: "2-Valve Manifolds", href: "/high-pressure/manifolds" },
        ],
      },
      {
        header: "Hydrogen Fittings",
        href: "/high-pressure/fittings",
        items: [
          
          {
            label: "High Pressure Fittings",
            href: "/high-pressure/fittings",
            children: [
              { brand: "Panam", label: "High Pressure Fittings", href: "/high-pressure/fittings/products?brand=Panam" },
              { brand: "Hiflux", label: "High Pressure Fittings", href: "/high-pressure/fittings/products?brand=Hiflux" },
              { label: "View All Models", href: "/high-pressure/fittings/products" },
            ],
          },
          {
            label: "Pipe Fittings",
            href: "/high-pressure/pipe-fittings",
            children: [
              { label: "Adapters", href: "/high-pressure/pipe-fittings/adapters" },
              { label: "Elbows", href: "/high-pressure/pipe-fittings/elbows" },
              { label: "End Connections", href: "/high-pressure/pipe-fittings/end-connections" },
              { label: "Hex Couplings", href: "/high-pressure/pipe-fittings/hex-coupling" },
              { label: "Hex Nipples", href: "/high-pressure/pipe-fittings/hex-nipples" },
              { label: "Tees & Crosses", href: "/high-pressure/pipe-fittings/tees-cross" },
            ],
          },
          { label: "Manifold Blocks", href: "/hydrogen-cryogenic/fittings/products?type=Manifold%20Block" },
          { label: "Cone & Threaded Nipples", href: "/high-pressure/cone-threaded-nipples" },
          { label: "Seals & Glands", href: "/high-pressure/seals-glands" },
        ],
      },
      {
        header: "Hydrogen Tubing",
        href: "/high-pressure/tubing",
        items: [
          {
            label: "Tubing",
            href: "/high-pressure/tubing",
            children: [
              { brand: "Panam", label: "High Pressure Tubing", href: "/high-pressure/tubing/products?brand=Panam" },
              { brand: "Hiflux", label: "High Pressure Tubing", href: "/high-pressure/tubing/products?brand=Hiflux" },
              { label: "View All Tubing", href: "/high-pressure/tubing/products" },
            ],
          },
          { label: "Tubing & Tooling", href: "/hydrogen-cryogenic/tube" },
          {
            label: "Tube Supports",
            href: "/high-pressure/tubing/tube-supports",
          },
        ],
      },
      {
        header: "Gas & Cryogenic",
        href: "/high-pressure/valves/gas-valves",
        items: [
          { label: "Hydrogen Cylinder Valves", href: "/hydrogen-cryogenic/hydrogen" },
          { label: "LPG Cylinder Valves", href: "/hydrogen-cryogenic/lpg" },
          { label: "Industrial Gas Valves", href: "/hydrogen-cryogenic/industrial-gas" },
          { label: "All Gas & Cylinder Valves", href: "/high-pressure/valves/gas-valves" },
          { label: "Cryogenic Butterfly Valves", href: "/valves/industrial-valves/butterfly-valves/butt-welded-butterfly-valve" },
          { label: "Triple Offset (Cryogenic)", href: "/valves/industrial-valves/butterfly-valves/triple-offset-butterfly-valve" },
          { label: "Anti-Condensation (Cryogenic)", href: "/valves/industrial-valves/butterfly-valves/anti-condensation-butterfly-valve" },
        ],
      },
    ],
  },
  {
    id: "fittings-tubing",
    label: "Tubings & Fittings",
    href: "/fittings-tubing",
    columns: [
      {
        header: "Tubings",
        href: "/fittings-tubing/tubing",
        items: [
          { label: "Instrumentation Tubing & Tube Supports", href: "/fittings-tubing/tubing" },
          { label: "High Pressure & Hydrogen Fittings (10,000 psi +)", href: "/high-pressure/fittings" },
        ],
      },
      {
        header: "Instrumentation Fittings",
        href: "/fittings-tubing/instrumentation-fittings",
        items: [
          {
            label: "Tube Fittings",
            href: "/fittings-tubing/instrumentation-fittings/tube-fittings",
            children: [
              { label: "Connectors & Elbows", href: "/fittings-tubing/instrumentation-fittings/tube-fittings/connectors" },
              { label: "Unions", href: "/fittings-tubing/instrumentation-fittings/tube-fittings/unions" },
              { label: "Reducers", href: "/fittings-tubing/instrumentation-fittings/tube-fittings/reducer" },
              { label: "Adapters", href: "/fittings-tubing/instrumentation-fittings/tube-fittings/adapters" },
              { label: "Port Connectors", href: "/fittings-tubing/instrumentation-fittings/tube-fittings/port-connectors" },
              { label: "Weld Gauge Connectors", href: "/fittings-tubing/instrumentation-fittings/tube-fittings/weld-gauge" },
              { label: "Accessories", href: "/fittings-tubing/instrumentation-fittings/tube-fittings/accessories" },
              { label: "Dielectric & Gaskets", href: "/fittings-tubing/instrumentation-fittings/tube-fittings/die-electric" },
            ],
          },
          {
            label: "Pipe Fittings",
            href: "/fittings-tubing/instrumentation-fittings/pipe-fittings",
            children: [
              { label: "View All", href: "/fittings-tubing/instrumentation-fittings/pipe-fittings/all" },
              { label: "Adapters & Plugs", href: "/fittings-tubing/instrumentation-fittings/pipe-fittings/adapters-plugs" },
              { label: "Elbows", href: "/fittings-tubing/instrumentation-fittings/pipe-fittings/elbows" },
              { label: "Nipples & Couplings", href: "/fittings-tubing/instrumentation-fittings/pipe-fittings/nipples-couplings" },
              { label: "Tees & Crosses", href: "/fittings-tubing/instrumentation-fittings/pipe-fittings/tees-cross" },
              { label: "Unions & Connectors", href: "/fittings-tubing/instrumentation-fittings/pipe-fittings/unions-connectors" },
            ],
          },
          {
            label: "Flare Fittings",
            href: "/fittings-tubing/instrumentation-fittings/jic-fittings",
            children: [
              { label: "View All", href: "/fittings-tubing/instrumentation-fittings/jic-fittings/all" },
              { label: "Adapters & Reducers", href: "/fittings-tubing/instrumentation-fittings/jic-fittings/adapters-reducers" },
              { label: "Connectors", href: "/fittings-tubing/instrumentation-fittings/jic-fittings/connectors" },
              { label: "Elbows", href: "/fittings-tubing/instrumentation-fittings/jic-fittings/elbows" },
              { label: "Plugs", href: "/fittings-tubing/instrumentation-fittings/jic-fittings/plugs" },
              { label: "Tees", href: "/fittings-tubing/instrumentation-fittings/jic-fittings/tees" },
              { label: "Unions & Swivel", href: "/fittings-tubing/instrumentation-fittings/jic-fittings/unions-swivel" },
            ],
          },
          {
            label: "Weld Fittings",
            href: "/fittings-tubing/instrumentation-fittings/weld-fittings",
            children: [
              { label: "View All", href: "/fittings-tubing/instrumentation-fittings/weld-fittings/all" },
              { label: "Connectors", href: "/fittings-tubing/instrumentation-fittings/weld-fittings/connectors" },
              { label: "Elbows", href: "/fittings-tubing/instrumentation-fittings/weld-fittings/elbows" },
              { label: "Tees", href: "/fittings-tubing/instrumentation-fittings/weld-fittings/tees" },
            ],
          },
          { label: "Swivel Gauge Adaptors", href: "/fittings-tubing/instrumentation-fittings/swivel-gauge-adaptors" },
        ],
      },
      {
        header: "Sanitary Fittings",
        href: "/fittings-tubing/sanitary-fittings",
        items: [
          {
            label: "Tri-Clamp Clamps",
            href: "/fittings-tubing/sanitary-fittings/tri-clamp-clamps",
            children: [
              { brand: "Adaptix", label: "Single Pin Heavy-Duty Tri-Clamp", href: "/fittings-tubing/sanitary-fittings/tri-clamp-clamps/products?type=single" },
              { brand: "Adaptix", label: "Double-Bolted High-Pressure Clamp", href: "/fittings-tubing/sanitary-fittings/tri-clamp-clamps/products?type=double" },
            ],
          },
          {
            label: "Ferrules & End Caps",
            href: "/fittings-tubing/sanitary-fittings/ferrules-end-caps",
            children: [
              { brand: "Adaptix", label: "Tri-Clamp Ferrule", href: "/fittings-tubing/sanitary-fittings/ferrules-end-caps/products?type=ferrule" },
              { brand: "Adaptix", label: "Tri-Clamp Blind Cover", href: "/fittings-tubing/sanitary-fittings/ferrules-end-caps/products?type=blind" },
              { brand: "Adaptix", label: "Sight Glass End Cap", href: "/fittings-tubing/sanitary-fittings/ferrules-end-caps/products?type=sight" },
            ],
          },
        ],
      },
      {
        header: "Pneumatic Fittings & Tubing",
        href: "/fittings-tubing/pneumatic-fittings",
        items: [
          {
            label: "Push-In Fittings",
            href: "/fittings-tubing/pneumatic-fittings",
            children: [
              { brand: "SPAC", label: "A-Series Push-In Fittings", href: "/fittings-tubing/pneumatic-fittings/a-series" },
              { label: "E-Series Push-In Fittings", href: "/fittings-tubing/pneumatic-fittings/e-series" },
            ],
          },
          { label: "Pneumatic Tubing", href: "/fittings-tubing/pneumatic-tubing" },
        ],
      },
    ],
  },
  {
    id: "instrumentation",
    label: "Instrumentation",
    href: "/instrumentation",
    columns: [
      {
        header: "Gas Pressure Regulators",
        href: "/instrumentation/gas-pressure-regulator",
        items: [
          {
            label: "Gas Pressure Regulators",
            href: "/instrumentation/gas-pressure-regulator/products",
          },
        ],
      },
      {
        header: "Flow Meter",
        href: "/instrumentation/water-meter",
        items: [
          {
            label: "Water Meter",
            href: "/instrumentation/water-meter/products",
          },
        ],
      },
      {
        header: "Filters",
        href: "/filters-sight-glass",
        items: [
          { label: "Sight Glass", href: "/filters-sight-glass/sight-glass" },
          { label: "Filtration", href: "/filters-sight-glass/filtration" },
        ],
      },
    ],
  },
];

// "Also in our group": series sold on another group website (KOSAPLUS, SPAC) are
// added after our own series in the Actuators columns. They open the brand's site.
const SHOWCASE_COLUMNS: Record<string, ShowcaseCategory> = {
  "Pneumatic Actuators": "pneumatic",
  "Electric Actuators": "electric",
  Accessories: "accessories",
};
for (const col of NAV_GROUPS.find((g) => g.id === "actuators")?.columns ?? []) {
  // Our own series in this tab are Susin I-Tork, so the menu can group by brand
  for (const it of col.items) if (!it.brand) it.brand = "Susin";
  // 16 Nov 2026: the "Also in our group" series (KOSAPLUS, SPAC) were taken out of
  // the Actuators menu; those brands stay in the Shop by brand row. Set to true to restore.
  const SHOW_GROUP_SERIES = false;
  const cat = SHOW_GROUP_SERIES ? SHOWCASE_COLUMNS[col.header] : undefined;
  if (!cat) continue;
  col.items.push(
    ...showcaseFor(cat).map((s) => ({
      label: s.name,
      brand: s.brandInfo.name,
      href: s.href,
      external: true,
      image: s.img,
      line: s.line,
      siteName: s.siteName,
    })),
  );
}
