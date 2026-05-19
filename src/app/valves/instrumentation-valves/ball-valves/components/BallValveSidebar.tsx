'use client'
import {
  Box, Stack, Typography, Chip, Divider,
  Accordion, AccordionSummary, AccordionDetails,
  FormGroup, FormControlLabel, Checkbox, Skeleton
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { type BallValveFilters, EMPTY_BALL_VALVE_FILTERS, SERIES_LABELS, BODY_MATERIAL_LABELS } from './types'
import { type BallValveFilterOptions } from '../../../api/ballValveApi'

interface Props {
  filters: BallValveFilters
  setFilters: React.Dispatch<React.SetStateAction<BallValveFilters>>
  filterOptions?: BallValveFilterOptions
  filtersLoading: boolean
  activeCount: number
}

function FilterGroup({ title, count, children }: { title: string; count?: number; children: React.ReactNode }) {
  const theme = useTheme()
  return (
    <Accordion disableGutters elevation={0}
      sx={{ bgcolor: 'transparent', '&:before': { display: 'none' }, mb: 1 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />}
        sx={{ px: 0, minHeight: 40, '& .MuiAccordionSummary-content': { my: 1 } }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" fontWeight={700} color="text.primary">{title}</Typography>
          {count ? <Chip label={count} size="small" sx={{ height: 16, fontSize: '0.65rem', bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText }} /> : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}>
        <FormGroup>{children}</FormGroup>
      </AccordionDetails>
    </Accordion>
  )
}

function MultiCheckbox({ options, selected, onChange, loading, labelMap }: {
  options: string[]; selected: string[]; onChange: (v: string) => void; loading?: boolean; labelMap?: Record<string, string>
}) {
  const theme = useTheme()
  if (loading) return <Skeleton height={60} />
  if (!options?.length) return <Typography variant="caption" color="text.disabled" sx={{ pl: 1 }}>No options</Typography>
  return (
    <>
      {options.map(opt => (
        <FormControlLabel key={opt}
          control={<Checkbox size="small" checked={selected.includes(opt)} onChange={() => onChange(opt)}
            sx={{ '&.Mui-checked': { color: theme.palette.primary.main } }} />}
          label={<Typography variant="body2">{labelMap?.[opt] ?? opt}</Typography>}
        />
      ))}
    </>
  )
}

export function BallValveSidebar({ filters, setFilters, filterOptions, filtersLoading, activeCount }: Props) {
  const theme = useTheme()
  const toggle = (key: keyof BallValveFilters, val: string) =>
    setFilters(prev => ({ ...prev, [key]: prev[key].includes(val) ? prev[key].filter(v => v !== val) : [...prev[key], val] }))

  const hasPressureRatings = (filterOptions?.pressureRatings?.length ?? 0) > 0

  return (
    <Box sx={{
      width: 240, flexShrink: 0, p: 2,
      borderRight: '1px solid', borderColor: 'divider',
      bgcolor: 'background.paper',
      boxSizing: 'border-box',
    }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FIND YOUR VALVE</Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: theme.palette.primary.main }}
            onClick={() => setFilters(EMPTY_BALL_VALVE_FILTERS)}>Clear all</Typography>
        )}
      </Stack>

      <FilterGroup title="SERIES" count={filters.series.length || undefined}>
        <MultiCheckbox options={filterOptions?.series ?? []} selected={filters.series} onChange={v => toggle('series', v)} loading={filtersLoading} labelMap={SERIES_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="THREAD TYPE" count={filters.threadTypes.length || undefined}>
        <MultiCheckbox options={filterOptions?.threadTypes ?? []} selected={filters.threadTypes} onChange={v => toggle('threadTypes', v)} loading={filtersLoading} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="END CONNECTION" count={filters.endConnectionTypes.length || undefined}>
        <MultiCheckbox options={filterOptions?.endConnectionTypes ?? []} selected={filters.endConnectionTypes} onChange={v => toggle('endConnectionTypes', v)} loading={filtersLoading} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="CONNECTION SIZE" count={filters.connectionSizes.length || undefined}>
        <MultiCheckbox options={filterOptions?.connectionSizes ?? []} selected={filters.connectionSizes} onChange={v => toggle('connectionSizes', v)} loading={filtersLoading} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="CONFIGURATION" count={filters.configurations.length || undefined}>
        <MultiCheckbox options={filterOptions?.configurations ?? []} selected={filters.configurations} onChange={v => toggle('configurations', v)} loading={filtersLoading} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="SEAT MATERIAL" count={filters.seatMaterials.length || undefined}>
        <MultiCheckbox options={filterOptions?.seatMaterials ?? []} selected={filters.seatMaterials} onChange={v => toggle('seatMaterials', v)} loading={filtersLoading} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="HANDLE" count={filters.handles.length || undefined}>
        <MultiCheckbox options={filterOptions?.handles ?? []} selected={filters.handles} onChange={v => toggle('handles', v)} loading={filtersLoading} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />
      {hasPressureRatings && (
        <>
          <FilterGroup title="PRESSURE RATING" count={filters.pressureRatings.length || undefined}>
            <MultiCheckbox options={filterOptions?.pressureRatings ?? []} selected={filters.pressureRatings} onChange={v => toggle('pressureRatings', v)} loading={filtersLoading} />
          </FilterGroup>
          <Divider sx={{ my: 1 }} />
        </>
      )}
      <FilterGroup title="BODY MATERIAL" count={filters.bodyMaterials.length || undefined}>
        <MultiCheckbox options={filterOptions?.bodyMaterials ?? []} selected={filters.bodyMaterials} onChange={v => toggle('bodyMaterials', v)} loading={filtersLoading} labelMap={BODY_MATERIAL_LABELS} />
      </FilterGroup>
    </Box>
  )
}