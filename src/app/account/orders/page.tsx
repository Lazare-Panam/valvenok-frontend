'use client';

import React, { useEffect } from 'react';
import {
  Box, Typography, Paper, Chip, CircularProgress,
  Accordion, AccordionSummary, AccordionDetails,
  Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useQuery } from '@tanstack/react-query';
import { fetchOrdersApi, PurchaseOrderResponse } from '@/src/api/ordersApi';
import DashboardLayout from '../components/Sidebar';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/src/store/useUserStore';

const statusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'paid': return { bgcolor: 'success.light', color: 'success.dark' };
    case 'pending': return { bgcolor: 'warning.light', color: 'warning.dark' };
    case 'failed': return { bgcolor: 'error.light', color: 'error.dark' };
    case 'refunded': return { bgcolor: 'info.light', color: 'info.dark' };
    default: return { bgcolor: 'grey.200', color: 'text.primary' };
  }
};

export default function OrderHistoryPage() {
  const router = useRouter();
  const { isAuthenticated, isStoreReady } = useUserStore();

  useEffect(() => {
    if (isStoreReady && !isAuthenticated) {
      router.push('/login');
    }
  }, [isStoreReady, isAuthenticated, router]);

  const { data: orders, isLoading, isError } = useQuery<PurchaseOrderResponse[]>({
    queryKey: ['orders'],
    queryFn: fetchOrdersApi,
    enabled: isAuthenticated,
  });

  if (!isStoreReady || isLoading) {
    return (
      <DashboardLayout>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 4 }}>
          <CircularProgress size={28} sx={{ color: 'primary.main' }} />
          <Typography fontWeight={700} textTransform="uppercase">Loading Orders...</Typography>
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
          Order History
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
          All your completed procurement orders.
        </Typography>

        {/* ── ERROR ── */}
        {isError && (
          <Typography color="error" fontWeight={700}>
            Failed to load orders. Please refresh and try again.
          </Typography>
        )}

        {/* ── EMPTY STATE ── */}
        {!isError && orders?.length === 0 && (
          <Paper
            elevation={0}
            sx={{ p: 8, border: '1.5px solid', borderColor: 'divider', borderRadius: 0, textAlign: 'center' }}
          >
            <ReceiptLongIcon sx={{ fontSize: 52, color: 'text.disabled', mb: 2 }} />
            <Typography fontWeight={900} textTransform="uppercase" sx={{ mb: 1 }}>
              No orders yet
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              Once you complete a purchase it will appear here.
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

        {/* ── ORDERS LIST ── */}
        {!isError && orders && orders.length > 0 && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {orders.map((order) => (
              <Accordion
                key={order.id}
                elevation={0}
                disableGutters
                sx={{
                  border: '1.5px solid',
                  borderColor: 'divider',
                  borderRadius: '0 !important',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{ px: 3, py: 1.5, bgcolor: 'background.default' }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flex: 1, mr: 2 }}>
                    {/* Order ID */}
                    <Typography variant="caption" sx={{ fontFamily: 'monospace', fontWeight: 700, color: 'text.secondary' }}>
                      #{order.id.slice(0, 8).toUpperCase()}
                    </Typography>

                    {/* Status */}
                    <Chip
                      label={order.status}
                      size="small"
                      sx={{
                        fontWeight: 800, borderRadius: 0, fontSize: '0.7rem',
                        textTransform: 'uppercase', ...statusColor(order.status)
                      }}
                    />

                    {/* Date */}
                    <Typography variant="body2" fontWeight={600} color="text.secondary">
                      {new Date(order.createdAt).toLocaleDateString('en-GB', {
                        day: 'numeric', month: 'short', year: 'numeric'
                      })}
                    </Typography>

                    {/* Items count */}
                    <Typography variant="body2" fontWeight={600} color="text.secondary">
                      {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                    </Typography>

                    {/* Total */}
                    <Typography fontWeight={900} color="primary.main" sx={{ ml: 'auto' }}>
                      £{order.totalAmount.toFixed(2)}
                    </Typography>
                  </Box>
                </AccordionSummary>

                <AccordionDetails sx={{ p: 0 }}>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow sx={{ bgcolor: 'background.default' }}>
                          {['', 'Product Code', 'Description', 'Qty', 'Unit Price', 'Line Total'].map((h, i) => (
                            <TableCell
                              key={i}
                              align={i >= 3 ? 'right' : 'left'}
                              sx={{ fontWeight: 900, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: 1 }}
                            >
                              {h}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {order.items.map((item) => (
                          <TableRow key={item.id} hover>
                            {/* Image */}
                            <TableCell sx={{ width: 60, py: 1 }}>
                              {item.cloudinaryImageId ? (
                                <Box
                                  component="img"
                                  src={item.cloudinaryImageId}
                                  alt={item.productCode}
                                  sx={{ width: 48, height: 48, objectFit: 'contain', border: '1px solid', borderColor: 'divider' }}
                                />
                              ) : (
                                <Box sx={{ width: 48, height: 48, bgcolor: 'background.default', border: '1px solid', borderColor: 'divider' }} />
                              )}
                            </TableCell>
                            <TableCell>
                              <Chip
                                label={item.productCode}
                                size="small"
                                sx={{ fontFamily: 'monospace', fontWeight: 700, borderRadius: 0, bgcolor: 'background.default', border: '1px solid', borderColor: 'divider' }}
                              />
                            </TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>{item.productDescription}</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 700 }}>{item.quantity}</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 700 }}>£{item.unitPrice.toFixed(2)}</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 900, color: 'primary.main' }}>
                              £{(item.unitPrice * item.quantity).toFixed(2)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        )}
      </Box>
    </DashboardLayout>
  );
}