'use client';

// JOSCAR registered supplier page, in the site's modern style (same tokens and
// section helpers as the redesigned product pages). Registration facts come from
// Valvenok's JOSCAR certificate (holder, "fully registered", Hellios, ADS); no
// placeholders are shown.

import React from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';
import type { SvgIconComponent } from '@mui/icons-material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import { T, textReset } from '@/src/app/Landing/modern/tokens';
import { wrap, Kicker, H2, Lead, pillBtn } from '@/src/app/hydrogen-cryogenic/components/HydrogenHub';

const CERT = 'https://pblol2.blob.core.windows.net/valvenok-images/certfiicates/Joscar_Cert';
const LOGO = 'https://pblol2.blob.core.windows.net/valvenok-images/joscar-registered.png';

// From the certificate itself
const REGISTRATION: [string, string][] = [
  ['Register', 'JOSCAR'],
  ['Registered company', 'Valvenok Limited'],
  ['Status', 'Fully registered'],
  ['Administered by', 'Hellios Information Ltd'],
];

const STEPS = [
  { icon: EditNoteOutlinedIcon, t: 'One assessment', b: 'The supplier completes a single assessment of its finances, quality, safety, cyber security, environmental and ethical obligations.' },
  { icon: FactCheckOutlinedIcon, t: 'Held on the register', b: 'Hellios Information collects and maintains the assurance data, and it is renewed every year.' },
  { icon: ManageSearchOutlinedIcon, t: 'Buyers read it', b: 'Buying organisations on the register see that assessment, instead of sending their own questionnaire.' },
];

const SCOPE: { icon: SvgIconComponent; t: string }[] = [
  { icon: ApartmentOutlinedIcon, t: 'Company structure, ownership and personnel' },
  { icon: AccountBalanceOutlinedIcon, t: 'Financial standing and insurance cover' },
  { icon: VerifiedOutlinedIcon, t: 'Quality management systems' },
  { icon: HealthAndSafetyOutlinedIcon, t: 'Health and safety, and safety assurance' },
  { icon: SecurityOutlinedIcon, t: 'Cyber security and data privacy' },
  { icon: ParkOutlinedIcon, t: 'Environmental management' },
  { icon: GavelOutlinedIcon, t: 'Legal, ethical and modern slavery obligations' },
  { icon: LocalShippingOutlinedIcon, t: 'Supply chain management' },
  { icon: AutorenewOutlinedIcon, t: 'Business continuity' },
  { icon: PublicOutlinedIcon, t: 'Import and export controls' },
  { icon: ReportGmailerrorredOutlinedIcon, t: 'Counterfeit product controls' },
];

const MEANS = [
  { t: 'Pre-qualification is already done', b: 'Our financial, quality, cyber and governance data sits on a register your organisation may already subscribe to.' },
  { t: 'Onboarding is shorter', b: 'Sourcing from a registered supplier removes a due diligence step from the front of the process, which matters most on urgent spares, where that step is the delay.' },
  { t: 'The standard is common, not bespoke', b: 'You are not taking our word for our own compliance; you are reading an assessment built to a standard the sector agreed on.' },
  { t: 'It is current, not historical', b: 'Annual renewal means a live registration reflects our standing now.' },
  { t: 'It complements product-level compliance', b: 'JOSCAR qualifies us as a supplier; product standards such as PED, ATEX and NACE MR0175 qualify what we supply.' },
];

const NOT_COVERED = [
  { t: 'Not a product approval', b: 'Pressure ratings, materials, sour service compliance and hazardous area certification are separate, and specified per item.' },
  { t: 'Not a security clearance', b: 'Personnel clearance and facility accreditation are handled under different regimes.' },
  { t: 'Not a certification scheme', b: 'JOSCAR is a shared register of assured supplier data, administered by Hellios; it is not a certification in the sense that ISO 9001 is.' },
  { t: 'Not a specification review', b: 'It removes the supplier due diligence step, not the engineering one. Send us the specification and we confirm what fits.' },
];

const COMPANY = [
  ['JOSCAR registration', 'Valvenok as a supplier: financial, quality, cyber, governance'],
  ['ISO 9001', 'Quality management system'],
];
const PRODUCT = [
  ['PED 2014/68/EU', 'Pressure equipment conformity'],
  ['ATEX', 'Equipment for potentially explosive atmospheres'],
  ['NACE MR0175 / ISO 15156', 'Materials for sour service'],
  ['Hydrogen service', 'Suitability for hydrogen duty'],
];

const FAQS: { q: string; a: string; icon: SvgIconComponent }[] = [
  {
    q: 'What is JOSCAR?',
    a: 'JOSCAR, the Joint Supply Chain Accreditation Register, is a shared supplier pre-qualification register for the UK aerospace, defence and security sectors. It was established by ADS Group, the trade association for those industries, and is administered by Hellios Information Ltd. Suppliers complete one assessment covering financial standing, quality, health and safety, cyber security, environmental and ethical obligations; buying organisations on the register can then rely on that assessment instead of running their own due diligence.',
    icon: HelpOutlineRoundedIcon,
  },
  {
    q: 'What does JOSCAR registration mean for me as a buyer?',
    a: 'It means the supplier due diligence step has already been completed to a standard your sector agreed on. Financial standing, quality management, cyber security, health and safety and governance have been assessed and validated, so onboarding a registered supplier is faster than qualifying one from scratch. It matters most on urgent requirements, where supplier approval is usually the bottleneck rather than lead time.',
    icon: ShoppingCartCheckoutOutlinedIcon,
  },
  {
    q: 'Is JOSCAR the same as ISO 9001?',
    a: 'No. ISO 9001 is a certification of a quality management system, issued by a certification body against a published international standard. JOSCAR is a shared register of assured supplier data covering a much wider scope: finance, insurance, cyber security, governance and ethics as well as quality. They answer different questions, and most defence and aerospace specifications expect both.',
    icon: CompareArrowsOutlinedIcon,
  },
  {
    q: 'How long does JOSCAR registration last?',
    a: 'Submissions are valid for one year, after which renewal is required. That is deliberate: a live registration reflects a supplier’s current standing rather than the position they held when they first applied.',
    icon: EventRepeatOutlinedIcon,
  },
  {
    q: 'Does JOSCAR registration mean your products are approved for my application?',
    a: 'No. JOSCAR assesses Valvenok as a business. Whether a specific valve suits your application depends on pressure rating, material, temperature, media and any hazardous area or sour service requirement, all specified per item. Send us the specification and we will confirm what we can supply and provide the product-level documentation with the quotation.',
    icon: FactCheckOutlinedIcon,
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.valvenok.com' },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://www.valvenok.com/about' },
    { '@type': 'ListItem', position: 3, name: 'JOSCAR Registered' },
  ],
};

const card = { p: { xs: 2.25, md: 2.75 }, borderRadius: '20px', bgcolor: '#fff', border: `1px solid ${T.border}` } as const;
const iconBox = (bg = T.greenSoft, fg = T.greenDark) =>
  ({ flexShrink: 0, width: 42, height: 42, borderRadius: '12px', bgcolor: bg, color: fg, display: 'grid', placeItems: 'center' }) as const;

// Before / after diagram: four buyers each sending their own questionnaire,
// against one assessment on the register that every buyer reads.
function Compare({ joscar }: { joscar: boolean }) {
  const buyers = ['Buyer A', 'Buyer B', 'Buyer C', 'Buyer D'];
  const ys = [28, 82, 136, 190];
  const tone = joscar ? { bg: `linear-gradient(180deg, ${T.greenSoft} 0%, #fff 70%)`, bd: '#BFE3B4', line: T.green, tag: T.greenDark } : { bg: 'linear-gradient(180deg, #FFF7EA 0%, #fff 70%)', bd: '#F2D3A0', line: '#E6A23C', tag: '#A15C07' };
  const lbl = { fontSize: 12.5, fontWeight: 700, fill: T.ink, fontFamily: 'inherit' } as const;
  return (
    <Box sx={{ ...card, borderColor: tone.bd, background: tone.bg }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, mb: 1.5 }}>
        <Box sx={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase !important', color: tone.tag }}>{joscar ? 'With JOSCAR' : 'Without JOSCAR'}</Box>
        <Box component="span" sx={{ px: 1.25, py: 0.35, borderRadius: 999, bgcolor: '#fff', border: `1px solid ${tone.bd}`, fontSize: '0.76rem', fontWeight: 800, color: tone.tag }}>{joscar ? '1 assessment' : '4 questionnaires'}</Box>
      </Box>
      <Box component="svg" viewBox="0 0 400 220" role="img" aria-label={joscar ? 'One supplier assessment on the JOSCAR register, read by four buyers' : 'Four buyers each sending the supplier their own questionnaire'} sx={{ width: '100%', maxWidth: 440, mx: 'auto', height: 'auto', display: 'block' }}>
        {/* supplier */}
        <rect x="6" y="86" width="104" height="48" rx="12" fill={T.greenDeep} />
        <text x="58" y="115" textAnchor="middle" style={{ ...lbl, fill: '#fff' }}>Supplier</text>
        {joscar ? (
          <>
            <path d="M110 110 H160" stroke={tone.line} strokeWidth="3" />
            <path d="M154 104 L162 110 L154 116" fill="none" stroke={tone.line} strokeWidth="3" />
            <circle cx="200" cy="110" r="38" fill="#fff" stroke={tone.line} strokeWidth="3" />
            <text x="200" y="106" textAnchor="middle" style={{ ...lbl, fontSize: 12 }}>JOSCAR</text>
            <text x="200" y="121" textAnchor="middle" style={{ ...lbl, fontSize: 10.5, fill: T.muted, fontWeight: 600 }}>register</text>
            {ys.map((y) => <path key={y} d={`M238 110 C262 110 262 ${y} 286 ${y}`} fill="none" stroke={tone.line} strokeWidth="2.5" />)}
          </>
        ) : (
          ys.map((y, i) => (
            <g key={y}>
              <path d={`M110 110 C180 110 200 ${y} 286 ${y}`} fill="none" stroke={tone.line} strokeWidth="2" strokeDasharray="5 5" />
              <g transform={`translate(${178 + (i % 2) * 18} ${(110 + y) / 2 - 12})`}>
                <rect width="18" height="22" rx="3" fill="#fff" stroke={tone.line} strokeWidth="1.5" />
                <path d="M4 7 H14 M4 11 H14 M4 15 H11" stroke={tone.line} strokeWidth="1.5" />
              </g>
            </g>
          ))
        )}
        {buyers.map((b, i) => (
          <g key={b}>
            <rect x="286" y={ys[i] - 17} width="108" height="34" rx="10" fill="#fff" stroke={T.border} strokeWidth="1.5" />
            <text x="340" y={ys[i] + 4.5} textAnchor="middle" style={lbl}>{b}</text>
          </g>
        ))}
      </Box>
      <Box component="p" sx={{ m: 0, mt: 1, fontSize: '0.9rem', color: T.body, lineHeight: 1.55 }}>
        {joscar ? 'The supplier is assessed once. Every buyer on the register sees the same validated data.' : 'Each buyer sends its own questionnaire, and the supplier fills in the same information every time.'}
      </Box>
    </Box>
  );
}

export default function JoscarRegisteredPage() {
  return (
    <Box sx={{ ...textReset, bgcolor: '#fff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── HERO ── */}
      <Box component="section" sx={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #F3FAF1 0%, #FFFFFF 100%)', pt: { xs: 5, md: 8 }, pb: { xs: 5, md: 7 } }}>
        <Box aria-hidden sx={{ position: 'absolute', right: '-10%', top: '-30%', width: 720, height: 720, borderRadius: '50%', background: 'radial-gradient(circle, rgba(214,51,132,0.10), transparent 65%)' }} />
        <Box sx={{ ...wrap, position: 'relative', display: 'grid', gridTemplateColumns: { xs: 'minmax(0,1fr)', md: '1.05fr 0.95fr' }, gap: { xs: 4, md: 7 }, alignItems: 'center' }}>
          <Box>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.25, pl: 0.75, pr: 1.75, py: 0.6, mb: 2.5, borderRadius: 999, bgcolor: '#fff', border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
              <Box component="img" src={LOGO} alt="JOSCAR registered" sx={{ width: 30, height: 30, objectFit: 'contain' }} />
              <Box component="span" sx={{ fontSize: '0.8rem', fontWeight: 700, color: T.ink }}>Supply chain accreditation</Box>
            </Box>
            <Box component="h1" sx={{ m: 0, fontSize: { xs: '2.5rem', md: '3.8rem' }, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: T.ink }}>
              JOSCAR registered{' '}
              <Box component="span" sx={{ background: 'linear-gradient(90deg, #C2185B, #8E24AA)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>supplier</Box>
            </Box>
            <Box component="p" sx={{ m: 0, mt: 2.5, maxWidth: 560, fontSize: { xs: '1.02rem', md: '1.12rem' }, lineHeight: 1.7, color: T.body }}>
              Valvenok is registered on JOSCAR, the register the UK aerospace, defence and security sectors use to pre-qualify suppliers. Buying for a programme in those sectors? You don’t need to run your own financial, quality, cyber and governance checks on us before raising a purchase order.
            </Box>
            <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {[['Aerospace', FlightOutlinedIcon], ['Defence', ShieldOutlinedIcon], ['Security', SecurityOutlinedIcon]].map(([c, Icon]) => (
                <Box key={c as string} component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, px: 1.5, py: 0.7, borderRadius: 999, bgcolor: '#fff', border: `1px solid ${T.border}`, fontSize: '0.84rem', fontWeight: 700, color: T.ink, '& svg': { fontSize: 17, color: T.greenDark } }}>
                  {React.createElement(Icon as SvgIconComponent)}{c as string}
                </Box>
              ))}
            </Box>
            <Box sx={{ mt: 3.5, display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              <Box component={Link} href="/contact" sx={pillBtn(true)}>Ask for our JOSCAR details <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} /></Box>
              <Box component={Link} href="/contact" sx={pillBtn(false)}>Request a quote</Box>
            </Box>
          </Box>

          {/* certificate on a soft panel, with floating badges */}
          <Box sx={{ position: 'relative', maxWidth: 520, width: '100%', mx: 'auto' }}>
            <Box sx={{ position: 'relative', aspectRatio: '1 / 1', borderRadius: '36px', overflow: 'hidden', border: `1px solid ${T.border}`, background: 'radial-gradient(70% 70% at 30% 20%, #FCE4EF 0%, transparent 60%), radial-gradient(70% 70% at 80% 90%, #DDF5D6 0%, transparent 60%), #FFFFFF', boxShadow: T.shadow }}>
              <Box component="img" src={CERT} fetchPriority="high" loading="eager" decoding="async" alt="Valvenok Limited JOSCAR registered certificate, issued by Hellios Information" sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(1.32) translateY(1%)' }} />
            </Box>
            <Box sx={{ position: 'absolute', left: { xs: 8, md: -28 }, top: { xs: 16, md: 48 }, display: 'flex', alignItems: 'center', gap: 1.25, px: 1.75, py: 1.25, borderRadius: '16px', bgcolor: '#fff', border: `1px solid ${T.border}`, boxShadow: T.shadowHover }}>
              <Box sx={{ ...iconBox(T.green, '#fff'), width: 34, height: 34, borderRadius: '50%' }}><CheckRoundedIcon sx={{ fontSize: 20 }} /></Box>
              <Box>
                <Box sx={{ fontSize: '0.92rem', fontWeight: 800, color: T.ink, lineHeight: 1.2 }}>Fully registered</Box>
                <Box sx={{ fontSize: '0.76rem', fontWeight: 600, color: T.muted }}>Valvenok Limited</Box>
              </Box>
            </Box>
            <Box sx={{ position: 'absolute', right: { xs: 8, md: -24 }, bottom: { xs: 16, md: 56 }, display: 'flex', alignItems: 'center', gap: 1.25, px: 1.75, py: 1.25, borderRadius: '16px', bgcolor: '#fff', border: `1px solid ${T.border}`, boxShadow: T.shadowHover }}>
              <Box sx={{ ...iconBox('#FCE4EF', '#C2185B'), width: 34, height: 34, borderRadius: '50%' }}><EventRepeatOutlinedIcon sx={{ fontSize: 19 }} /></Box>
              <Box>
                <Box sx={{ fontSize: '0.92rem', fontWeight: 800, color: T.ink, lineHeight: 1.2 }}>Renewed every year</Box>
                <Box sx={{ fontSize: '0.76rem', fontWeight: 600, color: T.muted }}>Administered by Hellios</Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* registration facts strip */}
        <Box sx={{ ...wrap, position: 'relative', mt: { xs: 4, md: 6 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, borderRadius: '22px', bgcolor: '#fff', border: `1px solid ${T.border}`, boxShadow: T.shadow, overflow: 'hidden' }}>
            {REGISTRATION.map(([k, v], i) => (
              <Box key={k} sx={{ px: { xs: 2, md: 2.75 }, py: { xs: 1.75, md: 2.25 }, borderLeft: { md: i ? `1px solid ${T.border}` : 'none' }, borderTop: { xs: i > 1 ? `1px solid ${T.border}` : 'none', md: 'none' }, borderRight: { xs: i % 2 === 0 ? `1px solid ${T.border}` : 'none', md: 'none' } }}>
                <Box sx={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase !important', color: T.muted }}>{k}</Box>
                <Box sx={{ mt: 0.4, fontSize: { xs: '0.95rem', md: '1.05rem' }, fontWeight: 800, color: T.ink, lineHeight: 1.3 }}>{v}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── WHAT IS JOSCAR ── */}
      <Box component="section" aria-labelledby="h2-what" sx={{ py: { xs: 7, md: 10 } }}>
        <Box sx={wrap}>
          <Box sx={{ mb: 4.5 }}>
            <Kicker>What is JOSCAR</Kicker>
            <H2 id="h2-what">One assessment, read by every buyer</H2>
            <Lead>Without JOSCAR, every prime contractor and tier-one supplier runs its own due diligence questionnaire, and every supplier fills in the same information over and over. JOSCAR does the work once, to a common standard.</Lead>
          </Box>

          {/* before / after */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'minmax(0,1fr)', md: '1fr 1fr' }, gap: 2 }}>
            <Compare joscar={false} />
            <Compare joscar />
          </Box>

          {/* how it works: connected steps */}
          <Box sx={{ mt: { xs: 5, md: 7 }, position: 'relative', display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: { xs: 3, md: 4 } }}>
            <Box aria-hidden sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', top: 27, left: '9%', right: '9%', height: 2, background: `repeating-linear-gradient(90deg, ${T.green} 0 10px, transparent 10px 18px)` }} />
            {STEPS.map(({ icon: Icon, t, b }, i) => (
              <Box key={t} sx={{ position: 'relative', display: 'flex', flexDirection: { xs: 'row', md: 'column' }, alignItems: { xs: 'flex-start', md: 'center' }, textAlign: { md: 'center' }, gap: 2 }}>
                <Box sx={{ position: 'relative', flexShrink: 0, width: 56, height: 56, borderRadius: '50%', bgcolor: '#fff', border: `2px solid ${T.green}`, color: T.greenDark, display: 'grid', placeItems: 'center', boxShadow: '0 0 0 6px #fff' }}>
                  <Icon />
                  <Box component="span" sx={{ position: 'absolute', top: -6, right: -6, width: 22, height: 22, borderRadius: '50%', bgcolor: T.greenDeep, color: '#fff', fontSize: '0.72rem', fontWeight: 800, display: 'grid', placeItems: 'center' }}>{i + 1}</Box>
                </Box>
                <Box>
                  <Box component="h3" sx={{ m: 0, fontSize: '1.08rem', fontWeight: 800, color: T.ink }}>{t}</Box>
                  <Box component="p" sx={{ m: 0, mt: 0.5, fontSize: '0.92rem', color: T.body, lineHeight: 1.6, maxWidth: 320, mx: { md: 'auto' } }}>{b}</Box>
                </Box>
              </Box>
            ))}
          </Box>

          {/* who runs it / who recognises it */}
          <Box sx={{ mt: { xs: 5, md: 7 }, p: { xs: 2.5, md: 3.5 }, borderRadius: '24px', bgcolor: T.greenDeep, color: '#fff', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1px 1fr' }, gap: { xs: 3, md: 4 } }}>
            {[
              { icon: AccountBalanceOutlinedIcon, t: 'Who runs it', b: 'Established by ADS Group, the trade association for the UK aerospace, defence, security and space industries. Administered by Hellios Information Ltd, which collects and maintains the supplier assurance data.', chips: ['ADS Group · established it', 'Hellios · administers it'] },
              null,
              { icon: PublicOutlinedIcon, t: 'Who recognises it', b: 'Buying organisations across those sectors use the register, including major prime contractors, and the buyer community continues to grow across the UK and Australia.', chips: ['Prime contractors', 'UK and Australia'] },
            ].map((x) =>
              x ? (
                <Box key={x.t} sx={{ display: 'flex', gap: 2 }}>
                  <Box sx={{ ...iconBox('rgba(255,255,255,0.1)', T.green), width: 46, height: 46 }}><x.icon /></Box>
                  <Box>
                    <Box component="h3" sx={{ m: 0, fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>{x.t}</Box>
                    <Box component="p" sx={{ m: 0, mt: 0.75, fontSize: '0.92rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.78)' }}>{x.b}</Box>
                    <Box sx={{ mt: 1.5, display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                      {x.chips.map((c) => <Box key={c} component="span" sx={{ px: 1.25, py: 0.4, borderRadius: 999, bgcolor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', fontSize: '0.76rem', fontWeight: 700, color: '#fff' }}>{c}</Box>)}
                    </Box>
                  </Box>
                </Box>
              ) : (
                <Box key="div" aria-hidden sx={{ display: { xs: 'none', md: 'block' }, bgcolor: 'rgba(255,255,255,0.15)' }} />
              ),
            )}
          </Box>
        </Box>
      </Box>

      {/* ── WHAT IT COVERS ── */}
      <Box component="section" aria-labelledby="h2-scope" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface }}>
        <Box sx={wrap}>
          <Box sx={{ mb: 4 }}>
            <Kicker>The assessment</Kicker>
            <H2 id="h2-scope">What the JOSCAR assessment covers</H2>
            <Lead>Eleven areas of the business are assessed and validated, so a buyer can see them in one place.</Lead>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' }, gap: 1.25 }}>
            {SCOPE.map(({ icon: Icon, t }) => (
              <Box key={t} sx={{ ...card, p: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box sx={iconBox()}><Icon sx={{ fontSize: 21 }} /></Box>
                <Box sx={{ fontSize: '0.92rem', fontWeight: 700, color: T.ink, lineHeight: 1.35 }}>{t}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── WHAT IT MEANS / WHAT IT DOESN'T ── */}
      <Box component="section" aria-labelledby="h2-means" sx={{ py: { xs: 7, md: 10 } }}>
        <Box sx={wrap}>
          <Box sx={{ mb: 4 }}>
            <Kicker>For your procurement team</Kicker>
            <H2 id="h2-means">What it means, and what it doesn’t</H2>
            <Lead>Knowing what JOSCAR does not cover is just as useful: it tells you what still needs checking for your specification.</Lead>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'minmax(0,1fr)', md: '1fr 1fr' }, gap: 2 }}>
            <Box sx={{ ...card, borderColor: '#BFE3B4', background: `linear-gradient(180deg, ${T.greenSoft} 0%, #fff 60%)` }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase !important', color: T.greenDark }}>
                <CheckRoundedIcon sx={{ fontSize: 18 }} /> What it means for you
              </Box>
              <Box sx={{ display: 'grid', gap: 1.75 }}>
                {MEANS.map((m) => (
                  <Box key={m.t} sx={{ display: 'flex', gap: 1.5 }}>
                    <Box sx={{ ...iconBox(T.green, '#fff'), width: 26, height: 26, borderRadius: '50%', mt: 0.25 }}><CheckRoundedIcon sx={{ fontSize: 16 }} /></Box>
                    <Box>
                      <Box component="h3" sx={{ m: 0, fontSize: '0.98rem', fontWeight: 800, color: T.ink }}>{m.t}</Box>
                      <Box component="p" sx={{ m: 0, mt: 0.25, fontSize: '0.9rem', color: T.body, lineHeight: 1.6 }}>{m.b}</Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={{ ...card, borderColor: '#F2D3A0', background: 'linear-gradient(180deg, #FFF7EA 0%, #fff 60%)' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase !important', color: '#A15C07' }}>
                <CloseRoundedIcon sx={{ fontSize: 18 }} /> What it doesn’t cover
              </Box>
              <Box sx={{ display: 'grid', gap: 1.75 }}>
                {NOT_COVERED.map((m) => (
                  <Box key={m.t} sx={{ display: 'flex', gap: 1.5 }}>
                    <Box sx={{ ...iconBox('#F5B451', '#fff'), width: 26, height: 26, borderRadius: '50%', mt: 0.25 }}><CloseRoundedIcon sx={{ fontSize: 16 }} /></Box>
                    <Box>
                      <Box component="h3" sx={{ m: 0, fontSize: '0.98rem', fontWeight: 800, color: T.ink }}>{m.t}</Box>
                      <Box component="p" sx={{ m: 0, mt: 0.25, fontSize: '0.9rem', color: T.body, lineHeight: 1.6 }}>{m.b}</Box>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box component="p" sx={{ m: 0, mt: 2.25, pt: 2, borderTop: `1px dashed #F2D3A0`, fontSize: '0.88rem', color: T.body }}>
                Product certification is covered on our <Box component={Link} href="/quality" sx={{ color: T.greenDark, fontWeight: 700 }}>Quality page</Box>.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ── CREDENTIALS ── */}
      <Box component="section" aria-labelledby="h2-cred" sx={{ pb: { xs: 7, md: 10 } }}>
        <Box sx={wrap}>
          <Box sx={{ mb: 4 }}>
            <Kicker>Alongside our other credentials</Kicker>
            <H2 id="h2-cred">The company, and what it supplies</H2>
            <Lead>JOSCAR qualifies us as a supplier. Product standards qualify what we supply, and are confirmed per item on the quotation.</Lead>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'minmax(0,1fr)', md: '1fr 1.4fr' }, gap: 2 }}>
            {([['Company level', COMPANY, T.greenDeep], ['Product level', PRODUCT, '#24476B']] as const).map(([title, rows, col]) => (
              <Box key={title} sx={{ ...card, p: 0, overflow: 'hidden' }}>
                <Box sx={{ px: 2.5, py: 1.4, bgcolor: col, color: '#fff', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase !important' }}>{title}</Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: rows.length > 2 ? '1fr 1fr' : '1fr' } }}>
                  {rows.map(([k, v]) => (
                    <Box key={k} sx={{ px: 2.5, py: 1.75, borderTop: `1px solid ${T.border}` }}>
                      <Box sx={{ fontSize: '1rem', fontWeight: 800, color: T.ink }}>{k}</Box>
                      <Box sx={{ mt: 0.25, fontSize: '0.88rem', color: T.body }}>{v}</Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── FAQ ── */}
      <Box component="section" aria-labelledby="h2-faq" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface }}>
        <Box sx={{ ...wrap, maxWidth: 900 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Kicker>FAQ</Kicker>
            <H2 id="h2-faq">JOSCAR questions</H2>
          </Box>
          <Box sx={{ display: 'grid', gap: 1.25 }}>
            {FAQS.map((f, i) => (
              <Box component="details" key={f.q} open={i === 0}
                sx={{
                  borderRadius: '16px', bgcolor: '#fff', border: `1px solid ${T.border}`,
                  '& summary': { listStyle: 'none', cursor: 'pointer', px: 2.5, py: 2, fontWeight: 700, color: T.ink, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 },
                  '& summary::-webkit-details-marker': { display: 'none' },
                  '& summary::after': { content: '"+"', flexShrink: 0, width: 28, height: 28, borderRadius: '50%', bgcolor: T.greenSoft, color: T.greenDark, fontWeight: 800, display: 'grid', placeItems: 'center', lineHeight: '28px', textAlign: 'center' },
                  '&[open] summary::after': { content: '"–"' },
                }}>
                <Box component="summary">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.75 }}>
                    <Box sx={{ ...iconBox(), width: 40, height: 40 }}>{React.createElement(f.icon, { sx: { fontSize: 21 } })}</Box>
                    <Box component="h3" sx={{ m: 0, font: 'inherit' }}>{f.q}</Box>
                  </Box>
                </Box>
                <Box component="p" sx={{ m: 0, pl: { xs: 2.5, sm: '78px' }, pr: 2.5, pb: 2.25, color: T.body, lineHeight: 1.7 }}>{f.a}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── CTA ── */}
      <Box component="section" aria-labelledby="h2-cta" sx={{ py: { xs: 7, md: 10 } }}>
        <Box sx={wrap}>
          <Box sx={{ p: { xs: 3.5, md: 6 }, borderRadius: '28px', background: 'linear-gradient(120deg, #E9F8E4 0%, #EAF4FF 55%, #FCEAF2 100%)', border: `1px solid ${T.border}`, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 3 }}>
            <Box>
              <Box component="h2" id="h2-cta" sx={{ m: 0, mb: 1, fontSize: { xs: '1.6rem', md: '2.2rem' }, fontWeight: 800, letterSpacing: '-0.03em', color: T.ink }}>Buying for a defence or aerospace programme?</Box>
              <Box component="p" sx={{ m: 0, maxWidth: 640, lineHeight: 1.7, color: T.body }}>
                Send us the specification (line size, pressure class, material, media and any certification your programme needs) and we’ll come back with availability, pricing and the supporting documentation.
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', flexShrink: 0 }}>
              <Box component={Link} href="/contact" sx={pillBtn(true)}>Request a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} /></Box>
              <Box component="a" href="https://www.hellios.com" target="_blank" rel="noopener" sx={pillBtn(false)}>About Hellios <OpenInNewRoundedIcon sx={{ fontSize: 16 }} /></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
