"use client";

// "What is different?" from the QS catalogue (p.2): independent spring structure,
// compact size and reduced weight, energy saving.

import { Box } from "@mui/material";
import type { SvgIconComponent } from "@mui/icons-material";
import CallSplitOutlinedIcon from "@mui/icons-material/CallSplitOutlined";
import CompressOutlinedIcon from "@mui/icons-material/CompressOutlined";
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
import { T } from "@/src/app/Landing/modern/tokens";
import { wrap, Kicker, H2, Lead } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";

const POINTS: { icon: SvgIconComponent; title: string; text: string }[] = [
  { icon: CallSplitOutlinedIcon, title: "Independent spring", text: "In most spring return actuators the motor turns the reducer and the spring together. In the QS the motor turns only the reducer for normal running, and the spring works only in an emergency." },
  { icon: CompressOutlinedIcon, title: "Smaller and lighter", text: "Because the motor never has to drive the spring, the motor and reducer can be smaller, so the actuator is more compact and lighter: 22 kg for QS05 and QS10, 40 kg for QS20 and QS30." },
  { icon: EnergySavingsLeafOutlinedIcon, title: "Less current", text: "A smaller motor draws less current than a motor that also has to drive the spring, which saves energy over the actuator’s working life." },
];

export default function QsDifference() {
  return (
    <Box component="section" aria-labelledby="h2-diff" sx={{ pb: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>What’s different</Kicker>
          <H2 id="h2-diff">A Spring That Only Works When It’s Needed</H2>
          <Lead>Susin I-Tork’s QS uses an independent spring structure, held by a magnetic brake, rather than a spring the motor has to drive every stroke.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 1.5 }}>
          {POINTS.map(({ icon: Icon, title, text }) => (
            <Box key={title} sx={{ p: 2.75, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}`, display: "flex", flexDirection: "column", gap: 1.25 }}>
              <Box component="span" sx={{ width: 40, height: 40, borderRadius: "12px", bgcolor: T.greenSoft, color: T.greenDark, display: "grid", placeItems: "center" }}>
                <Icon sx={{ fontSize: 22 }} />
              </Box>
              <Box sx={{ fontSize: "1.05rem", fontWeight: 800, color: T.ink }}>{title}</Box>
              <Box sx={{ fontSize: "0.9rem", color: T.body, lineHeight: 1.6 }}>{text}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
