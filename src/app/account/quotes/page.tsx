'use client';

import React, { useEffect } from 'react';
import {
  Box, Typography, CircularProgress, Button, Chip, Divider
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useQuery } from '@tanstack/react-query';
import DashboardLayout from '../components/Sidebar';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/src/store/useUserStore';
import { fetchDealsApi, Deal } from '@/src/api/dealsApi';

// ── Stage order ───────────────────────────────────────────────────────────────
const PIPELINE_STAGES = [
  'Order Received',
  'Purchase Order',
  'Invoice',
  'Shipped on Credit',
  'Part Paid',
  'Fully Paid',
];

// ── Pipeline tracker ──────────────────────────────────────────────────────────
function PipelineTracker({ currentStage }: { currentStage: string }) {
  const currentIndex = PIPELINE_STAGES.indexOf(currentStage);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', mt: 2, mb: 1 }}>
      {PIPELINE_STAGES.map((stage, i) => {
        const isCompleted = i < currentIndex;
        const isCurrent = i === currentIndex;

        return (
          <React.Fragment key={stage}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '0 0 auto' }}>
              <Box sx={{
                width: 32, height: 32,
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                bgcolor: isCompleted ? '#61D649' : isCurrent ? '#1c2e1a' : '#e0e0e0',
                border: isCurrent ? '2px solid #61D649' : 'none',
                transition: 'all 0.3s ease',
              }}>
                {isCompleted ? (
                  <CheckCircleIcon sx={{ fontSize: 20, color: '#fff' }} />
                ) : isCurrent ? (
                  <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#61D649' }} />
                ) : (
                  <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#bdbdbd' }} />
                )}
              </Box>
              <Typography variant="caption" sx={{
                mt: 0.75,
                fontWeight: isCurrent ? 800 : isCompleted ? 700 : 500,
                color: isCompleted ? '#61D649' : isCurrent ? '#1c2e1a' : '#9e9e9e',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: 0.5,
                textAlign: 'center',
                maxWidth: 70,
                lineHeight: 1.2,
              }}>
                {stage}
              </Typography>
            </Box>

            {i < PIPELINE_STAGES.length - 1 && (
              <Box sx={{
                flex: 1, height: 2, mx: 0.5, mb: 3,
                bgcolor: i < currentIndex ? '#61D649' : '#e0e0e0',
                transition: 'background-color 0.3s ease',
              }} />
            )}
          </React.Fragment>
        );
      })}
    </Box>
  );
}

// ── Deal card ─────────────────────────────────────────────────────────────────
function DealCard({ deal }: { deal: Deal }) {
  const [expanded, setExpanded] = React.useState(false);
  const hasLineItems = deal.lineItems && deal.lineItems.length > 0;

  return (
    <Box sx={{ border: '1.5px solid', borderColor: 'divider', mb: 2 }}>
      {/* Header */}
      <Box sx={{
        px: 3, py: 2, bgcolor: '#f7faf6',
        borderBottom: '1px solid', borderColor: 'divider',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 1,
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography sx={{ fontFamily: 'monospace', fontWeight: 800, fontSize: '1rem', color: '#1c2e1a' }}>
            {deal.properties.dealName}
          </Typography>
          <Chip
            label={deal.properties.dealStage}
            size="small"
            sx={{
              bgcolor: '#1c2e1a', color: '#61D649',
              fontWeight: 800, borderRadius: 0,
              fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: 0.5,
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {deal.properties.amount && (
            <Typography sx={{ fontWeight: 900, color: '#1c2e1a', fontSize: '1rem' }}>
              £{parseFloat(deal.properties.amount).toLocaleString('en-GB', { minimumFractionDigits: 2 })}
            </Typography>
          )}
          {hasLineItems && (
            <Button
              size="small" variant="outlined"
              onClick={() => setExpanded(!expanded)}
              sx={{
                borderRadius: 0, fontWeight: 800, fontSize: '0.7rem',
                textTransform: 'uppercase', borderColor: '#1c2e1a', color: '#1c2e1a',
                '&:hover': { bgcolor: '#1c2e1a', color: '#fff' },
              }}
            >
              {expanded ? 'Hide Items' : `View Items (${deal.lineItems.length})`}
            </Button>
          )}
        </Box>
      </Box>

      {/* Pipeline */}
      <Box sx={{ px: 3, pt: 2, pb: 1 }}>
        <PipelineTracker currentStage={deal.properties.dealStage} />
      </Box>

      {/* Line items */}
      {expanded && hasLineItems && (
        <>
          <Divider />
          <Box sx={{ px: 3, py: 2 }}>
            <Typography sx={{ fontWeight: 900, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: 1, color: '#4a6b45', mb: 1.5 }}>
              Line Items
            </Typography>
            {deal.lineItems.map((item, i) => (
              <Box key={i} sx={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                py: 1, borderBottom: '1px solid', borderColor: '#f0f0f0',
              }}>
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', color: '#1c2e1a' }}>
                    {item.name}
                  </Typography>
                  {item.description && (
                    <Typography sx={{ fontSize: '0.75rem', color: '#4a6b45' }}>
                      {item.description}
                    </Typography>
                  )}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, ml: 2 }}>
                  <Typography sx={{ fontSize: '0.8rem', color: '#4a6b45', fontWeight: 600 }}>
                    Qty: {item.quantity}
                  </Typography>
                  {item.unitPrice != null && (
                    <Typography sx={{ fontWeight: 800, color: '#1c2e1a', minWidth: 80, textAlign: 'right' }}>
                      £{item.unitPrice.toFixed(2)}
                    </Typography>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function QuotesPage() {
  const router = useRouter();
  const { isAuthenticated, isStoreReady, user } = useUserStore();

  useEffect(() => {
    if (isStoreReady && !isAuthenticated) router.push('/login');
  }, [isStoreReady, isAuthenticated, router]);

  const { data: deals, isLoading, isError } = useQuery<Deal[]>({
    queryKey: ['deals', user?.email],
    queryFn: () => fetchDealsApi(user!.email),
    enabled: !!isAuthenticated && !!user?.email,
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
        <Button
          variant="text" startIcon={<ArrowBackIcon />}
          onClick={() => router.push('/account')}
          sx={{ fontWeight: 800, mb: 2, color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
        >
          Back to Account
        </Button>

        <Typography variant="h4" sx={{ fontWeight: 900, mb: 1, textTransform: 'uppercase', letterSpacing: 1 }}>
          My Orders & Quotes
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
          Live order status pulled directly from our system.
        </Typography>

        {isError && (
          <Typography color="error" fontWeight={700}>
            Failed to load orders. Please refresh.
          </Typography>
        )}

        {!isError && deals?.length === 0 && (
          <Box sx={{ p: 8, border: '1.5px solid', borderColor: 'divider', textAlign: 'center' }}>
            <InventoryIcon sx={{ fontSize: 52, color: 'text.disabled', mb: 2 }} />
            <Typography fontWeight={900} textTransform="uppercase" sx={{ mb: 1 }}>
              No orders found
            </Typography>
            <Typography color="text.secondary">
              Your orders will appear here once placed.
            </Typography>
          </Box>
        )}

        {!isError && deals && deals.length > 0 && (
          <Box>
            {deals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </Box>
        )}
      </Box>
    </DashboardLayout>
  );
}