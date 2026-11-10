"use client";

// Brand tabs for a type page hero: the brand(s) shown on this page are highlighted
// ("On this page"); brands we also distribute through their own website open that site.
// So visitors see straight away whose range they are looking at, before scrolling.

import { Box } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import { T } from "@/src/app/Landing/modern/tokens";
import { BRANDS } from "@/src/app/Common/brandRegistry";
import { showcaseFor, type ShowcaseCategory } from "@/src/app/Common/showcase";

export default function BrandSwitcher({ here, category }: { here: string[]; category: ShowcaseCategory }) {
  const onPage = here.map((n) => BRANDS.find((b) => b.name === n)).filter(Boolean) as typeof BRANDS;
  const seen = new Set<string>();
  const elsewhere = showcaseFor(category).filter((s) => !seen.has(s.brand) && seen.add(s.brand));
  const logo = (src: string, scale?: number) => (
    <Box sx={{ flexShrink: 0, width: 40, height: 32, borderRadius: "8px", bgcolor: "#fff", border: `1px solid ${T.border}`, display: "grid", placeItems: "center", overflow: "hidden" }}>
      <Box component="img" src={src} alt="" sx={{ display: "block", maxWidth: 30, maxHeight: 22, objectFit: "contain", transform: scale ? `scale(${Math.min(scale, 2)})` : undefined }} />
    </Box>
  );
  const cell = { display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", gap: { xs: 0.5, sm: 1.25 }, px: { xs: 0.75, sm: 1.5 }, py: 1, borderRadius: "14px", textAlign: { xs: "center", sm: "left" }, textDecoration: "none", minWidth: 0 } as const;
  return (
    <Box role="navigation" aria-label="Brands" sx={{ mt: 3, mx: "auto", width: { xs: "100%", sm: "fit-content" }, maxWidth: "100%", display: { xs: "grid", sm: "flex" }, gridTemplateColumns: `repeat(${here.length + new Set(showcaseFor(category).map((x) => x.brand)).size}, minmax(0, 1fr))`, flexWrap: "wrap", justifyContent: "center", gap: 0.5, p: 0.6, borderRadius: "18px", bgcolor: "rgba(255,255,255,0.85)", border: `1px solid ${T.border}`, boxShadow: T.shadow, backdropFilter: "blur(6px)" }}>
      {onPage.map((b) => (
        <Box key={b.slug} aria-current="page" sx={{ ...cell, bgcolor: T.greenSoft, boxShadow: `inset 0 0 0 1.5px ${T.green}` }}>
          {logo(b.logo, b.logoScale)}
          <Box>
            <Box sx={{ fontWeight: 800, fontSize: { xs: "0.84rem", sm: "0.92rem" }, color: T.ink, lineHeight: 1.2 }}>{b.name}</Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", sm: "flex-start" }, gap: 0.4, fontSize: "0.72rem", fontWeight: 700, color: T.greenDark, whiteSpace: "nowrap" }}>
              <CheckCircleRoundedIcon sx={{ fontSize: 13 }} /> On this page
            </Box>
          </Box>
        </Box>
      ))}
      {elsewhere.map((s) => (
        <Box key={s.brand} component="a" href={new URL(s.href).origin + "/"} target="_blank" rel="noopener"
          sx={{ ...cell, color: T.ink, transition: "all .15s", "&:hover": { bgcolor: "#F4F7F5" }, "&:hover .arr": { color: T.greenDark, transform: "translate(1px,-1px)" } }}>
          {logo(s.brandInfo.logo, s.brandInfo.logoScale)}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", sm: "flex-start" }, gap: 0.4, fontWeight: 800, fontSize: { xs: "0.84rem", sm: "0.92rem" }, lineHeight: 1.2 }}>
              {s.brandInfo.name}
              <NorthEastRoundedIcon className="arr" sx={{ fontSize: 14, color: T.muted, transition: "all .15s" }} />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" }, fontSize: "0.72rem", color: T.muted }}>{new URL(s.href).hostname.replace(/^www\./, "")}</Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
