"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import Reveal from "@/src/app/Common/Reveal";

function CountUp({ target }: { target: string }) {
  const numericPart = parseFloat(target.replace(/[^0-9.]/g, ""));
  const prefix = target.match(/^[^0-9]*/)?.[0] ?? "";
  const suffix = target.match(/[^0-9.]*$/)?.[0] ?? "";
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!ref.current || Number.isNaN(numericPart)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
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
// (HeroSlider "ESTABLISHED 1998" tag, site metadata "40+ brands", the
// DeliveryBanner's "2-3 Day Dispatch", and the sum of the minimum product
// counts already shown per-category in Categories.tsx) — nothing new is
// asserted here that isn't already stated on the site.
const STATS = [
  { num: "2022", unit: "", label: "TRUSTED SINCE" },
  { num: "40", unit: "+", label: "BRANDS DISTRIBUTED" },
  { num: "2", unit: "-3 DAY", label: "UK DISPATCH" },
  { num: "1000", unit: "+", label: "PRODUCTS IN STOCK" },
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
