'use client';

import { useParams } from 'next/navigation';
import { Container, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid'; // Using Grid2 as requested
import ProductListingCard from '../categories/[categoryId]/ProductListingCard';

// Hardcoded Dummy Data Payload
const DUMMY_PRODUCTS = [
  {
    _id: "69ce4d5d4ef79728b980b21b",
    id: "SIGHT_GLASS_001", // Updated ID for Sight Glasses
    name: "Atam Industrial Sight Glass", // Updated name
    brand: "Atam Valves",
    category: "Sight Glasses", // Updated broad category
    categoryId: "sight-glasses",
    subCategory: "Double Window Sight Flow Indicator", // Example subCategory
    // Updated with the new image URL provided
    thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1774966701/shopping-removebg-preview_ccornj.png",
    description: "High-visibility sight flow indicators engineered for safe and reliable inspection of fluid levels and flow across critical pipeline systems. Designed to withstand high pressure and temperature environments.", // Updated description
    keySpecs: [
      { label: "Body Material", value: "Carbon Steel / Stainless Steel" }, // Updated relevant specs
      { label: "Pressure Rating", value: "Class 150 / 300 (PN 16/40)" }, // Updated example specs
      { label: "Glass Type", value: "Toughened Borosilicate" }, // Updated relevant specs
      { label: "End Connections", value: "Flanged / Screwed (NPT/BSPT)" } // Updated relevant specs
    ],
    pricing: {
      min: 120.50, // Updated example pricing
      max: 850.00, // Updated example pricing
      currency: "GBP"
    },
    variantInfo: {
      count: 15, // Updated example variant count
      sizeRange: "1/2\" to 8\"" // Updated relevant size range
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