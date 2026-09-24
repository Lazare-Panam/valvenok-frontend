'use client'
import {
  Box, Stack, Typography, Chip, Divider,
  Accordion, AccordionSummary, AccordionDetails,
  FormGroup, FormControlLabel, Checkbox,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { type TubingFilters, type AvailableCountsTubing, EMPTY_TUBING_FILTERS } from './types'
import { TUBING_DATA } from './data'

interface Props {
  filters: TubingFilters
  setFilters: React.Dispatch<React.SetStateAction<TubingFilters>>
  availableCounts: AvailableCountsTubing
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

function SmartCheckList({ options, selected, onChange, counts }: {
  options: string[]
  selected: string[]
  onChange: (v: string) => void
  counts: Record<string, number>
}) {
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
            control={<Checkbox size="small" checked={isSelected} onChange={() => onChange(opt)} disabled={isDisabled}
              sx={{ py: 0.25, '&.Mui-checked': { color: theme.palette.primary.main }, '&.Mui-disabled': { color: 'rgba(0,0,0,0.18)' } }} />}
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

export function TubingSidebar({ filters, setFilters, availableCounts, activeCount }: Props) {
  const theme = useTheme()
  const toggle = (key: keyof TubingFilters, val: string) =>
    setFilters(prev => ({
      ...prev,
      [key]: (prev[key] as string[]).includes(val)
        ? (prev[key] as string[]).filter(v => v !== val)
        : [...(prev[key] as string[]), val],
    }))

  const brandOptions = Array.from(new Set(TUBING_DATA.map(c => c.brand)))
  const productTypeOptions = Array.from(new Set(TUBING_DATA.map(c => c.productType)))
  const materialOptions = Array.from(new Set(TUBING_DATA.map(c => c.material))).sort()
  const unitOptions = ['imperial', 'metric']
  const outerDiameterOptions = Array.from(new Set(TUBING_DATA.map(c => c.outerDiameter)))
  const wallThicknessOptions = Array.from(new Set(TUBING_DATA.map(c => c.wallThickness)))

  return (
    <Box sx={{ width: 240, flexShrink: 0, p: 2, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', boxSizing: 'border-box' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FIND YOUR TUBING</Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: theme.palette.primary.main }}
            onClick={() => setFilters(EMPTY_TUBING_FILTERS)}>Clear all</Typography>
        )}
      </Stack>
      <FilterGroup title="BRAND" count={filters.brands.length || undefined}>
        <SmartCheckList options={brandOptions} selected={filters.brands} onChange={v => toggle('brands', v)} counts={availableCounts.brands} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="PRODUCT TYPE" count={filters.productTypes.length || undefined}>
        <SmartCheckList options={productTypeOptions} selected={filters.productTypes} onChange={v => toggle('productTypes', v)} counts={availableCounts.productTypes} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="UNIT SYSTEM" count={filters.units.length || undefined}>
        <SmartCheckList options={unitOptions} selected={filters.units} onChange={v => toggle('units', v)} counts={availableCounts.units} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="MATERIAL" count={filters.materials.length || undefined}>
        <SmartCheckList options={materialOptions} selected={filters.materials} onChange={v => toggle('materials', v)} counts={availableCounts.materials} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="OUTER DIAMETER" count={filters.outerDiameters.length || undefined}>
        <SmartCheckList options={outerDiameterOptions} selected={filters.outerDiameters} onChange={v => toggle('outerDiameters', v)} counts={availableCounts.outerDiameters} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="WALL THICKNESS" count={filters.wallThicknesses.length || undefined}>
        <SmartCheckList options={wallThicknessOptions} selected={filters.wallThicknesses} onChange={v => toggle('wallThicknesses', v)} counts={availableCounts.wallThicknesses} />
      </FilterGroup>
    </Box>
  )
}