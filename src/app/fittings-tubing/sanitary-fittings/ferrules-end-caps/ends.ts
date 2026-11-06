// One entry per ferrule and end cap part code (Adaptix datasheets): 60 ferrules,
// 19 blind covers and 19 sight glass end caps. Used by the overview, the model
// list and the model pages. Figures are from the catalogue only.
// Each part is matched to the clamp that fits its flange (clamp diameter A).

import { SERIES, SAN_BASE } from "../data";
import { CLAMPS, CLAMP_BASE, type Clamp } from "../tri-clamp-clamps/clamps";

export const ENDS_BASE = `${SAN_BASE}/ferrules-end-caps`;

export type EndKind = "Ferrule" | "Blind cover" | "Sight glass end cap";
export type EndSlug = "ferrule" | "blind" | "sight";

export type EndPart = {
  id: string;
  partNumber: string;
  /** Catalogue order code: part number + material (MX) and finish (FX) */
  orderCode: string;
  kind: EndKind;
  slug: EndSlug;
  img: string;
  /** Flange / clamp diameter A as listed in the datasheet (mm) */
  a: string;
  /** Clamp size this part fits (the clamp's diameter A) */
  clampA: string;
  /** Buyer-friendly clamp size, e.g. "2½″ · DN 50 · 77.5 mm" */
  size: string;
  /** Short line-size label, e.g. "2½″" */
  short: string;
  iso: string;
  din: string;
  bs: string;
  /** Ferrules only: tube OD, tube ID, length L (mm) */
  tubeOd?: string;
  tubeId?: string;
  length?: string;
  /** Caps: thickness T; sight glass: glass d1 (mm) */
  t?: string;
  glass?: string;
  /** One-line summary of the key dimensions */
  dims: string;
  pressure: string;
  /** Matching clamps (same clamp size) */
  single: Clamp;
  double: Clamp;
};

const FERRULE = SERIES.find((s) => s.slug === "tri-clamp-ferrule")!;
const BLIND = SERIES.find((s) => s.slug === "tri-clamp-blind-cover")!;
const SIGHT = SERIES.find((s) => s.slug === "sight-glass-end-cap")!;
export const END_SERIES: Record<EndSlug, typeof FERRULE> = { ferrule: FERRULE, blind: BLIND, sight: SIGHT };

const SINGLES = CLAMPS.filter((c) => c.type === "Single pin");
const DOUBLES = CLAMPS.filter((c) => c.type === "Double-bolted");

/** The clamp whose diameter A is nearest the listed flange (datasheets round differently, e.g. 77 vs 77.5) */
function clampFor(a: string) {
  const n = parseFloat(a);
  const single = SINGLES.reduce((best, c) => (Math.abs(parseFloat(c.a) - n) < Math.abs(parseFloat(best.a) - n) ? c : best));
  const double = DOUBLES.find((d) => d.a === single.a)!;
  return { single, double };
}

function base(id: string, kind: EndKind, slug: EndSlug, img: string, a: string) {
  const { single, double } = clampFor(a);
  return {
    id, partNumber: id, orderCode: `${id}.MX.FX`, kind, slug, img, a, clampA: single.a, size: single.size, short: single.short,
    iso: single.iso, din: single.din, bs: single.bs, single, double,
  };
}

const ferrules: EndPart[] = FERRULE.rows.map(([part, a, od, id, l]) => ({
  ...base(part, "Ferrule", "ferrule", FERRULE.img!, a),
  tubeOd: od, tubeId: id, length: l,
  dims: `Tube ${od} × ${id} mm · L ${l} mm`,
  pressure: "Set by the clamp",
}));

const blinds: EndPart[] = BLIND.rows.map(([part, , , , a, t]) => ({
  ...base(part, "Blind cover", "blind", BLIND.img!, a),
  t,
  dims: `T ${t} mm`,
  pressure: "10–25 bar",
}));

const sights: EndPart[] = SIGHT.rows.map(([part, , , , a, glass, t]) => ({
  ...base(part, "Sight glass end cap", "sight", SIGHT.img!, a),
  glass, t,
  dims: `Glass ${glass} mm · T ${t} mm`,
  pressure: "1–16 bar",
}));

export const ENDS: EndPart[] = [...ferrules, ...blinds, ...sights];
export const END_KINDS: EndKind[] = ["Ferrule", "Blind cover", "Sight glass end cap"];
export const kindSlug = (k: EndKind): EndSlug => (k === "Ferrule" ? "ferrule" : k === "Blind cover" ? "blind" : "sight");
export const kindFromSlug = (s: string | null): EndKind | null => (s === "ferrule" ? "Ferrule" : s === "blind" ? "Blind cover" : s === "sight" ? "Sight glass end cap" : null);
export const kindPlural = (k: EndKind) => (k === "Ferrule" ? "ferrules" : k === "Blind cover" ? "blind covers" : "sight glass end caps");

/** Clamp sizes in order, smallest first (each a clamp `size` label) */
export const END_SIZES = SINGLES.map((c) => c.size).filter((s) => ENDS.some((e) => e.size === s));
/** Ferrule tube ODs, smallest first */
export const TUBE_ODS = Array.from(new Set(ferrules.map((f) => f.tubeOd!))).sort((x, y) => parseFloat(x) - parseFloat(y));
export const sizeIndex = (size: string) => END_SIZES.indexOf(size);
export const clampHref = (c: Clamp) => `${CLAMP_BASE}/products/${c.id}`;
export const endHref = (e: EndPart) => `${ENDS_BASE}/products/${e.id}`;

export const MATERIALS = ["316L", "316", "304", "304L", "Duplex"] as const;
export const FINISHES = ["Mechanically polished", "Mirror polished", "Electropolished"] as const;

/** Shared by every ferrule and cap (datasheets) */
export const END_COMMON: [string, string][] = [
  ["Material", "316L, 316, 304, 304L or duplex stainless steel"],
  ["Roughness", "Ra < 0.4 µm inside, Ra < 0.8 µm outside"],
  ["Hygienic class", "H3 / H4 to DIN 11866"],
  ["Marking", "Manufacturer, size, heat number and material grade"],
  ["Test reports", "Mechanical, chemical, NDT, IGC and PMI"],
  ["Certificate", "EN 10204 3.1 with every delivery"],
];
