"use client";

import RelatedLinks from "@/src/app/Common/Products_Page/RelatedLinks";
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
} from "@mui/material";

const SECTIONS = [
  {
    overline: "Ball Valves",
    title: "HP Ball Valves",
    description:
      'SS 316 High Pressure Ball Valves from 10,000 to 20,000 psi. HP, HP1 and HP2 series with NPT female and MP cone & thread female connections. Sizes from 1/4" to 1". Built for demanding oil & gas and process applications.',
    href: "/high-pressure/ball-valves",
    label: "Browse Ball Valves",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-bv.jpg",
    imageAlt: "HP Ball Valves",
  },
  {
    overline: "Needle Valves",
    title: "HP Needle Valves",
    description:
      'SS 316 High Pressure Needle Valves from 10,000 to 60,000 psi. HP, HP1, HP2, HP3 and HP6 series. NPT, ISO Parallel and MP/HP Cone & Thread connections. Sizes from 1/4" to 1".',
    href: "/high-pressure/needle-valves",
    label: "Browse Needle Valves",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-nv.jpg",
    imageAlt: "HP Needle Valves",
    flip: true,
  },
  {
    overline: "DBB Valves",
    title: "Double Block & Bleed Valves",
    description:
      'SS 316 High Pressure Double Block & Bleed Valves from 10,000 to 20,000 psi. HP and HP20 series in NPT, ISO Parallel and MP Cone & Thread connections. Sizes from 1/4" to 1/2".',
    href: "/high-pressure/dbb",
    label: "Browse DBB Valves",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-dbb.jpg",
    imageAlt: "DBB Valves",
  },
  {
    overline: "Manifolds",
    title: "2-Valve Manifolds",
    description:
      'SS 316 High Pressure 2-Valve Manifolds for gauge and absolute pressure transmitter applications. 15,000 psi NPT Female and 20,000 psi MP Cone & Thread Female. Sizes 1/4", 3/8" and 1/2".',
    href: "/high-pressure/manifolds",
    label: "Browse Manifolds",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/needle-valves/cover-needle.jpg",
    imageAlt: "2-Valve Manifolds",
    flip: true,
  },
  {
    overline: "Cone & Thread Fittings",
    title: "HP Fittings",
    description:
      "Panam SS 316 High Pressure Cone & Thread Fittings from 10,000 to 60,000 psi. Adapters, connectors, unions, elbows, tees, crosses, hex nipples, caps and plugs for oil & gas and subsea applications. The pressure range shown covers the Panam range; the HP Fittings catalogue also lists Hiflux fittings with their own ratings.",
    href: "/high-pressure/fittings",
    label: "Browse HP Fittings",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-adaptor.jpg",
    imageAlt: "HP Cone & Thread Fittings",
  },
  {
    overline: "Pipe Fittings",
    title: "HP Pipe Fittings",
    description:
      "SS 316 High Pressure Pipe Fittings from 10,000 to 15,000 psi. Hex couplings, hex nipples, adapters, elbows, tees, crosses, plugs and caps. NPT, ISO Parallel and 37° JIC thread connections.",
    href: "/high-pressure/pipe-fittings",
    label: "Browse Pipe Fittings",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/hex-nipples.jpg",
    imageAlt: "HP Pipe Fittings",
    flip: true,
  },
  {
    overline: "Seals & Glands",
    title: "HP Seals & Glands",
    description:
      'SS 316 High Pressure Anti-Vibration Glands, Glands and Collars. Medium Pressure at 20,000 psi and High Pressure at 60,000 psi. Sizes from 1/4" to 1".',
    href: "/high-pressure/seals-glands",
    label: "Browse Seals & Glands",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-glands.png",
    imageAlt: "HP Seals & Glands",
  },
  {
    overline: "Cone & Thread Nipples",
    title: "HP Cone & Threaded Nipples",
    description:
      'SS 316 HP Cone & Threaded Nipples. MP Cone & Thread at 20,000 psi and HP Cone & Thread at 60,000 psi. 1/4", 3/8", 9/16", 3/4" and 1" OD. Lengths from 2.75" to 12".',
    href: "/high-pressure/cone-threaded-nipples",
    label: "Browse Nipples",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-cone.png",
    imageAlt: "HP Cone & Threaded Nipples",
    flip: true,
  },
];

export default function HighPressureIndexPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* ── HERO ── */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: "60vh", md: "70vh" },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.62), rgba(0,0,0,0.62)), url("https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/yunshuo-qu-bqxIzrYzGaI-unsplash.jpg")`,
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
            Products
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: 42, md: 68 },
              fontWeight: 800,
              color: "#fff",
              mt: 1,
              mb: 3,
              lineHeight: 1.1,
              maxWidth: 800,
              textShadow: "0px 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            High Pressure Valves & Fittings
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 17, md: 20 },
              color: "rgba(255,255,255,0.88)",
              maxWidth: 600,
              mb: 5,
              lineHeight: 1.75,
            }}
          >
            SS 316 high pressure valves, fittings, manifolds and accessories
            from 10,000 to 60,000 psi — engineered for oil & gas, subsea and
            high pressure test applications.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/contact"
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
            Request Specs
          </Button>
        </Container>
      </Box>

      {/* ── TRUST BAR ── */}
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
                "SS 316 Material Standard",
                "10,000 – 60,000 psi",
                "NPT · ISO Parallel · Cone & Thread",
                "Oil & Gas · Subsea · Test Systems",
              ].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontSize: 17,
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

      {/* ── SECTIONS ── */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        {SECTIONS.map((s, i) => (
          <Box key={s.href}>
            <Grid
              container
              spacing={8}
              alignItems="center"
              sx={{ mb: 10 }}
              direction={s.flip ? "row-reverse" : "row"}
            >
              {/* Text */}
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
                  {s.overline}
                </Typography>
                <Typography
                  variant="h1"
                  component="a"
                  href={s.href}
                  sx={{
                    fontSize: { xs: 24, md: 32 },
                    fontWeight: 700,
                    mt: 1,
                    mb: 3,
                    display: "block",
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": {
                      color: "#61D649",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {s.title}
                </Typography>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
                  {s.description}
                </Typography>
                <Button
                  variant="outlined"
                  href={s.href}
                  sx={{
                    mt: 3,
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
                  {s.label}
                </Button>
              </Grid>

              {/* Image */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    borderRadius: 3,
                    p: 4,
                    textAlign: "center",
                    bgcolor: "#f7faf6",
                    border: "1px solid",
                    borderColor: "divider",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 280,
                  }}
                >
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    style={{
                      width: "65%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>

            {i < SECTIONS.length - 1 && <Divider sx={{ mb: 10 }} />}
          </Box>
        ))}

        {/* ── CTA ── */}
        <Box sx={{ textAlign: "center", py: 6 }}>
          <Typography
            variant="h1"
            component="h2"
            sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mb: 2 }}
          >
            Need a Custom Configuration?
          </Typography>
          <Typography
            sx={{ color: "text.secondary", mb: 4, maxWidth: 560, mx: "auto" }}
          >
            Our technical team can source specific pressure ratings, materials
            and connection types across the full high pressure range.
          </Typography>
          <Button
            variant="contained"
            href="/contact"
            sx={{
              bgcolor: "#61D649",
              color: "#000",
              px: 4,
              py: 1.5,
              fontWeight: 700,
              textTransform: "none",
            }}
          >
            Contact Technical Team
          </Button>
        </Box>
      </Container>
      <RelatedLinks title="Group companies" links={[{ label: "HIFLUX high-pressure valves at Hiflux UK", href: "https://www.hiflux.uk.com/", external: true }]} />
    </Box>
  );
}
