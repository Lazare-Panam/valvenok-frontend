import { Stack, Chip, Typography } from '@mui/material'
import { FlowControlledPumpFilterParams } from './FlowControlledPumpSidebar'

interface Props {
  filters: FlowControlledPumpFilterParams
  setFilters: (fn: (prev: FlowControlledPumpFilterParams) => FlowControlledPumpFilterParams) => void
}

const LABELS: Record<keyof FlowControlledPumpFilterParams, string> = {
  series: 'Series', frequencyHz: 'Hz',
}

export function FlowControlledPumpActiveFilters({ filters, setFilters }: Props) {
  const active: { key: keyof FlowControlledPumpFilterParams; label: string; value: string }[] = []

  ;(Object.keys(filters) as (keyof FlowControlledPumpFilterParams)[]).forEach(key => {
    filters[key]?.forEach(v => active.push({ key, label: `${LABELS[key]}: ${v}`, value: v }))
  })

  if (active.length === 0) return null

  const removeFilter = (key: keyof FlowControlledPumpFilterParams, value: string) => {
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