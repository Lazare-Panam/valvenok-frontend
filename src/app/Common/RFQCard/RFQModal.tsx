'use client';

import React, { useState } from 'react';
import {
  Dialog, DialogContent, DialogTitle,
  Box, TextField, Button, Typography,
  CircularProgress, IconButton
} from '@mui/material';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import { useSendEnquiry } from '../../contact/hooks/useEnquiry';
import { useNotificationStore } from '@/src/store/useNotificationStore';
import { ProductForRFQ } from './RequestForQuoteCard';

interface RFQModalProps {
  open: boolean;
  onClose: () => void;
  product: ProductForRFQ;
}

export default function RFQModal({ open, onClose, product }: RFQModalProps) {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    subject: `Inquiry for Product: ${product.name}`,
    message: `I am interested in requesting a quote for ${product.name} (ID: ${product.id}). Please provide pricing and availability details.`
  });

  const { showNotification } = useNotificationStore();
  const { mutate, isPending } = useSendEnquiry();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: () => {
        setFormData({ customerName: '', customerEmail: '', subject: '', message: '' });
        showNotification({ message: 'Enquiry Sent Successfully', severity: 'success' });
        onClose();
      },
      onError: (err: any) => {
        showNotification({
          message: err.response?.data?.message || 'Failed to send enquiry',
          severity: 'error'
        });
      }
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth PaperProps={{ sx: { borderRadius: 0 } }}>
      <DialogTitle sx={{ pb: 0 }}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', color: 'primary.main', fontFamily: '"Barlow Condensed"' }}>
              Request a Quote/Lead Time
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
              {product.name}
            </Typography>
          </Box>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ pt: 3 }}>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth label="Name" name="customerName" required value={formData.customerName} onChange={handleChange} sx={inputStyles} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth label="Email" name="customerEmail" type="email" required value={formData.customerEmail} onChange={handleChange} sx={inputStyles} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField fullWidth label="Subject" name="subject" required value={formData.subject} onChange={handleChange} sx={inputStyles} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField fullWidth label="Message" name="message" multiline rows={5} required value={formData.message} onChange={handleChange} sx={inputStyles} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isPending}
                sx={{
                  bgcolor: '#1c2e1a',
                  color: '#fff',
                  py: 1.5,
                  borderRadius: 0,
                  fontWeight: 900,
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: 'none',
                  '&:hover': { bgcolor: '#4a9a3a', boxShadow: 'none' }
                }}
              >
                {isPending ? <CircularProgress size={24} color="inherit" /> : 'Send Enquiry'}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

const inputStyles = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 0,
    backgroundColor: '#fff',
    '& fieldset': { borderColor: '#e0e0e0' },
    '&:hover fieldset': { borderColor: '#61D649' },
    '&.Mui-focused fieldset': { borderColor: '#1c2e1a', borderWidth: '1px' },
  },
  '& .MuiInputLabel-root.Mui-focused': { color: '#1c2e1a' }
};