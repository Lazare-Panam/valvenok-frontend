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
  id: "vf-3-damper-butterfly-valve",
  name: "VF-3 Series Damper Butterfly Valve",
  brand: "Value Valves",
  category: "Butterfly Valves",
  categoryId: "butterfly-valves",
  subCategory: "Damper",
  thumbnail: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/damper-valve.jpg",
  description: "Value Valves VF-3 Series butterfly damper valves. Centric, double eccentric and triple eccentric designs. Metal, rubber and PTFE seat options. 2\"–96\", up to 1093°C. Wafer, short body flange and long body flange. HVAC, water treatment and industrial gas applications.",
  keySpecs: [
    { label: "Series",       value: "VF-350 · VF-360 · VF-376 · VF-386 · VF-396" },
    { label: "Size Range",   value: "2\"–96\"" },
    { label: "Pressure",     value: "Max 1 bar (15 psi) shutoff" },
    { label: "Temperature",  value: "-46°C to +1093°C" },
  ],
  variantInfo: { count: 11, sizeRange: "2\"–96\"" },
};

const TECH_SPECS = [
  { label: "Series",            value: "VF-350/356/357 · VF-360/366/367 · VF-376/377 · VF-386/387 · VF-396/397" },
  { label: "Valve Types",       value: "Centric · Double Eccentric · Triple Eccentric" },
  { label: "Size Range",        value: "2\"–24\" (Wafer) · 14\"–96\" (Flanged)" },
  { label: "Max Shutoff Pressure", value: "1 bar (15 psi)" },
  { label: "Temperature Range", value: "-46°C to +1093°C (metal seat) · -20°C to +120°C (rubber seat) · -29°C to +210°C (PTFE seat)" },
  { label: "Seat Options",      value: "Stepping Metal · Angle Metal · Metal Seat · Soft PTFE · Rubber" },
  { label: "Body Materials",    value: "Stainless Steel F316 · Stainless Steel F304 · Carbon Steel" },
  { label: "Disc Materials",    value: "Stainless Steel F316 · Stainless Steel F304 · Carbon Steel" },
  { label: "Stem Materials",    value: "SS 304 · SS 316" },
  { label: "Face To Face",      value: "ISO 5752 (standard) — customer specified on request" },
  { label: "Actuator Mounting", value: "ISO 5211" },
  { label: "End Connections",   value: "Wafer · Short Body Flange · Long Body Flange — custom flange drilling available" },
];

const FEATURES = [
  { letter: "A", title: "Five Seat Design Options",         body: "Stepping seat (3% leakage), angle seat (1% leakage), metal seat (Class IV), PTFE soft seat (bubble tight to 210°C) and rubber seat (bubble tight to 120°C) — covering the full spectrum of damper service requirements." },
  { letter: "B", title: "High Temperature To 1093°C",       body: "Metal seated centric (VF-350/360) and triple eccentric (VF-396/397) designs handle service temperatures from -46°C to +1093°C (-50°F to +2000°F) — suitable for flue gas, combustion air and industrial furnace damper duty." },
  { letter: "C", title: "Large Bore To 96\"",               body: "Short body and long body flange models (VF-356/357, VF-366/367, VF-376/377, VF-386/387, VF-396/397) available from 14\" to 96\" — covering large duct, chimney and industrial damper applications." },
  { letter: "D", title: "Triple Eccentric Class IV Shutoff", body: "VF-396/397 triple eccentric design with metal seat achieves ANSI FCI leakage Class IV — providing the tightest available shutoff in a large bore damper for critical isolation applications to 1093°C." },
  { letter: "E", title: "Double Eccentric Rubber & PTFE",   body: "VF-376/377 rubber seated and VF-386/387 PTFE seated double eccentric designs achieve bubble tight shutoff — rubber to 120°C for HVAC and water treatment, PTFE to 210°C for chemical gas service." },
  { letter: "F", title: "Thin Profile High Cv Disc",        body: "Thin profile disc design maximises flow coefficient (Cv) in the open position — minimising pressure drop across the damper in high volume gas and air handling duct systems." },
  { letter: "G", title: "Self-Lubricating Shaft Packing",   body: "Fully adjustable and self-lubricating shaft packing reduces maintenance requirements — maintaining shaft seal integrity across the full temperature range without periodic re-greasing." },
  { letter: "H", title: "Custom Flange Drilling",           body: "Flange drilling made to customer requirement on all flanged models — compatible with any national or customer-specific piping flange standard without modification to the valve body." },
  { letter: "I", title: "ISO 5211 Actuator Mounting",       body: "All damper valves comply with ISO 5211 actuator mounting interface — compatible with pneumatic, electric and hydraulic actuators for automated damper control in HVAC and process systems." },
  { letter: "J", title: "Extended Neck Option",             body: "Extended neck for thermal isolation available on request — keeping actuator and packing away from extreme temperature zones in high temperature furnace damper and flue gas applications." },
  { letter: "K", title: "Corrosive & Non-Corrosive Gas",    body: "Designed to suit both corrosive and non-corrosive gas environments — stainless steel F316 body, flange and disc available for aggressive chemical gas, acid mist and wet flue gas damper service." },
  { letter: "L", title: "Wafer & Flanged Configurations",   body: "Wafer type (VF-350, VF-360) from 2\"–24\" for compact installation, short body and long body flanged from 14\"–96\" for large duct systems — all face to face per ISO 5752 or customer specification." },
];

const TRUST_POINTS = [
  { value: "Up To 96\"",    label: "Max Size" },
  { value: "1093°C",        label: "Max Temperature" },
  { value: "5 Seat Types",  label: "Design Options" },
  { value: "Class IV",      label: "Triple Eccentric" },
  { value: "ISO 5211",      label: "Actuator Mount" },
];

const TAGS = ["Damper", "HVAC", "High Temperature", "Metal Seat", "PTFE Seat", "Rubber Seat", "Triple Eccentric", "ISO 5211", "Large Bore", "Flue Gas"];

export default function DamperButterflyValvePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box sx={{ bgcolor: "background.default", pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderRadius: 3, overflow: "hidden", bgcolor: "#f0f4ef", display: "flex", alignItems: "center", justifyContent: "center", aspectRatio: "4/3" }}>
                <Box component="img"
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/damper-valve.jpg"
                  alt="VF-3 Series Damper Butterfly Valve"
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
                Butterfly Valves / Damper
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}>
                VF-3 Series
              </Typography>
              <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}>
                Butterfly Damper Valves — 2" To 96"
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}>
                Value Valves VF-3 Series Butterfly Damper Valves — Centric, Double Eccentric And
                Triple Eccentric Designs. Metal, Rubber And PTFE Seat Options. 2\"–96\", Up To
                1093°C. Wafer, Short Body Flange And Long Body Flange End Connections. For
                HVAC, Water Treatment, Flue Gas And Industrial Gas Damper Applications.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                {TAGS.map((t) => (
                  <Chip key={t} label={t} size="small"
                    sx={{ bgcolor: "primary.light", color: "primary.dark", fontWeight: 600, fontSize: "0.7rem" }} />
                ))}
              </Box>

              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mb: 4 }}>
                {[
                  { label: "Size Range",   value: "2\" To 96\"" },
                  { label: "Pressure",     value: "Max 1 Bar Shutoff" },
                  { label: "Temperature",  value: "-46°C to +1093°C" },
                  { label: "Seat Types",   value: "Metal · PTFE · Rubber" },
                ].map(({ label, value }) => (
                  <Box key={label}>
                    <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1 }}>{label}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>{value}</Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="outlined" size="large" fullWidth
                  href="/valves/industrial-valves/butterfly-valves/damper-butterfly-valve/products"
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