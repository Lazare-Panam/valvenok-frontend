"use client";

import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";
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

const ITS_PRODUCT: ProductForRFQ = {
  id: "its-series",
  name: "ITS Series Limit Switch Box",
  brand: "Susin",
  category: "Limit Switch Boxes",
  categoryId: "limit-switches",
  subCategory: "Precision Position Monitoring",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/limit-switches/susin-limit-switch.webp",
  description:
    "Position monitoring switch boxes for rotary valves and NAMUR actuators: ITS 200 weatherproof IP67, ITS 400 explosion proof Ex d IIC T6 (EN 50014 / 50018, Zone 1 & 2), ITS 500 316L or Duplex stainless. 0°–90° dome indicator.",
  keySpecs: [
    { label: "Protection", value: "IP67 / IP68" },
    { label: "Explosion Proof", value: "Ex d IIC T6 (ITS 400 / 500)" },
    { label: "Switch Type", value: "2-SPDT or Proximity" },
    { label: "Temperature", value: "-20°C to +80°C" },
  ],
  variantInfo: {
    count: 3,
    sizeRange: "ITS 200 · ITS 400 · ITS 500",
  },
};

const TECH_SPECS = [
  { label: "Protection Rating", value: "IP67 (standard) / IP68 (optional)" },
  { label: "Explosion-Proof", value: "Ex d IIC T6, EN 50014 & 50018, Zone 1 & 2 (ITS 400 / 500)" },
  { label: "Terminal Block", value: "8 terminals (6 for switches, 2 for solenoid valve power)" },
  {
    label: "Switch Configuration",
    value: "2 × SPDT Mechanical or Proximity Sensors",
  },
  {
    label: "Visual Indicator",
    value: "Dome indicator — 0° to 90° position travel",
  },
  {
    label: "Shaft Standard",
    value: "NAMUR standard shaft for actuator mounting",
  },
  { label: "Housing Material", value: "Aluminium die-cast (ITS 200 / 400); 316L or Duplex stainless (ITS 500)" },
  {
    label: "Surface Finish",
    value: "Corrosion-resistant epoxy-polyester coating",
  },
  { label: "Ambient Temperature", value: "-20°C to +80°C" },
  { label: "Cable Entries", value: "NPT1/2 (ITS 200); 2 × PF3/4 (ITS 400 / 500); M20, BSP, PT, PG13.5, PF options" },
  { label: "Available Models", value: "ITS 200, ITS 400, ITS 500" },
  { label: "Manufacturer", value: "Susin Group (ISO 9001:2015 Certified)" },
];

// From Susin's ITS catalogue (Accessories - ITS.pdf)
const ITS_MODELS = [
  { model: "ITS 200", type: "Weatherproof", enclosure: "IP67, O-ring sealed", housing: "Aluminium die-cast, epoxy-polyester inside and outside", cable: "NPT1/2 (M20, BSP, PT, PG13.5, PF options)", temp: "-20°C to +80°C", switches: "2-SPDT mechanical (Form C); P&F proximity option" },
  { model: "ITS 400", type: "Explosion proof", enclosure: "Ex d IIC T6, IP67 (IP68 option), EN 50014 / 50018, Zone 1 & 2", housing: "Aluminium die-cast, epoxy-polyester outside", cable: "2 × PF3/4 (other threads optional)", temp: "-20°C to +80°C (~100°C and -40°C options)", switches: "2-SPDT; DPDT, P&F / Autonics proximity, magnetic sensors, 0–1 kΩ / 4–20 mA transmitter" },
  { model: "ITS 500", type: "Special material", enclosure: "As ITS 400", housing: "316L or Duplex stainless steel, unpainted", cable: "2 × PF3/4 (other threads optional)", temp: "As ITS 400", switches: "As ITS 400" },
];

const FEATURES = [
  {
    letter: "A",
    title: "Explosion Proof (ITS 400 / 500)",
    body: "Ex d IIC T6 enclosure built to EN 50014 and 50018, suitable for Zone 1 and Zone 2 hazardous areas.",
  },
  {
    letter: "B",
    title: "Stainless for Offshore (ITS 500)",
    body: "316L or Duplex stainless steel housing for extremely corrosive environments and offshore service; same internals as the ITS 400.",
  },
  {
    letter: "C",
    title: "IP67 / IP68 Protection",
    body: "Standard IP67 with IP68 optional for installations requiring submersion protection in wet or wash-down environments.",
  },
  {
    letter: "D",
    title: "0°–90° Dome Indicator",
    body: "Clear visual dome indicator covering the full 0° to 90° valve travel range for instant on-site position confirmation.",
  },
  {
    letter: "E",
    title: "NAMUR Shaft Mounting",
    body: "NAMUR standard shaft ensures direct, tool-free mounting compatibility with all major pneumatic and electric actuator brands.",
  },
  {
    letter: "F",
    title: "Mechanical or Proximity",
    body: "2 × SPDT mechanical switches (Form C) as standard; options for DPDT switches, P&F or Autonics proximity sensors, magnetic sensors and a 0–1 kΩ / 4–20 mA position transmitter.",
  },
  {
    letter: "G",
    title: "Aluminium or SS Housing",
    body: "Aluminium die-cast housing with epoxy-polyester coating (nylon or special colour coating optional); 316L or Duplex stainless on the ITS 500.",
  },
  {
    letter: "H",
    title: "Wide Temperature Range",
    body: "-20°C to +80°C as standard, with higher (~100°C) and lower (-40°C) temperature options on the ITS 400 / 500.",
  },
  {
    letter: "I",
    title: "Multiple Cable Entries",
    body: "NPT1/2 on the ITS 200 and 2 × PF3/4 on the ITS 400 / 500, with M20, BSP, PT, PG13.5 and PF threads as options.",
  },
  {
    letter: "J",
    title: "Three Models",
    body: "ITS 200 weatherproof for small actuators, ITS 400 explosion proof for hazardous areas, and ITS 500 stainless for corrosive and offshore sites.",
  },
];

const TRUST_POINTS = [
  { value: "IP67 / IP68", label: "Ingress Protection" },
  { value: "Ex d IIC T6", label: "Explosion Proof" },
  { value: "3 Models", label: "ITS 200 · 400 · 500" },
  { value: "-20°C to +80°C", label: "Temperature Range" },
  { value: "UK Based", label: "Technical Support" },
];

const CERTIFICATIONS = [
  "IP67 / IP68",
  "Ex d IIC T6",
  "EN 50014 / 50018",
  "Zone 1 & 2",
  "NAMUR",
];

export default function ITSPage() {
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/limit-switches/susin-limit-switch.webp"
                  alt="ITS Series Limit Switch Box"
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
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                  letterSpacing: 2,
                }}
              >
                Limit Switch Boxes / ITS Series
              </Typography>

              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                ITS Series Components
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Precision Position Monitoring Switch Box
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                The ITS series from Susin are position monitoring switch boxes
                for rotary valves and NAMUR actuators, with a 0°–90° dome
                indicator. Three models: the weatherproof ITS 200 for small
                actuators, the explosion-proof ITS 400 (Ex d IIC T6, Zone 1
                and 2) and the ITS 500 in 316L or Duplex stainless for
                offshore and corrosive sites.
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
                  { label: "Protection", value: "IP67 / IP68" },
                  { label: "Explosion Proof", value: "Ex d IIC T6 (ITS 400 / 500)" },
                  { label: "Switch Type", value: "2-SPDT or Proximity" },
                  { label: "Temperature", value: "-20°C to +80°C" },
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
                  href="/actuators/accessories"
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
                  All Accessories
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

      {/* ── Models (from Susin's ITS catalogue) ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>
            Models
          </Typography>
          <Box sx={{ textTransform: "none", overflowX: "auto", border: "1px solid rgba(0,0,0,0.12)", borderRadius: 2 }}>
            <Box component="table" sx={{ width: "100%", borderCollapse: "collapse", minWidth: 760, "& th, & td": { px: 2, py: 1.5, textAlign: "left", borderBottom: "1px solid rgba(0,0,0,0.08)", fontSize: "0.9rem", verticalAlign: "top" }, "& th": { bgcolor: "#f0f4ef", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: 1 } }}>
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Type</th>
                  <th>Enclosure</th>
                  <th>Housing</th>
                  <th>Cable entries</th>
                  <th>Temperature</th>
                  <th>Switch options</th>
                </tr>
              </thead>
              <tbody>
                {ITS_MODELS.map((m) => (
                  <tr key={m.model}>
                    <td style={{ fontWeight: 700, whiteSpace: "nowrap" }}>{m.model}</td>
                    <td>{m.type}</td>
                    <td>{m.enclosure}</td>
                    <td>{m.housing}</td>
                    <td>{m.cable}</td>
                    <td>{m.temp}</td>
                    <td>{m.switches}</td>
                  </tr>
                ))}
              </tbody>
            </Box>
          </Box>
          <Button href={SUSIN_CATALOG.ITS} target="_blank" rel="noopener" sx={{ mt: 2, fontWeight: 700, textTransform: "none", color: "#1c2e1a" }}>
            Download ITS catalogue (PDF)
          </Button>
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
        product={ITS_PRODUCT}
      />
    </>
  );
}
