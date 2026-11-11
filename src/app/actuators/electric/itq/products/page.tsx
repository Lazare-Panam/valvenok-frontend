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
import ProductActionCells from '@/src/app/Common/ProductDetail/ProductActionCells'
import { ITQ_MODELS, ITQ_COMMON, ITQ_IMAGE, ITQ_CATALOG, type ITQModel } from '../itqData'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const SPECS = ['ITQ 0100 – ITQ 9000', '100 – 9,000 Nm', 'Self-Locking Double Worm Gear', 'IP67 (IP68 Option)', 'ISO 5211 F07 – F30']
const amps = (a: [number, number]) => `${a[0]} / ${a[1]} A`

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT, textTransform: 'none' }}>{value}</Typography>
    </Box>
  )
}

function ITQRow({ row, onQuote }: { row: ITQModel; onQuote: (m: ITQModel) => void }) {
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
        <TableCell sx={{ ...cell, fontWeight: 700 }}>{row.model}</TableCell>
        <TableCell sx={cell}>{row.torqueNm.toLocaleString("en-GB")} Nm</TableCell>
        <TableCell sx={cell}>{row.time50} / {row.time60} s</TableCell>
        <TableCell sx={cell}>{row.dutyS4}%</TableCell>
        <TableCell sx={cell}>{row.mounting}</TableCell>
        <TableCell sx={cell}>{row.weightKg} kg</TableCell>
        <ProductActionCells
          detailHref={`/actuators/electric/itq/products/${encodeURIComponent(row.model)}`}
          secondaryLabel="Request Quote"
          onSecondary={e => { e.stopPropagation(); onQuote(row) }}
        />
      </TableRow>
      {open && (
        <TableRow>
          <TableCell colSpan={9} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_GREEN, 0.02), borderLeft: `4px solid ${BRAND_GREEN}`, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 160, height: 160, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', overflow: 'hidden', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={ITQ_IMAGE} alt={`${row.model} quarter-turn electric actuator`} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Torque" value={`${row.torqueNm.toLocaleString("en-GB")} Nm`} />
                      <Spec label="Operating Time (50 / 60 Hz)" value={`${row.time50} s / ${row.time60} s`} />
                      <Spec label="Operating Time (24 VDC, no load)" value={row.time24dc ? `${row.time24dc} s` : 'Not available'} />
                      <Spec label="Duty Cycle (Modulating)" value={`S4 – ${row.dutyS4}%`} />
                      <Spec label="Mounting" value={row.mounting} />
                      <Spec label="Max Bore (Key / Square)" value={`${row.boreKey} / ${row.boreSquare} mm`} />
                      <Spec label="Handwheel Turns" value={`${row.handwheelTurns}`} />
                      <Spec label="Weight" value={`${row.weightKg} kg`} />
                      <Spec label="Current 1Ph 110 V (50 / 60 Hz)" value={amps(row.a1ph110)} />
                      <Spec label="Current 1Ph 220 V (50 / 60 Hz)" value={amps(row.a1ph220)} />
                      <Spec label="Current 3Ph 380 V (50 / 60 Hz)" value={amps(row.a3ph380)} />
                      <Spec label="Current 3Ph 440 V (50 / 60 Hz)" value={amps(row.a3ph440)} />
                      {row.a24v && <Spec label="Current AC / DC 24 V" value={`${row.a24v} A`} />}
                      {ITQ_COMMON.map(c => <Spec key={c.label} label={c.label} value={c.value} />)}
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

export default function ITQProductsPage() {
  const [quote, setQuote] = useState<ProductForRFQ | null>(null)

  const openQuote = (m: ITQModel) => setQuote({
    id: m.model,
    name: `ITQ Series Electric Actuator — ${m.model}`,
    brand: 'Susin',
    category: 'Electric Actuators',
    categoryId: 'electric-actuators',
    subCategory: 'ITQ Series',
    thumbnail: ITQ_IMAGE,
    description: `${m.model} quarter-turn electric actuator, ${m.torqueNm.toLocaleString("en-GB")} Nm, ${m.mounting}.`,
    keySpecs: [
      { label: 'Model', value: m.model },
      { label: 'Torque', value: `${m.torqueNm.toLocaleString("en-GB")} Nm` },
      { label: 'Operating Time', value: `${m.time50} s (50 Hz)` },
      { label: 'Mounting', value: m.mounting },
      { label: 'Weight', value: `${m.weightKg} kg` },
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
          ITQ Series Electric Actuators: All Models
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT, textTransform: 'none' }}>
          Heavy-duty quarter-turn electric actuators with self-locking double worm gearing. Eleven models from 100 to 9,000 Nm. Click a model for its full specifications.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
          {SPECS.map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(BRAND_GREEN, 0.08), color: '#2d8a1e', border: `1px solid ${alpha(BRAND_GREEN, 0.3)}`, fontFamily: PRIMARY_FONT }}>
              {s}
            </Box>
          ))}
          <Button href={ITQ_CATALOG} target="_blank" rel="noopener" size="small" startIcon={<DownloadIcon />}
            sx={{ textTransform: 'none', fontWeight: 700, color: '#2d8a1e' }}>
            Catalogue (PDF)
          </Button>
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${ITQ_MODELS.length} MODELS`}
        </Typography>
        <TableContainer sx={{ border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px', bgcolor: 'background.paper' }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ ...headerSx, width: 40 }} />
                <TableCell sx={headerSx}>Model</TableCell>
                <TableCell sx={headerSx}>Torque</TableCell>
                <TableCell sx={headerSx}>Time (50 / 60 Hz)</TableCell>
                <TableCell sx={headerSx}>Duty (S4)</TableCell>
                <TableCell sx={headerSx}>Mounting</TableCell>
                <TableCell sx={headerSx}>Weight</TableCell>
                <TableCell sx={headerSx}>Details</TableCell>
                <TableCell sx={headerSx}>Quote</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ITQ_MODELS.map(m => <ITQRow key={m.model} row={m} onQuote={openQuote} />)}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {quote && <RFQModal open onClose={() => setQuote(null)} product={quote} />}
    </Box>
  )
}
