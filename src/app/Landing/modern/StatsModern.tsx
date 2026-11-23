'use client'

import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import { CARD, CARD_HOVER, T, textReset } from "./homeTokens";
import { ACCENT, BRAND, BRAND_GRADIENT, LOGO, LOGO_GRADIENT_LIGHT, accentGradient, withAlpha } from "@/src/theme/brand";
import { useDarkZone } from "./PastelZone";

// Same figures as the original StatsBand.
const STATS = [
  { num: "2022", unit: "", label: "Trusted since", Icon: EventAvailableOutlinedIcon },
  { num: "27", unit: "", label: "Brands distributed", Icon: WorkspacesOutlinedIcon },
  { num: "UK", unit: "", label: "Based supplier", Icon: PlaceOutlinedIcon },
  { num: "1000", unit: "+", label: "Products in range", Icon: Inventory2OutlinedIcon },
];

// Counts numeric stats up the first time the band scrolls into view. The
// final value is rendered initially so the server HTML (and crawlers) see the
// real figure; years count up from a few decades back rather than from zero.
// Non-numeric values ("UK") are shown as-is.
function CountUp({ value, start }: { value: string; start: boolean }) {
  const target = Number(value);
  const isNumber = !Number.isNaN(target);
  const [shown, setShown] = useState<number | string>(value);

  useEffect(() => {
    if (!isNumber || !start) return;
    const duration = 1600;
    const isYear = value.length === 4 && target > 1900 && target < 2100;
    const from = isYear ? target - 30 : 0;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setShown(Math.round(from + (target - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, isNumber, target, value]);

  return <>{shown}</>;
}

// On a dark band (23 Nov 2026): one slim frosted-glass strip instead of four white cards,
// so the band stays short. White numbers, thin dividers between the stats.
function StatsStrip({ inView, refEl }: { inView: boolean; refEl: React.RefObject<HTMLDivElement | null> }) {
  return (
    <Box
      ref={refEl}
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
        borderRadius: "20px",
        border: `1px solid ${withAlpha(BRAND.white, 0.16)}`,
        background: withAlpha(BRAND.white, 0.06),
        backdropFilter: "blur(6px)",
        overflow: "hidden",
      }}
    >
      {STATS.map((s, i) => (
        <Box
          key={s.label}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            px: { xs: 2.5, md: 3.5 },
            py: { xs: 2.5, md: 3 },
            // dividers: between all four on desktop, between columns and rows on phones
            borderLeft: { xs: i % 2 ? `1px solid ${withAlpha(BRAND.white, 0.14)}` : "none", md: i ? `1px solid ${withAlpha(BRAND.white, 0.14)}` : "none" },
            borderTop: { xs: i > 1 ? `1px solid ${withAlpha(BRAND.white, 0.14)}` : "none", md: "none" },
          }}
        >
          <Box sx={{ flexShrink: 0, width: 44, height: 44, borderRadius: "14px", display: "grid", placeItems: "center", background: LOGO_GRADIENT_LIGHT, color: LOGO.bottom }}>
            <s.Icon sx={{ fontSize: 22 }} />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: { xs: "1.9rem", md: "2.3rem" }, letterSpacing: "-0.04em", lineHeight: 1, fontVariantNumeric: "tabular-nums", color: BRAND.white }}>
              <CountUp value={s.num} start={inView} />
              {s.unit}
            </Typography>
            <Typography sx={{ mt: 0.5, fontSize: "0.9rem", fontWeight: 500, color: withAlpha(BRAND.white, 0.72) }}>{s.label}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default function StatsModern() {
  const dark = useDarkZone();
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Box component="section" sx={{ ...textReset, width: "100%", boxSizing: "border-box", maxWidth: T.maxWidth, mx: "auto", px: { xs: 2, md: 4 }, pb: { xs: 8, md: 11 } }}>
      {dark ? <StatsStrip inView={inView} refEl={ref} /> : (
      <Box
        ref={ref}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
          gap: 2,
          position: "relative",
        }}
      >
        {STATS.map((s) => (
          <Box
            key={s.label}
            sx={{
              // Redesigned 23 Nov 2026: icon chip, logo-gradient number, corner rings
              px: { xs: 2.5, md: 3.5 },
              py: { xs: 3, md: 3.75 },
              textAlign: "left",
              position: "relative",
              ...CARD,
              "& > *": { position: "relative", zIndex: 1 },
              "&::after": {
                content: '""',
                position: "absolute",
                right: -90,
                bottom: -90,
                width: 220,
                height: 220,
                borderRadius: "50%",
                zIndex: 0,
                pointerEvents: "none",
                background: `repeating-radial-gradient(circle, transparent 0 20px, ${withAlpha(LOGO.top, 0.3)} 20px 21.5px, transparent 21.5px 32px)`,
                maskImage: "radial-gradient(circle, black 25%, transparent 70%)",
                WebkitMaskImage: "radial-gradient(circle, black 25%, transparent 70%)",
                transition: "transform .5s ease",
              },
              "&:hover": CARD_HOVER,
              "&:hover::after": { transform: "scale(1.12)" },
            }}
          >
            <Box sx={{ width: 44, height: 44, borderRadius: "14px", display: "grid", placeItems: "center", background: BRAND_GRADIENT, color: BRAND.white, boxShadow: `0 8px 18px -8px ${withAlpha(LOGO.bottom, 0.6)}` }}>
              <s.Icon sx={{ fontSize: 22 }} />
            </Box>
            <Typography
              sx={{
                mt: 2.25,
                fontWeight: 700,
                fontSize: { xs: "2.4rem", md: "3rem" },
                letterSpacing: "-0.04em",
                lineHeight: 1,
                fontVariantNumeric: "tabular-nums",
                // number in the logo gradient
                background: accentGradient(ACCENT),
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                display: "inline-block",
              }}
            >
              <CountUp value={s.num} start={inView} />
              {s.unit}
            </Typography>
            <Typography sx={{ mt: 1, fontSize: "0.95rem", fontWeight: 500, color: T.body }}>{s.label}</Typography>
          </Box>
        ))}
      </Box>
      )}
    </Box>
  );
}
