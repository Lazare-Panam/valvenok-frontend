'use client';

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
  id: "hot-water-pump",
  name: "TQCN / HQCN Series Hot Water Pump",
  brand: "WALRUS",
  category: "Hot Water Pump",
  categoryId: "hot-water-pump",
  subCategory: "TQCN / HQCN Series",
  thumbnail: "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TQCN200B.webp",
  description:
    "All-in-one electronic control pumps rated for hot water up to +90°C. Pump, motor, pressure tank and controller in a single unit, with automatic relief valve, anti-cycling protection and corrosion resistant construction.",
  keySpecs: [
    { label: "Power",       value: "0.18 – 3.7 kW" },
    { label: "Head",        value: "Up to 50M" },
    { label: "Flow",        value: "Up to 270 L/min" },
    { label: "Liquid Temp", value: "+4°C ~ +90°C" },
  ],
  variantInfo: { count: 2, sizeRange: "TQCN / HQCN Series" },
};

const TQCN_SPECS = [
  { hz: "50", power: "0.18 - 2.2 kW", head: "Up to 34M", flow: "Up to 250 L/min", outlet: "1\" - 2\"" },
  { hz: "60", power: "0.18 - 3.7 kW", head: "Up to 50M", flow: "Up to 270 L/min", outlet: "1\" - 2\"" },
];

const HQCN_SPECS = [
  { hz: "50", power: "0.18 - 0.75 kW", head: "Up to 33M", flow: "Up to 110 L/min", outlet: "1\"" },
  { hz: "60", power: "0.18 - 0.75 kW", head: "Up to 27M", flow: "Up to 120 L/min", outlet: "1\"" },
];

const OPERATING_CONDITIONS = [
  { label: "Ambient Temperature",  value: "Max. +40°C" },
  { label: "Liquid Temperature",   value: "+4°C ~ +90°C" },
  { label: "Automatic Relief Pressure", value: "5 kg/cm²" },
  { label: "Relative Humidity",    value: "Max. 85% (RH)" },
];

const FEATURES = [
  { letter: "A", title: "All-In-One Unit",              body: "Complete unit consisting of pump, motor, pressure tank and electronic controller in a single compact housing." },
  { letter: "B", title: "Constant Pressure Control",     body: "Built-in electronic controller starts the pump automatically when water is consumed and runs continuously until demand stops." },
  { letter: "C", title: "Rated for Hot Water",           body: "Liquid temperature rated up to +90°C, distinguishing this series from cold-water electronic control pumps." },
  { letter: "D", title: "Automatic Relief Valve",        body: "Relief valve automatically releases pressure when full system pressure exceeds 5 kg/cm²." },
  { letter: "E", title: "Corrosion Resistant Construction", body: "Constructed from top quality corrosion resistant materials for long-term reliability." },
  { letter: "F", title: "Anti-Cycling Feature",          body: "Prevents continuous starting and stopping caused by a dripping tap or minor system leak." },
  { letter: "G", title: "Motor Thermal Overload",        body: "Built-in thermal overload protects the motor against high operating temperatures and over-current." },
  { letter: "H", title: "Compact & Quiet Operation",     body: "Compact design and quiet running make the series suitable across a wide range of applications." },
];

const HQCN_MODEL_TABLE = [
  { model: "HQCN200", hz: "50", power: "0.18", volt: "200-240", amps: "1.5",     preset: "1.6", hMax: "24", qMax: "55",  nw: "7.4", gw: "8.0",  pack: "36" },
  { model: "HQCN400", hz: "50", power: "0.37", volt: "200-240", amps: "2.8",     preset: "2.0", hMax: "31", qMax: "85",  nw: "8.4", gw: "9.0",  pack: "36" },
  { model: "HQCN800", hz: "50", power: "0.75", volt: "200-240", amps: "4.5",     preset: "2.0", hMax: "33", qMax: "110", nw: "10.9", gw: "11.5", pack: "36" },
  { model: "HQCN200", hz: "60", power: "0.18", volt: "110/220", amps: "4.0/2.0", preset: "1.6", hMax: "23", qMax: "60",  nw: "7.4", gw: "8.5",  pack: "36" },
  { model: "HQCN400", hz: "60", power: "0.37", volt: "110/220", amps: "6.0/3.0", preset: "1.8", hMax: "26", qMax: "80",  nw: "8.4", gw: "9.5",  pack: "36" },
  { model: "HQCN800", hz: "60", power: "0.75", volt: "110/220", amps: "9.0/4.5", preset: "2.0", hMax: "27", qMax: "120", nw: "10.9", gw: "11.5", pack: "36" },
];

const DIMENSIONS_TQCN = [
  { model: "TQCN200/400/800",   cycle: "50/60", a: "—",   b: "—",   c: "—" },
  { model: "TQCN1500/2200",     cycle: "50/60", a: "—",   b: "—",   c: "—" },
  { model: "TQCN3700",          cycle: "60",    a: "—",   b: "—",   c: "—" },
];

const DIMENSIONS_HQCN = [
  { model: "HQCN200", cycle: "50/60", a: "355", b: "153", c: "158" },
  { model: "HQCN400", cycle: "50/60", a: "355", b: "153", c: "158" },
  { model: "HQCN800", cycle: "50/60", a: "410", b: "162", c: "167" },
];

const APPLICATIONS_LIST = [
  "Hot water pressure boosting for city mains or private water systems",
  "Domestic and light commercial hot water supply",
  "Water circulation for heating systems",
  "General purpose hot water pumping",
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
  { value: "0.18 – 3.7 kW",   label: "Power Range" },
  { value: "Up to 50M",       label: "Max Head" },
  { value: "Up to 270 L/min", label: "Max Flow" },
  { value: "+4°C ~ +90°C",    label: "Liquid Temperature" },
  { value: "5 kg/cm²",        label: "Auto Relief Pressure" },
];

const TAGS = ["TQCN Series", "HQCN Series", "Hot Water", "Constant Pressure", "Auto Relief Valve", "50Hz", "60Hz"];

function SeriesSpecCard({ hz, power, head, flow, outlet }: { hz: string; power: string; head: string; flow: string; outlet: string }) {
  return (
    <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%" }}>
      <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700 }}>{hz} Hz</Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mt: 1 }}>
        <Box>
          <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase" }}>Power</Typography>
          <Typography variant="body1" sx={{ fontWeight: 700 }}>{power}</Typography>
        </Box>
        <Box>
          <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase" }}>Head</Typography>
          <Typography variant="body1" sx={{ fontWeight: 700 }}>{head}</Typography>
        </Box>
        <Box>
          <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase" }}>Flow</Typography>
          <Typography variant="body1" sx={{ fontWeight: 700 }}>{flow}</Typography>
        </Box>
        <Box>
          <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase" }}>Outlet</Typography>
          <Typography variant="body1" sx={{ fontWeight: 700 }}>{outlet}</Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default function HotWaterPumpPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box sx={{ bgcolor: "background.default", pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderRadius: 3, overflow: "hidden", bgcolor: "#f0f4ef", display: "flex", alignItems: "center", justifyContent: "center", aspectRatio: "4/3" }}>
                <Box component="img"
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TQCN200B.webp"
                  alt="TQCN / HQCN Series Hot Water Pump"
                  sx={{ width: "100%", height: "100%", objectFit: "contain", p: 3 }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ mb: 2 }}>
                <Box component="img"
                  src="https://pblol2.blob.core.windows.net/valvenok-images/logo/walrus_pumps.webp"
                  alt="WALRUS Pump"
                  sx={{ height: 32, objectFit: "contain" }}
                />
              </Box>

              <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2 }}>
                WALRUS / Hot Water Pump
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}>
                TQCN / HQCN Series
              </Typography>
              <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}>
                Hot Water Pump
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}>
                All-in-one electronic control pumps rated for hot water up to +90°C. Pump, motor,
                pressure tank and controller in a single compact unit, with an automatic relief
                valve, anti-cycling protection and corrosion resistant construction throughout.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                {TAGS.map((t) => (
                  <Chip key={t} label={t} size="small" sx={{ bgcolor: "primary.light", color: "primary.dark", fontWeight: 600, fontSize: "0.7rem" }} />
                ))}
              </Box>

              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mb: 4 }}>
                {[
                  { label: "Power",   value: "0.18 – 3.7 kW" },
                  { label: "Head",    value: "Up to 50M" },
                  { label: "Flow",    value: "Up to 270 L/min" },
                  { label: "Models",  value: "TQCN · HQCN" },
                ].map(({ label, value }) => (
                  <Box key={label}>
                    <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1 }}>{label}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>{value}</Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="outlined" size="large" fullWidth
                  href="/pumps-seals/pumps/hot-water-pump/variants"
                  sx={{ borderRadius: 0, fontWeight: 800, py: 1.75, fontSize: "1rem", boxShadow: "none", borderColor: "#1c2e1a", color: "#1c2e1a", "&:hover": { borderColor: "primary.main", color: "primary.main", boxShadow: "none" } }}>
                  View Products
                </Button>
                <Button variant="contained" size="large" fullWidth
                  startIcon={<ContactSupportIcon />}
                  onClick={() => setModalOpen(true)}
                  sx={{ borderRadius: 0, fontWeight: 800, py: 1.75, fontSize: "1rem", boxShadow: "none", bgcolor: "#1c2e1a", "&:hover": { bgcolor: "primary.main", boxShadow: "none" } }}>
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
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>Series Overview</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
            TQCN covers the higher power/flow range; HQCN is the compact, lower-flow option.
          </Typography>
          <Grid container spacing={3}>
            {TQCN_SPECS.map((s) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={`tqcn-${s.hz}`}>
                <Typography variant="caption" sx={{ color: "primary.main", fontWeight: 700, display: "block", mb: 1 }}>TQCN SERIES</Typography>
                <SeriesSpecCard {...s} />
              </Grid>
            ))}
            {HQCN_SPECS.map((s) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={`hqcn-${s.hz}`}>
                <Typography variant="caption" sx={{ color: "primary.main", fontWeight: 700, display: "block", mb: 1 }}>HQCN SERIES</Typography>
                <SeriesSpecCard {...s} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* HQCN model table */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>HQCN Series — Model Data</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
            50Hz and 60Hz variants for HQCN200, HQCN400 and HQCN800.
          </Typography>
          <TableContainer component={Paper} variant="outlined">
            <Table size="small">
              <TableHead>
                <TableRow sx={{ bgcolor: "#fff" }}>
                  <TableCell sx={{ fontWeight: 700 }}>Model</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Hz</TableCell>
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
                {HQCN_MODEL_TABLE.map((r, i) => (
                  <TableRow key={`${r.model}-${r.hz}-${i}`} hover>
                    <TableCell sx={{ fontWeight: 700, color: "primary.main" }}>{r.model}</TableCell>
                    <TableCell>{r.hz}</TableCell>
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

          <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 5, mb: 2 }}>HQCN Series — Dimensions</Typography>
          <TableContainer component={Paper} variant="outlined">
            <Table size="small">
              <TableHead>
                <TableRow sx={{ bgcolor: "#fff" }}>
                  <TableCell sx={{ fontWeight: 700 }}>Model</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Cycle (Hz)</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>A (mm)</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>B (mm)</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>C (mm)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {DIMENSIONS_HQCN.map((d) => (
                  <TableRow key={d.model} hover>
                    <TableCell sx={{ fontWeight: 700, color: "primary.main" }}>{d.model}</TableCell>
                    <TableCell>{d.cycle}</TableCell>
                    <TableCell>{d.a}</TableCell>
                    <TableCell>{d.b}</TableCell>
                    <TableCell>{d.c}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="body2" sx={{ color: "text.secondary", mt: 3, fontStyle: "italic" }}>
            TQCN series model-by-model electrical data and dimensions (TQCN200 – TQCN3700, single and 3-phase variants) will be added on the products page.
          </Typography>
        </Container>
      </Box>

      <Divider />

      {/* Operating conditions */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>Operating Conditions</Typography>
          <Grid container spacing={2}>
            {OPERATING_CONDITIONS.map(({ label, value }) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={label}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%" }}>
                  <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1.5 }}>{label}</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700, mt: 0.5 }}>{value}</Typography>
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
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>Key Features</Typography>
          <Grid container spacing={3}>
            {FEATURES.map(({ letter, title, body }) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={letter}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%", display: "flex", gap: 2 }}>
                  <Box sx={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", bgcolor: "primary.main", color: "#fff", fontWeight: 700, fontSize: "0.85rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {letter}
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>{title}</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>{body}</Typography>
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
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>Typical Applications</Typography>
          <Box component="ul" sx={{ pl: 2.5, mb: 4 }}>
            {APPLICATIONS_LIST.map((a) => (
              <Typography key={a} component="li" variant="body2" sx={{ color: "text.secondary", mb: 0.5 }}>{a}</Typography>
            ))}
          </Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>Industries Served</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {INDUSTRIES.map((i) => (
              <Chip key={i} label={i} size="small" variant="outlined" />
            ))}
          </Box>
        </Container>
      </Box>

      <TrustStrip points={TRUST_POINTS} />
      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={PRODUCT} />
    </>
  );
}