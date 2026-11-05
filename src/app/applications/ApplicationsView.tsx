"use client";

// /applications: every industry we supply, in the light style used across the
// redesign. Hero with a tile per industry, then one alternating section per
// industry (photo with key facts, what we supply, link to its own page).

import * as React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { MotionRoot, LightBackdrop, Words, Reveal, gradientText, L } from "@/src/app/Common/LightMotion";
import { wrap, Kicker, H2, Lead, pillBtn } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";
import { APPS, type App } from "./data";

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", bgcolor: L.cream, pt: { xs: 5, md: 8 }, pb: { xs: 5, md: 7 } }}>
      <LightBackdrop />
      <Box sx={{ ...wrap, position: "relative" }}>
        <Box sx={{ textAlign: "center", maxWidth: 820, mx: "auto" }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Kicker>Applications</Kicker>
          </Box>
          <Box component="h1" sx={{ m: 0, mb: 2, fontSize: { xs: "2.3rem", sm: "3rem", md: "3.9rem" }, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.04, color: T.ink }}>
            <Words text="Valves and fittings" />
            <Words text="for your industry" start={250} sx={gradientText} />
          </Box>
          <Box component="p" sx={{ m: 0, mx: "auto", maxWidth: 680, fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.7, color: T.body }}>
            Pick your industry to see what we supply for it, what to check before you order, and the guides that help. Every product links to its full range.
          </Box>
        </Box>

        <Box sx={{ mt: { xs: 4, md: 6 }, display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)", lg: "repeat(9, 1fr)" }, gap: { xs: 1, md: 1.25 } }}>
          {APPS.map((a, i) => (
            <Box
              key={a.slug}
              component="a"
              href={`#${a.slug}`}
              sx={{
                display: "flex",
                flexDirection: { xs: "row", lg: "column" },
                alignItems: "center",
                gap: { xs: 1.25, lg: 1 },
                p: { xs: 1.25, lg: 1.75 },
                textAlign: { lg: "center" },
                borderRadius: "18px",
                bgcolor: "rgba(255,255,255,0.9)",
                border: `1px solid ${T.border}`,
                textDecoration: "none",
                animation: `wordIn .6s cubic-bezier(.2,.8,.2,1) ${300 + i * 50}ms both`,
                transition: "all .2s",
                "&:hover": { borderColor: "#BFE5B3", transform: "translateY(-3px)", boxShadow: T.shadowHover },
                "&:hover .ic": { bgcolor: T.green, color: T.greenDeep },
              }}
            >
              <Box className="ic" sx={{ flexShrink: 0, width: 44, height: 44, borderRadius: "14px", bgcolor: a.tint, color: T.greenDark, display: "grid", placeItems: "center", transition: "all .2s", "& svg": { fontSize: 23 } }}>
                <a.Icon />
              </Box>
              <Box sx={{ fontSize: { xs: "0.82rem", lg: "0.8rem" }, fontWeight: 700, color: T.ink, lineHeight: 1.25 }}>{a.name}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function Section({ a, flip }: { a: App; flip: boolean }) {
  return (
    <Box component="section" id={a.slug} aria-labelledby={`h-${a.slug}`} sx={{ scrollMarginTop: 140 }}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "1fr 1fr" }, gap: { xs: 3, md: 6 }, alignItems: "center" }}>
        <Box sx={{ order: { md: flip ? 2 : 1 } }}>
        <Reveal from={flip ? "right" : "left"}>
          <Box sx={{ position: "relative", borderRadius: "26px", overflow: "hidden", aspectRatio: "4 / 3", bgcolor: a.tint, boxShadow: T.shadow }}>
            <Box component="img" src={a.image} alt={a.imageAlt} loading="lazy" sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <Box sx={{ position: "absolute", left: 14, right: 14, bottom: 14, display: "flex", flexWrap: "wrap", gap: 0.75 }}>
              {a.facts.map((f) => (
                <Box key={f.label} sx={{ px: 1.5, py: 0.75, borderRadius: "12px", bgcolor: "rgba(255,255,255,0.94)", boxShadow: "0 4px 14px rgba(0,0,0,0.12)" }}>
                  <Box sx={{ fontSize: "0.92rem", fontWeight: 800, color: T.ink, lineHeight: 1.1 }}>{f.value}</Box>
                  <Box sx={{ fontSize: "0.7rem", color: T.body }}>{f.label}</Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Reveal>
        </Box>
        <Box sx={{ order: { md: flip ? 1 : 2 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
            <Box sx={{ width: 48, height: 48, borderRadius: "14px", bgcolor: a.tint, color: T.greenDark, display: "grid", placeItems: "center", "& svg": { fontSize: 26 } }}>
              <a.Icon />
            </Box>
            <Box component="h2" id={`h-${a.slug}`} sx={{ m: 0, fontSize: { xs: "1.5rem", md: "1.9rem" }, fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.15, color: T.ink }}>
              {a.name}
            </Box>
          </Box>
          <Box component="p" sx={{ m: 0, mb: 2.5, fontSize: "1rem", lineHeight: 1.7, color: T.body }}>{a.intro}</Box>
          <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.greenDark, mb: 1 }}>What we supply</Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 3 }}>
            {a.products.map((p) => (
              <Box key={p.href} component={Link} href={p.href} sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, px: 1.5, py: 0.7, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}`, color: T.ink, fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", transition: "all .15s", "&:hover": { borderColor: T.greenDark, color: T.greenDark, bgcolor: T.greenSoft } }}>
                {p.name}
              </Box>
            ))}
          </Box>
          <Box component={Link} href={`/applications/${a.slug}`} sx={pillBtn(true)}>
            Explore {a.name.toLowerCase()} <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Cta() {
  return (
    <Box component="section" aria-labelledby="h2-cta" sx={{ pb: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ p: { xs: 3.5, md: 6 }, borderRadius: "28px", background: `linear-gradient(120deg, ${L.mint} 0%, #EAF4FF 55%, #FFF7DD 100%)`, border: `1px solid ${T.border}`, display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { md: "center" }, justifyContent: "space-between", gap: 3 }}>
          <Box>
            <H2 id="h2-cta">Industry not listed?</H2>
            <Lead>Send us the media, pressure, temperature and connections and we’ll match the valve or fitting, whatever the industry.</Lead>
          </Box>
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", flexShrink: 0 }}>
            <Box component={Link} href="/contact" sx={pillBtn(true)}>
              Get a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box component={Link} href="/contact" sx={pillBtn(false)}>
              Talk to our team
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function ApplicationsView() {
  return (
    <MotionRoot sx={{ ...textReset, bgcolor: "#fff" }}>
      <Hero />
      <Box sx={{ ...wrap, py: { xs: 7, md: 10 }, display: "grid", gap: { xs: 8, md: 11 } }}>
        {APPS.map((a, i) => (
          <Section key={a.slug} a={a} flip={i % 2 === 1} />
        ))}
      </Box>
      <Cta />
    </MotionRoot>
  );
}
