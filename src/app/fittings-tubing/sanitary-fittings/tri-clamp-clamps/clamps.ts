// One entry per tri-clamp clamp part code (Adaptix datasheets): 19 single pin
// (S type) and 19 double-bolted (SSH type). Used by the model list and the
// model pages. Figures are from the catalogue only.

import { SERIES, SAN_BASE } from "../data";

export const CLAMP_BASE = `${SAN_BASE}/tri-clamp-clamps`;
/** Model list + model pages published? While false, links to them are shown but not clickable. */
export const MODELS_LIVE = false;

export type ClampType = "Single pin" | "Double-bolted";

export type Clamp = {
  id: string;
  partNumber: string;
  orderCode: string;
  type: ClampType;
  typeCode: "S type" | "SSH type";
  img: string;
  /** Clamp diameter A in mm */
  a: string;
  iso: string;
  din: string;
  bs: string;
  /** Buyer-friendly size label, e.g. "2½″ · DN 50 · 77.5 mm" */
  size: string;
  /** Short label for chips, e.g. "2½″" */
  short: string;
  dimLabel: "T" | "W";
  dim: string;
  pressure: string;
  closes: string;
  options: string;
};

const SINGLE = SERIES.find((s) => s.slug === "single-pin-tri-clamp")!;
const DOUBLE = SERIES.find((s) => s.slug === "double-bolted-clamp")!;

const real = (x: string) => (x && x !== "–" ? x : "");

function sizeOf(iso: string, din: string, bs: string, a: string) {
  const parts = [real(bs), real(iso), real(din)].filter(Boolean);
  // keep it short: inch (if any) plus one DN/DIN name, then the clamp diameter
  const named = parts.slice(0, 2).join(" · ");
  return { size: `${named ? named + " · " : ""}${a} mm`, short: real(bs) || real(din) || real(iso) || `${a} mm` };
}

function build(series: typeof SINGLE, type: ClampType): Clamp[] {
  const single = type === "Single pin";
  return series.rows.map((r) => {
    const [part, iso, din, bs, a, dim] = r;
    const { size, short } = sizeOf(iso, din, bs, a);
    return {
      id: part,
      partNumber: part,
      orderCode: `${part}.MX.FX.${single ? "WN" : "BM"}`,
      type,
      typeCode: single ? "S type" : "SSH type",
      img: series.img!,
      a,
      iso,
      din,
      bs,
      size,
      short,
      dimLabel: single ? "T" : "W",
      dim,
      pressure: single ? "9–50 bar at 150 °C" : "9–18 bar",
      closes: single ? "Hinge pin and wing nut" : "Two bolts, tightened with a tool",
      options: single ? "Different wing nuts available" : "Stainless steel A2 or brass nuts",
    };
  });
}

export const CLAMPS: Clamp[] = [...build(SINGLE, "Single pin"), ...build(DOUBLE, "Double-bolted")];
export const CLAMP_TYPES: ClampType[] = ["Single pin", "Double-bolted"];
/** Sizes in order, smallest first */
export const CLAMP_SIZES = Array.from(new Set(CLAMPS.map((c) => c.size))).sort((x, y) => parseFloat(x.split(" · ").pop()!) - parseFloat(y.split(" · ").pop()!));
export const typeSlug = (t: ClampType) => (t === "Single pin" ? "single" : "double");
export const typeFromSlug = (s: string | null): ClampType | null => (s === "single" ? "Single pin" : s === "double" ? "Double-bolted" : null);

export const CLAMP_COMMON: [string, string][] = [
  ["Standards", "ISO 2852, DIN 32676, BS 4825 (ASME BPE)"],
  ["Material", "Stainless steel 1.4301 (304) as standard; 316L, 316, 304L or duplex"],
  ["Surface finish", "Mechanically polished, electropolished or mirror polished"],
  ["Test pressure", "18–100 bar"],
  ["Hygienic class", "H3 / H4 to DIN 11866"],
  ["Marking", "Cast with maker’s logo or name, size, heat number and material grade"],
  ["Test reports", "Mechanical, chemical, NDT, IGC and PMI"],
  ["Certificate", "EN 10204 3.1 with every delivery"],
  ["Warranty", "180 days"],
];
