'use client'

import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import { BRANDS } from "../Brands";
import { T, textReset } from "./homeTokens";
import { BRAND, withAlpha } from "@/src/theme/brand";

const scroll = keyframes`from { transform: translateX(0); } to { transform: translateX(-50%); }`;

// Panam-style brand ribbon directly under the hero: logo chip + brand name
// pills on a slow continuous scroll. Same brand list as the original marquee.
export default function BrandStrip() {
  const track = [...BRANDS, ...BRANDS];
  return (
    <Box
      component="section"
      aria-label="Trusted brands we supply"
      sx={{
        ...textReset,
        position: "relative",
        overflow: "hidden",
        py: { xs: 3, md: 3.5 },
        maskImage: `linear-gradient(90deg, transparent, ${BRAND.ink} 6%, ${BRAND.ink} 94%, transparent)`,
        WebkitMaskImage: `linear-gradient(90deg, transparent, ${BRAND.ink} 6%, ${BRAND.ink} 94%, transparent)`,
        "&:hover .brand-track": { animationPlayState: "paused" },
      }}
    >
      <Box
        className="brand-track"
        sx={{
          display: "flex",
          gap: 2,
          width: "max-content",
          py: 1,
          animation: `${scroll} 80s linear infinite`,
          "@media (prefers-reduced-motion: reduce)": { animation: "none" },
        }}
      >
        {track.map((b, i) => (
          <Box
            key={`${b.name}-${i}`}
            aria-hidden={i >= BRANDS.length}
            sx={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              gap: 2,
              height: 64,
              pl: 1,
              pr: 3,
              borderRadius: 999,
              bgcolor: BRAND.white,
              border: `1px solid ${T.border}`,
              boxShadow: `0 2px 10px ${withAlpha(BRAND.ink, 0.06)}`,
              transition: "box-shadow .2s, transform .2s, border-color .2s",
              "&:hover": { boxShadow: `0 8px 24px ${withAlpha(BRAND.ink, 0.12)}`, transform: "translateY(-2px)", borderColor: withAlpha(BRAND.main, 0.35) },
            }}
          >
            <Box
              sx={{
                width: 120,
                height: 48,
                px: 1.5,
                borderRadius: 999,
                display: "grid",
                placeItems: "center",
              }}
            >
              <Box
                className="bs-logo"
                component="img"
                src={b.logo}
                alt={i < BRANDS.length ? `${b.name} logo` : ""}
                loading="lazy"
                sx={{ maxWidth: "100%", maxHeight: 34, objectFit: "contain", display: "block", mixBlendMode: "multiply" }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase !important",
                color: T.ink,
                whiteSpace: "nowrap",
              }}
            >
              {b.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
