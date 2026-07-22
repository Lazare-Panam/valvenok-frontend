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
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import TrustStrip from "../../../Common/Products_Page/TrustStrip";
import RFQModal from "@/src/app/Common/RFQCard/RFQModal";
import { ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";

const PRODUCT: ProductForRFQ = {
  id: "immersible-pump-series",
  name: "TPRK_E / TPHK / TPK Series Immersible Pump",
  brand: "WALRUS",
  category: "Immersible Pump",
  categoryId: "immersible-pump",
  subCategory: "TPRK_E / TPHK / TPK Series",
  thumbnail: "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TPHK.webp",
  description:
    "Vertical multistage centrifugal immersible pumps designed for industrial use, especially machine tools — carrying water, coolant, light oil and other clean, non-aggressive fluids. Self-priming, stainless steel construction across three series covering light-duty to high-head industrial applications.",
  keySpecs: [
    { label: "Power",       value: "0.22 – 18.5 kW" },
    { label: "Head",        value: "Up to 267M" },
    { label: "Flow",        value: "Up to 650 L/min" },
    { label: "Liquid Temp", value: "+0°C ~ +90°C" },
  ],
  variantInfo: { count: 3, sizeRange: "TPRK_E / TPHK / TPK Series" },
};

const SERIES_OVERVIEW = [
  {
    series: "TPRK_E",
    subtitle: "Coupling connection, drain-back tank",
    power: "1.5 – 18.5 kW",
    head: "Up to 267M",
    flow: "Up to 650 L/min",
    outlet: "1¼\" – 2\"",
    pressure: "Max. 30 kg/cm²",
  },
  {
    series: "TPHK",
    subtitle: "Co-axial pump/motor design",
    power: "0.37 – 3.7 kW",
    head: "Up to 90M",
    flow: "Up to 280 L/min",
    outlet: "¾\" – 1¼\"",
    pressure: "Max. 10 kg/cm²",
  },
  {
    series: "TPK",
    subtitle: "Stub shaft coupling connection",
    power: "0.22 – 1.58 kW",
    head: "Up to 100M",
    flow: "Up to 100 L/min",
    outlet: "¾\"",
    pressure: "Max. 10 kg/cm²",
  },
];

const OPERATING_CONDITIONS = [
  { label: "Ambient Temperature",  value: "Max. +40°C" },
  { label: "Liquid Temperature",   value: "+0°C ~ +90°C" },
  { label: "Submerged Depth",      value: "Min. 40mm" },
  { label: "Motor Enclosure",      value: "IP54, Insulation Class F" },
];

const MODEL_CODE_DECODERS = [
  {
    series: "TPRK_E",
    example: "TPRK 1T ** - 36 E",
    parts: [
      { part: "TPRK 1T", meaning: "Model type" },
      { part: "**", meaning: "Standard capacity (m³/h)" },
      { part: "36", meaning: "Number of stages / impellers" },
      { part: "E", meaning: "Drain back tank structure" },
    ],
  },
  {
    series: "TPHK",
    example: "TPHK 2T 6 - 4 S E",
    parts: [
      { part: "TPHK 2T", meaning: "Model type" },
      { part: "6", meaning: "Standard capacity (m³/h)" },
      { part: "4", meaning: "Number of stages (n-1) / impellers" },
      { part: "S", meaning: "Stainless steel series" },
      { part: "E", meaning: "Drain back tank structure" },
    ],
  },
  {
    series: "TPK",
    example: "TPK 4T 5 - 3 B",
    parts: [
      { part: "TPK 4T", meaning: "Pump and motor coaxial, model type" },
      { part: "5", meaning: "Number of impellers / standard capacity (m³/h)" },
      { part: "3", meaning: "Number of stages" },
      { part: "B", meaning: "Model without coupling design" },
    ],
  },
];

const FEATURES = [
  { letter: "A", title: "Self-Priming Multistage Design", body: "Vertical multistage centrifugal construction, self-priming, for reliable industrial fluid handling." },
  { letter: "B", title: "Stainless Steel Construction",    body: "Main working parts made from stainless steel across all three series for corrosion-free operation." },
  { letter: "C", title: "Drain-Back Tank (TPRK_E)",        body: "Liquid remains in the tank even if the mechanical seal leaks, protecting equipment and simplifying maintenance." },
  { letter: "D", title: "Cartridge Mechanical Seal",       body: "Cartridge-style mechanical seal on TPRK_E for easy servicing without full disassembly." },
  { letter: "E", title: "Co-Axial Pump/Motor (TPHK)",      body: "Impellers mounted directly on an extended motor shaft for a compact, co-axial design." },
  { letter: "F", title: "IE3 Motor Efficiency (TPHK)",     body: "TPHK series uses IE3-rated motors for improved energy efficiency in continuous industrial duty." },
  { letter: "G", title: "Wide Voltage Compatibility",      body: "50/60Hz dual-frequency motor codes across the range simplify global sourcing and stocking." },
  { letter: "H", title: "Mechanical Seal Options",         body: "Silicon carbide, carbon and multiple elastomer (HNBR/Viton/EPDM) seal face combinations available on request." },
];

const APPLICATIONS_LIST = [
  "Industrial circulation systems",
  "Washing / cleaning systems",
  "Filtration systems",
  "Machine tool coolant circulation",
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
  { value: "0.22 – 18.5 kW", label: "Power Range" },
  { value: "Up to 267M",     label: "Max Head" },
  { value: "Up to 650 L/min", label: "Max Flow" },
  { value: "+0°C ~ +90°C",   label: "Liquid Temperature" },
  { value: "IP54",           label: "Motor Enclosure" },
];

const TAGS = ["TPRK_E Series", "TPHK Series", "TPK Series", "Multistage", "Self-Priming", "Stainless Steel", "50Hz / 60Hz"];

function SeriesOverviewCard({ series, subtitle, power, head, flow, outlet, pressure }: (typeof SERIES_OVERVIEW)[0]) {
  return (
    <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%" }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "primary.main" }}>{series}</Typography>
      <Typography variant="caption" sx={{ color: "text.secondary", display: "block", mb: 2 }}>{subtitle}</Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
        <Box>
          <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase" }}>Power</Typography>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>{power}</Typography>
        </Box>
        <Box>
          <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase" }}>Head</Typography>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>{head}</Typography>
        </Box>
        <Box>
          <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase" }}>Flow</Typography>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>{flow}</Typography>
        </Box>
        <Box>
          <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase" }}>Outlet</Typography>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>{outlet}</Typography>
        </Box>
        <Box sx={{ gridColumn: "span 2" }}>
          <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase" }}>Max Pressure</Typography>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>{pressure}</Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default function ImmersiblePumpPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box sx={{ bgcolor: "background.default", pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderRadius: 3, overflow: "hidden", bgcolor: "#f0f4ef", display: "flex", alignItems: "center", justifyContent: "center", aspectRatio: "4/3" }}>
                <Box component="img"
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TPHK.webp"
                  alt="TPRK_E / TPHK / TPK Series Immersible Pump"
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
                WALRUS / Immersible Pump
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}>
                Immersible Pump
              </Typography>
              <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}>
                TPRK_E / TPHK / TPK Series
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}>
                Vertical multistage centrifugal immersible pumps designed for industrial use,
                specially for machine tools. Self-priming and constructed from stainless steel,
                suitable for water, coolant, light oil and other clean, non-aggressive fluids
                across industrial circulation, washing and filtration systems.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                {TAGS.map((t) => (
                  <Chip key={t} label={t} size="small" sx={{ bgcolor: "primary.light", color: "primary.dark", fontWeight: 600, fontSize: "0.7rem" }} />
                ))}
              </Box>

              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mb: 4 }}>
                {[
                  { label: "Power",   value: "0.22 – 18.5 kW" },
                  { label: "Head",    value: "Up to 267M" },
                  { label: "Flow",    value: "Up to 650 L/min" },
                  { label: "Series",  value: "TPRK_E · TPHK · TPK" },
                ].map(({ label, value }) => (
                  <Box key={label}>
                    <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1 }}>{label}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>{value}</Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="outlined" size="large" fullWidth
                  href="/pumps-seals/pumps/immersible-pump/variants"
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
            TPRK_E covers the widest power and head range; TPHK offers a compact co-axial design; TPK is the lightest-duty, coupling-based option.
          </Typography>
          <Grid container spacing={3}>
            {SERIES_OVERVIEW.map((s) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={s.series}>
                <SeriesOverviewCard {...s} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* Model code decoders */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>Model Code Decoder</Typography>
          <Grid container spacing={3}>
            {MODEL_CODE_DECODERS.map((d) => (
              <Grid size={{ xs: 12, md: 4 }} key={d.series}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%" }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "primary.main", mb: 0.5 }}>{d.series}</Typography>
                  <Typography variant="body2" sx={{ fontFamily: "monospace", fontWeight: 700, mb: 2 }}>{d.example}</Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {d.parts.map((p) => (
                      <Box key={p.part} sx={{ display: "flex", gap: 1, alignItems: "baseline" }}>
                        <Chip label={p.part} size="small" variant="outlined" sx={{ fontFamily: "monospace", fontWeight: 700 }} />
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>{p.meaning}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
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