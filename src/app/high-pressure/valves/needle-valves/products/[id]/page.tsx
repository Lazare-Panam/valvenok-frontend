'use client'

// Single needle valve model (the bottom level of the pilot path), in the
// Pumster product-page style: photo + key facts, a picker to switch size /
// connection / pattern within the series, full specs, related models.

import { useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { Box } from '@mui/material'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined'
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import { HP_NEEDLE_VALVE_DATA, type HPNeedleValveDTO } from '../../hooks/hpNeedleValveData'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'
import { T, textReset } from '@/src/app/Landing/modern/tokens'

const BASE = '/high-pressure/valves/needle-valves'
const LOGO: Record<string, string> = {
  Panam: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/panam-logo.png',
  Hiflux: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/hiflux-logo.png',
}
const SITE: Record<string, string> = { Panam: 'https://www.panamvalve.com/', Hiflux: 'https://www.hiflux.uk.com/' }
const WA = (pn: string) => `https://wa.me/447368137917?text=${encodeURIComponent(`Hello Valvenok, I have a question about needle valve ${pn} (https://www.valvenok.com${BASE}/products/${pn}).`)}`

const btn = (primary: boolean) => ({
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 1, px: 3, py: 1.4, borderRadius: 999, fontWeight: 700, fontSize: '0.95rem',
  textDecoration: 'none', cursor: 'pointer', fontFamily: 'inherit', transition: 'all .2s',
  ...(primary
    ? { border: 0, bgcolor: T.green, color: T.greenDeep, '&:hover': { bgcolor: '#55C93E' } }
    : { bgcolor: '#fff', color: T.ink, border: `1px solid ${T.border}`, '&:hover': { borderColor: T.greenDark, color: T.greenDark } }),
}) as const

// Plain-English name, e.g. "Panam HP series needle valve, 1/8" NPT female to female, straight"
const plainName = (v: HPNeedleValveDTO) => `${v.brand} ${v.series} series needle valve, ${v.connectionSize} ${v.connectionType}, ${v.configuration.toLowerCase()}`

function Picker({ v }: { v: HPNeedleValveDTO }) {
  const router = useRouter()
  const family = HP_NEEDLE_VALVE_DATA.filter(x => x.brand === v.brand && x.series === v.series)
  const groups: { key: keyof HPNeedleValveDTO; label: string }[] = [
    { key: 'configuration', label: 'Pattern' },
    { key: 'connectionType', label: 'Connection' },
    { key: 'connectionSize', label: 'Size' },
  ]
  // Pick the closest model: change one attribute, keep as many of the others as possible
  const goTo = (key: keyof HPNeedleValveDTO, val: string) => {
    const cands = family.filter(x => x[key] === val)
    const score = (x: HPNeedleValveDTO) => groups.filter(g => g.key !== key && x[g.key] === v[g.key]).length
    const best = cands.sort((a, b) => score(b) - score(a))[0]
    if (best && best.id !== v.id) router.push(`${BASE}/products/${best.id}`)
  }
  const sizeOrder = (s: string) => { const m = s.match(/(\d+)\/(\d+)/); return m ? +m[1] / +m[2] : parseFloat(s) || 99 }
  return (
    <Box sx={{ display: 'grid', gap: 2 }}>
      {groups.map(g => {
        const opts = Array.from(new Set(family.map(x => String(x[g.key]))))
        if (g.key === 'connectionSize') opts.sort((a, b) => sizeOrder(a) - sizeOrder(b))
        if (opts.length < 2) return null
        return (
          <Box key={g.key}>
            <Box sx={{ fontSize: '0.78rem', fontWeight: 700, color: T.muted, mb: 0.75 }}>
              {g.label}: <Box component="span" sx={{ color: T.ink }}>{String(v[g.key])}</Box>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
              {opts.map(o => {
                const on = String(v[g.key]) === o
                // available with the other current choices kept?
                const exact = family.some(x => x[g.key] === o && groups.every(k => k.key === g.key || x[k.key] === v[k.key]))
                return (
                  <Box key={o} component="button" type="button" aria-pressed={on} onClick={() => goTo(g.key, o)}
                    sx={{ cursor: 'pointer', fontFamily: 'inherit', px: 1.5, py: 0.7, borderRadius: '10px', fontSize: '0.85rem', fontWeight: on ? 800 : 600,
                      border: `1.5px solid ${on ? T.greenDark : T.border}`, bgcolor: on ? T.greenSoft : '#fff', color: on ? T.greenDeep : T.ink,
                      borderStyle: exact || on ? 'solid' : 'dashed', opacity: exact || on ? 1 : 0.7, transition: 'all .15s', '&:hover': { borderColor: T.greenDark } }}>
                    {o}
                  </Box>
                )
              })}
            </Box>
          </Box>
        )
      })}
      <Box sx={{ fontSize: '0.75rem', color: T.muted }}>Dashed options switch to the nearest available model.</Box>
    </Box>
  )
}

export default function NeedleValveDetailPage() {
  const { id } = useParams()
  const [modalOpen, setModalOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const v = HP_NEEDLE_VALVE_DATA.find(x => x.id === id)

  if (!v) {
    return (
      <Box sx={{ ...textReset, minHeight: '60vh', display: 'grid', placeItems: 'center', textAlign: 'center', px: 2 }}>
        <Box>
          <Box component="h1" sx={{ m: 0, mb: 2, fontSize: '2rem', fontWeight: 800, color: T.ink }}>Product not found</Box>
          <Box component={Link} href={`${BASE}/products`} sx={btn(false)}><ArrowBackRoundedIcon sx={{ fontSize: 18 }} /> Back to all models</Box>
        </Box>
      </Box>
    )
  }

  const specs: [string, string][] = [
    ['Part number', v.partNumber], ['Brand', v.brand], ['Series', v.series], ['Pressure rating', v.pressureRating], ['Body material', v.material],
    ['Connection size', v.connectionSize], ['Connection type', v.connectionType], ['Pattern', v.configuration],
  ]
  const rfq: ProductForRFQ = {
    id: v.partNumber, name: `${v.brand} Needle Valve — ${v.partNumber}`, brand: v.brand, category: 'High Pressure Needle Valves', categoryId: 'needle-valves',
    subCategory: v.series, thumbnail: v.imageUrl, description: v.description, keySpecs: specs.map(([label, value]) => ({ label, value })),
    variantInfo: { count: 1, sizeRange: v.connectionSize },
  }
  const sameSeries = HP_NEEDLE_VALVE_DATA.filter(x => x.brand === v.brand && x.series === v.series && x.id !== v.id)
  const related = [...sameSeries.filter(x => x.configuration === v.configuration), ...sameSeries.filter(x => x.configuration !== v.configuration)].slice(0, 4)
  const copy = () => { navigator.clipboard?.writeText(v.partNumber); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  return (
    <Box sx={{ ...textReset, bgcolor: '#fff' }}>

      {/* Top: photo + key facts */}
      <Box component="section" sx={{ background: `linear-gradient(180deg, #F6FAF5 0%, #FFFFFF 100%)`, pt: { xs: 3, md: 5 }, pb: { xs: 4, md: 5 } }}>
        <Box sx={{ maxWidth: 1240, mx: 'auto', px: { xs: 2, md: 4 } }}>
          <Box component={Link} href={`${BASE}/products?series=${encodeURIComponent(v.series)}`} sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, mb: 2.5, fontSize: '0.88rem', fontWeight: 700, color: T.greenDark, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            <ArrowBackRoundedIcon sx={{ fontSize: 17 }} /> All {v.series} series models
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'minmax(0,1fr)', md: '1fr 1fr' }, gap: { xs: 3, md: 6 }, alignItems: 'start' }}>
            {/* photo */}
            <Box sx={{ position: { md: 'sticky' }, top: { md: 150 } }}>
              <Box sx={{ position: 'relative', aspectRatio: '1 / 1', borderRadius: '28px', bgcolor: '#fff', border: `1px solid ${T.border}`, boxShadow: T.shadow, display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
                <Box component="img" src={v.imageUrl} alt={`${v.brand} ${v.partNumber} needle valve`} sx={{ width: '72%', height: '72%', objectFit: 'contain' }} />
                <Box component="img" src={LOGO[v.brand]} alt={v.brand} sx={{ position: 'absolute', top: 18, left: 18, height: v.brand === 'Panam' ? 32 : 21, maxWidth: 110, objectFit: 'contain' }} />
                <Box sx={{ position: 'absolute', top: 16, right: 16, px: 1.5, py: 0.6, borderRadius: 999, bgcolor: T.greenSoft, color: T.greenDark, fontSize: '0.8rem', fontWeight: 800 }}>{v.pressureRating}</Box>
              </Box>
              <Box sx={{ mt: 1.5, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
                {[
                  { icon: <ShieldOutlinedIcon />, t: v.material },
                  { icon: <VerifiedOutlinedIcon />, t: 'Certificates on request' },
                  { icon: <SupportAgentOutlinedIcon />, t: 'UK support' },
                ].map(x => (
                  <Box key={x.t} sx={{ display: 'flex', alignItems: 'center', gap: 0.75, p: 1.25, borderRadius: '14px', bgcolor: T.surface, fontSize: '0.78rem', fontWeight: 700, color: T.ink, '& svg': { fontSize: 18, color: T.greenDark } }}>
                    {x.icon}{x.t}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* facts + picker + actions */}
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', mb: 1.5 }}>
                <Box component="span" sx={{ px: 1.25, py: 0.4, borderRadius: 999, bgcolor: T.surface, border: `1px solid ${T.border}`, fontSize: '0.78rem', fontWeight: 700, color: T.ink }}>{v.series} series</Box>
                <Box component="span" sx={{ fontSize: '0.82rem', fontWeight: 600, color: T.muted }}>Needle valve · {v.brand}</Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, flexWrap: 'wrap' }}>
                <Box component="h1" sx={{ m: 0, fontSize: { xs: '2rem', md: '2.8rem' }, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, color: T.ink, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace !important' }}>
                  {v.partNumber}
                </Box>
                <Box component="button" type="button" onClick={copy} aria-label="Copy part number" sx={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 0.5, px: 1.25, py: 0.6, borderRadius: 999, border: `1px solid ${T.border}`, bgcolor: '#fff', fontFamily: 'inherit', fontSize: '0.78rem', fontWeight: 700, color: copied ? T.greenDark : T.body }}>
                  {copied ? <CheckRoundedIcon sx={{ fontSize: 15 }} /> : <ContentCopyRoundedIcon sx={{ fontSize: 14 }} />} {copied ? 'Copied' : 'Copy'}
                </Box>
              </Box>
              <Box component="p" sx={{ m: 0, mt: 1.25, fontSize: '1.05rem', lineHeight: 1.6, color: T.body }}>{plainName(v)}.</Box>

              {/* key facts */}
              <Box sx={{ mt: 3, display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(4, 1fr)' }, gap: 1 }}>
                {[
                  ['Pressure', v.pressureRating], ['Size', v.connectionSize], ['Connection', v.connectionType], ['Pattern', v.configuration],
                ].map(([k, val]) => (
                  <Box key={k} sx={{ p: 1.5, borderRadius: '14px', bgcolor: '#fff', border: `1px solid ${T.border}` }}>
                    <Box sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase !important', color: T.muted }}>{k}</Box>
                    <Box sx={{ mt: 0.25, fontSize: '0.92rem', fontWeight: 800, color: T.ink, lineHeight: 1.3 }}>{val}</Box>
                  </Box>
                ))}
              </Box>

              {/* picker */}
              <Box sx={{ mt: 3, p: { xs: 2, md: 2.5 }, borderRadius: '20px', bgcolor: T.surface, border: `1px solid ${T.border}` }}>
                <Box sx={{ fontSize: '0.95rem', fontWeight: 800, color: T.ink, mb: 1.5 }}>Choose another size or connection</Box>
                <Picker v={v} />
              </Box>

              {/* actions */}
              <Box sx={{ mt: 3, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.25 }}>
                <Box component="button" type="button" onClick={() => setModalOpen(true)} sx={btn(true)}>
                  Request a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
                </Box>
                <Box component="a" href={WA(v.partNumber)} target="_blank" rel="noopener" sx={btn(false)}>
                  Ask on WhatsApp
                </Box>
              </Box>
              <Box sx={{ mt: 1.5, fontSize: '0.85rem', color: T.body }}>
                Price and lead time confirmed on your quote.{' '}
                <Box component="a" href={SITE[v.brand]} target="_blank" rel="noopener" sx={{ color: T.greenDark, fontWeight: 700 }}>Visit the {v.brand} website</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Specifications: full width, two columns of rows, then three help cards */}
      <Box component="section" aria-labelledby="h2-spec" sx={{ pt: { xs: 2, md: 2 }, pb: { xs: 6, md: 8 } }}>
        <Box sx={{ maxWidth: 1240, mx: 'auto', px: { xs: 2, md: 4 } }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 1, mb: 2 }}>
            <Box component="h2" id="h2-spec" sx={{ m: 0, fontSize: { xs: '1.5rem', md: '1.9rem' }, fontWeight: 800, letterSpacing: '-0.025em', color: T.ink }}>Specifications</Box>
            <Box component="p" sx={{ m: 0, fontSize: '0.9rem', color: T.body }}>{v.description}</Box>
          </Box>
          <Box component="dl" sx={{
            m: 0, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, borderRadius: '18px', border: `1px solid ${T.border}`, overflow: 'hidden', bgcolor: '#fff',
            '& > div': { display: 'grid', gridTemplateColumns: { xs: '140px 1fr', sm: '200px 1fr' }, borderTop: `1px solid ${T.border}` },
            '& > div:nth-of-type(1), & > div:nth-of-type(2)': { borderTop: { md: 0 } },
            '& > div:nth-of-type(1)': { borderTop: 0 },
            '& > div:nth-of-type(odd)': { borderRight: { md: `1px solid ${T.border}` }, bgcolor: { xs: '#FAFCFA', md: 'transparent' } },
            '& > div:nth-of-type(4n+1), & > div:nth-of-type(4n+2)': { bgcolor: { md: '#FAFCFA' } },
            '& dt': { px: 2.25, py: 1.5, fontSize: '0.85rem', fontWeight: 600, color: T.body },
            '& dd': { m: 0, px: 2.25, py: 1.5, fontSize: '0.92rem', fontWeight: 700, color: T.ink },
          }}>
            {specs.map(([k, val]) => (
              <div key={k}><dt>{k}</dt><dd>{val}</dd></div>
            ))}
          </Box>

          <Box sx={{ mt: 2.5, display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2 }}>
            {[
              { k: 'New to needle valves?', t: 'See how they work and compare the series', d: 'An animated cut-away, every series by pressure, and H70 hydrogen refuelling valves.', cta: 'Needle valves guide', href: BASE, ext: false, bg: 'linear-gradient(135deg, #EEF9EA 0%, #EAF4FF 100%)' },
              { k: 'Ordering', t: 'Certificates and delivery', d: 'Ask for material or approval certificates with your quote. Free UK delivery on orders over £150.', cta: 'Delivery information', href: '/delivery', ext: false, bg: 'linear-gradient(135deg, #FFF7E6 0%, #FFFDF5 100%)' },
              { k: 'Need help?', t: 'Talk to our team', d: 'Send your pressure, media and connection and we’ll confirm the right model, or call +44 7368 137917.', cta: 'Ask on WhatsApp', href: WA(v.partNumber), ext: true, bg: 'linear-gradient(135deg, #F3EEFF 0%, #EAF4FF 100%)' },
            ].map(c => (
              <Box key={c.k} sx={{ display: 'flex', flexDirection: 'column', p: 3, borderRadius: '22px', background: c.bg, border: `1px solid ${T.border}` }}>
                <Box sx={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase !important', color: T.greenDark, mb: 1 }}>{c.k}</Box>
                <Box sx={{ fontSize: '1.08rem', fontWeight: 800, color: T.ink, mb: 0.75 }}>{c.t}</Box>
                <Box component="p" sx={{ m: 0, mb: 2, flex: 1, fontSize: '0.9rem', lineHeight: 1.6, color: T.body }}>{c.d}</Box>
                <Box component={c.ext ? 'a' : Link} href={c.href} {...(c.ext ? { target: '_blank', rel: 'noopener' } : {})} sx={{ ...btn(false), alignSelf: 'flex-start', py: 1 }}>
                  {c.cta} <ArrowForwardRoundedIcon sx={{ fontSize: 17 }} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Related */}
      {related.length > 0 && (
        <Box component="section" aria-labelledby="h2-rel" sx={{ py: { xs: 6, md: 8 }, bgcolor: T.surface }}>
          <Box sx={{ maxWidth: 1240, mx: 'auto', px: { xs: 2, md: 4 } }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 1, mb: 2.5 }}>
              <Box component="h2" id="h2-rel" sx={{ m: 0, fontSize: { xs: '1.5rem', md: '1.9rem' }, fontWeight: 800, letterSpacing: '-0.025em', color: T.ink }}>More in the {v.series} series</Box>
              <Box component={Link} href={`${BASE}/products?series=${encodeURIComponent(v.series)}`} sx={{ fontSize: '0.9rem', fontWeight: 700, color: T.greenDark, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
                All {sameSeries.length + 1} models <ArrowForwardRoundedIcon sx={{ fontSize: 17 }} />
              </Box>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: { xs: 1.25, md: 2 } }}>
              {related.map(r => (
                <Box key={r.id} component={Link} href={`${BASE}/products/${r.id}`} sx={{ display: 'block', p: 1.5, borderRadius: '20px', bgcolor: '#fff', border: `1px solid ${T.border}`, textDecoration: 'none', transition: 'all .2s', '&:hover': { borderColor: '#BFE5B3', transform: 'translateY(-3px)', boxShadow: T.shadowHover } }}>
                  <Box sx={{ aspectRatio: '4 / 3', borderRadius: '14px', bgcolor: T.surface, display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
                    <Box component="img" src={r.imageUrl} alt={`${r.id} needle valve`} loading="lazy" sx={{ width: '70%', height: '75%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                  </Box>
                  <Box sx={{ mt: 1.25, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontWeight: 700, fontSize: '0.86rem', color: T.ink }}>{r.partNumber}</Box>
                  <Box sx={{ mt: 0.25, fontSize: '0.8rem', color: T.body }}>{r.connectionSize} · {r.configuration}</Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      )}

      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={rfq} />
    </Box>
  )
}
