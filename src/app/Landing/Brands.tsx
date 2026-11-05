'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { keyframes } from '@mui/system';
import Reveal from '@/src/app/Common/Reveal';

const marqueFwd = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export const BRANDS = [
  { name: 'PANAM Valves', logo: 'https://pblol2.blob.core.windows.net/panam-images/panam-resize_smallest.jpg' },
  { name: 'Cameron', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/cameron-logo.png' },
  { name: 'Baker Hughes', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/baker-hughes-logo.png' },
  { name: 'Taylor Valve', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/taylor-valve-logo.png' },
  { name: 'Leser', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/LESER-logo.png' },
  { name: 'Mercer Valves', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/mercer-logo.jpg' },
  { name: 'Aquatrol', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/aquatrol-logo.png' },
  { name: 'Fisher', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/fisher-logo.jpg' },
  { name: 'Batu Valves', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/batu-logo.png' },
  { name: 'Spac Pneumatic', logo: 'https://pblol2.blob.core.windows.net/spac-images/spac-logo.webp' },
  { name: 'Adaptix', logo: '/brands-temp/adaptix-logo.png' },
  { name: 'Tormac', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/tormac.svg' },
  { name: 'Siemens', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/siemens-logo.png' },
  { name: 'Endress Hauser', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/endress-hauser.svg' },
  { name: 'FHT Valves', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/fht-valves-logo.png' },
  { name: 'Hydroseal', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/hydroseal-logo.png' },
  { name: 'Crosby', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/crosby_logo.png' },
  { name: 'Knuckle Valves', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/knuckle-valve-logo.png' },
  { name: 'Bettis', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/bettis-logo.png' },
  { name: 'Anderson Greenwood', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/anderson-greewood-logo.jpg' },
  { name: 'Mars Valves', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/mars.png' },
];

interface MarqueeRowProps {
  brands: { name: string; logo: string }[];
  speed?: number;
}

const MarqueeRow = ({ brands, speed = 60 }: MarqueeRowProps) => {
  const track = [...brands, ...brands];

  return (
    <Box
      sx={{
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
          background: 'linear-gradient(to right, #ffffff 0%, transparent 100%)',
        },
        '&::after': {
          right: 0,
          background: 'linear-gradient(to left, #ffffff 0%, transparent 100%)',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: 'max-content',
          animation: `${marqueFwd} ${speed}s linear infinite`,
          '&:hover': { animationPlayState: 'paused' },
        }}
      >
        {track.map((brand, i) => (
          <Tooltip
            key={i}
            title={brand.name}
            placement="top"
            arrow
            slotProps={{
              tooltip: {
                sx: {
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                },
              },
            }}
          >
            <Box
              sx={{
                flexShrink: 0,
                mx: 2,
                px: 7,
                py: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.paper',
                border: '1.5px solid',
                borderColor: 'divider',
                cursor: 'default',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  borderColor: 'primary.main',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                },
              }}
            >
              <Box
                component="img"
                src={brand.logo}
                alt={`${brand.name} logo`}
                sx={{
                  height: '160px',
                  width: 'auto',
                  maxWidth: '400px',
                  objectFit: 'contain',
                  opacity: 1,
                  filter: 'grayscale(0%)',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
            </Box>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};

export default function Brands() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 9 },
        bgcolor: '#fff',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Reveal>
        <Typography
          sx={{
            textAlign: 'center',
            fontFamily: 'var(--font-geist-sans), Inter, system-ui, sans-serif',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#7A877F',
            mb: 4,
          }}
        >
          Trusted brands we supply
        </Typography>
        </Reveal>
      </Container>

      <MarqueeRow brands={BRANDS} speed={60} />
    </Box>
  );
}