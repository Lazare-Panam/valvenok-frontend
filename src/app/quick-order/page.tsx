'use client';

import { Box } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { Suspense } from 'react';
import ProductTable from './ProductTable';
import ProductTableWithQuery from './ProductTableWithQuery';
import OrderCart from './OrderCart';
import MobileCartBar from './MobileCartBar';
import { GroupSiteLinks, groupSitesIn } from '@/src/app/Common/GroupVisitLinks';
import { T, textReset } from '@/src/app/Landing/modern/tokens';
import { PRODUCTS } from './product';

const inStock = PRODUCTS.filter((p) => p.stockQuantity > 0).length;

export default function QuickOrderPage() {
  const facts = [
    { icon: <Inventory2OutlinedIcon sx={{ fontSize: 20 }} />, k: `${PRODUCTS.length} parts`, v: `${inStock} in stock now` },
    { icon: <VerifiedOutlinedIcon sx={{ fontSize: 20 }} />, k: 'SS316', v: 'Panam fittings' },
    { icon: <LocalShippingOutlinedIcon sx={{ fontSize: 20 }} />, k: 'Free UK delivery', v: 'On orders over £150' },
  ];

  return (
    <Box sx={{ ...textReset, bgcolor: '#F7FAF7', minHeight: '100vh', pb: { xs: 12, lg: 10 } }}>
      {/* Hero */}
      <Box sx={{ bgcolor: '#fff', borderBottom: `1px solid ${T.border}`, background: 'linear-gradient(180deg, #FFFFFF 0%, #F4FAF2 100%)' }}>
        <Box sx={{ maxWidth: 1400, mx: 'auto', px: { xs: 2, md: 4 }, py: { xs: 3, md: 5.5 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { md: 'flex-end' }, gap: 3 }}>
          <Box sx={{ maxWidth: 680 }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 1.25, py: 0.5, borderRadius: 999, bgcolor: T.greenSoft, color: T.greenDark, fontSize: '0.78rem', fontWeight: 700 }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: T.green }} />
              Panam Fittings · SS316
            </Box>
            <Box component="h1" sx={{ m: 0, mt: 1.5, fontSize: { xs: '2rem', md: '2.7rem' }, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: T.ink }}>
              Quick Order
            </Box>
            <Box component="p" sx={{ m: 0, mt: 1, fontSize: '1rem', lineHeight: 1.6, color: T.body }}>
              Search by part number, add to your basket and check out in minutes. Prices are shown ex VAT, with no minimum order.
            </Box>
            <GroupSiteLinks variant="inline" sites={groupSitesIn('Panam Fittings — SS316')} />
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(3, minmax(0,1fr))', sm: 'repeat(3, auto)' }, gap: { xs: 0.75, sm: 1.25 } }}>
            {facts.map((f) => (
              <Box key={f.k} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' }, gap: { xs: 0.75, sm: 1.25 }, px: { xs: 1.25, sm: 1.75 }, py: 1.25, borderRadius: T.radiusSm, bgcolor: '#fff', border: `1px solid ${T.border}` }}>
                <Box sx={{ width: { xs: 30, sm: 36 }, height: { xs: 30, sm: 36 }, borderRadius: '10px', display: 'grid', placeItems: 'center', bgcolor: T.greenSoft, color: T.greenDark, flexShrink: 0, '& svg': { fontSize: { xs: 17, sm: 20 } } }}>{f.icon}</Box>
                <Box sx={{ minWidth: 0 }}>
                  <Box sx={{ fontSize: { xs: '0.82rem', sm: '0.92rem' }, fontWeight: 800, color: T.ink, lineHeight: 1.2 }}>{f.k}</Box>
                  <Box sx={{ mt: { xs: 0.25, sm: 0 }, fontSize: { xs: '0.72rem', sm: '0.78rem' }, lineHeight: 1.3, color: T.muted }}>{f.v}</Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box sx={{ maxWidth: 1400, mx: 'auto', px: { xs: 2, md: 4 }, pt: { xs: 3, md: 4 }, display: 'flex', gap: 3, alignItems: 'flex-start' }}>
        {/* ?q= (from the homepage search box) pre-fills the search. While prerendering,
            the plain table renders, so the product list is still in the HTML. */}
        <Suspense fallback={<ProductTable />}>
          <ProductTableWithQuery />
        </Suspense>
        <OrderCart />
      </Box>

      <MobileCartBar />
    </Box>
  );
}
