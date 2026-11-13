// ITL Series electric linear actuators (1–6 kN).
// Every value is from the Susin I-Tork ITL catalogue (Electric - ITL.pdf):
// features p.2–3, technical data p.4, options p.5, ITL / IQL comparison p.7.
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";

export const ITL_IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itl.webp";
export const ITL_CATALOG = SUSIN_CATALOG.ITL;

export interface ITLModel {
  model: string; // "ITL01"
  thrustKn: number;
  stroke: string; // mm, min–max
  current: string; // A, min–max
  time: string; // s, min–max over the stroke
  weightKg: number;
  size: string; // Ø × H, mm, without handwheel
  body: "ITL01 / ITL02" | "ITL04 / ITL06";
}

const SMALL = { stroke: "15 – 25", current: "0.5 – 1.0", time: "16.7 – 25.0", weightKg: 4.5, size: "Ø122 × 373", body: "ITL01 / ITL02" } as const;
const LARGE = { stroke: "40 – 50", current: "1.5 – 1.9", time: "33.3 – 41.7", weightKg: 6, size: "Ø148 × 482", body: "ITL04 / ITL06" } as const;

export const ITL_MODELS: ITLModel[] = [
  { model: "ITL01", thrustKn: 1, ...SMALL },
  { model: "ITL02", thrustKn: 2, ...SMALL },
  { model: "ITL04", thrustKn: 4, ...LARGE },
  { model: "ITL06", thrustKn: 6, ...LARGE },
];

// Shared by every model
export const ITL_COMMON: [string, string][] = [
  ["Actuator speed", "1.2 mm/s, adjustable 70–130% without loss of force"],
  ["Main power", "AC 100–240 V universal, 50 / 60 Hz; or AC / DC 24 V"],
  ["Duty cycle, on-off", "Continuous duty"],
  ["Duty cycle, modulating", "Over 1,200 starts an hour"],
  ["Control signal", "4–20 mA in and out (option 0–10, 0–5, 1–5, 2–10 VDC)"],
  ["Limit switches", "2, open and close (SPDT 3 A 250 VAC)"],
  ["Force switches", "2, open and close (SPDT 3 A 250 VAC)"],
  ["Aux. force switches", "2, open and close (option)"],
  ["Space heater", "2 W"],
  ["Enclosure", "IP66 & IP67"],
  ["Ambient temperature", "−20 to +70 °C"],
  ["Cable entries", "2 × PF 1/2 (option M20 × 1.5, NPT 1/2, G 1/2)"],
  ["Housing", "Hard-anodised aluminium, powder coated"],
  ["Valves", "2-way and 3-way, mounted at 90°"],
];

// ITL / IQL comparison, catalogue p.7
export const ITL_IQL = {
  head: ["", "ITL01 / 02", "ITL04 / 06", "IQL04", "IQL06", "IQL08", "IQL10"],
  rows: [
    ["Thrust (kN)", "1 / 2", "4 / 6", "4", "6", "8", "10"],
    ["Stroke (mm)", "15 – 25", "40 – 50", "40", "40", "50", "50"],
    ["Speed (mm/s)", "1.2", "1.2", "0.83", "0.90", "0.80", "0.80"],
    ["Main power", "AC 100–240 V, 24 V", "AC 100–240 V, 24 V", "AC 110–440 V, 24 V", "AC 110–440 V, 24 V", "AC 110–440 V, 24 V", "AC 110–440 V, 24 V"],
    ["On-off duty", "Continuous", "Continuous", "S2 30 min", "S2 30 min", "S2 30 min", "S2 30 min"],
    ["Force switches", "2", "2", "None", "None", "2", "2"],
    ["Enclosure", "IP66 & IP67", "IP66 & IP67", "IP66", "IP66", "IP66", "IP66"],
    ["Weight (kg)", "4.5", "6.0", "7.0", "8.0", "15.0", "16.0"],
  ],
};
