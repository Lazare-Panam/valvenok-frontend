"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { SAN_BRAND, SAN_BRAND_LOGO } from "../../data";
import { CLAMPS, CLAMP_BASE, CLAMP_SIZES, typeFromSlug } from "../clamps";
import ClampTable, { type ClampFilters } from "./ClampTable";

// Server-rendered header: outside the Suspense boundary so the H1 and intro are in the HTML
function Header() {
  return (
      <Box sx={{ background: "linear-gradient(120deg, #EEF9EA 0%, #FFFFFF 55%, #EEF5FF 100%)", borderBottom: `1px solid ${T.border}` }}>
        <Box sx={{ maxWidth: 1400, mx: "auto", px: { xs: 2, md: 4 }, py: { xs: 4, md: 5.5 }, display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: { md: "flex-end" }, gap: 3 }}>
          <Box>
            <Box component={Link} href={CLAMP_BASE} sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, mb: 1.5, fontSize: "0.88rem", fontWeight: 700, color: T.greenDark, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
              <ArrowBackIcon sx={{ fontSize: 17 }} /> Tri-clamp clamps overview
            </Box>
            <Box component="h1" sx={{ m: 0, fontSize: { xs: "2rem", md: "2.7rem" }, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, color: T.ink }}>
              Tri-clamp clamp models
            </Box>
            <Box component="p" sx={{ m: 0, mt: 1, maxWidth: 640, fontSize: "1rem", lineHeight: 1.6, color: T.body }}>
              {CLAMPS.length} clamps from {SAN_BRAND}, single pin and double-bolted, DN 6 to DN 300. Filter by type and size, then open a model for its full specification or a quote.
            </Box>
          </Box>
          <Box sx={{ alignSelf: { xs: "flex-start", md: "auto" }, display: "inline-flex", alignItems: "center", px: 2, py: 1.1, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}` }}>
            <Box component="img" src={SAN_BRAND_LOGO} alt={SAN_BRAND} sx={{ height: 20, width: "auto", mixBlendMode: "multiply" }} />
          </Box>
        </Box>
      </Box>
  );
}

// Only the table reads the URL filters, so only it waits for the search params
function ClampProducts({ sp }: { sp: URLSearchParams }) {
  // ?type=single|double and ?size=77.5 open the table already filtered
  const fromUrl = (): ClampFilters => {
    const t = typeFromSlug(sp.get("type"));
    const a = sp.get("size");
    const size = a ? CLAMP_SIZES.find((s) => s.endsWith(` ${a} mm`) || s === `${a} mm`) : undefined;
    return { types: t ? [t] : [], sizes: size ? [size] : [] };
  };
  const [filters, setFilters] = useState<ClampFilters>(fromUrl);

  return (
    <Box sx={{ maxWidth: 1400, mx: "auto", px: { xs: 2, md: 4 }, pt: { xs: 3, md: 4 } }}>
      <ClampTable filters={filters} setFilters={setFilters} />
    </Box>
  );
}

// Re-mounts when the link's filters change, so they're read once on first render
function WithParams() {
  const sp = useSearchParams();
  return <ClampProducts key={sp.toString()} sp={new URLSearchParams(sp.toString())} />;
}

export default function ClampProductsPage() {
  return (
    <Box sx={{ ...textReset, bgcolor: "#F7FAF7", minHeight: "100vh", pb: { xs: 6, md: 10 } }}>
      <Header />
      <Suspense fallback={<Box sx={{ minHeight: 480 }} />}>
        <WithParams />
      </Suspense>
    </Box>
  );
}
