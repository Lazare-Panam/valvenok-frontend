'use client'

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Box, IconButton, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { T, textReset } from "./homeTokens";
import PillButton from "./HomeButtons";
import { ACCENT, BRAND, withAlpha } from "@/src/theme/brand";

// Slide copy is unchanged from the original HeroSlider. Images swapped for
// high-resolution originals (served resized by next/image).
const SLIDES = [
  {
    // Valvenok positioning statement (website version, 4 Nov 2026)
    id: 1,
    duration: 5000,
    image: "https://pblol2.blob.core.windows.net/valvenok-images/banner-images/process-pipework-valves.jpg",
    position: "70% 50%",
    upperTag: "ONE APPROVED SUPPLIER",
    title: "One UK supplier,",
    accent: "27 manufacturers",
    description:
      "Valves, actuators and instrumentation through one JOSCAR-registered account, with EN 10204 3.1/3.2 certificates and lead times confirmed on every quote.",
    href: "/brands",
    btnText: "See our brands",
    alt: "Stainless steel process pipework with valves and actuators",
  },
  {
    id: 2,
    duration: 5000,
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/banner-images/sergei-wing-fFRtvdWqyLk-unsplash.jpg",
    position: "60% 50%",
    upperTag: "UK DISTRIBUTOR",
    title: "UK Valve & Actuator Distributor —",
    accent: "JOSCAR Registered",
    description:
      "High-performance Hydraulic and Pneumatic solutions. We leverage a Global Network to source and supply specialist instrumentation components for your specific requirements.",
    href: "/actuators",
    btnText: "View Actuators",
    alt: "Industrial process valves and actuators",
  },
  {
    id: 3,
    duration: 5000,
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/banner-images/ant-rozetsky-SLIFI67jv5k-unsplash.jpg",
    position: "70% 50%",
    upperTag: "PROCESS SOLUTIONS",
    title: "Process Valves",
    accent: "Precision Under Pressure",
    description:
      "Comprehensive process valve solutions for industrial applications. Designed for reliable flow control, isolation, and regulation across demanding manufacturing, chemical, energy, and processing environments.",
    href: "/valves",
    btnText: "View Process Valves",
    alt: "Industrial process valve installation",
  },
];

const fill = keyframes`from { transform: scaleX(0); } to { transform: scaleX(1); }`;
const rise = keyframes`from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; }`;

export default function HeroModern() {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    const t = setTimeout(next, slide.duration);
    return () => clearTimeout(t);
  }, [index, next, slide.duration]);

  return (
    <Box component="section" sx={{ ...textReset, px: { xs: 1.5, md: 3 }, pt: { xs: 1.5, md: 3 } }}>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: { xs: "20px", md: "28px" },
          minHeight: { xs: 560, md: 640 },
          display: "flex",
          alignItems: "center",
          bgcolor: T.brandDeep,
        }}
      >
        {/* All slide images stay mounted and cross-fade, so changes are instant */}
        {SLIDES.map((s, i) => (
          <Box
            key={s.id}
            aria-hidden={i !== index}
            sx={{
              position: "absolute",
              inset: 0,
              opacity: i === index ? 1 : 0,
              transform: i === index ? "scale(1)" : "scale(1.04)",
              transition: "opacity 0.8s ease, transform 5s ease-out",
            }}
          >
            <Image
              src={s.image}
              alt={s.alt}
              fill
              priority={i === 0}
              // Only the first slide is the LCP image; the others load lazily (they sit in the
              // viewport at opacity 0, so they still arrive before their turn in the slider)
              loading={i === 0 ? undefined : "lazy"}
              sizes="100vw"
              quality={80}
              style={{ objectFit: "cover", objectPosition: s.position }}
            />
          </Box>
        ))}

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: {
              xs: `linear-gradient(180deg, ${withAlpha(BRAND.ink, 0.55)} 0%, ${withAlpha(BRAND.ink, 0.9)} 70%)`,
              // Dark behind the text, fading out by the middle so the photo keeps its own colours
              md: `linear-gradient(90deg, ${withAlpha(BRAND.ink, 0.9)} 0%, ${withAlpha(BRAND.ink, 0.7)} 35%, ${withAlpha(BRAND.ink, 0.15)} 60%, transparent 75%)`,
            },
          }}
        />

        <Box sx={{ position: "relative", width: "100%", maxWidth: T.maxWidth, mx: "auto", px: { xs: 2.5, md: 4 }, py: { xs: 9, md: 10 } }}>
          <Box key={slide.id} sx={{ maxWidth: 660, animation: `${rise} .7s ease both` }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.5,
                py: 0.6,
                borderRadius: 999,
                bgcolor: withAlpha(BRAND.white, 0.1),
                border: `1px solid ${withAlpha(BRAND.white, 0.2)}`,
                backdropFilter: "blur(6px)",
                color: BRAND.tintStrong,
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
              }}
            >
              <Box component="span" sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: ACCENT.blob2 }} />
              {slide.upperTag}
            </Box>

            <Typography
              component="h2"
              sx={{
                mt: 2.5,
                fontWeight: 700,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                fontSize: { xs: "2.1rem", sm: "3.1rem", md: "3.75rem" },
                color: BRAND.white,
              }}
            >
              {slide.title}{" "}
              <Box component="span" sx={{ display: "block" }}>
                {/* Shimmering bright-aqua gradient: the light aquas read best on the dark photo */}
                <Box component="span" key={slide.accent}>
                  <Box
                    component="span"
                    sx={{
                      background: `linear-gradient(90deg, ${ACCENT.blob2}, ${BRAND.white}, ${ACCENT.soft}, ${ACCENT.blob2})`,
                      backgroundSize: "200% auto",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      animation: "heroShine 4s linear infinite",
                      "@keyframes heroShine": { "0%": { backgroundPosition: "0% 50%" }, "100%": { backgroundPosition: "200% 50%" } },
                      "@media (prefers-reduced-motion: reduce)": { animation: "none" },
                    }}
                  >
                    {slide.accent}
                  </Box>
                </Box>
              </Box>
            </Typography>

            <Typography sx={{ mt: 2.5, fontSize: { xs: "0.98rem", md: "1.12rem" }, lineHeight: 1.7, color: withAlpha(BRAND.white, 0.8), maxWidth: 560 }}>
              {slide.description}
            </Typography>

            <Box sx={{ mt: 4 }}>
              <PillButton href={slide.href} variant="glow">{slide.btnText}</PillButton>
            </Box>
          </Box>
        </Box>

        {/* Controls */}
        <Box
          sx={{
            position: "absolute",
            right: { xs: 16, md: 32 },
            // On phones the controls sit in the top-right corner so they never
            // overlap the slide's button.
            top: { xs: 18, md: "auto" },
            bottom: { xs: "auto", md: 72 },
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Box sx={{ display: "flex", gap: 0.75, mr: 1 }}>
            {SLIDES.map((s, i) => (
              <Box
                key={s.id}
                component="button"
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setIndex(i)}
                sx={{
                  position: "relative",
                  width: i === index ? 40 : 10,
                  height: 10,
                  p: 0,
                  border: 0,
                  borderRadius: 999,
                  overflow: "hidden",
                  cursor: "pointer",
                  bgcolor: withAlpha(BRAND.white, 0.35),
                  transition: "width .3s ease",
                }}
              >
                {i === index && (
                  <Box
                    key={index}
                    sx={{
                      position: "absolute",
                      inset: 0,
                      bgcolor: ACCENT.blob2,
                      transformOrigin: "left",
                      animation: `${fill} ${s.duration}ms linear both`,
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
          {[
            { label: "Previous slide", onClick: prev, icon: <ChevronLeftRoundedIcon /> },
            { label: "Next slide", onClick: next, icon: <ChevronRightRoundedIcon /> },
          ].map((b) => (
            <IconButton
              key={b.label}
              aria-label={b.label}
              onClick={b.onClick}
              sx={{
                width: { xs: 36, md: 44 },
                height: { xs: 36, md: 44 },
                color: BRAND.white,
                border: `1px solid ${withAlpha(BRAND.white, 0.35)}`,
                bgcolor: withAlpha(BRAND.white, 0.08),
                backdropFilter: "blur(6px)",
                "&:hover": { bgcolor: withAlpha(BRAND.white, 0.18) },
              }}
            >
              {b.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
