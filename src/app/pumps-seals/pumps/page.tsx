"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Stack,
  Chip,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { alpha, useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";

const SUBMERSIBLE_SERIES = [
  {
    id: "specialised-pumps",
    name: "Specialised Pumps",
    series: "LMP / Atomizer / PSI / PW / PK",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/LMP2050.png",
    description:
      "WALRUS specialised pumps including high-head screw pumps, atomizer pumps and general utility pumps for agriculture, construction and manufacturing applications.",
    specs: [
      "0.1 – 7.5 kW",
      "Up to 800M Head",
      "Up to 1,000 L/min",
      "Up to 30 kg/cm²",
    ],
    href: "/pumps-seals/pumps/specialised-pumps",
  },
  {
    id: "regenerative-pump",
    name: "Regenerative Pumps",
    series: "TP8 / GQ / GQCN / TP3 / TPGK",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TPGK.webp",
    description:
      "WALRUS regenerative pumps for domestic, light industrial and manufacturing applications. Five series across 50Hz and 60Hz operation.",
    specs: [
      "0.18 – 0.98 kW",
      "50Hz / 60Hz",
      "Up to 62M Head",
      "Up to 85 L/min",
    ],
    href: "/pumps-seals/pumps/regenerative-pump",
  },
  {
    id: "inverter-constant-pressure-systems",
    name: "Inverter Constant Pressure Control Systems",
    series: "HQIC / TPH_IC / TPM_IC",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/HQIC.webp",
    description:
      "WALRUS inverter-driven constant pressure control systems for consistent flow across industrial and commercial water supply. Five series including single and x2 configurations.",
    specs: ["0.37 – 7.5 kW", "Up to 8.0 kg/cm²", "Up to 1,600 L/min"],
    href: "/pumps-seals/pumps/inverter-constant-pressure-systems",
  },
  {
    id: "peripheral-booster-pumps",
    name: "Peripheral Booster Pumps",
    series: "TP8 / GQB / GQCN_B ",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/TP8.webp",
    description:
      "WALRUS peripheral booster pumps for domestic, light industrial and manufacturing applications. Six series across 50Hz and 60Hz operation.",
    specs: [
      "0.18 – 0.98 kW",
      "50Hz / 60Hz",
      "Up to 62M Head",
      "Up to 85 L/min",
    ],
    href: "/pumps-seals/pumps/peripheral-booster-pumps",
  },
  {
    id: "immersible-centrifugal-pumps",
    name: "Immersible Centrifugal Pumps",
    series: "TPAK-J / TPHK / TPMK",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TPAK-J.webp",
    description:
      "WALRUS immersible centrifugal pumps engineered for manufacturing industry applications, across seven series and 50Hz/60Hz operation.",
    specs: [
      "0.18 – 18.5 kW",
      "50Hz / 60Hz",
      "Up to 267M Head",
      "Up to 650 L/min",
    ],
    href: "/pumps-seals/pumps/immersible-centrifugal-pumps",
  },
  {
    id: "horizontal-centrifugal-pumps",
    name: "Horizontal Pumps",
    series: "WQ_B / HQ_B / TQ_B ",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/WQ_B.webp",
    description:
      "WALRUS horizontal centrifugal pumps for residential, commercial and light industrial water supply. Stainless steel impellers, dual outlet configurations and electronic control options across six series.",
    specs: [
      "0.18 – 3.7 kW",
      "50Hz / 60Hz",
      "Up to 56M Head",
      "Up to 270 L/min",
    ],
    href: "/pumps-seals/pumps/horizontal-centrifugal-pumps",
  },

];

function SeriesCard({ series }: { series: (typeof SUBMERSIBLE_SERIES)[0] }) {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 0,
        "&:hover": {
          borderColor: "primary.main",
          boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.12)}`,
        },
        transition: "all 0.2s",
      }}
    >
      
      <CardActionArea
        onClick={() => router.push(series.href)}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <CardMedia
          component="img"
          image={series.image}
          alt={series.name}
          sx={{
            height: 200,
            objectFit: "contain",
            p: 3,
            bgcolor: alpha(theme.palette.primary.main, 0.02),
            borderRadius: 0,
            flexShrink: 0,
          }}
        />
        <CardContent
          sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            mb={1}
          >
            <Typography variant="h6" fontWeight={800}>
              {series.name}
            </Typography>
            <Chip
              label={series.series}
              size="small"
              color="primary"
              variant="outlined"
              sx={{ borderRadius: 0 }}
            />
          </Stack>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2, lineHeight: 1.7, flexGrow: 1 }}
          >
            {series.description}
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={0.75}>
            {series.specs.map((spec) => (
              <Chip
                key={spec}
                label={spec}
                size="small"
                sx={{
                  fontSize: "0.7rem",
                  borderRadius: 0,
                  bgcolor: alpha(theme.palette.primary.main, 0.06),
                }}
              />
            ))}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function SubmersiblePumpsPage() {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          bgcolor: alpha(theme.palette.primary.main, 0.04),
          borderBottom: `1px solid ${theme.palette.divider}`,
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={6}
            alignItems="center"
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h3"
                fontWeight={800}
                sx={{ mb: 2, letterSpacing: "-0.02em", lineHeight: 1.2 }}
              >
                Stainless Steel{" "}
                <Box component="span" color="primary.main">
                  Submersible Pumps
                </Box>
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 560, mb: 3, lineHeight: 1.8 }}
              >
                Engineered for borehole and deep well applications, our TS/TN/TL
                series submersible pumps are manufactured from premium stainless
                steel — AISI 304, 316 and 904L — delivering exceptional
                corrosion resistance, high hydraulic efficiency, and reliable
                performance across demanding water supply conditions.
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {[
                  "ISO 9001 Certified",
                  "50 Hz",
                  "Up to 870m Head",
                  "Up to 215 m³/hr",
                  "AISI 304 / 316 / 904L",
                ].map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      borderRadius: 0,
                      bgcolor: alpha(theme.palette.primary.main, 0.08),
                      fontWeight: 600,
                    }}
                  />
                ))}
              </Stack>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: 420 },
                flexShrink: 0,
                display: "flex",
                justifyContent: "center",
                gap: 2,
              }}
            >
              {[
                {
                  src: "https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/4-inch-ss-in.png",
                  alt: "4 inch",
                },
                {
                  src: "https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/6-Inch-Pump-in.png",
                  alt: "6 inch",
                },
                {
                  src: "https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/10-Inch-Sub-Pump-In.png",
                  alt: "8 inch",
                },
              ].map((img) => (
                <Box
                  key={img.alt}
                  component="img"
                  src={img.src}
                  alt={img.alt}
                  sx={{ height: 260, objectFit: "contain" }}
                />
              ))}
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Series Cards */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h5" fontWeight={800} sx={{ mb: 1 }}>
            Available Series
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Select a series to view full technical specifications and models.
          </Typography>
          <Grid container spacing={3}>
            {SUBMERSIBLE_SERIES.map((s) => (
              <Grid key={s.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <SeriesCard series={s} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
