'use client'
import { Stack, Chip, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { type PipeFittingFilters, FITTING_TYPE_LABELS, THREAD_TYPE_LABELS } from './hooks'

interface Props {
  filters: PipeFittingFilters
  setFilters: React.Dispatch<React.SetStateAction<PipeFittingFilters>>
}

export function PipeFittingActiveFilters({ filters, setFilters }: Props) {
  const theme = useTheme()
  const chips: { key: keyof PipeFittingFilters; label: string; value: string }[] = []

  filters.fittingTypes.forEach(v => chips.push({ key: 'fittingTypes', label: FITTING_TYPE_LABELS[v] ?? v, value: v }))
  filters.p1Sizes.forEach(v => chips.push({ key: 'p1Sizes', label: `P1: ${v}`, value: v }))
  filters.p1Types.forEach(v => chips.push({ key: 'p1Types', label: `P1: ${THREAD_TYPE_LABELS[v] ?? v}`, value: v }))
  filters.p2Sizes.forEach(v => chips.push({ key: 'p2Sizes', label: `P2: ${v}`, value: v }))
  filters.p2Types.forEach(v => chips.push({ key: 'p2Types', label: `P2: ${THREAD_TYPE_LABELS[v] ?? v}`, value: v }))
  filters.lengthVariants.forEach(v => chips.push({ key: 'lengthVariants', label: `Length: ${v}`, value: v }))
  filters.materials.forEach(v => chips.push({ key: 'materials', label: v, value: v }))

  if (chips.length === 0) return null

  const remove = (key: keyof PipeFittingFilters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: prev[key].filter(v => v !== value) }))
  }

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