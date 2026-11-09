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
import { QS_IMAGE, QS_CATALOG, QS_MODELS, QS_COMMON } from "./qsData";

const QS_PRODUCT: ProductForRFQ = {
  id: "qs-series",
  name: "QS Series Fail-Safe Spring Return Electric Actuator",
  brand: "Susin",
  category: "Electric Actuators",
  categoryId: "electric-actuators",
  subCategory: "Fail-Safe Electric",
  thumbnail: QS_IMAGE,
  description:
    "Fail-safe quarter-turn electric actuators with an independent spring return. 50–300 Nm, 1.8 s spring stroke, IP67, ISO 5211 mounting.",
  keySpecs: [
    { label: "Torque", value: "50 – 300 Nm" },
    { label: "Spring Stroke", value: "1.8 s" },
    { label: "Fail Action", value: "Spring Return" },
    { label: "Protection", value: "IP67 (option IP68)" },
  ],
  variantInfo: {
    count: QS_MODELS.length,
    sizeRange: "QS05 – QS30",
  },
};

const TECH_SPECS = [
  { label: "Torque (Motor & Spring)", value: "50 / 100 / 200 / 300 Nm" },
  { label: "Operating Speed", value: "21 s / 18 s (QS05–10) · 34 s / 30 s (QS20–30) at 50 / 60 Hz" },
  { label: "Spring Speed", value: "1.8 s (option 2, 3 or 4 s)" },
  { label: "Power Supply", value: "AC 110 / 220 / 380 / 440 V, DC 24 V" },
  { label: "Mounting", value: "ISO 5211 F07 (QS05–10) · F10 / F12 (QS20–30)" },
  { label: "Weight", value: "22 kg (QS05–10) · 40 kg (QS20–30)" },
  ...QS_COMMON,
];

const FEATURES = [
  {
    letter: "A",
    title: "Independent Spring Structure",
    body: "The motor drives only the reducer in normal operation. The spring is separate and only moves the valve in an emergency.",
  },
  {
    letter: "B",
    title: "Compact Size & Lower Weight",
    body: "Because the motor does not wind the spring, the motor and reducer can be smaller, keeping the actuator compact.",
  },
  {
    letter: "C",
    title: "Energy Saving",
    body: "A smaller-capacity motor draws less current in everyday operation.",
  },
  {
    letter: "D",
    title: "Magnetic Brake & Spiral Spring",
    body: "A magnetic brake holds position under power; on power loss the spiral spring returns the valve in 1.8 s (2, 3 or 4 s optional).",
  },
  {
    letter: "E",
    title: "Manual Override",
    body: "Hand wheel and manual lever for operation without power, plus a mechanical position indicator.",
  },
  {
    letter: "F",
    title: "ITQ Options Available",
    body: "All the options of the ITQ series are also available on the QS series.",
  },
];

const TRUST_POINTS = [
  { value: "50–300 Nm", label: "Torque Range" },
  { value: "1.8 s", label: "Spring Stroke" },
  { value: "IP67", label: "Enclosure (IP68 Option)" },
  { value: "4 Models", label: "QS05 – QS30" },
  { value: "ISO 5211", label: "Valve Mounting" },
];

const CERTIFICATIONS = [
  "Fail-Safe",
  "Spring Return",
  "IP67",
  "ISO 5211",
  "On-Off & Modulating",
];

export default function QSPage() {
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
                  src={QS_IMAGE}
                  alt="QS Series fail-safe spring return electric actuator"
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
                Electric Actuators / QS Series
              </Typography>

              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                QS Series
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Fail-Safe Electric Actuator — Spring Return
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8, textTransform: "none" }}
              >
                Quarter-turn electric actuators that return the valve to its
                safe position on power loss. An independent spiral spring does
                the emergency stroke in 1.8 seconds, while the motor only drives
                the reducer in normal operation. Four models from 50 to 300 Nm,
                IP67, with ISO 5211 mounting.
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
                  { label: "Torque", value: "50 – 300 Nm" },
                  { label: "Spring Stroke", value: "1.8 s" },
                  { label: "Models", value: "QS05 – QS30" },
                  { label: "Protection", value: "IP67 (IP68 option)" },
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
                  href="/actuators/electric/qs/products"
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
                href={QS_CATALOG}
                target="_blank"
                rel="noopener"
                startIcon={<DownloadIcon />}
                sx={{ mt: 2, fontWeight: 700, textTransform: "none", color: "#1c2e1a" }}
              >
                Download QS catalogue (PDF)
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
                  <th>Operating speed (50 / 60 Hz)</th>
                  <th>Mounting</th>
                  <th>Weight</th>
                </tr>
              </thead>
              <tbody>
                {QS_MODELS.map((m) => (
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
        product={QS_PRODUCT}
      />
    </>
  );
}
