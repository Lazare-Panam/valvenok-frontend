'use client'

import Link from "next/link";
import { Box, Typography } from "@mui/material";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { T, WARM_HOVER, textReset } from "./homeTokens";
import { BRAND, LOGO, LOGO_GRADIENT_LIGHT, withAlpha } from "@/src/theme/brand";

// Same list as the original CertificationsStrip.
const STANDARDS = [
  "ISO 9001 Quality Management",
  "PED 2014/68/EU Pressure Equipment",
  "ATEX Directive Compliance",
  "BS EN 12266 Valve Testing",
  "NACE MR0175 / ISO 15156",
  "Material Certs to EN 10204 3.1 / 3.2",
  "Hydrogen Service (H₂-ready) Components",
  "JOSCAR Registered Supplier",
  "BVAA Member",
];
const LINKS: Record<string, string> = { "JOSCAR Registered Supplier": "/joscar-registered", "BVAA Member": "/bvaa-member" };

export default function CertificationsModern() {
  return (
    <Box component="section" sx={{ ...textReset, width: "100%", boxSizing: "border-box", maxWidth: T.maxWidth, mx: "auto", px: { xs: 2, md: 4 }, pt: { xs: 5, md: 6 } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "340px 1fr" },
          borderRadius: "24px",
          overflow: "hidden",
          border: `1px solid ${T.border}`,
          bgcolor: BRAND.white,
        }}
      >
        {/* Title panel */}
        <Box
          sx={{
            position: "relative",
            p: { xs: 3.5, md: 4.5 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 3,
            color: T.ink,
            // Light logo gradient so the panel isn't all white (23 Nov 2026)
            background: LOGO_GRADIENT_LIGHT,
            "@media (prefers-reduced-motion: reduce)": { animation: "none", "&::after": { animation: "none" } },
            // Decorative rings (23 Nov 2026): thin concentric teal rings fading out from the
            // bottom-right corner, kept inside this panel and behind the text
            overflow: "hidden",
            "& > *": { position: "relative", zIndex: 1 },
            "&::after": {
              content: '""',
              position: "absolute",
              right: -110,
              bottom: -110,
              width: 260,
              height: 260,
              borderRadius: "50%",
              zIndex: 0,
              pointerEvents: "none",
              background: `radial-gradient(circle, ${withAlpha(BRAND.white, 0.9)} 0 5px, transparent 6px), repeating-radial-gradient(circle, transparent 0 22px, ${withAlpha(LOGO.mid, 0.4)} 22px 23.5px, transparent 23.5px 34px)`,
              maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 70%)",
              animation: "ringPulse 6s ease-in-out infinite",
            },
            "@keyframes ringPulse": { "0%,100%": { transform: "scale(1)", opacity: 0.9 }, "50%": { transform: "scale(1.06)", opacity: 1 } },
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase !important", color: T.brandDark }}>
              Compliance &amp; Standards
            </Typography>
            <Typography component="h2" sx={{ mt: 1.5, fontWeight: 700, fontSize: { xs: "1.6rem", md: "1.9rem" }, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              Certification Varies by Model
            </Typography>
          </Box>
          <Box
            component={Link}
            href="/quality"
            sx={{
              position: "relative",
              zIndex: 1,
              alignSelf: "flex-start",
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 1,
              borderRadius: 999,
              bgcolor: BRAND.white,
              border: `1px solid ${T.border}`,
              color: T.brandDark,
              fontSize: "0.88rem",
              fontWeight: 600,
              textDecoration: "none",
              "&:hover": { bgcolor: WARM_HOVER.bgcolor },
            }}
          >
            View Our Quality Standards <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
          </Box>
        </Box>

        {/* Standards grid */}
        <Box
          component="div"
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(3, 1fr)" },
          }}
        >
          {STANDARDS.map((s) => (
            <Box
              key={s}
              {...(LINKS[s] ? { component: Link, href: LINKS[s] } : { component: "div" })}
              sx={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 3,
                py: { xs: 2, md: 3 },
                borderBottom: `1px solid ${T.border}`,
                borderRight: `1px solid ${T.border}`,
                transition: "background-color .2s",
                "&:hover": { bgcolor: WARM_HOVER.bgcolor },
              }}
            >
              <VerifiedRoundedIcon sx={{ fontSize: 22, color: T.brand, flexShrink: 0 }} />
              <Typography sx={{ fontSize: "0.9rem", fontWeight: 600, color: T.ink, lineHeight: 1.35 }}>{s}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
