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
  id: "vf-7-centric-butterfly-valve",
  name: "VF-7 Series Centric Butterfly Valve",
  brand: "Value Valves",
  category: "Butterfly Valves",
  categoryId: "butterfly-valves",
  subCategory: "Centric",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/CENTRIC__25C11iulkk.jpg",
  description:
    "Value Valves VF-7 Series centric butterfly valves. Wafer, lug and flanged types across DN40–DN1800. Bi-directional bubble tight shutoff, NSF61 & NSF 372 certified, ATEX approved.",
  keySpecs: [
    { label: "Size Range", value: 'DN40–DN1800 (1½"–72")' },
    { label: "Pressure", value: "10 bar STD / 16 bar OPT" },
    { label: "Temperature", value: "-20°C to +204°C" },
    { label: "Certification", value: "NSF61 · NSF372 · ATEX · ABS" },
  ],
  variantInfo: { count: 3, sizeRange: "DN40–DN1800" },
};

const TECH_SPECS = [
  { label: "Models", value: "VF-730 (Wafer), VF-733 (Lug), VF-737 (Flanged)" },
  { label: "Size Range", value: 'DN40–DN1800 (1½"–72")' },
  {
    label: "Pressure — STD",
    value: "10 bar (150 psi) bi-directional bubble tight",
  },
  { label: "Pressure — OPT", value: "16 bar (230 psi) DN40–DN600 on request" },
  { label: "Temperature Range", value: "-20°C to +204°C (-4°F to +400°F)" },
  {
    label: "Flange Drilling",
    value: "ANSI 125/150, BS Table E, JIS 10K, PN10, PN16",
  },
  {
    label: "Design Standard",
    value: "API 609, ASME B16.34, ISO 5208, AWWA C504",
  },
  { label: "Mounting Flange", value: "ISO 5211" },
  { label: "Face to Face", value: "API 609, ISO 5752, AWWA C504" },
  {
    label: "Seat",
    value: "Soft seat — NBR, EPDM, EPT, White EPT, Neoprene, Silicon, FKM",
  },
  {
    label: "Certifications",
    value: "NSF61 & NSF 372 (UL), ATEX 2014/34/EU, ABS, PED(H), TR CU 010/032",
  },
  {
    label: "Shaft",
    value: 'Square end to DN600 (24") / Round keyway DN650+ (26"+)',
  },
];

const FEATURES = [
  {
    letter: "A",
    title: "Bi-Directional Bubble Tight",
    body: "Bi-directional bubble tight shutoff rated to 10 bar standard and 16 bar optional across DN40–DN600 — reliable isolation in both flow directions.",
  },
  {
    letter: "B",
    title: "NSF61 & NSF 372 Certified",
    body: "Certified by Underwriters Laboratories Inc. to NSF61 and NSF 372, confirming lead-zero content for potable water and food-grade applications.",
  },
  {
    letter: "C",
    title: "ATEX Certified",
    body: "ATEX 2014/34/EU approved for use in explosive atmosphere environments — suitable for petrochemical, flue gas and desulphurization applications.",
  },
  {
    letter: "D",
    title: "ABS Ship Certified",
    body: "ABS (American Bureau of Shipping) manufacture and design assessed — certified for marine and shipbuilding applications.",
  },
  {
    letter: "E",
    title: "Wide Seat Material Options",
    body: "NBR, EPDM, EPT, White EPT, Neoprene, Silicon and FKM seat options cover temperatures from -20°C to +204°C across all media types.",
  },
  {
    letter: "F",
    title: "Self-Lubricating Bushing",
    body: "Self-lubricating bush design rated to 50,000 cycles without jamming — extended maintenance intervals and reliable long-term operation.",
  },
  {
    letter: "G",
    title: "Q-Type Design",
    body: 'Q-type design available up to DN350 (14") — no special tools required to disassemble the shaft at top mounting, simplifying maintenance.',
  },
  {
    letter: "H",
    title: "Upgraded Shaft Strength",
    body: "Splined shaft without drilling for taper pin — increased shaft strength and pin-less design for easy maintenance across all sizes.",
  },
  {
    letter: "I",
    title: "Disc Indication",
    body: "Disc indication marked at the shaft end — clearly identifies the disc opening degree at any time without removing the actuator.",
  },
  {
    letter: "J",
    title: "Large Bore Flanged Type",
    body: 'VF-737 flanged type covers DN350–DN1800 (14"–72") with ISO 5211 actuator mounting flange and keyway shaft for large bore applications.',
  },
  {
    letter: "K",
    title: "Anti-Condensation Option",
    body: "Anti-condensation heater available on request for applications in cold or humid environments where condensation presents a risk.",
  },
  {
    letter: "L",
    title: "Wide Application Range",
    body: "Suitable for HVAC, shipbuilding, petrochemical, fire control, seawater, flue gas and desulphurization applications across all major industries.",
  },
];

const TRUST_POINTS = [
  { value: "DN40–DN1800", label: "Size Range" },
  { value: "NSF61 / NSF372", label: "Water Quality" },
  { value: "ATEX", label: "Hazardous Area" },
  { value: "ABS Certified", label: "Marine Approved" },
  { value: "50,000 Cycles", label: "Bushing Life" },
];

const TAGS = [
  "Wafer",
  "Lug",
  "Flanged",
  "NSF61",
  "NSF372",
  "ATEX",
  "ABS",
  "API 609",
  "ISO 5208",
];

export default function CentricButterflyValvePage() {
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/CENTRIC__25C11iulkk.jpg"
                  alt="VF-7 Series Centric Butterfly Valve"
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
                Butterfly Valves / Centric
              </Typography>
              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                VF-7 Series
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Centric Butterfly Valves — DN40 To DN1800
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Value Valves VF-7 Series Centric Butterfly Valves Available In
                Wafer, Lug And Flanged Configurations Across DN40–DN1800.
                Bi-Directional Bubble Tight Shutoff, NSF61 And NSF 372
                Certified, ATEX Approved And ABS Ship Certified For The Most
                Demanding Industrial And Marine Applications.
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
                  { label: "Size Range", value: "DN40–DN1800" },
                  { label: "Pressure", value: "10 bar / 16 bar OPT" },
                  { label: "Temperature", value: "-20°C to +204°C" },
                  { label: "Models", value: "Wafer · Lug · Flanged" },
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
                  href="/valves/industrial-valves/butterfly-valves/centric-butterfly-valve/products"
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
                  href="https://pblol2.blob.core.windows.net/valvenok-images/catalogs/value-valves/butterfly-valves/VF-7_A.pdf"
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
