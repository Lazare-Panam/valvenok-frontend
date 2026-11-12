// ITG Series declutchable worm gear actuators (manual override), 60–28,000 Nm.
// Every value is from the Susin ITG catalogue (Mechanical - ITG.pdf, scanned):
// application, features and declutch mechanism p.2, technical specifications
// p.3, dimensions p.4 (general), p.5 (single stage helical reduction, 1S),
// p.6 (double stage, 2S), materials, handwheels and rim effort chart p.7.
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";
import type { GearStage } from "@/src/app/pneumatic/actuators/_series/gearTypes";

const BLOB = "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/mechanical";
export const ITG_IMAGE = `${BLOB}/itg.webp`;
// From the catalogue (p.2): an ITG between a pneumatic actuator and a butterfly valve
export const ITG_ON_VALVE = `${BLOB}/itg-on-valve.webp`;
export const ITG_CATALOG = SUSIN_CATALOG.ITG;

export interface ITGDims {
  type: "A" | "B"; // ISO 5211 bolt pattern
  pcd: number; // valve and actuator flange PCD
  l: number; l1: number; l2: number; l3: number; l4: number; l5: number; // *L1, *L3, *L4 customised
  h1: number; h2: number; h3: number; h4: number; h5: number | null;
  s: string; // *S drive bore, customised
  d1: number | null; d2: number | null; d3: number; d4: number; // *D4 handwheel, customised
}

export interface ITGModel {
  model: string;
  size: string;
  stage: GearStage;
  torqueNm: number;
  torqueLbft: number;
  ma: number;
  ratio: string;
  flange: string; // valve mounting ISO 5211 standard
  flangeOpt: string;
  actFlange: string; // actuator mounting ISO 5211 standard
  actFlangeOpt: string | null;
  turns: number;
  handwheel: number;
  rimKg: number;
  weightKg: number;
  dims: ITGDims;
}

type Row = [string, number, number, number, string, string, string, string, string | null, number, number, number, number];
// [model, Nm, ft-lbs, MA, ratio, valve std, valve opt, actuator std, actuator opt, turns, handwheel Ø, rim pull kg, kg]  (p.3)
type Dim = [ITGDims["type"], number, number, number, number, number, number, number, number, number, number, number, number | null, string, number | null, number | null, number, number];
// [type, PCD, L, *L1, L2, *L3, *L4, L5, H1, H2, H3, H4, H5, *S, D1, D2, D3, *D4]  (p.4–6)

const build = (stage: GearStage, rows: [Row, Dim][]): ITGModel[] =>
  rows.map(([r, d]) => ({
    model: r[0], size: r[0].replace(/-(1S|2S)$/, ""), stage,
    torqueNm: r[1], torqueLbft: r[2], ma: r[3], ratio: r[4], flange: r[5], flangeOpt: r[6], actFlange: r[7], actFlangeOpt: r[8], turns: r[9], handwheel: r[10], rimKg: r[11], weightKg: r[12],
    dims: { type: d[0], pcd: d[1], l: d[2], l1: d[3], l2: d[4], l3: d[5], l4: d[6], l5: d[7], h1: d[8], h2: d[9], h3: d[10], h4: d[11], h5: d[12], s: d[13], d1: d[14], d2: d[15], d3: d[16], d4: d[17] },
  }));

const STANDARD = build("Standard", [
  [["ITG-012", 60, 44.25, 6, "30:1", "F05", "F07", "F05", null, 7.5, 100, 20.41, 4.5], ["A", 70, 20, 86, 45, 121, 176, 44, 37, 92, 18, 99, null, "SQ 11", null, null, 12, 110]],
  [["ITG-025", 125, 92.2, 7, "36:1", "F07", "F05", "F07", null, 9, 200, 18.22, 5], ["A", 70, 20, 100, 53, 129, 205, 49.5, 44, 112.5, 18.5, 107.5, null, "SQ 17", null, null, 15, 200]],
  [["ITG-045", 300, 221.27, 8, "40:1", "F10", "F07", "F10", null, 10, 250, 30.61, 5.5], ["A", 102, 24, 107.5, 66, 150, 241.5, 61.5, 49, 122, 22, 121, null, "SQ 22", null, null, 15, 250]],
  [["ITG-080", 650, 479.42, 10, "36:1", "F12", "F10", "F12", "F10", 9, 400, 33.16, 14.5], ["A", 125, 23, 150, 88.5, 220.5, 347, 80, 63.7, 161.2, 24.5, 147.5, 3, "SQ 27", 70, 123, 17, 400]],
  [["ITG-100", 800, 590.05, 10, "36:1", "F12", "F10", "F12", "F10", 9, 500, 32.65, 15], ["A", 125, 23, 150, 88.5, 220.5, 347, 80, 63.7, 161.2, 24.5, 147.5, 3, "SQ 27", 70, 123, 17, 400]],
  [["ITG-200", 1600, 1180.1, 11, "40:1", "F14", "F12", "F14", "F12", 10, 500, 59.37, 25], ["A", 140, 38, 249.5, 111.75, 295, 444, 104, 80, 210, 34, 162, 4, "SQ 36", 100, 166, 17, 400]],
  [["ITG-300", 2600, 1917.66, 16.5, "52:1", "F16", "F20", "F16", "F20", 13, 600, 53.6, 39], ["A", 165, 35, 197.8, 126.5, 325.6, 468, 120, 93.5, 251, 36, 190, 5, "SQ 40", 130, 240, 20, 600]],
  [["ITG-400", 3600, 2655.22, 16.5, "52:1", "F16", "F20", "F16", "F20", 13, 600, 74.21, 57], ["B", 165, 35, 175.5, 143.5, 315.5, 502, 145, 117.5, 285, 80, 190.2, 5, "SQ 46", 130, 250, 20, 600]],
  [["ITG-650", 5600, 4130.35, 17, "48:1", "F20", "F16", "F20", "F16", 12, 600, 112.04, 67], ["B", 205, 38, 260, 156, 337, 580, 180, 126, 311.5, 43, 238.5, 5, "SQ 48", 130, 290, 30, 600]],
  [["ITG-900", 8000, 5900.5, 18.5, "62:1", "F25", "F30", "F25", "F30", 15.5, 710, 124.3, 110], ["B", 254, 40, 329, 193, 447.8, 688, 180, 154, 379, 53, 255.5, 5, "SQ 55", 230, 350, 23, 560]],
  [["ITG-1200", 10500, 7744.4, 19.5, "68:1", "F30", "F25", "F30", "F25", 17, 710, 154.77, 121], ["B", 298, 40, 337.5, 185.5, 467.5, 715, 200, 168, 403, 80, 276.5, 5, "SQ 55", 230, 360, 25, 710]],
  [["ITG-1500", 13500, 9957.09, 20, "58:1", "F30", "F25", "F30", "F25", 14.5, 800, 172.19, 135], ["B", 298, 40, 360, 200, 520, 750, 220, 180, 420, 80, 300, 5, "SQ 55", 250, 380, 25, 710]],
  [["ITG-1800", 16000, 11800.99, 20, "62:1", "F30", "F25", "F30", "F25", 15.5, 850, 192.08, 155], ["B", 298, 35, 430, 206, 543, 790, 250, 190, 450, 128.5, 307.5, 5, "Ø110", 230, 350, 35, 800]],
  [["ITG-2400", 21000, 15488.81, 20, "56:1", "F35", "F30", "F35", "F30", 14, 900, 238.1, 180], ["B", 356, 40, 430, 210, 560, 820, 280, 220, 480, 130, 320, 5, "Ø120", 250, 380, 35, 800]],
  [["ITG-3200", 28000, 20651.74, 21, "58:1", "F35", "F30", "F35", "F30", 14.5, 900, 302.34, 230], ["B", 356, 45, 480, 250, 600, 860, 320, 260, 540, 140, 350, 5, "Ø150", 280, 420, 35, 800]],
]);

// p.5 prints PCD Ø125 for the ITG-400-1S F16 flange; ISO 5211 F16 is 165, as on the ITG-400
// p.5–6 draw the ITG-1800-1S / -2S with an F30 flange (PCD 298) though p.3 lists F35 as the valve standard
const SINGLE = build("1S", [
  [["ITG-400-1S", 3600, 2655.22, 37.46, "130:1", "F16", "F20", "F16", "F20", 32.5, 600, 32.69, 67], ["B", 165, 35, 275.5, 143.5, 415.5, 602, 145, 117.5, 285, 80, 190.2, 5, "SQ 46", 130, 250, 20, 600]],
  [["ITG-650-1S", 5600, 4130.35, 47.6, "144:1", "F20", "F16", "F20", "F16", 36, 600, 40.02, 77], ["B", 205, 38, 360, 156, 437, 680, 180, 126, 311.5, 43, 238.5, 5, "SQ 48", 130, 290, 30, 600]],
  [["ITG-900-1S", 8000, 5900.5, 51.8, "186:1", "F25", "F30", "F25", "F30", 46.5, 710, 44.39, 120], ["B", 254, 40, 429, 193, 547.8, 788, 180, 154, 379, 53, 255.5, 5, "SQ 55", 230, 350, 23, 560]],
  [["ITG-1200-1S", 10500, 7744.4, 54.6, "204:1", "F30", "F25", "F30", "F25", 51, 710, 55.28, 131], ["B", 298, 40, 437.5, 185.5, 567.5, 815, 200, 168, 403, 80, 276.5, 5, "SQ 55", 230, 360, 25, 710]],
  [["ITG-1500-1S", 13500, 9957.09, 76, "232:1", "F30", "F25", "F30", "F25", 58, 850, 42.65, 145], ["B", 298, 40, 460, 200, 620, 850, 220, 180, 420, 80, 300, 5, "SQ 55", 250, 380, 25, 710]],
  [["ITG-1800-1S", 16000, 11800.99, 76, "248:1", "F35", "F30", "F30", "F25", 62, 850, 50.55, 170], ["B", 298, 35, 530, 206, 643, 890, 250, 190, 450, 128.5, 307.5, 5, "Ø110", 230, 350, 35, 800]],
  [["ITG-2400-1S", 21000, 15488.81, 76, "224:1", "F35", "F30", "F35", "F30", 56, 900, 62.66, 205], ["B", 356, 40, 530, 210, 660, 920, 280, 220, 480, 130, 320, 5, "Ø120", 250, 380, 35, 800]],
  [["ITG-3200-1S", 28000, 20651.74, 79.8, "232:1", "F35", "F30", "F35", "F30", 58, 900, 79.56, 240], ["B", 356, 45, 580, 250, 700, 960, 320, 260, 540, 140, 350, 5, "Ø150", 280, 420, 35, 800]],
]);

const DOUBLE = build("2S", [
  [["ITG-900-2S", 8000, 5900.5, 145.04, "558:1", "F25", "F30", "F25", "F30", 139.5, 710, 15.85, 135], ["B", 254, 40, 479, 193, 597.8, 838, 180, 154, 379, 53, 255.5, 5, "SQ 55", 230, 350, 23, 560]],
  [["ITG-1200-2S", 10500, 7744.4, 152.88, "612:1", "F30", "F25", "F30", "F25", 153, 710, 19.74, 141], ["B", 298, 40, 487.5, 185.5, 617.5, 865, 200, 168, 403, 80, 276.5, 5, "SQ 55", 230, 360, 25, 710]],
  [["ITG-1500-2S", 13500, 9957.09, 156.8, "522:1", "F30", "F25", "F30", "F25", 130.5, 850, 20.67, 155], ["B", 298, 40, 510, 200, 670, 900, 220, 180, 420, 80, 300, 5, "SQ 55", 250, 380, 25, 710]],
  [["ITG-1800-2S", 16000, 11800.99, 288.8, "992:1", "F35", "F30", "F30", "F25", 248, 850, 13.3, 188], ["B", 298, 35, 580, 206, 693, 940, 250, 190, 450, 128.5, 307.5, 5, "Ø110", 230, 350, 35, 800]],
  [["ITG-2400-2S", 21000, 15488.81, 288.8, "896:1", "F35", "F30", "F35", "F30", 224, 900, 16.49, 215], ["B", 356, 40, 580, 210, 710, 970, 280, 220, 480, 130, 320, 5, "Ø120", 250, 380, 35, 800]],
  [["ITG-3200-2S", 28000, 20651.74, 303.24, "928:1", "F35", "F30", "F35", "F30", 232, 900, 20.94, 270], ["B", 356, 45, 630, 250, 750, 1010, 320, 260, 540, 140, 350, 5, "Ø150", 280, 420, 35, 800]],
]);

export const ITG_MODELS: ITGModel[] = [...STANDARD, ...SINGLE, ...DOUBLE];
export const ITG_SIZES = STANDARD.map((m) => m.size);

// Shared by every model (p.2, p.7)
export const ITG_COMMON: [string, string][] = [
  ["Operation", "Declutchable manual override, 0–90°, between valve and actuator"],
  ["Works with", "Pneumatic double-acting and spring-return actuators"],
  ["Stroke adjustment", "±5°"],
  ["Mounting", "ISO 5211 valve and actuator flanges; MOV flange to ISO 5210 for an electric actuator"],
  ["Ingress protection", "IP54, IP55, IP65 or IP67M"],
  ["Temperature", "−20 to +85 °C (option −45 to +120 °C)"],
  ["Housing, cover, end caps", "Ductile iron A536-65-45-12 (option cast iron)"],
  ["Worm wheel", "Ductile iron A536-80-55-06"],
  ["Worm shaft, drive shaft, drive bush, lever", "Carbon steel A576-1045 (input shaft option stainless steel)"],
  ["Air relief valve", "Aluminium alloy, integrated"],
  ["Coating", "Epoxy and PU on the housing, powder-coated handwheel"],
];
