"use client";

// Closing call to action before the footer (23 Nov 2026). Deep logo-gradient band,
// one clear next step (quote) plus a direct phone line. The "within 24 hours" promise
// is the same one the Contact page makes.

import Link from "next/link";
import { Box, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { T, textReset, REVEAL } from "./homeTokens";
import { ACCENT, BRAND, LOGO, LOGO_DEEP_GRADIENT, LOGO_GRADIENT_LIGHT, LOGO_GRADIENT_LIGHT_HOVER, withAlpha } from "@/src/theme/brand";

export default function ClosingCta() {
  return (
    <Box component="section" aria-labelledby="closing-cta" sx={{ ...textReset, width: "100%", boxSizing: "border-box", maxWidth: T.maxWidth, mx: "auto", px: { xs: 2, md: 4 }, py: { xs: 5, md: 7 }, ...REVEAL }}>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "22px",
          px: { xs: 3, md: 6 },
          py: { xs: 4, md: 5 },
          background: LOGO_DEEP_GRADIENT,
          color: BRAND.white,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.4fr 1fr" },
          gap: { xs: 3, md: 4 },
          alignItems: "center",
          boxShadow: `0 30px 60px -30px ${withAlpha(LOGO.bottom, 0.6)}`,
          // concentric rings, same motif as the certifications panel and stats
          "&::after": {
            content: '""',
            position: "absolute",
            right: -110,
            top: -110,
            width: 320,
            height: 320,
            borderRadius: "50%",
            pointerEvents: "none",
            background: `repeating-radial-gradient(circle, transparent 0 28px, ${withAlpha(BRAND.white, 0.1)} 28px 29.5px, transparent 29.5px 46px)`,
            maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 70%)",
          },
          "& > *": { position: "relative", zIndex: 1 },
        }}
      >
        <Box>
          <Typography id="closing-cta" component="h2" sx={{ fontWeight: 700, fontSize: { xs: "1.5rem", md: "2rem" }, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Need a quote? <Box component="span" sx={{ color: ACCENT.blob2 }}>We reply within 24 hours.</Box>
          </Typography>
          <Typography sx={{ mt: 1.5, fontSize: "0.95rem", lineHeight: 1.6, color: withAlpha(BRAND.white, 0.8), maxWidth: 560 }}>
            Send us your part numbers or requirements and we&apos;ll confirm price, availability and lead time.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row", md: "column" }, gap: 1.25, alignItems: { xs: "stretch", md: "flex-end" } }}>
          <Box
            component={Link}
            href="/contact"
            sx={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 1, px: 2.75, py: 1.1, borderRadius: 999, background: LOGO_GRADIENT_LIGHT, color: LOGO.bottom, fontWeight: 700, fontSize: "0.92rem", textDecoration: "none", boxShadow: `0 10px 24px -10px ${withAlpha(BRAND.ink, 0.5)}`, transition: "transform .2s", "&:hover": { background: LOGO_GRADIENT_LIGHT_HOVER, transform: "translateY(-2px)" }, "&:hover svg": { transform: "translateX(3px)" }, "& svg": { transition: "transform .2s" } }}
          >
            Request a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
          </Box>
          <Box
            component="a"
            href="tel:+447368137917"
            sx={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 1, px: 2.75, py: 1.1, borderRadius: 999, border: `1px solid ${withAlpha(BRAND.white, 0.4)}`, color: BRAND.white, fontWeight: 600, fontSize: "0.92rem", textDecoration: "none", "&:hover": { bgcolor: withAlpha(BRAND.white, 0.1), borderColor: BRAND.white } }}
          >
            <PhoneOutlinedIcon sx={{ fontSize: 18 }} /> Call +44 7368 137917
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
