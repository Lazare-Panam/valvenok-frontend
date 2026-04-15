'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import { alpha } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import { ProductQuickOrder } from '../product';
import RelatedProducts from '@/src/components/RelatedProducts';
import AddToCartSection from './AddToCartSection';

interface Props {
  product: ProductQuickOrder;
}

export default function ProductPageClient({ product }: Props) {
  const router = useRouter();

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>

      {/* ── HEADER ── */}
 
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>

        {/* ── MAIN LAYOUT ── */}
        <Box sx={{ display: 'flex', gap: { xs: 4, md: 6 }, flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start' }}>

          {/* LEFT — Image */}
          <Box sx={{ width: { xs: '100%', md: 360 }, flexShrink: 0, border: '1px solid', borderColor: 'divider', aspectRatio: '1 / 1', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: (t) => alpha(t.palette.text.primary, 0.02), p: 4 }}>
            {product.cloudinaryId ? (
              <img src={product.cloudinaryId} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            ) : (
              <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '12px', color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.08em' }}>No Image</Typography>
            )}
          </Box>

          {/* RIGHT — Details */}
          <Box sx={{ flex: 1, minWidth: 0 }}>

            {/* SKU + Price */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 3, flexWrap: 'wrap', gap: 2 }}>
              <Box>
                <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'text.secondary', mb: 0.5 }}>
                  Part Number
                </Typography>
                <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '22px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'primary.main' }}>
                  {product.sku}
                </Typography>
              </Box>
              <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'text.secondary', mb: 0.5 }}>
                  Unit Price (ex VAT)
                </Typography>
                <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '28px', fontWeight: 900, color: 'text.primary' }}>
                  {`£${product.price.toFixed(2)}`}
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ mb: 3 }} />

            {/* Specs */}
            {product.specs && Object.keys(product.specs).length > 0 && (
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'text.secondary', mb: 1.5 }}>
                  Specifications
                </Typography>
                <Box sx={{ border: '1px solid', borderColor: 'divider', overflow: 'hidden' }}>
                  {Object.entries(product.specs).map(([key, value], i, arr) => (
                    <Box key={key} sx={{ display: 'grid', gridTemplateColumns: '160px 1fr', borderBottom: i < arr.length - 1 ? '1px solid' : 'none', borderColor: 'divider', bgcolor: i % 2 === 0 ? 'background.default' : (t) => alpha(t.palette.text.primary, 0.02) }}>
                      <Box sx={{ px: 2, py: 1.25, borderRight: '1px solid', borderColor: 'divider' }}>
                        <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'text.secondary' }}>
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </Typography>
                      </Box>
                      <Box sx={{ px: 2, py: 1.25 }}>
                        <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '13px', fontWeight: 600, color: 'text.primary' }}>
                          {value}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            <Divider sx={{ mb: 3 }} />

            {/* Add to Cart */}
            <AddToCartSection product={product} />

            <Divider sx={{ mt: 3, mb: 3 }} />

            <Button
              variant="outlined"
              href="/quick-order"
              sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 800, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', px: 3, py: 1.25, boxShadow: 'none', borderRadius: '3px', borderColor: 'divider', color: 'text.secondary', '&:hover': { boxShadow: 'none', borderColor: 'primary.main', color: 'primary.main' } }}
            >
              ← Back to Quick Order
            </Button>
          </Box>
        </Box>

        {/* ── RELATED ── */}
        <RelatedProducts currentSku={product.sku} category={product.category} count={6} />

      </Container>
    </Box>
  );
}

