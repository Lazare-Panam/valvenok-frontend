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
const IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/butterfly-weld.jpg';

interface CryoValveDTO {
  id: string;
  model: string;
  type: string;
  connectionType: string;
  seatType: string;
  sizeRange: string;
  tempRange: string;
  certifications: string[];
  features: string[];
}

const DATA: CryoValveDTO[] = [
  {
    id: 'vf-923al',
    model: 'VF-923AL',
    type: 'Double Eccentric',
    connectionType: 'Lugged',
    seatType: 'Soft Seat (PCTFE) · Metal Seat (SS316 / Inconel 625)',
    sizeRange: 'DN50–DN600 (2"–24")',
    tempRange: '-196°C to +160°C',
    certifications: ['API 609', 'API 607', 'BS 6364', 'SIL2/3', 'TUV PED(H)', 'ATEX', 'LR', 'ABS', 'CR'],
    features: [
      'Double eccentric design — lugged (多耳式) end connection, suitable for dead-end service.',
      'PCTFE soft seat and SS316 / Inconel 625 metal seat options — bi-directional bubble tight shutoff.',
      'Patented floating retainer ring — 100% body-to-retainer sealing, no seat deformation in closed position.',
      'XM-19 splined shaft — no taper pin drilling, superior thermal cycling resistance from -196°C to +160°C.',
      'Extension bonnet keeps gland packing away from cryogenic zone — prevents icing and gland freeze-up.',
    ],
  },
  {
    id: 'vf-925al',
    model: 'VF-925AL',
    type: 'Double Eccentric',
    connectionType: 'Butt Welding',
    seatType: 'Soft Seat (PCTFE) · Metal Seat (SS316 / Inconel 625)',
    sizeRange: 'DN150–DN900 (6"–36")',
    tempRange: '-196°C to +160°C',
    certifications: ['API 609', 'API 607', 'BS 6364', 'SIL2/3', 'TUV PED(H)', 'ATEX', 'LR', 'ABS'],
    features: [
      'Double eccentric design — butt welding end connection per ASME B16.25, eliminates flanged joint leakage risk.',
      'PCTFE soft seat and SS316 / Inconel 625 metal seat options — bi-directional bubble tight shutoff.',
      'Patented floating retainer ring — 100% body-to-retainer sealing, no seat deformation in closed position.',
      'XM-19 splined shaft — no taper pin drilling, superior thermal cycling resistance from -196°C to +160°C.',
      'Extension bonnet keeps gland packing away from cryogenic zone — prevents icing and gland freeze-up.',
    ],
  },
  {
    id: 'vf-926al',
    model: 'VF-926AL',
    type: 'Double Eccentric',
    connectionType: 'Flanged Short Pattern',
    seatType: 'Soft Seat (PCTFE) · Metal Seat (SS316 / Inconel 625)',
    sizeRange: 'DN80–DN600 (3"–24")',
    tempRange: '-196°C to +160°C',
    certifications: ['API 609', 'API 607', 'BS 6364', 'SIL2/3', 'TUV PED(H)', 'ATEX', 'LR', 'ABS', 'CR'],
    features: [
      'Double eccentric design — flanged short pattern end connection per ASME B16.5 / EN 1092.',
      'PCTFE soft seat and SS316 / Inconel 625 metal seat options — bi-directional bubble tight shutoff.',
      'Patented floating retainer ring — 100% body-to-retainer sealing, no seat deformation in closed position.',
      'XM-19 splined shaft — no taper pin drilling, superior thermal cycling resistance from -196°C to +160°C.',
      'Extension bonnet keeps gland packing away from cryogenic zone — prevents icing and gland freeze-up.',
    ],
  },
  {
    id: 'vf-875l',
    model: 'VF-875L',
    type: 'Triple Offset',
    connectionType: 'Butt Welding',
    seatType: 'Metal Seat — Weld Overlay Hard Face',
    sizeRange: 'DN100–DN600 (4"–24")',
    tempRange: '-196°C to +760°C',
    certifications: ['API 609', 'API 607', 'BS 6364', 'SIL2/3', 'TUV PED(H)', 'ATEX', 'TSG'],
    features: [
      'Triple offset design — butt welding end connection per ASME B16.25, no flanged joint leak path.',
      'Weld overlay hard face metal seat — ANSI FCI 70-2 Class V leakage, -196°C to +760°C service.',
      'Graphite soft seal on body reduces seat wear and risk of internal leakage at extreme temperatures.',
      'XM-19 splined shaft and pin-less disc — easy maintenance, no special tooling required.',
      'Dual shaft stop and bottom cover blow-out protection — stainless steel, full cryogenic integrity.',
    ],
  },
  {
    id: 'vf-876l',
    model: 'VF-876L',
    type: 'Triple Offset',
    connectionType: 'Short Flanged',
    seatType: 'Metal Seat — Weld Overlay Hard Face',
    sizeRange: 'DN100–DN600 (4"–24")',
    tempRange: '-196°C to +760°C',
    certifications: ['API 609', 'API 607', 'BS 6364', 'SIL2/3', 'TUV PED(H)', 'ATEX', 'TSG'],
    features: [
      'Triple offset design — short flanged end connection per ASME B16.5 / EN 1092.',
      'Weld overlay hard face metal seat — ANSI FCI 70-2 Class V leakage, -196°C to +760°C service.',
      'Graphite soft seal on body reduces seat wear and risk of internal leakage at extreme temperatures.',
      'XM-19 splined shaft and pin-less disc — easy maintenance, no special tooling required.',
      'Dual shaft stop and bottom cover blow-out protection — stainless steel, full cryogenic integrity.',
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

function CryoRow({ row }: { row: CryoValveDTO }) {
  const [open, setOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null);

  const openQuote = () => setQuoteProduct({
    id: row.id,
    name: `Value Valves ${row.model} Cryogenic Butterfly Valve`,
    brand: 'Value Valves',
    category: 'Butterfly Valves',
    categoryId: 'butterfly-valves',
    subCategory: 'Cryogenic',
    thumbnail: IMAGE,
    description: row.features.join(' '),
    keySpecs: [
      { label: 'Model',       value: row.model },
      { label: 'Type',        value: row.type },
      { label: 'Connection',  value: row.connectionType },
      { label: 'Seat',        value: row.seatType },
      { label: 'Size Range',  value: row.sizeRange },
      { label: 'Temp Range',  value: row.tempRange },
    ],
    variantInfo: { count: 1, sizeRange: row.sizeRange },
  });

  const typeColor = row.type === 'Triple Offset'
    ? { borderColor: '#e57c00', color: '#e57c00' }
    : { borderColor: BRAND_GREEN, color: BRAND_GREEN };

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
          <Chip label={row.type} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, ...typeColor }} />
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.connectionType} size="small" variant="outlined"
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
                      <Spec label="Type"        value={row.type} />
                      <Spec label="Connection"  value={row.connectionType} />
                      <Spec label="Seat"        value={row.seatType} />
                      <Spec label="Size Range"  value={row.sizeRange} />
                      <Spec label="Temp Range"  value={row.tempRange} />
                    </Stack>
                    <Typography variant="caption" fontWeight={900}
                      sx={{ letterSpacing: 1, display: 'block', mb: 1, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
                      CERTIFICATIONS
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

export default function ButtWeldedProductsPage() {
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
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
          Cryogenic Butterfly Valves — Butt Welded & Short Flanged
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 900, fontFamily: PRIMARY_FONT }}>
          Double eccentric and triple offset cryogenic butterfly valves. ANSI 150LB, -196°C to +760°C. Butt welding, lugged and short flanged end connections. API 609 Monogram, API 607 fire safe, SIL2/SIL3, TUV PED(H) and ATEX certified.
        </Typography>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          5 MODELS
        </Typography>
        <Box sx={{ border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px',
          overflow: 'hidden', bgcolor: 'background.paper' }}>
          <TableContainer>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...headerSx, width: 40 }} />
                  <TableCell sx={headerSx}>Model</TableCell>
                  <TableCell sx={headerSx}>Type</TableCell>
                  <TableCell sx={headerSx}>Connection</TableCell>
                  <TableCell sx={headerSx}>Size Range</TableCell>
                  <TableCell sx={headerSx}>Temp Range</TableCell>
                  <TableCell sx={headerSx}>Quote</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {DATA.map(row => <CryoRow key={row.id} row={row} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}