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
import TrustStrip from "@/src/app/Common/Products_Page/TrustStrip";
import RFQModal from "@/src/app/Common/RFQCard/RFQModal";
import { ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";
import { alpha } from "@mui/material/styles";

const YOUNGDO_LOGO =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/top_logo.png";
const BRAND_GREEN = "#61D649";

const IGV_PRODUCT: ProductForRFQ = {
  id: "youngdo-industrial-gas-valves",
  name: "Youngdo Industrial Gas Valves",
  brand: "Youngdo",
  category: "Industrial Gas Valves",
  categoryId: "industrial-gas",
  subCategory: "Industrial Gas Valves",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOC-2820.png",
  description:
    "Youngdo industrial gas cylinder valves across 7 categories — tapered and unified inlet threads, non return valves, acetylene, chlorine/ammonia, tube trailers and piping connection valves. Certification and standards vary by model.",
  keySpecs: [
    { label: "Max Working Pressure", value: "25 MPa" },
    { label: "Certifications", value: "KGS, KS (varies by model)" },
    { label: "Categories", value: "7 Application Categories" },
    { label: "Service", value: "Industrial Gas Cylinder & Distribution" },
  ],
  variantInfo: { count: 75, sizeRange: "Up to 25 MPa" },
};

const TECH_SPECS = [
  { label: "Tapered Inlet Pressure", value: "11.8 – 19.6 MPa" },
  { label: "Unified Inlet Category Pressure", value: "11.8 – 25 MPa (1800 – 2400 psi ≈ 12.4 – 16.5 MPa on CGA models)" },
  { label: "Non Return Valve Pressure", value: "11.76 – 20 MPa" },
  { label: "Acetylene Pressure", value: "420 – 500 psi / 2.9 – 3.4 MPa" },
  { label: "Chlorine/Ammonia Pressure", value: "1.3 – 1.76 MPa (KGS models); 500 psi ≈ 3.4 MPa (CGA 820 models)" },
  { label: "Tube Trailer Pressure", value: "17.2 – 25 MPa" },
  { label: "Piping Connection Pressure", value: "14.7 – 19.6 MPa" },
  {
    label: "Inlet Thread Standards",
    value: "W28, W28.8 (25E), W39, 3/8-18 NGT, 3/4-14 NGT, 1-11 1/2 NGT, 1.125-12 UNF, 0.750-16 UNF, BS 341, PF 3/4",
  },
  {
    label: "Outlet Thread Standards",
    value:
      "W22-14th, W23-14th, W26-14th, W22.5-14-LH, CGA 200/320/326/350/510/520/540/580/820, BS 341, DIN477, UNI 11144",
  },
  {
    label: "Standards",
    value: "KGS AA311, KS B 6214, CGA V-1, CGA V-9, BS 341, ISO 10297, DIN477, UNI 11144 (varies by model)",
  },
  {
    label: "Certifications",
    value: "KGS, KS (varies by model — see the product table)",
  },
  {
    label: "Total Categories",
    value:
      "7 — Tapered, Unified, Non Return, Acetylene, Chlorine/Ammonia, Tube Trailers, Piping",
  },
];

const FEATURES = [
  {
    letter: "A",
    title: "Tapered Inlet Thread Series",
    body: "YOC, YRH, YHC, YCC series with W28 and 3/4-14 NGT inlet threads for standard industrial gas cylinders.",
  },
  {
    letter: "B",
    title: "Unified Inlet Thread Series",
    body: "NH, NH6 and YKC series. NH6 and YKC models use 1.125-12 UNF or 0.750-16 UNF inlets; NH models use 3/4-14 NGT (tapered), BS 341 or W28.8 inlets — check the inlet thread for each model.",
  },
  {
    letter: "C",
    title: "Non Return Valves",
    body: "RP1 and HR series non-return valves with check valve closing off pressure rated to 0.3 MPa for safe backflow prevention.",
  },
  {
    letter: "D",
    title: "Acetylene Service",
    body: "YAC series dedicated acetylene cylinder valves, with CGA V-9, CGA V-1, CGA S-1.1 and ISO 10297 listed as design standards on most models — see the product table.",
  },
  {
    letter: "E",
    title: "Chlorine & Ammonia",
    body: "YCL and YMC series valves rated for chlorine and ammonia service with CGA 820 outlet connections.",
  },
  {
    letter: "F",
    title: "Tube Trailers",
    body: "YHT and YHET series high-pressure tube trailer valves rated to 25 MPa with W39-12th inlet threads.",
  },
  {
    letter: "G",
    title: "Piping Connection",
    body: "YXG series piping connection valves rated to 19.6 MPa for industrial gas distribution pipeline service.",
  },
  {
    letter: "H",
    title: "KGS & KS Models",
    body: "KGS certification on selected models, and KS on selected W28 inlet models, to KGS AA311 and KS B 6214. Certification varies by model — see the product table.",
  },
  {
    letter: "I",
    title: "CGA Standards",
    body: "CGA V-1, V-9 and S-1.1 are listed as design standards on CGA-outlet models for North American cylinder compatibility.",
  },
  {
    letter: "J",
    title: "BS 341 Connections",
    body: "Selected NH and RP1 models with connections to BS 341 for UK industrial gas cylinder applications.",
  },
  {
    letter: "K",
    title: "ISO 10297 Models",
    body: "ISO 10297 is listed as a design standard on selected NH, NH6, RP1 and YAC models — see the product table.",
  },
  {
    letter: "L",
    title: "Technical Support",
    body: "Our UK team can help confirm model suitability, certification and lead time for your application — contact us with your requirements.",
  },
];

const TRUST_POINTS = [
  { value: "25 MPa", label: "Max Working Pressure" },
  { value: "KGS · KS", label: "Certifications (by model)" },
  { value: "BS 341 · ISO 10297", label: "Standards (selected models)" },
  { value: "7 Categories", label: "Application Range" },
  { value: "Youngdo", label: "Manufacturer" },
];

const CERTIFICATIONS = [
  "KGS · KS by model",
  "To CGA V-1 / V-9",
  "To BS 341",
  "To ISO 10297",
  "DIN477",
  "UNI 11144",
];

export default function IndustrialGasValvesPage() {
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOC-2820.png"
                  alt="Youngdo Industrial Gas Valves"
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
                  bgcolor: BRAND_GREEN,
                  px: 2,
                  py: 1,
                  mb: 3,
                  borderRadius: 1,
                }}
              >
                <Box
                  component="img"
                  src={YOUNGDO_LOGO}
                  alt="Youngdo"
                  sx={{ maxHeight: 32, maxWidth: 130, objectFit: "contain" }}
                />
              </Box>

              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                  letterSpacing: 2,
                  display: "block",
                }}
              >
                Industrial Gas Valves
              </Typography>

              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                Industrial Gas Cylinder Valves
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Tapered, Unified, Acetylene, Chlorine, Tube Trailers & More
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Youngdo supplies a comprehensive range of industrial gas
                cylinder valves across 7 application categories — tapered and
                unified inlet thread valves, non return valves, acetylene,
                chlorine/ammonia, tube trailer and piping connection valves.
                Certification (KGS, KS) and design standards (CGA, BS 341, ISO
                10297) vary by model — see the product table.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                {CERTIFICATIONS.map((c) => (
                  <Chip
                    key={c}
                    label={c}
                    size="small"
                    sx={{
                      bgcolor: alpha(BRAND_GREEN, 0.1),
                      color: "text.primary",
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
                  { label: "Max Pressure", value: "25 MPa (Tube Trailers)" },
                  { label: "Categories", value: "7 Application Types" },
                  { label: "Certifications", value: "KGS · KS (by model)" },
                  { label: "Service", value: "Industrial Gas Cylinders" },
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
                  href="/hydrogen-cryogenic/industrial-gas/products"
                  sx={{
                    borderRadius: 0,
                    fontWeight: 800,
                    py: 1.75,
                    fontSize: "1rem",
                    boxShadow: "none",
                    borderColor: BRAND_GREEN,
                    color: BRAND_GREEN,
                    "&:hover": {
                      borderColor: "primary.main",
                      color: "primary.main",
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
                    bgcolor: BRAND_GREEN,
                    "&:hover": { bgcolor: "#50c23a", boxShadow: "none" },
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
                      bgcolor: BRAND_GREEN,
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
        product={IGV_PRODUCT}
      />
    </>
  );
}
