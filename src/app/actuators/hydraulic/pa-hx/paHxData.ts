// PA-HX series: hydraulic rack & pinion part-turn actuators, 80–160 bar.
// Every value is from the hydraulic & electro-hydraulic actuator data sheet
// (Hydraulic - HLP.pdf): rack & pinion introduction p.10, double acting p.11,
// spring to close p.12, spring to open p.13, construction of material p.17.
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";

export const PAHX_IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/brands/susin/pa-hx.jpg";
export const PAHX_CATALOG = SUSIN_CATALOG.HLP;

export type PaHxKind = "Double acting" | "Spring to close" | "Spring to open";
export interface PaHxModel {
  code: string; // "D005", "E10-SC"
  model: string; // "PA-HX D005"
  kind: PaHxKind;
  torqueNm: number; // DA: at 100 bar; SC: spring end torque; SO: spring start torque
  a: number; b: number; c: number; // mm
  shaft: [number, number, number, number]; // max D: 4KtP, 4KtD, 2Fl, Ws/Wd (mm)
  flange: string; // ISO 5211 / DIN EN
  box: string | null; // switch box interface a/b/c/d
  weightKg: number;
  oilL: number;
}

type Row = [string, number, number, number, number, number, number, number, number, string, string | null, number, number];
const make = (kind: PaHxKind, rows: Row[]): PaHxModel[] =>
  rows.map((r) => ({ code: r[0], model: `PA-HX ${r[0]}`, kind, torqueNm: r[1], a: r[2], b: r[3], c: r[4], shaft: [r[5], r[6], r[7], r[8]], flange: r[9], box: r[10], weightKg: r[11], oilL: r[12] }));

// [code, torque, A, B, C, 4KtP, 4KtD, 2Fl, Ws/Wd, flange, switch box, kg, oil L]
export const PAHX_MODELS: PaHxModel[] = [
  ...make("Double acting", [
    ["D005", 90, 200, 110, 96, 14, 14, 14, 16, "F05 – F07", null, 9, 0.016],
    ["D010", 220, 270, 120, 115, 17, 17, 17, 20, "F05 – F07", null, 15, 0.04],
    ["D020", 400, 290, 150, 155, 24, 24, 22, 30, "F07 – F10", null, 18, 0.07],
    ["D040", 600, 300, 160, 155, 30, 30, 27, 40, "F10 – F14", null, 25, 0.08],
    ["D041", 1200, 500, 205, 185, 40, 40, 40, 55, "F14 – F16", null, 43, 0.36],
    ["D042", 900, 400, 160, 155, 30, 30, 27, 40, "F12 – F14", null, 25, 0.16],
    ["D043", 2150, 500, 205, 185, 40, 40, 40, 55, "F14 – F16", null, 45, 0.4],
    ["D045", 4500, 630, 265, 230, 55, 55, 50, 65, "F16 – F25", null, 97, 0.9],
    ["D110", 10000, 835, 365, 285, 75, 75, 75, 90, "F16 – F30", null, 248, 1.9],
  ]),
  ...make("Spring to close", [
    ["E10-SC", 35, 275, 110, 100, 14, 14, 14, 16, "F05 – F07", "30/80/20/18", 10, 0.02],
    ["E20-SC", 90, 380, 130, 115, 17, 17, 17, 20, "F05 – F07", "30/80/20/22", 20, 0.04],
    ["E30-SC", 160, 530, 160, 155, 24, 24, 22, 30, "F07 – F10", "30/80/20/28", 25, 0.075],
    ["E40-SC", 400, 660, 170, 155, 30, 30, 27, 40, "F10 – F14", "30/80/20/28", 55, 0.16],
    ["E50-SC", 860, 805, 230, 180, 40, 40, 40, 55, "F10 – F16", "30/130/20/36", 85, 0.4],
    ["E70-SC", 1900, 1100, 300, 230, 55, 55, 55, 65, "F14 – F25", "30/155/30/48", 155, 0.9],
    ["E75-SC", 2400, 1100, 300, 230, 55, 55, 55, 65, "F14 – F25", "30/155/30/48", 160, 1.1],
    ["E90-SC", 4000, 1300, 405, 285, 75, 75, 75, 90, "F16 – F30", "40/210/60/30", 320, 1.9],
    ["E110-SC", 8000, 1680, 510, 285, 75, 75, 75, 90, "F16 – F30", "10/210/30/30", 640, 3.7],
  ]),
  ...make("Spring to open", [
    ["E05-SO", 45, 210, 110, 100, 14, 14, 14, 16, "F05 – F07", "30/80/20/18", 10, 0.016],
    ["E20-SO", 100, 355, 130, 115, 17, 17, 17, 20, "F05 – F07", "30/80/20/22", 20, 0.04],
    ["E25-SO", 180, 485, 160, 155, 24, 24, 22, 30, "F07 – F10", "30/80/20/28", 25, 0.075],
    ["E40-SO", 455, 635, 170, 155, 30, 30, 27, 40, "F10 – F14", "30/80/20/28", 45, 0.16],
    ["E50-SO", 940, 750, 230, 180, 40, 40, 40, 55, "F10 – F16", "30/130/20/36", 80, 0.4],
    ["E72-SO", 2225, 1050, 300, 230, 55, 55, 55, 65, "F14 – F25", "30/155/30/48", 150, 0.9],
    ["E78-SO", 4160, 1265, 405, 285, 75, 75, 75, 90, "F16 – F30", null, 360, 1.9],
    ["E110-SO", 8320, 1765, 510, 285, 75, 75, 75, 90, "F16 – F30", null, 620, 3.7],
  ]),
];

export const TORQUE_LABEL: Record<PaHxKind, string> = {
  "Double acting": "Torque at 100 bar",
  "Spring to close": "Spring end torque",
  "Spring to open": "Spring start torque",
};

// Shared by every model (p.10–13, p.17)
export const PAHX_COMMON: [string, string][] = [
  ["Working pressure", "80 – 160 bar"],
  ["Hydraulic fluid", "HLP 15…46, DIN 51524-2 / ISO 6743-4"],
  ["Ambient temperature", "−10 to +60 °C (option −40 to +80 °C)"],
  ["Hydraulic connection", "Female thread 1/4\", 3/8\" or 1/2\""],
  ["Valve block", "Customised block available (solenoid valves, pressure reducing valves etc.)"],
  ["Mounting", "ISO 5211, DIN 3337, NAMUR, VDI/VDE 3845"],
  ["Hazardous areas", "ATEX conformity"],
  ["Protection", "Submersible on request"],
  ["Hand pump", "Available"],
  ["Limit switches", "Wide range available (mechanical, proximity)"],
  ["Rack and pinion", "V2A stainless steel"],
  ["Housing and covers", "S235JR steel"],
];
