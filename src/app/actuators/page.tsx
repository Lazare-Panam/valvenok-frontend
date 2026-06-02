"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
} from "@mui/material";

const SERIES = [
  {
    category: "Pneumatic Actuators",
    title: "Pneumatic Rotary & Linear Actuators",
    href: "/pneumatic/actuators",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/hd.webp",
    alt: "Pneumatic Actuators",
    description:
      "A full range of pneumatic rotary and linear actuators engineered for reliable quarter-turn and linear valve control. Rack-and-pinion spring return for fail-safe process control, scotch yoke for high-torque heavy-duty automation — all with ISO 5211 direct-mount. ATEX certified and available in double acting and spring return configurations.",
    cta: "Browse Pneumatic Actuators",
  },
  {
    category: "Electric Actuators",
    title: "Electric Rotary & Linear Actuators",
    href: "/actuators/electric",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itq.webp",
    alt: "Electric Actuators",
    description:
      "Precision electric actuators for quarter-turn and multi-turn valve automation. Intelligent torque control, modulating and on-off service, with integrated limit switches and positioners. Designed for applications where compressed air is unavailable or where precise positional feedback is required.",
    cta: "Browse Electric Actuators",
  },
  {
    category: "Hydraulic Actuators",
    title: "Hydraulic Rotary & Linear Actuators",
    href: "/actuators",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/hydraulic/adf.webp",
    alt: "Hydraulic Actuators",
    description:
      "High-force hydraulic actuators built for subsea, offshore and pipeline applications where extreme torque and fail-safe operation are non-negotiable. Scotch yoke and rack-and-pinion configurations available with spring return, hydraulic override, and full compliance with international pipeline standards.",
    cta: "Browse Hydraulic Actuators",
  },
  {
    category: "Gearboxes & Manual Actuators ",
    title: "Mechanical Actuators",
    href: "/actuators",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/mechanical/mab.webp",
    alt: "Mechanical Actuators",
    description:
      "Manual gearboxes and mechanical actuators for quarter-turn and multi-turn valves. Worm gear, bevel gear, and spur gear designs provide reliable manual override and standalone valve operation where automation is not required. Built for long service life with minimal maintenance in demanding environments.",
    cta: "Browse Mechanical Actuators",
  },
];

export default function ActuatorsPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: "60vh", md: "80vh" },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://pblol2.blob.core.windows.net/panam-images/products/actuators/ac-hero.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: "#61D649", letterSpacing: 3, fontSize: 11, fontWeight: 700 }}>
            Actuation Solutions
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: 42, md: 72 }, fontWeight: 800, color: "#fff", mt: 1, mb: 3, lineHeight: 1.1, maxWidth: 900, textShadow: "0px 2px 10px rgba(0,0,0,0.3)" }}
          >
            Pneumatic, Electric, Hydraulic & Mechanical Actuators
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 18, md: 20 }, color: "rgba(255,255,255,0.9)", maxWidth: 600, mb: 5, lineHeight: 1.7 }}
          >
            Leading UK supplier of valve actuators across all technologies — pneumatic, electric,
            hydraulic and mechanical — for demanding industrial environments globally.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="mailto:sales@valvenok.com"
            sx={{ bgcolor: "#61D649", color: "#000", borderRadius: 1, px: 5, py: 2, fontSize: "1rem", fontWeight: 700, textTransform: "none", "&:hover": { bgcolor: "#fff", color: "#000" } }}
          >
            Request Actuator Specs
          </Button>
        </Container>
      </Box>

      {/* ── Trust Bar ── */}
      <Box sx={{ borderBottom: "1px solid", borderColor: "divider", py: 1.5, bgcolor: "#fff", whiteSpace: "nowrap", overflow: "hidden" }}>
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        <Box sx={{ display: "flex", width: "max-content", animation: "marquee 30s linear infinite", "&:hover": { animationPlayState: "paused" } }}>
          {[1, 2].map((i) => (
            <Box key={i} sx={{ display: "flex", gap: 6, pr: 6 }}>
              {["ATEX & IECEx Compliant", "24h Fast Dispatch", "Pneumatic · Electric · Hydraulic · Mechanical", "ISO 5211 Mounting Standard", "ATEX Zone 1 & 2 Certified", "SIL2 / SIL3 Capable"].map((item) => (
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

        {/* ── Intro ── */}
        <Grid container spacing={8} sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 36 }, fontWeight: 700, mb: 3 }}>
              Complete Valve Automation Solutions
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}>
              Valvenok provides a comprehensive range of valve actuators across all four actuation
              technologies — engineered for the most demanding industrial environments. From
              high-cycle pneumatic scotch yoke units to precision electric actuators, hydraulic
              pipeline actuators, and manual gearboxes.
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              All units are <strong>ATEX compliant</strong> and built for long-term reliability,
              with full accessory support including <strong>solenoid valves</strong>, limit
              switches, and <strong>positioners</strong> for complete loop control.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ bgcolor: "#f7faf6", borderRadius: 2, p: 4 }}>
              <Typography sx={{ fontWeight: 600, mb: 2, fontSize: 15 }}>Actuator Technologies</Typography>
              {[
                "Pneumatic — Rack & Pinion, Scotch Yoke, Linear",
                "Electric — Quarter-Turn & Multi-Turn",
                "Hydraulic — Rotary & Linear, Subsea Ready",
                "Mechanical — Worm, Bevel & Spur Gearboxes",
                "ISO 5211 Direct Mount Flanges",
                "Limit Switch Boxes, Positioners & Solenoids",
              ].map((item) => (
                <Typography key={item} sx={{ fontSize: 14, color: "text.secondary", py: 1, borderBottom: "1px solid", borderColor: "divider" }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* ── 4 Series — alternating layout ── */}
        {SERIES.map(({ category, title, href, image, alt, description, cta }, index) => {
          const isEven = index % 2 === 0;
          return (
            <Box key={title}>
              <Grid container spacing={8} alignItems="center" sx={{ mb: 10 }}>

                {/* Text — left on even, right on odd */}
                <Grid
                  size={{ xs: 12, md: 6 }}
                  order={{ xs: 1, md: isEven ? 1 : 2 }}
                >
                  <Typography variant="overline" sx={{ color: "#61D649", fontWeight: 600, letterSpacing: 2, fontSize: 11 }}>
                    {category}
                  </Typography>
                  <Typography
                    variant="h3"
                    component="a"
                    href={href}
                    sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mt: 1, mb: 3, display: "block", color: "inherit", textDecoration: "none", "&:hover": { color: "#61D649", textDecoration: "underline" } }}
                  >
                    {title}
                  </Typography>
                  <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
                    {description}
                  </Typography>
                  <Button
                    variant="outlined"
                    href={href}
                    sx={{ mt: 3, borderColor: "#61D649", color: "#61D649", textTransform: "none", fontWeight: 700, "&:hover": { bgcolor: "#61D649", color: "#000", borderColor: "#61D649" } }}
                  >
                    {cta}
                  </Button>
                </Grid>

                {/* Image — right on even, left on odd */}
                <Grid
                  size={{ xs: 12, md: 6 }}
                  order={{ xs: 2, md: isEven ? 2 : 1 }}
                >
                  <Box sx={{ borderRadius: 2, p: 4, textAlign: "center", bgcolor: "#f7faf6" }}>
                    <img
                      src={image}
                      alt={alt}
                      style={{ width: "50%", height: "auto", objectFit: "contain" }}
                    />
                  </Box>
                </Grid>

              </Grid>
              {index < SERIES.length - 1 && <Divider sx={{ mb: 10 }} />}
            </Box>
          );
        })}

        <Divider sx={{ mb: 10 }} />

        {/* ── Applications ── */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 700, mb: 4 }}>
            Actuator Applications
          </Typography>
          <Grid container spacing={2}>
            {[
              "Oil & Gas Processing",
              "Marine & Offshore Systems",
              "Power Generation Plants",
              "Chemical & Petrochemical",
              "Water Treatment Facilities",
              "Pharmaceutical Manufacturing",
              "Pipeline & Transmission",
              "Subsea & Deepwater",
              "Food & Beverage",
            ].map((ind) => (
              <Grid key={ind} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#61D649", flexShrink: 0 }} />
                  <Typography sx={{ fontSize: 14, color: "text.secondary" }}>{ind}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ── CTA ── */}
        <Box sx={{ textAlign: "center", py: 6, borderRadius: 4 }}>
          <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mb: 2 }}>
            Automate Your Valves Today
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 4, maxWidth: 560, mx: "auto" }}>
            Need a custom torque rating or specific mounting configuration? Our technical
            engineers are ready to assist with your valve automation requirements.
          </Typography>
          <Button
            variant="contained"
            href="mailto:sales@valvenok.com"
            sx={{ bgcolor: "#61D649", color: "#000", px: 4, py: 1.5, fontWeight: 700 }}
          >
            Contact Technical Team
          </Button>
        </Box>

      </Container>
    </Box>
  );
}