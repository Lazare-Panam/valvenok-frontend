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
  id: "hiflux-high-pressure-fittings",
  name: "Hiflux High Pressure Fittings & Accessories",
  brand: "Hiflux",
  category: "High Pressure Fittings",
  categoryId: "high-pressure-fittings",
  subCategory: "Fittings, Accessories, Manifold Blocks, Tube Caps",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/reducing-fitting.png",
  description:
    "Hiflux high pressure fittings, accessories, manifold blocks, tube caps and thread lubricant rated up to 150,000 psi for industrial, hydrogen and wellhead applications.",
  keySpecs: [
    { label: "Max Pressure", value: "~150,000 psi" },
    { label: "Certifications", value: "KC, KGS (varies by product)" },
    {
      label: "Types",
      value: "Fittings, Accessories, Manifold Blocks, Tube Caps, Lubricant",
    },
    { label: "Service", value: "Industrial, Hydrogen, Wellhead" },
  ],
  variantInfo: { count: 27, sizeRange: "15,000–150,000 psi" },
};

const TECH_SPECS = [
  {
    label: "Max Working Pressure",
    value: "~150,000 psi (Ultra High Pressure Fittings)",
  },
  { label: "Min Working Pressure", value: "~15,000 psi" },
  { label: "Reducing Fitting Range", value: "~20,000 – 60,000 psi" },
  { label: "Standard Fitting Range", value: "~15,000 – 150,000 psi" },
  { label: "Fitting Accessory Range", value: "~15,000 – 150,000 psi" },
  { label: "Manifold Block Range", value: "~15,000 – 60,000 psi" },
  { label: "Tube Cap Range", value: "~15,000 – 60,000 psi" },
  { label: "Connection Types", value: "PT Female, NPT Female, UNF" },
  {
    label: "Anti-Vibration Options",
    value: "Available at 20,000 and 60,000 psi",
  },
  { label: "Thread Lubricant", value: "Oil Based — Blue Lube" },
  { label: "Certifications", value: "KC, KGS — varies by product" },
  { label: "Total Products", value: "27 Products across 5 categories" },
];

const FEATURES = [
  {
    letter: "A",
    title: "Ultra High Pressure Fittings",
    body: "Standard and reducing fittings rated to 150,000 psi for the most extreme research, test and industrial applications.",
  },
  {
    letter: "B",
    title: "Reducing Fittings",
    body: "High pressure reducing fittings at 20,000 and 60,000 psi for pressure step-down between lines.",
  },
  {
    letter: "C",
    title: "PT & NPT Female Options",
    body: "Standard fittings available in PT and NPT female connections for Korean and North American system compatibility.",
  },
  {
    letter: "D",
    title: "Anti-Vibration Accessories",
    body: "Fitting accessories with anti-vibration design at 20,000 and 60,000 psi for dynamic environments.",
  },
  {
    letter: "E",
    title: "Manifold Blocks",
    body: "Multi-port manifold blocks from 15,000 to 60,000 psi in PT female, NPT female and UNF configurations.",
  },
  {
    letter: "F",
    title: "Tube Caps",
    body: "High, medium and low pressure tube caps for sealing lines at 15,000, 20,000 and 60,000 psi.",
  },
  {
    letter: "G",
    title: "Blue Lube Thread Lubricant",
    body: "Oil-based thread lubricant designed for high pressure fittings — prevents galling and seizing on assembly.",
  },
  {
    letter: "H",
    title: "Hydrogen Service",
    body: "Fittings and accessories for hydrogen service infrastructure — please confirm suitability for your specific item and conditions when requesting a quote.",
  },
  {
    letter: "I",
    title: "KC & KGS Certification",
    body: "KC and KGS certification varies by product — please confirm the marks required for your item when requesting a quote.",
  },
  {
    letter: "J",
    title: "Wellhead & Industrial",
    body: "Designed for upstream wellhead, industrial high pressure and research test applications.",
  },
  {
    letter: "K",
    title: "Wide Pressure Coverage",
    body: "Products spanning 15,000 to 150,000 psi covering low, medium, high and ultra high pressure systems.",
  },
  {
    letter: "L",
    title: "27 Product Range",
    body: "Comprehensive catalogue of fittings, accessories, manifold blocks, tube caps and lubricant for all high pressure connection needs.",
  },
];

const CERTIFICATIONS = [
  "KC / KGS by product",
  "150,000 psi Max",
  "27 Products",
];

export default function HifluxFittingsPage() {
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/reducing-fitting.png"
                  alt="Hiflux High Pressure Fittings"
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
                High Pressure Fittings & Accessories
              </Typography>

              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                High Pressure Fittings
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Fittings, Accessories, Manifold Blocks, Tube Caps & Lubricant
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Hiflux manufactures a comprehensive range of high pressure
                fittings and accessories rated up to 150,000 psi. 27 products
                across fittings, accessories, manifold blocks, tube caps and
                thread lubricant for industrial, hydrogen and wellhead
                applications. Certification varies by product — please confirm
                when requesting a quote.
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
                  { label: "Max Pressure", value: "150,000 psi" },
                  { label: "Products", value: "27 Items" },
                  { label: "Certifications", value: "KC · KGS (by product)" },
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
                  href="/hydrogen-cryogenic/fittings/products"
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
