// ITQ Series heavy-duty quarter-turn electric actuators (100–9,000 Nm).
// Every value below comes from the Susin I-Tork ITQ catalogue (Electric - ITQ Heavy Duty.pdf),
// "Technical information" table.
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";

// Heavy-duty ITQ photos from the ITQ catalogue (cover and p.3). The older itq.webp
// shows an ITQ Micro (nameplate ITQ-0020), so it is no longer used here.
export const ITQ_IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itq-heavy-duty.webp";
export const ITQ_ON_VALVE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itq-on-valve.webp";

export const ITQ_CATALOG = SUSIN_CATALOG.ITQ;

export interface ITQModel {
  model: string;
  torqueNm: number;
  dutyS4: number; // %
  time50: number; // s
  time60: number; // s
  time24dc: number | null; // s, no load; null = not available
  boreKey: number; // mm
  boreSquare: number; // mm
  mounting: string;
  weightKg: number;
  handwheelTurns: number;
  // rated current (A): [50 Hz, 60 Hz]
  a1ph110: [number, number];
  a1ph220: [number, number];
  a3ph380: [number, number];
  a3ph440: [number, number];
  a24v: number | null;
}

const m = (
  model: string, torqueNm: number, dutyS4: number, time50: number, time60: number, time24dc: number | null,
  boreKey: number, boreSquare: number,
  a1ph110: [number, number], a1ph220: [number, number], a3ph380: [number, number], a3ph440: [number, number],
  a24v: number | null, mounting: string, weightKg: number, handwheelTurns: number,
): ITQModel => ({
  model, torqueNm, dutyS4, time50, time60, time24dc, boreKey, boreSquare,
  a1ph110, a1ph220, a3ph380, a3ph440, a24v, mounting, weightKg, handwheelTurns,
});

export const ITQ_MODELS: ITQModel[] = [
  m("ITQ 0100", 100, 50, 21, 18, 18, 22, 20, [0.98, 1.1], [0.52, 0.58], [0.43, 0.33], [0.59, 0.42], 2.8, "ISO 5211 F07", 7, 10),
  m("ITQ 0160", 160, 50, 26, 22, 33, 25, 23, [1.6, 1.7], [0.85, 0.9], [0.3, 0.3], [0.3, 0.32], 1.8, "ISO 5211 F07 / F10", 15, 12),
  m("ITQ 0240", 240, 50, 26, 22, 33, 25, 23, [1.62, 1.72], [0.87, 0.9], [0.32, 0.32], [0.32, 0.35], 2.4, "ISO 5211 F07 / F10", 15, 12),
  m("ITQ 0350", 350, 50, 31, 26, 37, 40, 34, [1.72, 1.8], [0.92, 0.95], [0.32, 0.32], [0.32, 0.35], 3.8, "ISO 5211 F10 / F12", 20, 14),
  m("ITQ 0500", 500, 30, 31, 26, 34, 40, 34, [3.6, 3.9], [1.5, 1.6], [0.52, 0.56], [0.55, 0.58], 5.0, "ISO 5211 F10 / F12", 20, 14),
  m("ITQ 0800", 800, 25, 39, 32, null, 48, 40, [3.9, 4.2], [2.05, 2.2], [0.82, 0.88], [0.82, 0.88], null, "ISO 5211 F12 / F14", 25, 17),
  m("ITQ 1100", 1100, 25, 39, 32, null, 48, 40, [3.9, 4.3], [2.15, 2.3], [0.84, 0.9], [0.84, 0.88], null, "ISO 5211 F12 / F14", 25, 17),
  m("ITQ 2000", 2000, 25, 59, 50, null, 75, 64, [4.95, 4.55], [2.95, 3.15], [1.5, 1.8], [2.3, 2.2], null, "ISO 5211 F16", 42, 13),
  m("ITQ 3000", 3000, 25, 59, 50, null, 75, 64, [6.6, 6.1], [3.75, 3.85], [1.6, 2.0], [2.5, 2.4], null, "ISO 5211 F16", 42, 13),
  m("ITQ 6000", 6000, 25, 178, 149, null, 120, 100, [4.95, 4.55], [2.95, 3.15], [1.5, 1.8], [2.3, 2.2], null, "ISO 5211 F25 / F30", 152, 39),
  m("ITQ 9000", 9000, 25, 178, 149, null, 120, 100, [6.6, 6.1], [3.75, 3.85], [1.6, 2.0], [2.5, 2.4], null, "ISO 5211 F25 / F30", 152, 39),
];

// Shared by every model ("Standard specification")
export const ITQ_COMMON = [
  { label: "Enclosure", value: "IP67, NEMA 4, 4X & 6 (option IP68)" },
  { label: "Power Supply", value: "110 / 220 VAC 1Ph, 380 / 440 VAC 3Ph, 50/60 Hz ±10%; 24 VDC up to ITQ 0500" },
  { label: "Duty Cycle (On/Off)", value: "S2 – 10 to 30 min" },
  { label: "Motor", value: "Squirrel cage induction, insulation class F" },
  { label: "Limit Switches", value: "2 × Open / Close (SPDT 250 VAC / 10 A)" },
  { label: "Torque Switches", value: "1 × Open / Close (except ITQ 0100)" },
  { label: "Travel Angle", value: "90° ± 5° (0° – 100°)" },
  { label: "Manual Override", value: "De-clutchable handwheel" },
  { label: "Self Locking", value: "Double worm gearing (no brake)" },
  { label: "Space Heater", value: "5 W (110 / 220 VAC)" },
  { label: "Cable Entries", value: "2 × PF 3/4" },
  { label: "Ambient Temperature", value: "-20°C to +70°C (with control options -10°C to +60°C)" },
  { label: "Explosion Proof", value: "Option: Ex d II B T4 (KTL, ATEX, NEPSI)" },
];
