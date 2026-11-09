"use client";

// Tri-clamp clamp model table, in the same style as the needle valve model
// table: filters (type, size), search, sort, expandable rows, Quote.

import { useState, useMemo, Fragment } from "react";
import Link from "next/link";
import { Box, Drawer, IconButton } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import RFQModal from "@/src/app/Common/RFQCard/RFQModal";
import { type ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";
import { T } from "@/src/app/Landing/modern/tokens";
import { SAN_BRAND } from "../../data";
import { CLAMPS, CLAMP_TYPES, CLAMP_SIZES, CLAMP_BASE, type Clamp, type ClampType } from "../clamps";

export type ClampFilters = { types: ClampType[]; sizes: string[] };
export const EMPTY_FILTERS: ClampFilters = { types: [], sizes: [] };

const detailHref = (c: Clamp) => `${CLAMP_BASE}/products/${c.id}`;
const matches = (c: Clamp, f: ClampFilters, skip?: keyof ClampFilters) =>
  (skip === "types" || !f.types.length || f.types.includes(c.type)) && (skip === "sizes" || !f.sizes.length || f.sizes.includes(c.size));
const countBy = (list: Clamp[], pick: (c: Clamp) => string) => list.reduce<Record<string, number>>((acc, c) => ((acc[pick(c)] = (acc[pick(c)] ?? 0) + 1), acc), {});
const sizeIdx = (c: Clamp) => CLAMP_SIZES.indexOf(c.size);
// Short chip label for a size key, e.g. "2½″ · 77.5 mm"
const chipLabel = (size: string) => {
  const c = CLAMPS.find((x) => x.size === size)!;
  return c.short === `${c.a} mm` ? c.short : `${c.short} · ${c.a} mm`;
};

type SortKey = "size" | "type" | "partNumber";
const SORTS: { key: SortKey; label: string }[] = [
  { key: "size", label: "Size" },
  { key: "type", label: "Type" },
  { key: "partNumber", label: "Part number" },
];

function toRFQ(c: Clamp): ProductForRFQ {
  return {
    id: c.orderCode,
    name: `${c.type} tri-clamp ${c.partNumber}`,
    brand: SAN_BRAND,
    category: "Tri-Clamp Clamps",
    categoryId: "tri-clamp-clamps",
    subCategory: `${c.type} (${c.typeCode})`,
    thumbnail: c.img,
    description: `${SAN_BRAND} ${c.type.toLowerCase()} tri-clamp (${c.typeCode}), ${c.size}. Stainless steel, EN 10204 3.1 certificate.`,
    keySpecs: [
      { label: "Order code", value: c.orderCode },
      { label: "Part number", value: c.partNumber },
      { label: "Type", value: `${c.type} (${c.typeCode})` },
      { label: "Clamp size", value: c.size },
      { label: `${c.dimLabel} (mm)`, value: c.dim },
      { label: "Working pressure", value: c.pressure },
    ],
    variantInfo: { count: 1, sizeRange: c.size },
  };
}

const CHEVRON = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%230E1B12' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
const selectSx = { appearance: "none", WebkitAppearance: "none", backgroundImage: CHEVRON, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center", backgroundSize: "12px", cursor: "pointer", fontFamily: "inherit", fontWeight: 700, color: T.ink, outline: 0 } as const;
const pill = { display: "inline-block", px: 1.1, py: 0.35, borderRadius: 999, fontSize: "0.76rem", fontWeight: 700, whiteSpace: "nowrap" } as const;
const quoteBtn = {
  cursor: "pointer", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 0.5, px: 1.6, py: 0.75, borderRadius: 999,
  border: 0, bgcolor: T.green, color: T.greenDeep, fontSize: "0.8rem", fontWeight: 700, whiteSpace: "nowrap", transition: "background-color .15s", textDecoration: "none",
  "&:hover": { bgcolor: "#55C93E" },
} as const;

function Sidebar({ filters, setFilters, counts, activeCount }: { filters: ClampFilters; setFilters: (f: ClampFilters) => void; counts: { types: Record<string, number>; sizes: Record<string, number> }; activeCount: number }) {
  const [openG, setOpenG] = useState<Record<string, boolean>>({ types: true, sizes: true });
  const groups: { key: keyof ClampFilters; title: string; options: string[] }[] = [
    { key: "types", title: "Clamp type", options: CLAMP_TYPES },
    { key: "sizes", title: "Size", options: CLAMP_SIZES },
  ];
  const toggle = (key: keyof ClampFilters, val: string) => {
    const cur = filters[key] as string[];
    setFilters({ ...filters, [key]: cur.includes(val) ? cur.filter((v) => v !== val) : [...cur, val] });
  };
  return (
    <Box sx={{ width: { xs: "100%", lg: 280 }, boxSizing: "border-box", p: 2.5, fontFamily: T.font }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Box sx={{ fontSize: "1rem", fontWeight: 800, color: T.ink }}>Filters</Box>
        {activeCount > 0 && (
          <Box component="button" type="button" onClick={() => setFilters(EMPTY_FILTERS)} sx={{ border: 0, bgcolor: "transparent", cursor: "pointer", fontFamily: "inherit", fontSize: "0.82rem", fontWeight: 700, color: T.greenDark, p: 0 }}>
            Clear all ({activeCount})
          </Box>
        )}
      </Box>
      {groups.map((g) => {
        const sel = filters[g.key].length;
        const isOpen = openG[g.key] ?? false;
        return (
          <Box key={g.key} sx={{ borderTop: `1px solid ${T.border}` }}>
            <Box component="button" type="button" aria-expanded={isOpen} onClick={() => setOpenG((o) => ({ ...o, [g.key]: !isOpen }))} sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1, py: 1.5, border: 0, bgcolor: "transparent", cursor: "pointer", fontFamily: "inherit", textAlign: "left" }}>
              <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 1, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase !important", color: sel ? T.greenDark : T.muted }}>
                {g.title}
                {sel > 0 && <Box component="span" sx={{ minWidth: 18, height: 18, px: 0.5, borderRadius: 999, bgcolor: T.greenDark, color: "#fff", fontSize: "0.68rem", letterSpacing: 0, display: "inline-grid", placeItems: "center" }}>{sel}</Box>}
              </Box>
              <KeyboardArrowDownRoundedIcon sx={{ fontSize: 20, color: T.muted, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform .2s" }} />
            </Box>
            {isOpen && (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, pb: 1.75 }}>
                {g.options.map((opt) => {
                  const n = counts[g.key][opt] ?? 0;
                  const on = (filters[g.key] as string[]).includes(opt);
                  const off = !on && n === 0;
                  return (
                    <Box
                      key={opt}
                      component="button"
                      type="button"
                      aria-pressed={on}
                      disabled={off}
                      onClick={() => toggle(g.key, opt)}
                      sx={{ cursor: off ? "default" : "pointer", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 0.6, px: 1.25, py: 0.55, borderRadius: 999, fontSize: "0.8rem", fontWeight: on ? 700 : 600, border: `1px solid ${on ? T.greenDark : T.border}`, bgcolor: on ? T.greenDark : "#fff", color: on ? "#fff" : T.ink, opacity: off ? 0.4 : 1, transition: "all .15s", "&:hover": off ? {} : { borderColor: T.greenDark } }}
                    >
                      {g.key === "sizes" ? chipLabel(opt) : opt}
                      <Box component="span" sx={{ fontSize: "0.7rem", fontWeight: 700, color: on ? "rgba(255,255,255,0.8)" : T.muted }}>{n}</Box>
                    </Box>
                  );
                })}
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
}

function Details({ c, onQuote }: { c: Clamp; onQuote: () => void }) {
  const specs: [string, string][] = [
    ["Part number", c.partNumber], ["Order code", c.orderCode], ["Type", `${c.type} (${c.typeCode})`], ["Clamp size A", `${c.a} mm`],
    [`${c.dimLabel === "T" ? "Thickness T" : "Width W"}`, `${c.dim} mm`], ["Working pressure", c.pressure], ["Closes with", c.closes], ["Options", c.options],
  ];
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "120px 1fr" }, gap: 2.5, p: { xs: 2, md: 2.5 }, bgcolor: "#FAFCFA", borderRadius: "14px", border: `1px solid ${T.border}` }}>
      <Box sx={{ width: 120, height: 120, borderRadius: "12px", bgcolor: "#fff", border: `1px solid ${T.border}`, display: "grid", placeItems: "center", overflow: "hidden" }}>
        <Box component="img" src={c.img} alt={c.partNumber} sx={{ width: "82%", height: "82%", objectFit: "contain", mixBlendMode: "multiply" }} />
      </Box>
      <Box>
        <Box component="dl" sx={{ m: 0, display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: 1.5, mb: 2, "& dt": { fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: T.muted }, "& dd": { m: 0, mt: 0.25, fontSize: "0.88rem", fontWeight: 700, color: T.ink } }}>
          {specs.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </Box>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <Box component="button" type="button" onClick={onQuote} sx={quoteBtn}>Request quote</Box>
          <Box component={Link} href={detailHref(c)} sx={{ ...quoteBtn, bgcolor: "#fff", color: T.ink, border: `1px solid ${T.border}`, "&:hover": { borderColor: T.greenDark, color: T.greenDark } }}>
            Full product page <ArrowForwardRoundedIcon sx={{ fontSize: 15 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function ClampTable({ filters, setFilters }: { filters: ClampFilters; setFilters: (f: ClampFilters) => void }) {
  const [drawer, setDrawer] = useState(false);
  const [q, setQ] = useState("");
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(25);
  const [sortKey, setSortKey] = useState<SortKey>("size");
  const [open, setOpen] = useState<string | null>(null);
  const [quote, setQuote] = useState<ProductForRFQ | null>(null);
  const setF = (f: ClampFilters) => { setFilters(f); setPage(0); };

  const counts = useMemo(() => ({
    types: countBy(CLAMPS.filter((c) => matches(c, filters, "types")), (c) => c.type),
    sizes: countBy(CLAMPS.filter((c) => matches(c, filters, "sizes")), (c) => c.size),
  }), [filters]);
  const activeCount = filters.types.length + filters.sizes.length;

  const rows = useMemo(() => {
    const term = q.trim().toLowerCase();
    const list = CLAMPS.filter((c) => matches(c, filters) && (!term || [c.partNumber, c.orderCode, c.type, c.typeCode, c.size, c.iso, c.din, c.bs].join(" ").toLowerCase().includes(term)));
    return [...list].sort((a, b) =>
      sortKey === "size" ? sizeIdx(a) - sizeIdx(b) || a.type.localeCompare(b.type)
      : sortKey === "type" ? a.type.localeCompare(b.type) || sizeIdx(a) - sizeIdx(b)
      : a.partNumber.localeCompare(b.partNumber, "en", { numeric: true }),
    );
  }, [filters, q, sortKey]);

  const pages = Math.max(1, Math.ceil(rows.length / perPage));
  const cur = Math.min(page, pages - 1);
  const shown = rows.slice(cur * perPage, cur * perPage + perPage);
  const sidebar = <Sidebar filters={filters} setFilters={setF} counts={counts} activeCount={activeCount} />;
  const chips = [...filters.types.map((v) => ({ k: "types" as const, v })), ...filters.sizes.map((v) => ({ k: "sizes" as const, v }))];

  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", lg: "280px minmax(0,1fr)" }, gap: 2.5, alignItems: "start", fontFamily: T.font }}>
      <Box sx={{ display: { xs: "none", lg: "block" }, position: "sticky", top: 140, maxHeight: "calc(100vh - 160px)", overflowY: "auto", borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}` }}>{sidebar}</Box>
      <Drawer anchor="bottom" open={drawer} onClose={() => setDrawer(false)} PaperProps={{ sx: { borderRadius: "20px 20px 0 0", maxHeight: "85vh" } }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton aria-label="Close filters" onClick={() => setDrawer(false)}><CloseRoundedIcon /></IconButton>
        </Box>
        {sidebar}
        <Box sx={{ p: 2, pt: 0 }}>
          <Box component="button" type="button" onClick={() => setDrawer(false)} sx={{ ...quoteBtn, width: "100%", justifyContent: "center", py: 1.25, fontSize: "0.95rem" }}>Show {rows.length} models</Box>
        </Box>
      </Drawer>

      <Box sx={{ minWidth: 0 }}>
        {/* toolbar */}
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1.25, mb: 1.5 }}>
          <Box sx={{ flex: "1 1 260px", display: "flex", alignItems: "center", gap: 1, px: 1.75, height: 46, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}`, "&:focus-within": { borderColor: T.greenDark, boxShadow: "0 0 0 4px rgba(97,214,73,0.18)" } }}>
            <SearchRoundedIcon sx={{ fontSize: 20, color: T.muted }} />
            <Box component="input" value={q} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setQ(e.target.value); setPage(0); }} placeholder="Search part or order code, DN, DIN or inch size…" aria-label="Search models" sx={{ flex: 1, minWidth: 0, border: 0, outline: 0, fontFamily: "inherit", fontSize: "0.92rem", color: T.ink, bgcolor: "transparent" }} />
          </Box>
          <Box component="button" type="button" onClick={() => setDrawer(true)} sx={{ display: { xs: "inline-flex", lg: "none" }, cursor: "pointer", alignItems: "center", gap: 0.75, height: 46, px: 2, borderRadius: 999, border: `1px solid ${T.border}`, bgcolor: "#fff", fontFamily: "inherit", fontSize: "0.9rem", fontWeight: 700, color: T.ink }}>
            <TuneRoundedIcon sx={{ fontSize: 18 }} /> Filters{activeCount ? ` (${activeCount})` : ""}
          </Box>
          <Box component="label" sx={{ display: "inline-flex", alignItems: "center", gap: 1, height: 46, px: 1.75, borderRadius: 999, border: `1px solid ${T.border}`, bgcolor: "#fff", fontSize: "0.85rem", color: T.body }}>
            Sort
            <Box component="select" value={sortKey} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSortKey(e.target.value as SortKey)} sx={{ ...selectSx, border: 0, bgcolor: "transparent", fontSize: "0.88rem", pl: 0.25, pr: 3, py: 0.5, backgroundPosition: "right 2px center" }}>
              {SORTS.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 1, mb: 1.5 }}>
          <Box sx={{ fontSize: "0.88rem", color: T.body }}>
            Showing <b style={{ color: T.ink }}>{rows.length ? cur * perPage + 1 : 0}–{Math.min(rows.length, (cur + 1) * perPage)}</b> of <b style={{ color: T.ink }}>{rows.length}</b> models
          </Box>
          {chips.length > 0 && (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
              {chips.map((ch) => (
                <Box key={ch.k + ch.v} component="button" type="button" aria-label={`Remove ${ch.v}`} onClick={() => setF({ ...filters, [ch.k]: (filters[ch.k] as string[]).filter((x) => x !== ch.v) })} sx={{ cursor: "pointer", fontFamily: T.font, display: "inline-flex", alignItems: "center", gap: 0.5, pl: 1.25, pr: 0.75, py: 0.45, borderRadius: 999, border: "1px solid #CFEBC6", bgcolor: T.greenSoft, color: T.greenDark, fontSize: "0.8rem", fontWeight: 700 }}>
                  {ch.k === "sizes" ? chipLabel(ch.v) : ch.v} <CloseRoundedIcon sx={{ fontSize: 15 }} />
                </Box>
              ))}
            </Box>
          )}
        </Box>

        {/* desktop table */}
        <Box sx={{ display: { xs: "none", md: "block" }, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}`, overflowX: "auto" }}>
          <Box component="table" sx={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem", "& th": { textAlign: "left", px: 1.75, py: 1.5, bgcolor: "#FAFCFA", borderBottom: `1px solid ${T.border}`, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.muted, whiteSpace: "nowrap" }, "& td": { px: 1.75, py: 1.25, borderBottom: `1px solid ${T.border}`, color: T.body, verticalAlign: "middle" } }}>
            <thead>
              <tr>
                <th>Model</th>
                <th>Type</th>
                <th>Size</th>
                <th>Pressure</th>
                <th>T / W</th>
                <th style={{ textAlign: "right" }}>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {shown.length === 0 && (
                <tr><td colSpan={6} style={{ textAlign: "center", padding: "48px 16px" }}>No models match. Try removing a filter.</td></tr>
              )}
              {shown.map((c) => {
                const isOpen = open === c.id;
                return (
                  <Fragment key={c.id}>
                    <Box component="tr" onClick={() => setOpen(isOpen ? null : c.id)} sx={{ cursor: "pointer", bgcolor: isOpen ? T.greenSoft : "transparent", transition: "background-color .15s", "&:hover": { bgcolor: isOpen ? T.greenSoft : "#F7FBF6" } }}>
                      <td>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                          <Box component="span" aria-label={isOpen ? "Hide details" : "Show details"} sx={{ flexShrink: 0, display: "grid", placeItems: "center", width: 28, height: 28, borderRadius: "50%", border: `1px solid ${isOpen ? T.greenDark : T.border}`, bgcolor: isOpen ? T.greenSoft : "#fff", color: isOpen ? T.greenDark : T.ink, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform .2s" }}>
                            <KeyboardArrowDownRoundedIcon sx={{ fontSize: 18 }} />
                          </Box>
                          <Box sx={{ flexShrink: 0, width: 44, height: 44, borderRadius: "10px", bgcolor: T.surface, display: "grid", placeItems: "center", overflow: "hidden" }}>
                            <Box component="img" src={c.img} alt={`${c.type} tri-clamp ${c.id}`} loading="lazy" sx={{ width: "82%", height: "82%", objectFit: "contain", mixBlendMode: "multiply" }} />
                          </Box>
                          <Box>
                            <Box component={Link} href={detailHref(c)} onClick={(e: React.MouseEvent) => e.stopPropagation()} sx={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontWeight: 700, fontSize: "0.84rem", color: T.ink, textDecoration: "none", whiteSpace: "nowrap", "&:hover": { color: T.greenDark, textDecoration: "underline" } }}>
                              {c.partNumber}
                            </Box>
                            <Box sx={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: "0.72rem", color: T.muted, whiteSpace: "nowrap", mt: 0.25 }}>{c.orderCode}</Box>
                          </Box>
                        </Box>
                      </td>
                      <td><Box component="span" sx={{ ...pill, bgcolor: T.surface, color: T.ink, border: `1px solid ${T.border}` }}>{c.type}</Box></td>
                      <td>
                        <Box sx={{ fontWeight: 800, color: T.ink, whiteSpace: "nowrap" }}>{c.short === `${c.a} mm` ? c.short : c.short}</Box>
                        <Box sx={{ fontSize: "0.78rem", color: T.muted, whiteSpace: "nowrap" }}>{[c.iso, c.din].filter((x) => x !== "–" && x !== c.short).slice(0, 1).concat(`${c.a} mm`).join(" · ")}</Box>
                      </td>
                      <td><Box component="span" sx={{ ...pill, bgcolor: T.greenSoft, color: T.greenDark }}>{c.pressure.replace(" at 150 °C", "")}</Box></td>
                      <td style={{ whiteSpace: "nowrap" }}>{c.dimLabel} {c.dim} mm</td>
                      <td style={{ textAlign: "right", whiteSpace: "nowrap" }}>
                        <Box component="button" type="button" onClick={(e: React.MouseEvent) => { e.stopPropagation(); setQuote(toRFQ(c)); }} sx={quoteBtn}>Quote</Box>
                      </td>
                    </Box>
                    {isOpen && (
                      <tr>
                        <td colSpan={6} style={{ padding: 12, background: "#fff" }}>
                          <Details c={c} onQuote={() => setQuote(toRFQ(c))} />
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </Box>
        </Box>

        {/* phone cards */}
        <Box sx={{ display: { xs: "grid", md: "none" }, gap: 1.25 }}>
          {shown.map((c) => (
            <Box key={c.id} sx={{ p: 1.75, borderRadius: "18px", bgcolor: "#fff", border: `1px solid ${T.border}` }}>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <Box sx={{ flexShrink: 0, width: 56, height: 56, borderRadius: "12px", bgcolor: T.surface, display: "grid", placeItems: "center", overflow: "hidden" }}>
                  <Box component="img" src={c.img} alt={`${c.type} tri-clamp ${c.id}`} loading="lazy" sx={{ width: "82%", height: "82%", objectFit: "contain", mixBlendMode: "multiply" }} />
                </Box>
                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Box component={Link} href={detailHref(c)} sx={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontWeight: 700, fontSize: "0.86rem", color: T.ink, textDecoration: "none" }}>{c.partNumber}</Box>
                  <Box sx={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: "0.72rem", color: T.muted }}>{c.orderCode}</Box>
                  <Box sx={{ fontSize: "0.8rem", color: T.body, mt: 0.25 }}>{c.type} ({c.typeCode})</Box>
                </Box>
              </Box>
              <Box sx={{ mt: 1.25, display: "flex", flexWrap: "wrap", gap: 0.75, alignItems: "center" }}>
                <Box component="span" sx={{ ...pill, bgcolor: T.surface, color: T.ink, border: `1px solid ${T.border}` }}>{chipLabel(c.size)}</Box>
                <Box component="span" sx={{ ...pill, bgcolor: T.greenSoft, color: T.greenDark }}>{c.pressure}</Box>
              </Box>
              <Box sx={{ mt: 1.5, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}>
                <Box component={Link} href={detailHref(c)} sx={{ ...quoteBtn, justifyContent: "center", bgcolor: "#fff", color: T.ink, border: `1px solid ${T.border}` }}>Details</Box>
                <Box component="button" type="button" onClick={() => setQuote(toRFQ(c))} sx={{ ...quoteBtn, justifyContent: "center" }}>Request quote</Box>
              </Box>
            </Box>
          ))}
          {shown.length === 0 && <Box sx={{ p: 4, textAlign: "center", color: T.body }}>No models match. Try removing a filter.</Box>}
        </Box>

        {/* pagination */}
        {rows.length > 25 && (
          <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 1.5 }}>
            <Box component="label" sx={{ display: "inline-flex", alignItems: "center", gap: 1, fontSize: "0.85rem", color: T.body }}>
              Per page
              <Box component="select" value={perPage} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setPerPage(+e.target.value); setPage(0); }} sx={{ ...selectSx, border: `1px solid ${T.border}`, borderRadius: 999, pl: 1.75, pr: 4, py: 0.75, bgcolor: "#fff", fontSize: "0.88rem" }}>
                {[25, 50].map((n) => <option key={n} value={n}>{n}</option>)}
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              {Array.from({ length: pages }, (_, i) => (
                <Box key={i} component="button" type="button" aria-current={i === cur ? "page" : undefined} onClick={() => { setPage(i); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  sx={{ cursor: "pointer", width: 38, height: 38, borderRadius: "50%", fontFamily: "inherit", fontWeight: 700, fontSize: "0.88rem", display: "grid", placeItems: "center", border: `1px solid ${i === cur ? T.greenDark : T.border}`, bgcolor: i === cur ? T.greenDark : "#fff", color: i === cur ? "#fff" : T.ink }}>
                  {i + 1}
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>

      {quote && <RFQModal open={!!quote} onClose={() => setQuote(null)} product={quote} />}
    </Box>
  );
}
