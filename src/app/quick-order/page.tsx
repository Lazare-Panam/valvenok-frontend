'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ProductTable from './ProductTable';
import OrderCart from './OrderCart';
import MobileCartBar from './MobileCartBar';
import { GroupSiteLinks, groupSitesIn } from '@/src/app/Common/GroupVisitLinks';

export default function QuickOrderPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Box sx={{ bgcolor: 'text.primary', py: { xs: 5, md: 6 }, borderBottom: '3px solid', borderColor: 'primary.main' }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'primary.main', mb: 1 }}>
            Panam Fittings — SS316
          </Typography>
          <Typography component="h1" sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 900, fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.0, textTransform: 'uppercase', color: '#ffffff' }}>
            Quick Order
          </Typography>
          <GroupSiteLinks variant="hero" sites={groupSitesIn("Panam Fittings — SS316")} />
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
          <ProductTable />
          <OrderCart />
        </Box>
      </Container>

      <MobileCartBar />
    </Box>
  );
}