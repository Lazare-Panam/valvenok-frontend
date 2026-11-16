"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { T, textReset } from "../Landing/modern/tokens";
import SectionHeader from "../Landing/modern/SectionHeader";

// One-off curated list of deep pages that currently have only one internal
// link pointing to them (per SEO audit). Adding this second link here is
// the fix — real <a> tags via next/link, no rel="nofollow", so link equity
// passes through.
const GROUPS: { group: string; links: { label: string; href: string }[] }[] = [
  {
    group: "Valves",
    links: [
      { label: "Valve Components", href: "/valves/valve-components" },
      { label: "Check Valves", href: "/valves/sealed-valves/check-valves" },
      {
        label: "Globe Valves",
        href: "/valves/sealed-valves/globe-valves/products",
      },
      {
        label: "Gate Valves",
        href: "/valves/sealed-valves/gate-valves/products",
      },
      { label: "Mars Valves", href: "/valves/mars-valves" },
    ],
  },
  {
    group: "Tubings & Fittings",
    links: [
      {
        label: "JIC Connectors",
        href: "/fittings-tubing/instrumentation-fittings/jic-fittings/connectors",
      },
      {
        label: "JIC Unions & Swivel",
        href: "/fittings-tubing/instrumentation-fittings/jic-fittings/unions-swivel",
      },
      {
        label: "JIC Adapters & Reducers",
        href: "/fittings-tubing/instrumentation-fittings/jic-fittings/adapters-reducers",
      },
      {
        label: "JIC Elbows",
        href: "/fittings-tubing/instrumentation-fittings/jic-fittings/elbows",
      },
      {
        label: "JIC Tees",
        href: "/fittings-tubing/instrumentation-fittings/jic-fittings/tees",
      },
      {
        label: "JIC Plugs",
        href: "/fittings-tubing/instrumentation-fittings/jic-fittings/plugs",
      },
      {
        label: "Pipe Nipples & Couplings",
        href: "/fittings-tubing/instrumentation-fittings/pipe-fittings/nipples-couplings",
      },
      {
        label: "Pipe Adapters & Plugs",
        href: "/fittings-tubing/instrumentation-fittings/pipe-fittings/adapters-plugs",
      },
      {
        label: "Pipe Elbows",
        href: "/fittings-tubing/instrumentation-fittings/pipe-fittings/elbows",
      },
      {
        label: "Pipe Unions & Connectors",
        href: "/fittings-tubing/instrumentation-fittings/pipe-fittings/unions-connectors",
      },
      {
        label: "Pipe Tees & Cross",
        href: "/fittings-tubing/instrumentation-fittings/pipe-fittings/tees-cross",
      },
      {
        label: "All Pipe Fittings",
        href: "/fittings-tubing/instrumentation-fittings/pipe-fittings/all",
      },
      {
        label: "Weld Fitting Elbows",
        href: "/fittings-tubing/instrumentation-fittings/weld-fittings/elbows",
      },
      {
        label: "Weld Fitting Connectors",
        href: "/fittings-tubing/instrumentation-fittings/weld-fittings/connectors",
      },
      {
        label: "Weld Fitting Tees",
        href: "/fittings-tubing/instrumentation-fittings/weld-fittings/tees",
      },
      {
        label: "Swivel Gauge Adaptors",
        href: "/fittings-tubing/instrumentation-fittings/swivel-gauge-adaptors",
      },
      {
        label: "Tube Fitting Connectors",
        href: "/fittings-tubing/instrumentation-fittings/tube-fittings/connectors",
      },
      {
        label: "Tube Fitting Adapters",
        href: "/fittings-tubing/instrumentation-fittings/tube-fittings/adapters",
      },
      {
        label: "Tube Fitting Port Connectors",
        href: "/fittings-tubing/instrumentation-fittings/tube-fittings/port-connectors",
      },
      {
        label: "Tube Fitting Reducers",
        href: "/fittings-tubing/instrumentation-fittings/tube-fittings/reducer",
      },
      {
        label: "Tube Fitting Unions",
        href: "/fittings-tubing/instrumentation-fittings/tube-fittings/unions",
      },
      {
        label: "Tube Fitting Weld Gauge",
        href: "/fittings-tubing/instrumentation-fittings/tube-fittings/weld-gauge",
      },
      {
        label: "Tube Fitting Accessories",
        href: "/fittings-tubing/instrumentation-fittings/tube-fittings/accessories",
      },
      {
        label: "Tube Fitting Die Electric",
        href: "/fittings-tubing/instrumentation-fittings/tube-fittings/die-electric",
      },
    ],
  },
  {
    group: "High Pressure",
    links: [
      {
        label: "High Pressure Fittings",
        href: "/high-pressure/fittings",
      },
      {
        label: "All Fittings (Adapters, Connectors, Unions, Elbows…)",
        href: "/high-pressure/fittings/products",
      },
      {
        label: "Hex Coupling",
        href: "/high-pressure/pipe-fittings/hex-coupling",
      },
      {
        label: "Hex Nipples",
        href: "/high-pressure/pipe-fittings/hex-nipples",
      },
      { label: "Pipe Adapters", href: "/high-pressure/pipe-fittings/adapters" },
      { label: "Pipe Elbows", href: "/high-pressure/pipe-fittings/elbows" },
      {
        label: "Pipe End Connections",
        href: "/high-pressure/pipe-fittings/end-connections",
      },
      {
        label: "Pipe Tees & Cross",
        href: "/high-pressure/pipe-fittings/tees-cross",
      },
    ],
  },
  {
    group: "Hydrogen & High Pressure",
    links: [
      { label: "Hydrogen Valves", href: "/hydrogen-cryogenic/valves/products" },
      {
        label: "Hydrogen Systems",
        href: "/hydrogen-cryogenic/hydrogen/products",
      },
      { label: "LPG", href: "/hydrogen-cryogenic/lpg/products" },
      {
        label: "Industrial Gas",
        href: "/hydrogen-cryogenic/industrial-gas/products",
      },
      {
        label: "Hydrogen & HP Fittings",
        href: "/hydrogen-cryogenic/fittings/products",
      },
    ],
  },
  {
    group: "Pneumatic",
    links: [
      { label: "MPLDS Actuators", href: "/pneumatic/actuators/mplds" },
      { label: "PDS Actuators", href: "/pneumatic/actuators/pds/products" },
      { label: "PLDS Actuators", href: "/pneumatic/actuators/plds/products" },
      { label: "Air Gun", href: "/pneumatic/air-gun" },
      { label: "SDNC Cylinders", href: "/pneumatic/cylinders/sdnc" },
      { label: "ESNC Cylinders", href: "/pneumatic/cylinders/esnc" },
      { label: "ESC Cylinders", href: "/pneumatic/cylinders/esc" },
      { label: "SDNU Cylinders", href: "/pneumatic/cylinders/sdnu" },
      { label: "FG Valves", href: "/pneumatic/valves/fg" },
      { label: "TG Valves", href: "/pneumatic/valves/tg" },
      { label: "Foot Pedal Valves", href: "/pneumatic/valves/foot-pedal" },
    ],
  },
  {
    group: "Actuators",
    links: [
      { label: "ITQ Electric Actuators", href: "/actuators/electric/itq" },
      { label: "ADF Hydraulic Actuators", href: "/actuators/hydraulic/adf" },
      { label: "ITS Limit Switches", href: "/actuators/limit-switches/its" },
      {
        label: "IQL Electric Actuators",
        href: "/actuators/electric/iql/products",
      },
      {
        label: "ITL Electric Actuators",
        href: "/actuators/electric/itl/products",
      },
      {
        label: "ITM Electric Actuators",
        href: "/actuators/electric/itm/products",
      },
      {
        label: "MAB Mechanical Actuators",
        href: "/actuators/mechanical/mab/products",
      },
      {
        label: "MAW Mechanical Actuators",
        href: "/actuators/mechanical/maw/products",
      },
      {
        label: "ITG Mechanical Actuators",
        href: "/actuators/mechanical/itg/products",
      },
    ],
  },
  {
    group: "Instrumentation",
    links: [
      {
        label: "Gas Pressure Regulators",
        href: "/instrumentation/gas-pressure-regulator/products",
      },
    ],
  },
  {
    group: "Pumps & Seals",
    links: [
      {
        label: "Electronic Control Pump",
        href: "/pumps-seals/pumps/electronic-control-pump/variants",
      },
      {
        label: "Automatic Booster Pump",
        href: "/pumps-seals/pumps/automatic-booster-pump/variants",
      },
      {
        label: "Multistage Centrifugal Pump",
        href: "/pumps-seals/pumps/multistage-centrifugal-pump/variants",
      },
      {
        label: "Direct Water Pump",
        href: "/pumps-seals/pumps/direct-water-pump/variants",
      },
      {
        label: "Submersible Pump",
        href: "/pumps-seals/pumps/submersible-pump/variants",
      },
      {
        label: "Hot Water Pump",
        href: "/pumps-seals/pumps/hot-water-pump/variants",
      },
      {
        label: "Automatic Flow Controlled Pump",
        href: "/pumps-seals/pumps/automatic-flow-controlled-pump/variants",
      },
      {
        label: "Immersible Pump",
        href: "/pumps-seals/pumps/immersible-pump/variants",
      },
    ],
  },
  {
    group: "Guides & News",
    links: [
      { label: "Butterfly Valve Guide", href: "/news/butterfly-valve-guide" },

      {
        label: "Pietro Fiorentini Partnership",
        href: "/news/pietro-fiorentini-partnership",
      },
      {
        label: "KOSA PLUS Partnership",
        href: "/news/valvenok-kosa-plus-partnership",
      },
      { label: "Mars Valve Partnership", href: "/news/mars-valve-partnership" },
      { label: "Mechanical Seals Guide", href: "/news/mechanical-seals-guide" },
      {
        label: "Ball Valve vs Gate Valve",
        href: "/news/ball-valve-vs-gate-valve",
      },
      { label: "Manufacturer Spotlight", href: "/news/manufacturer-spotlight" },
      {
        label: "Hydrogen Leak-Tight Threads",
        href: "/news/instrumentation-fittings-hydrogen-leak-tight-threads",
      },
      { label: "Seals Blog", href: "/news/seals-blog" },
      {
        label: "Stainless Steel vs Cast Iron",
        href: "/news/stainless-steel-vs-cast-iron",
      },
    ],
  },
  {
    group: "Quick Order Parts",
    links: [
      { label: "PFT-4N-SS", href: "/quick-order/PFT-4N-SS" },
      { label: "PTP-M08-SS", href: "/quick-order/PTP-M08-SS" },
      { label: "PBV-HB-S-08-OD", href: "/quick-order/PBV-HB-S-08-OD" },
      { label: "PCN-4G-SS", href: "/quick-order/PCN-4G-SS" },
      { label: "PCV-08-SS-FF", href: "/quick-order/PCV-08-SS-FF" },
    ],
  },
];

export default function SEOButtons() {
  return (
    <Box component="section" sx={{ ...textReset, bgcolor: T.surface, borderTop: `1px solid ${T.border}` }}>
      <Box sx={{ width: "100%", boxSizing: "border-box", maxWidth: T.maxWidth, mx: "auto", px: { xs: 2, md: 4 }, py: { xs: 8, md: 11 } }}>
        <SectionHeader eyebrow="Browse By Category" title="Explore our full range" />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2.5 }}>
          {GROUPS.map(({ group, links }) => (
            <Box key={group} sx={{ p: { xs: 2.5, md: 3 }, borderRadius: T.radius, bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                <Typography component="h3" sx={{ fontWeight: 700, fontSize: "1.05rem", color: T.ink }}>
                  {group}
                </Typography>
                <Box component="span" sx={{ fontSize: "0.78rem", fontWeight: 600, color: T.muted }}>
                  {links.length} {links.length === 1 ? "link" : "links"}
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {links.map(({ label, href }) => (
                  <Box
                    key={href}
                    component={Link}
                    href={href}
                    sx={{
                      px: 1.5,
                      py: 0.7,
                      borderRadius: 999,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: T.ink,
                      textDecoration: "none",
                      border: `1px solid ${T.border}`,
                      bgcolor: T.surface,
                      transition: "all .15s",
                      "&:hover": { borderColor: T.greenDark, color: T.greenDark, bgcolor: T.greenSoft },
                    }}
                  >
                    {label}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
