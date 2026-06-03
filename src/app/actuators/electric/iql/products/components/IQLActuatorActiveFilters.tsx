import { Stack, Chip, Typography } from '@mui/material'
import { type IQLActuatorFilters } from '../hooks/iqlActuatorData'

const BRAND_GREEN = '#61D649'

interface Props {
  filters: IQLActuatorFilters
  setFilters: React.Dispatch<React.SetStateAction<IQLActuatorFilters>>
}

export function IQLActuatorActiveFilters({ filters, setFilters }: Props) {
  const chips: { key: keyof IQLActuatorFilters; label: string; value: string }[] = []

  filters.models.forEach(v => chips.push({ key: 'models', label: `Model: ${v}`, value: v }))
  filters.strokeSizes.forEach(v => chips.push({ key: 'strokeSizes', label: `Stroke: ${v} mm`, value: v }))

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