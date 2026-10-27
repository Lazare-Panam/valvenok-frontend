"use client";

import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import Reveal from "@/src/app/Common/Reveal";

// Mirrors the real STANDARDS list in src/app/quality/page.tsx — duplicated
// (not imported) to keep this component decoupled from that page. These are
// standards products in the range are supplied to; certification varies by
// model, so the heading must not imply every product carries every mark.
const STANDARDS = [
  "ISO 9001 Quality Management",
  "PED 2014/68/EU Pressure Equipment",
  "ATEX Directive Compliance",
  "BS EN 12266 Valve Testing",
  "NACE MR0175 / ISO 15156",
  "Material Certs to EN 10204 3.1 / 3.2",
  "Hydrogen Service (H₂-ready) Components",
  "JOSCAR Registered Supplier",
];

export default function CertificationsStrip() {
  return (
    <Box component="section" sx={{ py: { xs: 5, md: 6 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Reveal>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 1.5,
              mb: 3,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "primary.main",
                  mb: 0.5,
                }}
              >
                Compliance & Standards ——
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontWeight: 900,
                  fontSize: { xs: "1.6rem", md: "2rem" },
                  textTransform: "uppercase",
                  color: "text.primary",
                  lineHeight: 1.1,
                }}
              >
                Certification Varies by Model
              </Typography>
            </Box>

            <Box
              component={Link}
              href="/quality"
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                color: "text.secondary",
                textDecoration: "none",
                "&:hover": { color: "primary.dark" },
              }}
            >
              View Our Quality Standards →
            </Box>
          </Box>
        </Reveal>

        <Reveal delay={100}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.25 }}>
            {STANDARDS.map((s) => (
              <Box
                key={s}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 1,
                  bgcolor: "grey.50",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: "4px",
                  transition: "border-color 0.2s ease, background-color 0.2s ease",
                  "&:hover": { borderColor: "primary.main", bgcolor: "#fff" },
                }}
              >
                <VerifiedOutlinedIcon sx={{ fontSize: 17, color: "primary.main", flexShrink: 0 }} />
                <Typography
                  sx={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "text.primary",
                    whiteSpace: "nowrap",
                  }}
                >
                  {s}
                </Typography>
              </Box>
            ))}
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
