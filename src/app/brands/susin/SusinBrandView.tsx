"use client";

// Susin brand page: every Susin series, grouped the same way as the Actuators menu
// (Pneumatic, Electric, Hydraulic, Mechanical, Accessories). The series cards come
// straight from each type page's SERIES list, so this page never drifts from them.

import * as React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import OilBarrelOutlinedIcon from "@mui/icons-material/OilBarrelOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { MotionRoot, Words, Reveal, gradientText, L } from "@/src/app/Common/LightMotion";
import { wrap, Kicker, H2, Lead, pillBtn } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";
import { SERIES as PNEUMATIC } from "@/src/app/pneumatic/actuators/PneumaticActuatorsView";
import { SERIES as ELECTRIC } from "@/src/app/actuators/electric/ElectricActuatorsView";
import { SERIES as HYDRAULIC } from "@/src/app/actuators/hydraulic/HydraulicActuatorsView";
import { SERIES as MECHANICAL } from "@/src/app/actuators/mechanical/MechanicalActuatorsView";
import { SERIES as ACCESSORIES } from "@/src/app/actuators/accessories/AccessoriesView";

const LOGO = "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp";

type Card = { key: string; code: string; name: string; kind: string; brand: string; text: string; tag: string; img: string; href: string };
const susin = (list: Card[]) => list.filter((s) => s.brand === "Susin");

const CATEGORIES = [
  { id: "pneumatic", title: "Pneumatic actuators", lead: "Scotch yoke actuators for quarter-turn valves and linear actuators, double acting or spring return.", href: "/pneumatic/actuators", icon: AirOutlinedIcon, tint: L.mint, series: susin(PNEUMATIC as Card[]) },
  { id: "electric", title: "Electric actuators", lead: "Quarter-turn, multi-turn and linear actuators, including a fail-safe spring return series.", href: "/actuators/electric", icon: ElectricBoltOutlinedIcon, tint: "#FFF7DD", series: susin(ELECTRIC as Card[]) },
  { id: "hydraulic", title: "Hydraulic actuators", lead: "Compact electro-hydraulic units, rack & pinion, scotch yoke and linear piston actuators.", href: "/actuators/hydraulic", icon: OilBarrelOutlinedIcon, tint: "#FFEFEC", series: susin(HYDRAULIC as Card[]) },
  { id: "mechanical", title: "Mechanical actuators", lead: "Worm and bevel gear operators and a declutchable override for actuated valves.", href: "/actuators/mechanical", icon: SettingsOutlinedIcon, tint: "#F3EEFF", series: susin(MECHANICAL as Card[]) },
  { id: "accessories", title: "Accessories", lead: "Limit switch boxes that report the valve position to the control room.", href: "/actuators/accessories", icon: SensorsOutlinedIcon, tint: "#E6F6FA", series: susin(ACCESSORIES as Card[]) },
].filter((c) => c.series.length);

const SERIES_COUNT = CATEGORIES.reduce((n, c) => n + c.series.length, 0);

// Catalogues on blob storage, grouped like the range (no third-party brand names shown)
// Page-1 covers of each PDF (catalogs/susin/catalogue-covers on blob)
const COVERS = "https://pblol2.blob.core.windows.net/valvenok-images/catalogs/susin/catalogue-covers";
const CATALOGUES: { group: string; items: { label: string; href: string; cover: string }[] }[] = [
  { group: "Pneumatic", items: [
    { label: "PDS series", href: SUSIN_CATALOG.PDS, cover: `${COVERS}/pds.webp` }, { label: "HD series", href: SUSIN_CATALOG.HD, cover: `${COVERS}/hd.webp` }, { label: "MHD series", href: SUSIN_CATALOG.MHD, cover: `${COVERS}/mhd.webp` },
    { label: "PLDS series", href: SUSIN_CATALOG.PLDS, cover: `${COVERS}/plds.webp` }, { label: "Pneumatic IOM manual", href: SUSIN_CATALOG.PDS_IOM, cover: `${COVERS}/pds-iom.webp` },
  ] },
  { group: "Electric", items: [
    { label: "ITQ series", href: SUSIN_CATALOG.ITQ, cover: `${COVERS}/itq.webp` }, { label: "ITQ Micro", href: SUSIN_CATALOG.ITQ_MICRO, cover: `${COVERS}/itq-micro.webp` }, { label: "QS series", href: SUSIN_CATALOG.QS, cover: `${COVERS}/qs.webp` },
    { label: "ITM series", href: SUSIN_CATALOG.ITM, cover: `${COVERS}/itm.webp` }, { label: "ITL series", href: SUSIN_CATALOG.ITL, cover: `${COVERS}/itl.webp` }, { label: "IQL series", href: SUSIN_CATALOG.IQL, cover: `${COVERS}/iql.webp` },
  ] },
  { group: "Hydraulic", items: [
    { label: "PANDA / PA brochure", href: SUSIN_CATALOG.KTC_HYDRAULIC, cover: `${COVERS}/ktc-hydraulic.webp` }, { label: "PANDA / PA brochure (German)", href: SUSIN_CATALOG.KTC_ELECTRICAL, cover: `${COVERS}/ktc-electrical.webp` },
    { label: "Hydraulic data sheet", href: SUSIN_CATALOG.HLP, cover: `${COVERS}/hlp.webp` },
  ] },
  { group: "Mechanical", items: [
    { label: "MAW series", href: SUSIN_CATALOG.MAW, cover: `${COVERS}/maw.webp` }, { label: "ITG series", href: SUSIN_CATALOG.ITG, cover: `${COVERS}/itg.webp` }, { label: "MAB series", href: SUSIN_CATALOG.MAB, cover: `${COVERS}/mab.webp` },
  ] },
  { group: "Accessories", items: [{ label: "ITS series", href: SUSIN_CATALOG.ITS, cover: `${COVERS}/its.webp` }] },
];
const CATALOGUE_COUNT = CATALOGUES.reduce((n, g) => n + g.items.length, 0);

const STATS = [
  { value: String(SERIES_COUNT), unit: "series", label: "Susin actuators and accessories on Valvenok" },
  { value: String(CATEGORIES.length), unit: "types", label: "Pneumatic, electric, hydraulic, mechanical, accessories" },
  { value: "120,867", unit: "Nm", label: "Highest output torque (HD scotch yoke)" },
  { value: String(CATALOGUE_COUNT), unit: "PDFs", label: "Catalogues and manuals to download" },
];

const FAQ_ICONS = [FactoryOutlinedIcon, Inventory2OutlinedIcon, DescriptionOutlinedIcon, HandshakeOutlinedIcon];
const FAQ = [
  { q: "What does Susin make?", a: `Valve actuators and accessories: pneumatic scotch yoke and linear actuators, quarter-turn, multi-turn and linear electric actuators, electro-hydraulic and hydraulic actuators, gear operators and limit switch boxes. Valvenok lists ${SERIES_COUNT} Susin series, grouped on this page the same way as our Actuators menu.` },
  { q: "Can I get the actuator, gearbox and limit switch box together?", a: "Yes. Tell us the valve, its torque and the control you need, and we’ll quote the actuator with its mounting, a manual override if needed, and a limit switch box as one package." },
  { q: "Where are the technical details?", a: "Each series page has the specifications and a full model list. The original Susin catalogues are in the downloads section on this page." },
  { q: "Do you also supply other actuator brands?", a: "Yes. We are also a distributor for KOSAPLUS and SPAC Pneumatic: their rack & pinion and further scotch yoke actuators are shown under “Also in our group” in the Actuators menu and on the type pages." },
];
const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const photo = { objectFit: "contain", mixBlendMode: "multiply" } as const;

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #FDEDEC 0%, #FFF7F6 50%, #FFFFFF 100%)", pt: { xs: 5, md: 8 }, pb: { xs: 5, md: 7 } }}>
      <Box aria-hidden sx={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(190,40,40,0.10) 1px, transparent 1px)", backgroundSize: "22px 22px", maskImage: "linear-gradient(180deg, black, transparent 80%)", pointerEvents: "none" }} />
      <Box sx={{ ...wrap, position: "relative", textAlign: "center" }}>
        <Box sx={{ mx: "auto", mb: 2.5, width: 92, height: 92, borderRadius: "24px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow, display: "grid", placeItems: "center" }}>
          <Box component="img" src={LOGO} alt="Susin" sx={{ height: 64, objectFit: "contain" }} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Kicker>Brand</Kicker>
        </Box>
        <Box component="h1" sx={{ m: 0, mb: 2, fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4.2rem" }, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.02, color: T.ink }}>
          <Words text="Susin" />
          <Words text="actuators" start={200} sx={gradientText} />
        </Box>
        <Box component="p" sx={{ m: 0, mx: "auto", maxWidth: 700, fontSize: { xs: "1rem", md: "1.12rem" }, lineHeight: 1.7, color: T.body }}>
          Every Susin range we supply, in one place: {SERIES_COUNT} series of pneumatic, electric, hydraulic and mechanical actuators and limit switch boxes, with specifications, model lists and the original catalogues.
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1.25, mt: 3.5 }}>
          <Box component="a" href="#range" sx={pillBtn(true)}>
            Browse the range <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
          </Box>
          <Box component="a" href="#catalogues" sx={pillBtn(false)}>Catalogues</Box>
          <Box component={Link} href="/contact" sx={pillBtn(false)}>Get a quote</Box>
        </Box>

        {/* Jump to a category */}
        <Box sx={{ mt: { xs: 4, md: 5 }, display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1 }}>
          {CATEGORIES.map((c, i) => (
            <Box key={c.id} component="a" href={`#${c.id}`}
              sx={{ display: "inline-flex", alignItems: "center", gap: 1, px: 1.75, py: 1, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow, textDecoration: "none", color: T.ink, fontSize: "0.9rem", fontWeight: 700, animation: `wordIn .6s cubic-bezier(.2,.8,.2,1) ${300 + i * 60}ms both`, transition: "all .15s", "&:hover": { borderColor: "#BFE5B3", color: T.greenDark, transform: "translateY(-2px)" }, "& svg": { fontSize: 18, color: T.greenDark } }}>
              <c.icon />
              {c.title.replace(" actuators", "")}
              <Box component="span" sx={{ px: 0.9, py: 0.1, borderRadius: 999, bgcolor: T.greenSoft, color: T.greenDark, fontSize: "0.74rem" }}>{c.series.length}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function Stats() {
  return (
    <Box sx={{ ...wrap, mt: { xs: 1, md: 2 }, position: "relative", zIndex: 1 }}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 1.5, md: 2 } }}>
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <Box sx={{ height: "100%", boxSizing: "border-box", p: { xs: 2, md: 3 }, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow, borderTop: `4px solid ${[L.lime, L.sky, L.sun, "rgba(183,166,240,0.6)"][i]}` }}>
              <Box sx={{ fontSize: { xs: "1.5rem", md: "2.2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink, lineHeight: 1.1, whiteSpace: "nowrap" }}>
                {s.value}
                <Box component="span" sx={{ fontSize: "0.5em", ml: 0.75, color: T.greenDark }}>{s.unit}</Box>
              </Box>
              <Box component="p" sx={{ m: 0, mt: 0.75, fontSize: "0.85rem", color: T.body, lineHeight: 1.4 }}>{s.label}</Box>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Box>
  );
}

function ProductCard({ s, cat }: { s: Card; cat: (typeof CATEGORIES)[number] }) {
  return (
    <Box sx={{ position: "relative", display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box", borderRadius: "18px", bgcolor: "#fff", border: `1px solid ${T.border}`, overflow: "hidden", transition: "transform .25s, box-shadow .25s, border-color .25s", "&:hover": { transform: "translateY(-4px)", boxShadow: T.shadowHover, borderColor: "#CFEBC6" }, "&:hover .pic": { transform: "scale(1.06)" } }}>
      {/* Photo */}
      <Box component={Link} href={s.href} aria-label={`Susin ${s.name}`} sx={{ position: "relative", display: "block", aspectRatio: "1 / 1", bgcolor: "#FAFAFA", borderBottom: `1px solid ${T.border}`, overflow: "hidden" }}>
        <Box className="pic" component="img" src={s.img} alt={`Susin ${s.code} series`} loading="lazy"
          sx={{ position: "absolute", inset: "12%", width: "76%", height: "76%", transition: "transform .4s", ...photo }} />
        <Box component="span" sx={{ position: "absolute", top: 10, left: 10, display: { xs: "none", sm: "inline-flex" }, alignItems: "center", gap: 0.5, px: 1, py: 0.4, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}`, fontSize: "0.68rem", fontWeight: 700, color: T.greenDark, "& svg": { fontSize: 13 } }}>
          <cat.icon /> {cat.title.replace(" actuators", "")}
        </Box>
        <Box component="span" sx={{ position: "absolute", top: 10, right: 10, px: 1, py: 0.4, borderRadius: 999, bgcolor: T.ink, color: "#fff", fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.04em" }}>{s.code}</Box>
      </Box>
      {/* Details */}
      <Box sx={{ p: { xs: 1.5, sm: 2 }, display: "flex", flexDirection: "column", flex: 1 }}>
        <Box sx={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.muted }}>Susin · {s.kind}</Box>
        <Box component={Link} href={s.href} sx={{ mt: 0.4, mb: 0.75, fontSize: { xs: "0.92rem", sm: "1.02rem" }, lineHeight: 1.25, fontWeight: 800, color: T.ink, textDecoration: "none", "&:hover": { color: T.greenDark } }}>{s.name}</Box>
        <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.5, mb: 1.5 }}>
          <Box component="span" sx={{ fontSize: { xs: "0.95rem", sm: "1.05rem" }, fontWeight: 800, color: T.greenDark }}>{s.tag}</Box>
        </Box>
        <Box component="p" sx={{ display: { xs: "none", sm: "-webkit-box" }, m: 0, mb: 2, fontSize: "0.84rem", lineHeight: 1.5, color: T.body, flex: 1, overflow: "hidden", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>{s.text}</Box>
        <Box sx={{ mt: "auto", display: "flex", gap: 0.75 }}>
          <Box component={Link} href={s.href}
            sx={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 0.5, py: 0.9, borderRadius: 999, bgcolor: T.ink, color: "#fff", fontSize: { xs: "0.78rem", sm: "0.84rem" }, fontWeight: 700, textDecoration: "none", transition: "background .15s", "&:hover": { bgcolor: T.greenDark } }}>
            View series <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
          </Box>
          <Box component={Link} href="/contact" title="Request a quote"
            sx={{ display: { xs: "none", sm: "inline-flex" }, alignItems: "center", justifyContent: "center", px: 1.5, borderRadius: 999, border: `1px solid ${T.border}`, color: T.ink, fontSize: "0.84rem", fontWeight: 700, textDecoration: "none", "&:hover": { borderColor: T.greenDark, color: T.greenDark } }}>
            Quote
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Range() {
  const [tab, setTab] = React.useState("all");
  // Hero category chips link to #pneumatic etc.: switch the tab to match
  React.useEffect(() => {
    const sync = () => {
      const h = window.location.hash.slice(1);
      if (CATEGORIES.some((c) => c.id === h)) setTab(h);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  const items = CATEGORIES.flatMap((c) => c.series.map((s) => ({ s, cat: c })));
  const shown = tab === "all" ? items : items.filter((x) => x.cat.id === tab);
  const active = CATEGORIES.find((c) => c.id === tab);
  return (
    <Box component="section" id="range" aria-labelledby="h2-range" sx={{ py: { xs: 7, md: 10 }, scrollMarginTop: 140 }}>
      <Box sx={wrap}>
        <Box sx={{ textAlign: "center", mb: { xs: 3, md: 4 } }}>
          <Kicker>The range</Kicker>
          <H2 id="h2-range">Shop Susin actuators</H2>
          <Lead center>Every Susin series we supply. Open a series for its specifications, full model list and a quote.</Lead>
        </Box>

        {/* Filter tabs (category ids double as anchors from the hero chips) */}
        <Box role="tablist" aria-label="Category" sx={{ position: { xs: "static", sm: "sticky" }, top: { sm: 132 }, zIndex: 2, display: "flex", flexWrap: { xs: "wrap", sm: "nowrap" }, justifyContent: "center", gap: 0.75, p: { xs: 0, sm: 0.75 }, mb: 3, mx: "auto", width: { xs: "100%", sm: "fit-content" }, maxWidth: "100%", borderRadius: 999, bgcolor: { xs: "transparent", sm: "rgba(255,255,255,0.92)" }, border: { xs: "none", sm: `1px solid ${T.border}` }, boxShadow: { xs: "none", sm: T.shadow }, backdropFilter: { sm: "blur(8px)" } }}>
          {[{ id: "all", title: "All", n: items.length, icon: null as null | typeof CATEGORIES[number]["icon"] }, ...CATEGORIES.map((c) => ({ id: c.id, title: c.title.replace(" actuators", ""), n: c.series.length, icon: c.icon }))].map((t) => {
            const on = t.id === tab;
            return (
              <Box key={t.id} id={t.id === "all" ? undefined : t.id} component="button" type="button" role="tab" aria-selected={on} onClick={() => setTab(t.id)}
                sx={{ flexShrink: 0, display: "inline-flex", alignItems: "center", gap: 0.6, cursor: "pointer", fontFamily: "inherit", px: { xs: 1.4, sm: 1.75 }, py: { xs: 0.75, sm: 0.9 }, borderRadius: 999, border: { xs: `1px solid ${on ? T.greenDark : T.border}`, sm: "none" }, outline: "none", "&:focus-visible": { boxShadow: `0 0 0 3px ${T.green}` }, bgcolor: on ? T.greenDark : { xs: "#fff", sm: "transparent" }, color: on ? "#fff" : T.ink, fontSize: { xs: "0.82rem", sm: "0.86rem" }, fontWeight: 700, whiteSpace: "nowrap", transition: "all .15s", scrollMarginTop: 200, "& svg": { fontSize: 17 }, "&:hover": { bgcolor: on ? T.greenDark : T.greenSoft } }}>
                {t.icon && <t.icon />} {t.title}
                <Box component="span" sx={{ px: 0.75, borderRadius: 999, bgcolor: on ? "rgba(255,255,255,0.22)" : T.greenSoft, color: on ? "#fff" : T.greenDark, fontSize: "0.72rem" }}>{t.n}</Box>
              </Box>
            );
          })}
        </Box>

        {/* Result line */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 1, mb: 2 }}>
          <Box sx={{ fontSize: "0.9rem", color: T.body }}>
            Showing <b>{shown.length}</b> {shown.length === 1 ? "series" : "series"}{active ? ` · ${active.lead}` : ""}
          </Box>
          {active && (
            <Box component={Link} href={active.href} sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: T.greenDark, fontWeight: 700, fontSize: "0.88rem", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
              Compare all {active.title.toLowerCase()} <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
            </Box>
          )}
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }, gap: { xs: 1.25, md: 2.25 } }}>
          {shown.map(({ s, cat }, i) => (
            <Reveal key={s.key} delay={(i % 4) * 50}>
              <ProductCard s={s} cat={cat} />
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function Catalogues() {
  const [group, setGroup] = React.useState(CATALOGUES[0].group);
  const g = CATALOGUES.find((x) => x.group === group)!;
  const kind = (label: string) => (/manual/i.test(label) ? "Installation manual" : /data sheet/i.test(label) ? "Technical data sheet" : "Technical catalogue");
  return (
    <Box component="section" id="catalogues" aria-labelledby="h2-cat" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface, scrollMarginTop: 140 }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 3.5 }}>
          <Kicker>Downloads</Kicker>
          <H2 id="h2-cat">Susin catalogues</H2>
          <Lead>The original catalogues and manuals as PDFs, for dimensions, options and ordering codes.</Lead>
        </Box>

        {/* Category tabs */}
        <Box role="tablist" aria-label="Catalogue category" sx={{ display: "flex", flexWrap: { xs: "wrap", sm: "nowrap" }, gap: { xs: 0.75, sm: 0.5 }, p: { xs: 0, sm: 0.75 }, mb: 4, borderRadius: 999, bgcolor: { xs: "transparent", sm: "#fff" }, border: { xs: "none", sm: `1px solid ${T.border}` } }}>
          {CATALOGUES.map((c) => {
            const on = c.group === group;
            return (
              <Box key={c.group} component="button" type="button" role="tab" aria-selected={on} onClick={() => setGroup(c.group)}
                sx={{ flex: { xs: "0 0 auto", sm: "1 0 auto" }, cursor: "pointer", fontFamily: "inherit", px: { xs: 1.5, sm: 2.25 }, py: { xs: 0.8, sm: 1.1 }, borderRadius: 999, border: { xs: `1px solid ${on ? T.greenDark : T.border}`, sm: "none" }, outline: "none", "&:focus-visible": { boxShadow: `0 0 0 3px ${T.green}` }, bgcolor: on ? T.greenDark : { xs: "#fff", sm: "transparent" }, color: on ? "#fff" : T.body, fontSize: { xs: "0.76rem", sm: "0.82rem" }, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", whiteSpace: "nowrap", transition: "all .15s", "&:hover": { color: on ? "#fff" : T.greenDark } }}>
                {c.group} <Box component="span" sx={{ opacity: 0.7 }}>· {c.items.length}</Box>
              </Box>
            );
          })}
        </Box>

        <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 1, mb: 2.5, pb: 2, borderBottom: `1px solid ${T.border}` }}>
          <Box component="h3" sx={{ m: 0, fontSize: { xs: "1.4rem", md: "1.8rem" }, fontWeight: 800, letterSpacing: "-0.02em", color: T.ink }}>
            {g.group} <Box component="span" sx={gradientText}>{g.group === "Accessories" ? "" : "actuators"}</Box>
          </Box>
          <Box sx={{ fontSize: "0.9rem", color: T.muted }}>{g.items.length} document{g.items.length > 1 ? "s" : ""}</Box>
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }, gap: { xs: 2, md: 3 } }}>
          {g.items.map((d) => (
            <Box key={d.href} sx={{ display: "flex", flexDirection: "column", borderRadius: "22px", bgcolor: "#fff", border: `1px solid ${T.border}`, overflow: "hidden", transition: "transform .25s, box-shadow .25s", "&:hover": { transform: "translateY(-4px)", boxShadow: T.shadowHover }, "&:hover .prev": { opacity: 1 }, "&:hover .cov": { transform: "scale(1.03)" } }}>
              <Box component="a" href={d.href} target="_blank" rel="noopener" aria-label={`Preview ${d.label}`}
                sx={{ position: "relative", height: { xs: 260, md: 300 }, bgcolor: "#F4F6F8", display: "grid", placeItems: "center", overflow: "hidden", textDecoration: "none" }}>
                <Box className="cov" component="img" src={d.cover} alt={`${d.label} cover`} loading="lazy" sx={{ display: "block", height: { xs: 220, md: 252 }, width: "auto", maxWidth: "80%", objectFit: "contain", boxShadow: "0 10px 30px rgba(14,27,18,0.18)", transition: "transform .3s" }} />
                <Box className="prev" sx={{ position: "absolute", inset: 0, bgcolor: "rgba(14,27,18,0.28)", display: "grid", placeItems: "center", opacity: 0, transition: "opacity .2s" }}>
                  <Box component="span" sx={{ px: 2.25, py: 1, borderRadius: 999, bgcolor: "#fff", color: T.ink, fontWeight: 800, fontSize: "0.9rem" }}>Preview document</Box>
                </Box>
              </Box>
              <Box sx={{ p: { xs: 2, md: 2.5 }, display: "flex", flexDirection: "column", flex: 1 }}>
                <Box sx={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: T.greenDark, mb: 0.75 }}>{kind(d.label)}</Box>
                <Box component="h4" sx={{ m: 0, mb: 2, fontSize: "1.15rem", fontWeight: 800, letterSpacing: "-0.01em", color: T.ink, textTransform: "uppercase", flex: 1 }}>{d.label.replace(/ series$/i, " series catalogue")}</Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1, pt: 2, borderTop: `1px solid ${T.border}` }}>
                  <Box component="a" href={d.href} target="_blank" rel="noopener" sx={{ px: 1.5, py: 0.9, borderRadius: 999, color: T.ink, fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", "&:hover": { bgcolor: T.greenSoft, color: T.greenDark } }}>
                    View
                  </Box>
                  <Box component="a" href={d.href} target="_blank" rel="noopener" download
                    sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, px: 2, py: 1, borderRadius: 999, bgcolor: "#0E1B12", color: "#fff", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", transition: "all .15s", "&:hover": { bgcolor: T.greenDark } }}>
                    <DownloadRoundedIcon sx={{ fontSize: 19 }} /> Download
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function Faq() {
  return (
    <Box component="section" aria-labelledby="h2-faq" sx={{ py: { xs: 7, md: 10 } }}>
      <Box sx={{ ...wrap, maxWidth: 900 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Kicker>FAQ</Kicker>
          <H2 id="h2-faq">Susin questions</H2>
        </Box>
        <Box sx={{ display: "grid", gap: 1.25 }}>
          {FAQ.map((f, i) => (
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
                    {React.createElement(FAQ_ICONS[i % FAQ_ICONS.length], { sx: { fontSize: 21 } })}
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

function Cta() {
  return (
    <Box component="section" aria-labelledby="h2-cta" sx={{ pb: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ p: { xs: 3.5, md: 6 }, borderRadius: "28px", background: `linear-gradient(120deg, ${L.mint} 0%, #EAF4FF 55%, #FFF7DD 100%)`, border: `1px solid ${T.border}`, display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { md: "center" }, justifyContent: "space-between", gap: 3 }}>
          <Box>
            <Box component="h2" id="h2-cta" sx={{ m: 0, mb: 1, fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink }}>Need a Susin actuator?</Box>
            <Box component="p" sx={{ m: 0, maxWidth: 620, lineHeight: 1.7, color: T.body }}>
              Send us the valve, its torque, the supply you have and the fail-safe position, and we’ll pick the Susin series and size and quote it.
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", flexShrink: 0 }}>
            <Box component={Link} href="/contact" sx={pillBtn(true)}>
              Get a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box component={Link} href="/actuators" sx={pillBtn(false)}>All actuators</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function SusinBrandView() {
  return (
    <MotionRoot sx={{ ...textReset, bgcolor: "#fff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Hero />
      <Stats />
      <Range />
      <Catalogues />
      <Faq />
      <Cta />
    </MotionRoot>
  );
}
