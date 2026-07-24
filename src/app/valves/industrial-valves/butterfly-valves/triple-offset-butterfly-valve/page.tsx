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
import TrustStrip from "../../../../Common/Products_Page/TrustStrip";
import RFQModal from "@/src/app/Common/RFQCard/RFQModal";
import { ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";

const PRODUCT: ProductForRFQ = {
  id: "vf-8a-triple-offset-butterfly-valve",
  name: "VF-8A Series Triple Offset Butterfly Valve",
  brand: "Value Valves",
  category: "Butterfly Valves",
  categoryId: "butterfly-valves",
  subCategory: "Triple Offset",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/butter-val.jpg",
  description:
    "High performance triple offset butterfly valves. ANSI 150LB, 300LB and 600LB. DN100–DN1200. API 609, API 607 fire safe, SIL 3 certified.",
  keySpecs: [
    { label: "Pressure Class", value: "ANSI 150 / 300 / 600LB" },
    { label: "Size Range", value: 'DN100–DN1200 (4"–48")' },
    { label: "Temperature", value: "-100°C to +760°C" },
    { label: "Leakage Class", value: "ANSI FCI 70-2 Class V" },
  ],
  variantInfo: { count: 3, sizeRange: "DN100–DN1200" },
};

const TECH_SPECS = [
  { label: "Pressure Classes", value: "ANSI 150LB, 300LB, 600LB" },
  { label: "Size Range", value: 'DN100–DN1200 (4"–48")' },
  {
    label: "End Connections",
    value: "Wafer, Lug, Flanged Short, Flanged Long, Flanged Gate",
  },
  {
    label: "Temperature — Laminated",
    value: "-75°C to +550°C (-103°F to +1022°F)",
  },
  {
    label: "Temperature — Metal Seat",
    value: "-100°C to +760°C (-148°F to +1400°F)",
  },
  { label: "Leakage Class", value: "ANSI FCI 70-2 Class V / ISO 5208 Rate A" },
  { label: "Fire Safe", value: "API 607 / ISO 10497" },
  { label: "Fugitive Emission", value: "ISO 15848 / TA LUFT / ANSI/ISA-SP-93" },
  { label: "Valve Design", value: "ASME B16.34 / API 609" },
  { label: "Pressure Testing", value: "API 598 / ISO 5208" },
  {
    label: "Manufacturing Quality",
    value: "ISO 9001 / PED 2014/68/EU / ATEX 2014/34/EU",
  },
  {
    label: "SIL Rating",
    value: "SIL 2 (low demand) / SIL 3 (redundant architecture)",
  },
];

const FEATURES = [
  {
    letter: "A",
    title: "Triple Offset Design",
    body: "True triple offset geometry eliminates seal wear during operation — sealing surfaces only contact at the final closed position, providing bubble-tight shutoff.",
  },
  {
    letter: "B",
    title: "Bi-Directional Shutoff",
    body: "Floating self-adjustable sealing design with elliptical sealing system ensures flawless bubble-tight shutoff in both flow directions.",
  },
  {
    letter: "C",
    title: "API 607 Fire Safe",
    body: "Certified fire safe to API 607 and ISO 10497, suitable for use in fire risk environments across oil & gas, refinery and petrochemical service.",
  },
  {
    letter: "D",
    title: "SIL 3 Capable",
    body: "Suitable for safety instrumented systems up to SIL 2 in low demand mode, and up to SIL 3 in redundant architecture configurations.",
  },
  {
    letter: "E",
    title: "Extreme Temperature Range",
    body: "Metal seat variants rated from -100°C to +760°C. Laminated seat variants rated from -75°C to +550°C for cryogenic and high temperature service.",
  },
  {
    letter: "F",
    title: "Disc Hard Face",
    body: "Standard disc built with Stellite weld overlay or hard chrome plating — increased hardness and wear resistance for long service life.",
  },
  {
    letter: "G",
    title: "Upgraded Shaft Strength",
    body: "Splined shaft design eliminates drilling for taper pin, increasing shaft strength and simplifying maintenance — pin-less disc design.",
  },
  {
    letter: "H",
    title: "Blow-Out Protection",
    body: "Both shaft stop and bottom cover provide reliable blow-out protection across all operating pressures and temperatures.",
  },
  {
    letter: "I",
    title: "Dust Proof Design",
    body: "Bushing design prevents ingress of foreign material into the shaft area, extending service life in dirty or abrasive environments.",
  },
  {
    letter: "J",
    title: "Fugitive Emission Approved",
    body: "Approved to ISO 15848, TA LUFT and ANSI/ISA-SP-93 for applications requiring controlled fugitive emissions from valve stem sealing.",
  },
  {
    letter: "K",
    title: "Wide Material Options",
    body: "Body, disc and shaft available in WCB, CF8, CF8M, CF3, CF3M, Inconel, Hastelloy, Monel, Alloy 20, Titanium and duplex stainless options.",
  },
  {
    letter: "L",
    title: "Cryogenic Service",
    body: "Cryogenic variant available to BS 6364, rated down to -100°C for LNG, liquid nitrogen and other low temperature process applications.",
  },
];

const TRUST_POINTS = [
  { value: "API 609", label: "Design Standard" },
  { value: "API 607", label: "Fire Safe" },
  { value: "SIL 3", label: "Safety Rating" },
  { value: "Class V", label: "Leakage Class" },
  { value: "DN100–DN1200", label: "Size Range" },
];

const TAGS = [
  "ANSI 150LB",
  "ANSI 300LB",
  "ANSI 600LB",
  "API 609",
  "API 607 Fire Safe",
  "SIL 3",
  "ISO 15848",
  "Cryogenic",
];

export default function TripleOffsetButterflyValvePage() {
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/butter-val.jpg"
                  alt="VF-8A Triple Offset Butterfly Valve"
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
              <Box sx={{ mb: 2 }}>
                <Box
                  component="img"
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/logo.svg"
                  alt="Value Valves"
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
                Butterfly Valves / Triple Offset
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                VF-8A Series
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                High Performance Triple Offset Butterfly Valves
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                High Performance Triple Offset Butterfly Valves Engineered For
                The Most Demanding Process Applications. ANSI 150LB, 300LB And
                600LB Pressure Classes, DN100–DN1200, API 607 Fire Safe, SIL 3
                Capable And Rated From -100°C To +760°C.
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
                  { label: "Pressure Class", value: "150 / 300 / 600LB" },
                  { label: "Size Range", value: "DN100–DN1200" },
                  { label: "Temperature", value: "-100°C to +760°C" },
                  { label: "Leakage", value: "Class V Bubble Tight" },
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
                  href="/valves/industrial-valves/butterfly-valves/triple-offset-butterfly-valve/products"
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
                  View Products
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
                <Button
                  variant="outlined"
                  size="large"
                  fullWidth
                  href="https://pblol2.blob.core.windows.net/valvenok-images/catalogs/value-valves/butterfly-valves/VF-8A.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  Download Catalog
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
