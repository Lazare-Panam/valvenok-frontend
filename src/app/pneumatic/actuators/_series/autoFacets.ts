// Filters for every column of a model list, built from the table itself so each
// series list gets them without extra data:
// - the list's own facets (series, size, flange…) stay as they are;
// - a text column with a few distinct values becomes a chip filter;
// - a number column (torque, thrust, weight, time…) becomes range buckets such
//   as "100 – 500 Nm"; a model whose range overlaps a bucket is in it, so a
//   5 – 38 Nm actuator shows under both "Up to 10" and "10 – 50".
// Columns that combine two figures ("Air · time") give one filter per figure.
import type { Cell, Item } from "./modelTypes";

export type Facet = { key: string; title: string; options: string[]; valuesOf: (m: Item) => string[] };

const text = (c: Cell | undefined) => (c === undefined ? "" : typeof c === "string" ? c : c.text).trim();
const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

// "5 – 38 Nm", "< 0.3 s", "Up to 98,948 Nm", "Ø 35 / 40 mm", "32:1", "1,946 / 962 Nm"
const parse = (raw: string): { lo: number; hi: number; unit: string } | null => {
  if (/×/.test(raw)) return null; // A × B × C dimensions are not one figure
  const t = raw.replace(/^(up to|max\.?|≈|~)\s*/i, "").replace(/^[<>≤≥]\s*/, "").replace(/Ø\s*/g, "").replace(/\s*([a-zA-Z]+)\s*\/\s*(?=[\d.])/g, " / ").trim();
  const ratio = t.match(/^([\d.,]+)\s*:\s*1$/);
  if (ratio) { const v = Number(ratio[1].replace(/,/g, "")); return { lo: v, hi: v, unit: ":1" }; }
  const m = t.match(/^([\d.,]+(?:\s*[–\-/]\s*[\d.,]+)*)\s*([a-zA-Z%°²³]+(?:\/[a-zA-Z]+)?(?:·[a-zA-Z]+)?)?$/);
  if (!m) return null;
  const nums = m[1].split(/[–\-/]/).map((x) => Number(x.trim().replace(/,/g, ""))).filter((x) => !Number.isNaN(x));
  if (!nums.length) return null;
  return { lo: Math.min(...nums), hi: Math.max(...nums), unit: m[2] ?? "" };
};

const fmt = (n: number) => n.toLocaleString("en-GB", { maximumFractionDigits: n < 1 ? 2 : n < 10 ? 1 : 0 });

// Bucket edges: 1-2-5 steps on a log scale for wide ranges, even steps otherwise
const edgesFor = (lo: number, hi: number): number[] => {
  if (!(hi > lo)) return [];
  const pick = (all: number[]) => all.filter((e) => e > lo && e < hi);
  if (lo > 0 && hi / lo >= 8) {
    for (const steps of [[1, 2, 5], [1, 3], [1]]) {
      const out: number[] = [];
      for (let k = Math.floor(Math.log10(lo)); k <= Math.ceil(Math.log10(hi)); k++) for (const s of steps) out.push(s * 10 ** k);
      const e = pick(out);
      if (e.length <= 5) return e.length >= 2 ? e : pick(out);
    }
    const all: number[] = [];
    for (let k = Math.floor(Math.log10(lo)); k <= Math.ceil(Math.log10(hi)); k++) all.push(10 ** k);
    return pick(all).filter((_, i) => i % 2 === 0);
  }
  const raw = (hi - lo) / 4;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const step = [1, 2, 2.5, 5, 10].map((s) => s * mag).find((s) => s >= raw) ?? raw;
  const out: number[] = [];
  for (let e = Math.ceil(lo / step) * step; e < hi; e += step) out.push(Number(e.toPrecision(6)));
  return pick(out);
};

export function buildFacets(columns: string[], given: { key: string; title: string; options: string[] }[], items: Item[]): Facet[] {
  // A "Model" filter only repeats the search box, so it is left out
  const kept = given.filter((f) => f.key !== "model" && norm(f.title) !== "model");
  const facets: Facet[] = kept.map((f) => ({ ...f, valuesOf: (m: Item) => [m.facets[f.key]] }));
  const titles = given.map((f) => norm(f.title));

  columns.forEach((header, ci) => {
    const parts = header.split(/\s*·\s*/);
    parts.forEach((title, pj) => {
      const valueAt = (m: Item) => {
        const segs = text(m.cells[ci]).split(/\s*·\s*/);
        // fewer figures than the header: they belong to the last part(s)
        const idx = pj - (parts.length - segs.length);
        return idx >= 0 ? segs[idx] ?? "" : "";
      };
      const vals = items.map(valueAt);
      const present = vals.filter(Boolean);
      if (present.length < 2) return;
      const t = norm(title);
      if (titles.some((g) => g && (g === t || g.startsWith(t) || t.startsWith(g)))) return;
      if (present.some((v) => v.includes("×"))) return; // dimension columns
      const distinct = Array.from(new Set(present));
      if (given.some((f) => distinct.every((v) => f.options.includes(v)))) return;

      const parsed = present.map(parse);
      const nums = parsed.filter((p): p is NonNullable<typeof p> => !!p);
      const units = Array.from(new Set(nums.map((p) => p.unit)));
      const key = `col${ci}_${pj}`;
      const label = title.charAt(0).toUpperCase() + title.slice(1);

      const textVals = Array.from(new Set(present.filter((v) => !parse(v))));
      if (nums.length >= 4 && textVals.length <= 3 && units.length === 1 && new Set(nums.map((p) => `${p.lo}-${p.hi}`)).size > 5) {
        const unit = units[0] === ":1" ? "" : units[0] ? ` ${units[0]}` : "";
        const lo = Math.min(...nums.map((p) => p.lo));
        const hi = Math.max(...nums.map((p) => p.hi));
        const edges = edgesFor(lo, hi);
        if (edges.length < 1) return;
        const ratio = units[0] === ":1";
        const f = (n: number) => (ratio ? `${fmt(n)}:1` : fmt(n));
        const bands = [
          { name: `Up to ${f(edges[0])}${unit}`, a: -Infinity, b: edges[0] },
          ...edges.slice(1).map((e, i) => ({ name: `${f(edges[i])} – ${f(e)}${unit}`, a: edges[i], b: e })),
          { name: `Over ${f(edges[edges.length - 1])}${unit}`, a: edges[edges.length - 1], b: Infinity },
        ];
        const others = textVals;
        const live = bands.filter((b) => nums.some((p) => p.hi >= b.a && p.lo < b.b));
        facets.push({
          key,
          title: label,
          options: [...live.map((b) => b.name), ...others],
          valuesOf: (m) => {
            const v = valueAt(m);
            const p = v ? parse(v) : null;
            if (!p) return v ? [v] : [];
            return bands.filter((b) => p.hi >= b.a && p.lo < b.b).map((b) => b.name);
          },
        });
        return;
      }
      // few distinct values (or a short list): one chip per value, smallest first
      if (distinct.length >= 2 && distinct.length <= 14) {
        const order = (v: string) => parse(v)?.lo ?? Infinity;
        const options = distinct.sort((a, b) => order(a) - order(b) || a.localeCompare(b, "en", { numeric: true }));
        facets.push({ key, title: label, options, valuesOf: (m) => { const v = valueAt(m); return v ? [v] : []; } });
      }
    });
  });
  // The headline figure (torque, or thrust on linear actuators) goes first
  const lead = (f: Facet) => (/torque/i.test(f.title) ? 0 : /thrust|force/i.test(f.title) ? 1 : 2);
  const first = Math.min(...facets.map(lead));
  return [...facets.filter((f) => lead(f) === first && first < 2).slice(0, 1), ...facets.filter((f, i, a) => !(lead(f) === first && first < 2 && a.findIndex((x) => lead(x) === first) === i))];
}
