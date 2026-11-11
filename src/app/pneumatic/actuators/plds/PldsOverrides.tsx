"use client";

// PLDS manual overrides on the series page: the four types, which sizes each fits
// and its thrust range. The per-size figures live in each model's row on the
// model list (one home per size); this links there.

import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { T } from "@/src/app/Landing/modern/tokens";
import { wrap, Kicker, H2, Lead } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";
import { jack, mtg, mab, hmor, OVERRIDE_TYPES } from "./pldsOverrideData";

const kn = (n: number) => Math.round(n / 1000).toLocaleString("en-GB");
const span = (sizes: string[]) => `${sizes[0]} to ${sizes[sizes.length - 1].replace("PLDS-", "")}`;
const range = (ns: number[]) => `${kn(Math.min(...ns))} – ${kn(Math.max(...ns))} kN`;

const CARDS = OVERRIDE_TYPES.map((t) => {
  if (t.key === "hmor") {
    const sizes = hmor.map((r) => `PLDS-${r[0]}`);
    return { ...t, sizes: span(sizes), thrust: range(hmor.map((r) => r[3])), models: "Hand pump" };
  }
  const rows = t.key === "jack" ? jack : t.key === "mtg" ? mtg : mab;
  const models = Array.from(new Set(rows.map((r) => r.model).filter(Boolean)));
  return { ...t, sizes: span(rows.map((r) => r.size)), thrust: range(rows.map((r) => r.thrustN)), models: models.length ? `${models[0]} to ${models[models.length - 1]}` : "Direct screw" };
});

export default function PldsOverrides() {
  return (
    <Box component="section" aria-labelledby="h2-overrides" sx={{ pb: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Manual overrides</Kicker>
          <H2 id="h2-overrides">Move the valve by hand when there’s no air</H2>
          <Lead>Four override types from Susin’s PLDS catalogue. Each model’s row in the model list shows the override that fits it, with its thrust.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: 1.5 }}>
          {CARDS.map((c, i) => (
            <Box key={c.key} sx={{ p: 2.5, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}`, display: "flex", flexDirection: "column", gap: 1.25 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box component="span" sx={{ width: 28, height: 28, borderRadius: "50%", bgcolor: T.greenSoft, color: T.greenDark, display: "grid", placeItems: "center", fontSize: "0.8rem", fontWeight: 800 }}>{i + 1}</Box>
                <Box sx={{ fontSize: "1.05rem", fontWeight: 800, color: T.ink }}>{c.name}</Box>
              </Box>
              <Box sx={{ fontSize: "0.86rem", color: T.body, lineHeight: 1.55, flex: 1 }}>{c.text}</Box>
              <Box component="dl" sx={{ m: 0, display: "grid", gap: 0.75, "& dt": { fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: T.muted }, "& dd": { m: 0, fontSize: "0.86rem", fontWeight: 700, color: T.ink } }}>
                <div><dt>Fits</dt><dd>{c.sizes}</dd></div>
                <div><dt>Override thrust</dt><dd>{c.thrust}</dd></div>
                <div><dt>Models</dt><dd>{c.models}</dd></div>
              </Box>
            </Box>
          ))}
        </Box>
        <Box component={Link} href="/pneumatic/actuators/plds/products" sx={{ mt: 2.5, display: "inline-flex", alignItems: "center", gap: 0.5, color: T.greenDark, fontWeight: 700, fontSize: "0.92rem", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
          See the override for each size in the model list <ArrowForwardRoundedIcon sx={{ fontSize: 17 }} />
        </Box>
      </Box>
    </Box>
  );
}
