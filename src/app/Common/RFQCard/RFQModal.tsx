'use client';

// Site-wide "Request a quote" popup, used on product pages. Shows what is being
// quoted (photo, name, key specs) and a short form. The key specs are written
// into the message so they reach the sales inbox with the enquiry.

import React, { useEffect, useState } from 'react';
import { Dialog, Box, IconButton, CircularProgress } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { useSendEnquiry } from '../../contact/hooks/useEnquiry';
import { useNotificationStore } from '@/src/store/useNotificationStore';
import { ProductForRFQ } from './RequestForQuoteCard';

const INK = '#0E1B12';
const BODY = '#4B5A50';
const MUTED = '#7A877F';
const GREEN = '#61D649';
const GREEN_DARK = '#2E8B1E';
const GREEN_DEEP = '#123D17';
const SOFT = '#EEF9EA';
const BORDER = '#E5EBE6';
const FONT = 'var(--font-geist-sans), Inter, system-ui, sans-serif';

interface RFQModalProps {
  open: boolean;
  onClose: () => void;
  product: ProductForRFQ;
}

const specLines = (p: ProductForRFQ) => (p.keySpecs ?? []).filter((s) => s.value).map((s) => `${s.label}: ${s.value}`);

const draft = (p: ProductForRFQ) => ({
  subject: `Quote request: ${p.name}`,
  message: [`Please quote ${p.name}.`, '', ...specLines(p), '', 'Quantity: ', 'Delivery to: '].join('\n'),
});

export default function RFQModal({ open, onClose, product }: RFQModalProps) {
  const [form, setForm] = useState({ customerName: '', customerEmail: '', ...draft(product) });
  const { showNotification } = useNotificationStore();
  const { mutate, isPending } = useSendEnquiry();

  // Refresh the subject and message each time the popup opens, so the latest
  // choices on the page (size, material, finish) are always included.
  useEffect(() => {
    if (open) setForm((f) => ({ ...f, ...draft(product) }));
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form, {
      onSuccess: () => {
        showNotification({ message: 'Thanks, your quote request has been sent', severity: 'success' });
        setForm({ customerName: '', customerEmail: '', ...draft(product) });
        onClose();
      },
      onError: (err: any) => {
        showNotification({ message: err.response?.data?.message || 'Failed to send enquiry', severity: 'error' });
      },
    });
  };

  const specs = (product.keySpecs ?? []).filter((s) => s.value).slice(0, 6);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{ sx: { border: '2px solid transparent', background: 'linear-gradient(#fff, #fff) padding-box, linear-gradient(120deg, #9BE38A, #A9DCF7, #FFE08A, #C9B9F2) border-box', borderRadius: { xs: '20px', sm: '26px' }, m: { xs: 1.5, sm: 4 }, width: { xs: 'calc(100% - 24px)', sm: '100%' }, boxShadow: '0 30px 80px -20px rgba(14,27,18,0.35)', overflow: 'hidden', fontFamily: FONT, '& *': { fontFamily: `${FONT} !important` } } }}
      slotProps={{ backdrop: { sx: { bgcolor: 'rgba(14,27,18,0.45)', backdropFilter: 'blur(3px)' } } }}
    >
      {/* header */}
      <Box sx={{ position: 'relative', px: { xs: 2.25, sm: 3.5 }, pt: { xs: 2.5, sm: 3 }, pb: 2.25, background: 'linear-gradient(120deg, #EEF9EA 0%, #FFFFFF 60%, #EEF5FF 100%)', borderBottom: `1px solid ${BORDER}` }}>
        <IconButton onClick={onClose} aria-label="Close" sx={{ position: 'absolute', top: 12, right: 12, bgcolor: '#fff', border: `1px solid ${BORDER}`, '&:hover': { bgcolor: '#fff', borderColor: GREEN_DARK } }}>
          <CloseRoundedIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <Box sx={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GREEN_DARK }}>Request a quote</Box>
        <Box component="h2" sx={{ m: 0, mt: 0.5, pr: 5, fontSize: { xs: '1.35rem', sm: '1.6rem' }, fontWeight: 800, letterSpacing: '-0.02em', color: INK, lineHeight: 1.2, textTransform: 'capitalize' }}>
          Price and lead time
        </Box>

        {/* what is being quoted */}
        <Box sx={{ mt: 2, display: 'flex', gap: 1.5, alignItems: 'center', p: 1.25, borderRadius: '16px', bgcolor: '#fff', border: `1px solid ${BORDER}` }}>
          {product.thumbnail && (
            <Box sx={{ flexShrink: 0, width: 56, height: 56, borderRadius: '12px', bgcolor: '#F2F5F8', display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
              <Box component="img" src={product.thumbnail} alt={product.name} sx={{ width: '82%', height: '82%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
            </Box>
          )}
          <Box sx={{ minWidth: 0 }}>
            <Box sx={{ fontWeight: 800, color: INK, fontSize: '0.95rem', lineHeight: 1.35 }}>{product.name}</Box>
            {product.brand && <Box sx={{ fontSize: '0.8rem', color: MUTED, mt: 0.25 }}>{product.brand}{product.subCategory ? ` · ${product.subCategory}` : ''}</Box>}
          </Box>
        </Box>
        {specs.length > 0 && (
          <Box sx={{ mt: 1.25, display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
            {specs.map((s) => (
              <Box key={s.label} component="span" sx={{ px: 1.1, py: 0.4, borderRadius: 999, bgcolor: '#fff', border: `1px solid ${BORDER}`, fontSize: '0.75rem', color: BODY }}>
                <Box component="span" sx={{ color: MUTED }}>{s.label}: </Box>
                <Box component="span" sx={{ fontWeight: 700, color: INK }}>{s.value}</Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>

      {/* form */}
      <Box component="form" onSubmit={submit} sx={{ px: { xs: 2.25, sm: 3.5 }, pt: 2.5, pb: { xs: 2.5, sm: 3 }, display: 'grid', gap: 1.5 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.5 }}>
          <Field label="Name" name="customerName" value={form.customerName} onChange={set} autoComplete="name" placeholder="Your name" />
          <Field label="Email" name="customerEmail" type="email" value={form.customerEmail} onChange={set} autoComplete="email" placeholder="you@company.com" />
        </Box>
        <Field label="Subject" name="subject" value={form.subject} onChange={set} />
        <Field label="Message" name="message" value={form.message} onChange={set} multiline hint="Add the quantity and delivery location for a faster quote." />

        <Box component="button" type="submit" disabled={isPending}
          sx={{ mt: 0.5, position: 'relative', overflow: 'hidden', cursor: isPending ? 'default' : 'pointer', border: 0, borderRadius: '12px', py: 1.6, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 1, background: `linear-gradient(90deg, ${GREEN}, #7FDB6A)`, color: GREEN_DEEP, fontSize: '1rem', fontWeight: 800, transition: 'transform .2s, box-shadow .2s', '&::after': { content: '""', position: 'absolute', top: 0, bottom: 0, width: '40%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)', animation: 'rfqSweep 2.8s ease-in-out infinite' }, '@keyframes rfqSweep': { '0%': { left: '-40%' }, '100%': { left: '120%' } }, '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 12px 28px -8px rgba(97,214,73,0.6)' }, '&:disabled': { opacity: 0.7 } }}>
          {isPending ? <CircularProgress size={22} sx={{ color: GREEN_DEEP }} /> : <>Send quote request <ArrowForwardRoundedIcon sx={{ fontSize: 19 }} /></>}
        </Box>
        <Box sx={{ textAlign: 'center', fontSize: '0.8rem', color: MUTED, lineHeight: 1.5 }}>
          We use the details you submit to respond to your enquiry. See our{' '}
          <Box component="a" href="/privacy" sx={{ color: GREEN_DARK, fontWeight: 700, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Privacy Policy</Box>.
        </Box>
      </Box>
    </Dialog>
  );
}

function Field({ label, name, value, onChange, type = 'text', multiline, hint, autoComplete, placeholder }: {
  label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string; multiline?: boolean; hint?: string; autoComplete?: string; placeholder?: string;
}) {
  const id = `rfq-${name}`;
  const box = {
    width: '100%', boxSizing: 'border-box', border: `1px solid #DCE3DE`, borderRadius: '12px', bgcolor: '#fff', px: 1.75, py: 1.4,
    fontSize: '0.95rem', color: INK, outline: 0, transition: 'border-color .15s, box-shadow .15s, background-color .15s',
    '&::placeholder': { color: '#9AA59E' },
    '&:hover': { borderColor: '#BFE3B4' },
    '&:focus': { borderColor: GREEN_DARK, bgcolor: '#fff', boxShadow: '0 0 0 4px rgba(97,214,73,0.18)' },
  } as const;
  return (
    <Box>
      <Box component="label" htmlFor={id} sx={{ display: 'block', mb: 0.6, fontSize: '0.86rem', fontWeight: 700, color: INK }}>
        {label} <Box component="span" sx={{ color: GREEN_DARK }}>*</Box>
      </Box>
      {multiline ? (
        <Box component="textarea" id={id} name={name} required value={value} onChange={onChange} rows={6} sx={{ ...box, resize: 'vertical', lineHeight: 1.55 }} />
      ) : (
        <Box component="input" id={id} name={name} type={type} required value={value} onChange={onChange} autoComplete={autoComplete} placeholder={placeholder} sx={box} />
      )}
      {hint && <Box sx={{ mt: 0.5, fontSize: '0.76rem', color: MUTED }}>{hint}</Box>}
    </Box>
  );
}
