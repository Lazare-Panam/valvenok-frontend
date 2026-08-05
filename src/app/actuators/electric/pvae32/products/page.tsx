'use client'
import { useState } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Collapse, Chip, Typography, Stack,
  IconButton, Button,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/danfoss/dfe-ac.png'

interface DanfossActuatorDTO {
  id: string
  name: string
  series: string
  signalType: string
  faultMonitoring: string
  voltage: string
  imageUrl: string
}

const DATA: DanfossActuatorDTO[] = [
  { id: '1',  name: 'PVEA32 Actuator S7 1X4DEU Active Fault Mon.',               series: 'PVEA32',  signalType: '1X4DEU', faultMonitoring: 'Active',  voltage: '—',   imageUrl: IMAGE },
  { id: '2',  name: 'PVEA32 Actuator DI S7 2X4AMP Active Fault Mon.',            series: 'PVEA32',  signalType: '2X4AMP', faultMonitoring: 'Active',  voltage: '—',   imageUrl: IMAGE },
  { id: '3',  name: 'PVEA32 Actuator S7 1X4AMP Passive Fault Mon.',              series: 'PVEA32',  signalType: '1X4AMP', faultMonitoring: 'Passive', voltage: '—',   imageUrl: IMAGE },
  { id: '4',  name: 'PVEA32 Actuator S7 1X4AMP Active Fault Mon.',               series: 'PVEA32',  signalType: '1X4AMP', faultMonitoring: 'Active',  voltage: '—',   imageUrl: IMAGE },
  { id: '5',  name: 'PVED32 Actuator CC S5 2X4DEU-H Isobus',                     series: 'PVED32',  signalType: '2X4DEU', faultMonitoring: '—',       voltage: '—',   imageUrl: IMAGE },
  { id: '6',  name: 'PVEH32 Actuator S7 1X4DEU Passive Fault Mon.',              series: 'PVEH32',  signalType: '1X4DEU', faultMonitoring: 'Passive', voltage: '—',   imageUrl: IMAGE },
  { id: '7',  name: 'PVEH32 Actuator S7 1X4DIN Active Fault Mon.',               series: 'PVEH32',  signalType: '1X4DIN', faultMonitoring: 'Active',  voltage: '—',   imageUrl: IMAGE },
  { id: '8',  name: 'PVEH32 Actuator S7 1X4AMP Active Fault Mon.',               series: 'PVEH32',  signalType: '1X4AMP', faultMonitoring: 'Active',  voltage: '—',   imageUrl: IMAGE },
  { id: '9',  name: 'PVEH32 Actuator DI S7 2X4AMP Active Fault Mon.',            series: 'PVEH32',  signalType: '2X4AMP', faultMonitoring: 'Active',  voltage: '—',   imageUrl: IMAGE },
  { id: '10', name: 'PVEH32 Actuator S7 1X4AMP Passive Fault Mon.',              series: 'PVEH32',  signalType: '1X4AMP', faultMonitoring: 'Passive', voltage: '—',   imageUrl: IMAGE },
  { id: '11', name: 'PVEH120 Actuator S7 1X4DIN Passive Fault Mon.',             series: 'PVEH120', signalType: '1X4DIN', faultMonitoring: 'Passive', voltage: '—',   imageUrl: IMAGE },
  { id: '12', name: 'PVEM32 Actuator S7 1X4DIN Passive Fault Mon.',              series: 'PVEM32',  signalType: '1X4DIN', faultMonitoring: 'Passive', voltage: '—',   imageUrl: IMAGE },
  { id: '13', name: 'PVEM32 Actuator R S7 1X4DIN Passive Fault Mon.',            series: 'PVEM32',  signalType: '1X4DIN', faultMonitoring: 'Passive', voltage: '—',   imageUrl: IMAGE },
  { id: '14', name: 'PVEM32 Actuator S7 1X4DIN Passive Fault Mon.',              series: 'PVEM32',  signalType: '1X4DIN', faultMonitoring: 'Passive', voltage: '—',   imageUrl: IMAGE },
  { id: '15', name: 'PVEM32 Actuator F S7 1X4DIN Passive Fault Mon. With Float', series: 'PVEM32',  signalType: '1X4DIN', faultMonitoring: 'Passive', voltage: '—',   imageUrl: IMAGE },
  { id: '16', name: 'PVEO32 Actuator S7 1X4DIN On/Off 12V',                      series: 'PVEO32',  signalType: '1X4DIN', faultMonitoring: '—',       voltage: '12V', imageUrl: IMAGE },
  { id: '17', name: 'PVEO32 Actuator S7 1X4DIN On/Off 24V',                      series: 'PVEO32',  signalType: '1X4DIN', faultMonitoring: '—',       voltage: '24V', imageUrl: IMAGE },
  { id: '18', name: 'PVEO32 Actuator R S7 1X4AMP On/Off 12V with Ramp',          series: 'PVEO32',  signalType: '1X4AMP', faultMonitoring: '—',       voltage: '12V', imageUrl: IMAGE },
  { id: '19', name: 'PVEO32 Actuator R S7 1X4DIN On/Off 12V with Ramp',          series: 'PVEO32',  signalType: '1X4DIN', faultMonitoring: '—',       voltage: '12V', imageUrl: IMAGE },
  { id: '20', name: 'PVEO32 Actuator S7 1X4DEU On/Off 12V',                      series: 'PVEO32',  signalType: '1X4DEU', faultMonitoring: '—',       voltage: '12V', imageUrl: IMAGE },
  { id: '21', name: 'PVEO32 Actuator S7 1X4AMP On/Off 12V',                      series: 'PVEO32',  signalType: '1X4AMP', faultMonitoring: '—',       voltage: '12V', imageUrl: IMAGE },
  { id: '22', name: 'PVEO120 Actuator S7 1X4AMP On/Off 24V',                     series: 'PVEO120', signalType: '1X4AMP', faultMonitoring: '—',       voltage: '24V', imageUrl: IMAGE },
  { id: '23', name: 'PVEO120 Actuator S4 1x4DIN-H 24V',                          series: 'PVEO120', signalType: '1X4DIN', faultMonitoring: '—',       voltage: '24V', imageUrl: IMAGE },
  { id: '24', name: 'PVEO120 Actuator S7 1X4DIN On/Off 24V',                     series: 'PVEO120', signalType: '1X4DIN', faultMonitoring: '—',       voltage: '24V', imageUrl: IMAGE },
  { id: '25', name: 'PVE120 Actuator S7 1X4DIN On/Off 12V',                      series: 'PVE120',  signalType: '1X4DIN', faultMonitoring: '—',       voltage: '12V', imageUrl: IMAGE },
  { id: '26', name: 'PVES32 Actuator S7 1X4AMP Passive Fault Mon.',              series: 'PVES32',  signalType: '1X4AMP', faultMonitoring: 'Passive', voltage: '—',   imageUrl: IMAGE },
  { id: '27', name: 'PVES32 Actuator S7 1X4DEU Active Fault Mon.',               series: 'PVES32',  signalType: '1X4DEU', faultMonitoring: 'Active',  voltage: '—',   imageUrl: IMAGE },
  { id: '28', name: 'PVES32 Actuator S7 1X4DIN Passive Fault Mon.',              series: 'PVES32',  signalType: '1X4DIN', faultMonitoring: 'Passive', voltage: '—',   imageUrl: IMAGE },
  { id: '29', name: 'PVES32 Actuator S7 1X4AMP Active Fault Mon.',               series: 'PVES32',  signalType: '1X4AMP', faultMonitoring: 'Active',  voltage: '—',   imageUrl: IMAGE },
  { id: '30', name: 'PVES32 Actuator S7 1X4DIN Active Fault Mon.',               series: 'PVES32',  signalType: '1X4DIN', faultMonitoring: 'Active',  voltage: '—',   imageUrl: IMAGE },
  { id: '31', name: 'PVG16 PVEO Actuator on/off 12V',                            series: 'PVG16',   signalType: 'On/Off', faultMonitoring: '—',       voltage: '12V', imageUrl: IMAGE },
  { id: '32', name: 'PVG16 PVM Lever Actuator with Adjustment Screws',           series: 'PVG16',   signalType: 'Manual', faultMonitoring: '—',       voltage: '—',   imageUrl: IMAGE },
  { id: '33', name: 'PVG16 PVM Lever Actuator with Float w/o Adjustment Screws', series: 'PVG16',   signalType: 'Manual', faultMonitoring: '—',       voltage: '—',   imageUrl: IMAGE },
  { id: '34', name: 'PVHC16 Actuator 2DEU 12V 20Bar 180DEG',                     series: 'PVHC16',  signalType: '2DEU',   faultMonitoring: '—',       voltage: '12V', imageUrl: IMAGE },
]

function Spec({ label, value }: { label: string; value: string }) {
  if (!value || value === '—') return null
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>{value}</Typography>
    </Box>
  )
}

function DanfossRow({ row }: { row: DanfossActuatorDTO }) {
  const [open, setOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)

  const openQuote = () => setQuoteProduct({
    id: row.id,
    name: `Danfoss ${row.name}`,
    brand: 'Danfoss',
    category: 'Electrohydraulic Actuators',
    categoryId: 'electrohydraulic-actuators',
    subCategory: row.series,
    thumbnail: row.imageUrl,
    description: `Danfoss ${row.series} electrohydraulic actuator. Signal: ${row.signalType}.${row.faultMonitoring !== '—' ? ` Fault monitoring: ${row.faultMonitoring}.` : ''}${row.voltage !== '—' ? ` Voltage: ${row.voltage}.` : ''}`,
    keySpecs: [
      { label: 'Series',           value: row.series },
      { label: 'Signal Type',      value: row.signalType },
      { label: 'Fault Monitoring', value: row.faultMonitoring },
      { label: 'Voltage',          value: row.voltage },
    ],
    variantInfo: { count: 1, sizeRange: row.series },
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
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT, fontWeight: 600 }}>{row.name}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.series} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: BRAND_GREEN, color: BRAND_GREEN }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.signalType}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.faultMonitoring}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.voltage}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained"
            onClick={e => { e.stopPropagation(); openQuote() }}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'none',
              whiteSpace: 'nowrap', bgcolor: BRAND_GREEN, color: '#fff', boxShadow: 'none',
              '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
            Request Quote
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={7} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_GREEN, 0.02), borderLeft: `4px solid ${BRAND_GREEN}`, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 140, height: 140, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: '8px', overflow: 'hidden', bgcolor: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={row.imageUrl} alt={row.name}
                      sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900}
                      sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
                      SPECIFICATIONS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Series"           value={row.series} />
                      <Spec label="Signal Type"      value={row.signalType} />
                      <Spec label="Fault Monitoring" value={row.faultMonitoring} />
                      <Spec label="Voltage"          value={row.voltage} />
                    </Stack>
                    <Button variant="contained" onClick={openQuote}
                      sx={{ textTransform: 'none', fontWeight: 700, borderRadius: '6px',
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

type SortKey = 'name' | 'series'

export default function DanfossActuatorPage() {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  const [sortKey, setSortKey] = useState<SortKey>('series')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
  }

  const sorted = [...DATA].sort((a, b) => {
    const av = String(a[sortKey] ?? ''), bv = String(b[sortKey] ?? '')
    if (av < bv) return sortDir === 'asc' ? -1 : 1
    if (av > bv) return sortDir === 'asc' ? 1 : -1
    return 0
  })

  const paginated = sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  const headerSx = {
    bgcolor: alpha(BRAND_GREEN, 0.04),
    borderBottom: `2px solid ${BRAND_GREEN}`,
    fontWeight: 700, fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    fontFamily: PRIMARY_FONT,
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h1" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
          Danfoss PVE Series Actuators
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          Danfoss PVE electrohydraulic actuators for proportional directional control valves. Available in PVEA, PVEH, PVEM, PVEO, PVES, PVG and PVHC series.
        </Typography>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${DATA.length} MODELS`}
        </Typography>

        <Box sx={{ border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
          <TableContainer>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...headerSx, width: 40 }} />
                  <TableCell sx={headerSx}>
                    <TableSortLabel active={sortKey === 'name'} direction={sortKey === 'name' ? sortDir : 'asc'} onClick={() => handleSort('name')}>
                      Product Name
                    </TableSortLabel>
                  </TableCell>
                  <TableCell sx={headerSx}>
                    <TableSortLabel active={sortKey === 'series'} direction={sortKey === 'series' ? sortDir : 'asc'} onClick={() => handleSort('series')}>
                      Series
                    </TableSortLabel>
                  </TableCell>
                  <TableCell sx={headerSx}>Signal Type</TableCell>
                  <TableCell sx={headerSx}>Fault Mon.</TableCell>
                  <TableCell sx={headerSx}>Voltage</TableCell>
                  <TableCell sx={headerSx}>Quote</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginated.length === 0
                  ? <TableRow><TableCell colSpan={7} align="center" sx={{ py: 6 }}>
                      <Typography variant="body2" color="text.secondary" fontFamily={PRIMARY_FONT}>No actuators found.</Typography>
                    </TableCell></TableRow>
                  : paginated.map(row => <DanfossRow key={row.id} row={row} />)
                }
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={sorted.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={(_, p) => setPage(p)}
            onRowsPerPageChange={e => { setRowsPerPage(parseInt(e.target.value)); setPage(0) }}
            rowsPerPageOptions={[25, 50, 100]}
            sx={{ borderTop: '1px solid rgba(0,0,0,0.06)', fontSize: '0.8rem' }}
          />
        </Box>
      </Box>
    </Box>
  )
}