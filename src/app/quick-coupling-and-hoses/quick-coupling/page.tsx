'use client'
import { useState, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { QUICK_COUPLING_DATA } from './components/data'
import {
  type QuickCouplingFilters, type AvailableCountsQC,
  EMPTY_QC_FILTERS, applyFilters, countBy,
} from './components/types'
import { QCActiveFilters } from './components/QCActiveFilters'
import QCTable from './components/QCTable'

export default function QuickCouplingPage() {
  const theme = useTheme()
  const [filters, setFilters] = useState<QuickCouplingFilters>(EMPTY_QC_FILTERS)

  const models = useMemo(() => applyFilters(QUICK_COUPLING_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsQC>(() => ({
    series:          countBy(applyFilters(QUICK_COUPLING_DATA, filters, 'series'),          c => c.series),
    bodyMaterials:   countBy(applyFilters(QUICK_COUPLING_DATA, filters, 'bodyMaterials'),   c => c.bodyMaterial),
    connectionTypes: countBy(applyFilters(QUICK_COUPLING_DATA, filters, 'connectionTypes'), c => c.connectionType),
    types:           countBy(applyFilters(QUICK_COUPLING_DATA, filters, 'types'),           c => c.type),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontWeight={800} mb={1} color="primary">
          Quick Couplings
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          Hydraulic quick couplings across ISO-A, ISO 16028, ISO 7241A, ISO 7241B, ISO 5675 and Screw Type series. Carbon Steel, BSPP & NPT, 1/4" to 1". Socket, Plug and Set configurations.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {['ISO-A · ISO 16028 · ISO 7241A · ISO 7241B · ISO 5675 · Screw Type', 'Carbon Steel', 'BSPP & NPT', '1/4" – 1"', 'Socket · Plug · Set'].map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(theme.palette.primary.main, 0.08), color: theme.palette.primary.dark, border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}` }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <QCActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 2 }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>
        <Box sx={{ flex: 1, minHeight: 0 }}>
          <QCTable
            models={models}
            filters={filters}
            setFilters={setFilters}
            availableCounts={availableCounts}
            activeCount={activeCount}
          />
        </Box>
      </Box>
    </Box>
  )
}