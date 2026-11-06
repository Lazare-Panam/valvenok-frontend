"use client";

// Sanitary Fittings: section page under the Fittings & Tubing tab, in the same
// format as Hydrogen Valves. An overview only: it helps the buyer pick one of the
// two categories (Tri-Clamp Clamps, Ferrules & End Caps). Product details,
// lists and part codes live on those category pages.

import * as React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import QrCode2OutlinedIcon from "@mui/icons-material/QrCode2Outlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { MotionRoot, Words, Reveal, gradientText, L, useInView } from "@/src/app/Common/LightMotion";
import { wrap, Kicker, H2, Lead, pillBtn } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";
import { FAQ } from "@/src/app/news/components/Article";
import { SAN_FERRULE_IMG, SAN_BRAND, SAN_BRAND_LOGO } from "./data";

const IMG = "https://pblol2.blob.core.windows.net/valvenok-images/brands/Adaptix";

type Category = {
  key: "clamps" | "ferrules";
  title: string;
  does: string;
  text: string;
  products: string[];
  pressure: string;
  img: string;
  cover?: boolean;
  /** Category page, once it is built */
  href?: string;
};

const CATEGORIES: Category[] = [
  {
    key: "clamps",
    title: "Tri-Clamp Clamps",
    does: "Hold two ferrules together on a gasket",
    text: "Close a tri-clamp joint with a wing nut, or use the double-bolted clamp, tightened with a tool, for high operating pressures.",
    products: ["Single pin heavy-duty tri-clamp", "Double-bolted high-pressure clamp"],
    pressure: "up to 50 bar",
    img: `${IMG}/single-pin-clamp.jpg`,
    href: "/fittings-tubing/sanitary-fittings/tri-clamp-clamps",
  },
  {
    key: "ferrules",
    title: "Ferrules & End Caps",
    does: "Turn a tube end into a clamp connection, or close it off",
    text: "Weld-on ferrules for the tube ends, blind covers to close a port, and sight glass caps to see inside a line or vessel.",
    products: ["Tri-clamp ferrule", "Blind cover", "Sight glass end cap"],
    pressure: "up to 25 bar",
    img: SAN_FERRULE_IMG,
    cover: true,
    href: "/fittings-tubing/sanitary-fittings/ferrules-end-caps",
  },
];
const CAT = Object.fromEntries(CATEGORIES.map((c) => [c.key, c])) as Record<Category["key"], Category>;

const STATS = [
  { value: "5", unit: "products", label: "Clamps, ferrules and end caps" },
  { value: "DN 6–300", unit: "", label: "½″ to 12″, ISO 2852 / DIN 32676 / BS 4825" },
  { value: "304 / 316L", unit: "", label: "Also 316, 304L and duplex stainless" },
  { value: "3.1", unit: "cert", label: "EN 10204 material certificate with every delivery" },
];

// Finder: what the buyer needs to do → which parts, from which categories
const JOBS: { label: string; picks: Category["key"][]; parts: string }[] = [
  { label: "Join two tubes", picks: ["ferrules", "clamps"], parts: "2 ferrules, 1 gasket and 1 single pin clamp per joint." },
  { label: "High-pressure joint", picks: ["ferrules", "clamps"], parts: "2 ferrules, 1 gasket and 1 double-bolted clamp, tightened with a tool." },
  { label: "Close off a port", picks: ["ferrules", "clamps"], parts: "A blind cover, a gasket and a clamp on the existing ferrule." },
  { label: "See inside a line or vessel", picks: ["ferrules", "clamps"], parts: "A sight glass end cap, a gasket and a clamp on the existing ferrule." },
];

const FAQS = [
  { q: "What is a tri-clamp connection?", a: "Two ferrules welded to the tube ends, a gasket between them, and a clamp that holds them together. It is quick to open and close, and leaves a nearly smooth bore with no dead spots or biofilms, so it cleans easily." },
  { q: "Which standards do these fittings match?", a: "DIN 32676, ISO 2852, ISO 1127, BS 4825 and ASME BPE, from DN 6 to DN 300 (½″ to 12″). Custom sizes on request." },
  { q: "Do they come with a material certificate?", a: "Yes. Every delivery comes with an EN 10204 3.1 material certificate, and each part is marked with size, heat number and material grade." },
  { q: "Are tri-clamp fittings suitable for CIP and SIP?", a: "Yes. Adaptix lists CIP / SIP among their applications. Ferrules and blind covers are rated for sterilising at 150 °C, and sight glass end caps work from −30 to 230 °C." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

/* A link when the category page exists; a plain box until then */
function MaybeLink({ href, sx, children }: { href?: string; sx: object; children: React.ReactNode }) {
  return href ? (
    <Box component={Link} href={href} sx={sx}>{children}</Box>
  ) : (
    <Box sx={sx}>{children}</Box>
  );
}

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #EEF5FF 0%, #F6FAFF 55%, #FFFFFF 100%)", pt: { xs: 5, md: 8 }, pb: { xs: 5, md: 7 } }}>
      <Box aria-hidden sx={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(60,110,180,0.10) 1px, transparent 1px)", backgroundSize: "22px 22px", maskImage: "linear-gradient(180deg, black, transparent 80%)", pointerEvents: "none" }} />
      <Box sx={{ ...wrap, position: "relative", textAlign: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Kicker>Fittings & Tubing</Kicker>
        </Box>
        <Box component="h1" sx={{ m: 0, mb: 2, fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4.2rem" }, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.02, color: T.ink }}>
          <Words text="Sanitary" />
          <Words text="fittings" start={200} sx={gradientText} />
        </Box>
        <Box component="p" sx={{ m: 0, mx: "auto", maxWidth: 700, fontSize: { xs: "1rem", md: "1.12rem" }, lineHeight: 1.7, color: T.body }}>
          Polished stainless-steel tri-clamp clamps, ferrules and end caps for dairy, food, pharma and biotech lines. A tri-clamp joint is quick to open and close, and leaves a nearly smooth bore with no dead spots, so it cleans easily.
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1.25, mt: 3.5 }}>
          <Box component="a" href="#finder" sx={pillBtn(true)}>
            Help me choose <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
          </Box>
          <Box component={Link} href="/contact" sx={pillBtn(false)}>
            Get a quote
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, mt: 2.25, fontSize: "0.85rem", color: T.muted }}>
          Made by
          <Box component="img" src={SAN_BRAND_LOGO} alt={SAN_BRAND} sx={{ height: 18, width: "auto", mixBlendMode: "multiply" }} />
        </Box>
      </Box>

      {/* The two categories (links once their pages are built) */}
      <Box sx={{ position: "relative", mt: { xs: 4.5, md: 6 }, display: "flex", justifyContent: "center", gap: { xs: 3, md: 6 }, px: 2 }}>
        {CATEGORIES.map((c, i) => (
          <MaybeLink
            key={c.key}
            href={c.href}
            sx={{
              width: { xs: 140, md: 170 },
              textAlign: "center",
              textDecoration: "none",
              animation: `wordIn .6s cubic-bezier(.2,.8,.2,1) ${300 + i * 80}ms both`,
              ...(c.href && { "&:hover .ph": { transform: "translateY(-6px)", boxShadow: T.shadowHover, borderColor: "#BFD6F2" }, "&:hover .nm": { color: T.greenDark } }),
            }}
          >
            <Box className="ph" sx={{ mx: "auto", width: { xs: 120, md: 150 }, height: { xs: 120, md: 150 }, borderRadius: "50%", bgcolor: "#fff", border: "1px solid #DCE6F2", boxShadow: T.shadow, display: "grid", placeItems: "center", overflow: "hidden", transition: "all .25s" }}>
              <Box component="img" src={c.img} alt="" loading="eager" sx={c.cover ? { width: "100%", height: "100%", objectFit: "cover" } : { width: "74%", height: "74%", objectFit: "contain", mixBlendMode: "multiply" }} />
            </Box>
            <Box className="nm" sx={{ mt: 1.5, fontSize: "0.95rem", fontWeight: 700, color: T.ink, lineHeight: 1.25, transition: "color .2s" }}>{c.title}</Box>
            <Box sx={{ mt: 0.25, fontSize: "0.78rem", color: T.muted, lineHeight: 1.4 }}>
              {c.products.length} products
              <Box component="span" sx={{ display: { xs: "block", md: "inline" } }}>
                <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}> · </Box>
                {c.pressure}
              </Box>
            </Box>
          </MaybeLink>
        ))}
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
              <Box sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2.1rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink, lineHeight: 1.1, whiteSpace: "nowrap" }}>
                {s.value}
                {s.unit && <Box component="span" sx={{ fontSize: "0.5em", ml: 0.75, color: T.greenDark }}>{s.unit}</Box>}
              </Box>
              <Box component="p" sx={{ m: 0, mt: 0.75, fontSize: "0.85rem", color: T.body, lineHeight: 1.4 }}>{s.label}</Box>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Box>
  );
}

function Finder() {
  const [job, setJob] = React.useState(0);
  const j = JOBS[job];
  const chip = (on: boolean) => ({
    cursor: "pointer",
    fontFamily: "inherit",
    px: 1.5,
    py: 0.8,
    borderRadius: 999,
    fontSize: "0.84rem",
    fontWeight: on ? 700 : 600,
    border: `1px solid ${on ? T.greenDark : T.border}`,
    bgcolor: on ? T.greenDark : "#fff",
    color: on ? "#fff" : T.ink,
    transition: "all .15s",
    "&:hover": { borderColor: T.greenDark },
  });
  return (
    <Box component="section" id="finder" aria-labelledby="h2-finder" sx={{ py: { xs: 7, md: 10 }, scrollMarginTop: 140 }}>
      <Box sx={{ ...wrap, display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "0.8fr 1.2fr" }, gap: { xs: 3, md: 7 }, alignItems: "center" }}>
        <Box>
          <Kicker>Fitting finder</Kicker>
          <H2 id="h2-finder">Not sure which parts?</H2>
          <Lead>Pick what you need to do and we’ll show which parts make up the joint.</Lead>
        </Box>
        <Reveal from="right">
          <Box sx={{ p: "2px", borderRadius: "26px", background: "linear-gradient(120deg, #9BE38A, #A9DCF7, #FFE08A, #C9B9F2, #9BE38A)", backgroundSize: "300% 300%", animation: "bgShift 8s ease infinite", boxShadow: "0 30px 70px -20px rgba(46,139,30,0.25)" }}>
            <Box sx={{ bgcolor: "rgba(255,255,255,0.98)", borderRadius: "24px", p: { xs: 2.5, md: 3.5 } }}>
              <Box sx={{ fontSize: "0.85rem", fontWeight: 700, color: T.ink, mb: 1 }}>What do you need to do?</Box>
              <Box role="group" aria-label="Job" sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 2.5 }}>
                {JOBS.map((d, i) => (
                  <Box key={d.label} component="button" type="button" aria-pressed={i === job} onClick={() => setJob(i)} sx={chip(i === job)}>
                    {d.label}
                  </Box>
                ))}
              </Box>
              <Box aria-live="polite" sx={{ borderTop: `1px solid ${T.border}`, pt: 2 }}>
                <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.muted, mb: 1.25 }}>You’ll need</Box>
                <Box sx={{ fontSize: "0.95rem", fontWeight: 700, color: T.ink, lineHeight: 1.5, mb: 1.5 }}>{j.parts}</Box>
                <Box sx={{ display: "grid", gap: 1 }}>
                  {j.picks.map((k) => {
                    const c = CAT[k];
                    return (
                      <MaybeLink
                        key={k}
                        href={c.href}
                        sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 1, pr: 1.5, borderRadius: "14px", border: `1px solid ${T.border}`, textDecoration: "none", bgcolor: "#fff", ...(c.href && { transition: "all .15s", "&:hover": { borderColor: "#BFE5B3", bgcolor: T.greenSoft } }) }}
                      >
                        <Box sx={{ flexShrink: 0, width: 56, height: 56, borderRadius: "12px", bgcolor: T.surface, display: "grid", placeItems: "center", overflow: "hidden" }}>
                          <Box component="img" src={c.img} alt="" sx={c.cover ? { width: "100%", height: "100%", objectFit: "cover" } : { width: "80%", height: "80%", objectFit: "contain", mixBlendMode: "multiply" }} />
                        </Box>
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          <Box sx={{ fontWeight: 800, color: T.ink, fontSize: "0.95rem" }}>{c.title}</Box>
                          <Box sx={{ fontSize: "0.8rem", color: T.body }}>{c.does}</Box>
                        </Box>
                      </MaybeLink>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}

function Categories() {
  return (
    <Box component="section" id="types" aria-labelledby="h2-types" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface, scrollMarginTop: 140 }}>
      <Box sx={wrap}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
          <Kicker>Categories</Kicker>
          <H2 id="h2-types">Every sanitary fitting we supply</H2>
          <Lead center>Two categories from {SAN_BRAND}, all in polished stainless steel with a 3.1 certificate.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: { xs: 1.5, md: 2.5 }, maxWidth: 960, mx: "auto" }}>
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.key} delay={i * 80}>
              <MaybeLink
                href={c.href}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxSizing: "border-box",
                  borderRadius: "22px",
                  bgcolor: "#fff",
                  border: `1px solid ${T.border}`,
                  overflow: "hidden",
                  textDecoration: "none",
                  color: "inherit",
                  ...(c.href && { transition: "transform .25s, box-shadow .25s", "&:hover": { transform: "translateY(-4px)", boxShadow: T.shadowHover, borderColor: "#CFEBC6" } }),
                }}
              >
                <Box sx={{ position: "relative", height: { xs: 180, md: 220 }, bgcolor: "#EEF3F8", display: "grid", placeItems: "center", overflow: "hidden" }}>
                  <Box component="img" src={c.img} alt={c.title} loading="lazy" sx={c.cover ? { width: "100%", height: "100%", objectFit: "cover" } : { maxWidth: "62%", maxHeight: "80%", objectFit: "contain", mixBlendMode: "multiply" }} />
                  <Box sx={{ position: "absolute", top: 12, left: 12, display: "inline-flex", alignItems: "center", px: 1, py: 0.5, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}` }}>
                    <Box component="img" src={SAN_BRAND_LOGO} alt={SAN_BRAND} sx={{ height: 13, width: "auto", mixBlendMode: "multiply" }} />
                  </Box>
                </Box>
                <Box sx={{ p: { xs: 2, md: 2.75 }, display: "flex", flexDirection: "column", flex: 1 }}>
                  <Box component="h3" sx={{ m: 0, mb: 0.75, fontSize: { xs: "1.1rem", md: "1.25rem" }, fontWeight: 800, color: T.ink, letterSpacing: "-0.01em" }}>{c.title}</Box>
                  <Box component="p" sx={{ m: 0, mb: 1.75, fontSize: "0.92rem", lineHeight: 1.55, color: T.body }}>{c.text}</Box>
                  <Box component="ul" sx={{ m: 0, mb: 2, p: 0, listStyle: "none", display: "flex", flexWrap: "wrap", gap: 0.75, flex: 1, alignContent: "flex-start" }}>
                    {c.products.map((p) => (
                      <Box component="li" key={p} sx={{ px: 1.25, py: 0.5, borderRadius: 999, bgcolor: T.surface, border: `1px solid ${T.border}`, fontSize: "0.8rem", fontWeight: 600, color: T.ink }}>{p}</Box>
                    ))}
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1 }}>
                    <Box component="span" sx={{ px: 1.25, py: 0.5, borderRadius: 999, bgcolor: T.greenSoft, color: T.greenDark, fontSize: "0.78rem", fontWeight: 700 }}>{c.pressure}</Box>
                    {c.href && (
                      <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, px: 1.5, py: 0.6, borderRadius: 999, border: `1px solid ${T.border}`, fontSize: "0.82rem", fontWeight: 700, color: T.ink }}>
                        View range <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
                      </Box>
                    )}
                  </Box>
                </Box>
              </MaybeLink>
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

/* ── How a tri-clamp joint works: ferrules + gasket, clamp closes round them ── */
function JointDiagram() {
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  const [closed, setClosed] = React.useState<boolean | null>(null); // null = auto-play
  const anim = closed === null && on;
  const state = closed ?? false;
  return (
    <Box ref={ref}>
      <Box
        component="svg"
        viewBox="0 0 420 260"
        role="img"
        aria-label="Two ferrules with a gasket between them; the clamp closes around the ferrule flanges and squeezes them onto the gasket"
        sx={{
          width: "100%",
          height: "auto",
          display: "block",
          // Labels: bigger on phones, where the drawing is shown small
          "& text": { fontSize: { xs: "19px", sm: "15px", md: "13px" } },
          "& text.sm": { fontSize: { xs: "16px", sm: "13px", md: "11px" } },
          "@keyframes tcL": { "0%,15%": { transform: "translateX(-26px)" }, "40%,80%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-26px)" } },
          "@keyframes tcR": { "0%,15%": { transform: "translateX(26px)" }, "40%,80%": { transform: "translateX(0)" }, "100%": { transform: "translateX(26px)" } },
          "@keyframes tcTop": { "0%,35%": { transform: "translateY(-46px)", opacity: 0 }, "50%,80%": { transform: "translateY(0)", opacity: 1 }, "95%,100%": { transform: "translateY(-46px)", opacity: 0 } },
          "@keyframes tcBot": { "0%,35%": { transform: "translateY(46px)", opacity: 0 }, "50%,80%": { transform: "translateY(0)", opacity: 1 }, "95%,100%": { transform: "translateY(46px)", opacity: 0 } },
          "@keyframes tcOk": { "0%,52%": { opacity: 0 }, "58%,80%": { opacity: 1 }, "88%,100%": { opacity: 0 } },
          "& .l, & .r, & .ct, & .cb, & .ok": { transition: "transform .6s ease, opacity .4s ease" },
          "& .l": anim ? { animation: "tcL 7s ease-in-out infinite" } : { transform: state ? "none" : "translateX(-26px)" },
          "& .r": anim ? { animation: "tcR 7s ease-in-out infinite" } : { transform: state ? "none" : "translateX(26px)" },
          "& .ct": anim ? { animation: "tcTop 7s ease-in-out infinite" } : { transform: state ? "none" : "translateY(-46px)", opacity: state ? 1 : 0 },
          "& .cb": anim ? { animation: "tcBot 7s ease-in-out infinite" } : { transform: state ? "none" : "translateY(46px)", opacity: state ? 1 : 0 },
          "& .ok": anim ? { animation: "tcOk 7s ease-in-out infinite" } : { opacity: state ? 1 : 0 },
        }}
      >
        <defs>
          <linearGradient id="tcSteel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F6F9FB" />
            <stop offset=".5" stopColor="#DCE3EA" />
            <stop offset="1" stopColor="#B7C3CF" />
          </linearGradient>
        </defs>
        {/* left: tube + ferrule (short sleeve welded on, flaring out to a flange) */}
        <g className="l">
          <rect x="20" y="106" width="120" height="48" fill="url(#tcSteel)" stroke="#8E9CAB" strokeWidth="2" />
          <path d="M140 104 H172 L194 84 H204 V176 H194 L172 156 H140 Z" fill="url(#tcSteel)" stroke="#5C6B7A" strokeWidth="2" />
          <rect x="20" y="118" width="184" height="24" fill="#fff" stroke="none" />
          <path d="M140 100 V112 M140 148 V160" stroke="#C08A2E" strokeWidth="3" />
          <text x="34" y="96" style={{ fontWeight: 700, fill: T.muted, fontFamily: "inherit" }}>Tube</text>
          <text className="sm" x="100" y="186" style={{ fontWeight: 700, fill: "#A06F1E", fontFamily: "inherit" }}>weld</text>
          <text x="70" y="52" style={{ fontWeight: 800, fill: T.ink, fontFamily: "inherit" }}>Ferrule</text>
          <path d="M120 58 L176 96" stroke="#8E9CAB" strokeDasharray="3 3" />
        </g>
        {/* right: tube + ferrule */}
        <g className="r">
          <rect x="280" y="106" width="120" height="48" fill="url(#tcSteel)" stroke="#8E9CAB" strokeWidth="2" />
          <path d="M280 104 H248 L226 84 H216 V176 H226 L248 156 H280 Z" fill="url(#tcSteel)" stroke="#5C6B7A" strokeWidth="2" />
          <rect x="216" y="118" width="184" height="24" fill="#fff" stroke="none" />
          <path d="M280 100 V112 M280 148 V160" stroke="#C08A2E" strokeWidth="3" />
        </g>
        <rect x="204" y="86" width="12" height="88" rx="3" fill="#2F3A45" />
        <rect x="204" y="118" width="12" height="24" fill="#fff" />
        <text x="290" y="216" style={{ fontWeight: 700, fill: T.body, fontFamily: "inherit" }}>Gasket</text>
        <path d="M286 211 L218 168" stroke="#B9C4CE" strokeDasharray="3 3" />
        <g className="ct">
          <path d="M180 82 L194 64 H226 L240 82 V90 H232 L222 78 H198 L188 90 H180 Z" fill={T.greenDark} />
          <text x="250" y="70" style={{ fontWeight: 700, fill: T.greenDark, fontFamily: "inherit" }}>Clamp</text>
        </g>
        <g className="cb">
          <path d="M180 178 L194 196 H226 L240 178 V170 H232 L222 182 H198 L188 170 H180 Z" fill={T.greenDark} />
        </g>
        <g className="ok">
          <path d="M34 130 H386" stroke={T.green} strokeWidth="6" strokeLinecap="round" strokeDasharray="10 8" />
          <text x="24" y="246" style={{ fontWeight: 800, fill: T.greenDark, fontFamily: "inherit" }}>Sealed: smooth bore, no threads</text>
        </g>
      </Box>
      <Box role="group" aria-label="Show the joint" sx={{ mt: 1.5, display: "flex", justifyContent: "center", gap: 1 }}>
        {([["Apart", false], ["Clamped", true]] as const).map(([label, v]) => {
          const active = closed === v;
          return (
            <Box
              key={label}
              component="button"
              type="button"
              aria-pressed={active}
              onClick={() => setClosed(v)}
              sx={{ cursor: "pointer", fontFamily: "inherit", px: 2, py: 0.75, borderRadius: 999, fontSize: "0.85rem", fontWeight: 700, border: `1px solid ${active ? T.green : T.border}`, bgcolor: active ? T.greenSoft : "#fff", color: active ? T.greenDark : T.body }}
            >
              {label}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

function HowItWorks() {
  return (
    <Box component="section" aria-labelledby="h2-how" sx={{ py: { xs: 7, md: 10 } }}>
      <Box sx={{ ...wrap, display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "0.9fr 1.1fr" }, gap: { xs: 3, md: 6 }, alignItems: "center" }}>
        <Box>
          <Kicker>How it works</Kicker>
          <H2 id="h2-how">Three parts make one joint</H2>
          <Box component="ol" sx={{ m: 0, mt: 2, pl: 0, listStyle: "none", display: "grid", gap: 1.5, counterReset: "s" }}>
            {[
              ["Ferrules", "are welded to the two tube ends."],
              ["A gasket", "sits between the two ferrule faces."],
              ["The clamp", "closes round both flanges and squeezes them onto the gasket."],
            ].map(([b, t]) => (
              <Box component="li" key={b} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start", counterIncrement: "s", "&::before": { content: "counter(s)", flexShrink: 0, width: 30, height: 30, borderRadius: "50%", bgcolor: T.greenSoft, color: T.greenDark, fontWeight: 800, display: "grid", placeItems: "center", fontSize: "0.9rem" } }}>
                <Box sx={{ color: T.body, lineHeight: 1.6, pt: 0.4 }}>
                  <b style={{ color: T.ink }}>{b}</b> {t}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Reveal from="right">
          <Box sx={{ p: { xs: 1.25, md: 3 }, pb: { xs: 2, md: 3 }, borderRadius: "28px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
            <JointDiagram />
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}

// Quality and finish: taken from the Adaptix datasheets (same for every product)
const WITH_ORDER = [
  { icon: <VerifiedOutlinedIcon />, title: "EN 10204 3.1 certificate", text: "with every delivery" },
  { icon: <QrCode2OutlinedIcon />, title: "Marked on every part", text: "maker, size, heat number and material grade" },
  { icon: <ScienceOutlinedIcon />, title: "Test reports available", text: "mechanical, chemical, NDT, IGC and PMI" },
  { icon: <ShieldOutlinedIcon />, title: "180-day warranty", text: "packed on pallets, in cases or cartons" },
];
const FIGURES = [
  { value: "Ra < 0.4", unit: "µm", label: "Inside surface of ferrules and caps (< 0.8 µm outside)" },
  { value: "H3 / H4", unit: "", label: "Hygienic class to DIN 11866" },
  { value: "5", unit: "grades", label: "316L, 316, 304, 304L or duplex" },
];
const FINISHES = ["Mechanically polished", "Electropolished", "Mirror polished"];

function Quality() {
  return (
    <Box component="section" aria-labelledby="h2-quality" sx={{ py: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: { xs: 3.5, md: 5 }, maxWidth: 720 }}>
          <Kicker>Quality & finish</Kicker>
          <H2 id="h2-quality">The same standard on every part</H2>
          <Lead>Every clamp, ferrule and cap comes with the same paperwork and marking. The parts that touch the product share the same hygienic finish.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "0.9fr 1.1fr" }, gap: { xs: 2, md: 3 }, alignItems: "stretch" }}>
          {/* With every order: a short checklist */}
          <Reveal>
            <Box sx={{ height: "100%", boxSizing: "border-box", p: { xs: 2.5, md: 3.5 }, borderRadius: "24px", bgcolor: T.greenSoft, border: "1px solid #D5EFCB" }}>
              <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.greenDark, mb: 2 }}>With every order</Box>
              <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", display: "grid", gap: 2.25 }}>
                {WITH_ORDER.map((it) => (
                  <Box component="li" key={it.title} sx={{ display: "flex", gap: 1.75, alignItems: "center" }}>
                    <Box sx={{ flexShrink: 0, width: 44, height: 44, borderRadius: "50%", bgcolor: "#fff", color: T.greenDark, display: "grid", placeItems: "center", boxShadow: "0 2px 8px rgba(14,27,18,0.06)", "& svg": { fontSize: 22 } }}>{it.icon}</Box>
                    <Box>
                      <Box sx={{ fontWeight: 800, color: T.ink, fontSize: "1rem", lineHeight: 1.3 }}>{it.title}</Box>
                      <Box sx={{ fontSize: "0.88rem", color: T.body, lineHeight: 1.4 }}>{it.text}</Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Reveal>
          {/* Finish & hygiene: three figures and the finishes */}
          <Reveal delay={120}>
            <Box sx={{ height: "100%", boxSizing: "border-box", p: { xs: 2.5, md: 3.5 }, borderRadius: "24px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow, display: "flex", flexDirection: "column" }}>
              <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.greenDark, mb: 2 }}>Finish & hygiene</Box>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, gap: { xs: 2, sm: 0 }, flex: 1 }}>
                {FIGURES.map((f, i) => (
                  <Box key={f.label} sx={{ px: { sm: 2.5 }, pl: { sm: i === 0 ? 0 : 2.5 }, borderLeft: { sm: i === 0 ? "none" : `1px solid ${T.border}` } }}>
                    <Box sx={{ fontSize: { xs: "1.8rem", md: "2.1rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink, lineHeight: 1.1, whiteSpace: "nowrap" }}>
                      {f.value}
                      {f.unit && <Box component="span" sx={{ fontSize: "0.5em", ml: 0.5, color: T.greenDark }}>{f.unit}</Box>}
                    </Box>
                    <Box sx={{ mt: 0.75, fontSize: "0.86rem", color: T.body, lineHeight: 1.45 }}>{f.label}</Box>
                  </Box>
                ))}
              </Box>
              <Box sx={{ mt: 3, pt: 2.5, borderTop: `1px solid ${T.border}` }}>
                <Box sx={{ fontSize: "0.85rem", fontWeight: 700, color: T.ink, mb: 1.25 }}>Surface finishes</Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                  {FINISHES.map((f) => (
                    <Box key={f} component="span" sx={{ px: 1.5, py: 0.6, borderRadius: 999, bgcolor: "#EAF4FF", color: "#2F5E9E", fontSize: "0.85rem", fontWeight: 700 }}>{f}</Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Reveal>
        </Box>
      </Box>
    </Box>
  );
}

const FOOD_APP = "/applications/food-dairy-pharma";
// Each use opens the industry page that covers it
const USES: [string, string][] = [
  ["Dairy and food processing", FOOD_APP], ["Chemical processing", "/applications/chemical"], ["Pharma and WFI transfer", FOOD_APP],
  ["CIP / SIP cleaning loops", FOOD_APP], ["Filtration", FOOD_APP], ["Sampling points", FOOD_APP],
  ["Fermentation and cell culture", FOOD_APP], ["Filling lines", FOOD_APP], ["Vessels and process tubing", FOOD_APP],
];

function Uses() {
  return (
    <Box component="section" aria-labelledby="h2-uses" sx={{ pb: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ p: { xs: 3, md: 4 }, borderRadius: "24px", background: "linear-gradient(120deg, #EAF4FF 0%, #F1FAEE 100%)", border: "1px solid #DCE6F5" }}>
          <Box component="h2" id="h2-uses" sx={{ m: 0, mb: 2, fontSize: { xs: "1.3rem", md: "1.55rem" }, fontWeight: 800, color: T.ink, letterSpacing: "-0.02em" }}>Where they’re used</Box>
          <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", display: "flex", flexWrap: "wrap", gap: 1 }}>
            {USES.map(([u, href]) => (
              <Box component="li" key={u}>
                <Box component={Link} href={href} sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, px: 1.5, py: 0.75, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}`, fontSize: "0.88rem", fontWeight: 600, color: T.body, textDecoration: "none", transition: "all .15s", "&:hover": { borderColor: T.greenDark, color: T.greenDark, bgcolor: T.greenSoft }, "&:hover svg": { transform: "translateX(2px)" } }}>
                  {u} <ArrowForwardRoundedIcon sx={{ fontSize: 15, opacity: 0.6, transition: "transform .15s" }} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Faq() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 }, bgcolor: T.surface }}>
      <Box sx={{ ...wrap, maxWidth: 900 }}>
        <FAQ items={FAQS} title="Sanitary fitting questions" />
      </Box>
    </Box>
  );
}

function Cta() {
  return (
    <Box component="section" aria-labelledby="h2-cta" sx={{ py: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ p: { xs: 3.5, md: 6 }, borderRadius: "28px", background: `linear-gradient(120deg, ${L.mint} 0%, #EAF4FF 55%, #FFF7DD 100%)`, border: `1px solid ${T.border}`, display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { md: "center" }, justifyContent: "space-between", gap: 3 }}>
          <Box>
            <Box component="h2" id="h2-cta" sx={{ m: 0, mb: 1, fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink }}>Need sanitary fittings?</Box>
            <Box component="p" sx={{ m: 0, maxWidth: 620, lineHeight: 1.7, color: T.body }}>
              Send us the tube size, material, finish and quantities, and we’ll quote with the 3.1 certificate included.
            </Box>
          </Box>
          <Box component={Link} href="/contact" sx={{ ...pillBtn(true), flexShrink: 0 }}>
            Get a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function SanitaryView() {
  return (
    <MotionRoot sx={{ ...textReset, bgcolor: "#fff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Hero />
      <Stats />
      <Finder />
      <Categories />
      <HowItWorks />
      <Quality />
      <Uses />
      <Faq />
      <Cta />
    </MotionRoot>
  );
}
