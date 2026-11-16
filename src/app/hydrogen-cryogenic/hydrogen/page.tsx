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

const YOUNGDO_LOGO =
  "https://pblol2.blob.core.windows.net/valvenok-images/brands/youngdo-logo.png";

const HYDROGEN_PRODUCT: ProductForRFQ = {
  id: "youngdo-hydrogen-valves",
  name: "Youngdo Hydrogen Cylinder Valves",
  brand: "Youngdo",
  category: "Hydrogen & Cryogenic Valves",
  categoryId: "hydrogen-cryogenic",
  subCategory: "Hydrogen Cylinder Valves",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/HE-700.png",
  description:
    "Youngdo high-pressure hydrogen cylinder valves — HC, HE, HK, HS, HSL and EP series to 70 MPa, YHT series at 45 MPa, DRV-350 quick-connect and YEX-1100 explosion-proof. Certification varies by model.",
  keySpecs: [
    { label: "Max Working Pressure", value: "70 MPa" },
    { label: "Certifications", value: "KGS, EC79, R134, IECEx (varies by model)" },
    { label: "Series", value: "HC, HE, HK, HS, HSL, EP, DRV, YHT, YEX" },
    { label: "Service", value: "Hydrogen Storage & Distribution" },
  ],
  variantInfo: { count: 13, sizeRange: "3–70 MPa" },
};

const TECH_SPECS = [
  { label: "Max Working Pressure", value: "70.0 MPa / 35.0 MPa" },
  { label: "YHT Series Working Pressure", value: "45 MPa" },
  { label: "Explosion-Proof (YEX-1100)", value: "3.0 MPa" },
  {
    label: "Inlet Thread Options",
    value: '1 1/2"-12UNF, 9/16"-18UNF, M18x1.5P, M35x2.0P, PT1/4',
  },
  {
    label: "Outlet Thread Options",
    value: '9/16"-18UNF, M12x1.5P, 3/4"-20UNEF, Quick-On-Type, PT1/4',
  },
  { label: "Fuse Metal Activation Temp", value: "110°C ±5°C (where fitted)" },
  { label: "Glass Bulb Activation Temp", value: "105°C–110°C ±5°C (where fitted)" },
  { label: "KGS Standard (DRV, YHT)", value: "KS B 6214 / KGS AA311" },
  { label: "Vehicle Regulations", value: "EC79, ECE R134 (selected models)" },
  { label: "Explosion-Proof Standard", value: "IEC60079-0, 1, 18 / IECEx" },
  { label: "Additional Certifications", value: "CSEL, KHK (selected models)" },
  {
    label: "Total Models",
    value:
      "13 Models across 9 Series — HC, HE, HK, HS, HSL, EP-70PA, EP-70PQ, EP-700PB, DRV-350, YHT-1514L, YHT-3516L, YHT-3516AL, YEX-1100",
  },
];

const FEATURES = [
  {
    letter: "A",
    title: "Ultra High Pressure",
    body: "Working pressure up to 70 MPa for the most demanding hydrogen storage and distribution applications.",
  },
  {
    letter: "B",
    title: "Thermally Activated Pressure Relief",
    body: "Fuse metal and glass bulb elements vent gas when the valve is exposed to excessive heat. Both are fitted on the HC, HE, HK, HS, HSL, EP and DRV models; YHT models use a glass bulb only and the YEX-1100 has neither.",
  },
  {
    letter: "C",
    title: "KGS Certification",
    body: "KGS certification on 10 of the 13 models. Certification varies by model — see the product table.",
  },
  {
    letter: "D",
    title: "EC79 & R134 Models",
    body: "Selected models carry EC79 and UN ECE R134 approvals, the regulations for hydrogen vehicle components — see the product table.",
  },
  {
    letter: "E",
    title: "Wide Thread Range",
    body: "Multiple inlet and outlet thread configurations to match all standard cylinder and connection types.",
  },
  {
    letter: "F",
    title: "Quick-Connect Option",
    body: "DRV-350 quick-on-type outlet for fast and safe cylinder connection without tools.",
  },
  {
    letter: "G",
    title: "Explosion-Proof",
    body: "YEX-1100 rated to IEC60079 and IECEx for safe installation in hazardous hydrogen environments.",
  },
  {
    letter: "H",
    title: "13 Model Range",
    body: "13 models across nine series covering 3–70 MPa service, from the 3 MPa YEX-1100 to 70 MPa cylinder valves.",
  },
  {
    letter: "I",
    title: "CSEL & KHK Models",
    body: "CSEL and KHK certifications are listed on selected models — see the product table.",
  },
  {
    letter: "J",
    title: "H₂ Ready",
    body: "Designed for hydrogen gas service. Certification varies by model — see the product table.",
  },
  {
    letter: "K",
    title: "Hydrogen Applications",
    body: "Cylinder valves for hydrogen storage and distribution systems — please confirm suitability for your application when requesting a quote.",
  },
  {
    letter: "L",
    title: "Technical Support",
    body: "Our UK team can help confirm model suitability, certification and lead time for your application — contact us with your requirements.",
  },
];

const TRUST_POINTS = [
  { value: "70 MPa", label: "Max Working Pressure" },
  { value: "KGS · EC79", label: "Certifications (by model)" },
  { value: "IECEx", label: "Explosion-Proof" },
  { value: "13 Models", label: "Product Range" },
  { value: "H₂ Ready", label: "Hydrogen Service" },
];

const CERTIFICATIONS = [
  "KGS",
  "EC79",
  "R134",
  "CSEL",
  "KHK",
  "IECEx",
  "70 MPa",
  "H₂ Service",
];

export default function HydrogenValvesPage() {
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/HE-700.png"
                  alt="Youngdo Hydrogen Cylinder Valves"
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
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  bgcolor: "#fff",
                  border: "1px solid #E5EBE6",
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
                Hydrogen & Cryogenic / Cylinder Valves
              </Typography>

              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                Hydrogen Cylinder Valves
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                High-Pressure Hydrogen Service — 3–70 MPa
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Youngdo supplies a comprehensive range of high-pressure hydrogen
                cylinder valves engineered for hydrogen storage, refuelling
                stations and cylinder distribution. 13 models across the HC, HE,
                HK, HS, HSL, EP, DRV, YHT and YEX series, rated from 3 to 70
                MPa. Certification varies by model (KGS, EC79, R134, IECEx and
                others) — see the product table.
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
                  { label: "Max Pressure", value: "70 MPa" },
                  { label: "Models", value: "13 (9 Series)" },
                  { label: "Certifications", value: "KGS · EC79 · IECEx (by model)" },
                  { label: "Service", value: "H₂ Storage & Distribution" },
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
                  href="/hydrogen-cryogenic/hydrogen/products"
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

      {/* Technical Specifications */}
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

      {/* Features */}
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
        product={HYDROGEN_PRODUCT}
      />
    </>
  );
}
