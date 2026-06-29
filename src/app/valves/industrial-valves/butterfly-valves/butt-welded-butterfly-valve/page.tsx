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
import TrustStrip from "../../../../Common/Products_Page/TrustStrip";
import RFQModal from "@/src/app/Common/RFQCard/RFQModal";
import { ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";

const PRODUCT: ProductForRFQ = {
  id: "vf-cryogenic-butt-welded-butterfly-valve",
  name: "Cryogenic Butt Welded Butterfly Valve",
  brand: "Value Valves",
  category: "Butterfly Valves",
  categoryId: "butterfly-valves",
  subCategory: "Cryogenic",
  thumbnail: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/butterfly-weld.jpg",
  description: "Value Valves cryogenic butterfly valves — double eccentric and triple offset. ANSI 150LB, -196°C to +760°C. Butt welding, lugged and short flanged end connections. API 607 fire safe, SIL2/SIL3, TUV PED(H) and ATEX certified for LNG, LPG, petrochemical and nuclear power applications.",
  keySpecs: [
    { label: "Series",         value: "VF-923AL · VF-925AL · VF-926AL · VF-875L · VF-876L" },
    { label: "Size Range",     value: "DN50–DN900 (2\"–36\")" },
    { label: "Pressure",       value: "ANSI 150LB" },
    { label: "Temperature",    value: "-196°C to +760°C" },
  ],
  variantInfo: { count: 5, sizeRange: "DN50–DN900" },
};

const TECH_SPECS = [
  { label: "Series",              value: "VF-923AL (Lugged) · VF-925AL (Butt Weld) · VF-926AL (Flanged) · VF-875L (Butt Weld) · VF-876L (Short Flanged)" },
  { label: "Pressure Class",      value: "ANSI 150LB" },
  { label: "Size Range",          value: "DN50–DN900 (2\"–36\") — varies by series" },
  { label: "Temperature Range",   value: "-196°C to +160°C (Double Eccentric) · -196°C to +760°C (Triple Offset)" },
  { label: "Cryogenic Standard",  value: "BS 6364" },
  { label: "Valve Design",        value: "ASME B16.34 · API 609" },
  { label: "Pressure Testing",    value: "BS 6364 · ISO 5208" },
  { label: "Face To Face",        value: "API 609 · ISO 5752 · ASME B16.10" },
  { label: "Mounting Flange",     value: "ISO 5211" },
  { label: "Fire Safe",           value: "API 607 · ISO 10497" },
  { label: "Fugitive Emission",   value: "ANSI/ISA-SP-93 · ISO 15848 · TA-Luft" },
  { label: "Leakage Class",       value: "ANSI FCI 70-2 Class V · ISO 5208 Rate A" },
  { label: "Safety Integrity",    value: "SIL2 (low demand) · SIL3 (redundant architecture)" },
  { label: "Certifications",      value: "TUV PED(H) 2014/68/EU · ATEX 2014/34/EU · API 609 Monogram · LR · ABS · CR · TSG · TR CU 010 · TR CU 032" },
];

const FEATURES = [
  { letter: "A", title: "Cryogenic Service To -196°C",      body: "All series cryogenic tested per BS 6364 to -196°C (-321°F) — suitable for LNG, LPG, liquid nitrogen and liquid oxygen service without risk of seat embrittlement or shaft seizure." },
  { letter: "B", title: "Butt Welding End Connection",       body: "VF-925AL and VF-875L feature butt welding end connections per ASME B16.25 — eliminating flanged joint leakage risk in extreme cryogenic and high-temperature pipeline systems." },
  { letter: "C", title: "Extension Bonnet",                  body: "Extended stainless steel bonnet keeps gland packing and actuator away from the cryogenic process zone — preventing condensation, icing and gland freeze-up in liquid gas service." },
  { letter: "D", title: "Triple Offset Metal Seat",          body: "VF-875L and VF-876L triple offset geometry with weld overlay hard face disc provides bubble tight metal-to-metal shutoff from -196°C to +760°C — ANSI FCI 70-2 Class V leakage." },
  { letter: "E", title: "Double Eccentric Soft & Metal Seat", body: "VF-923AL, VF-925AL and VF-926AL double eccentric design accepts PCTFE soft seat and SS316 / Inconel 625 metal seat — bi-directional bubble tight shutoff via patented floating retainer." },
  { letter: "F", title: "Patented Floating Retainer Ring",   body: "Proprietary floating retainer achieves 100% body-to-retainer sealing — valve can remain fully closed indefinitely without seat deformation or internal leakage, critical in cryogenic standby service." },
  { letter: "G", title: "Splined Shaft — No Taper Pin",      body: "XM-19 splined shaft eliminates taper pin drilling — preventing shaft cracking in thermal cycling from cryogenic to ambient temperature and increasing torque transmission reliability." },
  { letter: "H", title: "Blow-Out Protection",               body: "Dual shaft stop and bottom cover design provides positive anti-blowout protection — both components are stainless steel and maintain integrity across the full cryogenic temperature range." },
  { letter: "I", title: "Anti-Static Structure",             body: "Built-in anti-static device provides continuous electrical continuity between disc, shaft and body — compliant with ATEX 2014/34/EU for use in explosive atmosphere LNG and LPG installations." },
  { letter: "J", title: "Dust-Proof Bearing System",         body: "Stainless Steel + RTFE bushing system prevents ingress of foreign material into the shaft area — maintaining smooth operation without special tools after prolonged cryogenic service." },
  { letter: "K", title: "SIL2 / SIL3 Capable",              body: "Suitable for safety instrumented systems to SIL2 in low demand mode and SIL3 in redundant architecture — meeting the most stringent safety requirements in LNG terminals and nuclear power plants." },
  { letter: "L", title: "API 609 Monogram Certified",        body: "API 609 Monogram, API 607 fire safe, ISO 15848 fugitive emission and PED Module H certified — covering all major international procurement specifications for cryogenic butterfly valves." },
];

const TRUST_POINTS = [
  { value: "-196°C",          label: "Min Temperature" },
  { value: "+760°C",          label: "Max Temperature" },
  { value: "SIL2 / SIL3",    label: "Safety Integrity" },
  { value: "API 609",         label: "Monogram" },
  { value: "Butt Weld",       label: "End Connection" },
];

const TAGS = ["Cryogenic", "LNG", "LPG", "API 607", "API 609", "SIL2", "SIL3", "ATEX", "TUV PED", "Butt Welding", "BS 6364", "ISO 15848"];

export default function ButtWeldedButterflyValvePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box sx={{ bgcolor: "background.default", pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderRadius: 3, overflow: "hidden", bgcolor: "#f0f4ef", display: "flex", alignItems: "center", justifyContent: "center", aspectRatio: "4/3" }}>
                <Box component="img"
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/butterfly-weld.jpg"
                  alt="Cryogenic Butt Welded Butterfly Valve"
                  sx={{ width: "100%", height: "100%", objectFit: "contain", p: 3 }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ mb: 2 }}>
                <Box component="img"
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/logo.svg"
                  alt="Value Valves"
                  sx={{ height: 32, objectFit: "contain" }}
                />
              </Box>
              <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2 }}>
                Butterfly Valves / Cryogenic
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}>
                Cryogenic Series
              </Typography>
              <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}>
                Butt Welded & Cryogenic Butterfly Valves — 2" To 36"
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}>
                Value Valves Cryogenic Butterfly Valves — Double Eccentric And Triple Offset Designs
                For LNG, LPG, Petrochemical And Nuclear Power Service. ANSI 150LB, -196°C To +760°C,
                Butt Welding, Lugged And Short Flanged End Connections. API 609 Monogram, API 607
                Fire Safe, SIL2/SIL3, TUV PED(H) And ATEX Certified.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                {TAGS.map((t) => (
                  <Chip key={t} label={t} size="small"
                    sx={{ bgcolor: "primary.light", color: "primary.dark", fontWeight: 600, fontSize: "0.7rem" }} />
                ))}
              </Box>

              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mb: 4 }}>
                {[
                  { label: "Size Range",   value: "DN50–DN900" },
                  { label: "Pressure",     value: "ANSI 150LB" },
                  { label: "Temperature",  value: "-196°C to +760°C" },
                  { label: "End Types",    value: "Butt Weld · Lugged · Flanged" },
                ].map(({ label, value }) => (
                  <Box key={label}>
                    <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1 }}>{label}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>{value}</Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="outlined" size="large" fullWidth
                  href="/valves/industrial-valves/butterfly-valves/butt-welded-butterfly-valve/products"
                  sx={{ borderRadius: 0, fontWeight: 800, py: 1.75, fontSize: "1rem", boxShadow: "none",
                    borderColor: "#1c2e1a", color: "#1c2e1a",
                    "&:hover": { borderColor: "primary.main", color: "primary.main", boxShadow: "none" } }}>
                  View Products
                </Button>
                <Button variant="contained" size="large" fullWidth
                  startIcon={<ContactSupportIcon />}
                  onClick={() => setModalOpen(true)}
                  sx={{ borderRadius: 0, fontWeight: 800, py: 1.75, fontSize: "1rem", boxShadow: "none",
                    bgcolor: "#1c2e1a", "&:hover": { bgcolor: "primary.main", boxShadow: "none" } }}>
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
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>Technical Specifications</Typography>
          <Grid container spacing={2}>
            {TECH_SPECS.map(({ label, value }) => (
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

      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>Key Features</Typography>
          <Grid container spacing={3}>
            {FEATURES.map(({ letter, title, body }) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={letter}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%", display: "flex", gap: 2 }}>
                  <Box sx={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", bgcolor: "primary.main",
                    color: "#fff", fontWeight: 700, fontSize: "0.85rem",
                    display: "flex", alignItems: "center", justifyContent: "center" }}>
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

      <TrustStrip points={TRUST_POINTS} />
      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={PRODUCT} />
    </>
  );
}