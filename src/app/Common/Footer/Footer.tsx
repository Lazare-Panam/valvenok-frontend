"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { alpha } from "@mui/material/styles";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import Reveal from "../Reveal";

const BRAND_GREEN = "#61D649";
const DARK_BG = "#1c2e1a";

const FOOTER_LINKS = [
  {
    title: "Products",
    links: [
      { label: "Hydrogen & Cryogenic", href: "/hydrogen-cryogenic" },
      { label: "Valves", href: "/valves" },
      { label: "Actuators", href: "/actuators" },
      { label: "Instrumentation", href: "/instrumentation" },
      { label: "Pumps & Seals", href: "/pumps-seals" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "News & Blog", href: "/news" },
      { label: "Quality & Compliance", href: "/quality" },
      { label: "JOSCAR Registered", href: "/joscar-registered" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Brands",
    links: [
      { label: "Hiflux", href: "/brands/hiflux" },
      { label: "Kosaplus", href: "/brands/kosaplus" },
      { label: "Mars Valves", href: "/brands/mars-valves" },
      { label: "Pietro Fiorentini", href: "/brands/pietro-fiorentini" },
      { label: "Susin", href: "/brands/susin" },
      { label: "UTAM Valves", href: "/brands/utam-valves" },
      { label: "Value Valves", href: "/brands/value-valves" },
      { label: "Walrus Pumps", href: "/brands/walrus-pumps" },
      { label: "Youngdo", href: "/brands/youngdo" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Delivery Information", href: "/delivery" },
      { label: "Return Policy", href: "/returns-policy" },
    ],
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: DARK_BG,
        color: "white",
        pt: 14,
        pb: 6,
        borderTop: `6px solid ${BRAND_GREEN}`,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* ── COLUMN 1: BRAND ── */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Reveal>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  mb: 3,
                  color: "white",
                }}
              >
                Industrial{" "}
                <Box component="span" sx={{ color: BRAND_GREEN }}>
                  Supplies
                </Box>
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: alpha("#fff", 0.7), mb: 4, lineHeight: 1.8 }}
              >
                UK supplier of Hydraulic, Pneumatic, and Instrumentation
                components. Engineering excellence delivered fast to Global
                Procurement Teams.
              </Typography>
            </Reveal>
          </Grid>

          {/* ── COLUMNS 2-4: LINKS ── */}
          {FOOTER_LINKS.map((section, i) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={section.title}>
              <Reveal delay={i * 80}>
                <Typography
                  sx={{
                    fontWeight: 800,
                    textTransform: "uppercase",
                    mb: 3,
                    letterSpacing: "0.1em",
                    fontSize: "14px",
                    color: BRAND_GREEN,
                  }}
                >
                  {section.title}
                </Typography>
                <Stack spacing={1.5}>
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      underline="none"
                      sx={{
                        color: alpha("#fff", 0.6),
                        fontSize: "14px",
                        transition: "0.2s",
                        "&:hover": { color: BRAND_GREEN, pl: 0.5 },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Reveal>
            </Grid>
          ))}

          {/* ── COLUMN 5: CONTACT ── */}
          <Grid size={{ xs: 12, md: 2 }}>
            <Reveal delay={240}>
            <Typography
              sx={{
                fontWeight: 800,
                textTransform: "uppercase",
                mb: 3,
                letterSpacing: "0.1em",
                fontSize: "14px",
                color: BRAND_GREEN,
              }}
            >
              Contact
            </Typography>
            <Stack spacing={2}>
              {/* Address */}
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <LocationOnIcon
                  sx={{ fontSize: 18, color: BRAND_GREEN, mt: 0.3 }}
                />
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ color: "white", fontWeight: 700 }}
                  >
                    Valvenok Ltd.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: alpha("#fff", 0.7) }}
                  >
                    St. Edburgs Hall, Priory Rd
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: alpha("#fff", 0.7) }}
                  >
                    Bicester, OX26 6BL
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: alpha("#fff", 0.7) }}
                  >
                    United Kingdom
                  </Typography>
                </Box>
              </Stack>

              {/* Phone */}
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneIcon sx={{ fontSize: 18, color: BRAND_GREEN }} />
                <Typography variant="body2" sx={{ color: alpha("#fff", 0.8) }}>
                  +44 7368 137917
                </Typography>
              </Stack>

              {/* Email */}
              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailIcon sx={{ fontSize: 18, color: BRAND_GREEN }} />
                <Typography variant="body2" sx={{ color: alpha("#fff", 0.8) }}>
                  sales@valvenok.com
                </Typography>
              </Stack>

              {/* LinkedIn */}
              <Stack direction="row" spacing={1.5} sx={{ mt: 1 }}>
                <IconButton
                  size="small"
                  component="a"
                  href="https://uk.linkedin.com/company/valvenok-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Valvenok's LinkedIn page"
                  sx={{
                    color: "white",
                    bgcolor: alpha("#fff", 0.1),
                    border: "1px solid",
                    borderColor: alpha("#fff", 0.15),
                    transition: "background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease",
                    "&:hover": {
                      bgcolor: BRAND_GREEN,
                      borderColor: BRAND_GREEN,
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <LinkedInIcon fontSize="small" />
                  <Box
                    component="span"
                    sx={{
                      position: "absolute",
                      width: 1,
                      height: 1,
                      padding: 0,
                      margin: -1,
                      overflow: "hidden",
                      clip: "rect(0, 0, 0, 0)",
                      whiteSpace: "nowrap",
                      border: 0,
                    }}
                  >
                    Visit Valvenok's LinkedIn page
                  </Box>
                </IconButton>
              </Stack>
            </Stack>
            </Reveal>
          </Grid>
        </Grid>

        {/* Google "Preferred sources" button. publisher.js (loaded in app/layout.tsx) injects the button
            into the inner div by its `google-add-preferred-source-btn` attribute. Plain <div>, NOT MUI
            <Box>: Box filters props through Emotion's is-prop-valid, which would strip this non-standard
            attribute. Attribute spread in (not in React's typed div props); suppressHydrationWarning
            because Google's async script may populate this node around hydration. */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <div suppressHydrationWarning {...({ "google-add-preferred-source-btn": "", "data-theme": "dark" } as Record<string, string>)} />
        </Box>

        <Divider sx={{ my: 6, borderColor: alpha("#fff", 0.1) }} />

        {/* ── BOTTOM BAR ── */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography
            variant="caption"
            sx={{ color: alpha("#fff", 0.4), letterSpacing: "0.05em" }}
          >
            © {new Date().getFullYear()} VALVENOK. ALL RIGHTS
            RESERVED.
          </Typography>
          <Stack direction="row" spacing={1.5}>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.75,
                  px: 1.5,
                  py: 0.6,
                  border: "1px solid",
                  borderColor: alpha("#fff", 0.15),
                  borderRadius: "3px",
                  transition: "border-color 0.2s ease, background-color 0.2s ease",
                  "&:hover": { borderColor: BRAND_GREEN, bgcolor: alpha(BRAND_GREEN, 0.06) },
                }}
              >
                <VerifiedUserOutlinedIcon sx={{ fontSize: 14, color: BRAND_GREEN }} />
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 800, letterSpacing: "0.08em", color: alpha("#fff", 0.6) }}
                >
                  JOSCAR
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.75,
                  px: 1.5,
                  py: 0.6,
                  border: "1px solid",
                  borderColor: alpha("#fff", 0.15),
                  borderRadius: "3px",
                  transition: "border-color 0.2s ease, background-color 0.2s ease",
                  "&:hover": { borderColor: BRAND_GREEN, bgcolor: alpha(BRAND_GREEN, 0.06) },
                }}
              >
                <WorkspacePremiumOutlinedIcon sx={{ fontSize: 14, color: BRAND_GREEN }} />
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 800, letterSpacing: "0.08em", color: alpha("#fff", 0.6) }}
                >
                  ISO 9001
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
