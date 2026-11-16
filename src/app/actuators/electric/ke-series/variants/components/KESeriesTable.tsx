import { useState } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Collapse, Chip, Typography, Stack,
  IconButton, Button,
} from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { KESeriesActuatorModel } from './data'
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

function Row({ model }: { model: KESeriesActuatorModel }) {
  const [open, setOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)
  const theme = useTheme()

  const openQuote = () => setQuoteProduct({
    id: model.id,
    name: model.modelCode,
    brand: 'KOSAPLUS',
    category: 'Electric Actuators',
    categoryId: 'electric-actuators',
    subCategory: 'KE Series',
    thumbnail: 'https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/ec-kosaplus.png',
    description: `${model.modelCode} — max torque ${model.maxTorque90}Nm, operating time ${model.opTime5060Sec}s (50/60Hz), ISO ${model.isoStandard}.`,
    keySpecs: [
      { label: 'Max Torque', value: `${model.maxTorque90} Nm` },
      { label: 'Op. Time',   value: `${model.opTime5060Sec} sec` },
      { label: 'ISO 5211',   value: model.isoStandard },
      { label: 'Weight',     value: `${model.weightKg} kg` },
    ],
    variantInfo: { count: 1, sizeRange: model.baseModel },
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
          <Chip label={model.baseModel} size="small" variant="outlined" sx={{ fontSize: '0.65rem', fontWeight: 700 }} />
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip
            label={model.variant}
            size="small"
            color={model.variant === 'Standard' ? 'primary' : 'default'}
            sx={{ fontSize: '0.65rem', fontWeight: 700 }}
          />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.maxTorque90} Nm</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.opTime5060Sec} s</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.weightKg} kg</TableCell>
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
                  <Spec label="Base Model" value={model.baseModel} />
                  <Spec label="Variant" value={model.variant} />
                  <Spec label="Torque @ 0°" value={model.maxTorque0 !== '—' ? `${model.maxTorque0} Nm` : '—'} />
                  <Spec label="Torque @ 45°" value={model.maxTorque45 !== '—' ? `${model.maxTorque45} Nm` : '—'} />
                  <Spec label="Torque @ 90°" value={`${model.maxTorque90} Nm`} />
                  <Spec label="Op. Time (50/60Hz)" value={`${model.opTime5060Sec} sec`} />
                  <Spec label="Amps 110V AC" value={model.amps110V} />
                  <Spec label="Amps 220V AC" value={model.amps220V} />
                  <Spec label="Amps 380V AC" value={model.amps380V} />
                  <Spec label="Amps 440V AC" value={model.amps440V} />
                  <Spec label="Amps 24V DC" value={model.ampsDC24V} />
                  <Spec label="Motor Class/Output" value={model.motorSpec} />
                  <Spec label="Manual Turns" value={model.manualTurns} />
                  <Spec label="Weight" value={`${model.weightKg} kg`} />
                  <Spec label="ISO 5211 Standard" value={model.isoStandard} />
                  <Spec label="ISO 5211 Option" value={model.isoOption} />
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

type SortKey = 'modelCode' | 'baseModel' | 'maxTorque90' | 'weightKg'

export default function KESeriesTable({ models, isFetching }: { models: KESeriesActuatorModel[]; isFetching?: boolean }) {
  const theme = useTheme()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(50)
  const [sortKey, setSortKey] = useState<SortKey>('modelCode')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

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
      <TableContainer sx={{ opacity: isFetching ? 0.6 : 1, transition: 'opacity 0.2s ease' }}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...headerSx, width: 40 }} />
              {([
                { key: 'modelCode' as SortKey, label: 'Model Code' },
                { key: 'baseModel' as SortKey, label: 'Base Model' },
                { key: null, label: 'Variant' },
                { key: 'maxTorque90' as SortKey, label: 'Max Torque' },
                { key: null, label: 'Op. Time' },
                { key: 'weightKg' as SortKey, label: 'Weight' },
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