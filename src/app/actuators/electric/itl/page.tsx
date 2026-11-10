"use client";

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

const ITL_PRODUCT: ProductForRFQ = {
  id: "itl-series",
  name: "ITL Series Compact Linear Electric Actuator",
  brand: "Valvenok",
  category: "Electric Actuators",
  categoryId: "electric-actuators",
  subCategory: "Linear Electric",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itl.webp",
  description:
    "Compact linear electric actuators with 100% duty cycle motor. 1–6 kN thrust, IP66/67, universal power supply, 4–20mA / 0–10V control.",
  keySpecs: [
    { label: "Thrust", value: "1 – 6 kN" },
    { label: "Stroke", value: "15 – 50 mm" },
    { label: "Duty Cycle", value: "100% Continuous" },
    { label: "Protection", value: "IP66 / IP67" },
  ],
  variantInfo: {
    count: 1,
    sizeRange: "ITL Series",
  },
};

const TECH_SPECS = [
  { label: "Thrust Force", value: "1.0 – 6.0 kN (ITL01 to ITL06)" },
  { label: "Stroke Range", value: "15 – 50 mm (model dependent)" },
  { label: "Speed", value: "0.80 – 1.20 mm/sec" },
  {
    label: "Power Supply",
    value: "AC 100–240V Universal / DC24V / 110V / 220V / 380V / 440V",
  },
  { label: "Rated Current (220VAC)", value: "0.5 – 1.9 A (model dependent)" },
  { label: "Duty Cycle (On-Off)", value: "Continuous / S2 30 min" },
  {
    label: "Duty Cycle (Modulating)",
    value: "1200 starts/hr (ITL01/02) / S4 50% (others)",
  },
  {
    label: "Control Signal",
    value: "4–20mA, 0–10VDC, 2–10VDC, 1–5VDC (optional)",
  },
  { label: "Limit Switches", value: "2× open & close (SPDT)" },
  { label: "Enclosure", value: "IP66 / IP67 (model dependent)" },
  { label: "Ambient Temperature", value: "-20°C to +70°C" },
  { label: "Materials", value: "Aluminum die casting" },
  { label: "Cable Entries", value: "PF1/2 or PF3/4 / M20×1.5 / NPT" },
  { label: "Mounting Direction", value: "90° (multi-position optional)" },
  { label: "Applicable Valve", value: "2-way / 3-way" },
  { label: "Weight", value: "4.5 – 16 kgf (model dependent)" },
  { label: "Certifications", value: "CE / IEC / ISO 9001" },
];

const FEATURES = [
  {
    letter: "A",
    title: "100% Duty Cycle Motor",
    body: "Continuous operation without overheating — suitable for high-frequency modulating process applications.",
  },
  {
    letter: "B",
    title: "High Mechanical Strength",
    body: "Heavy-duty gear train and linear drive ensure long service life even under sustained high load.",
  },
  {
    letter: "C",
    title: "Flexible Control Integration",
    body: "Supports 4–20mA, 0–10V, 2–10V and digital feedback for seamless automation system integration.",
  },
  {
    letter: "D",
    title: "Advanced Environmental Protection",
    body: "IP66/IP67 rated for harsh outdoor, washdown and demanding industrial environments.",
  },
  {
    letter: "E",
    title: "Smooth & Quiet Operation",
    body: "Low-noise AC motor with optimized gearbox design for precision, reliable and quiet actuation.",
  },
  {
    letter: "F",
    title: "Industrial Thermal Protection",
    body: "Built-in thermal protector prevents motor overheating during prolonged or continuous operation.",
  },
];

const TRUST_POINTS = [
  { value: "1–6 kN", label: "Thrust Range" },
  { value: "100%", label: "Duty Cycle" },
  { value: "IP66/67", label: "Ingress Protection" },
  { value: "1200 c/h", label: "Max Modulating Rate" },
  { value: "Universal", label: "Power Supply" },
];

const CERTIFICATIONS = [
  "IP66",
  "IP67",
  "CE",
  "ISO 9001",
  "IEC Compliant",
  "100% Duty Cycle",
];

export default function ITLPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── Product Hero ── */}
      <Box
        sx={{
          bgcolor: "background.default",
          pt: { xs: 6, md: 10 },
          pb: { xs: 6, md: 8 },
        }}
      >
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itl.webp"
                  alt="ITL Series Compact Linear Electric Actuator"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    p: 3,
                  }}
                />
              </Box>
            </Grid>

            {/* Details */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                  letterSpacing: 2,
                }}
              >
                Electric Actuators / ITL Series
              </Typography>

              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                ITL Series
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Compact Linear Electric Actuator — 100% Duty Cycle
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Compact and powerful linear electric actuators built for
                high-frequency modulating control in sophisticated automation
                systems. 100% continuous duty cycle motor, 1–6 kN thrust,
                IP66/67 protection and universal power supply support —
                engineered for demanding process automation and control valve
                applications.
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

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 2,
                  mb: 4,
                }}
              >
                {[
                  { label: "Thrust", value: "1 – 6 kN" },
                  { label: "Stroke", value: "15 – 50 mm" },
                  { label: "Duty Cycle", value: "100% Continuous" },
                  { label: "Protection", value: "IP66 / IP67" },
                ].map(({ label, value }) => (
                  <Box key={label}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        textTransform: "uppercase",
                        letterSpacing: 1,
                      }}
                    >
                      {label}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>
                      {value}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="outlined"
                  size="large"
                  fullWidth
                  href="/actuators/electric/itl/products"
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    borderRadius: 0,
                    fontWeight: 800,
                    py: 1.75,
                    fontSize: "1rem",
                    boxShadow: "none",
                    borderColor: "#1c2e1a",
                    color: "#1c2e1a",
                    "&:hover": {
                      borderColor: "primary.main",
                      color: "primary.main",
                      boxShadow: "none",
                    },
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
                <Paper
                  variant="outlined"
                  sx={{ p: 3, borderRadius: 2, height: "100%" }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      textTransform: "uppercase",
                      letterSpacing: 1.5,
                    }}
                  >
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
                <Paper
                  variant="outlined"
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    height: "100%",
                    display: "flex",
                    gap: 2,
                  }}
                >
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
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 700, mb: 0.5 }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", lineHeight: 1.6 }}
                    >
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
        product={ITL_PRODUCT}
      />
    </>
  );
}
