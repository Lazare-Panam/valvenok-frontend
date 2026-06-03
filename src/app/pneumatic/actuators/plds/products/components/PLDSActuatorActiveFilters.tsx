import { Stack, Chip, Typography } from '@mui/material'
import { type PLDSActuatorFilters } from '../hooks/pldsActuatorData'

const BRAND_GREEN = '#61D649'

interface Props {
  filters: PLDSActuatorFilters
  setFilters: React.Dispatch<React.SetStateAction<PLDSActuatorFilters>>
}

export function PLDSActuatorActiveFilters({ filters, setFilters }: Props) {
  const chips: { key: keyof PLDSActuatorFilters; label: string; value: string | number }[] = []

  filters.models.forEach(v => chips.push({ key: 'models', label: `Model: ${v}`, value: v }))
  filters.stemSizes.forEach(v => chips.push({ key: 'stemSizes', label: `Stem: ${v} mm`, value: v }))

  if (chips.length === 0) return null

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.secondary" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {chips.map((f, i) => (
        <Chip
          key={`${f.key}-${f.value}-${i}`}
          label={f.label}
          size="small"
          variant="outlined"
          sx={{ borderColor: BRAND_GREEN, color: BRAND_GREEN }}
          onDelete={() => setFilters(prev => ({
            ...prev,
            models:    f.key === 'models'    ? prev.models.filter(v => v !== f.value)               : prev.models,
            stemSizes: f.key === 'stemSizes' ? prev.stemSizes.filter(v => v !== f.value as number)  : prev.stemSizes,
          }))}
        />
      ))}
    </Stack>
  )
}