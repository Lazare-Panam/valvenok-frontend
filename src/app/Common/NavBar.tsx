'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

// ── Types ─────────────────────────────────────────────────────────────────────

interface Product {
  label: string;
  icon: React.ReactNode;
  href: string;
}

interface Category {
  id: string;
  label: string;
  color: string;
  textColor: string;
  products: Product[];
}

interface NavLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const NAV_LINKS: NavLink[] = [
  { label: 'DICSA',             href: '/dicsa',             icon: <PublicOutlinedIcon sx={{ fontSize: 15 }} /> },
  { label: 'Brands',            href: '/brands',            icon: <StorefrontOutlinedIcon sx={{ fontSize: 15 }} /> },
  { label: 'Power Packs',       href: '/power-packs',       icon: <LockOutlinedIcon sx={{ fontSize: 15 }} /> },
  { label: 'Hose Builder',      href: '/hose-builder',      icon: <BuildOutlinedIcon sx={{ fontSize: 15 }} /> },
  { label: 'Mobile Workshops',  href: '/mobile-workshops',  icon: <DirectionsCarOutlinedIcon sx={{ fontSize: 15 }} /> },
];

const CATEGORIES: Category[] = [
  {
    id: 'hydraulic',
    label: 'Hydraulic',
    color: '#1c6e2e',
    textColor: '#fff',
    products: [
      { label: 'Hose & Fittings',                  icon: <LocalShippingOutlinedIcon />, href: '/hydraulic/hose-fittings' },
      { label: 'Adaptors',                          icon: <SettingsOutlinedIcon />,      href: '/hydraulic/adaptors' },
      { label: 'Quick Release Couplings',           icon: <BuildOutlinedIcon />,         href: '/hydraulic/quick-release' },
      { label: 'Steel Tube & Compression Fittings', icon: <FactoryOutlinedIcon />,       href: '/hydraulic/steel-tube' },
      { label: 'Swaging Machines',                  icon: <SettingsOutlinedIcon />,      href: '/hydraulic/swaging' },
      { label: 'Cylinders',                         icon: <SpeedOutlinedIcon />,         href: '/hydraulic/cylinders' },
      { label: 'Oil Coolers',                       icon: <AirOutlinedIcon />,           href: '/hydraulic/oil-coolers' },
      { label: 'Pumps & Motors',                    icon: <SettingsOutlinedIcon />,      href: '/hydraulic/pumps-motors' },
      { label: 'Power Packs & Accessories',         icon: <LockOutlinedIcon />,          href: '/hydraulic/power-packs' },
      { label: 'Test Equipment',                    icon: <SpeedOutlinedIcon />,         href: '/hydraulic/test-equipment' },
      { label: 'Accumulators',                      icon: <WaterDropOutlinedIcon />,     href: '/hydraulic/accumulators' },
      { label: 'Filtration',                        icon: <ShieldOutlinedIcon />,        href: '/hydraulic/filtration' },
    ],
  },
  {
    id: 'pneumatic',
    label: 'Pneumatic',
    color: '#2e7d32',
    textColor: '#fff',
    products: [
      { label: 'Nylon Tubing',                        icon: <BuildOutlinedIcon />,     href: '/pneumatic/nylon-tubing' },
      { label: 'Camozzi Push Fittings',               icon: <SettingsOutlinedIcon />,  href: '/pneumatic/push-fittings' },
      { label: 'CDC Plastic Push-in Fittings',        icon: <SettingsOutlinedIcon />,  href: '/pneumatic/cdc-fittings' },
      { label: 'Transair',                            icon: <AirOutlinedIcon />,       href: '/pneumatic/transair' },
      { label: 'Pneumatic Cylinders',                 icon: <SpeedOutlinedIcon />,     href: '/pneumatic/cylinders' },
      { label: 'Rotary Cylinders',                    icon: <SettingsOutlinedIcon />,  href: '/pneumatic/rotary-cylinders' },
      { label: 'Pneumatic Valves, Mounts & Accessories', icon: <BuildOutlinedIcon />, href: '/pneumatic/valves' },
      { label: 'Air Reservoirs',                      icon: <WaterDropOutlinedIcon />, href: '/pneumatic/air-reservoirs' },
      { label: 'Soft Start Valves',                   icon: <ShieldOutlinedIcon />,    href: '/pneumatic/soft-start' },
      { label: 'Air Treatment',                       icon: <AirOutlinedIcon />,       href: '/pneumatic/air-treatment' },
    ],
  },
  {
    id: 'industrial',
    label: 'Industrial',
    color: '#388e3c',
    textColor: '#fff',
    products: [
      { label: 'Industrial Hose',               icon: <BuildOutlinedIcon />,     href: '/industrial/hose' },
      { label: 'Air Conditioning Hose',         icon: <AirOutlinedIcon />,       href: '/industrial/ac-hose' },
      { label: 'Stainless Steel Fittings',      icon: <FactoryOutlinedIcon />,   href: '/industrial/stainless' },
      { label: 'Macdonald & Maclock Couplings', icon: <SettingsOutlinedIcon />,  href: '/industrial/couplings' },
      { label: 'Grease Guns & Accessories',     icon: <BuildOutlinedIcon />,     href: '/industrial/grease-guns' },
      { label: 'Industrial Valves',             icon: <ShieldOutlinedIcon />,    href: '/industrial/valves' },
      { label: 'Camlock Fittings',              icon: <SettingsOutlinedIcon />,  href: '/industrial/camlock' },
      { label: 'Electric Motors',               icon: <SpeedOutlinedIcon />,     href: '/industrial/motors' },
      { label: 'Flexible Connectors',           icon: <BuildOutlinedIcon />,     href: '/industrial/flexible' },
      { label: 'Hose Reels',                    icon: <LocalShippingOutlinedIcon />, href: '/industrial/hose-reels' },
    ],
  },
  {
    id: 'seals',
    label: 'Seals',
    color: '#43a047',
    textColor: '#fff',
    products: [
      { label: 'O-Rings',           icon: <ShieldOutlinedIcon />,   href: '/seals/o-rings' },
      { label: 'Hydraulic Seals',   icon: <WaterDropOutlinedIcon />, href: '/seals/hydraulic' },
      { label: 'Mechanical Seals',  icon: <SettingsOutlinedIcon />,  href: '/seals/mechanical' },
      { label: 'Rotary Seals',      icon: <SpeedOutlinedIcon />,     href: '/seals/rotary' },
      { label: 'Gaskets',           icon: <ShieldOutlinedIcon />,    href: '/seals/gaskets' },
    ],
  },
  {
    id: 'instrumentation',
    label: 'Instrumentation',
    color: '#4caf50',
    textColor: '#fff',
    products: [
      { label: 'Pressure Gauges',      icon: <SpeedOutlinedIcon />,    href: '/instrumentation/gauges' },
      { label: 'Transmitters',         icon: <SettingsOutlinedIcon />, href: '/instrumentation/transmitters' },
      { label: 'Flow Meters',          icon: <WaterDropOutlinedIcon />, href: '/instrumentation/flow-meters' },
      { label: 'Temperature Sensors',  icon: <SpeedOutlinedIcon />,    href: '/instrumentation/temp-sensors' },
      { label: 'Pressure Switches',    icon: <ShieldOutlinedIcon />,   href: '/instrumentation/pressure-switches' },
    ],
  },
  {
    id: 'ancillary',
    label: 'Ancillary',
    color: '#1c2e1a',
    textColor: '#fff',
    products: [
      { label: 'Adhesives & Sealants',   icon: <BuildOutlinedIcon />,     href: '/ancillary/adhesives' },
      { label: 'Spill Kits',             icon: <ShieldOutlinedIcon />,    href: '/ancillary/spill-kits' },
      { label: 'Flexible Connectors',    icon: <SettingsOutlinedIcon />,  href: '/ancillary/flexible' },
      { label: 'Wash Down Equipment',    icon: <WaterDropOutlinedIcon />, href: '/ancillary/wash-down' },
      { label: 'Ring Main Systems',      icon: <FactoryOutlinedIcon />,   href: '/ancillary/ring-main' },
    ],
  },
];

// ── Navbar ────────────────────────────────────────────────────────────────────

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState<string>('hydraulic');
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close on outside click
  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const activeProducts =
    CATEGORIES.find((c) => c.id === activeCategory)?.products ?? [];

  return (
    <Box ref={dropdownRef} sx={{ position: 'relative', zIndex: 200 }}>

      {/* ── Top bar ── */}
      <Box
        sx={{
          bgcolor: 'text.primary',       // #1c2e1a — deep forest green
          borderBottom: '1px solid',
          borderColor: alpha(theme.palette.primary.main, 0.25),
        }}
      >
        <Container maxWidth="xl" disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center', height: 64 }}>

            {/* Shop All Products */}
            <Box
              component="button"
              onClick={() => setOpen((v) => !v)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                height: 64,
                px: 2.5,
                border: 'none',
                bgcolor: 'primary.main',
                color: '#fff',
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: '13px',
                fontWeight: 800,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'background 0.15s',
                '&:hover': { bgcolor: 'primary.dark' },
              }}
            >
              <StorefrontOutlinedIcon sx={{ fontSize: 16 }} />
              Shop All Products
              <KeyboardArrowDownIcon
                sx={{
                  fontSize: 18,
                  transition: 'transform 0.2s',
                  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </Box>

            {/* Other nav links */}
            {NAV_LINKS.map((link) => (
              <Box
                key={link.label}
                component="a"
                href={link.href}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.75,
                  height: 64,
                  px: 2,
                  color: alpha('#fff', 0.85),
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'color 0.15s, background 0.15s',
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: alpha('#fff', 0.06),
                  },
                }}
              >
                {link.icon}
                {link.label}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Mega dropdown ── */}
      {open && (
        <Box
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            display: 'flex',
            bgcolor: 'background.paper',
            borderTop: '3px solid',
            borderColor: 'primary.main',
            boxShadow: `0 12px 40px ${alpha(theme.palette.text.primary, 0.18)}`,
            zIndex: 300,
            maxHeight: '70vh',
            overflow: 'hidden',
          }}
        >
          {/* Sidebar */}
          <Box sx={{ width: 220, flexShrink: 0, borderRight: '1px solid', borderColor: 'divider' }}>
            {CATEGORIES.map((cat) => (
              <Box
                key={cat.id}
                onMouseEnter={() => setActiveCategory(cat.id)}
                onClick={() => setActiveCategory(cat.id)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px: 2.5,
                  py: 1.5,
                  cursor: 'pointer',
                  bgcolor: activeCategory === cat.id ? cat.color : cat.color,
                  opacity: activeCategory === cat.id ? 1 : 0.82,
                  transition: 'opacity 0.15s',
                  '&:hover': { opacity: 1 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: '13px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: cat.textColor,
                  }}
                >
                  {cat.label}
                </Typography>
                <KeyboardArrowRightIcon sx={{ fontSize: 16, color: alpha(cat.textColor, 0.7) }} />
              </Box>
            ))}
          </Box>

          {/* Product grid */}
          <Box sx={{ flex: 1, p: 3, overflowY: 'auto' }}>
            <Typography
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'text.secondary',
                mb: 2.5,
              }}
            >
              {CATEGORIES.find((c) => c.id === activeCategory)?.label} Products
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                gap: 1.5,
              }}
            >
              {activeProducts.map((product) => (
                <Box
                  key={product.label}
                  component="a"
                  href={product.href}
                  onClick={() => setOpen(false)}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 2,
                    border: '1.5px solid',
                    borderColor: 'divider',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'border-color 0.15s, box-shadow 0.15s',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.14)}`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 1,
                      '& svg': { fontSize: 28 },
                    }}
                  >
                    {product.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: 'text.primary',
                      textAlign: 'center',
                      lineHeight: 1.3,
                    }}
                  >
                    {product.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}