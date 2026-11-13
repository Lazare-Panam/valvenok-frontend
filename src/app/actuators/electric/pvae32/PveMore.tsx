"use client";

// The two PVE families outside the analog Series 7 ladder: PVED-CC (CAN bus)
// and PVE-EX (explosion proof). Figures from their Danfoss data sheets.

import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import LanOutlinedIcon from "@mui/icons-material/LanOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { PVED_CC_SHEET, PVE_EX_SHEET } from "./pveData";
import { T } from "@/src/app/Landing/modern/tokens";
import { wrap, Kicker, H2, Lead } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";

const CARDS = [
  {
    icon: LanOutlinedIcon, model: "PVED-CC", title: "CAN bus (ISOBUS)",
    text: "One communication cable for every CAN component on the machine. Flow control and position control, with ramps, scaling and progressivity set over ISOBUS or the PLUS+1 Service Tool, and built-in diagnostics.",
    points: ["For PVG 32 and PVG 100", "Same analogue position control as PVES", "Optional power save"],
    sheet: PVED_CC_SHEET,
  },
  {
    icon: LocalFireDepartmentOutlinedIcon, model: "PVE-EX", title: "Explosion proof",
    text: "Flameproof actuators for mining and offshore, built on the analog PVE Series 4 and designed for quick inspection of the interior parts.",
    points: ["Ex db, group I and group II", "EN 60079-0 and EN/IEC 60079-1", "PVEO-EX, PVEH-EX and PVES-EX versions"],
    sheet: PVE_EX_SHEET,
  },
];

export default function PveMore() {
  return (
    <Box component="section" aria-labelledby="h2-more" sx={{ pb: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>More PVE actuators</Kicker>
          <H2 id="h2-more">CAN Bus and Hazardous Areas</H2>
          <Lead>Beyond the analog Series 7, Danfoss makes PVE actuators for CAN bus machines and for explosive atmospheres.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 1.5 }}>
          {CARDS.map(({ icon: Icon, model, title, text, points, sheet }) => (
            <Box key={model} sx={{ p: 3, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}`, display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box component="span" sx={{ width: 42, height: 42, borderRadius: "12px", bgcolor: T.greenSoft, color: T.greenDark, display: "grid", placeItems: "center" }}><Icon /></Box>
                <Box>
                  <Box sx={{ fontSize: "1.15rem", fontWeight: 800, color: T.ink }}>{model}</Box>
                  <Box sx={{ fontSize: "0.8rem", fontWeight: 700, color: T.muted }}>{title}</Box>
                </Box>
              </Box>
              <Box sx={{ fontSize: "0.92rem", color: T.body, lineHeight: 1.6 }}>{text}</Box>
              <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", display: "grid", gap: 0.75 }}>
                {points.map((p) => (
                  <Box component="li" key={p} sx={{ display: "flex", gap: 1, fontSize: "0.88rem", color: T.ink, fontWeight: 600 }}>
                    <Box component="span" sx={{ mt: "0.5em", width: 6, height: 6, borderRadius: "50%", bgcolor: T.green, flexShrink: 0 }} />{p}
                  </Box>
                ))}
              </Box>
              <Box sx={{ mt: "auto", display: "flex", flexWrap: "wrap", gap: 2.5 }}>
                <Box component={Link} href={`/actuators/electric/pvae32/products/${model}`} sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: T.greenDark, fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                  See {model} <ArrowForwardRoundedIcon sx={{ fontSize: 17 }} />
                </Box>
                <Box component="a" href={sheet} target="_blank" rel="noopener" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: T.greenDark, fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                  <FileDownloadOutlinedIcon sx={{ fontSize: 17 }} /> {model} data sheet (PDF)
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
