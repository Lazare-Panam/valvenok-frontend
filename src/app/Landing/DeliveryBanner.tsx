'use client';
//
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import { alpha } from '@mui/material/styles';

const ITEMS = [
  { icon: LocalShippingOutlinedIcon, text: 'Free UK Delivery on Orders Over £150' },
  { icon: InventoryOutlinedIcon,     text: '2–3 Day Dispatch on All Stocked Items' },
  { icon: VerifiedOutlinedIcon,      text: 'JOSCAR Registered Supplier' },
  { icon: AccountBalanceOutlinedIcon, text: 'Trade Credit Accounts Available' },
];

const TRACK = [...ITEMS, ...ITEMS, ...ITEMS];

export default function DeliveryBanner() {
  return (
    <Box
      sx={{
        bgcolor: '#f0fdf4',
        py: '12px',
        overflow: 'hidden',
        position: 'relative',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: (t) => alpha(t.palette.primary.main, 0.2),
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
          background: 'linear-gradient(to right, #f0fdf4 20%, transparent 100%)',
        },
        '&::after': {
          right: 0,
          background: 'linear-gradient(to left, #f0fdf4 20%, transparent 100%)',
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
              bgcolor: (t) => alpha(t.palette.primary.main, 0.06),
              border: '1px solid',
              borderColor: (t) => alpha(t.palette.primary.main, 0.15),
              borderRadius: '4px',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: (t) => alpha(t.palette.primary.main, 0.12),
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
                color: 'text.primary',
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