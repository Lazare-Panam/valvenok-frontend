"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
} from "@mui/material";

export default function InstrumentationIndexPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* ── HERO ── */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: "60vh", md: "80vh" },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.58)), url("https://pblol2.blob.core.windows.net/panam-images/products/DBB/dbb-cover.jpg")`,
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
            Instrumentation Valves
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
            Isolation &amp; Manifold Valves
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 18, md: 20 },
              color: "rgba(255,255,255,0.9)",
              maxWidth: 620,
              mb: 5,
              lineHeight: 1.7,
            }}
          >
            Double Block & Bleed Valves and Valve Manifolds — SS316
            construction, ANSI 150 to 2500 Class, with full NACE MR-0175 sour
            gas certification.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              href="#range"
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
              Explore Range
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="mailto:sales@valvenok.com"
              sx={{
                borderColor: "rgba(255,255,255,0.5)",
                color: "#fff",
                borderRadius: 1,
                px: 5,
                py: 2,
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "none",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.08)",
                  borderColor: "#fff",
                },
              }}
            >
              Request Quote
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── MARQUEE ── */}
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
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            animation: "marquee 30s linear infinite",
            "&:hover": { animationPlayState: "paused" },
          }}
        >
          {[1, 2].map((i) => (
            <Box key={i} sx={{ display: "flex", gap: 6, pr: 6 }}>
              {[
                "Double Block & Bleed Valves",
                "2-Valve · 3-Valve · 5-Valve Manifolds",
                "Stainless Steel 316 construction",
                "ANSI 150 – 2500 Class · PN6 – PN250",
                "NACE MR-0175 Sour Gas Certified",
                "RF · RTJ · BS Flange Faces",
                "Integral & Three Piece construction",
                "Fire Safe · Gear Operated · Lock Handle options",
              ].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontSize: 19,
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
        {/* ── DBB ── */}
        <Box id="range">
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
                Primary Instrument Isolation
              </Typography>
              <Typography
                variant="h1"
                component="a"
                href="/dbb-manifolds/double-block-and-bleed-valves"
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
                Double Block &amp; Bleed Valves
              </Typography>
              <Typography
                sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}
              >
                Three connection families — Flange-to-Pipe, Flange-to-Flange,
                and Pipe-to-Pipe — covering every instrument isolation
                application. Available in Integral and Three Piece
                configurations across ANSI 150 to 2500 Class with RF, RTJ, and
                BS flange faces.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5,
                  mb: 3,
                }}
              >
                {[
                  "Flange-to-Pipe · Flange-to-Flange · Pipe-to-Pipe",
                  "ANSI 150 – 2500 Class · PN6 – PN250",
                  "RF · RTJ · BS Flange Faces",
                  "Ball-Needle-Ball · Ball-Ball-Ball · Needle · Ball-Needle",
                  "NACE MR-0175 · Fire Safe · Gear Operated",
                ].map((item) => (
                  <Typography
                    key={item}
                    sx={{
                      fontSize: 14,
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
              <Button
                variant="outlined"
                href="/dbb-manifolds/double-block-and-bleed-valves"
                sx={{
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
                Browse DBB Valves
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderRadius: 2, p: 4, textAlign: "center" }}>
                <img
                  src="https://pblol2.blob.core.windows.net/panam-images/products/DBB/DBB_fxp.jpg"
                  alt="Double Block and Bleed Valves"
                  style={{ width: "70%", height: "auto" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* ── MANIFOLDS ── */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ borderRadius: 2, p: 4, textAlign: "center" }}>
              <img
                src="https://pblol2.blob.core.windows.net/panam-images/products/valve-manifolds/5VM/5VM_Cover.jpg"
                alt="Valve Manifolds"
                style={{ width: "70%", height: "auto" }}
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
              Instrument Isolation & Equalising
            </Typography>
            <Typography
              variant="h1"
              component="a"
              href="/dbb-manifolds/manifolds"
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
              Valve Manifolds
            </Typography>
            <Typography
              sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}
            >
              2-Valve, 3-Valve, and 5-Valve configurations for differential
              pressure transmitter mounting, process isolation, and equalising
              applications. Available in Integral and Three Piece configurations
              across ANSI 150 to 2500 Class with RF, RTJ, and BS flange faces.
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 0.5, mb: 3 }}
            >
              {[
                "2-Valve · 3-Valve · 5-Valve configurations",
                "ANSI 150 – 2500 · PN6 – PN250",
                "RF · RTJ · BS Flange Faces",
                "Direct Mount · Remote Mount",
                "NACE MR-0175 · Fire Safe · Gear Operated",
              ].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontSize: 14,
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
            <Button
              variant="outlined"
              href="/dbb-manifolds/manifolds"
              sx={{
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
              Browse Valve Manifolds
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* ── CTA ── */}
        <Box sx={{ textAlign: "center", py: 6 }}>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mb: 2 }}
          >
            Specify your instrumentation valve
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              mb: 4,
              maxWidth: 560,
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            Need a specific pressure class, connection type, or special service
            certification? Our technical team responds to instrumentation
            enquiries within 24 hours.
          </Typography>
          <Button
            variant="contained"
            href="mailto:sales@valvenok.com"
            sx={{
              bgcolor: "#61D649",
              color: "#000",
              px: 4,
              py: 1.5,
              fontWeight: 700,
              textTransform: "none",
              borderRadius: 1,
              "&:hover": { bgcolor: "#4fbd3a" },
            }}
          >
            Contact Technical Team
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
