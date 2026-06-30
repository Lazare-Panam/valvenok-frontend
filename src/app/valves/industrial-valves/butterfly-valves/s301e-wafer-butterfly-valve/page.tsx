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
  id: "s301e-wafer-butterfly-valve",
  name: "SIRCA S301E Wafer Pattern Butterfly Valve",
  brand: "ISIS Fluid Control",
  category: "Butterfly Valves",
  categoryId: "butterfly-valves",
  subCategory: "S301E Wafer Gearbox",
  thumbnail: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/pp-92.webp",
  description: "SIRCA S301E Series resilient seated wafer pattern butterfly valve, gearbox operated. 1½\"–12\", PN6/PN10/PN16/ANSI 150. 316 stainless steel disc, EPDM or Nitrile liner. ISO 5211 mounting, Rate A no-leakage shutoff.",
  keySpecs: [
    { label: "Series",       value: "S301E" },
    { label: "Size Range",   value: "1½\"–12\" (DN40–DN300)" },
    { label: "Pressure",     value: "PN6 · PN10 · PN16 · ANSI 150" },
    { label: "Liner",        value: "EPDM · Nitrile" },
  ],
  variantInfo: { count: 20, sizeRange: "1½\"–12\"" },
};

const TECH_SPECS = [
  { label: "Series",             value: "S301E — Wafer Pattern, Gearbox Operated" },
  { label: "Size Range",         value: "1½\"–12\" (DN40–DN300)" },
  { label: "Pressure Rating",    value: "PN6 · PN10 · PN16 · ANSI 150" },
  { label: "Connection",         value: "Wafer" },
  { label: "Body Material",      value: "Ductile Iron — One-Piece Casting" },
  { label: "Disc Material",      value: "316 Stainless Steel" },
  { label: "Liner Options",      value: "EPDM · Nitrile" },
  { label: "Gear Ratio",         value: "24:1 (1½\"–6\") · 30:1 (8\"–12\")" },
  { label: "Mounting Flange",    value: "ISO 5211" },
  { label: "Leakage Class",      value: "Rate A — No Leakage" },
  { label: "Stem Connection",    value: "Square-End — No Fasteners, Floating Disc" },
  { label: "Seat Design",        value: "Vulcanized, Bonded To Metallic Support Ring" },
];

const FEATURES = [
  { letter: "A", title: "Bubble Tight Resilient Seat",      body: "Elastomeric resilient seat provides bubble tight shut-off, low operating torque, excellent corrosion resistance and long service life — ideal for low-to-medium pressure water, HVAC, air and general industrial systems." },
  { letter: "B", title: "Gearbox Operated",                  body: "Integrated gearbox (24:1 ratio up to 6\", 30:1 from 8\" upward) reduces operating torque for smooth, controlled operation on larger bore valves without manual lever effort." },
  { letter: "C", title: "Self-Centering Floating Disc",      body: "Square-end stem fits directly into the disc with no fasteners required — allowing the disc to float and self-centre for continuous, reliable sealing across the full operating range." },
  { letter: "D", title: "Replaceable Seat — No Tools",       body: "Vulcanized resilient seat bonded to a metallic support ring is easily replaceable without special tools — minimising maintenance downtime and spare parts cost over the valve's service life." },
  { letter: "E", title: "No Additional Gaskets Required",    body: "The seat profile eliminates the need for additional flange gaskets — simplifying installation and ensuring consistent sealing performance at the pipe flange interface." },
  { letter: "F", title: "Machined Position Mark",            body: "A machined position mark ensures accurate disc alignment during installation — removing guesswork and reducing the risk of misalignment-induced leakage on commissioning." },
  { letter: "G", title: "Self-Lubricating Upper Stem",       body: "The upper stem is secured by the operator with an integrated O-ring providing lifelong lubrication — reducing maintenance requirements and ensuring smooth long-term operation." },
  { letter: "H", title: "One-Piece High-Strength Body",      body: "One-piece ductile iron body casting delivers high strength with minimal weight — available in multiple materials and configurations for both wafer and lug installation." },
  { letter: "I", title: "Reduced Pressure Drop Design",      body: "SIRCA's specially profiled disc and seat geometry reduces pressure drop and minimises operating torque while ensuring tight shut-off through reciprocal back-pressure support." },
  { letter: "J", title: "316 Stainless Steel Disc",          body: "316 stainless steel disc provides corrosion resistance across the full size range — suitable for water treatment, HVAC and general industrial media without disc degradation." },
  { letter: "K", title: "ISO 5211 Actuator Mounting",        body: "ISO 5211 mounting interface allows direct actuator mounting without bracket adapters — compatible with standard pneumatic, electric and manual actuator configurations." },
  { letter: "L", title: "EPDM Or Nitrile Liner Options",     body: "Available with EPDM liner for general water and air service, or Nitrile liner for oil and hydrocarbon-compatible applications — covering the broadest range of standard process media." },
];

const TRUST_POINTS = [
  { value: "Rate A",         label: "No Leakage" },
  { value: "1½\"–12\"",     label: "Size Range" },
  { value: "ISO 5211",       label: "Actuator Mount" },
  { value: "EPDM / Nitrile", label: "Liner Options" },
  { value: "Gearbox",        label: "Operated" },
];

const TAGS = ["Wafer", "Gearbox", "316SS Disc", "EPDM", "Nitrile", "ISO 5211", "Rate A", "Ductile Iron", "Resilient Seated"];

export default function S301EButterflyValvePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box sx={{ bgcolor: "background.default", pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderRadius: 3, overflow: "hidden", bgcolor: "#f0f4ef", display: "flex", alignItems: "center", justifyContent: "center", aspectRatio: "4/3" }}>
                <Box component="img"
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/pp-92.webp"
                  alt="SIRCA S301E Wafer Pattern Butterfly Valve"
                  sx={{ width: "100%", height: "100%", objectFit: "contain", p: 3 }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ mb: 2 }}>
                <Box component="img"
                  src="https://pblol2.blob.core.windows.net/valvenok-images/logo/logo-isis.svg"
                  alt="ISIS Fluid Control"
                  sx={{ height: 32, objectFit: "contain" }}
                />
              </Box>
              <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2 }}>
                Butterfly Valves / Wafer Pattern
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}>
                S301E Series
              </Typography>
              <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}>
                Resilient Seated Wafer Butterfly Valve — Gearbox Operated
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}>
                SIRCA S301E Series Resilient Seated Wafer Pattern Butterfly Valves — Gearbox
                Operated. 1½\"–12\", PN6/PN10/PN16/ANSI 150. 316 Stainless Steel Disc, EPDM
                Or Nitrile Liner. ISO 5211 Mounting, Rate A No-Leakage Shutoff, Replaceable Seat
                Without Special Tools — For Water, HVAC, Air And General Industrial Systems.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                {TAGS.map((t) => (
                  <Chip key={t} label={t} size="small"
                    sx={{ bgcolor: "primary.light", color: "primary.dark", fontWeight: 600, fontSize: "0.7rem" }} />
                ))}
              </Box>

              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mb: 4 }}>
                {[
                  { label: "Size Range",  value: "1½\" To 12\"" },
                  { label: "Pressure",    value: "PN6–PN16 / ANSI 150" },
                  { label: "Disc",        value: "316 Stainless Steel" },
                  { label: "Liner",       value: "EPDM / Nitrile" },
                ].map(({ label, value }) => (
                  <Box key={label}>
                    <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1 }}>{label}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>{value}</Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="outlined" size="large" fullWidth
                  href="/valves/industrial-valves/butterfly-valves/s301e-wafer-butterfly-valve/products"
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