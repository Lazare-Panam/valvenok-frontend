'use client'
import Link from 'next/link'
import { Box, Container, Typography, Button, Chip, Paper, Divider } from '@mui/material'
import Grid from '@mui/material/Grid'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { HP_NV_DESCRIPTION, HP_NEEDLE_VALVE_DATA } from './hooks/hpNeedleValveData'

const ACCENT = '#61D649'
const HERO_IMG = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-dbb.jpg'
const TOTAL = HP_NEEDLE_VALVE_DATA.length

const TECH_SPECS = [
  { label: 'Total Models', value: `${TOTAL} — Panam` },
  { label: 'Pressure Range', value: '15,000 & 20,000 psi' },
  { label: 'Material', value: 'SS 316' },
  { label: 'Configurations', value: 'Ball-Needle-Ball · Needle-Needle' },
  { label: 'Connections', value: 'NPT · MP Cone & Thread' },
  { label: 'Function', value: 'Double isolation + bleed' },
]

export default function DbbValvesLanding() {
  return (
    <>
      <Box sx={{ bgcolor: 'background.default', pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderRadius: 3, overflow: 'hidden', bgcolor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '4/3' }}>
                <Box component="img" src={HERO_IMG} alt="High Pressure Double Block & Bleed Valves" sx={{ width: '100%', height: '100%', objectFit: 'contain', p: 3 }} />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 2, display: 'block' }}>High Pressure · Panam</Typography>
              <Typography variant="h1" sx={{ fontWeight: 800, mt: 1, mb: 2, lineHeight: 1.15, fontSize: { xs: '2rem', md: '2.6rem' } }}>{HP_NV_DESCRIPTION.title}</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>{HP_NV_DESCRIPTION.description}</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                {HP_NV_DESCRIPTION.specs.map(s => <Chip key={s} label={s} size="small" sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 600, fontSize: '0.7rem' }} />)}
              </Box>
              <Button component={Link} href="/high-pressure/valves/dbb-valves/products" variant="contained" size="large" endIcon={<ArrowForwardIcon />}
                sx={{ borderRadius: 0, fontWeight: 800, py: 1.75, px: 4, fontSize: '1rem', bgcolor: ACCENT, boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
                View all {TOTAL} products
              </Button>
            </Grid>
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
            <Button component={Link} href="/high-pressure/valves/dbb-valves/products" variant="outlined" size="large" endIcon={<ArrowForwardIcon />}
              sx={{ borderRadius: 0, fontWeight: 800, py: 1.5, px: 4, borderColor: ACCENT, color: ACCENT }}>
              Browse the full product table
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}
