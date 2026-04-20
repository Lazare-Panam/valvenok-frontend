import { Stack, Chip, Typography } from '@mui/material'
import { SubmersibleFilterParams } from '@/src/api/pumpsApi'
interface Props {
  filters: SubmersibleFilterParams
  setFilters: (fn: (prev: SubmersibleFilterParams) => SubmersibleFilterParams) => void
}

export function SubmersibleActiveFilters({ filters, setFilters }: Props) {
  const active: { key: string, label: string, value: any }[] = []

  filters.version?.forEach(v => active.push({ key: 'version', label: `Version: ${v}`, value: v }))
  filters.diameterMm?.forEach(v => active.push({ key: 'diameterMm', label: `Diameter: ${v}mm`, value: v }))
  filters.flowM3Hr?.forEach(v => active.push({ key: 'flowM3Hr', label: `Flow: ${v} m³/hr`, value: v }))
  filters.outletSize?.forEach(v => active.push({ key: 'outletSize', label: `Outlet: ${v}`, value: v }))
  filters.impellerTrim?.forEach(v => active.push({ key: 'impellerTrim', label: `Trim: ${v}`, value: v }))
  filters.motorDiameter?.forEach(v => active.push({ key: 'motorDiameter', label: `Motor Ø: ${v}"`, value: v }))
  if (filters.minHeadM) active.push({ key: 'minHeadM', label: `Min Head: ${filters.minHeadM}m`, value: filters.minHeadM })
  if (filters.maxHeadM) active.push({ key: 'maxHeadM', label: `Max Head: ${filters.maxHeadM}m`, value: filters.maxHeadM })
  if (filters.minPowerKw) active.push({ key: 'minPowerKw', label: `Min Power: ${filters.minPowerKw}kW`, value: filters.minPowerKw })
  if (filters.maxPowerKw) active.push({ key: 'maxPowerKw', label: `Max Power: ${filters.maxPowerKw}kW`, value: filters.maxPowerKw })

  if (active.length === 0) return null

  const removeFilter = (key: string, value: any) => {
    setFilters(prev => {
      const current = prev[key as keyof SubmersibleFilterParams]
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