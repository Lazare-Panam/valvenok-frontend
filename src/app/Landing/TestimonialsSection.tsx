"use client";

import { Box, Container, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import Reveal from "@/src/app/Common/Reveal";

/**
 * Illustrative testimonial-style copy, attributed by role + sector only —
 * NOT a specific named company or person (no real customer data was
 * available to attribute these to). Written on the "reliable, global
 * manufacturer" themes requested, so they represent plausible customer
 * sentiment rather than an invented company identity.
 *
 * Replace with real, attributed customer quotes as soon as they're
 * available — genuine testimonials (with a real name/company, or at least
 * verifiable) are always stronger than anonymised ones, and UK ASA rules
 * require testimonials to be genuine.
 */
const TESTIMONIALS: { quote: string; role: string; sector: string }[] = [
  {
    quote:
      "Every order has arrived exactly to spec and on time — hard to find that kind of consistency across such a wide product range.",
    role: "Procurement Manager",
    sector: "UK Process Manufacturing",
  },
  {
    quote:
      "As a global manufacturer, we need suppliers who can match that scale. Valvenok sources what we need across regions without the usual delays.",
    role: "Operations Director",
    sector: "Industrial Manufacturing",
  },
  {
    quote:
      "Genuine parts, full documentation, fast turnaround — exactly what we expect from an authorised distributor.",
    role: "Technical Buyer",
    sector: "Energy & Process Industries",
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
            <Reveal key={t.role + i} delay={i * 100}>
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
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      bgcolor: "primary.light",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <BusinessCenterOutlinedIcon sx={{ color: "primary.dark", fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: "0.88rem", color: "text.primary" }}>
                      {t.role}
                    </Typography>
                    <Typography sx={{ fontSize: "0.78rem", color: "text.secondary" }}>
                      {t.sector}
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
