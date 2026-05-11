import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface ProductHeroProps {
  title: string
  subtitle: string
  description: string
  imageSrc: string
  imageAlt: string
  breadcrumb?: string
}

export default function ProductHero({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  breadcrumb,
}: ProductHeroProps) {
  return (
    <Box component="section" sx={{
      position: 'relative',
      width: '100%',
      minHeight: 420,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Background image */}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image src={imageSrc} alt={imageAlt} fill style={{ objectFit: 'cover' }} priority />
      </Box>

      {/* Dark overlay */}
      <Box sx={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        background: 'linear-gradient(to right, rgba(10,15,30,0.85) 0%, rgba(10,15,30,0.6) 60%, rgba(10,15,30,0.3) 100%)',
      }} />

      {/* Content */}
      <Box sx={{
        position: 'relative',
        zIndex: 2,
        maxWidth: 1200,
        width: '100%',
        mx: 'auto',
        px: { xs: 2.5, md: 5 },
        py: { xs: 6, md: 8 },
      }}>
        {breadcrumb && (
          <Typography sx={{
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'primary.light',
            mb: 2,
          }}>
            {breadcrumb}
          </Typography>
        )}

        <Typography variant="h1" sx={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          color: '#fff',
          mb: 1.5,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
        }}>
          {title}
        </Typography>

        <Typography sx={{ fontSize: '1.1rem', fontWeight: 500, color: 'rgba(255,255,255,0.75)', mb: 2 }}>
          {subtitle}
        </Typography>

        <Typography sx={{
          fontSize: '0.95rem',
          color: 'rgba(255,255,255,0.6)',
          maxWidth: 580,
          lineHeight: 1.7,
        }}>
          {description}
        </Typography>
      </Box>
    </Box>
  )
}