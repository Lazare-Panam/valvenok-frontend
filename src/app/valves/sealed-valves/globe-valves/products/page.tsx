'use client'
import { useState, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import {
  BELLOWS_VALVE_DATA, PAGE_META,
  type BellowsValveFilters, EMPTY_FILTERS,
  applyFilters, countBy, type AvailableCounts,
} from './hooks/bellowsValveData'
import BellowsValveGrid from './components/BellowsValveGrid'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

export default function BellowsValvePage() {
  const [filters, setFilters] = useState<BellowsValveFilters>(EMPTY_FILTERS)

  const valves = useMemo(() => applyFilters(BELLOWS_VALVE_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCounts>(() => ({
    standards: countBy(applyFilters(BELLOWS_VALVE_DATA, filters, 'standards'), c => c.standard),
    types:     countBy(applyFilters(BELLOWS_VALVE_DATA, filters, 'types'),     c => c.type),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h1" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
          {PAGE_META.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          {PAGE_META.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {PAGE_META.specs.map(s => (
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
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${valves.length} PRODUCTS`}
        </Typography>
        <BellowsValveGrid
          valves={valves}
          filters={filters}
          setFilters={setFilters}
          availableCounts={availableCounts}
          activeCount={activeCount}
        />
      </Box>
    </Box>
  )
}