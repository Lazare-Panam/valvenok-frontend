
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

const TECH_SPECS = [
  { label: "Model No.", value: "UPC-MJTC-112" },
  { label: "Size", value: "15mm – 50mm" },
  { label: "Product Standard", value: "ISO 4064 / ISI" },
  { label: "Water Temperature", value: "< 50°C" },
  { label: "Water Pressure", value: "< 1.6 MPa (Class B)" },
  { label: "Type", value: "Multi-jet, Thread End, Brass Body" },
  { label: "Body Material", value: "Brass" },
  { label: "Connection", value: "Thread End" },
  { label: "Flow Type", value: "Multi-jet" },
  { label: "Marking", value: "15mm ISI Marked" },
  { label: "Pressure Class", value: "Class B" },
  { label: "Application", value: "Cold Water Metering" },
];

const FEATURES = [
  {
    letter: "A",
    title: "Multi-Jet Design",
    body: "Multiple inlet jets ensure balanced and accurate measurement across the full flow range.",
  },
  {
    letter: "B",
    title: "Low Pressure Loss",
    body: "Optimised internal geometry minimises pressure drop across the meter during operation.",
  },
  {
    letter: "C",
    title: "Lower Transmission Resistance",
    body: "Reduced mechanical resistance in the drive train ensures consistent, reliable readings over time.",
  },
  {
    letter: "D",
    title: "Long Working Life",
    body: "Brass body construction and quality internals deliver extended service life in demanding conditions.",
  },
  {
    letter: "E",
    title: "ISO 4064 / ISI Compliant",
    body: "Fully compliant with ISO 4064 metering accuracy standards and ISI marked at 15mm.",
  },
  {
    letter: "F",
    title: "Brass Body",
    body: "Robust brass body offers excellent corrosion resistance and durability for cold water applications.",
  },
];

const CERTIFICATIONS = [
  "ISO 4064",
  "ISI Marked",
  "Class B",
  "Multi-Jet",
  "Brass Body",
];

const TRUST_POINTS = [
  { value: "15–50mm", label: "Size Range" },
  { value: "ISO 4064", label: "Standard" },
  { value: "< 1.6 MPa", label: "Max Pressure" },
  { value: "< 50°C", label: "Max Temperature" },
  { value: "Class B", label: "Accuracy Class" },
];

export default function WaterMeterPage() {
  return (
    <>
      {/* Hero */}
      <Box sx={{ bgcolor: "background.default", pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/water-meter/mj-cold.webp"
                  alt="Multi-Jet Cold Water Meter"
                  sx={{ width: "100%", height: "100%", objectFit: "contain", p: 3 }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="overline"
                sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2 }}
              >
                Water Meters / Multi-Jet
              </Typography>

              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}>
                Multi-Jet Water Meter
              </Typography>
              <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}>
                UPC-MJTC-112 — Brass Body, Thread End
              </Typography>

              <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}>
                ISO 4064 and ISI compliant multi-jet cold water meter with brass body and thread end
                connections. Designed for low pressure loss, lower transmission resistance and long
                working life. Available in sizes 15mm to 50mm, rated to 1.6 MPa Class B. 15mm size
                is ISI marked.
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
                  { label: "Model", value: "UPC-MJTC-112" },
                  { label: "Size Range", value: "15mm – 50mm" },
                  { label: "Max Pressure", value: "< 1.6 MPa" },
                  { label: "Max Temperature", value: "< 50°C" },
                ].map(({ label, value }) => (
                  <Box key={label}>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1 }}
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
                  href="/instrumentation/water-meter/products"
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
                  View Products
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  startIcon={<ContactSupportIcon />}
                  href="mailto:sales@spacuk.co.uk?subject=Enquiry: Multi-Jet Cold Water Meter UPC-MJTC-112"
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
                  Request a Quote
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* Tech Specs */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>
            Technical Specifications
          </Typography>
          <Grid container spacing={2}>
            {TECH_SPECS.map(({ label, value }) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={label}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%" }}>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1.5 }}
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

      {/* Features */}
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
                  sx={{ p: 3, borderRadius: 2, height: "100%", display: "flex", gap: 2 }}
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

      <Divider />

      {/* Trust Strip */}
      <Box sx={{ bgcolor: "#4a9a3a", py: { xs: 4, md: 5 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(5, 1fr)" },
              gap: 3,
            }}
          >
            {TRUST_POINTS.map(({ value, label }) => (
              <Box key={label} sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 800, color: "#fff", lineHeight: 1.2 }}
                >
                  {value}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: 1 }}
                >
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}