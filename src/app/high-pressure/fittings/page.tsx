'use client'
import Link from 'next/link'
import { Box, Container, Typography, Button, Chip, Paper, Divider } from '@mui/material'
import Grid from '@mui/material/Grid'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { HP_FITTINGS_DESCRIPTION } from './hooks/hpAllFittingsData'

const ACCENT = '#61D649'
const HERO_IMG = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-adaptor.jpg'

const { total, panamCount, hifluxCount } = HP_FITTINGS_DESCRIPTION

const TECH_SPECS = [
  { label: 'Total Fittings', value: `${total} — Panam & Hiflux` },
  { label: 'Pressure Range', value: '10,000 – 150,000 psi' },
  { label: 'Material', value: 'SS 316 / STS 316' },
  { label: 'Connections', value: 'Cone & Thread · NPT' },
  { label: 'Size Range', value: '1/8" – 1" (cone & thread catalogue)' },
  { label: 'Types', value: 'Adapters · Connectors · Elbows · Tees · Crosses · Unions · Nipples · Caps · Plugs · Accessories' },
]

const BRANDS = [
  {
    name: 'Panam',
    logo: 'https://pblol2.blob.core.windows.net/panam-images/panam-resize_smallest.jpg',
    href: '/high-pressure/fittings/products?brand=Panam',
    count: panamCount,
    blurb: 'SS 316 cone & thread fittings from 10,000 to 60,000 psi — adapters, reducers, male & female connectors, elbows, tees, crosses, hex nipples, unions, reducing & bulkhead unions, caps and plugs with NPT, MP and HP cone connections.',
  },
  {
    name: 'Hiflux',
    logo: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/logo.png',
    href: '/high-pressure/fittings/products?brand=Hiflux',
    count: hifluxCount,
    blurb: 'STS 316 cold-formed cone & thread fittings and dedicated accessories to 150,000 psi — elbows, tees, crosses plus glands, sleeves, collars, collets and plugs, including anti-vibration variants for high-vibration service.',
  },
]

export default function HighPressureFittingsLanding() {
  return (
    <>
      {/* Hero */}
      <Box sx={{ bgcolor: 'background.default', pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderRadius: 3, overflow: 'hidden', bgcolor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '4/3' }}>
                <Box component="img" src={HERO_IMG} alt="High Pressure Fittings" sx={{ width: '100%', height: '100%', objectFit: 'contain', p: 3 }} />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 2, display: 'block' }}>
                High Pressure Cone &amp; Thread
              </Typography>
              <Typography variant="h1" sx={{ fontWeight: 800, mt: 1, mb: 2, lineHeight: 1.15, fontSize: { xs: '2rem', md: '2.6rem' } }}>
                {HP_FITTINGS_DESCRIPTION.title}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.8 }}>
                {HP_FITTINGS_DESCRIPTION.description}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7 }}>
                This catalogue covers cone &amp; thread tube fittings from 1/8&quot; to 1&quot;. Threaded
                pipe fittings (NPT, ISO Parallel and 37° JIC hex nipples, couplings, adapters, elbows,
                tees, plugs and caps, 10,000 – 15,000 psi, 1/8&quot; to 2&quot;) are a separate range — see{' '}
                <Box component={Link} href="/high-pressure/pipe-fittings" sx={{ color: ACCENT, fontWeight: 700 }}>
                  High Pressure Pipe Fittings
                </Box>
                .
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                {HP_FITTINGS_DESCRIPTION.specs.map(s => (
                  <Chip key={s} label={s} size="small" sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 600, fontSize: '0.7rem' }} />
                ))}
              </Box>
              <Button component={Link} href="/high-pressure/fittings/products" variant="contained" size="large" endIcon={<ArrowForwardIcon />}
                sx={{ borderRadius: 0, fontWeight: 800, py: 1.75, px: 4, fontSize: '1rem', bgcolor: ACCENT, boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
                View all {total} fittings
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* Brands */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>Available Brands</Typography>
          <Grid container spacing={3}>
            {BRANDS.map(b => (
              <Grid size={{ xs: 12, md: 6 }} key={b.name}>
                <Paper
                  variant="outlined"
                  component={Link}
                  href={b.href}
                  sx={{
                    p: 4, borderRadius: 2, height: '100%', display: 'block',
                    textDecoration: 'none', color: 'inherit', transition: 'border-color .15s, box-shadow .15s',
                    '&:hover': { borderColor: ACCENT, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' },
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Box component="img" src={b.logo} alt={`${b.name} — view ${b.name} fittings`} sx={{ maxHeight: 40, maxWidth: 140, objectFit: 'contain', cursor: 'pointer' }} />
                    <Chip label={`${b.count} fittings`} sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700 }} />
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>{b.blurb}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* Tech specs */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>Technical Specifications</Typography>
          <Grid container spacing={2}>
            {TECH_SPECS.map(s => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={s.label}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: '100%' }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1.5 }}>{s.label}</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700, mt: 0.5 }}>{s.value}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Button component={Link} href="/high-pressure/fittings/products" variant="outlined" size="large" endIcon={<ArrowForwardIcon />}
              sx={{ borderRadius: 0, fontWeight: 800, py: 1.5, px: 4, borderColor: ACCENT, color: ACCENT, '&:hover': { borderColor: '#50c23a', color: '#50c23a' } }}>
              Browse the full fittings table
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}
