'use client';

import { useRef, useState } from 'react';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ProductListingCard from '../categories/[categoryId]/ProductListingCard';
import { FEATURED_PRODUCTS } from './FeaturedProducts';

const TRACK = [...FEATURED_PRODUCTS, ...FEATURED_PRODUCTS];
const CARD_WIDTH = 320;
const CARD_GAP = 24; // gap: 3 = 24px

export default function FeaturedStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    // Pause animation while user is manually navigating
    setPaused(true);
    setTimeout(() => setPaused(false), 3000);
    el.scrollBy({
      left: direction === 'left' ? -(CARD_WIDTH + CARD_GAP) * 2 : (CARD_WIDTH + CARD_GAP) * 2,
      behavior: 'smooth',
    });
  };

  const NavButton = ({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        [direction]: { md: -64, lg: -64 },
        zIndex: 10,
        bgcolor: 'white',
        color: 'black',
        borderRadius: 0,
        width: 48,
        height: 48,
        boxShadow: 3,
        display: { xs: 'none', md: 'flex' },
        '&:hover': { bgcolor: 'grey.200', transform: 'translateY(-50%) scale(1.1)' },
        transition: 'all 0.2s',
      }}
    >
      {direction === 'left' ? <ArrowBackIosNewIcon fontSize="small" /> : <ArrowForwardIosIcon fontSize="small" />}
    </IconButton>
  );

  return (
    <Box
      component="section"
      sx={{
        bgcolor: 'primary.main',
        py: { xs: 8, md: 10 },
        overflow: 'hidden',
        position: 'relative',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '120px',
          zIndex: 2,
          pointerEvents: 'none',
        },
        '&::before': {
          left: 0,
          background: (t) => `linear-gradient(to right, ${t.palette.primary.main} 20%, transparent 100%)`,
        },
        '&::after': {
          right: 0,
          background: (t) => `linear-gradient(to left, ${t.palette.primary.main} 20%, transparent 100%)`,
        },
        '@keyframes featuredMarquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        {/* Header */}
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

        <Box sx={{ position: 'relative' }}>
          <NavButton direction="left" onClick={() => scroll('left')} />
          <NavButton direction="right" onClick={() => scroll('right')} />

          {/* Scroll container — buttons operate on this */}
          <Box
            ref={scrollRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            sx={{
              overflowX: 'auto',
              '&::-webkit-scrollbar': { display: 'none' },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {/* Animated track lives inside */}
            <Box
              sx={{
                display: 'flex',
                width: 'max-content',
                gap: `${CARD_GAP}px`,
                animation: `featuredMarquee 30s linear infinite`,
                animationPlayState: paused ? 'paused' : 'running',
              }}
            >
              {TRACK.map((product, i) => (
                <Box
                  key={`${product.id}-${i}`}
                  sx={{
                    width: `${CARD_WIDTH}px`,
                    flexShrink: 0,
                    '& .MuiCard-root': { height: '100%', display: 'flex', flexDirection: 'column' },
                    '& img': { maxHeight: '140px !important' },
                  }}
                >
                  <ProductListingCard product={product} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Mobile nav */}
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