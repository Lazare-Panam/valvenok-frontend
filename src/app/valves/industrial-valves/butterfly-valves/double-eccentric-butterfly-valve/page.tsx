'use client';

import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import TrustStrip from "../../../../Common/Products_Page/TrustStrip";
import RFQModal from "@/src/app/Common/RFQCard/RFQModal";
import { ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";

const PRODUCT: ProductForRFQ = {
  id: "vf-9a-double-eccentric-butterfly-valve",
  name: "VF-9A Series High Performance Double Eccentric Butterfly Valve",
  brand: "Value Valves",
  category: "Butterfly Valves",
  categoryId: "butterfly-valves",
  subCategory: "Double Eccentric",
  thumbnail: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/Double-Offset__25C11bHDDc.jpg",
  description: "Value Valves VF-9A Series high performance double eccentric butterfly valves. ANSI 150LB and 300LB, DN50–DN1200, soft seat, fire safe and metal seat configurations. SIL 2, API 607, ATEX certified.",
  keySpecs: [
    { label: "Pressure Class",  value: "ANSI 150LB & 300LB" },
    { label: "Size Range",      value: "DN50–DN1200 (2\"–48\")" },
    { label: "Seat Types",      value: "Soft · Metal+PTFE · Metal" },
    { label: "Temperature",     value: "-100°C to +500°C" },
  ],
  variantInfo: { count: 6, sizeRange: "DN50–DN1200" },
};

const TECH_SPECS = [
  { label: "Series",               value: "VF-91A, VF-92A, VF-93A (150LB) · VF-94A, VF-95A, VF-96A (300LB)" },
  { label: "Size Range",           value: "DN50–DN1200 (2\"–48\") for 150LB · DN50–DN600 (2\"–24\") for 300LB" },
  { label: "Pressure Class",       value: "ANSI 150LB / ISO PN10–PN25 / JIS 10K 16K 20K" },
  { label: "300LB Rating",         value: "ANSI 300LB / ISO PN40–PN50 / JIS 30K 40K" },
  { label: "Temperature Range",    value: "-100°C to +500°C (-148°F to +932°F)" },
  { label: "End Connections",      value: "Wafer, Lug, Flanged (Short & Long)" },
  { label: "Design Standard",      value: "ASME B16.34, API 609, ISO 5752" },
  { label: "Fire Safe",            value: "API 607, ISO 10497" },
  { label: "Fugitive Emission",    value: "TA-LUFT, ISO 15848-1/-2, ANSI/ISA-SP-93" },
  { label: "Leakage Class",        value: "ANSI FCI 70-2 Class IV / V" },
  { label: "Safety Integrity",     value: "SIL 2 per IEC 61508 (TÜV Rheinland)" },
  { label: "Certifications",       value: "PED Module H · ATEX 2014/34/EU · API 607 · ISO 15848 · ABS · LR · CR · TSG D7002" },
];

const FEATURES = [
  { letter: "A", title: "SIL 2 Certified",                body: "TÜV Rheinland certified to Safety Integrity Level 2 per IEC 61508-1 — one of the few companies in Asia with this certification for the VF-9 Series." },
  { letter: "B", title: "Patented Seat Retainer Design",  body: "Patented seat and retainer ring attaches without bolts providing an uninterrupted sealing surface — achieves 100% tight shutoff and prevents seat enlargement." },
  { letter: "C", title: "API 607 Fire Safe",              body: "Fire safe approved per API 607 and ISO 10497 — soft seat design maintains zero leakage in normal operation and metal-to-metal seal after fire event." },
  { letter: "D", title: "Bi-Directional Shutoff",         body: "Floating self-adjustable sealing design provides flawless bubble tight shutoff — service life up to 2,000,000 cycles." },
  { letter: "E", title: "ATEX Certified",                 body: "ATEX 2014/34/EU Group II Category 2GD approved, electrically conductive design eliminates static electricity build-up in hazardous area applications." },
  { letter: "F", title: "Three Seat Types",               body: "Soft seat (VF-91A/94A), metal seat + PTFE fire safe (VF-92A/95A) and full metal seat (VF-93A/96A) — covers ambient to +500°C high temperature service." },
  { letter: "G", title: "Upgraded Shaft Strength",        body: "Splined shaft without drilling for taper pin — increased shaft strength. Both splined shaft set bolt and bottom cover provide reliable blow-out protection." },
  { letter: "H", title: "Dust-Proof Design",              body: "Bushing design prevents ingress of foreign material into the shaft area — prevents jamming and extends service life in dirty or abrasive environments." },
  { letter: "I", title: "Easy Maintenance",               body: "Spline connection design allows for easy repair and maintenance. For flanged end valves, shaft is positioned at the flange side reducing external leakage risk." },
  { letter: "J", title: "Fugitive Emission Approved",     body: "Emission test approved to TA-LUFT, ISO 15848-1, ANSI/ISA-SP-93 — suitable for applications requiring controlled fugitive emissions." },
  { letter: "K", title: "PED Module H",                   body: "Certified with Pressure Equipment Directive PED(H) 2014/68/EU — body strength per API 598 and ASME B16.34 across all six series." },
  { letter: "L", title: "Wide Material Options",          body: "Body in WCB, CF8, CF8M. Disc in CF8, CF8M. Shaft in SS304, SS316, 630SS, XM-19. Seat options include PTFE, TFM, Graphite, Glass Fiber and Inconel variants." },
];

const TRUST_POINTS = [
  { value: "SIL 2",          label: "IEC 61508 Certified" },
  { value: "API 607",        label: "Fire Safe" },
  { value: "ATEX",           label: "Hazardous Area" },
  { value: "2,000,000",      label: "Cycle Life" },
  { value: "Class IV / V",   label: "Leakage Class" },
];

const TAGS = ["ANSI 150LB", "ANSI 300LB", "SIL 2", "API 607", "ATEX", "Fire Safe", "Metal Seat", "Soft Seat", "ISO 15848"];

export default function DoubleEccentricButterflyValvePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box sx={{ bgcolor: "background.default", pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderRadius: 3, overflow: "hidden", bgcolor: "#f0f4ef", display: "flex", alignItems: "center", justifyContent: "center", aspectRatio: "4/3" }}>
                <Box component="img"
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/Double-Offset__25C11bHDDc.jpg"
                  alt="VF-9A Series Double Eccentric Butterfly Valve"
                  sx={{ width: "100%", height: "100%", objectFit: "contain", p: 3 }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ mb: 2 }}>
                <Box component="img"
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/logo.svg"
                  alt="Value Valves"
                  sx={{ height: 32, objectFit: "contain" }}
                />
              </Box>
              <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2 }}>
                Butterfly Valves / Double Eccentric
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}>
                VF-9A Series
              </Typography>
              <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}>
                High Performance Double Eccentric Butterfly Valves
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}>
                Value Valves VF-9A Series High Performance Double Eccentric Butterfly Valves Across
                ANSI 150LB And 300LB. Six Series Covering Soft Seat, Fire Safe Metal Seat And Full
                Metal Seat Configurations From DN50 To DN1200. SIL 2 Certified, API 607 Fire Safe,
                ATEX Approved And Leakage Class IV / V.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                {TAGS.map((t) => (
                  <Chip key={t} label={t} size="small" sx={{ bgcolor: "primary.light", color: "primary.dark", fontWeight: 600, fontSize: "0.7rem" }} />
                ))}
              </Box>

              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mb: 4 }}>
                {[
                  { label: "Pressure Class", value: "ANSI 150LB & 300LB" },
                  { label: "Size Range",     value: "DN50–DN1200" },
                  { label: "Temperature",    value: "-100°C to +500°C" },
                  { label: "Cycle Life",     value: "2,000,000 Cycles" },
                ].map(({ label, value }) => (
                  <Box key={label}>
                    <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1 }}>{label}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>{value}</Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="outlined" size="large" fullWidth
                  href="/valves/industrial-valves/butterfly-valves/double-eccentric-butterfly-valve/products"
                  sx={{ borderRadius: 0, fontWeight: 800, py: 1.75, fontSize: "1rem", boxShadow: "none", borderColor: "#1c2e1a", color: "#1c2e1a", "&:hover": { borderColor: "primary.main", color: "primary.main", boxShadow: "none" } }}>
                  View Products
                </Button>
                <Button variant="contained" size="large" fullWidth
                  startIcon={<ContactSupportIcon />}
                  onClick={() => setModalOpen(true)}
                  sx={{ borderRadius: 0, fontWeight: 800, py: 1.75, fontSize: "1rem", boxShadow: "none", bgcolor: "#1c2e1a", "&:hover": { bgcolor: "primary.main", boxShadow: "none" } }}>
                  Request a Quote / Lead Time
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>Technical Specifications</Typography>
          <Grid container spacing={2}>
            {TECH_SPECS.map(({ label, value }) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={label}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%" }}>
                  <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1.5 }}>{label}</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700, mt: 0.5 }}>{value}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider />

      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>Key Features</Typography>
          <Grid container spacing={3}>
            {FEATURES.map(({ letter, title, body }) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={letter}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%", display: "flex", gap: 2 }}>
                  <Box sx={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", bgcolor: "primary.main", color: "#fff", fontWeight: 700, fontSize: "0.85rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {letter}
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>{title}</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>{body}</Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <TrustStrip points={TRUST_POINTS} />
      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={PRODUCT} />
    </>
  );
}