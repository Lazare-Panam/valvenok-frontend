"use client";

import { Box, Container, Typography, Divider, Button } from "@mui/material";
import Grid from "@mui/material/Grid"; // Using the updated Grid2

export default function PumpsAndSealsPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: "60vh", md: "80vh" },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/pumps-banner.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{
              color: "#61D649",
              letterSpacing: 3,
              fontSize: 11,
              fontWeight: 700,
            }}
          >
            Fluid Handling & Sealing
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: 42, md: 72 },
              fontWeight: 800,
              color: "#fff",
              mt: 1,
              mb: 3,
              lineHeight: 1.1,
              maxWidth: 900,
              textShadow: "0px 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            Industrial Pumps & High-Performance Seals
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 18, md: 20 },
              color: "rgba(255,255,255,0.9)",
              maxWidth: 600,
              mb: 5,
              lineHeight: 1.7,
            }}
          >
            Reliable fluid transfer solutions for the most demanding
            environments. From heavy-duty submersible pumps to
            precision-engineered mechanical seals, Valvenok ensures zero-leakage
            and maximum uptime.
          </Typography>

          <Button
            variant="contained"
            size="large"
            href="mailto:sales@valvenok.com"
            sx={{
              bgcolor: "#61D649",
              color: "#000",
              borderRadius: 1,
              px: 5,
              py: 2,
              fontSize: "1rem",
              fontWeight: 700,
              textTransform: "none",
              "&:hover": { bgcolor: "#fff", color: "#000" },
            }}
          >
            Request Technical Data
          </Button>
        </Container>
      </Box>

      {/* Trust bar */}
      <Box
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
          py: 1.5,
          bgcolor: "#fff",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        <style>
          {`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}
        </style>
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            animation: "marquee 30s linear infinite",
            "&:hover": { animationPlayState: "paused" },
          }}
        >
          {[1, 2].map((iteration) => (
            <Box key={iteration} sx={{ display: "flex", gap: 6, pr: 6 }}>
              {[
                "Pumps, Mechanical Seals & Spares",
                "Certification Varies by Model",
                "High-Chromium Wear Resistance",
                "ISO 3069 / DIN 24960 Standard Seals",
                "UK-Based Technical Support",
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
                    }}
                  />
                  {item}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        {/* Intro Section */}
        <Grid container spacing={8} sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: 28, md: 36 }, fontWeight: 700, mb: 3 }}
            >
              Engineered Fluid Dynamics
            </Typography>
            <Typography
              sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}
            >
              Fluid handling is at the core of industrial efficiency. At
              Valvenok, we bridge the gap between powerful movement and secure
              containment. Our industrial pumps are built for continuous duty in
              abrasive and corrosive media, while our sealing solutions prevent
              costly downtime and environmental risk.
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              We provide a complete ecosystem of{" "}
              <strong>Submersible Pumps</strong> for dewatering and sewage,
              alongside <strong>Mechanical Seals</strong> designed to fit all
              major pump brands.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ bgcolor: "#f7faf6", borderRadius: 2, p: 4 }}>
              <Typography sx={{ fontWeight: 600, mb: 2, fontSize: 15 }}>
                Key Technical Offerings
              </Typography>
              {[
                "Heavy-duty Dewatering Pumps",
                "Sewage & Sludge Submersibles",
                "Component & Cartridge Mechanical Seals",
                "Wave Spring & Parallel Spring Designs",
                "Silicon Carbide & Tungsten Carbide Faces",
                "Chemical Resistant Elastomers (FFKM)",
              ].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontSize: 14,
                    color: "text.secondary",
                    py: 1,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* Submersible Pumps Section */}
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
              Fluid Transfer
            </Typography>
            <Typography
              variant="h1"
              component="a"
              href="/pumps-seals/pumps"
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
              Pumps
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              Valvenok’s submersible range is engineered for the toughest
              drainage, sewage, and industrial wastewater challenges. Featuring
              high-torque motors and wear-resistant impellers, these pumps excel
              in construction dewatering, mining, and municipal applications.
              Our pumps are designed for easy maintenance and high energy
              efficiency.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                borderRadius: 2,
                p: 4,
                textAlign: "center",
                bgcolor: "#fbfbfb",
              }}
            >
              <img
                src="https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/HQIC.webp"
                alt="Industrial Submersible Pump"
                style={{
                  width: "60%",
                  height: "auto",
                  mixBlendMode: "multiply",
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* Mechanical Seals Section */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
            <Box
              sx={{
                borderRadius: 2,
                p: 4,
                textAlign: "center",
                bgcolor: "#fbfbfb",
              }}
            >
              <img
                src="https://pblol2.blob.core.windows.net/valvenok-images/products/seals/Seals.jpg"
                alt="Mechanical Seal Assembly"
                style={{
                  width: "60%",
                  height: "auto",
                  mixBlendMode: "multiply",
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Typography
              variant="overline"
              sx={{
                color: "#61D649",
                fontWeight: 600,
                letterSpacing: 2,
                fontSize: 11,
              }}
            >
              Containment & Safety
            </Typography>
            <Typography
              variant="h1"
              component="a"
              href="/pumps-seals/seals"
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
              Seals
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              Ensure leak-free operation with our precision-engineered
              mechanical seals. We supply a vast range of equivalent seals for
              brands like Burgmann, John Crane, and Flowserve. Whether you need
              a simple single-spring seal or a complex double-cartridge system
              for hazardous chemicals, Valvenok provides the exact material face
              combinations required.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* Industries Served */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h1"
            component="h2"
            sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 700, mb: 4 }}
          >
            Industries & Applications
          </Typography>
          <Grid container spacing={3}>
            {[
              "Mining & Quarrying Dewatering",
              "Municipal Sewage Treatment",
              "Chemical Processing Plants",
              "Food & Dairy Fluid Handling",
              "Pulp & Paper Production",
              "Marine Bilge & Ballast Systems",
            ].map((ind) => (
              <Grid key={ind} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      bgcolor: "#61D649",
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: 15,
                      color: "text.secondary",
                      fontWeight: 500,
                    }}
                  >
                    {ind}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            textAlign: "center",
            py: 8,
            px: 4,
            bgcolor: "#f1f1f1",
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h1"
            component="h2"
            sx={{ fontSize: { xs: 26, md: 36 }, fontWeight: 800, mb: 2 }}
          >
            Fluid Problems? Engineered Solutions.
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              mb: 4,
              maxWidth: 650,
              mx: "auto",
              fontSize: 17,
            }}
          >
            Unsure which seal face is best for your media? Or need a pump curve
            calculation? Our engineers provide technical support and
            specification assistance within 24 hours.
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
              href="mailto:sales@valvenok.com"
              sx={{
                bgcolor: "#61D649",
                color: "#000",
                px: 4,
                py: 1.5,
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              Email Technical Support
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
