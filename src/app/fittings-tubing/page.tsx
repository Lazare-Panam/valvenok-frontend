"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
} from "@mui/material";

export default function FittingsTubingPage() {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://pblol2.blob.core.windows.net/valvenok-images/products/tubing/hero-tubing.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: { xs: 8, md: 12 }
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: "#61D649", letterSpacing: 3, fontSize: 11, fontWeight: 700 }}>
            Precision Fluid Connections
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: 42, md: 72 }, fontWeight: 800, color: "#fff", mt: 1, mb: 3, lineHeight: 1.1, maxWidth: 900, textShadow: '0px 2px 10px rgba(0,0,0,0.3)' }}>
            Instrumentation Fittings & Tubing
          </Typography>
          <Typography sx={{ fontSize: { xs: 18, md: 20 }, color: "rgba(255,255,255,0.9)", maxWidth: 600, mb: 5, lineHeight: 1.7 }}>
            Engineered for leak-tight performance under pressure. Valvenok supplies
            the complete PANAM range of instrumentation fittings and high-grade
            stainless steel tubing for critical fluid and gas systems.
          </Typography>
          <Button variant="contained" size="large" href="mailto:sales@valvenok.com"
            sx={{ bgcolor: "#61D649", color: "#000", borderRadius: 1, px: 5, py: 2, fontSize: '1rem', fontWeight: 700, textTransform: 'none', "&:hover": { bgcolor: "#fff", color: "#000" } }}>
            Request Fittings Specs
          </Button>
        </Container>
      </Box>

      {/* Trust bar */}
      <Box sx={{ borderBottom: "1px solid", borderColor: "divider", py: 1.5, bgcolor: "#fff", whiteSpace: "nowrap", overflow: "hidden" }}>
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        <Box sx={{ display: "flex", width: "max-content", animation: "marquee 30s linear infinite", "&:hover": { animationPlayState: "paused" } }}>
          {[1, 2].map((iteration) => (
            <Box key={iteration} sx={{ display: "flex", gap: 6, pr: 6 }}>
              {["SS316 / Monel / Hastelloy / Duplex", "Pressure-rated up to 10,000 psig", "BSPP, BSPT, NPT & JIC Threads", "Same-Day UK Dispatch on Stock"].map((item) => (
                <Typography key={item} sx={{ fontSize: 19, fontWeight: 500, color: "text.secondary", display: "flex", alignItems: "center", gap: 1.5 }}>
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
              Built for Leak-Tight Service
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}>
              Valvenok supplies the complete PANAM range of twin-ferrule instrumentation
              fittings and seamless stainless steel tubing for industrial fluid, gas,
              and instrumentation systems. Whether you're building a new high-pressure
              manifold or maintaining an existing process line, our components deliver
              consistent, leak-free performance.
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              Our portfolio covers the full path from connection to conveyance — including{" "}
              <strong>twin-ferrule compression fittings</strong> in imperial and metric sizes,{" "}
              <strong>pipe fittings</strong> in BSPP, BSPT and NPT, and{" "}
              <strong>seamless stainless steel tubing</strong> in SS316 and SS304.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ bgcolor: "#f7faf6", borderRadius: 2, p: 4 }}>
              <Typography sx={{ fontWeight: 600, mb: 2, fontSize: 15 }}>Product Categories</Typography>
              {["Twin-Ferrule Compression Fittings", "Pipe Fittings (BSPP / BSPT / NPT)", "Front & Back Ferrules", "Needle, Ball & Check Valves", "Seamless Stainless Steel Tubing", "Adapters, Swivels & Bulkhead Unions"].map((item) => (
                <Typography key={item} sx={{ fontSize: 14, color: "text.secondary", py: 1, borderBottom: "1px solid", borderColor: "divider" }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* Instrumentation Fittings — Image on the Right */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" sx={{ color: "#61D649", fontWeight: 600, letterSpacing: 2, fontSize: 11 }}>
              Connection Components
            </Typography>
            <Typography variant="h3" component="a" href="/fittings-tubing/instrumentation-fittings"
              sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mt: 1, mb: 3, display: 'block', color: 'inherit', textDecoration: 'none', '&:hover': { color: '#61D649', textDecoration: 'underline' } }}>
              Instrumentation Fittings
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}>
              Complete PANAM twin-ferrule fittings range for instrumentation, pneumatic
              and hydraulic systems. Available in SS316, Monel, Hastelloy and Duplex
              with imperial and metric sizes from 1/16" to 2". Including male/female
              connectors, elbows, tees, unions, ferrules, plugs and bulkhead fittings —
              all rated for high-pressure service.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mb: 3 }}>
              {[
                'Twin-Ferrule Compression Design',
                'SS316, Monel, Hastelloy & Duplex',
                'Imperial & Metric Sizes',
                'BSPP, BSPT, NPT & JIC Threads',
                'Pressure-rated up to 10,000 psig',
              ].map(item => (
                <Typography key={item} sx={{ fontSize: 14, color: "text.secondary", display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box component="span" sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#61D649', flexShrink: 0 }} />
                  {item}
                </Typography>
              ))}
            </Box>
            <Button variant="outlined" href="/fittings-tubing/instrumentation-fittings"
              sx={{ borderColor: "#61D649", color: "#61D649", textTransform: "none", fontWeight: 700, "&:hover": { bgcolor: "#61D649", color: "#000", borderColor: "#61D649" } }}>
              Browse Fittings
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ borderColor: 'divider', borderRadius: 2, p: 4, textAlign: 'center' }}>
              <img
                src="https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/dielectric-fittings.jpg"
                alt="PANAM Instrumentation Fittings"
                style={{ width: '70%', height: 'auto' }}
              />
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* Tubing — Image on the Left */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ borderColor: 'divider', borderRadius: 2, p: 4, textAlign: 'center' }}>
              <img
                src="https://pblol2.blob.core.windows.net/panam-images/products/tubing/tubing-2.png"
                alt="PANAM Stainless Steel Tubing"
                style={{ width: '70%', height: 'auto' }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" sx={{ color: "#61D649", fontWeight: 600, letterSpacing: 2, fontSize: 11 }}>
              Fluid Conveyance
            </Typography>
            <Typography variant="h3" component="a" href="/pneumatic/tubing"
              sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mt: 1, mb: 3, display: 'block', color: 'inherit', textDecoration: 'none', '&:hover': { color: '#61D649', textDecoration: 'underline' } }}>
              Stainless Steel Tubing
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}>
              Premium seamless stainless steel tubing engineered for instrumentation
              and process applications. Available in SS316 and SS304 with imperial
              and metric outside diameters. Fully compatible with PANAM twin-ferrule
              fittings — supplied to demanding tolerance and surface finish standards
              for reliable, leak-tight connections.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mb: 3 }}>
              {[
                'Seamless SS316 & SS304',
                'Imperial OD: 1/16" to 1"',
                'Metric OD: 3mm to 25mm',
                'Tight Tolerance & Surface Finish',
                'Compatible with PANAM Fittings',
              ].map(item => (
                <Typography key={item} sx={{ fontSize: 14, color: "text.secondary", display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box component="span" sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#61D649', flexShrink: 0 }} />
                  {item}
                </Typography>
              ))}
            </Box>
            <Button variant="outlined" href="/fittings-tubing/instrumentation-fittings/jic-fittings"
              sx={{ borderColor: "#61D649", color: "#61D649", textTransform: "none", fontWeight: 700, "&:hover": { bgcolor: "#61D649", color: "#000", borderColor: "#61D649" } }}>
              Browse Tubing
            </Button>
          </Grid>
        </Grid>
        <Divider sx={{ mb: 10 }} />
          {/* Pneumatic Tubing — Image on the Right */}
          <Grid container spacing={8} alignItems="center" sx={{ mb: 10 }}>
  <Grid size={{ xs: 12, md: 6 }}>
    <Typography
      variant="overline"
      sx={{
        color: "#61D649",
        fontWeight: 600,
        letterSpacing: 2,
        fontSize: 11,
      }}
    >
      Pneumatic Tubing
    </Typography>
    <Typography
      variant="h3"
      component="a"
      href="https://www.spacpneumatic.co.uk/products/tubing"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        fontSize: { xs: 24, md: 32 },
        fontWeight: 700,
        mt: 1,
        mb: 3,
        display: "block",
        color: "inherit",
        textDecoration: "none",
        "&:hover": { color: "#61D649", textDecoration: "underline" },
      }}
    >
      Polyurethane & Recoil Tubing
    </Typography>
    <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
      SPAC tubing range including standard polyurethane, recoil,
      anti-spark and anti-spark recoil variants. Available in OD sizes
      4mm to 16mm across multiple colors including blue, yellow, black,
      green and red in roll lengths up to 1000m.
    </Typography>
    <Button
      variant="outlined"
      href="https://www.spacpneumatic.co.uk/products/tubing"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        mt: 3,
        borderColor: "#61D649",
        color: "#61D649",
        textTransform: "none",
        fontWeight: 700,
        "&:hover": {
          bgcolor: "#61D649",
          color: "#000",
          borderColor: "#61D649",
        },
      }}
    >
      Browse Tubing
    </Button>
  </Grid>
  <Grid size={{ xs: 12, md: 6 }}>
    <Box
      sx={{
        borderColor: "divider",
        borderRadius: 2,
        p: 4,
        textAlign: "center",
      }}
    >
      <img
        src="https://pblol2.blob.core.windows.net/spac-images/products/tubing/tubing-spac.png"
        alt="Pneumatic Tubing"
        style={{ width: "50%", height: "auto" }}
      />
    </Box>
  </Grid>
</Grid>

        <Divider sx={{ mb: 10 }} />
         

        {/* AP Fittings */}
       <Grid container spacing={8} alignItems="center" sx={{ mb: 10 }}>
  <Grid size={{ xs: 12, md: 6 }}>
    <Box
      sx={{
        borderColor: "divider",
        borderRadius: 2,
        p: 4,
        textAlign: "center",
      }}
    >
      <img
        src="https://pblol2.blob.core.windows.net/spac-images/products/fitting/a-series.png"
        alt="AP Fittings"
        style={{ width: "50%", height: "auto" }}
      />
    </Box>
  </Grid>

  <Grid size={{ xs: 12, md: 6 }}>
    <Typography
      variant="overline"
      sx={{
        color: "#61D649",
        fontWeight: 600,
        letterSpacing: 2,
        fontSize: 11,
      }}
    >
      Fittings & Connections
    </Typography>
    <Typography
      variant="h3"
      component="a"
      href="https://www.spacpneumatic.co.uk/products/fittings"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        fontSize: { xs: 24, md: 32 },
        fontWeight: 700,
        mt: 1,
        mb: 3,
        display: "block",
        color: "inherit",
        textDecoration: "none",
        "&:hover": { color: "#61D649", textDecoration: "underline" },
      }}
    >
      AP/EP Series Push-In Fittings
    </Typography>
    <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
      A-Series grey and E-Series black push-in fittings compatible with
      polyurethane and nylon tubing. Full range including male
      connectors, female connectors, elbows, tees, multi-connectors and
      more in BSP thread sizes G1/8 to G1/2.
    </Typography>
    <Button
      variant="outlined"
      href="https://www.spacpneumatic.co.uk/products/fittings"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        mt: 3,
        borderColor: "#61D649",
        color: "#61D649",
        textTransform: "none",
        fontWeight: 700,
        "&:hover": {
          bgcolor: "#61D649",
          color: "#000",
          borderColor: "#61D649",
        },
      }}
    >
      Browse Fittings
    </Button>
  </Grid>
</Grid>
        <Divider sx={{ mb: 10 }} />

        {/* Applications */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 700, mb: 2 }}>
            Fittings & Tubing Applications
          </Typography>
          <Grid container spacing={2}>
            {["Oil & Gas Production", "Chemical & Petrochemical Plants", "Power Generation", "Semiconductor & Cleanroom Fabs", "Pharmaceutical Process Lines", "Hydraulic & Pneumatic Systems"].map((ind) => (
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
            Build Leak-Free Connections Today
          </Typography>
          <Typography sx={{ color: "rgba(2, 2, 2, 0.7)", mb: 4, maxWidth: 560, mx: "auto" }}>
            Need a custom material grade, a specific pressure rating, or help selecting
            the right fitting for your line conditions? Our technical engineers are
            ready to support your specification.
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