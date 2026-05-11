import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import ProductCard, { Category } from './ProductCard'

interface ProductGridProps {
  categories: Category[]
  intro?: string
}

export default function ProductGrid({ categories, intro }: ProductGridProps) {
  return (
    <Box component="section" sx={{ bgcolor: 'background.default', py: { xs: 4, md: 8 } }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, md: 5 } }}>

        {intro && (
          <Typography variant="body2" color="text.secondary" sx={{
            maxWidth: 760,
            mb: 4.5,
            lineHeight: 1.75,
            borderLeft: '3px solid',
            borderColor: 'primary.main',
            pl: 2,
          }}>
            {intro}
          </Typography>
        )}

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 3,
        }}>
          {categories.map(category => (
            <ProductCard key={category.code} category={category} />
          ))}
        </Box>

      </Box>
    </Box>
  )
}