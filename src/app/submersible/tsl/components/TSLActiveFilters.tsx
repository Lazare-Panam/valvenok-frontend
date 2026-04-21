import { Stack, Chip, Typography } from '@mui/material'
import { TSLFilterParams } from '@/src/api/pumpsApi'

interface Props {
  filters: TSLFilterParams
  setFilters: (fn: (prev: TSLFilterParams) => TSLFilterParams) => void
}

export function TSLActiveFilters({ filters, setFilters }: Props) {
  const active: { key: string, label: string, value: any }[] = []

  filters.pumpType?.forEach(v => active.push({ key: 'pumpType', label: `Type: ${v === 'TS' ? 'Sewage' : 'Drainage'}`, value: v }))
  filters.impellerType?.forEach(v => active.push({ key: 'impellerType', label: `Impeller: ${v}`, value: v }))
  filters.voltage?.forEach(v => active.push({ key: 'voltage', label: `${v}V`, value: v }))
  filters.phase?.forEach(v => active.push({ key: 'phase', label: `Phase: ${v}`, value: v }))
  filters.outletSizeMm?.forEach(v => active.push({ key: 'outletSizeMm', label: `Outlet: ${v}mm`, value: v }))
  if (filters.minPowerKw) active.push({ key: 'minPowerKw', label: `Min Power: ${filters.minPowerKw}kW`, value: filters.minPowerKw })
  if (filters.maxPowerKw) active.push({ key: 'maxPowerKw', label: `Max Power: ${filters.maxPowerKw}kW`, value: filters.maxPowerKw })
  if (filters.inbuiltCapacitor) active.push({ key: 'inbuiltCapacitor', label: 'Inbuilt Capacitor', value: true })
  if (filters.autoFloatSwitch) active.push({ key: 'autoFloatSwitch', label: 'Auto Float Switch', value: true })

  if (active.length === 0) return null

  const removeFilter = (key: string, value: any) => {
    setFilters(prev => {
      const current = prev[key as keyof TSLFilterParams]
      if (Array.isArray(current)) {
        const updated = current.filter(v => v !== value)
        return { ...prev, [key]: updated.length > 0 ? updated : undefined }
      }
      return { ...prev, [key]: undefined }
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