'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';

export default function AboutHero() {
  return (
    <Box
      sx={{
        bgcolor: 'text.primary',
        py: { xs: 8, md: 12 },
        borderBottom: '3px solid',
        borderColor: 'primary.main',
        position: 'relative',
        overflow: 'hidden',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          width: { xs: '0%', md: '40%' },
          height: '100%',
          background: (t) => `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 8px,
            ${alpha(t.palette.primary.main, 0.04)} 8px,
            ${alpha(t.palette.primary.main, 0.04)} 9px
          )`,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          sx={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'primary.main',
            mb: 2,
          }}
        >
          About Valvenok
        </Typography>

        <Typography
          component="h1"
          sx={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontWeight: 900,
            fontSize: { xs: '3rem', md: 'clamp(52px, 7vw, 88px)' },
            lineHeight: 0.95,
            textTransform: 'uppercase',
            color: '#ffffff',
            mb: 4,
            maxWidth: 700,
          }}
        >
          Built for
          <br />
          Engineers,
          <br />
          <Box component="span" sx={{ color: 'primary.main' }}>
            By Engineers
          </Box>
        </Typography>

        <Typography
          sx={{
            color: (t) => alpha(t.palette.common.white, 0.55),
            fontSize: '17px',
            lineHeight: 1.75,
            maxWidth: 520,
          }}
        >
          Valvenok is a UK-based industrial supplier specialising in valves, fittings,
          and fluid control components. We exist to make procurement faster, simpler,
          and more reliable for engineers and procurement teams worldwide.
        </Typography>
      </Container>
    </Box>
  );
}