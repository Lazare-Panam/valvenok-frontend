'use client'
import { Stack, Chip, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { type WeldFittingFilters, WELD_FITTING_TYPE_LABELS, WELD_P1_TYPE_LABELS, WELD_P2_TYPE_LABELS, EMPTY_WELD_FITTING_FILTERS } from '../hooks/types'

interface Props {
  filters: WeldFittingFilters
  setFilters: React.Dispatch<React.SetStateAction<WeldFittingFilters>>
}

export function WeldFittingActiveFilters({ filters, setFilters }: Props) {
  const theme = useTheme()
  const chips: { key: keyof WeldFittingFilters; label: string; value: string }[] = []

  filters.fittingTypes.forEach(v => chips.push({ key: 'fittingTypes', label: WELD_FITTING_TYPE_LABELS[v] ?? v, value: v }))
  filters.p1Types.forEach(v => chips.push({ key: 'p1Types', label: WELD_P1_TYPE_LABELS[v] ?? v, value: v }))
  filters.p1Sizes.forEach(v => chips.push({ key: 'p1Sizes', label: `Tube OD: ${v}`, value: v }))
  filters.p1Units.forEach(v => chips.push({ key: 'p1Units', label: v === 'inch' ? 'Imperial' : 'Metric', value: v }))
  filters.p2Sizes.forEach(v => chips.push({ key: 'p2Sizes', label: `Pipe: ${v}`, value: v }))
  filters.p2Types.forEach(v => chips.push({ key: 'p2Types', label: WELD_P2_TYPE_LABELS[v] ?? v, value: v }))
  filters.materials.forEach(v => chips.push({ key: 'materials', label: v, value: v }))

  if (chips.length === 0) return null

  const remove = (key: keyof WeldFittingFilters, value: string) =>
    setFilters(prev => ({ ...prev, [key]: prev[key].filter(v => v !== value) }))

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.disabled" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {chips.map((f, i) => (
        <Chip key={`${f.key}-${f.value}-${i}`} label={f.label}
          size="small" variant="outlined"
          sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}
          onDelete={() => remove(f.key, f.value)} />
      ))}
    </Stack>
  )
}