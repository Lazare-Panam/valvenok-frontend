"use client";

export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export interface Category {
  id: string;
  label: string;
  href?: string;
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
    label: "Fittings & Valves",
    href: "/fittings",
    color: "#1c6e2e",
    textColor: "#fff",
    items: [
      {
        label: "Instrumentation Fittings",
        href: "/instrumentation-fittings",
        children: [
          { label: "Tube Fittings", href: "/fittings" },
          { label: "Pipe Fittings", href: "/pipe-fittings" },
          { label: "Flare Fittings", href: "/jic-fittings" },
          { label: "Weld Fittings", href: "/weld" },
        ],
      },
      {
        label: "Instrumentation Valves",
        href: "/valves",
        children: [
          { label: "Ball Valves", href: "/ball-valves" },
          { label: "Needle Valves", href: "/needle-valves" },
          { label: "Check Valves", href: "/valves/pcv" },
          { label: "Relief Valves", href: "/valves/relief" },
        ],
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
      { label: "Pneumatic Cylinder", href: "/pneumatic/cylinders" },
      { label: "Pneumatic Fittings", href: "/pneumatic/apfittings" },
      { label: "Pneumatic Tubing", href: "/pneumatic/tubing" },
      { label: "Air Gun", href: "/pneumatic/air-gun" },
    ],
  },
  {
    id: "filters",
    href:"/filters",
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
     href: "/actuators",
    label: "Actuators",
    color: "#2e7d32",
    textColor: "#fff",
    items: [{ label: "Pneumatic Actuators", href: "/actuators" }],
  },
  {
    id: "valves",
    label: "Industrial Valves",
    href:"/flow-control",
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
    href: "pumps-seals",
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
          { label: "Light Drainage Pumps", href: "/submersible/tdl" },
          { label: "Light Sewage Pumps", href: "/submersible/tsl" },
          { label: "Heavy Sewage Pumps", href: "/submersible/tgt" },
          { label: " Submersible Sewage Pumps", href: "/submersible/tga" },
          {
            label: "Heavy Duty Sewage Submersible Pumps",
            href: "/submersible/tmc",
          },
          // {
          //   label: "Openwell Submersible",
          //   href: "/submersible/borewell",
          //   children: [
          //     { label: "Horizontal Pumps", href: "/submersible/borewell" },
          //     { label: "Vertical Pumps", href: "/submersible/borewell" },
          //   ],
          // },
          // {
          //   label: "WasterWater Submersible",
          //   href: "/wastewater",
          //   children: [
          //     { label: "Light Drainage Pumps", href: "/submersible/tdl" },
          //     { label: "Light Sewage Pumps", href: "/submersible/tsl" },
          //      { label: "Heavy Sewage Pumps", href: "/submersible/tgt" },
          //       { label: " Submersible Sewage Pumps", href: "/submersible/tga" },
          //       { label: "Heavy Duty Sewage Submersible Pumps", href: "/submersible/tmc" },
          //   ],
          // },
          // {
          //   label: "Surface Pumps",
          //   href: "/submersible/borewell",
          //   children: [
          //     { label: "Peripheral Pumps", href: "/submersible/borewell" },
          //     {
          //       label: "Centrifugal Monoblock Pumps",
          //       href: "/submersible/borewell",
          //     },
          //     { label: "Close Coupled Pumps", href: "/submersible/borewell" },
          //     { label: "End Suction Pumps", href: "/submersible/borewell" },
          //     {
          //       label: "Horizontal Split Case Pumps",
          //       href: "/submersible/borewell",
          //     },
          //     {
          //       label: "Horizontal Multistage Pumps",
          //       href: "/submersible/borewell",
          //     },
          //     {
          //       label: "Vertical Multistage Pumps",
          //       href: "/submersible/borewell",
          //     },
          //     {
          //       label: "Pressure Boosting Systems",
          //       href: "/submersible/borewell",
          //     },
          //     { label: "Induction Motors", href: "/submersible/borewell" },
          //     { label: "Dewatering Pumps", href: "/submersible/borewell" },
          //     {
          //       label: "Vertical Turbine Pumps",
          //       href: "/submersible/borewell",
          //     },
          //   ],
          // },
        ],
      },
      {
        label: "Mechanical Seals",
        href: "/seals",
      },
    ],
  },
];
