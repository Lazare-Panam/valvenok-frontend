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
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir === 'right' ? 360 : -360, behavior: 'smooth' });
  };

  return (
    <Box component="section" sx={{ py: { xs: 5, md: 8 }, bgcolor: 'grey.50' }}>
      <Container maxWidth="xl">
        {/* Header row */}
        <Box sx={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between',
          mb: 4,
        }}>
          <Box>
            <Typography sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: 11, fontWeight: 700,
              letterSpacing: '.2em', textTransform: 'uppercase',
              color: 'text.secondary', display: 'block', mb: 0.5,
            }}>
              Premium Selection ——
            </Typography>
            <Typography sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 900, fontSize: { xs: 40, md: 56 },
              lineHeight: 0.88, textTransform: 'uppercase', color: 'text.primary',
            }}>
              Featured<br />Valves
            </Typography>
          </Box>

          <Box sx={{ display: 'flex' }}>
            <IconButton
              onClick={() => scroll('left')}
              sx={{
                width: 48, height: 48, borderRadius: 0,
                border: '1px solid', borderColor: 'divider',
                color: 'text.primary',
                '&:hover': { bgcolor: '#61D649', borderColor: '#61D649', color: '#000' },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              onClick={() => scroll('right')}
              sx={{
                width: 48, height: 48, borderRadius: 0,
                border: '1px solid', borderColor: 'divider', borderLeft: 'none',
                color: 'text.primary',
                '&:hover': { bgcolor: '#61D649', borderColor: '#61D649', color: '#000' },
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>

      {/*
        Two-layer scroll fix:
        - Outer: overflow-y: visible so scaled cards aren't clipped vertically
        - Inner: overflow-x: auto handles the actual scroll
        Browser won't let you do both on one element.
      */}
      <Box sx={{
        overflowY: 'visible',
        py: 4,                    // vertical room for the scale effect
      }}>
        <Box
          ref={trackRef}
          sx={{
            display: 'flex',
            gap: 2,
            overflowX: 'visible',
            overflowY: 'visible',
            scrollSnapType: 'x mandatory',
            px: { xs: 2, md: '80px' },
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
            '& > *': { scrollSnapAlign: 'start' },
          }}
        >
          {VALVES.map(valve => (
            <FeaturedValveCard key={valve.id} valve={valve} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}