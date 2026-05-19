"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

const ACCENT_COLORS = [
  { bg: "#c2410c", text: "#fff", border: "#c2410c" }, // orange  — Fittings
  { bg: "#1d4ed8", text: "#fff", border: "#1d4ed8" }, // blue    — Pneumatics
  { bg: "#6d28d9", text: "#fff", border: "#6d28d9" }, // purple  — Filters
  { bg: "#166534", text: "#fff", border: "#166534" }, // green   — Industrial Valves
  { bg: "#0e7490", text: "#fff", border: "#0e7490" }, // teal    — Actuators
  { bg: "#9f1239", text: "#fff", border: "#9f1239" }, // crimson — Pumps
];

const CATEGORIES = [
  {
    name: "Fittings & Instrumentation Valves",
    img: "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/hex_couplings.png",
    href: "/fittings-tubing/instrumentation-fittings/jic-fittings",
    tag: "Most Popular",
    count: "450+",
    subs: [
      { name: "Flare Fittings", href: "/fittings-tubing/instrumentation-fittings/jic-fittings/" },
      { name: "Instrumentation Valves", href: "/valves" },
      { name: "Pipe Fittings", href: "/fittings-tubing/instrumentation-fittings/pipe-fittings" },
      { name: "Weld Fittings", href: "/fittings-tubing/instrumentation-fittings/weld-fittings" },
    ],
  },
  {
    name: "Pneumatic Systems",
    img: "https://pblol2.blob.core.windows.net/valvenok-images/products/pneumatic-cylinder/DSC_7050_ESNC-100x100.png",
    href: "/collections/pneumatics",
    tag: "Best Sellers",
    count: "200+",
    subs: [
      { name: "Pneumatic Cylinders", href: "/pneumatic/cylinders" },
      { name: "Pneumatic Fittings", href: "/pneumatic/fittings" },
      { name: "Pneumatic Tubing", href: "/pneumatic/tubing" },
      { name: "Air Gun", href: "/pneumatic/air-gun" },
    ],
  },
  {
    name: "Filters",
    img: "https://pblol2.blob.core.windows.net/valvenok-images/products/filters/DFM_Mega_Flow_Rate_Filter.png",
    href: "/collections/pneumatics",
    tag: "Industrial",
    count: "80+",
    subs: [
      { name: "Sight Glass", href: "/filters-sight-glass/sight-glass" },
      { name: "Filtration", href: "/filters-sight-glass/filteration" },
    ],
  },
  {
    name: "Industrial Valves",
    img: "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/industrial-valves.jpg",
    href: "/valves/instrumentation-valves/ball-valves",
    tag: "Heavy Duty",
    count: "280+",
    subs: [
      { name: "Industrial Valves", href: "/valves/industrial-valves" },
      { name: "Marine Valves", href: "/valves/marine-valves" },
    ],
  },
  {
    name: "Actuators",
    img: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/actuator_no-bg.png",
    href: "/pneumatic/actuators",
    tag: "Precision",
    count: "50+",
    subs: [{ name: "Pneumatic Actuators", href: "/pneumatic/actuators" }],
  },
  {
    name: "Pumps & Mechanical Seal",
    img: "https://pblol2.blob.core.windows.net/valvenok-images/products/seals/Seals.jpg",
    href: "/collections/tormac-pumps",
    tag: "Fluid Control",
    count: "180+",
    subs: [
      { name: "Mechanical Seals", href: "/pumps-seals/seals" },
      { name: "Pumps", href: "/pumps-seals/pumps" },
    ],
  },
];

export default function Categories() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <Box component="section" sx={{ py: { xs: 4, md: 8 }, bgcolor: "grey.50" }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "primary.main",
              mb: 1,
            }}
          >
            Browse by Category
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: { xs: "2.8rem", md: "4rem" },
              fontWeight: 900,
              textTransform: "uppercase",
              color: "text.primary",
              letterSpacing: "0.02em",
              lineHeight: 1,
            }}
          >
            Explore Our Catalog
          </Typography>
        </Box>

        {/* Category Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 2,
          }}
        >
          {CATEGORIES.map((cat, i) => {
            const isOpen = openIndex === i;
            const isFeatured = i === 0;
            const accent = ACCENT_COLORS[i];

            return (
              <Box
                key={cat.name}
                onClick={() => toggle(i)}
                sx={{
                  gridColumn: { md: isFeatured ? "span 3" : "span 1" },
                  position: "relative",
                  bgcolor: "white",
                  border: "1px solid",
                  borderColor: isOpen ? accent.border : "divider",
                  display: "flex",
                  flexDirection: isFeatured
                    ? { xs: "column", sm: "row" }
                    : "column",
                  minHeight: "280px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    borderColor: accent.border,
                    boxShadow: `0 10px 25px ${accent.border}22`,
                    "& .bg-img": { transform: "scale(1.05)" },
                    "& .explore-label": { color: accent.border },
                  },
                }}
              >
                {/* Product Count Badge */}
                <Typography
                  sx={{
                    position: "absolute",
                    top: 15,
                    right: 15,
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "text.disabled",
                    zIndex: 3,
                  }}
                >
                  {cat.count} Products
                </Typography>

                {/* Image Container */}
                <Box
                  sx={{
                    flex: isFeatured ? { sm: "1 1 60%" } : "none",
                    order: isFeatured ? 2 : 1,
                    position: isFeatured ? "relative" : "absolute",
                    top: isFeatured ? 0 : "10%",
                    left: isFeatured ? 0 : "5%",
                    right: isFeatured ? 0 : "5%",
                    bottom: isFeatured ? 0 : isOpen ? "45%" : "35%",
                    height: isFeatured ? "100%" : "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: isFeatured ? 4 : 0,
                  }}
                >
                  <Box
                    className="bg-img"
                    sx={{
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${cat.img})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      transition: "transform 0.4s ease",
                    }}
                  />
                </Box>

                {/* Content Area */}
                <Box
                  sx={{
                    flex: isFeatured ? { sm: "1 1 40%" } : "none",
                    order: isFeatured ? 1 : 2,
                    mt: isFeatured ? 0 : "auto",
                    zIndex: 2,
                    p: 2.5,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    background: isFeatured
                      ? "white"
                      : "linear-gradient(to top, white 80%, rgba(255,255,255,0) 100%)",
                  }}
                >
                  <Box>
                    {/* Tag — each category's own colour */}
                    <Typography
                      sx={{
                        display: "inline-block",
                        bgcolor: accent.bg,
                        color: accent.text,
                        px: 1,
                        py: 0.2,
                        fontSize: "9px",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        mb: 0.5,
                      }}
                    >
                      {cat.tag}
                    </Typography>

                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: '"Barlow Condensed", sans-serif',
                        fontSize: isFeatured ? "1.8rem" : "1.2rem",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        color: "text.primary",
                        lineHeight: 1.1,
                        mb: 0.5,
                      }}
                    >
                      {cat.name}
                    </Typography>

                    {/* Explore label — picks up hover colour via class */}
                    <Typography
                      className="explore-label"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        fontSize: "10px",
                        fontWeight: 800,
                        color: isOpen ? accent.border : "text.secondary",
                        letterSpacing: "0.05em",
                        transition: "color 0.2s",
                      }}
                    >
                      {isOpen ? "CLOSE" : "EXPLORE"}
                      <Box
                        component="span"
                        sx={{
                          transition: "0.3s",
                          fontSize: "8px",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      >
                        ▼
                      </Box>
                    </Typography>
                  </Box>

                  <Collapse in={isOpen}>
                    <Box
                      sx={{
                        mt: 1.5,
                        pt: 1.5,
                        borderTop: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      {cat.subs.map((sub) => (
                        <Box
                          key={sub.name}
                          component={Link}
                          href={sub.href}
                          onClick={(e) => e.stopPropagation()}
                          sx={{
                            display: "block",
                            py: 0.4,
                            fontSize: "12px",
                            color: "text.secondary",
                            textDecoration: "none",
                            "&:hover": {
                              color: accent.border,
                              pl: 0.5,
                              transition: "0.2s",
                            },
                          }}
                        >
                          • {sub.name}
                        </Box>
                      ))}
                    </Box>
                  </Collapse>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
