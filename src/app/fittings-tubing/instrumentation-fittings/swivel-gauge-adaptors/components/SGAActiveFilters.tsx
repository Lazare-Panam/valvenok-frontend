'use client'
import { Stack, Chip, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { type SGAFilters } from './types'

interface Props {
  filters: SGAFilters
  setFilters: React.Dispatch<React.SetStateAction<SGAFilters>>
}

export function SGAActiveFilters({ filters, setFilters }: Props) {
  const theme = useTheme()
  const chips: { key: keyof SGAFilters; label: string; value: string }[] = []

  filters.types.forEach(v => chips.push({ key: 'types', label: v.startsWith('Type M') ? 'Type M' : 'Type S', value: v }))
  filters.inlets.forEach(v => chips.push({ key: 'inlets', label: `Inlet: ${v}`, value: v }))
  filters.outlets.forEach(v => chips.push({ key: 'outlets', label: `Outlet: ${v}`, value: v }))

  if (chips.length === 0) return null

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.disabled" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {chips.map((f, i) => (
        <Chip key={`${f.key}-${f.value}-${i}`} label={f.label} size="small" variant="outlined"
          sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}
          onDelete={() => setFilters(prev => ({ ...prev, [f.key]: prev[f.key].filter((v: string) => v !== f.value) }))}
        />
      ))}
    </Stack>
  )
}