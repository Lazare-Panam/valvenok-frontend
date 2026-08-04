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
import TrustStrip from "../../../../Common/Products_Page/TrustStrip";
import RFQModal from "@/src/app/Common/RFQCard/RFQModal";
import { ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";

const PRODUCT: ProductForRFQ = {
  id: "401n-double-offset-butterfly-valve",
  name: "SIRCA 401N Series Double Offset Butterfly Valve",
  brand: "ISIS Fluid Control",
  category: "Butterfly Valves",
  categoryId: "butterfly-valves",
  subCategory: "401N Double Offset",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/Sirca-401N.png",
  description:
    'SIRCA 401N Series double offset butterfly valve with bubble tight seal. 3"–56" (DN80–DN1400), ANSI Class 150 bidirectional. Wafer, lug and double flanged on request. PTFE+Carbographite seat, Inconel 625 LCF metal seat option. Fire safe API 607, ATEX, SIL certified.',
  keySpecs: [
    { label: "Series", value: "401N" },
    { label: "Size Range", value: '3"–56" (DN80–DN1400)' },
    { label: "Pressure", value: "ANSI Class 150" },
    { label: "Temperature", value: "-40°C to +220°C" },
  ],
  variantInfo: { count: 1, sizeRange: '3"–56"' },
};

const TECH_SPECS = [
  { label: "Series", value: "401N — Double Eccentricity (Offset) Type" },
  { label: "Size Range", value: '3"–56" (DN80–DN1400)' },
  {
    label: "Connection Type",
    value: "Wafer · Lug · Double Flanged (On Request)",
  },
  { label: "Design Standard", value: "ASME B16.34 · EN 12516-2 · EN 593" },
  { label: "Face To Face", value: "API 609 · EN 558" },
  {
    label: "Operating Temperature",
    value: "-40°C to +220°C (-40°F to +428°F)",
  },
  { label: "Pressure Rating", value: "ASME Class 150 — Bidirectional" },
  {
    label: "Flange Drilling",
    value: "ASME B16.5 · ASME B16.47 Series A · EN 1092-1",
  },
  { label: "Testing", value: "API 598 · EN 12266-1" },
  { label: "Leakage Class", value: "Rate A — No Leakage per EN 12266-1" },
  {
    label: "Body Materials",
    value: "Ductile Iron · Carbon Steel · Stainless Steel",
  },
  {
    label: "Disc Materials",
    value: "Ductile Iron · Carbon Steel · Stainless Steel",
  },
  { label: "Stem Materials", value: "AISI 304 · AISI 316 · AISI 630" },
  {
    label: "Seat",
    value: "PTFE + Carbographite · Inconel 625 LCF (Metal Seated, On Request)",
  },
  {
    label: "Certifications",
    value:
      "PED 97/23/EC · ATEX 94/9/EC · API 607 Fire Safe · ISO 10497 · API 6FA (On Request) · SIL — IEC 61508 / IEC 61511 · GOST-R · CU TR 10 · CU TR 32",
  },
];

const FEATURES = [
  {
    letter: "A",
    title: "Double Eccentric Geometry",
    body: "Dual offset disc and shaft geometry lifts the disc clear of the seat throughout most of the travel — reducing seat wear, lowering operating torque and delivering bubble tight bidirectional shutoff designed for heavy duty service.",
  },
  {
    letter: "B",
    title: "Bidirectional Bubble Tight Seal",
    body: "ASME Class 150 bidirectional pressure rating with Rate A — no leakage per EN 12266-1 — suitable for flow control and tight shutoff in either flow direction without orientation restrictions.",
  },
  {
    letter: "C",
    title: "API 609 Anti-Blowout Stem",
    body: "Adjustable-type upper stem seal uses a CHEVRON pack of PTFE and Carbographite onwhich a stuffing box acts — anti-blowout system per API 609 prevents stem ejection under full line pressure.",
  },
  {
    letter: "D",
    title: "Three End Connection Types",
    body: "Wafer body type with 4 centering holes for easy mounting between flanges, or lug type with threaded or through lugs for use as a foot valve at the end of a pipeline — double flanged available on request.",
  },
  {
    letter: "E",
    title: "PTFE + Carbographite Seat",
    body: "Standard soft seat in PTFE reinforced with Carbographite provides chemical resistance and tight shutoff across the full -40°C to +220°C operating range.",
  },
  {
    letter: "F",
    title: "Inconel 625 LCF Metal Seat Option",
    body: "Metal-to-metal seated configuration using Inconel 625 LCF available on request — for high temperature, fire safe and abrasive service beyond the limits of soft-seated designs.",
  },
  {
    letter: "G",
    title: "Fire Safe Certified",
    body: "Certified to API 607 and ISO 10497 fire safe standards, with API 6FA available on request — maintains shutoff integrity in fire conditions for critical isolation duty in oil, gas and petrochemical service.",
  },
  {
    letter: "H",
    title: "ATEX & SIL Certified",
    body: "Certified to 94/9/CE ATEX for use in potentially explosive atmospheres and to SIL per IEC 61508 / IEC 61511 — suitable for safety instrumented systems in hazardous process areas.",
  },
  {
    letter: "I",
    title: "Wide Body Material Selection",
    body: "Body, disc and stem available in ductile iron, carbon steel and stainless steel — stem in AISI 304, AISI 316 or AISI 630 — covering standard, corrosive and high-strength application requirements.",
  },
  {
    letter: "J",
    title: "Massive Size Range",
    body: 'Available from 3" up to an exceptional 56" (DN80–DN1400) — among the largest double offset butterfly valve ranges available, suitable for large bore pipeline and plant isolation duty.',
  },
  {
    letter: "K",
    title: "Chemical & Petrochemical Duty",
    body: "Engineered for chemical and pharmaceutical industries, solvent recovery systems and other applications with compatible materials — designed to up-to-date criteria for minimum maintenance.",
  },
  {
    letter: "L",
    title: "International Certification Coverage",
    body: "PED 97/23/EC, GOST-R and CU TR 10/32 certified — covering European, Russian and Eurasian Customs Union regulatory requirements for cross-border project specification.",
  },
];

const TRUST_POINTS = [
  { value: "Rate A", label: "No Leakage" },
  { value: '3"–56"', label: "Size Range" },
  { value: "API 607", label: "Fire Safe" },
  { value: "ATEX · SIL", label: "Certified" },
  { value: "-40° to +220°", label: "Temperature" },
];

const TAGS = [
  "Double Offset",
  "Wafer",
  "Lug",
  "Double Flanged",
  "API 609",
  "API 607",
  "ATEX",
  "SIL",
  "PTFE+Carbographite",
  "Inconel 625",
  "Bidirectional",
];

export default function DoubleOffsetButterflyValve401NPage() {
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/Sirca-401N.png"
                  alt="SIRCA 401N Series Double Offset Butterfly Valve"
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/logo/logo-isis.svg"
                  alt="ISIS Fluid Control"
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
                Butterfly Valves / Double Offset
              </Typography>
              <Typography
                variant="h1"
                sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}
              >
                401N Series
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}
              >
                Double Offset Butterfly Valve — 3" To 56"
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                SIRCA 401N Series Double Eccentricity Butterfly Valves With
                Bubble Tight Seal, Designed For Heavy Duty Shipbuilding And
                Petrochemical Service. 3\"–56\" (DN80–DN1400), ANSI Class 150
                Bidirectional. Wafer, Lug And Double Flanged Available. API 607
                Fire Safe, ATEX And SIL Certified For Aggressive Fluids And
                Gases.
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
                  { label: "Size Range", value: '3" To 56"' },
                  { label: "Pressure", value: "ANSI Class 150" },
                  { label: "Connection", value: "Wafer · Lug · Flanged" },
                  { label: "Temperature", value: "-40°C to +220°C" },
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
        product={PRODUCT}
      />
    </>
  );
}
