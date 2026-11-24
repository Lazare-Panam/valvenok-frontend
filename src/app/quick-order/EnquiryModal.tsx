'use client';

// Parts enquiry (24 Nov 2026): replaces Stripe checkout while checkout is off.
// Sends the parts list through the same enquiry route as the Contact form
// (POST /api/User/enquiry), then clears the list and goes to the thank-you page.

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Dialog, IconButton, TextField, CircularProgress } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { T } from '@/src/app/Landing/modern/tokens';
import { useCartStore } from '../cart/hooks/useCartStore';
import { useSendEnquiry } from '../contact/hooks/useEnquiry';
import { useNotificationStore } from '@/src/store/useNotificationStore';

type Line = { id: string | number; partNumber: string; name: string; quantity: number; price: number };

/** `lines` overrides the basket (the account cart lives on the server); `onSent` runs instead of clearing the basket. */
export default function EnquiryModal({ open, onClose, lines: given, onSent }: { open: boolean; onClose: () => void; lines?: Line[]; onSent?: () => void }) {
  const basket = useCartStore();
  const items: Line[] = given ?? basket.items;
  const router = useRouter();
  const { showNotification } = useNotificationStore();
  const { mutate, isPending } = useSendEnquiry();
  const [f, setF] = useState({ name: '', email: '', company: '', phone: '', notes: '' });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement>) => setF({ ...f, [k]: e.target.value });

  const lines = items.map((i) => `- ${i.partNumber} × ${i.quantity}  (${i.name}${i.price ? `, listed £${i.price.toFixed(2)} ea ex VAT` : ''})`);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!items.length) return;
    const extra = [f.company && `Company: ${f.company}`, f.phone && `Phone: ${f.phone}`, f.notes && `Notes: ${f.notes}`].filter(Boolean) as string[];
    const message = ['Parts enquiry from Quick Order', '', ...lines, ...(extra.length ? ['', ...extra] : [])].join('\n');

    mutate(
      {
        customerName: f.name,
        customerEmail: f.email,
        subject: `Parts enquiry: ${items.length} ${items.length === 1 ? 'line' : 'lines'} (${items.map((i) => i.partNumber).slice(0, 3).join(', ')}${items.length > 3 ? '…' : ''})`,
        message,
      },
      {
        onSuccess: () => {
          if (onSent) onSent(); else basket.clearCart();
          onClose();
          router.push('/contact/thank-you');
        },
        onError: (err: unknown) => {
          const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message;
          showNotification({ message: msg || 'Failed to send enquiry. Please email sales@valvenok.com.', severity: 'error' });
        },
      },
    );
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" PaperProps={{ sx: { borderRadius: '20px' } }}>
      <Box component="form" onSubmit={submit} sx={{ p: { xs: 2.5, sm: 3.5 }, fontFamily: T.font }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2 }}>
          <Box>
            <Box component="h2" sx={{ m: 0, fontSize: '1.35rem', fontWeight: 800, color: T.ink }}>Send your enquiry</Box>
            <Box sx={{ mt: 0.5, fontSize: '0.9rem', color: T.body }}>We&apos;ll confirm price, stock and lead time by email, usually within 24 hours.</Box>
          </Box>
          <IconButton aria-label="Close" onClick={onClose}><CloseRoundedIcon /></IconButton>
        </Box>

        <Box sx={{ mt: 2, p: 1.5, borderRadius: '12px', bgcolor: T.surface, border: `1px solid ${T.border}`, maxHeight: 160, overflowY: 'auto' }}>
          {items.map((i) => (
            <Box key={i.id} sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, py: 0.4, fontSize: '0.85rem' }}>
              <Box className="nocap" sx={{ fontFamily: 'ui-monospace, Menlo, monospace', fontWeight: 700, color: T.greenDark, textTransform: 'none !important' }}>{i.partNumber}</Box>
              <Box sx={{ color: T.ink, fontWeight: 700 }}>× {i.quantity}</Box>
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: 2, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.5 }}>
          <TextField label="Your name" required value={f.name} onChange={set('name')} size="small" />
          <TextField label="Email" type="email" required value={f.email} onChange={set('email')} size="small" />
          <TextField label="Company" value={f.company} onChange={set('company')} size="small" />
          <TextField label="Phone" value={f.phone} onChange={set('phone')} size="small" />
          <TextField label="Notes (delivery date, certificates, etc.)" value={f.notes} onChange={set('notes')} size="small" multiline minRows={2} sx={{ gridColumn: { sm: '1 / -1' } }} />
        </Box>

        <Box component="button" type="submit" disabled={isPending || !items.length}
          sx={{ mt: 2.5, width: '100%', height: 50, border: 0, borderRadius: 999, bgcolor: T.green, color: T.greenDeep, font: 'inherit', fontWeight: 700, fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, cursor: 'pointer', '&:hover': { bgcolor: '#55C93E' }, '&:disabled': { opacity: 0.6, cursor: 'default' } }}>
          {isPending ? <CircularProgress size={20} sx={{ color: T.greenDeep }} /> : <>Send enquiry <SendRoundedIcon sx={{ fontSize: 18 }} /></>}
        </Box>
        <Box sx={{ mt: 1.25, fontSize: '0.76rem', color: T.muted, textAlign: 'center' }}>No payment is taken. Prices shown are a guide until we confirm them.</Box>
      </Box>
    </Dialog>
  );
}
