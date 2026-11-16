'use client'
import { useState, useMemo } from 'react'
import {
  Box, Stack, Typography, Button, Chip, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, IconButton, Collapse, ToggleButtonGroup, ToggleButton,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { TG_VALVES, TG_DESCRIPTION, TGValveDTO } from './hooks/tgData'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const TG_IMAGE = 'https://pblol2.blob.core.windows.net/spac-images/products/pneumatic-valves/pneumatic-valves.png'

function Spec({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>{value}</Typography>
    </Box>
  )
}

function TGValveRow({ v }: { v: TGValveDTO }) {
  const [open, setOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)

  const openQuote = () => setQuoteProduct({
    id: v.partNumber,
    name: `TG Series Solenoid Valve — ${v.partNumber}`,
    brand: 'Valvenok',
    category: 'Pneumatic Valves',
    categoryId: 'pneumatic-valves',
    subCategory: `${v.wayType} Way ${v.config}`,
    thumbnail: TG_IMAGE,
    description: v.description,
    keySpecs: [
      { label: 'Part Number',    value: v.partNumber },
      { label: 'Way Type',       value: `${v.wayType} Way` },
      { label: 'Configuration',  value: v.config },
      { label: 'Thread',         value: v.thread },
    ],
    variantInfo: { count: 1, sizeRange: v.thread },
  })

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{
        cursor: 'pointer',
        bgcolor: open ? alpha(BRAND_GREEN, 0.04) : 'inherit',
        '&:hover': { bgcolor: `${alpha(BRAND_GREEN, 0.03)} !important` },
      }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontFamily: 'monospace', fontWeight: 700, color: BRAND_GREEN, fontSize: '0.75rem', py: 1 }}>
          {v.partNumber}
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={`${v.wayType} Way`} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: BRAND_GREEN, color: BRAND_GREEN }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{v.config}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{v.thread}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained" onClick={e => { e.stopPropagation(); openQuote() }}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'capitalize', whiteSpace: 'nowrap', bgcolor: BRAND_GREEN, color: '#fff', boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
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
                  <Box sx={{ width: 160, height: 160, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', overflow: 'hidden', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={TG_IMAGE} alt={v.partNumber} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 1, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>DESCRIPTION</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6, fontFamily: PRIMARY_FONT }}>{v.description}</Typography>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Part Number"   value={v.partNumber} />
                      <Spec label="Way Type"      value={`${v.wayType} Way`} />
                      <Spec label="Configuration" value={v.config} />
                      <Spec label="Thread"        value={v.thread} />
                    </Stack>
                    <Button variant="contained" onClick={openQuote}
                      sx={{ textTransform: 'capitalize', fontWeight: 700, borderRadius: '6px', bgcolor: BRAND_GREEN, color: '#fff', '&:hover': { bgcolor: '#50c23a' }, fontFamily: PRIMARY_FONT }}>
                      Request Quote
                    </Button>
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

const WAY_TYPES = ['all', '2/2', '3/2', '5/2', '5/3'] as const
type WayFilter = typeof WAY_TYPES[number]

export default function TGValvesPage() {
  const [wayFilter, setWayFilter] = useState<WayFilter>('all')

  const filtered = useMemo(() => {
    if (wayFilter === 'all') return TG_VALVES
    return TG_VALVES.filter(v => v.wayType === wayFilter)
  }, [wayFilter])

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
          {TG_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700, fontFamily: PRIMARY_FONT }}>
          {TG_DESCRIPTION.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {TG_DESCRIPTION.specs.map(s => (
            <Box key={s} sx={{
              px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600,
              bgcolor: alpha(BRAND_GREEN, 0.08), color: '#2d8a1e',
              border: `1px solid ${alpha(BRAND_GREEN, 0.3)}`,
              fontFamily: PRIMARY_FONT,
            }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Stack direction="row" alignItems="center" spacing={2} mb={2} flexWrap="wrap" useFlexGap>
          <Typography variant="caption" fontWeight={700} color="text.secondary"
            sx={{ letterSpacing: 1, fontFamily: PRIMARY_FONT }}>
            FILTER BY WAY TYPE:
          </Typography>
          <ToggleButtonGroup
            exclusive
            value={wayFilter}
            onChange={(_, val) => { if (val) setWayFilter(val) }}
            size="small"
            sx={{
              '& .MuiToggleButton-root': {
                fontSize: '0.75rem', fontWeight: 700,
                py: 0.5, px: 2, textTransform: 'capitalize',
                borderColor: alpha(BRAND_GREEN, 0.3),
                fontFamily: PRIMARY_FONT,
              },
              '& .Mui-selected': {
                bgcolor: `${BRAND_GREEN} !important`,
                color: '#fff !important',
              },
            }}>
            <ToggleButton value="all">All ({TG_VALVES.length})</ToggleButton>
            {(['2/2', '3/2', '5/2', '5/3'] as const).map(w => (
              <ToggleButton key={w} value={w}>
                {w} Way ({TG_VALVES.filter(v => v.wayType === w).length})
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Stack>

        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${filtered.length} CONFIGURATIONS`}
        </Typography>

        <Box sx={{ border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
          <TableContainer>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...headerSx, width: 40 }} />
                  <TableCell sx={headerSx}>Part Number</TableCell>
                  <TableCell sx={headerSx}>Way Type</TableCell>
                  <TableCell sx={headerSx}>Configuration</TableCell>
                  <TableCell sx={headerSx}>Thread</TableCell>
                  <TableCell sx={headerSx}>Quote</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filtered.length === 0
                  ? <TableRow><TableCell colSpan={6} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary" fontFamily={PRIMARY_FONT}>No valves match this filter.</Typography></TableCell></TableRow>
                  : filtered.map((v, i) => <TGValveRow key={`${v.partNumber}-${i}`} v={v} />)
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  )
}