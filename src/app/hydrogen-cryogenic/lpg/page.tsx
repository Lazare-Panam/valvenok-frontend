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

const YOUNGDO_LOGO = "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/top_logo.png";
const BRAND_GREEN = "#61D649";

const LPG_PRODUCT: ProductForRFQ = {
  id: "youngdo-lpg-valves",
  name: "Youngdo LPG Cylinder Valves",
  brand: "Youngdo",
  category: "LPG Valves",
  categoryId: "lpg",
  subCategory: "LPG Cylinder Valves",
  thumbnail: "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YLC-2821.png",
  description: "Youngdo LPG cylinder valves — cylinder series, OPD overfilling prevention devices and piping connection valves. KGS, KS, CGA V-1 and UL certified.",
  keySpecs: [
    { label: "Working Pressure", value: "1.8 – 2.43 MPa" },
    { label: "Certifications", value: "KGS, KS, CGA V-1, UL" },
    { label: "Series", value: "YLC, MT, YBC, OPD, YLG, YPC" },
    { label: "Service", value: "LPG Cylinder & Distribution" },
  ],
  variantInfo: { count: 16, sizeRange: "1.8–2.43 MPa" },
};

const TECH_SPECS = [
  { label: "Cylinder Valve Pressure", value: "1.8 – 2.43 MPa" },
  { label: "OPD Working Pressure", value: "250 psi (OPD-3000)" },
  { label: "Piping Connection Pressure", value: "2.35 MPa (YLG Series)" },
  { label: "Inlet Thread Options", value: "W28-14th, W20-14th, 3/4-14 NGT, PT1/8-25th, PT1/2-14th, PT1/4-19th" },
  { label: "Outlet Thread Options", value: "W22.5-14th-LH, PT1/8-28th, PT1/2-14th, PT1/4-19th, Quick-ON Type" },
  { label: "Fuse Metal Temp", value: "97.8°C – 105.7°C (where applicable)" },
  { label: "Spring Working Pressure", value: "2.03 – 2.43 MPa (cylinder series)" },
  { label: "OPD Spring Pressure", value: "375 psi" },
  { label: "Standards", value: "KS B 6212, KGS AA312, KGS AA335, UL 2227" },
  { label: "Certifications", value: "KGS, KS, CGA V-1, UL, IECEx" },
  { label: "Total Models", value: "16 Models — YLC, MT, YBC, OPD, Y2700, Y1800, YLG, YPC Series" },
  { label: "Applications", value: "LPG Cylinders, Storage Tanks, Piping Distribution, OPD Safety" },
];

const FEATURES = [
  { letter: "A", title: "LPG Cylinder Service", body: "Designed specifically for LPG cylinder applications with wide inlet and outlet thread compatibility." },
  { letter: "B", title: "KGS & KS Certified", body: "Full KGS and KS certification to KS B 6212 and KGS AA312 standards for Korean and international compliance." },
  { letter: "C", title: "OPD Safety Devices", body: "Overfilling Prevention Devices (OPD) with spring working pressure of 375 psi for safe LPG filling operations." },
  { letter: "D", title: "CGA V-1 Approved", body: "CGA V-1 certification for North American cylinder valve compatibility and compliance." },
  { letter: "E", title: "UL Listed", body: "UL 2227 listed OPD and piping connection valves for North American market requirements." },
  { letter: "F", title: "Piping Connection Range", body: "YLG series piping connection valves rated to 2.35 MPa for LPG distribution pipeline service." },
  { letter: "G", title: "Wide Thread Range", body: "Multiple inlet and outlet thread configurations covering W28, W20, W22.5, PT and NGT standards." },
  { letter: "H", title: "Fuse Metal Safety", body: "Fuse metal temperature safety devices at 97.8°C–105.7°C for automatic pressure relief on overheat." },
  { letter: "I", title: "Quick-Connect Options", body: "YBC series quick-on-type outlet connections for fast and safe cylinder attachment." },
  { letter: "J", title: "16 Model Range", body: "Comprehensive range covering cylinder valves, OPD devices and piping connections for all LPG applications." },
  { letter: "K", title: "Proven Quality", body: "Youngdo LPG valves are deployed globally in LPG cylinder filling stations and distribution systems." },
  { letter: "L", title: "Fast Lead Times", body: "Stock availability across the range for rapid dispatch to UK, European and global projects." },
];

const TRUST_POINTS = [
  { value: "2.43 MPa", label: "Max Working Pressure" },
  { value: "KGS · KS", label: "Certifications" },
  { value: "CGA V-1 · UL", label: "International Approvals" },
  { value: "16 Models", label: "Product Range" },
  { value: "LPG Ready", label: "Service" },
];

const CERTIFICATIONS = ["KGS", "KS", "CGA V-1", "UL 2227", "KGS AA312", "LPG Service"];

export default function LPGValvesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box sx={{ bgcolor: "background.default", pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderRadius: 3, overflow: "hidden", bgcolor: "#f0f4ef", display: "flex", alignItems: "center", justifyContent: "center", aspectRatio: "4/3" }}>
                <Box component="img" src="https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YLC-2821.png" alt="Youngdo LPG Cylinder Valves" sx={{ width: "100%", height: "100%", objectFit: "contain", p: 3 }} />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: "inline-flex", alignItems: "center", bgcolor: BRAND_GREEN, px: 2, py: 1, mb: 3, borderRadius: 1 }}>
                <Box component="img" src={YOUNGDO_LOGO} alt="Youngdo" sx={{ maxHeight: 32, maxWidth: 130, objectFit: "contain" }} />
              </Box>

              <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2, display: "block" }}>
                LPG Valves / Cylinder Valves
              </Typography>

              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}>
                LPG Cylinder Valves
              </Typography>
              <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}>
                Cylinder, OPD & Piping Connection Valves
              </Typography>

              <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}>
                Youngdo supplies a comprehensive range of LPG cylinder valves, overfilling prevention devices and piping connection valves. 16 models across the YLC, MT, YBC, OPD, YLG and YPC series — KGS, KS, CGA V-1 and UL certified for global LPG cylinder and distribution applications.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                {CERTIFICATIONS.map((c) => (
                  <Chip key={c} label={c} size="small" sx={{ bgcolor: BRAND_GREEN, color: "text.primary", fontWeight: 600, fontSize: "0.7rem" }} />
                ))}
              </Box>

              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mb: 4 }}>
                {[
                  { label: "Max Pressure", value: "2.43 MPa" },
                  { label: "Models", value: "16 Series" },
                  { label: "Certifications", value: "KGS · KS · CGA · UL" },
                  { label: "Service", value: "LPG Cylinder & Distribution" },
                ].map(({ label, value }) => (
                  <Box key={label}>
                    <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1 }}>{label}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>{value}</Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="outlined" size="large" fullWidth href="/hydrogen-cryogenic/lpg/products"
                  sx={{ borderRadius: 0, fontWeight: 800, py: 1.75, fontSize: "1rem", boxShadow: "none", borderColor: BRAND_GREEN, color: BRAND_GREEN, "&:hover": { borderColor: "primary.main", color: "primary.main", boxShadow: "none" } }}>
                  View All Products
                </Button>
                <Button variant="contained" size="large" fullWidth startIcon={<ContactSupportIcon />} onClick={() => setModalOpen(true)}
                  sx={{ borderRadius: 0, fontWeight: 800, py: 1.75, fontSize: "1rem", boxShadow: "none", bgcolor: BRAND_GREEN, "&:hover": { bgcolor: "#50c23a", boxShadow: "none" } }}>
                  Request a Quote
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
                  <Box sx={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", bgcolor: BRAND_GREEN, color: "#fff", fontWeight: 700, fontSize: "0.85rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={LPG_PRODUCT} />
    </>
  );
}