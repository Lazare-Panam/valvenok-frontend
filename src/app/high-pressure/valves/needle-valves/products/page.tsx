'use client'
import { Suspense, useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Box } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded'
import {
  HP_NEEDLE_VALVE_DATA,
  type HPNeedleValveFilters, EMPTY_HP_FILTERS,
  applyFilters, countBy, type AvailableCountsHP,
} from '../hooks/hpNeedleValveData'
import HPNVTable from '../components/HPNVTable'
import { T, textReset } from '@/src/app/Landing/modern/tokens'

const KNOWN_BRANDS = Array.from(new Set(HP_NEEDLE_VALVE_DATA.map(v => v.brand)))

function HPNeedleValveProducts() {
  const searchParams = useSearchParams()
  const initialBrand = searchParams.get('brand')
  // ?series=HP2 opens the table on one series (links from the needle valves page)
  const initialSeries = searchParams.get('series')
  const [filters, setFilters] = useState<HPNeedleValveFilters>(() => ({
    ...EMPTY_HP_FILTERS,
    brands: initialBrand && KNOWN_BRANDS.includes(initialBrand) ? [initialBrand] : [],
    series: initialSeries && HP_NEEDLE_VALVE_DATA.some(v => v.series === initialSeries) ? [initialSeries] : [],
  }))

  useEffect(() => {
    setFilters(prev => ({
      ...prev,
      brands: initialBrand && KNOWN_BRANDS.includes(initialBrand) ? [initialBrand] : prev.brands,
      series: initialSeries && HP_NEEDLE_VALVE_DATA.some(v => v.series === initialSeries) ? [initialSeries] : prev.series,
    }))
  }, [initialBrand, initialSeries])

  const models = useMemo(() => applyFilters(HP_NEEDLE_VALVE_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsHP>(() => ({
    brands:          countBy(applyFilters(HP_NEEDLE_VALVE_DATA, filters, 'brands'),          c => c.brand),
    series:          countBy(applyFilters(HP_NEEDLE_VALVE_DATA, filters, 'series'),          c => c.series),
    pressureRatings: countBy(applyFilters(HP_NEEDLE_VALVE_DATA, filters, 'pressureRatings'), c => c.pressureRating),
    connectionSizes: countBy(applyFilters(HP_NEEDLE_VALVE_DATA, filters, 'connectionSizes'), c => c.connectionSize),
    connectionTypes: countBy(applyFilters(HP_NEEDLE_VALVE_DATA, filters, 'connectionTypes'), c => c.connectionType),
    configurations:  countBy(applyFilters(HP_NEEDLE_VALVE_DATA, filters, 'configurations'),  c => c.configuration),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ ...textReset, bgcolor: '#F7FAF7', minHeight: '100vh', pb: { xs: 6, md: 10 } }}>
      <Box sx={{ background: `linear-gradient(120deg, #EEF9EA 0%, #FFFFFF 55%, #EEF5FF 100%)`, borderBottom: `1px solid ${T.border}` }}>
        <Box sx={{ maxWidth: 1400, mx: 'auto', px: { xs: 2, md: 4 }, py: { xs: 4, md: 5.5 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { md: 'flex-end' }, gap: 3 }}>
          <Box>
            <Box component={Link} href="/high-pressure/valves/needle-valves" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, mb: 1.5, fontSize: '0.88rem', fontWeight: 700, color: T.greenDark, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              <ArrowBackIcon sx={{ fontSize: 17 }} /> Needle valves overview
            </Box>
            <Box component="h1" sx={{ m: 0, fontSize: { xs: '2rem', md: '2.7rem' }, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: T.ink }}>
              Needle valve models
            </Box>
            <Box component="p" sx={{ m: 0, mt: 1, maxWidth: 640, fontSize: '1rem', lineHeight: 1.6, color: T.body }}>
              {HP_NEEDLE_VALVE_DATA.length} models from Panam and Hiflux. Filter by series, pressure, size, connection and pattern, then open a model for its full specification or a quote.
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 1.25, flexWrap: 'wrap' }}>
            {[
              ['Panam', 'https://pblol2.blob.core.windows.net/panam-images/panam-resize_smallest.jpg', 'https://www.panamvalve.com/'],
              ['Hiflux', 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/logo.png', 'https://www.hiflux.uk.com/'],
            ].map(([n, logo, url]) => (
              <Box key={n} component="a" href={url} target="_blank" rel="noopener" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 1.75, py: 1, borderRadius: 999, bgcolor: '#fff', border: `1px solid ${T.border}`, textDecoration: 'none', color: T.ink, fontSize: '0.82rem', fontWeight: 700, '&:hover': { borderColor: T.greenDark } }}>
                <Box component="img" src={logo} alt={n} sx={{ height: 18, maxWidth: 70, objectFit: 'contain' }} />
                website <ArrowOutwardRoundedIcon sx={{ fontSize: 14 }} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box sx={{ maxWidth: 1400, mx: 'auto', px: { xs: 2, md: 4 }, pt: { xs: 3, md: 4 } }}>
        <HPNVTable
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

export default function HPNeedleValveProductsPage() {
  return (
    <Suspense>
      <HPNeedleValveProducts />
    </Suspense>
  )
}
