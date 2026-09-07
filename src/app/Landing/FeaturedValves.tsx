'use client';

import { Box, Container, Typography } from '@mui/material';
import FeaturedValveCard from './FeaturedValvesCard';
import { FEATURED_PRODUCTS } from './FeaturedValvesData';
import Reveal from '@/src/app/Common/Reveal';

export default function FeaturedValves() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'grey.50',
      }}
    >
      <Container maxWidth="xl">
        <Reveal>
          <Box sx={{ mb: { xs: 3, md: 5 } }}>
            <Typography sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: 'text.secondary',
              display: 'block',
              mb: 0.5,
            }}>
              Premium Selection ——
            </Typography>
            <Typography sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 900,
              fontSize: { xs: 32, sm: 40, md: 56 },
              lineHeight: 0.88,
              textTransform: 'uppercase',
              color: 'text.primary',
            }}>
              Featured<br />Products
            </Typography>
          </Box>
        </Reveal>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
          gap: 2,
        }}>
          {FEATURED_PRODUCTS.map((product, index) => (
            <Reveal key={product.id} delay={Math.min(index * 60, 400)}>
              <FeaturedValveCard valve={product} />
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
