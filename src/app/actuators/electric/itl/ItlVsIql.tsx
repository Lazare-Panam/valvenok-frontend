"use client";

// ITL or IQL: Susin's own comparison table from the ITL catalogue (p.7).

import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { T } from "@/src/app/Landing/modern/tokens";
import { wrap, Kicker, H2, Lead } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";
import { ITL_IQL } from "./itlData";

export default function ItlVsIql() {
  return (
    <Box component="section" aria-labelledby="h2-vs" sx={{ pb: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 3 }}>
          <Kicker>ITL or IQL?</Kicker>
          <H2 id="h2-vs">Two linear ranges, compared</H2>
          <Lead>ITL is compact, faster and rated for continuous duty on universal power. IQL goes up to 10 kN and runs on 3 phase supplies too. Figures from Susin’s comparison table.</Lead>
        </Box>
        <Box sx={{ overflowX: "auto", borderRadius: "20px", border: `1px solid ${T.border}`, bgcolor: "#fff" }}>
          <Box component="table" sx={{ width: "100%", minWidth: 720, borderCollapse: "collapse", fontSize: "0.88rem", "& th, & td": { px: 1.75, py: 1.2, borderBottom: `1px solid ${T.border}`, textAlign: "left", whiteSpace: "nowrap" }, "& thead th": { fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", color: T.muted, bgcolor: "#FAFCFA" }, "& tbody th": { fontWeight: 700, color: T.ink }, "& td": { color: T.body }, "& .itl": { bgcolor: "#F3FBF0", color: T.ink, fontWeight: 700 }, "& tr:last-of-type th, & tr:last-of-type td": { borderBottom: 0 } }}>
            <thead>
              <tr>{ITL_IQL.head.map((h, i) => <th key={h || "x"} className={i === 1 || i === 2 ? "itl" : undefined}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {ITL_IQL.rows.map((r) => (
                <tr key={r[0]}>
                  <th scope="row">{r[0]}</th>
                  {r.slice(1).map((c, i) => <td key={i} className={i < 2 ? "itl" : undefined}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </Box>
        </Box>
        <Box component={Link} href="/actuators/electric/iql" sx={{ mt: 2, display: "inline-flex", alignItems: "center", gap: 0.5, color: T.greenDark, fontWeight: 700, fontSize: "0.92rem", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
          See the IQL series <ArrowForwardRoundedIcon sx={{ fontSize: 17 }} />
        </Box>
      </Box>
    </Box>
  );
}
