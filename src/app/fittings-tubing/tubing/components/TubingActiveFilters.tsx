'use client'
import { Stack, Chip, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { type TubingFilters } from './types'

interface Props {
  filters: TubingFilters
  setFilters: React.Dispatch<React.SetStateAction<TubingFilters>>
}

export function TubingActiveFilters({ filters, setFilters }: Props) {
  const theme = useTheme()
  const chips: { key: keyof TubingFilters; label: string; value: string }[] = []

  filters.productTypes.forEach(v => chips.push({ key: 'productTypes', label: v, value: v }))
  filters.units.forEach(v => chips.push({ key: 'units', label: v === 'imperial' ? 'Imperial' : 'Metric', value: v }))
  filters.materials.forEach(v => chips.push({ key: 'materials', label: v, value: v }))
  filters.outerDiameters.forEach(v => chips.push({ key: 'outerDiameters', label: `OD: ${v}`, value: v }))
  filters.wallThicknesses.forEach(v => chips.push({ key: 'wallThicknesses', label: `Wall: ${v}`, value: v }))

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