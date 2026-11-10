"use client";

import { useState } from "react";
import PldsOverrides from "./PldsOverrides";
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

const PLDS_PRODUCT: ProductForRFQ = {
  id: "plds-series",
  name: "PLDS Series Pneumatic Linear Double Acting Cylinder",
  brand: "Valvenok",
  category: "Pneumatic Actuators",
  categoryId: "pneumatic-actuators",
  subCategory: "Linear Cylinders",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/plds.webp",
  description:
    "Double-acting pneumatic linear cylinders for precise motion control, valve actuation and automation. IP66, ISO mounting, multiple corrosion grades.",
  keySpecs: [
    { label: "Pressure", value: "3 – 7 bar" },
    { label: "Temperature", value: "-20°C to +80°C" },
    { label: "Protection", value: "IP66" },
    { label: "Standards", value: "ISO 3322 / 4393 / 5597" },
  ],
  variantInfo: {
    count: 1,
    sizeRange: "PLDS Series",
  },
};

const TECH_SPECS = [
  { label: "Operating Pressure", value: "3 – 7 bar" },
  { label: "Supply Medium", value: "Filtered, dry compressed air" },
  { label: "Standard Temp Range", value: "-20°C to +80°C" },
  { label: "High Temp Option", value: "-10°C to +140°C" },
  { label: "Low Temp Option", value: "-45°C to +80°C" },
  { label: "Extreme Low Temp", value: "-55°C to +80°C" },
  {
    label: "Standard Corrosion",
    value: "Hard anodized 25–30 µm body; Epoxy end caps",
  },
  { label: "Category C4", value: "Hard anodized + PU paint; A2 fasteners" },
  { label: "Category C5-M", value: "PU paint; AISI 316 pinion & A4 fasteners" },
  { label: "Full PTFE Coat", value: "15–20 µm coating; AISI 316 throughout" },
  {
    label: "Full Stainless (316)",
    value: "Suitable for fresh water immersion",
  },
  { label: "Mounting", value: "ISO standard mounting" },
  { label: "Seals", value: "Low-friction for extended service life" },
  { label: "ISO Standards", value: "ISO 3322, 4393, 5597" },
];

const FEATURES = [
  {
    letter: "A",
    title: "Smooth Motion",
    body: "Low-friction sealing for consistent, smooth linear travel.",
  },
  {
    letter: "B",
    title: "Adjustable Stroke",
    body: "Allows precise motion control tailored to application requirements.",
  },
  {
    letter: "C",
    title: "ISO Construction",
    body: "Plug-and-play ISO compliant fit for universal compatibility.",
  },
  {
    letter: "D",
    title: "High Operating Pressure",
    body: "Operates up to 150 psi delivering more thrust than standard actuators.",
  },
  {
    letter: "E",
    title: "Tight Valve Shutoff",
    body: "High thrust ensures reliable valve shutoff with minimal maintenance.",
  },
  {
    letter: "F",
    title: "Fast Response",
    body: "Double-acting system provides fast response to signal changes.",
  },
  {
    letter: "G",
    title: "NBR Seals",
    body: "Standard NBR seals with optional specialty seal materials available.",
  },
  {
    letter: "H",
    title: "Guide Rod",
    body: "Guide rod included for large bore sizes above 250mm.",
  },
  {
    letter: "I",
    title: "Field Reversible",
    body: "Reversible configuration available for models above 100mm bore.",
  },
  {
    letter: "J",
    title: "Quad O-Ring",
    body: "Quad-type O-ring used for bores over 200mm for superior sealing.",
  },
  {
    letter: "K",
    title: "Premium Cylinder Surface",
    body: "Honed and hot chrome-plated cylinder bore for extended longevity.",
  },
  {
    letter: "L",
    title: "Zinc Epoxy Coated Parts",
    body: "End flanges and pistons coated for enhanced corrosion resistance.",
  },
  {
    letter: "M",
    title: "ISO Compliant",
    body: "Designed to ISO 3322, 4393 and 5597 standards.",
  },
  {
    letter: "N",
    title: "Brass Guide Bush",
    body: "Heavy-duty brass guide bush improves component lifespan.",
  },
  {
    letter: "O",
    title: "Robust Material Options",
    body: "Cast steel standard; stainless steel or aluminum on request.",
  },
  {
    letter: "P",
    title: "Heavy-Duty End Covers",
    body: "Cast iron end covers as standard; steel optional.",
  },
  {
    letter: "Q",
    title: "Lightweight & Corrosion-Resistant",
    body: "Optimized weight with anti-corrosion design for demanding environments.",
  },
  {
    letter: "R",
    title: "Custom Options",
    body: "Custom thrust and stroke options available upon consultation.",
  },
];

const TRUST_POINTS = [
  { value: "3–7 bar", label: "Operating Pressure" },
  { value: "IP66", label: "Ingress Protection" },
  { value: "-55°C / +140°C", label: "Temp Options" },
  { value: "7 Grades", label: "Corrosion Protection" },
  { value: "ISO 3322", label: "Compliance Standard" },
];

const CERTIFICATIONS = [
  "IP66",
  "ISO 3322",
  "ISO 4393",
  "ISO 5597",
  "C4/C5-M Rated",
  "PTFE & ENP Options",
];

export default function PLDSPage() {
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/plds.webp"
                  alt="PLDS Series Pneumatic Linear Double Acting Cylinder"
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
                Pneumatic Actuators / PLDS Series
              </Typography>

              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                PLDS Series
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Pneumatic Linear Double Acting Cylinder
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Double-acting pneumatic linear cylinders delivering superior
                performance for precise motion control in automation systems and
                valve actuation. Low-friction seals, universal ISO mounting, and
                seven corrosion protection grades for any environment.
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
                  { label: "Pressure", value: "3 – 7 bar" },
                  { label: "Protection", value: "IP66" },
                  { label: "Temperature", value: "-20°C to +80°C" },
                  { label: "Corrosion Grades", value: "7 Options" },
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
                  href="/pneumatic/actuators/plds/products"
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

      <PldsOverrides />

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
        product={PLDS_PRODUCT}
      />
    </>
  );
}
