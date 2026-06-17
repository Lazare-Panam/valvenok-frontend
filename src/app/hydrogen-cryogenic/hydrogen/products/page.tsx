'use client'
import { useState, useMemo } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, Collapse, Chip, Typography, Stack, IconButton, Button,
  Accordion, AccordionSummary, AccordionDetails, FormGroup, FormControlLabel,
  Checkbox, Drawer, useMediaQuery,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FilterListIcon from '@mui/icons-material/FilterList'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

const YOUNGDO_LOGO = 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/top_logo.png'
const DARK_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface YoungdoValve {
  id: string
  model: string
  series: string
  inletThreads: string
  outletThreads: string
  workingPressure: string
  fuseMetalTemp: string
  glassBulbTemp: string
  standard: string
  certification: string
  image: string
}

const VALVES: YoungdoValve[] = [
  { id: 'hc-700', model: 'HC-700', series: 'HC', inletThreads: '1 1/2"-12UNF', outletThreads: 'M12x1.5P', workingPressure: '70.0 MPa / 35.0 MPa', fuseMetalTemp: '110°C ±5°C', glassBulbTemp: '110°C ±5°C', standard: '국토교통부 고시 / ECE R134', certification: 'KGS, R134, CSEL, KHK', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/HE-700.png' },
  { id: 'he-700', model: 'HE-700', series: 'HE', inletThreads: '1 1/2"-12UNF', outletThreads: '9/16"-18UNF / M12x1.5P', workingPressure: '70.0 MPa / 35.0 MPa', fuseMetalTemp: '110°C ±5°C', glassBulbTemp: '110°C ±5°C', standard: '국토교통부 고시 / ECE R134', certification: 'KGS, EC79, R134, CSEL', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/HE-700.png' },
  { id: 'hk-700', model: 'HK-700', series: 'HK', inletThreads: '1 1/2"-12UNF', outletThreads: '9/16"-18UNF / M12x1.5P', workingPressure: '70.0 MPa / 35.0 MPa', fuseMetalTemp: '110°C ±5°C', glassBulbTemp: '110°C ±5°C', standard: '국토교통부 고시 / ECE R134', certification: 'KGS, EC79', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/HK-700.png' },
  { id: 'hs-700', model: 'HS-700', series: 'HS', inletThreads: '1 1/2"-12UNF', outletThreads: '9/16"-18UNF', workingPressure: '70.0 MPa / 35.0 MPa', fuseMetalTemp: '110°C ±5°C', glassBulbTemp: '110°C ±5°C', standard: '국토교통부 고시 / ECE R134', certification: 'EC79, CSEL', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/HS-700.png' },
  { id: 'hsl-700', model: 'HSL-700', series: 'HSL', inletThreads: '1 1/2"-12UNF', outletThreads: '9/16"-18UNF', workingPressure: '70.0 MPa / 35.0 MPa', fuseMetalTemp: '110°C ±5°C', glassBulbTemp: '110°C ±5°C', standard: '국토교통부 고시 / ECE R134', certification: 'EC79, CSEL', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/HS-700.png' },
  { id: 'ep-70pa', model: 'EP-70PA', series: 'EP', inletThreads: '1 1/2"-12UNF', outletThreads: '9/16"-18UNF', workingPressure: '70.0 MPa / 35.0 MPa', fuseMetalTemp: '110°C ±5°C', glassBulbTemp: '110°C ±5°C', standard: '국토교통부 고시 / ECE R134', certification: 'KGS, EC79, R134', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/HE-700.png' },
  { id: 'ep-70pq', model: 'EP-70PQ', series: 'EP', inletThreads: '1 1/2"-12UNF', outletThreads: '9/16"-18UNF', workingPressure: '70.0 MPa / 35.0 MPa', fuseMetalTemp: '110°C ±5°C', glassBulbTemp: '110°C ±5°C', standard: '국토교통부 고시 / ECE R134', certification: 'KGS, EC79, R134', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/EP-70PQ.png' },
  { id: 'ep-700pb', model: 'EP-700PB', series: 'EP', inletThreads: '9/16"-18UNF', outletThreads: '3/4"-20UNEF', workingPressure: '70.0 MPa / 35.0 MPa', fuseMetalTemp: '110°C ±5°C', glassBulbTemp: '110°C ±5°C', standard: '국토교통부 고시 / ECE R134', certification: 'KGS, EC79, R134', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/EP-700PB.png' },
  { id: 'drv-350', model: 'DRV-350', series: 'DRV', inletThreads: 'M18x1.5P', outletThreads: 'Quick-On-Type', workingPressure: '35 MPa', fuseMetalTemp: '110°C ±5°C', glassBulbTemp: '110°C ±5°C', standard: 'KS B 6214 / KGS AA311', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/DRV-350.png' },
  { id: 'yht-1514l', model: 'YHT-1514L', series: 'YHT', inletThreads: '1 1/2"-12 UNF', outletThreads: '7/16"-20 UNF', workingPressure: '45 MPa', fuseMetalTemp: 'N/A', glassBulbTemp: '105°C ±5°C', standard: 'KS B 6214 / KGS AA311', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YHT-3516L.png' },
  { id: 'yht-3516l', model: 'YHT-3516L', series: 'YHT', inletThreads: 'M35x2.0P', outletThreads: '9/16"-20 UN', workingPressure: '45 MPa', fuseMetalTemp: 'N/A', glassBulbTemp: '105°C ±5°C', standard: 'KS B 6214 / KGS AA311', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YHT-3516L.png' },
  { id: 'yht-3516al', model: 'YHT-3516AL', series: 'YHT', inletThreads: 'M35x2.0P', outletThreads: '9/16"-20 UN', workingPressure: '45 MPa', fuseMetalTemp: 'N/A', glassBulbTemp: '105°C ±5°C', standard: 'KS B 6214 / KGS AA311', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YHT-3516L.png' },
  { id: 'yex-1100', model: 'YEX-1100', series: 'YEX', inletThreads: 'PT1/4', outletThreads: 'PT1/4', workingPressure: '3.0 MPa', fuseMetalTemp: 'N/A', glassBulbTemp: 'N/A', standard: 'IEC60079-0, 1, 18', certification: 'IECEx', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YEX-1100.png' },
]

function YoungdoRow({ row }: { row: YoungdoValve }) {
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const rfqProduct: ProductForRFQ = {
    id: row.id,
    name: `${row.model} Hydrogen Cylinder Valve`,
    brand: 'Youngdo',
    category: 'Hydrogen & Cryogenic Valves',
    categoryId: 'hydrogen-cryogenic',
    subCategory: `${row.series} Series`,
    thumbnail: row.image,
    description: `Youngdo ${row.model} hydrogen cylinder valve. Working pressure ${row.workingPressure}. Inlet: ${row.inletThreads}, Outlet: ${row.outletThreads}. Certified: ${row.certification}.`,
    keySpecs: [
      { label: 'Working Pressure', value: row.workingPressure },
      { label: 'Inlet Threads', value: row.inletThreads },
      { label: 'Outlet Threads', value: row.outletThreads },
      { label: 'Fuse Metal Temp', value: row.fuseMetalTemp },
      { label: 'Glass Bulb Temp', value: row.glassBulbTemp },
      { label: 'Certification', value: row.certification },
    ],
    variantInfo: { count: 1, sizeRange: row.workingPressure },
  }

  const headerSx = {
    bgcolor: alpha(DARK_GREEN, 0.04),
    borderBottom: `2px solid ${DARK_GREEN}`,
    fontWeight: 700,
    fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    fontFamily: PRIMARY_FONT,
  }

  return (
    <>
      <TableRow
        hover
        onClick={() => setOpen(o => !o)}
        sx={{
          cursor: 'pointer',
          bgcolor: open ? alpha(DARK_GREEN, 0.04) : 'inherit',
          '&:hover': { bgcolor: `${alpha(DARK_GREEN, 0.03)} !important` },
        }}
      >
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontWeight: 700, fontSize: '0.82rem', py: 1, fontFamily: PRIMARY_FONT }}>{row.model}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.series} size="small" variant="outlined" sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: DARK_GREEN, color: DARK_GREEN }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.workingPressure}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.inletThreads}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.outletThreads}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.fuseMetalTemp}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.glassBulbTemp}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.certification}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button
            size="small"
            variant="contained"
            onClick={e => { e.stopPropagation(); setModalOpen(true) }}
            sx={{
              fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5,
              borderRadius: '4px', textTransform: 'none', whiteSpace: 'nowrap',
              bgcolor: DARK_GREEN, color: '#fff', boxShadow: 'none',
              '&:hover': { bgcolor: '#2d4a2d', boxShadow: 'none' },
            }}
          >
            Request Quote
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={10} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(DARK_GREEN, 0.02), borderLeft: `4px solid ${DARK_GREEN}`, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 160, height: 160, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', overflow: 'hidden', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={row.image} alt={row.model} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', p: 1 }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Box component="img" src={YOUNGDO_LOGO} alt="Youngdo" sx={{ maxHeight: 28, maxWidth: 110, objectFit: 'contain', bgcolor: DARK_GREEN, p: 1, borderRadius: 1, mb: 2 }} />
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 2, color: DARK_GREEN, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      {[
                        { label: 'Model', value: row.model },
                        { label: 'Working Pressure', value: row.workingPressure },
                        { label: 'Inlet Threads', value: row.inletThreads },
                        { label: 'Outlet Threads', value: row.outletThreads },
                        { label: 'Fuse Metal Temp', value: row.fuseMetalTemp },
                        { label: 'Glass Bulb Temp', value: row.glassBulbTemp },
                        { label: 'Standard', value: row.standard },
                        { label: 'Certification', value: row.certification },
                      ].map(({ label, value }) => (
                        <Box key={label}>
                          <Typography variant="caption" color="text.secondary" fontWeight={700} sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
                          <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>{value}</Typography>
                        </Box>
                      ))}
                    </Stack>
                    <Button
                      variant="contained"
                      onClick={() => setModalOpen(true)}
                      sx={{ textTransform: 'none', fontWeight: 700, borderRadius: '6px', bgcolor: DARK_GREEN, color: '#fff', '&:hover': { bgcolor: '#2d4a2d' }, fontFamily: PRIMARY_FONT }}
                    >
                      Request Quote
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={rfqProduct} />
    </>
  )
}

export default function HydrogenProductsPage() {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  const [selectedSeries, setSelectedSeries] = useState<string[]>([])

  const seriesOptions = useMemo(() => Array.from(new Set(VALVES.map(v => v.series))), [])

  const toggleSeries = (s: string) =>
    setSelectedSeries(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])

  const filtered = useMemo(() =>
    selectedSeries.length ? VALVES.filter(v => selectedSeries.includes(v.series)) : VALVES,
    [selectedSeries]
  )

  const paginated = filtered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  const headerSx = {
    bgcolor: alpha(DARK_GREEN, 0.04),
    borderBottom: `2px solid ${DARK_GREEN}`,
    fontWeight: 700,
    fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    fontFamily: PRIMARY_FONT,
  }

  const sidebar = (
    <Box sx={{ width: 200, flexShrink: 0, p: 2, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', boxSizing: 'border-box' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FILTER</Typography>
        {selectedSeries.length > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: DARK_GREEN }} onClick={() => setSelectedSeries([])}>
            Clear all
          </Typography>
        )}
      </Stack>
      <Accordion disableGutters elevation={0} sx={{ bgcolor: 'transparent', '&:before': { display: 'none' } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, '& .MuiAccordionSummary-content': { my: 0.5 } }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="caption" fontWeight={700} color="text.primary">SERIES</Typography>
            {selectedSeries.length > 0 && <Chip label={selectedSeries.length} size="small" sx={{ height: 16, fontSize: '0.65rem', bgcolor: DARK_GREEN, color: '#fff' }} />}
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0, pt: 0 }}>
          <FormGroup>
            {seriesOptions.map(s => (
              <FormControlLabel
                key={s}
                control={
                  <Checkbox
                    size="small"
                    checked={selectedSeries.includes(s)}
                    onChange={() => toggleSeries(s)}
                    sx={{ py: 0.25, '&.Mui-checked': { color: DARK_GREEN } }}
                  />
                }
                label={
                  <Stack direction="row" alignItems="center" spacing={0.75}>
                    <Typography variant="body2" fontSize="0.8rem">{s}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.68rem', fontWeight: 600 }}>
                      ({VALVES.filter(v => v.series === s).length})
                    </Typography>
                  </Stack>
                }
                sx={{ mr: 0 }}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      {/* Header */}
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Box component="img" src={YOUNGDO_LOGO} alt="Youngdo" sx={{ maxHeight: 32, maxWidth: 120, objectFit: 'contain', bgcolor: DARK_GREEN, p: 1, borderRadius: 1, mb: 2 }} />
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: DARK_GREEN, fontFamily: PRIMARY_FONT }}>
          Hydrogen Cylinder Valves
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          Youngdo high-pressure hydrogen cylinder valves — HC, HE, HK, HS, HSL, EP, DRV, YHT and YEX series. Working pressures from 3–70 MPa with KGS, EC79, R134 and IECEx certification.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {['70 MPa Max', 'KGS · EC79', 'R134', 'IECEx', 'H₂ Service', '13 Models'].map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(DARK_GREEN, 0.08), color: DARK_GREEN, border: `1px solid ${alpha(DARK_GREEN, 0.3)}`, fontFamily: PRIMARY_FONT }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Active filters */}
      {selectedSeries.length > 0 && (
        <Box sx={{ px: { xs: 2, md: 3 }, pt: 2 }}>
          <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap">
            <Typography variant="caption" color="text.secondary" fontWeight={700}>ACTIVE FILTERS:</Typography>
            {selectedSeries.map(s => (
              <Chip
                key={s}
                label={`Series: ${s}`}
                size="small"
                variant="outlined"
                sx={{ borderColor: DARK_GREEN, color: DARK_GREEN }}
                onDelete={() => toggleSeries(s)}
              />
            ))}
          </Stack>
        </Box>
      )}

      {/* Table */}
      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${filtered.length} MODELS`}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'stretch', border: `1px solid ${alpha(DARK_GREEN, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
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
                    <TableCell sx={headerSx}>Model</TableCell>
                    <TableCell sx={headerSx}>Series</TableCell>
                    <TableCell sx={headerSx}>Working Pressure</TableCell>
                    <TableCell sx={headerSx}>Inlet Threads</TableCell>
                    <TableCell sx={headerSx}>Outlet Threads</TableCell>
                    <TableCell sx={headerSx}>Fuse Metal Temp</TableCell>
                    <TableCell sx={headerSx}>Glass Bulb Temp</TableCell>
                    <TableCell sx={headerSx}>Certification</TableCell>
                    <TableCell sx={headerSx}>Quote</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginated.length === 0
                    ? <TableRow><TableCell colSpan={10} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary">No valves found.</Typography></TableCell></TableRow>
                    : paginated.map(row => <YoungdoRow key={row.id} row={row} />)
                  }
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              component="div"
              count={filtered.length}
              page={page}
              rowsPerPage={rowsPerPage}
              onPageChange={(_, p) => setPage(p)}
              onRowsPerPageChange={e => { setRowsPerPage(parseInt(e.target.value)); setPage(0) }}
              rowsPerPageOptions={[13, 25, 50]}
              sx={{ borderTop: '1px solid rgba(0,0,0,0.06)', fontSize: '0.8rem' }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}