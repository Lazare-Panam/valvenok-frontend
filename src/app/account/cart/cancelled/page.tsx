'use client';

import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useRouter } from 'next/navigation';
import DashboardLayout from '../../components/Sidebar';

export default function CheckoutCancelledPage() {
  const router = useRouter();

  return (
    <DashboardLayout>
      <Box sx={{ maxWidth: 600, mx: 'auto', mt: 8 }}>
        <Paper
          elevation={0}
          sx={{ p: 6, border: '1.5px solid', borderColor: 'warning.light', borderRadius: 0, textAlign: 'center' }}
        >
          <HighlightOffIcon sx={{ fontSize: 64, color: 'warning.main', mb: 2 }} />

          <Typography variant="h4" sx={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: 1, mb: 1 }}>
            Checkout Cancelled
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            No payment was taken. Your cart is still saved — you can complete your order whenever you're ready.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              variant="contained"
              onClick={() => router.push('/account/cart')}
              sx={{ borderRadius: 0, fontWeight: 800, textTransform: 'uppercase' }}
            >
              Return to Cart
            </Button>
            <Button
              variant="outlined"
              onClick={() => router.push('/products')}
              sx={{ borderRadius: 0, fontWeight: 800, textTransform: 'uppercase' }}
            >
              Browse Catalog
            </Button>
          </Box>
        </Paper>
      </Box>
    </DashboardLayout>
  );
}