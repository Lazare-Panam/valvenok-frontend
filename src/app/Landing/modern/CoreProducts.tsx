'use client'

import { useState } from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SubdirectoryArrowRightRoundedIcon from "@mui/icons-material/SubdirectoryArrowRightRounded";
import { T, textReset } from "./tokens";
import SectionHeader from "./SectionHeader";

// Same data as the original Categories section.
const CATEGORIES = [
  {
    name: "Valves",
    img: "https://pblol2.blob.core.windows.net/mars-valves/ball-valves/series-10-10.png",
    href: "/valves/instrumentation-valves/ball-valves",
    tag: "Heavy Duty",
    count: "280+",
    subs: [
      { name: "Process Valves", href: "/valves/" },
      { name: "Sealed Valves", href: "/valves/sealed-valves" },
      {
        name: "Instrumentation Valves",
        href: "/valves/instrumentation-valves",
      },
    ],
  },
  {
    name: "Actuators",
    img: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/hydraulic/adf.webp",
    href: "/pneumatic/actuators",
    tag: "Precision",
    count: "50+",
    subs: [{ name: "Pneumatic Actuators", href: "/pneumatic/actuators" }],
  },
  {
    name: "Hydrogen & High Pressure",
    img: "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YEX-1100.png",
    href: "/hydrogen-cryogenic",
    tag: "New",
    count: "40+",
    subs: [
      {
        name: "Hydrogen Cylinder Valves",
        href: "/hydrogen-cryogenic/hydrogen",
      },
      { name: "LPG Cylinder Valves", href: "/hydrogen-cryogenic/lpg" },
      {
        name: "Industrial Gas Valves",
        href: "/hydrogen-cryogenic/industrial-gas",
      },
    ],
  },
  {
    name: "Fittings & Instrumentation Valves",
    img: "https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/hp-nv.webp",
    href: "/fittings-tubing/instrumentation-fittings/jic-fittings",
    tag: "Most Popular",
    count: "450+",
    subs: [
      {
        name: "Flare Fittings",
        href: "/fittings-tubing/instrumentation-fittings/jic-fittings/",
      },
      { name: "Instrumentation Valves", href: "/valves" },
      {
        name: "Pipe Fittings",
        href: "/fittings-tubing/instrumentation-fittings/pipe-fittings",
      },
      {
        name: "Weld Fittings",
        href: "/fittings-tubing/instrumentation-fittings/weld-fittings",
      },
      { name: "SS Tubing", href: "/fittings-tubing/tubing" },
    ],
  },
  {
    name: "Filters",
    img: "https://pblol2.blob.core.windows.net/valvenok-images/products/filters/DFM_Mega_Flow_Rate_Filter.png",
    href: "/filters-sight-glass",
    tag: "Industrial",
    count: "80+",
    subs: [
      { name: "Sight Glass", href: "/filters-sight-glass/sight-glass" },
      { name: "Filtration", href: "/filters-sight-glass/filtration" },
    ],
  },
];

// Panel backgrounds: soft neutral tints so the cut-out product shots read
// cleanly; the active panel lifts to white.
const PANEL_BG = [
  "linear-gradient(170deg, #F7FAF7 0%, #ECF2ED 100%)",
  "linear-gradient(170deg, #F6F8FA 0%, #EBEFF3 100%)",
  "linear-gradient(170deg, #F8F8F5 0%, #EEEEE8 100%)",
  "linear-gradient(170deg, #F5F9F6 0%, #E8F0EA 100%)",
  "linear-gradient(170deg, #F7F7F9 0%, #ECECF1 100%)",
  "linear-gradient(170deg, #F6F9F5 0%, #EAF1E7 100%)",
];
const ACTIVE_BG = `radial-gradient(700px 420px at 85% 50%, #FFFFFF 0%, transparent 70%), linear-gradient(135deg, #FFFFFF 0%, ${"#EEF9EA"} 100%)`;

export default function CoreProducts() {
  const [active, setActive] = useState(3); // Fittings & Instrumentation Valves

  return (
    <Box component="section" sx={{ ...textReset, width: "100%", boxSizing: "border-box", maxWidth: T.maxWidth, mx: "auto", px: { xs: 2, md: 4 }, py: { xs: 8, md: 12 } }}>
      <SectionHeader eyebrow="Browse by Category" title="Explore Our Catalog" />

      {/* Tabs */}
      <Box role="tablist" sx={{ display: { xs: "none", md: "flex" }, flexWrap: "wrap", gap: 1, mb: 3 }}>
        {CATEGORIES.map((cat, i) => (
          <Box
            key={cat.name}
            component="button"
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            sx={{
              px: 2.25,
              py: 1.1,
              borderRadius: 999,
              border: `1px solid ${i === active ? T.green : T.border}`,
              bgcolor: i === active ? T.green : "#fff",
              color: i === active ? T.greenDeep : T.ink,
              fontSize: "0.92rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all .2s",
              "&:hover": { borderColor: T.green },
            }}
          >
            {cat.name}
          </Box>
        ))}
      </Box>

      {/* Expanding panels (desktop) / stacked cards (mobile) */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 1.5, height: { md: 560 } }}>
        {CATEGORIES.map((cat, i) => {
          const isActive = i === active;
          return (
            <Box
              key={cat.name}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "24px",
                cursor: isActive ? "default" : "pointer",
                background: isActive ? ACTIVE_BG : PANEL_BG[i % PANEL_BG.length],
                border: `1px solid ${isActive ? "#CFE6C8" : T.border}`,
                flex: { md: isActive ? "6 1 0" : "1 1 0" },
                minWidth: 0,
                minHeight: { xs: isActive ? 640 : 84, md: "auto" },
                transition: "flex .6s cubic-bezier(.2,.8,.2,1), min-height .4s ease, box-shadow .3s",
                boxShadow: isActive ? "0 24px 48px rgba(14,27,18,0.12)" : "none",
                "&:hover": isActive ? {} : { borderColor: "#CFE6C8" },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: 520,
                  height: 520,
                  right: -160,
                  top: -160,
                  borderRadius: "50%",
                  border: "1px solid rgba(46,139,30,0.08)",
                  boxShadow: "0 0 0 70px rgba(46,139,30,0.025), 0 0 0 140px rgba(46,139,30,0.02)",
                },
              }}
            >
              {/* Product shot on a soft spotlight */}
              <Box
                sx={{
                  position: "absolute",
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #ffffff 0%, #EEF6EC 70%)",
                  boxShadow: "0 16px 40px rgba(14,27,18,0.12)",
                  transition: "all .6s cubic-bezier(.2,.8,.2,1)",
                  ...(isActive
                    ? { width: { xs: 170, md: 340 }, height: { xs: 170, md: 340 }, right: { xs: "50%", md: 56 }, top: { xs: 24, md: "50%" }, transform: { xs: "translateX(50%)", md: "translateY(-50%)" } }
                    : {
                        width: { xs: 56, md: 72 },
                        height: { xs: 56, md: 72 },
                        // Phones: thumbnail on the left of a horizontal row.
                        right: { xs: "auto", md: "50%" },
                        left: { xs: 14, md: "auto" },
                        top: { xs: 14, md: 28 },
                        transform: { xs: "none", md: "translateX(50%)" },
                      }),
                }}
              >
                <Box
                  component="img"
                  src={cat.img}
                  alt={cat.name}
                  loading="lazy"
                  sx={{ width: "68%", height: "68%", objectFit: "contain", mixBlendMode: "multiply" }}
                />
              </Box>

              {/* Collapsed: vertical label */}
              <Typography
                aria-hidden={isActive}
                sx={{
                  display: { xs: "none", md: "block" },
                  position: "absolute",
                  left: "50%",
                  bottom: 32,
                  transform: "translateX(-50%) rotate(180deg)",
                  writingMode: "vertical-rl",
                  whiteSpace: "nowrap",
                  color: T.ink,
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  opacity: isActive ? 0 : 1,
                  transition: "opacity .3s",
                  pointerEvents: "none",
                }}
              >
                {cat.name}
              </Typography>
              <Typography
                sx={{
                  display: { xs: isActive ? "none" : "block", md: "none" },
                  position: "absolute",
                  left: 86,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: T.ink,
                  fontWeight: 700,
                  fontSize: "1.05rem",
                }}
              >
                {cat.name}
              </Typography>

              {/* Expanded content */}
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 24, md: 44 },
                  right: { xs: 24, md: 440 },
                  bottom: { xs: 28, md: 44 },
                  color: T.ink,
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "none" : "translateY(12px)",
                  transition: isActive ? "opacity .4s ease .25s, transform .4s ease .25s" : "opacity .15s",
                  pointerEvents: isActive ? "auto" : "none",
                  minWidth: { md: 300 },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 2 }}>
                  <Box component="span" sx={{ px: 1.5, py: 0.5, borderRadius: 999, bgcolor: T.green, color: T.greenDeep, fontSize: "0.78rem", fontWeight: 700 }}>
                    {cat.tag}
                  </Box>
                  <Box component="span" sx={{ fontSize: "0.85rem", color: T.muted, fontWeight: 600 }}>
                    {cat.count} Products
                  </Box>
                </Box>
                <Typography component="h3" sx={{ fontWeight: 700, fontSize: { xs: "1.8rem", md: "2.4rem" }, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                  {cat.name}
                </Typography>
                <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, mt: 2.5, display: "grid", gap: 1 }}>
                  {cat.subs.map((sub) => (
                    <Box component="li" key={sub.name}>
                      <Box
                        component={Link}
                        href={sub.href}
                        tabIndex={isActive ? 0 : -1}
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 1.25,
                          color: T.body,
                          textDecoration: "none",
                          fontSize: "0.98rem",
                          fontWeight: 500,
                          "&:hover": { color: T.greenDark, "& .sub-ic": { bgcolor: T.green, color: T.greenDeep, borderColor: T.green } },
                        }}
                      >
                        <Box
                          className="sub-ic"
                          sx={{
                            width: 30,
                            height: 30,
                            borderRadius: "9px",
                            display: "grid",
                            placeItems: "center",
                            bgcolor: "#fff",
                            border: `1px solid ${T.border}`,
                            color: T.greenDark,
                            transition: "all .2s",
                          }}
                        >
                          <SubdirectoryArrowRightRoundedIcon sx={{ fontSize: 16 }} />
                        </Box>
                        {sub.name}
                      </Box>
                    </Box>
                  ))}
                </Box>
                <Box
                  component={Link}
                  href={cat.href}
                  tabIndex={isActive ? 0 : -1}
                  sx={{
                    mt: 3.5,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    px: 2.75,
                    py: 1.4,
                    borderRadius: "12px",
                    bgcolor: T.green,
                    color: T.greenDeep,
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    whiteSpace: { xs: "normal", md: "nowrap" },
                    textDecoration: "none",
                    transition: "all .2s",
                    "&:hover": { bgcolor: "#55C93E", transform: "translateY(-2px)", boxShadow: "0 10px 24px -8px rgba(97,214,73,0.6)" },
                    "& svg": { transition: "transform .2s" },
                    "&:hover svg": { transform: "translateX(3px)" },
                  }}
                >
                  Explore {cat.name} <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
