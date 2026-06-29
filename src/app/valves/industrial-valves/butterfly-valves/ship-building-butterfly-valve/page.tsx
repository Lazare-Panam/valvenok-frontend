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
  id: "vf-265a-ship-building-butterfly-valve",
  name: "VF-265A Ship-Building Butterfly Valve",
  brand: "Value Valves",
  category: "Butterfly Valves",
  categoryId: "butterfly-valves",
  subCategory: "Ship-Building",
  thumbnail: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/vf-265-ship-building.jpg",
  description: "Value Valves VF-265A ship-building butterfly valves. Flanged type, 10 bar and 16 bar, DN50–DN600, soft seat, JIS 10K. ABS, LR, BV, DNV, CR and CCS certified.",
  keySpecs: [
    { label: "Model",          value: "VF-265A" },
    { label: "Size Range",     value: "DN50–DN600 (2\"–24\")" },
    { label: "Pressure",       value: "10 bar & 16 bar" },
    { label: "Temperature",    value: "-20°C to +120°C" },
  ],
  variantInfo: { count: 2, sizeRange: "DN50–DN600" },
};

const TECH_SPECS = [
  { label: "Model",              value: "VF-265A" },
  { label: "End Connection",     value: "Flanged type" },
  { label: "Flange Standard",    value: "JIS 10K — flat face or raised face" },
  { label: "Size Range",         value: "DN50–DN600 (2\"–24\") · 26\"–48\" consult VF-737" },
  { label: "Pressure Rating",    value: "10 bar (0 series) & 16 bar (6 series)" },
  { label: "Seat",               value: "Soft Seat — NBR, EPDM, Neoprene, Silicon, FKM" },
  { label: "Temperature Range",  value: "-20°C to +120°C (-4°F to +248°F)" },
  { label: "Face to Face",       value: "JIS F 7480, ISO 5752" },
  { label: "Design Standard",    value: "ISO 5208, ASME B16.34, API 594" },
  { label: "Mounting Flange",    value: "ISO 5211" },
  { label: "Closure Test",       value: "18 bar (260 psi) per ISO 5208 — DN50–DN600" },
  { label: "Shell Test",         value: "24 bar (340 psi) per ISO 5208 — DN50–DN600" },
];

const FEATURES = [
  { letter: "A", title: "1,000+ Ships Worldwide",        body: "The VF-265A ship-side valve has been in service on more than 1,000 ships around the world since 1980 — a proven track record in demanding marine environments." },
  { letter: "B", title: "Six Class Society Approvals",   body: "Certified by ABS, Lloyd's Register (LR), China CR, Bureau Veritas (BV), Det Norske Veritas (DNV) and China Classification Society (CCS)." },
  { letter: "C", title: "Pin-Free Design",               body: "Pin-free connection between disc and shaft below 24\" — reduces probability of leakage from seawater corrosion and allows quick maintenance without special tools." },
  { letter: "D", title: "Bi-Directional Bubble Tight",   body: "Bi-directional bubble tight shutoff to 16 bar (230 psi) across DN50–DN600 (2\"–24\")." },
  { letter: "E", title: "JIS 10K Flange Standard",       body: "Valve body designed to JIS 10K with flat face or raised face options — fully compatible with Japanese Industrial Standard shipbuilding piping systems." },
  { letter: "F", title: "Splined Shaft Strength",        body: "Shaft strength increased by splined shaft without drilling on the shaft for taper pin — superior to conventional taper pin designs in marine corrosive service." },
  { letter: "G", title: "Multiple Seat Materials",       body: "NBR (-10°C to +90°C), EPDM (-20°C to +120°C), Neoprene (0°C to +80°C), Silicon (-20°C to +180°C) and FKM (-18°C to +204°C) for all shipboard media." },
  { letter: "H", title: "ISO 5211 Actuator Mounting",   body: "Mounting top designed to ISO 5211 for direct actuator mounting — compatible with hydraulic, pneumatic, electric and manual actuator configurations." },
  { letter: "I", title: "Hydraulic Actuator Option",    body: "Manual hydraulic pump actuator available — stable output pressure, less operating torque than traditional worm gearbox, no electric power required." },
  { letter: "J", title: "Alloy Steel Options",           body: "Aluminium, copper alloy, duplex stainless steel body and disc available on request for specialist naval and offshore applications." },
  { letter: "K", title: "High Test Pressures",           body: "Closure test to 18 bar and shell test to 24 bar per ISO 5208 — meeting the most demanding shipbuilding pressure test requirements." },
  { letter: "L", title: "Large Bore Available",          body: "Sizes 26\"–48\" (650mm–1200mm) available — refer to VF-737 flanged type for large bore shipbuilding butterfly valve requirements." },
];

const TRUST_POINTS = [
  { value: "1,000+ Ships",   label: "Proven Track Record" },
  { value: "ABS · LR · DNV", label: "Class Societies" },
  { value: "16 bar",         label: "Max Pressure" },
  { value: "JIS 10K",        label: "Flange Standard" },
  { value: "Pin-Free",       label: "Disc-Shaft Design" },
];

const TAGS = ["ABS", "LR", "BV", "DNV", "CR", "CCS", "JIS 10K", "Soft Seat", "ISO 5211", "Shipbuilding"];

export default function ShipBuildingButterflyValvePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box sx={{ bgcolor: "background.default", pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderRadius: 3, overflow: "hidden", bgcolor: "#f0f4ef", display: "flex", alignItems: "center", justifyContent: "center", aspectRatio: "4/3" }}>
                <Box component="img"
                  src="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/vf-265-ship-building.jpg"
                  alt="VF-265A Ship-Building Butterfly Valve"
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
                Butterfly Valves / Ship-Building
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}>
                VF-265A Series
              </Typography>
              <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}>
                Ship-Building Butterfly Valves — 2" To 24"
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}>
                Value Valves VF-265A Series Ship-Building Butterfly Valves — In Service On Over 1,000
                Ships Worldwide Since 1980. Flanged JIS 10K, 10 Bar And 16 Bar, DN50–DN600,
                Certified By ABS, LR, BV, DNV, CR And CCS For The Most Demanding Marine And
                Naval Applications.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                {TAGS.map((t) => (
                  <Chip key={t} label={t} size="small" sx={{ bgcolor: "primary.light", color: "primary.dark", fontWeight: 600, fontSize: "0.7rem" }} />
                ))}
              </Box>

              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mb: 4 }}>
                {[
                  { label: "Size Range",    value: "DN50–DN600" },
                  { label: "Pressure",      value: "10 bar & 16 bar" },
                  { label: "Flange",        value: "JIS 10K" },
                  { label: "Temperature",   value: "-20°C to +120°C" },
                ].map(({ label, value }) => (
                  <Box key={label}>
                    <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1 }}>{label}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>{value}</Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="outlined" size="large" fullWidth
                  href="/valves/industrial-valves/butterfly-valves/ship-building-butterfly-valve/products"
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