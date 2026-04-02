'use client';

import { useParams } from 'next/navigation';
import { Container, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid'; // Using Grid2 as requested
import ProductListingCard from '../categories/[categoryId]/ProductListingCard';

// Hardcoded Dummy Data Payload
const DUMMY_PRODUCTS = [
  {
    _id: "72de4d5d4ef79728b980c32a",
    id: "PERIPHERAL_PUMP_TEP_SERIES", 
    name: "TEP Series Peripheral Pump", 
    brand: "Atam Pumps",
    category: "Pumps", 
    categoryId: "pumps",
    subCategory: "Peripheral Vertical/Horizontal",
    // Using the new pump image URL provided
    thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1774524120/08-TEP-Peripheral-pumps-1-259x300_fstbrp.png",
    description: "Compact and powerful peripheral pumps designed for clean water applications, pressure boosting, and industrial liquid transfer where high head and constant flow are required.",
    keySpecs: [
      { label: "Max Head", value: "35 - 60 Meters" },
      { label: "Flow Rate", value: "30 - 50 L/min" },
      { label: "Power Range", value: "0.5 HP - 1.0 HP" },
      { label: "Inlet/Outlet", value: "1\" x 1\" Threaded" }
    ],
    pricing: {
      min: 85.50,
      max: 210.00,
      currency: "GBP"
    },
    variantInfo: {
      count: 12,
      sizeRange: "0.37kW to 0.75kW"
    }
  }
];

export default function CategoryListingPage() {
  const { categoryId } = useParams();

  // For this version, we are ignoring the loading/error states 
  // since the data is hardcoded and instant.
  const products = DUMMY_PRODUCTS;

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 10 }}>
      
      {/* Header - Industrial Dark Style */}
      <Box sx={{ bgcolor: 'text.primary', color: 'white', py: 8, mb: 6 }}>
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
            Product Collection
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
              <ProductListingCard product={item} />
            </Grid>
          ))}
        </Grid>

        {/* Empty State Logic */}
        {products.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography variant="h6" sx={{ opacity: 0.5, fontFamily: '"Barlow Condensed"' }}>
              NO PRODUCTS FOUND IN THIS CATEGORY.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}