// MAW Series quarter-turn manual worm gear actuators, 125–32,000 Nm.
// Every value is from the Susin MAW catalogue (Mechanical - MAW.pdf):
// features p.2, technical specifications p.3, dimensions p.4 (general),
// p.5 (single stage helical reduction, 1S), p.6 (double stage, 2S),
// materials, handwheels and rim effort chart p.7.
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";
import type { GearStage } from "@/src/app/pneumatic/actuators/_series/gearTypes";

const BLOB = "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/mechanical";
export const MAW_IMAGE = `${BLOB}/worm-gearboxes.webp`;
// From the catalogue: the exploded view (p.7) and an MAW with a reduction attachment (cover)
export const MAW_EXPLODED = `${BLOB}/maw-exploded.webp`;
export const MAW_REDUCTION = `${BLOB}/maw-reduction.webp`;
export const MAW_CATALOG = SUSIN_CATALOG.MAW;

export interface MAWDims {
  d1: number | null; // ØD1 (not listed for MAW-012 to 045)
  pcd: number; // standard flange PCD
  optPcd: number;
  h: number | null; h1: number; h2: number; k: number; k1: number; k3: number;
  l: number; l1: number; l2: number;
  pd: string; // input shaft ØPD / □SQ
  m: number; // handwheel ØM
}

export interface MAWModel {
  model: string;
  size: string;
  stage: GearStage;
  torqueNm: number;
  ma: number; // mechanical advantage ±10%
  ratio: string;
  flange: string; // ISO 5211 standard
  flangeOpt: string;
  turns: number; // handwheel turns for 90°
  handwheel: number; // recommended Ø mm
  rimKg: number; // rim pull effort, kg (catalogue)
  weightKg: number;
  dims: MAWDims;
}

type Row = [string, number, number, string, string, string, number, number, number, number];
// [model, Nm, MA, ratio, std flange, option, turns, handwheel Ø, rim pull kg, kg]  (p.3)
type Dim = [number | null, number, number, number | null, number, number, number, number, number, number, number, number, string, number];
// [ØD1, std PCD, option PCD, H, H1, H2, K, K1, K3, L, L1, L2, ØPD/□SQ, ØM]  (p.4–6)

const build = (stage: GearStage, rows: [Row, Dim][]): MAWModel[] =>
  rows.map(([r, d]) => ({
    model: r[0], size: r[0].replace(/-(1S|2S)$/, ""), stage,
    torqueNm: r[1], ma: r[2], ratio: r[3], flange: r[4], flangeOpt: r[5], turns: r[6], handwheel: r[7], rimKg: r[8], weightKg: r[9],
    dims: { d1: d[0], pcd: d[1], optPcd: d[2], h: d[3], h1: d[4], h2: d[5], k: d[6], k1: d[7], k3: d[8], l: d[9], l1: d[10], l2: d[11], pd: d[12], m: d[13] },
  }));

const STANDARD = build("Standard", [
  [["MAW-012", 125, 6, "32:1", "F05", "F07", 8, 100, 63.78, 4], [null, 50, 70, null, 37, 92, 54, 33, 140, 35, 75, 20, "□9", 100]],
  [["MAW-025", 250, 7, "32:1", "F07", "F05", 8, 200, 63.78, 4.5], [null, 70, 50, null, 42, 108, 70, 35, 140, 45, 110, 20, "□11", 200]],
  [["MAW-045", 450, 8, "38:1", "F10", "F07", 9.5, 250, 45.92, 5.5], [null, 102, 70, null, 49, 120, 73, 35, 165, 55, 110, 20, "□11", 250]],
  [["MAW-080", 800, 12.2, "40:1", "F12", "F10", 10, 400, 33.46, 10], [85, 125, 102, 2, 75, 162, 91.5, 45, 205, 80, 120, 24, "Ø16", 400]],
  [["MAW-100", 1000, 12.2, "40:1", "F12", "F10", 10, 500, 33.46, 11], [85, 125, 102, 2, 75, 162, 91.5, 45, 205, 80, 120, 24, "Ø16", 500]],
  [["MAW-200", 2000, 12.5, "42:1", "F14", "F12", 10.5, 500, 65.31, 20], [100, 140, 125, 3, 79.5, 210, 100, 45, 295, 106.5, 200, 35, "Ø20", 500]],
  [["MAW-300", 3000, 16.5, "52:1", "F16", "F20", 13, 600, 61.84, 33], [130, 165, 205, 3, 100, 251, 135, 67, 354, 121.5, 210, 35, "Ø25", 600]],
  [["MAW-400", 4000, 16.5, "56:1", "F20", "F16", 14, 600, 82.46, 43], [130, 205, 165, 5, 117.5, 285, 132.3, 70, 333.5, 133.5, 173.5, 35, "Ø30", 600]],
  [["MAW-650", 6500, 17.5, "52:1", "F20", "F16", 13, 600, 126.34, 57], [160, 205, 165, 4, 126, 281, 160, 80, 370, 158.5, 235, 40, "Ø25", 600]],
  [["MAW-900", 9000, 20, "66:1", "F25", "F30", 16.5, 710, 129.35, 88], [200, 254, 298, 5, 154, 380, 175, 85, 475, 193, 335, 40, "Ø23", 710]],
  [["MAW-1200", 12000, 20.5, "68:1", "F30", "F25", 17, 710, 168.26, 100], [230, 298, 254, 5, 168, 380, 195, 93, 400, 185.5, 253.5, 40, "Ø23", 710]],
  [["MAW-1500", 15000, 21, "60:1", "F30", "F25", 15, 800, 182.22, 130], [230, 298, 254, 5, 180, 420, 200, 95, 420, 200, 260, 40, "Ø25", 800]],
  [["MAW-1800", 18000, 21, "62:1", "F30", "F25", 15.5, 850, 205.8, 160], [230, 298, 254, 5, 190, 480, 158, 98, 440, 220, 262, 45, "Ø30", 850]],
  [["MAW-2400", 24000, 21, "56:1", "F35", "F30", 14, 900, 259.15, 190], [260, 356, 298, 8, 210, 520, 160, 100, 460, 240, 265, 45, "Ø35", 900]],
  [["MAW-3200", 32000, 22, "58:1", "F35", "F30", 14.5, 900, 329.83, 235], [260, 356, 298, 8, 234, 550, 110, 108.7, 375, 250, 270, 30, "Ø35", 900]],
]);

const SINGLE = build("1S", [
  [["MAW-300-1S", 3000, 29.7, "102:1", "F16", "F20", 25.5, 600, 34.36, 42], [130, 165, 205, 3, 100, 251, 135, 67, 375, 121.5, 230, 35, "Ø25", 600]],
  [["MAW-400-1S", 4000, 37.46, "144:1", "F20", "F16", 36, 600, 36.32, 53], [130, 205, 165, 2, 117.5, 315, 128, 70, 400, 124, 250, 38, "Ø25", 600]],
  [["MAW-650-1S", 6500, 49, "156:1", "F20", "F16", 39, 600, 45.12, 67], [160, 205, 165, 4, 126, 281, 160, 80, 440, 121.5, 425, 40, "Ø23", 600]],
  [["MAW-900-1S", 9000, 56, "198:1", "F25", "F30", 49.5, 710, 46.2, 98], [200, 254, 298, 5, 154, 380, 175, 85, 475, 193, 330, 40, "Ø23", 710]],
  [["MAW-1200-1S", 12000, 57.4, "204:1", "F30", "F25", 51, 710, 60.09, 110], [230, 298, 254, 5, 168, 403, 195, 93, 520, 185.5, 375.5, 40, "Ø23", 710]],
  [["MAW-1500-1S", 15000, 79.8, "240:1", "F30", "F25", 60, 850, 45.13, 140], [230, 298, 254, 5, 180, 420, 200, 95, 522, 200, 390, 40, "Ø25", 850]],
  [["MAW-1800-1S", 18000, 79.8, "248:1", "F35", "F30", 62, 850, 54.16, 165], [260, 356, 298, 5, 160, 480, 158, 98, 525, 220, 400, 45, "Ø30", 850]],
  [["MAW-2400-1S", 24000, 79.8, "224:1", "F35", "F30", 56, 900, 68.2, 210], [260, 356, 298, 8, 210, 520, 160, 100, 528, 240, 410, 45, "Ø35", 900]],
  [["MAW-3200-1S", 32000, 83.6, "232:1", "F35", "F30", 58, 900, 86.8, 225], [260, 356, 298, 8, 234, 550, 110, 108.7, 530, 250, 420, 30, "Ø35", 900]],
]);

const DOUBLE = build("2S", [
  // p.6 prints PCD 256 for the MAW-900-2S F25 flange; ISO 5211 F25 is 254, as on every other F25 row
  [["MAW-900-2S", 9000, 156.8, "594:1", "F25", "F30", 148.5, 710, 16.5, 108], [200, 254, 298, 5, 150, 410, 147, 80, 515, 193, 370, 40, "Ø23", 710]],
  [["MAW-1200-2S", 12000, 160.72, "612:1", "F30", "F25", 153, 710, 21.46, 118], [230, 298, 254, 5, 168, 403, 195, 93, 490, 185.5, 344, 40, "Ø23", 710]],
  [["MAW-1500-2S", 15000, 164.64, "528:1", "F30", "F25", 132, 850, 21.87, 135], [230, 298, 254, 5, 180, 420, 200, 95, 500, 200, 350, 40, "Ø25", 850]],
  [["MAW-1800-2S", 18000, 303.24, "992:1", "F35", "F30", 248, 850, 14.25, 188], [260, 356, 298, 5, 160, 480, 158, 98, 530, 220, 380, 45, "Ø30", 850]],
  [["MAW-2400-2S", 24000, 303.24, "896:1", "F35", "F30", 224, 900, 17.95, 210], [260, 356, 298, 8, 210, 520, 160, 100, 535, 240, 400, 45, "Ø35", 900]],
  [["MAW-3200-2S", 32000, 317.68, "928:1", "F35", "F30", 232, 900, 22.84, 270], [260, 356, 298, 8, 234, 550, 110, 108.7, 540, 250, 427, 30, "Ø35", 900]],
]);

export const MAW_MODELS: MAWModel[] = [...STANDARD, ...SINGLE, ...DOUBLE];
export const MAW_SIZES = STANDARD.map((m) => m.size);

// Shared by every model (p.2, p.7)
export const MAW_COMMON: [string, string][] = [
  ["Operation", "Manual, quarter-turn (90°) with handwheel"],
  ["Stroke adjustment", "±5° (stop bolts)"],
  ["Mounting", "ISO 5211; MOV flange to ISO 5210 for an electric actuator"],
  ["Ingress protection", "IP54, IP55, IP65 or IP67M"],
  ["Temperature", "−20 to +85 °C (option −45 to +120 °C)"],
  ["Housing and cover", "Ductile iron (option cast iron)"],
  ["Worm wheel", "Ductile iron"],
  ["Worm shaft and drive shaft", "Carbon steel (input shaft option stainless steel)"],
  ["Coating", "Epoxy and PU on the housing, powder-coated handwheel"],
  ["Handwheel side", "LH and RH versions"],
];
