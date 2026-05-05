'use client'
import { Box, Typography, Card, CardContent, CardActionArea } from '@mui/material'
import Grid from '@mui/material/Grid'
import { alpha, useTheme } from '@mui/material/styles'
import { useRouter } from 'next/navigation'

const CATEGORIES = [
  {
    code: 'Nipples & Couplings',
    title: 'Nipples & Couplings',
    subtitle: 'HN · HLN · HRN · CN · LPN · HC · RHC',
    description: 'Hex nipples, long nipples, reducing nipples, close nipples, long pipe nipples, hex couplings and reducing hex couplings.',
    specs: ['SS316', 'NPT / BSPT / BSPP', 'Metric / SAE', '1/16" – 2"'],
    href: '/pipe-fittings/nipples-couplings',
    image: 'https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/pipe-fittings/hex%20nipples%20-%20bspp%20x%20bspp%20-%20png.png',
  },
  {
    code: 'Adapters & Plugs',
    title: 'Adapters & Plugs',
    subtitle: 'A · RA · RB · HP · HHP · PC',
    description: 'Adapters, reducing adapters, reducing bushings, hex plugs, hollow hex plugs and pipe caps across all major thread standards.',
    specs: ['SS316', 'NPT / BSPT / BSPP', 'Metric / SAE', '1/16" – 2"'],
    href: '/pipe-fittings/adapters-plugs',
    image: 'https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/pipe-fittings/adaptors.jpg',
  },
  {
    code: 'Elbows',
    title: 'Elbows',
    subtitle: 'FE · ME · SE · UE',
    description: 'Female elbows, male elbows, street elbows and union elbows. Available in straight and reducing configurations.',
    specs: ['SS316', 'NPT / BSPT / BSPP', '1/16" – 1½"'],
    href: '/pipe-fittings/elbows',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/female-elbow-bspp.png',
  },
  {
    code: 'Unions & Connectors',
    title: 'Unions & Connectors',
    subtitle: 'U · BHU · SU · SC · UE',
    description: 'Standard unions, bulkhead unions, swivel unions, swivel connectors and union elbows in ISO Parallel thread.',
    specs: ['SS316', 'BSPP / ISO Parallel', '1/8" – 1½"'],
    href: '/pipe-fittings/unions-connectors',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/union-bspt-final.png',
  },
  {
    code: 'Tees & Cross',
    title: 'Tees & Cross',
    subtitle: 'FT · MT · FBT · FRT · ST · BT · RT · UT · C',
    description: 'Female tees, male tees, branch tees, run tees, street tees, swivel union tees, swivel run tees and crosses.',
    specs: ['SS316', 'NPT / BSPP', '1/16" – 1½"'],
    href: '/pipe-fittings/tees-cross',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/female-tee-bspp.png',
  },
  {
  code: 'All Fittings',
  title: 'All Fittings',
  subtitle: 'Browse the complete range',
  description: 'View all 650+ pipe fitting configurations across every category, with full filtering by type, size, thread standard and material.',
  specs: ['SS316', 'NPT / BSPT / BSPP', 'Metric / SAE', '650+ configurations'],
  href: '/pipe-fittings/all',
  image: 'https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/pipe-fittings/adaptors.jpg',
},
]

export default function PipeFittingsIndexPage() {
  const theme = useTheme()
  const router = useRouter()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: theme.palette.primary.main }}>
          Instrumentation Pipe Fittings
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
          316 stainless steel pipe fittings for instrumentation and process applications. NPT, ISO Tapered,
          ISO Parallel, Metric and SAE/MS thread standards across 650+ configurations.
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