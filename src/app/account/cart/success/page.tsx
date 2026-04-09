'use client';

import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import DashboardLayout from '../../components/Sidebar';

export default function CheckoutSuccessPage() {
  const router = useRouter();
  const queryClient = useQueryClient();

  useEffect(() => {
    // Invalidate cart so it refreshes after successful payment
    queryClient.invalidateQueries({ queryKey: ['cart'] });
  }, [queryClient]);

  return (
    <DashboardLayout>
      <Box sx={{ maxWidth: 600, mx: 'auto', mt: 8 }}>
        <Paper
          elevation={0}
          sx={{ p: 6, border: '1.5px solid', borderColor: 'success.light', borderRadius: 0, textAlign: 'center' }}
        >
          <CheckCircleOutlineIcon sx={{ fontSize: 64, color: 'success.main', mb: 2 }} />
          
          <Typography variant="h4" sx={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: 1, mb: 1 }}>
            Order Confirmed
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Your payment was successful. We'll be in touch shortly to confirm your order and arrange delivery.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              variant="contained"
              onClick={() => router.push('/products')}
              sx={{ borderRadius: 0, fontWeight: 800, textTransform: 'uppercase' }}
            >
              Continue Browsing
            </Button>
            <Button
              variant="outlined"
              onClick={() => router.push('/account')}
              sx={{ borderRadius: 0, fontWeight: 800, textTransform: 'uppercase' }}
            >
              My Account
            </Button>
          </Box>
        </Paper>
      </Box>
    </DashboardLayout>
  );
}