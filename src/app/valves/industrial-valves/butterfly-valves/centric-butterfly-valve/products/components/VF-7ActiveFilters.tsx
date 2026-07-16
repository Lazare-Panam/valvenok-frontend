import { Stack, Chip, Typography } from '@mui/material'
import { VF7FilterParams } from './VF-7Sidebar'

interface Props {
  filters: VF7FilterParams
  setFilters: (fn: (prev: VF7FilterParams) => VF7FilterParams) => void
}

const LABELS: Record<keyof VF7FilterParams, string> = {
  sizeInches: 'Size', endType: 'Ends', flange: 'Flange', body: 'Body',
  disc: 'Disc', stem: 'Stem', seat: 'Seat', leakageRate: 'Leakage', operator: 'Operator',
}

export function VF7ActiveFilters({ filters, setFilters }: Props) {
  const active: { key: keyof VF7FilterParams; label: string; value: string }[] = []

  ;(Object.keys(filters) as (keyof VF7FilterParams)[]).forEach(key => {
    filters[key]?.forEach(v => active.push({ key, label: `${LABELS[key]}: ${v}`, value: v }))
  })

  if (active.length === 0) return null

  const removeFilter = (key: keyof VF7FilterParams, value: string) => {
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