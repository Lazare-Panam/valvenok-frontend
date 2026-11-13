// HLDA / EHLDA linear piston hydraulic actuators (double acting).
// Every value below comes from the Susin I-Tork "Hydraulic & Electro Hydraulic
// Actuator" data sheet (Hydraulic - HLP.pdf), Linear Piston Actuator pages 18–19.
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";

export const HLDA_IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/brands/susin/ktc-hlda.jpg";

export const HLDA_CATALOG = SUSIN_CATALOG.HLP;

export const PRESSURES = [100, 130, 160] as const;

export interface HLDAModel {
  model: string; // hydraulic version; electro-hydraulic version is "E" + model
  boreMm: number;
  // thrust at 100 / 130 / 160 bar: [close, open]
  kN: [number, number][];
  lbf: [number, number][];
}

const m = (size: string, boreMm: number, kN: number[], lbf: number[]): HLDAModel => ({
  model: `HLDA-${size}`,
  boreMm,
  kN: [[kN[0], kN[1]], [kN[2], kN[3]], [kN[4], kN[5]]],
  lbf: [[lbf[0], lbf[1]], [lbf[2], lbf[3]], [lbf[4], lbf[5]]],
});

export const HLDA_MODELS: HLDAModel[] = [
  m("030", 32, [6, 4, 8, 5, 10, 6], [1446, 881, 1880, 1146, 2314, 1410]),
  m("040", 40, [10, 7, 13, 9, 16, 11], [2260, 1576, 2938, 2049, 3616, 2522]),
  m("050", 50, [16, 12, 20, 15, 25, 19], [3531, 2649, 4591, 3443, 5650, 4238]),
  m("060", 63, [25, 19, 32, 25, 40, 31], [5607, 4335, 7289, 5636, 8970, 6936]),
  m("080", 80, [40, 30, 52, 39, 64, 48], [9041, 6780, 11753, 8815, 14465, 10849]),
  m("100", 100, [63, 47, 82, 61, 101, 75], [14126, 10594, 18364, 13773, 22601, 16951]),
  m("125", 125, [98, 76, 128, 98, 157, 121], [22072, 16986, 28693, 22082, 35315, 27178]),
  m("140", 140, [123, 92, 160, 120, 197, 148], [27687, 20765, 35993, 26995, 44299, 33224]),
  m("160", 160, [161, 121, 209, 157, 257, 193], [36162, 27122, 47011, 35258, 57860, 43395]),
  m("180", 180, [204, 153, 265, 198, 326, 244], [45768, 34326, 59498, 44624, 73228, 54921]),
  m("200", 200, [251, 188, 327, 245, 402, 302], [56503, 42378, 73455, 55091, 90406, 67804]),
];

// Shared by every model (data sheet pages 18–20)
export const HLDA_COMMON = [
  { label: "Type", value: "Linear piston, double acting" },
  { label: "Versions", value: "HLDA hydraulic · EHLDA electro-hydraulic" },
  { label: "Operating Pressure", value: "Hydraulic up to 200 bar (2,900 psi)" },
  { label: "Protection", value: "IEC IP66M / IP67M (O-ring sealed)" },
  { label: "Manual Override", value: "For operation on power failure" },
  { label: "Hydraulic Cylinder", value: "Carbon steel, honed tube, hot chrome plated" },
  { label: "Piston Rod", value: "Carbon steel, chromium plated" },
  { label: "Seals / O-rings", value: "NBR / CFT" },
  { label: "Yoke Bushing", value: "Aluminium bronze" },
  { label: "Tie Rod", value: "Alloy steel" },
];
