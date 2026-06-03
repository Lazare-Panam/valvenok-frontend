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
  { label: "Track Order", href: "/track-order" },
  { label: "Contact Us", href: "/contact" },
];

export const NAV_GROUPS: NavGroup[] = [
  {
    id: "instrumentation",
    label: "Instrumentation",
    columns: [
      {
        header: "High Pressure / Hydrogen",
        href: "/high-pressure",
        items: [
          {
            label: "High Pressure Fittings",
            href: "/high-pressure/fittings",
            children: [
              { label: "Adapters & Reducers", href: "/high-pressure/fittings/adapters" },
              { label: "Cone & Thread Connectors", href: "/high-pressure/fittings/connectors" },
              { label: "Caps & Plugs", href: "/high-pressure/fittings/end-connections" },
              { label: "Elbows, Tees, Crosses & Nipples", href: "/high-pressure/fittings/junction-fittings" },
              { label: "Unions", href: "/high-pressure/fittings/union" },
            ],
          },
          {
            label: "High Pressure Pipe Fittings",
            href: "/high-pressure/pipe-fittings",
            children: [
              { label: "Hex Couplings", href: "/high-pressure/pipe-fittings/hex-coupling" },
              { label: "Hex Nipples", href: "/high-pressure/pipe-fittings/hex-nipples" },
              { label: "Adapters", href: "/high-pressure/pipe-fittings/adapters" },
              { label: "Elbows", href: "/high-pressure/pipe-fittings/elbows" },
              { label: "Plugs & Caps", href: "/high-pressure/pipe-fittings/end-connections" },
              { label: "Tees & Crosses", href: "/high-pressure/pipe-fittings/tees-cross" },
            ],
          },
          { label: "Ball Valves", href: "/high-pressure/ball-valves" },
          { label: "Needle Valves", href: "/high-pressure/needle-valves" },
          { label: "DBB Valves", href: "/high-pressure/dbb" },
          { label: "Manifolds", href: "/high-pressure/manifolds" },
          { label: "Seals & Glands", href: "/high-pressure/seals-glands" },
          { label: "Cone & Thread Nipples", href: "/high-pressure/cone-threaded-nipples" },
        ],
      },
      {
        header: "Instrumentation Fittings",
        href: "/fittings-tubing",
        items: [
          { label: "Tube Fittings", href: "/fittings-tubing/instrumentation-fittings/tube-fittings" },
          { label: "Pipe Fittings", href: "/fittings-tubing/instrumentation-fittings/pipe-fittings" },
          { label: "Flare Fittings", href: "/fittings-tubing/instrumentation-fittings/jic-fittings" },
          { label: "Weld Fittings", href: "/fittings-tubing/instrumentation-fittings/weld-fittings" },
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
              { label: "Flange to Flange", href: "/dbb-manifolds/double-block-and-bleed-valves/flange-to-flange" },
              { label: "Flange to Pipe", href: "/dbb-manifolds/double-block-and-bleed-valves/flange-to-pipe" },
              { label: "Pipe to Pipe", href: "/dbb-manifolds/double-block-and-bleed-valves/pipe-to-pipe" },
            ],
          },
          {
            label: "Valve Manifolds",
            href: "/dbb-manifolds/manifolds",
            children: [
              { label: "2-Valve Manifold", href: "/dbb-manifolds/manifolds/2VM" },
              { label: "3-Valve Manifold", href: "/dbb-manifolds/manifolds/3VM" },
              { label: "5-Valve Manifold", href: "/dbb-manifolds/manifolds/5VM" },
            ],
          },
        ],
      },
      {
        header: "Quick Coupling & Tubing",
        href: "/quick-coupling-and-hoses",
        items: [
          { label: "Quick Coupling", href: "/quick-coupling-and-hoses/quick-coupling" },
          { label: "SS Tubing", href: "/fittings-tubing/tubing" },
        ],
      },
    ],
  },
  {
    id: "valves",
    label: "Valves",
    columns: [
      {
        header: "Instrumentation Valves",
        href: "/valves/instrumentation-valves",
        items: [
          {
            label: "Needle Valves",
            href: "/valves/instrumentation-valves/needle-valves",
            children: [
              { label: "IB Series — Integrated Bonnet", href: "/valves/instrumentation-valves/needle-valves/ib" },
              { label: "HB Series — Hex Body", href: "/valves/instrumentation-valves/needle-valves/hb" },
              { label: "HP Series — High Pressure", href: "/valves/instrumentation-valves/needle-valves/hp" },
              { label: "SB Series — Square Body", href: "/valves/instrumentation-valves/needle-valves/sb" },
            ],
          },
          { label: "Ball Valves", href: "/valves/instrumentation-valves/ball-valves" },
          { label: "Check Valves", href: "/valves/instrumentation-valves/check-valves" },
          { label: "Relief Valves", href: "/valves/instrumentation-valves/relief-valves" },
        ],
      },
      {
        header: "Process Valves",
        href: "/valves",
        items: [
          { label: "Industrial Valves", href: "/valves/industrial-valves" },
          { label: "Marine Valves", href: "/valves/marine-valves" },
        ],
      },
    ],
  },
  {
    id: "pneumatics",
    label: "Pneumatics & Vacuum",
    columns: [
      {
        header: "Cylinders",
        href: "/pneumatic/cylinders",
        items: [
          { label: "SDNC Series — Standard ISO Tie Rod", href: "/pneumatic/cylinders/sdnc" },
          { label: "ESNC Series — Extended Bore Range", href: "/pneumatic/cylinders/esnc" },
          { label: "ESC Series — Standard Tie Rod Profile", href: "/pneumatic/cylinders/esc" },
          { label: "SDNU Series — Round Body Stainless Steel", href: "/pneumatic/cylinders/sdnu" },
          { label: "EMAL Series — Standard Round Body", href: "/pneumatic/cylinders/emal" },
          { label: "SQ2 Series — Short Stroke Compact Profile", href: "/pneumatic/cylinders/sq2" },
          { label: "SDVU Series — Compact Short Stroke", href: "/pneumatic/cylinders/sdvu" },
          { label: "SDVUL Series — Non-Rotary Short Stroke", href: "/pneumatic/cylinders/sdvul" },
        ],
      },
      {
        header: "Air Gun",
        href: "/pneumatic/air-gun",
        items: [
          { label: "Air Gun", href: "/pneumatic/air-gun" },
        ],
      },
    ],
  },
  {
    id: "actuators",
    label: "Actuators",
    columns: [
      {
        header: "Pneumatic Actuators",
        href: "/pneumatic/actuators",
        items: [
          { label: "SRA Series — Spring Return Rack & Pinion", href: "/pneumatic/actuators/sra" },
          { label: "AD Series — Scotch Yoke Heavy-Duty", href: "/pneumatic/actuators/scotch-yoke" },
          { label: "PDS Series — Double & Single Acting", href: "/pneumatic/actuators/pds" },
          { label: "HD Series — Heavy-Duty IS & IC", href: "/pneumatic/actuators/hd" },
          { label: "PLDS Series — Linear Double Acting", href: "/pneumatic/actuators/plds" },
          { label: "MPLDS Series — Micro Linear Double Acting", href: "/pneumatic/actuators/mplds" },
        ],
      },
      {
        header: "Electric Actuators",
        href: "/actuators/electric",
        items: [
          { label: "ITQ Series — Rotary Electric Actuator", href: "/actuators/electric/itq" },
          { label: "IQL Series — Linear Electric Actuator", href: "/actuators/electric/iql" },
          { label: "ITL Series — Compact Linear 100% Duty Cycle", href: "/actuators/electric/itl" },
          { label: "ITM Series — Multi-Turn Heavy-Duty", href: "/actuators/electric/itm" },
        ],
      },
      {
        header: "Hydraulic Actuators",
        href: "/actuators/hydraulic",
        items: [
          { label: "ADF Series — Electro-Hydraulic Rotary", href: "/actuators/hydraulic/adf" },
        ],
      },
      {
        header: "Mechanical Actuators",
        href: "/actuators/mechanical",
        items: [
          { label: "MAB Series — Bevel Gear Multi-Turn", href: "/actuators/mechanical/mab" },
          { label: "MAW Series — Worm Gear Quarter-Turn", href: "/actuators/mechanical/maw" },
        ],
      },
    ],
  },
  {
    id: "mechanical",
    label: "Mechanical",
    columns: [
      {
        header: "Filters",
        href: "/filters-sight-glass",
        items: [
          { label: "Sight Glass", href: "/filters-sight-glass/sight-glass" },
          { label: "Filtration", href: "/filters-sight-glass/filteration" },
        ],
      },
      {
        header: "Pumps & Seals",
        href: "/pumps-seals",
        items: [
          {
            label: "Submersible Pumps",
            href: "/pumps-seals/pumps",
            children: [
              { label: "Stainless Steel Sewage Pumps", href: "/pumps-seals/pumps/tss" },
              { label: "Borewell Submersible", href: "/pumps-seals/pumps/borewell" },
              { label: "Mid-Range Sewage Pumps", href: "/pumps-seals/pumps/tgb" },
              { label: "Light Drainage Pumps", href: "/pumps-seals/pumps/tdl" },
              { label: "Light Sewage Pumps", href: "/pumps-seals/pumps/tsl" },
              { label: "Heavy Sewage Pumps", href: "/pumps-seals/pumps/tgt" },
              { label: "Industrial Sewage Pumps", href: "/pumps-seals/pumps/tma" },
              { label: "Heavy Duty Sewage Pumps", href: "/pumps-seals/pumps/tmc" },
            ],
          },
          { label: "Mechanical Seals", href: "/pumps-seals/seals" },
        ],
      },
    ],
  },
];