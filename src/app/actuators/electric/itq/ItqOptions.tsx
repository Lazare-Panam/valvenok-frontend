"use client";

// ITQ control and options, from the ITQ catalogue "Options available" (p.7–8):
// local controls, position feedback, modulating control, bus, fail safe,
// hazardous areas and submersion, travel angle.

import { Box } from "@mui/material";
import type { SvgIconComponent } from "@mui/icons-material";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import LanOutlinedIcon from "@mui/icons-material/LanOutlined";
import BatteryChargingFullOutlinedIcon from "@mui/icons-material/BatteryChargingFullOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import WaterOutlinedIcon from "@mui/icons-material/WaterOutlined";
import RotateRightOutlinedIcon from "@mui/icons-material/RotateRightOutlined";
import { T } from "@/src/app/Landing/modern/tokens";
import { wrap, Kicker, H2, Lead } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";

const OPTIONS: { icon: SvgIconComponent; name: string; code: string; text: string; fits: string }[] = [
  { icon: ToggleOnOutlinedIcon, name: "Local controls", code: "LP4 · LM4 · ICM1–3", text: "Open / close and local / stop / remote selectors with status lamps. ICM2 and ICM3 add an LCD display; ICM3 is IP68 with a separate terminal compartment.", fits: "LP4, LM4: all sizes · ICM: ITQ 0160–9000" },
  { icon: SensorsOutlinedIcon, name: "Position feedback", code: "PK · CT", text: "A potentiometer kit (0–1 kΩ) or a current transmitter (4–20 mA) geared to the drive shaft, for continuous valve position.", fits: "All sizes" },
  { icon: TuneOutlinedIcon, name: "Modulating control", code: "RPC", text: "Positions the valve from a 4–20 mA, 0–10 V, 2–10 V, 1–5 V or 0–5 V signal, with a 4–20 mA output, auto-calibration and reverse action. Modulating duty is S4, 30–50%, 300–1,200 starts an hour.", fits: "All sizes" },
  { icon: LanOutlinedIcon, name: "Bus communication", code: "Profibus · CANopen", text: "Connects the actuator to a Profibus or CANopen network.", fits: "With ICM2 / ICM3" },
  { icon: BatteryChargingFullOutlinedIcon, name: "Battery fail safe", code: "BP", text: "A rechargeable battery backup moves the valve to its pre-set fail position if mains power is lost. 24 VDC motor, open / close / alarm contacts.", fits: "1 phase, ITQ 0160–0500" },
  { icon: LocalFireDepartmentOutlinedIcon, name: "Explosion proof", code: "EX", text: "Ex d II B T4, listed by Susin I-Tork as approved by KTL, ATEX and NEPSI.", fits: "Option" },
  { icon: WaterOutlinedIcon, name: "Watertight", code: "WT", text: "IP68, double O-ring sealed, for temporary submersion: 10 m head for 100 hours.", fits: "Option" },
  { icon: RotateRightOutlinedIcon, name: "Extended travel", code: "EXT", text: "Travel angles of 120°, 135°, 180° or 270° instead of the standard 90°.", fits: "Not with a gearbox" },
];

export default function ItqOptions() {
  return (
    <Box component="section" aria-labelledby="h2-options" sx={{ pb: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Controls and options</Kicker>
          <H2 id="h2-options">Set It Up for Your Control System</H2>
          <Lead>Every ITQ has two limit switches, torque switches, a space heater and a declutchable handwheel. These options from Susin I-Tork’s catalogue add local control, feedback, modulating and fail-safe duty.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: 1.5 }}>
          {OPTIONS.map(({ icon: Icon, name, code, text, fits }) => (
            <Box key={name} sx={{ p: 2.5, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}`, display: "flex", flexDirection: "column", gap: 1.25 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
                <Box component="span" sx={{ width: 36, height: 36, borderRadius: "12px", bgcolor: T.greenSoft, color: T.greenDark, display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <Icon sx={{ fontSize: 20 }} />
                </Box>
                <Box>
                  <Box sx={{ fontSize: "1rem", fontWeight: 800, color: T.ink, lineHeight: 1.2 }}>{name}</Box>
                  <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.04em", color: T.muted }}>{code}</Box>
                </Box>
              </Box>
              <Box sx={{ fontSize: "0.86rem", color: T.body, lineHeight: 1.55, flex: 1 }}>{text}</Box>
              <Box sx={{ fontSize: "0.78rem", fontWeight: 700, color: T.greenDark }}>{fits}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
