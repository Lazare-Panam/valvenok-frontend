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

const ITQ_PRODUCT: ProductForRFQ = {
  id: "itq-series",
  name: "ITQ Series Rotary Electric Actuator",
  brand: "Valvenok",
  category: "Electric Actuators",
  categoryId: "electric-actuators",
  subCategory: "Rotary Electric",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itq.webp",
  description:
    "High-performance rotary electric actuators, 100–9000 Nm, IP67/NEMA 4X, double worm self-locking gear, ISO 5211 mount.",
  keySpecs: [
    { label: "Torque", value: "100 – 9,000 Nm" },
    { label: "Protection", value: "IP67 / NEMA 4X & 6" },
    { label: "Power Supply", value: "110/220VAC · 380/440VAC · 24VDC" },
    { label: "Temperature", value: "-20°C to +70°C" },
  ],
  variantInfo: {
    count: 1,
    sizeRange: "ITQ Series",
  },
};

const TECH_SPECS = [
  { label: "Enclosure", value: "IP67, NEMA 4X & 6 — O-ring sealed" },
  {
    label: "Main Power Supply",
    value: "110/220VAC/1Ph, 380/440VAC/3Ph ±10%, 24VDC",
  },
  { label: "Control Power Supply", value: "110/220VAC/1Ph/50/60Hz ±10%" },
  { label: "Duty Cycle (On-Off)", value: "S2: 10–30 min" },
  {
    label: "Duty Cycle (Modulating)",
    value: "S4, 30–50%, 300–1200 starts/hour",
  },
  { label: "Motor", value: "Squirrel cage induction motor" },
  { label: "Limit Switches", value: "2× Open & Close (SPDT 250VAC/10A)" },
  { label: "Torque Switches", value: "1× Open & Close (SPDT 250VAC/10A)" },
  {
    label: "Stall Protection",
    value: "Thermal — Open 150°C ±5°C, Close 97°C ±15°C",
  },
  { label: "Travel Angle", value: "90° ± 5° (0°–100°)" },
  { label: "Manual Override", value: "Auto-declutching handwheel" },
  { label: "Self Locking", value: "Double worm gearing (no brake required)" },
  { label: "Space Heater", value: "5W anti-condensation (110/220VAC)" },
  { label: "Ambient Temperature", value: "-20°C to +70°C standard" },
  { label: "Ambient Humidity", value: "90% RH Max (non-condensing)" },
  { label: "Anti-Vibration", value: "XYZ 10g, 02–34Hz, 30 minutes" },
  { label: "Cable Entries", value: "2 × PF 3/4" },
  { label: "Lubrication", value: "EP type grease" },
];

const FEATURES = [
  {
    letter: "A",
    title: "Compact & Robust Construction",
    body: "Compact lightweight design with robust construction delivering up to 9,000 Nm output torque.",
  },
  {
    letter: "B",
    title: "Wide Torque Range",
    body: "100 Nm to 9,000 Nm torque range to suit diverse valve automation requirements.",
  },
  {
    letter: "C",
    title: "Durable Housing",
    body: "Hard-anodized aluminum housing with epoxy powder coating for severe industrial environments.",
  },
  {
    letter: "D",
    title: "Superior Sealing",
    body: "Radial seals and O-rings provide IP67 waterproof protection (NEMA 4 & 6) as standard, optional IP68.",
  },
  {
    letter: "E",
    title: "ISO 5211 Mounting",
    body: "Mounting base per ISO 5211 standard for easy valve interface and installation.",
  },
  {
    letter: "F",
    title: "Precision Drive Bushing",
    body: "Removable drive bushing allows easy machining, mounting, and field maintenance.",
  },
  {
    letter: "G",
    title: "Self-Locking Gear",
    body: "Double worm gearing provides self-locking capability — no external brake required.",
  },
  {
    letter: "H",
    title: "Auto-Declutch Handwheel",
    body: "Auto-declutching manual override with pad-lockable auto/manual switch lever for safe operation.",
  },
  {
    letter: "I",
    title: "Mechanical Torque Protection",
    body: "Built-in mechanical torque sensing protects against overload conditions.",
  },
  {
    letter: "J",
    title: "Clear Position Indication",
    body: "Large window and continuous mechanical indicator provide clear valve position visibility.",
  },
  {
    letter: "K",
    title: "Flexible Local Control",
    body: "Multiple local position control options for easy commissioning and field operation.",
  },
  {
    letter: "L",
    title: "Digital Control Ready",
    body: "Supports digitalized control components for integration with modern automation systems.",
  },
  {
    letter: "M",
    title: "High-Efficiency Motor",
    body: "Induction motor with high starting torque, thermal protection and Class F insulation.",
  },
];

const TRUST_POINTS = [
  { value: "100–9,000 Nm", label: "Torque Range" },
  { value: "IP67", label: "Ingress Protection" },
  { value: "NEMA 4X & 6", label: "Enclosure Rating" },
  { value: "ISO 5211", label: "Mounting Standard" },
  { value: "Self-Locking", label: "Double Worm Gear" },
];

const CERTIFICATIONS = [
  "IP67",
  "NEMA 4X",
  "NEMA 6",
  "ISO 5211",
  "Class F Insulation",
  "Optional IP68",
];

export default function ITQPage() {
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itq.webp"
                  alt="ITQ Series Rotary Electric Actuator"
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
                Electric Actuators / ITQ Series
              </Typography>

              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                ITQ Series
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Rotary Electric Actuator
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                High-performance rotary electric actuators delivering 100–9,000
                Nm for demanding valve automation. Hard-anodized aluminum
                housing, IP67/NEMA 4X protection, double worm self-locking gear
                and auto-declutching handwheel — built for reliable operation
                across diverse industrial applications.
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
                  { label: "Torque", value: "100 – 9,000 Nm" },
                  { label: "Protection", value: "IP67 / NEMA 4X" },
                  { label: "Temperature", value: "-20°C to +70°C" },
                  { label: "Travel Angle", value: "90° ± 5°" },
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
        product={ITQ_PRODUCT}
      />
    </>
  );
}
