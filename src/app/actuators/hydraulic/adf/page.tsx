'use client';

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

const ADF_PRODUCT: ProductForRFQ = {
  id: "adf-series",
  name: "Electro-Hydraulic Rotary Actuator",
  brand: "Valvenok",
  category: "Hydraulic Actuators",
  categoryId: "hydraulic-actuators",
  subCategory: "Electro-Hydraulic Rotary",
  thumbnail: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/hydraulic/adf.webp",
  description: "Electro-hydraulic rotary actuators, 46–10,000 Nm, ATEX Zone 1 & 2, SIL 2/3, IP67/68. PANDA low-pressure and PA high-pressure variants.",
  keySpecs: [
    { label: "Torque", value: "46 – 10,000 Nm" },
    { label: "Pressure", value: "Up to 8 bar (PANDA) / 180 bar (PA)" },
    { label: "Protection", value: "IP67 / IP68" },
    { label: "Certifications", value: "ATEX Zone 1 & 2, SIL 2/3" },
  ],
  variantInfo: {
    count: 2,
    sizeRange: "PANDA / PA Series",
  },
};

const TECH_SPECS = [
  { label: "Operating Principle", value: "Electro-hydraulic compact power unit" },
  { label: "Torque Range", value: "46 Nm – 10,000 Nm (higher on request)" },
  { label: "Low Pressure (PANDA)", value: "Up to 8 bar" },
  { label: "High Pressure (PA)", value: "Up to 180 bar" },
  { label: "Actuator Type", value: "Part-turn — quarter-turn 90°" },
  { label: "Rotation Angle", value: "90° (adjustable mechanical stops)" },
  { label: "Control Type", value: "On/Off or Modulating" },
  { label: "Fail-Safe", value: "Spring return or hydraulic accumulator" },
  { label: "Hydraulic Medium", value: "HLP oil, filtered ≥ 10 µm" },
  { label: "Motor Voltage", value: "230V AC / 400V AC, 50/60 Hz" },
  { label: "Power Consumption", value: "180 W – 750 W (model dependent)" },
  { label: "Ingress Protection", value: "IP67 / IP68" },
  { label: "Ambient Temperature", value: "-20°C to +50°C" },
  { label: "Explosion Protection", value: "ATEX Zone 1 & 2" },
  { label: "Mounting Standard", value: "ISO 5211 / NAMUR" },
  { label: "Piping", value: "Block construction — no external piping required" },
  { label: "Safety", value: "SIL 2 / SIL 3 configurable" },
  { label: "Service Life", value: "Near wear-free — oil-lubricated components" },
];

const FEATURES = [
  { letter: "A", title: "Electro-Hydraulic Design", body: "Integrated hydraulic power unit with electric motor for compact and highly efficient operation." },
  { letter: "B", title: "High Torque Density", body: "Delivers very high torque in compact dimensions without the need for gearboxes or external piping." },
  { letter: "C", title: "Fail-Safe Operation", body: "Spring return or hydraulic accumulator ensures safe valve position on power loss." },
  { letter: "D", title: "Low & High Pressure Variants", body: "PANDA series replaces pneumatic actuators at low pressure; PA series handles extreme high-pressure heavy-duty applications." },
  { letter: "E", title: "Minimal Wear", body: "All mechanically stressed components are continuously oil-lubricated for exceptional service life." },
  { letter: "F", title: "Hazardous Area Ready", body: "ATEX Zone 1 & 2 certified for use in explosive and classified industrial environments." },
  { letter: "G", title: "Efficient Energy Use", body: "No gearbox losses — hydraulic transmission ensures high efficiency and minimal power consumption." },
  { letter: "H", title: "Outdoor & Marine Ready", body: "Designed for outdoor installation, marine atmosphere, and offshore conditions." },
  { letter: "I", title: "Flexible Control", body: "Supports On/Off, modulating control, and optional onboard control panels." },
  { letter: "J", title: "Easy Integration", body: "ISO 5211 and NAMUR interface for direct valve mounting without additional adapters." },
];

const TRUST_POINTS = [
  { value: "10,000 Nm", label: "Max Torque" },
  { value: "ATEX Z1 & Z2", label: "Hazardous Area" },
  { value: "SIL 2/3", label: "Safety Integrity" },
  { value: "IP67/68", label: "Ingress Protection" },
  { value: "Wear-Free", label: "Oil-Lubricated Drive" },
];

const CERTIFICATIONS = ["ATEX Zone 1 & 2", "SIL 2 / SIL 3", "IP67 / IP68", "ISO 5211", "NAMUR", "Machinery Directive 2006/42/EC"];

export default function ADFPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── Product Hero ── */}
      <Box sx={{ bgcolor: "background.default", pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/hydraulic/adf.webp"
                  alt="ADF Series Electro-Hydraulic Rotary Actuator"
                  sx={{ width: "100%", height: "100%", objectFit: "contain", p: 3 }}
                />
              </Box>
            </Grid>

            {/* Details */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2 }}>
                Hydraulic Actuators / ADF Series
              </Typography>

              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}>
                Electro-Hydraulic Rotary Actuator — PANDA & PA Series
              </Typography>
              <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}>
               ADF Series 
              </Typography>

              <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}>
                High-performance electro-hydraulic rotary actuators delivering 46–10,000 Nm with
                extremely high torque density in compact dimensions. PANDA low-pressure and PA
                high-pressure variants with spring return fail-safe, ATEX Zone 1 & 2 and SIL 2/3
                certification — built for ESD valves, offshore, and severe industrial duty.
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
                  { label: "Torque", value: "46 – 10,000 Nm" },
                  { label: "Protection", value: "IP67 / IP68" },
                  { label: "Temperature", value: "-20°C to +50°C" },
                  { label: "Safety", value: "SIL 2 / SIL 3" },
                ].map(({ label, value }) => (
                  <Box key={label}>
                    <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1 }}>
                      {label}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>
                      {value}
                    </Typography>
                  </Box>
                ))}
              </Box>

             <Box sx={{ display: 'flex', gap: 2 }}>
  <Button
    variant="outlined"
    size="large"
    fullWidth
    href="/pneumatic/actuators/hd/products"
    onClick={e => e.stopPropagation()}
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
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%" }}>
                  <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1.5 }}>
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
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%", display: "flex", gap: 2 }}>
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

      <TrustStrip points={TRUST_POINTS} />

      <RFQModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        product={ADF_PRODUCT}
      />
    </>
  );
}