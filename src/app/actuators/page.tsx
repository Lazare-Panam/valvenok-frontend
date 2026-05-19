"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
} from "@mui/material";

export default function ActuatorsPage() {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://pblol2.blob.core.windows.net/panam-images/products/actuators/ac-hero.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: { xs: 8, md: 12 }
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: "#61D649", letterSpacing: 3, fontSize: 11, fontWeight: 700 }}>
            Actuation Solutions
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: 42, md: 72 }, fontWeight: 800, color: "#fff", mt: 1, mb: 3, lineHeight: 1.1, maxWidth: 900, textShadow: '0px 2px 10px rgba(0,0,0,0.3)' }}>
            Pneumatic & Electric Valve Actuators
          </Typography>
          <Typography sx={{ fontSize: { xs: 18, md: 20 }, color: "rgba(255,255,255,0.9)", maxWidth: 600, mb: 5, lineHeight: 1.7 }}>
            Leading UK supplier of Hydraulic, Pneumatic, and Instrumentation components, with specialist
      expertise in valve actuators and complete actuating system solutions for demanding industrial
      environments. Engineering excellence delivered fast to global procurement teams, supporting
      everything from initial specification through to ongoing maintenance and optimisation.
          </Typography>
          <Button variant="contained" size="large" href="mailto:sales@valvenok.com"
            sx={{ bgcolor: "#61D649", color: "#000", borderRadius: 1, px: 5, py: 2, fontSize: '1rem', fontWeight: 700, textTransform: 'none', "&:hover": { bgcolor: "#fff", color: "#000" } }}>
            Request Actuator Specs
          </Button>
        </Container>
      </Box>

      {/* Trust bar */}
      <Box sx={{ borderBottom: "1px solid", borderColor: "divider", py: 1.5, bgcolor: "#fff", whiteSpace: "nowrap", overflow: "hidden" }}>
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        <Box sx={{ display: "flex", width: "max-content", animation: "marquee 30s linear infinite", "&:hover": { animationPlayState: "paused" } }}>
          {[1, 2].map((iteration) => (
            <Box key={iteration} sx={{ display: "flex", gap: 6, pr: 6 }}>
              {["ATEX & IECEx Compliant", "High-speed 24h Dispatch", "Double Acting & Spring Return", "ISO 5211 Mounting Standard"].map((item) => (
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
              Reliable Valve Automation
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}>
              Valvenok provides a comprehensive range of valve actuators engineered for the
              most demanding industrial environments. From high-cycle pneumatic rack and pinion
              units to precision electric actuators, our solutions ensure seamless automation
              for oil & gas, marine, and power generation sectors.
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              All units are <strong>ATEX compliant</strong> and built for long-term reliability,
              with full accessory support including <strong>solenoid valves</strong>, limit
              switches, and <strong>positioners</strong> for complete loop control.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ bgcolor: "#f7faf6", borderRadius: 2, p: 4 }}>
              <Typography sx={{ fontWeight: 600, mb: 2, fontSize: 15 }}>Actuator Categories</Typography>
              {["Rack & Pinion Pneumatic Actuators", "Double Acting & Spring Return", "SS316 & Aluminum Body Options", "ISO 5211 Direct Mount Flanges", "Limit Switch Boxes & Positioners", "Solenoid Valves & Accessories"].map((item) => (
                <Typography key={item} sx={{ fontSize: 14, color: "text.secondary", py: 1, borderBottom: "1px solid", borderColor: "divider" }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* Rack & Pinion Pneumatic Actuators */}
       <Grid container spacing={8} alignItems="center" sx={{ mb: 10 }}>
  <Grid size={{ xs: 12, md: 6 }}>
    <Typography variant="overline" sx={{ color: "#61D649", fontWeight: 600, letterSpacing: 2, fontSize: 11 }}>
      Pneumatic Actuators
    </Typography>
    <Typography variant="h3" component="a" href="/pneumatic/actuators/scotch-yoke"
      sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mt: 1, mb: 3, display: 'block', color: 'inherit', textDecoration: 'none', '&:hover': { color: '#61D649', textDecoration: 'underline' } }}>
      AD Series Rack & Pinion Actuators
    </Typography>
    <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
      Double-acting and spring-return pneumatic actuators for quarter-turn valves.
      Compact design with high torque output for reliable process automation. Available
      in SS316 and aluminum body options with 90° rotation for ball and butterfly valves
      in chemical processing applications.
    </Typography>
    <Button variant="outlined" href="pneumatic/actuators/scotch-yoke"
      sx={{ mt: 3, borderColor: "#61D649", color: "#61D649", textTransform: "none", fontWeight: 700, "&:hover": { bgcolor: "#61D649", color: "#000", borderColor: "#61D649" } }}>
      Browse Actuators
    </Button>
  </Grid>
  <Grid size={{ xs: 12, md: 6 }}>
    <Box sx={{ borderColor: 'divider', borderRadius: 2, p: 4, textAlign: 'center' }}>
      <img src="https://pblol2.blob.core.windows.net/panam-images/products/actuators/AD-Series.jpeg" alt="AD Series Rack & Pinion Actuators" style={{ width: '50%', height: 'auto' }} />
    </Box>
  </Grid>
</Grid>

<Divider sx={{ mb: 10 }} />

<Grid container spacing={8} alignItems="center" sx={{ mb: 10 }}>
  <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
    <Box sx={{ borderColor: 'divider', borderRadius: 2, p: 4, textAlign: 'center' }}>
      <img src="https://pblol2.blob.core.windows.net/spac-images/products/actuators/SRA-25-02.jpg" alt="SRA Series Spring Return Actuators" style={{ width: '50%', height: 'auto' }} />
    </Box>
  </Grid>
  <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
    <Typography variant="overline" sx={{ color: "#61D649", fontWeight: 600, letterSpacing: 2, fontSize: 11 }}>
      Pneumatic Actuators
    </Typography>
    <Typography variant="h3" component="a" href="/pneumatic/actuators/sra"
      sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mt: 1, mb: 3, display: 'block', color: 'inherit', textDecoration: 'none', '&:hover': { color: '#61D649', textDecoration: 'underline' } }}>
      SRA Series Spring Return Actuators
    </Typography>
    <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
      Fail-safe pneumatic rack-and-pinion rotary actuators with spring return operation.
      Engineered for quarter-turn valve automation where reliable closure on loss of air
      supply is critical. ISO 5211 direct-mount for ball, butterfly and plug valves across
      process control, water treatment and food & beverage applications.
    </Typography>
    <Button variant="outlined" href="/pneumatic/actuators/sra"
      sx={{ mt: 3, borderColor: "#61D649", color: "#61D649", textTransform: "none", fontWeight: 700, "&:hover": { bgcolor: "#61D649", color: "#000", borderColor: "#61D649" } }}>
      Browse Actuators
    </Button>
  </Grid>
</Grid>

<Divider sx={{ mb: 10 }} />

        {/* Applications */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 700, mb: 2 }}>
            Actuator Applications
          </Typography>
          <Grid container spacing={2}>
            {["Oil & Gas Processing", "Marine & Offshore Systems", "Power Generation Plants", "Chemical & Petrochemical", "Water Treatment Facilities", "Pharmaceutical Manufacturing"].map((ind) => (
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
            Automate Your Valves Today
          </Typography>
          <Typography sx={{ color: "rgba(2, 2, 2, 0.7)", mb: 4, maxWidth: 560, mx: "auto" }}>
            Need a custom torque rating or specific mounting configuration? Our technical
            engineers are ready to assist with your valve automation requirements.
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