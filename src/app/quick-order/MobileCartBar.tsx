'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import { useCartStore } from '../cart/hooks/useCartStore';

export default function MobileCartBar() {
  const { items, getTotalItems } = useCartStore();
  if (items.length === 0) return null;

  const totalValue = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <Box
      sx={{
        display: { xs: 'flex', lg: 'none' },
        position: 'fixed',
        bottom: 0, left: 0, right: 0,
        p: 2,
        bgcolor: 'text.primary',
        borderTop: '2px solid',
        borderColor: 'primary.main',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        zIndex: 100,
      }}
    >
      <Box>
        <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: (t) => alpha(t.palette.common.white, 0.7) }}>
          {`${items.length} SKU · ${getTotalItems()} pcs`}
        </Typography>
        <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '12px', fontWeight: 900, color: 'primary.main' }}>
          {`£${totalValue.toFixed(2)} ex VAT`}
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        href="/checkout"
        sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 800, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', px: 3, py: 1.25, boxShadow: 'none', borderRadius: '3px', '&:hover': { boxShadow: 'none' } }}
      >
        Checkout
      </Button>
    </Box>
  );
}