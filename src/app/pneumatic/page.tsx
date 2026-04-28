"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
} from "@mui/material";

export default function PneumaticSystemsPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: { xs: '60vh', md: '80vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://pblol2.blob.core.windows.net/valvenok-images/banner-images/ant-rozetsky-SLIFI67jv5k-unsplash.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: { xs: 8, md: 12 }
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: "#61D649", letterSpacing: 3, fontSize: 11, fontWeight: 700 }}>
            Pneumatic Solutions
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: 42, md: 72 }, fontWeight: 800, color: "#fff", mt: 1, mb: 3, lineHeight: 1.1, maxWidth: 900, textShadow: '0px 2px 10px rgba(0,0,0,0.3)' }}>
            Industrial Pneumatic Control & Automation
          </Typography>
          <Typography sx={{ fontSize: { xs: 18, md: 20 }, color: "rgba(255,255,255,0.9)", maxWidth: 600, mb: 5, lineHeight: 1.7 }}>
            High-efficiency pneumatic components designed for industrial automation.
            From precision air preparation to heavy-duty actuation, Valvenok provides
            the reliability your factory floor demands.
          </Typography>
          <Button variant="contained" size="large" href="mailto:sales@valvenok.com"
            sx={{ bgcolor: "#61D649", color: "#000", borderRadius: 1, px: 5, py: 2, fontSize: '1rem', fontWeight: 700, textTransform: 'none', "&:hover": { bgcolor: "#fff", color: "#000" } }}>
            Request Pneumatic Specs
          </Button>
        </Container>
      </Box>

      {/* Trust bar */}
      <Box sx={{ borderBottom: "1px solid", borderColor: "divider", py: 1.5, bgcolor: "#fff", whiteSpace: "nowrap", overflow: "hidden" }}>
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        <Box sx={{ display: "flex", width: "max-content", animation: "marquee 30s linear infinite", "&:hover": { animationPlayState: "paused" } }}>
          {[1, 2].map((iteration) => (
            <Box key={iteration} sx={{ display: "flex", gap: 6, pr: 6 }}>
              {["ISO 15552 & VDMA Standards", "High-speed 24h Dispatch", "Energy-efficient Air Prep", "NPT & BSPP Thread Standards"].map((item) => (
                <Typography key={item} sx={{ fontSize: 13, fontWeight: 500, color: "text.secondary", display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box component="span" sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#61D649" }} />
                  {item}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>

        {/* Intro */}
        <Grid container spacing={8} sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 36 }, fontWeight: 700, mb: 3 }}>
              Precision Air Control
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}>
              Valvenok specializes in high-performance pneumatic systems engineered
              for longevity and repeatability. Whether you are building complex
              automation cells or maintaining existing air lines, our components
              ensure minimal pressure drop and maximum cycle life.
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              Our range covers the entire air path: from <strong>FRL units</strong> that
              clean and regulate supply, to <strong>solenoid valves</strong> for
              logic control, and <strong>ISO cylinders</strong> for linear motion.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ bgcolor: "#f7faf6", borderRadius: 2, p: 4 }}>
              <Typography sx={{ fontWeight: 600, mb: 2, fontSize: 15 }}>Pneumatic Categories</Typography>
              {["ISO 15552 & Roundline Cylinders", "FRL Units (Filter, Regulator, Lubricator)", "Directional Control Solenoid Valves", "Push-in Fittings & Flow Controllers", "Pneumatic Tubing (PU, PA, PTFE)", "Air Silencers & Quick Exhaust Valves"].map((item) => (
                <Typography key={item} sx={{ fontSize: 14, color: "text.secondary", py: 1, borderBottom: "1px solid", borderColor: "divider" }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* ESC Cylinders */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" sx={{ color: "#61D649", fontWeight: 600, letterSpacing: 2, fontSize: 11 }}>
              Actuation & Motion
            </Typography>
            <Typography variant="h3" component="a" href="/pneumatic/cylinders"
              sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mt: 1, mb: 3, display: 'block', color: 'inherit', textDecoration: 'none', '&:hover': { color: '#61D649', textDecoration: 'underline' } }}>
              ESC Series Pneumatic Cylinders
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              Standard tie rod profile double acting cylinders available in bore sizes 32mm to 250mm
              with strokes up to 1000mm. Available in standard and through rod configurations,
              with magnetic and non-magnetic piston options for position sensing.
            </Typography>
            <Button variant="outlined" href="/pneumatic/cylinders"
              sx={{ mt: 3, borderColor: "#61D649", color: "#61D649", textTransform: "none", fontWeight: 700, "&:hover": { bgcolor: "#61D649", color: "#000", borderColor: "#61D649" } }}>
              Browse Cylinders
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ borderColor: 'divider', borderRadius: 2, p: 4, textAlign: 'center' }}>
              <img src="https://pblol2.blob.core.windows.net/spac-images/products/cylinder/DSNC_7050.png" alt="ESC Cylinders" style={{ width: '50%', height: 'auto' }} />
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* AP Fittings */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ borderColor: 'divider', borderRadius: 2, p: 4, textAlign: 'center' }}>
              <img src="https://pblol2.blob.core.windows.net/spac-images/products/fitting/a-series.png" alt="AP Fittings" style={{ width: '50%', height: 'auto' }} />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" sx={{ color: "#61D649", fontWeight: 600, letterSpacing: 2, fontSize: 11 }}>
              Fittings & Connections
            </Typography>
            <Typography variant="h3" component="a" href="/pneumatic/apfittings"
              sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mt: 1, mb: 3, display: 'block', color: 'inherit', textDecoration: 'none', '&:hover': { color: '#61D649', textDecoration: 'underline' } }}>
              AP/EP Series Push-In Fittings
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              A-Series grey and E-Series black push-in fittings compatible with polyurethane
              and nylon tubing. Full range including male connectors, female connectors, elbows,
              tees, multi-connectors and more in BSP thread sizes G1/8 to G1/2.
            </Typography>
            <Button variant="outlined" href="/pneumatic/apfittings"
              sx={{ mt: 3, borderColor: "#61D649", color: "#61D649", textTransform: "none", fontWeight: 700, "&:hover": { bgcolor: "#61D649", color: "#000", borderColor: "#61D649" } }}>
              Browse Fittings
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* Tubing */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" sx={{ color: "#61D649", fontWeight: 600, letterSpacing: 2, fontSize: 11 }}>
              Pneumatic Tubing
            </Typography>
            <Typography variant="h3" component="a" href="/pneumatic/tubing"
              sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mt: 1, mb: 3, display: 'block', color: 'inherit', textDecoration: 'none', '&:hover': { color: '#61D649', textDecoration: 'underline' } }}>
              Polyurethane & Recoil Tubing
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              SPAC tubing range including standard polyurethane, recoil, anti-spark and
              anti-spark recoil variants. Available in OD sizes 4mm to 16mm across multiple
              colors including blue, yellow, black, green and red in roll lengths up to 1000m.
            </Typography>
            <Button variant="outlined" href="/pneumatic/tubing"
              sx={{ mt: 3, borderColor: "#61D649", color: "#61D649", textTransform: "none", fontWeight: 700, "&:hover": { bgcolor: "#61D649", color: "#000", borderColor: "#61D649" } }}>
              Browse Tubing
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ borderColor: 'divider', borderRadius: 2, p: 4, textAlign: 'center' }}>
              <img src="https://pblol2.blob.core.windows.net/spac-images/products/tubing/tubing-spac.png" alt="Pneumatic Tubing" style={{ width: '50%', height: 'auto' }} />
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* Air Guns */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ borderColor: 'divider', borderRadius: 2, p: 4, textAlign: 'center' }}>
              <img src="https://pblol2.blob.core.windows.net/spac-images/products/air-gun/air-gun.png" alt="Air Blow Guns" style={{ width: '50%', height: 'auto' }} />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" sx={{ color: "#61D649", fontWeight: 600, letterSpacing: 2, fontSize: 11 }}>
              Accessories
            </Typography>
            <Typography variant="h3" component="a" href="/pneumatic/air-gun"
              sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mt: 1, mb: 3, display: 'block', color: 'inherit', textDecoration: 'none', '&:hover': { color: '#61D649', textDecoration: 'underline' } }}>
              Air Blow Guns
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              Industrial pneumatic air blow guns for cleaning and drying applications.
              Available in metal body and various nozzle configurations including short nozzle,
              small nozzle, long angled nozzle and long bead nozzle for different applications.
            </Typography>
            <Button variant="outlined" href="/pneumatic/air-gun"
              sx={{ mt: 3, borderColor: "#61D649", color: "#61D649", textTransform: "none", fontWeight: 700, "&:hover": { bgcolor: "#61D649", color: "#000", borderColor: "#61D649" } }}>
              Browse Air Guns
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* Applications */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 700, mb: 2 }}>
            Pneumatic Applications
          </Typography>
          <Grid container spacing={2}>
            {["Automated Assembly Lines", "Food & Beverage Packaging", "Pharmaceutical Cleanrooms", "Conveyor Systems & Material Handling", "Automotive Manufacturing", "Textile & Printing Machinery"].map((ind) => (
              <Grid key={ind} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#61D649", flexShrink: 0 }} />
                  <Typography sx={{ fontSize: 14, color: "text.secondary" }}>{ind}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA */}
        <Box sx={{ textAlign: "center", py: 6, borderRadius: 4, color: "#000000" }}>
          <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mb: 2 }}>
            Optimise Your Air System Today
          </Typography>
          <Typography sx={{ color: "rgba(2, 2, 2, 0.7)", mb: 4, maxWidth: 560, mx: "auto" }}>
            Need a custom cylinder stroke or a specific FRL configuration? Our technical
            engineers are ready to assist with your pneumatic circuit design.
          </Typography>
          <Button variant="contained" href="mailto:sales@valvenok.com"
            sx={{ bgcolor: "#61D649", color: "#000", px: 4, py: 1.5, fontWeight: 700 }}>
            Contact Technical Team
          </Button>
        </Box>
      </Container>
    </Box>
  );
}