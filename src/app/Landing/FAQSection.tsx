"use client";

import { useState } from "react";
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Reveal from "@/src/app/Common/Reveal";

const FAQS = [
  {
    q: "What's your typical dispatch and delivery time?",
    a: "In-stock items dispatch within 2–3 business days, with free UK delivery on orders over £150. Non-stock or custom items are quoted individually with a confirmed lead time before you order.",
  },
  {
    q: "Do you supply custom sizes or non-standard specifications?",
    a: "Yes. Send us your size, pressure rating, connection type, and material requirements and our team will confirm availability and pricing for non-standard configurations across our brand portfolio.",
  },
  {
    q: "Is there a minimum order quantity?",
    a: "No minimum on standard catalog items — we supply single components as well as full project quantities. Bulk and project orders can also be handled through our Quick Order tool.",
  },
  {
    q: "Do you ship outside the UK?",
    a: "We're a UK-based supplier and our stocked delivery promise applies to UK orders. For international enquiries, get in touch and we'll confirm shipping options and lead times.",
  },
  {
    q: "What if I can't find the exact part I need online?",
    a: "Use the Request for Quote option on any product page, or contact our technical sales team directly — as an authorised distributor working across dozens of manufacturers, we can usually source it.",
  },
  {
    q: "What's your returns policy?",
    a: "Unused items in original packaging can be returned in line with our Returns Policy — see the Returns page for full terms.",
  },
  {
    q: "Do you offer trade credit accounts?",
    a: "Yes. Approved business customers can apply for a trade credit account to order on invoice terms rather than paying upfront. Contact our sales team to discuss eligibility and get one set up.",
  },
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState<string | false>(false);

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "grey.50" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
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
              FAQ
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
              Questions Procurement Teams Ask
            </Typography>
          </Box>
        </Reveal>

        <Box sx={{ maxWidth: 860, mx: "auto" }}>
          {FAQS.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i * 60, 300)}>
              <Accordion
                expanded={expanded === item.q}
                onChange={() => setExpanded(expanded === item.q ? false : item.q)}
                disableGutters
                elevation={0}
                square
                sx={{
                  bgcolor: "#fff",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: "4px !important",
                  mb: 1.5,
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                  "&:before": { display: "none" },
                  "&:hover": { borderColor: "primary.main", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" },
                  "&.Mui-expanded": { borderColor: "primary.main" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
                  sx={{
                    px: 3,
                    py: 0.5,
                    transition: "background-color 0.2s ease",
                    "&:hover": { bgcolor: "rgba(97,214,73,0.05)" },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      color: "text.primary",
                    }}
                  >
                    {item.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 2.5, pt: 0 }}>
                  <Typography sx={{ color: "text.secondary", fontSize: "0.9rem", lineHeight: 1.7 }}>
                    {item.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
