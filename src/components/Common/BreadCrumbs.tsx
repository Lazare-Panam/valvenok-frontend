// app/Common/Breadcrumbs/Breadcrumbs.tsx
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Breadcrumbs as MUIBreadcrumbs, Typography, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';

export type Crumb = {
  label: string;
  href?: string; // omit href for the current page (non-clickable)
};

type BreadcrumbsProps = {
  /** Optional manual override. If provided, auto-generation is skipped. */
  items?: Crumb[];
  /** Map URL segments to nicer labels, e.g. { 'ball-valves': 'Ball Valves' } */
  labelMap?: Record<string, string>;
  /** Hide on the homepage. Default: true */
  hideOnHome?: boolean;
};

// Words that must stay fully uppercase (brand/acronym abbreviations).
// e.g. "ag" -> "AG" (Anderson Greenwood). Extend as needed: 'jic', 'nps', 'dn'.
const ACRONYMS = new Set(['ag', 'lpg']);

// Segments whose label isn't just the words in the URL
const DEFAULT_LABELS: Record<string, string> = {
  'hydrogen-cryogenic': 'Hydrogen & Cryogenic',
};

// Turn "ag-fasani-check" into "AG Fasani Check"
const humanize = (segment: string) =>
  decodeURIComponent(segment)
    .replace(/[-_]/g, ' ')
    .split(' ')
    .map((word) =>
      ACRONYMS.has(word.toLowerCase())
        ? word.toUpperCase()
        : word.replace(/\b\w/, (c) => c.toUpperCase()),
    )
    .join(' ');

export default function Breadcrumbs({
  items,
  labelMap = {},
  hideOnHome = true,
}: BreadcrumbsProps) {
  const pathname = usePathname();

  if (hideOnHome && pathname === '/') return null;

  // Build crumbs from URL if no manual items passed in
  const crumbs: Crumb[] =
    items ??
    (() => {
      const segments = pathname.split('/').filter(Boolean);
      const generated: Crumb[] = [{ label: 'Home', href: '/' }];

      segments.forEach((segment, i) => {
        const href = '/' + segments.slice(0, i + 1).join('/');
        const isLast = i === segments.length - 1;
        generated.push({
          label: labelMap[segment] ?? DEFAULT_LABELS[segment] ?? humanize(segment),
          href: isLast ? undefined : href,
        });
      });

      return generated;
    })();

  const siteUrl = 'https://www.valvenok.com';
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.label,
      ...(crumb.href ? { item: `${siteUrl}${crumb.href === '/' ? '' : crumb.href}` } : {}),
    })),
  };

  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: 1.5,
        bgcolor: 'background.default',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MUIBreadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          '& .MuiBreadcrumbs-separator': {
            color: 'text.secondary',
          },
        }}
      >
        {crumbs.map((crumb, idx) => {
          const isLast = idx === crumbs.length - 1;
          const isHome = idx === 0;

          if (isLast || !crumb.href) {
            return (
              <Typography
                key={idx}
                color="text.primary"
                sx={{
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                {isHome && <HomeIcon fontSize="small" />}
                {crumb.label}
              </Typography>
            );
          }

          return (
            <Link
              key={idx}
              href={crumb.href}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                component="span"
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  '&:hover': {
                    color: 'primary.main',
                    textDecoration: 'underline',
                  },
                }}
              >
                {isHome && <HomeIcon fontSize="small" />}
                {crumb.label}
              </Typography>
            </Link>
          );
        })}
      </MUIBreadcrumbs>
    </Box>
  );
}