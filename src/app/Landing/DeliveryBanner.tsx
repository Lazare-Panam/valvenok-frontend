'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

const ITEMS = [
  { icon: <LocalShippingOutlinedIcon sx={{ fontSize: 15, mr: 0.75 }} />, text: 'Free UK Delivery on Orders Over £150' },
  { icon: <InventoryOutlinedIcon sx={{ fontSize: 15, mr: 0.75 }} />, text: '2–3 Day Dispatch on All Stocked Items' },
  { icon: <VerifiedOutlinedIcon sx={{ fontSize: 15, mr: 0.75 }} />, text: 'JOSCAR Registered Supplier' },
];

const TRACK = [...ITEMS, ...ITEMS, ...ITEMS];

export default function DeliveryBanner() {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        py: '10px',
        overflow: 'hidden',
        position: 'relative',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '80px',
          zIndex: 2,
          pointerEvents: 'none',
        },
        '&::before': {
          left: 0,
          background: 'linear-gradient(to right, rgba(95,182,77,1) 0%, transparent 100%)',
        },
        '&::after': {
          right: 0,
          background: 'linear-gradient(to left, rgba(95,182,77,1) 0%, transparent 100%)',
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
          animation: 'marquee 22s linear infinite',
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
              mx: 1,
              px: 3,
              py: 0.75,
              bgcolor: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: '#fff',
              cursor: 'default',
              transition: 'bgcolor 0.2s, border-color 0.2s',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.2)',
                borderColor: 'rgba(255,255,255,0.5)',
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
                letterSpacing: '0.08em',
                color: '#fff',
                lineHeight: 1,
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