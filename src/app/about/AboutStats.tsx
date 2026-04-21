'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { alpha } from '@mui/material/styles';

const STATS = [
  { value: '5,000+', label: 'Products in Stock' },
  { value: '2–3',    label: 'Day UK Dispatch' },
  { value: '6,000',  label: 'PSI Max Rating' },
  { value: 'SS316',  label: 'Primary Material' },
  { value: 'JOSCAR', label: 'Registered Supplier' },
  { value: 'H₂',     label: 'Hydrogen Ready' },
];

export default function AboutStats() {
  return (
    <Box
      sx={{
        bgcolor: 'text.secondary',
        borderBottom: '1px solid',
        borderColor: (t) => alpha(t.palette.primary.main, 0.15),
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          {STATS.map((stat, i) => (
            <Grid
              size={{ xs: 6, sm: 4, md: 2 }}
              key={i}
              sx={{
                borderRight: '1px solid',
                borderColor: (t) => alpha(t.palette.common.white, 0.06),
                borderLeft: i === 0 ? '1px solid' : 'none',
                borderLeftColor: (t) => alpha(t.palette.common.white, 0.06),
              }}
            >
              <Box
                sx={{
                  px: 3,
                  py: 3.5,
                  textAlign: 'center',
                  transition: 'background 0.2s',
                  '&:hover': { bgcolor: (t) => alpha(t.palette.primary.main, 0.06) },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontWeight: 900,
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                    lineHeight: 1,
                    color: 'primary.main',
                    mb: 0.75,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: '11px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: (t) => alpha(t.palette.common.white, 0.45),
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}