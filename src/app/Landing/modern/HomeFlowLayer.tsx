"use client";

// Wraps the homepage: a plain white base. Each section sits in a full-width
// band that alternates white / pale aqua (PastelZone).
// Colours from src/theme/brand.ts.

import { Box } from "@mui/material";
import { BRAND } from "@/src/theme/brand";

export default function HomeFlowLayer({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ position: "relative", isolation: "isolate" }}>
      <Box
        aria-hidden
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
          // Plain white behind the hero; the sections below set their own white / aqua bands
          background: BRAND.white,
        }}
      />
      {children}
    </Box>
  );
}
