"use client";

import { useState } from "react";
import type { Metadata } from "next";
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
const PDS_PRODUCT: ProductForRFQ = {
  id: "pds-series",
  name: "PDS Series Scotch Yoke Pneumatic Actuator",
  brand: "Valvenok",
  category: "Pneumatic Actuators",
  categoryId: "pneumatic-actuators",
  subCategory: "Scotch Yoke",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/pdf.webp",
  description:
    "Scotch-Yoke pneumatic actuators engineered for superior break-out torque. Double acting and spring return, 10–4000 Nm, ATEX certified, SIL3 capable.",
  keySpecs: [
    { label: "Torque", value: "10 – 4,000 Nm" },
    { label: "Pressure", value: "2 – 8 bar" },
    { label: "Temperature", value: "-20°C to +80°C" },
    { label: "Certifications", value: "ATEX, SIL3, CE" },
  ],
  variantInfo: {
    count: 2,
    sizeRange: "PD / PS Series",
  },
};

const TECH_SPECS = [
  { label: "Output Torque", value: "10 – 4,000 Nm" },
  { label: "Operating Pressure", value: "2 – 8 bar (29 – 116 psi)" },
  { label: "Temperature Range", value: "-20°C to +80°C" },
  { label: "Standard Rotation", value: "90° (adjustable stops)" },
  { label: "Enclosure", value: "IP66 / IP67" },
  { label: "Air Consumption", value: "0.2 – 2.5 L/cycle" },
  { label: "Construction", value: "Anodized aluminum, SS internals" },
  { label: "Mounting", value: "ISO 5211 / NAMUR / VDI-VDE 3845" },
  { label: "Supply Medium", value: "Filtered dry air (5 µm)" },
  { label: "Cycle Life", value: "≥ 1,000,000 cycles" },
  { label: "Certifications", value: "ATEX, SIL2/3, CE" },
  { label: "Lubrication", value: "Pre-lubricated" },
];

const FEATURES = [
  {
    letter: "A",
    title: "Compact Design",
    body: "Double acting and single acting spring return configurations in a compact form factor.",
  },
  {
    letter: "B",
    title: "Scotch-Yoke Technology",
    body: "Higher torque at end positions for heavy-duty valve and damper automation.",
  },
  {
    letter: "C",
    title: "Spring Modules",
    body: "Multiple interchangeable spring modules for varied torque output and fail-safe requirements.",
  },
  {
    letter: "D",
    title: "Mounting Standards",
    body: "ISO 5211, DIN 3337, NAMUR and VDI/VDE 3845 compliant.",
  },
  {
    letter: "E",
    title: "Pre-Compressed Springs",
    body: "Pre-compressed at assembly for safe, controlled handling and installation.",
  },
  {
    letter: "F",
    title: "Certifications",
    body: "ATEX 2014/34/EU certified. SIL3 capable as a standalone device.",
  },
  {
    letter: "G",
    title: "Anodized Aluminum Body",
    body: "Hard-anodized aluminum for superior corrosion resistance and durability.",
  },
  {
    letter: "H",
    title: "Durability",
    body: "Rated for over 1 million cycles under harsh industrial conditions.",
  },
  {
    letter: "I",
    title: "Low Air Consumption",
    body: "Efficient pneumatic design reduces compressed air usage and operating costs.",
  },
  {
    letter: "J",
    title: "Accessory Ready",
    body: "Mounting provisions for solenoid valves, limit switches, and positioners.",
  },
  {
    letter: "K",
    title: "Customizable Drive Shaft",
    body: "Drive shaft shapes and sizes configurable for multiple valve stem types.",
  },
];

const TRUST_POINTS = [
  { value: "10–4,000 Nm", label: "Torque Range" },
  { value: "IP66/67", label: "Ingress Protection" },
  { value: "ATEX", label: "Hazardous Area Certified" },
  { value: "SIL3", label: "Safety Integrity Level" },
  { value: "1M+ Cycles", label: "Service Life" },
];

const CERTIFICATIONS = [
  "ATEX 2014/34/EU",
  "SIL3",
  "CE",
  "IP66/67",
  "ISO 5211",
  "NAMUR",
];

export default function PDSPage() {
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/pdf.webp"
                  alt="PDS Series Scotch Yoke Pneumatic Actuator"
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
                Pneumatic Actuators / PDS Series
              </Typography>

              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                PDS Series
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Scotch Yoke Pneumatic Rotary Actuator
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Advanced Scotch-Yoke technology delivering superior break-out
                torque for precise valve and damper control in the most
                demanding environments. Available in double acting (PD) and
                spring return (PS) configurations — torque outputs up to 4,000
                Nm.
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
                  { label: "Torque", value: "10 – 4,000 Nm" },
                  { label: "Pressure", value: "2 – 8 bar" },
                  { label: "Temperature", value: "-20°C to +80°C" },
                  { label: "Cycle Life", value: "≥ 1M cycles" },
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

              {/* RFQ Button */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="outlined"
                  size="large"
                  fullWidth
                  href="/pneumatic/actuators/pds/products"
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

      {/* ── Full Tech Specs ── */}
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

      {/* ── RFQ Modal ── */}
      <RFQModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        product={PDS_PRODUCT}
      />
    </>
  );
}
