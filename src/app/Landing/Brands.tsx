'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// 1. Updated Data Structure
const BRANDS = [
  { name: 'PANAM', logo: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769097040/1_jdvwbk.png", link: 'https://www.panamvalve.com/' },
  { name: 'Batu', logo: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1774530741/logo_i2lhxi.png', link: 'https://www.batuvalve.com/' },
  { name: 'Spac', logo: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1774530706/SPAC-Without-Baseline-Logo-1-2_ii1dai_wsutjm.webp', link: 'https://spacpneumatic.co.uk/' },
  { name: 'Tormac', logo: 'https://tormacpumps.com/wp-content/uploads/2025/06/tormac_logo.svg', link: 'https://tormacpumps.com/' },
  { name: 'Emerson', logo: 'https://www.emerson.com/resource/blob/emerson-logo-compressed--data-5970556.png' },
  { name: 'Siemens', logo: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1774531009/download_1_lwfn54.png'},
  { name: 'Endress Hausser', logo: 'https://www.uk.endress.com/images/logo/EH_Logo-d9672165.svg' },
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