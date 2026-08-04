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
  id: "electronic-control-pump",
  name: "WQ_B / HQ_B / TQ_B Series Electronic Control Pump",
  brand: "WALRUS",
  category: "Electronic Control Pump",
  categoryId: "electronic-control-pump",
  subCategory: "HQ_B / TQ_B Series",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/WQ_B.webp",
  description:
    "All-in-one electronic control pumps — pump, motor, pressure tank and electronic controller in a single compact unit. Built-in constant pressure control starts the pump automatically on demand and runs continuously until water is no longer required.",
  keySpecs: [
    { label: "Power", value: "0.18 – 3.7 kW" },
    { label: "Head", value: "Up to 52M" },
    { label: "Flow", value: "Up to 270 L/min" },
    { label: "Protection", value: "Dry-run + anti-cycling" },
  ],
  variantInfo: { count: 2, sizeRange: "HQ_B / TQ_B Series" },
};

const OPERATING_CONDITIONS = [
  { label: "Ambient Temperature", value: "Max. +40°C" },
  { label: "Liquid Temperature", value: "+4°C ~ +40°C" },
  { label: "System Pressure", value: "Max. 8.5 kg/cm²" },
  { label: "Relative Humidity", value: "Max. 85% (RH)" },
];

const FEATURES = [
  {
    letter: "A",
    title: "All-In-One Unit",
    body: "Complete unit consisting of pump, motor, pressure tank and electronic controller in a single compact housing.",
  },
  {
    letter: "B",
    title: "Constant Pressure Control",
    body: "Built-in electronic controller starts the pump automatically when water is consumed and runs continuously until demand stops.",
  },
  {
    letter: "C",
    title: "Compact & Quiet Operation",
    body: "Compact design and quiet running make the series suitable across a wide range of residential and light industrial applications.",
  },
  {
    letter: "D",
    title: "Corrosion Resistant Construction",
    body: "Constructed from top quality corrosion resistant materials for long-term reliability.",
  },
  {
    letter: "E",
    title: "Dry-Run & Cycling Protection",
    body: "TQ_B has built-in dry-run and cycling protection; HQ_B uses dry-run shut-off with automatic reset.",
  },
  {
    letter: "F",
    title: "Motor Thermal Overload",
    body: "Built-in thermal overload protects the motor against high operating temperatures and over-current (single-phase models).",
  },
  {
    letter: "G",
    title: "Anti-Cycling Feature",
    body: "HQ_B prevents continuous starting and stopping caused by a dripping tap or minor system leak.",
  },
  {
    letter: "H",
    title: "Self-Priming Lift",
    body: "HQ_B lifts water up to 7.6m with foot valve and pump suction piping filled with water.",
  },
];

const TQ_B_SPECS = [
  {
    hz: "50",
    power: "0.18 - 2.2 kW",
    head: "Up to 34M",
    flow: "Up to 250 L/min",
    inlet: '1" - 2"',
    outlet: '1" - 2"',
  },
  {
    hz: "60",
    power: "0.18 - 3.7 kW",
    head: "Up to 52M",
    flow: "Up to 270 L/min",
    inlet: '1" - 2"',
    outlet: '1" - 2"',
  },
];

const HQ_B_SPECS = [
  {
    hz: "50",
    power: "0.18 - 0.75 kW",
    head: "Up to 33M",
    flow: "Up to 110 L/min",
    inlet: '1"',
    outlet: '1"',
  },
  {
    hz: "60",
    power: "0.18 - 0.75 kW",
    head: "Up to 45M",
    flow: "Up to 120 L/min",
    inlet: '1"',
    outlet: '1"',
  },
];

const TQ_B_MODELS_50HZ = [
  {
    model: "TQ200B",
    power: "0.18",
    volt: "110/220",
    amps: "4.0/2.0",
    preset: "1.2",
    hMax: "22",
    qMax: "60",
    nw: "7.2",
    gw: "7.8",
  },
  {
    model: "TQ400B",
    power: "0.37",
    volt: "110/220",
    amps: "6.0/3.0",
    preset: "1.8",
    hMax: "28",
    qMax: "60",
    nw: "8.7",
    gw: "9.3",
  },
  {
    model: "TQ800B",
    power: "0.75",
    volt: "110/220",
    amps: "11/5.5",
    preset: "2.0",
    hMax: "44",
    qMax: "60",
    nw: "10.9",
    gw: "11.5",
  },
  {
    model: "TQ1500B",
    power: "1.5",
    volt: "220",
    amps: "9.5",
    preset: "2.5",
    hMax: "37",
    qMax: "270",
    nw: "21.2",
    gw: "23.4",
  },
  {
    model: "TQ2200B",
    power: "2.2",
    volt: "220",
    amps: "6.5",
    preset: "3.0",
    hMax: "42",
    qMax: "270",
    nw: "22.2",
    gw: "24.4",
  },
];

const HQ_B_MODELS_50HZ = [
  {
    model: "HQ200B",
    power: "0.18",
    volt: "200-240",
    amps: "1.5",
    preset: "1.6",
    hMax: "24",
    qMax: "36",
    nw: "7.4",
    gw: "8.0",
  },
  {
    model: "HQ400B",
    power: "0.37",
    volt: "200-240",
    amps: "2.8",
    preset: "2.0",
    hMax: "31",
    qMax: "36",
    nw: "8.4",
    gw: "9.0",
  },
  {
    model: "HQ800B",
    power: "0.75",
    volt: "200-240",
    amps: "4.5",
    preset: "2.0",
    hMax: "33",
    qMax: "36",
    nw: "10.8",
    gw: "11.4",
  },
];

const APPLICATIONS = [
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

const TRUST_POINTS = [
  { value: "0.18 – 3.7 kW", label: "Power Range" },
  { value: "Up to 52M", label: "Max Head" },
  { value: "Up to 270 L/min", label: "Max Flow" },
  { value: "50Hz / 60Hz", label: "Frequency Support" },
  { value: "Anti-Cycling", label: "Built-In Protection" },
];

const TAGS = [
  "WQ_B",
  "HQ_B",
  "TQ_B",
  "Constant Pressure",
  "Dry-Run Protection",
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

function ModelTable({
  title,
  rows,
}: {
  title: string;
  rows: typeof TQ_B_MODELS_50HZ;
}) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
        {title}
      </Typography>
      <TableContainer component={Paper} variant="outlined">
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: "background.default" }}>
              <TableCell sx={{ fontWeight: 700 }}>Model</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Power (kW)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Volt (V)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Amps (A)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Preset (kg/cm²)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>H max. (m)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Q max. (L/min)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>N.W. (kg)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>G.W. (kg)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.model} hover>
                <TableCell sx={{ fontWeight: 700, color: "primary.main" }}>
                  {r.model}
                </TableCell>
                <TableCell>{r.power}</TableCell>
                <TableCell>{r.volt}</TableCell>
                <TableCell>{r.amps}</TableCell>
                <TableCell>{r.preset}</TableCell>
                <TableCell>{r.hMax}</TableCell>
                <TableCell>{r.qMax}</TableCell>
                <TableCell>{r.nw}</TableCell>
                <TableCell>{r.gw}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default function ElectronicControlPumpPage() {
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/WQ_B.webp"
                  alt="WQ_B / HQ_B / TQ_B Series Electronic Control Pump"
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
                WALRUS / Electronic Control Pump
              </Typography>
              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                Electronic Control Pump
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                HQ_B / TQ_B Series
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                An all-in-one unit — pump, motor, pressure tank and electronic
                controller — engineered for automatic constant-pressure water
                supply. The pump starts automatically when water is consumed and
                runs continuously until demand stops, with built-in dry-run and
                anti-cycling protection.
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
                  { label: "Power", value: "0.18 – 3.7 kW" },
                  { label: "Head", value: "Up to 52M" },
                  { label: "Flow", value: "Up to 270 L/min" },
                  { label: "Models", value: "HQ_B · TQ_B" },
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
                  href="/pumps-seals/pumps/electronic-control-pump/variants"
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

      {/* Series comparison */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Series Overview
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
            TQ_B covers the higher power/flow range; HQ_B is the compact,
            lower-flow option.
          </Typography>
          <Grid container spacing={3} sx={{ mb: 5 }}>
            {TQ_B_SPECS.map((s) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={`tqb-${s.hz}`}>
                <Typography
                  variant="caption"
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    display: "block",
                    mb: 1,
                  }}
                >
                  TQ_B SERIES
                </Typography>
                <SeriesSpecCard {...s} />
              </Grid>
            ))}
            {HQ_B_SPECS.map((s) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={`hqb-${s.hz}`}>
                <Typography
                  variant="caption"
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    display: "block",
                    mb: 1,
                  }}
                >
                  HQ_B SERIES
                </Typography>
                <SeriesSpecCard {...s} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* Operating conditions */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>
            Operating Conditions
          </Typography>
          <Grid container spacing={2}>
            {OPERATING_CONDITIONS.map(({ label, value }) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={label}>
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
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
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

      <Divider />

      {/* Applications */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
            Applications
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {APPLICATIONS.map((a) => (
              <Chip key={a} label={a} size="small" variant="outlined" />
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
