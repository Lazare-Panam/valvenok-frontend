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
  id: "ke-series-quarter-turn",
  name: "KE Series Quarter-Turn Electric Actuator",
  brand: "KOSAPLUS",
  category: "Electric Actuators",
  categoryId: "electric-actuators",
  subCategory: "KE Series",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/ec-kosaplus.png",
  description:
    "Quarter-turn electric actuators covering 8 – 1200 Nm torque, with dome type position indicator, captive bolt cover, and terminal box wiring on KE004 and above. Available in 110V/220V/380V/440V AC and 24V DC across 13 model sizes.",
  keySpecs: [
    { label: "Torque Range", value: "8 – 1200 Nm" },
    { label: "Travel Angle", value: "90° ± 5°" },
    { label: "Duty Cycle", value: "40%" },
    { label: "Enclosure", value: "IP68 Optional (Watertight)" },
  ],
  variantInfo: { count: 13, sizeRange: "KE001 – KE120" },
};

const TECH_SPECS = [
  { label: "Torque Range", value: "8 – 1200 Nm" },
  { label: "Travel Angle", value: "90° ± 5°" },
  { label: "Ambient Temperature", value: "-20°C to +60°C" },
  { label: "Motor Duty Cycle", value: "40%" },
  { label: "Indicator", value: "Dome type mechanical (flat side optional)" },
  { label: "Enclosure Option", value: "IP68 — Watertight, 5m / 120hr" },
  { label: "Power Supply", value: "110V/220V/380V/440V AC · 24V DC" },
  {
    label: "Aux Limit Switches",
    value: "2 each Open/Close, 250VAC/5A (KE004+)",
  },
  {
    label: "Manual Override",
    value: "Spanner, wrench or clutchless handwheel (model dependent)",
  },
  {
    label: "Cable Entry",
    value: "Wire lead (KE001/002) or Terminal box PF1/2 (KE004+)",
  },
  { label: "Internal Heater", value: "Optional, AC only" },
  {
    label: "Modulating Control",
    value: "4–20mA, 0–10V, 2–10V, 1–5V, 0–5V (option)",
  },
];

const FEATURES = [
  {
    letter: "A",
    title: "Dome Type Indicator",
    body: "Open and close status can be checked even from a long distance through the external position indicator.",
  },
  {
    letter: "B",
    title: "UV-Stable Intermediate Cap",
    body: "Even after long periods of usage and exposure to sunlight, the plastic cap's letters remain clear and visible.",
  },
  {
    letter: "C",
    title: "Captive Bolt",
    body: "Prevents the bolt from being lost even when the cover is opened for wiring.",
  },
  {
    letter: "D",
    title: "Accessible Terminal Box",
    body: "Easy and safe wiring by opening only the terminal box — no need to disassemble the entire actuator body (except KE001/KE002).",
  },
  {
    letter: "E",
    title: "Modulating Control Option",
    body: "4–20mA, 0–10V, 2–10V, 1–5V and 0–5V signal support for proportional valve positioning.",
  },
  {
    letter: "F",
    title: "Watertight Option",
    body: "IP68-rated watertight option available, tested to 5m submersion for 120 hours.",
  },
  {
    letter: "G",
    title: "Wide Torque Range",
    body: "8 to 1200 Nm across the KE series covers small instrumentation valves through heavy-duty industrial applications.",
  },
  {
    letter: "H",
    title: "Multi-Voltage Support",
    body: "110V, 220V, 380V and 440V AC plus 24V DC options across the range for flexible installation.",
  },
];

const MODEL_TABLE = [
  {
    model: "KE001",
    torque: "8",
    opTime: "14.5/12",
    motor: "E/2W",
    manualTurns: "N/A",
    weight: "0.7",
  },
  {
    model: "KE002",
    torque: "20",
    opTime: "17.5/14.5",
    motor: "E·B/10W·10W",
    manualTurns: "1.5",
    weight: "0.9",
  },
  {
    model: "KE004",
    torque: "40",
    opTime: "12/10",
    motor: "E·B/10W·10W",
    manualTurns: "2",
    weight: "1.5",
  },
  {
    model: "KE005",
    torque: "50",
    opTime: "13 (100–250V AC)",
    motor: "B·B/10W·10W",
    manualTurns: "2",
    weight: "1.3",
  },
  {
    model: "KE006",
    torque: "60",
    opTime: "18/15",
    motor: "E·B/10W·10W",
    manualTurns: "2",
    weight: "1.9",
  },
  {
    model: "KE008",
    torque: "80",
    opTime: "17/14",
    motor: "F·B/10W·10W",
    manualTurns: "2.5",
    weight: "2.6",
  },
  {
    model: "KE010",
    torque: "100",
    opTime: "22/18",
    motor: "F·B/10W·15W",
    manualTurns: "2.5",
    weight: "3.0",
  },
  {
    model: "KE016",
    torque: "160",
    opTime: "28/23",
    motor: "F·B/15W·15W",
    manualTurns: "4",
    weight: "6.2",
  },
  {
    model: "KE028",
    torque: "280",
    opTime: "40/33",
    motor: "F·B/15W·15W",
    manualTurns: "4",
    weight: "8.9",
  },
  {
    model: "KE040",
    torque: "400",
    opTime: "40/33",
    motor: "F·B/25W·40W",
    manualTurns: "5.5",
    weight: "9.4",
  },
  {
    model: "KE050",
    torque: "500",
    opTime: "40/33",
    motor: "F/40W",
    manualTurns: "N/A",
    weight: "9.4",
  },
  {
    model: "KE080",
    torque: "800",
    opTime: "51/42",
    motor: "F/60W",
    manualTurns: "N/A",
    weight: "26.0",
  },
  {
    model: "KE120",
    torque: "1200",
    opTime: "51/42",
    motor: "F/90W",
    manualTurns: "N/A",
    weight: "26.0",
  },
];

const VALVE_SIZE_GUIDE = [
  { size: '1/2" – 3/4" (15A/20A)', ball: "KE001 / KE002", butterfly: "—" },
  { size: '1" (25A)', ball: "KE004", butterfly: "KE002" },
  { size: '1-1/4" – 1-1/2" (32A/40A)', ball: "KE005", butterfly: "—" },
  { size: '2" (50A)', ball: "KE006", butterfly: "KE004" },
  { size: '2-1/2" (65A)', ball: "KE008", butterfly: "—" },
  { size: '3" (80A)', ball: "KE010", butterfly: "—" },
  { size: '4" (100A)', ball: "—", butterfly: "KE016" },
  { size: '5" – 6" (125A/150A)', ball: "—", butterfly: "KE028" },
  { size: '8" (200A)', ball: "—", butterfly: "KE040" },
  { size: '10" (250A)', ball: "—", butterfly: "KE050 / KE080" },
  { size: '12" – 16" (300A–400A)', ball: "—", butterfly: "KE080 / KE120" },
];

const OPTIONS = [
  {
    code: "WT",
    label: "Watertight",
    body: "IP68 rated, tested to 5m submersion for 120 hours.",
  },
  {
    code: "TS",
    label: "Electric Torque Switches",
    body: "Available on KE010 and above for torque-based overload protection.",
  },
  {
    code: "MC",
    label: "Modulating Control (4–20mA)",
    body: "Single-phase proportional positioning via 4–20mA signal.",
  },
  {
    code: "SM",
    label: "Modulating Control (Multi-Signal)",
    body: "4–20mA, 0–10V, 2–10V, 0–5V or 1–5V signal support, 1-phase or 24V DC.",
  },
  {
    code: "LC",
    label: "Local Control",
    body: "Includes electric torque switch, available in 1-phase or 3-phase.",
  },
  {
    code: "LM",
    label: "Local & Modulating Control",
    body: "Combines local control with modulating signal input, torque switch included.",
  },
  {
    code: "C2 / C3",
    label: "24V DC Control Board (2 / 3 Wire)",
    body: "DC control board options for simplified wiring on select models.",
  },
  {
    code: "TP",
    label: "Thermal Protection",
    body: "AC only — standard included on most models.",
  },
  {
    code: "HT",
    label: "Heater",
    body: "AC only — anti-condensation heater, standard included on select models.",
  },
  {
    code: "TH",
    label: "Thermal Protection + Heater",
    body: "Combined thermal protection and heater option.",
  },
];

const PRODUCT_FAMILY = [
  {
    name: "KE Series — Spur Gear",
    range: "KE001 – KE008",
    note: "Standard electric quarter-turn, spur gear mechanism.",
  },
  {
    name: "KE Series — TR Gear (Scotch Yoke)",
    range: "KE010 – KE200",
    note: "Higher torque scotch yoke mechanism.",
  },
  {
    name: "KP Series — Explosion Proof",
    range: "KP002 – KP050",
    note: "Ex d IIB T4 / Ex db IIB T4 Gb rated, IP67.",
  },
  {
    name: "KS Series — TR Gear (Scotch Yoke)",
    range: "KS001 – KS002",
    note: "Fast operating, 10–25 Nm.",
  },
  {
    name: "KR Series — Rack & Pinion",
    range: "KR002 – KR006",
    note: "In development.",
  },
];

const TRUST_POINTS = [
  { value: "8 – 1200 Nm", label: "Torque Range" },
  { value: "90° ± 5°", label: "Travel Angle" },
  { value: "IP68", label: "Watertight Option" },
  { value: "13 Models", label: "KE001 – KE120" },
  { value: "Ex d IIB T4", label: "Explosion Proof (KP Series)" },
];

const TAGS = [
  "Quarter Turn",
  "KE001 – KE120",
  "IP68 Optional",
  "Modulating Control",
  "AC / DC",
  "ISO 5211",
];

export default function KESeriesActuatorPage() {
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/ke-ac.jpeg"
                  alt="KE Series Quarter-Turn Electric Actuator"
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
                  src="https://pblol2.blob.core.windows.net/kosaplus/logo/kosaplus-official-logo.svg"
                  alt="KOSAPLUS"
                  sx={{ height: 72, objectFit: "contain" }}
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
                Electric Actuators / KE Series
              </Typography>

              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                KE Series
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Quarter-Turn Electric Actuator
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Quarter-turn electric actuators engineered for reliable ball and
                butterfly valve automation. A dome type external position
                indicator, UV-stable housing and captive bolt design simplify
                field servicing, while modulating control and watertight options
                extend the range into demanding process and outdoor
                applications.
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
                  { label: "Torque", value: "8 – 1200 Nm" },
                  { label: "Travel", value: "90° ± 5°" },
                  { label: "Duty", value: "40%" },
                  { label: "Models", value: "KE001 – KE120" },
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
                  href="/actuators/electric/ke-series/variants"
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

      {/* Technical Specifications */}
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

      {/* Model Performance Table */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>
            Model Performance
          </Typography>
          <TableContainer component={Paper} variant="outlined">
            <Table size="small">
              <TableHead>
                <TableRow sx={{ bgcolor: "#fff" }}>
                  <TableCell sx={{ fontWeight: 700 }}>Model</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>
                    Max Torque (Nm)
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>
                    Op. Time 50/60Hz (sec)
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>
                    Motor Class/Output
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Manual Turns</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Weight (kg)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {MODEL_TABLE.map((r) => (
                  <TableRow key={r.model} hover>
                    <TableCell sx={{ fontWeight: 700, color: "primary.main" }}>
                      {r.model}
                    </TableCell>
                    <TableCell>{r.torque}</TableCell>
                    <TableCell>{r.opTime}</TableCell>
                    <TableCell>{r.motor}</TableCell>
                    <TableCell>{r.manualTurns}</TableCell>
                    <TableCell>{r.weight}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      <Divider />

      {/* Valve Size Selection Guide */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Valve Size Selection Guide
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
            Recommended model by valve size — 2-way ball and butterfly valves,
            10K / #150 rating.
          </Typography>
          <TableContainer component={Paper} variant="outlined">
            <Table size="small">
              <TableHead>
                <TableRow sx={{ bgcolor: "background.default" }}>
                  <TableCell sx={{ fontWeight: 700 }}>Valve Size</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Ball Valve</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>
                    Butterfly Valve
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {VALVE_SIZE_GUIDE.map((r) => (
                  <TableRow key={r.size} hover>
                    <TableCell sx={{ fontWeight: 600 }}>{r.size}</TableCell>
                    <TableCell>{r.ball}</TableCell>
                    <TableCell>{r.butterfly}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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

      {/* Options */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>
            Available Options
          </Typography>
          <Grid container spacing={3}>
            {OPTIONS.map(({ code, label, body }) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={code}>
                <Paper
                  variant="outlined"
                  sx={{ p: 3, borderRadius: 2, height: "100%" }}
                >
                  <Chip
                    label={code}
                    size="small"
                    color="primary"
                    variant="outlined"
                    sx={{ fontWeight: 700, mb: 1.5 }}
                  />
                  <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {label}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", lineHeight: 1.6 }}
                  >
                    {body}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* Product Family */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Related Product Family
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
            KOSAPLUS also offers explosion-proof and alternative mechanism
            variants alongside the KE series.
          </Typography>
          <Grid container spacing={2}>
            {PRODUCT_FAMILY.map((f) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={f.name}>
                <Paper
                  variant="outlined"
                  sx={{ p: 3, borderRadius: 2, height: "100%" }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {f.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "primary.main",
                      fontWeight: 700,
                      display: "block",
                      mb: 1,
                    }}
                  >
                    {f.range}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {f.note}
                  </Typography>
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
      <RelatedLinks
        title="More from Kosaplus"
        links={[
          { label: "All Kosaplus actuators", href: "/brands/kosaplus" },
          { label: "KOSAPLUS electric actuators at KOSAPLUS UK", href: "https://www.kosaplus.co.uk/products/electric-actuator", external: true },
        ]}
      />
    </>
  );
}
