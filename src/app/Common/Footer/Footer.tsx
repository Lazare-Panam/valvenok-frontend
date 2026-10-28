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

import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";

const BRAND_GREEN = "#61D649";
const FONT = "var(--font-geist-sans), Inter, system-ui, sans-serif";
const LOGO_URL = "https://pblol2.blob.core.windows.net/valvenok-images/logo.png";

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
      // { label: "Walrus Pumps", href: "/brands/walrus-pumps" },
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
  const linkSx = {
    color: alpha("#fff", 0.82),
    fontSize: "0.92rem",
    textDecoration: "none",
    transition: "color .2s, transform .2s",
    display: "inline-block",
    "&:hover": { color: "#fff", transform: "translateX(3px)" },
  };
  const headSx = {
    fontWeight: 700,
    textTransform: "uppercase !important",
    letterSpacing: "0.1em",
    fontSize: "0.78rem",
    color: "#fff",
    mb: 2.5,
  };
  const contactRow = { display: "flex", gap: 1.25, alignItems: "flex-start", color: alpha("#fff", 0.85), fontSize: "0.92rem", lineHeight: 1.55 };

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",
        color: "white",
        fontFamily: FONT,
        "& *": { fontFamily: `${FONT} !important` },
        "& p, & a, & span": { textTransform: "none" },
        background: "linear-gradient(115deg, #0F3314 0%, #1B5E1A 45%, #2E8B1E 85%, #3FAE2C 120%)",
        // Faint engineering grid, as on the Panam footer
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "linear-gradient(90deg, #000 0%, transparent 60%)",
          WebkitMaskImage: "linear-gradient(90deg, #000 0%, transparent 60%)",
          pointerEvents: "none",
        },
      }}
    >
      {/* Decorative rings */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          right: { xs: -240, md: -160 },
          bottom: { xs: -260, md: -220 },
          width: 640,
          height: 640,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.14)",
          boxShadow: "0 0 0 80px rgba(255,255,255,0.03), 0 0 0 160px rgba(255,255,255,0.025)",
          pointerEvents: "none",
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          right: { xs: 20, md: 140 },
          bottom: { xs: 40, md: 70 },
          width: 180,
          height: 180,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.18)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", px: { xs: 2, md: 4 }, pt: { xs: 8, md: 11 }, pb: 4 }}>
        <Grid container spacing={{ xs: 5, md: 4 }}>
          {/* ── Brand + contact ── */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component="a"
              href="/"
              aria-label="Valvenok home"
              sx={{ display: "inline-flex", alignItems: "center", gap: 1.5, px: 2, py: 1, borderRadius: "16px", bgcolor: "#fff", boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
            >
              <Box component="img" src={LOGO_URL} alt="Valvenok" sx={{ height: 48, width: "auto", display: "block" }} />
              <Typography sx={{ fontWeight: 800, fontSize: "1rem", letterSpacing: "0.04em", color: "#123D17", textTransform: "uppercase !important" }}>
                Industrial{" "}
                <Box component="span" sx={{ color: "#2E8B1E", textTransform: "uppercase !important" }}>
                  Supplies
                </Box>
              </Typography>
            </Box>
            <Typography sx={{ mt: 2.5, maxWidth: 380, color: alpha("#fff", 0.8), fontSize: "0.95rem", lineHeight: 1.7 }}>
              UK supplier of Hydraulic, Pneumatic, and Instrumentation components. Engineering excellence delivered fast to Global
              Procurement Teams.
            </Typography>

            <Stack spacing={1.5} sx={{ mt: 3 }}>
              <Box component="a" href="mailto:sales@valvenok.com" sx={{ ...contactRow, textDecoration: "none", "&:hover": { color: "#fff" } }}>
                <EmailOutlinedIcon sx={{ fontSize: 18, mt: 0.2 }} />
                sales@valvenok.com
              </Box>
              <Box component="a" href="tel:+447368137917" sx={{ ...contactRow, textDecoration: "none", "&:hover": { color: "#fff" } }}>
                <PhoneOutlinedIcon sx={{ fontSize: 18, mt: 0.2 }} />
                +44 7368 137917
              </Box>
              <Box sx={contactRow}>
                <LocationOnOutlinedIcon sx={{ fontSize: 18, mt: 0.2 }} />
                <Box>
                  <Box component="span" sx={{ fontWeight: 700, color: "#fff", display: "block" }}>
                    Valvenok Ltd.
                  </Box>
                  St. Edburgs Hall, Priory Rd
                  <br />
                  Bicester, OX26 6BL
                  <br />
                  United Kingdom
                </Box>
              </Box>
            </Stack>

            <IconButton
              component="a"
              href="https://uk.linkedin.com/company/valvenok-ltd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Valvenok's LinkedIn page"
              sx={{
                mt: 3,
                width: 40,
                height: 40,
                color: "white",
                border: "1px solid",
                borderColor: alpha("#fff", 0.35),
                transition: "all .2s ease",
                "&:hover": { bgcolor: "#fff", color: "#123D17", transform: "translateY(-2px)" },
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </Grid>

          {/* ── Link columns ── */}
          {FOOTER_LINKS.map((section) => (
            <Grid size={{ xs: 6, sm: 3, md: 2 }} key={section.title}>
              <Typography sx={headSx}>{section.title}</Typography>
              <Stack spacing={1.4}>
                {section.links.map((link) => (
                  <Link key={link.label} href={link.href} underline="none" sx={linkSx}>
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ mt: { xs: 6, md: 8 }, mb: 3, borderColor: alpha("#fff", 0.18) }} />

        {/* ── Bottom bar ── */}
        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems="center" spacing={2}>
          <Stack direction={{ xs: "column", sm: "row" }} alignItems="center" spacing={{ xs: 1.5, sm: 3 }}>
            <Typography sx={{ color: alpha("#fff", 0.75), fontSize: "0.85rem" }}>
              © {new Date().getFullYear()} Valvenok. All rights reserved.
            </Typography>
            {/* Google "Preferred sources" button. publisher.js (loaded in app/layout.tsx) injects the button
                into this div by its `google-add-preferred-source-btn` attribute. Plain <div>, NOT MUI <Box>:
                Box filters props through Emotion's is-prop-valid, which would strip this non-standard
                attribute. suppressHydrationWarning because Google's async script may populate it around hydration. */}
            <div suppressHydrationWarning {...({ "google-add-preferred-source-btn": "", "data-theme": "dark" } as Record<string, string>)} />
          </Stack>
          <Stack direction="row" spacing={1.25}>
            {[
              { icon: VerifiedUserOutlinedIcon, label: "JOSCAR" },
              { icon: WorkspacePremiumOutlinedIcon, label: "ISO 9001" },
            ].map(({ icon: Icon, label }) => (
              <Box
                key={label}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.75,
                  px: 1.75,
                  py: 0.75,
                  borderRadius: 999,
                  bgcolor: alpha("#fff", 0.1),
                  border: "1px solid",
                  borderColor: alpha("#fff", 0.22),
                }}
              >
                <Icon sx={{ fontSize: 15, color: BRAND_GREEN }} />
                <Typography sx={{ fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em", color: "#fff" }}>{label}</Typography>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
