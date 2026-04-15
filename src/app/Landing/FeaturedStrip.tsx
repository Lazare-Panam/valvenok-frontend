'use client';

import { useRef } from 'react';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ProductListingCard from '../categories/[categoryId]/ProductListingCard';
import { FEATURED_PRODUCTS } from './FeaturedProducts';

export default function FeaturedStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.8;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const NavButton = ({ direction, onClick }: { direction: 'left' | 'right', onClick: () => void }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        [direction]: { md: -64, lg: -64 }, // Pulls buttons outside the container on large screens
        zIndex: 10,
        bgcolor: 'white',
        color: 'black',
        borderRadius: 0,
        width: 48,
        height: 48,
        boxShadow: 3,
        display: { xs: 'none', md: 'flex' }, // Keep hidden on mobile to avoid clutter
        '&:hover': { bgcolor: 'grey.200', transform: 'translateY(-50%) scale(1.1)' },
        transition: 'all 0.2s'
      }}
    >
      {direction === 'left' ? <ArrowBackIosNewIcon fontSize="small" /> : <ArrowForwardIosIcon fontSize="small" />}
    </IconButton>
  );

  return (
    <Box component="section" sx={{ bgcolor: 'primary.main', py: { xs: 8, md: 10 }, overflow: 'hidden' }}>
      <Container maxWidth="xl">
        {/* Header Text - Centered */}
        <Box sx={{ textAlign: 'center', mb: 6, color: 'white' }}>
          <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: '0.2em', display: 'block', mb: 1 }}>
            Precision Engineering
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 900, fontFamily: 'var(--font-display)', textTransform: 'uppercase', mb: 2 }}>
            Engineered Components
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '600px', mx: 'auto', opacity: 0.9 }}>
            Discover our range of high-performance instrumentation and hydraulic solutions.
          </Typography>
        </Box>

        {/* The Slider Wrapper */}
        <Box sx={{ position: 'relative' }}>
          
          <NavButton direction="left" onClick={() => scroll('left')} />
          <NavButton direction="right" onClick={() => scroll('right')} />

          <Box
            ref={scrollRef}
            sx={{
              display: 'flex',
              gap: 3,
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              '&::-webkit-scrollbar': { display: 'none' },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              px: { xs: 2, md: 0 } // Extra padding for mobile "peek"
            }}
          >
            {FEATURED_PRODUCTS.map((product) => (
              <Box 
                key={product.id} 
                sx={{ 
                  minWidth: { xs: '85%', sm: '45%', md: '30%', lg: '23%' }, 
                  scrollSnapAlign: 'start',
                  // Visual "Shortener" logic applied via CSS nesting
                  '& .MuiCard-root': { height: '100%', display: 'flex', flexDirection: 'column' },
                  '& img': { maxHeight: '140px !important' } 
                }}
              >
                <ProductListingCard product={product} />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Mobile-only Nav - Centered below cards */}
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4, display: { xs: 'flex', md: 'none' } }}>
          <IconButton onClick={() => scroll('left')} sx={{ bgcolor: 'white', color: 'black', borderRadius: 0 }}>
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={() => scroll('right')} sx={{ bgcolor: 'white', color: 'black', borderRadius: 0 }}>
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}