// app/Common/Breadcrumbs/Breadcrumbs.tsx
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box } from '@mui/material';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { T } from '@/src/app/Landing/modern/tokens';
import { NAV_GROUPS, type NavItem } from '@/src/app/Common/Navbar/Navbardata';

// Breadcrumbs follow the menu, not the URL folders: each page gets the trail a
// buyer clicked through (tab › section › type › …). Pages deeper than the menu
// add their remaining URL segments on the end.
type Step = { label: string; href: string };
const clean = (href?: string) => (href ? href.split('?')[0].split('#')[0].replace(/\/$/, '') : '');
const MENU_TRAILS: Map<string, Step[]> = (() => {
  const map = new Map<string, Step[]>();
  const add = (href: string | undefined, trail: Step[]) => {
    const h = clean(href);
    if (!h || h.startsWith('http') || map.has(h)) return;
    // drop repeats where a level shares its parent's page (e.g. tab and column both /valves)
    map.set(h, trail.filter((st, i) => i === 0 || clean(st.href) !== clean(trail[i - 1].href)));
  };
  const walk = (items: NavItem[], parent: Step[]) =>
    items.forEach((it) => {
      if (/^view all/i.test(it.label) || it.brand) return;
      // "SRA Series — Spring Return Rack & Pinion" -> "SRA Series"
      const step = { label: it.label.split(' — ')[0], href: clean(it.href) };
      add(it.href, [...parent, step]);
      if (it.children) walk(it.children, [...parent, step]);
    });
  NAV_GROUPS.forEach((g) => {
    const top = { label: g.label, href: clean(g.href) };
    add(g.href, [top]);
    g.columns.forEach((c) => {
      const col = { label: c.header, href: clean(c.href) };
      add(c.href, [top, col]);
      walk(c.items, [top, col]);
    });
  });
  return map;
})();

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

      // Longest part of the path that is in the menu
      for (let n = segments.length; n > 0; n--) {
        const trail = MENU_TRAILS.get('/' + segments.slice(0, n).join('/'));
        if (!trail) continue;
        trail.forEach((st) => generated.push({ label: st.label, href: st.href }));
        segments.slice(n).forEach((segment, i) => {
          const href = '/' + segments.slice(0, n + i + 1).join('/');
          generated.push({ label: labelMap[segment] ?? DEFAULT_LABELS[segment] ?? humanize(segment), href });
        });
        generated[generated.length - 1] = { label: generated[generated.length - 1].label };
        return generated;
      }

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
