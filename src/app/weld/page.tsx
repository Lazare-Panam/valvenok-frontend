'use client'
import { Box, Typography, Card, CardContent, CardActionArea } from '@mui/material'
import Grid from '@mui/material/Grid'
import { alpha, useTheme } from '@mui/material/styles'
import { useRouter } from 'next/navigation'

const CATEGORIES = [
  {
    code: 'Elbows',
    title: 'Elbows',
    subtitle: 'WE · 90° · 45°',
    description: 'Weld elbows in 90° and 45° configurations for instrumentation tubing. Designed for permanent, high-integrity connections in process systems.',
    specs: ['SS316', 'Butt Weld', '2mm – 25mm OD'],
    href: '/weld/elbows',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/weld-fittings/elbow-weld.jpg',
  },
  {
    code: 'Connectors',
    title: 'Connectors',
    subtitle: 'WC · Male · Female',
    description: 'Weld connectors for joining tubing to threaded or instrument connections. Available in male and female thread configurations across major standards.',
    specs: ['SS316', 'NPT / BSPT / BSPP', '2mm – 25mm OD'],
    href: '/weld/connectors',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/weld-fittings/connector-weld.jpg',
  },
]

export default function WeldFittingsIndexPage() {
  const theme = useTheme()
  const router = useRouter()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: theme.palette.primary.main }}>
          Instrumentation Weld Fittings
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
          316 stainless steel weld fittings for instrumentation and process applications. Permanent,
          leak-free connections across butt weld configurations and major thread standards.
        </Typography>
      </Box>

      <Box sx={{ p: { xs: 2, md: 4 }, flex: 1 }}>
        <Grid container spacing={3}>
          {CATEGORIES.map(cat => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={cat.code}>
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
                <CardActionArea onClick={() => router.push(cat.href)} sx={{ height: '100%', alignItems: 'flex-start', p: 0 }}>
                  <Box sx={{
                    width: '100%', height: 180, overflow: 'hidden',
                    bgcolor: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Box
                      component="img"
                      src={cat.image}
                      alt={cat.title}
                      sx={{ width: '100%', height: '100%', objectFit: 'contain', p: 3 }}
                    />
                  </Box>
                  <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 1.5 }}>
                      <Box>
                        <Typography fontWeight={800} fontSize="1rem">{cat.title}</Typography>
                        <Typography variant="caption" color="text.secondary" fontWeight={600}>
                          {cat.subtitle}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body2" color="text.secondary" mb={2} sx={{ lineHeight: 1.6 }}>
                      {cat.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2 }}>
                      {cat.specs.map(spec => (
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

                    <Box sx={{
                      mt: 'auto', pt: 2,
                      borderTop: `1px solid ${theme.palette.divider}`,
                      display: 'flex', justifyContent: 'flex-end', alignItems: 'center'
                    }}>
                      <Typography variant="caption" fontWeight={700} sx={{ color: theme.palette.primary.main }}>
                        View Category →
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