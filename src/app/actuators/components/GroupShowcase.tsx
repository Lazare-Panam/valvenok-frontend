"use client";

// "Also in our group" section for the actuator type pages: series sold on another
// group website (KOSAPLUS, SPAC), shown as feature cards that open that site.
// Data comes from Common/showcase.ts, the same list the mega menu uses.

import { Box } from "@mui/material";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import { T } from "@/src/app/Landing/modern/tokens";
import { Reveal } from "@/src/app/Common/LightMotion";
import { wrap, Kicker, H2, Lead } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";
import { showcaseFor, type ShowcaseCategory } from "@/src/app/Common/showcase";

export default function GroupShowcase({ category, what }: { category: ShowcaseCategory; what: string }) {
  const items = showcaseFor(category);
  if (!items.length) return null;
  const sites = [...new Set(items.map((i) => i.siteName))];
  return (
    <Box component="section" aria-labelledby="h2-group" sx={{ py: { xs: 7, md: 10 }, background: "linear-gradient(180deg, #F3FAF6 0%, #FFFFFF 100%)" }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Also in our group</Kicker>
          <H2 id="h2-group">More {what} we supply</H2>
          <Lead>
            Valvenok is also a distributor for {sites.join(" and ")}. Their full ranges, with model lists, prices and quotes, are on their own websites.
          </Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(3, 1fr)", lg: `repeat(${Math.min(items.length, 5)}, 1fr)` }, gap: { xs: 1.25, md: 2 } }}>
          {items.map((s, i) => (
            <Reveal key={s.href + s.code} delay={(i % 5) * 60}>
              <Box component="a" href={s.href} target="_blank" rel="noopener"
                sx={{ display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box", borderRadius: { xs: "16px", sm: "20px" }, bgcolor: "#fff", border: `1px solid ${T.border}`, overflow: "hidden", textDecoration: "none", color: "inherit", transition: "transform .25s, box-shadow .25s, border-color .25s", "&:hover": { transform: "translateY(-4px)", boxShadow: T.shadowHover, borderColor: "#CFEBC6" }, "&:hover .go": { bgcolor: T.green, color: T.greenDeep } }}>
                <Box sx={{ position: "relative", height: { xs: 110, sm: 150 }, bgcolor: "#F5F8F5", display: "grid", placeItems: "center", overflow: "hidden" }}>
                  <Box component="img" src={s.img} alt={`${s.brandInfo.name} ${s.code} series`} loading="lazy" sx={{ maxHeight: "82%", maxWidth: "80%", objectFit: "contain", mixBlendMode: "multiply" }} />
                  <Box sx={{ position: "absolute", top: 10, left: 10, height: 26, px: 1, borderRadius: 999, bgcolor: "#fff", boxShadow: "0 1px 4px rgba(14,27,18,0.08)", display: "flex", alignItems: "center", overflow: "hidden" }}>
                    <Box component="img" src={s.brandInfo.logo} alt={s.brandInfo.name} sx={{ height: 16, maxWidth: 70, objectFit: "contain", transform: s.brandInfo.logoScale ? `scale(${Math.min(s.brandInfo.logoScale, 2)})` : undefined }} />
                  </Box>
                </Box>
                <Box sx={{ p: { xs: 1.5, sm: 2 }, display: "flex", flexDirection: "column", flex: 1 }}>
                  <Box sx={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.muted, mb: 0.5 }}>{s.brandInfo.name}</Box>
                  <Box component="h3" sx={{ m: 0, mb: 0.75, fontSize: { xs: "0.9rem", sm: "1rem" }, lineHeight: 1.3, fontWeight: 800, color: T.ink }}>{s.name}</Box>
                  <Box component="p" sx={{ m: 0, mb: 1.5, fontSize: { xs: "0.78rem", sm: "0.86rem" }, lineHeight: 1.5, color: T.body, flex: 1 }}>{s.line}</Box>
                  <Box className="go" component="span" sx={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 0.5, px: 1.25, py: 0.5, borderRadius: 999, border: `1px solid ${T.border}`, fontSize: "0.76rem", fontWeight: 700, color: T.ink, transition: "all .2s", whiteSpace: "nowrap" }}>
                    Visit the website <NorthEastRoundedIcon sx={{ fontSize: 14 }} />
                  </Box>
                  <Box sx={{ mt: 0.75, fontSize: "0.72rem", color: T.muted }}>{new URL(s.href).hostname.replace(/^www\./, "")}</Box>
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
