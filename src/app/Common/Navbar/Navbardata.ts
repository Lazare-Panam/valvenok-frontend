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
      {
        label: "Tubing",
        href: "/fittings-tubing",
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
        label: "Pneumatic Cylinder",
        href: "https://www.spacpneumatic.co.uk/products/cylinders",
        external: true,
      },
      { label: "Pneumatic Fittings", href: "/pneumatic/fittings" },
      { label: "Pneumatic Tubing", href: "/pneumatic/tubing" },
      { label: "Pneumatic Actuators", href: "/pneumatic/actuators" },
      { label: "Air Gun", href: "/pneumatic/air-gun" },
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
      },
      {
        label: "Mechanical Seals",
        href: "/pumps-seals/seals",
      },
    ],
  },
];