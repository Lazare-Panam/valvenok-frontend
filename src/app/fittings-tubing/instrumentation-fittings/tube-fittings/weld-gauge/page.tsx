'use client'
import { useState, useMemo } from 'react'
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, TablePagination, TableSortLabel, Collapse, Chip, Stack,
  IconButton, Accordion, AccordionSummary, AccordionDetails,
  FormGroup, FormControlLabel, Checkbox, Divider, ToggleButtonGroup, ToggleButton
} from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import FilterListIcon from '@mui/icons-material/FilterList'
import { useMediaQuery, Drawer } from '@mui/material'
import { WELD_GAUGE_DATA, type WeldGaugeItem } from './weldGaugeData'

const FITTING_TYPE_LABELS: Record<string, string> = {
  "Male Pipe Weld Connector": "Male Pipe Weld Connector (PMWC)",
  "Male Pipe Weld Elbow": "Male Pipe Weld Elbow (PMWE)",
  "Tube Socket Weld Connector": "Tube Socket Weld Connector (PSWC)",
  "Tube Socket Weld Elbow": "Tube Socket Weld Elbow (PSWE)",
  "Gauge Connector": "Gauge Connector (PGC)",
}

const THREAD_TYPE_LABELS: Record<string, string> = {
  BSPP: "BSPP",
  Metric: "Metric",
}

const IMPERIAL_ODS = ['1/8', '3/16', '1/4', '5/16', '3/8', '1/2', '5/8', '3/4', '1', '1-1/4', '1-1/2', '2']
const METRIC_ODS = ['3', '4', '6', '8', '10', '12', '14', '15', '16', '18', '20', '22', '25', '32', '38']

interface Filters {
  fittingTypes: string[]
  tubeODs: string[]
  tubeODUnits: string[]
  threadTypes: string[]
}

const EMPTY_FILTERS: Filters = { fittingTypes: [], tubeODs: [], tubeODUnits: [], threadTypes: [] }

function FilterGroup({ title, count, children }: { title: string; count?: number; children: React.ReactNode }) {
  const theme = useTheme()
  return (
    <Accordion defaultExpanded disableGutters elevation={0} sx={{ bgcolor: 'transparent', '&:before': { display: 'none' }, mb: 0.5 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, '& .MuiAccordionSummary-content': { my: 0.5 } }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" fontWeight={700} color="text.primary">{title}</Typography>
          {count ? <Chip label={count} size="small" sx={{ height: 16, fontSize: '0.65rem', bgcolor: theme.palette.primary.main, color: '#fff' }} /> : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}>
        <FormGroup>{children}</FormGroup>
      </AccordionDetails>
    </Accordion>
  )
}

function Sidebar({ filters, setFilters, activeCount }: { filters: Filters; setFilters: React.Dispatch<React.SetStateAction<Filters>>; activeCount: number }) {
  const theme = useTheme()

  const toggle = (key: keyof Filters, val: string) =>
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(val) ? prev[key].filter(v => v !== val) : [...prev[key], val],
    }))

  const toggleSx = {
    '& .MuiToggleButton-root': { fontSize: '0.7rem', py: 0.5, px: 1, textTransform: 'none' },
    '& .Mui-selected': { bgcolor: `${theme.palette.primary.main} !important`, color: '#fff !important' },
  }

  const selectedUnit = filters.tubeODUnits[0] ?? 'all'
  const visibleODs = selectedUnit === 'Imperial' ? IMPERIAL_ODS : selectedUnit === 'Metric' ? METRIC_ODS : [...IMPERIAL_ODS, ...METRIC_ODS]

  return (
    <Box sx={{ width: 260, flexShrink: 0, p: 2, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', overflowY: 'auto', boxSizing: 'border-box' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FILTER</Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: theme.palette.primary.main }} onClick={() => setFilters(EMPTY_FILTERS)}>Clear all</Typography>
        )}
      </Stack>

      <FilterGroup title="FITTING TYPE" count={filters.fittingTypes.length || undefined}>
        {Object.keys(FITTING_TYPE_LABELS).map(opt => (
          <FormControlLabel key={opt}
            control={<Checkbox size="small" checked={filters.fittingTypes.includes(opt)} onChange={() => toggle('fittingTypes', opt)} sx={{ py: 0.25, '&.Mui-checked': { color: theme.palette.primary.main } }} />}
            label={<Typography variant="body2" fontSize="0.78rem">{FITTING_TYPE_LABELS[opt]}</Typography>}
          />
        ))}
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="TUBE OD" count={filters.tubeODs.length || undefined}>
        <ToggleButtonGroup exclusive size="small" sx={{ mt: 0.5, mb: 1.5, ...toggleSx }}
          value={selectedUnit}
          onChange={(_, val) => { if (!val) return; setFilters(prev => ({ ...prev, tubeODUnits: val === 'all' ? [] : [val], tubeODs: [] })) }}>
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="Imperial">Imperial</ToggleButton>
          <ToggleButton value="Metric">Metric</ToggleButton>
        </ToggleButtonGroup>
        {visibleODs.map(opt => (
          <FormControlLabel key={opt}
            control={<Checkbox size="small" checked={filters.tubeODs.includes(opt)} onChange={() => toggle('tubeODs', opt)} sx={{ py: 0.25, '&.Mui-checked': { color: theme.palette.primary.main } }} />}
            label={<Typography variant="body2" fontSize="0.78rem">{opt}</Typography>}
          />
        ))}
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="THREAD TYPE (Gauge)" count={filters.threadTypes.length || undefined}>
        {Object.keys(THREAD_TYPE_LABELS).map(opt => (
          <FormControlLabel key={opt}
            control={<Checkbox size="small" checked={filters.threadTypes.includes(opt)} onChange={() => toggle('threadTypes', opt)} sx={{ py: 0.25, '&.Mui-checked': { color: theme.palette.primary.main } }} />}
            label={<Typography variant="body2" fontSize="0.78rem">{THREAD_TYPE_LABELS[opt]}</Typography>}
          />
        ))}
      </FilterGroup>
    </Box>
  )
}

function Spec({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.disabled" fontWeight={700} sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25 }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600}>{value}</Typography>
    </Box>
  )
}

function Row({ row }: { row: WeldGaugeItem }) {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const unitShort = row.tubeODUnit === 'Imperial' ? 'in' : 'mm'
  const unitFull = row.tubeODUnit === 'Imperial' ? 'inch' : 'mm'
  const isGauge = row.fittingType === 'Gauge Connector'

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{
        cursor: 'pointer',
        bgcolor: open ? alpha(theme.palette.primary.main, 0.04) : 'inherit',
        '&:hover': { bgcolor: `${alpha(theme.palette.primary.main, 0.03)} !important` },
      }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontFamily: 'monospace', fontWeight: 700, color: theme.palette.primary.main, fontSize: '0.8rem', py: 1 }}>{row.partNumber}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={FITTING_TYPE_LABELS[row.fittingType] ?? row.fittingType} size="small"
            sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: alpha(theme.palette.primary.main, 0.1), color: theme.palette.primary.dark }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>
          {row.tubeOD}
          <Typography component="span" variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>({unitShort})</Typography>
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>
          {isGauge ? row.threadSize : row.pipeSize}
          {isGauge && row.threadType && (
            <Chip label={THREAD_TYPE_LABELS[row.threadType] ?? row.threadType} size="small"
              sx={{ ml: 1, fontSize: '0.6rem', fontWeight: 600, bgcolor: alpha(theme.palette.primary.main, 0.08), color: theme.palette.primary.dark }} />
          )}
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={5} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.02), borderLeft: `4px solid ${theme.palette.primary.main}`, borderBottom: `1px solid ${theme.palette.divider}` }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  {row.imageUrl && (
                    <Box sx={{ width: 140, height: 140, flexShrink: 0, border: `1px solid ${theme.palette.divider}`, borderRadius: 1, bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }}>
                      <Box component="img" src={row.imageUrl} alt={row.partNumber} sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </Box>
                  )}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} color="primary" sx={{ display: 'block', mb: 2, letterSpacing: 1 }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3}>
                      <Spec label="Part Number" value={row.partNumber} />
                      <Spec label="Fitting Type" value={FITTING_TYPE_LABELS[row.fittingType] ?? row.fittingType} />
                      <Spec label="Tube OD" value={`${row.tubeOD} ${unitFull}`} />
                      {row.pipeSize && <Spec label="Pipe Size" value={row.pipeSize} />}
                      {row.threadSize && <Spec label="Thread Size" value={row.threadSize} />}
                      {row.threadType && <Spec label="Thread Type" value={THREAD_TYPE_LABELS[row.threadType] ?? row.threadType} />}
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  )
}

export default function WeldGaugeConnectorPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  const [sortKey, setSortKey] = useState('partNumber')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

  const filtered = useMemo(() => {
    return WELD_GAUGE_DATA.filter(r => {
      if (filters.fittingTypes.length && !filters.fittingTypes.includes(r.fittingType)) return false
      if (filters.tubeODUnits.length && !filters.tubeODUnits.includes(r.tubeODUnit)) return false
      if (filters.tubeODs.length && !filters.tubeODs.includes(r.tubeOD)) return false
      if (filters.threadTypes.length && (!r.threadType || !filters.threadTypes.includes(r.threadType))) return false
      return true
    })
  }, [filters])

  const sorted = [...filtered].sort((a, b) => {
    const av = (a as any)[sortKey] ?? '', bv = (b as any)[sortKey] ?? ''
    if (av < bv) return sortDir === 'asc' ? -1 : 1
    if (av > bv) return sortDir === 'asc' ? 1 : -1
    return 0
  })

  const paginated = sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  const activeCount = filters.fittingTypes.length + filters.tubeODs.length + filters.tubeODUnits.length + filters.threadTypes.length

  const handleSort = (key: string) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
  }

  const headerSx = {
    bgcolor: alpha(theme.palette.primary.main, 0.04),
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    fontWeight: 700, fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  }

  const sidebar = <Sidebar filters={filters} setFilters={setFilters} activeCount={activeCount} />

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h1" fontWeight={800} mb={1} sx={{ color: theme.palette.primary.main }}>
          Tube Fittings — Weld & Gauge Connectors
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          Stainless steel weld and gauge connector fittings including male pipe weld connectors, male pipe weld elbows, tube socket weld connectors, tube socket weld elbows and gauge connectors.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {['SS 316', 'Imperial & Metric', 'Pipe Butt Weld', 'Socket Weld', 'Gauge'].map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(theme.palette.primary.main, 0.08), color: theme.palette.primary.dark, border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}` }}>{s}</Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        {isMobile && <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}><FilterListIcon /></IconButton>}

        {activeCount > 0 && (
          <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
            <Typography variant="caption" color="text.secondary" fontWeight={700}>ACTIVE FILTERS:</Typography>
            {filters.fittingTypes.map(v => <Chip key={v} label={FITTING_TYPE_LABELS[v] ?? v} size="small" variant="outlined" sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }} onDelete={() => setFilters(p => ({ ...p, fittingTypes: p.fittingTypes.filter(x => x !== v) }))} />)}
            {filters.tubeODUnits.map(v => <Chip key={v} label={v} size="small" variant="outlined" sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }} onDelete={() => setFilters(p => ({ ...p, tubeODUnits: p.tubeODUnits.filter(x => x !== v), tubeODs: [] }))} />)}
            {filters.tubeODs.map(v => <Chip key={v} label={`OD: ${v}`} size="small" variant="outlined" sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }} onDelete={() => setFilters(p => ({ ...p, tubeODs: p.tubeODs.filter(x => x !== v) }))} />)}
            {filters.threadTypes.map(v => <Chip key={v} label={THREAD_TYPE_LABELS[v] ?? v} size="small" variant="outlined" sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }} onDelete={() => setFilters(p => ({ ...p, threadTypes: p.threadTypes.filter(x => x !== v) }))} />)}
          </Stack>
        )}

        <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          {filtered.length} CONFIGURATIONS
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'stretch', border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
          {!isMobile && sidebar}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <TableContainer>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ ...headerSx, width: 40 }} />
                    {[
                      { key: 'partNumber', label: 'Part Number' },
                      { key: 'fittingType', label: 'Fitting Type' },
                      { key: 'tubeOD', label: 'Tube OD' },
                      { key: null, label: 'Pipe / Thread' },
                    ].map((h, i) => (
                      <TableCell key={i} sx={headerSx}>
                        {h.key ? <TableSortLabel active={sortKey === h.key} direction={sortKey === h.key ? sortDir : 'asc'} onClick={() => handleSort(h.key!)}>{h.label}</TableSortLabel> : h.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginated.length === 0 ? (
                    <TableRow><TableCell colSpan={5} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary">No fittings found.</Typography></TableCell></TableRow>
                  ) : paginated.map(row => <Row key={row.id} row={row} />)}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination component="div" count={sorted.length} page={page} rowsPerPage={rowsPerPage}
              onPageChange={(_, p) => setPage(p)} onRowsPerPageChange={e => { setRowsPerPage(parseInt(e.target.value)); setPage(0) }}
              rowsPerPageOptions={[25, 50, 100]} sx={{ borderTop: `1px solid ${theme.palette.divider}` }} />
          </Box>
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
      </Box>
    </Box>
  )
}