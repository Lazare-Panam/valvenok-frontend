'use client'

import Link from "next/link";
import { Box } from "@mui/material";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { CARD, CARD_HOVER, T, textReset } from "./homeTokens";
import { BRAND, BRAND_GRADIENT, LOGO, withAlpha } from "@/src/theme/brand";

// Each card opens its category page (not a deep sub-page).
const QUICK_LINKS = [
  { name: "Valves", sub: "Ball, butterfly, check & more", href: "/valves", icon: TuneOutlinedIcon },
  { name: "Actuators", sub: "Pneumatic, electric & hydraulic", href: "/pneumatic/actuators", icon: SettingsOutlinedIcon },
  { name: "Hydrogen & High Pressure", sub: "Cone & thread, H₂-ready", href: "/hydrogen-cryogenic", icon: AcUnitOutlinedIcon },
  { name: "Fittings & Instrumentation", sub: "Tube fittings, manifolds & tubing", href: "/fittings-tubing", icon: BuildOutlinedIcon },
  { name: "Filters", sub: "Filters & sight glasses", href: "/filters-sight-glass", icon: FilterAltOutlinedIcon },
];

// Compact horizontal cards (23 Nov 2026): logo-gradient icon chip, name with one line of
// detail, a round arrow button, and a logo-gradient line that grows along the bottom on hover.
export default function QuickNavModern() {
  return (
    <Box component="nav" aria-label="Product categories" sx={{ ...textReset, width: "100%", boxSizing: "border-box", maxWidth: T.maxWidth, mx: "auto", px: { xs: 2, md: 4 }, pt: { xs: 2, md: 2.5 }, pb: { xs: 6, md: 8 } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)", lg: "repeat(5, 1fr)" },
          gap: 2,
        }}
      >
        {QUICK_LINKS.map(({ name, sub, href, icon: Icon }) => (
          <Box
            key={name}
            component={Link}
            href={href}
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: 1.75,
              minHeight: 84,
              px: 2,
              py: 1.75,
              ...CARD,
              color: T.ink,
              textDecoration: "none",
              // logo-gradient line along the bottom, grows in on hover
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: 0,
                height: 3,
                width: "100%",
                background: `linear-gradient(90deg, ${LOGO.top}, ${LOGO.mid}, ${LOGO.bottom})`,
                transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform .35s ease",
              },
              "& .qn-arrow": { transition: "all .25s ease" },
              "&:hover": CARD_HOVER,
              "&:hover::after": { transform: "scaleX(1)" },
              "&:hover .qn-arrow": { background: BRAND_GRADIENT, color: BRAND.white, borderColor: "transparent", transform: "translateX(2px)" },
            }}
          >
            <Box
              sx={{
                flexShrink: 0,
                width: 48,
                height: 48,
                borderRadius: "14px",
                display: "grid",
                placeItems: "center",
                background: BRAND_GRADIENT,
                color: BRAND.white,
                boxShadow: `0 8px 18px -8px ${withAlpha(LOGO.bottom, 0.6)}`,
              }}
            >
              <Icon sx={{ fontSize: 24 }} />
            </Box>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Box component="span" sx={{ display: "block", fontSize: "0.98rem", fontWeight: 700, lineHeight: 1.25 }}>
                {name}
              </Box>
              <Box component="span" sx={{ display: "block", mt: 0.4, fontSize: "0.8rem", color: T.muted, lineHeight: 1.35 }}>
                {sub}
              </Box>
            </Box>
            <Box
              className="qn-arrow"
              sx={{
                flexShrink: 0,
                width: 32,
                height: 32,
                borderRadius: "50%",
                // hidden when five cards share a row (the page is never wider than 1536px),
                // so the names have room; the bottom line still shows the hover
                display: { xs: "grid", lg: "none" },
                placeItems: "center",
                border: `1px solid ${T.border}`,
                color: T.brandDeep,
              }}
            >
              <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
