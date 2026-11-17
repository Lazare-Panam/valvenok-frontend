// PANDA series: compact electro-hydraulic part-turn actuators, low pressure
// (max 8 bar on board). Every value is from Susin I-Tork's hydraulic brochure
// "Product Information: Electro Hydraulic Actuator, High Pressure PA / Low
// Pressure PANDA": product description p.2, PANDA product selection p.3,
// technical data and dimensions p.4, schematic p.7.
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";

export const PANDA_IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/brands/susin/ktc-panda-pa.jpg";
export const PANDA_CATALOG = SUSIN_CATALOG.KTC_HYDRAULIC;

export type PandaKind = "Double acting" | "Spring return";

export interface PandaDims { a: number; b: number; c: number; oilL: number; flange: string; conn: string }

export interface PandaModel {
  code: string; // "D10"
  model: string; // "PANDA D10"
  kind: PandaKind;
  torqueNm: number | null; // double acting open / close; spring return: hydraulic open at start
  open?: [number, number]; // spring return: hydraulic open 0°→90°, start / end
  close?: [number, number]; // spring return: spring close 90°→0°, start / end
  dims: PandaDims | null; // the brochure lists the smaller sizes only
}

// p.4 dimensions (E10 shares a row with D20, E15 with D30)
const DIM: Record<string, PandaDims> = {
  D10: { a: 410, b: 298, c: 210, oilL: 0.3, flange: "F05 / F07", conn: "DS 14 × 16" },
  D15: { a: 460, b: 306, c: 210, oilL: 0.6, flange: "F05 / F07", conn: "DS 14 × 18" },
  D20: { a: 460, b: 332, c: 210, oilL: 0.6, flange: "F05 / F07", conn: "DS 17 × 19" },
  E10: { a: 460, b: 279, c: 210, oilL: 0.6, flange: "F05 / F07", conn: "DS 17 × 19" },
  D30: { a: 640, b: 350, c: 210, oilL: 1.5, flange: "F07 / F10", conn: "DS 17 × 24" },
  E15: { a: 640, b: 292, c: 210, oilL: 1.5, flange: "F07 / F10", conn: "DS 17 × 24" },
  E20: { a: 640, b: 314, c: 210, oilL: 1.5, flange: "F07 / F10", conn: "DS 22 × 30" },
  E30: { a: 640, b: 321, c: 210, oilL: 1.5, flange: "F07 / F10", conn: "DS 22 × 34" },
};

const DA: [string, number][] = [
  ["D10", 46], ["D15", 93], ["D20", 146], ["D30", 213], ["D40", 344], ["D50", 443], ["D60", 696],
  ["D70", 908], ["D80", 1225], ["D90", 1702], ["D100", 2859], ["D110", 4150], ["D120", 5744], ["D130", 7207],
];

// [code, open (hydraulic) start / end, close (spring) start / end]
// E40: p.3 prints the same torques as E20 (245/187, 157/98); shown as printed,
// with a note that torque is confirmed on the quote.
const SR: [string, [number, number] | null, [number, number] | null][] = [
  ["E10", [102, 77], [69, 44]], ["E15", [152, 118], [94, 60]], ["E20", [245, 187], [157, 98]],
  ["E30", [371, 245], [198, 126]], ["E40", [245, 187], [157, 98]], ["E50", [638, 509], [399, 269]],
  ["E60", [846, 657], [568, 379]], ["E70", [1192, 946], [756, 510]], ["E80", [1994, 1608], [1251, 865]],
  ["E90", [2840, 2228], [1922, 1309]], ["E100", [3989, 3124], [2620, 1754]],
  ["E110", [4099, 3335], [2971, 2207]], ["E120", [9274, 7403], [5939, 4068]],
];

export const PANDA_MODELS: PandaModel[] = [
  ...DA.map(([code, nm]): PandaModel => ({ code, model: `PANDA ${code}`, kind: "Double acting", torqueNm: nm, dims: DIM[code] ?? null })),
  ...SR.map(([code, open, close]): PandaModel => ({ code, model: `PANDA ${code}`, kind: "Spring return", torqueNm: open ? open[0] : null, open: open ?? undefined, close: close ?? undefined, dims: DIM[code] ?? null })),
];

// Shared by every model (p.4)
export const PANDA_COMMON: [string, string][] = [
  ["On-board pressure", "Max 8.0 bar"],
  ["Motor voltage", "400 V 50/60 Hz or 230 V 50 Hz"],
  ["Power consumption", "180 – 250 W"],
  ["Solenoid valve", "24 VDC or 230 V 50 Hz"],
  ["Speed", "Adjustable by throttle"],
  ["Medium", "Hydraulic oil HLP, filtered min. 10 µm"],
  ["Ambient temperature", "−20 to +50 °C"],
  ["Hazardous areas", "Zone 1 and 2 (ATEX certified option)"],
  ["Rotation", "90°, adjustable"],
  ["Control", "Open / close (O) or modulating (M)"],
  ["Valve connection", "D, L or DS; ISO 5211 flange"],
  ["Options", "ATEX (EX), SIL 2 (S2), limit switch box (EB), potentiometer (PM), on-board control box (OB)"],
];
