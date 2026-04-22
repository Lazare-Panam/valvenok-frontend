"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
} from "@mui/material";

export default function HighPressureValvesPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Hero */}
     <Box 
  sx={{ 
    position: 'relative',
    width: '100%',
    minHeight: { xs: '60vh', md: '80vh' }, // Makes it a big "hero" height
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    // Background Logic
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://res.cloudinary.com/dm9rmmemx/image/upload/v1776867715/shail-sharma-Dh3EHnVJuR4-unsplash_u780ko.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    py: { xs: 8, md: 12 }
  }}
>
  <Container maxWidth="lg">
    <Typography
      variant="overline"
      sx={{ 
        color: "#61D649", // Changed to your brand green for better pop against dark images
        letterSpacing: 3, 
        fontSize: 11,
        fontWeight: 700 
      }}
    >
      Valves & Fittings
    </Typography>
    
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: 42, md: 72 }, // Increased size for a "huge" banner feel
        fontWeight: 800,
        color: "#fff",
        mt: 1,
        mb: 3,
        lineHeight: 1.1,
        maxWidth: 800,
        textShadow: '0px 2px 10px rgba(0,0,0,0.3)' // Extra legibility
      }}
    >
      Instrumentation Valves & Fittings
    </Typography>
    
    <Typography
      sx={{
        fontSize: { xs: 18, md: 20 },
        color: "rgba(255,255,255,0.9)", // Changed to white-ish for dark background
        maxWidth: 600,
        mb: 5,
        lineHeight: 1.7,
      }}
    >
      Engineering-grade valves and fittings for demanding hydraulic,
      pneumatic and instrumentation systems. Rated to 6,000 PSI across
      core ranges, with selected series reaching 10,000 PSI.
    </Typography>
    
    <Button
      variant="contained"
      size="large"
      href="mailto:sales@valvenok.com"
      sx={{
        bgcolor: "#61D649", // Using your bright green for the CTA
        color: "#000",
        borderRadius: 1,
        px: 5,
        py: 2,
        fontSize: '1rem',
        fontWeight: 700,
        textTransform: 'none',
        "&:hover": { bgcolor: "#fff", color: "#000" },
      }}
    >
      Request a Quote
    </Button>
  </Container>
</Box>

      {/* Trust bar */}
 <Box
  sx={{
    borderBottom: "1px solid",
    borderColor: "divider",
    py: 1.5, // Tightened up for a "ticker" feel
    bgcolor: "#fff",
    overflow: "hidden", // Keeps the scroll inside the bar
    whiteSpace: "nowrap",
    position: "relative",
  }}
>
  <style>
    {`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}
  </style>

  <Box
    sx={{
      display: "flex",
      width: "max-content",
      animation: "marquee 30s linear infinite", // Adjust '30s' to change speed
      "&:hover": { animationPlayState: "paused" }, // Pauses on hover so people can read
    }}
  >
    {/* We duplicate the list once to create a seamless loop */}
    {[1, 2].map((iteration) => (
      <Box 
        key={iteration} 
        sx={{ display: "flex", gap: 6, pr: 6 }} // gap between sets of items
      >
        {[
          "JOSCAR registered",
          "48-hour dispatch on UK stocked items",
          "Up to 10,000 PSI on selected series",
          "SS316 standard · Duplex · Hastelloy available",
        ].map((item) => (
          <Typography
            key={item}
            sx={{
              fontSize: 13,
              fontWeight: 500,
              color: "text.secondary",
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Box
              component="span"
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                bgcolor: "#61D649",
                flexShrink: 0,
              }}
            />
            {item}
          </Typography>
        ))}
      </Box>
    ))}
  </Box>
</Box>

      {/* Main content */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        {/* Intro */}
        <Grid container spacing={8} sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: 28, md: 36 }, fontWeight: 700, mb: 3 }}
            >
              High pressure capability
            </Typography>
            <Typography
              sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}
            >
              Valvenok focuses on engineering-grade valves and fittings for
              high-pressure and critical applications. Across our core ranges,
              products are designed for sustained service at up to 6,000 PSI,
              with selected high-bore and needle valve series available up to
              10,000 PSI.
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              Product families are predominantly CNC machined from 316 stainless
              steel, with carefully defined pressure and temperature ratings.
              NACE-compliant options and full 3.1 material certificates are
              available on specific ranges.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{ bgcolor: "#f7faf6", borderRadius: 2, p: 4, height: "100%" }}
            >
              <Typography sx={{ fontWeight: 600, mb: 2, fontSize: 15 }}>
                Available solutions
              </Typography>
              {[
                "High-pressure ball valves — 2-way and 3-way",
                "Needle valves including block & bleed",
                "SS316 fittings for corrosive and hydrogen service",
                "Relief valves for overpressure protection",
                "Hydrogen-ready valves and check valves",
                "Gauges, actuators and complete assemblies",
              ].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontSize: 14,
                    color: "text.secondary",
                    py: 1,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    lineHeight: 1.6,
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* Ball valves */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 10 }}>
          {/* Text Column */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="overline"
              sx={{
                color: "#61D649",
                fontWeight: 600,
                letterSpacing: 2,
                fontSize: 11,
                display: "block",
              }}
            >
              BALL Valves
            </Typography>

            <Typography
  variant="h3"
  component="a" // Makes the underlying HTML an <a> tag
  href="/categories/ball-valves" // Replace with your destination
  sx={{
    fontSize: { xs: 24, md: 32 },
    fontWeight: 700,
    mt: 1,
    mb: 3,
    display: 'block', // Ensures margins work correctly on an anchor tag
    color: 'inherit', // Keeps the text color from your theme
    textDecoration: 'none', // Removes the default underline
    '&:hover': {
      color: '#61D649', // Optional: changes to your brand green on hover
      textDecoration: 'underline',
    },
  }}
>
  High-pressure ball valves
</Typography>

            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.8,
                fontSize: "0.95rem",
              }}
            >
              Valvenok's ball valve series provide compact, quarter-turn isolation
              for high-pressure duties. Standard-bore and full-bore variants are
              available in 2-way and 3-way configurations, with multiple end
              connections including compression OD, NPT, and BSPP/BSPT. Typical
              ratings reach 6,000 PSI, with selected high-bore models rated to
              10,000 PSI. Suitable for fast on/off isolation and actuator-ready
              installations requiring bubble-tight shut-off.
            </Typography>
          </Grid>

          {/* Image Column */}
        
          <Grid size={{ xs: 12, md: 6 }}>
    <Box 
      sx={{ 
        width: '100%', 
        borderRadius: 2, 
        overflow: 'hidden', 
        border: '1px solid', 
        borderColor: 'divider',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#fff',
        p: 4 // More padding makes the image appear smaller and more "premium"
      }}
    >
      <img 
        src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1772472898/BALL-VALVES_kyxk6n.jpg" 
        alt="High-pressure fittings" 
        style={{ 
          width: '70%', 
          height: 'auto', 
          maxWidth: '400px', // Slightly smaller as requested
          display: 'block'
        }} 
      />
    </Box>
  </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* Needle valves */}
       <Grid container spacing={8} alignItems="center" sx={{ mb: 10 }}>
  {/* Image Column */}
  <Grid size={{ xs: 12, md: 6 }}>
    <Box 
      sx={{ 
        width: '100%', 
        borderRadius: 2, 
        overflow: 'hidden', 
        border: '1px solid', 
        borderColor: 'divider',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#fff',
        p: 2 
      }}
    >
      <img 
        src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1768296756/11111_e7ywry.webp" // Paste your Cloudinary link here
        alt="Needle valves & block and bleed" 
        style={{ 
          width: '50%', 
          height: '50%', 
          maxWidth: '500px', 
          display: 'block'
        }} 
      />
    </Box>
  </Grid>

  {/* Text Column */}
  <Grid size={{ xs: 12, md: 6 }}>
    <Typography 
      variant="overline" 
      sx={{ color: '#61D649', fontWeight: 600, letterSpacing: 2, fontSize: 11, display: 'block' }}
    >
      HB / IB / SB Series
    </Typography>
    
    <Typography
  variant="h3"
  component="a" // Makes it a clickable link
  href="/categories/needle-valves" // Replace with your target URL
  sx={{
    fontSize: { xs: 24, md: 32 },
    fontWeight: 700,
    mt: 1,
    mb: 3,
    display: 'block', // Ensures the link occupies the block space for correct margins
    color: 'inherit', // Keeps your current text color
    textDecoration: 'none', // Removes the default underline
    transition: '0.2s', // Smooth color change on hover
    '&:hover': {
      color: '#61D649', // Changes to your brand green when hovered
      textDecoration: 'underline',
    },
  }}
>
  Needle valves & block and bleed
</Typography>
    
    <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '0.95rem' }}>
      For fine metering and positive isolation in instrumentation
      circuits, PANAM needle valves are available in 316 stainless steel
      across instrumentation sizes from 3mm to 18mm tube OD, plus
      fractional equivalents. Block and bleed configurations support
      safe gauge isolation, venting and maintenance on high-pressure
      lines.
    </Typography>
  </Grid>
</Grid>

        <Divider sx={{ mb: 10 }} />

        {/* Fittings */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 10 }}>
  {/* Text Column */}
  <Grid size={{ xs: 12, md: 6 }}>
    <Typography 
      variant="overline" 
      sx={{ color: '#61D649', fontWeight: 600, letterSpacing: 2, fontSize: 11, display: 'block' }}
    >
      SS316 Instrumentation
    </Typography>
    
    <Typography
  variant="h3"
  component="a" // Makes it a clickable link
  href="/categories/instrumentation-fittings" // Replace with your target URL
  sx={{
    fontSize: { xs: 24, md: 32 },
    fontWeight: 700,
    mt: 1,
    mb: 3,
    display: 'block', // Ensures the link occupies the block space for correct margins
    color: 'inherit', // Keeps your current text color
    textDecoration: 'none', // Removes the default underline
    transition: '0.2s', // Smooth color change on hover
    '&:hover': {
      color: '#61D649', // Changes to your brand green when hovered
      textDecoration: 'underline',
    },
  }}
>
  Instrumentation Fittings
</Typography>
    
    <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '0.95rem' }}>
      High pressure valves are only as reliable as the connections
      around them. Valvenok supplies extensive SS316 instrumentation
      fittings compatible with mainstream manufacturer dimensions, in
      metric and imperial tube OD sizes. Thread forms include NPT, BSPP
      (ISO Parallel), BSPT (ISO Tapered) and other common standards.
      Typical ratings reach 6,000 PSI with 10,000 PSI fittings available
      on selected SKUs.
    </Typography>
  </Grid>

  {/* Image Column */}
  <Grid size={{ xs: 12, md: 6 }}>
    <Box 
      sx={{ 
        width: '100%', 
        borderRadius: 2, 
        overflow: 'hidden', 
        border: '1px solid', 
        borderColor: 'divider',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#fff',
        p: 4 // More padding makes the image appear smaller and more "premium"
      }}
    >
      <img 
        src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1771948480/reducing-hex-couplings-npt_i2twbq.png" 
        alt="High-pressure fittings" 
        style={{ 
          width: '50%', 
          height: 'auto', 
          maxWidth: '400px', // Slightly smaller as requested
          display: 'block'
        }} 
      />
    </Box>
  </Grid>
</Grid>

        <Divider sx={{ mb: 10 }} />

        {/* Industries */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 700, mb: 2 }}
          >
            Industries served
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              lineHeight: 1.8,
              mb: 5,
              maxWidth: 640,
            }}
          >
            High pressure valves and fittings from Valvenok are specified across
            a wide range of critical applications, from instrumentation panels
            and test rigs to hydrogen lines and high-integrity gas service.
          </Typography>
          <Grid container spacing={2}>
            {[
              "Oil & Gas and Petrochemical",
              "Hydrogen Production, Storage & Distribution",
              "Aerospace, Defence and Marine",
              "Power Generation & Water Treatment",
              "Pharmaceutical & Life Sciences",
              "General Manufacturing, OEM and MRO",
            ].map((ind) => (
              <Grid key={ind} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: "#61D649",
                      flexShrink: 0,
                    }}
                  />
                  <Typography sx={{ fontSize: 14, color: "text.secondary" }}>
                    {ind}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* CTA */}
        <Box sx={{ textAlign: "center", py: 6 }}>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mb: 2 }}
          >
            Enquire about instrumentation valves and fittings
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              lineHeight: 1.8,
              mb: 4,
              maxWidth: 560,
              mx: "auto",
            }}
          >
            Send your specification, P&ID or part list to our technical team. We
            target a response to industrial enquiries within 24 hours.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              href="mailto:sales@valvenok.com"
              sx={{
                bgcolor: "#61D649",
                color: "#fff",
                borderRadius: 1,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                "&:hover": { bgcolor: "#4a9a3a" },
              }}
            >
              Email sales@valvenok.com
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "divider",
                color: "text.primary",
                borderRadius: 1,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                "&:hover": { bgcolor: "#f7faf6" },
              }}
            >
              Quick Order
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
