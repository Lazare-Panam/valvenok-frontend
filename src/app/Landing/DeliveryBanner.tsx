'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { alpha } from '@mui/material/styles';

const ITEMS = [
  { icon: LocalShippingOutlinedIcon, text: 'Free UK Delivery on Orders Over £150' },
  { icon: InventoryOutlinedIcon,     text: '2–3 Day Dispatch on All Stocked Items' },
  { icon: VerifiedOutlinedIcon,      text: 'JOSCAR Registered Supplier' },
];

const TRACK = [...ITEMS, ...ITEMS, ...ITEMS];

export default function DeliveryBanner() {
  return (
    <Box
      sx={{
        bgcolor: 'text.primary',
        py: '12px',
        overflow: 'hidden',
        position: 'relative',
        borderBottom: '2px solid',
        borderColor: 'primary.main',
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
          background: (t) => `linear-gradient(to right, ${t.palette.text.primary} 20%, transparent 100%)`,
        },
        '&::after': {
          right: 0,
          background: (t) => `linear-gradient(to left, ${t.palette.text.primary} 20%, transparent 100%)`,
        },
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
          animation: 'marquee 25s linear infinite',
          '&:hover': { animationPlayState: 'paused' },
        }}
      >
        {TRACK.map(({ icon: Icon, text }, i) => (
          <Box
            key={i}
            sx={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              mx: 1.5,
              px: 3,
              py: 0.5,
              bgcolor: (t) => alpha(t.palette.common.white, 0.03),
              border: '1px solid',
              borderColor: (t) => alpha(t.palette.common.white, 0.1),
              borderRadius: '4px',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: (t) => alpha(t.palette.common.white, 0.08),
                borderColor: 'primary.main',
              },
            }}
          >
            <Icon sx={{ fontSize: 16, mr: 1, color: 'primary.main' }} />
            <Typography
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: (t) => alpha(t.palette.common.white, 0.9),
              }}
            >
              {text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}