'use client'

import { Box, Typography } from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { T, textReset } from "./tokens";

// Same copy as the original ValuePropBanner.
const POINTS = [
  "Authorised distributor for our partner brands",
  "Direct manufacturer relationships",
  "One trusted source, zero compromise",
];

export default function ValuePropModern() {
  return (
    <Box component="section" sx={{ ...textReset, width: "100%", boxSizing: "border-box", maxWidth: T.maxWidth, mx: "auto", px: { xs: 2, md: 4 }, pt: { xs: 8, md: 11 } }}>
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
          border: "1px solid #D8EED0",
          background: "linear-gradient(120deg, #EAF8E4, #F6FFF2, #E6F4FD, #FFF8E1, #EAF8E4)",
          backgroundSize: "300% 300%",
          animation: "bgShift 14s ease infinite",
          "@keyframes bgShift": { "0%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" }, "100%": { backgroundPosition: "0% 50%" } },
          "@keyframes shine": { "0%": { backgroundPosition: "0% 50%" }, "100%": { backgroundPosition: "200% 50%" } },
          "@media (prefers-reduced-motion: reduce)": { animation: "none", "& *": { animation: "none !important" } },
        }}
      >
        <Box>
          <Typography component="h2" sx={{ fontWeight: 700, fontSize: { xs: "1.9rem", md: "2.5rem" }, letterSpacing: "-0.03em", lineHeight: 1.1, color: T.ink }}>
            Buy Direct. <Box component="span" sx={{ background: `linear-gradient(90deg, ${T.greenDark}, #4CC23A, #7FD9A8, ${T.greenDark})`, backgroundSize: "200% auto", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", animation: "shine 4s linear infinite" }}>Zero Middleman.</Box>
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
                bgcolor: "rgba(255,255,255,0.85)",
                border: `1px solid ${T.border}`,
                transition: "transform .2s",
                "&:hover": { transform: "translateX(6px)" },
              }}
            >
              <Box sx={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", display: "grid", placeItems: "center", bgcolor: T.green, color: "#fff" }}>
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
