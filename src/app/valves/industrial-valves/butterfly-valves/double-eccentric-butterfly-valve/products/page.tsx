'use client'
import { useMemo, useState } from 'react'
import { Box, Typography, Chip } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { VF9ASidebar, VF9AFilterParams } from './components/VF-9ASidebar'
import { VF9AActiveFilters } from './components/VF-9AActiveFilters'
import VF9ATable from './components/VF-9ATable'
import { VF9A_MODELS } from './components/data'
import { useCartStore } from '@/src/app/cart/hooks/useCartStore'

const unique = <K extends keyof typeof VF9A_MODELS[number]>(key: K) =>
  [...new Set(VF9A_MODELS.map(m => String(m[key])))]

export default function VF9APage() {
  const theme = useTheme()
  const [filters, setFilters] = useState<VF9AFilterParams>({})

  const cartItems = useCartStore(state => state.items)
  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0)
  const cartTotal = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0)

  const filterOptions = {
    sizeInches: unique('sizeInches').sort((a, b) => parseFloat(a) - parseFloat(b)),
    endType: unique('endType'),
    flange: unique('flange'),
    body: unique('body'),
    disc: unique('disc'),
    stem: unique('stem'),
    seat: unique('seat'),
    yoke: unique('yoke'),
    leakageRate: unique('leakageRate'),
    operator: unique('operator'),
  }

  const filtered = useMemo(() => VF9A_MODELS.filter(m =>
    (!filters.sizeInches || filters.sizeInches.includes(m.sizeInches)) &&
    (!filters.endType || filters.endType.includes(m.endType)) &&
    (!filters.flange || filters.flange.includes(m.flange)) &&
    (!filters.body || filters.body.includes(m.body)) &&
    (!filters.disc || filters.disc.includes(m.disc)) &&
    (!filters.stem || filters.stem.includes(m.stem)) &&
    (!filters.seat || filters.seat.includes(m.seat)) &&
    (!filters.yoke || filters.yoke.includes(m.yoke)) &&
    (!filters.leakageRate || filters.leakageRate.includes(m.leakageRate)) &&
    (!filters.operator || filters.operator.includes(m.operator))
  ), [filters])

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <VF9ASidebar filters={filters} setFilters={setFilters} filterOptions={filterOptions} onClear={() => setFilters({})} />

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Box sx={{
          p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'
        }}>
          <Box>
            <Typography variant="h4" fontWeight={800} mb={1} color="primary">
              Double Offset Butterfly Valves — VF-910A
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
              Wafer end double offset butterfly valves, PN16 flange rating, 16 bar. Body CF8M / Disc CF8M / Stem SS630 / Seat PTFE / Yoke DI. Leakage Rate A, bare shaft operator. Sizes 2" – 12".
            </Typography>
          </Box>
          <Chip
            icon={<ShoppingCartIcon />}
            label={`${cartCount} item${cartCount !== 1 ? 's' : ''} · £${cartTotal.toFixed(2)}`}
            color="primary"
            sx={{ fontWeight: 700, py: 2.5, px: 1 }}
          />
        </Box>

        <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
          <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1 }}>
            {filtered.length} MODELS
          </Typography>
          <VF9AActiveFilters filters={filters} setFilters={setFilters} />
          <VF9ATable models={filtered} />
        </Box>
      </Box>
    </Box>
  )
}