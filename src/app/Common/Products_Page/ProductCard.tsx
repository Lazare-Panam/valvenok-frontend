"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'

export interface Category {
  code: string
  title: string
  subtitle: string
  description: string
  specs: string[]
  href: string
  image: string
  applications?: string
}

export default function ProductCard({ category }: { category: Category }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Box
      component={Link}
      href={category.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        textDecoration: 'none',
        color: 'inherit',
        border: '1px solid',
        borderColor: hovered ? 'primary.main' : 'divider',
        bgcolor: 'background.paper',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered
          ? (theme) => `0 6px 24px ${alpha(theme.palette.primary.main, 0.15)}`
          : 'none',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
      }}
    >
      {/* Image */}
      <Box sx={{
        position: 'relative',
        width: '100%',
        height: 180,
        bgcolor: 'white',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}>
        <Image
          src={category.image}
          alt={category.title}
          fill
          style={{ objectFit: 'contain', padding: '16px' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Box>

      {/* Body */}
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, p: 3 }}>

        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
          <Box sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 40,
            height: 40,
            px: 0.75,
            flexShrink: 0,
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
            color: 'primary.dark',
            fontSize: '0.65rem',
            fontWeight: 800,
            letterSpacing: '0.05em',
          }}>
            {category.code}
          </Box>
          <Box>
            <Typography fontWeight={700} fontSize="1rem" lineHeight={1.3} color="text.primary">
              {category.title}
            </Typography>
            <Typography variant="caption" fontWeight={500} color="text.secondary">
              {category.subtitle}
            </Typography>
          </Box>
        </Box>

        {/* Description */}
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, mb: 1.5 }}>
          {category.description}
        </Typography>

        {/* Applications */}
        {category.applications && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, lineHeight: 1.5 }}>
            <Box component="span" fontWeight={700} color="text.primary">Applications: </Box>
            {category.applications}
          </Typography>
        )}

        {/* Spec tags */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2 }}>
          {category.specs.map(spec => (
            <Box key={spec} sx={{
              px: 1,
              py: 0.25,
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
              color: 'primary.dark',
              border: '1px solid',
              borderColor: (theme) => alpha(theme.palette.primary.main, 0.2),
            }}>
              {spec}
            </Box>
          ))}
        </Box>

        {/* Footer */}
        <Box sx={{
          mt: 'auto',
          pt: 2,
          borderTop: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
          <Typography variant="caption" fontWeight={700} sx={{
            color: 'primary.main',
            letterSpacing: hovered ? '0.06em' : '0.02em',
            transition: 'letter-spacing 0.2s ease',
          }}>
            View Range →
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}