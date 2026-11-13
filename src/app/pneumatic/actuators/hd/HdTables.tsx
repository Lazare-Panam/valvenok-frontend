"use client";

// HD overview tables, as on Susin I-Tork's HD page (susingroup.com/products/hd-rotary,
// Technical tables): the general specification by body size. Per-model torque tables are on each model's page.

import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";
import { wrap, Kicker, H2, Lead } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";
import { HD_ACTUATOR_DATA } from "./products/hooks/hdActuatorData";

const nm = (n: number) => n.toLocaleString("en-GB");
// Max stem diameter / height (mm), from the same Susin I-Tork table
const STEM: Record<string, [string, number]> = { A1: ["SQ-22", 30], "01": ["Ø45", 45], "02": ["Ø65", 120], "03": ["Ø80", 130], "04": ["Ø110", 150], "05": ["Ø125", 185], "06": ["Ø165", 245] };

// Same look as the model list tables: pale header, small grey labels, light dividers
const head = { px: 1.25, py: 1.25, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: T.muted, bgcolor: "#FAFCFA", borderBottom: `1px solid ${T.border}`, textAlign: "left" as const, whiteSpace: "normal" as const, lineHeight: 1.35, verticalAlign: "bottom" as const };
const dark = { ...head, pt: 1.5 };
const soft = { ...head, pt: 0.5, fontSize: "0.66rem" };
const td = { px: 1.25, py: 1.25, textAlign: "left" as const, whiteSpace: "nowrap" as const, borderBottom: `1px solid ${T.border}`, color: T.body, fontVariantNumeric: "tabular-nums" };
const pill = { display: "inline-block", px: 1.1, py: 0.35, borderRadius: 999, fontSize: "0.78rem", fontWeight: 700, whiteSpace: "nowrap" } as const;

export default function HdTables() {
  return (
    <Box component="section" aria-labelledby="h2-tables" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 3 }}>
          <Kicker>Technical tables</Kicker>
          <H2 id="h2-tables">General Specification</H2>
          <Lead>Torque, spring end torque and stem limits for each body size, across its cylinder and spring options. Each model’s full torque table is on its own page.</Lead>
        </Box>

        <Box sx={{ borderRadius: "20px", border: `1px solid ${T.border}`, bgcolor: "#fff", overflowX: "auto" }}>
          <Box component="table" sx={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem", color: T.ink, minWidth: 1000 }}>
            <thead>
              <tr>
                <Box component="th" rowSpan={2} sx={{ ...dark, pl: 2 }}>Body size</Box>
                <Box component="th" rowSpan={2} sx={dark}>ISO 5211</Box>
                <Box component="th" colSpan={2} sx={{ ...dark, borderBottom: 0, color: T.ink }}>Torque, Nm</Box>
                <Box component="th" colSpan={2} sx={{ ...dark, borderBottom: 0, color: T.ink }}>Torque, lb-in</Box>
                <Box component="th" colSpan={2} sx={{ ...dark, borderBottom: 0, color: T.ink }}>Spring end torque, Nm</Box>
                <Box component="th" colSpan={2} sx={{ ...dark, borderBottom: 0, color: T.ink }}>Spring end torque, lb-in</Box>
                <Box component="th" rowSpan={2} sx={dark}>Max stem dia</Box>
                <Box component="th" rowSpan={2} sx={dark}>Max stem height, mm</Box>
                <Box component="th" rowSpan={2} sx={{ ...dark, pr: 2 }}>Over-travel</Box>
              </tr>
              <tr>{Array.from({ length: 4 }).flatMap((_, k) => ["Min", "Max"].map((x) => <Box component="th" key={k + x} sx={soft}>{x}</Box>))}</tr>
            </thead>
            <tbody>
              {HD_ACTUATOR_DATA.map((m) => (
                <Box component="tr" key={m.model} sx={{ "&:hover": { bgcolor: "#FAFCFA" } }}>
                  <Box component="td" sx={{ ...td, pl: 2, fontFamily: "ui-monospace, Menlo, monospace", fontWeight: 700, color: T.ink }}>{m.model}</Box>
                  <Box component="td" sx={td}><Box component="span" sx={{ ...pill, bgcolor: T.surface, color: T.ink, border: `1px solid ${T.border}` }}>{m.iso5211}</Box></Box>
                  {[m.torqueNmMin, m.torqueNmMax, m.torqueLbInMin, m.torqueLbInMax, m.springEndTorqueNmMin, m.springEndTorqueNmMax, m.springEndTorqueLbInMin, m.springEndTorqueLbInMax].map((v, k) => (
                    <Box component="td" key={k} sx={td}>{k === 1 ? <Box component="span" sx={{ ...pill, bgcolor: T.greenSoft, color: T.greenDark }}>{nm(v)} Nm</Box> : nm(v)}</Box>
                  ))}
                  <Box component="td" sx={td}>{STEM[m.model][0]}</Box>
                  <Box component="td" sx={td}>{STEM[m.model][1]}</Box>
                  <Box component="td" sx={{ ...td, pr: 2 }}>±5°</Box>
                </Box>
              ))}
            </tbody>
          </Box>
        </Box>

        <Box sx={{ mt: 1.5, fontSize: "0.78rem", color: T.muted }}>From Susin I-Tork’s HD general specification table.</Box>
      </Box>
    </Box>
  );
}
