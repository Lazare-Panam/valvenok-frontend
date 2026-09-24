'use client'
import Link from 'next/link'
import { Box, Container, Typography, Button, Chip, Paper, Divider } from '@mui/material'
import Grid from '@mui/material/Grid'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { HP_NV_DESCRIPTION, HP_NEEDLE_VALVE_DATA } from './hooks/hpNeedleValveData'

const ACCENT = '#61D649'
const HERO_IMG = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-nv.jpg'

const TOTAL = HP_NEEDLE_VALVE_DATA.length
const PANAM_COUNT = HP_NEEDLE_VALVE_DATA.filter(v => v.brand === 'Panam').length
const HIFLUX_COUNT = HP_NEEDLE_VALVE_DATA.filter(v => v.brand === 'Hiflux').length

const TECH_SPECS = [
  { label: 'Total Models', value: `${TOTAL} — Panam & Hiflux` },
  { label: 'Pressure Range', value: '10,000 – 60,000 psi + H70' },
  { label: 'Material', value: 'SS 316 / STS 316CW' },
  { label: 'Connections', value: 'NPT · MP Cone · HP Cone' },
  { label: 'Configurations', value: 'Straight · Angle · 3-Way · 2-Stem Manifold' },
  { label: 'Stem Types', value: 'Vee · Regulating' },
]

const BRANDS = [
  {
    name: 'Panam',
    logo: 'https://pblol2.blob.core.windows.net/panam-images/panam-resize_smallest.jpg',
    count: PANAM_COUNT,
    blurb: 'SS 316 needle valves across the HP–HP6 series (10,000–60,000 psi). Straight, Angle, 3-Way and 2-Stem Manifold patterns with NPT, MP Cone and HP Cone connections.',
  },
  {
    name: 'Hiflux',
    logo: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/logo.png',
    count: HIFLUX_COUNT,
    blurb: 'Vee and Regulating stem needle valves to 60,000 psi, plus KOLAS-tested H70 (70 MPa) hydrogen fuel-station valves in STS 316CW.',
  },
]

export default function HPNeedleValvesLanding() {
  return (
    <>
      {/* Hero */}
      <Box sx={{ bgcolor: 'background.default', pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderRadius: 3, overflow: 'hidden', bgcolor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '4/3' }}>
                <Box component="img" src={HERO_IMG} alt="High Pressure Needle Valves" sx={{ width: '100%', height: '100%', objectFit: 'contain', p: 3 }} />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 2, display: 'block' }}>
                High Pressure Instrumentation
              </Typography>
              <Typography variant="h1" sx={{ fontWeight: 800, mt: 1, mb: 2, lineHeight: 1.15, fontSize: { xs: '2rem', md: '2.6rem' } }}>
                {HP_NV_DESCRIPTION.title}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
                {HP_NV_DESCRIPTION.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                {HP_NV_DESCRIPTION.specs.map(s => (
                  <Chip key={s} label={s} size="small" sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 600, fontSize: '0.7rem' }} />
                ))}
              </Box>
              <Button component={Link} href="/high-pressure/valves/needle-valves/products" variant="contained" size="large" endIcon={<ArrowForwardIcon />}
                sx={{ borderRadius: 0, fontWeight: 800, py: 1.75, px: 4, fontSize: '1rem', bgcolor: ACCENT, boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
                View all {TOTAL} products
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
                <Paper variant="outlined" sx={{ p: 4, borderRadius: 2, height: '100%' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Box component="img" src={b.logo} alt={b.name} sx={{ maxHeight: 40, maxWidth: 140, objectFit: 'contain' }} />
                    <Chip label={`${b.count} models`} sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700 }} />
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
            <Button component={Link} href="/high-pressure/valves/needle-valves/products" variant="outlined" size="large" endIcon={<ArrowForwardIcon />}
              sx={{ borderRadius: 0, fontWeight: 800, py: 1.5, px: 4, borderColor: ACCENT, color: ACCENT, '&:hover': { borderColor: '#50c23a', color: '#50c23a' } }}>
              Browse the full product table
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}
