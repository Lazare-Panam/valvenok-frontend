import { Stack, Chip, Typography } from '@mui/material'
import { Filters } from './types'

interface Props {
  filters: Filters
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
}

export function AllPumpsActiveFilters({ filters, setFilters }: Props) {
  const chips: { key: keyof Filters; label: string; value: any }[] = []

  if (filters.pumpType) chips.push({ key: 'pumpType', label: `Type: ${filters.pumpType}`, value: filters.pumpType })
  if (filters.powerRange) chips.push({ key: 'powerRange', label: `Power: ${filters.powerRange}`, value: filters.powerRange })
  filters.voltage.forEach(v => chips.push({ key: 'voltage', label: `${v}V`, value: v }))
  filters.rpm.forEach(v => chips.push({ key: 'rpm', label: `${v} rpm`, value: v }))
  filters.deliverySizeMm.forEach(v => chips.push({ key: 'deliverySizeMm', label: `Delivery: ${v}mm`, value: v }))
  filters.maxSolidSizeMm.forEach(v => chips.push({ key: 'maxSolidSizeMm', label: `Max Solid: ${v}mm`, value: v }))

  if (chips.length === 0) return null

  const remove = (key: keyof Filters, value: any) => {
    setFilters(prev => {
      const current = prev[key]
      if (Array.isArray(current)) return { ...prev, [key]: current.filter(v => v !== value) }
      return { ...prev, [key]: '' }
    })
  }

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.disabled" fontWeight={700}>
        ACTIVE FILTERS:
      </Typography>
      {chips.map((f, i) => (
        <Chip
          key={`${f.key}-${f.value}-${i}`}
          label={f.label}
          size="small"
          color="primary"
          variant="outlined"
          onDelete={() => remove(f.key, f.value)}
        />
      ))}
    </Stack>
  )
}