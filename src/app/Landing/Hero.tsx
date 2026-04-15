'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { alpha } from '@mui/material/styles';


// ── HERO STATS ───────────────────────────────────────────────────────────────
const STATS = [
  { num: '2–3', suffix: '',    label: 'Day UK Dispatch'   },
  { num: '5',   suffix: 'K+', label: 'Products In Stock'  },
  { num: '✓',   suffix: '',   label: 'JOSCAR Registered'  },
  { num: 'SS',  suffix: '316',label: 'Material Options'   },
  { num: 'H',   suffix: '2',  label: 'Hydrogen Ready'     },
  { num: '6',   suffix: 'K',  label: 'PSI Max Pressure'   },
];

// ── HERO ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 10 },
          bgcolor: 'background.default',
          position: 'relative',
          overflow: 'hidden',
          minHeight: { md: 440 },
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid',
          borderColor: 'divider',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            width: { xs: '0%', md: '55%' },
            height: '100%',
            background: (theme) =>
              `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.18)} 0%, ${alpha(theme.palette.primary.main, 0.22)} 100%)`,
            clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0% 100%)',
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <Grid container spacing={{ xs: 4, md: 7 }} alignItems="center">

            {/* ── LEFT: Copy ── */}
            <Grid size={{ xs: 12, md: 6 }}>

              {/* Tag */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 1.75,
                  py: 0.75,
                  mb: 2.5,
                  bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                  border: '1px solid',
                  borderColor: (theme) => alpha(theme.palette.primary.main, 0.35),
                  '&::before': {
                    content: '"●"',
                    fontSize: '7px',
                    color: 'primary.main',
                    lineHeight: 1,
                  },
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    color: 'primary.main',
                    textTransform: 'uppercase',
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: '11px',
                  }}
                >
                  UK Industrial Supplier
                </Typography>
              </Box>

              {/* Headline */}
              <Typography
                component="h1"
                sx={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontWeight: 900,
                  fontSize: { xs: '2.6rem', md: 'clamp(42px, 5vw, 66px)' },
                  lineHeight: 1.02,
                  letterSpacing: '0.01em',
                  textTransform: 'uppercase',
                  color: 'text.primary',
                  mb: 2.5,
                }}
              >
                Industrial pump suppliers and valves and controls,
                <Box component="br" />
                <Box component="em" sx={{ color: 'primary.main', fontStyle: 'normal' }}>
                  Delivered Fast
                </Box>
              </Typography>

              {/* Sub-copy */}
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  fontSize: '17px',
                  maxWidth: 480,
                  lineHeight: 1.75,
                }}
              >
                Hydraulic, Pneumatic, Instrumentation and Hydrogen-ready components — all in one
                place. Trusted by engineers and procurement teams across the UK and worldwide.
              </Typography>

              {/* CTAs */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="/products"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 3.5,
                    py: 1.75,
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontWeight: 800,
                    fontSize: '16px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  Shop All Products
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  href="/products"
                  sx={{
                    px: 3.5,
                    py: 1.75,
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    borderWidth: '2px',
                    '&:hover': { borderWidth: '2px' },
                  }}
                >
                  View Catalogues
                </Button>
              </Stack>
            </Grid>

            {/* ── RIGHT: Stats grid ── */}
            <Grid size={{ xs: 12, md: 6 }}>
  <Grid container spacing={1.25}>
    {STATS.map((stat, i) => (
      <Grid size={{ xs: 4 }} key={i}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 2.5 },
            textAlign: 'center',
            border: '1.5px solid',
            borderRadius:0,
            borderColor: '#E0E0E0', // Light grey border for neutral look
            bgcolor: '#FFFFFF',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              borderColor: '#000000', // Black border on hover
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            },
          }}
        >
          {/* Main Number */}
          <Typography
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: { xs: '1.6rem', md: '2rem' },
              fontWeight: 900,
              color: '#000000', // STRICT BLACK
              lineHeight: 1,
              mb: 0.75,
            }}
          >
            {stat.num}
            {stat.suffix && (
              <Box component="span" sx={{ color: '#000000' }}>
                {stat.suffix}
              </Box>
            )}
          </Typography>

          {/* Label Text */}
          <Typography
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: '#000000', // STRICT BLACK
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            {stat.label}
          </Typography>
        </Paper>
      </Grid>
    ))}
  </Grid>
</Grid>

          </Grid>
        </Container>
      </Box>
    
  );
}