'use client'
import Link from 'next/link'
import { Box, Typography, Chip } from '@mui/material'
import Grid from '@mui/material/Grid'
import { alpha, useTheme } from '@mui/material/styles'
import { TUBE_SUPPORTS_DATA } from './data'

// Tube supports have a different shape from tubing (no wall/pressure), so they get their
// own compact card grid instead of sharing the filterable tubing table.
export default function TubeSupportsGrid({ detailBase }: { detailBase: string }) {
  const theme = useTheme()

  return (
    <Box sx={{ mt: 6 }}>
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5, mb: 2 }}>
        <Typography variant="h6" fontWeight={800}>Tube Supports</Typography>
        <Typography variant="caption" fontWeight={700} color="text.disabled">
          {`${TUBE_SUPPORTS_DATA.length} HIFLUX · STS 316`}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {TUBE_SUPPORTS_DATA.map(s => (
          <Grid size={{ xs: 6, sm: 4, md: 3 }} key={s.id}>
            <Box component={Link} href={`${detailBase}/${s.id}`}
              sx={{
                display: 'flex', flexDirection: 'column', height: '100%',
                textDecoration: 'none', color: 'inherit',
                border: '1px solid', borderColor: 'divider', borderRadius: '8px',
                overflow: 'hidden', bgcolor: 'background.paper', transition: 'all 0.15s',
                '&:hover': { borderColor: theme.palette.primary.main, boxShadow: 3, transform: 'translateY(-2px)' },
              }}>
              <Box sx={{ height: 130, bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
                <Box component="img" src={s.imageUrl} alt={s.partNumber} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </Box>
              <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider' }}>
                <Typography sx={{ fontFamily: 'monospace', fontWeight: 700, color: theme.palette.primary.main, fontSize: '0.85rem' }}>
                  {s.partNumber}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{s.tubingType}</Typography>
                <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                  <Chip label={s.outerDiameter} size="small" sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: alpha(theme.palette.primary.main, 0.1) }} />
                  <Chip label={s.material} size="small" sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: alpha('#7B61FF', 0.12), color: '#7B61FF' }} />
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
