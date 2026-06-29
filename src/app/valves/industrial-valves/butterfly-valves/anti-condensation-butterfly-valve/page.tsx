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
  id: "vf-9a-anti-condensation-butterfly-valve",
  name: "VF-9A Anti-Condensation Double Eccentric Butterfly Valve",
  brand: "Value Valves",
  category: "Butterfly Valves",
  categoryId: "butterfly-valves",
  subCategory: "Anti-Condensation",
  thumbnail: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/dpi-anti-condensation.jpg",
  description: "Value Valves VF-9A Series high-performance double eccentric butterfly valves with anti-condensation jacket option. ANSI 150LB & 300LB, DN50–DN1200, soft seat and metal seat, SIL2 certified, TUV PED(H) approved.",
  keySpecs: [
    { label: "Series",         value: "VF-91A to VF-96A" },
    { label: "Size Range",     value: "DN50–DN1200 (2\"–48\")" },
    { label: "Pressure",       value: "ANSI 150LB & 300LB" },
    { label: "Temperature",    value: "-100°C to +500°C" },
  ],
  variantInfo: { count: 6, sizeRange: "DN50–DN1200" },
};

const TECH_SPECS = [
  { label: "Series",              value: "VF-91A / 92A / 93A (150LB) · VF-94A / 95A / 96A (300LB)" },
  { label: "Connection Types",    value: "Wafer · Lugged · Flanged (Single & Double Shaft)" },
  { label: "Size Range",          value: "DN50–DN1200 (2\"–48\") · 150LB | DN50–DN600 (2\"–24\") · 300LB" },
  { label: "Pressure Rating",     value: "ANSI 150LB · ANSI 300LB · ISO PN10–PN50 · JIS 10K–40K" },
  { label: "Seat Types",          value: "Soft Seat (PTFE/RTFE/TFM) · Fire Safe Metal Seat · Full Metal Seat" },
  { label: "Temperature Range",   value: "-100°C to +500°C (-148°F to +932°F)" },
  { label: "Body Wall Thickness", value: "ASME B16.34" },
  { label: "Face To Face",        value: "API 609, ISO 5752" },
  { label: "Design Standard",     value: "ASME B16.34, B16.5" },
  { label: "Mounting Flange",     value: "ISO 5211" },
  { label: "Pressure Test",       value: "ISO 5208, API 598, MSS SP-61, MSS SP-68" },
  { label: "Fire Test",           value: "API 607, ISO 10497" },
  { label: "Fugitive Emission",   value: "ANSI/ISA-SP-93, TA-Luft, ISO 15848-1" },
  { label: "Leakage Class",       value: "ANSI FCI 70-2 Table 1 Class V/IV · ISO 5208 Rate A" },
  { label: "Safety Integrity",    value: "SIL2 — IEC 61508-1" },
  { label: "Certifications",      value: "TUV PED(H) 2014/68/EU · ATEX 2014/34/EU · ABS · LR · CR · TSG D7002" },
];

const FEATURES = [
  { letter: "A", title: "Anti-Condensation Jacket",        body: "Jacket option (code J) provides a heating or cooling medium passage around the valve body — preventing condensation, freezing, or solidification of process media in demanding temperature applications." },
  { letter: "B", title: "Double Eccentric Design",         body: "Dual offset shaft geometry eliminates disc-seat contact during opening and closing — dramatically reducing wear, lowering operating torque and extending seat life to over 2,000,000 cycles." },
  { letter: "C", title: "Patented Retainer Ring",          body: "Proprietary floating retainer (Retainer) design achieves 100% sealing between retainer and body — seat can be stored in fully closed position indefinitely without losing elasticity or causing internal leakage." },
  { letter: "D", title: "Bi-Directional Pressure Holding", body: "Special floating seat design automatically adjusts seat position based on pressure direction — achieving double-sided pressure holding at full close, with bubble-tight shutoff in both directions." },
  { letter: "E", title: "SIL2 Safety Certified",           body: "One of the few valve manufacturers in Taiwan and Asia to achieve full series SIL2 safety integrity certification per IEC 61508-1 — suitable for safety instrumented systems in oil, gas and petrochemical plants." },
  { letter: "F", title: "Anti-Blowout Shaft",              body: "Mechanical locking bolt prevents shaft blowout under pressure surge — significantly improving operational stability and safety in high-cycle or high-pressure service." },
  { letter: "G", title: "Anti-Dust Bearing System",        body: "Precision bearing system keeps shaft isolated from process fluid — preventing powder media from jamming the shaft and maintaining smooth operation without special tooling." },
  { letter: "H", title: "Splined Shaft Torque Transfer",   body: "Splined connection between disc and shaft (花鍵軸設計) maximises torque transmission, reduces backlash and eliminates the risk of taper pin failure common in conventional designs." },
  { letter: "I", title: "Anti-Sag Positioning Mechanism",  body: "High-precision support platform and tolerance control confirm exact disc-to-body alignment — preventing disc sag when actuators are fitted and eliminating misalignment-induced leakage." },
  { letter: "J", title: "Six Seat Material Options",       body: "PTFE, RTFE, PTFE+15%Graphite, PTFE+15%Glass Fibre, PTFE+INCONEL and TFM seat options — covering soft seat, fire safe metal seat and full metal seat requirements across all process conditions." },
  { letter: "K", title: "Cryogenic & High Temp Options",   body: "VF-930 series handles cryogenic service to -100°C (-148°F) and high temperature service to +500°C (+932°F) — available with internal polished, emission, jacket and cryogenic special requirement codes." },
  { letter: "L", title: "TUV PED(H) & ATEX Certified",    body: "Certified to PED Module H 2014/68/EU and ATEX 2014/34/EU Group II Category 2 GD — fully compliant for European pressure equipment and explosive atmosphere installations." },
];

const TRUST_POINTS = [
  { value: "SIL2",            label: "Safety Integrity" },
  { value: "150LB & 300LB",  label: "Pressure Classes" },
  { value: "2\" – 48\"",     label: "Size Range" },
  { value: "TUV · ATEX",     label: "Certifications" },
  { value: "Jacket Option",  label: "Anti-Condensation" },
];

const TAGS = ["SIL2", "TUV PED", "ATEX", "API 607", "ISO 15848", "Anti-Condensation", "Fire Safe", "Metal Seat", "Soft Seat", "ISO 5211"];

export default function AntiCondensationButterflyValvePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box sx={{ bgcolor: "background.default", pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderRadius: 3, overflow: "hidden", bgcolor: "#f0f4ef", display: "flex", alignItems: "center", justifyContent: "center", aspectRatio: "4/3" }}>
                <Box component="img"
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/dpi-anti-condensation.jpg"
                  alt="VF-9A Anti-Condensation Double Eccentric Butterfly Valve"
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
                Butterfly Valves / Anti-Condensation
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}>
                VF-9A Series
              </Typography>
              <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}>
                Anti-Condensation Double Eccentric Butterfly Valves — 2" To 48"
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}>
                Value Valves VF-9A Series High-Performance Double Eccentric Butterfly Valves With
                Anti-Condensation Jacket Option. ANSI 150LB And 300LB, DN50–DN1200, Soft Seat,
                Fire Safe And Full Metal Seat. SIL2 Certified, TUV PED(H) And ATEX Approved For
                Oil, Gas, Petrochemical And Industrial Process Applications.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                {TAGS.map((t) => (
                  <Chip key={t} label={t} size="small"
                    sx={{ bgcolor: "primary.light", color: "primary.dark", fontWeight: 600, fontSize: "0.7rem" }} />
                ))}
              </Box>

              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mb: 4 }}>
                {[
                  { label: "Size Range",  value: "DN50–DN1200" },
                  { label: "Pressure",    value: "150LB & 300LB" },
                  { label: "Seat Types",  value: "Soft · Fire Safe · Metal" },
                  { label: "Temperature", value: "-100°C to +500°C" },
                ].map(({ label, value }) => (
                  <Box key={label}>
                    <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1 }}>{label}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>{value}</Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="outlined" size="large" fullWidth
                  href="/valves/industrial-valves/butterfly-valves/anti-condensation-butterfly-valve/products"
                  sx={{ borderRadius: 0, fontWeight: 800, py: 1.75, fontSize: "1rem", boxShadow: "none",
                    borderColor: "#1c2e1a", color: "#1c2e1a",
                    "&:hover": { borderColor: "primary.main", color: "primary.main", boxShadow: "none" } }}>
                  View Products
                </Button>
                <Button variant="contained" size="large" fullWidth
                  startIcon={<ContactSupportIcon />}
                  onClick={() => setModalOpen(true)}
                  sx={{ borderRadius: 0, fontWeight: 800, py: 1.75, fontSize: "1rem", boxShadow: "none",
                    bgcolor: "#1c2e1a", "&:hover": { bgcolor: "primary.main", boxShadow: "none" } }}>
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
                  <Box sx={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", bgcolor: "primary.main",
                    color: "#fff", fontWeight: 700, fontSize: "0.85rem",
                    display: "flex", alignItems: "center", justifyContent: "center" }}>
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