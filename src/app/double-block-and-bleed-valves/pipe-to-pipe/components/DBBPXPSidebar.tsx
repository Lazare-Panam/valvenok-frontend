'use client'
import {
  Box, Stack, Typography, Chip, Divider,
  Accordion, AccordionSummary, AccordionDetails,
  FormGroup, FormControlLabel, Checkbox,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  type PXPValveFilters, EMPTY_PXP_FILTERS,
  PXP_BORE_SIZE_SORT_ORDER, PXP_INLET_SIZE_SORT_ORDER,
  PXP_INLET_TYPE_SORT_ORDER, PXP_OUTLET_SORT_ORDER, PXP_VENT_SORT_ORDER,
} from './types'
import { DBB_PXP_DATA } from './data'

export interface AvailableCountsPXP {
  configurations: Record<string, number>
  sealMaterials: Record<string, number>
  seatMaterials: Record<string, number>
  boreSizes: Record<string, number>
  inletSizes: Record<string, number>
  inletTypes: Record<string, number>
  outlets: Record<string, number>
  vents: Record<string, number>
  options: Record<string, number>
}

interface Props {
  filters: PXPValveFilters
  setFilters: React.Dispatch<React.SetStateAction<PXPValveFilters>>
  availableCounts: AvailableCountsPXP
  activeCount: number
}

function FilterGroup({ title, count, children }: { title: string; count?: number; children: React.ReactNode }) {
  const theme = useTheme()
  return (
    <Accordion disableGutters elevation={0} sx={{ bgcolor: 'transparent', '&:before': { display: 'none' }, mb: 1 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 40, '& .MuiAccordionSummary-content': { my: 1 } }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" fontWeight={700} color="text.primary">{title}</Typography>
          {count ? <Chip label={count} size="small" sx={{ height: 16, fontSize: '0.65rem', bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText }} /> : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}><FormGroup>{children}</FormGroup></AccordionDetails>
    </Accordion>
  )
}

function SmartCheckList({ options, selected, onChange, counts }: { options: string[]; selected: string[]; onChange: (v: string) => void; counts: Record<string, number> }) {
  const theme = useTheme()
  if (!options.length) return <Typography variant="caption" color="text.disabled" sx={{ pl: 1 }}>No options</Typography>
  return (
    <Box sx={{ maxHeight: 260, overflowY: 'auto' }}>
      {options.map(opt => {
        const count = counts[opt] ?? 0
        const isSelected = selected.includes(opt)
        const isDisabled = !isSelected && count === 0
        return (
          <FormControlLabel key={opt} disabled={isDisabled}
            control={<Checkbox size="small" checked={isSelected} onChange={() => onChange(opt)} disabled={isDisabled} sx={{ py: 0.25, '&.Mui-checked': { color: theme.palette.primary.main }, '&.Mui-disabled': { color: 'rgba(0,0,0,0.18)' } }} />}
            label={
              <Stack direction="row" alignItems="center" spacing={0.75}>
                <Typography variant="body2" fontSize="0.8rem" sx={{ color: isDisabled ? 'text.disabled' : 'text.primary' }}>{opt}</Typography>
                <Typography variant="caption" sx={{ color: isDisabled ? 'text.disabled' : 'text.secondary', fontSize: '0.68rem', fontWeight: 600 }}>({count})</Typography>
              </Stack>
            }
            sx={{ opacity: isDisabled ? 0.45 : 1, mr: 0 }}
          />
        )
      })}
    </Box>
  )
}

export function DBBPXPSidebar({ filters, setFilters, availableCounts, activeCount }: Props) {
  const theme = useTheme()
  const toggle = (key: keyof PXPValveFilters, val: string) =>
    setFilters(prev => ({ ...prev, [key]: (prev[key] as string[]).includes(val) ? (prev[key] as string[]).filter(v => v !== val) : [...(prev[key] as string[]), val] }))

  const configurationOptions = Array.from(new Set(DBB_PXP_DATA.map(c => c.configuration))).sort()
  const sealMaterialOptions = Array.from(new Set(DBB_PXP_DATA.map(c => c.sealMaterial))).sort()
  const seatMaterialOptions = Array.from(new Set(DBB_PXP_DATA.map(c => c.seatMaterial))).sort()
  const boreSizeOptions = PXP_BORE_SIZE_SORT_ORDER.filter(s => new Set(DBB_PXP_DATA.map(c => c.boreSize)).has(s))
  const inletSizeOptions = PXP_INLET_SIZE_SORT_ORDER.filter(s => new Set(DBB_PXP_DATA.map(c => c.inletSize)).has(s))
  const inletTypeOptions = PXP_INLET_TYPE_SORT_ORDER.filter(s => new Set(DBB_PXP_DATA.map(c => c.inletType)).has(s))
  const outletOptions = PXP_OUTLET_SORT_ORDER.filter(s => new Set(DBB_PXP_DATA.map(c => c.outlet)).has(s))
  const ventOptions = PXP_VENT_SORT_ORDER.filter(s => new Set(DBB_PXP_DATA.map(c => c.vent)).has(s))
  const optionOptions = Array.from(new Set(DBB_PXP_DATA.flatMap(c => c.options))).sort()

  return (
    <Box sx={{ width: 240, flexShrink: 0, p: 2, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', boxSizing: 'border-box' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FIND YOUR VALVE</Typography>
        {activeCount > 0 && <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: theme.palette.primary.main }} onClick={() => setFilters(EMPTY_PXP_FILTERS)}>Clear all</Typography>}
      </Stack>
      <FilterGroup title="CONFIGURATION" count={filters.configurations.length || undefined}><SmartCheckList options={configurationOptions} selected={filters.configurations} onChange={v => toggle('configurations', v)} counts={availableCounts.configurations} /></FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="BORE SIZE" count={filters.boreSizes.length || undefined}><SmartCheckList options={boreSizeOptions} selected={filters.boreSizes} onChange={v => toggle('boreSizes', v)} counts={availableCounts.boreSizes} /></FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="INLET SIZE" count={filters.inletSizes.length || undefined}><SmartCheckList options={inletSizeOptions} selected={filters.inletSizes} onChange={v => toggle('inletSizes', v)} counts={availableCounts.inletSizes} /></FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="INLET TYPE" count={filters.inletTypes.length || undefined}><SmartCheckList options={inletTypeOptions} selected={filters.inletTypes} onChange={v => toggle('inletTypes', v)} counts={availableCounts.inletTypes} /></FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="OUTLET" count={filters.outlets.length || undefined}><SmartCheckList options={outletOptions} selected={filters.outlets} onChange={v => toggle('outlets', v)} counts={availableCounts.outlets} /></FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="VENT" count={filters.vents.length || undefined}><SmartCheckList options={ventOptions} selected={filters.vents} onChange={v => toggle('vents', v)} counts={availableCounts.vents} /></FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="SEAL MATERIAL" count={filters.sealMaterials.length || undefined}><SmartCheckList options={sealMaterialOptions} selected={filters.sealMaterials} onChange={v => toggle('sealMaterials', v)} counts={availableCounts.sealMaterials} /></FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="SEAT MATERIAL" count={filters.seatMaterials.length || undefined}><SmartCheckList options={seatMaterialOptions} selected={filters.seatMaterials} onChange={v => toggle('seatMaterials', v)} counts={availableCounts.seatMaterials} /></FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="OPTIONS" count={filters.options.length || undefined}><SmartCheckList options={optionOptions} selected={filters.options} onChange={v => toggle('options', v)} counts={availableCounts.options} /></FilterGroup>
    </Box>
  )
}