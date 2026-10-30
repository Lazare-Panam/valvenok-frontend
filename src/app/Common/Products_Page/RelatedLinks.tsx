'use client'

import Link from 'next/link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface RelatedLink {
  label: string
  href: string
  // Group-company website: opens in a new tab with an arrow
  external?: boolean
}

// Plain crawlable links to pages that aren't reachable from the product grids
// (landing pages, "view all" listings), so search engines can find them.
export default function RelatedLinks({ title = 'Related', links }: { title?: string; links: RelatedLink[] }) {
  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, md: 5 }, py: 4 }}>
      <Typography fontWeight={800} fontSize="0.8rem" letterSpacing="0.08em" textTransform="uppercase" color="text.secondary" mb={1.5}>
        {title}
      </Typography>
      <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
        {links.map(link => (
          <Box component="li" key={link.href}>
            <Box
              component={link.external ? 'a' : Link}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
              sx={{
                display: 'inline-block',
                px: 2,
                py: 1,
                border: '1px solid',
                borderColor: 'divider',
                color: 'text.primary',
                fontWeight: 600,
                fontSize: '0.9rem',
                textDecoration: 'none',
                '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
              }}
            >
              {link.label}
              {link.external && ' ↗'}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
