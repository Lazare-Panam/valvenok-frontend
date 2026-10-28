'use client'

import { Box, Typography } from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { T, textReset } from "./tokens";

// Same copy as the original ValuePropBanner.
const POINTS = [
  "Authorised distributor, not a reseller",
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
          background: `radial-gradient(700px 320px at 100% 0%, rgba(97,214,73,0.22), transparent 60%), ${T.greenDeep}`,
        }}
      >
        <Box>
          <Typography component="h2" sx={{ fontWeight: 700, fontSize: { xs: "1.9rem", md: "2.5rem" }, letterSpacing: "-0.03em", lineHeight: 1.1, color: "#fff" }}>
            Buy Direct. <Box component="span" sx={{ color: T.green }}>Zero Middleman.</Box>
          </Typography>
          <Typography sx={{ mt: 2, fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(255,255,255,0.75)", maxWidth: 560 }}>
            As an authorised distributor working directly with leading manufacturers, we cut out the reseller markup — the same genuine
            manufacturer components, without paying twice.
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
                bgcolor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Box sx={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", display: "grid", placeItems: "center", bgcolor: T.green, color: T.greenDeep }}>
                <CheckRoundedIcon sx={{ fontSize: 16 }} />
              </Box>
              <Typography sx={{ color: "#fff", fontWeight: 500 }}>{pt}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
