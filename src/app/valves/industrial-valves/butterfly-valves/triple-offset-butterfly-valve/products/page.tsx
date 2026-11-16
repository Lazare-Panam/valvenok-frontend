'use client'
import { useMemo, useState } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Collapse, Chip, Typography, Stack, IconButton, Button,
  Accordion, AccordionSummary, AccordionDetails, FormGroup, FormControlLabel, Checkbox, Divider,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/butter-val.jpg'

interface TOBVModelDTO {
  id: string
  modelCode: string
  pressureClass: '150LB' | '300LB' | '600LB'
  endConnection: 'Wafer' | 'Lug' | 'Flange (Short)' | 'Flange (Long)' | 'Flange (Gate)'
  sizeRange: string
  tempRange: string
  features: string[]
  imageUrl: string
}

const TEMP_RANGE = '-75°C to +550°C (Laminated) / -100°C to +760°C (Metal Seat)'

const FEATURES_BASE = [
  'Bubble tight Class V shutoff — laminated and solid metal seat options available.',
  'API 607 fire safe, ISO 15848 fugitive emission approved, SIL 3 capable.',
]

const DATA: TOBVModelDTO[] = [
  // 150LB — DN100-DN1200 (4"-48")
  { id: 'vf-870a', modelCode: 'VF-870A', pressureClass: '150LB', endConnection: 'Wafer',           sizeRange: 'DN100–DN1200 (4"–48")', tempRange: TEMP_RANGE, features: ['ANSI Class 150LB rated to 19.6 bar at ambient temperature.', 'Wafer type end connection.', ...FEATURES_BASE], imageUrl: IMAGE },
  { id: 'vf-873a', modelCode: 'VF-873A', pressureClass: '150LB', endConnection: 'Lug',              sizeRange: 'DN100–DN1200 (4"–48")', tempRange: TEMP_RANGE, features: ['ANSI Class 150LB rated to 19.6 bar at ambient temperature.', 'Lug type end connection.', ...FEATURES_BASE], imageUrl: IMAGE },
  { id: 'vf-876a', modelCode: 'VF-876A', pressureClass: '150LB', endConnection: 'Flange (Short)',   sizeRange: 'DN100–DN1200 (4"–48")', tempRange: TEMP_RANGE, features: ['ANSI Class 150LB rated to 19.6 bar at ambient temperature.', 'Flanged, short face-to-face pattern.', ...FEATURES_BASE], imageUrl: IMAGE },
  { id: 'vf-877a', modelCode: 'VF-877A', pressureClass: '150LB', endConnection: 'Flange (Long)',    sizeRange: 'DN100–DN1200 (4"–48")', tempRange: TEMP_RANGE, features: ['ANSI Class 150LB rated to 19.6 bar at ambient temperature.', 'Flanged, long face-to-face pattern.', ...FEATURES_BASE], imageUrl: IMAGE },
  { id: 'vf-878a', modelCode: 'VF-878A', pressureClass: '150LB', endConnection: 'Flange (Gate)',    sizeRange: 'DN100–DN1200 (4"–48")', tempRange: TEMP_RANGE, features: ['ANSI Class 150LB rated to 19.6 bar at ambient temperature.', 'Flanged gate type — also available as a jacketed valve.', ...FEATURES_BASE], imageUrl: IMAGE },

  // 300LB — DN100-DN900 (4"-36")
  { id: 'vf-880a', modelCode: 'VF-880A', pressureClass: '300LB', endConnection: 'Wafer',           sizeRange: 'DN100–DN900 (4"–36")', tempRange: TEMP_RANGE, features: ['ANSI Class 300LB rated to 51.1 bar at ambient temperature.', 'Wafer type end connection.', ...FEATURES_BASE], imageUrl: IMAGE },
  { id: 'vf-883a', modelCode: 'VF-883A', pressureClass: '300LB', endConnection: 'Lug',             sizeRange: 'DN100–DN900 (4"–36")', tempRange: TEMP_RANGE, features: ['ANSI Class 300LB rated to 51.1 bar at ambient temperature.', 'Lug type end connection.', ...FEATURES_BASE], imageUrl: IMAGE },
  { id: 'vf-886a', modelCode: 'VF-886A', pressureClass: '300LB', endConnection: 'Flange (Short)',  sizeRange: 'DN100–DN900 (4"–36")', tempRange: TEMP_RANGE, features: ['ANSI Class 300LB rated to 51.1 bar at ambient temperature.', 'Flanged, short face-to-face pattern.', ...FEATURES_BASE], imageUrl: IMAGE },
  { id: 'vf-887a', modelCode: 'VF-887A', pressureClass: '300LB', endConnection: 'Flange (Long)',   sizeRange: 'DN100–DN900 (4"–36")', tempRange: TEMP_RANGE, features: ['ANSI Class 300LB rated to 51.1 bar at ambient temperature.', 'Flanged, long face-to-face pattern.', ...FEATURES_BASE], imageUrl: IMAGE },
  { id: 'vf-888a', modelCode: 'VF-888A', pressureClass: '300LB', endConnection: 'Flange (Gate)',   sizeRange: 'DN100–DN900 (4"–36")', tempRange: TEMP_RANGE, features: ['ANSI Class 300LB rated to 51.1 bar at ambient temperature.', 'Flanged gate type.', ...FEATURES_BASE], imageUrl: IMAGE },

  // 600LB — DN100-DN600 (4"-24")
  { id: 'vf-890a', modelCode: 'VF-890A', pressureClass: '600LB', endConnection: 'Wafer',           sizeRange: 'DN100–DN600 (4"–24")', tempRange: TEMP_RANGE, features: ['ANSI Class 600LB rated to 102.1 bar at ambient temperature.', 'Wafer type end connection.', ...FEATURES_BASE], imageUrl: IMAGE },
  { id: 'vf-893a', modelCode: 'VF-893A', pressureClass: '600LB', endConnection: 'Lug',             sizeRange: 'DN100–DN600 (4"–24")', tempRange: TEMP_RANGE, features: ['ANSI Class 600LB rated to 102.1 bar at ambient temperature.', 'Lug type end connection.', ...FEATURES_BASE], imageUrl: IMAGE },
  { id: 'vf-896a', modelCode: 'VF-896A', pressureClass: '600LB', endConnection: 'Flange (Short)',  sizeRange: 'DN100–DN600 (4"–24")', tempRange: TEMP_RANGE, features: ['ANSI Class 600LB rated to 102.1 bar at ambient temperature.', 'Flanged, short face-to-face pattern.', ...FEATURES_BASE], imageUrl: IMAGE },
  { id: 'vf-897a', modelCode: 'VF-897A', pressureClass: '600LB', endConnection: 'Flange (Long)',   sizeRange: 'DN100–DN600 (4"–24")', tempRange: TEMP_RANGE, features: ['ANSI Class 600LB rated to 102.1 bar at ambient temperature.', 'Flanged, long face-to-face pattern.', ...FEATURES_BASE], imageUrl: IMAGE },
  { id: 'vf-898a', modelCode: 'VF-898A', pressureClass: '600LB', endConnection: 'Flange (Gate)',   sizeRange: 'DN100–DN600 (4"–24")', tempRange: TEMP_RANGE, features: ['ANSI Class 600LB rated to 102.1 bar at ambient temperature.', 'Flanged gate type.', ...FEATURES_BASE], imageUrl: IMAGE },
]

interface FilterParams {
  pressureClass?: string[]
  endConnection?: string[]
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Accordion defaultExpanded disableGutters elevation={0}
      sx={{ bgcolor: 'transparent', '&:before': { display: 'none' }, mb: 1 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />}
        sx={{ px: 0, minHeight: 40, '& .MuiAccordionSummary-content': { my: 1 } }}>
        <Typography variant="caption" fontWeight={700} sx={{ fontFamily: PRIMARY_FONT }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}>
        <FormGroup>{children}</FormGroup>
      </AccordionDetails>
    </Accordion>
  )
}

function MultiCheckbox({ options, selected, onChange }: { options: string[]; selected?: string[]; onChange: (val: string) => void }) {
  return (
    <>
      {options.map(opt => (
        <FormControlLabel key={opt}
          control={<Checkbox size="small" checked={selected?.includes(opt) ?? false} onChange={() => onChange(opt)} />}
          label={<Typography variant="body2" sx={{ fontFamily: PRIMARY_FONT }}>{opt}</Typography>}
        />
      ))}
    </>
  )
}

function TOBVSidebar({ filters, setFilters, onClear }: {
  filters: FilterParams
  setFilters: (fn: (prev: FilterParams) => FilterParams) => void
  onClear: () => void
}) {
  const activeCount = Object.values(filters).filter(v => v !== undefined && v.length > 0).length
  const pressureClasses = [...new Set(DATA.map(d => d.pressureClass))]
  const endConnections = [...new Set(DATA.map(d => d.endConnection))]

  const toggle = (key: keyof FilterParams, val: string) => {
    setFilters(prev => {
      const current = prev[key] ?? []
      const updated = current.includes(val) ? current.filter(v => v !== val) : [...current, val]
      return { ...prev, [key]: updated.length > 0 ? updated : undefined }
    })
  }

  return (
    <Box sx={{
      width: 260, flexShrink: 0, p: 3,
      borderRight: '1px solid rgba(0,0,0,0.08)',
      bgcolor: 'background.paper', position: 'sticky', top: 0,
      alignSelf: 'flex-start', maxHeight: '100vh', overflowY: 'auto',
    }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary" sx={{ fontFamily: PRIMARY_FONT }}>
          SPECIFICATIONS
        </Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ color: BRAND_GREEN, cursor: 'pointer', fontFamily: PRIMARY_FONT }} onClick={onClear}>
            Clear all
          </Typography>
        )}
      </Stack>

      <FilterGroup title="PRESSURE CLASS">
        <MultiCheckbox options={pressureClasses} selected={filters.pressureClass} onChange={v => toggle('pressureClass', v)} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="END CONNECTION">
        <MultiCheckbox options={endConnections} selected={filters.endConnection} onChange={v => toggle('endConnection', v)} />
      </FilterGroup>
    </Box>
  )
}

function ActiveFilters({ filters, setFilters }: {
  filters: FilterParams
  setFilters: (fn: (prev: FilterParams) => FilterParams) => void
}) {
  const LABELS: Record<keyof FilterParams, string> = { pressureClass: 'Class', endConnection: 'End' }
  const active: { key: keyof FilterParams; label: string; value: string }[] = []

  ;(Object.keys(filters) as (keyof FilterParams)[]).forEach(key => {
    filters[key]?.forEach(v => active.push({ key, label: `${LABELS[key]}: ${v}`, value: v }))
  })

  if (active.length === 0) return null

  const remove = (key: keyof FilterParams, value: string) => {
    setFilters(prev => {
      const updated = (prev[key] ?? []).filter(v => v !== value)
      return { ...prev, [key]: updated.length > 0 ? updated : undefined }
    })
  }

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.disabled" fontWeight={700} sx={{ fontFamily: PRIMARY_FONT }}>
        ACTIVE FILTERS:
      </Typography>
      {active.map((f, i) => (
        <Chip key={`${f.key}-${f.value}-${i}`} label={f.label} size="small" variant="outlined"
          onDelete={() => remove(f.key, f.value)}
          sx={{ borderColor: BRAND_GREEN, color: BRAND_GREEN }} />
      ))}
    </Stack>
  )
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>{value}</Typography>
    </Box>
  )
}

function TOBVRow({ row }: { row: TOBVModelDTO }) {
  const [open, setOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)

  const openQuote = () => setQuoteProduct({
    id: row.id,
    name: `Value Valves ${row.modelCode} Triple Offset Butterfly Valve`,
    brand: 'Value Valves',
    category: 'Butterfly Valves',
    categoryId: 'butterfly-valves',
    subCategory: 'Triple Offset',
    thumbnail: row.imageUrl,
    description: row.features.join(' '),
    keySpecs: [
      { label: 'Model',          value: row.modelCode },
      { label: 'Pressure Class', value: row.pressureClass },
      { label: 'End Connection', value: row.endConnection },
      { label: 'Size Range',     value: row.sizeRange },
    ],
    variantInfo: { count: 1, sizeRange: row.sizeRange },
  })

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)}
        sx={{ cursor: 'pointer', bgcolor: open ? alpha(BRAND_GREEN, 0.04) : 'inherit', '&:hover': { bgcolor: `${alpha(BRAND_GREEN, 0.03)} !important` } }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT, fontWeight: 700 }}>{row.modelCode}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.pressureClass} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: BRAND_GREEN, color: BRAND_GREEN }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.endConnection}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.sizeRange}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained"
            onClick={e => { e.stopPropagation(); openQuote() }}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'capitalize',
              whiteSpace: 'nowrap', bgcolor: BRAND_GREEN, color: '#fff', boxShadow: 'none',
              '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
            Request Quote
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={6} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_GREEN, 0.02), borderLeft: `4px solid ${BRAND_GREEN}`, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 160, height: 160, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: '8px', overflow: 'hidden', bgcolor: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={row.imageUrl} alt={row.modelCode}
                      sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900}
                      sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
                      SPECIFICATIONS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Model"          value={row.modelCode} />
                      <Spec label="Pressure Class" value={row.pressureClass} />
                      <Spec label="End Connection" value={row.endConnection} />
                      <Spec label="Size Range"     value={row.sizeRange} />
                      <Spec label="Temperature"    value={row.tempRange} />
                    </Stack>
                    <Typography variant="caption" fontWeight={900}
                      sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
                      KEY FEATURES
                    </Typography>
                    <Box component="ul" sx={{ m: 0, pl: 2, mb: 3 }}>
                      {row.features.map((f, i) => (
                        <Box component="li" key={i} sx={{ mb: 1 }}>
                          <Typography variant="body2" color="text.secondary" sx={{ fontFamily: PRIMARY_FONT, lineHeight: 1.6 }}>
                            {f}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    <Button variant="contained" onClick={openQuote}
                      sx={{ textTransform: 'capitalize', fontWeight: 700, borderRadius: '6px',
                        bgcolor: BRAND_GREEN, color: '#fff', '&:hover': { bgcolor: '#50c23a' },
                        fontFamily: PRIMARY_FONT }}>
                      Request Quote
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}

      {quoteProduct && (
        <RFQModal open={!!quoteProduct} onClose={() => setQuoteProduct(null)} product={quoteProduct} />
      )}
    </>
  )
}

const headerSx = {
  bgcolor: alpha(BRAND_GREEN, 0.04),
  borderBottom: `2px solid ${BRAND_GREEN}`,
  fontWeight: 700, fontSize: '0.72rem',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
  fontFamily: PRIMARY_FONT,
}

export default function TOBVProductsPage() {
  const [filters, setFilters] = useState<FilterParams>({})

  const filtered = useMemo(() => DATA.filter(d =>
    (!filters.pressureClass || filters.pressureClass.includes(d.pressureClass)) &&
    (!filters.endConnection || filters.endConnection.includes(d.endConnection))
  ), [filters])

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <TOBVSidebar filters={filters} setFilters={setFilters} onClear={() => setFilters({})} />

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
          <Box sx={{ mb: 2 }}>
            <Box component="img"
              src="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/logo.svg"
              alt="Value Valves"
              sx={{ height: 28, objectFit: "contain" }}
            />
          </Box>
          <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
            VF-8A Series — Triple Offset Butterfly Valves
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
            High performance triple offset butterfly valves across ANSI 150LB, 300LB and 600LB pressure classes, each in wafer, lug, and three flanged configurations. API 609, API 607 fire safe, SIL 3 capable.
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
          <Typography variant="caption" fontWeight={700} color="text.disabled"
            sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
            {`${filtered.length} MODELS`}
          </Typography>
          <ActiveFilters filters={filters} setFilters={setFilters} />
          <Box sx={{ border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
            <TableContainer>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ ...headerSx, width: 40 }} />
                    <TableCell sx={headerSx}>Model</TableCell>
                    <TableCell sx={headerSx}>Pressure Class</TableCell>
                    <TableCell sx={headerSx}>End Connection</TableCell>
                    <TableCell sx={headerSx}>Size Range</TableCell>
                    <TableCell sx={headerSx}>Quote</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filtered.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} align="center" sx={{ py: 6 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: PRIMARY_FONT }}>No models found.</Typography>
                      </TableCell>
                    </TableRow>
                  ) : filtered.map(row => <TOBVRow key={row.id} row={row} />)}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}