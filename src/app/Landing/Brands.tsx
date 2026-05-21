'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { keyframes } from '@mui/system';

const marqueFwd = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const marqueRev = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0%); }
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

const chunk = (arr: { name: string; logo: string; link: string }[], n: number) => {
  const size = Math.ceil(arr.length / n);
  return Array.from({ length: n }, (_, i) => arr.slice(i * size, i * size + size));
};

const ROWS = chunk(BRANDS, 4);

interface MarqueeRowProps {
  brands: { name: string; logo: string; link: string }[];
  reverse?: boolean;
  speed?: number;
}

const MarqueeRow = ({ brands, reverse = false, speed = 25 }: MarqueeRowProps) => {
  const track = [...brands, ...brands, ...brands, ...brands];

  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',
        mb: 1.5,
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '100px',
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
          animation: `${reverse ? marqueRev : marqueFwd} ${speed}s linear infinite`,
          '&:hover': { animationPlayState: 'paused' },
        }}
      >
        {track.map((brand, i) => (
          <Box
            key={i}
            component="a"
            href={brand.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              flexShrink: 0,
              mx: 1,
              px: 2.5,
              py: 1.5,
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
                height: '40px',
                width: 'auto',
                maxWidth: '120px',
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
        <Typography
          sx={{
            textAlign: 'center',
            fontFamily: '"Barlow Condensed", sans-serif',
            fontSize: '22px',
            fontWeight: 800,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'text.primary',
            mb: 4,
          }}
        >
          Trusted Brands We Supply
        </Typography>
      </Container>

      <MarqueeRow brands={ROWS[0]} reverse={false} speed={28} />
      <MarqueeRow brands={ROWS[1]} reverse={true}  speed={32} />
      <MarqueeRow brands={ROWS[2]} reverse={false} speed={26} />
      <MarqueeRow brands={ROWS[3]} reverse={true}  speed={30} />
    </Box>
  );
}