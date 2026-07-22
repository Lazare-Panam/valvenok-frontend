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
  id: "automatic-flow-controlled-pump",
  name: "HQC / TQC Series Automatic Flow-Controlled Pump",
  brand: "WALRUS",
  category: "Automatic Flow-Controlled Pump",
  categoryId: "automatic-flow-controlled-pump",
  subCategory: "HQC / TQC Series",
  thumbnail: "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/HQC_200B.webp",
  description:
    "Downward-pressurization pumps designed to install below a water tower. The pump automatically starts and increases pressure when water is used, and automatically stops when demand ends — compact, quiet and corrosion resistant.",
  keySpecs: [
    { label: "Power",    value: "0.18 – 0.75 kW" },
    { label: "Pressure", value: "Up to 4.4 kg/cm²" },
    { label: "Flow",     value: "Up to 120 L/min" },
    { label: "Outlet",   value: "1\"" },
  ],
  variantInfo: { count: 2, sizeRange: "HQC / TQC Series" },
};

const SERIES_SPECS = [
  { series: "HQC", hz: "50", power: "0.18 - 0.75 kW", pressure: "Up to 3.3 kg/cm²", flow: "Up to 110 L/min", outlet: "1\"" },
  { series: "HQC", hz: "60", power: "0.18 - 0.75 kW", pressure: "Up to 2.7 kg/cm²", flow: "Up to 120 L/min", outlet: "1\"" },
  { series: "TQC", hz: "50", power: "0.18 - 0.75 kW", pressure: "Up to 3.5 kg/cm²", flow: "Up to 95 L/min",  outlet: "1\"" },
  { series: "TQC", hz: "60", power: "0.18 - 0.75 kW", pressure: "Up to 4.4 kg/cm²", flow: "Up to 75 L/min",  outlet: "1\"" },
];

const OPERATING_CONDITIONS = [
  { label: "Ambient Temperature", value: "Max. +40°C" },
  { label: "Liquid Temperature",  value: "+4°C ~ +40°C" },
  { label: "Pressure Range",      value: "Max. 6 kg/cm²" },
  { label: "Suction Pipe",        value: "Positive pressure only — negative pressure will not run the pump" },
  { label: "Discharge Pipe",      value: "Must be at least 0.5m lower than the water tower" },
];

const FEATURES = [
  { letter: "A", title: "Downward Pressurization",     body: "Installed below a water tower, the pump automatically starts and increases pressure when water is used." },
  { letter: "B", title: "Automatic Stop",              body: "When water use stops, the pump automatically stops supplying power and water." },
  { letter: "C", title: "Compact & Quiet Operation",   body: "Compact design and quiet operation suit a wide range of installation environments." },
  { letter: "D", title: "Corrosion Resistant Construction", body: "Constructed from top quality corrosion resistant materials for long-term reliability." },
  { letter: "E", title: "Motor Thermal Overload",      body: "Built-in thermal overload protects the motor against high operating temperatures and over-current." },
];

const HQC_MODEL_TABLE = [
  { model: "HQC200", hz: "50", power: "0.18", volt: "200-240", amps: "1.5",      pMax: "2.4", qMax: "55",  nw: "6.8", gw: "7.5",  pack: "45" },
  { model: "HQC400", hz: "50", power: "0.37", volt: "200-240", amps: "2.8",      pMax: "3.1", qMax: "85",  nw: "7.9", gw: "8.5",  pack: "45" },
  { model: "HQC800", hz: "50", power: "0.75", volt: "200-240", amps: "4.5",      pMax: "3.3", qMax: "110", nw: "10.3", gw: "10.9", pack: "36" },
  { model: "HQC200", hz: "60", power: "0.18", volt: "110/220", amps: "4.0/2.0",  pMax: "2.3", qMax: "60",  nw: "6.7", gw: "7.4",  pack: "45" },
  { model: "HQC400", hz: "60", power: "0.37", volt: "110/220", amps: "6.0/3.0",  pMax: "2.6", qMax: "80",  nw: "7.8", gw: "8.4",  pack: "45" },
  { model: "HQC800", hz: "60", power: "0.75", volt: "110/220", amps: "10.0/5.5", pMax: "2.7", qMax: "120", nw: "10.2", gw: "10.8", pack: "36" },
];

const TQC_MODEL_TABLE = [
  { model: "TQC200", hz: "50", power: "0.18", volt: "200-240", amps: "1.5",     pMax: "2.2", qMax: "45", nw: "6.7", gw: "7.2",  pack: "45" },
  { model: "TQC400", hz: "50", power: "0.37", volt: "200-240", amps: "3.0",     pMax: "3.0", qMax: "75", nw: "8.2", gw: "8.7",  pack: "45" },
  { model: "TQC800", hz: "50", power: "0.75", volt: "200-240", amps: "4.4",     pMax: "3.5", qMax: "95", nw: "10.4", gw: "10.9", pack: "30" },
  { model: "TQC200", hz: "60", power: "0.18", volt: "110/220", amps: "4.0/2.0", pMax: "2.2", qMax: "60", nw: "6.3", gw: "7.4",  pack: "45" },
  { model: "TQC400", hz: "60", power: "0.37", volt: "110/220", amps: "6.0/3.0", pMax: "2.8", qMax: "70", nw: "7.8", gw: "8.9",  pack: "45" },
  { model: "TQC800", hz: "60", power: "0.75", volt: "110/220", amps: "11/5.5",  pMax: "4.4", qMax: "75", nw: "11.7", gw: "12.0", pack: "30" },
];

const HQC_DIMENSIONS = [
  { model: "HQC200", cycle: "50/60", a: "292", b: "91", c: "96" },
  { model: "HQC400", cycle: "50/60", a: "292", b: "91", c: "96" },
  { model: "HQC800", cycle: "50/60", a: "344", b: "96", c: "101" },
];

const TQC_DIMENSIONS = [
  { model: "TQC200", cycle: "50",    a: "297", b: "91", c: "96" },
  { model: "TQC200", cycle: "60",    a: "273", b: "67", c: "72" },
  { model: "TQC400", cycle: "50",    a: "306", b: "99", c: "104" },
  { model: "TQC400", cycle: "60",    a: "280", b: "73", c: "78" },
  { model: "TQC800", cycle: "50/60", a: "352", b: "99", c: "104" },
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
  { value: "0.18 – 0.75 kW",  label: "Power Range" },
  { value: "Up to 4.4 kg/cm²", label: "Max Pressure" },
  { value: "Up to 120 L/min", label: "Max Flow" },
  { value: "50Hz / 60Hz",     label: "Frequency Support" },
  { value: "Max. 6 kg/cm²",   label: "System Pressure Rating" },
];

const TAGS = ["HQC Series", "TQC Series", "Downward Pressurization", "Automatic Start/Stop", "Water Tower Install", "50Hz", "60Hz"];

function SeriesSpecCard({ series, hz, power, pressure, flow, outlet }: { series: string; hz: string; power: string; pressure: string; flow: string; outlet: string }) {
  return (
    <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%" }}>
      <Typography variant="caption" sx={{ color: "primary.main", fontWeight: 700, display: "block", mb: 0.5 }}>{series} SERIES</Typography>
      <Typography variant="overline" sx={{ color: "text.secondary", fontWeight: 700 }}>{hz} Hz</Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mt: 1 }}>
        <Box>
          <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase" }}>Power</Typography>
          <Typography variant="body1" sx={{ fontWeight: 700 }}>{power}</Typography>
        </Box>
        <Box>
          <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase" }}>Pressure</Typography>
          <Typography variant="body1" sx={{ fontWeight: 700 }}>{pressure}</Typography>
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

function ModelTable({ title, rows }: { title: string; rows: typeof HQC_MODEL_TABLE }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>{title}</Typography>
      <TableContainer component={Paper} variant="outlined">
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: "background.default" }}>
              <TableCell sx={{ fontWeight: 700 }}>Model</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Hz</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Power (kW)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Volt (V)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Amps (A)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>P max. (kg/cm²)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Q max. (L/min)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>N.W. (kg)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>G.W. (kg)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((r, i) => (
              <TableRow key={`${r.model}-${r.hz}-${i}`} hover>
                <TableCell sx={{ fontWeight: 700, color: "primary.main" }}>{r.model}</TableCell>
                <TableCell>{r.hz}</TableCell>
                <TableCell>{r.power}</TableCell>
                <TableCell>{r.volt}</TableCell>
                <TableCell>{r.amps}</TableCell>
                <TableCell>{r.pMax}</TableCell>
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

function DimensionsTable({ title, rows }: { title: string; rows: typeof HQC_DIMENSIONS }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>{title}</Typography>
      <TableContainer component={Paper} variant="outlined">
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: "background.default" }}>
              <TableCell sx={{ fontWeight: 700 }}>Model</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Cycle (Hz)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>A (mm)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>B (mm)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>C (mm)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((d, i) => (
              <TableRow key={`${d.model}-${i}`} hover>
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
    </Box>
  );
}

export default function AutomaticFlowControlledPumpPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box sx={{ bgcolor: "background.default", pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderRadius: 3, overflow: "hidden", bgcolor: "#f0f4ef", display: "flex", alignItems: "center", justifyContent: "center", aspectRatio: "4/3" }}>
                <Box component="img"
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/HQC_200B.webp"
                  alt="HQC / TQC Series Automatic Flow-Controlled Pump"
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
                WALRUS / Automatic Flow-Controlled Pump
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}>
                HQC / TQC Series
              </Typography>
              <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}>
                Automatic Flow-Controlled Pump
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}>
                Designed to install below a water tower for downward pressurization. When water is
                used, the pump automatically starts and increases pressure to supply water; when
                demand stops, the pump automatically shuts off — compact, quiet and built from
                corrosion resistant materials.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                {TAGS.map((t) => (
                  <Chip key={t} label={t} size="small" sx={{ bgcolor: "primary.light", color: "primary.dark", fontWeight: 600, fontSize: "0.7rem" }} />
                ))}
              </Box>

              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mb: 4 }}>
                {[
                  { label: "Power",    value: "0.18 – 0.75 kW" },
                  { label: "Pressure", value: "Up to 4.4 kg/cm²" },
                  { label: "Flow",     value: "Up to 120 L/min" },
                  { label: "Models",   value: "HQC · TQC" },
                ].map(({ label, value }) => (
                  <Box key={label}>
                    <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1 }}>{label}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>{value}</Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="outlined" size="large" fullWidth
                  href="/pumps-seals/pumps/automatic-flow-controlled-pump/products"
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
            HQC and TQC share identical power and outlet specs; pressure and flow curves differ slightly between the two.
          </Typography>
          <Grid container spacing={3}>
            {SERIES_SPECS.map((s, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={`${s.series}-${s.hz}-${i}`}>
                <SeriesSpecCard {...s} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* Model tables */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>Model Data</Typography>
          <ModelTable title="HQC Series" rows={HQC_MODEL_TABLE} />
          <ModelTable title="TQC Series" rows={TQC_MODEL_TABLE} />

          <Typography variant="h5" sx={{ fontWeight: 700, mb: 4, mt: 6 }}>Dimensions</Typography>
          <DimensionsTable title="HQC Series" rows={HQC_DIMENSIONS} />
          <DimensionsTable title="TQC Series" rows={TQC_DIMENSIONS} />
        </Container>
      </Box>

      <Divider />

      {/* Operating conditions */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>Operating Conditions</Typography>
          <Grid container spacing={2}>
            {OPERATING_CONDITIONS.map(({ label, value }) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={label}>
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
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>Product Features</Typography>
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

      {/* Industries */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>Industries Served</Typography>
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