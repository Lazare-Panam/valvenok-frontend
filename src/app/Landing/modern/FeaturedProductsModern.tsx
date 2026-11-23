'use client'

import Link from "next/link";
import { Box, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { FEATURED_PRODUCTS } from "../FeaturedValvesData";
import { T, textReset } from "./homeTokens";
import SectionHeader from "./HomeSectionHeader";
import { swipeRow } from "./swipeRow";
import { BRAND } from "@/src/theme/brand";

export default function FeaturedProductsModern() {
  return (
    <Box component="section" sx={{ ...textReset, width: "100%", boxSizing: "border-box", maxWidth: T.maxWidth, mx: "auto", px: { xs: 2, md: 4 }, py: { xs: 8, md: 12 } }}>
      <SectionHeader eyebrow="Premium Selection" title="Featured Products" />
      <Box sx={swipeRow({ sm: "1fr 1fr", lg: "repeat(4, 1fr)" })}>
        {FEATURED_PRODUCTS.map((p) => (
          <Box
            key={p.id}
            component={Link}
            href={p.href}
            sx={{
              display: "flex",
              flexDirection: "column",
              bgcolor: BRAND.white,
              border: `1px solid ${T.border}`,
              borderRadius: T.radius,
              overflow: "hidden",
              textDecoration: "none",
              transition: "all .25s ease",
              "&:hover": { boxShadow: T.shadowHover, transform: "translateY(-3px)" },
              "&:hover .fp-img": { transform: "scale(1.05)" },
              "&:hover .fp-cta": { color: T.brandDark, gap: 1 },
            }}
          >
            <Box sx={{ position: "relative", height: 200, bgcolor: T.surface }}>
              <Box
                component="img"
                src={p.brandLogo}
                alt={`${p.brand} logo`}
                loading="lazy"
                sx={{ position: "absolute", top: 12, right: 12, height: 22, maxWidth: 90, objectFit: "contain", zIndex: 1 }}
              />
              <Box
                className="fp-img"
                component="img"
                src={p.thumbnail}
                alt={p.name}
                loading="lazy"
                sx={{
                  position: "absolute",
                  inset: 0,
                  m: "auto",
                  maxWidth: "70%",
                  maxHeight: "75%",
                  objectFit: "contain",
                  mixBlendMode: "multiply",
                  transition: "transform .4s ease",
                }}
              />
            </Box>
            <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", flex: 1 }}>
              <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, color: T.brandDark }}>{p.category}</Typography>
              <Typography component="h3" sx={{ mt: 0.5, fontWeight: 700, fontSize: "1.02rem", lineHeight: 1.35, color: T.ink }}>
                {p.name}
              </Typography>
              <Box component="dl" sx={{ mt: 1.75, mb: 0, flex: 1 }}>
                {p.specs.slice(0, 3).map((s) => (
                  <Box key={s.label} sx={{ display: "flex", justifyContent: "space-between", gap: 2, py: 0.75, borderTop: `1px dashed ${T.border}` }}>
                    <Typography component="dt" sx={{ fontSize: "0.8rem", color: T.muted }}>
                      {s.label}
                    </Typography>
                    <Typography component="dd" sx={{ m: 0, fontSize: "0.8rem", fontWeight: 600, color: T.ink, textAlign: "right" }}>
                      {s.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box
                className="fp-cta"
                sx={{ mt: 2, display: "inline-flex", alignItems: "center", gap: 0.5, fontWeight: 600, fontSize: "0.88rem", color: T.ink, transition: "all .2s" }}
              >
                View product <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
