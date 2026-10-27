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

const ITS_PRODUCT: ProductForRFQ = {
  id: "its-series",
  name: "ITS Series Limit Switch Box",
  brand: "Susin",
  category: "Limit Switch Boxes",
  categoryId: "limit-switches",
  subCategory: "Precision Position Monitoring",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/limit-switches/susin-limit-switch.webp",
  description:
    "Precision position monitoring switches for rotary actuators. ATEX Ex d IIC T6, IECEx & CE certified. IP67/IP68, aluminium or stainless steel housing, 0°–90° visual dome indicator.",
  keySpecs: [
    { label: "Protection", value: "IP67 / IP68" },
    { label: "Certification", value: "ATEX / IECEx / CE" },
    { label: "Switch Type", value: "2-SPDT or Proximity" },
    { label: "Temperature", value: "-20°C to +80°C" },
  ],
  variantInfo: {
    count: 1,
    sizeRange: "ITS Series",
  },
};

const TECH_SPECS = [
  { label: "Protection Rating", value: "IP67 (standard) / IP68 (optional)" },
  { label: "Explosion-Proof", value: "ATEX Ex d IIC T6" },
  { label: "Certifications", value: "IECEx, CE, ISO 9001:2015" },
  {
    label: "Switch Configuration",
    value: "2 × SPDT Mechanical or Proximity Sensors",
  },
  {
    label: "Visual Indicator",
    value: "Dome indicator — 0° to 90° position travel",
  },
  {
    label: "Shaft Standard",
    value: "NAMUR standard shaft for actuator mounting",
  },
  { label: "Housing Material", value: "Aluminium alloy or Stainless Steel" },
  {
    label: "Surface Finish",
    value: "Corrosion-resistant epoxy-polyester coating",
  },
  { label: "Ambient Temperature", value: "-20°C to +80°C" },
  { label: "Cable Entry Options", value: "NPT, PF, M20" },
  { label: "Available Models", value: "ITS 100, ITS 300, ITS 500" },
  { label: "Manufacturer", value: "Susin Group (ISO 9001:2015 Certified)" },
];

const FEATURES = [
  {
    letter: "A",
    title: "ATEX Explosion-Proof",
    body: "ATEX Ex d IIC T6 certified for use in hazardous gas atmospheres — Zone 1 and Zone 2 classified areas in Oil & Gas and Chemical plants.",
  },
  {
    letter: "B",
    title: "IECEx & CE Certified",
    body: "Internationally recognized IECEx certification alongside CE marking for global project compliance and export.",
  },
  {
    letter: "C",
    title: "IP67 / IP68 Protection",
    body: "Standard IP67 with IP68 optional for installations requiring submersion protection in wet or wash-down environments.",
  },
  {
    letter: "D",
    title: "0°–90° Dome Indicator",
    body: "Clear visual dome indicator covering the full 0° to 90° valve travel range for instant on-site position confirmation.",
  },
  {
    letter: "E",
    title: "NAMUR Shaft Mounting",
    body: "NAMUR standard shaft ensures direct, tool-free mounting compatibility with all major pneumatic and electric actuator brands.",
  },
  {
    letter: "F",
    title: "Mechanical or Proximity",
    body: "2×SPDT mechanical switches for standard service; proximity sensor options for non-contact, high-cycle and EX ia applications.",
  },
  {
    letter: "G",
    title: "Aluminium or SS Housing",
    body: "Standard aluminium alloy housing with epoxy-polyester coating; stainless steel housing available for highly corrosive service.",
  },
  {
    letter: "H",
    title: "Wide Temperature Range",
    body: "Rated -20°C to +80°C for reliable operation across cold climate, tropical, and high-ambient process environments.",
  },
  {
    letter: "I",
    title: "Multiple Cable Entries",
    body: "NPT, PF, and M20 cable entry options to suit regional electrical installation standards and conduit systems.",
  },
  {
    letter: "J",
    title: "Three Model Sizes",
    body: "ITS 100, ITS 300, and ITS 500 cover the full range of actuator sizes from small quarter-turn to heavy-duty units.",
  },
];

const TRUST_POINTS = [
  { value: "IP67 / IP68", label: "Ingress Protection" },
  { value: "ATEX T6", label: "Explosion Proof" },
  { value: "IECEx & CE", label: "International Cert" },
  { value: "-20°C to +80°C", label: "Temperature Range" },
  { value: "UK Based", label: "Technical Support" },
];

const CERTIFICATIONS = [
  "IP67 / IP68",
  "ATEX Ex d IIC T6",
  "IECEx",
  "CE",
  "ISO 9001:2015",
];

export default function ITSPage() {
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/limit-switches/susin-limit-switch.webp"
                  alt="ITS Series Limit Switch Box"
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
                Limit Switch Boxes / ITS Series
              </Typography>

              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                ITS Series Components
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Precision Position Monitoring Switch Box
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                The ITS series from Susin are precision-engineered position
                monitoring switches for rotary actuators. ATEX Ex d IIC T6 and
                IECEx certified with a 0°–90° visual dome indicator, robust
                aluminium or stainless steel housing, and mechanical or
                proximity switch options for demanding process safety
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
                  { label: "Protection", value: "IP67 / IP68" },
                  { label: "Certification", value: "ATEX / IECEx / CE" },
                  { label: "Switch Type", value: "2-SPDT or Proximity" },
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
                  href="/actuators/limit-switches"
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
                  All Limit Switches
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
        product={ITS_PRODUCT}
      />
    </>
  );
}
