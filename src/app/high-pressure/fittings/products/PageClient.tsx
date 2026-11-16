'use client'
import { Suspense, useState, useMemo } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Box, Typography, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import {
  HP_FITTINGS_DATA, HP_FITTINGS_DESCRIPTION,
  type FittingFilters, EMPTY_FITTING_FILTERS,
  applyFilters, countBy, type AvailableCounts,
} from '../hooks/hpAllFittingsData'
import { FittingsActiveFilters } from '../components/FittingsActiveFilters'
import FittingsTable from '../components/FittingsTable'
import { GroupSiteLinks, groupSitesIn } from '@/src/app/Common/GroupVisitLinks'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const VALID_BRANDS = ['Panam', 'Hiflux']

// Static heading, also used as the Suspense fallback so it is server-rendered
// (useSearchParams below makes everything inside Suspense client-only).
function PageHeader() {
  return (
    <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
      <Button component={Link} href="/high-pressure/fittings" startIcon={<ArrowBackIcon />}
        sx={{ mb: 1, fontWeight: 700, color: 'text.secondary', textTransform: 'capitalize' }}>
        Fittings overview
      </Button>
      <Typography variant="h1" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT, fontSize: '1.8rem' }}>
        {HP_FITTINGS_DESCRIPTION.title} — Products
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ fontFamily: PRIMARY_FONT }}>
        {HP_FITTINGS_DATA.length} fittings across Panam &amp; Hiflux — filter by brand, type, pressure, size &amp; material.
      </Typography>
      <GroupSiteLinks variant="inline" sites={groupSitesIn("Panam & Hiflux")} />
    </Box>
  )
}

function HPFittingsProductsInner() {
  const searchParams = useSearchParams()
  const brandParam = searchParams.get('brand')
  const [filters, setFilters] = useState<FittingFilters>(
    brandParam && VALID_BRANDS.includes(brandParam)
      ? { ...EMPTY_FITTING_FILTERS, brands: [brandParam] }
      : EMPTY_FITTING_FILTERS,
  )

  const models = useMemo(() => applyFilters(HP_FITTINGS_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCounts>(() => ({
    brands:          countBy(applyFilters(HP_FITTINGS_DATA, filters, 'brands'),          c => c.brand),
    fittingTypes:    countBy(applyFilters(HP_FITTINGS_DATA, filters, 'fittingTypes'),    c => c.fittingType),
    pressureRatings: countBy(applyFilters(HP_FITTINGS_DATA, filters, 'pressureRatings'), c => c.pressureRating),
    sizes:           countBy(applyFilters(HP_FITTINGS_DATA, filters, 'sizes'),           c => c.p1Size),
    materials:       countBy(applyFilters(HP_FITTINGS_DATA, filters, 'materials'),       c => c.material),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <PageHeader />

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <FittingsActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>
        <FittingsTable
          models={models}
          filters={filters}
          setFilters={setFilters}
          availableCounts={availableCounts}
          activeCount={activeCount}
        />
      </Box>
    </Box>
  )
}

export default function HPFittingsProductsPage() {
  return (
    <Suspense fallback={<PageHeader />}>
      <HPFittingsProductsInner />
    </Suspense>
  )
}
