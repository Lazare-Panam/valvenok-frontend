'use client'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import PumpTable from '../components/PumpTable'
import { TGA_MODELS } from './data'

export default function TGAPage() {
  const theme = useTheme()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontWeight={800} mb={1} color="primary">
          TGA Sewage Pumps — 50Hz
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
          Heavy-duty submersible sewage pumps for handling solids up to 80mm. Three-phase 415V models across 1.3 – 5.5 kW. Delivery sizes 2&frac12;&quot;, 3&quot; and 4&quot;.
        </Typography>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          {TGA_MODELS.length} MODELS
        </Typography>
        <PumpTable models={TGA_MODELS} />
      </Box>
    </Box>
  )
}