// app/Common/Breadcrumbs/Breadcrumbs.tsx
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box } from '@mui/material';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { T } from '@/src/app/Landing/modern/tokens';

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
const ACRONYMS = new Set([
  'ag', 'lpg', 'dbb', 'hp', 'jic', 'npt', 'bsp', 'aov', 'ss', 'ss316', 'vsi', 'h2', 'frl',
  // series codes
  'iql', 'itl', 'itm', 'itq', 'itg', 'its', 'mab', 'maw', 'adf', 'hd', 'pds', 'plds', 'mplds', 'sra',
  'esc', 'esnc', 'sdnc', 'sdnu', 'kls', 'ke', 'tg', 'fg', 'pvae32', 'ib', 'hb', 'sb', 'rss', 'wkm',
]);

// Segments whose label isn't just the words in the URL
const DEFAULT_LABELS: Record<string, string> = {
  'hydrogen-cryogenic': 'Hydrogen & High Pressure',
  'dbb-manifolds': 'DBB & Manifolds',
  'fittings-tubing': 'Fittings & Tubing',
  'pumps-seals': 'Pumps & Seals',
  'filters-sight-glass': 'Filters & Sight Glass',
  'quick-coupling-and-hoses': 'Quick Couplings & Hoses',
  'double-block-and-bleed-valves': 'Double Block & Bleed Valves',
  'joscar-registered': 'JOSCAR Registered',
  'quick-order': 'Quick Order',
  news: 'News & Blog',
  login: 'Sign In',
  register: 'Create Account',
  'l-port-vs-t-port-3-way-ball-valve': 'L-Port vs T-Port 3-Way Ball Valves',
  about: 'About Us',
  contact: 'Contact Us',
  '2VM': '2-Valve Manifolds',
  '3VM': '3-Valve Manifolds',
  '5VM': '5-Valve Manifolds',
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
  // On narrow screens the trail scrolls sideways: start at the end so the
  // current page is always in view.
  const scroller = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const el = scroller.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, [pathname]);

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
      component="nav"
      aria-label="Breadcrumb"
      sx={{
        // A light strip of its own under the menu line, softer than the old grey band
        bgcolor: "#FBFCFB",
        borderBottom: `1px solid ${T.border}`,
        fontFamily: T.font,
        '& *': { fontFamily: `${T.font} !important` },
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Box
        ref={scroller}
        sx={{
          width: '100%',
          boxSizing: 'border-box',
          maxWidth: T.maxWidth,
          mx: 'auto',
          px: { xs: 2, md: 4 },
          py: 1.25,
          // One line; scrolls sideways on narrow screens instead of wrapping
          overflowX: 'auto',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        <Box
          component="ol"
          sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', alignItems: 'center', gap: 0.75, whiteSpace: 'nowrap', minWidth: 'max-content' }}
        >
          {crumbs.map((crumb, idx) => {
            const isLast = idx === crumbs.length - 1;
            const isHome = idx === 0;
            return (
              <Box component="li" key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                {idx > 0 && <ChevronRightRoundedIcon aria-hidden sx={{ fontSize: 18, color: '#B5C0B8' }} />}
                {isLast || !crumb.href ? (
                  <Box
                    component="span"
                    aria-current="page"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      px: 1.25,
                      py: 0.4,
                      borderRadius: 999,
                      bgcolor: T.greenSoft,
                      border: '1px solid #CFEBC6',
                      color: T.greenDark,
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      maxWidth: { xs: 220, sm: 420 },
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {crumb.label}
                  </Box>
                ) : (
                  <Box
                    component={Link}
                    href={crumb.href}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.75,
                      color: T.body,
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      textDecoration: 'none',
                      borderRadius: 999,
                      transition: 'color .15s',
                      '&:hover': { color: T.greenDark },
                      '&:hover .home': { bgcolor: T.greenDark, color: '#fff' },
                    }}
                  >
                    {isHome && (
                      <Box
                        component="span"
                        className="home"
                        sx={{ width: 26, height: 26, borderRadius: '50%', bgcolor: '#fff', border: `1px solid ${T.border}`, color: T.greenDark, display: 'grid', placeItems: 'center', transition: 'all .15s' }}
                      >
                        <HomeRoundedIcon sx={{ fontSize: 15 }} />
                      </Box>
                    )}
                    {crumb.label}
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
