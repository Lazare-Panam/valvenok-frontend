"use client";

// Gearing and handwheel effort for Susin manual gear actuators (MAB, MAW, ITG),
// from each catalogue's technical specifications and rim effort chart:
// input torque = output torque / MA, rim effort = input torque / handwheel
// radius; Susin's standard maximum rim effort is 360 N.

import { useMemo, useState } from "react";
import Link from "next/link";
import { Box, InputBase } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";
import { wrap, Kicker, H2, Lead } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";

import { STAGE_LABEL, RIM_LIMIT_N, rimEffort, type GearStage, type GearModel } from "./gearTypes";

type Props = { name: string; models: GearModel[]; products: string; text: Record<GearStage, string>; lead: string; example?: number };

const nm = (n: number) => n.toLocaleString("en-GB");
const STAGES: GearStage[] = ["Standard", "1S", "2S"];
const range = (xs: number[]) => `${nm(Math.min(...xs))} – ${nm(Math.max(...xs))}`;


export default function GearSizer({ name, models, products, text, lead, example = 1500 }: Props) {
  const [torque, setTorque] = useState(String(example));
  const [limit, setLimit] = useState(String(RIM_LIMIT_N));
  const t = Number(torque) || 0;
  const lim = Number(limit) || RIM_LIMIT_N;
  const MAX = Math.max(...models.map((m) => m.torqueNm));

  // Per stage, the smallest model that takes the torque, and its rim effort
  const picks = useMemo(
    () =>
      STAGES.map((s) => {
        const fits = models.filter((m) => m.stage === s && m.torqueNm >= t);
        const ok = fits.find((m) => rimEffort(m, t) <= lim);
        const first = fits[0];
        return { s, model: ok ?? first, ok: !!ok, rim: (ok ?? first) ? Math.round(rimEffort(ok ?? first, t)) : 0 };
      }),
    [t, lim, models],
  );

  const field = (label: string, value: string, set: (v: string) => void, unit: string) => (
    <Box component="label" sx={{ display: "flex", flexDirection: "column", gap: 0.75, flex: 1, minWidth: 160 }}>
      <Box component="span" sx={{ fontSize: "0.8rem", fontWeight: 700, color: T.muted }}>{label}</Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, px: 1.75, py: 1, borderRadius: "14px", border: `1px solid ${T.border}`, bgcolor: "#fff" }}>
        <InputBase value={value} onChange={(e) => set(e.target.value.replace(/[^\d]/g, ""))} inputProps={{ inputMode: "numeric", "aria-label": label }} sx={{ flex: 1, fontWeight: 800, fontSize: "1.1rem", color: T.ink }} />
        <Box component="span" sx={{ fontSize: "0.85rem", fontWeight: 700, color: T.muted }}>{unit}</Box>
      </Box>
    </Box>
  );

  return (
    <Box component="section" aria-labelledby="h2-gearing" sx={{ pb: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Gearing and handwheel effort</Kicker>
          <H2 id="h2-gearing">Standard, 1S or 2S?</H2>
          <Lead>{lead}</Lead>
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 1.5, mb: 3 }}>
          {STAGES.map((s) => {
            const ms = models.filter((m) => m.stage === s);
            if (!ms.length) return null;
            return (
              <Box key={s} sx={{ p: 2.5, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}`, display: "flex", flexDirection: "column", gap: 1 }}>
                <Box sx={{ fontSize: "1rem", fontWeight: 800, color: T.ink }}>{STAGE_LABEL[s]}</Box>
                <Box sx={{ fontSize: "0.86rem", color: T.body, lineHeight: 1.55 }}>{text[s]}</Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: "auto", pt: 1 }}>
                  {[`${ms.length} sizes`, `Ratio ${ms[0].ratio} – ${ms[ms.length - 1].ratio}`, `MA ${range(ms.map((m) => m.ma))}`, `${range(ms.map((m) => m.torqueNm))} Nm`].map((c) => (
                    <Box key={c} component="span" sx={{ px: 1, py: 0.25, borderRadius: 999, fontSize: "0.72rem", fontWeight: 700, bgcolor: T.surface, color: T.body, border: `1px solid ${T.border}` }}>{c}</Box>
                  ))}
                </Box>
              </Box>
            );
          })}
        </Box>

        <Box sx={{ p: { xs: 2.5, md: 3.5 }, borderRadius: "24px", bgcolor: T.surface, border: `1px solid ${T.border}` }}>
          <Box sx={{ fontSize: "1.05rem", fontWeight: 800, color: T.ink, mb: 0.5 }}>Rim effort check</Box>
          <Box sx={{ fontSize: "0.86rem", color: T.body, mb: 2 }}>Enter the valve torque. For each gearing you get the smallest {name} that takes it, and the force on the rim of its recommended handwheel.</Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2.5 }}>
            {field("Valve torque", torque, setTorque, "Nm")}
            {field("Allowed rim effort", limit, setLimit, "N")}
          </Box>
          {t > MAX ? (
            <Box sx={{ fontSize: "0.9rem", fontWeight: 700, color: T.ink }}>Above {nm(MAX)} Nm, the largest {name}. Send us the valve data and we’ll suggest an alternative.</Box>
          ) : (
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 1.5 }}>
              {picks.map(({ s, model, ok, rim }) =>
                model ? (
                  <Box key={s} component={Link} href={`${products}/${model.model}`} sx={{ p: 2, borderRadius: "16px", bgcolor: "#fff", border: `1.5px solid ${ok ? T.green : T.border}`, textDecoration: "none", display: "flex", flexDirection: "column", gap: 0.5, "&:hover": { borderColor: T.greenDark } }}>
                    <Box sx={{ fontSize: "0.75rem", fontWeight: 700, color: T.muted }}>{STAGE_LABEL[s]}</Box>
                    <Box sx={{ fontSize: "1.15rem", fontWeight: 800, color: T.ink }}>{model.model}</Box>
                    <Box sx={{ fontSize: "0.86rem", color: T.body }}>Ø {model.handwheel} mm handwheel, MA {model.ma}</Box>
                    <Box sx={{ mt: 0.5, fontSize: "0.95rem", fontWeight: 800, color: ok ? T.greenDark : "#B8741F" }}>
                      ≈ {nm(rim)} N on the rim{ok ? "" : `, above ${nm(lim)} N`}
                    </Box>
                  </Box>
                ) : (
                  <Box key={s} sx={{ p: 2, borderRadius: "16px", bgcolor: "#fff", border: `1px solid ${T.border}`, fontSize: "0.86rem", color: T.muted }}>
                    <Box sx={{ fontSize: "0.75rem", fontWeight: 700 }}>{STAGE_LABEL[s]}</Box>
                    No {s} model takes {nm(t)} Nm.
                  </Box>
                ),
              )}
            </Box>
          )}
          <Box sx={{ mt: 2, fontSize: "0.78rem", color: T.muted, lineHeight: 1.5 }}>
            Rim effort = valve torque ÷ mechanical advantage ÷ handwheel radius, using Susin’s figures (mechanical advantage ±10%). Susin’s standard limit is 360 N. A guide only: we confirm the model from the full valve data.
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
