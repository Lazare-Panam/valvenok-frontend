// page.tsx (the /products page)
'use client';
import { useState, useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import {
  S301E_LUGGED_DATA, S301E_LUGGED_DESCRIPTION,
  type S301ELuggedFilters, EMPTY_S301E_LUGGED_FILTERS,
  applyS301ELuggedFilters, countByS301ELugged, type AvailableCountsS301ELugged,
} from './hooks/s301eLuggedData';
import { S301ELuggedActiveFilters } from './components/S301ELuggedActiveFilters';
import S301ELuggedTable from './components/S301ELuggedTable';

const BRAND_GREEN = '#61D649';
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

export default function S301ELuggedProductsPage() {
  const [filters, setFilters] = useState<S301ELuggedFilters>(EMPTY_S301E_LUGGED_FILTERS);

  const models = useMemo(() => applyS301ELuggedFilters(S301E_LUGGED_DATA, filters, ''), [filters]);

  const availableCounts = useMemo<AvailableCountsS301ELugged>(() => ({
    sizes:  countByS301ELugged(applyS301ELuggedFilters(S301E_LUGGED_DATA, filters, 'sizes'),  c => c.size),
    liners: countByS301ELugged(applyS301ELuggedFilters(S301E_LUGGED_DATA, filters, 'liners'), c => c.liner),
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
          {S301E_LUGGED_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          {S301E_LUGGED_DESCRIPTION.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {S301E_LUGGED_DESCRIPTION.specs.map(s => (
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
        <S301ELuggedActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${models.length} SKUs`}
        </Typography>
        <S301ELuggedTable
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