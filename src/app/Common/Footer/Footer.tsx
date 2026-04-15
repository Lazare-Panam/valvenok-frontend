"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Using Grid2 for the 'size' prop
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { alpha } from "@mui/material/styles";

// Icons
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const BRAND_GREEN = "#61D649";
const DARK_BG = "#1c2e1a";

const FOOTER_LINKS = [
  {
    title: "Products",
    links: [
      { label: "Instrumentation Valves", href: "/valves" },
      { label: "Pumps & Motors", href: "/pumps" },
      { label: "Pneumatic Components", href: "/categories/frl" },
      { label: "Fittings", href: "/categories/instrumentation-fittings" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "News & Blog", href: "/news" },
      { label: "Quality & JOSCAR", href: "/quality" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Delivery Information", href: "/delivery" },
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
        borderTop: `6px solid ${BRAND_GREEN}`, // Fixed the blue border
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* ── COLUMN 1: BRAND & NEWSLETTER ── */}
          <Grid size={{ xs: 12, md: 4 }}>
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
              Leading UK supplier of Hydraulic, Pneumatic, and Instrumentation
              components. Engineering excellence delivered fast to global
              procurement teams.
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{
                mb: 2,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Stay Updated
            </Typography>
          </Grid>

          {/* ── COLUMNS 2-4: LINKS ── */}
          {FOOTER_LINKS.map((section) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={section.title}>
              <Typography
                sx={{
                  fontWeight: 800,
                  textTransform: "uppercase",
                  mb: 3,
                  letterSpacing: "0.1em",
                  fontSize: "14px",
                  color: BRAND_GREEN, // Fixed blue titles
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
            </Grid>
          ))}

          {/* ── COLUMN 5: CONTACT ── */}
          <Grid size={{ xs: 12, md: 2 }}>
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
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneIcon sx={{ fontSize: 18, color: BRAND_GREEN }} />
                <Typography variant="body2" sx={{ color: alpha("#fff", 0.8) }}>
                  +44 7368557896
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailIcon sx={{ fontSize: 18, color: BRAND_GREEN }} />
                <Typography variant="body2" sx={{ color: alpha("#fff", 0.8) }}>
                  sales@valvenok.com
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} sx={{ mt: 1 }}>
                <IconButton
                  size="small"
                  component="a"
                  href="https://uk.linkedin.com/company/valvenok-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "white",
                    bgcolor: alpha("#fff", 0.1),
                    "&:hover": { bgcolor: BRAND_GREEN },
                  }}
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

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
            © {new Date().getFullYear()} INDUSTRIAL SUPPLIES LTD. ALL RIGHTS
            RESERVED.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography
                variant="caption"
                sx={{ fontWeight: 900, color: alpha("#fff", 0.3) }}
              >
                JOSCAR
              </Typography>
              <Typography
                variant="caption"
                sx={{ fontWeight: 900, color: alpha("#fff", 0.3) }}
              >
                ISO 9001
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
