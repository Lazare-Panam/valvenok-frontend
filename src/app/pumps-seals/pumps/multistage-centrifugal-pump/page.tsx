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
  id: "multistage-centrifugal-pump",
  name: "HS / TS Series Multistage Centrifugal Pump",
  brand: "WALRUS",
  category: "Multistage Centrifugal Pump",
  categoryId: "multistage-centrifugal-pump",
  subCategory: "HS / TS Series",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/HS.webp",
  description:
    "Multistage centrifugal pumps for pressure boosting from city mains or private water systems. Close-coupled, space-saving design with corrosion resistant wetted parts, thermostat dry-run protection, and quiet, vibration-free operation.",
  keySpecs: [
    { label: "Power", value: "0.18 – 3.7 kW" },
    { label: "Head", value: "Up to 50M" },
    { label: "Flow", value: "Up to 270 L/min" },
    { label: "Outlet", value: '1" – 2"' },
  ],
  variantInfo: { count: 2, sizeRange: "HS / TS Series" },
};

const HS_SPECS = [
  {
    hz: "50",
    power: "0.37 - 0.75 kW",
    head: "Up to 33M",
    flow: "Up to 110 L/min",
    outlet: '1"',
  },
  {
    hz: "60",
    power: "0.37 - 0.75 kW",
    head: "Up to 46M",
    flow: "Up to 100 L/min",
    outlet: '1"',
  },
];

const TS_SPECS = [
  {
    hz: "50",
    power: "0.18 - 2.2 kW",
    head: "Up to 34M",
    flow: "Up to 250 L/min",
    outlet: '1" - 2"',
  },
  {
    hz: "60",
    power: "0.18 - 3.7 kW",
    head: "Up to 50M",
    flow: "Up to 270 L/min",
    outlet: '1" - 2"',
  },
];

const HS_MODELS = [
  {
    model: "HS400",
    hz: "50",
    power: "0.37",
    phase: "1",
    volt: "200-240",
    amps: "2.8",
    inlet: '1"',
    outlet: '1"',
    hMax: "31",
    qMax: "85",
    nw: "8.1",
    gw: "8.6",
    pack: "45",
  },
  {
    model: "HS800",
    hz: "50",
    power: "0.75",
    phase: "1",
    volt: "200-240",
    amps: "4.5",
    inlet: '1"',
    outlet: '1"',
    hMax: "33",
    qMax: "110",
    nw: "10.1",
    gw: "10.9",
    pack: "36",
  },
  {
    model: "HS400",
    hz: "60",
    power: "0.37",
    phase: "1",
    volt: "110/220",
    amps: "6.0/3.0",
    inlet: '1"',
    outlet: '1"',
    hMax: "36",
    qMax: "75",
    nw: "8.1",
    gw: "8.5",
    pack: "45",
  },
  {
    model: "HS800",
    hz: "60",
    power: "0.75",
    phase: "1",
    volt: "110/220",
    amps: "10.0/5.0",
    inlet: '1"',
    outlet: '1"',
    hMax: "46",
    qMax: "100",
    nw: "10.1",
    gw: "10.9",
    pack: "36",
  },
];

const HS_DIMENSIONS = [
  { model: "HS400", cycle: "50/60", a: "96", b: "91", c: "292" },
  { model: "HS800", cycle: "50/60", a: "101", b: "96", c: "344" },
];

const OPERATING_CONDITIONS = [
  { label: "Ambient Temperature", value: "Max. +40°C" },
  { label: "Liquid Temperature", value: "+4°C ~ +40°C" },
  { label: "System Pressure", value: "Max. 8.5 kg/cm²" },
];

const FEATURES = [
  {
    letter: "A",
    title: "Multistage Design",
    body: "Provides steady, quiet and vibration-free operation for years of trouble-free service.",
  },
  {
    letter: "B",
    title: "Close-Coupled Construction",
    body: "Close coupled, space-saving design provides easy installation.",
  },
  {
    letter: "C",
    title: "Corrosion Resistant Parts",
    body: "All parts in contact with water are made from corrosion resistant materials.",
  },
  {
    letter: "D",
    title: "Salt Water Capable (TS)",
    body: "TS series is capable of transferring both plain and salt water.",
  },
  {
    letter: "E",
    title: "Thermostat Dry-Run Protection",
    body: "Pump shuts off when water temperature exceeds 130°F (55°C), protecting against dry running.",
  },
  {
    letter: "F",
    title: "Motor Thermal Overload",
    body: "Built-in thermal overload protects against high operating temperatures and over-current (single-phase motors).",
  },
  {
    letter: "G",
    title: "Self-Priming Lift",
    body: "HS lifts water up to 6m; TS lifts water up to 7.6m, with foot valve and pump suction piping filled with water.",
  },
];

const APPLICATIONS_LIST = [
  "Pressure boosting from city mains or private water systems",
  "Water circulation",
  "Liquid transfer",
  "Irrigation systems",
  "Lawn sprinkler systems",
  "Washing systems",
  "General purpose pumping",
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

const TRUST_POINTS = [
  { value: "0.18 – 3.7 kW", label: "Power Range" },
  { value: "Up to 50M", label: "Max Head" },
  { value: "Up to 270 L/min", label: "Max Flow" },
  { value: "50Hz / 60Hz", label: "Frequency Support" },
  { value: "HS · TS", label: "Series" },
];

const TAGS = [
  "HS Series",
  "TS Series",
  "Multistage",
  "Pressure Boosting",
  "50Hz",
  "60Hz",
];

function SeriesSpecCard({
  hz,
  power,
  head,
  flow,
  outlet,
}: {
  hz: string;
  power: string;
  head: string;
  flow: string;
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

export default function MultistageCentrifugalPumpPage() {
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/HS.webp"
                  alt="HS / TS Series Multistage Centrifugal Pump"
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
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                  letterSpacing: 2,
                }}
              >
                WALRUS / Multistage Centrifugal Pump
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                Multistage Centrifugal Pump
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                HS / TS Series
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Multistage centrifugal pumps engineered for pressure boosting
                from city mains or private water systems. Close-coupled,
                space-saving construction with corrosion resistant wetted parts,
                thermostat dry-run protection, and steady, quiet, vibration-free
                operation.
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
                  { label: "Head", value: "Up to 50M" },
                  { label: "Flow", value: "Up to 270 L/min" },
                  { label: "Models", value: "HS · TS" },
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
                  href="/pumps-seals/pumps/multistage-centrifugal-pump/variants"
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
            HS covers HS400/HS800; TS spans TS400 through TS3700 with wider
            power and flow range.
          </Typography>
          <Grid container spacing={3}>
            {HS_SPECS.map((s) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={`hs-${s.hz}`}>
                <Typography
                  variant="caption"
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    display: "block",
                    mb: 1,
                  }}
                >
                  HS SERIES
                </Typography>
                <SeriesSpecCard {...s} />
              </Grid>
            ))}
            {TS_SPECS.map((s) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={`ts-${s.hz}`}>
                <Typography
                  variant="caption"
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    display: "block",
                    mb: 1,
                  }}
                >
                  TS SERIES
                </Typography>
                <SeriesSpecCard {...s} />
              </Grid>
            ))}
          </Grid>
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
