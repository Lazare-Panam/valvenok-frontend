"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import Reveal from "@/src/app/Common/Reveal";

function CountUp({ target }: { target: string }) {
  const numericPart = parseFloat(target.replace(/[^0-9.]/g, ""));
  const prefix = target.match(/^[^0-9]*/)?.[0] ?? "";
  const suffix = target.match(/[^0-9.]*$/)?.[0] ?? "";
  // Start at the real figure so the server-rendered HTML (what Google reads)
  // shows it; the count-up only resets to 0 once the band scrolls into view.
  const [value, setValue] = useState(numericPart);
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!ref.current || Number.isNaN(numericPart)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          setValue(0);
          const duration = 1400;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(eased * numericPart));
            if (progress < 1) requestAnimationFrame(tick);
            else setValue(numericPart);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericPart]);

  if (Number.isNaN(numericPart)) return <span ref={ref}>{target}</span>;

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

// All figures pulled from claims already published elsewhere on the site
// (the 32 brands listed on /brands, the Bicester address, and the sum of the
// minimum product counts already shown per-category in Categories.tsx).
// No dispatch, lead-time or stock promises are made here.
const STATS = [
  { num: "2022", unit: "", label: "TRUSTED SINCE" },
  { num: "32", unit: "", label: "BRANDS DISTRIBUTED" },
  { num: "UK", unit: "", label: "BASED SUPPLIER" },
  { num: "1000", unit: "+", label: "PRODUCTS IN RANGE" },
];

export default function StatsBand() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(135deg, #61D649 0%, #4a9a3a 60%, #2d5c22 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Reveal>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: { xs: 3, md: 2 },
            }}
          >
            {STATS.map((stat) => (
              <Box key={stat.label} sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontWeight: 900,
                    fontSize: { xs: "2.2rem", md: "3rem" },
                    color: "#fff",
                    lineHeight: 1,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  <CountUp target={stat.num} />
                  {stat.unit}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.85)",
                    mt: 1,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
