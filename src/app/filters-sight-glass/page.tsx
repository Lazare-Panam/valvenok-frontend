"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
} from "@mui/material";

export default function SightGlassFiltrationPage() {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://pblol2.blob.core.windows.net/valvenok-images/products/sight-glass/sight-glass-hero.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: { xs: 8, md: 12 }
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: "#61D649", letterSpacing: 3, fontSize: 11, fontWeight: 700 }}>
            Flow Visibility & Filtration
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: 42, md: 72 }, fontWeight: 800, color: "#fff", mt: 1, mb: 3, lineHeight: 1.1, maxWidth: 900, textShadow: '0px 2px 10px rgba(0,0,0,0.3)' }}>
            Sight Glasses & Industrial Filtration
          </Typography>
          <Typography sx={{ fontSize: { xs: 18, md: 20 }, color: "rgba(255,255,255,0.9)", maxWidth: 600, mb: 5, lineHeight: 1.7 }}>
            Reliable flow inspection and contamination control for critical pipelines.
            Valvenok supplies precision-engineered sight glasses and strainers built
            for high-pressure, high-temperature service.
          </Typography>
          <Button variant="contained" size="large" href="mailto:sales@valvenok.com"
            sx={{ bgcolor: "#61D649", color: "#000", borderRadius: 1, px: 5, py: 2, fontSize: '1rem', fontWeight: 700, textTransform: 'none', "&:hover": { bgcolor: "#fff", color: "#000" } }}>
            Request Product Specs
          </Button>
        </Container>
      </Box>

      {/* Trust bar */}
      <Box sx={{ borderBottom: "1px solid", borderColor: "divider", py: 1.5, bgcolor: "#fff", whiteSpace: "nowrap", overflow: "hidden" }}>
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        <Box sx={{ display: "flex", width: "max-content", animation: "marquee 30s linear infinite", "&:hover": { animationPlayState: "paused" } }}>
          {[1, 2].map((iteration) => (
            <Box key={iteration} sx={{ display: "flex", gap: 6, pr: 6 }}>
              {["Borosilicate & Tempered Glass", "High-speed 24h Dispatch", "SS304 / SS316 Construction", "ANSI & DIN Flange Standards"].map((item) => (
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
              Visibility & Protection
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}>
              Valvenok supplies a complete range of inline sight glasses and filtration
              equipment for fluid and gas pipelines. Whether you need to verify flow direction,
              monitor liquid colour, or protect downstream equipment from particulate
              contamination, our products deliver dependable performance.
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              Our portfolio includes <strong>flanged sight glasses</strong> with rotor
              or flapper indicators, <strong>Y-type and basket strainers</strong> in carbon
              and stainless steel, and <strong>duplex filter assemblies</strong> for
              continuous-service applications.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ bgcolor: "#f7faf6", borderRadius: 2, p: 4 }}>
              <Typography sx={{ fontWeight: 600, mb: 2, fontSize: 15 }}>Product Categories</Typography>
              {["Flanged & Threaded Sight Glasses", "Flapper, Rotor & Drip Tube Indicators", "Y-Type Strainers (Cast & Forged)", "Basket Strainers for High Flow Lines", "Duplex Filter Assemblies", "Replacement Screens & Mesh Elements"].map((item) => (
                <Typography key={item} sx={{ fontSize: 14, color: "text.secondary", py: 1, borderBottom: "1px solid", borderColor: "divider" }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

{/* Flanged Sight Glass - Image on the Right */}
<Grid container spacing={8} alignItems="center" sx={{ mb: 10 }}>
  <Grid size={{ xs: 12, md: 6 }}>
    <Typography variant="overline" sx={{ color: "#61D649", fontWeight: 600, letterSpacing: 2, fontSize: 11 }}>
      Sight Glass & Filtration
    </Typography>
    <Typography variant="h3" component="a" href="/filters-sight-glass/sight-glass"
      sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mt: 1, mb: 3, display: 'block', color: 'inherit', textDecoration: 'none', '&:hover': { color: '#61D649', textDecoration: 'underline' } }}>
      Flanged Sight Glasses
    </Typography>
    <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
      BAG-FL double glass flanged sight glasses for visual flow monitoring. Available in
      DN15 to DN150 with borosilicate glass viewing windows, rated PN16 and PN40.
      Suitable for water, food, chemicals, air and other gases. Cast iron GG25 body with
      PTFE sealing, to EN 558 / EN 1092-1/2.
    </Typography>
    <Button variant="outlined" href="/filters-sight-glass/sight-glass"
      sx={{ mt: 3, borderColor: "#61D649", color: "#61D649", textTransform: "none", fontWeight: 700, "&:hover": { bgcolor: "#61D649", color: "#000", borderColor: "#61D649" } }}>
      Browse Products
    </Button>
  </Grid>
  <Grid size={{ xs: 12, md: 6 }}>
    <Box sx={{ borderColor: 'divider', borderRadius: 2, p: 4, textAlign: 'center' }}>
      <img
        src="https://pblol2.blob.core.windows.net/valvenok-images/products/sight-glass/sight-glass-no-bg.png"
        alt="Flanged Sight Glass"
        style={{ width: '50%', height: 'auto' }}
      />
    </Box>
  </Grid>
</Grid>

<Divider sx={{ mb: 10 }} />

{/* Hydraulic Filtration - Image on the Left */}
<Grid container spacing={8} alignItems="center" sx={{ mb: 10 }}>
  {/* Image moved to the first position in the container */}
  <Grid size={{ xs: 12, md: 6 }}>
    <Box sx={{ borderColor: 'divider', borderRadius: 2, p: 4, textAlign: 'center' }}>
      <img
        src="https://pblol2.blob.core.windows.net/valvenok-images/products/filters/DFM_Mega_Flow_Rate_Filter.png"
        alt="Machinery Filters"
        style={{ width: '50%', height: 'auto' }}
      />
    </Box>
  </Grid>

  <Grid size={{ xs: 12, md: 6 }}>
    <Typography variant="overline" sx={{ color: "#61D649", fontWeight: 600, letterSpacing: 2, fontSize: 11 }}>
      Hydraulic Filtration
    </Typography>
    <Typography variant="h3" component="a" href="/filters-sight-glass/filteration"
      sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mt: 1, mb: 3, display: 'block', color: 'inherit', textDecoration: 'none', '&:hover': { color: '#61D649', textDecoration: 'underline' } }}>
      Machinery Filters
    </Typography>
    <Typography sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}>
      Complete Steed Machinery hydraulic filtration range for demanding industrial
      applications. High pressure filters rated to 350 bar, aluminium body filters,
      return line filters, duplex assemblies, suction strainers and clogging indicators —
      all available to order with fast UK dispatch.
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mb: 3 }}>
      {[
        'High Pressure Filters — up to 350 BAR',
        'Aluminium Filters — up to 250 BAR',
        'Return Line Filters',
        'Duplex Filters',
        'Suction Strainers',
        'Clogging Indicators',
      ].map(item => (
        <Typography key={item} sx={{ fontSize: 14, color: "text.secondary", display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box component="span" sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#61D649', flexShrink: 0 }} />
          {item}
        </Typography>
      ))}
    </Box>
    <Button variant="outlined" href="/filters-sight-glass/filteration"
      sx={{ borderColor: "#61D649", color: "#61D649", textTransform: "none", fontWeight: 700, "&:hover": { bgcolor: "#61D649", color: "#000", borderColor: "#61D649" } }}>
      Browse Products
    </Button>
  </Grid>
</Grid>

        <Divider sx={{ mb: 10 }} />

        {/* Applications */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 700, mb: 2 }}>
            Sight Glass & Filtration Applications
          </Typography>
          <Grid container spacing={2}>
            {["Oil & Gas Pipelines", "Chemical & Petrochemical Plants", "Food & Beverage Processing", "Water & Wastewater Treatment", "Pharmaceutical Production", "Steam & Condensate Systems"].map((ind) => (
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
            Protect Your Process Lines Today
          </Typography>
          <Typography sx={{ color: "rgba(2, 2, 2, 0.7)", mb: 4, maxWidth: 560, mx: "auto" }}>
            Need a custom flange rating or specific mesh micron size? Our technical
            engineers can spec the right sight glass or strainer for your line conditions.
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