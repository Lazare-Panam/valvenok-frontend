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
const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface LPGValve {
  id: string
  model: string
  series: string
  category: string
  inletThreads: string
  outletThreads: string
  workingPressure: string
  fuseMetalTemp: string
  burstDiscPressure: string
  springWorkingPressure: string
  standard: string
  certification: string
  image: string
}

const VALVES: LPGValve[] = [
  // Cylinders
  { id: 'ylc-2820-50', model: 'YLC-2820-50', series: 'YLC', category: 'Cylinder', inletThreads: 'W28-14th / KS B 6212, V2', outletThreads: 'W22.5-14th-LH', workingPressure: '1.82 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', springWorkingPressure: '2.03 – 2.43 MPa', standard: 'KS B 6212, KGS AA312', certification: 'KGS, KS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YLC-2820-50.png' },
  { id: 'ylc-2820', model: 'YLC-2820(C)', series: 'YLC', category: 'Cylinder', inletThreads: 'W28-14th / KS B 6212, V2', outletThreads: 'W22.5-14th-LH', workingPressure: '1.82 MPa', fuseMetalTemp: '97.8°C – 105.7°C', burstDiscPressure: 'N/A', springWorkingPressure: '2.04 – 2.43 MPa', standard: 'KS B 6212, KGS AA312', certification: 'KGS' , image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YLC-2820-50.png' },
  { id: 'ylc-2831', model: 'YLC-2831', series: 'YLC', category: 'Cylinder', inletThreads: 'W28-14th / KS B 6212, V2', outletThreads: 'W22.5-14th-LH', workingPressure: '1.82 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', springWorkingPressure: '2.03 – 2.43 MPa', standard: 'KS B 6212, KGS AA312', certification: 'KGS, KS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YLC-2831.png' },
  { id: 'ylc-2832', model: 'YLC-2832', series: 'YLC', category: 'Cylinder', inletThreads: 'W28-14th / KS B 6212, V2', outletThreads: 'W22.5-14th-LH', workingPressure: '1.82 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', springWorkingPressure: '2.03 – 2.43 MPa', standard: 'KS B 6212, KGS AA312', certification: 'KGS, KS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YLC-2831.png' },
  { id: 'ylc-2863-1', model: 'YLC-2863-1', series: 'YLC', category: 'Cylinder', inletThreads: 'W28-14th / KS B 6212, V2', outletThreads: 'W22.5-14th-LH', workingPressure: '1.82 MPa', fuseMetalTemp: '97.8°C – 105.7°C', burstDiscPressure: 'N/A', springWorkingPressure: '2.03 – 2.43 MPa', standard: 'KS B 6212, KGS AA312', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YLC-2863-1.png' },
  { id: 'ylc-2021', model: 'YLC-2021', series: 'YLC', category: 'Cylinder', inletThreads: 'W20-14th / KS B 6214, V1', outletThreads: 'W22.5-14th-LH', workingPressure: '1.83 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', springWorkingPressure: '1.96 – 2.35 MPa', standard: 'KS B 6212, KGS AA312', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YLC-2021.png' },
  { id: 'lp-2010', model: 'LP-2010', series: 'LP', category: 'Cylinder', inletThreads: 'W20-14th / KS B 6214, V1', outletThreads: 'W22.5-14th-LH', workingPressure: '1.82 MPa', fuseMetalTemp: '97.8°C – 105.7°C', burstDiscPressure: 'N/A', springWorkingPressure: '1.96 – 2.35 MPa', standard: 'KGS AA312', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YLC-2021.png' },
  { id: 'ylc-2821', model: 'YLC-2821', series: 'YLC', category: 'Cylinder', inletThreads: '3/4-14 NGT', outletThreads: '0.885-14NGO-LH-INT (CGA 510)', workingPressure: '250 psi', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', springWorkingPressure: '375 psi', standard: 'N/A', certification: 'CGA V-1', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YLC-2821.png' },
  { id: 'ylc-2821-1', model: 'YLC-2821-1', series: 'YLC', category: 'Cylinder', inletThreads: '3/4-14 NGT', outletThreads: '0.885-14NGO-LH-INT (CGA 510)', workingPressure: '250 psi', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', springWorkingPressure: '375 psi', standard: 'N/A', certification: 'CGA V-1', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YLC-2821-1.png' },
  { id: 'mt-2000', model: 'MT-2000', series: 'MT', category: 'Cylinder', inletThreads: '3/4-14 NGT', outletThreads: '0.885-14NGO-LH-INT (CGA 510)', workingPressure: '250 psi', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', springWorkingPressure: '375 psi', standard: 'N/A', certification: 'CGA V-1', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/MT-2000.png' },
  { id: 'mt-4200', model: 'MT-4200', series: 'MT', category: 'Cylinder', inletThreads: '1"-11 1/2 NGT', outletThreads: '0.885-14NGO-LH-INT (CGA 510)', workingPressure: '250 psi', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', springWorkingPressure: '375 psi', standard: 'N/A', certification: 'CGA V-1', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/MT-4200.png' },
  { id: 'ybc-2600', model: 'YBC-2600', series: 'YBC', category: 'Cylinder', inletThreads: '3/4-14 NGT', outletThreads: 'Quick-ON Type', workingPressure: '0.7 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', springWorkingPressure: '2.0 – 2.2 MPa', standard: 'KGS AA312', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YBC-2600.png' },
  { id: 'ybc-4021', model: 'YBC-4021', series: 'YBC', category: 'Cylinder', inletThreads: '3/4-14 NGT', outletThreads: 'Quick-ON Type', workingPressure: '7 – 255 psi', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', springWorkingPressure: '375 psi', standard: 'N/A', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YBC-4021.png' },
  // OPD
  { id: 'opd-3000', model: 'OPD-3000', series: 'OPD', category: 'OPD', inletThreads: '3/4-14 NGT', outletThreads: '1312-S ACME-RH-EXT (CGA 791)', workingPressure: '250 psi', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', springWorkingPressure: '375 psi', standard: 'UL 2227 / CGA V-1', certification: 'UL', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/OPD-3000.png' },
  { id: 'y2700', model: 'Y2700', series: 'OPD', category: 'OPD', inletThreads: 'PT1/8-25th', outletThreads: 'PT1/8-28th', workingPressure: 'N/A', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', springWorkingPressure: 'N/A', standard: 'UL 2227', certification: 'UL', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/Y2700.png' },
  { id: 'y1800', model: 'Y1800', series: 'OPD', category: 'OPD', inletThreads: 'PT1/8-25th', outletThreads: 'PT1/8-28th', workingPressure: 'N/A', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', springWorkingPressure: 'N/A', standard: 'UL 2227', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/Y2700.png' },
  // Piping Connection
  { id: 'ylg-1220', model: 'YLG-1220', series: 'YLG', category: 'Piping', inletThreads: 'PT1/2-14th', outletThreads: 'PT1/2-14th', workingPressure: '2.35 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', springWorkingPressure: 'N/A', standard: 'KGS AA335', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YLG-1220.png' },
  { id: 'ylg-1420', model: 'YLG-1420', series: 'YLG', category: 'Piping', inletThreads: 'PT1/4-19th', outletThreads: 'PT1/4-19th', workingPressure: '2.35 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', springWorkingPressure: 'N/A', standard: 'KGS AA335', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YLG-1420.png' },
  // YPC
  { id: 'ypc-0409', model: 'YPC-0409', series: 'YPC', category: 'Piping', inletThreads: 'N/A', outletThreads: 'N/A', workingPressure: 'N/A', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', springWorkingPressure: 'N/A', standard: 'N/A', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YPC-0409.png' },
  { id: 'ypc-2820', model: 'YPC-2820', series: 'YPC', category: 'Piping', inletThreads: 'N/A', outletThreads: 'N/A', workingPressure: 'N/A', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', springWorkingPressure: 'N/A', standard: 'N/A', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YPC-2820.png' },
]

function LPGRow({ row }: { row: LPGValve }) {
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const rfqProduct: ProductForRFQ = {
    id: row.id,
    name: `${row.model} LPG Valve`,
    brand: 'Youngdo',
    category: 'LPG Valves',
    categoryId: 'lpg',
    subCategory: `${row.series} Series`,
    thumbnail: row.image,
    description: `Youngdo ${row.model} LPG valve. Working pressure ${row.workingPressure}. Inlet: ${row.inletThreads}, Outlet: ${row.outletThreads}. Certified: ${row.certification}.`,
    keySpecs: [
      { label: 'Working Pressure', value: row.workingPressure },
      { label: 'Inlet Threads', value: row.inletThreads },
      { label: 'Outlet Threads', value: row.outletThreads },
      { label: 'Spring Working Pressure', value: row.springWorkingPressure },
      { label: 'Standard', value: row.standard },
      { label: 'Certification', value: row.certification },
    ],
    variantInfo: { count: 1, sizeRange: row.workingPressure },
  }

  const headerSx = {
    bgcolor: alpha(BRAND_GREEN, 0.04),
    borderBottom: `2px solid ${BRAND_GREEN}`,
    fontWeight: 700, fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    fontFamily: PRIMARY_FONT,
  }

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{ cursor: 'pointer', bgcolor: open ? alpha(BRAND_GREEN, 0.04) : 'inherit', '&:hover': { bgcolor: `${alpha(BRAND_GREEN, 0.03)} !important` } }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontWeight: 700, fontSize: '0.82rem', py: 1, fontFamily: PRIMARY_FONT }}>{row.model}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.series} size="small" variant="outlined" sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: BRAND_GREEN, color: BRAND_GREEN }} />
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.category} size="small" sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: alpha(BRAND_GREEN, 0.1), color: 'text.primary' }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.workingPressure}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.inletThreads}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.outletThreads}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.certification}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained" onClick={e => { e.stopPropagation(); setModalOpen(true) }}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'none', whiteSpace: 'nowrap', bgcolor: BRAND_GREEN, color: '#fff', boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
            Request Quote
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={9} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_GREEN, 0.02), borderLeft: `4px solid ${BRAND_GREEN}`, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 160, height: 160, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', overflow: 'hidden', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={row.image} alt={row.model} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', p: 1 }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Box component="img" src={YOUNGDO_LOGO} alt="Youngdo" sx={{ maxHeight: 28, maxWidth: 110, objectFit: 'contain', bgcolor: BRAND_GREEN, p: 1, borderRadius: 1, mb: 2 }} />
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      {[
                        { label: 'Model', value: row.model },
                        { label: 'Category', value: row.category },
                        { label: 'Working Pressure', value: row.workingPressure },
                        { label: 'Inlet Threads', value: row.inletThreads },
                        { label: 'Outlet Threads', value: row.outletThreads },
                        { label: 'Fuse Metal Temp', value: row.fuseMetalTemp },
                        { label: 'Burst Disc Pressure', value: row.burstDiscPressure },
                        { label: 'Spring Working Pressure', value: row.springWorkingPressure },
                        { label: 'Standard', value: row.standard },
                        { label: 'Certification', value: row.certification },
                      ].map(({ label, value }) => (
                        <Box key={label}>
                          <Typography variant="caption" color="text.secondary" fontWeight={700} sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
                          <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>{value}</Typography>
                        </Box>
                      ))}
                    </Stack>
                    <Button variant="contained" onClick={() => setModalOpen(true)}
                      sx={{ textTransform: 'none', fontWeight: 700, borderRadius: '6px', bgcolor: BRAND_GREEN, color: '#fff', '&:hover': { bgcolor: '#50c23a' }, fontFamily: PRIMARY_FONT }}>
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

export default function LPGProductsPage() {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  const [selectedSeries, setSelectedSeries] = useState<string[]>([])

  const seriesOptions = useMemo(() => Array.from(new Set(VALVES.map(v => v.series))), [])
  const toggleSeries = (s: string) => setSelectedSeries(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])
  const filtered = useMemo(() => selectedSeries.length ? VALVES.filter(v => selectedSeries.includes(v.series)) : VALVES, [selectedSeries])
  const paginated = filtered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  const headerSx = {
    bgcolor: alpha(BRAND_GREEN, 0.04),
    borderBottom: `2px solid ${BRAND_GREEN}`,
    fontWeight: 700, fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    fontFamily: PRIMARY_FONT,
  }

  const sidebar = (
    <Box sx={{ width: 200, flexShrink: 0, p: 2, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', boxSizing: 'border-box' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FILTER</Typography>
        {selectedSeries.length > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: BRAND_GREEN }} onClick={() => setSelectedSeries([])}>Clear all</Typography>
        )}
      </Stack>
      <Accordion disableGutters elevation={0} sx={{ bgcolor: 'transparent', '&:before': { display: 'none' } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, '& .MuiAccordionSummary-content': { my: 0.5 } }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="caption" fontWeight={700} color="text.primary">SERIES</Typography>
            {selectedSeries.length > 0 && <Chip label={selectedSeries.length} size="small" sx={{ height: 16, fontSize: '0.65rem', bgcolor: BRAND_GREEN, color: '#fff' }} />}
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0, pt: 0 }}>
          <FormGroup>
            {seriesOptions.map(s => (
              <FormControlLabel key={s}
                control={<Checkbox size="small" checked={selectedSeries.includes(s)} onChange={() => toggleSeries(s)} sx={{ py: 0.25, '&.Mui-checked': { color: BRAND_GREEN } }} />}
                label={
                  <Stack direction="row" alignItems="center" spacing={0.75}>
                    <Typography variant="body2" fontSize="0.8rem">{s}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.68rem', fontWeight: 600 }}>({VALVES.filter(v => v.series === s).length})</Typography>
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
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Box component="img" src={YOUNGDO_LOGO} alt="Youngdo" sx={{ maxHeight: 32, maxWidth: 120, objectFit: 'contain', bgcolor: BRAND_GREEN, p: 1, borderRadius: 1, mb: 2 }} />
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>LPG Cylinder Valves</Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          Youngdo LPG cylinder valves, OPD overfilling prevention devices and piping connection valves — YLC, MT, YBC, OPD, YLG and YPC series. KGS, KS, CGA V-1 and UL certified.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {['2.43 MPa Max', 'KGS · KS', 'CGA V-1', 'UL 2227', 'LPG Service', '20 Models'].map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(BRAND_GREEN, 0.08), color: '#2d8a1e', border: `1px solid ${alpha(BRAND_GREEN, 0.3)}`, fontFamily: PRIMARY_FONT }}>{s}</Box>
          ))}
        </Box>
      </Box>

      {selectedSeries.length > 0 && (
        <Box sx={{ px: { xs: 2, md: 3 }, pt: 2 }}>
          <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap">
            <Typography variant="caption" color="text.secondary" fontWeight={700}>ACTIVE FILTERS:</Typography>
            {selectedSeries.map(s => (
              <Chip key={s} label={`Series: ${s}`} size="small" variant="outlined" sx={{ borderColor: BRAND_GREEN, color: BRAND_GREEN }} onDelete={() => toggleSeries(s)} />
            ))}
          </Stack>
        </Box>
      )}

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>{`${filtered.length} MODELS`}</Typography>
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
                    <TableCell sx={headerSx}>Model</TableCell>
                    <TableCell sx={headerSx}>Series</TableCell>
                    <TableCell sx={headerSx}>Category</TableCell>
                    <TableCell sx={headerSx}>Working Pressure</TableCell>
                    <TableCell sx={headerSx}>Inlet Threads</TableCell>
                    <TableCell sx={headerSx}>Outlet Threads</TableCell>
                    <TableCell sx={headerSx}>Certification</TableCell>
                    <TableCell sx={headerSx}>Quote</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginated.length === 0
                    ? <TableRow><TableCell colSpan={9} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary">No valves found.</Typography></TableCell></TableRow>
                    : paginated.map(row => <LPGRow key={row.id} row={row} />)
                  }
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination component="div" count={filtered.length} page={page} rowsPerPage={rowsPerPage}
              onPageChange={(_, p) => setPage(p)}
              onRowsPerPageChange={e => { setRowsPerPage(parseInt(e.target.value)); setPage(0) }}
              rowsPerPageOptions={[20, 25, 50]}
              sx={{ borderTop: '1px solid rgba(0,0,0,0.06)', fontSize: '0.8rem' }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}