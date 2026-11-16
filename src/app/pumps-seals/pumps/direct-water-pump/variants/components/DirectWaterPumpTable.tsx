import { useState } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Collapse, Chip, Typography, Stack,
  IconButton, Button,
} from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import * as XLSX from 'xlsx'
import { DirectWaterPumpModel } from './data'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

function Spec({ label, value }: { label: string; value: string }) {
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.disabled" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25 }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600}>{value}</Typography>
    </Box>
  )
}

function Row({ model }: { model: DirectWaterPumpModel }) {
  const [open, setOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)
  const theme = useTheme()

  const openQuote = () => setQuoteProduct({
    id: model.id,
    name: model.modelCode,
    brand: 'WALRUS',
    category: 'Direct Water Pump',
    categoryId: 'direct-water-pump',
    subCategory: 'TP3_PTB Series',
    thumbnail: 'https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TP3.webp',
    description: `${model.modelCode} — ${model.frequencyHz}Hz, ${model.powerKw}kW, H max ${model.hMaxM}m, Q max ${model.qMaxLMin}L/min. ${model.antiMicrobial ? 'Anti-microbial (B) variant.' : 'Standard (non anti-microbial) variant.'}`,
    keySpecs: [
      { label: 'Frequency', value: `${model.frequencyHz} Hz` },
      { label: 'Power',     value: `${model.powerKw} kW` },
      { label: 'H max',     value: `${model.hMaxM} m` },
      { label: 'Q max',     value: `${model.qMaxLMin} L/min` },
    ],
    variantInfo: { count: 1, sizeRange: model.modelCode },
  })

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
        <TableCell sx={{ fontFamily: 'monospace', fontWeight: 700, color: theme.palette.primary.main, fontSize: '0.8rem', py: 1 }}>
          {model.modelCode}
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip
            label={model.antiMicrobial ? 'Anti-Microbial' : 'Standard'}
            size="small"
            color={model.antiMicrobial ? 'primary' : 'default'}
            sx={{ fontSize: '0.65rem', fontWeight: 700 }}
          />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.frequencyHz} Hz</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.powerKw} kW</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.voltV} V</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.hMaxM} m</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.qMaxLMin} L/min</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained"
            onClick={e => { e.stopPropagation(); openQuote() }}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'capitalize', whiteSpace: 'nowrap', boxShadow: 'none', '&:hover': { boxShadow: 'none' } }}>
            Request Quote
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={8} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.02), borderLeft: `4px solid ${theme.palette.primary.main}`, borderBottom: `1px solid ${theme.palette.divider}` }}>
                <Typography variant="caption" fontWeight={900} color="primary"
                  sx={{ display: 'block', mb: 2, letterSpacing: 1 }}>TECHNICAL SPECIFICATIONS</Typography>
                <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                  <Spec label="Model Code" value={model.modelCode} />
                  <Spec label="Anti-Microbial" value={model.antiMicrobial ? 'Yes (B)' : 'No'} />
                  <Spec label="Frequency" value={`${model.frequencyHz} Hz`} />
                  <Spec label="Power" value={`${model.powerKw} kW`} />
                  <Spec label="Phase" value={`${model.phase}-Phase`} />
                  <Spec label="Volt" value={`${model.voltV} V`} />
                  <Spec label="Amps" value={`${model.ampsA} A`} />
                  <Spec label="Inlet" value={model.inletIn} />
                  <Spec label="Outlet" value={model.outletIn} />
                  <Spec label="H max." value={`${model.hMaxM} m`} />
                  <Spec label="Q max." value={`${model.qMaxLMin} L/min`} />
                  <Spec label="N.W." value={`${model.nwKg} kg`} />
                  <Spec label="G.W." value={`${model.gwKg} kg`} />
                  <Spec label="Pack Qty" value={model.packQty} />
                </Stack>
                <Button variant="contained" onClick={openQuote}
                  sx={{ textTransform: 'capitalize', fontWeight: 700, borderRadius: '6px' }}>
                  Request Quote
                </Button>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
      {quoteProduct && <RFQModal open={!!quoteProduct} onClose={() => setQuoteProduct(null)} product={quoteProduct} />}
    </>
  )
}

type SortKey = 'modelCode' | 'frequencyHz' | 'powerKw'

export default function DirectWaterPumpTable({ models, isFetching }: { models: DirectWaterPumpModel[]; isFetching?: boolean }) {
  const theme = useTheme()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(50)
  const [sortKey, setSortKey] = useState<SortKey>('modelCode')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')
  const [exporting, setExporting] = useState(false)

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
  }

  const sorted = [...models].sort((a, b) => {
    const av = a[sortKey] ?? '', bv = b[sortKey] ?? ''
    if (av < bv) return sortDir === 'asc' ? -1 : 1
    if (av > bv) return sortDir === 'asc' ? 1 : -1
    return 0
  })

  const paginated = sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  const handleExportToExcel = () => {
    setExporting(true)
    try {
      const rows = sorted.map((m) => ({
        'Model Code': m.modelCode,
        'Anti-Microbial': m.antiMicrobial ? 'Yes' : 'No',
        'Frequency (Hz)': m.frequencyHz,
        'Power (kW)': m.powerKw,
        Phase: m.phase,
        'Volt (V)': m.voltV,
        'Amps (A)': m.ampsA,
        Inlet: m.inletIn,
        Outlet: m.outletIn,
        'H max (m)': m.hMaxM,
        'Q max (L/min)': m.qMaxLMin,
        'N.W. (kg)': m.nwKg,
        'G.W. (kg)': m.gwKg,
        'Pack Qty': m.packQty,
      }))

      const worksheet = XLSX.utils.json_to_sheet(rows)
      worksheet['!cols'] = [
        { wch: 16 }, // Model Code
        { wch: 14 }, // Anti-Microbial
        { wch: 14 }, // Frequency
        { wch: 12 }, // Power
        { wch: 8 },  // Phase
        { wch: 10 }, // Volt
        { wch: 10 }, // Amps
        { wch: 10 }, // Inlet
        { wch: 10 }, // Outlet
        { wch: 12 }, // H max
        { wch: 16 }, // Q max
        { wch: 10 }, // N.W.
        { wch: 10 }, // G.W.
        { wch: 10 }, // Pack Qty
      ]

      const workbook = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Direct Water Pumps')
      XLSX.writeFile(workbook, 'direct-water-pump-models.xlsx')
    } finally {
      setExporting(false)
    }
  }

  const headerSx = {
    bgcolor: alpha(theme.palette.primary.main, 0.04),
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    fontWeight: 700, fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  }

  return (
    <Box sx={{ position: 'relative', flex: 1, minWidth: 0 }}>
      {isFetching && (
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backdropFilter: 'blur(2px)', bgcolor: 'rgba(255,255,255,0.4)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ bgcolor: 'background.paper', px: 3, py: 1.5, borderRadius: '20px', boxShadow: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: theme.palette.primary.main, animation: 'pulse 1s ease-in-out infinite', '@keyframes pulse': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.3 } } }} />
            <Typography variant="caption" fontWeight={700} sx={{ color: theme.palette.primary.main }}>UPDATING</Typography>
          </Box>
        </Box>
      )}

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ mb: 1 }}>
        <Button
          size="small"
          variant="outlined"
          startIcon={<FileDownloadIcon fontSize="small" />}
          onClick={handleExportToExcel}
          disabled={exporting || sorted.length === 0}
          sx={{ textTransform: 'capitalize', fontWeight: 700 }}
        >
          {exporting ? 'Exporting...' : 'Import as Excel'}
        </Button>
      </Stack>

      <TableContainer sx={{ opacity: isFetching ? 0.6 : 1, transition: 'opacity 0.2s ease' }}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...headerSx, width: 40 }} />
              {([
                { key: 'modelCode' as SortKey, label: 'Model Code' },
                { key: null, label: 'Anti-Microbial' },
                { key: 'frequencyHz' as SortKey, label: 'Frequency' },
                { key: 'powerKw' as SortKey, label: 'Power' },
                { key: null, label: 'Volt' },
                { key: null, label: 'H max' },
                { key: null, label: 'Q max' },
                { key: null, label: 'Quote' },
              ]).map((h, i) => (
                <TableCell key={i} sx={headerSx}>
                  {h.key ? (
                    <TableSortLabel active={sortKey === h.key} direction={sortKey === h.key ? sortDir : 'asc'} onClick={() => handleSort(h.key!)}>
                      {h.label}
                    </TableSortLabel>
                  ) : h.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginated.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} align="center" sx={{ py: 6 }}>
                  <Typography variant="body2" color="text.secondary">No models found.</Typography>
                </TableCell>
              </TableRow>
            ) : paginated.map((model) => <Row key={model.id} model={model} />)}
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
        sx={{ borderTop: `1px solid ${theme.palette.divider}`, fontSize: '0.8rem' }}
      />
    </Box>
  )
}