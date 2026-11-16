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
import { GroupSiteLinks, groupSitesIn } from "@/src/app/Common/GroupVisitLinks";

const HIFLUX_LOGO =
  "https://pblol2.blob.core.windows.net/valvenok-images/brands/hiflux-logo.png";
const ACCENT = "#61D649";

const HIFLUX_PRODUCT: ProductForRFQ = {
  id: "hiflux-high-pressure-valves",
  name: "Hiflux High Pressure Valves",
  brand: "Hiflux",
  category: "High Pressure Valves",
  categoryId: "high-pressure",
  subCategory: "High Pressure Valves",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/needle-valve.webp",
  description:
    "Hiflux high pressure valves rated up to 150,000 psi — check, needle, ball, air operated, safety and special valves for industrial, hydrogen and wellhead applications.",
  keySpecs: [
    { label: "Max Pressure", value: "~150,000 psi" },
    { label: "Certifications", value: "KC, KGS (selected models)" },
    { label: "Types", value: "Check, Needle, Ball, AOV, Safety, Special" },
    { label: "Service", value: "Industrial, Hydrogen, Wellhead" },
  ],
  variantInfo: { count: 54, sizeRange: "3,000–150,000 psi" },
};

const TECH_SPECS = [
  { label: "Max Working Pressure", value: "~150,000 psi (Needle Valve)" },
  { label: "Lowest Rated Models", value: "~3,000 psi (pipe needle & control valves)" },
  { label: "Check Valve Range", value: "~15,000 – 100,000 psi" },
  { label: "Needle Valve Range", value: "~15,000 – 150,000 psi" },
  { label: "Ball Valve Range", value: "~15,000 – 20,000 psi" },
  { label: "Air Operated Valve Range", value: "~15,000 – 60,000 psi" },
  { label: "Safety / Relief Valve Range", value: "1,000 – 60,000 psi" },
  { label: "Rupture Disc Range", value: "~11,500 – 60,000 psi" },
  { label: "Special Valve Range", value: "~3,000 – 30,000 psi" },
  { label: "Connection Types", value: "PT Female, NPT Female, UNF, Pipe" },
  { label: "Certifications", value: "KC, KGS — varies by model" },
  { label: "Total Models", value: "54 Models across 6 valve categories" },
];

const FEATURES = [
  {
    letter: "A",
    title: "Ultra High Pressure",
    body: "Needle valves rated to 150,000 psi for the most extreme research, test and industrial applications.",
  },
  {
    letter: "B",
    title: "KC & KGS Certified Models",
    body: "KC-certified proportional gas relief valves and a KGS-certified hydrogen refuelling needle valve. Certification varies by model — please confirm when requesting a quote.",
  },
  {
    letter: "C",
    title: "Check Valve Range",
    body: "Six check valve models from 15,000 to 100,000 psi with PT female, NPT female and UNF connections.",
  },
  {
    letter: "D",
    title: "3-Way Needle Valves",
    body: "2-stem 3-way needle valves for multi-port flow control at 15,000, 20,000, 30,000 and 60,000 psi.",
  },
  {
    letter: "E",
    title: "Air Operated Valves",
    body: "Normally open and normally closed AOV configurations rated to 60,000 psi for automated systems.",
  },
  {
    letter: "F",
    title: "Safety & Relief Valves",
    body: "Proportional type, field adjustable and factory-set relief valves from 1,000 to 60,000 psi for water and gas service.",
  },
  {
    letter: "G",
    title: "Rupture Discs",
    body: "High, medium and low pressure rupture discs with matching safety head assemblies for burst protection.",
  },
  {
    letter: "H",
    title: "Hydrogen Refuelling",
    body: "KGS-certified hydrogen refuelling system needle valve for H₂ station infrastructure.",
  },
  {
    letter: "I",
    title: "Pneumatic Ball Valves",
    body: "Pneumatic actuator ball valves in PT and NPT female configurations for automated shut-off.",
  },
  {
    letter: "J",
    title: "Wellhead & DBB",
    body: "Specialised wellhead gauge valves and double block and bleed valves for upstream oil and gas.",
  },
  {
    letter: "K",
    title: "High Temperature Service",
    body: "High temperature special valves rated to 20,000 psi for elevated temperature process environments.",
  },
  {
    letter: "L",
    title: "54 Model Range",
    body: "Comprehensive catalogue covering every high pressure valve need from standard check valves to ultra high pressure needle valves.",
  },
];

const CERTIFICATIONS = [
  "KC / KGS on selected models",
  "H₂ Refuelling Needle Valve",
  "150,000 psi Max",
  "54 Models",
];

export default function HifluxValvesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero */}
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/needle-valve.webp"
                  alt="Hiflux High Pressure Valves"
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
                High Pressure Valves
              </Typography>

              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                High Pressure Valves
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Check, Needle, Ball, Air Operated, Safety & Special Valves
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Hiflux manufactures a comprehensive range of high pressure
                valves rated up to 150,000 psi. 54 models across check, needle,
                ball, air operated, safety and special valve categories for
                industrial, hydrogen and wellhead applications. Certification
                varies by model — please confirm when requesting a quote.
              </Typography>
              <GroupSiteLinks variant="inline" sites={groupSitesIn("Hiflux")} />

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
                  { label: "Models", value: "54 Products" },
                  { label: "Certifications", value: "KC · KGS (by model)" },
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
                  href="/hydrogen-cryogenic/valves/products"
                  sx={{
                    borderRadius: 0,
                    fontWeight: 800,
                    py: 1.75,
                    fontSize: "1rem",
                    boxShadow: "none",
                    borderColor: ACCENT,
                    color: ACCENT,
                    "&:hover": {
                      borderColor: "#61D649",
                      color: "#61D649",
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
                    "&:hover": { bgcolor: "#61D649", boxShadow: "none" },
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

      {/* Tech Specs */}
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
