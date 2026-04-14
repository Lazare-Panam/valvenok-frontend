'use client';

import React from "react";
// Navigation Specific Icons
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined"; 
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"; 
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"; 
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"; 

// Product Specific Icons

import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import PropaneTankOutlinedIcon from '@mui/icons-material/PropaneTankOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SettingsInputComponentOutlinedIcon from '@mui/icons-material/SettingsInputComponentOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';

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
    label: "Brands", 
    href: "/brands", 
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
    id: "fittings",
    label: "Fittings & Valves",
    color: "#1c6e2e",
    textColor: "#fff",
    products: [
      { label: "Instrumentation Fittings", icon: React.createElement(PrecisionManufacturingOutlinedIcon), href: "/categories/instrumentation-fittings" },
      { label: "Instrumentation Valves", icon: React.createElement(SettingsInputComponentOutlinedIcon), href: "/valves" },
    ],
  },

  {
    id: "pneumatic",
    label: "Pneumatic",
    color: "#2e7d32",
    textColor: "#fff",
    products: [
      { label: "Pneumatic Cylinder", icon: React.createElement(AirOutlinedIcon), href: "/categories/pneumatics" },
      { label: "FRL Units", icon: React.createElement(PropaneTankOutlinedIcon), href: "/categories/frl" },
    ],
  },

  {
    id: "filters",
    label: "Filters",
    color: "#2e7d32",
    textColor: "#fff",
    products: [
      { label: "Sight Glass", icon: React.createElement(VisibilityOutlinedIcon), href: "/categories/sight-glass" },
      { label: "Filtration", icon: React.createElement(FilterAltOutlinedIcon), href: "/categories/filtration" },
    ],
  },
  {
    id: "acturators",
    label: "Acutators",
    color: "#2e7d32",
    textColor: "#fff",
    products: [
      { label: "Pneumatic Actuators", icon: React.createElement(ConstructionOutlinedIcon), href: "/categories/actuators" },
    ],
  },
  {
    id: "valves",
    label: "Indsutrial Valves",
    color: "#2e7d32",
    textColor: "#fff",
    products: [
      { label: "Industrial Valves", icon: React.createElement(FactoryOutlinedIcon), href: "/atam-valves" },
    ],
  },

  {
    id: "pumps",
    label: "Pumps & Seals",
    color: "#2e7d32",
    textColor: "#fff",
    products: [
      { label: "Pumps", icon: React.createElement(SpeedOutlinedIcon), href: "/pumps" },
      { label: "Mechanical Seals", icon: React.createElement(ShieldOutlinedIcon), href: "/categories/mechanical-seals" },
    ],
  },
];