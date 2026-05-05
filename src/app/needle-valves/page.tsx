'use client'
import { Box, Typography, Card, CardContent, CardActionArea } from '@mui/material'
import Grid from '@mui/material/Grid'
import { alpha, useTheme } from '@mui/material/styles'
import { useRouter } from 'next/navigation'

const SERIES = [
  {
    code: 'IB',
    title: 'IB Series',
    subtitle: 'Integrated Bonnet',
    description: 'Straight and angular configurations. NPT, ISO Tapered, ISO Parallel and Metric thread types.',
    specs: ['SS316', 'Straight / Angular', 'OD / FF / MF / MM / MOD', '1/8" – 3/4"'],
    href: '/needle-valves/ib',
    count: '105 configurations',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/needle-valves/ib.jpg',
  },
  {
    code: 'HB',
    title: 'HB Series',
    subtitle: 'Hex Body',
    description: 'Needle and block & bleed valves in hard and soft seat configurations.',
    specs: ['SS316', '6000 PSI', 'Hard & Soft Seat', 'FF / MF / MM'],
    href: '/needle-valves/hb',
    count: '82 configurations',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/needle-valves/hb.jpg',
  },
  {
    code: 'HP',
    title: 'HP Series',
    subtitle: 'High Pressure',
    description: 'High pressure valves rated to 10K and 20K PSI. Straight, angular, 3-way and manifold configurations.',
    specs: ['SS316', '10K / 20K PSI', 'Straight / Angular / 3-Way / Manifold', 'FF / MF / MM / OD'],
    href: '/needle-valves/hp',
    count: '281 configurations',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/needle-valves/hp.jpg',
  },
  {
    code: 'SB',
    title: 'SB Series',
    subtitle: 'Square Body',
    description: 'Square body needle and block & bleed valves in hard and soft seat configurations.',
    specs: ['SS316', '6000 PSI', 'Hard & Soft Seat', 'OD / FF / MF / MM'],
    href: '/needle-valves/sb',
    count: '98 configurations',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/needle-valves/sb.jpg',
  },
]

export default function NeedleValvesPage() {
  const theme = useTheme()
  const router = useRouter()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: theme.palette.primary.main }}>
          Needle Valves
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
          High quality stainless steel needle valves for instrumentation and process applications. Available in multiple series across a wide range of configurations, pressure ratings and end connections.
        </Typography>
      </Box>

      <Box sx={{ p: { xs: 2, md: 4 }, flex: 1 }}>
        <Grid container spacing={3}>
          {SERIES.map(s => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={s.code}>
              <Card elevation={0} sx={{
                height: '100%',
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 0,
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                  boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.15)}`,
                  transform: 'translateY(-2px)',
                },
              }}>
                <CardActionArea onClick={() => router.push(s.href)} sx={{ height: '100%', alignItems: 'flex-start', p: 0 }}>
                  <Box sx={{
                    width: '100%', height: 180, overflow: 'hidden',
                    bgcolor: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Box
                      component="img"
                      src={s.image}
                      alt={s.title}
                      sx={{ width: '100%', height: '100%', objectFit: 'contain', p: 2 }}
                    />
                  </Box>
                  <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                      <Box sx={{
                        width: 40, height: 40, borderRadius: 0, flexShrink: 0,
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Typography fontWeight={900} fontSize="0.8rem" sx={{ color: theme.palette.primary.main }}>
                          {s.code}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography fontWeight={800} fontSize="1rem">{s.title}</Typography>
                        <Typography variant="caption" color="text.secondary" fontWeight={600}>{s.subtitle}</Typography>
                      </Box>
                    </Box>

                    <Typography variant="body2" color="text.secondary" mb={2} sx={{ lineHeight: 1.6 }}>
                      {s.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2 }}>
                      {s.specs.map(spec => (
                        <Box key={spec} sx={{
                          px: 1, py: 0.25, borderRadius: 0, fontSize: '0.7rem', fontWeight: 600,
                          bgcolor: alpha(theme.palette.primary.main, 0.07),
                          color: theme.palette.primary.dark,
                          border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                        }}>
                          {spec}
                        </Box>
                      ))}
                    </Box>

                    <Box sx={{ mt: 'auto', pt: 2, borderTop: `1px solid ${theme.palette.divider}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="caption" color="text.disabled" fontWeight={700}>
                        {s.count}
                      </Typography>
                      <Typography variant="caption" fontWeight={700} sx={{ color: theme.palette.primary.main }}>
                        View Series →
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}