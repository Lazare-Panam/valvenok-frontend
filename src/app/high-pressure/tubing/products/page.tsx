'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Box, Typography, Button } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { TUBING_DATA } from '@/src/app/fittings-tubing/tubing/components/data'
import {
  TUBING_DESCRIPTION,
  type TubingFilters, type AvailableCountsTubing,
  EMPTY_TUBING_FILTERS, applyFilters, countBy,
} from '@/src/app/fittings-tubing/tubing/components/types'
import { TubingActiveFilters } from '@/src/app/fittings-tubing/tubing/components/TubingActiveFilters'
import TubingTable from '@/src/app/fittings-tubing/tubing/components/TubingTable'

export default function HighPressureTubingProductsPage() {
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
        <Button component={Link} href="/high-pressure/tubing" startIcon={<ArrowBackIcon />}
          sx={{ mb: 1, fontWeight: 700, color: 'text.secondary', textTransform: 'none' }}>
          Tubing overview
        </Button>
        <Typography variant="h1" fontWeight={800} mb={1} color="primary" sx={{ fontSize: '1.8rem' }}>
          {TUBING_DESCRIPTION.title} — Products
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 760 }}>
          {`${TUBING_DATA.length} configurations across Panam & Hiflux — filter by brand, type, material, size & wall.`}
        </Typography>
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
