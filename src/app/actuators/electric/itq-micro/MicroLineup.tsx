"use client";

// ITQ Micro hero visual: the three models side by side. One is highlighted at a
// time (auto-cycling, or pick one), with its torque bar, time, mounting and how
// it is driven. Figures from the ITQ Micro catalogue (see itqMicroData).

import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";
import { useInView } from "@/src/app/Common/LightMotion";
import { ITQM_MODELS } from "./itqMicroData";

// How each model drives the valve, from the catalogue feature lists
const DRIVE: Record<string, string> = {
  "ITQ 0020": "DC motor, free voltage 85–265 VAC",
  "ITQ 0040": "Spur gears, declutchable lever",
  "ITQ 0080": "Self-locking spur and worm gears",
};
const MAX = Math.max(...ITQM_MODELS.map((m) => m.torqueNm));

export default function MicroLineup() {
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  const [i, setI] = useState(0);
  const [hold, setHold] = useState(false);
  useEffect(() => {
    if (!on || hold) return;
    const t = setInterval(() => setI((x) => (x + 1) % ITQM_MODELS.length), 3200);
    return () => clearInterval(t);
  }, [on, hold]);
  const m = ITQM_MODELS[i];
  return (
    <Box ref={ref}>
      <Box role="tablist" aria-label="ITQ Micro models" sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, alignItems: "end" }}>
        {ITQM_MODELS.map((x, k) => {
          const sel = k === i;
          return (
            <Box
              key={x.model}
              component="button"
              type="button"
              role="tab"
              aria-selected={sel}
              onClick={() => { setI(k); setHold(true); }}
              sx={{
                cursor: "pointer", fontFamily: "inherit", p: 1, pb: 1.25, borderRadius: "16px",
                border: `1.5px solid ${sel ? T.green : T.border}`, bgcolor: sel ? T.greenSoft : "#fff",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 0.75, transition: "all .25s",
              }}
            >
              {/* photo size follows torque, so the three read small → large */}
              <Box sx={{ height: { xs: 64, sm: 92 }, width: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden" }}>
                <Box component="img" src={x.image} alt={x.model} sx={{ display: "block", height: { xs: Math.round(64 * (0.6 + (x.torqueNm / MAX) * 0.4)), sm: Math.round(92 * (0.6 + (x.torqueNm / MAX) * 0.4)) }, width: "auto", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply", transition: "transform .3s", transform: sel ? "scale(1.05)" : "none", transformOrigin: "bottom center" }} />
              </Box>
              <Box sx={{ fontSize: "0.82rem", fontWeight: 800, color: T.ink }}>{x.model}</Box>
              <Box sx={{ fontSize: "0.74rem", fontWeight: 700, color: sel ? T.greenDark : T.muted }}>{x.torqueNm} Nm</Box>
            </Box>
          );
        })}
      </Box>

      <Box sx={{ mt: 2, p: 2, borderRadius: "16px", bgcolor: T.surface, border: `1px solid ${T.border}` }} aria-live="polite">
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", mb: 0.75 }}>
          <Box sx={{ fontSize: "0.95rem", fontWeight: 800, color: T.ink }}>{m.model}</Box>
          <Box sx={{ fontSize: "0.8rem", fontWeight: 700, color: T.greenDark }}>{m.torqueNm} Nm rated torque</Box>
        </Box>
        <Box sx={{ height: 8, borderRadius: 999, bgcolor: "#E3EAE5", overflow: "hidden" }}>
          <Box sx={{ height: "100%", width: `${(m.torqueNm / MAX) * 100}%`, borderRadius: 999, bgcolor: T.green, transition: "width .6s ease" }} />
        </Box>
        <Box component="dl" sx={{ m: 0, mt: 1.5, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.25, "& dt": { fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: T.muted }, "& dd": { m: 0, mt: 0.25, fontSize: "0.84rem", fontWeight: 700, color: T.ink, lineHeight: 1.35 } }}>
          <div><dt>Operating time</dt><dd>{m.speed.replace(/ \/ (\d+ s \(24 VDC\))/, " · $1")}</dd></div>
          <div><dt>ISO 5211</dt><dd>{m.mounting.replace("ISO 5211 ", "")}</dd></div>
          <div><dt>Power supply</dt><dd>{m.power}</dd></div>
          <div><dt>Drive</dt><dd>{DRIVE[m.model]}</dd></div>
        </Box>
      </Box>
      <Box sx={{ mt: 1.25, textAlign: "center", fontSize: "0.78rem", fontWeight: 600, color: T.muted }}>Tap a model to compare</Box>
    </Box>
  );
}
