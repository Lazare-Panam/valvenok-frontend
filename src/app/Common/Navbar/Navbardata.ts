"use client";

export interface NavItem {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavItem[];
}

export interface Category {
  id: string;
  label: string;
  href?: string;
  external?: boolean;
  color: string;
  textColor: string;
  items: NavItem[];
}

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "News & Blog", href: "/news" },
  { label: "Brands", href: "/brands" },
  { label: "Track Order", href: "/track-order" },
  { label: "My Account", href: "/account" },
  { label: "Contact Us", href: "/contact" },
];

export const CATEGORIES: Category[] = [
  {
      id: "fittings",
      label: "Fittings & Tubing",
      href: "/fittings-tubing",
      color: "#1c6e2e",
      textColor: "#fff",
      items: [
      {
        label: "Instrumentation Fittings",
        href: "/fittings-tubing/instrumentation-fittings",
        children: [
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
      // {
      //   label: "Pneumatic Tubing",
      //   href: "/pneumatic/tubing",
      //   external: true,
      // },
      // {
      //   label: "Pneumatic Fitting",
      //   href: "/pneumatic/fittings",
      //   external: true,
      // },
    ],
  },
{
    id: "actuators",
    label: "Actuators",
    href: "/actuators",
    color: "#2e7d32",
    textColor: "#fff",
    items: [
      {
        label: "Pneumatic Actuators",
        href: "/pneumatic/actuators",
      },
      {
        label: "Electric Actuators",
        href: "/pneumatic/actuators/scotch-yoke",
      },
    ],
  },
  {
    id: "pneumatic",
    href: "/pneumatic",
    label: "Pneumatic",
    color: "#2e7d32",
    textColor: "#fff",
    items: [
      {
        label: "Cylinder",
        href: "/pneumatic/cylinders",
        external: true,
        children: [
          {
            label: "SDNC Series — Standard ISO Tie Rod",
            href: "/pneumatic/cylinders/sdnc",
            
          },
          {
            label: "ESNC Series — Extended Bore Range",
            href: "/pneumatic/cylinders/esnc",
           
          },
          {
            label: "ESC Series — Standard Tie Rod Profile",
            href: "/pneumatic/cylinders/esc",
           
          },
          {
            label: "SDNU Series — Round Body Stainless Steel",
            href: "/pneumatic/cylinders/sdnu",
           
          },
          {
            label: "EMAL Series — Standard Round Body",
            href: "/pneumatic/cylinders/emal",
            
          },
          {
            label: "SQ2 Series — Short Stroke Compact Profile",
            href: "/pneumatic/cylinders/sq2",
           
          },
          {
            label: "SDVU Series — Compact Short Stroke",
            href: "/pneumatic/cylinders/sdvu",
           
          },
          {
            label: "SDVUL Series — Non-Rotary Short Stroke",
            href: "/pneumatic/cylinders/sdvul",
           
          },
        ],
      },
      // {
      //   label: "Fittings",
      //   href: "/pneumatic/fittings",
 
      //    children: [
      //   {
      //     label: "A Series Fittings",
      //     href: "/pneumatic/a-series",
      //     external: true,
      //   },
      //   {
      //     label: "E Series Fittings",
      //     href: "/pneumatic/e-series",
      //     external: true,
      //   },
      //   {
      //     label: "S-Series Push-In Fittings",
      //     href: "https://www.spacpneumatic.co.uk/products/fittings/s-series",
      //     external: true,
      //   },
      // ],
      // },

      // {
      // label: "Valves",
      // href: "https://www.spacpneumatic.co.uk/products/valves",
      // external: true,
      // children: [
      //   {
      //     label: "FG Series — 5/2 Solenoid Valves",
      //     href: "https://www.spacpneumatic.co.uk/products/valves/fg",
      //     external: true,
      //   },
      //   {
      //     label: "TG-J Series — Foot Pedal Valves",
      //     href: "https://www.spacpneumatic.co.uk/products/valves/foot-pedal",
      //     external: true,
      //   },
      //   {
      //     label: "TG Series — Solenoid Valves",
      //     href: "https://www.spacpneumatic.co.uk/products/valves/tg-series",
      //     external: true,
      //   },
      // ],
      // },
      // {
      //   label: "FRL",
      //   href: "https://www.spacpneumatic.co.uk/products/frl",
      //   external: true,
      //   children: [
      //     {
      //       label: "AC Series — Filter-Regulator-Lubricator",
      //       href: "https://www.spacpneumatic.co.uk/products/frl/ac-series",
      //       external: true,
      //     },
      //     {
      //       label: "AW Series — Filter Regulator",
      //       href: "https://www.spacpneumatic.co.uk/products/frl/aw",
      //       external: true,
      //     },
      //     {
      //       label: "AR Series — Air Regulator",
      //       href: "https://www.spacpneumatic.co.uk/products/frl/ar",
      //       external: true,
      //     },
      //     {
      //       label: "AF / AL Series — Air Filter & Lubricator",
      //       href: "https://www.spacpneumatic.co.uk/products/frl/af-al",
      //       external: true,
      //     },
      //   ],
      // },
      //       {
      //   label: "Tubing",
      //   href: "https://www.spacpneumatic.co.uk/products/tubing",
      //   external: true,
      // },
      // {
      //   label: "Actuators",
      //   href: "https://www.spacpneumatic.co.uk/products/actuators",
      //   external: true,
      // },
      // {
      //   label: "Air Gun",
      //   href: "https://www.spacpneumatic.co.uk/air-gun",
      //   external: true,
      // },
    ],
  },
  {
    id: "filters",
    href: "/filters-sight-glass",
    label: "Filters",
    color: "#2e7d32",
    textColor: "#fff",
    items: [
      { label: "Sight Glass", href: "/filters-sight-glass/sight-glass" },
      { label: "Filtration", href: "/filters-sight-glass/filteration" },
    ],
  },
  {
    id: "valves",
    label: "Valves",
    href: "/valves",
    color: "#2e7d32",
    textColor: "#fff",
    items: [
      {
        label: "Instrumentation Valves",
        href: "/valves",
        children: [
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
      { label: "Industrial Valves", href: "/valves/industrial-valves" },
      { label: "Marine Valves", href: "/valves/marine-valves" },
    ],
  },
  {
    id: "pumps",
    label: "Pumps & Seals",
    href: "/pumps-seals",
    color: "#2e7d32",
    textColor: "#fff",
    items: [
      {
        label: "Submersible Pumps",
        href: "/pumps-seals/pumps",
        children: [
          {
            label: "Stainless Steel Sewage Pumps",
            href: "/pumps-seals/pumps/tss",
          },
          {
            label: "Borewell Submersible",
            href: "/pumps-seals/pumps/borewell",
          },
          {
            label: "Mid-Range Sewage Pumps",
            href: "/pumps-seals/pumps/tgb",
          },
          {
            label: "Light Drainage Pumps",
            href: "/pumps-seals/pumps/tdl",
          },
          {
            label: "Light Sewage Pumps",
            href: "/pumps-seals/pumps/tsl",
          },
          {
            label: "Heavy Sewage Pumps",
            href: "/pumps-seals/pumps/tgt",
          },
          {
            label: "Submersible Sewage Pumps",
            href: "/pumps-seals/pumps/tgt",
          },
          {
            label: "Industrial Sewage Pumps",
            href: "/pumps-seals/pumps/tma",
          },
          {
            label: "Heavy Duty Sewage Pumps",
            href: "/pumps-seals/pumps/tmc",
          },
        ],
      },
      {
        label: "Mechanical Seals",
        href: "/pumps-seals/seals",
      },
    ],
  },
    {
    id: "dbb",
    href: "/double-block-and-bleed-valves",
    label: "Double Block And Bleed",
    color: "#2e7d32",
    textColor: "#fff",
    items: [
      { label: "Flange to Flange", href: "/double-block-and-bleed-valves/flange-to-flange" },
      { label: "Flange to Pipe", href: "/double-block-and-bleed-valves/flange-to-pipe" },
       { label: "Pipe to Pipe", href: "/double-block-and-bleed-valves/pipe-to-pipe" },
    ],
  },
];
