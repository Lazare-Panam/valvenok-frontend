'use client'
import { useState } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Collapse, Typography, Stack, IconButton, Button,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import DownloadIcon from '@mui/icons-material/Download'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'
import { HLDA_MODELS, HLDA_COMMON, HLDA_IMAGE, HLDA_CATALOG, PRESSURES, type HLDAModel } from '../hldaData'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const SPECS = ['HLDA-030 – HLDA-200', '6 – 402 kN', 'Bore 32 – 200 mm', 'Up to 200 bar', 'IP66M / IP67M']
const n = (v: number) => v.toLocaleString('en-GB')

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT, textTransform: 'none' }}>{value}</Typography>
    </Box>
  )
}

function HLDARow({ row, onQuote }: { row: HLDAModel; onQuote: (m: HLDAModel) => void }) {
  const [open, setOpen] = useState(false)
  const cell = { py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }
  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)}
        sx={{ cursor: 'pointer', bgcolor: open ? alpha(BRAND_GREEN, 0.04) : 'inherit' }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" aria-label={open ? 'Hide details' : 'Show details'}
            onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ ...cell, fontWeight: 700 }}>{row.model} / E{row.model}</TableCell>
        <TableCell sx={cell}>{row.boreMm} mm</TableCell>
        {row.kN.map(([c, o], k) => <TableCell key={k} sx={cell}>{c} / {o} kN</TableCell>)}
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained" onClick={e => { e.stopPropagation(); onQuote(row) }}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'none', whiteSpace: 'nowrap', bgcolor: BRAND_GREEN, color: '#fff', boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
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
                  <Box sx={{ width: 160, height: 160, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', overflow: 'hidden', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={HLDA_IMAGE} alt={`${row.model} linear piston hydraulic actuator`} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Cylinder Bore" value={`${row.boreMm} mm`} />
                      {PRESSURES.map((p, k) => (
                        <Spec key={p} label={`Thrust at ${p} bar (close / open)`} value={`${row.kN[k][0]} / ${row.kN[k][1]} kN · ${n(row.lbf[k][0])} / ${n(row.lbf[k][1])} lbf`} />
                      ))}
                      {HLDA_COMMON.map(c => <Spec key={c.label} label={c.label} value={c.value} />)}
                    </Stack>
                    <Button variant="contained" onClick={() => onQuote(row)}
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
    </>
  )
}

export default function HLDAProductsPage() {
  const [quote, setQuote] = useState<ProductForRFQ | null>(null)

  const openQuote = (m: HLDAModel) => setQuote({
    id: m.model,
    name: `HLDA Linear Piston Hydraulic Actuator — ${m.model}`,
    brand: 'Susin',
    category: 'Hydraulic Actuators',
    categoryId: 'hydraulic-actuators',
    subCategory: 'HLDA Series',
    thumbnail: HLDA_IMAGE,
    description: `${m.model} (or electro-hydraulic E${m.model}) double acting linear piston actuator, ${m.boreMm} mm bore, ${m.kN[0][0]}–${m.kN[2][0]} kN closing thrust at 100–160 bar.`,
    keySpecs: [
      { label: 'Model', value: `${m.model} / E${m.model}` },
      { label: 'Bore', value: `${m.boreMm} mm` },
      { label: 'Thrust 100 bar', value: `${m.kN[0][0]} / ${m.kN[0][1]} kN` },
      { label: 'Thrust 160 bar', value: `${m.kN[2][0]} / ${m.kN[2][1]} kN` },
    ],
    variantInfo: { count: 1, sizeRange: m.model },
  })

  const headerSx = {
    bgcolor: alpha(BRAND_GREEN, 0.04), borderBottom: `2px solid ${BRAND_GREEN}`,
    fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase' as const,
    letterSpacing: '0.05em', fontFamily: PRIMARY_FONT, whiteSpace: 'nowrap' as const,
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h1" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
          HLDA Linear Piston Hydraulic Actuators: All Models
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT, textTransform: 'none' }}>
          Double acting linear piston actuators, hydraulic (HLDA) or electro-hydraulic (EHLDA). Eleven bores from 32 to 200 mm, 6 to 402 kN at 100 to 160 bar. Click a model for its full specifications.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
          {SPECS.map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(BRAND_GREEN, 0.08), color: '#2d8a1e', border: `1px solid ${alpha(BRAND_GREEN, 0.3)}`, fontFamily: PRIMARY_FONT }}>
              {s}
            </Box>
          ))}
          <Button href={HLDA_CATALOG} target="_blank" rel="noopener" size="small" startIcon={<DownloadIcon />}
            sx={{ textTransform: 'none', fontWeight: 700, color: '#2d8a1e' }}>
            Data sheet (PDF)
          </Button>
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${HLDA_MODELS.length} MODELS`}
        </Typography>
        <TableContainer sx={{ border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px', bgcolor: 'background.paper' }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ ...headerSx, width: 40 }} />
                <TableCell sx={headerSx}>Model</TableCell>
                <TableCell sx={headerSx}>Bore</TableCell>
                {PRESSURES.map(p => <TableCell key={p} sx={headerSx}>{p} bar (close / open)</TableCell>)}
                <TableCell sx={headerSx}>Quote</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {HLDA_MODELS.map(m => <HLDARow key={m.model} row={m} onQuote={openQuote} />)}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {quote && <RFQModal open onClose={() => setQuote(null)} product={quote} />}
    </Box>
  )
}
