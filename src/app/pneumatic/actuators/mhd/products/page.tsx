'use client'
import { Suspense, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Box } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { T, textReset } from '@/src/app/Landing/modern/tokens'
import { MHD_ACTUATOR_DATA, MHD_TORQUE_RANGE } from './hooks/mhdActuatorData'
import { SUSIN_CATALOG } from '@/src/app/Common/susinCatalogs'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded'
import MHDList, { EMPTY_FILTERS, type MHDFilters } from './MHDList'

// ?yoke=IS|IC and ?action=DA|SR open the table already filtered (links from the series page)
const YOKE: Record<string, string> = { IS: 'Symmetric (IS)', IC: 'Canted (IC)' }
const ACTION: Record<string, string> = { DA: 'Double acting', SR: 'Spring return' }
const SUSIN_LOGO = 'https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp'

// Server-rendered header: outside the Suspense boundary so the H1 and intro are in the HTML
function Header() {
  return (
      <Box sx={{ background: 'linear-gradient(120deg, #EEF9EA 0%, #FFFFFF 55%, #EEF5FF 100%)', borderBottom: `1px solid ${T.border}` }}>
        <Box sx={{ maxWidth: 1400, mx: 'auto', px: { xs: 2, md: 4 }, py: { xs: 4, md: 5.5 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { md: 'flex-end' }, gap: 3 }}>
          <Box>
            <Box component={Link} href="/pneumatic/actuators/mhd" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, mb: 1.5, fontSize: '0.88rem', fontWeight: 700, color: T.greenDark, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              <ArrowBackIcon sx={{ fontSize: 17 }} /> MHD series overview
            </Box>
            <Box component="h1" sx={{ m: 0, fontSize: { xs: '2rem', md: '2.7rem' }, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: T.ink }}>
              MHD micro actuator models
            </Box>
            <Box component="p" sx={{ m: 0, mt: 1, maxWidth: 640, fontSize: '1rem', lineHeight: 1.6, color: T.body }}>
              {MHD_ACTUATOR_DATA.length} Susin scotch yoke models, {MHD_TORQUE_RANGE}. Filter by yoke, action and size, open a row for the full torque figures, then request a quote.
            </Box>
          </Box>
          <Box component="a" href={SUSIN_CATALOG.MHD} target="_blank" rel="noopener" sx={{ alignSelf: { xs: 'flex-start', md: 'auto' }, display: 'inline-flex', alignItems: 'center', gap: 1, px: 1.75, py: 1, borderRadius: 999, bgcolor: '#fff', border: `1px solid ${T.border}`, textDecoration: 'none', color: T.ink, fontSize: '0.82rem', fontWeight: 700, '&:hover': { borderColor: T.greenDark } }}>
            <Box component="img" src={SUSIN_LOGO} alt="Susin" sx={{ height: 20, width: 'auto' }} />
            catalogue (PDF) <DownloadRoundedIcon sx={{ fontSize: 16 }} />
          </Box>
        </Box>
      </Box>
  )
}

// Only the filtered list reads the URL, so only it waits for the search params
function MHDProducts({ yoke, action }: { yoke: string | null; action: string | null }) {
  const [filters, setFilters] = useState<MHDFilters>(() => {
    const y = YOKE[yoke ?? ''], a = ACTION[action ?? '']
    return { ...EMPTY_FILTERS, yokes: y ? [y] : [], actions: a ? [a] : [] }
  })
  return (
    <Box sx={{ maxWidth: 1400, mx: 'auto', px: { xs: 2, md: 4 }, pt: { xs: 3, md: 4 } }}>
      <MHDList filters={filters} setFilters={setFilters} />
    </Box>
  )
}

// Re-mounts when the link's filters change, so they're read once on first render
function WithParams() {
  const sp = useSearchParams()
  const yoke = sp.get('yoke'), action = sp.get('action')
  return <MHDProducts key={`${yoke}-${action}`} yoke={yoke} action={action} />
}

export default function MHDProductsPage() {
  return (
    <Box sx={{ ...textReset, bgcolor: '#F7FAF7', minHeight: '100vh', pb: { xs: 6, md: 10 } }}>
      <Header />
      <Suspense fallback={<Box sx={{ minHeight: 480 }} />}>
        <WithParams />
      </Suspense>
    </Box>
  )
}
