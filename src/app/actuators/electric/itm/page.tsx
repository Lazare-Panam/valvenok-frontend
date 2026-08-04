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
import { ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";
import RFQModal from "@/src/app/Common/RFQCard/RFQModal";

const ITM_PRODUCT: ProductForRFQ = {
  id: "itm-series",
  name: "ITM Series Heavy-Duty Multi-Turn Electric Actuator",
  brand: "Valvenok",
  category: "Electric Actuators",
  categoryId: "electric-actuators",
  subCategory: "Multi-Turn Electric",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itm.webp",
  description:
    "Heavy-duty multi-turn electric actuators for gate, globe and sluice valves. IP68, Hall encoder feedback, TENV high-torque motor, Ex d IIC T4 optional.",
  keySpecs: [
    { label: "Type", value: "Multi-Turn" },
    { label: "Protection", value: "IP68 Waterproof" },
    { label: "Temperature", value: "-20°C to +70°C" },
    { label: "Position Feedback", value: "Hall Incremental Encoder" },
  ],
  variantInfo: {
    count: 1,
    sizeRange: "ITM Series",
  },
};

const TECH_SPECS = [
  {
    label: "Operation Type",
    value: "Multi-Turn — gate, globe & sluice valves",
  },
  {
    label: "Motor",
    value: "TENV high-torque startup motor, Class F insulation",
  },
  {
    label: "Voltage Tolerance",
    value: "±10% — detachable structure for easy service",
  },
  { label: "Thermal Protection", value: "Built-in thermal protector" },
  {
    label: "Reduction Gear",
    value: "Single-stage worm gear — high efficiency, low noise",
  },
  {
    label: "Position Feedback",
    value: "Hall incremental encoder — non-contact, no power needed",
  },
  {
    label: "Manual Override",
    value: "Top-mounted handwheel — auto re-engages on motor start",
  },
  {
    label: "Local Control",
    value: "LCD display, relay module, CPU module, waterproof panel",
  },
  {
    label: "Selector Switches",
    value: "Non-penetration — open/close, remote/stop/local",
  },
  {
    label: "Terminal Unit",
    value: "Double O-ring sealed — rigid external wiring support",
  },
  {
    label: "Thrust Unit",
    value: "Detachable — ductile housing, two drive-bushing types",
  },
  { label: "Lubrication", value: "Oil-lubricated worm gear (EP grade)" },
  { label: "Enclosure", value: "IP68 waterproof standard" },
  { label: "Explosion Proof", value: "Ex d IIC T4 optional" },
  { label: "Temperature Range", value: "-20°C to +70°C" },
  { label: "Cable Entries", value: "PF / NPT (model dependent)" },
];

const APPLICATIONS = [
  {
    sector: "Energy",
    items: "Petrochemical, Oil & Gas, Power Generation, District Heating",
  },
  {
    sector: "Water",
    items: "Filtration Plants, Sewage Systems, Pump Stations, Dams",
  },
  { sector: "Chemical", items: "Process Plants, Pharmaceutical Lines" },
  {
    sector: "Others",
    items: "Steel, Cement, Shipbuilding, Food Processing, HVAC",
  },
];

const FEATURES = [
  {
    letter: "A",
    title: "Multi-Turn High-Torque Output",
    body: "Handles gate and globe valves with large thrust and continuous-duty torque for multi-revolution operation.",
  },
  {
    letter: "B",
    title: "Intelligent Local Control",
    body: "LCD display, selector switches, phase protection, transformer and relay pack for smart field operation.",
  },
  {
    letter: "C",
    title: "Advanced Position Detection",
    body: "Hall incremental encoder retains accurate position even without external power supply.",
  },
  {
    letter: "D",
    title: "Rugged Mechanical Engineering",
    body: "High-strength worm gear, thrust bearing unit and detachable motor assembly built for long service life.",
  },
  {
    letter: "E",
    title: "Extreme Environment Ready",
    body: "IP68 sealing, wide thermal range and corrosion-resistant materials for the harshest industrial conditions.",
  },
];

const TRUST_POINTS = [
  { value: "IP68", label: "Ingress Protection" },
  { value: "Multi-Turn", label: "Operation Type" },
  { value: "Hall Encoder", label: "Position Feedback" },
  { value: "Ex d IIC T4", label: "Hazardous Area Option" },
  { value: "TENV Motor", label: "High-Torque Drive" },
];

const CERTIFICATIONS = [
  "IP68",
  "Ex d IIC T4 Optional",
  "Class F Insulation",
  "TENV Motor",
  "CE",
  "ISO 9001",
];

export default function ITMPage() {
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itm.webp"
                  alt="ITM Series Heavy-Duty Multi-Turn Electric Actuator"
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
                Electric Actuators / ITM Series
              </Typography>

              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                ITM Series
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Heavy-Duty Multi-Turn Electric Actuator
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Engineered for gate, globe and sluice valves requiring
                multi-revolution operation. Exceptional torque capability, IP68
                waterproof protection, Hall incremental encoder feedback and
                intelligent local control — built for Oil & Gas, Water
                Treatment, Petrochemical and heavy industrial environments.
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
                  { label: "Type", value: "Multi-Turn" },
                  { label: "Protection", value: "IP68" },
                  { label: "Temperature", value: "-20°C to +70°C" },
                  { label: "Feedback", value: "Hall Encoder" },
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
                  href="/actuators/electric/itm/products"
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

      {/* ── Applications by Sector ── */}
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
        product={ITM_PRODUCT}
      />
    </>
  );
}
