'use client';

import { useState } from 'react';
import { Box } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { T } from '@/src/app/Landing/modern/tokens';
import { useCartStore } from '../cart/hooks/useCartStore';
import EnquiryModal from './EnquiryModal';

export default function MobileCartBar() {
  const { items } = useCartStore();
  const [open, setOpen] = useState(false);
  if (items.length === 0) return null;

  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <Box sx={{ display: { xs: 'flex', lg: 'none' }, position: 'fixed', left: 12, right: 12, bottom: 12, zIndex: 100, alignItems: 'center', justifyContent: 'space-between', gap: 2, pl: 2.25, pr: 1, py: 1, borderRadius: '18px', bgcolor: T.greenDeep, color: '#fff', boxShadow: '0 12px 32px rgba(14,27,18,0.28)' }}>
      <Box>
        <Box sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)' }}>{`${items.length} ${items.length === 1 ? 'line' : 'lines'} · ${items.reduce((s, i) => s + i.quantity, 0)} pcs`}</Box>
        <Box sx={{ fontSize: '1.05rem', fontWeight: 800 }}>£{total.toFixed(2)} <Box component="span" sx={{ fontSize: '0.75rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>ex VAT guide</Box></Box>
      </Box>
      <Box component="button" type="button" onClick={() => setOpen(true)}
        sx={{ border: 0, font: 'inherit', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 0.75, px: 2.25, height: 44, borderRadius: '14px', bgcolor: T.green, color: T.greenDeep, fontWeight: 700, fontSize: '0.92rem' }}>
        Send enquiry <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
      </Box>
      <EnquiryModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}
