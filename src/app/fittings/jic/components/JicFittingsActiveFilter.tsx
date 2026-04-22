import { Stack, Chip, Typography } from '@mui/material'
import { JicFilters } from '../hooks/types'

interface Props {
  filters: JicFilters
  setFilters: React.Dispatch<React.SetStateAction<JicFilters>>
}

export function JicFittingsActiveFilters({ filters, setFilters }: Props) {
  const chips: { key: keyof JicFilters; label: string; value: string }[] = []

  filters.threadTypes.forEach(v => chips.push({ key: 'threadTypes', label: `Type: ${v}`, value: v }))
  filters.tubeODs.forEach(v => chips.push({ key: 'tubeODs', label: `Tube: ${v}"`, value: v }))
  filters.tubeODsMm.forEach(v => chips.push({ key: 'tubeODsMm', label: `Tube: ${v}mm`, value: v }))
  filters.jicSizes.forEach(v => chips.push({ key: 'jicSizes', label: `JIC: ${v}`, value: v }))
  filters.threadSizes.forEach(v => chips.push({ key: 'threadSizes', label: `Thread: ${v}`, value: v }))

  if (chips.length === 0) return null

  const remove = (key: keyof JicFilters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: (prev[key] as string[]).filter(v => v !== value) }))
  }

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.disabled" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {chips.map((f, i) => (
        <Chip key={`${f.key}-${f.value}-${i}`} label={f.label}
          size="small" color="primary" variant="outlined"
          onDelete={() => remove(f.key, f.value)} />
      ))}
    </Stack>
  )
}