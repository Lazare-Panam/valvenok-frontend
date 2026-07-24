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
  id: "vf-264-awwa-double-flanged-butterfly-valve",
  name: "VF-264 AWWA Double Flanged Butterfly Valve",
  brand: "Value Valves",
  category: "Butterfly Valves",
  categoryId: "butterfly-valves",
  subCategory: "AWWA Double Flanged",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/awwaa.jpg",
  description:
    "Value Valves VF-264 AWWA double flanged butterfly valves. DN350–DN2600, AWWA C504 & C516, pressure classes 25B/75B/150B, double eccentric design, bi-directional tight shutoff.",
  keySpecs: [
    { label: "Size Range", value: 'DN350–DN2600 (14"–104")' },
    { label: "Standard", value: "AWWA C504 & C516" },
    { label: "Pressure Class", value: "25B · 75B · 150B" },
    { label: "Temperature", value: "-20°C to +120°C" },
  ],
  variantInfo: { count: 1, sizeRange: "DN350–DN2600" },
};

const TECH_SPECS = [
  { label: "Model", value: "VF-264 Series" },
  { label: "Size Range", value: 'DN350–DN2600 (14"–104")' },
  { label: "Standard", value: 'AWWA C504 (14"–72") / AWWA C516 (78"–104")' },
  { label: "Pressure Classes", value: "AWWA 25B, 75B & 150B" },
  { label: "Temperature Range", value: "-20°C to +120°C (-4°F to +248°F)" },
  { label: "End Connection", value: "Double Flanged (Short Type)" },
  { label: "Design", value: "AWWA C504, C516" },
  { label: "Face to Face", value: "AWWA C504, C516" },
  { label: "Mounting Flange", value: "ISO 5211" },
  { label: "Body Shell", value: "AWWA C504, C516" },
  { label: "Seat Options", value: "NBR, EPDM, Neoprene, FKM" },
  { label: "Certifications", value: "AWWA C504, C516 / MSS-SP-25" },
];

const FEATURES = [
  {
    letter: "A",
    title: "Double Eccentric Design",
    body: "Double eccentric disc geometry provides 360° continuous sealing between body seat and disc seat — the disc leaves the seat immediately after opening, ensuring long service life.",
  },
  {
    letter: "B",
    title: "Bi-Directional Tight Shutoff",
    body: "Bi-directional tight shutoff across all sizes and AWWA pressure classes 25B, 75B and 150B for reliable isolation in both flow directions.",
  },
  {
    letter: "C",
    title: "Large Bore Range",
    body: 'Covers DN350–DN2600 (14"–104") across AWWA C504 and C516 — one of the largest size ranges available in a double flanged butterfly valve.',
  },
  {
    letter: "D",
    title: "Hard Rubber Lining Option",
    body: "Body and disc can be hard rubber lined on request to prevent corrosion from seawater. Rubber liner tested to 20,000V DC holiday test — no pin holes guaranteed.",
  },
  {
    letter: "E",
    title: "In-Line Seat Replacement",
    body: 'For sizes DN750 (30") and above the seat ring can be replaced without removing the valve from the pipeline — significantly reducing maintenance downtime.',
  },
  {
    letter: "F",
    title: "AWWA C504 & C516 Compliant",
    body: 'Fully designed and manufactured to AWWA C504 for 14"–72" and AWWA C516 short type for 78"–104", with face to face dimensions per AWWA standards.',
  },
  {
    letter: "G",
    title: "Wide Seat Material Options",
    body: "NBR (-10°C to +90°C), EPDM (-20°C to +120°C), Neoprene (0°C to +80°C) and FKM (-18°C to +204°C) seat options for all media types.",
  },
  {
    letter: "H",
    title: "ISO 5211 Actuator Mounting",
    body: "ISO 5211 mounting flange for direct actuator mounting — compatible with gear box, pneumatic, electric and hydraulic actuator configurations.",
  },
  {
    letter: "I",
    title: "Special Offers Available",
    body: "Floor stands, lantern glands, mechanical shaft locking devices, extension stems, extension gearbox shafts and hard rubber lining available on request.",
  },
  {
    letter: "J",
    title: "Multiple Body Materials",
    body: "Cast iron, ductile iron and stainless steel body options across the full size range to suit fresh water, seawater and process media requirements.",
  },
  {
    letter: "K",
    title: "Monel Shaft Option",
    body: "Monel K500 and Monel 400 shaft options available for corrosive seawater and chemical service applications requiring superior corrosion resistance.",
  },
  {
    letter: "L",
    title: "Water & Power Applications",
    body: "Primary applications in water works, water treatment, seawater systems, exhaust and power plant condensate service — the benchmark AWWA butterfly valve.",
  },
];

const TRUST_POINTS = [
  { value: '14"–104"', label: "Size Range" },
  { value: "AWWA C504/C516", label: "Standard" },
  { value: "25B·75B·150B", label: "Pressure Classes" },
  { value: "Hard Rubber", label: "Lining Option" },
  { value: "In-Line Seat", label: 'Replaceable 30"+' },
];

const TAGS = [
  "AWWA C504",
  "AWWA C516",
  "Double Flanged",
  "25B",
  "75B",
  "150B",
  "Hard Rubber Lining",
  "ISO 5211",
];

export default function AWWAButterflyValvePage() {
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/awwaa.jpg"
                  alt="VF-264 AWWA Double Flanged Butterfly Valve"
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
                Butterfly Valves / AWWA Double Flanged
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                VF-264 Series
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                AWWA Double Flanged Butterfly Valves — 14" To 104"
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Value Valves VF-264 Series AWWA Double Flanged Butterfly Valves
                Covering DN350–DN2600 (14\"–104\") To AWWA C504 And C516. Double
                Eccentric Design, Bi-Directional Tight Shutoff, Hard Rubber
                Lining Option For Seawater Service And In-Line Seat Replacement
                For Sizes 30\" And Above.
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
                  { label: "Size Range", value: "DN350–DN2600" },
                  { label: "Standard", value: "AWWA C504 & C516" },
                  { label: "Pressure Class", value: "25B · 75B · 150B" },
                  { label: "Temperature", value: "-20°C to +120°C" },
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
                  href="/valves/industrial-valves/butterfly-valves/awwa-c504-double-flanged-butterfly-valve/products"
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
                  href="https://pblol2.blob.core.windows.net/valvenok-images/catalogs/value-valves/butterfly-valves/AWWA__Butterfly_Valve.pdf"
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
