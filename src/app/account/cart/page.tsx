'use client';

import React, { useEffect } from 'react';
import {
  Box, Typography, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Chip, CircularProgress,
  Button, IconButton, Tooltip
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchCartApi, removeFromCartApi } from '@/src/api/cartApi';
import { createCheckoutSessionApi } from '@/src/api/paymentApi';
import DashboardLayout from '../components/Sidebar';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/src/store/useUserStore';
import { useNotificationStore } from '@/src/store/useNotificationStore';

interface CartItemResponse {
  id: string;
  productCode: string;
  productDescription: string;
  quantity: number;
  unitPrice: number;
  cloudinaryImageId?: string;
}

export default function SavedCartPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { isAuthenticated, isStoreReady } = useUserStore();
  const showNotification = useNotificationStore(state => state.showNotification);

  useEffect(() => {
    if (isStoreReady && !isAuthenticated) {
      router.push('/login');
    }
  }, [isStoreReady, isAuthenticated, router]);

  const { data: cartItems, isLoading, isError } = useQuery<CartItemResponse[]>({
    queryKey: ['cart'],
    queryFn: fetchCartApi,
    enabled: isAuthenticated,
  });

  const { mutate: removeItem, isPending: isRemoving } = useMutation({
    mutationFn: (cartItemId: string) => removeFromCartApi(cartItemId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      showNotification({ message: 'Item removed from cart.', severity: 'success' });
    },
    onError: () => {
      showNotification({ message: 'Failed to remove item.', severity: 'error' });
    },
  });

  const { mutate: checkout, isPending: isCheckingOut } = useMutation({
    mutationFn: createCheckoutSessionApi,
    onSuccess: (url) => {
      window.location.href = url;
    },
    onError: () => {
      showNotification({ message: 'Failed to initiate checkout. Please try again.', severity: 'error' });
    },
  });

  const cartTotal = cartItems?.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity, 0
  ) ?? 0;

  if (!isStoreReady || isLoading) {
    return (
      <DashboardLayout>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 4 }}>
          <CircularProgress size={28} sx={{ color: 'primary.main' }} />
          <Typography fontWeight={700} textTransform="uppercase">Loading Cart...</Typography>
        </Box>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <Box sx={{ maxWidth: 960 }}>

        {/* ── HEADER ── */}
        <Button
          variant="text"
          startIcon={<ArrowBackIcon />}
          onClick={() => router.push('/account')}
          sx={{ fontWeight: 800, mb: 2, color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
        >
          Back to Account
        </Button>

        <Typography variant="h4" sx={{ fontWeight: 900, mb: 1, textTransform: 'uppercase', letterSpacing: 1 }}>
          Saved Cart
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
          Your saved procurement list. Items are synced to your account.
        </Typography>

        {/* ── ERROR ── */}
        {isError && (
          <Typography color="error" fontWeight={700}>
            Failed to load cart. Please refresh and try again.
          </Typography>
        )}

        {/* ── EMPTY STATE ── */}
        {!isError && cartItems?.length === 0 && (
          <Paper
            elevation={0}
            sx={{ p: 8, border: '1.5px solid', borderColor: 'divider', borderRadius: 0, textAlign: 'center' }}
          >
            <ShoppingCartIcon sx={{ fontSize: 52, color: 'text.disabled', mb: 2 }} />
            <Typography fontWeight={900} textTransform="uppercase" sx={{ mb: 1 }}>
              No items saved yet
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              Browse the catalog and add products to your procurement list.
            </Typography>
            <Button
              variant="contained"
              onClick={() => router.push('/products')}
              sx={{ borderRadius: 0, fontWeight: 800, textTransform: 'uppercase' }}
            >
              Browse Catalog
            </Button>
          </Paper>
        )}

        {/* ── CART TABLE + SUMMARY ── */}
        {!isError && cartItems && cartItems.length > 0 && (
          <>
            <TableContainer
              component={Paper}
              elevation={0}
              sx={{ border: '1.5px solid', borderColor: 'primary.light', borderRadius: 0, mb: 3 }}
            >
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: 'background.default' }}>
                    {['', 'Product Code', 'Description', 'Qty', 'Unit Price', 'Line Total', ''].map((h, i) => (
                      <TableCell
                        key={i}
                        align={i >= 3 && i <= 5 ? 'right' : 'left'}
                        sx={{ fontWeight: 900, textTransform: 'uppercase', fontSize: '0.72rem', letterSpacing: 1 }}
                      >
                        {h}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id} hover>

                      {/* ── IMAGE ── */}
                      <TableCell sx={{ width: 76, py: 1.5 }}>
                        {item.cloudinaryImageId ? (
                          <Box
                            component="img"
                            src={item.cloudinaryImageId}
                            alt={item.productCode}
                            sx={{
                              width: 60, height: 60,
                              objectFit: 'contain',
                              border: '1px solid',
                              borderColor: 'divider',
                              display: 'block',
                            }}
                          />
                        ) : (
                          <Box
                            sx={{
                              width: 60, height: 60,
                              bgcolor: 'background.default',
                              border: '1px solid',
                              borderColor: 'divider',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <ShoppingCartIcon sx={{ color: 'text.disabled', fontSize: 20 }} />
                          </Box>
                        )}
                      </TableCell>

                      {/* ── PRODUCT CODE ── */}
                      <TableCell>
                        <Chip
                          label={item.productCode}
                          size="small"
                          sx={{
                            fontFamily: 'monospace', fontWeight: 700,
                            borderRadius: 0, bgcolor: 'background.default',
                            border: '1px solid', borderColor: 'divider',
                          }}
                        />
                      </TableCell>

                      {/* ── DESCRIPTION ── */}
                      <TableCell sx={{ fontWeight: 600, maxWidth: 260 }}>
                        {item.productDescription}
                      </TableCell>

                      {/* ── QTY ── */}
                      <TableCell align="right" sx={{ fontWeight: 700 }}>
                        {item.quantity}
                      </TableCell>

                      {/* ── UNIT PRICE ── */}
                      <TableCell align="right" sx={{ fontWeight: 700 }}>
                        £{item.unitPrice.toFixed(2)}
                      </TableCell>

                      {/* ── LINE TOTAL ── */}
                      <TableCell align="right" sx={{ fontWeight: 900, color: 'primary.main' }}>
                        £{(item.unitPrice * item.quantity).toFixed(2)}
                      </TableCell>

                      {/* ── DELETE ── */}
                      <TableCell align="right">
                        <Tooltip title="Remove item">
                          <IconButton
                            size="small"
                            disabled={isRemoving}
                            onClick={() => removeItem(item.id)}
                            sx={{ color: 'error.main', '&:hover': { bgcolor: 'error.50' } }}
                          >
                            <DeleteOutlineIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* ── SUMMARY FOOTER ── */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3, border: '1.5px solid', borderColor: 'primary.light',
                  borderRadius: 0, minWidth: 300,
                }}
              >
                {/* ── LINE SUBTOTALS ── */}
                <Box sx={{ mb: 2 }}>
                  {cartItems.map((item) => (
                    <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                        {item.productCode}
                      </Typography>
                      <Typography variant="caption" fontWeight={700}>
                        £{(item.unitPrice * item.quantity).toFixed(2)}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* ── COUNTS ── */}
                <Box sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 2, mb: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" fontWeight={700} color="text.secondary" textTransform="uppercase">
                      Items
                    </Typography>
                    <Typography variant="body2" fontWeight={700}>{cartItems.length}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" fontWeight={700} color="text.secondary" textTransform="uppercase">
                      Total Units
                    </Typography>
                    <Typography variant="body2" fontWeight={700}>
                      {cartItems.reduce((sum, i) => sum + i.quantity, 0)}
                    </Typography>
                  </Box>
                </Box>

                {/* ── EST TOTAL ── */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2, borderTop: '1px solid', borderColor: 'divider', mb: 2 }}>
                  <Typography fontWeight={900} textTransform="uppercase">Est. Total</Typography>
                  <Typography fontWeight={900} color="primary.main" variant="h6">
                    £{cartTotal.toFixed(2)}
                  </Typography>
                </Box>

                {/* ── CHECKOUT BUTTON ── */}
                <Button
                  fullWidth
                  variant="contained"
                  disabled={isCheckingOut}
                  onClick={() => checkout()}
                  sx={{ borderRadius: 0, fontWeight: 900, textTransform: 'uppercase', py: 1.5 }}
                >
                  {isCheckingOut ? 'Redirecting to Stripe...' : 'Proceed to Checkout'}
                </Button>
              </Paper>
            </Box>
          </>
        )}
      </Box>
    </DashboardLayout>
  );
}