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
    id: "stainless-sewage",
    name: "Stainless Steel Sewage Pumps",
    series: "TSS & TPS",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/TSS.png",
    description: "Compact IP68-rated stainless steel sewage pumps for domestic, light industrial and municipal water transfer and drainage. 400 – 1100W, 230V single-phase, Class E insulation.",
    specs: ["IP68", "230V 1Ph", "400 – 1100 W", "5m Immersion"],
    href: "/submersible/tss",
  },
  {
    id: "borehole",
    name: "Borehole Submersible",
    series: "TS / TN / TL",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/4-inch-ss-in.png",
    description: 'Full stainless steel borehole submersible pumps for deep well water supply. Available in 4", 6", 8" and 10" diameters with AISI 304, 316 and 904L construction.',
    specs: ['4" – 10"', "0.4 – 215 m³/hr", "Up to 870m", "0.37 – 220 kW"],
    href: "/submersible/borewell",
  },
  {
    id: "medium-sewage",
    name: "Mid-Range Sewage Pumps",
    series: "TGB",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/05-TGB.png",
    description: "Mid-range submersible sewage pumps across 0.5 – 2.6 kW. Available in single-phase (230V) and three-phase (415V) with outlet sizes 1½\" and 2\".",
    specs: ["0.5 – 2.6 kW", "230V / 415V", "1½\" – 2\" Outlet", "Single & 3 Phase"],
    href: "/submersible/tgb",
  },
  {
    id: "light-drainage",
    name: "Light Drainage Pumps",
    series: "TDL",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/03-TDL.png",
    description: "Vortex impeller submersible pumps for light drainage applications. Available in single and three phase, 230V and 400V with inbuilt capacitor options.",
    specs: ["230V / 400V", "Single & 3 Phase", "Vortex Impeller", "Inbuilt Capacitor"],
    href: "/submersible/tdl",
  },
  {
    id: "light-sewage",
    name: "Light Sewage Pumps",
    series: "TSL",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/02-TSL.png",
    description: "Vortex impeller submersible pumps for light sewage and drainage applications. Available in single and three phase with auto float switch options.",
    specs: ["230V / 400V", "Single & 3 Phase", "Sewage & Drainage", "Auto Float Switch"],
    href: "/submersible/tsl",
  },
  {
    id: "heavy-sewage",
    name: "Heavy Sewage Pumps",
    series: "TGT",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/06-TGT.png",
    description: "Heavy-duty submersible sewage pumps for demanding wastewater applications. Available from 0.75kW to 9.5kW with auto coupling and inbuilt TOP options.",
    specs: ["0.75 – 9.5 kW", "230V / 400V", "Auto Coupling", "Inbuilt TOP"],
    href: "/submersible/tgt",
  },
  {
    id: "sewage-submersible",
    name: "Submersible Sewage Pumps",
    series: "TGA",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/04-TGA.png",
    description: "Heavy duty submersible sewage pumps for handling solids up to 80mm. Available with delivery sizes from 50mm to 100mm at 1450 rpm, 400V three phase.",
    specs: ["50 – 100mm Delivery", "Up to 80mm Solids", "1450 rpm", "400V 3 Phase"],
    href: "/submersible/tga",
  },
  {
    id: "industrial-sewage",
    name: "Industrial Sewage Pumps",
    series: "TMA",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/09-TMA.png",
    description: "Three-phase 415V submersible sewage pumps for industrial wastewater handling. 2\" outlet across 1.1 – 2.6 kW with robust construction.",
    specs: ["1.1 – 2.6 kW", "415V 3Ph", "2\" Outlet", "Industrial Grade"],
    href: "/submersible/tma",
  },
  {
    id: "heavy-duty-sewage",
    name: "Heavy Duty Sewage Pumps",
    series: "TMC",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/07-TMC1.png",
    description: "High-performance submersible sewage pumps for the most demanding wastewater applications. Available from 1.85kW to 34kW with delivery sizes from 80mm to 150mm.",
    specs: ["1.85 – 34 kW", "80 – 150mm Delivery", "Auto Coupling", "Moisture Sensor"],
    href: "/submersible/tmc",
  },
]

function SeriesCard({ series }: { series: (typeof SUBMERSIBLE_SERIES)[0] }) {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
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
        sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
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
        <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
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