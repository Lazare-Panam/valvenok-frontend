"use client";

// One pneumatic actuator model, in the same style as the tri-clamp and needle valve
// model pages: photo + key facts, a picker for the other models in the series,
// quote / WhatsApp, full specs, the model's own table, help cards, nearby models.

import { useState } from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import RFQModal from "@/src/app/Common/RFQCard/RFQModal";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import type { Item } from "./modelTypes";

export type SeriesMeta = {
  name: string; // "PDS"
  kind: string; // "Scotch yoke pneumatic actuator"
  overview: string; // series page URL
  products: string; // model list URL
  catalog: { href: string; label: string };
  facts: number; // how many specs to show as key-fact tiles
};

import { brandOf } from "./brands";
const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
const WA = (model: string, url: string, brand = "Susin") =>
  `https://wa.me/447368137917?text=${encodeURIComponent(`Hello Valvenok, I have a question about the ${brand} ${model} actuator (https://www.valvenok.com${url}).`)}`;
const btn = (primary: boolean) =>
  ({
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 1, px: 3, py: 1.4, borderRadius: 999, fontWeight: 700, fontSize: "0.95rem",
    textDecoration: "none", cursor: "pointer", fontFamily: "inherit", transition: "all .2s",
    ...(primary
      ? { border: 0, bgcolor: T.green, color: T.greenDeep, "&:hover": { bgcolor: "#55C93E" } }
      : { bgcolor: "#fff", color: T.ink, border: `1px solid ${T.border}`, "&:hover": { borderColor: T.greenDark, color: T.greenDark } }),
  }) as const;
const option = (on: boolean) => ({
  px: 1.4, py: 0.65, borderRadius: "10px", fontSize: "0.84rem", fontWeight: on ? 800 : 600, textDecoration: "none", fontFamily: mono,
  border: `1.5px solid ${on ? T.greenDark : T.border}`, bgcolor: on ? T.greenSoft : "#fff", color: on ? T.greenDeep : T.ink, transition: "all .15s", "&:hover": { borderColor: T.greenDark },
});

export default function ModelDetail({ item: m, items, series, badge }: { item: Item; items: Item[]; series: SeriesMeta; badge: string }) {
  const [open, setOpen] = useState(false);
  const B = brandOf(m.rfq.brand);
  const url = m.href ?? series.products;
  const type = m.cells.find((c) => typeof c !== "string" && c.pill === "grey");
  const typeText = m.tag ?? (type && typeof type !== "string" ? type.text : series.name);
  const idx = items.findIndex((x) => x.id === m.id);
  const others = items.filter((x) => x.id !== m.id);
  const related = [...items.slice(Math.max(0, idx - 2), idx), ...items.slice(idx + 1, idx + 3)].slice(0, 4);
  // Long ranges split into sub-series (e.g. HD ISD / ICD / ISR / ICR): the picker
  // shows this model's group, with links to the other groups.
  const group = m.facets.series;
  const pickList = group ? items.filter((x) => x.facets.series === group) : items;
  const groups = group ? Array.from(new Set(items.map((x) => x.facets.series))) : [];
  const facts = m.specs.filter(([k]) => k !== "Model").slice(0, series.facts);
  const schema = {
    "@context": "https://schema.org", "@type": "Product", name: `${B.name} ${m.model} ${series.kind.toLowerCase()}`, sku: m.model, mpn: m.model,
    brand: { "@type": "Brand", name: B.name }, image: m.image, description: m.rfq.description, category: m.rfq.category,
    additionalProperty: m.specs.map(([name, value]) => ({ "@type": "PropertyValue", name, value })),
  };

  return (
    <Box sx={{ ...textReset, bgcolor: "#fff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Top: photo + key facts */}
      <Box component="section" sx={{ background: "linear-gradient(180deg, #F6FAF5 0%, #FFFFFF 100%)", pt: { xs: 3, md: 5 }, pb: { xs: 4, md: 5 } }}>
        <Box sx={{ maxWidth: 1240, mx: "auto", px: { xs: 2, md: 4 } }}>
          <Box component={Link} href={series.products} sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, mb: 2.5, fontSize: "0.88rem", fontWeight: 700, color: T.greenDark, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
            <ArrowBackRoundedIcon sx={{ fontSize: 17 }} /> All {series.name} models
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "1fr 1fr" }, gap: { xs: 3, md: 6 }, alignItems: "start" }}>
            {/* photo */}
            <Box sx={{ position: { md: "sticky" }, top: { md: 150 } }}>
              <Box sx={{ position: "relative", aspectRatio: "1 / 1", borderRadius: "28px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow, display: "grid", placeItems: "center", overflow: "hidden" }}>
                <Box component="img" src={m.image} alt={`${B.name} ${m.model} ${series.kind.toLowerCase()}`} sx={{ width: "74%", height: "74%", objectFit: "contain", mixBlendMode: "multiply" }} />
                <Box component="img" src={B.logo} alt={B.name} sx={{ position: "absolute", top: 16, left: 16, height: 40, width: "auto" }} />
                <Box sx={{ position: "absolute", top: 16, right: 16, px: 1.5, py: 0.6, borderRadius: 999, bgcolor: T.greenSoft, color: T.greenDark, fontSize: "0.8rem", fontWeight: 800 }}>{badge}</Box>
              </Box>
              <Box sx={{ mt: 1.5, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1 }}>
                {[
                  { icon: <VerifiedOutlinedIcon />, t: `Genuine ${B.name}` },
                  { icon: <MenuBookOutlinedIcon />, t: "Catalogue data" },
                  { icon: <SupportAgentOutlinedIcon />, t: "UK support" },
                ].map((x) => (
                  <Box key={x.t} sx={{ display: "flex", alignItems: "center", gap: 0.75, p: 1.25, borderRadius: "14px", bgcolor: T.surface, fontSize: "0.78rem", fontWeight: 700, color: T.ink, "& svg": { fontSize: 18, color: T.greenDark } }}>
                    {x.icon}{x.t}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* facts + picker + actions */}
            <Box sx={{ minWidth: 0 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap", mb: 1.5 }}>
                <Box component="span" sx={{ px: 1.25, py: 0.4, borderRadius: 999, bgcolor: T.surface, border: `1px solid ${T.border}`, fontSize: "0.78rem", fontWeight: 700, color: T.ink }}>{typeText}</Box>
                <Box component="span" sx={{ fontSize: "0.82rem", fontWeight: 600, color: T.muted }}>{series.name} series · {B.name}</Box>
              </Box>
              <Box component="h1" sx={{ m: 0, fontSize: { xs: "2rem", md: "2.8rem" }, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, color: T.ink, fontFamily: `${mono} !important` }}>{m.model}</Box>
              <Box component="p" sx={{ m: 0, mt: 1.25, fontSize: "1.05rem", lineHeight: 1.6, color: T.body }}>{m.rfq.description}</Box>

              <Box sx={{ mt: 3, display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)" }, gap: 1 }}>
                {facts.map(([k, v]) => (
                  <Box key={k} sx={{ p: 1.5, borderRadius: "14px", bgcolor: "#fff", border: `1px solid ${T.border}` }}>
                    <Box sx={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase !important", color: T.muted }}>{k}</Box>
                    <Box sx={{ mt: 0.25, fontSize: "0.92rem", fontWeight: 800, color: T.ink, lineHeight: 1.3 }}>{v}</Box>
                  </Box>
                ))}
              </Box>

              <Box sx={{ mt: 3, p: { xs: 2, md: 2.5 }, borderRadius: "20px", bgcolor: T.surface, border: `1px solid ${T.border}` }}>
                <Box sx={{ fontSize: "0.95rem", fontWeight: 800, color: T.ink, mb: 0.5 }}>Choose another model</Box>
                {groups.length > 1 && (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 1.25 }}>
                    {groups.map((g) => {
                      const first = items.find((x) => x.facets.series === g)!;
                      const on = g === group;
                      return (
                        <Box key={g} component={Link} href={on ? (m.href ?? series.products) : (first.href ?? series.products)} aria-current={on ? "true" : undefined}
                          sx={{ px: 1.25, py: 0.4, borderRadius: 999, fontSize: "0.78rem", fontWeight: 800, textDecoration: "none", border: `1px solid ${on ? T.greenDark : T.border}`, bgcolor: on ? T.greenDark : "#fff", color: on ? "#fff" : T.ink, "&:hover": { borderColor: T.greenDark } }}>
                          {g}
                        </Box>
                      );
                    })}
                  </Box>
                )}
                <Box sx={{ fontSize: "0.78rem", fontWeight: 700, color: T.muted, mb: 1.25 }}>
                  Showing: <Box component="span" sx={{ color: T.ink }}>{m.model} · {m.sub}</Box>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                  {pickList.map((x) => (
                    <Box key={x.id} component={Link} href={x.href ?? series.products} title={x.sub} aria-current={x.id === m.id ? "page" : undefined} sx={option(x.id === m.id)}>
                      {x.model}
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box sx={{ mt: 3, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 1.25 }}>
                <Box component="button" type="button" onClick={() => setOpen(true)} sx={btn(true)}>
                  Request a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
                </Box>
                <Box component="a" href={WA(m.model, url, B.name)} target="_blank" rel="noopener" sx={btn(false)}>Ask on WhatsApp</Box>
              </Box>
              <Box sx={{ mt: 1.5, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 1, fontSize: "0.85rem", color: T.body }}>
                <span>Price and lead time confirmed on your quote.</span>
                <Box component="a" href={series.catalog.href} target="_blank" rel="noopener" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: T.greenDark, fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                  <DownloadRoundedIcon sx={{ fontSize: 16 }} /> {series.catalog.label}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Specifications */}
      <Box component="section" aria-labelledby="h2-spec" sx={{ pt: 2, pb: { xs: 6, md: 8 } }}>
        <Box sx={{ maxWidth: 1240, mx: "auto", px: { xs: 2, md: 4 } }}>
          <Box component="h2" id="h2-spec" sx={{ m: 0, mb: 2, fontSize: { xs: "1.5rem", md: "1.9rem" }, fontWeight: 800, letterSpacing: "-0.025em", color: T.ink }}>Specifications</Box>
          <Box component="dl" sx={{
            m: 0, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, borderRadius: "18px", border: `1px solid ${T.border}`, overflow: "hidden", bgcolor: "#fff",
            "& > div": { display: "grid", gridTemplateColumns: { xs: "150px 1fr", sm: "220px 1fr" }, borderTop: `1px solid ${T.border}` },
            "& > div:nth-of-type(1), & > div:nth-of-type(2)": { borderTop: { md: 0 } },
            "& > div:nth-of-type(1)": { borderTop: 0 },
            "& > div:nth-of-type(odd)": { borderRight: { md: `1px solid ${T.border}` } },
            "& > div:nth-of-type(4n+1), & > div:nth-of-type(4n+2)": { bgcolor: { md: "#FAFCFA" } },
            "& dt": { px: 2.25, py: 1.5, fontSize: "0.85rem", fontWeight: 600, color: T.body },
            "& dd": { m: 0, px: 2.25, py: 1.5, fontSize: "0.92rem", fontWeight: 700, color: T.ink },
          }}>
            {m.specs.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </Box>

          {m.table && (
            <Box sx={{ mt: 3 }}>
              <Box component="h3" sx={{ m: 0, mb: 1.25, fontSize: "1.15rem", fontWeight: 800, color: T.ink }}>{m.table.title ?? (m.table.head[0] === "Position" ? "Torque by air pressure (Nm)" : "Manual overrides for this size")}</Box>
              <Box sx={{ overflowX: "auto", borderRadius: "16px", border: `1px solid ${T.border}`, bgcolor: "#fff" }}>
                <Box component="table" sx={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem", "& th, & td": { px: 2, py: 1.2, borderBottom: `1px solid ${T.border}`, textAlign: "left", whiteSpace: "nowrap" }, "& th": { fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: T.muted, bgcolor: "#FAFCFA" }, "& td": { color: T.ink }, "& td:first-of-type": { fontWeight: 800 } }}>
                  <thead><tr>{m.table.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
                  <tbody>{m.table.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
                </Box>
              </Box>
            </Box>
          )}
          {m.note && <Box component="p" sx={{ m: 0, mt: 1.5, fontSize: "0.88rem", color: T.muted, lineHeight: 1.6 }}>{m.note}</Box>}

          <Box sx={{ mt: 3, display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2 }}>
            {[
              { k: "Which size?", t: `Compare the ${series.name} range`, d: `How the ${series.name} series works, every size side by side and the common questions.`, cta: `${series.name} series guide`, href: series.overview, ext: false, bg: "linear-gradient(135deg, #EEF9EA 0%, #EAF4FF 100%)" },
              { k: "The full data", t: `${B.name} catalogue`, d: "Dimensions, materials and the complete performance tables, straight from the manufacturer.", cta: series.catalog.label, href: series.catalog.href, ext: true, bg: "linear-gradient(135deg, #FFF7E6 0%, #FFFDF5 100%)" },
              { k: "Need help?", t: "Talk to our team", d: `Send the valve, torque or thrust and ${m.rfq.category === "Electric Actuators" ? "power supply" : "air supply"} and we’ll confirm the right model, or call +44 7368 137917.`, cta: "Ask on WhatsApp", href: WA(m.model, url, B.name), ext: true, bg: "linear-gradient(135deg, #F3EEFF 0%, #EAF4FF 100%)" },
            ].map((x) => (
              <Box key={x.k} sx={{ display: "flex", flexDirection: "column", p: 3, borderRadius: "22px", background: x.bg, border: `1px solid ${T.border}` }}>
                <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase !important", color: T.greenDark, mb: 1 }}>{x.k}</Box>
                <Box sx={{ fontSize: "1.08rem", fontWeight: 800, color: T.ink, mb: 0.75 }}>{x.t}</Box>
                <Box component="p" sx={{ m: 0, mb: 2, flex: 1, fontSize: "0.9rem", lineHeight: 1.6, color: T.body }}>{x.d}</Box>
                <Box component={x.ext ? "a" : Link} href={x.href} {...(x.ext ? { target: "_blank", rel: "noopener" } : {})} sx={{ ...btn(false), alignSelf: "flex-start", py: 1 }}>
                  {x.cta} <ArrowForwardRoundedIcon sx={{ fontSize: 17 }} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Nearby models */}
      {related.length > 0 && (
        <Box component="section" aria-labelledby="h2-rel" sx={{ py: { xs: 6, md: 8 }, bgcolor: T.surface }}>
          <Box sx={{ maxWidth: 1240, mx: "auto", px: { xs: 2, md: 4 } }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 1, mb: 2.5 }}>
              <Box component="h2" id="h2-rel" sx={{ m: 0, fontSize: { xs: "1.5rem", md: "1.9rem" }, fontWeight: 800, letterSpacing: "-0.025em", color: T.ink }}>Nearby models</Box>
              <Box component={Link} href={series.products} sx={{ fontSize: "0.9rem", fontWeight: 700, color: T.greenDark, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 0.5 }}>
                All {others.length + 1} {series.name} models <ArrowForwardRoundedIcon sx={{ fontSize: 17 }} />
              </Box>
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 1.25, md: 2 } }}>
              {related.map((r) => (
                <Box key={r.id} component={Link} href={r.href ?? series.products} sx={{ display: "block", p: 1.5, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}`, textDecoration: "none", transition: "all .2s", "&:hover": { borderColor: "#BFE5B3", transform: "translateY(-3px)", boxShadow: T.shadowHover } }}>
                  <Box sx={{ aspectRatio: "4 / 3", borderRadius: "14px", bgcolor: "#F2F5F8", display: "grid", placeItems: "center", overflow: "hidden" }}>
                    <Box component="img" src={r.image} alt={`${B.name} ${r.model}`} loading="lazy" sx={{ width: "72%", height: "76%", objectFit: "contain", mixBlendMode: "multiply" }} />
                  </Box>
                  <Box sx={{ mt: 1.25, fontFamily: mono, fontWeight: 700, fontSize: "0.86rem", color: T.ink }}>{r.model}</Box>
                  <Box sx={{ mt: 0.25, fontSize: "0.8rem", color: T.body }}>{r.sub}</Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      )}

      <RFQModal open={open} onClose={() => setOpen(false)} product={m.rfq} />
    </Box>
  );
}
