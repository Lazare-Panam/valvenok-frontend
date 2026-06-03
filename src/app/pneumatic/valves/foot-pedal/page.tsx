'use client'
import { useState } from 'react'
import {
  Box, Stack, Typography, Button, Chip, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, IconButton, Collapse,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const IMAGE = 'https://pblol2.blob.core.windows.net/spac-images/products/pneumatic-valves/foot-pedal.jpg'

interface FootPedalDTO {
  partNumber: string
  description: string
  wayType: string
  thread: string
  feature: string
}

const FOOT_PEDAL_VALVES: FootPedalDTO[] = [
  { partNumber: 'TG23J-08',   description: '3/2 Way Foot Pedal Valve BSP 1/4"',                   wayType: '3/2 Way', thread: 'BSP 1/4"', feature: 'Standard'      },
  { partNumber: 'TG24J-08',   description: '4/2 Way Foot Pedal Valve BSP 1/4"',                   wayType: '4/2 Way', thread: 'BSP 1/4"', feature: 'Standard'      },
  { partNumber: 'TG25J-08',   description: '5/2 Way Foot Pedal Valve BSP 1/4"',                   wayType: '5/2 Way', thread: 'BSP 1/4"', feature: 'Standard'      },
  { partNumber: 'TG25J-08L',  description: '5/2 Way Foot Pedal Valve BSP 1/4" with Lock',         wayType: '5/2 Way', thread: 'BSP 1/4"', feature: 'Lock'          },
  { partNumber: 'TG25J-08G',  description: '5/2 Way Foot Pedal Valve BSP 1/4" with Guard',        wayType: '5/2 Way', thread: 'BSP 1/4"', feature: 'Guard'         },
  { partNumber: 'TG25J-08LG', description: '5/2 Way Foot Pedal Valve BSP 1/4" with Lock & Guard', wayType: '5/2 Way', thread: 'BSP 1/4"', feature: 'Lock & Guard'  },
]

const SERIES_DESCRIPTION = {
  title: 'Foot Pedal Valves',
  description:
    'Heavy-duty pneumatic foot pedal valves for hands-free machine control. Available in 3/2, 4/2 and 5/2 way configurations with BSP 1/4" connections, plus locking and guard variants for safety-critical applications.',
  specs: [
    '3/2 · 4/2 · 5/2 Way',
    'BSP 1/4"',
    'Hands-Free Operation',
    'Lock & Guard Variants',
    'Industrial Heavy-Duty',
  ],
}

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

function FootPedalRow({ v }: { v: FootPedalDTO }) {
  const [open, setOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)

  const openQuote = () => setQuoteProduct({
    id: v.partNumber,
    name: `Foot Pedal Valve — ${v.partNumber}`,
    brand: 'Valvenok',
    category: 'Pneumatic Valves',
    categoryId: 'pneumatic-valves',
    subCategory: `${v.wayType} Foot Pedal`,
    thumbnail: IMAGE,
    description: v.description,
    keySpecs: [
      { label: 'Part Number', value: v.partNumber },
      { label: 'Way Type',    value: v.wayType },
      { label: 'Thread',      value: v.thread },
      { label: 'Feature',     value: v.feature },
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
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{v.description}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={v.wayType} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: BRAND_GREEN, color: BRAND_GREEN }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{v.feature}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained" onClick={e => { e.stopPropagation(); openQuote() }}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'none', whiteSpace: 'nowrap', bgcolor: BRAND_GREEN, color: '#fff', boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
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
                    <Box component="img" src={IMAGE} alt={v.partNumber} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 1, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>DESCRIPTION</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6, fontFamily: PRIMARY_FONT }}>{v.description}</Typography>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Part Number" value={v.partNumber} />
                      <Spec label="Way Type"    value={v.wayType} />
                      <Spec label="Thread"      value={v.thread} />
                      <Spec label="Feature"     value={v.feature} />
                    </Stack>
                    <Button variant="contained" onClick={openQuote}
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
      {quoteProduct && <RFQModal open={!!quoteProduct} onClose={() => setQuoteProduct(null)} product={quoteProduct} />}
    </>
  )
}

export default function FootPedalValvesPage() {
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
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
          {SERIES_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700, fontFamily: PRIMARY_FONT }}>
          {SERIES_DESCRIPTION.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {SERIES_DESCRIPTION.specs.map(s => (
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
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${FOOT_PEDAL_VALVES.length} CONFIGURATIONS`}
        </Typography>
        <Box sx={{ border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
          <TableContainer>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...headerSx, width: 40 }} />
                  <TableCell sx={headerSx}>Part Number</TableCell>
                  <TableCell sx={headerSx}>Description</TableCell>
                  <TableCell sx={headerSx}>Way Type</TableCell>
                  <TableCell sx={headerSx}>Feature</TableCell>
                  <TableCell sx={headerSx}>Quote</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {FOOT_PEDAL_VALVES.map((v, i) => (
                  <FootPedalRow key={`${v.partNumber}-${i}`} v={v} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  )
}