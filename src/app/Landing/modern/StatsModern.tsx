'use client'

import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { T, textReset } from "./tokens";

// Same figures as the original StatsBand.
const STATS = [
  { num: "2022", unit: "", label: "Trusted since" },
  { num: "25", unit: "+", label: "Brands distributed" },
  { num: "UK", unit: "", label: "Based supplier" },
  { num: "1000", unit: "+", label: "Products in range" },
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

export default function StatsModern() {
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
      <Box
        ref={ref}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
          borderRadius: "24px",
          overflow: "hidden",
          position: "relative",
          background: `radial-gradient(600px 220px at 85% 0%, rgba(97,214,73,0.35), transparent 60%), linear-gradient(135deg, ${T.greenDeep} 0%, #1F6B1A 100%)`,
          boxShadow: "0 20px 48px rgba(18,61,23,0.25)",
        }}
      >
        {STATS.map((s, i) => (
          <Box
            key={s.label}
            sx={{
              px: { xs: 2.5, md: 4 },
              py: { xs: 3.5, md: 5 },
              textAlign: "center",
              borderLeft: { md: i === 0 ? "none" : "1px solid rgba(255,255,255,0.12)" },
              borderTop: { xs: i > 1 ? "1px solid rgba(255,255,255,0.12)" : "none", md: "none" },
              borderRight: { xs: i % 2 === 0 ? "1px solid rgba(255,255,255,0.12)" : "none", md: "none" },
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2.4rem", md: "3.2rem" },
                letterSpacing: "-0.04em",
                color: "#fff",
                lineHeight: 1,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              <CountUp value={s.num} start={inView} />
              <Box component="span" sx={{ color: T.green }}>
                {s.unit}
              </Box>
            </Typography>
            <Typography sx={{ mt: 1.25, fontSize: "0.95rem", color: "rgba(255,255,255,0.72)" }}>{s.label}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
