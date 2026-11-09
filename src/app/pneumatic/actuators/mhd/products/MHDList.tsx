"use client";

// MHD (Micro) model list, in the same style as the needle valve and tri-clamp
// model tables: filters (yoke, action, size), search, sort, expandable rows, Quote.

import { useState, useMemo, Fragment } from "react";
import { Box, Drawer, IconButton } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import RFQModal from "@/src/app/Common/RFQCard/RFQModal";
import { type ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";
import { T } from "@/src/app/Landing/modern/tokens";
import { MHD_ACTUATOR_DATA, type MHDActuatorDTO } from "./hooks/mhdActuatorData";

export type MHDFilters = { yokes: string[]; actions: string[]; sizes: string[] };
export const EMPTY_FILTERS: MHDFilters = { yokes: [], actions: [], sizes: [] };
type Key = keyof MHDFilters;

const sizeOf = (m: MHDActuatorDTO) => m.model.slice(4); // "01-12"
const val = (m: MHDActuatorDTO, k: Key) => (k === "yokes" ? m.yoke : k === "actions" ? m.action : sizeOf(m));
const matches = (m: MHDActuatorDTO, f: MHDFilters, skip?: Key) =>
  (["yokes", "actions", "sizes"] as Key[]).every((k) => k === skip || !f[k].length || f[k].includes(val(m, k)));
const countBy = (list: MHDActuatorDTO[], k: Key) => list.reduce<Record<string, number>>((acc, m) => ((acc[val(m, k)] = (acc[val(m, k)] ?? 0) + 1), acc), {});
const OPTIONS: Record<Key, string[]> = {
  yokes: ["Symmetric (IS)", "Canted (IC)"],
  actions: ["Double acting", "Spring return"],
  sizes: ["01-12", "01-15", "01-17"],
};
const TITLES: Record<Key, string> = { yokes: "Yoke", actions: "Action", sizes: "Size" };
const nm = (n?: number) => (n === undefined ? "—" : n.toLocaleString("en-GB"));
const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";

type SortKey = "model" | "torque" | "size";
const SORTS: { key: SortKey; label: string }[] = [
  { key: "model", label: "Model" },
  { key: "torque", label: "Max torque" },
  { key: "size", label: "Size" },
];

function toRFQ(m: MHDActuatorDTO): ProductForRFQ {
  return {
    id: m.model,
    name: `MHD (Micro) actuator ${m.model}`,
    brand: "Susin",
    category: "Pneumatic Actuators",
    categoryId: "pneumatic-actuators",
    subCategory: "MHD (Micro) Series",
    thumbnail: m.imageUrl,
    description: m.description,
    keySpecs: [
      { label: "Model", value: m.model },
      { label: "Yoke", value: m.yoke },
      { label: "Action", value: m.action },
      { label: "ISO 5211", value: m.iso5211 },
      { label: "Output torque (Nm)", value: `${nm(m.torqueNmMin)} – ${nm(m.torqueNmMax)}` },
      ...(m.springEndTorqueNmMin !== undefined ? [{ label: "Spring torque (Nm)", value: `${nm(m.springEndTorqueNmMin)} – ${nm(m.springEndTorqueNmMax)}` }] : []),
    ],
    variantInfo: { count: 1, sizeRange: sizeOf(m) },
  };
}

const CHEVRON = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%230E1B12' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
const selectSx = { appearance: "none", WebkitAppearance: "none", backgroundImage: CHEVRON, backgroundRepeat: "no-repeat", backgroundPosition: "right 2px center", backgroundSize: "12px", cursor: "pointer", fontFamily: "inherit", fontWeight: 700, color: T.ink, outline: 0 } as const;
const pill = { display: "inline-block", px: 1.1, py: 0.35, borderRadius: 999, fontSize: "0.76rem", fontWeight: 700, whiteSpace: "nowrap" } as const;
const quoteBtn = {
  cursor: "pointer", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 0.5, px: 1.6, py: 0.75, borderRadius: 999,
  border: 0, bgcolor: T.green, color: T.greenDeep, fontSize: "0.8rem", fontWeight: 700, whiteSpace: "nowrap", transition: "background-color .15s",
  "&:hover": { bgcolor: "#55C93E" },
} as const;
const thumb = (m: MHDActuatorDTO, box: number) => (
  <Box sx={{ flexShrink: 0, width: box, height: box, borderRadius: "10px", bgcolor: T.surface, display: "grid", placeItems: "center", overflow: "hidden" }}>
    <Box component="img" src={m.imageUrl} alt="" loading="lazy" sx={{ width: "88%", height: "88%", objectFit: "contain", mixBlendMode: "multiply" }} />
  </Box>
);
const typeLabel = (m: MHDActuatorDTO) => `${m.yoke.includes("IS") ? "Symmetric" : "Canted"} · ${m.action === "Spring return" ? "SR" : "DA"}`;

function Sidebar({ filters, setFilters, counts, activeCount }: { filters: MHDFilters; setFilters: (f: MHDFilters) => void; counts: Record<Key, Record<string, number>>; activeCount: number }) {
  const toggle = (k: Key, v: string) => {
    const cur = filters[k];
    setFilters({ ...filters, [k]: cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v] });
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
      {(["yokes", "actions", "sizes"] as Key[]).map((k) => (
        <Box key={k} sx={{ borderTop: `1px solid ${T.border}`, py: 1.5 }}>
          <Box sx={{ mb: 1.25, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase !important", color: filters[k].length ? T.greenDark : T.muted }}>{TITLES[k]}</Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
            {OPTIONS[k].map((opt) => {
              const n = counts[k][opt] ?? 0;
              const on = filters[k].includes(opt);
              const off = !on && n === 0;
              return (
                <Box key={opt} component="button" type="button" aria-pressed={on} disabled={off} onClick={() => toggle(k, opt)}
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

function Details({ m, onQuote }: { m: MHDActuatorDTO; onQuote: () => void }) {
  const specs: [string, string][] = [
    ["Model", m.model], ["Yoke", m.yoke], ["Action", m.action], ["Size", sizeOf(m)],
    ["Output torque (Nm)", `${nm(m.torqueNmMin)} – ${nm(m.torqueNmMax)}`], ["Output torque (lb-in)", `${nm(m.torqueLbInMin)} – ${nm(m.torqueLbInMax)}`],
    ...(m.springEndTorqueNmMin !== undefined ? ([["Spring torque (Nm)", `${nm(m.springEndTorqueNmMin)} – ${nm(m.springEndTorqueNmMax)}`], ["Spring torque (lb-in)", `${nm(m.springEndTorqueLbInMin)} – ${nm(m.springEndTorqueLbInMax)}`]] as [string, string][]) : []),
    ["ISO 5211", m.iso5211], ["Air supply", "3.7 – 10 bar"], ["Protection", "IP66"], ["Temperature", "−20 to +80 °C"],
  ];
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "120px 1fr" }, gap: 2.5, p: { xs: 2, md: 2.5 }, bgcolor: "#FAFCFA", borderRadius: "14px", border: `1px solid ${T.border}` }}>
      <Box sx={{ width: 120, height: 120, borderRadius: "12px", bgcolor: "#fff", border: `1px solid ${T.border}`, display: "grid", placeItems: "center", overflow: "hidden" }}>
        <Box component="img" src={m.imageUrl} alt={m.model} sx={{ width: "88%", height: "88%", objectFit: "contain", mixBlendMode: "multiply" }} />
      </Box>
      <Box>
        <Box component="dl" sx={{ m: 0, display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: 1.5, mb: 2, "& dt": { fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: T.muted }, "& dd": { m: 0, mt: 0.25, fontSize: "0.88rem", fontWeight: 700, color: T.ink } }}>
          {specs.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </Box>
        <Box sx={{ fontSize: "0.8rem", color: T.muted, mb: 1.5 }}>
          {m.action === "Spring return" ? "Air torque at 4.2–7 bar on both spring sets; spring torque from the catalogue tables." : "Torque at 2.8–7 bar air, start to end of stroke."}
        </Box>
        <Box component="button" type="button" onClick={onQuote} sx={quoteBtn}>Request quote</Box>
      </Box>
    </Box>
  );
}

export default function MHDList({ filters, setFilters }: { filters: MHDFilters; setFilters: (f: MHDFilters) => void }) {
  const [drawer, setDrawer] = useState(false);
  const [q, setQ] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("model");
  const [open, setOpen] = useState<string | null>(null);
  const [quote, setQuote] = useState<ProductForRFQ | null>(null);

  const counts = useMemo(() => ({
    yokes: countBy(MHD_ACTUATOR_DATA.filter((m) => matches(m, filters, "yokes")), "yokes"),
    actions: countBy(MHD_ACTUATOR_DATA.filter((m) => matches(m, filters, "actions")), "actions"),
    sizes: countBy(MHD_ACTUATOR_DATA.filter((m) => matches(m, filters, "sizes")), "sizes"),
  }), [filters]);
  const activeCount = filters.yokes.length + filters.actions.length + filters.sizes.length;

  const rows = useMemo(() => {
    const term = q.trim().toLowerCase();
    const list = MHD_ACTUATOR_DATA.filter((m) => matches(m, filters) && (!term || [m.model, m.yoke, m.action, m.iso5211].join(" ").toLowerCase().includes(term)));
    return [...list].sort((a, b) =>
      sortKey === "torque" ? b.torqueNmMax - a.torqueNmMax
      : sortKey === "size" ? sizeOf(a).localeCompare(sizeOf(b)) || a.model.localeCompare(b.model)
      : a.model.localeCompare(b.model),
    );
  }, [filters, q, sortKey]);

  const sidebar = <Sidebar filters={filters} setFilters={setFilters} counts={counts} activeCount={activeCount} />;
  const chips = (["yokes", "actions", "sizes"] as Key[]).flatMap((k) => filters[k].map((v) => ({ k, v })));

  return (
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
            <Box component="input" value={q} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQ(e.target.value)} placeholder="Search model, e.g. ISR-01-15" aria-label="Search models" sx={{ flex: 1, minWidth: 0, border: 0, outline: 0, fontFamily: "inherit", fontSize: "0.92rem", color: T.ink, bgcolor: "transparent" }} />
          </Box>
          <Box component="button" type="button" onClick={() => setDrawer(true)} sx={{ display: { xs: "inline-flex", lg: "none" }, cursor: "pointer", alignItems: "center", gap: 0.75, height: 46, px: 2, borderRadius: 999, border: `1px solid ${T.border}`, bgcolor: "#fff", fontFamily: "inherit", fontSize: "0.9rem", fontWeight: 700, color: T.ink }}>
            <TuneRoundedIcon sx={{ fontSize: 18 }} /> Filters{activeCount ? ` (${activeCount})` : ""}
          </Box>
          <Box component="label" sx={{ display: "inline-flex", alignItems: "center", gap: 1, height: 46, px: 1.75, borderRadius: 999, border: `1px solid ${T.border}`, bgcolor: "#fff", fontSize: "0.85rem", color: T.body }}>
            Sort
            <Box component="select" value={sortKey} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSortKey(e.target.value as SortKey)} sx={{ ...selectSx, border: 0, bgcolor: "transparent", fontSize: "0.88rem", pl: 0.25, pr: 3, py: 0.5 }}>
              {SORTS.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 1, mb: 1.5 }}>
          <Box sx={{ fontSize: "0.88rem", color: T.body }}>Showing <b style={{ color: T.ink }}>{rows.length}</b> of <b style={{ color: T.ink }}>{MHD_ACTUATOR_DATA.length}</b> models</Box>
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
          <Box component="table" sx={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem", "& th": { textAlign: "left", px: 1.75, py: 1.5, bgcolor: "#FAFCFA", borderBottom: `1px solid ${T.border}`, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.muted, whiteSpace: "nowrap" }, "& td": { px: 1.75, py: 1.25, borderBottom: `1px solid ${T.border}`, color: T.body, verticalAlign: "middle" } }}>
            <thead>
              <tr>
                <th>Model</th>
                <th>Type</th>
                <th>Output torque</th>
                <th>Spring torque</th>
                <th>Mounting</th>
                <th style={{ textAlign: "right" }}>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 && <tr><td colSpan={6} style={{ textAlign: "center", padding: "48px 16px" }}>No models match. Try removing a filter.</td></tr>}
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
                            <Box sx={{ fontFamily: mono, fontWeight: 700, fontSize: "0.86rem", color: T.ink, whiteSpace: "nowrap" }}>{m.model}</Box>
                            <Box sx={{ fontSize: "0.74rem", color: T.muted }}>Size {sizeOf(m)}</Box>
                          </Box>
                        </Box>
                      </td>
                      <td><Box component="span" sx={{ ...pill, bgcolor: T.surface, color: T.ink, border: `1px solid ${T.border}` }}>{typeLabel(m)}</Box></td>
                      <td><Box component="span" sx={{ ...pill, bgcolor: T.greenSoft, color: T.greenDark }}>{nm(m.torqueNmMin)} – {nm(m.torqueNmMax)} Nm</Box></td>
                      <td style={{ whiteSpace: "nowrap" }}>{m.springEndTorqueNmMin !== undefined ? `${nm(m.springEndTorqueNmMin)} – ${nm(m.springEndTorqueNmMax)} Nm` : "—"}</td>
                      <td style={{ whiteSpace: "nowrap" }}>ISO 5211 {m.iso5211}</td>
                      <td style={{ textAlign: "right", whiteSpace: "nowrap" }}>
                        <Box component="button" type="button" onClick={(e: React.MouseEvent) => { e.stopPropagation(); setQuote(toRFQ(m)); }} sx={quoteBtn}>Quote</Box>
                      </td>
                    </Box>
                    {isOpen && (
                      <tr>
                        <td colSpan={6} style={{ padding: 12, background: "#fff" }}>
                          <Details m={m} onQuote={() => setQuote(toRFQ(m))} />
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
          {rows.map((m) => (
            <Box key={m.id} sx={{ p: 1.75, borderRadius: "18px", bgcolor: "#fff", border: `1px solid ${T.border}` }}>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                {thumb(m, 56)}
                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Box sx={{ fontFamily: mono, fontWeight: 700, fontSize: "0.9rem", color: T.ink }}>{m.model}</Box>
                  <Box sx={{ fontSize: "0.8rem", color: T.body }}>{m.yoke} · {m.action}</Box>
                </Box>
              </Box>
              <Box sx={{ mt: 1.25, display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                <Box component="span" sx={{ ...pill, bgcolor: T.greenSoft, color: T.greenDark }}>{nm(m.torqueNmMin)} – {nm(m.torqueNmMax)} Nm</Box>
                {m.springEndTorqueNmMin !== undefined && <Box component="span" sx={{ ...pill, bgcolor: T.surface, color: T.ink, border: `1px solid ${T.border}` }}>Spring {nm(m.springEndTorqueNmMin)} – {nm(m.springEndTorqueNmMax)} Nm</Box>}
              </Box>
              <Box component="button" type="button" onClick={() => setQuote(toRFQ(m))} sx={{ ...quoteBtn, mt: 1.5, width: "100%", justifyContent: "center" }}>Request quote</Box>
            </Box>
          ))}
          {rows.length === 0 && <Box sx={{ p: 4, textAlign: "center", color: T.body }}>No models match. Try removing a filter.</Box>}
        </Box>
      </Box>

      {quote && <RFQModal open={!!quote} onClose={() => setQuote(null)} product={quote} />}
    </Box>
  );
}
