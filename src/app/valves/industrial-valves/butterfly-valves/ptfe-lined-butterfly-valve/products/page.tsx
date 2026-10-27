'use client';

import { useState } from 'react';
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Collapse, Chip, Typography, Stack, IconButton, Button,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import RFQModal from '@/src/app/Common/RFQCard/RFQModal';
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard';

const BRAND_GREEN = '#61D649';
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';
const IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/ptfe_lined_butterfly.png';

interface VF75DTO {
  id: string;
  model: string;
  connectionType: string;
  lining: string;
  sizeRange: string;
  pressure: string;
  tempRange: string;
  flangeOptions: string;
  certifications: string[];
  features: string[];
}

const DATA: VF75DTO[] = [
  {
    id: 'vf-750',
    model: 'VF-750',
    connectionType: 'Wafer',
    lining: 'PTFE · PFA',
    sizeRange: 'DN50–DN600 (2"–24")',
    pressure: 'DN50–DN300: 16 bar · DN350–DN450: 10 bar · DN500–DN600: 6 bar',
    tempRange: '-35°C to +200°C',
    flangeOptions: 'ANSI 150LB · PN10 · PN16 · JIS 10K · JIS 16K · AS Table E',
    certifications: ['EN 593', 'API 609', 'BS 5155', 'ISO 5208', 'ISO 5211'],
    features: [
      'Wafer end connection — compact face to face per DIN 558-1 / API 609 / ISO 5752 / BS 5155.',
      '3mm pure virgin PTFE or PFA encapsulated disc — full chemical resistance, no metal-to-media contact.',
      'Curvature machined PTFE/PFA body seat with silicone seat energizer — consistent bubble tight shutoff.',
      'Two-piece epoxy coated body — Ductile Iron, Carbon Steel WCB or Stainless Steel CF8M.',
      'ISO 5211 mounting flange — direct actuator mounting, no adapter bracket required.',
    ],
  },
  {
    id: 'vf-753',
    model: 'VF-753',
    connectionType: 'Lugged',
    lining: 'PTFE · PFA',
    sizeRange: 'DN50–DN600 (2"–24")',
    pressure: 'DN50–DN300: 16 bar · DN350–DN450: 10 bar · DN500–DN600: 6 bar',
    tempRange: '-35°C to +200°C',
    flangeOptions: 'ANSI 150LB · PN10 · PN16 · JIS 10K · JIS 16K · AS Table E',
    certifications: ['EN 593', 'API 609', 'BS 5155', 'ISO 5208', 'ISO 5211'],
    features: [
      'Lugged end connection — suitable for dead-end service and line isolation.',
      '3mm pure virgin PTFE or PFA encapsulated disc — full chemical resistance, no metal-to-media contact.',
      'Curvature machined PTFE/PFA body seat with silicone seat energizer — consistent bubble tight shutoff.',
      'Two-piece epoxy coated body — Ductile Iron, Carbon Steel WCB or Stainless Steel CF8M.',
      'ISO 5211 mounting flange — direct actuator mounting, no adapter bracket required.',
    ],
  },
  {
    id: 'vf-757',
    model: 'VF-757',
    connectionType: 'Flanged',
    lining: 'PTFE · PFA',
    sizeRange: 'DN50–DN600 (2"–24")',
    pressure: 'DN50–DN300: 16 bar · DN350–DN450: 10 bar · DN500–DN600: 6 bar',
    tempRange: '-35°C to +200°C',
    flangeOptions: 'ANSI 150LB · PN10 · PN16 · JIS 10K · JIS 16K · AS Table E',
    certifications: ['EN 593', 'API 609', 'BS 5155', 'ISO 5208', 'ISO 5211'],
    features: [
      'Flanged end connection — high-integrity bolted connection per ASME B16.5 / EN 1092.',
      '3mm pure virgin PTFE or PFA encapsulated disc — full chemical resistance, no metal-to-media contact.',
      'Curvature machined PTFE/PFA body seat with silicone seat energizer — consistent bubble tight shutoff.',
      'Two-piece epoxy coated body — Ductile Iron, Carbon Steel WCB or Stainless Steel CF8M.',
      'ISO 5211 mounting flange — direct actuator mounting, no adapter bracket required.',
    ],
  },
];

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>{value}</Typography>
    </Box>
  );
}

function VF75Row({ row }: { row: VF75DTO }) {
  const [open, setOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null);

  const openQuote = () => setQuoteProduct({
    id: row.id,
    name: `Value Valves ${row.model} PTFE/PFA Lined Centric Butterfly Valve`,
    brand: 'Value Valves',
    category: 'Butterfly Valves',
    categoryId: 'butterfly-valves',
    subCategory: 'PTFE Lined',
    thumbnail: IMAGE,
    description: row.features.join(' '),
    keySpecs: [
      { label: 'Model',       value: row.model },
      { label: 'Connection',  value: row.connectionType },
      { label: 'Lining',      value: row.lining },
      { label: 'Size Range',  value: row.sizeRange },
      { label: 'Pressure',    value: row.pressure },
      { label: 'Temp Range',  value: row.tempRange },
    ],
    variantInfo: { count: 1, sizeRange: row.sizeRange },
  });

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)}
        sx={{ cursor: 'pointer', bgcolor: open ? alpha(BRAND_GREEN, 0.04) : 'inherit',
          '&:hover': { bgcolor: `${alpha(BRAND_GREEN, 0.03)} !important` } }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o); }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT, fontWeight: 700 }}>{row.model}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.connectionType} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: BRAND_GREEN, color: BRAND_GREEN }} />
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.lining} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: alpha(BRAND_GREEN, 0.5), color: 'text.secondary' }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.sizeRange}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.tempRange}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained"
            onClick={e => { e.stopPropagation(); openQuote(); }}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px',
              textTransform: 'none', whiteSpace: 'nowrap', bgcolor: BRAND_GREEN, color: '#fff',
              boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
            Request Quote
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={7} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_GREEN, 0.02), borderLeft: `4px solid ${BRAND_GREEN}`,
                borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 160, height: 160, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: '8px', overflow: 'hidden', bgcolor: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={IMAGE} alt={row.model}
                      sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900}
                      sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
                      SPECIFICATIONS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Connection"    value={row.connectionType} />
                      <Spec label="Lining"        value={row.lining} />
                      <Spec label="Size Range"    value={row.sizeRange} />
                      <Spec label="Pressure"      value={row.pressure} />
                      <Spec label="Temp Range"    value={row.tempRange} />
                      <Spec label="Flange Options" value={row.flangeOptions} />
                    </Stack>
                    <Typography variant="caption" fontWeight={900}
                      sx={{ letterSpacing: 1, display: 'block', mb: 1, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
                      STANDARDS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1} mb={3}>
                      {row.certifications.map((c) => (
                        <Chip key={c} label={c} size="small" variant="outlined"
                          sx={{ fontSize: '0.65rem', fontWeight: 700,
                            borderColor: alpha(BRAND_GREEN, 0.4), color: 'text.secondary' }} />
                      ))}
                    </Stack>
                    <Typography variant="caption" fontWeight={900}
                      sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
                      KEY FEATURES
                    </Typography>
                    <Box component="ul" sx={{ m: 0, pl: 2, mb: 3 }}>
                      {row.features.map((f, i) => (
                        <Box component="li" key={i} sx={{ mb: 1 }}>
                          <Typography variant="body2" color="text.secondary"
                            sx={{ fontFamily: PRIMARY_FONT, lineHeight: 1.6 }}>{f}</Typography>
                        </Box>
                      ))}
                    </Box>
                    <Button variant="contained" onClick={openQuote}
                      sx={{ textTransform: 'none', fontWeight: 700, borderRadius: '6px',
                        bgcolor: BRAND_GREEN, color: '#fff', '&:hover': { bgcolor: '#50c23a' },
                        fontFamily: PRIMARY_FONT }}>
                      Request Quote
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}

      {quoteProduct && (
        <RFQModal open={!!quoteProduct} onClose={() => setQuoteProduct(null)} product={quoteProduct} />
      )}
    </>
  );
}

const headerSx = {
  bgcolor: alpha(BRAND_GREEN, 0.04),
  borderBottom: `2px solid ${BRAND_GREEN}`,
  fontWeight: 700, fontSize: '0.72rem',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
  fontFamily: PRIMARY_FONT,
};

export default function PTFELinedProductsPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Box sx={{ mb: 2 }}>
          <Box component="img"
            src="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/logo.svg"
            alt="Value Valves"
            sx={{ height: 28, objectFit: 'contain' }}
          />
        </Box>
        <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
          VF-75 — PTFE / PFA Lined Centric Butterfly Valves
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 900, fontFamily: PRIMARY_FONT }}>
          Centric butterfly valves with full PTFE or PFA lined disc and body seat. DN50–DN600, up to 16 bar, -35°C to +200°C. Wafer, lugged and flanged. EN 593, API 609 and BS 5155.
        </Typography>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          3 MODELS
        </Typography>
        <Box sx={{ border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px',
          overflow: 'hidden', bgcolor: 'background.paper' }}>
          <TableContainer>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...headerSx, width: 40 }} />
                  <TableCell sx={headerSx}>Model</TableCell>
                  <TableCell sx={headerSx}>Connection</TableCell>
                  <TableCell sx={headerSx}>Lining</TableCell>
                  <TableCell sx={headerSx}>Size Range</TableCell>
                  <TableCell sx={headerSx}>Temp Range</TableCell>
                  <TableCell sx={headerSx}>Quote</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {DATA.map(row => <VF75Row key={row.id} row={row} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}