'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';

const TIMELINE = [
  {
    year: '2018',
    title: 'Founded in Bicester',
    body: 'Valvenok was established to solve a problem we experienced firsthand — sourcing quality instrumentation fittings quickly, without minimum orders or long lead times.',
  },
  {
    year: '2020',
    title: 'JOSCAR Registration',
    body: 'Achieved JOSCAR registration, opening the door to defence and aerospace supply chains and cementing our commitment to compliance and traceability.',
  },
  {
    year: '2022',
    title: 'Hydrogen-Ready Range',
    body: 'Launched our H₂-ready product line in response to growing demand from the clean energy sector, stocking components rated and tested for hydrogen service.',
  },
  {
    year: '2024',
    title: '5,000+ SKUs in Stock',
    body: 'Expanded our UK stockholding to over 5,000 products across fittings, valves, adapters, and instrumentation components — all available for immediate dispatch.',
  },
];

export default function AboutStory() {
  return (
    <Box sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 }, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 12 }} alignItems="flex-start">

          {/* Left */}
          <Grid size={{ xs: 12, md: 5 }}>
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
              Our Story
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 900,
                fontSize: { xs: '2.2rem', md: '3rem' },
                lineHeight: 1.0,
                textTransform: 'uppercase',
                color: 'text.primary',
                mb: 3,
              }}
            >
              From a Stock
              <br />
              Problem to a
              <br />
              <Box component="span" sx={{ color: 'primary.main' }}>
                Stock Solution
              </Box>
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '16px', lineHeight: 1.8, mb: 2 }}>
              We started Valvenok because we were frustrated. As engineers ourselves, we knew
              how much time and money was wasted chasing down fittings from suppliers who
              either didn't hold stock or made you order a minimum of 100 pieces.
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '16px', lineHeight: 1.8 }}>
              We built a business around one principle: hold the stock, ship it fast, and make
              the process as frictionless as possible for the people actually doing the work.
            </Typography>
          </Grid>

          {/* Right: Timeline */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {TIMELINE.map((item, i) => (
                <Box key={i}>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: '64px 1fr',
                      gap: 3,
                      py: 3,
                      transition: 'background 0.15s',
                      '&:hover': { bgcolor: (t) => alpha(t.palette.primary.main, 0.04) },
                      px: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Barlow Condensed", sans-serif',
                        fontWeight: 900,
                        fontSize: '1.4rem',
                        color: 'primary.main',
                        lineHeight: 1,
                        pt: 0.25,
                      }}
                    >
                      {item.year}
                    </Typography>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: '"Barlow Condensed", sans-serif',
                          fontWeight: 800,
                          fontSize: '1rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: 'text.primary',
                          mb: 0.75,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', fontSize: '14px', lineHeight: 1.75 }}>
                        {item.body}
                      </Typography>
                    </Box>
                  </Box>
                  {i < TIMELINE.length - 1 && <Divider />}
                </Box>
              ))}
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}