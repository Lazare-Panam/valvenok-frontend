import { Stack, Chip, Typography } from '@mui/material'
import { type ITMActuatorFilters } from '../hooks/itmActuatorData'

const BRAND_GREEN = '#61D649'

interface Props {
  filters: ITMActuatorFilters
  setFilters: React.Dispatch<React.SetStateAction<ITMActuatorFilters>>
}

export function ITMActuatorActiveFilters({ filters, setFilters }: Props) {
  const chips: { key: keyof ITMActuatorFilters; label: string; value: string }[] = []

  filters.models.forEach(v => chips.push({ key: 'models', label: `Model: ${v}`, value: v }))
  filters.bodyTypes.forEach(v => chips.push({ key: 'bodyTypes', label: `Body: ${v}`, value: v }))

  if (chips.length === 0) return null

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.secondary" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {chips.map((f, i) => (
        <Chip key={`${f.key}-${f.value}-${i}`} label={f.label} size="small" variant="outlined"
          sx={{ borderColor: BRAND_GREEN, color: BRAND_GREEN }}
          onDelete={() => setFilters(prev => ({
            ...prev,
            [f.key]: (prev[f.key] as string[]).filter(v => v !== f.value),
          }))}
        />
      ))}
    </Stack>
  )
}