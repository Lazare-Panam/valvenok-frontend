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

const MPLDS_PRODUCT: ProductForRFQ = {
  id: "mplds-series",
  name: "MPLDS Series Micro Pneumatic Double Acting Linear Actuator",
  brand: "Valvenok",
  category: "Pneumatic Actuators",
  categoryId: "pneumatic-actuators",
  subCategory: "Micro Linear Cylinders",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/mplds.webp",
  description:
    "Compact double-acting pneumatic linear actuators for fine automation and precise linear motion in tight spaces. IP66, modular design, positioner and solenoid ready.",
  keySpecs: [
    { label: "Pressure", value: "2.1 – 6.2 bar (30–90 PSIG)" },
    { label: "Temperature", value: "-10°C to +60°C" },
    { label: "Protection", value: "IP66" },
    { label: "Mechanism", value: "Double Acting" },
  ],
  variantInfo: {
    count: 1,
    sizeRange: "MPLDS Series",
  },
};

const TECH_SPECS = [
  {
    label: "Actuation Mechanism",
    value: "Double Acting — controlled motion in both directions",
  },
  { label: "Operating Pressure", value: "2.1 – 6.2 bar (30 – 90 PSIG)" },
  { label: "High-Pressure Option", value: "Up to 8 bar" },
  { label: "Temperature Range", value: "-10°C to +60°C" },
  { label: "Extended Temp Option", value: "-20°C to +80°C" },
  { label: "Ingress Protection", value: "IP66" },
  { label: "Design", value: "Compact modular — optimized for tight spaces" },
  {
    label: "Construction",
    value: "High-quality durable materials for long service life",
  },
  {
    label: "Manual Override",
    value: "Optional handwheel or hydraulic override",
  },
  {
    label: "Control Options",
    value: "Positioners, limit switches, solenoid valves",
  },
  {
    label: "Mounting",
    value: "Custom mounting dimensions available on request",
  },
  { label: "Status", value: "Certified — Industrial Grade" },
];

const FEATURES = [
  {
    letter: "A",
    title: "Compact Design",
    body: "Optimized for tight spaces and miniature automation equipment.",
  },
  {
    letter: "B",
    title: "IP66 Protection",
    body: "Fully sealed body prevents dust and water ingress in challenging environments.",
  },
  {
    letter: "C",
    title: "Double Acting Mechanism",
    body: "Provides controlled motion in both stroke directions for precise functionality.",
  },
  {
    letter: "D",
    title: "High-Quality Build",
    body: "Durable construction ensures long service life and consistent performance.",
  },
  {
    letter: "E",
    title: "Modular Design",
    body: "Supports easy maintenance, installation, and customization — reducing downtime.",
  },
  {
    letter: "F",
    title: "Wide Pressure Range",
    body: "Operates between 30–90 PSIG to meet varied automation requirements.",
  },
  {
    letter: "G",
    title: "Temperature Flexibility",
    body: "Optional high and low temperature trims for harsh or specialized environments.",
  },
  {
    letter: "H",
    title: "Multiple Control Options",
    body: "Supports solenoids, limit switches, positioners, and micro-automation accessories.",
  },
  {
    letter: "I",
    title: "Manual Overrides",
    body: "Optional handwheel or hydraulic override available for emergency operation.",
  },
];

const TRUST_POINTS = [
  { value: "IP66", label: "Ingress Protection" },
  { value: "30–90 PSIG", label: "Operating Pressure" },
  { value: "Up to 8 bar", label: "High-Pressure Option" },
  { value: "Modular", label: "Design Architecture" },
  { value: "Positioner Ready", label: "Control Options" },
];

const CERTIFICATIONS = [
  "IP66",
  "Double Acting",
  "Modular Design",
  "Positioner Ready",
  "Solenoid Compatible",
  "Override Options",
];

export default function MPLDSPage() {
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/mplds.webp"
                  alt="MPLDS Series Micro Pneumatic Double Acting Linear Actuator"
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
                Pneumatic Actuators / MPLDS Series
              </Typography>

              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                MPLDS Series
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Micro Pneumatic Double Acting Linear Actuator
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Compact double-acting pneumatic linear actuators designed for
                fine automation and precise linear motion in space-constrained
                environments. Modular construction, IP66 protection, and full
                support for positioners, solenoids and limit switches.
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
                  { label: "Pressure", value: "2.1 – 6.2 bar" },
                  { label: "Protection", value: "IP66" },
                  { label: "Temperature", value: "-10°C to +60°C" },
                  { label: "High-P Option", value: "Up to 8 bar" },
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
        product={MPLDS_PRODUCT}
      />
    </>
  );
}
