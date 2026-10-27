// page.tsx (the /products page)
'use client';
import { useState, useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import {
  S301E_WAFER_LEVER_DATA, S301E_WAFER_LEVER_DESCRIPTION,
  type S301EWaferLeverFilters, EMPTY_S301E_WAFER_LEVER_FILTERS,
  applyS301EWaferLeverFilters, countByS301EWaferLever, type AvailableCountsS301EWaferLever,
} from './hooks/s301eWaferLeverData';
import { S301EWaferLeverActiveFilters } from './components/S301EWaferLeverActiveFilters';
import S301EWaferLeverTable from './components/S301EWaferLeverTable';

const BRAND_GREEN = '#61D649';
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

export default function S301EWaferLeverProductsPage() {
  const [filters, setFilters] = useState<S301EWaferLeverFilters>(EMPTY_S301E_WAFER_LEVER_FILTERS);

  const models = useMemo(() => applyS301EWaferLeverFilters(S301E_WAFER_LEVER_DATA, filters, ''), [filters]);

  const availableCounts = useMemo<AvailableCountsS301EWaferLever>(() => ({
    sizes:  countByS301EWaferLever(applyS301EWaferLeverFilters(S301E_WAFER_LEVER_DATA, filters, 'sizes'),  c => c.size),
    liners: countByS301EWaferLever(applyS301EWaferLeverFilters(S301E_WAFER_LEVER_DATA, filters, 'liners'), c => c.liner),
  }), [filters]);

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Box sx={{ mb: 2 }}>
          <Box component="img"
            src="https://pblol2.blob.core.windows.net/valvenok-images/logo/logo-isis.svg"
            alt="ISIS Fluid Control"
            sx={{ height: 28, objectFit: 'contain' }}
          />
        </Box>
        <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
          {S301E_WAFER_LEVER_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          {S301E_WAFER_LEVER_DESCRIPTION.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {S301E_WAFER_LEVER_DESCRIPTION.specs.map(s => (
            <Box key={s} sx={{
              px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600,
              bgcolor: alpha(BRAND_GREEN, 0.08), color: '#2d8a1e',
              border: `1px solid ${alpha(BRAND_GREEN, 0.3)}`,
              fontFamily: PRIMARY_FONT,
            }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <S301EWaferLeverActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${models.length} SKUs`}
        </Typography>
        <S301EWaferLeverTable
          models={models}
          filters={filters}
          setFilters={setFilters}
          availableCounts={availableCounts}
          activeCount={activeCount}
        />
      </Box>
    </Box>
  );
}