'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import VerifiedIcon from '@mui/icons-material/Verified';

const PILLS = [
  'Swagelok Compatible',
  'Parker Compatible',
  'Hydrogen Service — Selected Models',
];

const SPECS = [
  { key: 'Max Pressure',  val: '6,000 PSI'                  },
  { key: 'Materials',     val: 'SS316 · Duplex · Hastelloy'  },
  { key: 'Connections',   val: 'BSP · NPT · Double Ferrule'  },
  { key: 'Hydrogen',      val: 'Selected models — ask us'    },
  { key: 'Lead Time',     val: 'Confirmed on quotation'      },
];

export default function PanamBanner() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: 'background.paper',
        py: { xs: 7, md: 9 },
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid',
        borderColor: 'divider',
        // Watermark
        '&::before': {
          content: '"PANAM"',
          position: 'absolute',
          right: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: '"Barlow Condensed", sans-serif',
          fontSize: 'clamp(100px, 14vw, 180px)',
          fontWeight: 900,
          color: (theme) => alpha(theme.palette.primary.main, 0.06),
          letterSpacing: '-8px',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 5, md: 8 },
            alignItems: 'center',
          }}
        >

          {/* ── LEFT: Content ── */}
          <Box>
            {/* Label */}
            <Typography
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'primary.main',
                mb: 1.5,
              }}
            >
              Featured Industrial Brand
            </Typography>

            {/* Heading */}
            <Typography
              component="h2"
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: { xs: '2.4rem', md: 'clamp(28px, 3.5vw, 50px)' },
                fontWeight: 900,
                textTransform: 'uppercase',
                color: 'text.primary',
                lineHeight: 1.04,
                mb: 2.5,
              }}
            >
              PANAM Valves —{' '}
              <Box component="br" />
              The{' '}
              <Box component="em" sx={{ color: 'primary.main', fontStyle: 'normal' }}>
                Smarter Alternative
              </Box>
              <Box component="br" />
              to Swagelok &amp; Parker
            </Typography>

            {/* Body */}
            <Typography
              sx={{
                fontSize: '15px',
                color: 'text.primary',
                lineHeight: 1.75,
                mb: 3,
              }}
            >
              100% compatible with Swagelok and Parker specifications, but at a price that makes
              sense. PANAM delivers the same high-pressure, high-purity performance for oil &amp;
              gas, hydrogen and instrumentation applications — without the premium price tag.
            </Typography>

            {/* Pills */}
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 4 }}>
              {PILLS.map((pill) => (
                <Box
                  key={pill}
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.75,
                    bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                    border: '1px solid',
                    borderColor: (theme) => alpha(theme.palette.primary.main, 0.25),
                    color: 'primary.main',
                    px: 1.75,
                    py: 0.75,
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  <CheckIcon sx={{ fontSize: 12 }} />
                  {pill}
                </Box>
              ))}
            </Box>

            {/* CTA */}
            <Button
              variant="contained"
              color="primary"
              href="https://panamvalve.com/"
              target="_blank"
              rel="noopener"
              endIcon={<ArrowForwardIcon />}
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 800,
                fontSize: '15px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                px: 3.5,
                py: 1.5,
                boxShadow: 'none',
                '&:hover': { boxShadow: 'none' },
              }}
            >
              Explore PANAM Range
            </Button>
          </Box>

         
        </Box>
      </Container>
    </Box>
  );
}