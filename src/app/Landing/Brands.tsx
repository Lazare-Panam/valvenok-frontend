'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// 1. Updated Data Structure
const BRANDS = [
  { name: 'PANAM', logo: "https://pblol2.blob.core.windows.net/panam-images/panam-resize_smallest.jpg", link: 'https://www.panamvalve.com/' },
  { name: 'Batu', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/batu-logo.png', link: 'https://www.batuvalve.com/' },
  { name: 'Spac', logo: 'https://pblol2.blob.core.windows.net/spac-images/spac-logo.webp', link: 'https://spacpneumatic.co.uk/' },
  { name: 'Tormac', logo: 'https://tormacpumps.com/wp-content/uploads/2025/06/tormac_logo.svg', link: 'https://tormacpumps.com/' },
  // { name: 'Emerson', logo: 'https://www.emerson.com/resource/blob/emerson-logo-compressed--data-5970556.png' },
  { name: 'Siemens', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/siemens-logo.png'},
  { name: 'Crosby', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/crosby_logo.png' },
  { name: 'Atam Valves', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/atamvalves_logo.jpg' },
  { name: 'Leser', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/LESER-logo.png' },
  { name: 'Knuckle Valves', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/knuckle-valve-logo.png' },
  { name: 'Bettis', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/bettis-logo.png' },
  { name: 'Anderson Greenwood', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/anderson-greewood-logo.jpg' },
  { name: 'Cameron', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/cameron-logo.png' },
  //{ name: 'Sealflex', logo: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776071228/18f148ae-5aea-4172-a68f-ebb97f38a621.png' },
  { name: 'Fisher', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/cameron-logo.png' },
  { name: 'Aquatrol', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/aquatrol-logo.png' },
  { name: 'Mercer', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/mercer-logo.jpg' },
  { name: 'Curtis Wright', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/curtis-wright-logo.jpg' },
  { name: 'Baker Hughes', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/baker-hughes-logo.png' },
  { name: 'FHT Valves', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/fht-valves-logo.png' },

];

const TRACK = [...BRANDS, ...BRANDS, ...BRANDS];

export default function Brands() {
  return (
    <Box
      sx={{
        py: 6,
        bgcolor: 'grey.50',
        borderTop: '1px solid',
        borderBottom: '1px solid',
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

      <Box
        sx={{
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
            background: 'linear-gradient(to right, #f7faf6 0%, transparent 100%)',
          },
          '&::after': {
            right: 0,
            background: 'linear-gradient(to left, #f7faf6 0%, transparent 100%)',
          },
          '@keyframes marquee': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-33.333%)' },
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: 'max-content',
            animation: 'marquee 25s linear infinite', // Slowed down slightly for readability
            '&:hover': { animationPlayState: 'paused' },
          }}
        >
          {TRACK.map((brand, i) => (
            <Box
              key={i}
              component="a" // 2. Makes the whole box a link
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                flexShrink: 0,
                mx: 1.5,
                px: 3,
                py: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.paper',
                border: '1.5px solid',
                borderColor: 'divider',
                textDecoration: 'none', // Remove link underline
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  borderColor: 'primary.main',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                },
              }}
            >
              {/* 3. The Logo Image */}
              <Box
                component="img"
                src={brand.logo}
                alt={`${brand.name} logo`}
                sx={{
                  height: '50px', // Fixed height for consistency
                  width: 'auto',
                  maxWidth: '140px',
                  objectFit: 'contain',
                  opacity: 0.7,
                  transition: 'all 0.3s',
                  '&:hover': {
                    filter: 'grayscale(0%)',
                    opacity: 1,
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}