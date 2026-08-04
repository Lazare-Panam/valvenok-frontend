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

const IQL_PRODUCT: ProductForRFQ = {
  id: "iql-series",
  name: "IQL Series Linear Electric Actuator",
  brand: "Valvenok",
  category: "Electric Actuators",
  categoryId: "electric-actuators",
  subCategory: "Linear Electric",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/iql.webp",
  description:
    "Robust linear electric actuators for precise modulating control. 4–25 kN thrust, IP67, battery backup fail-safe, 4–20mA / 0–10V control.",
  keySpecs: [
    { label: "Thrust", value: "4 – 25 kN" },
    { label: "Stroke", value: "40 – 100 mm" },
    { label: "Protection", value: "IP67 / IP68 Optional" },
    { label: "Temperature", value: "-20°C to +70°C" },
  ],
  variantInfo: {
    count: 1,
    sizeRange: "IQL Series",
  },
};

const TECH_SPECS = [
  { label: "Thrust Range", value: "4 kN – 25 kN (model dependent)" },
  { label: "Stroke", value: "40 – 100 mm" },
  { label: "Positioning Speed", value: "0.7 – 0.83 mm/sec" },
  { label: "Power Supply", value: "24VDC; 110/220VAC 1Ph; 380/440VAC 3Ph" },
  { label: "Enclosure", value: "IP67 (EN 60529) — IP68 optional" },
  { label: "Ambient Temperature", value: "-20°C to +70°C" },
  { label: "Housing", value: "Aluminium alloy, hard anodized + epoxy coated" },
  { label: "Motor Protection", value: "Thermal switch, Class F insulation" },
  { label: "Operating Mode", value: "S2: 30 min max | S4: 50% ED" },
  { label: "Remote Control", value: "4–20mA, 0–10V, 2–10V, 1–5V, 0–5V" },
  { label: "Limit Switch", value: "SPDT 1× open & close (250VAC, 10A)" },
  { label: "Position Feedback", value: "0–1 kΩ potentiometer + 4–20mA output" },
  { label: "Battery Backup", value: "Fail-safe — open / close / stay put" },
  { label: "Manual Override", value: "Handwheel with declutchable lever" },
  { label: "Explosion Proof", value: "Ex d IIB T4 (available)" },
  { label: "Space Heater", value: "5W anti-condensation (110/220VAC)" },
  { label: "Cable Entry", value: '2 × 3/4" PF' },
  { label: "Weight", value: "7 – 22 kg (model dependent)" },
];

const FEATURES = [
  {
    letter: "A",
    title: "Robust Construction",
    body: "Aluminium alloy housing with hard anodized treatment and epoxy powder coating for long-term durability.",
  },
  {
    letter: "B",
    title: "High Thrust Output",
    body: "4–25 kN thrust force for reliable control of globe valves, gate valves and linear motion applications.",
  },
  {
    letter: "C",
    title: "Precision Linear Positioning",
    body: "Smooth, accurate linear movement ensures stable modulating performance and precise valve positioning.",
  },
  {
    letter: "D",
    title: "Wide Power Supply Options",
    body: "Supports 24VDC, single-phase 110/220VAC, and three-phase 380/440VAC for flexible installation.",
  },
  {
    letter: "E",
    title: "Manual Override",
    body: "Handwheel with switchable declutchable lever for safe manual operation during maintenance or power failure.",
  },
  {
    letter: "F",
    title: "High Safety & Protection",
    body: "Built-in thermal protection with Class F insulation and IP67 enclosure for harsh environment operation.",
  },
  {
    letter: "G",
    title: "Local & Remote Control",
    body: "Supports local control units and remote analog signals including 4–20mA and voltage inputs.",
  },
  {
    letter: "H",
    title: "Advanced Feedback",
    body: "Optional potentiometer, current transformer and position feedback for precise closed-loop control.",
  },
  {
    letter: "I",
    title: "Flexible Duty Cycles",
    body: "Designed for S2 and S4 duty cycles — suitable for intermittent and modulating operation.",
  },
  {
    letter: "J",
    title: "Easy Installation",
    body: "Compact design with standardized mounting dimensions simplifies installation and maintenance.",
  },
  {
    letter: "K",
    title: "Fail-Safe Backup",
    body: "Optional battery backup with selectable open, close or stay-put position on power loss.",
  },
  {
    letter: "L",
    title: "Explosion-Proof Option",
    body: "Ex d IIB T4 configuration available for hazardous area and classified zone applications.",
  },
];

const TRUST_POINTS = [
  { value: "4–25 kN", label: "Thrust Range" },
  { value: "IP67", label: "Ingress Protection" },
  { value: "Ex d IIB T4", label: "Hazardous Area Option" },
  { value: "Battery Backup", label: "Fail-Safe Operation" },
  { value: "4–20mA", label: "Modulating Control" },
];

const CERTIFICATIONS = [
  "IP67",
  "IP68 Optional",
  "CE",
  "ISO 9001",
  "Ex d IIB T4",
  "Class F Insulation",
];

export default function IQLPage() {
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/iql.webp"
                  alt="IQL Series Linear Electric Actuator"
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
                Electric Actuators / IQL Series
              </Typography>

              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                IQL Series
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Linear Electric Actuator
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Robust linear electric actuators engineered for precise
                modulating control of globe, gate valves and dampers. High
                thrust capacity from 4–25 kN, IP67 protection, battery backup
                fail-safe, and full modulating control via 4–20mA / 0–10V.
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
                  { label: "Thrust", value: "4 – 25 kN" },
                  { label: "Stroke", value: "40 – 100 mm" },
                  { label: "Protection", value: "IP67 / IP68" },
                  { label: "Temperature", value: "-20°C to +70°C" },
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
                  href="/actuators/electric/iql/products"
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
        product={IQL_PRODUCT}
      />
    </>
  );
}
