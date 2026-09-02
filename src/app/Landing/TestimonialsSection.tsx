"use client";

import { Box, Container, Typography, Avatar } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Reveal from "@/src/app/Common/Reveal";

/**
 * PLACEHOLDER CONTENT — wired into the homepage at the client's explicit
 * request so the design/layout can be reviewed in place. Every entry below
 * must be replaced with a real customer (actual quote, name, job title,
 * company) before this goes live. Do not let this ship with placeholder
 * text — fabricated social proof is misleading to buyers.
 */
const TESTIMONIALS: {
  quote: string;
  name: string;
  role: string;
  company: string;
}[] = [
  {
    quote: "PLACEHOLDER — replace with a real customer quote before launch.",
    name: "[Add Client Name]",
    role: "[Job Title]",
    company: "[Company Name]",
  },
  {
    quote: "PLACEHOLDER — replace with a real customer quote before launch.",
    name: "[Add Client Name]",
    role: "[Job Title]",
    company: "[Company Name]",
  },
  {
    quote: "PLACEHOLDER — replace with a real customer quote before launch.",
    name: "[Add Client Name]",
    role: "[Job Title]",
    company: "[Company Name]",
  },
];

export default function TestimonialsSection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Reveal>
          <Box sx={{ mb: { xs: 5, md: 6 }, textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "primary.main",
                mb: 1,
              }}
            >
              Trusted By
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: { xs: "2rem", md: "2.8rem" },
                fontWeight: 900,
                textTransform: "uppercase",
                color: "text.primary",
              }}
            >
              What Our Customers Say
            </Typography>
          </Box>
        </Reveal>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 100}>
              <Box
                sx={{
                  bgcolor: "grey.50",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: "4px",
                  p: 3.5,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
                  "&:hover": {
                    borderColor: "primary.main",
                    transform: "translateY(-4px)",
                    boxShadow: "0 16px 36px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <FormatQuoteIcon sx={{ color: "primary.light", fontSize: 32, mb: 1.5 }} />
                <Typography sx={{ color: "text.primary", fontSize: "0.95rem", lineHeight: 1.7, mb: 3, flex: 1 }}>
                  {t.quote}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Avatar sx={{ bgcolor: "primary.main", width: 40, height: 40, fontWeight: 700 }}>
                    {t.name.replace(/[\[\]]/g, "").charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: "0.88rem", color: "text.primary" }}>
                      {t.name}
                    </Typography>
                    <Typography sx={{ fontSize: "0.78rem", color: "text.secondary" }}>
                      {t.role}, {t.company}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
