'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchRfqProductDetail } from '@/src/api/productApi';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  CircularProgress,
  Divider,
} from '@mui/material';

export default function RfqProductDetailPage() {
  const { productId } = useParams();

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ['rfq-product', productId],
    queryFn: () => fetchRfqProductDetail(productId as string),
    enabled: !!productId,
  });

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 20 }}>
        <CircularProgress sx={{ color: '#61D649' }} />
      </Box>
    );
  }

  if (isError || !product) {
    return (
      <Container sx={{ py: 10 }}>
        <Typography variant="h5" color="error" sx={{ fontFamily: '"Barlow Condensed"' }}>
          ERROR LOADING PRODUCT
        </Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 10 }}>
      <Container maxWidth="lg" sx={{ pt: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          sx={{
            fontFamily: '"Barlow Condensed"',
            fontWeight: 900,
            textTransform: 'uppercase',
            mb: 6,
          }}
        >
          {product.name}
        </Typography>

        <Grid container spacing={6}>
          {/* Left — Image */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: 'sticky',
                top: 24,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '420px',
                bgcolor: 'white',
              }}
            >
              <img
                src={product.imageUrl ?? product.image}
                alt={product.name}
                style={{
                  maxHeight: '380px',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  mixBlendMode: 'multiply',
                }}
              />
            </Box>
          </Grid>

          {/* Right — Specs + CTA */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="body1" color="text.main" sx={{ mb: 4 }}>
              {product.description}
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Box sx={{ mb: 4 }}>
              {product.specifications?.map((spec: { key: string; label: string; value: string }) => (
                <Box
                  key={spec.key}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    py: 1.5,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}
                  >
                    {spec.label}
                  </Typography>
                  <Typography variant="body2" color="text.main">
                    {spec.value}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{
                borderRadius: 0,
                fontWeight: 800,
                py: 2,
                fontSize: '1.1rem',
                boxShadow: 'none',
                '&:hover': { bgcolor: 'primary.dark', boxShadow: 'none' },
              }}
            >
              Request a Quote
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}