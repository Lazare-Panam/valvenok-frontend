'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';

import BuildIcon from '@mui/icons-material/Build';
import AirIcon from '@mui/icons-material/Air';
import ScienceIcon from '@mui/icons-material/Science';
import SettingsIcon from '@mui/icons-material/Settings';
import WaterIcon from '@mui/icons-material/Water';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import SearchIcon from '@mui/icons-material/Search';

const CATEGORIES = [
  {
    href: '/collections/fittings-tubings',
    Icon: BuildIcon,
    name: 'Fittings & Tubings',
    desc: 'Precision compression & instrumentation',
  },
  {
    href: '/collections/pneumatics',
    Icon: AirIcon,
    name: 'Pneumatic Systems',
    desc: 'Cylinders, valves & airline equipment',
  },
  {
    href: '/collections/hydrogen-application',
    Icon: ScienceIcon,
    name: 'Hydrogen Application',
    desc: 'H2-ready valves, tubing & regulators',
  },
  {
    href: '/collections/batu-valve',
    Icon: SettingsIcon,
    name: 'Batu Valves',
    desc: 'High-temp & steam rated valves',
  },
  {
    href: '/collections/tormac-pumps',
    Icon: WaterIcon,
    name: 'Tormac Pumps',
    desc: 'Industrial & agricultural pumping',
  },
  {
    href: '/collections/manifolds',
    Icon: AccountTreeIcon,
    name: 'Manifolds',
    desc: 'Instrument & distribution blocks',
  },
  {
    href: '/collections/pipe-fittings',
    Icon: PlumbingIcon,
    name: 'Pipe & Weld Fittings',
    desc: 'NPT, BSP & socket weld components',
  },
  {
    href: '/collections',
    Icon: SearchIcon,
    name: 'Browse All Products',
    desc: '5,000+ industrial components',
  },
];

export default function Categories() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">

        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'primary.main',
              mb: 1,
            }}
          >
            Browse by Category
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: { xs: '2.4rem', md: '3.5rem' },
              fontWeight: 900,
              textTransform: 'uppercase',
              color: 'text.primary',
              letterSpacing: '0.02em',
              lineHeight: 1.08,
            }}
          >
            What Are You Looking For?
          </Typography>
        </Box>

        {/* Category Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: '14px',
          }}
        >
          {CATEGORIES.map((cat) => (
            <Box
              key={cat.href}
              component="a"
              href={cat.href}
              sx={{
                bgcolor: 'background.paper',
                border: '1.5px solid',
                borderColor: 'divider',
                borderRadius: '6px',
                p: '24px 20px',
                textDecoration: 'none',
                color: 'text.primary',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '10px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.15s',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0,
                  height: '3px',
                  bgcolor: 'primary.main',
                  transform: 'scaleX(0)',
                  transition: 'transform 0.25s',
                  transformOrigin: 'left',
                },
                '&:hover': {
                  borderColor: 'primary.main',
                  boxShadow: (theme) => `0 6px 24px ${alpha(theme.palette.primary.main, 0.14)}`,
                  transform: 'translateY(-2px)',
                  '&::after': { transform: 'scaleX(1)' },
                  '& .cat-icon-box': {
                    bgcolor: 'primary.main',
                    '& svg': { color: '#fff' },
                  },
                  '& .cat-arrow': { transform: 'translateX(4px)' },
                },
              }}
            >
              {/* Icon */}
              <Box
                className="cat-icon-box"
                sx={{
                  width: 48, height: 48,
                  bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'background 0.2s',
                }}
              >
                <cat.Icon sx={{ fontSize: 22, color: 'primary.main', transition: 'color 0.2s' }} />
              </Box>

              {/* Name */}
              <Typography
                sx={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: 'text.primary',
                  lineHeight: 1.2,
                }}
              >
                {cat.name}
              </Typography>

              {/* Description */}
              <Typography sx={{ fontSize: '13px', color: 'text.secondary', lineHeight: 1.5 }}>
                {cat.desc}
              </Typography>

              {/* Arrow */}
              <Typography
                className="cat-arrow"
                sx={{
                  mt: 'auto',
                  color: 'primary.main',
                  fontSize: '22px',
                  fontWeight: 900,
                  lineHeight: 1,
                  transition: 'transform 0.2s',
                }}
              >
                →
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}