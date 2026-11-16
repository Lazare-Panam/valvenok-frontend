import { useState } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Collapse, Chip, Typography, Stack,
  IconButton, Button, useMediaQuery, Drawer,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import FilterListIcon from '@mui/icons-material/FilterList'
import { type HRSDAActuatorDTO, type HRSDAFilters, type AvailableCountsHRSDA } from '../hooks/hrsdaData'
import { HRSDAActuatorSidebar } from './HRSDAActuatorSidebar'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const SERIES_COLORS: Record<string, string> = { HRSDA: '#61D649', HRSSA: '#2db82d' }

const val = (v?: number) => (v !== undefined && v !== null) ? v : '—'

function Spec({ label, value }: { label: string; value?: string | number }) {
  if (value === undefined || value === null) return null
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>{value}</Typography>
    </Box>
  )
}

function HRSDARow({ row }: { row: HRSDAActuatorDTO }) {
  const [open, setOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)
  const color = SERIES_COLORS[row.series] ?? BRAND_GREEN
  const isDA = row.series === 'HRSDA'

  const openQuote = () => setQuoteProduct({
    id: row.id,
    name: `${row.series} Hydraulic Actuator — ${row.model}`,
    brand: 'Panam',
    category: 'Hydraulic Actuators',
    categoryId: 'hydraulic-actuators',
    subCategory: isDA ? 'Double Acting' : 'Spring Return',
    thumbnail: row.imageUrl,
    description: row.description,
    keySpecs: isDA
      ? [
          { label: 'Model',                  value: row.model },
          { label: 'Torque 100 Bar Open',    value: String(row.torque100OpenNm) },
          { label: 'Torque 100 Bar Close',   value: String(row.torque100CloseNm) },
          { label: 'Torque 160 Bar Open',    value: String(row.torque160OpenNm) },
          { label: 'Torque 160 Bar Close',   value: String(row.torque160CloseNm) },
        ]
      : [
          { label: 'Model',        value: row.model },
          { label: 'Spring Code',  value: row.springCode ?? '' },
          { label: 'Spring Start', value: String(row.springStart) },
          { label: 'Spring Run',   value: String(row.springRun) },
          { label: 'Spring End',   value: String(row.springEnd) },
        ],
    variantInfo: { count: 1, sizeRange: row.model },
  })

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{ cursor: 'pointer', bgcolor: open ? alpha(BRAND_GREEN, 0.04) : 'inherit', '&:hover': { bgcolor: `${alpha(BRAND_GREEN, 0.03)} !important` } }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontWeight: 700, fontSize: '0.75rem', py: 1, fontFamily: PRIMARY_FONT, maxWidth: 180 }}>{row.model}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.series} size="small" variant="outlined" sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: color, color }} />
        </TableCell>

        {/* HRSDA cols */}
        {isDA ? (
          <>
            <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{val(row.torque100OpenNm)} / {val(row.torque100CloseNm)}</TableCell>
            <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{val(row.torque130OpenNm)} / {val(row.torque130CloseNm)}</TableCell>
            <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{val(row.torque160OpenNm)} / {val(row.torque160CloseNm)}</TableCell>
            <TableCell sx={{ py: 1, color: 'text.disabled', fontSize: '0.82rem' }}>—</TableCell>
          </>
        ) : (
          <>
            <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>
              <Chip label={row.springCode} size="small" sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: alpha(BRAND_GREEN, 0.1), color: '#2d8a1e' }} />
            </TableCell>
            <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{val(row.springStart)} / {val(row.springRun)} / {val(row.springEnd)}</TableCell>
            <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.oil100Start ? `${row.oil100Start} / ${row.oil100Run} / ${row.oil100End}` : '—'}</TableCell>
            <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{val(row.oil160Start)} / {val(row.oil160Run)} / {val(row.oil160End)}</TableCell>
          </>
        )}

        <TableCell sx={{ py: 1 }}>
          <Stack direction="row" spacing={1}>
            <Button size="small" variant="contained" onClick={e => { e.stopPropagation(); openQuote() }}
              sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'capitalize', whiteSpace: 'nowrap', bgcolor: BRAND_GREEN, color: '#fff', boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
              Request Quote
            </Button>
          </Stack>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={8} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_GREEN, 0.02), borderLeft: `4px solid ${BRAND_GREEN}`, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 160, height: 160, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', overflow: 'hidden', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={row.imageUrl} alt={row.model} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 1, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>DESCRIPTION</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6, fontFamily: PRIMARY_FONT }}>{row.description}</Typography>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                    {isDA ? (
                      <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                        <Spec label="Model"                    value={row.model} />
                        <Spec label="100 Bar Open (Nm)"        value={row.torque100OpenNm} />
                        <Spec label="100 Bar Close (Nm)"       value={row.torque100CloseNm} />
                        <Spec label="100 Bar Open (lb-in)"     value={row.torque100OpenLbIn} />
                        <Spec label="100 Bar Close (lb-in)"    value={row.torque100CloseLbIn} />
                        <Spec label="130 Bar Open (Nm)"        value={row.torque130OpenNm} />
                        <Spec label="130 Bar Close (Nm)"       value={row.torque130CloseNm} />
                        <Spec label="130 Bar Open (lb-in)"     value={row.torque130OpenLbIn} />
                        <Spec label="130 Bar Close (lb-in)"    value={row.torque130CloseLbIn} />
                        <Spec label="160 Bar Open (Nm)"        value={row.torque160OpenNm} />
                        <Spec label="160 Bar Close (Nm)"       value={row.torque160CloseNm} />
                        <Spec label="160 Bar Open (lb-in)"     value={row.torque160OpenLbIn} />
                        <Spec label="160 Bar Close (lb-in)"    value={row.torque160CloseLbIn} />
                      </Stack>
                    ) : (
                      <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                        <Spec label="Model"            value={row.model} />
                        <Spec label="Spring Code"      value={row.springCode} />
                        <Spec label="Spring Start (Nm)" value={row.springStart} />
                        <Spec label="Spring Run (Nm)"   value={row.springRun} />
                        <Spec label="Spring End (Nm)"   value={row.springEnd} />
                        <Spec label="100 Bar Start"    value={row.oil100Start} />
                        <Spec label="100 Bar Run"      value={row.oil100Run} />
                        <Spec label="100 Bar End"      value={row.oil100End} />
                        <Spec label="130 Bar Start"    value={row.oil130Start} />
                        <Spec label="130 Bar Run"      value={row.oil130Run} />
                        <Spec label="130 Bar End"      value={row.oil130End} />
                        <Spec label="160 Bar Start"    value={row.oil160Start} />
                        <Spec label="160 Bar Run"      value={row.oil160Run} />
                        <Spec label="160 Bar End"      value={row.oil160End} />
                      </Stack>
                    )}
                    <Stack direction="row" spacing={2}>
                      <Button variant="contained" onClick={openQuote}
                        sx={{ textTransform: 'capitalize', fontWeight: 700, borderRadius: '6px', bgcolor: BRAND_GREEN, color: '#fff', '&:hover': { bgcolor: '#50c23a' }, fontFamily: PRIMARY_FONT }}>
                        Request Quote
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
      {quoteProduct && <RFQModal open={!!quoteProduct} onClose={() => setQuoteProduct(null)} product={quoteProduct} />}
    </>
  )
}

type SortKey = 'model' | 'series'

export default function HRSDAActuatorTable({ models, filters, setFilters, availableCounts, activeCount }: {
  models: HRSDAActuatorDTO[]
  filters: HRSDAFilters
  setFilters: React.Dispatch<React.SetStateAction<HRSDAFilters>>
  availableCounts: AvailableCountsHRSDA
  activeCount: number
}) {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  const [sortKey, setSortKey] = useState<SortKey>('model')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
  }

  const sorted = [...models].sort((a, b) => {
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

  const activeSeries = filters.series.length === 1 ? filters.series[0] : 'MIXED'
  const isDAOnly  = activeSeries === 'HRSDA'
  const isSROnly  = activeSeries === 'HRSSA'

  const sidebar = <HRSDAActuatorSidebar filters={filters} setFilters={setFilters} availableCounts={availableCounts} activeCount={activeCount} />

  return (
    <Box sx={{ display: 'flex', alignItems: 'stretch', border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
      {!isMobile && sidebar}
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
      <Box sx={{ position: 'relative', flex: 1, minWidth: 0 }}>
        {isMobile && (
          <Box sx={{ p: 1, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
            <IconButton onClick={() => setMobileOpen(true)}><FilterListIcon /></IconButton>
          </Box>
        )}
        <TableContainer>
          <Table size="small" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ ...headerSx, width: 40 }} />
                <TableCell sx={headerSx}><TableSortLabel active={sortKey === 'model'} direction={sortKey === 'model' ? sortDir : 'asc'} onClick={() => handleSort('model')}>Model</TableSortLabel></TableCell>
                <TableCell sx={headerSx}><TableSortLabel active={sortKey === 'series'} direction={sortKey === 'series' ? sortDir : 'asc'} onClick={() => handleSort('series')}>Series</TableSortLabel></TableCell>

                {/* HRSDA cols */}
                {!isSROnly && <TableCell sx={headerSx}>100 Bar (Open/Close Nm)</TableCell>}
                {!isSROnly && <TableCell sx={headerSx}>130 Bar (Open/Close Nm)</TableCell>}
                {!isSROnly && <TableCell sx={headerSx}>160 Bar (Open/Close Nm)</TableCell>}
                {!isSROnly && !isDAOnly && <TableCell sx={headerSx} />}

                {/* HRSSA cols */}
                {!isDAOnly && <TableCell sx={headerSx}>Spring Code</TableCell>}
                {!isDAOnly && <TableCell sx={headerSx}>Spring (Start/Run/End Nm)</TableCell>}
                {!isDAOnly && <TableCell sx={headerSx}>100 Bar (Start/Run/End)</TableCell>}
                {!isDAOnly && <TableCell sx={headerSx}>160 Bar (Start/Run/End)</TableCell>}

                <TableCell sx={headerSx}>Quote</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginated.length === 0
                ? <TableRow><TableCell colSpan={10} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary" fontFamily={PRIMARY_FONT}>No actuators found.</Typography></TableCell></TableRow>
                : paginated.map(row => <HRSDARow key={row.id} row={row} />)
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
  )
}