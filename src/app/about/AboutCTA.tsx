'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { alpha } from '@mui/material/styles';

export default function AboutCTA() {
  return (
    <Box
      sx={{
        bgcolor: 'text.secondary',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: (t) => `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 60px,
            ${alpha(t.palette.primary.main, 0.03)} 60px,
            ${alpha(t.palette.primary.main, 0.03)} 61px
          )`,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: 640 }}>
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
            Ready to Order?
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 900,
              fontSize: { xs: '2.4rem', md: '3.5rem' },
              lineHeight: 1.0,
              textTransform: 'uppercase',
              color: '#ffffff',
              mb: 3,
            }}
          >
            5,000+ Parts.
            <br />
            In Stock.
            <br />
            <Box component="span" sx={{ color: 'primary.main' }}>
              Ship Tomorrow.
            </Box>
          </Typography>
          <Typography
            sx={{
              color: (t) => alpha(t.palette.common.white, 0.5),
              fontSize: '16px',
              lineHeight: 1.75,
              mb: 5,
            }}
          >
            Browse our full catalogue of SS316 fittings, valves, and instrumentation
            components — or use Quick Order if you already know your part numbers.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/products"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 3.5,
                py: 1.6,
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 800,
                fontSize: '15px',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                boxShadow: 'none',
                borderRadius: '4px',
                '&:hover': { boxShadow: 'none' },
              }}
            >
              Browse Products
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/quick-order"
              sx={{
                px: 3.5,
                py: 1.6,
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 700,
                fontSize: '15px',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                borderWidth: '2px',
                borderColor: (t) => alpha(t.palette.common.white, 0.3),
                color: (t) => alpha(t.palette.common.white, 0.8),
                borderRadius: '4px',
                '&:hover': {
                  borderWidth: '2px',
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  bgcolor: 'transparent',
                },
              }}
            >
              Quick Order
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}