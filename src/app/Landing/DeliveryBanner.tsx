'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

const BASE_GREEN = '#61D649';
const DARK_NAVY = '#686a6d'; // New complementary color

const ITEMS = [
  { icon: <LocalShippingOutlinedIcon sx={{ fontSize: 16, mr: 1, color: BASE_GREEN }} />, text: 'Free UK Delivery on Orders Over £150' },
  { icon: <InventoryOutlinedIcon sx={{ fontSize: 16, mr: 1, color: BASE_GREEN }} />, text: '2–3 Day Dispatch on All Stocked Items' },
  { icon: <VerifiedOutlinedIcon sx={{ fontSize: 16, mr: 1, color: BASE_GREEN }} />, text: 'JOSCAR Registered Supplier' },
];

const TRACK = [...ITEMS, ...ITEMS, ...ITEMS];

export default function DeliveryBanner() {
  return (
    <Box
      sx={{
        bgcolor: DARK_NAVY, // Using the new Navy for contrast
        py: '12px',
        overflow: 'hidden',
        position: 'relative',
        borderBottom: `2px solid ${BASE_GREEN}`,
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
          background: `linear-gradient(to right, ${DARK_NAVY} 20%, transparent 100%)`,
        },
        '&::after': {
          right: 0,
          background: `linear-gradient(to left, ${DARK_NAVY} 20%, transparent 100%)`,
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
        {TRACK.map((item, i) => (
          <Box
            key={i}
            sx={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              mx: 1.5,
              px: 3,
              py: 0.5,
              bgcolor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '4px', // Slightly rounded for a modern feel
              color: '#fff',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.08)',
                borderColor: BASE_GREEN,
              },
            }}
          >
            {item.icon}
            <Typography
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#FFFFFF',
              }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}