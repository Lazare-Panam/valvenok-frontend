"use client";

// About page: light palette (soft greens, cream, pale sky) with plenty of
// motion — drifting blobs, word-by-word headline, mouse-tilt image, floating
// badges, spinning ring, keyword marquee, count-up stats, scroll-filled
// timeline and tilt/glow value cards. Copy is unchanged. Everything calms
// down for visitors who ask for reduced motion.

import * as React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import BubbleChartOutlinedIcon from "@mui/icons-material/BubbleChartOutlined";
import { T, textReset } from "../Landing/modern/tokens";
import { Eyebrow } from "../Landing/modern/SectionHeader";
import SectionHeader from "../Landing/modern/SectionHeader";
import PillButton from "../Landing/modern/Buttons";
import { L, KF, gradientText, useInView, Reveal, Blob, Words } from "../Common/LightMotion";

const WRAP = { width: "100%", boxSizing: "border-box", maxWidth: T.maxWidth, mx: "auto", px: { xs: 2, md: 4 } } as const;
const HERO_IMG = "https://pblol2.blob.core.windows.net/valvenok-images/banner-images/fittings-hero.jpg";

// ───────────────────────── Hero ─────────────────────────
function SpinRing() {
  return (
    <Box aria-hidden sx={{ position: "absolute", width: 128, height: 128, right: { xs: 8, md: -12 }, top: { xs: -36, md: -44 }, zIndex: 3 }}>
      <Box sx={{ position: "absolute", inset: 0, borderRadius: "50%", bgcolor: "#fff", boxShadow: T.shadowHover, border: `1px solid ${T.border}` }} />
      <Box component="svg" viewBox="0 0 120 120" sx={{ position: "absolute", inset: 0, animation: "spin 14s linear infinite" }}>
        <defs>
          <path id="about-ring" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text fill={T.greenDark} fontSize="10" fontWeight="700" letterSpacing="1.5">
          <textPath href="#about-ring" textLength="272" lengthAdjust="spacing">UK BASED SUPPLIER • SS316 • H₂ READY • </textPath>
        </text>
      </Box>
      <Box sx={{ position: "absolute", inset: 38, borderRadius: "50%", bgcolor: L.mint, display: "grid", placeItems: "center", fontWeight: 800, color: T.greenDark, fontSize: "0.95rem" }}>UK</Box>
    </Box>
  );
}

function FloatChip({ icon, title, sub, sx, delay = 0 }: { icon: React.ReactNode; title: string; sub: string; sx: object; delay?: number }) {
  return (
    <Box sx={{ position: "absolute", zIndex: 3, animation: `floaty 5s ease-in-out ${delay}s infinite`, ...sx }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 1.5, pr: 2.5, borderRadius: "18px", bgcolor: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", border: `1px solid ${T.border}`, boxShadow: T.shadowHover }}>
        <Box sx={{ width: 40, height: 40, borderRadius: "12px", bgcolor: L.mint, color: T.greenDark, display: "grid", placeItems: "center", animation: "pulseRing 2.4s ease-out infinite" }}>{icon}</Box>
        <Box>
          <Typography sx={{ fontWeight: 800, color: T.ink, lineHeight: 1.2, fontSize: "0.95rem" }}>{title}</Typography>
          <Typography sx={{ fontSize: "0.78rem", color: T.muted }}>{sub}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

function Hero() {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({ x: ((e.clientY - r.top) / r.height - 0.5) * -10, y: ((e.clientX - r.left) / r.width - 0.5) * 12 });
  };
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", background: `linear-gradient(180deg, ${L.cream} 0%, #F2FAEE 60%, #fff 100%)` }}>
      <Blob color={L.lime} sx={{ top: -140, left: -120 }} />
      <Blob color={L.sky} dur={22} delay={2} sx={{ top: 40, right: -160 }} />
      <Blob color={L.sun} dur={26} delay={4} sx={{ bottom: -200, left: "35%", width: 360, height: 360 }} />
      {/* dot grid */}
      <Box aria-hidden sx={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(46,139,30,0.14) 1px, transparent 1px)", backgroundSize: "22px 22px", maskImage: "linear-gradient(180deg, black, transparent 85%)", pointerEvents: "none" }} />

      <Box sx={{ ...WRAP, position: "relative", pt: { xs: 5, md: 8 }, pb: { xs: 9, md: 11 } }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.05fr 1fr" }, gap: { xs: 7, md: 8 }, alignItems: "center" }}>
          <Box>
            <Box sx={{ animation: "wordIn .7s ease both" }}>
              <Eyebrow>About Valvenok</Eyebrow>
            </Box>
            <Typography component="h1" sx={{ mt: 2.5, fontWeight: 800, fontSize: { xs: "2.7rem", md: "4.3rem" }, lineHeight: 1.02, letterSpacing: "-0.035em", color: T.ink }}>
              <Words text="Built for engineers," />
              <Box component="span" sx={{ position: "relative", display: "inline-block" }}>
                <Words text="by engineers" start={330} sx={gradientText} />
                <Box component="svg" aria-hidden viewBox="0 0 300 20" preserveAspectRatio="none" sx={{ position: "absolute", left: 0, bottom: { xs: -8, md: -12 }, width: "100%", height: { xs: 12, md: 18 } }}>
                  <path d="M4 14 C 60 2, 120 18, 180 8 S 270 4, 296 12" fill="none" stroke={T.green} strokeWidth="5" strokeLinecap="round" strokeDasharray="320" style={{ animation: "draw 1.2s ease 0.9s both" }} />
                </Box>
              </Box>
            </Typography>
            <Typography sx={{ mt: 4, fontSize: { xs: "1.05rem", md: "1.2rem" }, lineHeight: 1.7, color: T.body, maxWidth: 560, animation: "wordIn .9s ease .6s both" }}>
              Valvenok is a UK-based industrial supplier specialising in valves, fittings, and fluid control components. We exist to make
              procurement faster, simpler, and more reliable for engineers and procurement teams worldwide.
            </Typography>
            <Box sx={{ mt: 4, display: "flex", gap: 1.5, flexWrap: "wrap", animation: "wordIn .9s ease .8s both" }}>
              <PillButton href="/contact">Talk to our team</PillButton>
              <PillButton href="/quick-order" variant="secondary">
                Quick Order
              </PillButton>
            </Box>
          </Box>

          <Box onMouseMove={onMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })} sx={{ position: "relative", perspective: "1200px", animation: "wordIn 1s ease .3s both" }}>
            <Box
              sx={{
                position: "relative",
                aspectRatio: "5 / 4",
                borderRadius: "32px",
                overflow: "hidden",
                boxShadow: "0 30px 70px rgba(46,139,30,0.18)",
                border: "6px solid #fff",
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: "transform .25s ease-out",
              }}
            >
              <Image src={HERO_IMG} alt="Stainless steel instrumentation fittings" fill priority sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: "cover" }} />
              <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(255,255,255,0.15) 0%, transparent 40%, rgba(234,248,228,0.35) 100%)" }} />
            </Box>
            <SpinRing />
            <FloatChip icon={<WorkspacePremiumOutlinedIcon fontSize="small" />} title="JOSCAR" sub="Registered Supplier" sx={{ left: { xs: 12, md: -40 }, bottom: { xs: -28, md: 40 } }} />
            <FloatChip icon={<ScienceOutlinedIcon fontSize="small" />} title="SS316" sub="Primary Material" delay={1.2} sx={{ right: { xs: 12, md: -24 }, bottom: { xs: -84, md: -26 }, display: { xs: "none", sm: "block" } }} />
            <FloatChip icon={<BubbleChartOutlinedIcon fontSize="small" />} title="H₂" sub="Hydrogen Ready" delay={2.1} sx={{ left: { md: "38%" }, top: { md: -30 }, display: { xs: "none", md: "block" } }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// ───────────────────────── Marquee ─────────────────────────
const MARQUEE = ["Valves", "Fittings", "Instrumentation", "UK Support", "SS316", "JOSCAR Registered", "Hydrogen Ready", "No Minimum Order", "Traceable Quality", "Straight Talking"];

function Marquee() {
  const row = [...MARQUEE, ...MARQUEE];
  return (
    <Box aria-hidden sx={{ overflow: "hidden", py: 2.25, bgcolor: L.mint, borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}`, transform: "rotate(-1.2deg)", mx: "-2%", my: { xs: 2, md: 3 } }}>
      <Box sx={{ display: "flex", width: "max-content", animation: "marquee 30s linear infinite" }}>
        {row.map((w, i) => (
          <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 3, px: 3, fontSize: { xs: "1.1rem", md: "1.5rem" }, fontWeight: 800, letterSpacing: "-0.02em", color: i % 2 ? T.greenDark : T.ink, whiteSpace: "nowrap" }}>
            {w}
            <Box component="span" sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: T.green }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// ───────────────────────── Stats ─────────────────────────
const STATS = [
  { value: "UK", label: "Based Supplier" },
  { value: "32", label: "Brands distributed" },
  { value: "High", label: "Pressure Ratings Vary by Product" },
  { value: "SS316", label: "Primary Material" },
  { value: "JOSCAR", label: "Registered Supplier" },
  { value: "H₂", label: "Hydrogen Ready" },
];

function CountUp({ value, run }: { value: string; run: boolean }) {
  const n = Number(value);
  const [v, setV] = React.useState(value);
  React.useEffect(() => {
    if (!run || Number.isNaN(n)) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / 1400);
      setV(String(Math.round(n * (1 - Math.pow(1 - k, 3)))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, n]);
  return <>{v}</>;
}

function Stats() {
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  return (
    <Box component="section" sx={{ ...WRAP, py: { xs: 7, md: 9 } }}>
      <Box ref={ref} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)", lg: "repeat(6, 1fr)" }, gap: 2 }}>
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} from="zoom">
            <Box
              sx={{
                height: "100%",
                boxSizing: "border-box",
                position: "relative",
                overflow: "hidden",
                p: 3,
                borderRadius: "22px",
                bgcolor: "#fff",
                border: `1px solid ${T.border}`,
                boxShadow: T.shadow,
                transition: "transform .25s, box-shadow .25s",
                "&::before": { content: '""', position: "absolute", left: 0, right: 0, top: 0, height: 4, background: `linear-gradient(90deg, ${T.green}, #8FD9F0, #FFD978, ${T.green})`, backgroundSize: "200% auto", animation: "shine 3s linear infinite" },
                "&:hover": { transform: "translateY(-6px) rotate(-1deg)", boxShadow: T.shadowHover },
              }}
            >
              <Typography sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "2.3rem" }, letterSpacing: "-0.03em", lineHeight: 1.05, ...gradientText }}>
                <CountUp value={s.value} run={on} />
              </Typography>
              <Typography sx={{ mt: 1, fontSize: "0.86rem", lineHeight: 1.45, color: T.body }}>{s.label}</Typography>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Box>
  );
}

// ───────────────────────── Story + scroll timeline ─────────────────────────
const MILESTONES = [
  { year: "2018", title: "Founded in Bicester", body: "Valvenok was established to solve a problem we experienced firsthand — sourcing quality instrumentation fittings quickly, without minimum orders or long lead times." },
  { year: "2020", title: "JOSCAR Registration", body: "Achieved JOSCAR registration, opening the door to defence and aerospace supply chains and cementing our commitment to compliance and traceability." },
  { year: "2022", title: "Hydrogen-Ready Range", body: "Launched our H₂-ready product line in response to growing demand from the clean energy sector, stocking components rated and tested for hydrogen service." },
  { year: "2024", title: "Expanded Product Range", body: "Broadened our range across fittings, valves, adapters, and instrumentation components, with availability and lead times confirmed on every quotation." },
];

function Story() {
  const listRef = React.useRef<HTMLOListElement>(null);
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const on = () => {
      const el = listRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = (window.innerHeight * 0.6 - r.top) / r.height;
      setProgress(Math.max(0, Math.min(1, p)));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);
  const body = { fontSize: "1.05rem", lineHeight: 1.8, color: T.body };
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", background: `linear-gradient(180deg, #fff 0%, ${L.cream} 100%)` }}>
      <Blob color={L.sky} dur={24} sx={{ top: "20%", left: -220, width: 380, height: 380 }} />
      <Box sx={{ ...WRAP, position: "relative", py: { xs: 8, md: 11 }, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1.15fr" }, gap: { xs: 5, md: 9 } }}>
        <Box sx={{ position: { md: "sticky" }, top: { md: 150 }, alignSelf: "start" }}>
          <Reveal from="left">
            <Eyebrow>Our Story</Eyebrow>
            <Typography component="h2" sx={{ mt: 2, fontWeight: 800, fontSize: { xs: "2.1rem", md: "2.9rem" }, letterSpacing: "-0.03em", lineHeight: 1.08, color: T.ink }}>
              From a stock problem to a{" "}
              <Box component="span" sx={gradientText}>
                stock solution
              </Box>
            </Typography>
            <Typography sx={{ ...body, mt: 3 }}>
              We started Valvenok because we were frustrated. As engineers ourselves, we knew how much time and money was wasted chasing down
              fittings from suppliers who either didn&apos;t hold stock or made you order a minimum of 100 pieces.
            </Typography>
            <Typography sx={{ ...body, mt: 2 }}>
              We built a business around one principle: hold the stock, ship it fast, and make the process as frictionless as possible for the
              people actually doing the work.
            </Typography>
          </Reveal>
        </Box>

        <Box component="ol" ref={listRef} sx={{ listStyle: "none", m: 0, p: 0, position: "relative" }}>
          {/* track + fill */}
          <Box aria-hidden sx={{ position: "absolute", left: 27, top: 8, bottom: 8, width: 4, borderRadius: 2, bgcolor: "rgba(46,139,30,0.12)" }}>
            <Box sx={{ width: "100%", height: `${progress * 100}%`, borderRadius: 2, background: `linear-gradient(180deg, ${T.green}, #8FD9F0)`, transition: "height .15s linear" }} />
          </Box>
          {MILESTONES.map((m, i) => {
            const lit = progress >= (i + 0.2) / MILESTONES.length;
            return (
              <Box component="li" key={m.year} sx={{ position: "relative", pl: { xs: 9, md: 10 }, pb: i === MILESTONES.length - 1 ? 0 : 3.5 }}>
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 58,
                    height: 58,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    zIndex: 1,
                    bgcolor: lit ? T.green : "#fff",
                    color: lit ? "#fff" : T.greenDark,
                    border: `2px solid ${lit ? T.green : "rgba(46,139,30,0.3)"}`,
                    transform: lit ? "scale(1.08)" : "scale(1)",
                    transition: "all .35s cubic-bezier(.2,.8,.2,1)",
                    animation: lit ? "pulseRing 2s ease-out infinite" : "none",
                  }}
                >
                  {m.year}
                </Box>
                <Reveal delay={i * 80} from="right">
                  <Box sx={{ p: { xs: 2.5, md: 3 }, borderRadius: "22px", bgcolor: "#fff", border: `1px solid ${lit ? "#CFEBC6" : T.border}`, boxShadow: lit ? T.shadowHover : T.shadow, transition: "all .35s", "&:hover": { transform: "translateX(6px)" } }}>
                    <Typography component="h3" sx={{ fontWeight: 700, fontSize: "1.15rem", color: T.ink }}>
                      {m.title}
                    </Typography>
                    <Typography sx={{ mt: 1, fontSize: "0.98rem", lineHeight: 1.7, color: T.body }}>{m.body}</Typography>
                  </Box>
                </Reveal>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

// ───────────────────────── Values (tilt + cursor glow) ─────────────────────────
const VALUES = [
  { icon: Inventory2OutlinedIcon, title: "Clear Availability", body: "We confirm availability and lead time up front, so you can plan your project with confidence.", tint: "#EAF8E4" },
  { icon: BoltOutlinedIcon, title: "No Minimum Order", body: "Single components or full project quantities — no minimum order on standard catalogue items.", tint: "#FFF6DA" },
  { icon: VerifiedOutlinedIcon, title: "Traceable Quality", body: "Products are sourced from established manufacturers, with material traceability and certificates available on request for applicable lines.", tint: "#E6F4FD" },
  { icon: HandshakeOutlinedIcon, title: "Straight Talking", body: "We're engineers first. We give you straight answers, honest pricing, and no sales runaround.", tint: "#F1ECFB" },
];

function ValueCard({ v }: { v: (typeof VALUES)[number] }) {
  const [s, setS] = React.useState({ rx: 0, ry: 0, x: 50, y: 50, on: false });
  const Icon = v.icon;
  return (
    <Box
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        setS({ rx: (py - 0.5) * -12, ry: (px - 0.5) * 14, x: px * 100, y: py * 100, on: true });
      }}
      onMouseLeave={() => setS({ rx: 0, ry: 0, x: 50, y: 50, on: false })}
      sx={{ perspective: "900px", height: "100%" }}
    >
      <Box
        sx={{
          height: "100%",
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden",
          p: 3.5,
          borderRadius: "24px",
          bgcolor: v.tint,
          border: `1px solid ${T.border}`,
          transform: `rotateX(${s.rx}deg) rotateY(${s.ry}deg) ${s.on ? "translateY(-6px)" : ""}`,
          transition: "transform .2s ease-out, box-shadow .2s",
          boxShadow: s.on ? T.shadowHover : T.shadow,
          "&::after": { content: '""', position: "absolute", inset: 0, background: `radial-gradient(260px circle at ${s.x}% ${s.y}%, rgba(255,255,255,0.85), transparent 60%)`, opacity: s.on ? 1 : 0, transition: "opacity .2s", pointerEvents: "none" },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ width: 56, height: 56, borderRadius: "18px", bgcolor: "#fff", color: T.greenDark, display: "grid", placeItems: "center", boxShadow: T.shadow, transform: s.on ? "rotate(-10deg) scale(1.1)" : "none", transition: "transform .3s cubic-bezier(.2,.8,.2,1.4)" }}>
            <Icon />
          </Box>
          <Typography component="h3" sx={{ mt: 2.5, fontWeight: 700, fontSize: "1.18rem", color: T.ink }}>
            {v.title}
          </Typography>
          <Typography sx={{ mt: 1, fontSize: "0.98rem", lineHeight: 1.7, color: T.body }}>{v.body}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

function Values() {
  return (
    <Box component="section" sx={{ ...WRAP, py: { xs: 8, md: 11 } }}>
      <Reveal>
        <SectionHeader eyebrow="What We Stand For" title="Our values" />
      </Reveal>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: 2.5 }}>
        {VALUES.map((v, i) => (
          <Reveal key={v.title} delay={i * 110}>
            <ValueCard v={v} />
          </Reveal>
        ))}
      </Box>
    </Box>
  );
}

// ───────────────────────── CTA (light) ─────────────────────────
function Cta() {
  return (
    <Box component="section" sx={{ ...WRAP, pb: { xs: 8, md: 11 } }}>
      <Reveal from="zoom">
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "32px",
            p: { xs: 4, md: 7 },
            background: "linear-gradient(120deg, #EAF8E4, #F6FFF2, #E6F4FD, #FFF8E1, #EAF8E4)",
            backgroundSize: "300% 300%",
            animation: "bgShift 14s ease infinite",
            border: "1px solid #D8EED0",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.3fr 1fr" },
            gap: 4,
            alignItems: "center",
          }}
        >
          <Blob color={L.lime} sx={{ right: -120, top: -160, width: 360, height: 360 }} />
          <Blob color={L.sky} dur={20} delay={3} sx={{ left: "40%", bottom: -220, width: 340, height: 340 }} />
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Eyebrow>Ready to Order?</Eyebrow>
            <Typography component="h2" sx={{ mt: 2, fontWeight: 800, fontSize: { xs: "2.1rem", md: "2.9rem" }, letterSpacing: "-0.03em", lineHeight: 1.08, color: T.ink }}>
              Valves. Fittings. Instrumentation.{" "}
              <Box component="span" sx={gradientText}>
                UK Support.
              </Box>
            </Typography>
            <Typography sx={{ mt: 2.5, fontSize: "1.05rem", lineHeight: 1.75, color: T.body, maxWidth: 560 }}>
              Browse our full catalogue of SS316 fittings, valves, and instrumentation components — or use Quick Order if you already know your
              part numbers.
            </Typography>
          </Box>
          <Box sx={{ position: "relative", zIndex: 1, display: "flex", gap: 1.5, flexWrap: "wrap", justifyContent: { md: "flex-end" } }}>
            <PillButton href="/categories">Browse Products</PillButton>
            <PillButton href="/quick-order" variant="secondary">
              Quick Order
            </PillButton>
          </Box>
        </Box>
      </Reveal>
    </Box>
  );
}

export default function AboutModern({ children }: { children?: React.ReactNode }) {
  return (
    <Box
      sx={{
        ...textReset,
        ...KF,
        bgcolor: "#fff",
        overflowX: "clip",
        "@media (prefers-reduced-motion: reduce)": { "& *": { animation: "none !important", transition: "none !important" } },
      }}
    >
      <Hero />
      <Marquee />
      <Stats />
      <Story />
      <Values />
      {children}
      <Cta />
    </Box>
  );
}
