"use client";

// /applications/[slug]: one industry. Photo hero with key facts, the products
// we supply for it (each links to its range), what to check, guides, other
// industries and a quote box.

import * as React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { MotionRoot, Words, Reveal, gradientText, L } from "@/src/app/Common/LightMotion";
import { wrap, Kicker, H2, Lead, pillBtn } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";
import { APPS, appBySlug } from "../data";

export default function AppView({ slug }: { slug: string }) {
  const a = appBySlug(slug)!;
  const words = a.name.split(" ");
  const last = words.pop()!;
  const others = APPS.filter((x) => x.slug !== a.slug);
  return (
    <MotionRoot sx={{ ...textReset, bgcolor: "#fff" }}>
      {/* Hero: photo with a soft wash, title over it */}
      <Box component="section" sx={{ position: "relative", overflow: "hidden", minHeight: { xs: 420, md: 480 }, display: "flex", alignItems: "flex-end" }}>
        <Box component="img" src={a.image} alt={a.imageAlt} sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <Box aria-hidden sx={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(251,253,248,0.97) 0%, rgba(251,253,248,0.9) 42%, rgba(251,253,248,0.25) 75%, rgba(251,253,248,0) 100%)", display: { xs: "none", md: "block" } }} />
        <Box aria-hidden sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(251,253,248,0.35) 0%, rgba(251,253,248,0.96) 62%)", display: { xs: "block", md: "none" } }} />
        <Box sx={{ ...wrap, position: "relative", width: "100%", boxSizing: "border-box", py: { xs: 5, md: 8 } }}>
          <Box sx={{ maxWidth: 600 }}>
            <Kicker>
              <Box component={Link} href="/applications" sx={{ color: "inherit", textDecoration: "none", textTransform: "uppercase !important", "&:hover": { textDecoration: "underline" } }}>Applications</Box>
            </Kicker>
            <Box component="h1" sx={{ m: 0, mb: 2, fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem" }, fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.05, color: T.ink }}>
              <Words text={words.join(" ")} />
              <Words text={last} start={200} sx={gradientText} />
            </Box>
            <Box component="p" sx={{ m: 0, fontSize: { xs: "1rem", md: "1.08rem" }, lineHeight: 1.7, color: T.body }}>{a.intro}</Box>
            <Box sx={{ mt: 3, display: "flex", flexWrap: "wrap", gap: 1 }}>
              {a.facts.map((f) => (
                <Box key={f.label} sx={{ px: 1.75, py: 1, borderRadius: "14px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
                  <Box sx={{ fontSize: "1.05rem", fontWeight: 800, color: T.ink, lineHeight: 1.1 }}>{f.value}</Box>
                  <Box sx={{ fontSize: "0.74rem", color: T.body }}>{f.label}</Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Products */}
      <Box component="section" aria-labelledby="h2-products" sx={{ py: { xs: 7, md: 10 } }}>
        <Box sx={wrap}>
          <Box sx={{ mb: 4 }}>
            <Kicker>What we supply</Kicker>
            <H2 id="h2-products">Products for {a.name.toLowerCase()}</H2>
            <Lead>Each one opens its full range, with sizes, models and a quote.</Lead>
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(3, 1fr)" }, gap: 2 }}>
            {a.products.map((p, i) => (
              <Reveal key={p.href} delay={(i % 3) * 70}>
                <Box
                  component={Link}
                  href={p.href}
                  sx={{
                    height: "100%",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    p: 2.5,
                    borderRadius: "20px",
                    bgcolor: "#fff",
                    border: `1px solid ${T.border}`,
                    textDecoration: "none",
                    transition: "all .2s",
                    "&:hover": { borderColor: "#BFE5B3", transform: "translateY(-3px)", boxShadow: T.shadowHover },
                    "&:hover .go": { bgcolor: T.green, color: T.greenDeep, borderColor: T.green },
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 1.5 }}>
                    <Box sx={{ fontSize: "1.05rem", fontWeight: 800, color: T.ink, letterSpacing: "-0.01em" }}>{p.name}</Box>
                    <Box className="go" sx={{ flexShrink: 0, width: 32, height: 32, borderRadius: "50%", border: `1px solid ${T.border}`, display: "grid", placeItems: "center", color: T.ink, transition: "all .2s" }}>
                      <ArrowForwardRoundedIcon sx={{ fontSize: 17 }} />
                    </Box>
                  </Box>
                  <Box sx={{ mt: 0.75, fontSize: "0.9rem", lineHeight: 1.55, color: T.body }}>{p.why}</Box>
                </Box>
              </Reveal>
            ))}
          </Box>
        </Box>
      </Box>

      {/* What to check + guides */}
      <Box component="section" aria-labelledby="h2-checks" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface }}>
        <Box sx={{ ...wrap, display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "1.4fr 0.6fr" }, gap: { xs: 4, md: 5 }, alignItems: "start" }}>
          <Box>
            <Kicker>Before you order</Kicker>
            <H2 id="h2-checks">What to check</H2>
            <Box component="ul" sx={{ m: 0, mt: 3, p: 0, listStyle: "none", display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 1.5 }}>
              {a.checks.map((c) => (
                <Box component="li" key={c.title} sx={{ display: "flex", gap: 1.5, p: 2.25, borderRadius: "18px", bgcolor: "#fff", border: `1px solid ${T.border}` }}>
                  <CheckCircleRoundedIcon sx={{ flexShrink: 0, color: T.green, fontSize: 24, mt: 0.1 }} />
                  <Box>
                    <Box component="h3" sx={{ m: 0, mb: 0.5, fontSize: "1rem", fontWeight: 800, color: T.ink }}>{c.title}</Box>
                    <Box component="p" sx={{ m: 0, fontSize: "0.92rem", lineHeight: 1.6, color: T.body }}>{c.text}</Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          {a.guides && (
            <Box sx={{ p: 3, borderRadius: "22px", bgcolor: "#fff", border: `1px solid ${T.border}`, mt: { md: 9 } }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.greenDark }}>
                <MenuBookOutlinedIcon sx={{ fontSize: 18 }} /> Read next
              </Box>
              <Box sx={{ display: "grid", gap: 1 }}>
                {a.guides.map((g) => (
                  <Box key={g.href} component={Link} href={g.href} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1, p: 1.5, borderRadius: "14px", bgcolor: T.surface, color: T.ink, fontSize: "0.92rem", fontWeight: 700, textDecoration: "none", "&:hover": { bgcolor: T.greenSoft, color: T.greenDark } }}>
                    {g.label} <ArrowForwardRoundedIcon sx={{ fontSize: 17, flexShrink: 0 }} />
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Box>

      {/* Other industries */}
      <Box component="section" aria-labelledby="h2-more" sx={{ py: { xs: 7, md: 10 } }}>
        <Box sx={wrap}>
          <Box sx={{ mb: 3 }}>
            <Kicker>More applications</Kicker>
            <H2 id="h2-more">Other industries we supply</H2>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {others.map((o) => (
              <Box key={o.slug} component={Link} href={`/applications/${o.slug}`} sx={{ display: "inline-flex", alignItems: "center", gap: 1, pl: 0.75, pr: 1.75, py: 0.75, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}`, textDecoration: "none", color: T.ink, fontSize: "0.9rem", fontWeight: 700, transition: "all .15s", "&:hover": { borderColor: T.greenDark, color: T.greenDark } }}>
                <Box sx={{ width: 32, height: 32, borderRadius: "50%", bgcolor: o.tint, color: T.greenDark, display: "grid", placeItems: "center", "& svg": { fontSize: 18 } }}>
                  <o.Icon />
                </Box>
                {o.name}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* CTA */}
      <Box component="section" aria-labelledby="h2-cta" sx={{ pb: { xs: 7, md: 10 } }}>
        <Box sx={wrap}>
          <Box sx={{ p: { xs: 3.5, md: 6 }, borderRadius: "28px", background: `linear-gradient(120deg, ${L.mint} 0%, #EAF4FF 55%, #FFF7DD 100%)`, border: `1px solid ${T.border}`, display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { md: "center" }, justifyContent: "space-between", gap: 3 }}>
            <Box>
              <H2 id="h2-cta">Need help specifying?</H2>
              <Lead>Send us the media, pressure, temperature, connections and approvals, and we’ll match the parts and quote them.</Lead>
            </Box>
            <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", flexShrink: 0 }}>
              <Box component={Link} href="/contact" sx={pillBtn(true)}>
                Get a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
              </Box>
              <Box component={Link} href="/applications" sx={pillBtn(false)}>
                All applications
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </MotionRoot>
  );
}
