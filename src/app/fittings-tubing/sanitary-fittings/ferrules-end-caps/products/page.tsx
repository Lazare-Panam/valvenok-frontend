"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { SAN_BRAND, SAN_BRAND_LOGO } from "../../data";
import { ENDS, ENDS_BASE, END_SIZES, TUBE_ODS, kindFromSlug } from "../ends";
import EndTable, { EMPTY_FILTERS, type EndFilters } from "./EndTable";

function EndProducts() {
  const sp = useSearchParams();
  // ?type=ferrule|blind|sight, ?size=50.5 (clamp A) and ?tube=38.1 open the table already filtered
  const fromUrl = (): EndFilters => {
    const k = kindFromSlug(sp.get("type"));
    const a = sp.get("size");
    const size = a ? END_SIZES.find((s) => s.endsWith(` ${a} mm`) || s === `${a} mm`) : undefined;
    const tube = sp.get("tube");
    return { kinds: k ? [k] : [], sizes: size ? [size] : [], tubes: tube && TUBE_ODS.includes(tube) ? [tube] : [] };
  };
  const [filters, setFilters] = useState<EndFilters>(EMPTY_FILTERS);
  useEffect(() => setFilters(fromUrl()), [sp]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box sx={{ ...textReset, bgcolor: "#F7FAF7", minHeight: "100vh", pb: { xs: 6, md: 10 } }}>
      <Box sx={{ background: "linear-gradient(120deg, #EEF9EA 0%, #FFFFFF 55%, #EEF5FF 100%)", borderBottom: `1px solid ${T.border}` }}>
        <Box sx={{ maxWidth: 1400, mx: "auto", px: { xs: 2, md: 4 }, py: { xs: 4, md: 5.5 }, display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: { md: "flex-end" }, gap: 3 }}>
          <Box>
            <Box component={Link} href={ENDS_BASE} sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, mb: 1.5, fontSize: "0.88rem", fontWeight: 700, color: T.greenDark, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
              <ArrowBackIcon sx={{ fontSize: 17 }} /> Ferrules &amp; end caps overview
            </Box>
            <Box component="h1" sx={{ m: 0, fontSize: { xs: "2rem", md: "2.7rem" }, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, color: T.ink }}>
              Ferrule and end cap models
            </Box>
            <Box component="p" sx={{ m: 0, mt: 1, maxWidth: 640, fontSize: "1rem", lineHeight: 1.6, color: T.body }}>
              {ENDS.length} parts from {SAN_BRAND}: ferrules, blind covers and sight glass end caps, DN 6 to DN 300. Filter by product, clamp size or tube, then open a model for its full specification or a quote.
            </Box>
          </Box>
          <Box sx={{ alignSelf: { xs: "flex-start", md: "auto" }, display: "inline-flex", alignItems: "center", px: 2, py: 1.1, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}` }}>
            <Box component="img" src={SAN_BRAND_LOGO} alt={SAN_BRAND} sx={{ height: 20, width: "auto", mixBlendMode: "multiply" }} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ maxWidth: 1400, mx: "auto", px: { xs: 2, md: 4 }, pt: { xs: 3, md: 4 } }}>
        <EndTable filters={filters} setFilters={setFilters} />
      </Box>
    </Box>
  );
}

export default function EndProductsPage() {
  return (
    <Suspense>
      <EndProducts />
    </Suspense>
  );
}
