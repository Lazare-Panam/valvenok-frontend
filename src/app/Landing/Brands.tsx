'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { keyframes } from '@mui/system';

const marqueFwd = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const BRANDS = [
  { name: 'PANAM Valves', logo: 'https://pblol2.blob.core.windows.net/panam-images/panam-resize_smallest.jpg', link: 'https://www.panamvalve.com/' },
  { name: 'Cameron', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/cameron-logo.png', link: '#' },
  { name: 'Baker Hughes', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/baker-hughes-logo.png', link: 'https://www.bakerhughes.com/' },
  { name: 'Taylor Valve', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/taylor-valve-logo.png', link: 'https://taylorvalve.com/' },
  { name: 'Leser', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/LESER-logo.png', link: 'https://www.leser.com/en/products/' },
  { name: 'Mercer Valves', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/mercer-logo.jpg', link: 'https://www.mercervalve.net/' },
  { name: 'Aquatrol', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/aquatrol-logo.png', link: 'https://www.aquatrol.com/index.htm' },
  { name: 'Fisher', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/fisher-logo.jpg', link: 'https://www.fisher-valves.co.uk/index.shtml' },
  { name: 'Batu Valves', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/batu-logo.png', link: 'https://www.batuvalve.com/' },
  { name: 'Spac Pneumatic', logo: 'https://pblol2.blob.core.windows.net/spac-images/spac-logo.webp', link: 'https://spacpneumatic.co.uk/' },
  { name: 'Tormac', logo: 'https://tormacpumps.com/wp-content/uploads/2025/06/tormac_logo.svg', link: 'https://tormacpumps.com/' },
  { name: 'Siemens', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/siemens-logo.png', link: '#' },
  { name: 'Endress Hauser', logo: 'https://www.uk.endress.com/images/logo/EH_Logo-d9672165.svg', link: '#' },
  { name: 'Steed Hydraulic', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/steed-logo.png', link: '#' },
  { name: 'FHT Valves', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/fht-valves-logo.png', link: '#' },
  { name: 'Hydroseal', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/hydroseal-logo.png', link: '#' },
  { name: 'Crosby', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/crosby_logo.png', link: '#' },
  { name: 'Knuckle Valves', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/knuckle-valve-logo.png', link: '#' },
  { name: 'Bettis', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/bettis-logo.png', link: '#' },
  { name: 'Anderson Greenwood', logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/anderson-greewood-logo.jpg', link: '#' },
];

interface MarqueeRowProps {
  brands: { name: string; logo: string; link: string }[];
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
          background: 'linear-gradient(to right, #f7faf6 0%, transparent 100%)',
        },
        '&::after': {
          right: 0,
          background: 'linear-gradient(to left, #f7faf6 0%, transparent 100%)',
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
              component="a"
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
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
                textDecoration: 'none',
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
        py: 6,
        bgcolor: 'grey.50',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
          <Box sx={{ flex: 1, height: '1px', bgcolor: 'divider' }} />
          <Typography
            sx={{
              textAlign: 'center',
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: '22px',
              fontWeight: 800,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'text.primary',
              whiteSpace: 'nowrap',
            }}
          >
            Trusted Brands We Supply
          </Typography>
          <Box sx={{ flex: 1, height: '1px', bgcolor: 'divider' }} />
        </Box>
      </Container>

      <MarqueeRow brands={BRANDS} speed={60} />
    </Box>
  );
}