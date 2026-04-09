'use client';

import React, { useEffect } from 'react';
import {
  Typography, Paper, Box, Avatar, Divider,
  Chip, CircularProgress
} from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useUserStore } from '@/src/store/useUserStore';
import DashboardLayout from './components/Sidebar';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchCartApi } from '@/src/api/cartApi';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function AccountPage() {
  const router = useRouter();
  const { user, isAuthenticated, isStoreReady } = useUserStore();

  const { data: cartItems } = useQuery({
    queryKey: ['cart'],
    queryFn: fetchCartApi,
    enabled: isAuthenticated,
  });

  useEffect(() => {
    if (isStoreReady && !isAuthenticated) {
      router.push('/login');
    }
  }, [isStoreReady, isAuthenticated, router]);

  if (!isStoreReady || !isAuthenticated || !user) {
    return (
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          bgcolor: 'background.default',
        }}
      >
        <CircularProgress size={60} thickness={5} sx={{ color: 'primary.main' }} />
        <Typography sx={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: 2 }}>
          System Initializing...
        </Typography>
      </Box>
    );
  }

  const cartTotal = cartItems?.reduce(
    (sum: number, item: any) => sum + item.unitPrice * item.quantity, 0
  ) ?? 0;

  return (
    <DashboardLayout>
      <Box sx={{ maxWidth: 800 }}>

        {/* ── PAGE TITLE ── */}
        <Typography variant="h4" sx={{ fontWeight: 900, mb: 1, textTransform: 'uppercase', letterSpacing: 1 }}>
          My Account
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
          Manage your personal information and procurement settings.
        </Typography>

        {/* ── PROFILE CARD ── */}
        <Paper
          elevation={0}
          sx={{ p: 4, border: '1.5px solid', borderColor: 'primary.light', borderRadius: 0, mb: 4 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
            <Avatar
              sx={{
                width: 80, height: 80,
                bgcolor: 'primary.main',
                fontSize: '2rem', fontWeight: 800, borderRadius: 0,
              }}
            >
              {user.firstName[0]}{user.lastName[0]}
            </Avatar>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, textTransform: 'uppercase' }}>
                {user.firstName} {user.lastName}
              </Typography>
              <Chip
                label="Verified Member"
                size="small"
                sx={{
                  mt: 0.5, bgcolor: 'primary.light', color: 'primary.dark',
                  fontWeight: 800, borderRadius: 0, fontSize: '10px',
                }}
              />
            </Box>
          </Box>

          <Divider sx={{ mb: 4 }} />

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="caption" sx={{ fontWeight: 900, color: 'text.secondary', textTransform: 'uppercase', display: 'block', mb: 0.5 }}>
                Legal Name
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                {user.firstName} {user.lastName}
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="caption" sx={{ fontWeight: 900, color: 'text.secondary', textTransform: 'uppercase', display: 'block', mb: 0.5 }}>
                Email Address
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                {user.email}
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="caption" sx={{ fontWeight: 900, color: 'text.secondary', textTransform: 'uppercase', display: 'block', mb: 0.5 }}>
                System User ID
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'monospace', bgcolor: 'background.default',
                  p: 1, border: '1px solid', borderColor: 'divider',
                  display: 'inline-block', fontWeight: 600, fontSize: '0.75rem',
                }}
              >
                {user.id}
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* ── CART SUMMARY CARD ── */}
        <Paper
          elevation={0}
          sx={{
            p: 4, border: '1.5px solid', borderColor: 'divider',
            borderRadius: 0, display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', gap: 3,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                width: 52, height: 52, bgcolor: 'primary.main',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <ShoppingCartIcon sx={{ color: '#fff', fontSize: 26 }} />
            </Box>
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 900, textTransform: 'uppercase', color: 'text.secondary', letterSpacing: 1 }}>
                Saved Procurement List
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 900, lineHeight: 1.2 }}>
                {cartItems?.length ?? 0} items &nbsp;·&nbsp; £{cartTotal.toFixed(2)}
              </Typography>
            </Box>
          </Box>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            onClick={() => router.push('/account/cart')}
            sx={{ borderRadius: 0, fontWeight: 800, textTransform: 'uppercase' }}
          >
            View Cart
          </Button>
        </Paper>

      </Box>
    </DashboardLayout>
  );
}