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
import { ITQM_MODELS, ITQM_CATALOG, type ITQMicroModel } from '../itqMicroData'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const SPECS = ['ITQ 0020 · 0040 · 0080', '25 – 80 Nm', '1 – 3.5 kg', 'IP66 / IP67', 'ISO 5211 F03 – F07']

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT, textTransform: 'none' }}>{value}</Typography>
    </Box>
  )
}

function ITQMRow({ row, onQuote }: { row: ITQMicroModel; onQuote: (m: ITQMicroModel) => void }) {
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
        <TableCell sx={cell}>{row.torqueNm} Nm</TableCell>
        <TableCell sx={cell}>{row.speed}</TableCell>
        <TableCell sx={cell}>{row.enclosure}</TableCell>
        <TableCell sx={cell}>{row.mounting}</TableCell>
        <TableCell sx={cell}>{row.weightKg} kg</TableCell>
        <ProductActionCells
          detailHref={`/actuators/electric/itq-micro/products/${encodeURIComponent(row.model)}`}
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
                    <Box component="img" src={row.image} alt={`${row.model} compact electric actuator`} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6, fontFamily: PRIMARY_FONT, textTransform: 'none' }}>{row.summary}</Typography>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Torque" value={`${row.torqueNm} Nm`} />
                      <Spec label="Operating Time" value={row.speed} />
                      <Spec label="Power Supply" value={row.power} />
                      <Spec label="Mounting" value={row.mounting} />
                      <Spec label="Enclosure" value={row.enclosure} />
                      <Spec label="Weight" value={`${row.weightKg} kg`} />
                      {row.specs.map(c => <Spec key={c.label} label={c.label} value={c.value} />)}
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

export default function ITQMicroProductsPage() {
  const [quote, setQuote] = useState<ProductForRFQ | null>(null)

  const openQuote = (m: ITQMicroModel) => setQuote({
    id: m.model,
    name: `ITQ Micro Electric Actuator — ${m.model}`,
    brand: 'Susin',
    category: 'Electric Actuators',
    categoryId: 'electric-actuators',
    subCategory: 'ITQ Micro Series',
    thumbnail: m.image,
    description: `${m.model} compact electric actuator, ${m.torqueNm} Nm, ${m.mounting}. ${m.summary}`,
    keySpecs: [
      { label: 'Model', value: m.model },
      { label: 'Torque', value: `${m.torqueNm} Nm` },
      { label: 'Operating Time', value: m.speed },
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
          ITQ Micro Series Compact Electric Actuators
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT, textTransform: 'none' }}>
          Economic quarter-turn electric actuators for small ball and plug valves and dampers. Three models from 25 to 80 Nm.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
          {SPECS.map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(BRAND_GREEN, 0.08), color: '#2d8a1e', border: `1px solid ${alpha(BRAND_GREEN, 0.3)}`, fontFamily: PRIMARY_FONT }}>
              {s}
            </Box>
          ))}
          <Button href={ITQM_CATALOG} target="_blank" rel="noopener" size="small" startIcon={<DownloadIcon />}
            sx={{ textTransform: 'none', fontWeight: 700, color: '#2d8a1e' }}>
            Catalogue (PDF)
          </Button>
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${ITQM_MODELS.length} MODELS`}
        </Typography>
        <TableContainer sx={{ border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px', bgcolor: 'background.paper' }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ ...headerSx, width: 40 }} />
                <TableCell sx={headerSx}>Model</TableCell>
                <TableCell sx={headerSx}>Torque</TableCell>
                <TableCell sx={headerSx}>Operating Time</TableCell>
                <TableCell sx={headerSx}>Enclosure</TableCell>
                <TableCell sx={headerSx}>Mounting</TableCell>
                <TableCell sx={headerSx}>Weight</TableCell>
                <TableCell sx={headerSx}>Details</TableCell>
                <TableCell sx={headerSx}>Quote</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ITQM_MODELS.map(m => <ITQMRow key={m.model} row={m} onQuote={openQuote} />)}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {quote && <RFQModal open onClose={() => setQuote(null)} product={quote} />}
    </Box>
  )
}
