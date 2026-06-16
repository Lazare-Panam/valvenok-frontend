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

const KLS_PRODUCT: ProductForRFQ = {
  id: "kls-series",
  name: "KLS Series Limit Switch Box",
  brand: "Kosaplus",
  category: "Limit Switch Boxes",
  categoryId: "limit-switches",
  subCategory: "Weatherproof & Explosion-Proof",
  thumbnail: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/limit-switches/ks-limit-switch.jpg",
  description: "Valve position indicators with IECEx & KCs explosion-proof certification. IP67/IP68, mechanical SPDT and proximity switch options, aluminium die-cast housing.",
  keySpecs: [
    { label: "Protection", value: "IP67 / IP68" },
    { label: "Certification", value: "IECEx / KCs" },
    { label: "Switch Type", value: "Mechanical or Proximity" },
    { label: "Housing", value: "ALDC12 / SUS304 / SUS316L" },
  ],
  variantInfo: {
    count: 1,
    sizeRange: "KLS Series",
  },
};

const TECH_SPECS = [
  { label: "Weatherproof Protection", value: "IP67 / IP68" },
  { label: "Explosion-Proof", value: "Ex db IIC T6 Gb / Ex tb IIIC T80°C Db, IP67" },
  { label: "Certification", value: "IECEx, KCs (Korean Explosion Proof)" },
  { label: "Switch Type", value: "2 × SPDT Mechanical or Proximity (PNP / NPN / 2-wire / P&F / SOLDO)" },
  { label: "Visual Indicator", value: "3-Way Indicator (standard) / 4-piece plastic indicator" },
  { label: "Cam Mechanism", value: "Quick-set & both-side contact cam" },
  { label: "Housing Structure", value: "Top two-fold weatherproof structure" },
  { label: "Body Material — Standard", value: "ALDC 12 (non-bushed or bushed housing)" },
  { label: "Body Material — Options", value: "SUS304 (S4), SUS316 (S6), SUS316L (L6)" },
  { label: "Ambient Temperature — Standard", value: "-20°C to +60°C" },
  { label: "Ambient Temperature — Low Temp", value: "-40°C to +60°C" },
  { label: "Shaft Length", value: "Short (S) or Long +5mm (L)" },
  { label: "Cable Entry — KLS1x", value: "PF1/2" },
  { label: "Cable Entry — KLS2x", value: "PF3/4 (KCs) / NPT3/4" },
  { label: "Bracket Options", value: "BS1, BS2, BS3, BS4, MB1" },
  { label: "Model Range", value: "KLS10, KLS1P, KLS1N, KLS12, KLS13, KLS14 / KLS20, KLS2P, KLS2N, KLS22, KLS23, KLS24" },
];

const FEATURES = [
  { letter: "A", title: "Explosion-Proof Certified", body: "IECEx and KCs (Korean explosion-proof) certified — suitable for hazardous areas including Zone 1 & 2 gas and dust environments." },
  { letter: "B", title: "IP67 / IP68 Protection", body: "Top two-fold weatherproof structure with IP67 standard and IP68 optional for submersion-rated installations." },
  { letter: "C", title: "Multiple Switch Types", body: "Available in mechanical 2×SPDT, PNP proximity, NPN proximity, 2-wire proximity, P&F, and SOLDO proximity configurations." },
  { letter: "D", title: "3-Way Visual Indicator", body: "Clear 3-way position indicator with 4-piece plastic indicator for instant visual confirmation of valve open/closed status." },
  { letter: "E", title: "Quick-Set Cam Mechanism", body: "Both-side contact cam with quick-set adjustment for fast, accurate alignment to valve travel without special tools." },
  { letter: "F", title: "Multiple Body Materials", body: "ALDC12 aluminium die-cast as standard, with SUS304, SUS316, and SUS316L stainless steel options for corrosive environments." },
  { letter: "G", title: "Wide Temperature Range", body: "Standard -20°C to +60°C with low-temperature option down to -40°C for cold climate and cryogenic adjacent service." },
  { letter: "H", title: "Flexible Bracket Mounting", body: "Five bracket options (BS1–BS4, MB1) for direct mounting to all major pneumatic and electric actuator platforms." },
  { letter: "I", title: "Flexible Cable Entry", body: "PF1/2 for weatherproof KLS1x models; PF3/4 or NPT3/4 for explosion-proof KLS2x models." },
  { letter: "J", title: "Short & Long Shaft Options", body: "Short shaft standard; long shaft (+5mm) option available to accommodate different actuator shaft protrusion depths." },
];

const TRUST_POINTS = [
  { value: "IP67 / IP68", label: "Ingress Protection" },
  { value: "IECEx / KCs", label: "Explosion Proof" },
  { value: "Mech & Prox", label: "Switch Options" },
  { value: "-40°C to +60°C", label: "Temperature Range" },
  { value: "Fast Dispatch", label: "Availability" },
];

const CERTIFICATIONS = ["IP67 / IP68", "IECEx", "KCs Explosion Proof", "Ex db IIC T6 Gb", "Ex tb IIIC T80°C Db"];

export default function KLSPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── Product Hero ── */}
      <Box sx={{ bgcolor: "background.default", pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
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
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/limit-switches/ks-limit-switch.jpg"
                  alt="KLS Series Limit Switch Box"
                  sx={{ width: "100%", height: "100%", objectFit: "contain", p: 3 }}
                />
              </Box>
            </Grid>

            {/* Details */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2 }}>
                Limit Switch Boxes / KLS Series
              </Typography>

              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}>
                Valve Position Indicator — Weatherproof & Explosion-Proof
              </Typography>
              <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}>
                KLS Series
              </Typography>

              <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}>
                The KLS series detects fully open/closed valve position and transmits it to the
                control system — a critical component in process safety loops. IECEx and KCs
                explosion-proof certified, IP67/IP68 rated, with mechanical SPDT and proximity
                switch options in aluminium or stainless steel housings.
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

              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mb: 4 }}>
                {[
                  { label: "Protection", value: "IP67 / IP68" },
                  { label: "Certification", value: "IECEx / KCs" },
                  { label: "Switch Type", value: "Mech. or Proximity" },
                  { label: "Temperature", value: "-40°C to +60°C" },
                ].map(({ label, value }) => (
                  <Box key={label}>
                    <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1 }}>
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
                  href="/actuators/limit-switches"
                  sx={{
                    borderRadius: 0,
                    fontWeight: 800,
                    py: 1.75,
                    fontSize: "1rem",
                    boxShadow: "none",
                    borderColor: "#1c2e1a",
                    color: "#1c2e1a",
                    "&:hover": { borderColor: "primary.main", color: "primary.main", boxShadow: "none" },
                  }}
                >
                  All Limit Switches
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
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%" }}>
                  <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1.5 }}>
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

      {/* ── Features ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>
            Key Features
          </Typography>
          <Grid container spacing={3}>
            {FEATURES.map(({ letter, title, body }) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={letter}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%", display: "flex", gap: 2 }}>
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
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>
                      {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
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
        product={KLS_PRODUCT}
      />
    </>
  );
}