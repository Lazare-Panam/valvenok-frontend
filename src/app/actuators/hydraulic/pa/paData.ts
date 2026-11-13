// PA series: compact electro-hydraulic part-turn actuators, high pressure
// (max 180 bar on board). Every value is from Susin I-Tork's hydraulic brochure
// "Product Information: Electro Hydraulic Actuator, High Pressure PA / Low
// Pressure PANDA": PA product selection p.5, technical data and dimensions p.6,
// schematic p.7.
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";

export const PA_IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/brands/susin/ktc-panda-pa.jpg";
export const PA_CATALOG = SUSIN_CATALOG.KTC_HYDRAULIC;

export type PaKind = "Double acting" | "Spring return";
export interface PaDims { a: number; b: number; c: number; oilL: number; flange: string; conn: string }
export interface PaModel {
  code: string;
  model: string;
  kind: PaKind;
  torqueNm: number; // double acting open / close; spring return: hydraulic open at start
  open?: [number, number]; // spring return: hydraulic open 0°→90°, start / end
  close?: [number, number]; // spring return: spring close 90°→0°, start / end
  dims: PaDims | null; // p.6 lists dimensions for the spring return sizes only
}

const DA: [string, number][] = [["D10", 250], ["D15", 500], ["D20", 1000], ["D30", 1500], ["D60", 4000]];

const SR: [string, [number, number], [number, number], PaDims][] = [
  ["E30", [222, 145], [142, 65], { a: 526, b: 300, c: 232, oilL: 0.3, flange: "F10", conn: "DS 14 × 20" }],
  ["E40", [451, 263], [444, 256], { a: 673, b: 355, c: 252, oilL: 0.3, flange: "F12", conn: "DS 22 × 35" }],
  ["E50", [896, 499], [914, 517], { a: 834, b: 350, c: 260, oilL: 0.3, flange: "F12", conn: "DS 27 × 40" }],
  ["E60", [2100, 1156], [2024, 1081], { a: 1117, b: 410, c: 277, oilL: 1.0, flange: "F14", conn: "DS 36 × 40" }],
];

export const PA_MODELS: PaModel[] = [
  ...DA.map(([code, nm]): PaModel => ({ code, model: `PA ${code}`, kind: "Double acting", torqueNm: nm, dims: null })),
  ...SR.map(([code, open, close, dims]): PaModel => ({ code, model: `PA ${code}`, kind: "Spring return", torqueNm: open[0], open, close, dims })),
];

// Shared by every model (p.6, p.7). The technical data page prints the same
// power figure as PANDA (180–250 W); the schematic gives 250–750 W for PA.
export const PA_COMMON: [string, string][] = [
  ["On-board pressure", "Max 180 bar"],
  ["Motor voltage", "400 V 50/60 Hz or 230 V 50 Hz"],
  ["Motor power", "250 – 750 W"],
  ["Solenoid valve", "24 VDC or 230 V 50 Hz"],
  ["Speed", "Adjustable by throttle"],
  ["Medium", "Hydraulic oil HLP, filtered min. 10 µm"],
  ["Ambient temperature", "−20 to +50 °C"],
  ["Hazardous areas", "Zone 1 and 2 (Ex-proof option)"],
  ["Rotation", "90°, adjustable"],
  ["Control", "Open / close or modulating"],
  ["Valve connection", "D, L or DS; ISO 5211 flange"],
  ["Options", "Ex-proof, SIL 2, limit switch box, potentiometer, on-board control box"],
];
