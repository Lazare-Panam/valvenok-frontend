'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Box, Drawer } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import SwapVertRoundedIcon from '@mui/icons-material/SwapVertRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { T, textReset } from '@/src/app/Landing/modern/tokens';
import { PRODUCTS, CATEGORIES } from './product';
import { useCartStore } from '../cart/hooks/useCartStore';

type P = (typeof PRODUCTS)[number];
const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace';
const COUNTS: Record<string, number> = PRODUCTS.reduce((a, p) => ({ ...a, [p.category]: (a[p.category] ?? 0) + 1 }), { All: PRODUCTS.length } as Record<string, number>);

// The 29 part types grouped into a few families, so the filter is one row instead of five.
const FAMILY_DEFS: { name: string; cats: string[] }[] = [
  { name: 'Connectors', cats: ['Male Connector', 'Female Connector', 'Adapter', 'Swivel Connector'] },
  { name: 'Elbows & Tees', cats: ['Male Elbow', 'Union Elbow', 'Street Elbow', 'Union Tee', 'Female Tee', 'Male Branch Tee'] },
  { name: 'Unions', cats: ['Union', 'Bulkhead Union'] },
  { name: 'Nipples & Couplings', cats: ['Hex Nipple', 'Close Nipple', 'Hex Reducing Nipple', 'Hex Coupling', 'Reducing Bushing'] },
  { name: 'Plugs & Caps', cats: ['Hex Plug', 'Tube Cap', 'Tube Plug'] },
  { name: 'Ferrules & Nuts', cats: ['Front Ferrule', 'Back Ferrule', 'Nut'] },
  { name: 'Valves', cats: ['Ball Valve', 'Check Valve', 'Needle Valve'] },
];
// Any new category not listed above still shows up, under "Other".
const listed = new Set(FAMILY_DEFS.flatMap((f) => f.cats));
const unlisted = CATEGORIES.filter((c) => c !== 'All' && !listed.has(c));
const FAMILIES = [...FAMILY_DEFS, ...(unlisted.length ? [{ name: 'Other', cats: unlisted }] : [])]
  .map((f) => ({ ...f, cats: f.cats.filter((c) => COUNTS[c]) }))
  .filter((f) => f.cats.length)
  .map((f) => ({ ...f, count: f.cats.reduce((n, c) => n + COUNTS[c], 0) }));
const FAMILY_OF: Record<string, string> = Object.fromEntries(FAMILIES.flatMap((f) => f.cats.map((c) => [c, f.name])));

// Price bands for the sidebar (ex VAT).
const PRICE_BANDS = [
  { key: 'u10', label: 'Under £10', min: 0, max: 10 },
  { key: '10-25', label: '£10 – £25', min: 10, max: 25 },
  { key: '25-50', label: '£25 – £50', min: 25, max: 50 },
  { key: 'o50', label: 'Over £50', min: 50, max: Infinity },
] as const;
type BandKey = (typeof PRICE_BANDS)[number]['key'];
const inBand = (p: P, k: BandKey) => { const b = PRICE_BANDS.find((x) => x.key === k)!; return p.price >= b.min && p.price < b.max; };

const SORTS = [
  { key: 'part', label: 'Part number' },
  { key: 'low', label: 'Price: low to high' },
  { key: 'high', label: 'Price: high to low' },
] as const;

const PAGE_SIZE = 20;

// Page buttons to show: all of them when there are few, otherwise first, last and the pages around the current one.
function pageList(current: number, total: number): (number | '…')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const mid = [current - 1, current, current + 1].filter((n) => n > 1 && n < total);
  const out: (number | '…')[] = [1];
  if (mid[0] > 2) out.push('…');
  out.push(...mid);
  if (mid[mid.length - 1] < total - 1) out.push('…');
  out.push(total);
  return out;
}

function stockOf(p: P) {
  if (p.stockQuantity <= 0) return { label: 'Out of stock', color: '#C62828', dot: '#E53935' };
  if (p.stockQuantity <= 10) return { label: `Low stock · ${p.stockQuantity}`, color: '#A86A00', dot: '#F2A900' };
  return { label: `In stock · ${p.stockQuantity}`, color: T.greenDark, dot: T.green };
}

export default function ProductTable({ initialSearch = "" }: { initialSearch?: string }) {
  const [search, setSearch] = useState(initialSearch);
  const [fam, setFam] = useState('All');
  const [cat, setCat] = useState('All');
  const [bands, setBands] = useState<BandKey[]>([]);
  const [sheet, setSheet] = useState(false); // phone/tablet filter sheet
  const [openFam, setOpenFam] = useState<string | null>(null); // which family's types are shown in the sidebar
  const [sort, setSort] = useState<(typeof SORTS)[number]['key']>('part');
  const [page, setPage] = useState(1);
  const listTop = useRef<HTMLDivElement>(null);
  const { items, addItem, updateQuantity, removeItem } = useCartStore();

  // Search narrows everything; the sidebar counts show what each choice would give.
  const searched = useMemo(() => {
    const q = search.trim().toLowerCase();
    return PRODUCTS.filter((p) => !q || p.sku.toLowerCase().includes(q) || p.name.toLowerCase().includes(q));
  }, [search]);
  const byBand = (p: P) => !bands.length || bands.some((k) => inBand(p, k));
  const byCat = (p: P) => (fam === 'All' || FAMILY_OF[p.category] === fam) && (cat === 'All' || p.category === cat);
  const catCount = (test: (p: P) => boolean) => searched.filter((p) => byBand(p) && test(p)).length;
  const bandCount = (k: BandKey) => searched.filter((p) => byCat(p) && inBand(p, k)).length;

  const filtered = useMemo(() => {
    const list = searched.filter((p) => byCat(p) && byBand(p));
    if (sort === 'low') return [...list].sort((a, b) => a.price - b.price);
    if (sort === 'high') return [...list].sort((a, b) => b.price - a.price);
    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searched, fam, cat, bands, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pageCount);
  const first = (current - 1) * PAGE_SIZE;
  const paged = filtered.slice(first, first + PAGE_SIZE);

  // Any change to search, category or sort starts again from page 1.
  const changeSearch = (v: string) => { setSearch(v); setPage(1); };
  const changeCat = (c: string) => { setCat(c); setPage(1); };
  const changeFam = (f: string) => { setFam(f); setCat('All'); setOpenFam(f === 'All' ? null : f); setPage(1); };
  // Sidebar: first click picks the family and opens it; clicking it again just folds it away (the filter stays).
  const clickFam = (f: string) => (fam === f && openFam === f ? setOpenFam(null) : fam === f ? setOpenFam(f) : changeFam(f));
  const changeSort = (s: typeof sort) => { setSort(s); setPage(1); };
  const toggleBand = (k: BandKey) => { setBands((b) => (b.includes(k) ? b.filter((x) => x !== k) : [...b, k])); setPage(1); };
  const clearAll = () => { setFam('All'); setCat('All'); setOpenFam(null); setBands([]); setSearch(''); setPage(1); };
  const active = [
    ...(fam !== 'All' ? [{ label: cat !== 'All' ? cat : fam, clear: () => (cat !== 'All' ? changeCat('All') : changeFam('All')) }] : []),
    ...bands.map((k) => ({ label: PRICE_BANDS.find((b) => b.key === k)!.label, clear: () => toggleBand(k) })),
  ];

  const goTo = (n: number) => {
    setPage(n);
    const el = listTop.current;
    if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const add = (p: P) =>
    addItem({ id: p.sku, name: p.name, description: p.category, partNumber: p.sku, price: p.price, quantity: 1, cloudinaryId: p.cloudinaryId });

  // Same filter list in the desktop sidebar and the phone/tablet filter sheet.
  const filterSections = (
    <>
    <Box sx={{ px: 1.25, pt: 1.75, pb: 1 }}>
      <Box sx={sideHead}>Category</Box>
      <SideOption on={fam === 'All'} label="All parts" count={catCount(() => true)} onClick={() => changeFam('All')} />
      {FAMILIES.map((f) => {
        const picked = fam === f.name;
        const open = openFam === f.name;
        return (
          <Box key={f.name}>
            <SideOption on={picked && cat === 'All'} partial={picked && cat !== 'All'} label={f.name} count={catCount((p) => FAMILY_OF[p.category] === f.name)} onClick={() => clickFam(f.name)} chevron={f.cats.length > 1 ? (open ? 'up' : 'down') : undefined} />
            {open && f.cats.length > 1 && (
              <Box sx={{ ml: 2.25, pl: 1, borderLeft: `2px solid ${T.greenSoft}`, mb: 0.5 }}>
                {f.cats.map((c) => (
                  <SideOption key={c} small on={cat === c} label={c} count={catCount((p) => p.category === c)} onClick={() => changeCat(cat === c ? 'All' : c)} />
                ))}
              </Box>
            )}
          </Box>
        );
      })}
    </Box>

    <Box sx={{ px: 1.25, pt: 1.5, pb: 1.75, borderTop: `1px solid ${T.border}` }}>
      <Box sx={sideHead}>Price <Box component="span" sx={{ fontWeight: 600, letterSpacing: 0, textTransform: 'none !important' }}>(ex VAT)</Box></Box>
      {PRICE_BANDS.map((b) => (
        <SideOption key={b.key} box on={bands.includes(b.key)} label={b.label} count={bandCount(b.key)} onClick={() => toggleBand(b.key)} />
      ))}
    </Box>
    </>
  );

  return (
    <Box sx={{ flex: 1, minWidth: 0, display: 'flex', gap: 3, alignItems: 'flex-start' }}>
      {/* Left filter sidebar (desktop) */}
      <Box component="aside" aria-label="Filters"
        sx={{ display: { xs: 'none', lg: 'block' }, width: 250, flexShrink: 0, position: 'sticky', top: 140, maxHeight: 'calc(100vh - 160px)', overflowY: 'auto', borderRadius: '20px', bgcolor: '#fff', border: `1px solid ${T.border}`, boxShadow: T.shadow, ...noBar }}>
        <Box sx={{ px: 2.25, py: 1.75, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${T.border}` }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '1rem', fontWeight: 800, color: T.ink }}>
            <Box sx={{ width: 30, height: 30, borderRadius: '9px', display: 'grid', placeItems: 'center', bgcolor: T.greenSoft, color: T.greenDark }}><TuneRoundedIcon sx={{ fontSize: 18 }} /></Box>
            Filters
          </Box>
          {active.length > 0 && (
            <Box component="button" type="button" onClick={clearAll} sx={{ border: 0, bgcolor: 'transparent', font: 'inherit', fontSize: '0.8rem', fontWeight: 700, color: T.greenDark, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>Clear all</Box>
          )}
        </Box>

        {filterSections}
      </Box>

      <Box sx={{ flex: 1, minWidth: 0 }}>
      {/* Toolbar */}
      <Box sx={{ p: { xs: 1.5, md: 2 }, borderRadius: '20px', bgcolor: '#fff', border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
        <Box sx={{ display: 'flex', gap: 1, flexDirection: { xs: 'column', sm: 'row' } }}>
          <Box sx={{ flex: { sm: 1 }, flexShrink: 0, display: 'flex', alignItems: 'center', gap: 1, px: 1.75, height: 48, borderRadius: '14px', border: `1.5px solid ${T.border}`, bgcolor: T.surface, '&:focus-within': { borderColor: T.greenDark, bgcolor: '#fff' } }}>
            <SearchRoundedIcon sx={{ fontSize: 22, color: T.muted }} />
            <Box component="input" value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeSearch(e.target.value)}
              placeholder="Search by part number or description" aria-label="Search parts"
              sx={{ flex: 1, minWidth: 0, border: 0, outline: 0, bgcolor: 'transparent', font: 'inherit', fontSize: '0.98rem', color: T.ink, '&::placeholder': { color: T.muted } }} />
            {search && (
              <Box component="button" type="button" onClick={() => changeSearch('')} aria-label="Clear search"
                sx={{ display: 'grid', placeItems: 'center', width: 28, height: 28, borderRadius: '8px', border: 0, bgcolor: 'transparent', color: T.muted, cursor: 'pointer', '&:hover': { bgcolor: T.greenSoft, color: T.ink } }}>
                <CloseRoundedIcon sx={{ fontSize: 18 }} />
              </Box>
            )}
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: 'auto auto' }, gap: 1 }}>
            {/* Filters button: opens the filter sheet (the sidebar replaces it on desktop) */}
            <Box component="button" type="button" onClick={() => setSheet(true)}
              sx={{ display: { xs: 'flex', lg: 'none' }, alignItems: 'center', justifyContent: 'center', gap: 0.75, height: 48, px: 2, borderRadius: '14px', font: 'inherit', fontSize: '0.92rem', fontWeight: 700, cursor: 'pointer', outline: 0,
                border: `1.5px solid ${active.length ? T.greenDark : T.border}`, bgcolor: active.length ? T.greenSoft : '#fff', color: active.length ? T.greenDeep : T.ink, '&:focus-visible': { boxShadow: `0 0 0 3px ${T.greenSoft}` } }}>
              <TuneRoundedIcon sx={{ fontSize: 19 }} />
              Filters
              {active.length > 0 && <Box component="span" sx={{ minWidth: 20, height: 20, px: 0.5, borderRadius: 999, display: 'grid', placeItems: 'center', bgcolor: T.greenDeep, color: '#fff', fontSize: '0.72rem', fontWeight: 800 }}>{active.length}</Box>}
            </Box>
            <SortMenu value={sort} onChange={changeSort} />
          </Box>
        </Box>


      </Box>

      <Box ref={listTop} sx={{ mt: 2.5, mb: 1.25, px: 0.5, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 2, scrollMarginTop: 96 }}>
        <Box sx={{ fontSize: '0.92rem', color: T.body }}>
          {pageCount > 1 && <>Showing {first + 1}–{first + paged.length} of </>}
          <Box component="span" sx={{ fontWeight: 800, color: T.ink }}>{filtered.length}</Box> {filtered.length === 1 ? 'part' : 'parts'}
        </Box>
        <Box sx={{ fontSize: '0.8rem', color: T.muted }}>Prices ex VAT</Box>
      </Box>
      {active.length > 0 && (
        <Box sx={{ mb: 1.5, px: 0.5, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 0.75 }}>
          {active.map((a) => (
            <Box key={a.label} component="button" type="button" onClick={a.clear} aria-label={`Remove filter ${a.label}`}
              sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, pl: 1.25, pr: 0.75, height: 30, borderRadius: 999, border: `1.5px solid ${T.greenDark}`, bgcolor: T.greenSoft, color: T.greenDeep, font: 'inherit', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', '&:hover': { bgcolor: '#E2F5DC' } }}>
              {a.label}<CloseRoundedIcon sx={{ fontSize: 15 }} />
            </Box>
          ))}
          <Box component="button" type="button" onClick={clearAll} sx={{ border: 0, bgcolor: 'transparent', font: 'inherit', fontSize: '0.8rem', fontWeight: 700, color: T.muted, cursor: 'pointer', '&:hover': { color: T.ink, textDecoration: 'underline' } }}>Clear all</Box>
        </Box>
      )}

      {/* List */}
      <Box sx={{ borderRadius: '20px', bgcolor: '#fff', border: `1px solid ${T.border}`, overflow: 'hidden', containerType: 'inline-size' }}>
        <Box sx={{ display: 'none', [WIDE]: { display: 'grid' }, gridTemplateColumns: COLS, gap: 2.5, px: 2.5, py: 1.25, bgcolor: T.surface, borderBottom: `1px solid ${T.border}`, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase !important', color: T.muted }}>
          <span />
          <span>Part</span>
          <span>Price &amp; stock</span>
          <span />
        </Box>

        {filtered.length === 0 ? (
          <Box sx={{ px: 3, py: 8, textAlign: 'center' }}>
            <Box sx={{ fontSize: '1.05rem', fontWeight: 800, color: T.ink }}>No parts found</Box>
            <Box sx={{ mt: 0.5, fontSize: '0.9rem', color: T.body }}>Try another part number, or clear the filters.</Box>
            <Box component="button" type="button" onClick={clearAll}
              sx={{ mt: 2, px: 2.25, py: 1, borderRadius: 999, border: `1.5px solid ${T.border}`, bgcolor: '#fff', font: 'inherit', fontWeight: 700, fontSize: '0.88rem', color: T.ink, cursor: 'pointer', '&:hover': { borderColor: T.greenDark } }}>
              Clear filters
            </Box>
          </Box>
        ) : (
          paged.map((p, i) => {
            const line = items.find((it) => it.id === p.sku);
            const st = stockOf(p);
            const out = p.stockQuantity <= 0;
            return (
              <Box key={p.sku}
                sx={{ display: 'grid', gridTemplateColumns: '64px 1fr', gridTemplateAreas: '"img info" "img meta" "act act"', columnGap: 1.5, rowGap: 0.75, alignItems: 'center', px: 1.75, py: 1.75,
                  [MID]: { gridTemplateColumns: '64px minmax(0,1fr) auto', gridTemplateAreas: '"img info act" "img meta act"', columnGap: 2 },
                  [WIDE]: { gridTemplateColumns: COLS, gridTemplateAreas: '"img info meta act"', columnGap: 2.5, rowGap: 0, px: 2.5, py: 1.5 },
                  borderTop: i ? `1px solid ${T.border}` : 0, bgcolor: line ? '#F6FCF4' : '#fff', boxShadow: line ? `inset 3px 0 0 ${T.green}` : 'none', transition: 'background .15s', '&:hover': { bgcolor: line ? '#F1FAEE' : '#FAFCFA' } }}>
                <Link href={`/quick-order/${p.sku}`} style={{ gridArea: 'img', alignSelf: 'start' }} aria-label={`${p.sku} details`}>
                  <Box sx={{ width: 64, height: 64, [WIDE]: { width: 72, height: 72 }, borderRadius: '14px', border: `1px solid ${T.border}`, bgcolor: T.surface, display: 'grid', placeItems: 'center', overflow: 'hidden', p: 0.75 }}>
                    {p.cloudinaryId
                      ? <img src={p.cloudinaryId} alt={p.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      : <Box sx={{ fontSize: '0.7rem', color: T.muted }}>No image</Box>}
                  </Box>
                </Link>

                <Box sx={{ gridArea: 'info', minWidth: 0 }}>
                  <Link href={`/quick-order/${p.sku}`} style={{ textDecoration: 'none' }}>
                    <Box component="span" className="nocap" sx={{ fontFamily: mono, fontSize: '0.92rem', fontWeight: 800, color: T.greenDark, textTransform: 'none !important', '&:hover': { textDecoration: 'underline' } }}>{p.sku}</Box>
                  </Link>
                  <Box sx={{ mt: 0.25, fontSize: '0.95rem', fontWeight: 600, color: T.ink, lineHeight: 1.4 }}>{p.name}</Box>
                  <Box component="span" sx={{ display: 'inline-block', mt: 0.5, px: 1, py: 0.15, borderRadius: 999, bgcolor: T.surface, border: `1px solid ${T.border}`, fontSize: '0.74rem', fontWeight: 600, color: T.body }}>{p.category}</Box>
                </Box>

                {/* Price + stock: one line in narrow lists, stacked in their own column in wide ones */}
                <Box sx={{ gridArea: 'meta', display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap', [WIDE]: { flexDirection: 'column', alignItems: 'flex-start', gap: 0.25 } }}>
                  <Box sx={{ fontSize: '1.1rem', fontWeight: 800, color: T.ink, letterSpacing: '-0.01em' }}>£{p.price.toFixed(2)}</Box>
                  <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontSize: '0.8rem', fontWeight: 600, color: st.color, whiteSpace: 'nowrap' }}>
                    <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: st.dot, flexShrink: 0 }} />{st.label}
                  </Box>
                </Box>

                <Box sx={{ gridArea: 'act', display: 'flex', justifyContent: 'stretch', [MID]: { justifyContent: 'flex-end' } }}>
                  {line ? (
                    <Box sx={{ flex: 1, [MID]: { flex: 'none' }, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 0.5, p: 0.5, borderRadius: 999, bgcolor: T.greenSoft, border: `1.5px solid ${T.green}`, minWidth: 140 }}>
                      <Box component="button" type="button" aria-label="One fewer" onClick={() => (line.quantity <= 1 ? removeItem(p.sku) : updateQuantity(p.sku, line.quantity - 1))}
                        sx={{ display: 'grid', placeItems: 'center', width: 32, height: 32, borderRadius: '50%', border: 0, bgcolor: '#fff', color: T.ink, cursor: 'pointer', '&:hover': { bgcolor: T.border } }}>
                        <RemoveRoundedIcon sx={{ fontSize: 18 }} />
                      </Box>
                      <Box sx={{ fontSize: '0.88rem', fontWeight: 800, color: T.greenDeep, whiteSpace: 'nowrap' }}>{line.quantity} in enquiry</Box>
                      <Box component="button" type="button" aria-label="One more" onClick={() => updateQuantity(p.sku, line.quantity + 1)}
                        sx={{ display: 'grid', placeItems: 'center', width: 32, height: 32, borderRadius: '50%', border: 0, bgcolor: T.greenDeep, color: '#fff', cursor: 'pointer', '&:hover': { bgcolor: T.ink } }}>
                        <AddRoundedIcon sx={{ fontSize: 18 }} />
                      </Box>
                    </Box>
                  ) : (
                    <Box component="button" type="button" disabled={out} onClick={() => add(p)}
                      sx={{ flex: 1, [MID]: { flex: 'none' }, minWidth: 140, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 0.75, px: 2.25, height: 42, borderRadius: 999, border: 0, font: 'inherit', fontSize: '0.9rem', fontWeight: 700, cursor: out ? 'not-allowed' : 'pointer',
                        bgcolor: out ? T.surface : T.green, color: out ? T.muted : T.greenDeep, transition: 'all .15s', '&:hover': out ? {} : { bgcolor: '#55C93E' } }}>
                      {out ? 'Unavailable' : <><AddShoppingCartRoundedIcon sx={{ fontSize: 18 }} />Add to enquiry</>}
                    </Box>
                  )}
                </Box>
              </Box>
            );
          })
        )}
      </Box>

      {/* Pagination */}
      {pageCount > 1 && (
        <Box component="nav" aria-label="Pages" sx={{ mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0.75, flexWrap: 'wrap' }}>
          <Box component="button" type="button" onClick={() => goTo(current - 1)} disabled={current === 1} aria-label="Previous page"
            sx={{ ...pagerBtn, px: 1.25, gap: 0.25, opacity: current === 1 ? 0.4 : 1, cursor: current === 1 ? 'default' : 'pointer' }}>
            <ChevronLeftRoundedIcon sx={{ fontSize: 20 }} />
            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' }, pr: 0.5 }}>Prev</Box>
          </Box>
          {pageList(current, pageCount).map((n, i) =>
            n === '…' ? (
              <Box key={`gap-${i}`} sx={{ px: 0.5, color: T.muted, fontWeight: 700 }}>…</Box>
            ) : (
              <Box key={n} component="button" type="button" onClick={() => goTo(n)} aria-label={`Page ${n}`} aria-current={n === current ? 'page' : undefined}
                sx={{ ...pagerBtn, width: 40, ...(n === current && { bgcolor: T.greenDeep, borderColor: T.greenDeep, color: '#fff', '&:hover': { bgcolor: T.greenDeep } }) }}>
                {n}
              </Box>
            ),
          )}
          <Box component="button" type="button" onClick={() => goTo(current + 1)} disabled={current === pageCount} aria-label="Next page"
            sx={{ ...pagerBtn, px: 1.25, gap: 0.25, opacity: current === pageCount ? 0.4 : 1, cursor: current === pageCount ? 'default' : 'pointer' }}>
            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' }, pl: 0.5 }}>Next</Box>
            <ChevronRightRoundedIcon sx={{ fontSize: 20 }} />
          </Box>
        </Box>
      )}
      </Box>

      {/* Phone/tablet filter sheet */}
      <Drawer anchor="bottom" open={sheet} onClose={() => setSheet(false)}
        PaperProps={{ sx: { ...textReset, borderTopLeftRadius: 22, borderTopRightRadius: 22, maxHeight: '86vh', display: 'flex', flexDirection: 'column' } }}>
        <Box sx={{ pt: 1, display: 'grid', placeItems: 'center' }}><Box sx={{ width: 40, height: 4, borderRadius: 999, bgcolor: T.border }} /></Box>
        <Box sx={{ px: 2.25, py: 1.25, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${T.border}` }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '1.05rem', fontWeight: 800, color: T.ink }}>
            <Box sx={{ width: 30, height: 30, borderRadius: '9px', display: 'grid', placeItems: 'center', bgcolor: T.greenSoft, color: T.greenDark }}><TuneRoundedIcon sx={{ fontSize: 18 }} /></Box>
            Filters
          </Box>
          <Box component="button" type="button" onClick={() => setSheet(false)} aria-label="Close filters"
            sx={{ display: 'grid', placeItems: 'center', width: 36, height: 36, borderRadius: '50%', border: 0, bgcolor: T.surface, color: T.ink, cursor: 'pointer' }}>
            <CloseRoundedIcon sx={{ fontSize: 20 }} />
          </Box>
        </Box>
        <Box sx={{ flex: 1, overflowY: 'auto' }}>{filterSections}</Box>
        <Box sx={{ px: 2, py: 1.5, display: 'flex', gap: 1, borderTop: `1px solid ${T.border}`, bgcolor: '#fff' }}>
          <Box component="button" type="button" onClick={clearAll} disabled={!active.length}
            sx={{ flex: '0 0 auto', px: 2.25, height: 48, borderRadius: 999, border: `1.5px solid ${T.border}`, bgcolor: '#fff', font: 'inherit', fontSize: '0.92rem', fontWeight: 700, color: active.length ? T.ink : T.muted, cursor: active.length ? 'pointer' : 'default' }}>
            Clear all
          </Box>
          <Box component="button" type="button" onClick={() => { setSheet(false); setPage(1); setTimeout(() => listTop.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 250); }}
            sx={{ flex: 1, height: 48, borderRadius: 999, border: 0, bgcolor: T.green, font: 'inherit', fontSize: '0.95rem', fontWeight: 800, color: T.greenDeep, cursor: 'pointer' }}>
            Show {filtered.length} {filtered.length === 1 ? 'part' : 'parts'}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

// List rows switch to the column layout when the list itself is wide enough
// (it sits between the filters and the cart, so screen width alone can't tell).
const MID = '@container (min-width: 440px)';
const WIDE = '@container (min-width: 620px)';
const COLS = '72px minmax(0,1fr) 130px 156px';

const sideHead = { px: 1, mb: 0.75, fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase !important', color: T.muted } as const;

function SideOption({ on, partial, label, count, onClick, small, box, chevron }: { on: boolean; partial?: boolean; label: string; count: number; onClick: () => void; small?: boolean; box?: boolean; chevron?: 'up' | 'down' }) {
  const empty = count === 0 && !on;
  return (
    <Box component="button" type="button" onClick={onClick} aria-pressed={on} disabled={empty}
      sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 1, px: 1, py: small ? 0.6 : 0.8, borderRadius: '10px', border: 0, font: 'inherit', textAlign: 'left', cursor: empty ? 'default' : 'pointer', outline: 0,
        bgcolor: on ? T.greenSoft : 'transparent', opacity: empty ? 0.45 : 1, transition: 'background .15s', '&:hover': empty ? {} : { bgcolor: on ? T.greenSoft : T.surface }, '&:focus-visible': { boxShadow: `inset 0 0 0 2px ${T.greenDark}` } }}>
      <Box component="span" sx={{ flexShrink: 0, width: small ? 15 : 17, height: small ? 15 : 17, display: 'grid', placeItems: 'center', borderRadius: box ? '5px' : '50%',
        border: `1.5px solid ${on || partial ? T.greenDark : '#B8C4BB'}`, bgcolor: on ? T.greenDark : '#fff', color: '#fff' }}>
        {on && (box ? <CheckRoundedIcon sx={{ fontSize: 13 }} /> : <Box component="span" sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#fff' }} />)}
        {!on && partial && <Box component="span" sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: T.greenDark }} />}
      </Box>
      <Box component="span" sx={{ flex: 1, minWidth: 0, fontSize: small ? '0.84rem' : '0.9rem', fontWeight: on || partial ? 700 : 600, color: on || partial ? T.greenDeep : T.ink, lineHeight: 1.3 }}>{label}</Box>
      <Box component="span" sx={{ flexShrink: 0, fontSize: '0.74rem', fontWeight: 700, color: on ? T.greenDark : T.muted }}>{count}</Box>
      {chevron && <ExpandMoreRoundedIcon sx={{ fontSize: 18, color: T.muted, transform: chevron === 'up' ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }} />}
    </Box>
  );
}

const pagerBtn = {
  height: 40, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px',
  border: `1.5px solid ${T.border}`, bgcolor: '#fff', font: 'inherit', fontSize: '0.9rem', fontWeight: 700, color: T.ink, cursor: 'pointer',
  transition: 'all .15s', '&:hover:not(:disabled)': { borderColor: T.greenDark },
} as const;

const noBar = { scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } } as const;

type SortKey = (typeof SORTS)[number]['key'];

// Our own dropdown: the browser's native one opens on top of the field on a Mac.
function SortMenu({ value, onChange }: { value: SortKey; onChange: (k: SortKey) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('keydown', esc); };
  }, [open]);
  const label = SORTS.find((s) => s.key === value)!.label;

  return (
    <Box ref={ref} sx={{ position: 'relative', flexShrink: 0, minWidth: { sm: 240 } }}>
      <Box component="button" type="button" onClick={() => setOpen((o) => !o)} aria-haspopup="listbox" aria-expanded={open} aria-label={`Sort: ${label}`}
        sx={{ width: '100%', display: 'flex', alignItems: 'center', height: 48, pl: 1.75, pr: 1.25, borderRadius: '14px', border: `1.5px solid ${open ? T.greenDark : T.border}`, bgcolor: '#fff', font: 'inherit', cursor: 'pointer', outline: 0, transition: 'border-color .15s',
          '&:hover': { borderColor: T.greenDark }, '&:focus-visible': { borderColor: T.greenDark, boxShadow: `0 0 0 3px ${T.greenSoft}` } }}>
        <SwapVertRoundedIcon sx={{ fontSize: 19, color: T.muted, mr: 0.75 }} />
        <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' }, fontSize: '0.84rem', color: T.muted, mr: 0.5, whiteSpace: 'nowrap' }}>Sort:</Box>
        <Box component="span" sx={{ flex: 1, minWidth: 0, textAlign: 'left', fontSize: '0.92rem', fontWeight: 700, color: T.ink, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</Box>
        <ExpandMoreRoundedIcon sx={{ ml: 1, fontSize: 20, color: T.muted, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }} />
      </Box>
      {open && (
        <Box role="listbox" aria-label="Sort"
          sx={{ position: 'absolute', zIndex: 20, top: 'calc(100% + 6px)', right: 0, minWidth: '100%', width: 230, p: 0.75, borderRadius: '14px', bgcolor: '#fff', border: `1px solid ${T.border}`, boxShadow: '0 14px 36px rgba(14,27,18,0.14)' }}>
          {SORTS.map((o) => {
            const on = o.key === value;
            return (
              <Box key={o.key} component="button" type="button" role="option" aria-selected={on} onClick={() => { onChange(o.key); setOpen(false); }}
                sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 1, px: 1.25, py: 1, borderRadius: '10px', border: 0, font: 'inherit', fontSize: '0.9rem', fontWeight: on ? 700 : 600, textAlign: 'left', cursor: 'pointer', outline: 0,
                  bgcolor: on ? T.greenSoft : 'transparent', color: on ? T.greenDeep : T.ink, '&:hover, &:focus-visible': { bgcolor: on ? T.greenSoft : T.surface } }}>
                <Box component="span" sx={{ flex: 1 }}>{o.label}</Box>
                {on && <CheckRoundedIcon sx={{ fontSize: 18, color: T.greenDark }} />}
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
}
