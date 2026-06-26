// components/BellowsValveActiveFilters.tsx
import { Stack, Chip, Typography } from '@mui/material'
import { type BellowsValveFilters } from '../hooks/bellowsValveData'

const BRAND_GREEN = '#61D649'

interface Props {
  filters: BellowsValveFilters
  setFilters: React.Dispatch<React.SetStateAction<BellowsValveFilters>>
}

export function BellowsValveActiveFilters({ filters, setFilters }: Props) {
  const chips: { key: keyof BellowsValveFilters; label: string; value: string }[] = []

  filters.standards.forEach(v => chips.push({ key: 'standards', label: `Standard: ${v}`, value: v }))
  filters.types.forEach(v => chips.push({ key: 'types', label: `Type: ${v}`, value: v }))

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