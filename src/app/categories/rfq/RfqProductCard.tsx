'use client';

import { Box, Card, CardContent, Typography, Button, useTheme, alpha } from '@mui/material';
import { useRouter } from 'next/navigation';

export interface RfqProductCardData {
  productId: string;
  name: string;
  manufacturer: string;
  categoryId: string;
  imageUrl: string;
  description: string;
}

export default function RfqProductCard({ product }: { product: RfqProductCardData }) {
  const theme = useTheme();
  const router = useRouter();

  return (
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
        },
      }}
    >
      <Box
  sx={{
    p: 3,
    textAlign: 'center',
    bgcolor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '280px',
    overflow: 'hidden',
  }}
>
  <img
    src={product.imageUrl}
    alt={product.name}
    style={{ maxHeight: '240px', maxWidth: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }}
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
            mb: 2,
            minHeight: '2.4em',
          }}
        >
          {product.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.primary"
          sx={{ flexGrow: 1, mb: 3 }}
        >
          {product.description}
        </Typography>

        <Button
          variant="contained"
          fullWidth
          onClick={() => router.push(`/categories/rfq/${product.categoryId}/${product.productId}`)}
          sx={{
            borderRadius: 0,
            fontWeight: 800,
            py: 1.5,
            fontSize: '1rem',
            boxShadow: 'none',
            '&:hover': {
              bgcolor: 'primary.dark',
              boxShadow: 'none',
            },
          }}
        >
          View & Request Quote
        </Button>
      </CardContent>
    </Card>
  );
}