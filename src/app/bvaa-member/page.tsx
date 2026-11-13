'use client';

// BVAA member page, in the same style as the JOSCAR page. Facts about the
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
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import { T, textReset } from '@/src/app/Landing/modern/tokens';
import { wrap, Kicker, H2, Lead, pillBtn } from '@/src/app/hydrogen-cryogenic/components/HydrogenHub';

const LOGO = 'https://pblol2.blob.core.windows.net/valvenok-images/certfiicates/bvaa-logo.png';
const BVAA = 'https://www.bvaa.org.uk/';
const BLUE = '#1E4FA3';

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
  { t: 'Listed in the BVAA directory', b: 'Buyers can find BVAA members through the association’s members directory and product sourcing service.' },
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
const iconBox = (bg = T.greenSoft, fg = T.greenDark) =>
  ({ flexShrink: 0, width: 42, height: 42, borderRadius: '12px', bgcolor: bg, color: fg, display: 'grid', placeItems: 'center' }) as const;

export default function BvaaMemberPage() {
  return (
    <Box sx={{ ...textReset, bgcolor: '#fff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ── */}
      <Box component="section" sx={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #F3F7FD 0%, #FFFFFF 100%)', pt: { xs: 5, md: 8 }, pb: { xs: 5, md: 7 } }}>
        <Box aria-hidden sx={{ position: 'absolute', right: '-10%', top: '-30%', width: 720, height: 720, borderRadius: '50%', background: 'radial-gradient(circle, rgba(30,79,163,0.10), transparent 65%)' }} />
        <Box sx={{ ...wrap, position: 'relative', display: 'grid', gridTemplateColumns: { xs: 'minmax(0,1fr)', md: '1.1fr 0.9fr' }, gap: { xs: 4, md: 7 }, alignItems: 'center' }}>
          <Box>
            <Kicker>Industry membership</Kicker>
            <Box component="h1" sx={{ m: 0, fontSize: { xs: '2.5rem', md: '3.8rem' }, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: T.ink }}>
              BVAA <Box component="span" sx={{ color: BLUE }}>member</Box>
            </Box>
            <Box component="p" sx={{ m: 0, mt: 2.5, maxWidth: 560, fontSize: { xs: '1.02rem', md: '1.12rem' }, lineHeight: 1.7, color: T.body }}>
              Valvenok is a member of the British Valve & Actuator Association, the UK trade association for companies that make, supply and service industrial valves and actuators.
            </Box>
            <Box sx={{ mt: 3.5, display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              <Box component={Link} href="/contact" sx={pillBtn(true)}>Request a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} /></Box>
              <Box component="a" href={BVAA} target="_blank" rel="noopener" sx={pillBtn(false)}>Visit the BVAA <OpenInNewRoundedIcon sx={{ fontSize: 16 }} /></Box>
            </Box>
          </Box>

          <Box sx={{ position: 'relative', maxWidth: 480, width: '100%', mx: 'auto' }}>
            <Box sx={{ aspectRatio: '4 / 3', borderRadius: '36px', border: `1px solid ${T.border}`, background: 'radial-gradient(70% 70% at 25% 20%, #E3ECFA 0%, transparent 60%), radial-gradient(70% 70% at 85% 90%, #FBE6E6 0%, transparent 60%), #FFFFFF', boxShadow: T.shadow, display: 'grid', placeItems: 'center', p: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Box component="img" src={LOGO} alt="BVAA, British Valve & Actuator Association" sx={{ width: { xs: 220, md: 280 }, height: 'auto', display: 'block', mx: 'auto' }} />
                <Box sx={{ mt: 2.5, fontSize: '0.95rem', fontWeight: 700, color: T.ink }}>British Valve & Actuator Association</Box>
                <Box sx={{ mt: 0.5, fontSize: '0.82rem', color: T.muted }}>Member company: Valvenok Ltd</Box>
              </Box>
            </Box>
            <Box sx={{ position: 'absolute', left: { xs: 8, md: -28 }, bottom: { xs: -18, md: -22 }, display: 'flex', alignItems: 'center', gap: 1.25, px: 1.75, py: 1.25, borderRadius: '16px', bgcolor: '#fff', border: `1px solid ${T.border}`, boxShadow: T.shadowHover }}>
              <Box sx={{ ...iconBox(BLUE, '#fff'), width: 34, height: 34, borderRadius: '50%' }}><GroupsOutlinedIcon sx={{ fontSize: 19 }} /></Box>
              <Box>
                <Box sx={{ fontSize: '0.92rem', fontWeight: 800, color: T.ink, lineHeight: 1.2 }}>One of 160+ members</Box>
                <Box sx={{ fontSize: '0.76rem', fontWeight: 600, color: T.muted }}>UK valve and actuator companies</Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ ...wrap, position: 'relative', mt: { xs: 5, md: 7 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, borderRadius: '22px', bgcolor: '#fff', border: `1px solid ${T.border}`, boxShadow: T.shadow, overflow: 'hidden' }}>
            {FACTS.map(([k, v], i) => (
              <Box key={k} sx={{ px: { xs: 2, md: 2.75 }, py: { xs: 1.75, md: 2.25 }, borderLeft: { md: i ? `1px solid ${T.border}` : 'none' }, borderTop: { xs: i > 1 ? `1px solid ${T.border}` : 'none', md: 'none' }, borderRight: { xs: i % 2 === 0 ? `1px solid ${T.border}` : 'none', md: 'none' } }}>
                <Box sx={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase !important', color: T.muted }}>{k}</Box>
                <Box sx={{ mt: 0.4, fontSize: { xs: '0.95rem', md: '1.05rem' }, fontWeight: 800, color: T.ink, lineHeight: 1.3 }}>{v}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── WHAT THE BVAA DOES ── */}
      <Box component="section" aria-labelledby="h2-work" sx={{ py: { xs: 7, md: 10 } }}>
        <Box sx={{ ...wrap, display: 'grid', gridTemplateColumns: { xs: 'minmax(0,1fr)', md: '0.9fr 1.1fr' }, gap: { xs: 4, md: 7 }, alignItems: 'stretch' }}>
          {/* left: statement and figures on a blue panel */}
          <Box sx={{ display: 'flex', flexDirection: 'column', p: { xs: 3, md: 4.5 }, borderRadius: '28px', color: T.ink, border: `1px solid #CFE6C8`, background: `radial-gradient(420px 260px at 100% 0%, rgba(97,214,73,0.16), transparent 70%), linear-gradient(180deg, ${T.greenSoft} 0%, #FFFFFF 100%)`, overflow: 'hidden' }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase !important', color: T.greenDark }}>
              <Box component="span" sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: T.green }} /> What the BVAA does
            </Box>
            <Box component="h2" id="h2-work" sx={{ m: 0, mt: 1.5, fontSize: { xs: '1.75rem', md: '2.3rem' }, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.12, color: T.ink }}>The UK voice of the valve industry</Box>
            <Box component="p" sx={{ m: 0, mt: 1.5, fontSize: '1rem', lineHeight: 1.7, color: T.body }}>The BVAA brings UK valve and actuator companies together on standards, training and technical knowledge.</Box>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', py: { xs: 3, md: 4 } }}>
              <Box sx={{ pl: 2.25, borderLeft: `3px solid ${T.green}` }}>
                <Box component="p" sx={{ m: 0, fontSize: { xs: '1rem', md: '1.08rem' }, fontWeight: 700, lineHeight: 1.55, color: T.ink }}>
                  Why it matters to you
                </Box>
                <Box component="p" sx={{ m: 0, mt: 1, fontSize: '0.95rem', lineHeight: 1.7, color: T.body }}>
                  As a member, Valvenok works alongside the UK’s valve and actuator manufacturers, distributors and service companies, with access to the association’s technical reports, guides and brand-independent training. It keeps us close to the standards and practice behind the valves we supply.
                </Box>
              </Box>
            </Box>
            <Box sx={{ mt: { xs: 3.5, md: 0 }, pt: 3, borderTop: '1px solid #CFE6C8', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
              {[['50+', 'standards committees'], ['160+', 'member companies'], ['1964', 'Users’ Manual first published']].map(([v, l]) => (
                <Box key={l}>
                  <Box sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, color: T.greenDark }}>{v}</Box>
                  <Box sx={{ mt: 0.75, fontSize: '0.78rem', lineHeight: 1.4, color: T.body }}>{l}</Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* right: the four areas as an icon list */}
          <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
            {WORK.map(({ icon: Icon, t, b }, i) => (
              <Box component="li" key={t} sx={{ display: 'flex', gap: 2.5, py: { xs: 2.5, md: 3 }, borderTop: i ? `1px solid ${T.border}` : 'none' }}>
                <Box sx={{ flexShrink: 0, width: 52, height: 52, borderRadius: '16px', bgcolor: T.greenSoft, color: T.greenDark, display: 'grid', placeItems: 'center', '& svg': { fontSize: 26 } }}><Icon /></Box>
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
            <Kicker>Membership</Kicker>
            <H2 id="h2-join">Who can be a member</H2>
            <Lead>BVAA membership is not open to everyone: it is for established UK companies working in valves and actuators.</Lead>
          </Box>
          <Box component="ol" sx={{ m: 0, p: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, borderRadius: '24px', bgcolor: '#fff', border: `1px solid ${T.border}`, overflow: 'hidden' }}>
            {JOIN.map((j, i) => (
              <Box component="li" key={j.t} sx={{ px: { xs: 2.5, md: 3.5 }, py: { xs: 3, md: 4 }, borderLeft: { md: i ? `1px solid ${T.border}` : 'none' }, borderTop: { xs: i ? `1px solid ${T.border}` : 'none', md: 'none' } }}>
                <Box aria-hidden sx={{ fontSize: { xs: '2.4rem', md: '3rem' }, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: T.greenSoft, WebkitTextStroke: `1.5px ${T.greenDark}`, mb: 2 }}>{String(i + 1).padStart(2, '0')}</Box>
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
            <Kicker>For buyers</Kicker>
            <H2 id="h2-means">What it means, and what it doesn’t</H2>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'minmax(0,1fr)', md: '1.2fr 1fr' }, gap: 2 }}>
            {([['What it means for you', MEANS, true], ['What it doesn’t cover', NOT, false]] as const).map(([title, list, good]) => (
              <Box key={title} sx={{ ...card, borderColor: good ? '#BFE3B4' : '#F2D3A0', background: good ? `linear-gradient(180deg, ${T.greenSoft} 0%, #fff 60%)` : 'linear-gradient(180deg, #FFF7EA 0%, #fff 60%)' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase !important', color: good ? T.greenDark : '#A15C07' }}>
                  {good ? <CheckRoundedIcon sx={{ fontSize: 18 }} /> : <CloseRoundedIcon sx={{ fontSize: 18 }} />} {title}
                </Box>
                <Box sx={{ display: 'grid', gap: 1.75 }}>
                  {list.map((m) => (
                    <Box key={m.t} sx={{ display: 'flex', gap: 1.5 }}>
                      <Box sx={{ ...iconBox(good ? T.green : '#F5B451', '#fff'), width: 26, height: 26, borderRadius: '50%', mt: 0.25 }}>{good ? <CheckRoundedIcon sx={{ fontSize: 16 }} /> : <CloseRoundedIcon sx={{ fontSize: 16 }} />}</Box>
                      <Box>
                        <Box component="h3" sx={{ m: 0, fontSize: '0.98rem', fontWeight: 800, color: T.ink }}>{m.t}</Box>
                        <Box component="p" sx={{ m: 0, mt: 0.25, fontSize: '0.9rem', color: T.body, lineHeight: 1.6 }}>{m.b}</Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
                {!good && (
                  <Box component="p" sx={{ m: 0, mt: 2.25, pt: 2, borderTop: '1px dashed #F2D3A0', fontSize: '0.88rem', color: T.body }}>
                    See also our <Box component={Link} href="/joscar-registered" sx={{ color: T.greenDark, fontWeight: 700 }}>JOSCAR registration</Box> and <Box component={Link} href="/quality" sx={{ color: T.greenDark, fontWeight: 700 }}>Quality page</Box>.
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
            <Kicker>FAQ</Kicker>
            <H2 id="h2-faq">BVAA questions</H2>
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
          <Box sx={{ p: { xs: 3.5, md: 6 }, borderRadius: '28px', background: 'linear-gradient(120deg, #E9F8E4 0%, #EAF1FC 60%, #FDEDED 100%)', border: `1px solid ${T.border}`, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 3 }}>
            <Box>
              <Box component="h2" id="h2-cta" sx={{ m: 0, mb: 1, fontSize: { xs: '1.6rem', md: '2.2rem' }, fontWeight: 800, letterSpacing: '-0.03em', color: T.ink }}>Need valves or actuators?</Box>
              <Box component="p" sx={{ m: 0, maxWidth: 640, lineHeight: 1.7, color: T.body }}>
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
