// info page — e.g. pumps-seals/mechanical-seals/info/page.tsx
// or wherever your hero page lives before the grid
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

const PRODUCT: ProductForRFQ = {
  id: "bellows-sealed-globe-valves",
  name: "Bellows Sealed Globe Valves",
  brand: "Valvenok",
  category: "Sealed Valves",
  categoryId: "sealed-valves",
  subCategory: "Bellows Sealed Globe Valves",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/din-standard-bellows-sealed-globe-valve-plus.jpg",
  description:
    "A complete range of bellows sealed globe valves across DIN, ANSI and JIS standards. Double seal design, zero stem leakage and corrosion-resistant construction for demanding process, chemical and industrial applications.",
  keySpecs: [
    { label: "Standards", value: "DIN · ANSI · JIS" },
    { label: "Seal Design", value: "Bellows + Packing" },
    { label: "Leakage", value: "Zero Stem Leakage" },
    { label: "Application", value: "Process & Chemical" },
  ],
  variantInfo: { count: 11, sizeRange: "Full Range" },
};

const TECH_SPECS = [
  { label: "Standards", value: "DIN, ANSI, JIS" },
  {
    label: "Types",
    value: "Bellows Sealed, Gland Packing, Check Valve, Y-Type, Angle",
  },
  { label: "Seal Design", value: "Double seal — bellows + packing backup" },
  { label: "Stem Leakage", value: "Zero leakage via metal bellows barrier" },
  {
    label: "Disc Design",
    value: "Conical disc — removes impurities, reliable seal",
  },
  {
    label: "Casting",
    value: "German coated sand casting, 12.5–25 micron finish",
  },
  { label: "Defect Rate", value: "Over 98% defect free" },
  {
    label: "Special Material",
    value: "Titanium seal element available (triple seal)",
  },
  {
    label: "Configuration",
    value: "Standard, Extend, Super, Y-Type, Angle, High Pressure",
  },
  {
    label: "Application",
    value: "Process, Chemical, Industrial, High Temperature",
  },
  { label: "Certifications", value: "CE, ISO compliant" },
  {
    label: "Models",
    value: "11 variants across DIN, ANSI, JIS and special types",
  },
];

const FEATURES = [
  {
    letter: "A",
    title: "Zero Stem Leakage",
    body: "Metal bellows form an absolute barrier between the fluid medium and atmosphere — zero leakage at the stem under all operating conditions.",
  },
  {
    letter: "B",
    title: "Double Seal Design",
    body: "Bellows plus packing backup seal — if the bellows fail, the packing provides a secondary seal, ensuring continuous leak-tight operation.",
  },
  {
    letter: "C",
    title: "Conical Disc Design",
    body: "Streamlined conical disc removes impurities from the seating surface, maintaining reliable sealing and extending valve service life.",
  },
  {
    letter: "D",
    title: "Bellows Protected Space",
    body: "On Extend and Super series, bellows are housed in a sealed protected space — isolated from medium, pressure and temperature for maximum corrosion resistance.",
  },
  {
    letter: "E",
    title: "Titanium Triple Seal",
    body: "Extend series titanium seal element provides a triple seal — delivering superior reliability in high temperature and highly corrosive applications.",
  },
  {
    letter: "F",
    title: "Double Stem Construction",
    body: "Super series combines upper and lower stem in wear-resisting and anti-corrosion materials, meeting the most demanding wear and corrosion resistance requirements.",
  },
  {
    letter: "G",
    title: "High Quality Casting",
    body: "German coated sand casting technology achieves surface smoothness of 12.5–25 microns with over 98% of castings free from pores, blisters and cracks.",
  },
  {
    letter: "H",
    title: "Y-Type Flow Optimised",
    body: "Y-Type straight flow structure reduces fluid resistance, accelerates flow rate and minimises pressure loss — ideal for viscous or caking media.",
  },
  {
    letter: "I",
    title: "Angle Type Space Saving",
    body: "90° outlet eliminates the need for a separate elbow fitting at pipeline corners, saving installation space and reducing potential leak points.",
  },
  {
    letter: "J",
    title: "High Pressure Rated",
    body: "ANSI High Pressure variant features automatically welded bellows at both ends forming a robust metal barrier suitable for high pressure service.",
  },
  {
    letter: "K",
    title: "DIN · ANSI · JIS Standards",
    body: "Full coverage across the three major international standards, ensuring compatibility with existing pipeline systems and project specifications worldwide.",
  },
  {
    letter: "L",
    title: "Wide Application Range",
    body: "Suitable for process plants, chemical, pharmaceutical, power generation and industrial applications requiring reliable zero-leakage globe valve performance.",
  },
];

const TRUST_POINTS = [
  { value: "Zero Leakage", label: "Stem Seal" },
  { value: "DIN·ANSI·JIS", label: "Standards" },
  { value: "Double Seal", label: "Bellows + Packing" },
  { value: "11 Models", label: "Full Range" },
  { value: "98% Defect Free", label: "Cast Quality" },
];

const TAGS = [
  "DIN",
  "ANSI",
  "JIS",
  "Bellows Sealed",
  "Zero Leakage",
  "Double Seal",
  "Gland Packing",
  "Check Valve",
];

export default function BellowsSealedGlobeValveInfoPage() {
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/din-standard-bellows-sealed-globe-valve-plus.jpg"
                  alt="Bellows Sealed Globe Valves"
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
                Sealed Valves / Bellows Sealed Globe Valves
              </Typography>

              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                Mechanical Seals
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                DIN · ANSI · JIS — Zero Stem Leakage
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                A Complete Range Of Bellows Sealed Globe Valves Across DIN, ANSI
                And JIS Standards. Double Seal Design With Bellows Plus Packing
                Backup Ensures Zero Stem Leakage Across Demanding Process,
                Chemical And Industrial Applications.
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
                  { label: "Standards", value: "DIN · ANSI · JIS" },
                  { label: "Seal", value: "Bellows + Packing" },
                  { label: "Leakage", value: "Zero Stem Leakage" },
                  { label: "Models", value: "11 Variants" },
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
                  href="/valves/sealed-valves/globe-valves/products"
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
        product={PRODUCT}
      />
    </>
  );
}
