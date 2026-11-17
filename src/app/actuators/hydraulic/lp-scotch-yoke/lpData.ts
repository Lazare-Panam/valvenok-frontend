// LP-HD / LP-HS series: low-pressure electro-hydraulic scotch yoke actuators. A
// Susin I-Tork scotch yoke actuator driven by its own KTC motor, pump and valve
// block at 8 bar, for sites without compressed air. Every value is from the
// "Hydraulic Low Pressure Catalogue" (KTC, 2020): product description p.3, why
// this range p.4, technical data and flanges p.5, product selection p.6, HPU
// selection and schematics p.7. Figures are as printed.
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";

const B = "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/hydraulic";
export const LP_IMAGE = `${B}/lp-hd.webp`;
export const LP_IMAGE_NC = `${B}/lp-hs-nc.webp`;
export const LP_IMAGE_NO = `${B}/lp-hs-no.webp`;
export const LP_CATALOG = SUSIN_CATALOG.LP;

export type LpKind = "Double acting" | "Spring return, normally closed" | "Spring return, normally open";
export const SIZES = [45, 50, 55, 70, 75, 85, 100, 125, 160, 200] as const;
export type LpSize = (typeof SIZES)[number];

export interface LpModel {
  code: string; // "LPHD 45"
  slug: string; // "LP-HD-45"
  kind: LpKind;
  size: LpSize;
  /** Double acting: torque at 0°, 45°, 90° (Nm) */
  da?: [number, number, number];
  /** Spring return: stroke 0° → 90° at 0°, 55°, 90°, then stroke 90° → 0° at 90°, 35°, 0° (Nm) */
  out?: [number, number, number];
  back?: [number, number, number];
}

const DA: Record<LpSize, [number, number, number]> = {
  45: [38, 16, 27], 50: [79, 33, 55], 55: [107, 44, 75], 70: [217, 90, 152], 75: [324, 134, 226],
  85: [403, 169, 282], 100: [653, 273, 457], 125: [1250, 521, 876], 160: [2427, 1015, 1700], 200: [4635, 1939, 3245],
};
const NC: Record<LpSize, number[]> = {
  45: [29.3, 10.5, 14.7, 12.3, 5.5, 8.7], 50: [59.1, 21, 30, 25, 12, 19.9], 55: [79.8, 71.8, 42.9, 32.1, 16.2, 27.2],
  70: [159.8, 55.7, 85.3, 66.7, 34.3, 57.2], 75: [243.1, 82.8, 122.8, 103.2, 51.2, 80.9], 85: [301.1, 104.5, 154.2, 127.8, 64.5, 101.9],
  100: [489.5, 168.1, 248.3, 208.7, 104.9, 163.5], 125: [940.2, 303, 475, 401, 209, 309.8], 160: [1847.1, 624.8, 919.2, 780.8, 390.2, 579.9],
  200: [3519.1, 1191.6, 1736.8, 1508.2, 747.4, 1115.9],
};
const NO: Record<LpSize, number[]> = {
  45: [20.68, 10.9, 20.66, 6.34, 5.1, 17.32], 50: [43.3, 22, 41.1, 13.9, 11, 35.7], 55: [60.43, 29.6, 55.55, 19.45, 14.4, 46.57],
  70: [121.7, 59.7, 111.9, 40.1, 30.3, 95.3], 75: [176.9, 89.85, 169.65, 56.35, 44.15, 147.1], 85: [220.5, 112.9, 210.6, 71.4, 56.1, 182.5],
  100: [355, 182.1, 342.5, 114.5, 90.9, 298], 125: [677.1, 338.5, 659, 217, 173.5, 572.9], 160: [1311.9, 674.4, 1281.4, 418.6, 340.6, 1115.1],
  200: [2481, 1299.7, 2463.6, 781.4, 639.3, 2154],
};

/** ISO 5211 flanges and PCD (p.5; "00" in the catalogue PCD column left out) */
export const FLANGE: Record<LpSize, { flange: string; pcd: string }> = {
  45: { flange: "F03 / F05 / F07", pcd: "35 / 50 / 70" }, 50: { flange: "F03 / F05 / F07", pcd: "35 / 50 / 70" },
  55: { flange: "F05 / F07", pcd: "50 / 70" }, 70: { flange: "F05 / F07", pcd: "50 / 70" },
  75: { flange: "F07 / F10", pcd: "70 / 102" }, 85: { flange: "F05 / F07", pcd: "50 / 70" },
  100: { flange: "F07 / F10", pcd: "70 / 102" }, 125: { flange: "F10 / F12", pcd: "102 / 125" },
  160: { flange: "F10 / F14", pcd: "102 / 140" }, 200: { flange: "F12 / F16", pcd: "125 / 165" },
};

/** HPU selection (p.7): stroking time in seconds, by HPU column of the catalogue table */
export const STROKE: Record<LpSize, [string, number][]> = {
  45: [["0.02", 14.4], ["0.03", 7.2], ["0.04", 4.8], ["0.05", 3.6]],
  50: [["0.02", 19.2], ["0.03", 9.6], ["0.04", 6.4], ["0.05", 4.8], ["0.06", 3.84]],
  55: [["0.03", 20.4], ["0.04", 13.6], ["0.05", 10.2], ["0.06", 8.16], ["0.07", 5.83]],
  70: [["0.04", 18.4], ["0.05", 13.8], ["0.06", 11.04], ["0.07", 7.89], ["0.08", 6.9]],
  75: [["0.05", 29.7], ["0.06", 23.76], ["0.07", 16.97], ["0.08", 14.85], ["0.09", 9.9]],
  85: [["0.06", 19.2], ["0.07", 13.71], ["0.08", 12], ["0.09", 8], ["2.02", 6]],
  100: [["0.07", 22.63], ["0.08", 19.8], ["0.09", 13.2], ["2.02", 9.9], ["2.04", 5.28]],
  125: [["0.08", 37.35], ["0.09", 24.9], ["2.02", 18.68], ["2.04", 9.96], ["2.06", 6.23]],
  160: [["0.09", 45.2], ["2.02", 33.9], ["2.04", 18.08], ["2.06", 11.3], ["2.08", 9.04]],
  200: [["2.02", 68.03], ["2.04", 36.28], ["2.06", 22.68], ["2.08", 18.14]],
};

const tri = (a: number[]) => [a[0], a[1], a[2]] as [number, number, number];
export const LP_MODELS: LpModel[] = [
  ...SIZES.map((s): LpModel => ({ code: `LPHD ${s}`, slug: `LP-HD-${s}`, kind: "Double acting", size: s, da: DA[s] })),
  ...SIZES.map((s): LpModel => ({ code: `LPHS ${s} NC`, slug: `LP-HS-NC-${s}`, kind: "Spring return, normally closed", size: s, out: tri(NC[s]), back: tri(NC[s].slice(3)) })),
  ...SIZES.map((s): LpModel => ({ code: `LPHS ${s} NO`, slug: `LP-HS-NO-${s}`, kind: "Spring return, normally open", size: s, out: tri(NO[s]), back: tri(NO[s].slice(3)) })),
];

/** Highest torque in a model's table (Nm) */
export const maxTorque = (m: LpModel) => Math.max(...(m.da ?? [...m.out!, ...m.back!]));

// Shared by every model (p.3, p.5)
export const LP_COMMON: [string, string][] = [
  ["Drive", "Own electric motor, pump and valve block: no compressed air"],
  ["On-board pressure", "Max. 8 bar"],
  ["Motor voltage", "400 V 50/60 Hz or 230 V 50 Hz"],
  ["Power consumption", "180 – 250 W"],
  ["Solenoid valve", "24 V DC or 230 V 50 Hz"],
  ["Speed", "Adjustable by throttle"],
  ["Medium", "Hydraulic oil HLP, filtered min. 10 µm"],
  ["Ambient temperature", "−20 to +50 °C"],
  ["Hazardous areas", "Zone 1 and 2"],
  ["Mechanism", "Hardened scotch yoke, more torque at the open and close positions"],
  ["Cylinder", "Extruded, anodised aluminium; polished surface finish"],
  ["Mounting", "ISO 5211, DIN 3337, NAMUR; accessories to VDI/VDE 3845 NAMUR"],
  ["Stops", "Centre stopper bolts to adjust the open and close positions"],
  ["Position indicator", "Flat or dome"],
];
