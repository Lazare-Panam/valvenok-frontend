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
import TrustStrip from "@/src/app/Common/Products_Page/TrustStrip";
import RFQModal from "@/src/app/Common/RFQCard/RFQModal";
import { ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";

const PRODUCT: ProductForRFQ = {
  id: "bellows-sealed-gate-valves",
  name: "Bellows Sealed Gate Valves",
  brand: "Valvenok",
  category: "Sealed Valves",
  categoryId: "sealed-valves",
  subCategory: "Bellows Sealed Gate Valves",
  thumbnail: "https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/ansi-standard-bellows-sealed-gate-valve.jpg",
  description: "Bellows sealed gate valves across DIN and ANSI standards. Auto-welded metal bellows form a complete barrier between fluid and atmosphere ensuring zero stem leakage. Double seal design with bellows plus packing backup.",
  keySpecs: [
    { label: "Standards",   value: "DIN · ANSI" },
    { label: "Seal Design", value: "Bellows + Packing" },
    { label: "Leakage",     value: "Zero Stem Leakage" },
    { label: "Welding",     value: "Auto-Welded Bellows" },
  ],
  variantInfo: { count: 2, sizeRange: "Full Range" },
};

const TECH_SPECS = [
  { label: "Standards",      value: "DIN, ANSI" },
  { label: "Seal Design",    value: "Double seal — bellows + packing backup" },
  { label: "Stem Leakage",   value: "Zero leakage via auto-welded metal bellows" },
  { label: "Bellows Weld",   value: "Lower end to stem assembly + upper end to connecting plate — automatic welding" },
  { label: "Barrier",        value: "Complete metal barrier between fluid medium and atmosphere" },
  { label: "Safety",         value: "Dual safety — bellows primary, packing secondary" },
  { label: "Application",    value: "Process, Chemical, Industrial, High Temperature" },
  { label: "Certifications", value: "CE, ISO compliant" },
  { label: "Models",         value: "2 variants — DIN Standard, ANSI Standard" },
];

const FEATURES = [
  { letter: "A", title: "Auto-Welded Bellows",      body: "Lower end of the metal bellows is automatically welded to the valve stem assembly, and the upper end to the connecting plate — forming a precision sealed unit." },
  { letter: "B", title: "Zero Stem Leakage",        body: "The welded bellows form a complete metal barrier between the fluid medium and the atmosphere, ensuring absolute zero leakage at the valve stem." },
  { letter: "C", title: "Double Seal Design",        body: "Bellows primary seal combined with packing secondary seal provides dual safety — if the bellows are ever compromised, the packing maintains the seal." },
  { letter: "D", title: "DIN & ANSI Standards",     body: "Available across DIN and ANSI standards for compatibility with international pipeline specifications and project requirements." },
  { letter: "E", title: "Reliable Metal Barrier",   body: "The metal bellows construction provides a permanent, corrosion-resistant barrier that outperforms traditional packing-only stem sealing methods." },
  { letter: "F", title: "Process & Chemical Duty",  body: "Designed for demanding process, chemical, pharmaceutical and power generation applications where stem leakage is unacceptable." },
];

const TRUST_POINTS = [
  { value: "Zero Leakage",    label: "Stem Seal" },
  { value: "DIN · ANSI",     label: "Standards" },
  { value: "Double Seal",     label: "Bellows + Packing" },
  { value: "Auto-Welded",     label: "Bellows Construction" },
  { value: "CE / ISO",        label: "Certified" },
];

const TAGS = ["DIN", "ANSI", "Bellows Sealed", "Zero Leakage", "Double Seal", "Gate Valve"];

export default function BellowsSealedGateValveInfoPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box sx={{ bgcolor: "background.default", pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderRadius: 3, overflow: "hidden", bgcolor: "#f0f4ef", display: "flex", alignItems: "center", justifyContent: "center", aspectRatio: "4/3" }}>
                <Box component="img"
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/ansi-standard-bellows-sealed-gate-valve.jpg"
                  alt="Bellows Sealed Gate Valves"
                  sx={{ width: "100%", height: "100%", objectFit: "contain", p: 3 }}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2 }}>
                Sealed Valves / Gate Valves
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}>
                Bellows Sealed Gate Valves
              </Typography>
              <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}>
                DIN · ANSI — Zero Stem Leakage
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}>
                Bellows Sealed Gate Valves Across DIN And ANSI Standards. Auto-Welded Metal Bellows
                Form A Complete Barrier Between Fluid And Atmosphere Ensuring Zero Stem Leakage.
                Double Seal Design With Bellows Plus Packing Backup For Dual Safety.
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                {TAGS.map((t) => (
                  <Chip key={t} label={t} size="small" sx={{ bgcolor: "primary.light", color: "primary.dark", fontWeight: 600, fontSize: "0.7rem" }} />
                ))}
              </Box>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mb: 4 }}>
                {[
                  { label: "Standards",  value: "DIN · ANSI" },
                  { label: "Seal",       value: "Bellows + Packing" },
                  { label: "Leakage",    value: "Zero Stem Leakage" },
                  { label: "Models",     value: "2 Variants" },
                ].map(({ label, value }) => (
                  <Box key={label}>
                    <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1 }}>{label}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>{value}</Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="outlined" size="large" fullWidth
                  href="/valves/sealed-valves/gate-valves/products"
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

      <TrustStrip points={TRUST_POINTS} />
      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={PRODUCT} />
    </>
  );
}