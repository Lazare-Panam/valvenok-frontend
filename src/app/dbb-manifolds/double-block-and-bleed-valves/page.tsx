"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import { GroupSiteLinks, groupSitesIn } from "@/src/app/Common/GroupVisitLinks";

export default function DBBIndexPage() {
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
            Primary Instrument Isolation
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
            Double Block &amp; Bleed Valves
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
            Three connection families — Flange-to-Pipe, Flange-to-Flange, and
            Pipe-to-Pipe — covering every instrument isolation application.
            SS316 construction, ANSI 150 to 2500 Class, with NACE MR-0175 sour
            gas options available.
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
                "Flange-to-Pipe · Flange-to-Flange · Pipe-to-Pipe",
                "Stainless Steel 316 construction",
                "ANSI 150 – 2500 Class · PN6 – PN250",
                "NACE MR-0175 Sour Gas Option",
                "RF · RTJ · BS Flange Faces",
                "Ball · Needle · Combination internals",
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
              One body. Three connection types.
            </Typography>
            <Typography
              sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}
            >
              PANAM® Double Block & Bleed valves cover the full instrument
              isolation spectrum — Flange-to-Pipe, Flange-to-Flange, and
              Pipe-to-Pipe configurations engineered for primary isolation,
              pressure transmitter mounting, and process bleed applications. All
              three families share the same SS316 construction with ball,
              needle, and combination internal configurations.
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              Options available include{" "}
              <strong>NACE MR-0175 sour gas options</strong>, fire-safe
              construction, lock handle, anti-static, gear-operated, and OS&Y
              bonnet options. Seat and seal materials cover Carbon Filled PTFE,
              PCTFE, Delrin, PEEK, PTFE, Grafoil, and FKM.
            </Typography>
            <GroupSiteLinks variant="inline" sites={groupSitesIn("PANAM Double Block & Bleed valves")} />
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ bgcolor: "#f7faf6", borderRadius: 2, p: 4 }}>
              <Typography sx={{ fontWeight: 600, mb: 2, fontSize: 15 }}>
                Technical Specifications
              </Typography>
              {[
                [
                  "Connection Types",
                  "Flange-to-Pipe · Flange-to-Flange · Pipe-to-Pipe",
                ],
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
                [
                  "Configurations",
                  "Ball-Needle-Ball · Ball-Ball-Ball · Needle · Ball-Needle",
                ],
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

        {/* ── FLANGE TO PIPE ── */}
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
                Connection Types 1 &amp; 3
              </Typography>
              <Typography
                variant="h1"
                component="a"
                href="/dbb-manifolds/double-block-and-bleed-valves/flange-to-pipe"
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
                DBB — Flange to Pipe
              </Typography>
              <Typography
                sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}
              >
                Double Block & Bleed valves with Flange-to-Pipe construction for
                primary instrument isolation, pressure transmitter mounting, and
                process bleed applications. Available in Integral and Three
                Piece configurations across ANSI 150 to 2500 Class with RF, RTJ,
                and BS flange faces.
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
                href="/dbb-manifolds/double-block-and-bleed-valves/flange-to-pipe"
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
                Browse Flange to Pipe
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderRadius: 2, p: 4, textAlign: "center" }}>
                <img
                  src="https://pblol2.blob.core.windows.net/panam-images/products/DBB/DBB_fxp.jpg"
                  alt="DBB Flange to Pipe"
                  style={{ width: "70%", height: "auto" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* ── FLANGE TO FLANGE ── */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ borderRadius: 2, p: 4, textAlign: "center" }}>
              <img
                src="https://pblol2.blob.core.windows.net/panam-images/products/DBB/DBB_fxf.jpg"
                alt="DBB Flange to Flange"
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
              Connection Types 2 &amp; 4
            </Typography>
            <Typography
              variant="h1"
              component="a"
              href="/dbb-manifolds/double-block-and-bleed-valves/flange-to-flange"
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
              DBB — Flange to Flange
            </Typography>
            <Typography
              sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}
            >
              Double Block & Bleed valves with Flange-to-Flange construction for
              inline isolation and DP transmitter applications. Available in
              Integral and Three Piece configurations. ANSI 150 to 2500 Class
              plus full PN series, covering RF, RTJ, and BS flange faces.
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 0.5, mb: 3 }}
            >
              {[
                "Integral & Three Piece body options",
                "ANSI 150 – 2500 · PN6 – PN250",
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
              href="/dbb-manifolds/double-block-and-bleed-valves/flange-to-flange"
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
              Browse Flange to Flange
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* ── PIPE TO PIPE ── */}
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
              Connection Type 6
            </Typography>
            <Typography
              variant="h1"
              component="a"
              href="/dbb-manifolds/double-block-and-bleed-valves/pipe-to-pipe"
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
              DBB — Pipe to Pipe
            </Typography>
            <Typography
              sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}
            >
              Double Block & Bleed valves with threaded Pipe-to-Pipe
              construction for compact instrument isolation and process bleed.
              Available in NPT, BSPP, and BSPT thread forms across a full range
              of bore sizes. The most compact DBB configuration for
              space-critical installations.
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 0.5, mb: 3 }}
            >
              {[
                "Threaded body — NPT · BSPP · BSPT",
                "Compact design for space-critical installations",
                "Ball-Needle-Ball · Ball-Ball-Ball · Needle · Ball-Needle",
                '1/4" to 1" thread sizes',
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
              href="/dbb-manifolds/double-block-and-bleed-valves/pipe-to-pipe"
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
              Browse Pipe to Pipe
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ borderRadius: 2, p: 4, textAlign: "center" }}>
              <img
                src="https://pblol2.blob.core.windows.net/panam-images/products/DBB/DBB-pxp.jpg"
                alt="DBB Pipe to Pipe"
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
            component="h2"
            sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 700, mb: 2 }}
          >
            DBB Valve Applications
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              lineHeight: 1.8,
              mb: 5,
              maxWidth: 620,
            }}
          >
            PANAM DBB valves are specified across the full range of process and
            instrumentation industries wherever safe, reliable isolation and
            bleed capability is required.
          </Typography>
          <Grid container spacing={2}>
            {[
              "Oil & Gas Production & Processing",
              "Chemical & Petrochemical Plants",
              "Offshore & Subsea Installations",
              "Power Generation",
              "Pressure Transmitter Mounting",
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
            component="h2"
            sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mb: 2 }}
          >
            Specify your DBB valve
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
