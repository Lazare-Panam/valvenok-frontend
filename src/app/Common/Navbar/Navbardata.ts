import React from "react";
// Navigation Specific Icons
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined"; // For News
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"; // For About
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"; // For Account
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"; // For Contact

// Product Specific Icons
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface Product {
  label: string;
  icon: React.ReactNode;
  href: string;
}

export interface Category {
  id: string;
  label: string;
  color: string;
  textColor: string;
  products: Product[];
}

export interface NavLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

// ── Nav links ─────────────────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { 
    label: "Home", 
    href: "/", 
    icon: React.createElement(StorefrontOutlinedIcon, { sx: { fontSize: 18 } }) 
  },
  { 
    label: "News & Blog", 
    href: "/news", 
    icon: React.createElement(ArticleOutlinedIcon, { sx: { fontSize: 18 } }) 
  },
  { 
    label: "About us", 
    href: "/about", 
    icon: React.createElement(InfoOutlinedIcon, { sx: { fontSize: 18 } }) 
  },
  { 
    label: "My Account", 
    href: "/account", 
    icon: React.createElement(PersonOutlineOutlinedIcon, { sx: { fontSize: 18 } }) 
  },
  { 
    label: "Contact Us", 
    href: "/contact", 
    icon: React.createElement(EmailOutlinedIcon, { sx: { fontSize: 18 } }) 
  },
];

// ── Categories ────────────────────────────────────────────────────────────────

export const CATEGORIES: Category[] = [
  {
    id: "hydraulic",
    label: "Hydraulic",
    color: "#1c6e2e",
    textColor: "#fff",
    products: [
      { label: "Hose & Fittings",                    icon: React.createElement(LocalShippingOutlinedIcon), href: "/hydraulic/hose-fittings" },
      { label: "Adaptors",                           icon: React.createElement(SettingsOutlinedIcon),      href: "/hydraulic/adaptors" },
      { label: "Quick Release Couplings",            icon: React.createElement(BuildOutlinedIcon),         href: "/hydraulic/quick-release" },
      { label: "Steel Tube & Compression Fittings",  icon: React.createElement(FactoryOutlinedIcon),       href: "/hydraulic/steel-tube" },
      { label: "Swaging Machines",                   icon: React.createElement(SettingsOutlinedIcon),      href: "/hydraulic/swaging" },
      { label: "Cylinders",                          icon: React.createElement(SpeedOutlinedIcon),         href: "/hydraulic/cylinders" },
      { label: "Oil Coolers",                        icon: React.createElement(AirOutlinedIcon),           href: "/hydraulic/oil-coolers" },
      { label: "Pumps & Motors",                     icon: React.createElement(SettingsOutlinedIcon),      href: "/hydraulic/pumps-motors" },
      { label: "Power Packs & Accessories",          icon: React.createElement(LockOutlinedIcon),          href: "/hydraulic/power-packs" },
      { label: "Test Equipment",                     icon: React.createElement(SpeedOutlinedIcon),         href: "/hydraulic/test-equipment" },
      { label: "Accumulators",                       icon: React.createElement(WaterDropOutlinedIcon),     href: "/hydraulic/accumulators" },
      { label: "Filtration",                         icon: React.createElement(ShieldOutlinedIcon),        href: "/hydraulic/filtration" },
    ],
  },
  {
    id: "pneumatic",
    label: "Pneumatic",
    color: "#2e7d32",
    textColor: "#fff",
    products: [
      { label: "Nylon Tubing",                icon: React.createElement(BuildOutlinedIcon),     href: "/pneumatic/nylon-tubing" },
      { label: "Camozzi Push Fittings",       icon: React.createElement(SettingsOutlinedIcon),  href: "/pneumatic/push-fittings" },
      { label: "CDC Plastic Push-in Fittings",icon: React.createElement(SettingsOutlinedIcon),  href: "/pneumatic/cdc-fittings" },
      { label: "Transair",                    icon: React.createElement(AirOutlinedIcon),        href: "/pneumatic/transair" },
      { label: "Pneumatic Cylinders",         icon: React.createElement(SpeedOutlinedIcon),      href: "/pneumatic/cylinders" },
      { label: "Rotary Cylinders",            icon: React.createElement(SettingsOutlinedIcon),   href: "/pneumatic/rotary-cylinders" },
      { label: "Pneumatic Valves",            icon: React.createElement(BuildOutlinedIcon),      href: "/pneumatic/valves" },
      { label: "Air Reservoirs",              icon: React.createElement(WaterDropOutlinedIcon),  href: "/pneumatic/air-reservoirs" },
      { label: "Soft Start Valves",           icon: React.createElement(ShieldOutlinedIcon),     href: "/pneumatic/soft-start" },
      { label: "Air Treatment",              icon: React.createElement(AirOutlinedIcon),         href: "/pneumatic/air-treatment" },
    ],
  },
  {
    id: "industrial",
    label: "Industrial",
    color: "#388e3c",
    textColor: "#fff",
    products: [
      { label: "Industrial Hose",          icon: React.createElement(BuildOutlinedIcon),      href: "/industrial/hose" },
      { label: "Air Conditioning Hose",    icon: React.createElement(AirOutlinedIcon),         href: "/industrial/ac-hose" },
      { label: "Stainless Steel Fittings", icon: React.createElement(FactoryOutlinedIcon),     href: "/industrial/stainless" },
      { label: "Maclock Couplings",        icon: React.createElement(SettingsOutlinedIcon),    href: "/industrial/couplings" },
      { label: "Grease Guns",              icon: React.createElement(BuildOutlinedIcon),       href: "/industrial/grease-guns" },
      { label: "Industrial Valves",        icon: React.createElement(ShieldOutlinedIcon),      href: "/industrial/valves" },
      { label: "Camlock Fittings",         icon: React.createElement(SettingsOutlinedIcon),    href: "/industrial/camlock" },
      { label: "Electric Motors",          icon: React.createElement(SpeedOutlinedIcon),       href: "/industrial/motors" },
      { label: "Flexible Connectors",      icon: React.createElement(BuildOutlinedIcon),       href: "/industrial/flexible" },
      { label: "Hose Reels",               icon: React.createElement(LocalShippingOutlinedIcon), href: "/industrial/hose-reels" },
    ],
  },
  {
    id: "seals",
    label: "Seals",
    color: "#43a047",
    textColor: "#fff",
    products: [
      { label: "O-Rings",          icon: React.createElement(ShieldOutlinedIcon),     href: "/seals/o-rings" },
      { label: "Hydraulic Seals",  icon: React.createElement(WaterDropOutlinedIcon),  href: "/seals/hydraulic" },
      { label: "Mechanical Seals", icon: React.createElement(SettingsOutlinedIcon),   href: "/seals/mechanical" },
      { label: "Rotary Seals",     icon: React.createElement(SpeedOutlinedIcon),      href: "/seals/rotary" },
      { label: "Gaskets",          icon: React.createElement(ShieldOutlinedIcon),     href: "/seals/gaskets" },
    ],
  },
  {
    id: "instrumentation",
    label: "Instrumentation",
    color: "#4caf50",
    textColor: "#fff",
    products: [
      { label: "Pressure Gauges",    icon: React.createElement(SpeedOutlinedIcon),      href: "/instrumentation/gauges" },
      { label: "Transmitters",       icon: React.createElement(SettingsOutlinedIcon),   href: "/instrumentation/transmitters" },
      { label: "Flow Meters",        icon: React.createElement(WaterDropOutlinedIcon),  href: "/instrumentation/flow-meters" },
      { label: "Temp Sensors",       icon: React.createElement(SpeedOutlinedIcon),      href: "/instrumentation/temp-sensors" },
      { label: "Pressure Switches",  icon: React.createElement(ShieldOutlinedIcon),     href: "/instrumentation/pressure-switches" },
    ],
  },
  {
    id: "ancillary",
    label: "Ancillary",
    color: "#1c2e1a",
    textColor: "#fff",
    products: [
      { label: "Adhesives",           icon: React.createElement(BuildOutlinedIcon),      href: "/ancillary/adhesives" },
      { label: "Spill Kits",          icon: React.createElement(ShieldOutlinedIcon),     href: "/ancillary/spill-kits" },
      { label: "Flexible Connectors", icon: React.createElement(SettingsOutlinedIcon),   href: "/ancillary/flexible" },
      { label: "Wash Down",           icon: React.createElement(WaterDropOutlinedIcon),  href: "/ancillary/wash-down" },
      { label: "Ring Main Systems",   icon: React.createElement(FactoryOutlinedIcon),    href: "/ancillary/ring-main" },
    ],
  },
];