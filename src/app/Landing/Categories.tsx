"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import Link from "next/link"; // Recommended for Next.js navigation

const CATEGORIES = [
  {
    name: "Fittings & Instrumentation Valves",
    img: "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/hex_couplings.png",
    href: "/fittings/jic",
    subs: [
      {
        name: "Flare Fittings",
        href: "/fittings/jic",
      },
      { name: "Instrumentation Valves", href: "/valves" },
      { name: "Pipe Fittings", href: "/pipe-fittings" },
    ],
  },

  {
    name: "Pneumatic Systems",
    img: "https://pblol2.blob.core.windows.net/valvenok-images/products/pneumatic-cylinder/DSC_7050_ESNC-100x100.png",
    href: "/collections/pneumatics",
    subs: [
      { name: "Pnuematic Cylinders", href: "/pneumatic/cylinders" },
      { name: "Pnuematic Fitting", href: "/pneumatic/apfittings" },
       { name: "Pnuematic Tubing", href: "/pneumatic/tubing" },
        { name: "Air Gun", href: "/pneumatic/air-gun" },
    ],
  },
  {
    name: "Filters",
    img: "https://pblol2.blob.core.windows.net/valvenok-images/products/filters/DFM_Mega_Flow_Rate_Filter.png",
    href: "/collections/pneumatics",
    subs: [
      { name: "Sight Glass", href: "/categories/sight-glass" },
      { name: "Filtration", href: "/categories/filtration" },
    ],
  },
  {
    name: "Industrial Valves",
    img: "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/industrial-valves.jpg",
    href: "/ball-valves",
    subs: [
      { name: "Industrial Valves", href: "/industrial-valves" },
      { name: "Marine Valves", href: "/marine-valves" },
    ],
  },
  {
    name: "Actuators",
    img: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/actuator_no-bg.png",
    href: "/categories/actuators",
    subs: [{ name: "Pneumatic Actuators", href: "/categories/actuators" }],
  },
  {
    name: "Pumps & Mechanical Seal",
    img: "https://pblol2.blob.core.windows.net/valvenok-images/products/seals/Seals.jpg",
    href: "/collections/tormac-pumps",
    subs: [
      { name: "Industrial Pumps", href: "/pumps" },
      { name: "Mechanical Seals", href: "/seals" },
      { name: "Submersible  Pumps", href: "/wastewater" },
    ],
  },
];

export default function Categories() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: "grey.50" }}>
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
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 2, md: 3 },
          }}
        >
          {CATEGORIES.map((cat, i) => {
            const isOpen = openIndex === i;
            return (
              <Box
                key={cat.name}
                sx={{
                  bgcolor: "background.paper",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid",
                  borderColor: isOpen ? "primary.main" : "divider",
                  overflow: "hidden",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    transform: "translateY(-5px)",
                    borderColor: "primary.main",
                  },
                }}
              >
                {/* Card Header (Clickable Area) */}
                <Box
                  onClick={() => toggle(i)}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 2,
                    p: 4,
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      width: 200,
                      height: 180,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {cat.img ? (
                      <Box
                        component="img"
                        src={cat.img}
                        alt={cat.name}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          bgcolor: "grey.200",
                        }}
                      />
                    )}
                  </Box>

                  <Box sx={{ width: "100%" }}>
                    <Typography
                      sx={{
                        fontFamily: '"Barlow Condensed", sans-serif',
                        fontSize: "1.25rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                        color: "text.primary",
                        lineHeight: 1.2,
                        mb: 1,
                      }}
                    >
                      {cat.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "primary.main",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        fontWeight: 600,
                      }}
                    >
                      {isOpen ? "Hide" : "View"} {cat.subs.length} Items
                      <Box
                        component="span"
                        sx={{
                          display: "inline-block",
                          fontSize: "10px",
                          transition: "transform 0.3s",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      >
                        ▼
                      </Box>
                    </Typography>
                  </Box>
                </Box>

                {/* Subcategory Dropdown */}
                <Collapse in={isOpen}>
                  <Box
                    sx={{
                      bgcolor: "grey.50",
                      borderTop: "1px solid",
                      borderColor: "divider",
                      py: 2,
                      px: 1,
                    }}
                  >
                    {cat.subs.map((sub) => (
                      <Box
                        key={sub.name}
                        component={Link} // Use Next.js Link for better performance
                        href={sub.href}
                        sx={{
                          display: "block",
                          px: 2,
                          py: 1,
                          fontSize: "14px",
                          color: "text.secondary",
                          textDecoration: "none",
                          transition: "all 0.2s",
                          "&:hover": {
                            bgcolor: "primary.main",
                            color: "white",
                            pl: 3,
                          },
                        }}
                      >
                        {sub.name}
                      </Box>
                    ))}
                  </Box>
                </Collapse>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
