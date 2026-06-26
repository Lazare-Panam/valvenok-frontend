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

const DANFOSS_PRODUCT: ProductForRFQ = {
  id: "danfoss-pvea32",
  name: "Danfoss PVEA32 Electrohydraulic Actuator",
  brand: "Danfoss",
  category: "Electrohydraulic Actuators",
  categoryId: "electrohydraulic-actuators",
  subCategory: "PVE Series",
  thumbnail: "https://pblol2.blob.core.windows.net/valvenok-images/products/danfoss/dfe-ac.png",
  description: "Danfoss PVE series electrohydraulic actuators for proportional directional control valves. PVEA, PVEH, PVEM, PVEO, PVES, PVG and PVHC series available.",
  keySpecs: [
    { label: "Series", value: "PVEA / PVEH / PVEM / PVEO / PVES" },
    { label: "Signal", value: "1X4AMP / 1X4DIN / 1X4DEU / 2X4AMP" },
    { label: "Fault Monitoring", value: "Active & Passive" },
    { label: "Voltage", value: "12V / 24V" },
  ],
  variantInfo: {
    count: 34,
    sizeRange: "PVE Series",
  },
};

const TECH_SPECS = [
  { label: "Series", value: "PVEA32, PVEH32, PVEH120, PVEM32, PVEO32, PVEO120, PVES32, PVG16, PVHC16" },
  { label: "Signal Types", value: "1X4AMP, 1X4DIN, 1X4DEU, 2X4AMP, 2X4DEU" },
  { label: "Fault Monitoring", value: "Active & Passive options" },
  { label: "Voltage", value: "12V / 24V (model dependent)" },
  { label: "Communication", value: "Isobus (PVED32 CC series)" },
  { label: "Manual Override", value: "PVM Lever Actuator (PVG16)" },
  { label: "Float Function", value: "Available on selected models" },
  { label: "Pressure Rating", value: "20 Bar (PVHC16)" },
  { label: "Rotation", value: "180° (PVHC16)" },
  { label: "Enclosure", value: "IP rated, suitable for mobile hydraulics" },
  { label: "Compatibility", value: "Danfoss PVG proportional valve series" },
  { label: "Certifications", value: "CE, ISO compliant" },
];

const FEATURES = [
  { letter: "A", title: "Wide Series Range", body: "PVEA, PVEH, PVEM, PVEO, PVES, PVG and PVHC series cover the full spectrum of proportional valve control requirements." },
  { letter: "B", title: "Active & Passive Fault Monitoring", body: "Both active and passive fault monitoring options available for safe and predictable system behaviour in critical applications." },
  { letter: "C", title: "Multiple Signal Interfaces", body: "1X4AMP, 1X4DIN, 1X4DEU and 2X4AMP signal types for seamless integration with existing machine control systems." },
  { letter: "D", title: "Isobus Communication", body: "PVED32 CC series supports Isobus protocol for advanced agricultural and mobile machine integration." },
  { letter: "E", title: "Float Function", body: "Selected PVEM32 and PVG16 models include float function for passive load-following cylinder control." },
  { letter: "F", title: "Manual Override", body: "PVG16 PVM lever actuators with and without adjustment screws for direct manual spool positioning." },
  { letter: "G", title: "12V & 24V Operation", body: "Dual voltage options across the range ensure compatibility with both 12V and 24V mobile machine electrical systems." },
  { letter: "H", title: "Compact & Robust", body: "Designed for mobile hydraulic applications with compact form factor and robust construction to withstand demanding field conditions." },
  { letter: "I", title: "DI Dual Input", body: "DI variants with 2X4AMP dual input for redundant or dual-axis control on safety-critical mobile equipment." },
  { letter: "J", title: "High Pressure Rotary", body: "PVHC16 hydraulic actuator rated to 20 Bar with 180° rotation for specialized rotary control valve applications." },
  { letter: "K", title: "Direct Valve Mount", body: "Designed for direct mounting onto Danfoss PVG proportional directional control valve sections." },
  
];

const TRUST_POINTS = [
  { value: "34 Models", label: "Full Range" },
  { value: "PVEA–PVHC", label: "Series Coverage" },
  { value: "Active & Passive", label: "Fault Monitoring" },
  { value: "12V / 24V", label: "Voltage Options" },
  { value: "Isobus", label: "Communication" },
];

const CERTIFICATIONS = ["PVEA32", "PVEH32", "PVEM32", "PVEO32", "PVES32", "PVG16", "PVHC16", "Isobus"];

export default function DanfossPVEPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── Hero ── */}
      <Box sx={{ bgcolor: "background.default", pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">

            {/* Image */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{
                borderRadius: 3, overflow: "hidden", bgcolor: "#f0f4ef",
                display: "flex", alignItems: "center", justifyContent: "center", aspectRatio: "4/3",
              }}>
                <Box
                  component="img"
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/danfoss/dfe-ac.png"
                  alt="Danfoss PVE Series Actuator"
                  sx={{ width: "100%", height: "100%", objectFit: "contain", p: 3 }}
                />
              </Box>
            </Grid>

            {/* Details */}
            <Grid size={{ xs: 12, md: 6 }}>

              {/* Danfoss logo */}
              <Box sx={{ mb: 2 }}>
                <Box
                  component="img"
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/danfoss/new-logo.svg"
                  alt="Danfoss"
                  sx={{ height: 32, objectFit: "contain" }}
                />
              </Box>

              <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2 }}>
                Electrohydraulic Actuators / PVE Series
              </Typography>

              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}>
                PVE Series
              </Typography>
              <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}>
                Electrohydraulic Actuators for Proportional Valves
              </Typography>

              <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}>
                Danfoss PVE series electrohydraulic actuators engineered for precise proportional
                control of PVG directional valves. Available across PVEA, PVEH, PVEM, PVEO, PVES,
                PVG and PVHC series with active and passive fault monitoring, Isobus communication
                and 12V / 24V operation.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                {CERTIFICATIONS.map((c) => (
                  <Chip key={c} label={c} size="small" sx={{
                    bgcolor: "primary.light", color: "primary.dark",
                    fontWeight: 600, fontSize: "0.7rem",
                  }} />
                ))}
              </Box>

              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mb: 4 }}>
                {[
                  { label: "Series", value: "PVEA – PVHC" },
                  { label: "Voltage", value: "12V / 24V" },
                  { label: "Fault Monitoring", value: "Active & Passive" },
                  { label: "Communication", value: "Isobus (PVED32)" },
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

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="outlined"
                  size="large"
                  fullWidth
                  href="/actuators/electric/pvae32/products"
                  sx={{
                    borderRadius: 0, fontWeight: 800, py: 1.75, fontSize: "1rem", boxShadow: "none",
                    borderColor: "#1c2e1a", color: "#1c2e1a",
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
                  onClick={() => setModalOpen(true)}
                  sx={{
                    borderRadius: 0, fontWeight: 800, py: 1.75, fontSize: "1rem", boxShadow: "none",
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
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>Technical Specifications</Typography>
          <Grid container spacing={2}>
            {TECH_SPECS.map(({ label, value }) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={label}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%" }}>
                  <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1.5 }}>
                    {label}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700, mt: 0.5 }}>{value}</Typography>
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
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>Key Features</Typography>
          <Grid container spacing={3}>
            {FEATURES.map(({ letter, title, body }) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={letter}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%", display: "flex", gap: 2 }}>
                  <Box sx={{
                    flexShrink: 0, width: 36, height: 36, borderRadius: "50%",
                    bgcolor: "primary.main", color: "#fff", fontWeight: 700,
                    fontSize: "0.85rem", display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {letter}
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

      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={DANFOSS_PRODUCT} />
    </>
  );
}