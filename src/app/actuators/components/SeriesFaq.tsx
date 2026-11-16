"use client";

// FAQ block for series pages: one icon per question, plus FAQPage schema.
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { SvgIconComponent } from "@mui/icons-material";

export default function SeriesFaq({ title, items }: { title: string; items: { q: string; a: string; icon: SvgIconComponent }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Container maxWidth="md">
        <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}>{title}</Typography>
        <Box sx={{ display: "grid", gap: 1.25 }}>
          {items.map((f, i) => (
            <Box component="details" key={f.q} open={i === 0}
              sx={{
                borderRadius: "16px", bgcolor: "#fff", border: "1px solid rgba(0,0,0,0.1)",
                "& summary": { listStyle: "none", cursor: "pointer", px: 2.5, py: 2, fontWeight: 700, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2 },
                "& summary::-webkit-details-marker": { display: "none" },
                "& summary::after": { content: '"+"', flexShrink: 0, width: 28, height: 28, borderRadius: "50%", bgcolor: "#EEF9EA", color: "#2E8B1E", fontWeight: 800, display: "grid", placeItems: "center", lineHeight: "28px", textAlign: "center" },
                "&[open] summary::after": { content: '"–"' },
              }}>
              <Box component="summary">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.75 }}>
                  <Box sx={{ flexShrink: 0, width: 40, height: 40, borderRadius: "12px", bgcolor: "#EEF9EA", color: "#2E8B1E", display: "grid", placeItems: "center" }}>
                    <f.icon sx={{ fontSize: 21 }} />
                  </Box>
                  <Box component="h3" sx={{ m: 0, font: "inherit" }}>{f.q}</Box>
                </Box>
              </Box>
              <Box component="p" sx={{ m: 0, pl: { xs: 2.5, sm: "78px" }, pr: 2.5, pb: 2.25, color: "text.secondary", lineHeight: 1.7, textTransform: "capitalize" }}>{f.a}</Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
