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

const MAB_PRODUCT: ProductForRFQ = {
  id: "mab-series",
  name: "MAB Series Mechanical Bevel Gear Actuator",
  brand: "Valvenok",
  category: "Mechanical Actuators",
  categoryId: "mechanical-actuators",
  subCategory: "Bevel Gear",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/mechanical/mab.webp",
  description:
    "Heavy-duty bevel gear actuators for multi-turn valve operation. 250–18,000 Nm torque, 75–2,500 kN thrust, IP68, ISO 5210 mount, marine coating options.",
  keySpecs: [
    { label: "Torque", value: "250 – 18,000 Nm" },
    { label: "Thrust", value: "75 – 2,500 kN" },
    { label: "Protection", value: "IP55 / IP65 / IP67M / IP68" },
    { label: "Temperature", value: "-20°C to +80°C" },
  ],
  variantInfo: {
    count: 1,
    sizeRange: "MAB Series",
  },
};

const TECH_SPECS = [
  {
    label: "Output Torque Range",
    value: "250 – 18,000 Nm (with gear reduction attachment)",
  },
  {
    label: "Output Thrust Range",
    value: "75 – 2,500 kN (with thrust attachment)",
  },
  { label: "IP Rating", value: "IP55 / IP65 / IP67M / IP68" },
  { label: "Standard Temp Range", value: "-20°C to +80°C" },
  { label: "Low Temp Option", value: "-45°C to +100°C" },
  { label: "High Temp Option", value: "-70°C to +120°C" },
  { label: "Housing", value: "Ductile iron (standard) / Cast iron (optional)" },
  {
    label: "Input Shaft",
    value: "Steel (standard) / Stainless steel (optional)",
  },
  {
    label: "Bearing Construction",
    value: "Heavy-duty thrust bearings for high axial load",
  },
  { label: "Coating", value: "Epoxy & PU coating — powder-coated handwheel" },
  {
    label: "Marine Protection",
    value: "Multi-layer painting system for marine/offshore",
  },
  { label: "Mounting Standard", value: "ISO 5210 valve mounting interface" },
  { label: "Handwheel", value: "Powder-coated steel handwheel (standard)" },
  {
    label: "Application",
    value: "Multi-turn gate, globe, plug and linear valves",
  },
];

const FEATURES = [
  {
    number: "1",
    title: "Wide Torque Range",
    body: "Broad output torque coverage from 250 Nm up to 18,000 Nm using gear reduction attachments.",
  },
  {
    number: "2",
    title: "High Thrust Capability",
    body: "Handles high axial loads from 75 kN up to 2,500 kN with thrust base attachments.",
  },
  {
    number: "3",
    title: "Heavy-Duty Construction",
    body: "Robust ductile iron or cast iron housing with heavy-duty thrust bearings for long service life.",
  },
  {
    number: "4",
    title: "Flexible ISO Mounting",
    body: "ISO 5210 compatible valve mounting with multiple standard and optional flange configurations.",
  },
  {
    number: "5",
    title: "Advanced Corrosion Protection",
    body: "Epoxy & PU coated housing with optional marine and offshore multi-layer coating systems.",
  },
  {
    number: "6",
    title: "Precision Bevel Gear Design",
    body: "Low-backlash bevel gearing ensures smooth, accurate and reliable manual multi-turn operation.",
  },
];

const APPLICATIONS = [
  {
    sector: "Power & Process Generation",
    items: "Turbines, boilers, and BOP systems.",
  },
  { sector: "Oil & Gas", items: "Hazardous and high-pressure environments." },
  {
    sector: "Water & Wastewater",
    items: "Desalination, RO and filtration systems.",
  },
  {
    sector: "Chemical & Petrochemical",
    items: "Corrosive and explosive process media.",
  },
];

const TRUST_POINTS = [
  { value: "18,000 Nm", label: "Max Torque" },
  { value: "2,500 kN", label: "Max Thrust" },
  { value: "IP68", label: "Ingress Protection" },
  { value: "ISO 5210", label: "Mounting Standard" },
  { value: "Marine Ready", label: "Offshore Coating" },
];

const CERTIFICATIONS = [
  "IP68",
  "IP67M",
  "ISO 5210",
  "Marine Coating",
  "Ductile Iron",
  "SS Options",
];

export default function MABPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/mechanical/mab.webp"
                  alt="MAB Series Bevel Gear Actuator"
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
                Mechanical Actuators / MAB Series
              </Typography>
              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                MAB Series
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Mechanical Actuator Bevel — Multi-Turn Bevel Gear
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Heavy-duty bevel gear actuators providing reliable multi-turn
                operation for gate, globe and linear valves. Torque up to 18,000
                Nm and thrust up to 2,500 kN — ductile iron housing, IP68
                protection and marine coating options for critical valve
                stations in Oil & Gas and Power Generation facilities.
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
                  { label: "Torque", value: "250 – 18,000 Nm" },
                  { label: "Thrust", value: "75 – 2,500 kN" },
                  { label: "Protection", value: "Up to IP68" },
                  { label: "Temperature", value: "-20°C to +80°C" },
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
                  href="/actuators/mechanical/mab/products"
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
        product={MAB_PRODUCT}
      />
    </>
  );
}
