'use client';

import { useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ProductQuickOrder, PRODUCTS } from '../app/quick-order/product';
import RelatedProductCard from './RelatedProductCard';

interface Props {
  currentSku: string;
  category: string;
  count?: number;
}

export default function RelatedProducts({ currentSku, category, count = 6 }: Props) {
  const related = useMemo(() => {
    const sameCategory = PRODUCTS.filter(
      (p) => p.category === category && p.sku !== currentSku
    );
    return [...sameCategory].sort(() => Math.random() - 0.5).slice(0, count);
  }, [currentSku, category, count]);

  if (related.length === 0) return null;

  return (
    <Box sx={{ mt: 8 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
        <Box>
          <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'text.secondary', mb: 0.25 }}>
            More in this category
          </Typography>
          <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '18px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'text.primary' }}>
            {category}
          </Typography>
        </Box>
        <Button href="/quick-order" sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'primary.main', p: 0, '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}>
          View All →
        </Button>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' }, gap: 1.5 }}>
        {related.map((p) => (
          <RelatedProductCard key={p.sku} product={p} />
        ))}
      </Box>
    </Box>
  );
}