// ITM Series multi-turn electric actuators (177–2,942 Nm).
// Every value is from the Susin / i-Tork ITM catalogue (Electric - ITM.pdf):
// standard specification p.3, electrical p.6, mechanical p.7, speed torque
// table p.8, thrust / stem / flange / weight p.9.
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";

const BLOB = "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric";
// ITM photos from the catalogue (cover, and the range on a gate valve). The older
// itm.webp is the ITQ photo, so it is no longer used here.
export const ITM_IMAGE = `${BLOB}/itm-multi-turn.webp`;
export const ITM_ON_VALVE = `${BLOB}/itm-on-gate-valve.webp`;
export const ITM_CATALOG = SUSIN_CATALOG.ITM;

// Output speeds (rpm at 50 / 60 Hz); * marks i-Tork standard speeds
export const ITM_SPEEDS = ["12/14", "16/19", "23/28", "32/38", "48/57", "73/87", "98/118"];
export const ITM_STANDARD_SPEEDS = ["23/28", "48/57", "73/87", "98/118"];

export interface ITMMotor {
  kw: number;
  // max torque (Nm) at each speed in ITM_SPEEDS, [50 Hz, 60 Hz]
  torque: [number, number][];
}

export interface ITMModel {
  model: string; // "ITM 0180"
  torqueNm: number;
  torqueKgfm: number;
  thrustKn: number;
  thrustTon: number;
  stemKey: number; // mm
  stemThread: number; // mm
  stemScrew: string;
  flange: string; // ISO 5210
  weightKg: number;
  body: "Top handle" | "Side handle";
  terminal: string;
  cableEntries: string;
  motors: ITMMotor[];
}

const T = (...p: number[]): [number, number][] => Array.from({ length: p.length / 2 }, (_, i) => [p[i * 2], p[i * 2 + 1]]);

const TOP_CABLE = "1 × PF 1-1/2\" (or NPT) + 2 × PF 1\" (or NPT)";
const SIDE_CABLE = "4 × PF 1\" (or 4 × NPT 1\")";

export const ITM_MODELS: ITMModel[] = [
  {
    model: "ITM 0180", torqueNm: 177, torqueKgfm: 18, thrustKn: 68.6, thrustTon: 7, stemKey: 35, stemThread: 40, stemScrew: "TW40", flange: "F10", weightKg: 40,
    body: "Top handle", terminal: "52 pin", cableEntries: TOP_CABLE,
    motors: [
      { kw: 0.2, torque: T(83.4, 69.6, 62.8, 52.0, 43.1, 34.3, 55.9, 47.1, 38.2, 31.4, 33.3, 27.5, 27.5, 22.6) },
      { kw: 0.4, torque: T(167, 139, 125, 104, 85.3, 68.6, 112, 93.2, 76.5, 61.8, 67.7, 25.5, 54.9, 44.1) },
      { kw: 0.75, torque: T(177, 177, 177, 177, 161, 129, 177, 177, 114, 116, 127, 101, 103, 82.4) },
    ],
  },
  {
    model: "ITM 0450", torqueNm: 441, torqueKgfm: 45, thrustKn: 118, thrustTon: 12, stemKey: 50, stemThread: 60, stemScrew: "TW60", flange: "F14", weightKg: 60,
    body: "Top handle", terminal: "52 pin", cableEntries: TOP_CABLE,
    motors: [
      { kw: 0.75, torque: T(326, 273, 244, 204, 168, 134, 226, 188, 155, 125, 128, 103, 103, 82.4) },
      { kw: 1.5, torque: T(441, 441, 441, 408, 335, 270, 441, 377, 309, 249, 256, 206, 206, 166) },
      { kw: 2.2, torque: T(441, 441, 441, 441, 441, 395, 441, 441, 441, 365, 376, 303, 302, 243) },
    ],
  },
  {
    model: "ITM 0750", torqueNm: 735, torqueKgfm: 75, thrustKn: 157, thrustTon: 16, stemKey: 60, stemThread: 72, stemScrew: "TW72", flange: "F16", weightKg: 89,
    body: "Top handle", terminal: "52 pin", cableEntries: TOP_CABLE,
    motors: [
      { kw: 1.5, torque: T(624, 523, 468, 390, 321, 259, 428, 357, 293, 236, 252, 203, 209, 169) },
      { kw: 2.2, torque: T(735, 735, 686, 573, 471, 380, 627, 524, 430, 346, 370, 297, 307, 247) },
      { kw: 3.7, torque: T(735, 735, 735, 735, 735, 637, 735, 735, 723, 582, 621, 500, 517, 416) },
    ],
  },
  {
    model: "ITM 1800", torqueNm: 1765, torqueKgfm: 180, thrustKn: 392, thrustTon: 40, stemKey: 95, stemThread: 110, stemScrew: "TW110", flange: "F25", weightKg: 185,
    body: "Side handle", terminal: "75 pin", cableEntries: SIDE_CABLE,
    motors: [
      { kw: 3.7, torque: T(1677, 1402, 1255, 1049, 863, 693, 1079, 901, 740, 596, 633, 509, 508, 409) },
      { kw: 5.5, torque: T(1765, 1765, 1765, 1559, 1275, 1030, 1608, 1344, 1098, 886, 939, 757, 755, 608) },
      { kw: 7.5, torque: T(1765, 1765, 1765, 1765, 1746, 1402, 1765, 1765, 1500, 1206, 1285, 1030, 1030, 829) },
    ],
  },
  {
    model: "ITM 3000", torqueNm: 2942, torqueKgfm: 300, thrustKn: 686, thrustTon: 70, stemKey: 115, stemThread: 130, stemScrew: "TW130", flange: "F30", weightKg: 210,
    body: "Side handle", terminal: "75 pin", cableEntries: SIDE_CABLE,
    motors: [
      { kw: 7.5, torque: T(2942, 2942, 2942, 2550, 2089, 1687, 2001, 1667, 1373, 1108, 1353, 1089, 1079, 869) },
      { kw: 11, torque: T(2942, 2942, 2942, 2942, 2560, 2059, 2932, 2452, 2010, 1618, 1677, 1353, 1344, 1079) },
      { kw: 15, torque: T(2942, 2942, 2942, 2942, 2942, 2805, 2942, 2942, 2746, 2206, 2285, 1844, 1824, 1471) },
    ],
  },
];

// Shared by every model
export const ITM_COMMON: [string, string][] = [
  ["Main power", "3 phase, AC 220 / 380 / 400 / 415 / 440 / 460 / 480 V, 50 / 60 Hz ±10%"],
  ["Motor", "TENV, insulation class F, thermostat"],
  ["Duty cycle", "S2, 15 min (option S4, 30–50%)"],
  ["Gearing", "Single worm reduction gear, oil lubricated"],
  ["Torque sensing", "Digital, adjustable 30–100%"],
  ["Position sensing", "Hall incremental encoder, battery backed"],
  ["Display", "128 × 64 graphic LCD, 4 LEDs"],
  ["Remote monitoring", "8 status contacts (S1–S8) + 1 fault"],
  ["Manual override", "Handwheel with automatic return to electric"],
  ["Enclosure", "IP68 (10 m for 100 hours)"],
  ["Space heater", "10 W, 24 VDC"],
  ["Ambient temperature", "−20 to +70 °C"],
  ["Mounting", "ISO 5210"],
  ["Body", "Aluminium alloy"],
];
