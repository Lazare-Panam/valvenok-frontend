'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Box, Typography, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { TUBE_SUPPORTS_DATA } from '@/src/app/fittings-tubing/tubing/components/data'
import {
  type TubingFilters, type AvailableCountsTubing,
  EMPTY_TUBING_FILTERS, applyFilters, countBy,
} from '@/src/app/fittings-tubing/tubing/components/types'
import { TubingActiveFilters } from '@/src/app/fittings-tubing/tubing/components/TubingActiveFilters'
import TubingTable from '@/src/app/fittings-tubing/tubing/components/TubingTable'
import { GroupSiteLinks, groupSitesIn } from '@/src/app/Common/GroupVisitLinks'

export default function TubeSupportsPage() {
  const theme = useTheme()
  const [filters, setFilters] = useState<TubingFilters>(EMPTY_TUBING_FILTERS)

  const models = useMemo(() => applyFilters(TUBE_SUPPORTS_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsTubing>(() => ({
    brands:          countBy(applyFilters(TUBE_SUPPORTS_DATA, filters, 'brands'),          c => c.brand),
    productTypes:    countBy(applyFilters(TUBE_SUPPORTS_DATA, filters, 'productTypes'),    c => c.productType),
    materials:       countBy(applyFilters(TUBE_SUPPORTS_DATA, filters, 'materials'),       c => c.material),
    units:           countBy(applyFilters(TUBE_SUPPORTS_DATA, filters, 'units'),           c => c.unit),
    outerDiameters:  countBy(applyFilters(TUBE_SUPPORTS_DATA, filters, 'outerDiameters'),  c => c.outerDiameter),
    wallThicknesses: countBy(applyFilters(TUBE_SUPPORTS_DATA, filters, 'wallThicknesses'), c => c.wallThickness),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Button component={Link} href="/high-pressure/tubing" startIcon={<ArrowBackIcon />}
          sx={{ mb: 1, fontWeight: 700, color: 'text.secondary', textTransform: 'none' }}>
          Tubing overview
        </Button>
        <Typography variant="h1" fontWeight={800} mb={1} color="primary" sx={{ fontSize: '1.8rem' }}>
          Tube Supports
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 760 }}>
          {`${TUBE_SUPPORTS_DATA.length} Hiflux high-pressure tube supports in STS 316 — 1, 2 and 3-line configurations for 1/4" to 9/16" tube.`}
        </Typography>
        <GroupSiteLinks variant="inline" sites={groupSitesIn("Hiflux")} />
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <TubingActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 2 }}>
          {`${models.length} TUBE SUPPORTS`}
        </Typography>
        <Box sx={{ flex: 1, minHeight: 0 }}>
          <TubingTable
            models={models}
            filters={filters}
            setFilters={setFilters}
            availableCounts={availableCounts}
            activeCount={activeCount}
            detailBase="/high-pressure/tubing/products"
          />
        </Box>
      </Box>
    </Box>
  )
}
