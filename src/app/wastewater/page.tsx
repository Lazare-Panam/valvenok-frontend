'use client'

import { useMemo, useState } from 'react'
import {
  Box, Typography, CircularProgress,
  useMediaQuery, Drawer, IconButton
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'
import { useAllPumps } from './useAllPumps'
import { AllPumpsSidebar } from './components/AllPumpsSide'
import { AllPumpsActiveFilters } from './components/AllPumpsActiveFilters'
import AllPumpsTable from './components/AllPumpsTable'
import { Filters, EMPTY_FILTERS, POWER_RANGES } from './components/types'
export default function AllPumpsPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: allPumps = [], isLoading } = useAllPumps()

  // Cascading filter pipeline
  const selectedRange = POWER_RANGES.find(r => r.label === filters.powerRange)

  const afterPower = useMemo(() => allPumps.filter(p =>
    !selectedRange || (p.p2Kw >= selectedRange.min && p.p2Kw < selectedRange.max)
  ), [allPumps, selectedRange])

  const availableVoltages = useMemo(() =>
    [...new Set(afterPower.map(p => p.voltage).filter(v => v != null))].sort((a, b) => a! - b!) as number[]
  , [afterPower])

  const afterVoltage = useMemo(() => afterPower.filter(p =>
    filters.voltage.length === 0 || (p.voltage != null && filters.voltage.includes(p.voltage))
  ), [afterPower, filters.voltage])

  const availableRpms = useMemo(() =>
    [...new Set(afterVoltage.map(p => p.rpm).filter(v => v != null))].sort((a, b) => a! - b!) as number[]
  , [afterVoltage])

  const afterRpm = useMemo(() => afterVoltage.filter(p =>
    filters.rpm.length === 0 || (p.rpm != null && filters.rpm.includes(p.rpm))
  ), [afterVoltage, filters.rpm])

  const availableDeliverySizes = useMemo(() =>
    [...new Set(afterRpm.map(p => p.deliverySizeMm).filter(v => v != null))].sort((a, b) => a! - b!) as number[]
  , [afterRpm])

  const afterDelivery = useMemo(() => afterRpm.filter(p =>
    filters.deliverySizeMm.length === 0 || (p.deliverySizeMm != null && filters.deliverySizeMm.includes(p.deliverySizeMm))
  ), [afterRpm, filters.deliverySizeMm])

  const availableMaxSolidSizes = useMemo(() =>
    [...new Set(afterDelivery.map(p => p.maxSolidSizeMm).filter(v => v != null))].sort((a, b) => a! - b!) as number[]
  , [afterDelivery])

  const filtered = useMemo(() => afterDelivery.filter(p =>
    filters.maxSolidSizeMm.length === 0 || (p.maxSolidSizeMm != null && filters.maxSolidSizeMm.includes(p.maxSolidSizeMm))
  ), [afterDelivery, filters.maxSolidSizeMm])

  const activeCount =
    (filters.powerRange ? 1 : 0) +
    filters.voltage.length + filters.rpm.length +
    filters.deliverySizeMm.length + filters.maxSolidSizeMm.length

  const sidebar = (
    <AllPumpsSidebar
      filters={filters}
      setFilters={setFilters}
      availableVoltages={availableVoltages}
      availableRpms={availableRpms}
      availableDeliverySizes={availableDeliverySizes}
      availableMaxSolidSizes={availableMaxSolidSizes}
      activeCount={activeCount}
    />
  )

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      {!isMobile && sidebar}
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
          <Typography variant="h4" fontWeight={800} color="primary.main" mb={1}>
            Pump Catalogue{' '}
            <Box component="span" sx={{ color: 'text.primary', fontWeight: 400 }}>— All Models</Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
            Browse the complete Panam Valves pump range. Start by selecting a power range,
            then narrow down by voltage, RPM, and delivery size — filters update automatically
            based on what's available.
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 2, md: 4 } }}>
          {isMobile && (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
              <FilterListIcon />
            </IconButton>
          )}

          <AllPumpsActiveFilters filters={filters} setFilters={setFilters} />

          <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 2 }}>
            {isLoading ? 'LOADING...' : `${filtered.length} MODELS`}
          </Typography>

          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
              <CircularProgress />
            </Box>
          ) : (
            <AllPumpsTable models={filtered} />
          )}
        </Box>
      </Box>
    </Box>
  )
}