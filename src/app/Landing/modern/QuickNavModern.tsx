'use client'

import Link from "next/link";
import { Box } from "@mui/material";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { T, textReset } from "./homeTokens";
import { BRAND, BRAND_GRADIENT, withAlpha } from "@/src/theme/brand";

// Each card opens its category page (not a deep sub-page).
const QUICK_LINKS = [
  { name: "Valves", href: "/valves", icon: TuneOutlinedIcon },
  { name: "Actuators", href: "/pneumatic/actuators", icon: SettingsOutlinedIcon },
  { name: "Hydrogen & High Pressure", href: "/hydrogen-cryogenic", icon: AcUnitOutlinedIcon },
  { name: "Fittings & Instrumentation", href: "/fittings-tubing", icon: BuildOutlinedIcon },
  { name: "Filters", href: "/filters-sight-glass", icon: FilterAltOutlinedIcon },
];

export default function QuickNavModern() {
  return (
    <Box component="nav" aria-label="Product categories" sx={{ ...textReset, width: "100%", boxSizing: "border-box", maxWidth: T.maxWidth, mx: "auto", px: { xs: 2, md: 4 }, pt: { xs: 2, md: 2.5 } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)", lg: "repeat(5, 1fr)" },
          gap: 2,
        }}
      >
        {QUICK_LINKS.map(({ name, href, icon: Icon }) => (
          <Box
            key={name}
            component={Link}
            href={href}
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 2.5,
              minHeight: 132,
              p: 2.25,
              borderRadius: T.radius,
              border: `1px solid ${T.border}`,
              bgcolor: BRAND.white,
              color: T.ink,
              textDecoration: "none",
              overflow: "hidden",
              transition: "all .25s ease",
              "& .qn-icon": { transition: "all .25s ease" },
              "& .qn-arrow": { transition: "all .25s ease" },
              // Light hover (23 Nov 2026): pale aqua card instead of a dark fill
              "&:hover": {
                bgcolor: BRAND.white,
                borderColor: BRAND.main,
                color: T.brandDeep,
                transform: "translateY(-3px)",
                boxShadow: `0 14px 28px ${withAlpha(BRAND.main, 0.14)}`,
              },
              "&:hover .qn-icon": { background: BRAND_GRADIENT, color: BRAND.white },
              "&:hover .qn-arrow": { opacity: 1, transform: "translate(0,0)" },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <Box className="qn-icon" sx={{ width: 46, height: 46, borderRadius: "14px", display: "grid", placeItems: "center", bgcolor: T.brandSoft, color: T.brandDark }}>
                <Icon sx={{ fontSize: 24 }} />
              </Box>
              <ArrowOutwardRoundedIcon className="qn-arrow" sx={{ fontSize: 20, opacity: 0, transform: "translate(-4px,4px)" }} />
            </Box>
            <Box component="span" sx={{ fontSize: "0.98rem", fontWeight: 600, lineHeight: 1.3 }}>
              {name}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
