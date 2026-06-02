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


const MAW_PRODUCT: ProductForRFQ = {
  id: "maw-series",
  name: "MAW Series Manual Worm Gear Actuator",
  brand: "Valvenok",
  category: "Mechanical Actuators",
  categoryId: "mechanical-actuators",
  subCategory: "Worm Gear",
  thumbnail: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/mechanical/worm-gearboxes.webp",
  description: "Self-locking worm gear actuators for quarter-turn valve operation. 100–32,000 Nm, ISO 5211, IP67M, ±5° stroke adjustment, MOV compatible.",
  keySpecs: [
    { label: "Torque", value: "100 – 32,000 Nm" },
    { label: "Protection", value: "IP54 / IP55 / IP65 / IP67M" },
    { label: "Temperature", value: "-20°C to +85°C" },
    { label: "Mounting", value: "ISO 5211" },
  ],
  variantInfo: {
    count: 1,
    sizeRange: "MAW Series",
  },
};

const TECH_SPECS = [
  { label: "Actuator Type", value: "Quarter-turn manual worm gear" },
  { label: "Torque Range", value: "100 – 32,000 Nm (with gear reduction)" },
  { label: "Stroke Adjustment", value: "±5°" },
  { label: "IP Rating", value: "IP54 / IP55 / IP65 / IP67M" },
  { label: "Standard Temp Range", value: "-20°C to +85°C" },
  { label: "Low Temp Option", value: "-45°C to +120°C" },
  { label: "Housing", value: "Ductile iron (cast iron optional)" },
  { label: "Input Shaft", value: "Steel (stainless steel optional)" },
  { label: "Bearings", value: "Heavy-duty bearing construction" },
  { label: "Coating", value: "Epoxy & PU coating — powder-coated handwheel" },
  { label: "Mounting Standard", value: "ISO 5211 valve mounting interface" },
  { label: "MOV Flange", value: "ISO 5210 for electrical actuator compatibility" },
  { label: "Operation", value: "Self-locking worm gear — prevents back drive" },
  { label: "Bushing Type", value: "Splined bush for accurate valve stem alignment" },
  { label: "Handwheel Options", value: "Casting, fabricated and chain type" },
  { label: "Application", value: "Ball, butterfly, plug valves, dampers, HVAC" },
];

const FEATURES = [
  { number: "1", title: "Self-Locking Worm Gear", body: "Prevents reverse back-drive ensuring safe and stable valve positioning at all times." },
  { number: "2", title: "ISO 5211 Mounting", body: "Direct valve mounting without additional machining — plug and play installation." },
  { number: "3", title: "Heavy-Duty Housing", body: "Ductile iron construction engineered for demanding industrial environments." },
  { number: "4", title: "Corrosion Protection", body: "Epoxy & PU coating suitable for harsh service and aggressive atmospheres." },
  { number: "5", title: "Smooth Manual Operation", body: "Optimized gear ratios and bearing design for high mechanical advantage and easy operation." },
  { number: "6", title: "Splined Bushing", body: "Ensures accurate valve stem alignment for precise quarter-turn positioning." },
  { number: "7", title: "MOV Compatible", body: "Supports direct electrical actuator mounting with ISO 5210 flange — no machining required on site." },
];

const APPLICATIONS = [
  { sector: "Power & Process Generation", items: "Turbines, boilers, and BOP systems." },
  { sector: "Oil & Gas", items: "Hazardous and high-pressure environments." },
  { sector: "Water & Wastewater", items: "Desalination, RO and filtration systems." },
  { sector: "Chemical & Petrochemical", items: "Corrosive and explosive process media." },
];

const TRUST_POINTS = [
  { value: "32,000 Nm", label: "Max Torque" },
  { value: "IP67M", label: "Ingress Protection" },
  { value: "ISO 5211", label: "Mounting Standard" },
  { value: "Self-Locking", label: "Worm Gear" },
  { value: "MOV Ready", label: "Electric Actuator Compatible" },
];

const CERTIFICATIONS = ["IP67M", "ISO 5211", "ISO 5210", "Self-Locking", "MOV Compatible", "SS Options"];

export default function MAWPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box sx={{ bgcolor: "background.default", pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderRadius: 3, overflow: "hidden", bgcolor: "#f0f4ef", display: "flex", alignItems: "center", justifyContent: "center", aspectRatio: "4/3" }}>
                <Box component="img" src="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/mechanical/worm-gearboxes.webp" alt="MAW Series Worm Gear Actuator" sx={{ width: "100%", height: "100%", objectFit: "contain", p: 3 }} />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2 }}>
                Mechanical Actuators / MAW Series
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}>
                MAW Series
              </Typography>
              <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}>
                Manual Actuator Worm — Quarter-Turn Worm Gear
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}>
                Self-locking worm gear actuators designed for quarter-turn ball, butterfly and plug
                valve operation. Torque from 100–32,000 Nm, ±5° fine stroke adjustment, ISO 5211
                direct mount and MOV compatible for electrical actuator upgrade without machining —
                built for demanding industrial and marine environments.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                {CERTIFICATIONS.map((c) => (
                  <Chip key={c} label={c} size="small" sx={{ bgcolor: "primary.light", color: "primary.dark", fontWeight: 600, fontSize: "0.7rem" }} />
                ))}
              </Box>

              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mb: 4 }}>
                {[
                  { label: "Torque", value: "100 – 32,000 Nm" },
                  { label: "Protection", value: "Up to IP67M" },
                  { label: "Temperature", value: "-20°C to +85°C" },
                  { label: "Stroke Adjust", value: "±5°" },
                ].map(({ label, value }) => (
                  <Box key={label}>
                    <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1 }}>{label}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>{value}</Typography>
                  </Box>
                ))}
              </Box>

              <Button variant="contained" size="large" fullWidth startIcon={<ContactSupportIcon />} onClick={() => setModalOpen(true)}
                sx={{ borderRadius: 0, fontWeight: 800, py: 1.75, fontSize: "1rem", boxShadow: "none", bgcolor: "#1c2e1a", "&:hover": { bgcolor: "primary.main", boxShadow: "none" } }}>
                Request a Quote / Lead Time
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>Technical Specifications</Typography>
          <Grid container spacing={2}>
            {TECH_SPECS.map(({ label, value }) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={label}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%" }}>
                  <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1.5 }}>{label}</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700, mt: 0.5 }}>{value}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider />

      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>Applications</Typography>
          <Grid container spacing={3}>
            {APPLICATIONS.map(({ sector, items }) => (
              <Grid size={{ xs: 12, sm: 6 }} key={sector}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%" }}>
                  <Typography variant="caption" sx={{ color: "primary.main", textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 700 }}>{sector}</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", mt: 1, lineHeight: 1.7 }}>{items}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider />

      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>Key Features</Typography>
          <Grid container spacing={3}>
            {FEATURES.map(({ number, title, body }) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={number}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%", display: "flex", gap: 2 }}>
                  <Box sx={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", bgcolor: "primary.main", color: "#fff", fontWeight: 700, fontSize: "0.85rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {number}
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>{title}</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>{body}</Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <TrustStrip points={TRUST_POINTS} />
      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={MAW_PRODUCT} />
    </>
  );
}