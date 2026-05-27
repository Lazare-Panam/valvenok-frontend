"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
} from "@mui/material";

export default function QuickCouplingIndexPage() {
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.58)), url("https://pblol2.blob.core.windows.net/panam-images/qc-hero.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: "#61D649", letterSpacing: 3, fontSize: 11, fontWeight: 700 }}>
            Hydraulic Connections
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: 42, md: 72 }, fontWeight: 800, color: "#fff", mt: 1, mb: 3, lineHeight: 1.1, maxWidth: 900, textShadow: "0px 2px 10px rgba(0,0,0,0.3)" }}
          >
            Quick Couplings &amp; Hoses
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 18, md: 20 }, color: "rgba(255,255,255,0.9)", maxWidth: 620, mb: 5, lineHeight: 1.7 }}
          >
            Six coupling series — ISO-A, ISO 16028, ISO 7241A, ISO 7241B, ISO 5675, and Screw Type — covering the full range of hydraulic connection applications. Carbon Steel construction with BSPP and NPT threads from 1/4" to 1".
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              href="#range"
              sx={{ bgcolor: "#61D649", color: "#000", borderRadius: 1, px: 5, py: 2, fontSize: "1rem", fontWeight: 700, textTransform: "none", "&:hover": { bgcolor: "#fff", color: "#000" } }}
            >
              Explore Range
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="mailto:sales@valvenok.com"
              sx={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff", borderRadius: 1, px: 5, py: 2, fontSize: "1rem", fontWeight: 700, textTransform: "none", "&:hover": { bgcolor: "rgba(255,255,255,0.08)", borderColor: "#fff" } }}
            >
              Request Quote
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── MARQUEE ── */}
      <Box sx={{ borderBottom: "1px solid", borderColor: "divider", py: 1.5, bgcolor: "#fff", whiteSpace: "nowrap", overflow: "hidden" }}>
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        <Box sx={{ display: "flex", width: "max-content", animation: "marquee 30s linear infinite", "&:hover": { animationPlayState: "paused" } }}>
          {[1, 2].map(i => (
            <Box key={i} sx={{ display: "flex", gap: 6, pr: 6 }}>
              {[
                "ISO-A · ISO 16028 · ISO 7241A · ISO 7241B · ISO 5675 · Screw Type",
                "Carbon Steel construction",
                "BSPP & NPT thread standards",
                '1/4" to 1" connection sizes',
                "Socket · Plug · Set configurations",
                "Push-to-connect with automatic shutoff",
                "Flat-face design on ISO 16028",
                "100+ configurations available",
              ].map(item => (
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

        {/* ── INTRO ── */}
        <Grid container spacing={8} sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 36 }, fontWeight: 700, mb: 3 }}>
              One source.
              <br />
              Every coupling you need.
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}>
              PANAM® Quick Couplings cover the full hydraulic connection spectrum — ISO-A, ISO 16028, ISO 7241A, ISO 7241B, ISO 5675, and Screw Type series engineered for industrial, mobile, and agricultural hydraulic systems. All six series are available with BSPP and NPT threads across the full 1/4" to 1" size range.
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              Socket and Plug configurations available individually on <strong>ISO-A, ISO 16028, and Screw Type</strong>. ISO 7241A, ISO 7241B, and ISO 5675 are supplied as matched Sets for guaranteed interchangeability and leak-free performance.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ bgcolor: "#f7faf6", borderRadius: 2, p: 4 }}>
              <Typography sx={{ fontWeight: 600, mb: 2, fontSize: 15 }}>Technical Specifications</Typography>
              {[
                ["Series", "ISO-A · ISO 16028 · ISO 7241A · ISO 7241B · ISO 5675 · Screw Type"],
                ["Body Material", "Carbon Steel"],
                ["Thread Standards", "BSPP · NPT"],
                ["Connection Sizes", '1/4" · 3/8" · 1/2" · 3/4" · 1"'],
                ["Configurations", "Socket · Plug · Set"],
                ["Total Configurations", "100+"],
              ].map(([label, value]) => (
                <Box key={label} sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", py: 1.2, borderBottom: "1px solid", borderColor: "divider", gap: 2 }}>
                  <Typography sx={{ fontSize: 13, fontWeight: 600, color: "text.primary", flexShrink: 0 }}>{label}</Typography>
                  <Typography sx={{ fontSize: 13, color: "text.secondary", textAlign: "right" }}>{value}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* ── PRODUCT SECTIONS ── */}
        <Box id="range">

          {/* ISO-A */}
          <Grid container spacing={8} alignItems="center" sx={{ mb: 10 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: "#61D649", fontWeight: 600, letterSpacing: 2, fontSize: 11 }}>
                Socket &amp; Plug
              </Typography>
              <Typography variant="h3" component="a" href="/quick-coupling-and-hoses/quick-coupling"
                sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mt: 1, mb: 3, display: "block", color: "inherit", textDecoration: "none", "&:hover": { color: "#61D649", textDecoration: "underline" } }}>
                Quick Couplings
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}>
                Series hydraulic quick couplings in Carbon Steel. Available in Socket and Plug configurations across BSPP and NPT thread standards from 1/4" to 1". Designed for standard hydraulic applications requiring reliable push-to-connect coupling and automatic shutoff.
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, mb: 3 }}>
                {['Carbon Steel construction', 'Socket & Plug configurations', '1/4" – 1" · BSPP & NPT', 'Push-to-connect with automatic shutoff'].map(item => (
                  <Typography key={item} sx={{ fontSize: 14, color: "text.secondary", display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Box component="span" sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#61D649", flexShrink: 0 }} />
                    {item}
                  </Typography>
                ))}
              </Box>
              <Button variant="outlined" href="/quick-coupling-and-hoses/quick-coupling"
                sx={{ borderColor: "#61D649", color: "#61D649", textTransform: "none", fontWeight: 700, "&:hover": { bgcolor: "#61D649", color: "#000", borderColor: "#61D649" } }}>
                Browse Quick Couplings.
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderRadius: 2, p: 4, textAlign: "center" }}>
                <img src="https://pblol2.blob.core.windows.net/panam-images/products/quick-coupling/iso-a" alt="ISO-A Quick Couplings" style={{ width: "70%", height: "auto" }} />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* ── APPLICATIONS ── */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 700, mb: 2 }}>
            Quick Coupling Applications
          </Typography>
          <Typography sx={{ color: "text.secondary", lineHeight: 1.8, mb: 5, maxWidth: 620 }}>
            PANAM Quick Couplings are specified across the full range of hydraulic industries wherever fast, reliable, leak-free connections are required.
          </Typography>
          <Grid container spacing={2}>
            {[
              "Industrial Hydraulic Systems",
              "Mobile Hydraulics & Construction Equipment",
              "Agricultural Tractors & Implements",
              "Offshore & Marine Hydraulics",
              "Oil & Gas Field Equipment",
              "Heavy Lifting & Crane Systems",
              "Forestry & Mining Equipment",
              "Power Units & HPUs",
              "Test Rigs & Hydraulic Benches",
              "Waste Management Equipment",
              "Material Handling Systems",
              "Recycling & Processing Machinery",
            ].map(ind => (
              <Grid key={ind} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#61D649", flexShrink: 0 }} />
                  <Typography sx={{ fontSize: 14, color: "text.secondary" }}>{ind}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* ── CTA ── */}
        <Box sx={{ textAlign: "center", py: 6 }}>
          <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mb: 2 }}>
            Specify your quick coupling
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 4, maxWidth: 560, mx: "auto", lineHeight: 1.8 }}>
            Need a specific ISO series, thread standard, or connection size? Our technical team responds to hydraulics enquiries within 24 hours.
          </Typography>
          <Button
            variant="contained"
            href="mailto:sales@valvenok.com"
            sx={{ bgcolor: "#61D649", color: "#000", px: 4, py: 1.5, fontWeight: 700, textTransform: "none", borderRadius: 1, "&:hover": { bgcolor: "#4fbd3a" } }}
          >
            Contact Technical Team
          </Button>
        </Box>

      </Container>
    </Box>
  );
}