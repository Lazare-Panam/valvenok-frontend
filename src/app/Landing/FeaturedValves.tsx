'use client';

import { useRef } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FeaturedValveCard from './FeaturedValvesCard';
import { VALVES } from './FeaturedValvesData';

export default function FeaturedValves() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    // Scroll by ~80% of visible width — feels right on any screen size
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
  };

  return (
    <Box component="section" sx={{ py: { xs: 5, md: 8 }, bgcolor: 'grey.50' }}>
      <Container maxWidth="xl">
        {/* Header row */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            mb: { xs: 3, md: 4 },
            gap: 2,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: 'text.secondary',
                display: 'block',
                mb: 0.5,
              }}
            >
              Premium Selection ——
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 900,
                fontSize: { xs: 32, sm: 40, md: 56 },
                lineHeight: 0.88,
                textTransform: 'uppercase',
                color: 'text.primary',
              }}
            >
              Featured
              <br />
              Valves
            </Typography>
          </Box>

          {/* Arrows — hidden on mobile (touch-swipe is the gesture) */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexShrink: 0 }}>
            <IconButton
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              sx={{
                width: { sm: 40, md: 48 },
                height: { sm: 40, md: 48 },
                borderRadius: 0,
                border: '1px solid',
                borderColor: 'divider',
                color: 'text.primary',
                '&:hover': { bgcolor: '#61D649', borderColor: '#61D649', color: '#000' },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              sx={{
                width: { sm: 40, md: 48 },
                height: { sm: 40, md: 48 },
                borderRadius: 0,
                border: '1px solid',
                borderColor: 'divider',
                borderLeft: 'none',
                color: 'text.primary',
                '&:hover': { bgcolor: '#61D649', borderColor: '#61D649', color: '#000' },
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>

      {/* Scrollable track — single layer, padding gives scaled cards room */}
      <Box
        ref={trackRef}
        sx={{
          display: 'flex',
          gap: 2,
          overflowX: 'auto',
          overflowY: 'visible',
          scrollSnapType: 'x mandatory',
          // Vertical padding = space for hover/scale effects
          // Horizontal padding = first/last cards align with Container edges
          py: 4,
          px: { xs: 2, sm: 4, md: '80px' },
          // Hide scrollbar cross-browser
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '& > *': { scrollSnapAlign: 'start', flexShrink: 0 },
        }}
      >
        {VALVES.map((valve) => (
          <FeaturedValveCard key={valve.id} valve={valve} />
        ))}
      </Box>
    </Box>
  );
}