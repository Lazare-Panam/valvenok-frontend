'use client'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import PumpTable from '../components/PumpTable'
import { TDL_MODELS } from './data'

export default function TDLPage() {
  const theme = useTheme()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontWeight={800} mb={1} color="primary">
          TDL Sewage Pumps — 50Hz
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
          2&quot; submersible sewage pumps in 0.7 kW and 1.1 kW. Single-phase (230V) and three-phase (415V) variants available.
        </Typography>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          {TDL_MODELS.length} MODELS
        </Typography>
        <PumpTable models={TDL_MODELS} />
      </Box>
    </Box>
  )
}