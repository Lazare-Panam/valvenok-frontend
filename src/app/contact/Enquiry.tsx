'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'; // Added for URL params
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  CircularProgress,
  Container
} from '@mui/material';
import Grid from '@mui/material/Grid'; // Using Grid2 per your previous setup
import { EnquiryDto } from '@/src/api/authApi';
import { useSendEnquiry } from './hooks/useEnquiry';
import { useNotificationStore } from '@/src/store/useNotificationStore';

export default function EnquiryForm() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('product_id'); // Grabs ?product_id=XYZ from URL

  const [formData, setFormData] = useState<EnquiryDto>({
    customerName: '',
    customerEmail: '',
    subject: '',
    message: ''
  });

  const { showNotification } = useNotificationStore();
  const { mutate, isPending } = useSendEnquiry();

  // EFFECT: Auto-fill if product ID exists
  useEffect(() => {
    if (productId) {
      setFormData(prev => ({
        ...prev,
        subject: `Inquiry for Product: ${productId}`,
        message: `I am interested in requesting a quote for product: ${productId}. Please provide pricing and availability details.`
      }));
    }
  }, [productId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: () => {
        setFormData({ customerName: '', customerEmail: '', subject: '', message: '' });
        showNotification({
          message: 'Enquiry Sent Successfully',
          severity: 'success',
        });
      },
      onError: (err: any) => {
        showNotification({
          message: err.response?.data?.message || 'Failed to send enquiry',
          severity: 'error',
        });
      }
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        sx={{ maxWidth: 800, mx: 'auto' }}
      >
        <Typography 
          component="h1"
          variant="h3" 
          sx={{ 
            fontWeight: 900, 
            mb: 1, 
            color: 'primary.main', 
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontFamily: '"Barlow Condensed"'
          }}
        >
          {productId ? 'Request a Quote' : 'Contact Us'}
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 6, color: 'text.secondary' }}>
          {productId 
            ? `Our technical team will review your inquiry for ${productId} and respond with a formal quotation.`
            : "Have a question? Send us a message and we'll get back to you within 24 hours."
          }
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Name"
              name="customerName"
              required
              value={formData.customerName}
              onChange={handleChange}
              sx={inputStyles}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Email"
              name="customerEmail"
              type="email"
              required
              value={formData.customerEmail}
              onChange={handleChange}
              sx={inputStyles}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              sx={inputStyles}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={6}
              required
              value={formData.message}
              onChange={handleChange}
              sx={inputStyles}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Button
              type="submit"
              variant="contained"
              disabled={isPending}
              sx={{
                bgcolor: '#1c2e1a', 
                color: '#fff',
                px: 8,
                py: 2,
                borderRadius: 0,
                fontWeight: 900,
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                '&:hover': {
                  bgcolor: '#4a9a3a', 
                }
              }}
            >
              {isPending ? <CircularProgress size={24} color="inherit" /> : 'Send Message'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
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