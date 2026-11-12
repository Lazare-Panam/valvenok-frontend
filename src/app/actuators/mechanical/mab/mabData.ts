// MAB Series bevel gear actuators (manual, multi-turn), 250–18,000 Nm.
// Every value is from the Susin / i-Tork MAB catalogue (Mechanical - MAB.pdf):
// features p.2, technical specifications p.3, dimensions p.4 (standard),
// p.5 (single stage reduction, 1S) and p.6 (double stage reduction, 2S),
// material construction, handwheels and rim effort chart p.7.
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";
import { STAGE_LABEL, RIM_LIMIT_N, rimEffort, type GearStage } from "@/src/app/pneumatic/actuators/_series/gearTypes";

const BLOB = "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/mechanical";
export const MAB_IMAGE = `${BLOB}/mab.webp`;
// Renders from the catalogue cover: a cut-away, and an MAB with a reduction attachment
export const MAB_CUTAWAY = `${BLOB}/mab-cutaway.webp`;
export const MAB_REDUCTION = `${BLOB}/mab-reduction.webp`;
export const MAB_CATALOG = SUSIN_CATALOG.MAB;

export type MABStage = GearStage;
export { STAGE_LABEL };

export interface MABDims {
  type: "A" | "B"; // ISO 5210 flange bolt pattern
  d1: number; flange: string; d2: number; nhdp: string; d3: number; // base part
  h: number; h1: number; h2: number; h3: number; l1: number; l2: number; // external part
  pd: number; key: string; // input shaft
  m: number; stemCover: string;
}

export interface MABModel {
  model: string; // "MAB-125-1S"
  size: string; // "MAB-125"
  stage: MABStage;
  ratio: string; // "7:1"
  stem: string; // allowable max stem: TW / Ø (key)
  torqueNm: number;
  torqueLbft: number;
  thrustKn: number;
  thrustLbf: number;
  ma: number; // mechanical advantage ±10%
  flange: string; // ISO 5210 standard
  flangeOpt: string;
  handwheel: number; // recommended handwheel Ø mm
  weightKg: number;
  dims: MABDims;
}

type Row = [string, string, string, number, number, number, number, number, string, string, number, number];
// [model, ratio, stem, Nm, lbf-ft, kN, lbf, MA, std flange, option, handwheel Ø, kg]  (p.3)
type Dim = [MABDims["type"], number, string, number, string, number, number, number, number, number, number, number, number, string, number, string];
// [type, ØD1, flange, ØD2, N-H-DP, ØD3, H, H1, H2, H3, L1, L2, ØPD, key, ØM, stem cover]  (p.4–6)

const build = (stage: MABStage, rows: [Row, Dim][]): MABModel[] =>
  rows.map(([r, d]) => ({
    model: r[0],
    size: r[0].replace(/-(1S|2S)$/, ""),
    stage,
    ratio: r[1],
    stem: r[2],
    torqueNm: r[3],
    torqueLbft: r[4],
    thrustKn: r[5],
    thrustLbf: r[6],
    ma: r[7],
    flange: r[8],
    flangeOpt: r[9],
    handwheel: r[10],
    weightKg: r[11],
    dims: { type: d[0], d1: d[1], flange: d[2], d2: d[3], nhdp: d[4], d3: d[5], h: d[6], h1: d[7], h2: d[8], h3: d[9], l1: d[10], l2: d[11], pd: d[12], key: d[13], m: d[14], stemCover: d[15] },
  }));

const STANDARD = build("Standard", [
  [["MAB-075", "2.5:1", "28 / Ø22 (8×7)", 250, 184.39, 75, 16860.67, 2.27, "F10", "F07", 300, 9.5], ["A", 70, "F10", 102, "4-M10-15", 125, 3, 57, 67.5, 100.5, 150, 28, 20, "6×6", 300, 'PF 2"']],
  [["MAB-100", "3:1", "36 / Ø28 (8×7)", 420, 309.78, 100, 22480.89, 2.72, "F12", "F10", 300, 12], ["A", 85, "F12", 125, "4-M12-18", 150, 3, 56, 69, 109, 150, 35, 20, "6×6", 300, 'PF 2"']],
  [["MAB-125", "3.5:1", "44 / Ø36 (10×8)", 700, 516.29, 125, 28101.12, 3.18, "F14", "F12, F16", 400, 22], ["A", 100, "F14", 140, "4-M16-24", 220, 4, 80.5, 94, 135, 200, 38, 25, "8×7", 400, 'PF 2½"']],
  [["MAB-150", "3.75:1", "54 / Ø42 (12×8)", 1100, 811.32, 150, 33721.34, 3.4, "F16", "F14", 500, 30], ["A", 130, "F16", 165, "4-M20-20", 210, 4, 74, 85, 127, 200, 40, 25, "8×7", 500, 'PF 3"']],
  [["MAB-200", "4:1", "62 / Ø55 (16×10)", 1600, 1180.1, 200, 44961.79, 3.63, "F16", "F20", 600, 34], ["B", 140, "F20", 205, "8-M16-25", 245, 4, 80, 100, 152, 194, 35, 30, "10×8", 600, 'PF 3"']],
  [["MAB-300", "5:1", "70 / Ø65 (20×12)", 2500, 1843.91, 300, 67442.68, 4.62, "F25", "F30", 710, 70], ["B", 230, "F30", 298, "8-M20-30", 350, 5, 104, 122, 176, 270, 35, 30, "10×8", 710, 'PF 4"']],
  [["MAB-350", "5.5:1", "85 / Ø75 (20×12)", 3800, 2802.74, 350, 78683.13, 5.24, "F35", "F30, F25", 710, 95], ["B", 230, "F30", 298, "8-M20-30", 415, 5, 119, 134, 199, 310, 35, 30, "10×8", 710, 'PF 5"']],
  [["MAB-400", "6:1", "95 / Ø80 (22×14)", 5600, 4130.35, 400, 89923.58, 5.7, "F35", "F30, F25", 800, 130], ["B", 260, "F35", 356, "8-M30-45", 410, 5, 133, 150, 209, 290, 35, 38, "12×8", 800, 'PF 6"']],
  [["MAB-500", "6.5:1", "110 / Ø95 (22×14)", 7800, 5752.98, 500, 112404.47, 6.19, "F40", "F35, F30", 900, 175], ["B", 300, "F40", 406, "8-M36-55", 475, 5, 160, 180, 250, 315, 35, 38, "12×8", 900, 'PF 6"']],
  [["MAB-1200", "7:1", "120 / Ø105 (28×16)", 12000, 8850.75, 1200, 269770.73, 6.7, "F40", "F35, F30", 1000, 195], ["B", 300, "F40", 406, "8-M36-55", 475, 5, 170, 192, 260, 400, 35, 38, "12×8", 1000, 'PF 8"']],
  [["MAB-2500", "7.5:1", "150 / Ø130 (36×20)", 18000, 13276.12, 2500, 562022.36, 7.2, "F48", "F40", 1000, 390], ["B", 300, "F40", 406, "8-M36-54", 485, 5, 203, 222, 322, 500, 40, 30, "10×8", 1000, 'PF 10"']],
]);

const SINGLE = build("1S", [
  [["MAB-125-1S", "7:1", "44 / Ø36 (10×8)", 700, 516.29, 125, 28101.12, 5.72, "F14", "F12, F16", 400, 30], ["A", 100, "F14", 140, "4-M16-24", 220, 4, 80.5, 94, 135, 280, 38, 25, "8×7", 400, 'PF 2½"']],
  [["MAB-150-1S", "9.4:1", "54 / Ø42 (12×8)", 1100, 811.32, 150, 33721.34, 7.82, "F16", "F14", 400, 35], ["A", 130, "F16", 165, "4-M20-20", 210, 4, 74, 85, 127, 250, 40, 25, "8×7", 400, 'PF 3"']],
  [["MAB-200-1S", "12:1", "62 / Ø55 (16×10)", 1600, 1180.1, 200, 44961.79, 10.16, "F16", "F20", 400, 40], ["B", 140, "F20", 205, "8-M16-25", 245, 4, 80, 100, 152, 240, 35, 25, "8×7", 400, 'PF 3"']],
  [["MAB-300-1S", "15:1", "70 / Ø65 (20×12)", 2500, 1843.91, 300, 67442.68, 12.94, "F25", "F30", 500, 80], ["B", 230, "F30", 298, "8-M20-30", 350, 5, 104, 122, 176, 350, 35, 25, "8×7", 500, 'PF 4"']],
  [["MAB-350-1S", "16.5:1", "85 / Ø75 (20×12)", 3800, 2802.74, 350, 78683.13, 14.67, "F35", "F30, F25", 600, 105], ["B", 230, "F30", 298, "8-M20-30", 415, 5, 119, 134, 199, 410, 35, 25, "8×7", 600, 'PF 5"']],
  [["MAB-400-1S", "21:1", "95 / Ø80 (22×14)", 5600, 4130.35, 400, 89923.58, 18.81, "F35", "F30, F25", 600, 140], ["B", 260, "F35", 356, "8-M30-45", 410, 5, 133, 150, 209, 360, 35, 38, "12×8", 600, 'PF 6"']],
  [["MAB-500-1S", "22.75:1", "110 / Ø95 (22×14)", 7800, 5752.98, 500, 112404.47, 20.43, "F40", "F35, F30", 710, 189], ["B", 300, "F40", 406, "8-M36-55", 475, 5, 160, 180, 250, 390, 35, 38, "12×8", 710, 'PF 6"']],
  [["MAB-1200-1S", "28:1", "120 / Ø105 (28×16)", 12000, 8850.75, 1200, 269770.73, 24.79, "F40", "F35, F30", 710, 215], ["B", 300, "F40", 406, "8-M36-55", 475, 5, 170, 192, 260, 520, 35, 38, "12×8", 710, 'PF 8"']],
  [["MAB-2500-1S", "30:1", "150 / Ø130 (36×20)", 18000, 13276.12, 2500, 562022.36, 26.64, "F48", "F40", 900, 430], ["B", 300, "F40", 406, "8-M36-54", 485, 5, 203, 222, 322, 640, 40, 30, "10×8", 900, 'PF 10"']],
]);

const DOUBLE = build("2S", [
  [["MAB-150-2S", "15:1", "54 / Ø42 (12×8)", 1100, 811.32, 150, 33721.34, 11.02, "F16", "F14", 400, 40], ["A", 130, "F16", 165, "4-M20-20", 210, 4, 74, 85, 127, 270, 40, 25, "8×7", 400, 'PF 3"']],
  [["MAB-200-2S", "16:1", "62 / Ø55 (16×10)", 1600, 1180.1, 200, 44961.79, 11.76, "F16", "F20", 400, 45], ["B", 140, "F20", 205, "8-M16-25", 245, 4, 80, 100, 152, 262, 35, 25, "8×7", 400, 'PF 3"']],
  [["MAB-300-2S", "45:1", "70 / Ø65 (20×12)", 2500, 1843.91, 300, 67442.68, 36.22, "F25", "F30", 500, 85], ["B", 200, "F25", 254, "8-M16-24", 300, 5, 109, 122, 176, 377, 35, 25, "8×7", 500, 'PF 4"']],
  [["MAB-350-2S", "49.5:1", "85 / Ø75 (20×12)", 3800, 2802.74, 350, 78683.13, 41.08, "F35", "F30, F25", 600, 110], ["B", 230, "F30", 298, "8-M20-30", 415, 5, 119, 134, 199, 439.5, 35, 25, "8×7", 600, 'PF 5"']],
  [["MAB-400-2S", "73.5:1", "95 / Ø80 (22×14)", 5600, 4130.35, 400, 89923.58, 62.07, "F35", "F30, F25", 600, 150], ["B", 260, "F35", 356, "8-M30-45", 410, 5, 133, 150, 209, 395, 35, 38, "12×8", 600, 'PF 6"']],
  [["MAB-500-2S", "79.63:1", "110 / Ø95 (22×14)", 7800, 5752.98, 500, 112404.47, 67.41, "F40", "F35, F30", 710, 200], ["B", 300, "F40", 406, "8-M36-55", 475, 5, 160, 180, 250, 430, 35, 38, "12×8", 710, 'PF 6"']],
  [["MAB-1200-2S", "112:1", "120 / Ø105 (28×16)", 12000, 8850.75, 1200, 269770.73, 91.72, "F40", "F35, F30", 710, 230], ["B", 300, "F40", 406, "8-M36-55", 475, 5, 170, 192, 260, 570, 35, 38, "12×8", 710, 'PF 8"']],
  [["MAB-2500-2S", "151.87:1", "150 / Ø130 (36×20)", 18000, 13276.12, 2500, 562022.36, 133.13, "F48", "F40", 900, 450], ["B", 300, "F40", 406, "8-M36-54", 485, 5, 203, 222, 322, 671, 40, 30, "10×8", 800, 'PF 10"']],
]);

export const MAB_MODELS: MABModel[] = [...STANDARD, ...SINGLE, ...DOUBLE];
export const MAB_SIZES = STANDARD.map((m) => m.size);

export { RIM_LIMIT_N, rimEffort };

// Shared by every model (p.2, p.7)
export const MAB_COMMON: [string, string][] = [
  ["Operation", "Manual, multi-turn (handwheel)"],
  ["Mounting", "ISO 5210, with an MOV flange for an electric actuator"],
  ["Ingress protection", "IP55, IP65, IP67M or IP68"],
  ["Temperature", "−20 to +80 °C (options −45 to +100 °C, −70 to +120 °C)"],
  ["Housing", "Ductile iron A536 65-45-12 (option cast iron)"],
  ["Bevel gear and pinion", "Spiral bevel, alloy steel EN-19 / AISI 1045"],
  ["Stem bush", "Aluminium bronze / carbon steel, replaceable, held by dual locknuts"],
  ["Drive sleeve", "Ductile iron A536 70-50-05"],
  ["Input shaft", "Steel (option stainless steel)"],
  ["Coating", "Epoxy and PU on the housing, powder-coated handwheel; marine and offshore systems available"],
];

// Material construction (p.7)
export const MAB_MATERIALS: [string, string][] = [
  ["Top housing", "Ductile iron (A536-65-45-12)"],
  ["Bottom housing", "Ductile iron (A536-65-45-12)"],
  ["Spiral bevel gear", "Alloy steel (EN-19) / AISI 1045"],
  ["Spiral bevel pinion", "Alloy steel (EN-19) / AISI 1045"],
  ["Stem bush", "Al bronze / carbon steel"],
  ["Lock nuts (2)", "Carbon steel (EN-8)"],
  ["Drive sleeve", "Ductile iron (A536-70-50-05)"],
  ["End cover", "Carbon steel (ASTM A36)"],
  ["Collar (2)", "Stainless steel (SS304)"],
  ["Stem cap", "Carbon steel (ASTM A36)"],
  ["Bottom housing gasket", "Non asbestos"],
];
