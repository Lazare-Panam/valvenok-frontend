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
  { name: 'Crosby', logo: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776252037/8b4d3f3f-7e9d-4266-a753-5ccf4206d714.png' },
  { name: 'Atam Valves', logo: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776252030/9cb32873-71eb-4bee-a40c-d253a2d1ef5b.png' },
  { name: 'Leser', logo: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776251966/247a1fc2-d1ed-4fa3-859f-451c1d2e2959.png' },
  { name: 'Knuckle Valves', logo: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776251856/e4f2f974-6400-4a0c-9166-484edab335ea.png' },
  { name: 'Bettis', logo: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776251807/09d61023-3bd5-47c3-a85c-8682746457a0.png' },
  { name: 'Anderson Greenwood', logo: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776251732/21571155-0d7a-46b0-b79f-854a7bbedee8.png' },
  { name: 'Cameron', logo: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776251705/eb9a9389-dd35-478e-b4d7-fc7d905ebfcd.png' },
  { name: 'Sealflex', logo: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776071228/18f148ae-5aea-4172-a68f-ebb97f38a621.png' },
  { name: 'Fisher', logo: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776071072/f6b8803c-7833-40b1-9311-228c31e14a92.png' },
  { name: 'Aquatrol', logo: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776070644/23b997aa-777a-4b3a-a817-b5b76d9135c8.png' },
  { name: 'Mercer', logo: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776070145/68b0296b-8db9-4351-8706-b8d6e3a1223c.png' },
  { name: 'Curtis Wright', logo: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776069969/a725d89f-6c4a-41dc-9151-7a5d37ac0c0d.png' },
  { name: 'Baker Hughes', logo: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776069683/f64364c8-1094-47f2-882a-5cedb56a389c.png' },
  { name: 'FHT Valves', logo: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776252496/51f84bd6-aa49-4920-a1ef-9f5957c5f015.png' },
 


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