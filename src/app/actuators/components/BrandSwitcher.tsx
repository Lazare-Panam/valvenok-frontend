"use client";

// Brand logo for a type page hero: just the logo of the brand whose range is on
// the page (Susin I-Tork). KOSAPLUS and SPAC (own websites) are linked from the
// /actuators hub, not here.

import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";
import { BRANDS } from "@/src/app/Common/brandRegistry";
import type { ShowcaseCategory } from "@/src/app/Common/showcase";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function BrandSwitcher({ here, category }: { here: string[]; category: ShowcaseCategory }) {
  const onPage = here.map((n) => BRANDS.find((b) => b.name === n || b.slug === n.toLowerCase())).filter(Boolean) as typeof BRANDS;
  return (
    <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 1.5 }}>
      {onPage.map((b) => (
        <Box key={b.slug} sx={{ width: 76, height: 76, borderRadius: "18px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow, display: "grid", placeItems: "center", overflow: "hidden" }}>
          <Box component="img" src={b.logo} alt={b.name} title={b.name} sx={{ display: "block", width: 62, height: 62, objectFit: "contain" }} />
        </Box>
      ))}
    </Box>
  );
}
