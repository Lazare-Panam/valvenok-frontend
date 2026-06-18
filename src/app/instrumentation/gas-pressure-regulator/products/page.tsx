'use client'
import { useState, useMemo } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Collapse, Typography, Stack, IconButton, Button,
  Accordion, AccordionSummary, AccordionDetails, FormGroup, FormControlLabel,
  Checkbox, Chip, Drawer, useMediaQuery,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import EmailIcon from '@mui/icons-material/Email'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FilterListIcon from '@mui/icons-material/FilterList'

const BRAND_GREEN = '#61D649'
const QUOTE_EMAIL = 'sales@valvenok.com'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

// ─── DATA ────────────────────────────────────────────────────────────────────

interface GasRegulatorDTO {
  id: string
  model: string
  type: string
  nominalSizes: string
  designPressure: string
  inletPressure: string
  outletPressure: string
  designTemp: string
  connections: string
  accuracyClass: string
  lockUpClass: string
  standard: string
  failMode: string
  hydrogenReady: string
  image: string
  description: string
  badges: string[]
}

const GAS_REGULATORS: GasRegulatorDTO[] = [
  {
    id: 'dival-160-ap',
    model: 'Dival 160 AP',
    type: 'Direct Operated',
    nominalSizes: 'DN 1"',
    designPressure: '85 bar',
    inletPressure: '1.4 – 85 bar',
    outletPressure: '0.85 – 4.5 bar',
    designTemp: '-20°C to +60°C',
    connections: 'ASME B16.5 Class 300 & 600 RF / RTJ',
    accuracyClass: 'AC up to 5',
    lockUpClass: 'SG up to 10',
    standard: 'EN 334',
    failMode: 'Fail Open',
    hydrogenReady: 'Yes — NG-H2 blending',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/gas-regulator/dival-160-ap.jpg',
    description: 'Dival 160 AP is a direct-operated gas pressure regulator controlled by a diaphragm and contrasting regulated spring action. Classified as Fail Open per EN 334. Suitable for high-pressure transmission systems and medium pressure natural gas distribution networks. Hydrogen Ready for NG-H2 blending.',
    badges: ['Direct Operated', 'Fail Open', 'EN 334', 'H2 Ready', 'DN 1"', '85 bar'],
  },
  {
    id: 'staflux-185',
    model: 'Staflux 185',
    type: 'Direct Operated',
    nominalSizes: 'DN 1", 2", 3"',
    designPressure: 'Up to 100 bar',
    inletPressure: '2 – 85 bar',
    outletPressure: '1 – 75 bar',
    designTemp: '-20°C to +60°C',
    connections: 'ASME B16.5 Class 300 & 600 RF / RTJ',
    accuracyClass: 'AC up to 5',
    lockUpClass: 'SG up to 10',
    standard: 'EN 334',
    failMode: 'Fail Open',
    hydrogenReady: '—',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/gas-regulator/staflux-185.jpg',
    description: 'Staflux 185 is a direct-operated gas pressure regulator controlled by a diaphragm and contrasting regulated counter pressure action. Suitable for high-pressure transmission systems and medium pressure natural gas distribution networks. Classified as Fail Open per EN 334. Available in DN 1", 2" and 3".',
    badges: ['Direct Operated', 'Fail Open', 'EN 334', 'DN 1"–3"', '100 bar'],
  },
  {
    id: 'staflux-187',
    model: 'Staflux 187',
    type: 'Direct Operated',
    nominalSizes: 'DN 1"',
    designPressure: 'Up to 250 bar',
    inletPressure: '2 – 250 bar',
    outletPressure: '1 – 75 bar',
    designTemp: '-20°C to +60°C',
    connections: 'ASME B16.5 Class 1500 RF / RTJ',
    accuracyClass: 'AC up to 5',
    lockUpClass: 'SG up to 10',
    standard: 'EN 334',
    failMode: 'Fail Open',
    hydrogenReady: 'Yes — NG-H2 blending',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/gas-regulator/staflux-187.jpg',
    description: 'Staflux 187 is a direct-operated pressure regulator controlled by a diaphragm and contrasting regulated counter pressure action. Suitable for high-pressure transmission systems and medium pressure natural gas distribution networks up to 250 bar. Classified as Fail Open per EN 334. Hydrogen Ready for NG-H2 blending. 100% hydrogen version available separately.',
    badges: ['Direct Operated', 'Fail Open', 'EN 334', 'H2 Ready', 'DN 1"', '250 bar'],
  },
  {
    id: 'staflux-mini',
    model: 'Staflux Mini',
    type: 'Direct Operated',
    nominalSizes: '—',
    designPressure: '—',
    inletPressure: '—',
    outletPressure: '—',
    designTemp: '—',
    connections: '—',
    accuracyClass: '—',
    lockUpClass: '—',
    standard: 'EN 334',
    failMode: 'Fail Open',
    hydrogenReady: '—',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/gas-regulator/staflux-mini.jpg',
    description: 'Staflux Mini is a compact direct-operated gas pressure regulator by Pietro Fiorentini for high and medium pressure natural gas distribution service. Contact us for full technical specifications.',
    badges: ['Direct Operated', 'Fail Open', 'EN 334', 'Compact'],
  },
]

// ─── FILTERS ─────────────────────────────────────────────────────────────────

interface Filters {
  types: string[]
  hydrogenReady: string[]
}

const EMPTY_FILTERS: Filters = { types: [], hydrogenReady: [] }

function applyFilters(data: GasRegulatorDTO[], filters: Filters): GasRegulatorDTO[] {
  return data.filter(v => {
    if (filters.types.length && !filters.types.includes(v.type)) return false
    if (filters.hydrogenReady.length && !filters.hydrogenReady.includes(v.hydrogenReady === '—' ? 'No' : 'Yes')) return false
    return true
  })
}

// ─── MAILTO ──────────────────────────────────────────────────────────────────

function buildMailto(v: GasRegulatorDTO) {
  const subject = encodeURIComponent(`Quote Request — ${v.model}`)
  const body = encodeURIComponent([
    `Hello,`,
    ``,
    `I would like to request a quote for the following gas pressure regulator:`,
    ``,
    `Model:            ${v.model}`,
    `Type:             ${v.type}`,
    `Nominal Sizes:    ${v.nominalSizes}`,
    `Design Pressure:  ${v.designPressure}`,
    `Inlet Pressure:   ${v.inletPressure}`,
    `Outlet Pressure:  ${v.outletPressure}`,
    `Connections:      ${v.connections}`,
    ``,
    `Please provide availability and lead time.`,
    ``,
    `Kind regards`,
  ].join('\n'))
  return `mailto:${QUOTE_EMAIL}?subject=${subject}&body=${body}`
}

// ─── SPEC CELL ───────────────────────────────────────────────────────────────

function Spec({ label, value }: { label: string; value: string }) {
  if (!value || value === '—') return null
  return (
    <Box sx={{ minWidth: 140 }}>
      <Typography variant="caption" color="text.disabled" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontSize: '0.65rem', letterSpacing: '0.05em' }}>
        {label}
      </Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>{value}</Typography>
    </Box>
  )
}

// ─── TABLE ROW ───────────────────────────────────────────────────────────────

function RegulatorRow({ row }: { row: GasRegulatorDTO }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{
        cursor: 'pointer',
        bgcolor: open ? alpha(BRAND_GREEN, 0.03) : 'inherit',
        '&:hover': { bgcolor: `${alpha(BRAND_GREEN, 0.03)} !important` },
      }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}
            sx={{ border: '1px solid', borderColor: open ? BRAND_GREEN : 'rgba(0,0,0,0.2)', borderRadius: '4px', color: open ? BRAND_GREEN : 'text.disabled' }}>
            {open ? <KeyboardArrowUpIcon sx={{ fontSize: 12 }} /> : <KeyboardArrowDownIcon sx={{ fontSize: 12 }} />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontWeight: 700, fontSize: '0.82rem', py: 1, fontFamily: 'monospace', color: BRAND_GREEN }}>{row.model}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.nominalSizes}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.designPressure}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.inletPressure}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.outletPressure}</TableCell>
        <TableCell sx={{ py: 1 }}>
          {row.hydrogenReady !== '—'
            ? <Chip label="H2 Ready" size="small" sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: alpha(BRAND_GREEN, 0.1), color: '#2d8a1e' }} />
            : <Typography variant="caption" color="text.disabled">—</Typography>
          }
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained"
            startIcon={<EmailIcon sx={{ fontSize: 13 }} />}
            component="a" href={buildMailto(row)} onClick={e => e.stopPropagation()}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'none', whiteSpace: 'nowrap', bgcolor: BRAND_GREEN, color: '#fff', boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
            Request Quote
          </Button>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell colSpan={8} sx={{ p: 0, borderBottom: open ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ p: 3, bgcolor: alpha(BRAND_GREEN, 0.02), borderLeft: `4px solid ${BRAND_GREEN}`, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                <Box sx={{ width: 180, height: 180, flexShrink: 0, border: `1px solid ${alpha(BRAND_GREEN, 0.15)}`, borderRadius: 2, bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
                  <Box component="img" src={row.image} alt={row.model} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 1, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>DESCRIPTION</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6, fontFamily: PRIMARY_FONT }}>{row.description}</Typography>
                  <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                  <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                    <Spec label="Model" value={row.model} />
                    <Spec label="Nominal Sizes" value={row.nominalSizes} />
                    <Spec label="Design Pressure" value={row.designPressure} />
                    <Spec label="Inlet Pressure" value={row.inletPressure} />
                    <Spec label="Outlet Pressure" value={row.outletPressure} />
                    <Spec label="Design Temperature" value={row.designTemp} />
                    <Spec label="Connections" value={row.connections} />
                    <Spec label="Accuracy Class" value={row.accuracyClass} />
                    <Spec label="Lock-Up Class" value={row.lockUpClass} />
                    <Spec label="Standard" value={row.standard} />
                    <Spec label="Fail Mode" value={row.failMode} />
                    <Spec label="Hydrogen Ready" value={row.hydrogenReady} />
                  </Stack>
                  <Button variant="contained" startIcon={<EmailIcon />}
                    component="a" href={buildMailto(row)}
                    sx={{ textTransform: 'none', fontWeight: 700, borderRadius: '6px', bgcolor: BRAND_GREEN, color: '#fff', boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' }, fontFamily: PRIMARY_FONT }}>
                    Request Quote
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

// ─── TABLE ───────────────────────────────────────────────────────────────────

function RegulatorTable({ models }: { models: GasRegulatorDTO[] }) {
  const headerSx = {
    bgcolor: alpha(BRAND_GREEN, 0.04),
    borderBottom: `2px solid ${BRAND_GREEN}`,
    fontSize: '0.72rem', fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    color: 'text.primary', py: 1.5,
  }
  return (
    <Box sx={{ flex: 1, minWidth: 0 }}>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={headerSx} />
              <TableCell sx={headerSx}>Model</TableCell>
              <TableCell sx={headerSx}>Size</TableCell>
              <TableCell sx={headerSx}>Design Pressure</TableCell>
              <TableCell sx={headerSx}>Inlet Pressure</TableCell>
              <TableCell sx={headerSx}>Outlet Pressure</TableCell>
              <TableCell sx={headerSx}>H2 Ready</TableCell>
              <TableCell sx={headerSx} align="center">Quote</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {models.length === 0
              ? <TableRow><TableCell colSpan={8} sx={{ py: 6, textAlign: 'center' }}><Typography variant="body2" color="text.secondary">No regulators match the current filters.</Typography></TableCell></TableRow>
              : models.map(row => <RegulatorRow key={row.id} row={row} />)
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

// ─── SIDEBAR ─────────────────────────────────────────────────────────────────

function Sidebar({ filters, setFilters, activeCount }: {
  filters: Filters
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
  activeCount: number
}) {
  const toggleType = (v: string) =>
    setFilters(prev => ({ ...prev, types: prev.types.includes(v) ? prev.types.filter(x => x !== v) : [...prev.types, v] }))
  const toggleH2 = (v: string) =>
    setFilters(prev => ({ ...prev, hydrogenReady: prev.hydrogenReady.includes(v) ? prev.hydrogenReady.filter(x => x !== v) : [...prev.hydrogenReady, v] }))

  const typeOptions = Array.from(new Set(GAS_REGULATORS.map(v => v.type)))

  return (
    <Box sx={{ width: 200, flexShrink: 0, p: 2, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', boxSizing: 'border-box' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FILTER</Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: BRAND_GREEN }}
            onClick={() => setFilters(EMPTY_FILTERS)}>Clear all</Typography>
        )}
      </Stack>

      <Accordion disableGutters elevation={0} defaultExpanded sx={{ bgcolor: 'transparent', '&:before': { display: 'none' } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />}
          sx={{ px: 0, minHeight: 36, '& .MuiAccordionSummary-content': { my: 0.5 } }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="caption" fontWeight={700} color="text.primary">TYPE</Typography>
            {filters.types.length > 0 && <Chip label={filters.types.length} size="small" sx={{ height: 16, fontSize: '0.65rem', bgcolor: BRAND_GREEN, color: '#fff' }} />}
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0, pt: 0 }}>
          <FormGroup>
            {typeOptions.map(opt => (
              <FormControlLabel key={opt}
                control={<Checkbox size="small" checked={filters.types.includes(opt)} onChange={() => toggleType(opt)}
                  sx={{ py: 0.25, '&.Mui-checked': { color: BRAND_GREEN } }} />}
                label={<Typography variant="body2" fontSize="0.8rem">{opt}</Typography>}
                sx={{ mr: 0 }}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters elevation={0} defaultExpanded sx={{ bgcolor: 'transparent', '&:before': { display: 'none' } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />}
          sx={{ px: 0, minHeight: 36, '& .MuiAccordionSummary-content': { my: 0.5 } }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="caption" fontWeight={700} color="text.primary">HYDROGEN READY</Typography>
            {filters.hydrogenReady.length > 0 && <Chip label={filters.hydrogenReady.length} size="small" sx={{ height: 16, fontSize: '0.65rem', bgcolor: BRAND_GREEN, color: '#fff' }} />}
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0, pt: 0 }}>
          <FormGroup>
            {['Yes', 'No'].map(opt => (
              <FormControlLabel key={opt}
                control={<Checkbox size="small" checked={filters.hydrogenReady.includes(opt)} onChange={() => toggleH2(opt)}
                  sx={{ py: 0.25, '&.Mui-checked': { color: BRAND_GREEN } }} />}
                label={<Typography variant="body2" fontSize="0.8rem">{opt}</Typography>}
                sx={{ mr: 0 }}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

// ─── ACTIVE FILTERS ──────────────────────────────────────────────────────────

function ActiveFilters({ filters, setFilters }: { filters: Filters; setFilters: React.Dispatch<React.SetStateAction<Filters>> }) {
  const chips: { label: string; onDelete: () => void }[] = []
  filters.types.forEach(v => chips.push({ label: `Type: ${v}`, onDelete: () => setFilters(p => ({ ...p, types: p.types.filter(x => x !== v) })) }))
  filters.hydrogenReady.forEach(v => chips.push({ label: `H2 Ready: ${v}`, onDelete: () => setFilters(p => ({ ...p, hydrogenReady: p.hydrogenReady.filter(x => x !== v) })) }))
  if (!chips.length) return null
  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.disabled" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {chips.map(c => (
        <Chip key={c.label} label={c.label} size="small" variant="outlined"
          sx={{ borderColor: BRAND_GREEN, color: BRAND_GREEN }} onDelete={c.onDelete} />
      ))}
    </Stack>
  )
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function GasRegulatorPage() {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const models = useMemo(() => applyFilters(GAS_REGULATORS, filters), [filters])
  const activeCount = filters.types.length + filters.hydrogenReady.length

  const sidebar = <Sidebar filters={filters} setFilters={setFilters} activeCount={activeCount} />

  return (
    <>
      <title>Gas Pressure Regulators | Valvenok</title>
      <meta name="description" content="Pietro Fiorentini direct-operated gas pressure regulators — Dival 160 AP, Staflux 185, Staflux 187, Staflux Mini. High and medium pressure natural gas distribution. Hydrogen ready." />
      <meta property="og:title" content="Gas Pressure Regulators | Valvenok" />
      <meta property="og:type" content="product" />

      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
        <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
          <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
            Gas Pressure Regulators
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700, fontFamily: PRIMARY_FONT }}>
            Pietro Fiorentini direct-operated gas pressure regulators for high-pressure transmission systems and medium pressure natural gas distribution networks. Diaphragm-controlled, Fail Open per EN 334. Hydrogen Ready versions available.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {['Dival 160 AP · Staflux 185 · 187 · Mini', 'Direct Operated', 'Fail Open — EN 334', 'Up to 250 bar', 'H2 Ready'].map(s => (
              <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(BRAND_GREEN, 0.08), color: '#2d8a1e', border: `1px solid ${alpha(BRAND_GREEN, 0.3)}`, fontFamily: PRIMARY_FONT }}>
                {s}
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
          {isMobile && (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
              <FilterListIcon />
            </IconButton>
          )}
          <ActiveFilters filters={filters} setFilters={setFilters} />
          <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
            {`${models.length} MODELS`}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'stretch', border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
            {!isMobile && sidebar}
            <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
            <RegulatorTable models={models} />
          </Box>
        </Box>
      </Box>
    </>
  )
}