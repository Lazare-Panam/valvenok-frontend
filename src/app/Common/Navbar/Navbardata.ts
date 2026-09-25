"use client";

export interface NavItem {
  label: string;
  href?: string;
  external?: boolean;
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
  { label: "News & Blog", href: "/news" },
  { label: "Brands", href: "/brands" },
  // { label: "Track Order", href: "/track-order" },
  { label: "Contact Us", href: "/contact" },
   { label: "About Us", href: "/about" },
];

export const NAV_GROUPS: NavGroup[] = [
  {
    id: "hydrogen-cryogenic",
    label: "Hydrogen & Tubing",
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
              { label: "View All Products", href: "/high-pressure/valves/needle-valves/products" },
            ],
          },
          {
            label: "Ball Valves",
            href: "/high-pressure/valves/ball-valves",
            children: [
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
          { label: "Gas & Cylinder Valves", href: "/high-pressure/valves/gas-valves" },
        ],
      },
      {
        header: "Hydrogen Fittings",
        href: "/high-pressure",
        items: [
          
          {
            label: "High Pressure Fittings",
            href: "/high-pressure/fittings",
          },
          
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
              { label: "View All Tubing", href: "/high-pressure/tubing/products" },
            ],
          },
          {
            label: "Tube Supports",
            href: "/high-pressure/tubing/tube-supports",
          },
        ],
      },
    ],
  },
  {
    id: "valves",
    label: "Valves",
    href: "/valves",
    columns: [
      {
        header: "Process Valves",
        href: "/valves",
        items: [
          {
            label: "Butterfly Valves",
            href: "/valves/industrial-valves/butterfly-valves",
          },
          {
            label: "Ball Valves",
            href: "/valves/industrial-valves/ball-valves",
          },
          {
            label: "Globe Valves",
            href: "/valves/industrial-valves/globe-valve",
          },
          {
            label: "Gate Valves",
            href: "/valves/industrial-valves/gate-valves",
          },
          {
            label: "Check Valves",
            href: "/valves/industrial-valves/check-valves",
          },

          {
            label: "Control Valves",
            href: "/valves/industrial-valves/control-valves",
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
        ],
      },
      {
        header: "Sealed Valves",
        href: "/valves/sealed-valves",
        items: [
          { label: "Globe Valve", href: "/valves/sealed-valves/globe-valves" },
          { label: "Gate Valve", href: "/valves/sealed-valves/gate-valves" },
          { label: "Check Valve", href: "/valves/sealed-valves/check-valves" },
        ],
      },
      {
        header: "Valve Components",
        href: "/valves/valve-components",
        items: [
          { label: "Valve Components", href: "/valves/valve-components" },
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
            label: "SRA Series — Spring Return Rack & Pinion",
            href: "/pneumatic/actuators/sra",
          },
          {
            label: "AD Series — Scotch Yoke Heavy-Duty",
            href: "/pneumatic/actuators/scotch-yoke",
          },
          {
            label: "PDS Series — Double & Single Acting",
            href: "/pneumatic/actuators/pds",
          },
          {
            label: "HD Series — Heavy-Duty IS & IC",
            href: "/pneumatic/actuators/hd",
          },
          {
            label: "PLDS Series — Linear Double Acting",
            href: "/pneumatic/actuators/plds",
          },
          {
            label: "MPLDS Series — Micro Linear Double Acting",
            href: "/pneumatic/actuators/mplds",
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
          },
          {
            label: "IQL Series — Linear Electric Actuator",
            href: "/actuators/electric/iql",
          },
          {
            label: "ITL Series — Compact Linear 100% Duty Cycle",
            href: "/actuators/electric/itl",
          },
          {
            label: "ITM Series — Multi-Turn Heavy-Duty",
            href: "/actuators/electric/itm",
          },
          {
            label: "Danfoss PVAE Acutator",
            href: "/actuators/electric/pvae32",
          },
        ],
      },
      {
        header: "Hydraulic Actuators",
        href: "/actuators/hydraulic",
        items: [
          {
            label: "Electro-Hydraulic Rotary",
            href: "/actuators/hydraulic/adf",
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
          },
          {
            label: "MAW Series — Worm Gear Quarter-Turn",
            href: "/actuators/mechanical/maw",
          },
          {
            label: "ITG Series — Industrial Gear Quarter-Turn",
            href: "/actuators/mechanical/itg",
          },
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
        header: "Instrumentation Fittings",
        href: "/fittings-tubing",
        items: [
          {
            label: "Tube Fittings",
            href: "/fittings-tubing/instrumentation-fittings/tube-fittings",
          },
          {
            label: "Pipe Fittings",
            href: "/fittings-tubing/instrumentation-fittings/pipe-fittings",
          },
          {
            label: "Flare Fittings",
            href: "/fittings-tubing/instrumentation-fittings/jic-fittings",
          },
          {
            label: "Weld Fittings",
            href: "/fittings-tubing/instrumentation-fittings/weld-fittings",
          },
        ],
      },
      {
        header: "DBB & Manifolds",
        href: "/dbb-manifolds",
        items: [
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
        header: "Quick Coupling",
        href: "/quick-coupling-and-hoses",
        items: [
          {
            label: "Quick Coupling",
            href: "/quick-coupling-and-hoses/quick-coupling",
          },
         
        ],
      },
      {
        header: "Gas Pressure Regulators",
        href: "/instrumentation/gas-pressure-regulator",
        items: [
          {
            label: "Gas Pressure Regulators",
            href: "/instruementation/gas-pressure-regulator/products",
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
          { label: "Filtration", href: "/filters-sight-glass/filteration" },
        ],
      },
    ],
  },
  {
    id: "mechanical",
    label: "Pumps & Seals",
    href: "/pumps-seals",
    columns: [
      {
        header: "Pumps & Seals",
        href: "/pumps-seals",
        items: [
          {
            label: "Electronic Control Pump",
            href: "/pumps-seals/pumps/electronic-control-pump",
          },
          {
            label: "Automatic Booster Pump",
            href: "/pumps-seals/pumps/automatic-booster-pump",
          },
          {
            label: "Multistage Centrifugal Pump",
            href: "/pumps-seals/pumps/multistage-centrifugal-pump",
          },
          {
            label: "Direct Water Pump",
            href: "/pumps-seals/pumps/direct-water-pump",
          },
          {
            label: "Submersible Pump",
            href: "/pumps-seals/pumps/submersible-pump",
          },
          {
            label: "Hot Water Pump",
            href: "/pumps-seals/pumps/hot-water-pump",
          },
          {
            label: "Immersible Pump",
            href: "/pumps-seals/pumps/immersible-pump",
          },
          { label: "Seals", href: "/pumps-seals/seals" },
        ],
      },
    ],
  },
];
