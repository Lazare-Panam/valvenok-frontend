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
  id: "vf-75-ptfe-lined-butterfly-valve",
  name: "VF-75 PTFE / PFA Lined Centric Butterfly Valve",
  brand: "Value Valves",
  category: "Butterfly Valves",
  categoryId: "butterfly-valves",
  subCategory: "PTFE Lined",
  thumbnail: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/ptfe_lined_butterfly.png",
  description: "Value Valves VF-75 Series centric butterfly valves with PTFE or PFA lined disc and body seat. DN50–DN600, up to 16 bar, -35°C to +200°C. Wafer, lugged and flanged. EN 593, API 609, BS 5155 design standard. Chemical, petrochemical, water treatment and food processing applications.",
  keySpecs: [
    { label: "Series",        value: "VF-750 · VF-753 · VF-757" },
    { label: "Size Range",    value: "DN50–DN600 (2\"–24\")" },
    { label: "Pressure",      value: "Up to 16 bar" },
    { label: "Temperature",   value: "-35°C to +200°C" },
  ],
  variantInfo: { count: 3, sizeRange: "DN50–DN600" },
};

const TECH_SPECS = [
  { label: "Series",             value: "VF-750 (Wafer) · VF-753 (Lugged) · VF-757 (Flanged)" },
  { label: "Size Range",         value: "DN50–DN600 (2\"–24\")" },
  { label: "Max Working Pressure", value: "DN50–DN300: 16 bar · DN350–DN450: 10 bar · DN500–DN600: 6 bar" },
  { label: "Temperature Range",  value: "-35°C to +200°C (depending on pressure, medium and material)" },
  { label: "Design Standard",    value: "EN 593 · API 609 · BS 5155 · MSS SP-67" },
  { label: "Face To Face",       value: "DIN 558-1 · API 609 · ISO 5752 · BS 5155" },
  { label: "Testing Inspection", value: "EN 12266-1 · ISO 5208" },
  { label: "Flange Drilling",    value: "ANSI 150LB · PN10 · PN16 · JIS 10K · JIS 16K · AS Table E" },
  { label: "Mounting Flange",    value: "ISO 5211" },
  { label: "Seat",               value: "PTFE · PFA" },
  { label: "Disc",               value: "Stainless Steel · PTFE Coated SS · PFA Coated SS" },
  { label: "Body",               value: "Ductile Iron A536 · Carbon Steel WCB · Stainless Steel CF8M" },
];

const FEATURES = [
  { letter: "A", title: "Full PTFE / PFA Lining",          body: "3mm (1/8\") thick pure virgin PTFE or PFA encapsulated disc provides complete chemical resistance — isolating the metal body from aggressive media including acids, alkalis and solvents." },
  { letter: "B", title: "Curvature Machined Seat",          body: "Precision curvature machined PTFE or PFA body seat ensures consistent sealing across the full disc travel — providing long-term bubble tight shutoff without seat deformation." },
  { letter: "C", title: "Elastic Seat Energizer",           body: "Silicone seat energizer maintains constant contact pressure around the full seat perimeter — compensating for temperature cycling and ensuring consistent sealing performance over service life." },
  { letter: "D", title: "Extended Neck Design",             body: "Extended neck allows for piping insulation around the valve body and provides clear access for actuator mounting — compatible with pneumatic, electric, hydraulic and gear box operators." },
  { letter: "E", title: "Two-Piece Epoxy Coated Body",      body: "Two-piece body with epoxy coating meets full ASME Class 150 and DIN 3840 pressure ratings for hydrostatic requirements — suitable for buried or corrosive environment installation." },
  { letter: "F", title: "Disc Spring Shaft Protection",     body: "Integrated disc spring ensures perfect sealing at the shaft penetration and protects the shaft from process media contact — extending shaft service life in aggressive chemical duty." },
  { letter: "G", title: "Top Stem Bushing Alignment",       body: "PTFE top stem bushing ensures precision alignment between upper and lower shaft — eliminating shaft wobble, reducing operating torque and preventing seat wear from disc misalignment." },
  { letter: "H", title: "Multiple Flange Standards",        body: "Available in ANSI 150LB, PN10, PN16, JIS 10K, JIS 16K and AS Table E flange drilling — covering all major international piping standards without modification." },
  { letter: "I", title: "Wide Body Material Options",       body: "Ductile Iron A536, Carbon Steel WCB and Stainless Steel CF8M body options — shaft in SS431 or SS630 — covering standard, corrosive and hygienic process requirements." },
  { letter: "J", title: "ISO 5211 Actuator Interface",      body: "ISO 5211 mounting flange on all models allows direct actuator mounting without bracket adapters — compatible with all standard pneumatic, electric and hydraulic actuator configurations." },
  { letter: "K", title: "Broad Application Range",          body: "Suitable for chemical and petrochemical, water and wastewater, food processing, mining, textile, desalination, HVAC, shipbuilding and power generation service." },
  { letter: "L", title: "Wafer, Lugged & Flanged",          body: "Three end connection options — wafer (VF-750) for standard inline service, lugged (VF-753) for dead-end service, and flanged (VF-757) for high-integrity bolted connections." },
];

const TRUST_POINTS = [
  { value: "PTFE / PFA",    label: "Lining Material" },
  { value: "Up To 16 Bar",  label: "Max Pressure" },
  { value: "DN50–DN600",    label: "Size Range" },
  { value: "-35° To +200°", label: "Temperature" },
  { value: "ISO 5211",      label: "Actuator Mount" },
];

const TAGS = ["PTFE", "PFA", "EN 593", "API 609", "ISO 5211", "Wafer", "Lugged", "Flanged", "Chemical Duty", "Food Grade"];

export default function PTFELinedButterflyValvePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box sx={{ bgcolor: "background.default", pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderRadius: 3, overflow: "hidden", bgcolor: "#f0f4ef", display: "flex", alignItems: "center", justifyContent: "center", aspectRatio: "4/3" }}>
                <Box component="img"
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/ptfe_lined_butterfly.png"
                  alt="VF-75 PTFE PFA Lined Centric Butterfly Valve"
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
                Butterfly Valves / PTFE Lined
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}>
                VF-75 Series
              </Typography>
              <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}>
                PTFE / PFA Lined Centric Butterfly Valves — 2" To 24"
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}>
                Value Valves VF-75 Series Centric Butterfly Valves With Full PTFE Or PFA Lined
                Disc And Body Seat. DN50–DN600, Up To 16 Bar, -35°C To +200°C. Wafer, Lugged
                And Flanged End Connections. EN 593, API 609 And BS 5155 Design Standard For
                Chemical, Petrochemical, Water Treatment And Food Processing Applications.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                {TAGS.map((t) => (
                  <Chip key={t} label={t} size="small"
                    sx={{ bgcolor: "primary.light", color: "primary.dark", fontWeight: 600, fontSize: "0.7rem" }} />
                ))}
              </Box>

              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mb: 4 }}>
                {[
                  { label: "Size Range",   value: "DN50–DN600" },
                  { label: "Pressure",     value: "Up To 16 Bar" },
                  { label: "Lining",       value: "PTFE / PFA" },
                  { label: "Temperature",  value: "-35°C to +200°C" },
                ].map(({ label, value }) => (
                  <Box key={label}>
                    <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1 }}>{label}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>{value}</Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="outlined" size="large" fullWidth
                  href="/valves/industrial-valves/butterfly-valves/ptfe-lined-butterfly-valve/products"
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