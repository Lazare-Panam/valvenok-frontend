'use client'
import { Suspense, useState, useMemo } from 'react'
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

// Server-rendered header: outside the Suspense boundary so the H1 and intro are in the HTML
function Header() {
  return (
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
              ['Panam', 'https://pblol2.blob.core.windows.net/valvenok-images/brands/panam-logo.png', 'https://www.panamvalve.com/'],
              ['Hiflux', 'https://pblol2.blob.core.windows.net/valvenok-images/brands/hiflux-logo.png', 'https://www.hiflux.uk.com/'],
            ].map(([n, logo, url]) => (
              <Box key={n} component="a" href={url} target="_blank" rel="noopener" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 1.75, py: 1, borderRadius: 999, bgcolor: '#fff', border: `1px solid ${T.border}`, textDecoration: 'none', color: T.ink, fontSize: '0.82rem', fontWeight: 700, '&:hover': { borderColor: T.greenDark } }}>
                <Box component="img" src={logo} alt={n} sx={{ height: n === 'Panam' ? 22 : 14, maxWidth: 80, objectFit: 'contain' }} />
                website <ArrowOutwardRoundedIcon sx={{ fontSize: 14 }} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
  )
}

// Only the table reads ?brand= and ?series= (links from the needle valves page)
function HPNeedleValveProducts({ initialBrand, initialSeries }: { initialBrand: string | null; initialSeries: string | null }) {
  const [filters, setFilters] = useState<HPNeedleValveFilters>(() => ({
    ...EMPTY_HP_FILTERS,
    brands: initialBrand && KNOWN_BRANDS.includes(initialBrand) ? [initialBrand] : [],
    series: initialSeries && HP_NEEDLE_VALVE_DATA.some(v => v.series === initialSeries) ? [initialSeries] : [],
  }))

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
    <Box sx={{ maxWidth: 1400, mx: 'auto', px: { xs: 2, md: 4 }, pt: { xs: 3, md: 4 } }}>
      <HPNVTable
        models={models}
        filters={filters}
        setFilters={setFilters}
        availableCounts={availableCounts}
        activeCount={activeCount}
      />
    </Box>
  )
}

// Every model as a plain link, in the page HTML: the table above only shows
// some models at a time (filters, paging), so this gives each one an inbound link.
function AllModels() {
  const bySeries = new Map<string, typeof HP_NEEDLE_VALVE_DATA>()
  for (const v of HP_NEEDLE_VALVE_DATA) bySeries.set(v.series, [...(bySeries.get(v.series) ?? []), v])
  return (
    <Box component="section" aria-labelledby="all-models" sx={{ maxWidth: 1400, mx: 'auto', px: { xs: 2, md: 4 }, pt: { xs: 5, md: 7 } }}>
      <Box component="h2" id="all-models" sx={{ m: 0, mb: 0.75, fontSize: { xs: '1.3rem', md: '1.6rem' }, fontWeight: 800, letterSpacing: '-0.02em', color: T.ink }}>
        All {HP_NEEDLE_VALVE_DATA.length} needle valve models
      </Box>
      <Box component="p" sx={{ m: 0, mb: 2.5, color: T.body, fontSize: '0.92rem' }}>Every part number by series. Open one for its full specification and a quote.</Box>
      <Box sx={{ display: 'grid', gap: 2 }}>
        {[...bySeries.entries()].map(([series, list]) => (
          <Box key={series} sx={{ p: { xs: 1.75, md: 2.25 }, borderRadius: '16px', bgcolor: '#fff', border: `1px solid ${T.border}` }}>
            <Box component="h3" sx={{ m: 0, mb: 1.25, fontSize: '0.95rem', fontWeight: 800, color: T.ink }}>
              {series} series <Box component="span" sx={{ fontWeight: 600, color: T.muted }}>· {list[0].brand} · {list.length} models</Box>
            </Box>
            <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
              {list.map(v => (
                <li key={v.id}>
                  <Box component={Link} href={`/high-pressure/valves/needle-valves/products/${v.id}`}
                    sx={{ display: 'inline-block', px: 1.1, py: 0.45, borderRadius: 999, border: `1px solid ${T.border}`, fontSize: '0.78rem', fontWeight: 600, color: T.ink, textDecoration: 'none', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', '&:hover': { borderColor: T.greenDark, color: T.greenDark } }}>
                    {v.id}
                  </Box>
                </li>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

// Re-mounts when the link's filters change, so they're read once on first render
function WithParams() {
  const sp = useSearchParams()
  const brand = sp.get('brand'), series = sp.get('series')
  return <HPNeedleValveProducts key={`${brand}-${series}`} initialBrand={brand} initialSeries={series} />
}

export default function HPNeedleValveProductsPage() {
  return (
    <Box sx={{ ...textReset, bgcolor: '#F7FAF7', minHeight: '100vh', pb: { xs: 6, md: 10 } }}>
      <Header />
      <Suspense fallback={<Box sx={{ minHeight: 480 }} />}>
        <WithParams />
      </Suspense>
      <AllModels />
    </Box>
  )
}
