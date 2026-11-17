"use client";

// Small model-number configurator for a product page: pick one option per step,
// see the full order code build up, then request a quote for exactly that code.
// Data comes from the series data (e.g. ITS: switch set + cable entry, catalogue p.8).

import { useState } from "react";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { T } from "@/src/app/Landing/modern/tokens";
import { KeepUnits } from "@/src/app/Common/KeepUnits";
import type { Configurator } from "./modelTypes";

const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";

export default function ModelConfigurator({ cfg, onQuote }: { cfg: Configurator; onQuote: (code: string, picks: [string, string][]) => void }) {
  const [sel, setSel] = useState<number[]>(cfg.steps.map(() => 0));
  const [copied, setCopied] = useState(false);
  const chosen = cfg.steps.map((s, i) => s.options[sel[i]]);
  const code = cfg.prefix + chosen.map((o) => o.code).join("");
  const picks = cfg.steps.map((s, i) => [s.label, chosen[i].text] as [string, string]);
  const copy = () => {
    try {
      navigator.clipboard?.writeText(code).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); });
    } catch { /* clipboard not available */ }
  };

  return (
    <Box sx={{ mt: 3, borderRadius: "20px", border: `1px solid ${T.border}`, bgcolor: "#fff", overflow: "hidden" }}>
      {/* live code */}
      <Box sx={{ p: { xs: 2, md: 2.5 }, background: "linear-gradient(135deg, #F1FAEE 0%, #FFFFFF 100%)", borderBottom: `1px solid ${T.border}`, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 1.5 }}>
        <Box>
          <Box component="h3" sx={{ m: 0, fontSize: "1.15rem", fontWeight: 800, color: T.ink }}>{cfg.title}</Box>
          <Box sx={{ mt: 0.25, fontSize: "0.85rem", color: T.body }}>Pick the options; the model number builds as you go.</Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box aria-live="polite" className="nocap" sx={{ px: 2, py: 1, borderRadius: "12px", bgcolor: T.ink, color: "#fff", fontFamily: mono, fontWeight: 800, fontSize: { xs: "1.15rem", md: "1.35rem" }, letterSpacing: "0.04em", textTransform: "none !important" }}>
            {cfg.prefix}
            {chosen.map((o, i) => <Box key={i} component="span" sx={{ color: i % 2 ? "#9BEA7E" : "#F4C95D" }}>{o.code}</Box>)}
          </Box>
          <Box component="button" type="button" onClick={copy} aria-label="Copy model number"
            sx={{ display: "grid", placeItems: "center", width: 40, height: 40, borderRadius: "10px", border: `1px solid ${T.border}`, bgcolor: "#fff", color: copied ? T.greenDark : T.body, cursor: "pointer", "&:hover": { borderColor: T.greenDark } }}>
            {copied ? <CheckRoundedIcon sx={{ fontSize: 18 }} /> : <ContentCopyRoundedIcon sx={{ fontSize: 17 }} />}
          </Box>
        </Box>
      </Box>

      {/* steps */}
      <Box sx={{ p: { xs: 2, md: 2.5 }, display: "grid", gap: 2.25 }}>
        {cfg.steps.map((s, si) => {
          const groups = Array.from(new Set(s.options.map((o) => o.group ?? "")));
          return (
            <Box key={s.label} role="radiogroup" aria-label={s.label}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <Box sx={{ width: 22, height: 22, borderRadius: "50%", bgcolor: T.greenSoft, color: T.greenDark, fontSize: "0.75rem", fontWeight: 800, display: "grid", placeItems: "center" }}>{si + 1}</Box>
                <Box sx={{ fontSize: "0.95rem", fontWeight: 800, color: T.ink }}>{s.label}</Box>
              </Box>
              {groups.map((g) => (
                <Box key={g} sx={{ mb: 0.75 }}>
                  {g && <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase !important", color: T.muted, mb: 0.5 }}>{g}</Box>}
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                    {s.options.map((o, oi) => (o.group ?? "") !== g ? null : (
                      <Box key={o.code} component="button" type="button" role="radio" aria-checked={sel[si] === oi}
                        onClick={() => setSel((p) => p.map((v, k) => (k === si ? oi : v)))}
                        sx={{
                          display: "inline-flex", alignItems: "center", gap: 0.75, px: 1.4, py: 0.75, borderRadius: "10px", cursor: "pointer", font: "inherit", fontSize: "0.86rem", fontWeight: 600,
                          border: `1.5px solid ${sel[si] === oi ? T.greenDark : T.border}`, bgcolor: sel[si] === oi ? T.greenSoft : "#fff", color: T.ink, transition: "all .15s", "&:hover": { borderColor: T.greenDark },
                        }}>
                        <Box component="span" className="nocap" sx={{ fontFamily: mono, fontWeight: 800, color: sel[si] === oi ? T.greenDeep : T.muted, textTransform: "none !important" }}>{o.code}</Box>
                        <KeepUnits text={o.text} />
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          );
        })}
      </Box>

      {/* summary + quote */}
      <Box sx={{ px: { xs: 2, md: 2.5 }, py: 2, borderTop: `1px solid ${T.border}`, bgcolor: "#FAFCFA", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 1.5 }}>
        <Box sx={{ fontSize: "0.88rem", color: T.body, lineHeight: 1.5 }}>
          <Box component="span" className="nocap" sx={{ fontFamily: mono, fontWeight: 800, color: T.ink, textTransform: "none !important" }}>{code}</Box>
          {": "}
          {picks.map(([, v]) => v).join(", ")}
        </Box>
        <Box component="button" type="button" onClick={() => onQuote(code, picks)}
          sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, px: 2.5, py: 1.1, borderRadius: 999, border: 0, cursor: "pointer", font: "inherit", fontWeight: 700, fontSize: "0.92rem", bgcolor: T.green, color: T.greenDeep, "&:hover": { bgcolor: "#55C93E" } }}>
          Quote for <Box component="span" className="nocap" sx={{ fontFamily: mono, textTransform: "none !important" }}>{code}</Box> <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
        </Box>
      </Box>
      {cfg.note && <Box component="p" sx={{ m: 0, px: { xs: 2, md: 2.5 }, pb: 2, bgcolor: "#FAFCFA", fontSize: "0.82rem", color: T.muted, lineHeight: 1.55 }}>{cfg.note}</Box>}
    </Box>
  );
}
