'use client'

import { Box, Typography } from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { T, accentText, textReset } from "./homeTokens";
import { AQUA, BRAND, withAlpha, PILL } from "@/src/theme/brand";

// Same copy as the original ValuePropBanner.
const POINTS = [
  "Authorised distributor for our partner brands",
  "Direct manufacturer relationships",
  "One trusted source, zero compromise",
];

export default function ValuePropModern() {
  return (
    <Box component="section" sx={{ ...textReset, width: "100%", boxSizing: "border-box", maxWidth: T.maxWidth, mx: "auto", px: { xs: 2, md: 4 }, py: { xs: 8, md: 11 } }}>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "24px",
          px: { xs: 3.5, md: 6 },
          py: { xs: 5, md: 6 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.3fr 1fr" },
          gap: { xs: 4, md: 6 },
          alignItems: "center",
          border: `1px solid ${AQUA.mistLight}`,
          background: `radial-gradient(600px 300px at 90% 0%, ${AQUA.mistFaint} 0%, transparent 70%), ${BRAND.white}`,
          backgroundSize: "300% 300%",
          animation: "bgShift 14s ease infinite",
          "@keyframes bgShift": { "0%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" }, "100%": { backgroundPosition: "0% 50%" } },
          "@keyframes shine": { "0%": { backgroundPosition: "0% 50%" }, "100%": { backgroundPosition: "200% 50%" } },
          "@media (prefers-reduced-motion: reduce)": { animation: "none", "& *": { animation: "none !important" } },
        }}
      >
        <Box>
          <Typography component="h2" sx={{ fontWeight: 700, fontSize: { xs: "1.9rem", md: "2.5rem" }, letterSpacing: "-0.03em", lineHeight: 1.1, color: T.ink }}>
            Authorised Distributor: <Box component="span" sx={accentText}>Buy Direct From the Manufacturer</Box>
          </Typography>
          <Typography sx={{ mt: 2, fontSize: "1.05rem", lineHeight: 1.7, color: T.body, maxWidth: 560 }}>
            For our partner brands we are an authorised distributor buying direct from the manufacturer, so there is no reseller
            markup — the same genuine manufacturer components, without paying twice.
          </Typography>
        </Box>
        <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, display: "grid", gap: 1.25 }}>
          {POINTS.map((pt) => (
            <Box
              component="li"
              key={pt}
              sx={{
                display: "flex",
                gap: 1.5,
                alignItems: "center",
                px: 2,
                py: 1.5,
                borderRadius: T.radiusSm,
                bgcolor: withAlpha(BRAND.white, 0.85),
                border: `1px solid ${T.border}`,
                transition: "transform .2s",
                "&:hover": { transform: "translateX(6px)" },
              }}
            >
              <Box sx={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", display: "grid", placeItems: "center", background: PILL.green, color: PILL.greenDeep }}>
                <CheckRoundedIcon sx={{ fontSize: 16 }} />
              </Box>
              <Typography sx={{ color: T.ink, fontWeight: 500 }}>{pt}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
