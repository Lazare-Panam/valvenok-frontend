// IQL Series electric linear actuators (4–25 kN).
// Every value is from the Susin / i-Tork IQL catalogue (Electric - IQL.pdf):
// features p.2–3, technical data, electric data and options p.4.
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";

export const IQL_IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/iql.webp";
export const IQL_CATALOG = SUSIN_CATALOG.IQL;

export interface IQLModel {
  model: string; // "IQL 04"
  thrustKn: number;
  strokeMm: number;
  speed: string; // mm/s, 50 / 60 Hz
  weightKg: number;
  s4: string; // modulating duty
  // rated current (A)
  a110: [number, number]; // 1 phase 110 VAC, 50 / 60 Hz
  a220: [number, number];
  a380: [number, number]; // 3 phase
  a440: [number, number];
  aDc: number; // 24 VDC
  limit: string;
  force: string;
  stemThread: string;
  pcd: number; // mm, on flange
  pillar: string;
}

const SMALL_SW = { limit: "1 each for open / close", force: "Not fitted" };
const LARGE_SW = { limit: "2 each for open / close", force: "1 each for open / close" };

export const IQL_MODELS: IQLModel[] = [
  { model: "IQL 04", thrustKn: 4, strokeMm: 40, speed: "0.7 / 0.83", weightKg: 7, s4: "50%, 1,200 starts/h", a110: [0.45, 0.44], a220: [0.26, 0.25], a380: [0.30, 0.31], a440: [0.28, 0.40], aDc: 3.0, ...SMALL_SW, stemThread: "M20 max", pcd: 100, pillar: "M16" },
  { model: "IQL 06", thrustKn: 6, strokeMm: 40, speed: "0.7 / 0.83", weightKg: 8, s4: "50%, 1,200 starts/h", a110: [0.49, 0.48], a220: [0.29, 0.28], a380: [0.32, 0.33], a440: [0.30, 0.42], aDc: 3.5, ...SMALL_SW, stemThread: "M20 max", pcd: 100, pillar: "M16" },
  { model: "IQL 08", thrustKn: 8, strokeMm: 50, speed: "0.7 / 0.8", weightKg: 15, s4: "50%, 1,200 starts/h", a110: [0.92, 0.88], a220: [0.48, 0.46], a380: [0.18, 0.17], a440: [0.17, 0.16], aDc: 2.9, ...LARGE_SW, stemThread: "M20 max", pcd: 100, pillar: "M16" },
  { model: "IQL 10", thrustKn: 10, strokeMm: 50, speed: "0.7 / 0.8", weightKg: 16, s4: "50%, 1,200 starts/h", a110: [0.95, 0.91], a220: [0.50, 0.48], a380: [0.19, 0.18], a440: [0.18, 0.17], aDc: 3.2, ...LARGE_SW, stemThread: "M20 max", pcd: 100, pillar: "M16" },
  { model: "IQL 12", thrustKn: 12, strokeMm: 50, speed: "0.7 / 0.8", weightKg: 17, s4: "50%, 1,200 starts/h", a110: [0.98, 0.94], a220: [0.52, 0.50], a380: [0.20, 0.19], a440: [0.19, 0.18], aDc: 3.5, ...LARGE_SW, stemThread: "M20 max", pcd: 100, pillar: "M16" },
  { model: "IQL 20", thrustKn: 20, strokeMm: 100, speed: "0.85 / 1.1", weightKg: 20, s4: "50%, 800 starts/h", a110: [1.75, 1.68], a220: [0.93, 0.89], a380: [0.30, 0.30], a440: [0.32, 0.31], aDc: 6.0, ...LARGE_SW, stemThread: "M24 max", pcd: 165, pillar: "M20" },
  { model: "IQL 25", thrustKn: 25, strokeMm: 100, speed: "0.85 / 1.1", weightKg: 22, s4: "50%, 800 starts/h", a110: [1.80, 1.72], a220: [0.95, 0.92], a380: [0.32, 0.32], a440: [0.34, 0.33], aDc: 7.0, ...LARGE_SW, stemThread: "M24 max", pcd: 165, pillar: "M20" },
];

// Shared by every model
export const IQL_COMMON: [string, string][] = [
  ["Power supply", "24 VDC; 1 phase 110 / 220 VAC; 3 phase 380 / 440 VAC"],
  ["On-off duty", "S2, max. 30 min"],
  ["Manual override", "Handwheel with switchable, declutchable lever"],
  ["Position indication", "Scale on the pillar, read by an indicator"],
  ["Mounting", "Any direction except heading downward"],
  ["Enclosure", "IP67, EN 60529"],
  ["Housing", "Hard-anodised aluminium alloy, epoxy powder coated"],
  ["Motor protection", "Thermal protector, class F"],
  ["Space heater", "5 W (110 / 220 VAC)"],
  ["Cable entries", "2 × 3/4\" PF"],
  ["Ambient temperature", "−20 to +70 °C"],
  ["Pillars", "Stainless steel, or carbon steel with special surface treatment"],
];
