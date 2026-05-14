'use client'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import PumpTable from '../components/PumpTable'
import { TGB_MODELS } from './data'

export default function TGBPage() {
  const theme = useTheme()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontWeight={800} mb={1} color="primary">
          TGB Sewage Pumps — 50Hz
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
          Submersible sewage pumps across 0.5 – 2.6 kW. Single-phase (230V) and three-phase (415V) variants. Outlet sizes 1&frac12;&quot; and 2&quot;.
        </Typography>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          {TGB_MODELS.length} MODELS
        </Typography>
        <PumpTable models={TGB_MODELS} />
      </Box>
    </Box>
  )
}