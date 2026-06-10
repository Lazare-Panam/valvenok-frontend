"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  Stack,
  alpha,
} from "@mui/material";
import Grid from "@mui/material/Grid";

const BRANDS = [
  {
    name: "Valve Systems International",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/vsi-logo.png",
    desc: "Comprehensive valve supply and engineering solutions for process industries.",
  },
  {
    name: "Mars Valves",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/mars.png",
    desc: "Industrial valve solutions for a wide range of flow control applications.",
  },
  {
    name: "PANAM Valves",
    logo: "https://pblol2.blob.core.windows.net/panam-images/panam-resize_smallest.jpg",
    desc: "Instrumentation valves and fittings for global process industries.",
  },
  {
    name: "Cameron",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/cameron-logo.png",
    desc: "Flow control, pressure control, and aftermarket services for oil and gas.",
  },
  {
    name: "Baker Hughes",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/baker-hughes-logo.png",
    desc: "Advanced energy technology solutions and industrial equipment.",
  },
  {
    name: "Taylor Valve Technology",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/taylor-valve-logo.png",
    desc: "Precision safety relief valves and choke valves for oil and gas applications.",
  },
  {
    name: "Leser",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/LESER-logo.png",
    desc: "Specialist safety valves for all industrial applications and chemicals.",
  },
  {
    name: "Mercer Valves",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/mercer-logo.jpg",
    desc: "High-quality pressure relief valves with patented 'Auto-Seat' technology.",
  },
  {
    name: "Aquatrol",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/aquatrol-logo.png",
    desc: "Industrial safety and relief valves for air, liquid, and steam systems.",
  },
  {
    name: "Fisher",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/fisher-logo.jpg",
    desc: "Industry-leading control valves, regulators, and performance services.",
  },
  {
    name: "Batu Valves",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/batu-logo.png",
    desc: "Specialized flow control and boiler valve solutions.",
  },
  {
    name: "Spac Pneumatic",
    logo: "https://pblol2.blob.core.windows.net/spac-images/spac-logo.webp",
    desc: "Pneumatic components and industrial automation systems.",
  },
  {
    name: "Tormac",
    logo: "https://tormacpumps.com/wp-content/uploads/2025/06/tormac_logo.svg",
    desc: "High-efficiency submersible and peripheral pumping systems.",
  },
  {
    name: "Siemens",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/siemens-logo.png",
    desc: "Power generation and industrial control technology.",
  },
  {
    name: "Endress Hauser",
    logo: "https://www.uk.endress.com/images/logo/EH_Logo-d9672165.svg",
    desc: "Laboratory and process automation instrumentation.",
  },
  {
    name: "Steed Hydraulic Technology",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/steed-logo.png",
    desc: "Advanced filtration and fluid power solutions for heavy industry.",
  },
  {
    name: "FHT Valves",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/fht-valves-logo.png",
    desc: "Industrial ball valves and flow control equipment for process piping.",
  },
  {
    name: "Hydroseal",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/hydroseal-logo.png",
    desc: "Reliable safety and relief valves for plumbing and industrial systems.",
  },
  {
    name: "Crosby",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/crosby_logo.png",
    desc: "Direct-spring and pilot-operated pressure relief valves.",
  },
  {
    name: "Knuckle Valves",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/knuckle-valve-logo.png",
    desc: "Specialized industrial valves and customized flow solutions.",
  },
  {
    name: "Bettis",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/bettis-logo.png",
    desc: "Leading valve actuators and automation control technologies.",
  },
  {
    name: "Anderson Greenwood",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/anderson-greewood-logo.jpg",
    desc: "Precision isolation, relief valves, and instrumentation manifolds.",
  },
];

export default function BrandsPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "70vh" }}>
      {/* --- HERO SECTION --- */}
      <Box sx={{ bgcolor: "primary.main", color: "white", pt: 15, pb: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontWeight: 800,
              letterSpacing: "0.4em",
              opacity: 0.8,
            }}
          >
            Our Ecosystem
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontSize: { xs: "3.5rem", md: "5.5rem" },
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 0.9,
              mt: 1,
              mb: 4,
            }}
          >
            Partners
          </Typography>

          <Box sx={{ maxWidth: "700px" }}>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", opacity: 0.9, lineHeight: 1.7, mb: 3 }}
            >
              Valvenok Ltd partners with a carefully selected range of leading global
              manufacturers to supply high-quality valves, actuators, and fluid control
              components to customers across the UK and beyond. Our brands page
              showcases trusted engineering names known for reliability and innovation.
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", opacity: 0.9, lineHeight: 1.7, mb: 3 }}
            >
              By collaborating with recognized industry brands, we offer a comprehensive
              product range—from precision-engineered ball valves to advanced actuation
              technologies. We ensure every product meets strict quality standards for
              demanding environments like oil & gas and process engineering.
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontSize: "1rem", fontWeight: 600, opacity: 0.8, fontStyle: "italic" }}
            >
              Explore our brand partners below or contact our team for tailored advice.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* --- BRANDS GRID --- */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Grid container spacing={3}>
          {BRANDS.map((brand) => (
            <Grid key={brand.name} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 0,
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "all 0.3s ease",
                  cursor: "default",
                  "&:hover": {
                    borderColor: "primary.main",
                    transform: "translateY(-5px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                  },
                }}
              >
                <Box sx={{ height: "100%", p: 4 }}>
                  <Stack spacing={3} alignItems="center" textAlign="center">
                    <Box
                      sx={{
                        height: 80,
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0.8,
                        transition: "all 0.3s ease",
                        ".MuiCard-root:hover &": {
                          opacity: 1,
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={brand.logo}
                        alt={brand.name}
                        sx={{
                          maxHeight: "100%",
                          maxWidth: "180px",
                          objectFit: "contain",
                        }}
                      />
                    </Box>

                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: '"Barlow Condensed"',
                          fontWeight: 800,
                          textTransform: "uppercase",
                          mb: 1,
                        }}
                      >
                        {brand.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", minHeight: "3em", px: 2 }}
                      >
                        {brand.desc}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* --- CONTACT CTA --- */}
        <Box
          sx={{
            mt: 15,
            p: 6,
            bgcolor: alpha("#61D649", 0.05),
            border: "1px dashed",
            borderColor: "primary.main",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 1 }}
          >
            LOOKING FOR A SPECIFIC MANUFACTURER?
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 3 }}>
            We have access to an extensive Global Supply Chain beyond what is listed here.
          </Typography>
          <Typography
            component="a"
            href="/contact"
            sx={{
              color: "primary.main",
              fontWeight: 900,
              textDecoration: "none",
              borderBottom: "2px solid",
            }}
          >
            INQUIRE ABOUT BULK SUPPLY
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}