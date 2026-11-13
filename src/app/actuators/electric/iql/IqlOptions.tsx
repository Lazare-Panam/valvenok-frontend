"use client";

// IQL optional controls, from the IQL catalogue (p.4): modulating, feedback,
// local control, integral unit, battery backup, explosion proof, display.

import { Box } from "@mui/material";
import type { SvgIconComponent } from "@mui/icons-material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import SettingsInputComponentOutlinedIcon from "@mui/icons-material/SettingsInputComponentOutlined";
import BatteryChargingFullOutlinedIcon from "@mui/icons-material/BatteryChargingFullOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import { T } from "@/src/app/Landing/modern/tokens";
import { wrap, Kicker, H2, Lead } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";

const OPTIONS: { icon: SvgIconComponent; name: string; code: string; text: string; fits: string }[] = [
  { icon: TuneOutlinedIcon, name: "Modulating control", code: "RPC", text: "Positions the valve from a 4–20 mA, 0–10, 2–10, 1–5 or 0–5 VDC signal. Can be fitted on site.", fits: "All models" },
  { icon: SensorsOutlinedIcon, name: "Position feedback", code: "PK · CT", text: "A potentiometer (0–1 kΩ) or a current transmitter with a 4–20 mA output.", fits: "All models" },
  { icon: ToggleOnOutlinedIcon, name: "Local control", code: "LP4 · LM4", text: "A local control unit for single phase, or for 3 phase with a reversing contactor and transformer, for commissioning and emergency operation.", fits: "All models" },
  { icon: SettingsInputComponentOutlinedIcon, name: "Integral unit", code: "ICM 1 / 2", text: "Local control with a phase discriminator.", fits: "IQL 08 to IQL 25" },
  { icon: BatteryChargingFullOutlinedIcon, name: "Battery backup", code: "BP", text: "Fail safe on power loss: the valve goes open, closed or stays put, as you choose.", fits: "All models" },
  { icon: LocalFireDepartmentOutlinedIcon, name: "Explosion proof", code: "Exd IIB T4", text: "An explosion-proof version, listed by Susin I-Tork as available.", fits: "Option" },
];

export default function IqlOptions() {
  return (
    <Box component="section" aria-labelledby="h2-options" sx={{ pb: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Controls and options</Kicker>
          <H2 id="h2-options">Set It Up for Your Control System</H2>
          <Lead>Every IQL runs on/off as standard, with limit switches, a space heater and a handwheel. These options from Susin I-Tork’s catalogue add modulating, feedback, local control and fail-safe duty.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(3, 1fr)" }, gap: 1.5 }}>
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
