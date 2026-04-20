import {
  Box, Stack, Typography, Accordion, AccordionSummary,
  AccordionDetails, FormGroup, FormControlLabel, Checkbox,
  Divider, Skeleton, TextField
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { SubmersibleFilterParams, SubmersibleFilterOptions } from  '@/src/api/pumpsApi'
interface Props {
  filters: SubmersibleFilterParams
  setFilters: (fn: (prev: SubmersibleFilterParams) => SubmersibleFilterParams) => void
  filterOptions?: SubmersibleFilterOptions
  loading: boolean
  onClear: () => void
}

function FilterGroup({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <Accordion defaultExpanded={false} disableGutters elevation={0}
      sx={{ bgcolor: 'transparent', '&:before': { display: 'none' }, mb: 1 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />}
        sx={{ px: 0, minHeight: 40, '& .MuiAccordionSummary-content': { my: 1 } }}
      >
        <Typography variant="caption" fontWeight={700} color="text.primary">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}>
        <FormGroup>{children}</FormGroup>
      </AccordionDetails>
    </Accordion>
  )
}

function MultiCheckbox<T extends string | number>({
  options, selected, onChange, labelFn
}: {
  options: T[]
  selected?: T[]
  onChange: (val: T) => void
  labelFn?: (v: T) => string
}) {
  return (
    <>
      {options.map(opt => (
        <FormControlLabel key={String(opt)}
          control={
            <Checkbox size="small"
              checked={selected?.includes(opt) ?? false}
              onChange={() => onChange(opt)}
            />
          }
          label={<Typography variant="body2">{labelFn ? labelFn(opt) : String(opt)}</Typography>}
        />
      ))}
    </>
  )
}

export function SubmersibleSidebar({ filters, setFilters, filterOptions, loading, onClear }: Props) {
  const activeCount = Object.values(filters).filter(v =>
    v !== undefined && (!Array.isArray(v) || v.length > 0)
  ).length

  const toggle = <T extends string | number>(key: keyof SubmersibleFilterParams, val: T) => {
    setFilters(prev => {
      const current = (prev[key] as T[] | undefined) ?? []
      const updated = current.includes(val) ? current.filter(v => v !== val) : [...current, val]
      return { ...prev, [key]: updated.length > 0 ? updated : undefined }
    })
  }

  return (
    <Box sx={{
      width: 280, height: '100vh', p: 3,
      borderRight: '1px solid', borderColor: 'divider',
      bgcolor: 'background.paper', position: 'sticky', top: 0,
      overflowY: 'auto', flexShrink: 0
    }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">
          SPECIFICATIONS
        </Typography>
        {activeCount > 0 && (
          <Typography variant="caption" color="primary" fontWeight={700}
            sx={{ cursor: 'pointer' }} onClick={onClear}>
            Clear all
          </Typography>
        )}
      </Stack>

      {/* Version */}
      <FilterGroup title="VERSION">
        {loading ? <Skeleton height={60} /> :
          <MultiCheckbox
            options={filterOptions?.versions ?? []}
            selected={filters.version}
            onChange={v => toggle('version', v)}
          />
        }
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      {/* Diameter */}
      <FilterGroup title="DIAMETER">
        {loading ? <Skeleton height={80} /> :
          <MultiCheckbox
            options={filterOptions?.diametersMm ?? []}
            selected={filters.diameterMm}
            onChange={v => toggle('diameterMm', v)}
            labelFn={v => `${filterOptions?.diametersInches[filterOptions.diametersMm.indexOf(v)] ?? ''} (${v}mm)`}
          />
        }
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      {/* Flow */}
      <FilterGroup title="FLOW RATE (m³/hr)">
        {loading ? <Skeleton height={100} /> :
          <MultiCheckbox
            options={filterOptions?.flows ?? []}
            selected={filters.flowM3Hr}
            onChange={v => toggle('flowM3Hr', v)}
            labelFn={v => `${v} m³/hr`}
          />
        }
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      {/* Head Range */}
      <FilterGroup title="HEAD RANGE (m)">
        <Stack direction="row" spacing={1} mt={1}>
          <TextField size="small" label="Min" type="number"
            value={filters.minHeadM ?? ''}
            onChange={e => setFilters(prev => ({ ...prev, minHeadM: e.target.value ? +e.target.value : undefined }))}
          />
          <TextField size="small" label="Max" type="number"
            value={filters.maxHeadM ?? ''}
            onChange={e => setFilters(prev => ({ ...prev, maxHeadM: e.target.value ? +e.target.value : undefined }))}
          />
        </Stack>
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      {/* Power */}
      <FilterGroup title="POWER (kW)">
        <Stack direction="row" spacing={1} mt={1}>
          <TextField size="small" label="Min" type="number"
            value={filters.minPowerKw ?? ''}
            onChange={e => setFilters(prev => ({ ...prev, minPowerKw: e.target.value ? +e.target.value : undefined }))}
          />
          <TextField size="small" label="Max" type="number"
            value={filters.maxPowerKw ?? ''}
            onChange={e => setFilters(prev => ({ ...prev, maxPowerKw: e.target.value ? +e.target.value : undefined }))}
          />
        </Stack>
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      {/* Outlet Size */}
      <FilterGroup title="OUTLET SIZE">
        {loading ? <Skeleton height={80} /> :
          <MultiCheckbox
            options={filterOptions?.outletSizes ?? []}
            selected={filters.outletSize}
            onChange={v => toggle('outletSize', v)}
          />
        }
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      {/* Impeller Trim */}
      <FilterGroup title="IMPELLER TRIM">
        {loading ? <Skeleton height={60} /> :
          <MultiCheckbox
            options={filterOptions?.impellerTrims ?? []}
            selected={filters.impellerTrim}
            onChange={v => toggle('impellerTrim', v)}
            labelFn={v => v === 'A' ? 'A — One Trimmed' : 'AA — Two Trimmed'}
          />
        }
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      {/* Motor Diameter */}
      <FilterGroup title="MOTOR DIAMETER">
        {loading ? <Skeleton height={60} /> :
          <MultiCheckbox
            options={filterOptions?.motorDiameters ?? []}
            selected={filters.motorDiameter}
            onChange={v => toggle('motorDiameter', v)}
            labelFn={v => `${v}"`}
          />
        }
      </FilterGroup>
    </Box>
  )
}