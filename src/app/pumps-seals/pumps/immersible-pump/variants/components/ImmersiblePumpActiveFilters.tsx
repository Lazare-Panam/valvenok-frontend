import { Stack, Chip, Typography } from '@mui/material'
import { ImmersiblePumpFilterParams } from './ImmersiblePumpSidebar'

interface Props {
  filters: ImmersiblePumpFilterParams
  setFilters: (fn: (prev: ImmersiblePumpFilterParams) => ImmersiblePumpFilterParams) => void
}

const LABELS: Record<keyof ImmersiblePumpFilterParams, string> = {
  series: 'Series', subSeries: 'Sub-Series', frequencyHz: 'Hz',
}

export function ImmersiblePumpActiveFilters({ filters, setFilters }: Props) {
  const active: { key: keyof ImmersiblePumpFilterParams; label: string; value: string }[] = []

  ;(Object.keys(filters) as (keyof ImmersiblePumpFilterParams)[]).forEach(key => {
    filters[key]?.forEach(v => active.push({ key, label: `${LABELS[key]}: ${v}`, value: v }))
  })

  if (active.length === 0) return null

  const removeFilter = (key: keyof ImmersiblePumpFilterParams, value: string) => {
    setFilters(prev => {
      const current = prev[key] ?? []
      const updated = current.filter(v => v !== value)
      return { ...prev, [key]: updated.length > 0 ? updated : undefined }
    })
  }

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.disabled" fontWeight={700}>
        ACTIVE FILTERS:
      </Typography>
      {active.map((f, i) => (
        <Chip
          key={`${f.key}-${f.value}-${i}`}
          label={f.label}
          size="small"
          color="primary"
          variant="outlined"
          onDelete={() => removeFilter(f.key, f.value)}
        />
      ))}
    </Stack>
  )
}