import { Stack, Chip, Typography } from '@mui/material'
import { FGValveFilterParams } from '../hooks/fgValveData'

const BRAND_GREEN = '#61D649'

const PORT_SIZE_LABELS: Record<string, string> = {
  'M5': 'M5', '06': '1/8"', '08': '1/4"',
  '10': '3/8"', '15': '1/2"', '20': '3/4"', '25': '1"'
}

const VALVE_TYPE_LABELS: Record<string, string> = {
  '25': '5/2 Way', '35': '5/3 Way'
}

const WORKING_MODE_LABELS: Record<string, string> = {
  'L': '2 Position', 'CL': 'Center Closed'
}

interface Props {
  filters: FGValveFilterParams
  setFilters: (fn: (prev: FGValveFilterParams) => FGValveFilterParams) => void
}

export function FGValveActiveFilters({ filters, setFilters }: Props) {
  const active = [
    filters.valveType  && { key: 'valveType',  label: VALVE_TYPE_LABELS[filters.valveType] ?? filters.valveType },
    filters.portSize   && { key: 'portSize',   label: `Port: ${PORT_SIZE_LABELS[filters.portSize] ?? filters.portSize}` },
    filters.control    && { key: 'control',    label: `${filters.control} Solenoid` },
    filters.workingMode && { key: 'workingMode', label: WORKING_MODE_LABELS[filters.workingMode] ?? filters.workingMode },
    filters.bodySize   && { key: 'bodySize',   label: `Body Size: ${filters.bodySize}` },
  ].filter(Boolean) as { key: string; label: string }[]

  if (active.length === 0) return null

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.secondary" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {active.map(f => (
        <Chip key={f.key} label={f.label} size="small" variant="outlined"
          sx={{ borderColor: BRAND_GREEN, color: BRAND_GREEN }}
          onDelete={() => setFilters(prev => ({ ...prev, [f.key]: undefined }))}
        />
      ))}
    </Stack>
  )
}