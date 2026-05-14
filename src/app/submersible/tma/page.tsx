'use client'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import PumpTable from '../components/PumpTable'
import { TMA_MODELS } from './data'

export default function TMAPage() {
  const theme = useTheme()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontWeight={800} mb={1} color="primary">
          TMA Sewage Pumps — 50Hz
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
          Three-phase 415V submersible sewage pumps. 2&quot; outlet across 1.1 – 2.6 kW power ratings.
        </Typography>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          {TMA_MODELS.length} MODELS
        </Typography>
        <PumpTable models={TMA_MODELS} />
      </Box>
    </Box>
  )
}