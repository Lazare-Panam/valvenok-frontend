'use client'

import Link from "next/link";
import { Box, Typography } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { CARD, CARD_HOVER, T, textReset } from "./homeTokens";
import SectionHeader from "./HomeSectionHeader";
import PillButton from "./HomeButtons";
import { swipeRow } from "./swipeRow";
import { BRAND } from "@/src/theme/brand";

// The original FeaturedStrip brands, plus our Hiflux and Kosa Plus sister sites.
const BRANDS = [
  {
    name: "Panam",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/panam-logo.png",
    desc: "Instrumentation valves and fittings for global process industries.",
    href: "https://www.panamvalve.com/",
    external: true,
    accent: BRAND.main,
  },
  {
    name: "Susin I-Tork",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
    desc: "Pneumatic, electric, hydraulic and mechanical actuators, and limit switch boxes.",
    href: "/brands/susin",
    external: false,
    accent: BRAND.deep,
  },
  {
    name: "Value Valves",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/logo.svg",
    desc: "Butterfly valves and flow control solutions for industrial piping systems.",
    href: "/valves/industrial-valves/butterfly-valves/centric-butterfly-valve/products",
    external: false,
    accent: BRAND.hover,
  },
  {
    name: "Mars Valves",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/mars.png",
    desc: "Industrial valve solutions for a wide range of flow control applications.",
    href: "https://www.marsvalvenok.com/",
    external: true,
    accent: BRAND.deep,
  },
  {
    name: "Hiflux",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/hiflux-logo.png",
    desc: "High pressure valves, cone and thread fittings, tubing and tooling.",
    href: "https://www.hiflux.uk.com/",
    external: true,
    accent: BRAND.main,
  },
  {
    name: "Kosa Plus",
    // The logo file has wide margins, so it is shown larger to match the others.
    logo: "https://pblol2.blob.core.windows.net/kosaplus/logo/kosaplus-official-logo.svg",
    desc: "Pneumatic and electric valve actuators and position indicators.",
    href: "https://www.kosaplus.co.uk/",
    external: true,
    accent: BRAND.hover,
  },
];

export default function FeaturedBrands() {
  return (
    <Box component="section" sx={{ ...textReset, bgcolor: "transparent" }}>
      <Box sx={{ maxWidth: T.maxWidth, mx: "auto", px: { xs: 2, md: 4 }, py: { xs: 8, md: 11 } }}>
        <SectionHeader
          eyebrow="Featured Brands"
          title="Best Sellers"
          subtitle="UK-based supplier — lead times confirmed on every quotation"
          action={
            <PillButton href="/brands" variant="secondary">
              View All Brands
            </PillButton>
          }
        />
        <Box sx={swipeRow({ sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(6, 1fr)" })}>
          {BRANDS.map((b) => (
            <Box
              key={b.name}
              component={Link}
              href={b.href}
              {...(b.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              sx={{
                display: "flex",
                flexDirection: "column",
                ...CARD,
                "&:hover": CARD_HOVER,
                "&:hover .brand-logo": { scale: "1.06" },
                "&:hover .brand-cta": { bgcolor: T.ink, color: BRAND.white, borderColor: T.ink },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: 170,
                  display: "grid",
                  placeItems: "center",
                  background: `radial-gradient(260px 160px at 50% 60%, ${BRAND.white} 0%, ${T.surface} 100%)`,
                  borderBottom: `1px solid ${T.border}`,

                }}
              >
                <Box
                  className="brand-logo"
                  component="img"
                  src={b.logo}
                  alt={`${b.name} logo`}
                  loading="lazy"
                  sx={{
                    maxHeight: 92,
                    maxWidth: "62%",
                    objectFit: "contain",
                    mixBlendMode: "multiply",
                    transition: "transform .4s ease",
                    ...("logoScale" in b && { transform: `scale(${b.logoScale})` }),
                  }}
                />
              </Box>
              <Box sx={{ p: 3, display: "flex", flexDirection: "column", flex: 1 }}>
                <Typography component="h3" sx={{ fontWeight: 700, fontSize: "1.3rem", color: T.ink, letterSpacing: "-0.01em" }}>
                  {b.name}
                </Typography>
                <Typography sx={{ mt: 1, flex: 1, fontSize: "0.98rem", lineHeight: 1.6, color: T.body }}>{b.desc}</Typography>
                <Box
                  className="brand-cta"
                  sx={{
                    mt: 3,
                    alignSelf: "flex-start",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.75,
                    px: 2,
                    py: 1,
                    borderRadius: 999,
                    border: `1px solid ${T.border}`,
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    color: T.ink,
                    transition: "all .2s",
                  }}
                >
                  View range
                  <ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
