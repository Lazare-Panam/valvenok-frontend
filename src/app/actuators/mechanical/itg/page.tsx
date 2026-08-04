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

const ITG_PRODUCT: ProductForRFQ = {
  id: "itg-series",
  name: "ITG Series Industrial Gear Actuator",
  brand: "Valvenok",
  category: "Mechanical Actuators",
  categoryId: "mechanical-actuators",
  subCategory: "Worm Gear",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/mechanical/itg.webp",
  description:
    "Precision-engineered ITG Series gear actuators for quarter-turn valve automation. 60–28,000 Nm torque, IP67M, ISO 5211/5210 mount, declutchable manual override.",
  keySpecs: [
    { label: "Torque", value: "60 – 28,000 Nm" },
    { label: "Stroke Adjustment", value: "±5°" },
    { label: "IP Rating", value: "IP54 / IP55 / IP65 / IP67M" },
    { label: "Temperature", value: "-20°C to +85°C" },
  ],
  variantInfo: {
    count: 1,
    sizeRange: "ITG Series",
  },
};

const TECH_SPECS = [
  {
    label: "Output Torque Range",
    value: "60 – 28,000 Nm (with gear reduction attachment)",
  },
  { label: "Stroke Adjustment", value: "±5°" },
  { label: "IP Rating", value: "IP54 / IP55 / IP65 / IP67M" },
  { label: "Standard Temp Range", value: "-20°C to +85°C" },
  { label: "Low Temp Option", value: "-45°C" },
  { label: "High Temp Option", value: "Up to +120°C" },
  { label: "Housing", value: "Ductile Iron (Cast Iron Optional)" },
  { label: "Input Shaft", value: "Steel (Stainless Steel Optional)" },
  { label: "Bearings", value: "Heavy-Duty Precision Bearing Construction" },
  { label: "Coating", value: "Epoxy + PU Housing, Powder Coated Handwheel" },
  { label: "Air Relief", value: "Integrated Air Relief System" },
  {
    label: "MOV Flange",
    value: "ISO 5210 compatible for electrical actuators",
  },
  { label: "Manual Override", value: "Declutchable engage/disengage system" },
  { label: "Mounting Standard", value: "ISO 5211 / ISO 5210" },
];

const FEATURES = [
  {
    number: "1",
    title: "Wide Torque Range",
    body: "Covers output torque from 60 Nm up to 28,000 Nm, supporting a wide range of valve sizes and actuation requirements.",
  },
  {
    number: "2",
    title: "Declutchable Manual Override",
    body: "Integrated declutch mechanism enables smooth and safe transition between automatic actuation and manual operation.",
  },
  {
    number: "3",
    title: "Rugged Heavy-Duty Construction",
    body: "Manufactured using high-strength components for reliable performance in demanding industrial environments.",
  },
  {
    number: "4",
    title: "Extended Temperature Capability",
    body: "Standard operating range from -20°C to +85°C, with low-temperature option down to -45°C and high-temperature option up to +120°C.",
  },
  {
    number: "5",
    title: "Enhanced Environmental Protection",
    body: "Available with IP54, IP55, IP65, and IP67M enclosure ratings for dust, water, and immersion resistance.",
  },
  {
    number: "6",
    title: "Universal ISO Mounting",
    body: "Designed for direct mounting between valve and actuator using ISO 5211 / ISO 5210 interfaces.",
  },
  {
    number: "7",
    title: "Actuator Integration Ready",
    body: "Fully compatible with pneumatic (double-acting & spring return), hydraulic, and electric actuators.",
  },
  {
    number: "8",
    title: "Ergonomic Handwheel Operation",
    body: "Optimized handwheel design with multiple size options ensures smooth manual operation and reduced rim pull effort.",
  },
  {
    number: "9",
    title: "Global Support & Engineering",
    body: "Backed by global manufacturing and service presence, ensuring fast delivery, customization, and reliable technical support.",
  },
];

const APPLICATIONS = [
  {
    sector: "Oil & Gas",
    items:
      "Ball, butterfly, and plug valves in hazardous and high-pressure environments.",
  },
  {
    sector: "Power Generation",
    items:
      "Quarter-turn valve automation for turbines, boilers, and BOP systems.",
  },
  {
    sector: "Water & Wastewater",
    items: "Desalination, reverse osmosis, and filtration systems.",
  },
  {
    sector: "Chemical & Petrochemical",
    items: "Corrosive and explosive process media handling.",
  },
];

const TRUST_POINTS = [
  { value: "28,000 Nm", label: "Max Torque" },
  { value: "IP67M", label: "Ingress Protection" },
  { value: "±5°", label: "Stroke Adjustment" },
  { value: "ISO 5211", label: "Mounting Standard" },
  { value: "-45°C", label: "Low Temp Option" },
];

const CERTIFICATIONS = [
  "IP67M",
  "IP65",
  "ISO 5211",
  "ISO 5210",
  "Ductile Iron",
  "SS Options",
];

export default function ITGPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── Hero ── */}
      <Box
        sx={{
          bgcolor: "background.default",
          pt: { xs: 6, md: 10 },
          pb: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/mechanical/itg.webp"
                  alt="ITG Series Gear Actuator"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    p: 3,
                  }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                  letterSpacing: 2,
                }}
              >
                Mechanical Actuators / ITG Series
              </Typography>
              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                ITG Series
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Industrial Gear Actuator — Quarter-Turn
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Precision-engineered for quarter-turn valve automation,
                combining robust construction with high mechanical efficiency.
                Designed for ball, butterfly, and plug valves, delivering
                self-locking torque with minimal noise and vibration.
                Hard-anodized aluminum housing, IP67M protection, and ISO 5211
                mounting as standard — with a declutchable manual override for
                safe and reliable operation across all industrial environments.
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
                  { label: "Torque", value: "60 – 28,000 Nm" },
                  { label: "Stroke", value: "±5° Adjustment" },
                  { label: "Protection", value: "Up to IP67M" },
                  { label: "Temperature", value: "-20°C to +85°C" },
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
                  href="/actuators/mechanical/itg/products"
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

      {/* ── Tech Specs ── */}
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

      {/* ── Applications ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>
            Applications
          </Typography>
          <Grid container spacing={3}>
            {APPLICATIONS.map(({ sector, items }) => (
              <Grid size={{ xs: 12, sm: 6 }} key={sector}>
                <Paper
                  variant="outlined"
                  sx={{ p: 3, borderRadius: 2, height: "100%" }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "primary.main",
                      textTransform: "uppercase",
                      letterSpacing: 1.5,
                      fontWeight: 700,
                    }}
                  >
                    {sector}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mt: 1, lineHeight: 1.7 }}
                  >
                    {items}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* ── Features ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>
            Key Features
          </Typography>
          <Grid container spacing={3}>
            {FEATURES.map(({ number, title, body }) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={number}>
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
                    {number}
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
        product={ITG_PRODUCT}
      />
    </>
  );
}
