"use client";

// Phones only: compact series chips (tiny photo + name) instead of the circle strip.
import Link from "next/link";
import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";

export default function SeriesChips({ items }: { items: { key: string; code: string; img: string; href: string }[] }) {
  return (
    <Box sx={{ display: { xs: "flex", sm: "none" }, flexWrap: "wrap", justifyContent: "center", gap: 0.75, px: 2 }}>
      {items.map((s) => (
        <Box key={s.key} component={Link} href={s.href}
          sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, pl: 0.5, pr: 1.25, py: 0.5, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: "0 1px 3px rgba(14,27,18,0.06)", textDecoration: "none", color: T.ink, fontSize: "0.84rem", fontWeight: 700, "&:active": { bgcolor: T.greenSoft } }}>
          <Box sx={{ width: 28, height: 28, borderRadius: "50%", bgcolor: "#F5F8F5", display: "grid", placeItems: "center", overflow: "hidden" }}>
            <Box component="img" src={s.img} alt="" sx={{ display: "block", maxWidth: 24, maxHeight: 24, objectFit: "contain", mixBlendMode: "multiply" }} />
          </Box>
          {s.code}
        </Box>
      ))}
    </Box>
  );
}
