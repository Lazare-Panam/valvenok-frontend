'use client'
import { useState, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import {
  FG_VALVE_DATA, FG_VALVE_FILTER_OPTIONS,
  type FGValveFilterParams,
  applyFGValveFilters,
} from './hooks/fgValveData'
import { FGValveSidebar } from './components/FGValveSidebar'
import { FGValveActiveFilters } from './components/FGValveActiveFilters'
import FGValveTable from './components/FGValveTable'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const EMPTY_FILTERS: FGValveFilterParams = {
  valveType: undefined,
  portSize: undefined,
  control: undefined,
  workingMode: undefined,
  bodySize: undefined,
}

export default function FGValvePage() {
  const [filters, setFilters] = useState<FGValveFilterParams>(EMPTY_FILTERS)

  const products = useMemo(() => applyFGValveFilters(FG_VALVE_DATA, filters), [filters])

  const activeCount = Object.values(filters).filter(v => v !== undefined).length

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
          FG Series Pneumatic Solenoid Valves
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          5/2 and 5/3 way pneumatic solenoid valves. Single and double solenoid configurations, BSP port sizes 1/8" to 1", center closed options available.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {['FG Series', '5/2 Way · 5/3 Way', 'Single · Double Solenoid', 'BSP 1/8" – 1"', 'Center Closed'].map(s => (
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

      <Box sx={{ display: 'flex', flex: 1, minHeight: 0 }}>
        <FGValveSidebar
          filters={filters}
          setFilters={setFilters}
          filterOptions={FG_VALVE_FILTER_OPTIONS}
          loading={false}
          onClear={() => setFilters(EMPTY_FILTERS)}
          activeCount={activeCount}
        />

        <Box sx={{ flex: 1, p: { xs: 2, md: 3 }, minWidth: 0 }}>
          <FGValveActiveFilters filters={filters} setFilters={setFilters} />
          <Typography variant="caption" fontWeight={700} color="text.disabled"
            sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
            {`${products.length} CONFIGURATIONS`}
          </Typography>
          <FGValveTable products={products} />
        </Box>
      </Box>
    </Box>
  )
}