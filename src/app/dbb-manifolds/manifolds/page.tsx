"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
} from "@mui/material";

export default function ManifoldsIndexPage() {
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.58)), url("https://pblol2.blob.core.windows.net/panam-images/products/valve-manifolds/5VM/5VM_Cover.jpg")`,
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
            Instrument Isolation & Equalising
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
            Valve Manifolds
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
            2-Valve, 3-Valve, and 5-Valve configurations — covering every
            differential pressure and instrument isolation application. SS316
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
                "2-Valve · 3-Valve · 5-Valve Manifolds",
                "Stainless Steel 316 construction",
                "ANSI 150 – 2500 Class · PN6 – PN250",
                "NACE MR-0175 Sour Gas Certified",
                "RF · RTJ · BS Flange Faces",
                "Direct Mount · Remote Mount options",
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
        {/* ── INTRO ── */}
        <Grid container spacing={8} sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: 28, md: 36 }, fontWeight: 700, mb: 3 }}
            >
              One family. Three valve counts.
            </Typography>
            <Typography
              sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}
            >
              PANAM® Valve Manifolds cover the full instrument isolation and
              equalising spectrum — 2-Valve, 3-Valve, and 5-Valve configurations
              engineered for differential pressure transmitter mounting, process
              isolation, and equalising applications. All three families share
              the same SS316 construction with direct mount and remote mount
              options.
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              Every manifold family is available with{" "}
              <strong>NACE MR-0175 sour gas certification</strong>, fire-safe
              construction, lock handle, anti-static, gear-operated, and OS&Y
              bonnet options. Seat and seal materials cover Carbon Filled PTFE,
              PCTFE, Delrin, PEEK, PTFE, Grafoil, and FKM.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ bgcolor: "#f7faf6", borderRadius: 2, p: 4 }}>
              <Typography sx={{ fontWeight: 600, mb: 2, fontSize: 15 }}>
                Technical Specifications
              </Typography>
              {[
                ["Configurations", "2-Valve · 3-Valve · 5-Valve"],
                [
                  "Construction",
                  "Integral (One-Piece) · Three Piece (Serviceable)",
                ],
                [
                  "Pressure Ratings",
                  "ANSI 150 – 2500 · PN6 – PN250 · Threaded",
                ],
                ["Flange Faces", "RF · RTJ · BS"],
                ["Material", "Stainless Steel 316"],
                ["Mount Options", "Direct Mount · Remote Mount"],
                [
                  "Seat Materials",
                  "Carbon Filled PTFE · PCTFE · Delrin · PEEK",
                ],
                ["Seal Materials", "PTFE · Grafoil · PCTFE · FKM"],
                ["Special Service", "NACE MR-0175 · Fire Safe · Gear Operated"],
              ].map(([label, value]) => (
                <Box
                  key={label}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    py: 1.2,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    gap: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "text.primary",
                      flexShrink: 0,
                    }}
                  >
                    {label}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "text.secondary",
                      textAlign: "right",
                    }}
                  >
                    {value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* ── 2-VALVE MANIFOLD ── */}
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
                2-Valve
              </Typography>
              <Typography
                variant="h1"
                component="a"
                href="/dbb-manifolds/manifolds/2VM"
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
                2-Valve Manifold
              </Typography>
              <Typography
                sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}
              >
                2-Valve Manifolds for primary instrument isolation and gauge
                applications. Available in Integral and Three Piece
                configurations across ANSI 150 to 2500 Class with RF, RTJ, and
                BS flange faces. Compact design suited to single-sided pressure
                measurement.
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
                  "Integral & Three Piece body options",
                  "ANSI 150 – 2500 Class · PN6 – PN250",
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
                href="/dbb-manifolds/manifolds/2VM"
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
                Browse 2-Valve Manifold
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderRadius: 2, p: 4, textAlign: "center" }}>
                <img
                  src="https://pblol2.blob.core.windows.net/panam-images/products/valve-manifolds/2VM/2VM_Cover.jpg"
                  alt="2-Valve Manifold"
                  style={{ width: "70%", height: "auto" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* ── 3-VALVE MANIFOLD ── */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ borderRadius: 2, p: 4, textAlign: "center" }}>
              <img
                src="https://pblol2.blob.core.windows.net/panam-images/products/valve-manifolds/3VM/3VM_Cover.jpg"
                alt="3-Valve Manifold"
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
              3-Valve
            </Typography>
            <Typography
              variant="h1"
              component="a"
              href="/dbb-manifolds/manifolds/3VM"
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
              3-Valve Manifold
            </Typography>
            <Typography
              sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}
            >
              3-Valve Manifolds for differential pressure transmitter
              applications with two block valves and one equalising valve.
              Available in Integral and Three Piece configurations. ANSI 150 to
              2500 Class plus full PN series, covering RF, RTJ, and BS flange
              faces.
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 0.5, mb: 3 }}
            >
              {[
                "Integral & Three Piece body options",
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
              href="/dbb-manifolds/manifolds/3VM"
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
              Browse 3-Valve Manifold
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* ── 5-VALVE MANIFOLD ── */}
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
              5-Valve
            </Typography>
            <Typography
              variant="h1"
              component="a"
              href="/dbb-manifolds/manifolds/5VM"
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
              5-Valve Manifold
            </Typography>
            <Typography
              sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}
            >
              5-Valve Manifolds for differential pressure applications requiring
              two block valves, one equalising valve, and two bleed/vent valves.
              The most complete manifold configuration for DP transmitter
              isolation, equalising, and calibration without process shutdown.
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 0.5, mb: 3 }}
            >
              {[
                "Two block + one equalising + two bleed valves",
                "ANSI 150 – 2500 Class · PN6 – PN250",
                "RF · RTJ · BS Flange Faces",
                "Direct Mount · Remote Mount",
                "NACE MR-0175 · Fire Safe options",
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
              href="/dbb-manifolds/manifolds/5VM"
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
              Browse 5-Valve Manifold
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ borderRadius: 2, p: 4, textAlign: "center" }}>
              <img
                src="https://pblol2.blob.core.windows.net/panam-images/products/valve-manifolds/5VM/5VM_Cover.jpg"
                alt="5-Valve Manifold"
                style={{ width: "70%", height: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* ── APPLICATIONS ── */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 700, mb: 2 }}
          >
            Valve Manifold Applications
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              lineHeight: 1.8,
              mb: 5,
              maxWidth: 620,
            }}
          >
            PANAM Valve Manifolds are specified across the full range of process
            and instrumentation industries wherever safe, reliable isolation,
            equalising, and bleed capability is required.
          </Typography>
          <Grid container spacing={2}>
            {[
              "Oil & Gas Production & Processing",
              "Chemical & Petrochemical Plants",
              "Offshore & Subsea Installations",
              "Power Generation",
              "DP Transmitter Mounting",
              "LNG & Gas Distribution",
              "Refinery Process Lines",
              "Pipeline Instrumentation",
              "Water & Wastewater Treatment",
              "Pharmaceutical Process Lines",
              "Heat Exchangers & Reactors",
              "Hydraulic & Pneumatic Systems",
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

        {/* ── CTA ── */}
        <Box sx={{ textAlign: "center", py: 6 }}>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mb: 2 }}
          >
            Specify your valve manifold
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
            Need a specific pressure class, valve count, or special service
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
