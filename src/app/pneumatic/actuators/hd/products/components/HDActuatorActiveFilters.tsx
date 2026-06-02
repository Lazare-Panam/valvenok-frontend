import { Stack, Chip, Typography } from '@mui/material'
import { type HDActuatorFilters } from '../hooks/hdActuatorData'

const BRAND_GREEN = '#61D649'

interface Props {
  filters: HDActuatorFilters
  setFilters: React.Dispatch<React.SetStateAction<HDActuatorFilters>>
}

export function HDActuatorActiveFilters({ filters, setFilters }: Props) {
  const chips: { key: keyof HDActuatorFilters; label: string; value: string }[] = []

  filters.models.forEach(v => chips.push({ key: 'models', label: `Model: ${v}`, value: v }))
  filters.iso5211.forEach(v => chips.push({ key: 'iso5211', label: `ISO 5211: ${v}`, value: v }))

  if (chips.length === 0) return null

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.secondary" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {chips.map((f, i) => (
        <Chip key={`${f.key}-${f.value}-${i}`} label={f.label} size="small" variant="outlined"
          sx={{ borderColor: BRAND_GREEN, color: BRAND_GREEN }}
          onDelete={() => setFilters(prev => ({ ...prev, [f.key]: (prev[f.key] as string[]).filter((v: string) => v !== f.value) }))}
        />
      ))}
    </Stack>
  )
}