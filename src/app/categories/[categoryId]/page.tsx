'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchProductsByCategory } from '@/src/api/productApi'; // Ensure path is correct
import { Grid, Container, Box, CircularProgress, Typography } from '@mui/material';
import ProductListingCard from './ProductListingCard';

export default function CategoryListingPage() {
  // 1. Pull categoryId from URL params
  const { categoryId } = useParams();
console.log(categoryId)
  // 2. TanStack Query using your specific fetch function
  const { data: products, isLoading, isError } = useQuery({
    queryKey: ['products', categoryId],
    queryFn: () => fetchProductsByCategory(categoryId as string),
    enabled: !!categoryId, // Only fire when the param is ready
  });

  // 3. Simple Loading State
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 20 }}>
        <CircularProgress sx={{ color: '#61D649' }} />
      </Box>
    );
  }

  // 4. Error State
  if (isError) {
    return (
      <Container sx={{ py: 10 }}>
        <Typography variant="h5" color="error" sx={{ fontFamily: '"Barlow Condensed"' }}>
          ERROR LOADING COLLECTION
        </Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 10 }}>
      {/* Header */}
      <Box sx={{ bgcolor: 'text.primary', color: 'white', py: 6, mb: 6 }}>
        <Container maxWidth="lg">
          <Typography 
           component="h1"
            variant="h2" 
            sx={{ 
              fontFamily: '"Barlow Condensed"', 
              fontWeight: 900, 
              textTransform: 'uppercase' 
            }}
          >
            {categoryId?.toString().replace(/-/g, ' ')}
          </Typography>
        </Container>
      </Box>

      {/* Product Grid */}
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {products?.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <ProductListingCard product={item} />
            </Grid>
          ))}
        </Grid>

        {/* Empty State */}
        {products?.length === 0 && (
          <Typography variant="h6" sx={{ textAlign: 'center', mt: 10, opacity: 0.5 }}>
            NO PRODUCTS FOUND IN THIS CATEGORY.
          </Typography>
        )}
      </Container>
    </Box>
  );
}