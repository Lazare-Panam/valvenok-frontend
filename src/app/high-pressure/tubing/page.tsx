'use client'
import Link from 'next/link'
import { Box, Container, Typography, Button, Chip, Paper, Divider } from '@mui/material'
import Grid from '@mui/material/Grid'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { TUBING_DATA, TUBE_SUPPORTS_DATA } from '@/src/app/fittings-tubing/tubing/components/data'
import { TUBING_DESCRIPTION } from '@/src/app/fittings-tubing/tubing/components/types'

const ACCENT = '#61D649'
const HERO_IMG = 'https://pblol2.blob.core.windows.net/panam-images/products/tubing/tubing-1.jpg'

const TOTAL = TUBING_DATA.length
const SUPPORT_COUNT = TUBE_SUPPORTS_DATA.length
const PANAM_COUNT = TUBING_DATA.filter(v => v.brand === 'Panam').length
const HIFLUX_COUNT = TUBING_DATA.filter(v => v.brand === 'Hiflux').length

const TECH_SPECS = [
  { label: 'Total Configurations', value: `${TOTAL} — Panam & Hiflux` },
  { label: 'Tubing OD', value: '1/16" – 2" · 3mm – 12mm' },
  { label: 'Materials', value: 'SS 316 · Monel · Duplex · Inconel · 6Mo · Hastelloy' },
  { label: 'Ratings', value: 'Standard & High Pressure' },
  { label: 'Tube Supports', value: 'Hiflux 1 / 2 / 3-line (STS 316)' },
  { label: 'Construction', value: 'Seamless' },
]

const BRANDS = [
  {
    name: 'Panam',
    logo: 'https://pblol2.blob.core.windows.net/panam-images/panam-resize_smallest.jpg',
    count: PANAM_COUNT,
    blurb: 'Seamless tubing in standard and high-pressure ratings — SS 316, Monel, Copper, Duplex, Inconel, 6Mo and Hastelloy, imperial 1/16"–2" and metric 3mm–12mm.',
  },
  {
    name: 'Hiflux',
    logo: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/logo.png',
    count: HIFLUX_COUNT,
    blurb: 'STS 316 cold-formed high-pressure seamless tubing from 10,000 to 150,000 psi. High-pressure nipples are listed in the Fittings catalogue; tube supports have their own table.',
  },
]

export default function HighPressureTubingLanding() {
  return (
    <>
      <Box sx={{ bgcolor: 'background.default', pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderRadius: 3, overflow: 'hidden', bgcolor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '4/3' }}>
                <Box component="img" src={HERO_IMG} alt="Tubing & Tube Supports" sx={{ width: '100%', height: '100%', objectFit: 'contain', p: 3 }} />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 2, display: 'block' }}>High Pressure</Typography>
              <Typography variant="h1" sx={{ fontWeight: 800, mt: 1, mb: 2, lineHeight: 1.15, fontSize: { xs: '2rem', md: '2.6rem' } }}>{TUBING_DESCRIPTION.title}</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>{TUBING_DESCRIPTION.description}</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                {TUBING_DESCRIPTION.specs.map(s => <Chip key={s} label={s} size="small" sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 600, fontSize: '0.7rem' }} />)}
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button component={Link} href="/high-pressure/tubing/products" variant="contained" size="large" endIcon={<ArrowForwardIcon />}
                  sx={{ borderRadius: 0, fontWeight: 800, py: 1.75, px: 4, fontSize: '1rem', bgcolor: ACCENT, boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
                  View all {TOTAL} tubing
                </Button>
                <Button component={Link} href="/high-pressure/tubing/tube-supports" variant="outlined" size="large" endIcon={<ArrowForwardIcon />}
                  sx={{ borderRadius: 0, fontWeight: 800, py: 1.75, px: 4, fontSize: '1rem', borderColor: ACCENT, color: ACCENT, '&:hover': { borderColor: '#50c23a', color: '#50c23a' } }}>
                  {SUPPORT_COUNT} Tube Supports
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6 }}>Available Brands</Typography>
          <Grid container spacing={3}>
            {BRANDS.map(b => (
              <Grid size={{ xs: 12, md: 6 }} key={b.name}>
                <Paper component={Link} href={`/high-pressure/tubing/products?brand=${encodeURIComponent(b.name)}`}
                  variant="outlined"
                  sx={{
                    display: 'block', p: 4, borderRadius: 2, height: '100%',
                    textDecoration: 'none', color: 'inherit', transition: 'all 0.15s',
                    '&:hover': { borderColor: ACCENT, boxShadow: 3, transform: 'translateY(-2px)' },
                  }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Box component="img" src={b.logo} alt={b.name} sx={{ maxHeight: 40, maxWidth: 140, objectFit: 'contain' }} />
                    <Chip label={`${b.count} items`} sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700 }} />
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 2 }}>{b.blurb}</Typography>
                  <Typography variant="button" sx={{ color: ACCENT, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
                    View {b.name} tubing <ArrowForwardIcon fontSize="small" />
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider />

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
            <Button component={Link} href="/high-pressure/tubing/products" variant="outlined" size="large" endIcon={<ArrowForwardIcon />}
              sx={{ borderRadius: 0, fontWeight: 800, py: 1.5, px: 4, borderColor: ACCENT, color: ACCENT }}>
              Browse the full product table
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}
