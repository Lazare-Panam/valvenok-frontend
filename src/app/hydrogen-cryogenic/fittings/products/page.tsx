'use client'
import { useState, useMemo, useEffect } from 'react'
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
import { GroupSiteLinks, groupSitesIn } from '@/src/app/Common/GroupVisitLinks'

const HIFLUX_LOGO = 'https://pblol2.blob.core.windows.net/valvenok-images/brands/hiflux-logo.png'
const ACCENT = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const PRESSURE_RANGES = [
  { label: 'All Pressures', min: 0, max: Infinity },
  { label: 'Low (~15,000 psi)', min: 0, max: 17000 },
  { label: 'Medium (~20,000 psi)', min: 17000, max: 25000 },
  { label: 'High (~60,000 psi)', min: 25000, max: 70000 },
  { label: 'Ultra High (100,000+ psi)', min: 70000, max: Infinity },
]

const PRODUCT_TYPES = ['Fitting', 'Fitting Accessory', 'Manifold Block', 'Tube Cap', 'Thread Lubricant']

interface HifluxFitting {
  id: string
  name: string
  type: string
  pressurePsi: number
  pressureLabel: string
  description: string
  image: string
  connectionType: string
}

const PRODUCTS: HifluxFitting[] = [
  { id: 'fit-red-60k', name: 'High Pressure Reducing Fitting - High Pressure', type: 'Fitting', pressurePsi: 60000, pressureLabel: '~60,000 psi', connectionType: 'UNF', description: 'High pressure reducing fitting rated to 60,000 psi for pressure reduction between lines.', image: 'https://pblol2.blob.core.windows.net/hiflux/updated%20images/images/rf.jpeg' },
  { id: 'fit-red-20k', name: 'High Pressure Reducing Fitting - Medium Pressure', type: 'Fitting', pressurePsi: 20000, pressureLabel: '~20,000 psi', connectionType: 'UNF', description: 'Medium pressure reducing fitting rated to 20,000 psi.', image: 'https://pblol2.blob.core.windows.net/hiflux/updated%20images/images/rf.jpeg' },
  { id: 'fit-pt-15k', name: 'High Pressure Fitting - PT Female', type: 'Fitting', pressurePsi: 15000, pressureLabel: '~15,000 psi', connectionType: 'PT Female', description: 'PT female high pressure fitting for standard industrial connections.', image: 'https://pblol2.blob.core.windows.net/hiflux/updated%20images/images/rf.jpeg' },
  { id: 'fit-npt-15k', name: 'High Pressure Fitting - NPT Female', type: 'Fitting', pressurePsi: 15000, pressureLabel: '~15,000 psi', connectionType: 'NPT Female', description: 'NPT female high pressure fitting for North American standard systems.', image: 'https://pblol2.blob.core.windows.net/hiflux/updated%20images/images/rf.jpeg' },
  { id: 'fit-ultra-150k', name: 'High Pressure Fitting - Ultra High Pressure (150,000 psi)', type: 'Fitting', pressurePsi: 150000, pressureLabel: '~150,000 psi', connectionType: 'UNF', description: 'Ultra high pressure fitting rated to 150,000 psi for extreme applications.', image: 'https://pblol2.blob.core.windows.net/hiflux/updated%20images/images/rf.jpeg' },
  { id: 'fit-ultra-100k', name: 'High Pressure Fitting - Ultra High Pressure (100,000 psi)', type: 'Fitting', pressurePsi: 100000, pressureLabel: '~100,000 psi', connectionType: 'UNF', description: 'Ultra high pressure fitting rated to 100,000 psi.', image: 'https://pblol2.blob.core.windows.net/hiflux/updated%20images/images/rf.jpeg' },
  { id: 'fit-high-60k', name: 'High Pressure Fitting - High Pressure (60,000 psi)', type: 'Fitting', pressurePsi: 60000, pressureLabel: '~60,000 psi', connectionType: 'UNF', description: 'High pressure fitting rated to 60,000 psi.', image: 'https://pblol2.blob.core.windows.net/hiflux/updated%20images/images/rf.jpeg' },
  { id: 'fit-high-30k', name: 'High Pressure Fitting - High Pressure (30,000 psi)', type: 'Fitting', pressurePsi: 30000, pressureLabel: '~30,000 psi', connectionType: 'UNF', description: 'High pressure fitting rated to 30,000 psi.', image: 'https://pblol2.blob.core.windows.net/hiflux/updated%20images/images/rf.jpeg' },
  { id: 'fit-med-20k', name: 'High Pressure Fitting - Medium Pressure', type: 'Fitting', pressurePsi: 20000, pressureLabel: '~20,000 psi', connectionType: 'UNF', description: 'Medium pressure fitting for standard high-pressure systems.', image: 'https://pblol2.blob.core.windows.net/hiflux/updated%20images/images/rf.jpeg' },
  { id: 'fit-low-15k', name: 'High Pressure Fitting - Low Pressure', type: 'Fitting', pressurePsi: 15000, pressureLabel: '~15,000 psi', connectionType: 'UNF', description: 'Low pressure fitting for standard applications up to 15,000 psi.', image: 'https://pblol2.blob.core.windows.net/hiflux/updated%20images/images/rf.jpeg' },
  { id: 'acc-ultra-150k', name: 'High Pressure Fitting Accessory - Ultra High Pressure (150,000 psi)', type: 'Fitting Accessory', pressurePsi: 150000, pressureLabel: '~150,000 psi', connectionType: 'UNF', description: 'Ultra high pressure fitting accessory rated to 150,000 psi.', image: 'https://pblol2.blob.core.windows.net/hiflux/updated%20images/images/nb.jpeg' },
  { id: 'acc-ultra-100k', name: 'High Pressure Fitting Accessory - Ultra High Pressure (100,000 psi)', type: 'Fitting Accessory', pressurePsi: 100000, pressureLabel: '~100,000 psi', connectionType: 'UNF', description: 'Ultra high pressure fitting accessory rated to 100,000 psi.', image: 'https://pblol2.blob.core.windows.net/hiflux/updated%20images/images/nb.jpeg' },
  { id: 'acc-high-60k-av', name: 'High Pressure Fitting Accessory - High Pressure Anti Vibration', type: 'Fitting Accessory', pressurePsi: 60000, pressureLabel: '~60,000 psi', connectionType: 'UNF', description: 'Anti-vibration high pressure fitting accessory rated to 60,000 psi.', image: 'https://pblol2.blob.core.windows.net/hiflux/updated%20images/images/nb.jpeg' },
  { id: 'acc-high-60k', name: 'High Pressure Fitting Accessory - High Pressure (60,000 psi)', type: 'Fitting Accessory', pressurePsi: 60000, pressureLabel: '~60,000 psi', connectionType: 'UNF', description: 'High pressure fitting accessory rated to 60,000 psi.', image: 'https://pblol2.blob.core.windows.net/hiflux/updated%20images/images/nb.jpeg' },
  { id: 'acc-high-30k', name: 'High Pressure Fitting Accessory - High Pressure (30,000 psi)', type: 'Fitting Accessory', pressurePsi: 30000, pressureLabel: '~30,000 psi', connectionType: 'UNF', description: 'High pressure fitting accessory rated to 30,000 psi.', image: 'https://pblol2.blob.core.windows.net/hiflux/updated%20images/images/nb.jpeg' },
  { id: 'acc-med-20k-av', name: 'High Pressure Fitting Accessory - Medium Pressure Anti Vibration', type: 'Fitting Accessory', pressurePsi: 20000, pressureLabel: '~20,000 psi', connectionType: 'UNF', description: 'Anti-vibration medium pressure fitting accessory rated to 20,000 psi.', image: 'https://pblol2.blob.core.windows.net/hiflux/updated%20images/images/nb.jpeg' },
  { id: 'acc-med-20k', name: 'High Pressure Fitting Accessory - Medium Pressure', type: 'Fitting Accessory', pressurePsi: 20000, pressureLabel: '~20,000 psi', connectionType: 'UNF', description: 'Medium pressure fitting accessory rated to 20,000 psi.', image: 'https://pblol2.blob.core.windows.net/hiflux/updated%20images/images/nb.jpeg' },
  { id: 'acc-low-15k', name: 'High Pressure Fitting Accessory - Low Pressure', type: 'Fitting Accessory', pressurePsi: 15000, pressureLabel: '~15,000 psi', connectionType: 'UNF', description: 'Low pressure fitting accessory rated to 15,000 psi.', image: 'https://pblol2.blob.core.windows.net/hiflux/updated%20images/images/nb.jpeg' },
  { id: 'mfb-pt-15k', name: 'High Pressure Manifold Block - PT Female', type: 'Manifold Block', pressurePsi: 15000, pressureLabel: '~15,000 psi', connectionType: 'PT Female', description: 'PT female high pressure manifold block for multi-port distribution.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/manifold-block.png' },
  { id: 'mfb-npt-15k', name: 'High Pressure Manifold Block - NPT Female', type: 'Manifold Block', pressurePsi: 15000, pressureLabel: '~15,000 psi', connectionType: 'NPT Female', description: 'NPT female high pressure manifold block for North American systems.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/manifold-block.png' },
  { id: 'mfb-high-60k', name: 'High Pressure Manifold Block - High Pressure', type: 'Manifold Block', pressurePsi: 60000, pressureLabel: '~60,000 psi', connectionType: 'UNF', description: 'High pressure manifold block for multi-port flow distribution at 60,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/manifold-block.png' },
  { id: 'mfb-med-20k', name: 'High Pressure Manifold Block - Medium Pressure', type: 'Manifold Block', pressurePsi: 20000, pressureLabel: '~20,000 psi', connectionType: 'UNF', description: 'Medium pressure manifold block for multi-port flow distribution at 20,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/manifold-block.png' },
  { id: 'mfb-low-15k', name: 'High Pressure Manifold Block - Low Pressure', type: 'Manifold Block', pressurePsi: 15000, pressureLabel: '~15,000 psi', connectionType: 'UNF', description: 'Low pressure manifold block for multi-port flow distribution at 15,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/manifold-block.png' },
  { id: 'cap-high-60k', name: 'High Pressure Tube Cap - High Pressure', type: 'Tube Cap', pressurePsi: 60000, pressureLabel: '~60,000 psi', connectionType: 'UNF', description: 'High pressure tube cap for sealing lines at 60,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/tube-cap.png' },
  { id: 'cap-med-20k', name: 'High Pressure Tube Cap - Medium Pressure', type: 'Tube Cap', pressurePsi: 20000, pressureLabel: '~20,000 psi', connectionType: 'UNF', description: 'Medium pressure tube cap for sealing lines at 20,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/tube-cap.png' },
  { id: 'cap-low-15k', name: 'High Pressure Tube Cap - Low Pressure', type: 'Tube Cap', pressurePsi: 15000, pressureLabel: '~15,000 psi', connectionType: 'UNF', description: 'Low pressure tube cap for sealing lines at 15,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/tube-cap.png' },
  { id: 'lube-blue', name: 'Oil Based Thread Lubricant - Blue Lube', type: 'Thread Lubricant', pressurePsi: 0, pressureLabel: 'N/A', connectionType: 'N/A', description: 'Oil based thread lubricant for high pressure fittings and connections. Prevents galling and seizing.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/thread-lubricant.png' },
]

function HifluxRow({ row }: { row: HifluxFitting }) {
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const rfqProduct: ProductForRFQ = {
    id: row.id,
    name: row.name,
    brand: 'Hiflux',
    category: 'High Pressure Fittings',
    categoryId: 'high-pressure-fittings',
    subCategory: row.type,
    thumbnail: row.image,
    description: row.description,
    keySpecs: [
      { label: 'Type', value: row.type },
      { label: 'Max Pressure', value: row.pressureLabel },
      { label: 'Connection', value: row.connectionType },
    ],
    variantInfo: { count: 1, sizeRange: row.pressureLabel },
  }

  const headerSx = {
    bgcolor: alpha(ACCENT, 0.04),
    borderBottom: `2px solid ${ACCENT}`,
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
          bgcolor: open ? alpha(ACCENT, 0.04) : 'inherit',
          '&:hover': { bgcolor: `${alpha(ACCENT, 0.03)} !important` },
        }}
      >
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontWeight: 700, fontSize: '0.82rem', py: 1, fontFamily: PRIMARY_FONT }}>{row.name}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.type} size="small" variant="outlined" sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: ACCENT, color: ACCENT }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.pressureLabel}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.connectionType}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button
            size="small"
            variant="contained"
            onClick={e => { e.stopPropagation(); setModalOpen(true) }}
            sx={{
              fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5,
              borderRadius: '4px', textTransform: 'capitalize', whiteSpace: 'nowrap',
              bgcolor: ACCENT, color: '#fff', boxShadow: 'none',
              '&:hover': { bgcolor: '#4ab534', boxShadow: 'none' },
            }}
          >
            Request Quote
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={6} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(ACCENT, 0.02), borderLeft: `4px solid ${ACCENT}`, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 160, height: 160, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', overflow: 'hidden', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={row.image} alt={row.name} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', p: 1 }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Box component="img" src={HIFLUX_LOGO} alt="Hiflux" sx={{ maxHeight: 28, maxWidth: 110, objectFit: 'contain', bgcolor: ACCENT, p: 1, borderRadius: 1, mb: 2 }} />
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 2, color: ACCENT, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      {[
                        { label: 'Name', value: row.name },
                        { label: 'Type', value: row.type },
                        { label: 'Max Pressure', value: row.pressureLabel },
                        { label: 'Connection', value: row.connectionType },
                      ].map(({ label, value }) => (
                        <Box key={label}>
                          <Typography variant="caption" color="text.secondary" fontWeight={700} sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
                          <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>{value}</Typography>
                        </Box>
                      ))}
                    </Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontFamily: PRIMARY_FONT }}>{row.description}</Typography>
                    <Button
                      variant="contained"
                      onClick={() => setModalOpen(true)}
                      sx={{ textTransform: 'capitalize', fontWeight: 700, borderRadius: '6px', bgcolor: ACCENT, color: '#fff', '&:hover': { bgcolor: '#4ab534' }, fontFamily: PRIMARY_FONT }}
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

export default function HifluxFittingsPage() {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  // Links such as ?type=Safety%20Valve open the table already filtered
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get('type')
    if (t && PRODUCTS.some(p => p.type === t)) setSelectedTypes([t])
  }, [])
  const [activePressure, setActivePressure] = useState(0)

  const toggleType = (t: string) =>
    setSelectedTypes(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t])

  const filtered = useMemo(() => {
    const pressureRange = PRESSURE_RANGES[activePressure]
    return PRODUCTS.filter(p => {
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(p.type)
      const pressureMatch = p.pressurePsi >= pressureRange.min && p.pressurePsi <= pressureRange.max
      return typeMatch && pressureMatch
    })
  }, [selectedTypes, activePressure])

  const paginated = filtered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  const headerSx = {
    bgcolor: alpha(ACCENT, 0.04),
    borderBottom: `2px solid ${ACCENT}`,
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
        {(selectedTypes.length > 0 || activePressure !== 0) && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: ACCENT }} onClick={() => { setSelectedTypes([]); setActivePressure(0) }}>
            Clear all
          </Typography>
        )}
      </Stack>

      <Accordion disableGutters elevation={0} defaultExpanded sx={{ bgcolor: 'transparent', '&:before': { display: 'none' } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, '& .MuiAccordionSummary-content': { my: 0.5 } }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="caption" fontWeight={700} color="text.primary">PRODUCT TYPE</Typography>
            {selectedTypes.length > 0 && <Chip label={selectedTypes.length} size="small" sx={{ height: 16, fontSize: '0.65rem', bgcolor: ACCENT, color: '#fff' }} />}
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0, pt: 0 }}>
          <FormGroup>
            {PRODUCT_TYPES.map(t => (
              <FormControlLabel
                key={t}
                control={
                  <Checkbox
                    size="small"
                    checked={selectedTypes.includes(t)}
                    onChange={() => toggleType(t)}
                    sx={{ py: 0.25, '&.Mui-checked': { color: ACCENT } }}
                  />
                }
                label={
                  <Stack direction="row" alignItems="center" spacing={0.75}>
                    <Typography variant="body2" fontSize="0.8rem">{t}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.68rem', fontWeight: 600 }}>
                      ({PRODUCTS.filter(p => p.type === t).length})
                    </Typography>
                  </Stack>
                }
                sx={{ mr: 0 }}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters elevation={0} defaultExpanded sx={{ bgcolor: 'transparent', '&:before': { display: 'none' } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, '& .MuiAccordionSummary-content': { my: 0.5 } }}>
          <Typography variant="caption" fontWeight={700} color="text.primary">PRESSURE RANGE</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0, pt: 0 }}>
          <FormGroup>
            {PRESSURE_RANGES.map((r, i) => (
              <FormControlLabel
                key={r.label}
                control={
                  <Checkbox
                    size="small"
                    checked={activePressure === i}
                    onChange={() => setActivePressure(prev => prev === i ? 0 : i)}
                    sx={{ py: 0.25, '&.Mui-checked': { color: ACCENT } }}
                  />
                }
                label={<Typography variant="body2" fontSize="0.8rem">{r.label}</Typography>}
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
        <Box component="img" src={HIFLUX_LOGO} alt="Hiflux" sx={{ maxHeight: 32, maxWidth: 120, objectFit: 'contain', bgcolor: ACCENT, p: 1, borderRadius: 1, mb: 2 }} />
        <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: ACCENT, fontFamily: PRIMARY_FONT }}>
          High Pressure Fittings & Accessories
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          Hiflux high pressure fittings, accessories, manifold blocks, tube caps and thread lubricant — rated up to 150,000 psi for industrial, hydrogen and wellhead applications.
        </Typography>
        <GroupSiteLinks variant="inline" sites={groupSitesIn("Hiflux")} />
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {['150,000 psi Max', `${PRODUCTS.length} Products`, 'KC / KGS by product'].map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(ACCENT, 0.08), color: ACCENT, border: `1px solid ${alpha(ACCENT, 0.3)}`, fontFamily: PRIMARY_FONT }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      {(selectedTypes.length > 0 || activePressure !== 0) && (
        <Box sx={{ px: { xs: 2, md: 3 }, pt: 2 }}>
          <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap">
            <Typography variant="caption" color="text.secondary" fontWeight={700}>ACTIVE FILTERS:</Typography>
            {selectedTypes.map(t => (
              <Chip key={t} label={`Type: ${t}`} size="small" variant="outlined" sx={{ borderColor: ACCENT, color: ACCENT }} onDelete={() => toggleType(t)} />
            ))}
            {activePressure !== 0 && (
              <Chip label={`Pressure: ${PRESSURE_RANGES[activePressure].label}`} size="small" variant="outlined" sx={{ borderColor: ACCENT, color: ACCENT }} onDelete={() => setActivePressure(0)} />
            )}
          </Stack>
        </Box>
      )}

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${filtered.length} PRODUCTS`}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'stretch', border: `1px solid ${alpha(ACCENT, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
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
                    <TableCell sx={headerSx}>Name</TableCell>
                    <TableCell sx={headerSx}>Type</TableCell>
                    <TableCell sx={headerSx}>Pressure</TableCell>
                    <TableCell sx={headerSx}>Connection</TableCell>
                    <TableCell sx={headerSx}>Quote</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginated.length === 0
                    ? <TableRow><TableCell colSpan={6} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary">No products found.</Typography></TableCell></TableRow>
                    : paginated.map(row => <HifluxRow key={row.id} row={row} />)
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
              rowsPerPageOptions={[25, 50]}
              sx={{ borderTop: '1px solid rgba(0,0,0,0.06)', fontSize: '0.8rem' }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
