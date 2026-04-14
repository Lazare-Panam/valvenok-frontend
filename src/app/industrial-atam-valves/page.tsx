'use client';

import { useParams } from 'next/navigation';
import { Container, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid'; // Using Grid2 for the 'size' prop
import RequestForQuoteCard, { ProductForRFQ } from '../Common/RFQCard/RequestForQuoteCard';
// Updated Payload using the RFQ Interface (No pricing)
const DUMMY_RFQ_PRODUCTS: ProductForRFQ[] = [

];

export default function CategoryListingPage() {
  const { categoryId } = useParams();
  const products = DUMMY_RFQ_PRODUCTS;

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 10 }}>
      
      {/* Header - Industrial Dark Style */}
      <Box sx={{ bgcolor: 'text.primary', color: 'white', py: 8, mb: 6, borderBottom: '4px solid', borderColor: 'primary.main' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="overline" 
            sx={{ 
                fontFamily: '"Barlow Condensed"', 
                color: 'primary.main', 
                fontWeight: 800, 
                letterSpacing: 2 
            }}
          >
            Commercial Inquiry Portfolio
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              fontFamily: '"Barlow Condensed"', 
              fontWeight: 900, 
              textTransform: 'uppercase',
              lineHeight: 1
            }}
          >
            {categoryId?.toString().replace(/-/g, ' ') || "Collection"}
          </Typography>
        </Container>
      </Box>

      {/* Product Grid */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {products.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              {/* Swapped to the Specialized RFQ Card */}
              <RequestForQuoteCard product={item} />
            </Grid>
          ))}
        </Grid>

        {/* Empty State Logic */}
        {products.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography variant="h6" sx={{ opacity: 0.5, fontFamily: '"Barlow Condensed"', fontWeight: 800 }}>
              NO COMMERCIAL SPECIFICATIONS FOUND IN THIS CATEGORY.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}