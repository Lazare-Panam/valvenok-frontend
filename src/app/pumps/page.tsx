'use client';

import { useParams } from 'next/navigation';
import { Container, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid'; 
import RequestForQuoteCard, { ProductForRFQ } from '../Common/RFQCard/RequestForQuoteCard';


// Updated Payload: Focused on RFQ (No pricing object)
const DUMMY_RFQ_PRODUCTS: ProductForRFQ[] = [
  {
  
    id: "PERIPHERAL_PUMP_SERIES", 
    name: "TEP Series Peripheral Pump", 
    brand: "Atam Pumps",
    category: "Pumps", 
    categoryId: "pumps",
    subCategory: "Peripheral Vertical/Horizontal",
    thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1774524120/08-TEP-Peripheral-pumps-1-259x300_fstbrp.png",
    description: "Compact and powerful peripheral pumps designed for clean water applications, pressure boosting, and industrial liquid transfer where high head and constant flow are required.",
    keySpecs: [
      { label: "Max Head", value: "35 - 60 Meters" },
      { label: "Flow Rate", value: "30 - 50 L/min" },
      { label: "Power Range", value: "0.5 HP - 1.0 HP" },
      { label: "Inlet/Outlet", value: "1\" x 1\" Threaded" }
    ],
    variantInfo: {
      count: 12,
      sizeRange: "0.37kW to 0.75kW"
    }
  }
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
            Industrial Pump Solutions
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
            {categoryId?.toString().replace(/-/g, ' ') || "Pump Collection"}
          </Typography>
        </Container>
      </Box>

      {/* Product Grid */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {products.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              {/* Specialized RFQ Card handles the "Contact for Pricing" logic */}
              <RequestForQuoteCard product={item} />
            </Grid>
          ))}
        </Grid>

        {/* Empty State */}
        {products.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography variant="h6" sx={{ opacity: 0.5, fontFamily: '"Barlow Condensed"', fontWeight: 800 }}>
              NO PUMP SPECIFICATIONS FOUND IN THIS CATEGORY.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}