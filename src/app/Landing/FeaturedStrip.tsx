'use client';

import { useRef, useState } from 'react';
import { Box, Container, Typography, IconButton, Stack, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RelatedProductCard from '@/src/components/RelatedProductCard';
import { PRODUCTS } from '../quick-order/product';

const TRACK_PRODUCTS = [...PRODUCTS].sort(() => 0.5 - Math.random()).slice(0, 25);
const TRACK = [...TRACK_PRODUCTS, ...TRACK_PRODUCTS];
const CARD_WIDTH = 200;
const CARD_GAP = 16;

export default function ProductSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
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
        [direction]: { md: -52, lg: -52 },
        zIndex: 10,
        bgcolor: 'white',
        color: 'black',
        borderRadius: 0,
        width: 40,
        height: 40,
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
        '@keyframes productMarquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        <Box sx={{ textAlign: 'center', mb: 6, color: 'white' }}>
        <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: '0.2em', display: 'block', mb: 1 }}>
          In Stock · UK Held
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 900, fontFamily: 'var(--font-display)', textTransform: 'uppercase', mb: 2 }}>
          Browse Stock Products
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '600px', mx: 'auto', opacity: 0.9 }}>
          All items stocked and dispatched from the UK — short lead times, ready when you need them.
        </Typography>
        <Button
  href="/quick-order"
  variant="outlined"
  sx={{
    mt: 3,
    color: 'white',
    borderColor: 'white',
    borderRadius: 0,
    fontFamily: '"Barlow Condensed", sans-serif',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    px: 4,
    py: 1.25,
    '&:hover': {
      borderColor: 'white',
      bgcolor: 'white',
      color: 'primary.main',
    },
  }}
>
  Explore Our Stock →
</Button>
      </Box>

        <Box sx={{ position: 'relative' }}>
          <NavButton direction="left" onClick={() => scroll('left')} />
          <NavButton direction="right" onClick={() => scroll('right')} />

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
            <Box
              sx={{
                display: 'flex',
                width: 'max-content',
                gap: `${CARD_GAP}px`,
                animation: `productMarquee 80s linear infinite`,
                animationPlayState: paused ? 'paused' : 'running',
              }}
            >
              {TRACK.map((product, i) => (
                <Box
                  key={`${product.sku}-${i}`}
                  sx={{ width: `${CARD_WIDTH}px`, flexShrink: 0 }}
                >
                  <RelatedProductCard product={product} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

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