'use client'

// Homepage "Who we are": the Valvenok ecosystem video (portrait 1080 × 1920, 12 s,
// 13 MB) on a light, animated stage (pastel blobs, a turning halo, two orbit rings
// with dots), with the About page badges in their own columns so they never cover
// the video. Copy is the original MarsSection text plus three facts already stated
// on the site and in the video (27 manufacturers, 1,000+ products, no minimum order).
// The video starts loading shortly before the section comes into view and fades in
// over a light shimmer once its first frame is ready.

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import BubbleChartOutlinedIcon from "@mui/icons-material/BubbleChartOutlined";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { T, textReset } from "./homeTokens";
import { KF, gradientTextBright, Squiggle, useInView } from "@/src/app/Common/LightMotion";
import { AQUA, BRAND, BRAND_GRADIENT, BRAND_GRADIENT_HOVER, withAlpha } from "@/src/theme/brand";

const VIDEO = "https://pblol2.blob.core.windows.net/valvenok-images/valvenok-ecosystem-12s.mp4";
const SKY = BRAND.hoverBorder, SUN = BRAND.hoverBorder;

function EcosystemVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);
  const [ready, setReady] = useState(false);
  const [still, setStill] = useState(false);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // Reduced motion: load it but stay paused on the first frame
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setStill(true); setLoad(true); return; }
    // Start fetching well before the section is on screen, so it is ready to play
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setLoad(true); if (v.src) v.play().catch(() => {}); } else v.pause();
    }, { rootMargin: "800px 0px" });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <>
      {/* light shimmer until the first frame is ready (no stand-in photo) */}
      <Box aria-hidden sx={{ position: "absolute", inset: 0, background: `linear-gradient(110deg, ${BRAND.surface} 30%, ${AQUA.mistFaint} 50%, ${BRAND.surface} 70%)`, backgroundSize: "200% 100%", animation: "shine 1.6s linear infinite", opacity: ready ? 0 : 1, transition: "opacity .5s" }} />
      <video ref={ref} src={load ? VIDEO : undefined} autoPlay={load && !still} muted loop playsInline preload={still ? "metadata" : "none"}
        onLoadedData={() => setReady(true)}
        aria-label="Valvenok: 27 manufacturer partners, 1000+ products, JOSCAR registered supplier"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: ready ? 1 : 0, transition: "opacity .6s ease" }} />
    </>
  );
}

function Chip({ icon, title, sub, delay }: { icon: React.ReactNode; title: string; sub: string; delay: number }) {
  return (
    <Box sx={{ animation: `floaty 5s ease-in-out ${delay}s infinite` }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, p: 1.25, pr: 2, borderRadius: "18px", bgcolor: withAlpha(BRAND.white, 0.86), backdropFilter: "blur(10px)", border: `1px solid ${withAlpha(BRAND.white, 0.9)}`, boxShadow: `0 1px 2px ${withAlpha(BRAND.ink, 0.05)}, 0 14px 34px ${withAlpha(BRAND.hover, 0.14)}`, transition: "transform .2s", "&:hover": { transform: "scale(1.05)" } }}>
        <Box sx={{ flexShrink: 0, width: 38, height: 38, borderRadius: "12px", background: `linear-gradient(140deg, ${AQUA.mistFaint}, ${BRAND.tint})`, color: T.brandDark, display: "grid", placeItems: "center", animation: `pulseRing 2.6s ease-out ${delay}s infinite` }}>{icon}</Box>
        <Box sx={{ minWidth: 0 }}>
          <Typography sx={{ fontWeight: 800, color: T.ink, lineHeight: 1.2, fontSize: "0.92rem" }}>{title}</Typography>
          <Typography sx={{ fontSize: "0.76rem", color: T.muted, whiteSpace: "nowrap" }}>{sub}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

// Dashed orbit ring with a few dots riding on it
function Orbit({ size, dur, reverse, dots }: { size: number; dur: number; reverse?: boolean; dots: { a: number; c: string; r: number }[] }) {
  return (
    <Box aria-hidden sx={{ position: "absolute", top: "50%", left: "50%", width: size, height: size, ml: `${-size / 2}px`, mt: `${-size / 2}px`, borderRadius: "50%", border: `1.5px dashed ${withAlpha(BRAND.hover, 0.22)}`, animation: `spin ${dur}s linear infinite ${reverse ? "reverse" : ""}`, pointerEvents: "none" }}>
      {dots.map((d, i) => (
        <Box key={i} sx={{ position: "absolute", top: "50%", left: "50%", width: d.r * 2, height: d.r * 2, ml: `${-d.r}px`, mt: `${-d.r}px`, borderRadius: "50%", bgcolor: d.c, boxShadow: `0 0 0 6px ${d.c}33`, transform: `rotate(${d.a}deg) translateX(${size / 2}px)` }} />
      ))}
    </Box>
  );
}

function Stage() {
  const left = [
    <Chip key="h2" icon={<BubbleChartOutlinedIcon fontSize="small" />} title="H₂" sub="Hydrogen Ready" delay={0} />,
    <Chip key="joscar" icon={<WorkspacePremiumOutlinedIcon fontSize="small" />} title="JOSCAR" sub="Registered Supplier" delay={1.2} />,
  ];
  const right = [
    <Chip key="bvaa" icon={<GroupsOutlinedIcon fontSize="small" />} title="BVAA" sub="Member" delay={0.6} />,
    <Chip key="ss316" icon={<ScienceOutlinedIcon fontSize="small" />} title="SS316" sub="Primary Material" delay={1.8} />,
  ];
  const col = { display: { xs: "none", sm: "flex" }, flexDirection: "column", justifyContent: "space-around", gap: 4, alignSelf: "stretch", py: 7, position: "relative", zIndex: 2 } as const;
  return (
    <Box>
      <Box sx={{ position: "relative", display: "grid", gridTemplateColumns: { xs: "1fr", sm: "auto 300px auto" }, gap: { xs: 2, sm: 3 }, alignItems: "center", justifyContent: "center" }}>
        <Box sx={{ ...col, alignItems: "flex-end" }}>{left}</Box>

        <Box sx={{ position: "relative", justifySelf: "center", width: { xs: "min(100%, 300px)", sm: 300 } }}>
          {/* turning halo and orbits behind the frame */}
          <Box aria-hidden sx={{ position: "absolute", inset: "-14% -40%", borderRadius: "50%", background: `conic-gradient(from 0deg, ${AQUA.mistFaint}, ${BRAND.tint}, ${BRAND.tintStrong}, ${BRAND.divider}, ${AQUA.mistFaint})`, filter: "blur(36px)", opacity: 0.9, animation: "spin 18s linear infinite", pointerEvents: "none" }} />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Orbit size={470} dur={40} dots={[{ a: -30, c: T.brand, r: 6 }, { a: 140, c: SKY, r: 5 }]} />
            <Orbit size={600} dur={60} reverse dots={[{ a: 60, c: SUN, r: 6 }, { a: 220, c: T.brand, r: 4 }, { a: 320, c: SKY, r: 4 }]} />
          </Box>

          {/* shimmering gradient frame */}
          <Box sx={{ position: "relative", zIndex: 1, p: "6px", borderRadius: "34px", background: `linear-gradient(120deg, ${BRAND.white}, ${AQUA.mistFaint}, ${BRAND.tint}, ${BRAND.white}, ${BRAND.tintStrong}, ${BRAND.white})`, backgroundSize: "300% 300%", animation: "bgShift 8s ease infinite", boxShadow: `0 30px 80px ${withAlpha(BRAND.hover, 0.20)}, 0 0 0 1px ${withAlpha(BRAND.hover, 0.08)}` }}>
            <Box sx={{ position: "relative", aspectRatio: "9 / 16", borderRadius: "28px", overflow: "hidden", bgcolor: BRAND.divider }}>
              <EcosystemVideo />
              {/* glass sheen sweeping across */}
              <Box aria-hidden sx={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "40%", background: `linear-gradient(90deg, transparent, ${withAlpha(BRAND.white, 0.35)}, transparent)`, animation: "sweep 7s ease-in-out 2s infinite", pointerEvents: "none" }} />
            </Box>
          </Box>
        </Box>

        <Box sx={{ ...col, alignItems: "flex-start" }}>{right}</Box>
      </Box>
      {/* phones: the four badges in a grid under the video */}
      <Box sx={{ display: { xs: "grid", sm: "none" }, gridTemplateColumns: "1fr 1fr", gap: 1.25, mt: 3 }}>{[...left, ...right]}</Box>
    </Box>
  );
}

function CountUp({ to, run, suffix = "" }: { to: number; run: boolean; suffix?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / 1400);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, to]);
  return <>{n.toLocaleString("en-GB")}{suffix}</>;
}

function Facts() {
  const [ref, on] = useInView<HTMLDivElement>(0.4);
  const facts: { value: React.ReactNode; label: string; tint: string }[] = [
    { value: <CountUp to={27} run={on} />, label: "Manufacturers", tint: BRAND.white },
    { value: <CountUp to={1000} run={on} suffix="+" />, label: "Products in range", tint: BRAND.white },
    { value: "No", label: "Minimum order", tint: BRAND.white },
  ];
  return (
    <Box ref={ref} sx={{ mt: 3.5, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 1.25 }}>
      {facts.map((f) => (
        <Box key={f.label} sx={{ p: { xs: 1.5, md: 2 }, borderRadius: "18px", background: `linear-gradient(160deg, ${f.tint} 0%, ${BRAND.white} 100%)`, border: `1px solid ${T.border}`, transition: "transform .2s, box-shadow .2s", "&:hover": { transform: "translateY(-3px)", boxShadow: T.shadowHover } }}>
          <Box sx={{ fontSize: { xs: "1.5rem", md: "1.9rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink, lineHeight: 1.1 }}>{f.value}</Box>
          <Box sx={{ mt: 0.5, fontSize: "0.8rem", fontWeight: 600, color: T.muted }}>{f.label}</Box>
        </Box>
      ))}
    </Box>
  );
}

export default function WhoWeAreModern() {
  const body = { fontSize: "1.05rem", lineHeight: 1.8, color: T.body };
  return (
    <Box component="section" sx={{ ...textReset, ...KF, position: "relative", overflow: "hidden", "@media (prefers-reduced-motion: reduce)": { "& *": { animation: "none !important" } } }}>
      {/* light backdrop */}
      <Box aria-hidden sx={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(${withAlpha(BRAND.hover, 0.13)} 1px, transparent 1px)`, backgroundSize: "22px 22px", maskImage: "radial-gradient(ellipse at 30% 50%, black, transparent 75%)", pointerEvents: "none" }} />

      <Box sx={{ position: "relative", width: "100%", boxSizing: "border-box", maxWidth: T.maxWidth, mx: "auto", px: { xs: 2, md: 4 }, py: { xs: 9, md: 13 } }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "auto minmax(0, 600px)" }, gap: { xs: 7, lg: 10 }, alignItems: "center", justifyContent: "center" }}>
          <Stage />

          <Box sx={{ maxWidth: 680, justifySelf: "center" }}>
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, px: 1.5, py: 0.6, borderRadius: 999, bgcolor: withAlpha(BRAND.white, 0.8), border: `1px solid ${T.border}`, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.brandDark }}>
              <Box component="span" sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: T.brand, animation: "pulseRing 2s ease-out infinite" }} /> About Valvenok
            </Box>
            <Typography component="h2" sx={{ mt: 2.5, fontWeight: 800, fontSize: { xs: "2.4rem", md: "3.4rem" }, letterSpacing: "-0.035em", lineHeight: 1.05, color: T.ink }}>
              Who{" "}
              <Box component="span" sx={{ position: "relative", display: "inline-block" }}>
                <Box component="span" sx={gradientTextBright}>we are</Box>
                <Squiggle delay={0.4} color={AQUA.glow} />
              </Box>
            </Typography>
            <Typography sx={{ ...body, mt: 3.5 }}>
              We&apos;re{" "}
              <Box component="span" sx={{ fontWeight: 700, color: T.ink }}>
                Valvenok
              </Box>{" "}
              — and we&apos;re now also an official authorised distributor of genuine MARS industrial valves, supplying authentic products
              backed by full manufacturer documentation, certification, and technical support.
            </Typography>
            <Typography sx={{ ...body, mt: 2 }}>
              We work closely with manufacturers to deliver valves that meet demanding industry standards, with documentation and traceability
              available on request — certification varies by model.
            </Typography>

            <Facts />

            {/* Why buy: card with a slowly turning gradient border */}
            <Box sx={{ mt: 3, position: "relative", borderRadius: "22px", p: "2px", overflow: "hidden", boxShadow: `0 14px 34px ${withAlpha(BRAND.hover, 0.10)}` }}>
              <Box aria-hidden sx={{ position: "absolute", top: "50%", left: "50%", width: "160%", aspectRatio: "1", mt: "-80%", ml: "-80%", background: `conic-gradient(from 0deg, ${T.brand}, ${SKY}, ${SUN}, ${BRAND.hoverBorder}, ${T.brand})`, animation: "spin 9s linear infinite" }} />
              <Box sx={{ position: "relative", display: "flex", gap: 2.5, alignItems: "flex-start", p: { xs: 2.5, md: 3 }, borderRadius: "21px", background: `linear-gradient(135deg, ${BRAND.surface} 0%, ${BRAND.white} 60%, ${BRAND.surface} 100%)` }}>
                <Box sx={{ flexShrink: 0, width: 52, height: 52, borderRadius: "14px", display: "grid", placeItems: "center", color: BRAND.white, background: `linear-gradient(140deg, ${BRAND.main} 0%, ${T.brandDark} 100%)`, boxShadow: `0 10px 22px ${withAlpha(BRAND.hover, 0.3)}`, animation: "wiggle 4s ease-in-out 1s infinite" }}>
                  <HandshakeRoundedIcon />
                </Box>
                <Box>
                  <Typography component="h3" sx={{ fontWeight: 700, fontSize: "1.2rem", color: T.ink }}>
                    Why buy from us?
                  </Typography>
                  <Typography sx={{ ...body, mt: 0.75, fontSize: "0.98rem" }}>
                    Whether you need a single valve or a complete project supply, we offer competitive pricing and expert technical guidance — with
                    knowledgeable support from enquiry through to delivery.
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ mt: 3.5, display: "flex", gap: 1.5, flexWrap: "wrap" }}>
              <Box component={Link} href="/about" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, px: 2.75, py: 1.3, borderRadius: 999, background: BRAND_GRADIENT, color: BRAND.white, fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", boxShadow: `0 10px 24px ${withAlpha(BRAND.main, 0.35)}`, transition: "transform .2s", "&:hover": { transform: "translateY(-2px)", background: BRAND_GRADIENT_HOVER } }}>
                More about us <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
              </Box>
              <Box component={Link} href="/contact" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, px: 2.75, py: 1.3, borderRadius: 999, bgcolor: BRAND.white, color: T.ink, fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", border: `1px solid ${T.border}`, transition: "transform .2s", "&:hover": { transform: "translateY(-2px)" } }}>
                Request a quote
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
