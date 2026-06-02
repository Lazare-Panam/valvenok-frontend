'use client';

import { Box, Container, Typography } from '@mui/material';
import FeaturedValveCard from './FeaturedValvesCard';
import { FEATURED_PRODUCTS } from './FeaturedValvesData';

export default function FeaturedValves() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 8 },
        bgcolor: 'grey.50',
        '@keyframes sectionFadeIn': {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        animation: 'sectionFadeIn 0.6s ease both',
      }}
    >
      <Container maxWidth="xl">
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
            <Box
              key={product.id}
              sx={{
                '@keyframes cardIn': {
                  from: { opacity: 0, transform: 'translateY(20px)' },
                  to:   { opacity: 1, transform: 'translateY(0)' },
                },
                animation: 'cardIn 0.5s ease both',
                animationDelay: `${index * 60}ms`,
              }}
            >
              <FeaturedValveCard valve={product} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}