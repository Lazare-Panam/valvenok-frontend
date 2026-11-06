'use client'

import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { T, textReset } from "./tokens";

// Same figures as the original StatsBand.
const STATS = [
  { num: "2022", unit: "", label: "Trusted since" },
  { num: "27", unit: "", label: "Brands distributed" },
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
          gap: 2,
          position: "relative",
          "@keyframes shine": { "0%": { backgroundPosition: "0% 50%" }, "100%": { backgroundPosition: "200% 50%" } },
        }}
      >
        {STATS.map((s, i) => (
          <Box
            key={s.label}
            sx={{
              px: { xs: 2.5, md: 4 },
              py: { xs: 3.5, md: 5 },
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              borderRadius: "22px",
              bgcolor: ["#EAF8E4", "#E6F4FD", "#FFF6DA", "#F1ECFB"][i % 4],
              border: `1px solid ${T.border}`,
              boxShadow: T.shadow,
              transition: "transform .25s, box-shadow .25s",
              "&:hover": { transform: "translateY(-6px)", boxShadow: T.shadowHover },
              "&::before": { content: '""', position: "absolute", left: 0, right: 0, top: 0, height: 4, background: `linear-gradient(90deg, ${T.green}, #8FD9F0, #FFD978, ${T.green})`, backgroundSize: "200% auto", animation: "shine 3s linear infinite" },
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2.4rem", md: "3.2rem" },
                letterSpacing: "-0.04em",
                color: T.greenDark,
                lineHeight: 1,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              <CountUp value={s.num} start={inView} />
              <Box component="span" sx={{ color: T.green }}>
                {s.unit}
              </Box>
            </Typography>
            <Typography sx={{ mt: 1.25, fontSize: "0.95rem", color: T.body }}>{s.label}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
