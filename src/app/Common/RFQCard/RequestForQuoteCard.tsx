'use client';

import { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, useTheme, alpha } from '@mui/material';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import RFQModal from './RFQModal';

export interface ProductForRFQ {
  id: string;
  name: string;
  brand: string;
  category: string;
  categoryId: string;
  subCategory?: string;
  thumbnail: string;
  description: string;
  keySpecs: { label: string; value: string }[];
  variantInfo: {
    count: number;
    sizeRange: string;
  };
  pricing?: any;
}

export default function RequestForQuoteCard({ product }: { product: ProductForRFQ }) {
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Card
        elevation={0}
        sx={{
          borderRadius: 0,
          border: '1px solid',
          borderColor: 'divider',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            borderColor: theme.palette.primary.main,
            boxShadow: `0 8px 24px ${alpha(theme.palette.common.black, 0.08)}`,
          }
        }}
      >
        <Box sx={{ p: 3, textAlign: 'center', bgcolor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
          <img
            src={product.thumbnail}
            alt={product.name}
            style={{ maxHeight: '160px', maxWidth: '100%', objectFit: 'contain' }}
          />
        </Box>

        <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              textTransform: 'uppercase',
              lineHeight: 1.2,
              mt: 0.5,
              mb: 2,
              minHeight: '2.4em'
            }}
          >
            {product.name}
          </Typography>

          <Box sx={{ mb: 3 }}>
            {product.keySpecs.slice(0, 2).map((spec, i) => (
              <Typography key={i} variant="caption" sx={{ display: 'block', color: 'text.secondary', fontWeight: 600 }}>
                • {spec.label}: {spec.value}
              </Typography>
            ))}
          </Box>

          <Button
            variant="contained"
            fullWidth
            onClick={() => setModalOpen(true)}
            startIcon={<ContactSupportIcon />}
            sx={{
              borderRadius: 0,
              fontWeight: 800,
              py: 1.5,
              fontSize: '1rem',
              boxShadow: 'none',
              '&:hover': {
                bgcolor: 'primary.dark',
                boxShadow: 'none'
              }
            }}
          >
            Request for Quote/Lead time
          </Button>
        </CardContent>
      </Card>

      <RFQModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        product={product}
      />
    </>
  );
}