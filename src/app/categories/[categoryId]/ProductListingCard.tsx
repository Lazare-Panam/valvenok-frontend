'use client';

import { Box, Typography, Card, CardContent, Button, alpha, useTheme } from '@mui/material';
import Link from 'next/link';

export default function ProductListingCard({ product }: { product: any }) {
  const theme = useTheme(); // Grabs the #61D649 from your ThemeRegistry

  return (
    <Card 
      elevation={0} 
      sx={{ 
        borderRadius: 0, 
        border: '1px solid',
        borderColor: 'divider', 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          borderColor: theme.palette.primary.main,
          boxShadow: `0 0 0 1px ${theme.palette.primary.main}`,
        }
      }}
    >
      {/* Image Container */}
      <Box sx={{ p: 3, textAlign: 'center', bgcolor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
        <img 
          src={product.thumbnail} 
          alt={product.name} 
          style={{ maxHeight: '160px', maxWidth: '100%', objectFit: 'contain' }} 
        />
      </Box>
      
      <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography 
          variant="caption" 
          sx={{ 
            fontWeight: 900, 
            color: 'primary.main', // Uses the theme primary automatically
            letterSpacing: '0.1em', 
            textTransform: 'uppercase' 
          }}
        >
          {product.brand}
        </Typography>
        
        <Typography 
          variant="h6" 
          sx={{ 
            fontFamily: 'var(--font-display)', 
            fontWeight: 800, 
            textTransform: 'uppercase',
            lineHeight: 1.2,
            mt: 0.5,
            mb: 2,
            minHeight: '2.4em'
          }}
        >
          {product.name}
        </Typography>
        
        {/* Price Range Section - Uses alpha of primary color */}
        <Box sx={{ 
          mb: 3, 
          mt: 'auto', 
          p: 1.5, 
          bgcolor: alpha(theme.palette.primary.main, 0.08), 
          borderLeft: `4px solid ${theme.palette.primary.main}` 
        }}>
          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, display: 'block' }}>
            PRICE RANGE (EX. VAT)
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 900, fontFamily: 'var(--font-display)' }}>
            £{product.pricing.min.toFixed(2)} — £{product.pricing.max.toFixed(2)}
          </Typography>
        </Box>

        <Button 
          variant="contained" 
          fullWidth 
          component={Link} 
          href={`/products/${product.id}`}
          color="primary" // Tells MUI to use your primary.main (#61D649)
          sx={{ 
            borderRadius: 0, 
            fontWeight: 800,
            py: 1.5,
            fontSize: '1rem',
            boxShadow: 'none',
            '&:hover': {
              bgcolor: 'primary.dark',
              boxShadow: 'none'
            }
          }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}