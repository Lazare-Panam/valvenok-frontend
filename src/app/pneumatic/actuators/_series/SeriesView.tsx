"use client";

// Pneumatic actuator series page, in the Needle Valves / MHD format:
// split hero with an animated cut-away, a ladder of sizes or configurations
// (each opens the model table filtered to it), a "how it's built" band, FAQ, CTA.
// Each series (PDS, HD, PLDS) passes its catalogue data as a SeriesDef.

import * as React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import type { SvgIconComponent } from "@mui/icons-material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { MotionRoot, Words, Reveal, gradientText, L } from "@/src/app/Common/LightMotion";
import { wrap, Kicker, H2, Lead, pillBtn } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";
import { brandOf } from "./brands";

const mono = "ui-monospace, Menlo, monospace";

export type Rung = {
  code: string; // badge, e.g. "PD"
  tab: string; // which ladder tab it belongs to
  name: string;
  note: string;
  count?: number; // models behind this rung (hidden when one rung = one model)
  lo: number;
  hi: number;
  range: string; // label for lo–hi, e.g. "5 – 4,635 Nm"
  side: string; // right-hand label over the bar, e.g. "2.8–8 bar"
  chips: string[];
  href: string;
  tone?: "blue" | "amber";
};

export type SeriesDef = {
  kicker: string;
  h1: [string, string]; // plain + gradient line
  lead: React.ReactNode;
  specs: [string, string][];
  total: number;
  productsHref: string;
  catalog: string;
  catalogLabel?: string; // default "Download catalogue (PDF)"
  image: string;
  imageAlt: string;
  howTitle: string;
  how: React.ReactNode; // animated cut-away
  ladder: { kicker: string; title: string; lead: string; tabs?: { k: string; label: string }[]; rungs: Rung[]; max: number; logFrom?: number /* log scale from this value, for wide ranges */ };
  build: { title: string; image?: string; imageAlt?: string; points: [string, string][] };
  extra?: React.ReactNode; // series-specific section after the build band
  faqTitle: string;
  faq: { q: string; a: string; icon: SvgIconComponent }[];
  cta: { title: string; body: string };
  parent?: { href: string; label: string }; // CTA back link, default "All pneumatic actuators"
  brand?: string; // default "Susin"
};

function Hero({ d }: { d: SeriesDef }) {
  const b = brandOf(d.brand);
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", background: `linear-gradient(120deg, ${L.mint} 0%, #FFFFFF 45%, #FFF7E6 100%)`, py: { xs: 5, md: 8 } }}>
      <Box sx={{ ...wrap, display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "1fr 1fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexWrap: "wrap" }}>
            <Kicker>{d.kicker}</Kicker>
            <Box sx={{ mb: 1.25, display: "inline-flex", px: 1, py: 0.4, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}` }}>
              <Box component="img" src={b.logo} alt={b.name} sx={{ height: 18, width: "auto", display: "block" }} />
            </Box>
          </Box>
          <Box component="h1" sx={{ m: 0, mb: 2.5, fontSize: { xs: "2.4rem", sm: "3rem", md: "3.8rem" }, fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.04, color: T.ink }}>
            <Words text={d.h1[0]} />
            <Words text={d.h1[1]} start={200} sx={gradientText} />
          </Box>
          <Lead>{d.lead}</Lead>
          <Box component="dl" sx={{ m: 0, mt: 3, display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)" }, gap: 1, "& > div": { p: 1.5, borderRadius: "14px", bgcolor: "rgba(255,255,255,0.85)", border: `1px solid ${T.border}` }, "& dt": { fontSize: "0.72rem", fontWeight: 700, color: T.muted, textTransform: "uppercase", letterSpacing: "0.06em" }, "& dd": { m: 0, mt: 0.25, fontSize: "0.9rem", fontWeight: 700, color: T.ink } }}>
            {d.specs.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </Box>
          <Box sx={{ display: { xs: "grid", sm: "flex" }, gridTemplateColumns: "1fr", gap: 1.25, mt: 3.5 }}>
            <Box component={Link} href={d.productsHref} sx={{ ...pillBtn(true), justifyContent: "center" }}>
              View all {d.total} models <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box component={Link} href="/contact" sx={{ ...pillBtn(false), justifyContent: "center" }}>Get a quote</Box>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", columnGap: 2.5, rowGap: 0.75, mt: 2, fontSize: "0.85rem" }}>
            <Box component={b.external ? "a" : Link} href={b.href} {...(b.external ? { target: "_blank", rel: "noopener" } : {})} sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: T.greenDark, fontWeight: 600, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
              {b.about} {b.external ? <ArrowOutwardRoundedIcon sx={{ fontSize: 14 }} /> : <ArrowForwardRoundedIcon sx={{ fontSize: 14 }} />}
            </Box>
            <Box component="a" href={d.catalog} target="_blank" rel="noopener" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: T.greenDark, fontWeight: 600, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
              {d.catalogLabel ? <>{d.catalogLabel} <ArrowOutwardRoundedIcon sx={{ fontSize: 14 }} /></> : <><DownloadRoundedIcon sx={{ fontSize: 16 }} /> Download catalogue (PDF)</>}
            </Box>
          </Box>
        </Box>
        <Reveal from="right">
          <Box sx={{ p: { xs: 2, md: 3 }, borderRadius: "28px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
            <Box sx={{ mb: 1, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.greenDark }}>{d.howTitle}</Box>
            {d.how}
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}

function Ladder({ d }: { d: SeriesDef }) {
  const { tabs, rungs, max, logFrom } = d.ladder;
  const [tab, setTab] = React.useState("All");
  const list = rungs.filter((r) => tab === "All" || r.tab === tab);
  const pos = (n: number) => (logFrom ? Math.max(0, Math.log(n / logFrom) / Math.log(max / logFrom)) : n / max);
  const pct = (n: number) => Math.round(pos(n) * 1000) / 10;
  return (
    <Box component="section" id="models" aria-labelledby="h2-models" sx={{ py: { xs: 7, md: 10 }, scrollMarginTop: 140 }}>
      <Box sx={wrap}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: { md: "flex-end" }, gap: 2, mb: 4 }}>
          <Box>
            <Kicker>{d.ladder.kicker}</Kicker>
            <H2 id="h2-models">{d.ladder.title}</H2>
            <Lead>{d.ladder.lead}</Lead>
          </Box>
          {tabs && (
            <Box role="tablist" aria-label="Filter" sx={{ display: "inline-flex", flexWrap: "wrap", p: 0.5, borderRadius: { xs: "20px", sm: 999 }, bgcolor: T.surface, border: `1px solid ${T.border}`, alignSelf: { xs: "flex-start", md: "auto" } }}>
              {[{ k: "All", label: `All (${rungs.reduce((n, r) => n + (r.count ?? 1), 0)})` }, ...tabs].map((t) => (
                <Box key={t.k} component="button" role="tab" aria-selected={tab === t.k} onClick={() => setTab(t.k)}
                  sx={{ cursor: "pointer", border: 0, fontFamily: "inherit", px: 2, py: 0.9, borderRadius: 999, fontSize: "0.88rem", fontWeight: 700, bgcolor: tab === t.k ? "#fff" : "transparent", color: tab === t.k ? T.ink : T.body, boxShadow: tab === t.k ? "0 1px 4px rgba(14,27,18,0.12)" : "none", transition: "all .15s" }}>
                  {t.label}
                </Box>
              ))}
            </Box>
          )}
        </Box>
        <Box sx={{ display: "grid", gap: 1.5 }}>
          {list.map((r, i) => (
            <Reveal key={r.code + r.name} delay={i * 50}>
              <Box component={Link} href={r.href}
                sx={{
                  display: "grid", gridTemplateColumns: { xs: "72px 1fr 32px", md: "96px 1.3fr 1.4fr 1fr 40px" }, gap: { xs: 1.5, md: 3 }, alignItems: "center", p: { xs: 1.5, md: 2 },
                  borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}`, textDecoration: "none", transition: "all .2s",
                  "&:hover": { borderColor: "#BFE5B3", boxShadow: T.shadowHover, transform: "translateY(-2px)" }, "&:hover .arr": { bgcolor: T.green, color: T.greenDeep, borderColor: T.green },
                }}>
                <Box sx={{ width: { xs: 72, md: 96 }, height: { xs: 72, md: 96 }, borderRadius: "16px", bgcolor: r.tone === "amber" ? "#FFF7DD" : "#EAF4FF", display: "grid", placeItems: "center", overflow: "hidden" }}>
                  <Box component="img" src={d.image} alt={`${r.code} ${r.name}`} loading="lazy" sx={{ width: "86%", height: "86%", objectFit: "contain", mixBlendMode: "multiply" }} />
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.25 }}>
                    <Box component="span" sx={{ px: 1, py: 0.2, borderRadius: 999, bgcolor: T.ink, color: "#fff", fontSize: "0.72rem", fontWeight: 800, fontFamily: mono }}>{r.code}</Box>
                    {r.count !== undefined && <Box component="span" sx={{ fontSize: "0.75rem", fontWeight: 700, color: T.muted }}>{r.count} {r.count === 1 ? "model" : "models"}</Box>}
                  </Box>
                  <Box sx={{ fontSize: { xs: "1.05rem", md: "1.2rem" }, fontWeight: 800, color: T.ink, letterSpacing: "-0.01em" }}>{r.name}</Box>
                  <Box sx={{ fontSize: "0.85rem", color: T.body, lineHeight: 1.45 }}>{r.note}</Box>
                </Box>
                <Box sx={{ gridColumn: { xs: "1 / -1", md: "auto" }, gridRow: { xs: 2, md: "auto" } }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", gap: 1, mb: 0.5, fontSize: "0.82rem" }}>
                    <Box component="span" sx={{ fontWeight: 800, color: T.ink }}>{r.range}</Box>
                    <Box component="span" sx={{ color: T.muted, textAlign: "right" }}>{r.side}</Box>
                  </Box>
                  <Box sx={{ position: "relative", height: 10, borderRadius: 999, bgcolor: "#EEF2EF", overflow: "hidden" }}>
                    <Box sx={{ position: "absolute", top: 0, bottom: 0, left: `${pct(r.lo)}%`, width: `${Math.max(1.5, pct(r.hi) - pct(r.lo))}%`, borderRadius: 999, background: `linear-gradient(90deg, #B8EAA8, ${T.green})` }} />
                  </Box>
                </Box>
                <Box sx={{ display: { xs: "none", md: "flex" }, flexWrap: "wrap", gap: 0.5 }}>
                  {r.chips.map((c) => (
                    <Box key={c} component="span" sx={{ px: 1, py: 0.3, borderRadius: 999, bgcolor: T.surface, border: `1px solid ${T.border}`, fontSize: "0.74rem", fontWeight: 700, color: T.body, fontFamily: mono }}>{c}</Box>
                  ))}
                </Box>
                <Box className="arr" sx={{ gridColumn: { xs: 3, md: "auto" }, gridRow: { xs: 1, md: "auto" }, width: { xs: 32, md: 40 }, height: { xs: 32, md: 40 }, borderRadius: "50%", border: `1px solid ${T.border}`, display: "grid", placeItems: "center", color: T.ink, transition: "all .2s" }}>
                  <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function Build({ d }: { d: SeriesDef }) {
  const b = d.build;
  return (
    <Box component="section" aria-labelledby="h2-build" sx={{ pb: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 5 }, alignItems: "center", p: { xs: 3, md: 4 }, borderRadius: "24px", background: "linear-gradient(120deg, #EAF4FF 0%, #F3EEFF 100%)", border: "1px solid #DCE6F5" }}>
          <Box sx={{ borderRadius: "18px", bgcolor: "#fff", p: 2, display: "grid", placeItems: "center", minHeight: 240 }}>
            <Box component="img" src={b.image ?? d.image} alt={b.imageAlt ?? d.imageAlt} loading="lazy" sx={{ width: "100%", height: "auto", maxWidth: 520, maxHeight: 360, objectFit: "contain" }} />
          </Box>
          <Box>
            <Box component="h2" id="h2-build" sx={{ m: 0, mb: 2, fontSize: { xs: "1.3rem", md: "1.55rem" }, fontWeight: 800, color: T.ink, letterSpacing: "-0.02em" }}>{b.title}</Box>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", display: "grid", gap: 1.5 }}>
              {b.points.map(([k, v]) => (
                <Box component="li" key={k} sx={{ display: "flex", gap: 1.25 }}>
                  <Box component="span" sx={{ flexShrink: 0, mt: "7px", width: 8, height: 8, borderRadius: "50%", bgcolor: T.green }} />
                  <Box sx={{ fontSize: "0.92rem", color: T.body, lineHeight: 1.55 }}><Box component="strong" sx={{ color: T.ink }}>{k}.</Box> {v}</Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Faq({ d }: { d: SeriesDef }) {
  return (
    <Box component="section" aria-labelledby="h2-faq" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface }}>
      <Box sx={{ ...wrap, maxWidth: 900 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Kicker>FAQ</Kicker>
          <H2 id="h2-faq">{d.faqTitle}</H2>
        </Box>
        <Box sx={{ display: "grid", gap: 1.25 }}>
          {d.faq.map((f, i) => (
            <Box component="details" key={f.q} open={i === 0}
              sx={{
                borderRadius: "16px", bgcolor: "#fff", border: `1px solid ${T.border}`,
                "& summary": { listStyle: "none", cursor: "pointer", px: 2.5, py: 2, fontWeight: 700, color: T.ink, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2 },
                "& summary::-webkit-details-marker": { display: "none" },
                "& summary::after": { content: '"+"', flexShrink: 0, width: 28, height: 28, borderRadius: "50%", bgcolor: T.greenSoft, color: T.greenDark, fontWeight: 800, display: "grid", placeItems: "center", lineHeight: "28px", textAlign: "center" },
                "&[open] summary::after": { content: '"–"' },
              }}>
              <Box component="summary">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.75 }}>
                  <Box sx={{ flexShrink: 0, width: 40, height: 40, borderRadius: "12px", bgcolor: T.greenSoft, color: T.greenDark, display: "grid", placeItems: "center" }}>
                    {React.createElement(f.icon, { sx: { fontSize: 21 } })}
                  </Box>
                  <Box component="h3" sx={{ m: 0, font: "inherit" }}>{f.q}</Box>
                </Box>
              </Box>
              <Box component="p" sx={{ m: 0, pl: { xs: 2.5, sm: "78px" }, pr: 2.5, pb: 2.25, color: T.body, lineHeight: 1.7 }}>{f.a}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function Cta({ d }: { d: SeriesDef }) {
  return (
    <Box component="section" aria-labelledby="h2-cta" sx={{ py: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ p: { xs: 3.5, md: 6 }, borderRadius: "28px", background: `linear-gradient(120deg, ${L.mint} 0%, #EAF4FF 55%, #FFF7DD 100%)`, border: `1px solid ${T.border}`, display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { md: "center" }, justifyContent: "space-between", gap: 3 }}>
          <Box>
            <Box component="h2" id="h2-cta" sx={{ m: 0, mb: 1, fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink }}>{d.cta.title}</Box>
            <Box component="p" sx={{ m: 0, maxWidth: 620, lineHeight: 1.7, color: T.body }}>{d.cta.body}</Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", flexShrink: 0 }}>
            <Box component={Link} href={d.productsHref} sx={pillBtn(true)}>
              Compare models <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box component={Link} href={d.parent?.href ?? "/pneumatic/actuators"} sx={pillBtn(false)}>{d.parent?.label ?? "All pneumatic actuators"}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function SeriesView({ def }: { def: SeriesDef }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: def.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <MotionRoot sx={{ ...textReset, bgcolor: "#fff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Hero d={def} />
      <Ladder d={def} />
      <Build d={def} />
      {def.extra}
      <Faq d={def} />
      <Cta d={def} />
    </MotionRoot>
  );
}
