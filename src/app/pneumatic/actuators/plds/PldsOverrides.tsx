"use client";

// PLDS manual override options, from Susin's PLDS catalogue (Pneumatic - PLDS.pdf,
// "Linear piston actuator with manual overrides", Types 1–4).
import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

type Row = { size: string; thrustN: number; thrustLbs: number; model?: string };

const jack: Row[] = [
  ["PLDS-100", 30897, 6946], ["PLDS-125", 30897, 6946], ["PLDS-160", 30897, 6946], ["PLDS-180", 30897, 6946],
  ["PLDS-200", 79085, 17780], ["PLDS-230", 79085, 17780], ["PLDS-250", 79085, 17780], ["PLDS-280", 79085, 17780],
  ["PLDS-300", 140997, 31699], ["PLDS-350", 140997, 31699], ["PLDS-380", 140997, 31699],
].map(([size, n, l]) => ({ size: size as string, thrustN: n as number, thrustLbs: l as number }));

const mtg: Row[] = [
  ["100", 160000, 35971, "MTG-100"], ["125", 160000, 35971, "MTG-100"], ["160", 160000, 35971, "MTG-100"], ["180", 160000, 35971, "MTG-100"], ["200", 160000, 35971, "MTG-100"],
  ["230", 240000, 53957, "MTG-200"], ["250", 240000, 53957, "MTG-200"], ["280", 240000, 53957, "MTG-200"], ["300", 240000, 53957, "MTG-200"], ["350", 240000, 53957, "MTG-200"],
  ["380", 240000, 53957, "MTG-200"], ["430", 240000, 53957, "MTG-200"], ["480", 240000, 53957, "MTG-200"], ["530", 300000, 67446, "MTG-300"], ["580", 380000, 85432, "MTG-400"],
  ["630", 380000, 85432, "MTG-400"], ["680", 600000, 134892, "MTG-650"], ["730", 600000, 134892, "MTG-650"], ["780", 600000, 134892, "MTG-650"], ["830", 870000, 195594, "MTG-900"],
  ["880", 870000, 195594, "MTG-900"], ["930", 870000, 195594, "MTG-900"], ["980", 1800000, 404676, "MTG-1800"],
].map(([s, n, l, m]) => ({ size: `PLDS-${s}`, thrustN: n as number, thrustLbs: l as number, model: m as string }));

const mab: Row[] = [
  ["100", 75000, 16862, "MAB-075"], ["125", 75000, 16862, "MAB-075"], ["160", 75000, 16862, "MAB-075"], ["180", 75000, 16862, "MAB-075"], ["200", 75000, 16862, "MAB-075"],
  ["230", 75000, 16862, "MAB-075"], ["250", 75000, 16862, "MAB-075"], ["280", 75000, 16862, "MAB-075"], ["300", 75000, 16862, "MAB-075"], ["350", 100000, 22482, "MAB-100"],
  ["380", 100000, 22482, "MAB-100"], ["430", 150000, 33723, "MAB-150"], ["480", 200000, 44964, "MAB-200"], ["530", 300000, 67446, "MAB-300"], ["580", 350000, 78687, "MAB-350"],
  ["630", 400000, 89928, "MAB-400"], ["680", 500000, 112410, "MAB-500"], ["730", 500000, 112410, "MAB-500"], ["780", 800000, 179856, "MAB-800"], ["830", 800000, 179856, "MAB-800"],
  ["880", 800000, 179856, "MAB-800"], ["930", 800000, 179856, "MAB-800"], ["980", 1200000, 269784, "MAB-1200"],
].map(([s, n, l, m]) => ({ size: `PLDS-${s}`, thrustN: n as number, thrustLbs: l as number, model: m as string }));

// Hydraulic manual override: [size, pump model N, inch, output thrust N, lbs]
const hmor = [
  ["530", 200, 8, 134303, 30194], ["580", 250, 10, 225629, 50726], ["630", 250, 10, 225629, 50726], ["680", 250, 10, 225629, 50726],
  ["730", 280, 11, 281029, 63181], ["780", 280, 11, 281029, 63181], ["830", 320, 13, 343816, 77297], ["880", 320, 13, 343816, 77297],
  ["930", 320, 13, 343816, 77297], ["980", 320, 13, 343816, 77297],
] as const;

const TYPES = [
  { key: "jack", name: "Jack screw", title: "Type 1: Jack screw", text: "Direct manual control without a gear mechanism: compact, simple and independent of the air supply. For PLDS-100 to PLDS-380." },
  { key: "mtg", name: "MTG worm gear", title: "Type 2: Multi-turn worm gear (MTG)", text: "Side-mounted worm gear override, self-locking, with large ratios for low-speed, high-thrust operation. MTG-100 to MTG-1800, matched to each PLDS size." },
  { key: "mab", name: "MAB bevel gear", title: "Type 3: Multi-turn bevel gear (MAB)", text: "Right-angle bevel gear override for high thrust with low backlash and even load distribution. MAB-075 to MAB-1200, matched to each PLDS size." },
  { key: "hmor", name: "Hydraulic (HMOR)", title: "Type 4: Hydraulic manual override (HMOR)", text: "Hand pump override with a built-in relief valve, pressure regulator and dial gauge, for backup control if the air system fails. For PLDS-530 to PLDS-980." },
];

const n = (v: number) => v.toLocaleString("en-GB");
const th = { bgcolor: "#f0f4ef", fontWeight: 700, fontSize: "0.72rem", textTransform: "uppercase" as const, letterSpacing: 1, whiteSpace: "nowrap" as const };

export default function PldsOverrides() {
  const [t, setT] = useState("mtg");
  const cur = TYPES.find((x) => x.key === t)!;
  const rows = t === "jack" ? jack : t === "mtg" ? mtg : mab;
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>Manual Override Options</Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, textTransform: "none", maxWidth: 820 }}>
          PLDS linear actuators can be supplied with one of four manual overrides, to move the valve by hand when there is no air. Figures from Susin’s PLDS catalogue.
        </Typography>
        <Box role="tablist" sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
          {TYPES.map((x) => {
            const on = x.key === t;
            return (
              <Box key={x.key} component="button" type="button" role="tab" aria-selected={on} onClick={() => setT(x.key)}
                sx={{ cursor: "pointer", fontFamily: "inherit", px: 2, py: 1, borderRadius: 999, border: `1px solid ${on ? "#2E8B1E" : "rgba(0,0,0,0.15)"}`, bgcolor: on ? "#2E8B1E" : "#fff", color: on ? "#fff" : "#1c2e1a", fontWeight: 700, fontSize: "0.88rem" }}>
                {x.name}
              </Box>
            );
          })}
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 700, textTransform: "none" }}>{cur.title}</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2.5, textTransform: "none", maxWidth: 820 }}>{cur.text}</Typography>
        <Box sx={{ textTransform: "none", overflowX: "auto", border: "1px solid rgba(0,0,0,0.12)", borderRadius: 2 }}>
          <Box component="table" sx={{ width: "100%", borderCollapse: "collapse", minWidth: 560, "& th, & td": { px: 2, py: 1.1, textAlign: "left", borderBottom: "1px solid rgba(0,0,0,0.08)", fontSize: "0.88rem" }, "& th": th }}>
            {t === "hmor" ? (
              <>
                <thead><tr><th>Actuator size</th><th>Pump model (mm / inch)</th><th>Output thrust (N)</th><th>Output thrust (lbs)</th></tr></thead>
                <tbody>
                  {hmor.map(([s, mm, inch, tn, tl]) => (
                    <tr key={s}><td style={{ fontWeight: 700 }}>PLDS-{s}</td><td>{mm} / {inch}</td><td>{n(tn)}</td><td>{n(tl)}</td></tr>
                  ))}
                </tbody>
              </>
            ) : (
              <>
                <thead><tr><th>Actuator size</th>{t !== "jack" && <th>Override model</th>}<th>Max thrust (N)</th><th>Max thrust (lbs)</th><th>Turns per mm / inch</th><th>Rim pull (N / lbs)</th></tr></thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.size}><td style={{ fontWeight: 700 }}>{r.size}</td>{t !== "jack" && <td>{r.model}</td>}<td>{n(r.thrustN)}</td><td>{n(r.thrustLbs)}</td><td>0.3 / 8.4</td><td>360 / 81</td></tr>
                  ))}
                </tbody>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
