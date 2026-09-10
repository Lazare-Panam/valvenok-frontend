'use client';

import React, { useEffect } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/src/app/cart/hooks/useCartStore';

export default function GuestCheckoutSuccessPage() {
  const router = useRouter();
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 8, mb: 8, px: 2 }}>
      <Paper
        elevation={0}
        sx={{ p: 6, border: '1.5px solid', borderColor: 'success.light', borderRadius: 0, textAlign: 'center' }}
      >
        <CheckCircleOutlineIcon sx={{ fontSize: 64, color: 'success.main', mb: 2 }} />

        <Typography variant="h4" sx={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: 1, mb: 1 }}>
          Order Confirmed
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Your payment was successful. We&apos;ll email you shortly to confirm your order and arrange delivery.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button
            variant="contained"
            onClick={() => router.push('/products')}
            sx={{ borderRadius: 0, fontWeight: 800, textTransform: 'uppercase' }}
          >
            Continue Browsing
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
