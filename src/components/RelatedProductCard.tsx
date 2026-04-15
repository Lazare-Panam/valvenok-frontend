'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import Link from 'next/link';
import { ProductQuickOrder } from '../app/quick-order/product';
interface Props {
  product: ProductQuickOrder;
}

export default function RelatedProductCard({ product }: Props) {
  return (
    <Link href={`/quick-order/${product.sku}`} style={{ textDecoration: 'none' }}>
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          p: 1.5,
          cursor: 'pointer',
          transition: 'all 0.15s',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          '&:hover': {
            borderColor: 'primary.main',
            bgcolor: (t) => alpha(t.palette.primary.main, 0.04),
          },
        }}
      >
        <Box sx={{ aspectRatio: '1/1', mb: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: (t) => alpha(t.palette.text.primary, 0.02), p: 1.5, flexShrink: 0 }}>
          <img src={product.cloudinaryId} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </Box>
        <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'primary.main', mb: 0.5 }}>
          {product.sku}
        </Typography>
        <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '11px', fontWeight: 600, color: 'text.primary', lineHeight: 1.3, mb: 'auto', pb: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {product.name}
        </Typography>
        <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '13px', fontWeight: 800, color: 'text.primary', mt: 1 }}>
          {`£${product.price.toFixed(2)}`}
        </Typography>
      </Box>
    </Link>
  );
}