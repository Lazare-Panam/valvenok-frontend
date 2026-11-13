"use client";

// Row of brand logo tiles (display only), e.g. inside a stats tile.
import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";
import { BRANDS } from "@/src/app/Common/brandRegistry";

export default function BrandLogos({ names, size = "md" }: { names: string[]; size?: "md" | "lg" }) {
  const w = size === "lg" ? 76 : 52, h = size === "lg" ? 50 : 36;
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
      {names.map((n) => {
        const b = BRANDS.find((x) => x.name === n || x.slug === n.toLowerCase());
        if (!b) return null;
        return (
          <Box key={b.slug} title={b.name} sx={{ width: w, height: h, borderRadius: "12px", bgcolor: "#fff", border: `1px solid ${T.border}`, display: "grid", placeItems: "center", overflow: "hidden" }}>
            <Box component="img" src={b.logo} alt={b.name} sx={{ display: "block", maxWidth: w - 14, maxHeight: h - 12, objectFit: "contain", transform: b.logoScale ? `scale(${Math.min(b.logoScale, 2)})` : undefined }} />
          </Box>
        );
      })}
    </Box>
  );
}
