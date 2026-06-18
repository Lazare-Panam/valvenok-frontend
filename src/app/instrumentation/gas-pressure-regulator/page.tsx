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
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import RFQModal from "@/src/app/Common/RFQCard/RFQModal";
import { ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";

const GAS_REG_PRODUCT: ProductForRFQ = {
  id: "gas-pressure-regulators",
  name: "Gas Pressure Regulators — Pietro Fiorentini",
  brand: "Pietro Fiorentini",
  category: "Gas Pressure Regulators",
  categoryId: "gas-pressure-regulators",
  subCategory: "Direct Operated",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/gas-regulator/staflux-187.jpg",
  description:
    "Pietro Fiorentini direct-operated gas pressure regulators for high-pressure transmission and medium pressure natural gas distribution. Fail Open per EN 334. Hydrogen Ready versions available.",
  keySpecs: [
    { label: "Models", value: "Dival 160 AP · Staflux 185 · 187 · Mini" },
    { label: "Design Pressure", value: "Up to 250 bar" },
    { label: "Inlet Pressure", value: "Up to 250 bar" },
    { label: "Standard", value: "EN 334 — Fail Open" },
  ],
  variantInfo: {
    count: 4,
    sizeRange: "DN 1",
  },
};

const TECH_SPECS = [
  {
    label: "Models",
    value: "Dival 160 AP, Staflux 185, Staflux 187, Staflux Mini",
  },
  { label: "Type", value: "Direct Operated — Diaphragm Controlled" },
  { label: "Fail Mode", value: "Fail Open (EN 334)" },
  { label: "Nominal Sizes", value: 'DN 1", 2", 3" (model dependent)' },
  { label: "Design Pressure", value: "Up to 250 bar (Staflux 187)" },
  { label: "Inlet Pressure", value: "1.4 – 250 bar (model dependent)" },
  { label: "Outlet Pressure", value: "0.85 – 75 bar (model dependent)" },
  { label: "Design Temperature", value: "-20°C to +60°C" },
  { label: "Accuracy Class", value: "AC up to 5" },
  { label: "Lock-Up Class", value: "SG up to 10" },
  { label: "Connections", value: "ASME B16.5 Class 300, 600, 1500 RF / RTJ" },
  { label: "Standard", value: "EN 334" },
];

const FEATURES = [
  {
    letter: "A",
    title: "Direct Operated",
    body: "Diaphragm-controlled with contrasting regulated spring action — simple, reliable, low maintenance.",
  },
  {
    letter: "B",
    title: "Fail Open",
    body: "Classified Fail Open per European Standard EN 334 for safe operation in transmission and distribution networks.",
  },
  {
    letter: "C",
    title: "High Pressure Range",
    body: "Staflux 187 handles inlet pressures up to 250 bar with Class 1500 RF/RTJ flanged connections.",
  },
  {
    letter: "D",
    title: "Wide Size Range",
    body: 'Available in DN 1", 2", and 3" depending on model — covering a broad range of flow capacities.',
  },
  {
    letter: "E",
    title: "Hydrogen Ready",
    body: "Dival 160 AP and Staflux 187 are Hydrogen Ready for NG-H2 blending service.",
  },
  {
    letter: "F",
    title: "100% H2 Option",
    body: "Staflux 187 has a dedicated 100% hydrogen version for pure hydrogen pipeline applications.",
  },
  {
    letter: "G",
    title: "Anti-Freeze Design",
    body: "ATF 15 uses main gas flow to warm the laminating seat, preventing freezing during pressure reduction.",
  },
  {
    letter: "H",
    title: "Biomethane Compatible",
    body: "Available in specific versions compatible with biomethane and renewable gas service.",
  },
  {
    letter: "I",
    title: "Slam Shut Option",
    body: "Slam shut safety device configuration available on Dival 160 AP and Staflux 185.",
  },
  {
    letter: "J",
    title: "Spring Set Point Adjustment",
    body: "Set point adjustment via a setting nut — loading and unloading the spring in the top chamber.",
  },
  {
    letter: "K",
    title: "Pietro Fiorentini Quality",
    body: "Engineered and manufactured by Pietro Fiorentini — operating in over 100 countries since 1940.",
  },
];

const TRUST_POINTS = [
  { value: "Up to 250 bar", label: "Max Design Pressure" },
  { value: "EN 334", label: "Design Standard" },
  { value: "Fail Open", label: "Safety Classification" },
  { value: "H2 Ready", label: "Hydrogen Compatible" },
  { value: "4 Models", label: "Product Range" },
];

const CERTIFICATIONS = [
  "EN 334",
  "Fail Open",
  "H2 Ready",
  "ASME B16.5",
  "Biomethane Compatible",
];

export default function GasPressureRegulatorsPage() {
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/gas-regulator/staflux-187.jpg"
                  alt="Gas Pressure Regulators — Pietro Fiorentini"
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
                Gas Products / Pressure Regulators
              </Typography>

              <Typography
                variant="h3"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                Gas Pressure Regulators
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Direct Operated — Pietro Fiorentini
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Pietro Fiorentini direct-operated gas pressure regulators
                engineered for high-pressure transmission systems and medium
                pressure natural gas distribution networks.
                Diaphragm-controlled, classified Fail Open per EN 334. Hydrogen
                Ready versions available across the range — Dival 160 AP,
                Staflux 185, Staflux 187, and Staflux Mini.
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
                  { label: "Design Pressure", value: "Up to 250 bar" },
                  { label: "Inlet Pressure", value: "Up to 250 bar" },
                  { label: "Outlet Pressure", value: "0.85 – 75 bar" },
                  { label: "Temperature", value: "-20°C to +60°C" },
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
                  href="/instrumentation/gas-pressure-regulator/products"
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
                  View Products
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
        product={GAS_REG_PRODUCT}
      />
    </>
  );
}
