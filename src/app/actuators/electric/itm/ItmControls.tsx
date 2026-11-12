"use client";

// ITM control and protection, from the ITM catalogue: electrical specifications
// (p.6), local control and remote control (p.5), options (p.3).

import { Box } from "@mui/material";
import type { SvgIconComponent } from "@mui/icons-material";
import SettingsRemoteOutlinedIcon from "@mui/icons-material/SettingsRemoteOutlined";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import LanOutlinedIcon from "@mui/icons-material/LanOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import { T } from "@/src/app/Landing/modern/tokens";
import { wrap, Kicker, H2, Lead } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";

const ITEMS: { icon: SvgIconComponent; name: string; text: string; tag: string }[] = [
  { icon: SettingsRemoteOutlinedIcon, name: "Non-intrusive setting", text: "Open / close and local / stop / remote selectors on the cover, with a graphic LCD and 4 LEDs. Set up with the handheld remote control, so the cover stays closed.", tag: "Standard" },
  { icon: SensorsOutlinedIcon, name: "Position without power", text: "A Hall incremental encoder detects valve position; a battery keeps it recorded even when the power is off.", tag: "Standard" },
  { icon: FactCheckOutlinedIcon, name: "Status contacts", text: "Eight latching status contacts (opening, open, closing, closed, over-torque each way, phase, local / remote) plus a fault contact.", tag: "Standard" },
  { icon: ShieldOutlinedIcon, name: "Protection", text: "Automatic phase correction against reversed or missing phase, a thermal protector in the motor, and digital torque sensing adjustable from 30 to 100%.", tag: "Standard" },
  { icon: ReportGmailerrorredOutlinedIcon, name: "Emergency shutdown", text: "On an ESD signal the actuator closes, stops or opens: you choose which.", tag: "Standard" },
  { icon: TuneOutlinedIcon, name: "Modulating control", text: "RPC positioning from 4–20 mA, 0–10, 2–10, 0–5 or 1–5 V, with a 4–20 mA output and a set fail position if the signal is lost. A CT current transmitter is also available.", tag: "Option" },
  { icon: LanOutlinedIcon, name: "Fieldbus", text: "Profibus, CANopen and other bus protocols.", tag: "Option" },
  { icon: LocalFireDepartmentOutlinedIcon, name: "Explosion proof", text: "Ex d IIC T4, listed by Susin as an option for every ITM model.", tag: "Option" },
];

export default function ItmControls() {
  return (
    <Box component="section" aria-labelledby="h2-controls" sx={{ pb: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Control and protection</Kicker>
          <H2 id="h2-controls">Integral controls as standard</H2>
          <Lead>Every ITM has its own starter, local controls and display, so it wires straight to 3 phase power and your control system.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: 1.5 }}>
          {ITEMS.map(({ icon: Icon, name, text, tag }) => (
            <Box key={name} sx={{ p: 2.5, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}`, display: "flex", flexDirection: "column", gap: 1.25 }}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1 }}>
                <Box component="span" sx={{ width: 36, height: 36, borderRadius: "12px", bgcolor: T.greenSoft, color: T.greenDark, display: "grid", placeItems: "center" }}>
                  <Icon sx={{ fontSize: 20 }} />
                </Box>
                <Box component="span" sx={{ px: 1, py: 0.25, borderRadius: 999, fontSize: "0.7rem", fontWeight: 700, bgcolor: tag === "Standard" ? T.greenSoft : T.surface, color: tag === "Standard" ? T.greenDark : T.muted, border: `1px solid ${T.border}` }}>{tag}</Box>
              </Box>
              <Box sx={{ fontSize: "1rem", fontWeight: 800, color: T.ink }}>{name}</Box>
              <Box sx={{ fontSize: "0.86rem", color: T.body, lineHeight: 1.55 }}>{text}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
