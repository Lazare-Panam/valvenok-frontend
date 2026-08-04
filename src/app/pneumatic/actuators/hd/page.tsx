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
import TrustStrip from "../../../Common/Products_Page/TrustStrip";
import RFQModal from "@/src/app/Common/RFQCard/RFQModal";
import { ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";

const HD_PRODUCT: ProductForRFQ = {
  id: "hd-series",
  name: "HD Series Heavy-Duty Scotch Yoke Pneumatic Actuator",
  brand: "Valvenok",
  category: "Pneumatic Actuators",
  categoryId: "pneumatic-actuators",
  subCategory: "Heavy-Duty Scotch Yoke",
  thumbnail: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/hd.webp",
  description: "Heavy-duty scotch yoke pneumatic actuators in IS (Symmetric) and IC (Canted) configurations. 132–120,867 Nm, ATEX, SIL3, PED certified, IP66/67.",
  keySpecs: [
    { label: "Torque", value: "132 – 120,867 Nm" },
    { label: "Pressure", value: "3.5 – 10 bar" },
    { label: "Temperature", value: "-20°C to +85°C" },
    { label: "Certifications", value: "ATEX, SIL3, PED" },
  ],
  variantInfo: {
    count: 2,
    sizeRange: "IS / IC Series",
  },
};

const TECH_SPECS = [
  { label: "Actuator Type", value: "Heavy-Duty Scotch Yoke (IS & IC Series)" },
  { label: "Output Torque", value: "132 – 120,867 Nm" },
  { label: "Spring End Torque", value: "83 – 23,313 Nm" },
  { label: "Standard Rotation", value: "90° (±5° adjustable)" },
  { label: "Operating Pressure", value: "3.5 – 10 bar (40 – 145 PSIG)" },
  { label: "Supply Medium", value: "Instrument air" },
  { label: "Temperature Range", value: "-20°C to +85°C" },
  { label: "Optional Temp Range", value: "-30°C to +100°C" },
  { label: "Ingress Protection", value: "IP66 / IP67" },
  { label: "Mounting Standard", value: "ISO 5211 / MSS-SP101 (on request)" },
  { label: "Configurations", value: "DA, TDA, SR-FC, SR-FO" },
  { label: "Testing Standard", value: "EN 15714-3:2009" },
  { label: "Safety & Compliance", value: "ATEX, SIL3, PED" },
  { label: "Manual Override", value: "Hydraulic, Handwheel, Gearbox" },
];

const FEATURES = [
  { letter: "A", title: "High-Strength Body", body: "Heavy-duty housing engineered for extreme industrial environments." },
  { letter: "B", title: "Reinforced Seal Package", body: "Multi-stage industrial sealing for maximum leak resistance and long-term durability." },
  { letter: "C", title: "Corrosion-Resistant Coating", body: "Designed for offshore and corrosive atmospheres with water ingress protection." },
  { letter: "D", title: "Optimized Torque Curve", body: "Symmetric (IS) and Canted (IC) yoke designs deliver application-specific torque profiles." },
  { letter: "E", title: "Modular Construction", body: "Interchangeable modular components simplify maintenance and reduce spare parts inventory." },
  { letter: "F", title: "Flexible Control Options", body: "Supports handwheel, hydraulic override, limit switches, solenoid valves, and positioners." },
];

const TRUST_POINTS = [
  { value: "120,867 Nm", label: "Max Torque" },
  { value: "IP66/67", label: "Ingress Protection" },
  { value: "ATEX + SIL3", label: "Safety Certified" },
  { value: "IS & IC", label: "Yoke Configurations" },
  { value: "EN 15714-3", label: "Testing Standard" },
];

const CERTIFICATIONS = ["ATEX", "SIL3", "PED", "IP66/67", "ISO 5211", "EN 15714-3:2009"];

export default function HDPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── Product Hero ── */}
      <Box sx={{ bgcolor: "background.default", pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* Image */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  bgcolor: "#f0f4ef",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  aspectRatio: "4/3",
                }}
              >
                <Box
                  component="img"
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/hd.webp"
                  alt="HD Series Heavy-Duty Scotch Yoke Pneumatic Actuator"
                  sx={{ width: "100%", height: "100%", objectFit: "contain", p: 3 }}
                />
              </Box>
            </Grid>

            {/* Details */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2 }}>
                Pneumatic Actuators / HD Series
              </Typography>

              <Typography variant="h1" sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}>
                HD Series
              </Typography>
              <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}>
                Heavy-Duty Scotch Yoke Pneumatic Rotary Actuator
              </Typography>

              <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}>
                IS (Symmetric) and IC (Canted) scotch yoke actuators built for the most demanding
                industrial valve automation. Wide torque range covering ball, butterfly and plug valves
                in on-off and modulating service — up to 120,867 Nm.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                {CERTIFICATIONS.map((c) => (
                  <Chip
                    key={c}
                    label={c}
                    size="small"
                    sx={{
                      bgcolor: "primary.light",
                      color: "primary.dark",
                      fontWeight: 600,
                      fontSize: "0.7rem",
                    }}
                  />
                ))}
              </Box>

              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mb: 4 }}>
                {[
                  { label: "Output Torque", value: "132 – 120,867 Nm" },
                  { label: "Pressure", value: "3.5 – 10 bar" },
                  { label: "Temperature", value: "-20°C to +85°C" },
                  { label: "Protection", value: "IP66 / IP67" },
                ].map(({ label, value }) => (
                  <Box key={label}>
                    <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1 }}>
                      {label}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>
                      {value}
                    </Typography>
                  </Box>
                ))}
              </Box>

             <Box sx={{ display: 'flex', gap: 2 }}>
  <Button
    variant="outlined"
    size="large"
    fullWidth
    href="/pneumatic/actuators/hd/products"
    onClick={e => e.stopPropagation()}
    sx={{
      borderRadius: 0,
      fontWeight: 800,
      py: 1.75,
      fontSize: "1rem",
      boxShadow: "none",
      borderColor: "#1c2e1a",
      color: "#1c2e1a",
      "&:hover": { borderColor: "primary.main", color: "primary.main", boxShadow: "none" },
    }}
  >
    View Product
  </Button>
  <Button
    variant="contained"
    size="large"
    fullWidth
    startIcon={<ContactSupportIcon />}
    onClick={() => setModalOpen(true)}
    sx={{
      borderRadius: 0,
      fontWeight: 800,
      py: 1.75,
      fontSize: "1rem",
      boxShadow: "none",
      bgcolor: "#1c2e1a",
      "&:hover": { bgcolor: "primary.main", boxShadow: "none" },
    }}
  >
    Request a Quote / Lead Time
  </Button>
</Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* ── Technical Specifications ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>
            Technical Specifications
          </Typography>
          <Grid container spacing={2}>
            {TECH_SPECS.map(({ label, value }) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={label}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%" }}>
                  <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1.5 }}>
                    {label}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700, mt: 0.5 }}>
                    {value}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* ── Features ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>
            Key Features
          </Typography>
          <Grid container spacing={3}>
            {FEATURES.map(({ letter, title, body }) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={letter}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%", display: "flex", gap: 2 }}>
                  <Box
                    sx={{
                      flexShrink: 0,
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {letter}
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>
                      {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                      {body}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <TrustStrip points={TRUST_POINTS} />

      <RFQModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        product={HD_PRODUCT}
      />
    </>
  );
}