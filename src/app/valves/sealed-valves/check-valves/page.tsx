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

const PRODUCT: ProductForRFQ = {
  id: "din-standard-lift-check-valve",
  name: "DIN Standard Bellows Sealed Lift Check Valve",
  brand: "Valvenok",
  category: "Sealed Valves",
  categoryId: "sealed-valves",
  subCategory: "Bellows Sealed Check Valves",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/din-standard-lift-check-valve-300x300.jpg",
  description:
    "DIN standard bellows sealed lift check valve with zero stem leakage construction for demanding process, chemical and industrial applications.",
  keySpecs: [
    { label: "Standard", value: "DIN" },
    { label: "Type", value: "Lift Check" },
    { label: "Seal", value: "Bellows Sealed" },
    { label: "Leakage", value: "Zero Stem Leakage" },
  ],
  variantInfo: { count: 1, sizeRange: "DIN Standard" },
};

const TECH_SPECS = [
  { label: "Standard", value: "DIN" },
  { label: "Type", value: "Lift Check Valve" },
  { label: "Seal Design", value: "Bellows sealed" },
  { label: "Stem Leakage", value: "Zero leakage" },
  {
    label: "Application",
    value: "Process, Chemical, Industrial, Power Generation",
  },
  { label: "Certifications", value: "CE, ISO compliant" },
];

const FEATURES = [
  {
    letter: "A",
    title: "Bellows Sealed Construction",
    body: "Metal bellows provide a complete seal between the fluid medium and atmosphere, ensuring zero leakage across all operating conditions.",
  },
  {
    letter: "B",
    title: "Lift Check Design",
    body: "Lift check mechanism ensures reliable non-return flow control, preventing backflow in process and industrial pipeline systems.",
  },
  {
    letter: "C",
    title: "DIN Standard",
    body: "Built to DIN standard for compatibility with European and international pipeline systems and process plant specifications.",
  },
  {
    letter: "D",
    title: "Zero Stem Leakage",
    body: "Bellows construction eliminates stem leakage, making this valve ideal for applications where fugitive emissions must be controlled.",
  },
  {
    letter: "E",
    title: "Corrosion Resistant",
    body: "Bellows material and construction selected for long service life in corrosive chemical and process media.",
  },
  {
    letter: "F",
    title: "Wide Application Range",
    body: "Suitable for process plants, chemical, pharmaceutical, power generation and industrial applications requiring reliable non-return valve performance.",
  },
];

const TRUST_POINTS = [
  { value: "Zero Leakage", label: "Stem Seal" },
  { value: "DIN", label: "Standard" },
  { value: "Lift Check", label: "Valve Type" },
  { value: "Bellows Sealed", label: "Construction" },
  { value: "Certification", label: "Varies by Model" },
];

const TAGS = [
  "DIN",
  "Bellows Sealed",
  "Lift Check",
  "Zero Leakage",
  "CE",
  "ISO",
];

export default function BellowsSealedCheckValvePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          bgcolor: "background.default",
          pt: { xs: 6, md: 10 },
          pb: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/din-standard-lift-check-valve-300x300.jpg"
                  alt="DIN Standard Bellows Sealed Lift Check Valve"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    p: 3,
                  }}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                  letterSpacing: 2,
                }}
              >
                Sealed Valves / Check Valves
              </Typography>
              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                Bellows Sealed Lift Check Valve
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                DIN Standard — Zero Stem Leakage
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                DIN Standard Bellows Sealed Lift Check Valve With Zero Stem
                Leakage Construction For Demanding Process, Chemical And
                Industrial Applications.
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
                  { label: "Standard", value: "DIN" },
                  { label: "Type", value: "Lift Check" },
                  { label: "Seal", value: "Bellows Sealed" },
                  { label: "Leakage", value: "Zero Stem Leakage" },
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
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

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
        product={PRODUCT}
      />
    </>
  );
}
