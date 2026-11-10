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
import { HLDA_IMAGE, HLDA_CATALOG, HLDA_MODELS, HLDA_COMMON } from "./hldaData";

const HLDA_PRODUCT: ProductForRFQ = {
  id: "hlda-series",
  name: "HLDA Linear Piston Hydraulic Actuator",
  brand: "Susin",
  category: "Hydraulic Actuators",
  categoryId: "hydraulic-actuators",
  subCategory: "Linear Piston",
  thumbnail: HLDA_IMAGE,
  description:
    "Double acting linear piston hydraulic actuators (HLDA) and electro-hydraulic versions (EHLDA). 32–200 mm bore, 6–402 kN thrust at 100–160 bar, up to 200 bar, IP66M / IP67M.",
  keySpecs: [
    { label: "Thrust (close)", value: "6 – 402 kN" },
    { label: "Bore", value: "32 – 200 mm" },
    { label: "Pressure", value: "Up to 200 bar" },
    { label: "Protection", value: "IP66M / IP67M" },
  ],
  variantInfo: {
    count: HLDA_MODELS.length,
    sizeRange: "HLDA-030 – HLDA-200",
  },
};

const TECH_SPECS = [
  { label: "Thrust at 100 bar (close / open)", value: "6 / 4 kN (HLDA-030) to 251 / 188 kN (HLDA-200)" },
  { label: "Thrust at 160 bar (close / open)", value: "10 / 6 kN (HLDA-030) to 402 / 302 kN (HLDA-200)" },
  { label: "Cylinder Bore", value: "32, 40, 50, 63, 80, 100, 125, 140, 160, 180, 200 mm" },
  ...HLDA_COMMON,
];

const FEATURES = [
  {
    letter: "A",
    title: "High Force Output",
    body: "Generates significant force for lifting, pushing or pulling: up to 402 kN closing thrust at 160 bar on the 200 mm bore.",
  },
  {
    letter: "B",
    title: "Precision Control",
    body: "Accurate, smooth control of linear motion for applications that need fine adjustment, with speed control.",
  },
  {
    letter: "C",
    title: "Electro-Hydraulic Option",
    body: "EHLDA versions combine electric control with hydraulic power, with a power pack, accumulator or hand pump.",
  },
  {
    letter: "D",
    title: "Low-Friction Cylinder",
    body: "Honed, hot chrome plated cylinders and a dynamic sailing piston seal cut friction and prevent chattering, even after long idle periods.",
  },
  {
    letter: "E",
    title: "High-Strength Stem",
    body: "A high yield strength actuator stem carries large thrust loads, with a strong strength-to-weight ratio.",
  },
  {
    letter: "F",
    title: "Onshore & Offshore",
    body: "Custom engineered for onshore and offshore installations, with a manual override for power failure.",
  },
];

const TRUST_POINTS = [
  { value: "6–402 kN", label: "Thrust Range" },
  { value: "200 bar", label: "Max Pressure" },
  { value: "IP66M / IP67M", label: "Protection" },
  { value: "11 Models", label: "HLDA-030 – HLDA-200" },
  { value: "Electro-Hydraulic", label: "EHLDA Option" },
];

const CERTIFICATIONS = [
  "Linear Piston",
  "Double Acting",
  "Up to 200 bar",
  "IP66M / IP67M",
  "Manual Override",
];

export default function HLDAPage() {
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
                  src={HLDA_IMAGE}
                  alt="HLDA linear piston hydraulic actuator on a globe valve"
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
                Hydraulic Actuators / HLDA Series
              </Typography>

              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                HLDA Series
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Linear Piston Hydraulic Actuator — Double Acting
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8, textTransform: "none" }}
              >
                Double acting linear piston actuators from Susin
                for globe, gate and control valves. Hydraulic (HLDA) or
                electro-hydraulic (EHLDA), eleven bores from 32 to 200 mm, giving
                6 to 402 kN of thrust at 100 to 160 bar. Up to 200 bar, IP66M /
                IP67M, with a manual override for power failure.
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
                  { label: "Thrust", value: "6 – 402 kN" },
                  { label: "Pressure", value: "Up to 200 bar" },
                  { label: "Models", value: "HLDA-030 – HLDA-200" },
                  { label: "Protection", value: "IP66M / IP67M" },
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
                  href="/actuators/hydraulic/hlda/products"
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
                  View All 11 Models
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
                href={HLDA_CATALOG}
                target="_blank"
                rel="noopener"
                startIcon={<DownloadIcon />}
                sx={{ mt: 2, fontWeight: 700, textTransform: "none", color: "#1c2e1a" }}
              >
                Download hydraulic data sheet (PDF)
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
                  <th>Bore</th>
                  <th>Thrust 100 bar (close / open)</th>
                  <th>Thrust 130 bar</th>
                  <th>Thrust 160 bar</th>
                </tr>
              </thead>
              <tbody>
                {HLDA_MODELS.map((m) => (
                  <tr key={m.model}>
                    <td style={{ fontWeight: 700 }}>{m.model} / E{m.model}</td>
                    <td>{m.boreMm} mm</td>
                    {m.kN.map(([c, o], k) => (
                      <td key={k}>{c} / {o} kN</td>
                    ))}
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
        product={HLDA_PRODUCT}
      />
    </>
  );
}
