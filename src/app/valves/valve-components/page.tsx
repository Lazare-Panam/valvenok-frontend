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
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import RFQModal from "@/src/app/Common/RFQCard/RFQModal";
import { ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";

const DANFOSS_VC_PRODUCT: ProductForRFQ = {
  id: "danfoss-valve-components",
  name: "Danfoss Valve Components",
  brand: "Danfoss",
  category: "Valve Components",
  categoryId: "valve-components",
  subCategory: "Danfoss",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/danfoss/dfe-vc.png",
  description:
    "Original Danfoss valve components for proportional and directional control valve systems. Full supply across the Danfoss valve range.",
  keySpecs: [
    { label: "Brand", value: "Danfoss" },
    { label: "Type", value: "Valve Components" },
    { label: "Supply", value: "Original Danfoss Parts" },
    { label: "Application", value: "Proportional & Directional Control" },
  ],
  variantInfo: {
    count: 1,
    sizeRange: "Full Range",
  },
};

const TECH_SPECS = [
  { label: "Brand", value: "Danfoss" },
  { label: "Type", value: "Valve Components" },
  { label: "Supply", value: "Original Danfoss Parts" },
  { label: "Application", value: "Proportional & Directional Control Valves" },
  {
    label: "Compatibility",
    value: "Danfoss PVG, PVE & associated valve series",
  },
  { label: "Certification", value: "Varies by part — contact us to confirm" },
];

const FEATURES = [
  {
    letter: "A",
    title: "Full Range Supply",
    body: "Original Danfoss valve components available across the complete proportional and directional control valve range.",
  },
  {
    letter: "B",
    title: "Original Danfoss Parts",
    body: "All components are genuine Danfoss parts, ensuring reliable performance and full compatibility with existing valve systems.",
  },
  {
    letter: "C",
    title: "PVG Series Compatible",
    body: "Components designed for direct fitment with Danfoss PVG proportional directional control valves used in mobile hydraulic applications.",
  },
  {
    letter: "D",
    title: "Service & MRO Supply",
    body: "Suitable for field service replacement and MRO, reducing downtime and maintaining system integrity with original parts.",
  },
  {
    letter: "E",
    title: "Wide Application Range",
    body: "Covering agricultural machinery, construction equipment, marine and industrial hydraulic systems using Danfoss valve technology.",
  },
  {
    letter: "F",
    title: "Technical Support",
    body: "Our UK team can help identify the right Danfoss PVG component for your application — send us your part number or system details.",
  },
];

const TRUST_POINTS = [
  { value: "Danfoss", label: "Original Brand" },
  { value: "PVG Series", label: "Compatibility" },
  { value: "Original Parts", label: "Genuine Supply" },
  { value: "MRO", label: "Service Supply" },
  { value: "UK Based", label: "Technical Support" },
];

const TAGS = ["Valve Components", "PVG Series", "Original Parts", "Danfoss", "MRO"];

export default function DanfossValveComponentsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── Hero ── */}
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/danfoss/dfe-vc.png"
                  alt="Danfoss Valve Components"
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
              {/* Danfoss logo */}
              <Box sx={{ mb: 2 }}>
                <Box
                  component="img"
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/danfoss/new-logo.svg"
                  alt="Danfoss"
                  sx={{ height: 32, objectFit: "contain" }}
                />
              </Box>

              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                  letterSpacing: 2,
                }}
              >
                Valve Components / Danfoss
              </Typography>

              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                Danfoss Valve Components
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Original Parts Supply
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Original Danfoss Valve Components For Proportional And
                Directional Control Valve Systems. Full Supply Across The
                Danfoss PVG Valve Range — Supporting Mobile Hydraulics,
                Agricultural Machinery, Construction Equipment And Industrial
                Hydraulic Applications.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                {TAGS.map((t) => (
                  <Chip
                    key={t}
                    label={t}
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
                  { label: "Brand", value: "Danfoss" },
                  { label: "Supply", value: "Original Parts" },
                  { label: "Compatible", value: "PVG Series" },
                  { label: "Support", value: "UK Technical Team" },
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

      {/* ── Specs ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>
            Product Information
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
        product={DANFOSS_VC_PRODUCT}
      />
    </>
  );
}
