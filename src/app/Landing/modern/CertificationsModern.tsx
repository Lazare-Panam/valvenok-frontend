'use client'

import Link from "next/link";
import { Box, Typography } from "@mui/material";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { T, textReset } from "./tokens";

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
          bgcolor: "#fff",
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
            background: "linear-gradient(135deg, #EAF8E4, #E6F4FD, #FFF6DA, #EAF8E4)",
            backgroundSize: "300% 300%",
            animation: "bgShift 12s ease infinite",
            "@keyframes bgShift": { "0%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" }, "100%": { backgroundPosition: "0% 50%" } },
            "@media (prefers-reduced-motion: reduce)": { animation: "none" },
            "&::after": {
              content: '""',
              position: "absolute",
              right: -60,
              bottom: -60,
              width: 200,
              height: 200,
              borderRadius: "50%",
              border: "1px solid rgba(97,214,73,0.25)",
              boxShadow: "0 0 0 40px rgba(255,255,255,0.35)",
            },
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase !important", color: T.greenDark }}>
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
              bgcolor: "#fff",
              border: `1px solid ${T.border}`,
              color: T.greenDark,
              fontSize: "0.88rem",
              fontWeight: 600,
              textDecoration: "none",
              "&:hover": { bgcolor: T.greenSoft },
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
                "&:hover": { bgcolor: T.greenSoft },
              }}
            >
              <VerifiedRoundedIcon sx={{ fontSize: 22, color: T.green, flexShrink: 0 }} />
              <Typography sx={{ fontSize: "0.9rem", fontWeight: 600, color: T.ink, lineHeight: 1.35 }}>{s}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
