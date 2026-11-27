'use client';

// BVAA member page: BVAA-style navy/red banner, then the team photo, the plaque,
// our directory entry and the facts about the association. Facts about the
// association are from bvaa.org.uk (home, About, How to join, Insight &
// expertise, Training and Publications pages, read 13 Nov 2026).

import React from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';
import type { SvgIconComponent } from '@mui/icons-material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import RuleOutlinedIcon from '@mui/icons-material/RuleOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import { T, textReset } from '@/src/app/Landing/modern/tokens';
import { wrap, H2, Lead, pillBtn } from '@/src/app/hydrogen-cryogenic/components/HydrogenHub';

const LOGO = 'https://pblol2.blob.core.windows.net/valvenok-images/certfiicates/bvaa-logo.png';
// Our entry in the BVAA members directory
const TEAM_PHOTO = '/images/bvaa/valvenok-team-bvaa-plaque.webp';
const PLAQUE_PHOTO = '/images/bvaa/bvaa-plaque.webp';
const LISTING = 'https://www.bvaa.org.uk/company_details.asp?id=51032';


const FACTS: [string, string][] = [
  ['Association', 'British Valve & Actuator Association'],
  ['Members', '160+ UK companies'],
  ['Serving the industry', 'For over 85 years'],
  ['Run', 'Not for profit, from Banbury'],
];

const WORK: { icon: SvgIconComponent; t: string; b: string }[] = [
  { icon: RuleOutlinedIcon, t: 'Standards', b: 'Members sit on more than 50 committees setting European and international standards and writing codes of practice, working with bodies such as API, BSI, CEN and ISO.' },
  { icon: SchoolOutlinedIcon, t: 'Training', b: 'Independent valve and actuator courses, not tied to any brand: from Introduction to Valves to control valves, safety valves and advanced design, test and commissioning.' },
  { icon: MenuBookOutlinedIcon, t: 'Technical publications', b: 'The Valve and Actuator Users’ Manual, published since 1964, the Safety Valves Manual and regular technical reports and guides.' },
  { icon: CampaignOutlinedIcon, t: 'A collective voice', b: 'Representing UK valve and actuator companies on issues such as trade barriers, and to government and other bodies on policy and legislation.' },
];

const JOIN = [
  { t: 'A UK registered company', b: 'Membership is open to companies registered in the UK that have filed at least one set of formal UK accounts.' },
  { t: 'In the valve and actuator business', b: 'Members manufacture, distribute or repair industrial valves and actuators: manufacturers, suppliers, distributors, stockists and service companies.' },
  { t: 'Approved by the Board', b: 'Each application goes to the BVAA Board for approval, and members subscribe to the association’s Memorandum and Articles of Association.' },
];

const MEANS = [
  { t: 'An established UK valve business', b: 'Membership is limited to UK registered companies with filed accounts, approved by the BVAA Board.' },
  { t: 'Connected to the industry’s expertise', b: 'Access to BVAA technical reports, guides and independent training keeps us current on standards and practice.' },
  { t: 'Listed in the BVAA directory', b: <>Buyers can find BVAA members through the association’s members directory and product sourcing service. <Box component="a" href={LISTING} target="_blank" rel="noopener" sx={{ color: '#D3202F', fontWeight: 700 }}>See our BVAA listing</Box>.</> },
];
const NOT = [
  { t: 'Not a product certification', b: 'BVAA membership does not certify products. Pressure ratings, materials and certificates are confirmed per item on the quotation.' },
  { t: 'Not a quality standard', b: 'It is separate from ISO 9001 or JOSCAR, which assess a company against a defined standard.' },
];

const FAQS: { q: string; a: string; icon: SvgIconComponent }[] = [
  { q: 'What is the BVAA?', a: 'The British Valve & Actuator Association is the UK trade association for the valve and actuator industry. It has more than 160 member companies and has served the industry for over 85 years, on a not-for-profit basis.', icon: HelpOutlineRoundedIcon },
  { q: 'Who can join?', a: 'UK registered companies that manufacture, distribute or repair industrial valves and actuators, have filed at least one set of formal UK accounts, and are approved by the BVAA Board.', icon: HowToRegOutlinedIcon },
  { q: 'Does BVAA membership certify your products?', a: 'No. It is a trade association membership, not a product approval. Product certificates, such as material certificates, PED, ATEX or fire-safe, are confirmed per item with your quotation.', icon: FactCheckOutlinedIcon },
  { q: 'How is it different from JOSCAR?', a: 'JOSCAR is a supplier pre-qualification register used by aerospace and defence buyers, renewed every year. BVAA is the trade association for the valve and actuator industry. Valvenok is registered on JOSCAR and is a BVAA member.', icon: CompareArrowsOutlinedIcon },
  { q: 'Where can I find BVAA members?', a: 'The BVAA website has a members directory and a product sourcing enquiry service for buyers.', icon: ManageSearchOutlinedIcon },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const card = { p: { xs: 2.25, md: 2.75 }, borderRadius: '20px', bgcolor: '#fff', border: `1px solid ${T.border}` } as const;
const iconBox = (bg = '#E8EEF8', fg = '#0051A0') =>
  ({ flexShrink: 0, width: 42, height: 42, borderRadius: '12px', bgcolor: bg, color: fg, display: 'grid', placeItems: 'center' }) as const;

/* ───────────── BVAA-style colours (navy, red, white) ───────────── */
const NAVY = '#0051A0'; // blue from the BVAA logo
const NAVY_DEEP = '#0051A0';
const RED = '#D3202F';
const HERO_IMG = 'https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/ball-valves-hero.webp';
// thin red / white / blue band, used as an accent on panels
const FLAG_BAND = `linear-gradient(90deg, ${RED} 0 33.3%, #fff 33.3% 66.6%, #3B7BE0 66.6% 100%)`;

const redBtn = { ...pillBtn(true), bgcolor: RED, color: '#fff', border: 0, '&:hover': { bgcolor: '#B01523', color: '#fff' } } as const;

const ENTRY: [string, React.ReactNode][] = [
  ['Tel', '+44 7368 137917'],
  ['Email', <span key="e" className="nocap">sales@valvenok.com</span>],
  ['Website', <span key="w" className="nocap">www.valvenok.com</span>],
  ['Distributor for', 'Panam Valves, Susin, Value Valves, KOSAPLUS, Mars'],
  ['Stockist for', 'Panam Valves, Mars Valvenok, SPAC Pneumatic UK, Hiflux UK'],
];

function RedKicker({ children }: { children: React.ReactNode }) {
  return <Box component="p" sx={{ m: 0, mb: 1.25, fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase !important', color: RED }}>{children}</Box>;
}

function Hero() {
  return (
    <Box component="section" sx={{ position: 'relative', bgcolor: '#fff' }}>
      {/* photo banner */}
      <Box sx={{ position: 'relative', overflow: 'hidden', minHeight: { xs: 560, md: 620 }, display: 'flex', alignItems: 'center', backgroundImage: `url(${HERO_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center 40%' }}>
        <Box aria-hidden sx={{ position: 'absolute', inset: 0, background: `linear-gradient(90deg, rgba(0,81,160,0.95) 0%, rgba(0,81,160,0.82) 42%, rgba(0,81,160,0.3) 100%)` }} />
        <Box aria-hidden sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 65%, rgba(0,81,160,0.6) 100%)' }} />
        <Box sx={{ ...wrap, position: 'relative', width: '100%', boxSizing: 'border-box', pt: { xs: 6, md: 8 }, pb: { xs: 18, md: 16 }, color: '#fff' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1.25 }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', px: 1.5, py: 0.75, borderRadius: '10px', bgcolor: '#fff', boxShadow: '0 8px 24px rgba(0,0,0,0.25)' }}>
              <Box component="img" src={LOGO} alt="BVAA" sx={{ display: 'block', height: { xs: 24, md: 30 }, width: 'auto' }} />
            </Box>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, px: 1.5, py: 0.75, borderRadius: 999, bgcolor: RED, fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase !important' }}>
              <EmojiEventsRoundedIcon sx={{ fontSize: 16 }} /> Member since 2026
            </Box>
          </Box>
          <Box component="h1" sx={{ m: 0, mt: 3, maxWidth: 760, fontSize: { xs: '2.9rem', sm: '3.6rem', md: '5rem' }, fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 0.98 }}>
            Proud BVAA<br />
            <Box component="span" sx={{ position: 'relative', whiteSpace: 'nowrap' }}>
              member
              <Box component="svg" aria-hidden viewBox="0 0 200 20" preserveAspectRatio="none" sx={{ position: 'absolute', left: 0, right: 0, bottom: { xs: -10, md: -14 }, width: '100%', height: { xs: 10, md: 16 } }}>
                <Box component="path" d="M2 14 C 50 2, 150 2, 198 12" fill="none" stroke={RED} strokeWidth="6" strokeLinecap="round"
                  sx={{ strokeDasharray: 220, strokeDashoffset: 220, '@keyframes draw': { to: { strokeDashoffset: 0 } }, animation: 'draw 1s .4s ease forwards', '@media (prefers-reduced-motion: reduce)': { animation: 'none', strokeDashoffset: 0 } }} />
              </Box>
            </Box>
          </Box>
          <Box component="p" sx={{ m: 0, mt: { xs: 3, md: 3.5 }, maxWidth: 600, fontSize: { xs: '1.05rem', md: '1.2rem' }, lineHeight: 1.7, color: 'rgba(255,255,255,0.88)' }}>
            Valvenok is now a member of the British Valve & Actuator Association, the UK trade association for companies that make, supply and service industrial valves and actuators.
          </Box>
          <Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            <Box component="a" href={LISTING} target="_blank" rel="noopener" sx={redBtn}>See our BVAA listing <OpenInNewRoundedIcon sx={{ fontSize: 16 }} /></Box>
            <Box component={Link} href="/contact" sx={{ ...pillBtn(false), color: '#fff', bgcolor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.5)', '&:hover': { bgcolor: '#fff', color: NAVY_DEEP } }}>
              Request a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* navy panel overlapping the banner, like the BVAA directory box */}
      <Box sx={{ ...wrap, position: 'relative', zIndex: 2, mt: { xs: -12, md: -10 }, pb: { xs: 6, md: 8 } }}>
        <Box sx={{ borderRadius: '6px', overflow: 'hidden', bgcolor: NAVY, color: '#fff', boxShadow: '0 30px 60px -25px rgba(0,81,160,0.55)' }}>
          <Box aria-hidden sx={{ height: 6, background: FLAG_BAND }} />
          <Box sx={{ px: { xs: 2.5, md: 5 }, pt: { xs: 3, md: 4 }, pb: { xs: 3, md: 3.5 } }}>
            <Box component="p" sx={{ m: 0, textAlign: 'center', fontSize: { xs: '1.15rem', md: '1.6rem' }, fontWeight: 400 }}>
              Valvenok Ltd · Member of the British Valve & Actuator Association
            </Box>
            <Box sx={{ mt: { xs: 2.5, md: 3 }, display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: { xs: 1, md: 1.5 } }}>
              {FACTS.map(([k, v]) => (
                <Box key={k} sx={{ bgcolor: '#fff', color: T.ink, borderRadius: '4px', px: { xs: 1.5, md: 2.25 }, py: { xs: 1.5, md: 1.75 } }}>
                  <Box sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase !important', color: NAVY }}>{k}</Box>
                  <Box sx={{ mt: 0.4, fontSize: { xs: '0.92rem', md: '1.02rem' }, fontWeight: 800, lineHeight: 1.3 }}>{v}</Box>
                </Box>
              ))}
            </Box>
            <Box component="nav" aria-label="On this page" sx={{ mt: { xs: 2.5, md: 3 }, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', columnGap: 1.5, rowGap: 0.75, fontSize: { xs: '0.9rem', md: '1rem' }, '& a': { color: '#fff', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }, '& span': { opacity: 0.5 } }}>
              <a href="#the-team">The team</a><span>|</span><a href="#the-plaque">The plaque</a><span>|</span><a href="#directory">Our directory entry</a><span>|</span><a href="#h2-means">What it means for you</a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Moment() {
  return (
    <Box component="section" id="the-team" aria-labelledby="h2-team" sx={{ scrollMarginTop: 140, py: { xs: 8, md: 12 }, bgcolor: '#fff', overflow: 'hidden' }}>
      <Box sx={{ ...wrap, display: 'grid', gridTemplateColumns: { xs: 'minmax(0,1fr)', md: '1.05fr 0.95fr' }, gap: { xs: 6, md: 9 }, alignItems: 'center' }}>
        <Box sx={{ position: 'relative', mx: { xs: 1.5, md: 0 } }}>
          <Box aria-hidden sx={{ position: 'absolute', inset: 0, transform: { xs: 'translate(12px, 12px)', md: 'translate(26px, 26px)' }, borderRadius: '28px', bgcolor: RED }} />
          <Box aria-hidden sx={{ position: 'absolute', inset: 0, transform: { xs: 'translate(-12px, -12px)', md: 'translate(-22px, -22px)' }, borderRadius: '28px', border: `3px solid ${NAVY}` }} />
          <Box component="img" src={TEAM_PHOTO} alt="The Valvenok team with our BVAA membership plaque" loading="lazy"
            sx={{ position: 'relative', display: 'block', width: '100%', aspectRatio: { xs: '4 / 5', md: '5 / 6' }, objectFit: 'cover', objectPosition: '50% 70%', borderRadius: '28px', boxShadow: '0 40px 80px -40px rgba(0,81,160,0.45)' }} />
          <Box sx={{ position: 'absolute', right: { xs: 12, md: -28 }, top: { xs: 16, md: 40 }, display: 'flex', alignItems: 'center', gap: 1.25, px: 2, py: 1.25, borderRadius: '14px', bgcolor: '#fff', boxShadow: '0 18px 40px -16px rgba(0,0,0,0.4)' }}>
            <Box sx={{ width: 36, height: 36, borderRadius: '50%', bgcolor: RED, color: '#fff', display: 'grid', placeItems: 'center' }}><WorkspacePremiumRoundedIcon sx={{ fontSize: 20 }} /></Box>
            <Box>
              <Box sx={{ fontSize: '0.95rem', fontWeight: 800, color: T.ink, lineHeight: 1.2 }}>BVAA member</Box>
              <Box sx={{ fontSize: '0.75rem', fontWeight: 600, color: T.muted }}>Since 2026</Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box sx={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase !important', color: RED }}>The team</Box>
          <Box component="h2" id="h2-team" sx={{ m: 0, mt: 1.5, fontSize: { xs: '2.1rem', md: '3rem' }, fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.05, color: NAVY_DEEP }}>
            A milestone for the whole team
          </Box>
          <Box component="p" sx={{ m: 0, mt: 2.5, fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.75, color: T.body }}>
            Joining the BVAA puts Valvenok alongside the UK’s valve and actuator manufacturers, distributors and service companies. Here is the team with the plaque that marks it.
          </Box>
          <Box component="ul" sx={{ m: 0, mt: 3.5, p: 0, listStyle: 'none', display: 'grid', gap: 1.5 }}>
            {['A UK registered company with filed accounts', 'Working in industrial valves and actuators', 'Approved by the BVAA Board', 'Listed in the BVAA members directory'].map((t) => (
              <Box component="li" key={t} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, fontSize: '1rem', fontWeight: 600, color: T.ink }}>
                <Box sx={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', bgcolor: NAVY, color: '#fff', display: 'grid', placeItems: 'center' }}><CheckRoundedIcon sx={{ fontSize: 17 }} /></Box>
                {t}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// The plaque, shown big under a spotlight; it tilts toward the pointer.
function Plaque() {
  const ref = React.useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1200px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    el.style.setProperty('--shine-x', `${(x + 0.5) * 100}%`);
  };
  const reset = () => { if (ref.current) ref.current.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg)'; };
  return (
    <Box component="section" id="the-plaque" aria-labelledby="h2-plaque" sx={{ scrollMarginTop: 140, position: 'relative', overflow: 'hidden', py: { xs: 9, md: 13 }, color: '#fff',
      background: `radial-gradient(900px 520px at 50% 0%, rgba(120,175,255,0.55), transparent 65%), linear-gradient(180deg, #0A62C2 0%, ${NAVY} 45%, #00468C 100%)` }}>
      {/* spotlight beams from the top */}
      <Box aria-hidden sx={{ position: 'absolute', left: '50%', top: -120, width: 1400, height: 1100, transform: 'translateX(-50%)', background: 'conic-gradient(from 180deg at 50% 0%, transparent 0deg 150deg, rgba(255,255,255,0.10) 160deg, transparent 168deg, rgba(255,255,255,0.08) 178deg, transparent 186deg, rgba(255,255,255,0.10) 196deg, transparent 206deg, transparent 360deg)', maskImage: 'linear-gradient(180deg, #000 0%, transparent 85%)', pointerEvents: 'none' }} />
      {/* fine dot grid */}
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1.5px)', backgroundSize: '22px 22px', maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 35%, #000 100%)', pointerEvents: 'none' }} />
      {/* giant outlined watermark */}
      <Box aria-hidden sx={{ position: 'absolute', left: '50%', top: { xs: '42%', md: '46%' }, transform: 'translate(-50%, -50%)', whiteSpace: 'nowrap', fontSize: { xs: '9rem', md: '22rem' }, fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.04em', lineHeight: 1, color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.09)', userSelect: 'none', pointerEvents: 'none' }}>BVAA</Box>
      {/* red / white diagonal ribbons in the corners */}
      {[{ s: { left: -120, bottom: 80 }, r: -35 }, { s: { right: -120, top: 120 }, r: -35 }].map((o, i) => (
        <Box key={i} aria-hidden sx={{ position: 'absolute', ...o.s, width: 440, height: 30, transform: `rotate(${o.r}deg)`, display: { xs: 'none', md: 'block' }, background: `linear-gradient(180deg, transparent 0 20%, #fff 20% 32%, ${RED} 32% 68%, #fff 68% 80%, transparent 80%)`, opacity: 0.95, pointerEvents: 'none' }} />
      ))}
      <Box aria-hidden sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: FLAG_BAND }} />

      <Box sx={{ ...wrap, position: 'relative', textAlign: 'center' }}>
        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 1.75, py: 0.6, borderRadius: 999, bgcolor: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.3)', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase !important' }}>
          <WorkspacePremiumRoundedIcon sx={{ fontSize: 16, color: '#FFD66B' }} /> The plaque
        </Box>
        <Box component="h2" id="h2-plaque" sx={{ m: 0, mt: 2, mx: 'auto', maxWidth: 820, fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.08, textShadow: '0 4px 30px rgba(0,30,80,0.35)' }}>
          Member of the British Valve & Actuator Association
        </Box>

        <Box sx={{ position: 'relative', mt: { xs: 5, md: 7 }, mx: 'auto', maxWidth: 1100, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr minmax(0, 680px) 1fr' }, alignItems: 'center', gap: { xs: 3, md: 4 } }}>
          {/* left badge */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            <Box sx={{ px: 2.5, py: 2, borderRadius: '18px', bgcolor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.28)', backdropFilter: 'blur(8px)', textAlign: 'left', transform: 'rotate(-4deg)' }}>
              <Box sx={{ fontSize: '2.2rem', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em' }}>2026</Box>
              <Box sx={{ mt: 0.5, fontSize: '0.82rem', color: 'rgba(255,255,255,0.85)' }}>Member since</Box>
            </Box>
          </Box>

          {/* the plaque, with a soft glow and a floor reflection */}
          <Box onMouseMove={onMove} onMouseLeave={reset} sx={{ position: 'relative' }}>
            <Box aria-hidden sx={{ position: 'absolute', inset: '-8% -10%', background: 'radial-gradient(closest-side, rgba(255,255,255,0.45), transparent)', filter: 'blur(20px)', pointerEvents: 'none' }} />
            <Box ref={ref} sx={{ position: 'relative', borderRadius: '10px', boxShadow: '0 40px 80px -30px rgba(0,20,60,0.7), 0 0 0 1px rgba(255,255,255,0.25)', transition: 'transform .25s ease-out', '--shine-x': '30%', overflow: 'hidden' }}>
              <Box component="img" src={PLAQUE_PHOTO} alt="BVAA plaque: Member of The British Valve & Actuator Association" loading="lazy"
                sx={{ display: 'block', width: '100%', height: 'auto' }} />
              <Box aria-hidden sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(260px 520px at var(--shine-x) 30%, rgba(255,255,255,0.18), transparent 70%)' }} />
            </Box>
            {/* reflection */}
            <Box aria-hidden sx={{ position: 'relative', mt: 1, height: { xs: 36, md: 60 }, overflow: 'hidden', transform: 'scaleY(-1)', opacity: 0.12, borderRadius: '10px', maskImage: 'linear-gradient(0deg, #000 0%, transparent 100%)', pointerEvents: 'none' }}>
              <Box component="img" src={PLAQUE_PHOTO} alt="" sx={{ display: 'block', width: '100%', height: 'auto', position: 'absolute', bottom: 0 }} />
            </Box>
          </Box>

          {/* right badge */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start' }}>
            <Box sx={{ px: 2.5, py: 2, borderRadius: '18px', bgcolor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.28)', backdropFilter: 'blur(8px)', textAlign: 'left', transform: 'rotate(4deg)' }}>
              <Box sx={{ fontSize: '2.2rem', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em' }}>160+</Box>
              <Box sx={{ mt: 0.5, fontSize: '0.82rem', color: 'rgba(255,255,255,0.85)' }}>Member companies</Box>
            </Box>
          </Box>
        </Box>

        <Box component="p" sx={{ m: 0, mt: { xs: 2, md: 1 }, mx: 'auto', maxWidth: 620, fontSize: { xs: '0.98rem', md: '1.05rem' }, lineHeight: 1.7, color: 'rgba(255,255,255,0.88)' }}>
          The plaque marks our membership of the association. You can check it any time in the BVAA members directory.
        </Box>
        <Box sx={{ mt: 3 }}>
          <Box component="a" href={LISTING} target="_blank" rel="noopener" sx={{ ...redBtn, boxShadow: '0 12px 30px -10px rgba(211,32,47,0.7)' }}>
            <VerifiedRoundedIcon sx={{ fontSize: 18 }} /> Verify on <span className="nocap">bvaa.org.uk</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function DirectoryEntry() {
  return (
    <Box component="section" id="directory" aria-labelledby="h2-dir" sx={{ scrollMarginTop: 140, py: { xs: 8, md: 11 }, bgcolor: '#F4F6FA' }}>
      <Box sx={{ ...wrap, maxWidth: 1000 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 } }}>
          <Box sx={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase !important', color: RED }}>Find us in the directory</Box>
          <Box component="h2" id="h2-dir" sx={{ m: 0, mt: 1.5, fontSize: { xs: '2rem', md: '2.6rem' }, fontWeight: 800, letterSpacing: '-0.03em', color: NAVY }}>Our BVAA directory entry</Box>
        </Box>
        <Box sx={{ borderRadius: '6px', overflow: 'hidden', bgcolor: '#fff', boxShadow: '0 30px 60px -35px rgba(0,81,160,0.35)', border: '1px solid #DCE3EE' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, px: { xs: 2.5, md: 4 }, py: 1.5, bgcolor: NAVY, color: '#fff' }}>
            <Box sx={{ fontSize: '0.95rem' }}>BVAA member directory</Box>
            <Box sx={{ px: 1, py: 0.4, borderRadius: '4px', bgcolor: '#fff' }}><Box component="img" src={LOGO} alt="" sx={{ display: 'block', height: 16, width: 'auto' }} /></Box>
          </Box>
          <Box sx={{ px: { xs: 2.5, md: 4 }, py: { xs: 3, md: 4 } }}>
            <Box sx={{ fontSize: { xs: '1.6rem', md: '2.1rem' }, fontWeight: 800, color: NAVY, letterSpacing: '-0.02em' }}>Valvenok Limited</Box>
            <Box sx={{ mt: 1, display: 'flex', alignItems: 'flex-start', gap: 1, fontWeight: 700, color: T.ink }}>
              <PlaceRoundedIcon sx={{ fontSize: 20, color: NAVY, mt: 0.2 }} /> St Edburg’s Hall, Priory Road, Bicester, Oxfordshire, <span className="nocap">OX26 6BL</span>
            </Box>
            <Box component="dl" sx={{ m: 0, mt: 3 }}>
              {ENTRY.map(([k, v]) => (
                <Box key={k} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '170px 1fr' }, gap: { xs: 0.25, sm: 2 }, py: 1.5, borderTop: '1px solid #E3E8F0' }}>
                  <Box component="dt" sx={{ fontWeight: 800, color: NAVY }}>{k}:</Box>
                  <Box component="dd" sx={{ m: 0, color: T.body }}>{v}</Box>
                </Box>
              ))}
            </Box>
            <Box sx={{ mt: 3 }}>
              <Box component="a" href={LISTING} target="_blank" rel="noopener" sx={redBtn}>View our entry on <span className="nocap">bvaa.org.uk</span> <OpenInNewRoundedIcon sx={{ fontSize: 16 }} /></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function BvaaMemberPage() {
  return (
    <Box sx={{ ...textReset, bgcolor: '#fff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Hero />
      <Moment />
      <Plaque />
      <DirectoryEntry />

      {/* ── WHAT THE BVAA DOES ── */}
      <Box component="section" aria-labelledby="h2-work" sx={{ py: { xs: 7, md: 10 } }}>
        <Box sx={{ ...wrap, display: 'grid', gridTemplateColumns: { xs: 'minmax(0,1fr)', md: '0.9fr 1.1fr' }, gap: { xs: 4, md: 7 }, alignItems: 'stretch' }}>
          {/* left: statement and figures on a blue panel */}
          <Box sx={{ display: 'flex', flexDirection: 'column', p: { xs: 3, md: 4.5 }, borderRadius: '28px', color: T.ink, border: `1px solid #D3DDEE`, background: `radial-gradient(420px 260px at 100% 0%, rgba(211,32,47,0.10), transparent 70%), linear-gradient(180deg, ${'#E8EEF8'} 0%, #FFFFFF 100%)`, overflow: 'hidden' }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase !important', color: NAVY }}>
              <Box component="span" sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: RED }} /> What the BVAA does
            </Box>
            <Box component="h2" id="h2-work" sx={{ m: 0, mt: 1.5, fontSize: { xs: '1.75rem', md: '2.3rem' }, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.12, color: T.ink }}>The UK voice of the valve industry</Box>
            <Box component="p" sx={{ m: 0, mt: 1.5, fontSize: '1rem', lineHeight: 1.7, color: T.body }}>The BVAA brings UK valve and actuator companies together on standards, training and technical knowledge.</Box>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', py: { xs: 3, md: 4 } }}>
              <Box sx={{ pl: 2.25, borderLeft: `3px solid ${RED}` }}>
                <Box component="p" sx={{ m: 0, fontSize: { xs: '1rem', md: '1.08rem' }, fontWeight: 700, lineHeight: 1.55, color: T.ink }}>
                  Why it matters to you
                </Box>
                <Box component="p" sx={{ m: 0, mt: 1, fontSize: '0.95rem', lineHeight: 1.7, color: T.body }}>
                  As a member, Valvenok works alongside the UK’s valve and actuator manufacturers, distributors and service companies, with access to the association’s technical reports, guides and brand-independent training. It keeps us close to the standards and practice behind the valves we supply.
                </Box>
              </Box>
            </Box>
            <Box sx={{ mt: { xs: 3.5, md: 0 }, pt: 3, borderTop: '1px solid #D3DDEE', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
              {[['50+', 'standards committees'], ['160+', 'member companies'], ['1964', 'Users’ Manual first published']].map(([v, l]) => (
                <Box key={l}>
                  <Box sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, color: NAVY }}>{v}</Box>
                  <Box sx={{ mt: 0.75, fontSize: '0.78rem', lineHeight: 1.4, color: T.body }}>{l}</Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* right: the four areas as an icon list */}
          <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
            {WORK.map(({ icon: Icon, t, b }, i) => (
              <Box component="li" key={t} sx={{ display: 'flex', gap: 2.5, py: { xs: 2.5, md: 3 }, borderTop: i ? `1px solid ${T.border}` : 'none' }}>
                <Box sx={{ flexShrink: 0, width: 52, height: 52, borderRadius: '16px', bgcolor: '#E8EEF8', color: NAVY, display: 'grid', placeItems: 'center', '& svg': { fontSize: 26 } }}><Icon /></Box>
                <Box>
                  <Box component="h3" sx={{ m: 0, fontSize: '1.15rem', fontWeight: 800, color: T.ink }}>{t}</Box>
                  <Box component="p" sx={{ m: 0, mt: 0.75, fontSize: '0.95rem', color: T.body, lineHeight: 1.65 }}>{b}</Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── HOW MEMBERSHIP WORKS ── */}
      <Box component="section" aria-labelledby="h2-join" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface }}>
        <Box sx={wrap}>
          <Box sx={{ mb: 4 }}>
            <RedKicker>Membership</RedKicker>
            <H2 id="h2-join">What it took to join</H2>
            <Lead>BVAA membership is not open to everyone. It is for established UK companies working in valves and actuators, and Valvenok met each requirement before the Board approved our application.</Lead>
          </Box>
          <Box component="ol" sx={{ m: 0, p: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, borderRadius: '24px', bgcolor: '#fff', border: `1px solid ${T.border}`, overflow: 'hidden' }}>
            {JOIN.map((j, i) => (
              <Box component="li" key={j.t} sx={{ px: { xs: 2.5, md: 3.5 }, py: { xs: 3, md: 4 }, borderLeft: { md: i ? `1px solid ${T.border}` : 'none' }, borderTop: { xs: i ? `1px solid ${T.border}` : 'none', md: 'none' } }}>
                <Box aria-hidden sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                  <Box sx={{ fontSize: { xs: '2.4rem', md: '3rem' }, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: '#E8EEF8', WebkitTextStroke: `1.5px ${NAVY}` }}>{String(i + 1).padStart(2, '0')}</Box>
                  <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, px: 1.25, py: 0.4, borderRadius: 999, bgcolor: NAVY, color: '#fff', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.02em' }}><CheckRoundedIcon sx={{ fontSize: 15 }} /> Met</Box>
                </Box>
                <Box component="h3" sx={{ m: 0, fontSize: '1.05rem', fontWeight: 800, color: T.ink }}>{j.t}</Box>
                <Box component="p" sx={{ m: 0, mt: 0.75, fontSize: '0.9rem', color: T.body, lineHeight: 1.6 }}>{j.b}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── WHAT IT MEANS / DOESN'T ── */}
      <Box component="section" aria-labelledby="h2-means" sx={{ py: { xs: 7, md: 10 } }}>
        <Box sx={wrap}>
          <Box sx={{ mb: 4 }}>
            <RedKicker>For buyers</RedKicker>
            <H2 id="h2-means">What it means, and what it doesn’t</H2>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'minmax(0,1fr)', md: '1.2fr 1fr' }, gap: 2 }}>
            {([['What it means for you', MEANS, true], ['What it doesn’t cover', NOT, false]] as const).map(([title, list, good]) => (
              <Box key={title} sx={{ ...card, borderColor: good ? '#C9D6EC' : '#F2D3A0', background: good ? `linear-gradient(180deg, ${'#E8EEF8'} 0%, #fff 60%)` : 'linear-gradient(180deg, #FFF7EA 0%, #fff 60%)' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase !important', color: good ? NAVY : '#A15C07' }}>
                  {good ? <CheckRoundedIcon sx={{ fontSize: 18 }} /> : <CloseRoundedIcon sx={{ fontSize: 18 }} />} {title}
                </Box>
                <Box sx={{ display: 'grid', gap: 1.75 }}>
                  {list.map((m) => (
                    <Box key={m.t} sx={{ display: 'flex', gap: 1.5 }}>
                      <Box sx={{ ...iconBox(good ? NAVY : '#F5B451', '#fff'), width: 26, height: 26, borderRadius: '50%', mt: 0.25 }}>{good ? <CheckRoundedIcon sx={{ fontSize: 16 }} /> : <CloseRoundedIcon sx={{ fontSize: 16 }} />}</Box>
                      <Box>
                        <Box component="h3" sx={{ m: 0, fontSize: '0.98rem', fontWeight: 800, color: T.ink }}>{m.t}</Box>
                        <Box component="p" sx={{ m: 0, mt: 0.25, fontSize: '0.9rem', color: T.body, lineHeight: 1.6 }}>{m.b}</Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
                {!good && (
                  <Box component="p" sx={{ m: 0, mt: 2.25, pt: 2, borderTop: '1px dashed #F2D3A0', fontSize: '0.88rem', color: T.body }}>
                    See also our <Box component={Link} href="/joscar-registered" sx={{ color: NAVY, fontWeight: 700 }}>JOSCAR registration</Box> and <Box component={Link} href="/quality" sx={{ color: NAVY, fontWeight: 700 }}>Quality page</Box>.
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── FAQ ── */}
      <Box component="section" aria-labelledby="h2-faq" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface }}>
        <Box sx={{ ...wrap, maxWidth: 900 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <RedKicker>FAQ</RedKicker>
            <H2 id="h2-faq">BVAA questions</H2>
          </Box>
          <Box sx={{ display: 'grid', gap: 1.25 }}>
            {FAQS.map((f, i) => (
              <Box component="details" key={f.q} open={i === 0}
                sx={{
                  borderRadius: '16px', bgcolor: '#fff', border: `1px solid ${T.border}`,
                  '& summary': { listStyle: 'none', cursor: 'pointer', px: 2.5, py: 2, fontWeight: 700, color: T.ink, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 },
                  '& summary::-webkit-details-marker': { display: 'none' },
                  '& summary::after': { content: '"+"', flexShrink: 0, width: 28, height: 28, borderRadius: '50%', bgcolor: '#E8EEF8', color: NAVY, fontWeight: 800, display: 'grid', placeItems: 'center', lineHeight: '28px', textAlign: 'center' },
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
          <Box sx={{ position: 'relative', overflow: 'hidden', p: { xs: 3.5, md: 6 }, borderRadius: '6px', color: '#fff', background: `radial-gradient(500px 300px at 100% 0%, rgba(211,32,47,0.35), transparent 70%), linear-gradient(120deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)`, borderTop: '6px solid', borderImage: `${FLAG_BAND} 1`, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 3 }}>
            <Box>
              <Box component="h2" id="h2-cta" sx={{ m: 0, mb: 1, fontSize: { xs: '1.6rem', md: '2.2rem' }, fontWeight: 800, letterSpacing: '-0.03em', color: '#fff' }}>Need valves or actuators?</Box>
              <Box component="p" sx={{ m: 0, maxWidth: 640, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' }}>
                Send us the specification and we’ll come back with availability, pricing and the documentation you need.
              </Box>
            </Box>
            <Box sx={{ flexShrink: 0 }}>
              <Box component={Link} href="/contact" sx={pillBtn(true)}>Request a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} /></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
