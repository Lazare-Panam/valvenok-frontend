'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const BRANDS = ['PANAM', 'Parker', 'Swagelok', 'HXQ', 'Camozzi', 'MP Filtri'];

// Duplicate for seamless infinite loop
const TRACK = [...BRANDS, ...BRANDS, ...BRANDS];

export default function Brands() {
  return (
    <Box
      sx={{
        py: 6,
        bgcolor: 'grey.50',
        borderTop: '1px solid',
        borderColor: 'divider',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            textAlign: 'center',
            fontFamily: '"Barlow Condensed", sans-serif',
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'text.secondary',
            mb: 4,
          }}
        >
          Trusted Brands We Supply
        </Typography>
      </Container>

      {/* Marquee track — full bleed, no container */}
      <Box
        sx={{
          position: 'relative',
          // Fade edges
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
            background: 'linear-gradient(to right, #f7faf6 0%, transparent 100%)',
          },
          '&::after': {
            right: 0,
            background: 'linear-gradient(to left, #f7faf6 0%, transparent 100%)',
          },
          // Keyframe
          '@keyframes marquee': {
            '0%':   { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-33.333%)' },
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: 'max-content',
            animation: 'marquee 18s linear infinite',
            '&:hover': { animationPlayState: 'paused' },
          }}
        >
          {TRACK.map((brand, i) => (
            <Box
              key={i}
              sx={{
                flexShrink: 0,
                mx: 1,
                px: 4,
                py: 1.5,
                bgcolor: 'background.paper',
                border: '1.5px solid',
                borderColor: 'divider',
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: '18px',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'text.secondary',
                cursor: 'default',
                transition: 'border-color 0.2s, color 0.2s, box-shadow 0.2s',
                '&:hover': {
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  boxShadow: (theme) =>
                    `0 4px 12px rgba(95,182,77,0.14)`,
                },
              }}
            >
              {brand}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}