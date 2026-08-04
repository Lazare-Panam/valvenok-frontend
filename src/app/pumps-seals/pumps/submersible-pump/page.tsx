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
import TrustStrip from "../../../Common/Products_Page/TrustStrip";
import RFQModal from "@/src/app/Common/RFQCard/RFQModal";
import { ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";

const PRODUCT: ProductForRFQ = {
  id: "pw-series-submersible",
  name: "PW Series Submersible Pump",
  brand: "WALRUS",
  category: "Submersible Pump",
  categoryId: "submersible-pump",
  subCategory: "PW_A / PW_E Series",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/PW.webp",
  description:
    "Submersible pumps for clean water in a corrosion-resistant, compact design. Motor with thermal overload protection, IP68 rated, suitable for garden ponds, fish breeding ponds, drainage and confined-space pumping applications.",
  keySpecs: [
    { label: "Power", value: "100 – 800 W" },
    { label: "Head", value: "Up to 14M" },
    { label: "Flow", value: "Up to 440 L/min" },
    { label: "Protection", value: "IP68" },
  ],
  variantInfo: { count: 2, sizeRange: "PW_A / PW_E Series" },
};

const SERIES_SPECS = [
  {
    series: "PW_A",
    hz: "50",
    power: "100 - 800 W",
    head: "Up to 14M",
    flow: "Up to 440 L/min",
    outlet: '1" or 2"',
  },
  {
    series: "PW_A",
    hz: "60",
    power: "100 - 800 W",
    head: "Up to 14M",
    flow: "Up to 440 L/min",
    outlet: '1" or 2"',
  },
  {
    series: "PW_E",
    hz: "50",
    power: "250 W",
    head: "Up to 8M",
    flow: "Up to 140 L/min",
    outlet: '1½"',
  },
  {
    series: "PW_E",
    hz: "60",
    power: "250 W",
    head: "Up to 9M",
    flow: "Up to 140 L/min",
    outlet: '1½"',
  },
];

const OPERATING_CONDITIONS = [
  { label: "Power Supply", value: "Single-phase, 50 or 60 Hz" },
  { label: "Power Range", value: "100W – 800W" },
  { label: "Insulation Class", value: "B" },
  { label: "Protection", value: "IP68" },
  { label: "Cable Length", value: "4 or 5M (10M optional)" },
  { label: "Liquid Temperature", value: "4°C ~ +35°C" },
];

const MIN_SUBMERGED_DEPTH = [
  { model: "PW100A", depth: "7 ± 1 cm" },
  { model: "PW250A", depth: "9 ± 1 cm" },
  { model: "PW400A", depth: "10 ± 1 cm" },
  { model: "PW800A", depth: "12 ± 1 cm" },
];

const FUNCTION_CODES = [
  {
    code: "R",
    label: "Sea Water",
    body: "Available for use in sea fish breeding applications.",
  },
  {
    code: "F",
    label: "Float Ball Level Switch",
    body: "Equipped with an automatic float ball level switch.",
  },
  {
    code: "C",
    label: "Level Regulator",
    body: "Equipped with an electronic level regulator.",
  },
  {
    code: "D",
    label: "Low Suction",
    body: "Low suction capability down to 1mm residual water depth.",
  },
];

const FEATURES = [
  {
    letter: "A",
    title: "Corrosion-Resistant Construction",
    body: "Corrosion-resistant and compact design for reliable clean-water pumping.",
  },
  {
    letter: "B",
    title: "Thermal Overload Protection",
    body: "Motor includes built-in thermal overload protection against overheating.",
  },
  {
    letter: "C",
    title: "IP68 Rated",
    body: "Fully submersible design rated to IP68 for continuous underwater operation.",
  },
  {
    letter: "D",
    title: "Confined Space Suitable",
    body: "Compact housing suitable for cleaning washing towers and other confined-space pumping applications.",
  },
  {
    letter: "E",
    title: "Sea Water Variant Available",
    body: "R-coded models are rated for use in sea fish breeding and saltwater environments.",
  },
  {
    letter: "F",
    title: "Automatic Level Control Options",
    body: "F and C function codes add float ball or electronic level regulator control for unattended operation.",
  },
];

const APPLICATIONS_LIST = [
  "Circulating water in garden ponds",
  "Sprinkler systems for park vegetation",
  "Fish breeding ponds",
  "Draining accumulated water in civil and architectural engineering applications",
  "Watering gardens and washing cars (PW_E)",
  "Draining basements and ground water (PW_E)",
];

const INDUSTRIES = [
  "Construction Industry",
  "Electricity & New Energy Industry",
  "Wholesale & Retail Industry",
  "Agriculture & Fishing Industry",
  "Entertainment & Leisure Industry",
  "Water Supply & Pollution Control",
  "Manufacturing Industry",
  "Accommodation & Food Service Industry",
  "Service Industry",
];

const TRUST_POINTS = [
  { value: "100 – 800 W", label: "Power Range" },
  { value: "Up to 14M", label: "Max Head" },
  { value: "Up to 440 L/min", label: "Max Flow" },
  { value: "IP68", label: "Protection Rating" },
  { value: "50Hz / 60Hz", label: "Frequency Support" },
];

const TAGS = [
  "PW_A Series",
  "PW_E Series",
  "IP68",
  "Sea Water (R)",
  "Float Switch (F)",
  "Level Regulator (C)",
  "Low Suction (D)",
];

function SeriesSpecCard({
  series,
  hz,
  power,
  head,
  flow,
  outlet,
}: {
  series: string;
  hz: string;
  power: string;
  head: string;
  flow: string;
  outlet: string;
}) {
  return (
    <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%" }}>
      <Typography
        variant="caption"
        sx={{
          color: "primary.main",
          fontWeight: 700,
          display: "block",
          mb: 0.5,
        }}
      >
        {series} SERIES
      </Typography>
      <Typography
        variant="overline"
        sx={{ color: "text.secondary", fontWeight: 700 }}
      >
        {hz} Hz
      </Typography>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mt: 1 }}
      >
        <Box>
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", textTransform: "uppercase" }}
          >
            Power
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            {power}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", textTransform: "uppercase" }}
          >
            Head
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            {head}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", textTransform: "uppercase" }}
          >
            Flow
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            {flow}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", textTransform: "uppercase" }}
          >
            Outlet
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            {outlet}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default function SubmersiblePumpPage() {
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/PW.webp"
                  alt="PW Series Submersible Pump"
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/logo/walrus_pumps.webp"
                  alt="WALRUS Pump"
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
                WALRUS / Submersible Pump
              </Typography>
              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                Submersible Pump
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                PW Series
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Submersible pumps engineered for clean water applications in a
                corrosion-resistant, compact design. Built-in thermal overload
                protection and IP68 rated construction make the PW series
                suitable for garden ponds, fish breeding, drainage and
                confined-space pumping.
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
                  { label: "Power", value: "100 – 800 W" },
                  { label: "Head", value: "Up to 14M" },
                  { label: "Flow", value: "Up to 440 L/min" },
                  { label: "Models", value: "PW_A · PW_E" },
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
                  href="/pumps-seals/pumps/submersible-pump/variants"
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

      {/* Series overview */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Series Overview
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
            PW_A covers the wider power and flow range (PW100A – PW800A); PW_E
            is the compact, fixed-power option.
          </Typography>
          <Grid container spacing={3} sx={{ mb: 5 }}>
            {SERIES_SPECS.map((s, i) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                key={`${s.series}-${s.hz}-${i}`}
              >
                <SeriesSpecCard {...s} />
              </Grid>
            ))}
          </Grid>

          <Paper
            variant="outlined"
            sx={{ p: 3, borderRadius: 2, bgcolor: "background.default" }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
              Model Code Decoder
            </Typography>
            <Grid container spacing={2}>
              {FUNCTION_CODES.map((f) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={f.code}>
                  <Chip
                    label={f.code}
                    size="small"
                    color="primary"
                    variant="outlined"
                    sx={{ fontWeight: 700, mb: 1 }}
                  />
                  <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {f.label}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {f.body}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Container>
      </Box>

      <Divider />

      {/* Operating conditions */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>
            Operating Conditions
          </Typography>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {OPERATING_CONDITIONS.map(({ label, value }) => (
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

          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
            Minimum Submerged Depth (PW_A)
          </Typography>
          <Grid container spacing={2}>
            {MIN_SUBMERGED_DEPTH.map(({ model, depth }) => (
              <Grid size={{ xs: 6, sm: 3 }} key={model}>
                <Paper
                  variant="outlined"
                  sx={{ p: 2, borderRadius: 2, textAlign: "center" }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 700, color: "primary.main" }}
                  >
                    {model}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {depth}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* Features */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>
            Product Features
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

      <Divider />

      {/* Applications */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
            Typical Applications
          </Typography>
          <Box component="ul" sx={{ pl: 2.5, mb: 4 }}>
            {APPLICATIONS_LIST.map((a) => (
              <Typography
                key={a}
                component="li"
                variant="body2"
                sx={{ color: "text.secondary", mb: 0.5 }}
              >
                {a}
              </Typography>
            ))}
          </Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
            Industries Served
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {INDUSTRIES.map((i) => (
              <Chip key={i} label={i} size="small" variant="outlined" />
            ))}
          </Box>
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
