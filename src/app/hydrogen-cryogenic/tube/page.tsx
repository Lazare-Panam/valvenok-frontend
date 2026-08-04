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
import RFQModal from "@/src/app/Common/RFQCard/RFQModal";
import { ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";

const HIFLUX_LOGO =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/logo.png";
const ACCENT = "#61D649";

const HIFLUX_PRODUCT: ProductForRFQ = {
  id: "hiflux-high-pressure-tubing",
  name: "Hiflux High Pressure Tubing & Tooling",
  brand: "Hiflux",
  category: "High Pressure Tubing & Tooling",
  categoryId: "high-pressure-tubing",
  subCategory: "Tubes, Nipples, Tooling Sets, Tube Supports",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/tube.png",
  description:
    "Hiflux high pressure tubes and nipples rated up to 100,000 psi, with a full tooling set range and tube supports for industrial, hydrogen and wellhead applications.",
  keySpecs: [
    { label: "Max Pressure", value: "~100,000 psi" },
    { label: "Certifications", value: "KC, KGS" },
    { label: "Types", value: "Tube, Nipple, Tooling Set, Tube Support" },
    { label: "Service", value: "Industrial, Hydrogen, Wellhead" },
  ],
  variantInfo: { count: 18, sizeRange: "20,000–100,000 psi" },
};

const TECH_SPECS = [
  {
    label: "Max Working Pressure",
    value: "~100,000 psi (Ultra High Pressure Tube)",
  },
  { label: "Tube Range", value: "~20,000 – 100,000 psi" },
  { label: "Nipple Range", value: "~20,000 – 100,000 psi" },
  {
    label: "Tube Sizes",
    value: "Medium, High (30,000 / 60,000), Ultra High (100,000 psi)",
  },
  {
    label: "Tooling Sets",
    value: "Coning, Threading, Reseating, Spare Cutter, Spare Collet",
  },
  { label: "Threading Dies", value: "HSS Ground Threading Tool Dies" },
  { label: "Guide Busing", value: "Threading Tool Guide Busing" },
  { label: "Tube Supports", value: "1 Line, 2 Line, 3 Line" },
  { label: "Certifications", value: "KC, KGS" },
  {
    label: "H₂ Compatible",
    value: "Yes — suitable for hydrogen service infrastructure",
  },
  {
    label: "Applications",
    value: "Industrial, Wellhead, Research & Test, Hydrogen",
  },
  { label: "Total Products", value: "18 Products across 4 categories" },
];

const FEATURES = [
  {
    letter: "A",
    title: "Ultra High Pressure Tubes",
    body: "Tubes rated to 100,000 psi for the most demanding research, test and industrial high pressure systems.",
  },
  {
    letter: "B",
    title: "Nipple Range",
    body: "High pressure nipples from 20,000 to 100,000 psi for reliable inline connections in high pressure lines.",
  },
  {
    letter: "C",
    title: "Coning Tool",
    body: "Precision coning tool for forming tube cone ends that ensure leak-free high pressure connections every time.",
  },
  {
    letter: "D",
    title: "Threading Tool",
    body: "High pressure threading tool for accurate thread preparation on tube ends prior to fitting assembly.",
  },
  {
    letter: "E",
    title: "Reseating Tool",
    body: "Reseating tool for restoring damaged tube and fitting seats in the field without replacing components.",
  },
  {
    letter: "F",
    title: "HSS Threading Dies",
    body: "HSS ground threading tool dies for precision high pressure tube threading with long service life.",
  },
  {
    letter: "G",
    title: "Spare Cutters & Collets",
    body: "Replacement cutters and collets available to keep high pressure tooling sets in service on site.",
  },
  {
    letter: "H",
    title: "Guide Busing",
    body: "Threading tool guide busing ensures accurate alignment during tube end threading for consistent results.",
  },
  {
    letter: "I",
    title: "1, 2 & 3 Line Tube Supports",
    body: "Tube support clamps for 1, 2 and 3 line configurations — securing high pressure tube runs to structures and equipment.",
  },
  {
    letter: "J",
    title: "Hydrogen Compatible",
    body: "Full tube and nipple range suitable for hydrogen service applications and H₂ station infrastructure.",
  },
  {
    letter: "K",
    title: "KC & KGS Certified",
    body: "Korean Certificate and KGS certification across the tube and nipple range for industrial compliance.",
  },
  {
    letter: "L",
    title: "18 Product Range",
    body: "Comprehensive catalogue of tubes, nipples, tooling and supports covering all high pressure tubing installation needs.",
  },
];

const CERTIFICATIONS = [
  "KC Certified",
  "KGS Approved",
  "H₂ Compatible",
  "100,000 psi Max",
  "18 Products",
];

export default function HifluxTubingPage() {
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
                  bgcolor: "#f5f5f5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  aspectRatio: "4/3",
                }}
              >
                <Box
                  component="img"
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/tube.png"
                  alt="Hiflux High Pressure Tubing"
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
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  bgcolor: ACCENT,
                  px: 2,
                  py: 1,
                  mb: 3,
                  borderRadius: 1,
                }}
              >
                <Box
                  component="img"
                  src={HIFLUX_LOGO}
                  alt="Hiflux"
                  sx={{ maxHeight: 32, maxWidth: 130, objectFit: "contain" }}
                />
              </Box>

              <Typography
                variant="overline"
                sx={{
                  color: ACCENT,
                  fontWeight: 700,
                  letterSpacing: 2,
                  display: "block",
                }}
              >
                High Pressure Tubing & Tooling
              </Typography>

              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                High Pressure Tubing
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Tubes, Nipples, Tooling Sets & Tube Supports
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Hiflux manufactures a comprehensive range of high pressure tubes
                and nipples rated up to 100,000 psi, paired with a full tooling
                set range — coning, threading, reseating tools, HSS dies, spare
                cutters and collets — and 1, 2 and 3 line tube supports. KC and
                KGS certified for industrial, hydrogen and wellhead applications
                worldwide.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                {CERTIFICATIONS.map((c) => (
                  <Chip
                    key={c}
                    label={c}
                    size="small"
                    sx={{
                      bgcolor: ACCENT,
                      color: "#fff",
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
                  { label: "Max Pressure", value: "100,000 psi" },
                  { label: "Products", value: "18 Items" },
                  { label: "Certifications", value: "KC · KGS" },
                  { label: "Service", value: "Industrial · H₂ · Wellhead" },
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
                  href="/hydrogen-cryogenic/tube/products"
                  sx={{
                    borderRadius: 0,
                    fontWeight: 800,
                    py: 1.75,
                    fontSize: "1rem",
                    boxShadow: "none",
                    borderColor: ACCENT,
                    color: ACCENT,
                    "&:hover": {
                      borderColor: "#4ab534",
                      color: "#4ab534",
                      boxShadow: "none",
                    },
                  }}
                >
                  View All Products
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
                    bgcolor: ACCENT,
                    "&:hover": { bgcolor: "#4ab534", boxShadow: "none" },
                  }}
                >
                  Request a Quote
                </Button>
              </Box>
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
                      bgcolor: ACCENT,
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

      <RFQModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        product={HIFLUX_PRODUCT}
      />
    </>
  );
}
