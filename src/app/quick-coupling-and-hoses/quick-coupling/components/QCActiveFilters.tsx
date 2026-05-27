'use client'
import { Stack, Chip, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { type QuickCouplingFilters } from './types'

interface Props {
  filters: QuickCouplingFilters
  setFilters: React.Dispatch<React.SetStateAction<QuickCouplingFilters>>
}

export function QCActiveFilters({ filters, setFilters }: Props) {
  const theme = useTheme()
  const chips: { key: keyof QuickCouplingFilters; label: string; value: string }[] = []

  filters.series.forEach(v => chips.push({ key: 'series', label: `Series: ${v}`, value: v }))
  filters.bodyMaterials.forEach(v => chips.push({ key: 'bodyMaterials', label: `Material: ${v}`, value: v }))
  filters.connectionTypes.forEach(v => chips.push({ key: 'connectionTypes', label: `Conn: ${v}`, value: v }))
  filters.types.forEach(v => chips.push({ key: 'types', label: `Type: ${v}`, value: v }))

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