"use client";

import RelatedLinks from "@/src/app/Common/Products_Page/RelatedLinks";
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

const AD_PRODUCT: ProductForRFQ = {
  id: "ad-series",
  name: "AD / AS Series Scotch Yoke Pneumatic Actuator",
  brand: "Kosaplus",
  category: "Pneumatic Actuators",
  categoryId: "pneumatic-actuators",
  subCategory: "Scotch Yoke Actuators",
  thumbnail:
    "https://pblol2.blob.core.windows.net/panam-images/products/actuators/AD-Series.jpeg",
  description:
    "Scotch yoke pneumatic actuators engineered for high-torque quarter-turn valve automation. Double acting and spring return configurations across 11 sizes from 50–300mm.",
  keySpecs: [
    { label: "Type", value: "Scotch Yoke" },
    { label: "Action", value: "Double Acting (AD) & Spring Return (AS)" },
    { label: "Size Range", value: "50–300 mm" },
    { label: "Rotation", value: "90°" },
  ],
  variantInfo: {
    count: 22,
    sizeRange: "AD50–AD300 / AS50–AS300",
  },
};

const TECH_SPECS = [
  { label: "Actuator Type", value: "Scotch Yoke" },
  { label: "Action — AD Series", value: "Double Acting" },
  { label: "Action — AS Series", value: "Spring Return" },
  { label: "Size Range", value: "50 – 300 mm" },
  { label: "Rotation", value: "90° Quarter-Turn" },
  {
    label: "AD Series Models",
    value:
      "AD50, AD65, AD80, AD100, AD125, AD140, AD160, AD185, AD210, AD250, AD300",
  },
  {
    label: "AS Series Models",
    value:
      "AS50, AS65, AS80, AS100, AS125, AS140, AS160, AS185, AS210, AS250, AS300",
  },
  { label: "AD Price Range", value: "£94.71 – £5,082.00" },
  { label: "AS Price Range", value: "£125.90 – £6,930.00" },
  {
    label: "Applications",
    value: "Oil & Gas, Pipeline, Offshore, Heavy Industry",
  },
  { label: "Mounting", value: "ISO 5211 / NAMUR" },
  { label: "Configuration", value: "Double Acting & Spring Return Fail-Safe" },
];

const FEATURES = [
  {
    letter: "A",
    title: "Scotch Yoke Mechanism",
    body: "Superior breakaway torque at valve open and close positions — ideal for high-torque applications.",
  },
  {
    letter: "B",
    title: "Double Acting (AD)",
    body: "Air pressure drives both open and close strokes for fast, controlled operation in process automation.",
  },
  {
    letter: "C",
    title: "Spring Return (AS)",
    body: "Fail-safe spring return ensures valve moves to safe position on loss of air supply.",
  },
  {
    letter: "D",
    title: "11 Size Range",
    body: "Available from 50mm to 300mm to match torque requirements across a wide range of valve sizes.",
  },
  {
    letter: "E",
    title: "High Breakaway Torque",
    body: "Scotch yoke geometry provides maximum torque at start and end of stroke where it's needed most.",
  },
  {
    letter: "F",
    title: "Quarter-Turn Operation",
    body: "90° rotation for direct actuation of ball, butterfly and plug valves without additional linkage.",
  },
  {
    letter: "G",
    title: "Heavy-Duty Construction",
    body: "Built for demanding oil & gas, pipeline and offshore environments with robust materials throughout.",
  },
  {
    letter: "H",
    title: "ISO 5211 Mounting",
    body: "Direct-mount ISO 5211 flange for plug-and-play compatibility with standard quarter-turn valves.",
  },
  {
    letter: "I",
    title: "NAMUR Interface",
    body: "NAMUR solenoid valve interface for direct accessory mounting without additional brackets.",
  },
  {
    letter: "J",
    title: "Symmetric & Canted Yoke",
    body: "Both symmetric and canted yoke designs available for optimised torque output profiles.",
  },
  {
    letter: "K",
    title: "Competitive Pricing",
    body: "Cost-effective across the full range — AD50 from £94.71 to AD300 at £5,082.00.",
  },
  {
    letter: "L",
    title: "Technical Support",
    body: "Our UK team can help size AD and AS actuators to your valve torque and confirm lead time on quotation.",
  },
];

const TRUST_POINTS = [
  { value: "50–300 mm", label: "Size Range" },
  { value: "90°", label: "Quarter-Turn" },
  { value: "Scotch Yoke", label: "Mechanism" },
  { value: "DA & SR", label: "Action Types" },
  { value: "ISO 5211", label: "Mounting Standard" },
];

const CERTIFICATIONS = [
  "Scotch Yoke",
  "Double Acting",
  "Spring Return",
  "ISO 5211",
  "NAMUR",
  "90° Rotation",
];

export default function ADSeriesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── Product Hero ── */}
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
                  src="https://pblol2.blob.core.windows.net/panam-images/products/actuators/AD-Series.jpeg"
                  alt="AD Series Scotch Yoke Pneumatic Actuator"
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
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
              >
                <Box
                  component="img"
                  src="https://pblol2.blob.core.windows.net/kosaplus/logo/kosaplus-official-logo.svg"
                  alt="Kosaplus"
                  sx={{ maxHeight: 96, maxWidth: 140, objectFit: "contain" }}
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
                Pneumatic Actuators / Scotch Yoke
              </Typography>

              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                AD / AS Series
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Scotch Yoke Heavy-Duty Pneumatic Actuator
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Scotch yoke pneumatic actuators engineered for high-torque
                quarter-turn valve automation. Symmetric and canted yoke designs
                deliver superior breakaway torque for heavy-duty oil & gas,
                pipeline and offshore applications. Available in double acting
                (AD) and spring return (AS) configurations across 11 sizes from
                50mm to 300mm.
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
                  { label: "Type", value: "Scotch Yoke" },
                  { label: "Rotation", value: "90°" },
                  { label: "Size Range", value: "50–300 mm" },
                  { label: "Configurations", value: "DA & Spring Return" },
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
                  href="/pneumatic/actuators/scotch-yoke/products"
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

      {/* ── Technical Specifications ── */}
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
        product={AD_PRODUCT}
      />
      <RelatedLinks
        title="More from Kosaplus"
        links={[
          { label: "All Kosaplus actuators", href: "/brands/kosaplus" },
          { label: "KOSAPLUS pneumatic actuators at KOSAPLUS UK", href: "https://www.kosaplus.co.uk/products/pneumatic-actuator", external: true },
        ]}
      />
    </>
  );
}
