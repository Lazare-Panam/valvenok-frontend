"use client";

export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export interface Category {
  id: string;
  label: string;
  color: string;
  textColor: string;
  items: NavItem[];
}

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "News & Blog", href: "/news" },
  { label: "Brands", href: "/brands" },
  { label: "My Account", href: "/account" },
  { label: "Contact Us", href: "/contact" },
];

export const CATEGORIES: Category[] = [
  {
    id: "fittings",
    label: "Fittings & Valves",
    color: "#1c6e2e",
    textColor: "#fff",
    items: [
      {
        label: "Instrumentation Fittings",
        href: "/categories/instrumentation-fittings",
      },
      { label: "Instrumentation Valves", href: "/valves" },
    ],
  },
  {
    id: "pneumatic",
    label: "Pneumatic",
    color: "#2e7d32",
    textColor: "#fff",
    items: [
      { label: "Pneumatic Cylinder", href: "/categories/pneumatics" },
      { label: "FRL Units", href: "/categories/frl" },
    ],
  },
  {
    id: "filters",
    label: "Filters",
    color: "#2e7d32",
    textColor: "#fff",
    items: [
      { label: "Sight Glass", href: "/categories/sight-glass" },
      { label: "Filtration", href: "/categories/filtration" },
    ],
  },
  {
    id: "actuators",
    label: "Actuators",
    color: "#2e7d32",
    textColor: "#fff",
    items: [{ label: "Pneumatic Actuators", href: "/categories/actuators" }],
  },
  {
    id: "valves",
    label: "Industrial Valves",
    color: "#2e7d32",
    textColor: "#fff",
    items: [
      { label: "Industrial Valves", href: "/industrial-valves" },
      { label: "Marine Valves", href: "/marine-valves" },
    ],
  },
  {
    id: "pumps",
    label: "Pumps & Seals",
    color: "#2e7d32",
    textColor: "#fff",
    items: [
      {
        label: "Submersible Pumps",
        href: "/submersible",
        children: [
          {
            label: "Borewell Submersible",
            href: "/submersible/borewell",
          },
          {
            label: "Openwell Submersible",
            href: "/submersible/borewell",
            children: [
              { label: "Horizontal Pumps", href: "/submersible/borewell" },
              { label: "Vertical Pumps", href: "/submersible/borewell" },
            ],
          },
          {
            label: "WasterWater Submersible",
            href: "/wastewater",
            children: [
              { label: "TDL Pumps", href: "/submersible/tdl" },
              { label: "TSL Pumps", href: "/submersible/tsl" },
               { label: "TGT Pumps", href: "/submersible/tgt" },
                { label: "TGA Pumps", href: "/submersible/tga" },
                { label: "TMC Pumps", href: "/submersible/tmc" },
            ],
          },
          {
            label: "Surface Pumps",
            href: "/submersible/borewell",
            children: [
              { label: "Peripheral Pumps", href: "/submersible/borewell" },
              {
                label: "Centrifugal Monoblock Pumps",
                href: "/submersible/borewell",
              },
              { label: "Close Coupled Pumps", href: "/submersible/borewell" },
              { label: "End Suction Pumps", href: "/submersible/borewell" },
              {
                label: "Horizontal Split Case Pumps",
                href: "/submersible/borewell",
              },
              {
                label: "Horizontal Multistage Pumps",
                href: "/submersible/borewell",
              },
              {
                label: "Vertical Multistage Pumps",
                href: "/submersible/borewell",
              },
              {
                label: "Pressure Boosting Systems",
                href: "/submersible/borewell",
              },
              { label: "Induction Motors", href: "/submersible/borewell" },
              { label: "Dewatering Pumps", href: "/submersible/borewell" },
              {
                label: "Vertical Turbine Pumps",
                href: "/submersible/borewell",
              },
            ],
          },
        ],
      },
      {
        label: "Mechanical Seals",
        href: "/categories/mechanical-seals",
      },
    ],
  },
];
