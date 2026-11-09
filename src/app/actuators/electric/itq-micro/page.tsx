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
import DownloadIcon from "@mui/icons-material/Download";
import TrustStrip from "../../../Common/Products_Page/TrustStrip";
import RFQModal from "@/src/app/Common/RFQCard/RFQModal";
import { ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";
import { ITQM_IMAGE, ITQM_CATALOG, ITQM_MODELS } from "./itqMicroData";

const ITQM_PRODUCT: ProductForRFQ = {
  id: "itq-micro-series",
  name: "ITQ Micro Series Economic Electric Actuator",
  brand: "Susin",
  category: "Electric Actuators",
  categoryId: "electric-actuators",
  subCategory: "Compact Rotary Electric",
  thumbnail: ITQM_IMAGE,
  description:
    "Economic quarter-turn electric actuators for small ball and plug valves and dampers. 25–80 Nm, IP66/IP67, ISO 5211 F03–F07 mounting.",
  keySpecs: [
    { label: "Torque", value: "25 – 80 Nm" },
    { label: "Models", value: "ITQ 0020 / 0040 / 0080" },
    { label: "Weight", value: "1 – 3.5 kg" },
    { label: "Protection", value: "IP66 / IP67" },
  ],
  variantInfo: {
    count: ITQM_MODELS.length,
    sizeRange: "ITQ 0020 – ITQ 0080",
  },
};

const TECH_SPECS = [
  { label: "Torque", value: "25 / 40 / 80 Nm" },
  { label: "Operating Time", value: "11 s (0020) · 16 / 13 s (0040) · 16 / 14 s (0080) at 50 / 60 Hz" },
  { label: "Power Supply", value: "85–265 VAC (0020) · 110 / 220 VAC 1Ph · 380 / 440 VAC 3Ph (0080) · 24 VDC" },
  { label: "Mounting", value: "ISO 5211 F03 (0020) · F03–F07 (0040) · F05 / F07 (0080)" },
  { label: "Stem Adaption", value: "11 × 11 · 14 × 14 · 17 × 17 mm square female shaft" },
  { label: "Enclosure", value: "IP66 (0020) · IP67 (0040, 0080)" },
  { label: "Duty Cycle", value: "50% (0020) · S2 30 min / S4 50% (0040) · S2 40% / S4 50% (0080)" },
  { label: "Travel Angle", value: "90° ± 5° (0020, 0040) · 90° ± 10° adjustable (0080)" },
  { label: "Cable Entry", value: "1 × PG11 gland with wires (0020) · 2 × M20×1.5 (0040, 0080)" },
  { label: "Ambient Temperature", value: "-10°C to +65°C (0020) · -20°C to +70°C (0040, 0080)" },
  { label: "Humidity", value: "90% RH" },
  { label: "Weight", value: "1 kg · 2.5 kg · 3.5 kg" },
];

const FEATURES = [
  {
    letter: "A",
    title: "Sized for Small Valves",
    body: "Three compact models from 25 to 80 Nm for small ball and plug valves and dampers. The ITQ 0020 suits 1\" ball valves.",
  },
  {
    letter: "B",
    title: "Free Voltage on the 0020",
    body: "The ITQ 0020 runs on 85–265 VAC single phase, with 24 VAC/DC as an option.",
  },
  {
    letter: "C",
    title: "High-Torque Induction Motor",
    body: "The 0040 and 0080 use an induction motor with high starting torque, thermally protected against overheating.",
  },
  {
    letter: "D",
    title: "Self-Locking Gearing (0080)",
    body: "Spur and worm gear combination that needs no brake, with mechanical stopper bolts against over-travel.",
  },
  {
    letter: "E",
    title: "Manual Operation & Indication",
    body: "Hex wrench / declutchable lever (0040) or M6 wrench to the worm gear (0080), with a continuous mechanical position indicator.",
  },
  {
    letter: "F",
    title: "Modulating Options",
    body: "RPC remote position controller on the 0040 and 0080, plus a 4–20 mA current transmitter on the 0080.",
  },
];

const TRUST_POINTS = [
  { value: "25–80 Nm", label: "Torque Range" },
  { value: "From 1 kg", label: "Weight" },
  { value: "IP66 / IP67", label: "Enclosure" },
  { value: "3 Models", label: "ITQ 0020 – 0080" },
  { value: "ISO 5211", label: "Valve Mounting" },
];

const CERTIFICATIONS = [
  "Compact",
  "Quarter-Turn",
  "IP66 / IP67",
  "ISO 5211",
  "On-Off & Modulating",
];

export default function ITQMicroPage() {
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
                  src={ITQM_IMAGE}
                  alt="ITQ Micro series compact electric actuators: ITQ 0020, 0040 and 0080"
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
                Electric Actuators / ITQ Micro Series
              </Typography>

              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                ITQ Micro Series
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Economic Compact Electric Actuator for Small Valves
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8, textTransform: "none" }}
              >
                Economic quarter-turn electric actuators for small ball and
                plug valves and dampers. Three compact models from 25 to 80 Nm
                and 1 to 3.5 kg, with ISO 5211 mounting and IP66/IP67
                enclosures, for on-off or modulating duty.
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
                  { label: "Torque", value: "25 – 80 Nm" },
                  { label: "Weight", value: "1 – 3.5 kg" },
                  { label: "Models", value: "ITQ 0020 – 0080" },
                  { label: "Protection", value: "IP66 / IP67" },
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
                    <Typography variant="body1" sx={{ fontWeight: 700, textTransform: "none" }}>
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
                  href="/actuators/electric/itq-micro/products"
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
              <Button
                href={ITQM_CATALOG}
                target="_blank"
                rel="noopener"
                startIcon={<DownloadIcon />}
                sx={{ mt: 2, fontWeight: 700, textTransform: "none", color: "#1c2e1a" }}
              >
                Download ITQ Micro catalogue (PDF)
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
                  <Typography variant="body1" sx={{ fontWeight: 700, mt: 0.5, textTransform: "none" }}>
                    {value}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* ── Models ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>
            Models
          </Typography>
          <Box sx={{ textTransform: "none", overflowX: "auto", border: "1px solid rgba(0,0,0,0.12)", borderRadius: 2 }}>
            <Box component="table" sx={{ width: "100%", borderCollapse: "collapse", minWidth: 640, "& th, & td": { px: 2, py: 1.5, textAlign: "left", borderBottom: "1px solid rgba(0,0,0,0.08)", fontSize: "0.9rem" }, "& th": { bgcolor: "#f0f4ef", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: 1 } }}>
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Torque</th>
                  <th>Operating time</th>
                  <th>Mounting</th>
                  <th>Weight</th>
                </tr>
              </thead>
              <tbody>
                {ITQM_MODELS.map((m) => (
                  <tr key={m.model}>
                    <td style={{ fontWeight: 700 }}>{m.model}</td>
                    <td>{m.torqueNm} Nm</td>
                    <td>{m.speed}</td>
                    <td>{m.mounting}</td>
                    <td>{m.weightKg} kg</td>
                  </tr>
                ))}
              </tbody>
            </Box>
          </Box>
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
                      sx={{ color: "text.secondary", lineHeight: 1.6, textTransform: "none" }}
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
        product={ITQM_PRODUCT}
      />
    </>
  );
}
