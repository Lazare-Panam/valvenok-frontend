'use client'
import { GroupSiteLinks, groupSitesIn } from '@/src/app/Common/GroupVisitLinks'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { TUBING_DATA, } from './components/data'
import { TUBING_DESCRIPTION } from './components/types'
import {
  type TubingFilters, type AvailableCountsTubing,
  EMPTY_TUBING_FILTERS, applyFilters, countBy,
} from './components/types'
import { TubingActiveFilters } from './components/TubingActiveFilters'
import TubingTable from './components/TubingTable'

export default function TubingPage() {
  const theme = useTheme()
  const [filters, setFilters] = useState<TubingFilters>(EMPTY_TUBING_FILTERS)

  const models = useMemo(() => applyFilters(TUBING_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsTubing>(() => ({
    brands:          countBy(applyFilters(TUBING_DATA, filters, 'brands'),          c => c.brand),
    productTypes:    countBy(applyFilters(TUBING_DATA, filters, 'productTypes'),    c => c.productType),
    materials:       countBy(applyFilters(TUBING_DATA, filters, 'materials'),       c => c.material),
    units:           countBy(applyFilters(TUBING_DATA, filters, 'units'),           c => c.unit),
    outerDiameters:  countBy(applyFilters(TUBING_DATA, filters, 'outerDiameters'),  c => c.outerDiameter),
    wallThicknesses: countBy(applyFilters(TUBING_DATA, filters, 'wallThicknesses'), c => c.wallThickness),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h1" fontWeight={800} mb={1} color="primary">
          {TUBING_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          {TUBING_DESCRIPTION.description}
        </Typography>
        <GroupSiteLinks variant="inline" sites={groupSitesIn(TUBING_DESCRIPTION.title, TUBING_DESCRIPTION.description)} />
        <Typography variant="body2" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          The table below lists tubing only. Hiflux tube supports are listed separately on the{' '}
          <Link href="/high-pressure/tubing/tube-supports" style={{ color: theme.palette.primary.dark, fontWeight: 600 }}>
            tube supports page
          </Link>
          .
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {TUBING_DESCRIPTION.specs.map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(theme.palette.primary.main, 0.08), color: theme.palette.primary.dark, border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}` }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <TubingActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 2 }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>
        <Box sx={{ flex: 1, minHeight: 0 }}>
          <TubingTable
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