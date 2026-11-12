"use client";

// Model list page for the pneumatic actuator series ("View all models"), in the
// MHD / needle valve style: header, filter chips, search, sort, expandable rows
// with full specs, Quote. Each series passes its rows as a ListDef.

import { Suspense, useState, Fragment } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Box, Drawer, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import RFQModal from "@/src/app/Common/RFQCard/RFQModal";
import { type ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";
import { T, textReset } from "@/src/app/Landing/modern/tokens";

export type { Cell, Item } from "./modelTypes";
import type { Cell, Item } from "./modelTypes";
export type ListDef = {
  title: string; // H1
  intro: string;
  back: { href: string; label: string };
  catalog?: { href: string; label: string };
  columns: string[]; // headers after "Model"
  facets: { key: string; title: string; options: string[] }[];
  sorts: { key: string; label: string; desc?: boolean }[];
  placeholder: string;
  items: Item[];
  fromParams?: (sp: URLSearchParams) => Filters; // links from the series page
  brief?: string[]; // spec labels shown when a row is opened (the rest is on the product page)
};
export type Filters = Record<string, string[]>;

import { brandOf } from "./brands";
const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
const CHEVRON = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%230E1B12' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
const selectSx = { appearance: "none", WebkitAppearance: "none", backgroundImage: CHEVRON, backgroundRepeat: "no-repeat", backgroundPosition: "right 2px center", backgroundSize: "12px", cursor: "pointer", fontFamily: "inherit", fontWeight: 700, color: T.ink, outline: 0 } as const;
const pill = { display: "inline-block", px: 1.1, py: 0.35, borderRadius: 999, fontSize: "0.76rem", fontWeight: 700, whiteSpace: "nowrap" } as const;
const quoteBtn = {
  cursor: "pointer", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 0.5, px: 1.6, py: 0.75, borderRadius: 999,
  border: 0, bgcolor: T.green, color: T.greenDeep, fontSize: "0.8rem", fontWeight: 700, whiteSpace: "nowrap", transition: "background-color .15s",
  "&:hover": { bgcolor: "#55C93E" },
} as const;

const renderCell = (c: Cell) => {
  if (typeof c === "string") return c;
  if (c.pill === "green") return <Box component="span" sx={{ ...pill, bgcolor: T.greenSoft, color: T.greenDark }}>{c.text}</Box>;
  if (c.pill === "grey") return <Box component="span" sx={{ ...pill, bgcolor: T.surface, color: T.ink, border: `1px solid ${T.border}` }}>{c.text}</Box>;
  return c.text;
};
const thumb = (m: Item, box: number) => (
  <Box sx={{ flexShrink: 0, width: box, height: box, borderRadius: "10px", bgcolor: T.surface, display: "grid", placeItems: "center", overflow: "hidden" }}>
    <Box component="img" src={m.image} alt={m.model} loading="lazy" sx={{ width: "88%", height: "88%", objectFit: "contain", mixBlendMode: "multiply" }} />
  </Box>
);

function Header({ d }: { d: ListDef }) {
  return (
    <Box sx={{ background: "linear-gradient(120deg, #EEF9EA 0%, #FFFFFF 55%, #EEF5FF 100%)", borderBottom: `1px solid ${T.border}` }}>
      <Box sx={{ maxWidth: 1400, mx: "auto", px: { xs: 2, md: 4 }, py: { xs: 4, md: 5.5 }, display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: { md: "flex-start" }, gap: 3 }}>
        <Box>
          <Box component={Link} href={d.back.href} sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, mb: 1.5, fontSize: "0.88rem", fontWeight: 700, color: T.greenDark, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
            <ArrowBackIcon sx={{ fontSize: 17 }} /> {d.back.label}
          </Box>
          <Box component="h1" sx={{ m: 0, fontSize: { xs: "2rem", md: "2.7rem" }, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, color: T.ink }}>{d.title}</Box>
          <Box component="p" sx={{ m: 0, mt: 1, maxWidth: 680, fontSize: "1rem", lineHeight: 1.6, color: T.body }}>{d.intro}</Box>
        </Box>
        {d.catalog && (
          <Box component="a" href={d.catalog.href} target="_blank" rel="noopener" sx={{ flexShrink: 0, alignSelf: "flex-start", mt: { md: 5.5 }, display: "inline-flex", alignItems: "center", gap: 1, px: 1.75, py: 1, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}`, textDecoration: "none", color: T.ink, fontSize: "0.82rem", fontWeight: 700, "&:hover": { borderColor: T.greenDark } }}>
            <Box component="img" src={brandOf(d.items[0]?.rfq.brand).logo} alt={brandOf(d.items[0]?.rfq.brand).name} sx={{ height: 20, width: "auto" }} />
            {d.catalog.label} <DownloadRoundedIcon sx={{ fontSize: 16 }} />
          </Box>
        )}
      </Box>
    </Box>
  );
}

function Sidebar({ d, filters, setFilters, counts, activeCount }: { d: ListDef; filters: Filters; setFilters: (f: Filters) => void; counts: Record<string, Record<string, number>>; activeCount: number }) {
  const toggle = (k: string, v: string) => {
    const cur = filters[k] ?? [];
    setFilters({ ...filters, [k]: cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v] });
  };
  return (
    <Box sx={{ width: { xs: "100%", lg: 280 }, boxSizing: "border-box", p: 2.5, fontFamily: T.font }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Box sx={{ fontSize: "1rem", fontWeight: 800, color: T.ink }}>Filters</Box>
        {activeCount > 0 && (
          <Box component="button" type="button" onClick={() => setFilters({})} sx={{ border: 0, bgcolor: "transparent", cursor: "pointer", fontFamily: "inherit", fontSize: "0.82rem", fontWeight: 700, color: T.greenDark, p: 0 }}>
            Clear all ({activeCount})
          </Box>
        )}
      </Box>
      {d.facets.map((f) => (
        <Box key={f.key} sx={{ borderTop: `1px solid ${T.border}`, py: 1.5 }}>
          <Box sx={{ mb: 1.25, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase !important", color: filters[f.key]?.length ? T.greenDark : T.muted }}>{f.title}</Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
            {f.options.map((opt) => {
              const n = counts[f.key]?.[opt] ?? 0;
              const on = !!filters[f.key]?.includes(opt);
              const off = !on && n === 0;
              return (
                <Box key={opt} component="button" type="button" aria-pressed={on} disabled={off} onClick={() => toggle(f.key, opt)}
                  sx={{ cursor: off ? "default" : "pointer", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 0.6, px: 1.25, py: 0.55, borderRadius: 999, fontSize: "0.8rem", fontWeight: on ? 700 : 600, border: `1px solid ${on ? T.greenDark : T.border}`, bgcolor: on ? T.greenDark : "#fff", color: on ? "#fff" : T.ink, opacity: off ? 0.4 : 1, transition: "all .15s", "&:hover": off ? {} : { borderColor: T.greenDark } }}>
                  {opt}
                  <Box component="span" sx={{ fontSize: "0.7rem", fontWeight: 700, color: on ? "rgba(255,255,255,0.8)" : T.muted }}>{n}</Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

// When the model has its own product page, the opened row stays short: a few
// figures that aren't already in the row, then the buttons. Everything else
// (full specs, tables, notes) is on the product page.
const cellText = (m: Item) => m.cells.map((c) => (typeof c === "string" ? c : c.text));
const briefOf = (m: Item, labels?: string[]) =>
  m.brief ?? (labels ? m.specs.filter(([k]) => labels.includes(k)) : m.specs.filter(([, v]) => !cellText(m).includes(v) && v !== m.model).slice(0, 4));

function Details({ m, onQuote, brief }: { m: Item; onQuote: () => void; brief?: string[] }) {
  const short = Boolean(m.href);
  const specs = short ? briefOf(m, brief) : m.specs;
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "120px minmax(0,1fr)" }, gap: 2.5, p: { xs: 2, md: 2.5 }, bgcolor: "#FAFCFA", borderRadius: "14px", border: `1px solid ${T.border}` }}>
      <Box sx={{ width: 120, height: 120, borderRadius: "12px", bgcolor: "#fff", border: `1px solid ${T.border}`, display: "grid", placeItems: "center", overflow: "hidden" }}>
        <Box component="img" src={m.image} alt={m.model} sx={{ width: "88%", height: "88%", objectFit: "contain", mixBlendMode: "multiply" }} />
      </Box>
      <Box sx={{ minWidth: 0 }}>
        <Box component="dl" sx={{ m: 0, display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: 1.5, mb: 2, "& dt": { fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: T.muted }, "& dd": { m: 0, mt: 0.25, fontSize: "0.88rem", fontWeight: 700, color: T.ink } }}>
          {specs.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </Box>
        {!short && m.table && (
          <Box sx={{ overflowX: "auto", mb: 2, borderRadius: "12px", border: `1px solid ${T.border}`, bgcolor: "#fff" }}>
            <Box component="table" sx={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem", "& th, & td": { px: 1.25, py: 0.8, borderBottom: `1px solid ${T.border}`, textAlign: "left", whiteSpace: "nowrap" }, "& th": { fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: T.muted, bgcolor: "#FAFCFA" }, "& td": { color: T.ink }, "& td:first-of-type": { fontWeight: 700 } }}>
              <thead><tr>{m.table.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
              <tbody>{m.table.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
            </Box>
          </Box>
        )}
        {!short && m.note && <Box sx={{ fontSize: "0.8rem", color: T.muted, mb: 1.5 }}>{m.note}</Box>}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {m.href && (
            <Box component={Link} href={m.href} sx={{ ...quoteBtn, bgcolor: "#fff", color: T.greenDark, border: `1.5px solid ${T.greenDark}`, textDecoration: "none", "&:hover": { bgcolor: T.greenSoft } }}>
              See full product details <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
            </Box>
          )}
          <Box component="button" type="button" onClick={onQuote} sx={quoteBtn}>Request quote</Box>
        </Box>
      </Box>
    </Box>
  );
}

function List({ d, initial }: { d: ListDef; initial: Filters }) {
  const [filters, setFilters] = useState<Filters>(initial);
  const [drawer, setDrawer] = useState(false);
  const [q, setQ] = useState("");
  const [sortKey, setSortKey] = useState(d.sorts[0].key);
  const [open, setOpen] = useState<string | null>(null);
  const [quote, setQuote] = useState<ProductForRFQ | null>(null);

  const matches = (m: Item, skip?: string) => d.facets.every((f) => f.key === skip || !filters[f.key]?.length || filters[f.key].includes(m.facets[f.key]));
  const counts = Object.fromEntries(d.facets.map((f) => [f.key, d.items.filter((m) => matches(m, f.key)).reduce<Record<string, number>>((a, m) => ((a[m.facets[f.key]] = (a[m.facets[f.key]] ?? 0) + 1), a), {})]));
  const activeCount = Object.values(filters).reduce((n, v) => n + v.length, 0);

  const rows = (() => {
    const term = q.trim().toLowerCase();
    const s = d.sorts.find((x) => x.key === sortKey)!;
    const list = d.items.filter((m) => matches(m) && (!term || m.search.toLowerCase().includes(term)));
    return [...list].sort((a, b) => {
      const x = a.sort[s.key], y = b.sort[s.key];
      const c = typeof x === "number" && typeof y === "number" ? x - y : String(x).localeCompare(String(y), "en", { numeric: true });
      return s.desc ? -c : c;
    });
  })();

  const sidebar = <Sidebar d={d} filters={filters} setFilters={setFilters} counts={counts} activeCount={activeCount} />;
  const chips = Object.entries(filters).flatMap(([k, vs]) => vs.map((v) => ({ k, v })));
  const cols = d.columns.length + 2;

  return (
    <Box sx={{ maxWidth: 1400, mx: "auto", px: { xs: 2, md: 4 }, pt: { xs: 3, md: 4 } }}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", lg: "280px minmax(0,1fr)" }, gap: 2.5, alignItems: "start", fontFamily: T.font }}>
        <Box sx={{ display: { xs: "none", lg: "block" }, position: "sticky", top: 140, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}` }}>{sidebar}</Box>
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
          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1.25, mb: 1.5 }}>
            <Box sx={{ flex: "1 1 260px", display: "flex", alignItems: "center", gap: 1, px: 1.75, height: 46, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}`, "&:focus-within": { borderColor: T.greenDark, boxShadow: "0 0 0 4px rgba(97,214,73,0.18)" } }}>
              <SearchRoundedIcon sx={{ fontSize: 20, color: T.muted }} />
              <Box component="input" value={q} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQ(e.target.value)} placeholder={d.placeholder} aria-label="Search models" sx={{ flex: 1, minWidth: 0, border: 0, outline: 0, fontFamily: "inherit", fontSize: "0.92rem", color: T.ink, bgcolor: "transparent" }} />
            </Box>
            <Box component="button" type="button" onClick={() => setDrawer(true)} sx={{ display: { xs: "inline-flex", lg: "none" }, cursor: "pointer", alignItems: "center", gap: 0.75, height: 46, px: 2, borderRadius: 999, border: `1px solid ${T.border}`, bgcolor: "#fff", fontFamily: "inherit", fontSize: "0.9rem", fontWeight: 700, color: T.ink }}>
              <TuneRoundedIcon sx={{ fontSize: 18 }} /> Filters{activeCount ? ` (${activeCount})` : ""}
            </Box>
            <Box component="label" sx={{ display: "inline-flex", alignItems: "center", gap: 1, height: 46, px: 1.75, borderRadius: 999, border: `1px solid ${T.border}`, bgcolor: "#fff", fontSize: "0.85rem", color: T.body }}>
              Sort
              <Box component="select" value={sortKey} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSortKey(e.target.value)} sx={{ ...selectSx, border: 0, bgcolor: "transparent", fontSize: "0.88rem", pl: 0.25, pr: 3, py: 0.5 }}>
                {d.sorts.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 1, mb: 1.5 }}>
            <Box sx={{ fontSize: "0.88rem", color: T.body }}>Showing <b style={{ color: T.ink }}>{rows.length}</b> of <b style={{ color: T.ink }}>{d.items.length}</b> models</Box>
            {chips.length > 0 && (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                {chips.map((ch) => (
                  <Box key={ch.k + ch.v} component="button" type="button" aria-label={`Remove ${ch.v}`} onClick={() => setFilters({ ...filters, [ch.k]: filters[ch.k].filter((x) => x !== ch.v) })} sx={{ cursor: "pointer", fontFamily: T.font, display: "inline-flex", alignItems: "center", gap: 0.5, pl: 1.25, pr: 0.75, py: 0.45, borderRadius: 999, border: "1px solid #CFEBC6", bgcolor: T.greenSoft, color: T.greenDark, fontSize: "0.8rem", fontWeight: 700 }}>
                    {ch.v} <CloseRoundedIcon sx={{ fontSize: 15 }} />
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          {/* desktop table */}
          <Box sx={{ display: { xs: "none", md: "block" }, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}`, overflowX: "auto" }}>
            <Box component="table" sx={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem", "& th": { textAlign: "left", px: 1.25, py: 1.5, bgcolor: "#FAFCFA", borderBottom: `1px solid ${T.border}`, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.muted, whiteSpace: "nowrap" }, "& td": { px: 1.25, py: 1.25, borderBottom: `1px solid ${T.border}`, color: T.body, verticalAlign: "middle", whiteSpace: "nowrap" }, "& th:first-of-type, & td:first-of-type": { pl: 2 }, "& th:last-of-type, & td:last-of-type": { pr: 2 } }}>
              <thead>
                <tr>
                  <th>Model</th>
                  {d.columns.map((c) => <th key={c}>{c}</th>)}
                  <th style={{ textAlign: "right" }}>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 && <tr><td colSpan={cols} style={{ textAlign: "center", padding: "48px 16px" }}>No models match. Try removing a filter.</td></tr>}
                {rows.map((m) => {
                  const isOpen = open === m.id;
                  return (
                    <Fragment key={m.id}>
                      <Box component="tr" onClick={() => setOpen(isOpen ? null : m.id)} sx={{ cursor: "pointer", bgcolor: isOpen ? T.greenSoft : "transparent", transition: "background-color .15s", "&:hover": { bgcolor: isOpen ? T.greenSoft : "#F7FBF6" } }}>
                        <td>
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                            <Box component="span" aria-label={isOpen ? "Hide details" : "Show details"} sx={{ flexShrink: 0, display: "grid", placeItems: "center", width: 28, height: 28, borderRadius: "50%", border: `1px solid ${isOpen ? T.greenDark : T.border}`, bgcolor: isOpen ? T.greenSoft : "#fff", color: isOpen ? T.greenDark : T.ink, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform .2s" }}>
                              <KeyboardArrowDownRoundedIcon sx={{ fontSize: 18 }} />
                            </Box>
                            {thumb(m, 44)}
                            <Box>
                              {m.href
                                ? <Box component={Link} href={m.href} onClick={(e: React.MouseEvent) => e.stopPropagation()} sx={{ fontFamily: mono, fontWeight: 700, fontSize: "0.86rem", color: T.ink, textDecoration: "none", "&:hover": { color: T.greenDark, textDecoration: "underline" } }}>{m.model}</Box>
                                : <Box sx={{ fontFamily: mono, fontWeight: 700, fontSize: "0.86rem", color: T.ink }}>{m.model}</Box>}
                              <Box sx={{ fontSize: "0.74rem", color: T.muted }}>{m.sub}</Box>
                            </Box>
                          </Box>
                        </td>
                        {m.cells.map((c, i) => <td key={i}>{renderCell(c)}</td>)}
                        <td style={{ textAlign: "right" }}>
                          <Box component="button" type="button" onClick={(e: React.MouseEvent) => { e.stopPropagation(); setQuote(m.rfq); }} sx={quoteBtn}>Quote</Box>
                        </td>
                      </Box>
                      {isOpen && (
                        <tr>
                          <td colSpan={cols} style={{ padding: 12, background: "#fff", whiteSpace: "normal" }}>
                            <Details m={m} brief={d.brief} onQuote={() => setQuote(m.rfq)} />
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
            {rows.map((m) => {
              const isOpen = open === m.id;
              return (
                <Box key={m.id} sx={{ p: 1.75, borderRadius: "18px", bgcolor: "#fff", border: `1px solid ${T.border}` }}>
                  <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                    {thumb(m, 56)}
                    <Box sx={{ minWidth: 0, flex: 1 }}>
                      <Box component={m.href ? Link : "div"} href={m.href} sx={{ display: "block", fontFamily: mono, fontWeight: 700, fontSize: "0.9rem", color: T.ink, textDecoration: "none" }}>{m.model}</Box>
                      <Box sx={{ fontSize: "0.8rem", color: T.body }}>{m.sub}</Box>
                    </Box>
                  </Box>
                  <Box sx={{ mt: 1.25, display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                    {m.cells.filter((c) => typeof c !== "string" && c.pill).map((c, i) => <Box key={i}>{renderCell(c)}</Box>)}
                  </Box>
                  {isOpen && <Box sx={{ mt: 1.5 }}><Details m={m} brief={d.brief} onQuote={() => setQuote(m.rfq)} /></Box>}
                  <Box sx={{ display: "flex", gap: 1, mt: 1.5 }}>
                    <Box component="button" type="button" onClick={() => setOpen(isOpen ? null : m.id)} sx={{ ...quoteBtn, flex: 1, justifyContent: "center", bgcolor: "#fff", color: T.ink, border: `1px solid ${T.border}`, "&:hover": { bgcolor: T.surface } }}>{isOpen ? "Hide specs" : "Full specs"}</Box>
                    <Box component="button" type="button" onClick={() => setQuote(m.rfq)} sx={{ ...quoteBtn, flex: 1, justifyContent: "center" }}>Request quote</Box>
                  </Box>
                </Box>
              );
            })}
            {rows.length === 0 && <Box sx={{ p: 4, textAlign: "center", color: T.body }}>No models match. Try removing a filter.</Box>}
          </Box>
        </Box>

        {quote && <RFQModal open={!!quote} onClose={() => setQuote(null)} product={quote} />}
      </Box>
    </Box>
  );
}

// Only the list reads the URL, so the header (H1, intro) renders without waiting for it
function WithParams({ d }: { d: ListDef }) {
  const sp = useSearchParams();
  const initial = d.fromParams ? d.fromParams(new URLSearchParams(sp.toString())) : {};
  return <List key={sp.toString()} d={d} initial={initial} />;
}

export default function ModelList({ def }: { def: ListDef }) {
  return (
    <Box sx={{ ...textReset, bgcolor: "#F7FAF7", minHeight: "100vh", pb: { xs: 6, md: 10 } }}>
      <Header d={def} />
      <Suspense fallback={<Box sx={{ minHeight: 480 }} />}>
        <WithParams d={def} />
      </Suspense>
    </Box>
  );
}
