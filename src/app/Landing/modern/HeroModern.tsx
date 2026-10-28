'use client'

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Box, IconButton, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { T, textReset } from "./tokens";
import PillButton from "./Buttons";

// Slide copy is unchanged from the original HeroSlider. Images swapped for
// high-resolution originals (served resized by next/image).
const SLIDES = [
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
          minHeight: { xs: 580, md: 640 },
          display: "flex",
          alignItems: "center",
          bgcolor: T.greenDeep,
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
              xs: "linear-gradient(180deg, rgba(10,32,14,0.55) 0%, rgba(10,32,14,0.9) 70%)",
              md: "linear-gradient(90deg, rgba(10,32,14,0.94) 0%, rgba(10,32,14,0.82) 40%, rgba(10,32,14,0.25) 72%, rgba(10,32,14,0.05) 100%)",
            },
          }}
        />

        <Box sx={{ position: "relative", width: "100%", maxWidth: T.maxWidth, mx: "auto", px: { xs: 2.5, md: 4 }, py: { xs: 7, md: 10 } }}>
          <Box key={slide.id} sx={{ maxWidth: 660, animation: `${rise} .7s ease both` }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.5,
                py: 0.6,
                borderRadius: 999,
                bgcolor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(6px)",
                color: "#D8F5CF",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
              }}
            >
              <Box component="span" sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: T.green }} />
              {slide.upperTag}
            </Box>

            <Typography
              component="h2"
              sx={{
                mt: 2.5,
                fontWeight: 700,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                fontSize: { xs: "2.4rem", sm: "3.1rem", md: "3.75rem" },
                color: "#fff",
              }}
            >
              {slide.title}{" "}
              <Box component="span" sx={{ color: T.green, display: "block" }}>
                {slide.accent}
              </Box>
            </Typography>

            <Typography sx={{ mt: 2.5, fontSize: { xs: "1.02rem", md: "1.12rem" }, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", maxWidth: 560 }}>
              {slide.description}
            </Typography>

            <Box sx={{ mt: 4 }}>
              <PillButton href={slide.href}>{slide.btnText}</PillButton>
            </Box>
          </Box>
        </Box>

        {/* Controls */}
        <Box
          sx={{
            position: "absolute",
            right: { xs: 16, md: 32 },
            bottom: { xs: 40, md: 72 },
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
                  bgcolor: "rgba(255,255,255,0.35)",
                  transition: "width .3s ease",
                }}
              >
                {i === index && (
                  <Box
                    key={index}
                    sx={{
                      position: "absolute",
                      inset: 0,
                      bgcolor: T.green,
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
                width: 44,
                height: 44,
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.35)",
                bgcolor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(6px)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.18)" },
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
