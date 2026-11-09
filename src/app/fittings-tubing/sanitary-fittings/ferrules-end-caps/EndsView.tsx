"use client";

// Ferrules & End Caps: category page under Fittings & Tubing › Sanitary Fittings,
// in the same format as Tri-Clamp Clamps. Three products (ferrule, blind cover,
// sight glass end cap), what each one does at the end of a line, and a finder
// that lists every part for one joint. Every figure is from the Adaptix datasheets.

import * as React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { MotionRoot, Words, Reveal, gradientText, L, useInView } from "@/src/app/Common/LightMotion";
import { wrap, Kicker, H2, Lead, pillBtn } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";
import { FAQ } from "@/src/app/news/components/Article";
import { SAN_BASE, SAN_FERRULE_IMG, SAN_BRAND, SAN_BRAND_LOGO } from "../data";
import { CLAMP_BASE } from "../tri-clamp-clamps/clamps";
import { ENDS, ENDS_BASE, END_SIZES, endHref, clampHref, type EndSlug } from "./ends";

const MODELS = ENDS.length;
const count = (s: EndSlug) => ENDS.filter((e) => e.slug === s).length;
const first = (s: EndSlug) => ENDS.find((e) => e.slug === s)!;

type Kind = {
  key: EndSlug;
  name: string;
  img: string;
  does: string;
  note: string;
  pressure: string;
  maxBar: number | null;
  chips: string[];
  sizes: number;
};

const KINDS: Kind[] = [
  {
    key: "ferrule",
    name: "Tri-clamp ferrule",
    img: first("ferrule").img,
    does: "Turns a tube end into a clamp connection",
    note: "Welded to the tube end. Two ferrules, a gasket and a clamp make one joint.",
    pressure: "Set by the clamp",
    maxBar: null,
    chips: ["DIN 32676 type A, B and C", "Tube 6.35–323.9 mm OD"],
    sizes: count("ferrule"),
  },
  {
    key: "blind",
    name: "Tri-clamp blind cover",
    img: first("blind").img,
    does: "Closes off a ferrule",
    note: "A solid cap for unused ports, cleaning points and line ends.",
    pressure: "10–25 bar",
    maxBar: 25,
    chips: ["Solid blank", "T 5.6–20 mm"],
    sizes: count("blind"),
  },
  {
    key: "sight",
    name: "Sight glass end cap",
    img: first("sight").img,
    does: "Lets you see inside without opening",
    note: "A cap with a glass window, to check product, level or cleaning in a line or vessel.",
    pressure: "1–16 bar",
    maxBar: 16,
    chips: ["−30 to 230 °C", "Glass 10–150 mm"],
    sizes: count("sight"),
  },
];

const SPECS: [string, string][] = [
  ["Products", "Ferrules, blind covers, sight glasses"],
  ["Sizes", "DN 6 – DN 300"],
  ["Standards", "ISO 2852, DIN 32676, BS 4825"],
  ["Material", "316L, 316, 304, 304L, duplex"],
  ["Inside finish", "Ra < 0.4 µm"],
  ["Sterilising", "150 °C"],
];

const FAQS = [
  { q: "How do I pick the right ferrule?", a: "Start from your tube: the ferrule’s tube OD and ID must match the tube you weld it to. The flange diameter A then tells you which clamp, gasket and cap fit. The finder above lists them together." },
  { q: "What does the length L mean?", a: "L is the length of the ferrule. Several tube sizes come in more than one length (12.7 to 28 mm), so check L against the space you have on the line." },
  { q: "Blind cover or sight glass end cap?", a: "A blind cover is solid and closes a port completely, up to 25 bar depending on size. A sight glass end cap has a glass window so you can check inside, and is rated 1–16 bar depending on size." },
  { q: "Are they suitable for CIP and SIP?", a: "Yes. Ferrules, blind covers and sight glasses are rated for sterilising at 150 °C, with Ra < 0.4 µm on the inside surface." },
  { q: "Do they come with a certificate?", a: "Yes. Every delivery comes with an EN 10204 3.1 material certificate, and each part is marked with the maker, size, heat number and material grade." },
  { q: "Can I get a size that isn’t listed?", a: "Custom ferrule sizes are available on request. Send us the tube OD, wall thickness and length you need." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

function BrandTag({ h = 14 }: { h?: number }) {
  return (
    <Box component="span" sx={{ display: "inline-flex", alignItems: "center", px: 1, py: 0.4, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}` }}>
      <Box component="img" src={SAN_BRAND_LOGO} alt={SAN_BRAND} sx={{ height: h, width: "auto", display: "block", mixBlendMode: "multiply" }} />
    </Box>
  );
}

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", background: `linear-gradient(120deg, ${L.mint} 0%, #FFFFFF 45%, #EAF4FF 100%)`, py: { xs: 5, md: 8 } }}>
      <Box sx={{ ...wrap, display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "1fr 1fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexWrap: "wrap" }}>
            <Kicker>Sanitary fittings</Kicker>
            <Box sx={{ mb: 1.5 }}><BrandTag /></Box>
          </Box>
          <Box component="h1" sx={{ m: 0, mb: 2.5, fontSize: { xs: "2.4rem", sm: "3rem", md: "3.8rem" }, fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.04, color: T.ink }}>
            <Words text="Ferrules &" />
            <Words text="end caps" start={200} sx={gradientText} />
          </Box>
          <Lead>
            The ferrule is welded to the tube and gives it a clamp flange. End caps close a ferrule off, solid or with a glass window. Three products from {SAN_BRAND}, in {MODELS} part codes from DN 6 to DN 300.
          </Lead>
          <Box component="dl" sx={{ m: 0, mt: 3, display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)" }, gap: 1, "& > div": { p: 1.5, borderRadius: "14px", bgcolor: "rgba(255,255,255,0.85)", border: `1px solid ${T.border}` }, "& dt": { fontSize: "0.72rem", fontWeight: 700, color: T.muted, textTransform: "uppercase", letterSpacing: "0.06em" }, "& dd": { m: 0, mt: 0.25, fontSize: "0.88rem", fontWeight: 700, color: T.ink, lineHeight: 1.35 } }}>
            {SPECS.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </Box>
          <Box sx={{ display: { xs: "grid", sm: "flex" }, gridTemplateColumns: "1fr", gap: 1.25, mt: 3.5 }}>
            <Box component={Link} href={`${ENDS_BASE}/products`} sx={{ ...pillBtn(true), justifyContent: "center" }}>
              View all {MODELS} models <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box component="a" href="#finder" sx={{ ...pillBtn(false), justifyContent: "center" }}>
              Find my ferrule
            </Box>
          </Box>
        </Box>
        <Reveal from="right">
          <Box component="figure" sx={{ m: 0, borderRadius: "28px", overflow: "hidden", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
            <Box component="img" src={SAN_FERRULE_IMG} alt="Two Adaptix tri-clamp ferrules in different sizes" sx={{ width: "100%", aspectRatio: "16 / 11", objectFit: "cover", display: "block" }} />
            <Box component="figcaption" sx={{ px: 2.5, py: 1.5, fontSize: "0.85rem", color: T.body }}>Tri-clamp ferrules: the weld end on top, the clamp flange below</Box>
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}

function Kinds() {
  return (
    <Box component="section" id="types" aria-labelledby="h2-types" sx={{ py: { xs: 7, md: 10 }, scrollMarginTop: 140 }}>
      <Box sx={wrap}>
        <Kicker>Products</Kicker>
        <H2 id="h2-types">Three ways to finish a tube end</H2>
        <Lead>All three fit the same clamp flange, so they swap on any tri-clamp joint. Each one opens its models.</Lead>
        <Box sx={{ display: "grid", gap: 1.5, mt: 3.5 }}>
          {KINDS.map((t, i) => (
            <Reveal key={t.key} delay={i * 60}>
              <Box
                component={Link}
                href={`${ENDS_BASE}/products?type=${t.key}`}
                sx={{
                  textDecoration: "none",
                  transition: "all .2s",
                  "&:hover": { borderColor: "#BFE5B3", boxShadow: T.shadowHover, transform: "translateY(-2px)" },
                  "&:hover .arr": { bgcolor: T.green, color: T.greenDeep, borderColor: T.green },
                  display: "grid",
                  gridTemplateColumns: { xs: "84px 1fr 32px", md: "120px 1.4fr 1.2fr 1fr 40px" },
                  gap: { xs: 1.5, md: 3 },
                  alignItems: "center",
                  p: { xs: 1.75, md: 2.25 },
                  borderRadius: "20px",
                  bgcolor: "#fff",
                  border: `1px solid ${T.border}`,
                }}
              >
                <Box sx={{ width: { xs: 84, md: 120 }, height: { xs: 84, md: 120 }, borderRadius: "16px", bgcolor: "#F2F5F8", display: "grid", placeItems: "center", overflow: "hidden" }}>
                  <Box component="img" src={t.img} alt={t.name} sx={{ width: t.key === "ferrule" ? "100%" : "86%", height: t.key === "ferrule" ? "100%" : "86%", objectFit: t.key === "ferrule" ? "cover" : "contain", mixBlendMode: "multiply" }} />
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5, flexWrap: "wrap" }}>
                    <BrandTag h={12} />
                    <Box component="span" sx={{ fontSize: "0.75rem", fontWeight: 700, color: T.muted }}>{t.sizes} sizes</Box>
                  </Box>
                  <Box sx={{ fontSize: { xs: "1.02rem", md: "1.2rem" }, fontWeight: 800, color: T.ink, letterSpacing: "-0.01em", lineHeight: 1.25 }}>{t.name}</Box>
                  <Box sx={{ fontSize: "0.86rem", color: T.body, lineHeight: 1.5, mt: 0.5, display: { xs: "none", sm: "block" } }}>{t.note}</Box>
                </Box>
                <Box sx={{ gridColumn: { xs: "1 / -1", md: "auto" } }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5, fontSize: "0.82rem", gap: 1 }}>
                    <Box component="span" sx={{ fontWeight: 800, color: T.ink }}>{t.pressure}</Box>
                    <Box component="span" sx={{ color: T.muted }}>{t.maxBar ? "max. pressure" : "pressure"}</Box>
                  </Box>
                  <Box sx={{ height: 10, borderRadius: 999, bgcolor: "#EEF2EF", overflow: "hidden" }}>
                    {t.maxBar ? (
                      <Box sx={{ height: "100%", width: `${(t.maxBar / 25) * 100}%`, borderRadius: 999, background: `linear-gradient(90deg, #B8EAA8, ${T.green})` }} />
                    ) : (
                      <Box sx={{ height: "100%", width: "100%", borderRadius: 999, background: "repeating-linear-gradient(90deg, #D9E5DC 0 8px, transparent 8px 14px)" }} />
                    )}
                  </Box>
                </Box>
                <Box sx={{ gridColumn: { xs: "1 / -1", md: "auto" }, display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {t.chips.map((x) => (
                    <Box key={x} component="span" sx={{ px: 1, py: 0.35, borderRadius: 999, bgcolor: T.surface, border: `1px solid ${T.border}`, fontSize: "0.76rem", fontWeight: 600, color: T.body }}>{x}</Box>
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

/* ── Tube end: ferrule welded on, then joined, closed or fitted with a window ── */
type End = "joint" | "blind" | "sight";
const END_LABEL: Record<End, string> = { joint: "Joined", blind: "Blind cover", sight: "Sight glass" };
const END_TEXT: Record<End, string> = {
  joint: "A second ferrule on the next tube, a gasket between the faces, and a clamp round both flanges.",
  blind: "A solid blind cover on a gasket, held by the same clamp. Take it off to clean or to add a branch later.",
  sight: "A sight glass end cap on a gasket. You see product, level or cleaning inside without opening the line.",
};

function EndArt({ end, on }: { end: End; on: boolean }) {
  const steel = "url(#feSteel)";
  return (
    <Box
      component="svg"
      viewBox="0 0 420 240"
      role="img"
      aria-label={`Tube with a ferrule welded on: ${END_TEXT[end]}`}
      sx={{
        width: "100%", height: "auto", display: "block",
        "& text": { fontSize: { xs: "18px", sm: "14px", md: "13px" } },
        "& .in": { transition: "transform .55s cubic-bezier(.2,.8,.2,1), opacity .4s ease", transformBox: "view-box" },
        "& .in.off": { transform: "translateX(40px)", opacity: 0 },
        "& .cl": { transition: "transform .5s ease .25s, opacity .4s ease .25s" },
        "& .cl.off": { opacity: 0 },
        "& .clt.off": { transform: "translateY(-34px)" },
        "& .clb.off": { transform: "translateY(34px)" },
        "@keyframes feLook": { "0%,100%": { transform: "translateX(0)" }, "50%": { transform: "translateX(-6px)" } },
        "& .eye": { animation: on ? "feLook 2.4s ease-in-out infinite" : "none" },
      }}
    >
      <defs>
        <linearGradient id="feSteel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F6F9FB" />
          <stop offset=".5" stopColor="#DCE3EA" />
          <stop offset="1" stopColor="#B7C3CF" />
        </linearGradient>
        <linearGradient id="feGlass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#DFF1FF" />
          <stop offset="1" stopColor="#A9D3F5" />
        </linearGradient>
      </defs>
      {/* tube + ferrule (always there) */}
      <rect x="16" y="98" width="128" height="44" fill={steel} stroke="#8E9CAB" strokeWidth="2" />
      <path d="M144 96 H170 L190 78 H200 V162 H190 L170 144 H144 Z" fill={steel} stroke="#5C6B7A" strokeWidth="2" />
      <rect x="16" y="109" width="184" height="22" fill="#fff" />
      <path d="M144 92 V104 M144 136 V148" stroke="#C08A2E" strokeWidth="3" />
      <text x="28" y="88" style={{ fontWeight: 700, fill: T.muted, fontFamily: "inherit" }}>Tube</text>
      <text x="112" y="182" style={{ fontWeight: 700, fill: "#A06F1E", fontFamily: "inherit" }}>weld</text>
      <text x="96" y="40" style={{ fontWeight: 800, fill: T.ink, fontFamily: "inherit" }}>Ferrule</text>
      <path d="M140 46 L180 82" stroke="#8E9CAB" strokeDasharray="3 3" />
      {/* gasket */}
      <rect x="200" y="80" width="10" height="80" rx="3" fill="#2F3A45" />
      {end !== "sight" && <rect x="200" y="109" width="10" height="22" fill="#fff" />}

      {/* joined: second ferrule + tube */}
      <g className={`in ${end === "joint" ? "" : "off"}`}>
        <path d="M276 96 H240 L220 78 H210 V162 H220 L240 144 H276 Z" fill={steel} stroke="#5C6B7A" strokeWidth="2" />
        <rect x="276" y="98" width="128" height="44" fill={steel} stroke="#8E9CAB" strokeWidth="2" />
        <rect x="210" y="109" width="194" height="22" fill="#fff" />
        <path d="M276 92 V104 M276 136 V148" stroke="#C08A2E" strokeWidth="3" />
        <text x="318" y="88" style={{ fontWeight: 700, fill: T.muted, fontFamily: "inherit" }}>Next tube</text>
      </g>
      {/* blind cover: solid disc */}
      <g className={`in ${end === "blind" ? "" : "off"}`}>
        <path d="M210 78 H222 L230 86 V154 L222 162 H210 Z" fill={steel} stroke="#5C6B7A" strokeWidth="2" />
        <text x="250" y="210" style={{ fontWeight: 800, fill: T.ink, fontFamily: "inherit" }}>Blind cover</text>
        <path d="M262 196 L228 160" stroke="#8E9CAB" strokeDasharray="3 3" />
      </g>
      {/* sight glass: ring with a window */}
      <g className={`in ${end === "sight" ? "" : "off"}`}>
        <path d="M210 78 H226 L234 86 V154 L226 162 H210 Z" fill={steel} stroke="#5C6B7A" strokeWidth="2" />
        <rect x="213" y="100" width="14" height="40" rx="2" fill="url(#feGlass)" stroke="#5C9BD1" strokeWidth="1.5" />
        <rect x="16" y="109" width="184" height="22" fill="#EAF4FF" />
        <path d="M30 120 H196" stroke="#8CC2EE" strokeWidth="3" strokeDasharray="6 6" />
        <g className="eye">
          <path d="M290 120 q22 -18 44 0 q-22 18 -44 0 z" fill="#fff" stroke={T.ink} strokeWidth="2" />
          <circle cx="312" cy="120" r="6" fill={T.ink} />
          <path d="M284 120 H244" stroke="#8CC2EE" strokeWidth="2" strokeDasharray="4 4" />
        </g>
        <text x="250" y="210" style={{ fontWeight: 800, fill: T.ink, fontFamily: "inherit" }}>Sight glass</text>
        <path d="M262 196 L230 162" stroke="#8E9CAB" strokeDasharray="3 3" />
      </g>
      {/* clamp round the flanges */}
      <g className={`cl clt ${on ? "" : "off"}`}>
        <path d="M178 76 L192 58 H218 L232 76 V84 H224 L214 72 H196 L186 84 H178 Z" fill={T.greenDark} />
        <text x="238" y="56" style={{ fontWeight: 700, fill: T.greenDark, fontFamily: "inherit" }}>Clamp</text>
      </g>
      <g className={`cl clb ${on ? "" : "off"}`}>
        <path d="M178 164 L192 182 H218 L232 164 V156 H224 L214 168 H196 L186 156 H178 Z" fill={T.greenDark} />
      </g>
      <text x="16" y="230" style={{ fontWeight: 600, fill: T.muted, fontFamily: "inherit" }}>Gasket between the faces in every case</text>
    </Box>
  );
}

function TubeEnd() {
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  const [end, setEnd] = React.useState<End>("joint");
  return (
    <Box component="section" aria-labelledby="h2-end" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface }}>
      <Box sx={{ ...wrap, display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "0.9fr 1.1fr" }, gap: { xs: 3, md: 6 }, alignItems: "center" }}>
        <Box>
          <Kicker>How they fit</Kicker>
          <H2 id="h2-end">One flange, three endings</H2>
          <Lead>Weld the ferrule on once. Then the same flange takes another ferrule, a blind cover or a sight glass, always with a gasket and a clamp.</Lead>
          <Box role="group" aria-label="Show the tube end" sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: 3 }}>
            {(Object.keys(END_LABEL) as End[]).map((k) => {
              const active = end === k;
              return (
                <Box key={k} component="button" type="button" aria-pressed={active} onClick={() => setEnd(k)}
                  sx={{ cursor: "pointer", fontFamily: "inherit", px: 1.75, py: 0.8, borderRadius: 999, fontSize: "0.88rem", fontWeight: 700, border: `1px solid ${active ? T.greenDark : T.border}`, bgcolor: active ? T.greenDark : "#fff", color: active ? "#fff" : T.ink, transition: "all .15s", "&:hover": { borderColor: T.greenDark } }}>
                  {END_LABEL[k]}
                </Box>
              );
            })}
          </Box>
          <Box aria-live="polite" sx={{ mt: 2, p: 2, borderRadius: "16px", bgcolor: "#fff", border: `1px solid ${T.border}`, fontSize: "0.92rem", color: T.body, lineHeight: 1.6, minHeight: 72 }}>
            {END_TEXT[end]}
          </Box>
        </Box>
        <Reveal from="right">
          <Box ref={ref} sx={{ p: { xs: 1.5, md: 3 }, borderRadius: "28px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
            <EndArt end={end} on={on} />
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}

/* ── Finder: pick a clamp size, see the ferrules and everything that fits them ── */
function Finder() {
  const [i, setI] = React.useState(2); // 50.5 mm, 1″–1½″
  const [all, setAll] = React.useState(false); // show every ferrule for this size
  const SHOW = 5;
  const size = END_SIZES[i];
  const here = ENDS.filter((e) => e.size === size);
  const ferrules = here.filter((e) => e.slug === "ferrule").sort((a, b) => parseFloat(a.tubeOd!) - parseFloat(b.tubeOd!));
  const blind = here.find((e) => e.slug === "blind");
  const sight = here.find((e) => e.slug === "sight");
  const ref = here[0];
  const chipLabel = (s: string) => ENDS.find((x) => x.size === s)!.short;
  const row = { display: "flex", alignItems: "center", gap: 1.25, p: 1, pr: 1.5, borderRadius: "14px", border: `1px solid ${T.border}`, bgcolor: "#fff", textDecoration: "none", transition: "all .15s", "&:hover": { borderColor: "#BFE5B3", bgcolor: T.greenSoft } } as const;
  const mono = { fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontWeight: 800, fontSize: "0.92rem", color: T.ink } as const;
  return (
    <Box component="section" id="finder" aria-labelledby="h2-finder" sx={{ py: { xs: 7, md: 10 }, scrollMarginTop: 140 }}>
      <Box sx={{ ...wrap, display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "0.85fr 1.15fr" }, gap: { xs: 3, md: 6 }, alignItems: "start" }}>
        <Box sx={{ position: { md: "sticky" }, top: { md: 150 } }}>
          <Kicker>Ferrule finder</Kicker>
          <H2 id="h2-finder">Everything for one joint</H2>
          <Lead>Pick your line size. We’ll list the ferrules for each tube, plus the clamp and caps that fit the same flange.</Lead>
          <Box role="group" aria-label="Line size" sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: 3 }}>
            {END_SIZES.map((s, k) => (
              <Box key={s} component="button" type="button" aria-pressed={k === i} onClick={() => { setI(k); setAll(false); }} title={s}
                sx={{ cursor: "pointer", fontFamily: "inherit", px: 1.4, py: 0.7, borderRadius: 999, fontSize: "0.84rem", fontWeight: k === i ? 700 : 600, border: `1px solid ${k === i ? T.greenDark : T.border}`, bgcolor: k === i ? T.greenDark : "#fff", color: k === i ? "#fff" : T.ink, transition: "all .15s", "&:hover": { borderColor: T.greenDark } }}>
                {chipLabel(s)}
              </Box>
            ))}
          </Box>
        </Box>
        <Reveal from="right">
          <Box sx={{ p: "2px", borderRadius: "26px", background: "linear-gradient(120deg, #9BE38A, #A9DCF7, #FFE08A, #C9B9F2, #9BE38A)", backgroundSize: "300% 300%", animation: "bgShift 8s ease infinite", boxShadow: "0 30px 70px -20px rgba(46,139,30,0.25)" }}>
            <Box aria-live="polite" sx={{ bgcolor: "rgba(255,255,255,0.98)", borderRadius: "24px", p: { xs: 2.5, md: 3.5 } }}>
              <Box sx={{ display: "flex", alignItems: "baseline", gap: 1, flexWrap: "wrap" }}>
                <Box sx={{ fontSize: { xs: "2.2rem", md: "2.8rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink, lineHeight: 1 }}>{ref.clampA}<Box component="span" sx={{ fontSize: "0.45em", ml: 0.5, color: T.greenDark }}>mm</Box></Box>
                <Box sx={{ fontSize: "0.9rem", color: T.body }}>flange / clamp size (A)</Box>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: 1.75 }}>
                {[["ISO 2852", ref.iso], ["DIN 32676", ref.din], ["BS 4825", ref.bs]].map(([k, v]) => (
                  <Box key={k} sx={{ px: 1.25, py: 0.6, borderRadius: "10px", bgcolor: v === "–" ? "#F7F8F7" : T.surface, border: `1px solid ${T.border}`, fontSize: "0.8rem", color: v === "–" ? T.muted : T.ink }}>
                    <Box component="span" sx={{ fontWeight: 700, color: T.muted, mr: 0.75 }}>{k}</Box>
                    {v === "–" ? "not listed" : v}
                  </Box>
                ))}
              </Box>

              {/* 1. ferrules */}
              <Box sx={{ mt: 2.5, pt: 2.25, borderTop: `1px solid ${T.border}` }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 1, mb: 1 }}>
                  <Box sx={{ fontWeight: 800, color: T.ink }}><Box component="span" sx={{ color: T.greenDark }}>1 · </Box>Ferrule for your tube <Box component="span" sx={{ color: T.muted, fontWeight: 600, fontSize: "0.85rem" }}>(×2 per joint)</Box></Box>
                  <Box sx={{ fontSize: "0.78rem", color: T.muted, whiteSpace: "nowrap" }}>{ferrules.length} {ferrules.length === 1 ? "option" : "options"}</Box>
                </Box>
                {/* compact list: one line per ferrule, no inner scrolling */}
                <Box sx={{ borderRadius: "14px", border: `1px solid ${T.border}`, bgcolor: "#fff", overflow: "hidden" }}>
                  <Box aria-hidden sx={{ display: "grid", gridTemplateColumns: "1fr auto 20px", gap: 1.5, px: 1.5, py: 0.9, bgcolor: "#FAFCFA", borderBottom: `1px solid ${T.border}`, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.muted }}>
                    <span>Tube OD × ID · length L</span><span>Part code</span><span />
                  </Box>
                  {(all ? ferrules : ferrules.slice(0, SHOW)).map((f, n) => (
                    <Box key={f.id} component={Link} href={endHref(f)}
                      sx={{ display: "grid", gridTemplateColumns: "1fr auto 20px", alignItems: "center", gap: 1.5, px: 1.5, py: 1, borderTop: n ? `1px solid ${T.border}` : 0, textDecoration: "none", transition: "background-color .15s", "&:hover": { bgcolor: T.greenSoft }, "&:hover .go": { color: T.greenDark, transform: "translateX(2px)" } }}>
                      <Box sx={{ minWidth: 0, fontSize: "0.9rem", color: T.ink }}>
                        <b>{f.tubeOd} × {f.tubeId} mm</b>
                        <Box component="span" sx={{ color: T.muted, ml: 0.75, fontSize: "0.82rem", whiteSpace: "nowrap" }}>L {f.length}</Box>
                      </Box>
                      <Box sx={{ ...mono, fontSize: "0.82rem", whiteSpace: "nowrap" }}>{f.partNumber}</Box>
                      <ArrowForwardRoundedIcon className="go" sx={{ fontSize: 16, color: T.muted, transition: "all .15s" }} />
                    </Box>
                  ))}
                  {ferrules.length > SHOW && (
                    <Box component="button" type="button" aria-expanded={all} onClick={() => setAll((v) => !v)}
                      sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 0.5, py: 1.1, border: 0, borderTop: `1px solid ${T.border}`, bgcolor: T.greenSoft, color: T.greenDark, fontFamily: "inherit", fontSize: "0.86rem", fontWeight: 800, cursor: "pointer", "&:hover": { bgcolor: "#DDF3D6" } }}>
                      {all ? "Show fewer" : `Show all ${ferrules.length} ferrules`}
                      <KeyboardArrowDownRoundedIcon sx={{ fontSize: 19, transition: "transform .2s", transform: all ? "rotate(180deg)" : "none" }} />
                    </Box>
                  )}
                </Box>
              </Box>

              {/* 2. clamp, 3. caps */}
              <Box sx={{ mt: 2.25, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 1 }}>
                {[
                  { k: "2 · Clamp, single pin", code: ref.single.partNumber, href: clampHref(ref.single), img: ref.single.img },
                  { k: "2 · Or double-bolted", code: ref.double.partNumber, href: clampHref(ref.double), img: ref.double.img },
                  ...(blind ? [{ k: "3 · Blind cover", code: blind.partNumber, href: endHref(blind), img: blind.img }] : []),
                  ...(sight ? [{ k: "3 · Sight glass end cap", code: sight.partNumber, href: endHref(sight), img: sight.img }] : []),
                ].map((x) => (
                  <Box key={x.k} component={Link} href={x.href} sx={row}>
                    <Box sx={{ flexShrink: 0, width: 44, height: 44, borderRadius: "10px", bgcolor: T.surface, display: "grid", placeItems: "center", overflow: "hidden" }}>
                      <Box component="img" src={x.img} alt={`${x.k} ${x.code}`} sx={{ width: "82%", height: "82%", objectFit: "contain", mixBlendMode: "multiply" }} />
                    </Box>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Box sx={{ fontSize: "0.76rem", color: T.body }}>{x.k}</Box>
                      <Box sx={{ ...mono, fontSize: "0.86rem" }}>{x.code}</Box>
                    </Box>
                    <ArrowForwardRoundedIcon sx={{ fontSize: 16, color: T.muted }} />
                  </Box>
                ))}
              </Box>
              <Box sx={{ mt: 2, fontSize: "0.82rem", color: T.body, lineHeight: 1.55 }}>
                                Add a gasket for each joint and tell us the material and finish when you ask for a quote.
              </Box>
            </Box>
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}

/* ── Finish and paperwork, same on every part ── */
const FINISH: [string, string, string][] = [
  ["Ra < 0.4", "µm", "Inside surface (Ra < 0.8 µm outside)"],
  ["150", "°C", "Sterilising temperature, ferrules and caps"],
  ["H3 / H4", "", "Hygienic class to DIN 11866"],
  ["3.1", "", "EN 10204 material certificate with every delivery"],
];

function Finish() {
  return (
    <Box component="section" aria-labelledby="h2-finish" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface }}>
      <Box sx={wrap}>
        <Box sx={{ mb: { xs: 3, md: 4 }, maxWidth: 720 }}>
          <Kicker>Finish and paperwork</Kicker>
          <H2 id="h2-finish">The same on every part</H2>
          <Lead>Ferrules and caps touch the product, so they share the same polished bore, marking and certificate.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 1.25, md: 2 } }}>
          {FINISH.map(([v, u, l], k) => (
            <Reveal key={l} delay={k * 70}>
              <Box sx={{ height: "100%", boxSizing: "border-box", p: { xs: 2, md: 2.75 }, borderRadius: "22px", bgcolor: "#fff", border: `1px solid ${T.border}` }}>
                <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.5 }}>
                  <Box sx={{ fontSize: { xs: "1.6rem", md: "2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink, lineHeight: 1.1 }}>{v}</Box>
                  {u && <Box sx={{ fontSize: "0.95rem", fontWeight: 800, color: T.greenDark }}>{u}</Box>}
                </Box>
                <Box sx={{ mt: 0.75, fontSize: "0.86rem", color: T.body, lineHeight: 1.5 }}>{l}</Box>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1.5, fontSize: "0.86rem", color: T.body }}>
          {["Mechanically or mirror polished", "Electropolishing on request", "Marked with size, heat number and grade", "Custom ferrule sizes on request"].map((x) => (
            <Box key={x} sx={{ display: "inline-flex", alignItems: "center", gap: 0.5 }}><CheckRoundedIcon sx={{ fontSize: 17, color: T.greenDark }} /> {x}</Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function Faq() {
  return (
    <Box component="section" sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 5, md: 8 } }}>
      <Box sx={wrap}>
        <Box sx={{ maxWidth: 900 }}>
          <FAQ items={FAQS} title="Ferrule and end cap questions" />
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
            <Box component="h2" id="h2-cta" sx={{ m: 0, mb: 1, fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink }}>Need the clamps too?</Box>
            <Box component="p" sx={{ m: 0, maxWidth: 620, lineHeight: 1.7, color: T.body }}>
              Send us the tube size and quantities and we’ll quote the whole joint: ferrules, gaskets and clamps, with the 3.1 certificate included.
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", flexShrink: 0 }}>
            <Box component={Link} href="/contact" sx={pillBtn(true)}>
              Get a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box component={Link} href={CLAMP_BASE} sx={pillBtn(false)}>
              Tri-clamp clamps
            </Box>
            <Box component={Link} href={SAN_BASE} sx={pillBtn(false)}>
              All sanitary fittings
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function EndsView() {
  return (
    <MotionRoot sx={{ ...textReset, bgcolor: "#fff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Hero />
      <Kinds />
      <TubeEnd />
      <Finder />
      <Finish />
      <Faq />
      <Cta />
    </MotionRoot>
  );
}
