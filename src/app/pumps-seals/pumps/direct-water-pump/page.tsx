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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import TrustStrip from "../../../Common/Products_Page/TrustStrip";
import RFQModal from "@/src/app/Common/RFQCard/RFQModal";
import { ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";

const PRODUCT: ProductForRFQ = {
  id: "tp3-ptb-series",
  name: "TP3_PTB Series Direct Water Pump",
  brand: "WALRUS",
  category: "Direct Water Pump",
  categoryId: "direct-water-pump",
  subCategory: "TP3_PTB Series",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TP3.webp",
  description:
    "Compact direct water pumps with a brass-made impeller for high temperature and friction resistance, and a plastic pump body engineered for safe, hygienic water quality. Built-in thermal overload protection for easy, low-noise domestic installation.",
  keySpecs: [
    { label: "Power", value: "0.18 – 0.37 kW" },
    { label: "Head", value: "Up to 40M" },
    { label: "Flow", value: "Up to 42 L/min" },
    { label: "Suction Head", value: "Max. 8M" },
  ],
  variantInfo: { count: 2, sizeRange: "TP3_PTB Series" },
};

const SERIES_SPECS = [
  {
    hz: "50",
    power: "0.18 - 0.37 kW",
    head: "Up to 35M",
    flow: "Up to 35 L/min",
    inlet: '¾" - 1"',
    outlet: '¾" - 1"',
  },
  {
    hz: "60",
    power: "0.18 - 0.37 kW",
    head: "Up to 40M",
    flow: "Up to 42 L/min",
    inlet: '¾" - 1"',
    outlet: '¾" - 1"',
  },
];

const OPERATING_CONDITIONS = [
  { label: "Ambient Temperature", value: "Max. +40°C" },
  { label: "Liquid Temperature", value: "+4°C ~ +40°C" },
  { label: "Suction Head", value: "Max. 8M" },
];

const FEATURES = [
  {
    letter: "A",
    title: "Compact & Easy Installation",
    body: "Compact design makes installation quick and straightforward in tight domestic spaces.",
  },
  {
    letter: "B",
    title: "High Performance, Low Noise",
    body: "Engineered for efficient operation with minimal noise output.",
  },
  {
    letter: "C",
    title: "Brass Impeller",
    body: "Brass-made impeller offers better resistance to high temperatures and friction than standard alternatives.",
  },
  {
    letter: "D",
    title: "Hygienic Plastic Pump Body",
    body: "Plastic pump body construction ensures the safety and hygiene of the water quality being pumped.",
  },
  {
    letter: "E",
    title: "Thermal Overload Protection",
    body: "Built-in thermal overload protector guards the motor against overheating.",
  },
];

const APPLICATIONS_LIST = [
  "Water supply for apartments and residences",
  "Portable water supply or underground water supply",
  "Irrigation",
  "Washing / cleaning systems",
];

const INDUSTRIES = [
  "Construction Industry",
  "Electricity & New Energy Industry",
  "Wholesale & Retail Industry",
  "Manufacturing Industry",
  "Accommodation & Food Service Industry",
  "Service Industry",
  "Agriculture & Fishing Industry",
  "Entertainment & Leisure Industry",
  "Water Supply & Pollution Control",
];

const MODEL_TABLE = [
  {
    model: "TP320P(T)B",
    hz: "50",
    power: "0.37",
    volt: "200-240",
    amps: "2.7",
    inlet: '¾"',
    outlet: '¾"',
    hMax: "35",
    qMax: "35",
    nw: "6.7",
    gw: "7.4",
    pack: "72",
  },
  {
    model: "TP325P(T)B",
    hz: "50",
    power: "0.37",
    volt: "200-240",
    amps: "2.7",
    inlet: '1"',
    outlet: '1"',
    hMax: "35",
    qMax: "35",
    nw: "6.7",
    gw: "7.4",
    pack: "72",
  },
  {
    model: "TP320P(T)B",
    hz: "60",
    power: "0.37",
    volt: "110/220",
    amps: "5.2/2.6",
    inlet: '¾"',
    outlet: '¾"',
    hMax: "40",
    qMax: "42",
    nw: "6.7",
    gw: "7.3",
    pack: "72",
  },
  {
    model: "TP325P(T)B",
    hz: "60",
    power: "0.37",
    volt: "110/220",
    amps: "5.2/2.6",
    inlet: '1"',
    outlet: '1"',
    hMax: "40",
    qMax: "42",
    nw: "6.7",
    gw: "7.3",
    pack: "72",
  },
];

const TRUST_POINTS = [
  { value: "0.18 – 0.37 kW", label: "Power Range" },
  { value: "Up to 40M", label: "Max Head" },
  { value: "Up to 42 L/min", label: "Max Flow" },
  { value: "50Hz / 60Hz", label: "Frequency Support" },
  { value: "Max. 8M", label: "Suction Head" },
];

const TAGS = [
  "TP3_PTB",
  "TP320",
  "TP325",
  "Antimicrobial (B)",
  "Temp Control (T) Optional",
  "50Hz",
  "60Hz",
];

function SeriesSpecCard({
  hz,
  power,
  head,
  flow,
  inlet,
  outlet,
}: {
  hz: string;
  power: string;
  head: string;
  flow: string;
  inlet: string;
  outlet: string;
}) {
  return (
    <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%" }}>
      <Typography
        variant="overline"
        sx={{ color: "primary.main", fontWeight: 700 }}
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
            Inlet / Outlet
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            {inlet} / {outlet}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default function DirectWaterPumpPage() {
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TP3.webp"
                  alt="TP3_PTB Series Direct Water Pump"
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
                WALRUS / Direct Water Pump
              </Typography>
              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                Direct Water Pump
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                TP3_PTB Series
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Compact direct water pumps featuring a brass-made impeller for
                superior high temperature and friction resistance, paired with a
                plastic pump body engineered for safe, hygienic water quality.
                Compact, low-noise construction with built-in thermal overload
                protection.
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
                  { label: "Power", value: "0.18 – 0.37 kW" },
                  { label: "Head", value: "Up to 40M" },
                  { label: "Flow", value: "Up to 42 L/min" },
                  { label: "Models", value: "TP320 · TP325" },
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
                  href="/pumps-seals/pumps/direct-water-pump/variants"
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
            Available as TP320P(T)B and TP325P(T)B across 50Hz and 60Hz
            operation.
          </Typography>
          <Grid container spacing={3}>
            {SERIES_SPECS.map((s) => (
              <Grid size={{ xs: 12, sm: 6 }} key={s.hz}>
                <SeriesSpecCard {...s} />
              </Grid>
            ))}
          </Grid>

          <Paper
            variant="outlined"
            sx={{ p: 3, borderRadius: 2, mt: 4, bgcolor: "background.default" }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
              Model Code Decoder
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <strong>TP320</strong> — standard model name &nbsp;·&nbsp;
              <strong>T</strong> — temperature control (optional) &nbsp;·&nbsp;
              <strong>B</strong> — antimicrobial
            </Typography>
          </Paper>
        </Container>
      </Box>

      <Divider />

      {/* Operating conditions */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>
            Operating Conditions
          </Typography>
          <Grid container spacing={2}>
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
        </Container>
      </Box>

      <Divider />

      {/* Features */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
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
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "#fff" }}>
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
