'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TuneIcon from '@mui/icons-material/Tune';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import SpeedIcon from '@mui/icons-material/Speed';
import ScienceIcon from '@mui/icons-material/Science';
import HoseIcon from '@mui/icons-material/SettingsInputComponent';

const PRODUCTS = [
  {
    Icon: TuneIcon,
    name: 'PANAM Needle Valves',
    tag: 'Up to 6,000 PSI',
  },
  {
    Icon: RadioButtonCheckedIcon,
    name: 'Ball Valves SS316',
    tag: '2 & 3 Way',
  },
  {
    Icon: PlumbingIcon,
    name: 'Pipe Fittings',
    tag: 'BSP / NPT / Metric',
  },
  {
    Icon: SpeedIcon,
    name: 'Piston Accumulators',
    tag: 'HXQ Series',
  },
  {
    Icon: ScienceIcon,
    name: 'H2 Check Valves',
    tag: 'Hydrogen Ready',
  },
  {
    Icon: HoseIcon,
    name: 'Rubber Hoses',
    tag: 'Industrial Grade',
  },
];

export default function FeaturedStrip() {
  return (
    <Box component="section" sx={{ bgcolor: 'primary.main', py: { xs: 6, md: 7 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' },
            gap: { xs: 5, md: 7 },
            alignItems: 'center',
          }}
        >
          {/* ── LEFT: Text ── */}
          <Box>
            <Typography
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.65)',
                mb: 1,
              }}
            >
              Top Sellers
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: { xs: '2.4rem', md: '3rem' },
                fontWeight: 900,
                textTransform: 'uppercase',
                color: '#fff',
                letterSpacing: '0.02em',
                lineHeight: 1.08,
                mb: 2,
              }}
            >
              Popular Right Now
            </Typography>

            <Typography
              sx={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.75,
                mb: 3,
              }}
            >
              Our most ordered products, trusted by engineers across oil & gas, aerospace, hydrogen
              and manufacturing sectors.
            </Typography>

            <Button
              variant="contained"
              href="/products"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: '#fff',
                color: 'primary.main',
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 800,
                fontSize: '15px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                borderRadius: '0px',
                px: 3,
                py: 1.5,
                boxShadow: 'none',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                  boxShadow: 'none',
                },
              }}
            >
              View All Products
            </Button>
          </Box>

          {/* ── RIGHT: Product Cards ── */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px',
            }}
          >
            {PRODUCTS.map((product) => (
              <Box
                key={product.name}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '0px',
                  p: '20px 14px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.2s, border-color 0.2s, transform 0.15s',
                  '&:hover': {
                    bgcolor: (theme) => alpha(theme.palette.primary.dark, 0.3),
                    borderColor: '#fff',
                    transform: 'translateY(-2px)',
                    '& .prod-icon-box': {
                      bgcolor: 'rgba(255,255,255,0.2)',
                    },
                  },
                }}
              >
                {/* Icon box */}
                <Box
                  className="prod-icon-box"
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: 'rgba(255,255,255,0.1)',
                    borderRadius: '0px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 12px',
                    transition: 'background 0.2s',
                  }}
                >
                  <product.Icon sx={{ fontSize: 28, color: '#fff' }} />
                </Box>

                {/* Name */}
                <Typography
                  sx={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: '13px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: '#fff',
                    lineHeight: 1.3,
                    mb: '6px',
                  }}
                >
                  {product.name}
                </Typography>

                {/* Tag */}
                <Typography
                  sx={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: (theme) => alpha('#fff', 0.65),
                  }}
                >
                  {product.tag}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}