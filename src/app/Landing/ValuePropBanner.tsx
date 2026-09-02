"use client";

import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Reveal from "@/src/app/Common/Reveal";

const POINTS = [
  "Authorised distributor, not a reseller",
  "Direct manufacturer relationships",
  "One trusted source, zero compromise",
];

export default function ValuePropBanner() {
  return (
    <Box component="section" sx={{ bgcolor: "#1c2e1a", py: { xs: 5, md: 6 } }}>
      <Reveal>
        <Box
          sx={{
            maxWidth: "1280px",
            mx: "auto",
            px: { xs: 3, md: 8 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: { xs: 3, md: 4 },
          }}
        >
          <Box>
            <Typography
              component="h2"
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                color: "#fff",
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: "1.75rem", md: "2.2rem" },
                lineHeight: 1.15,
                mb: 0.5,
              }}
            >
              Buy Direct. Zero Middleman.
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", maxWidth: 560 }}>
              As an authorised distributor working directly with leading
              manufacturers, we cut out the reseller markup — the same
              certified components, without paying twice.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2, flexShrink: 0 }}>
            {POINTS.map((p) => (
              <Box key={p} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CheckCircleIcon sx={{ color: "primary.main", fontSize: 20 }} />
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    fontFamily: '"Barlow Condensed", sans-serif',
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                  }}
                >
                  {p}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Reveal>
    </Box>
  );
}
