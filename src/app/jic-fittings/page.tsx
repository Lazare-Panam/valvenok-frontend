'use client'
import { Box, Typography, Card, CardContent, CardActionArea } from '@mui/material'
import Grid from '@mui/material/Grid'
import { alpha, useTheme } from '@mui/material/styles'
import { useRouter } from 'next/navigation'

const CATEGORIES = [
  {
    code: 'MC/FC',
    title: 'Connectors',
    subtitle: 'Male & Female Connectors',
    description: 'Male and female connectors in 37° JIC flare. Available in JIC x NPT, BSPT, BSPP, SAE/MS and JIC Swivel configurations across a full size range.',
    specs: ['SS316', '37° JIC Flare', 'NPT / BSPT / BSPP', 'SAE/MS / Swivel'],
    href: '/jic-fittings/connectors',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/male-connector-jic.jpg',
  },
  {
    code: 'U/SU',
    title: 'Unions & Swivel',
    subtitle: 'Unions, Large Hex, Swivel & Bulkhead',
    description: 'Standard unions, large hex unions, swivel unions, bulkhead unions and bulkhead lock nuts in 37° JIC flare.',
    specs: ['SS316', '37° JIC Flare', 'Union / Bulkhead / Swivel', '1/8" – 2"'],
    href: '/jic-fittings/unions-swivel',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/Union.jpg',
  },
  {
    code: 'RA/S',
    title: 'Adapters & Reducers',
    subtitle: 'Reducing Adapters & Sleeves',
    description: 'Reducing adapters and sleeves for transitioning between tube OD sizes in 37° JIC flare. Full range of size combinations in fractional and metric.',
    specs: ['SS316', '37° JIC Flare', 'Reducing / Sleeves', '1/4" – 2"'],
    href: '/jic-fittings/adapters-reducers',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/reducing-adaptors.jpg',
  },
]

export default function JICFittingsPage() {
  const theme = useTheme()
  const router = useRouter()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: theme.palette.primary.main }}>
          37° Flared JIC Fittings
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
          Male and female connectors, unions, elbows, tees and adapters in 37° JIC flare.
          Available across NPT, BSPT, BSPP, SAE/MS and Metric thread standards in SS316.
        </Typography>
      </Box>

      <Box sx={{ p: { xs: 2, md: 4 }, flex: 1 }}>
        <Grid container spacing={3}>
          {CATEGORIES.map(s => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={s.code}>
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
                        <Typography fontWeight={900} fontSize="0.7rem" sx={{ color: theme.palette.primary.main }}>
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

                    <Box sx={{ mt: 'auto', pt: 2, borderTop: `1px solid ${theme.palette.divider}`, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                      <Typography variant="caption" fontWeight={700} sx={{ color: theme.palette.primary.main }}>
                        View Range →
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