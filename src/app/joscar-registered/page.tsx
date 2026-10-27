'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { alpha } from '@mui/material/styles';

const DISPLAY_FONT = '"Barlow Condensed", sans-serif';

// Fields to complete from the JOSCAR register entry itself. See Block 4 of the
// build sheet — validity date matters because submissions expire after one year.
const REGISTRATION = [
  { label: 'Register', value: 'JOSCAR — Joint Supply Chain Accreditation Register' },
  { label: 'Registered entity', value: '[ legal entity name as it appears on the register ]' },
  { label: 'Supplier / registration number', value: '[ ]' },
  { label: 'Stage reached', value: '[ Stage 1 / Stage 2 / validated ]' },
  { label: 'Valid until', value: '[ ]' },
  { label: 'Administered by', value: 'Hellios Information Ltd' },
];

const ASSESSMENT_SCOPE = [
  'Company structure, ownership and personnel',
  'Financial standing and insurance cover',
  'Quality management systems',
  'Health and safety, and safety assurance',
  'Cyber security and data privacy',
  'Environmental management',
  'Legal, ethical and modern slavery obligations',
  'Supply chain management',
  'Business continuity',
  'Import and export controls',
  'Counterfeit product controls',
];

const PROCUREMENT_MEANING = [
  {
    title: 'Pre-qualification is already done',
    body: 'Our financial, quality, cyber and governance data sits on a register your organisation may already subscribe to.',
  },
  {
    title: 'Onboarding is shorter',
    body: 'Sourcing from a registered supplier removes a due diligence step from the front of the process — which matters most on urgent spares, where that step is the delay.',
  },
  {
    title: 'The standard is common, not bespoke',
    body: 'You are not taking our word for our own compliance; you are reading an assessment built to a standard the sector agreed on.',
  },
  {
    title: 'It is current, not historical',
    body: 'Annual renewal means a live registration reflects our standing now.',
  },
  {
    title: 'It complements product-level compliance',
    body: 'JOSCAR qualifies us as a supplier; ISO 9001, PED, ATEX and NACE MR0175 qualify what we supply.',
  },
];

const NOT_COVERED = [
  {
    title: 'It is not a product approval',
    body: 'Pressure ratings, materials, sour service compliance and hazardous area certification are separate, and specified per item.',
  },
  {
    title: 'It is not a security clearance',
    body: 'Personnel clearance and facility accreditation are handled under different regimes.',
  },
  {
    title: "It is not an accreditation body's certification",
    body: 'JOSCAR is a shared register of assured supplier data, administered by Hellios; it is not a certification scheme in the sense that ISO 9001 is.',
  },
  {
    title: 'It does not replace your own specification review',
    body: 'It removes the supplier due diligence step, not the engineering one.',
  },
];

const CREDENTIALS = [
  { credential: 'JOSCAR registration', qualifies: 'Valvenok as a supplier — financial, quality, cyber, governance', level: 'Company' },
  { credential: 'ISO 9001', qualifies: 'Quality management system', level: 'Company' },
  { credential: 'PED 2014/68/EU', qualifies: 'Pressure equipment conformity', level: 'Product' },
  { credential: 'ATEX', qualifies: 'Equipment for potentially explosive atmospheres', level: 'Product' },
  { credential: 'NACE MR0175 / ISO 15156', qualifies: 'Materials for sour service', level: 'Product / material' },
  { credential: 'Hydrogen service (H₂-ready)', qualifies: 'Suitability for hydrogen duty', level: 'Product' },
];

const FAQS = [
  {
    q: 'What is JOSCAR?',
    a: 'JOSCAR — the Joint Supply Chain Accreditation Register — is a shared supplier pre-qualification register for the UK aerospace, defence and security sectors. It was established by ADS Group, the trade association for those industries, and is administered by Hellios Information Ltd. Suppliers complete one assessment covering financial standing, quality, health and safety, cyber security, environmental and ethical obligations; buying organisations on the register can then rely on that assessment instead of running their own due diligence.',
  },
  {
    q: 'What does JOSCAR registration mean for me as a buyer?',
    a: 'It means the supplier due diligence step has already been completed to a standard your sector agreed on. Financial standing, quality management, cyber security, health and safety and governance have been assessed and validated, so onboarding a registered supplier is faster than qualifying one from scratch. It matters most on urgent requirements, where supplier approval is usually the bottleneck rather than lead time.',
  },
  {
    q: 'Is JOSCAR the same as ISO 9001?',
    a: 'No. ISO 9001 is a certification of a quality management system, issued by a certification body against a published international standard. JOSCAR is a shared register of assured supplier data covering a much wider scope — finance, insurance, cyber security, governance and ethics as well as quality. They answer different questions, and most defence and aerospace specifications expect both.',
  },
  {
    q: 'How long does JOSCAR registration last?',
    a: 'Submissions are valid for one year, after which renewal is required. That is a deliberate feature rather than an administrative quirk: it means a live registration reflects a supplier’s current standing rather than a position they held when they first applied.',
  },
  {
    q: 'Does JOSCAR registration mean your products are approved for my application?',
    a: 'No, and it is worth being clear about. JOSCAR assesses Valvenok as a business. Whether a specific valve suits your application depends on pressure rating, material, temperature, media and any hazardous area or sour service requirement — all specified per item. Send us the specification and we will confirm what we can supply and provide the product-level documentation with the quotation.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
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

// Reusable section heading in the /quality page's grammar
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      component="h2"
      sx={{
        fontFamily: DISPLAY_FONT,
        fontWeight: 800,
        fontSize: '1.1rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'primary.main',
        mb: 2,
      }}
    >
      {children}
    </Typography>
  );
}

export default function JoscarRegisteredPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      {/* JSON-LD — rendered in JSX so it is in the served HTML, not loaded on click */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── PAGE HEADER ── */}
      <Box
        sx={{
          bgcolor: 'text.primary',
          py: { xs: 6, md: 8 },
          borderBottom: '3px solid',
          borderColor: 'primary.main',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontFamily: DISPLAY_FONT,
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'primary.main',
              mb: 1.5,
            }}
          >
            Supply Chain Accreditation
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 900,
              fontSize: { xs: '2.4rem', md: '3.5rem' },
              lineHeight: 1.0,
              textTransform: 'uppercase',
              color: '#ffffff',
              mb: 2,
            }}
          >
            JOSCAR Registered Supplier
          </Typography>
          <Typography
            sx={{
              color: (t) => alpha(t.palette.common.white, 0.6),
              fontSize: '16px',
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            Valvenok is registered on JOSCAR, the Joint Supply Chain Accreditation
            Register used by the UK aerospace, defence and security sectors to
            pre-qualify suppliers.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        {/* ── OPENING + REGISTRATION PANEL ── */}
        <Grid container spacing={{ xs: 5, md: 8 }} sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography sx={{ color: 'text.secondary', fontSize: '15px', lineHeight: 1.85, mb: 3 }}>
              If you are buying for a programme in those sectors, that registration
              is the reason you do not have to run your own financial, quality,
              cyber and governance due diligence on us before raising a purchase
              order. The work has been done once, to a common standard, and it is
              visible to every buying organisation on the register.
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '15px', lineHeight: 1.85 }}>
              This page explains what the registration actually covers, who
              recognises it, and — just as usefully — what it does not cover, so
              you know what still needs checking for your particular specification.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ border: '1px solid', borderColor: 'divider', overflow: 'hidden' }}>
              <Box
                sx={{
                  px: 3,
                  py: 1.5,
                  bgcolor: 'text.primary',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }} />
                <Typography
                  sx={{
                    fontFamily: DISPLAY_FONT,
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: (t) => alpha(t.palette.common.white, 0.6),
                  }}
                >
                  Registration Status
                </Typography>
              </Box>
              {REGISTRATION.map((row, i) => (
                <Box
                  key={row.label}
                  sx={{
                    px: 3,
                    py: 1.75,
                    bgcolor: i % 2 === 0 ? 'background.default' : (t) => alpha(t.palette.primary.main, 0.03),
                    borderBottom: i < REGISTRATION.length - 1 ? '1px solid' : 'none',
                    borderColor: 'divider',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: DISPLAY_FONT,
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'text.secondary',
                      mb: 0.5,
                    }}
                  >
                    {row.label}
                  </Typography>
                  <Typography sx={{ fontSize: '14px', fontWeight: 600, color: 'text.primary', lineHeight: 1.5 }}>
                    {row.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* ── WHAT IS JOSCAR ── */}
        <Box sx={{ mb: 10, maxWidth: 820 }}>
          <SectionHeading>What Is JOSCAR?</SectionHeading>
          <Typography sx={{ color: 'text.secondary', fontSize: '15px', lineHeight: 1.85, mb: 3 }}>
            JOSCAR — the Joint Supply Chain Accreditation Register — is a shared
            supplier pre-qualification register for the UK aerospace, defence and
            security sectors. It exists to solve a duplication problem: without it,
            every prime contractor and every tier-one supplier runs its own due
            diligence questionnaire on every supplier it works with, and every
            supplier fills in the same information over and over.
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '15px', lineHeight: 1.85, mb: 3 }}>
            With JOSCAR, a supplier completes one assessment covering financial
            standing, quality management, health and safety, cyber security,
            environmental and ethical trading obligations, and business
            continuity. Buying organisations on the register can then see that
            assessment rather than commissioning their own.
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '15px', lineHeight: 1.85 }}>
            For a buyer, that shortens supplier onboarding. For a supplier, it is
            the difference between being able to quote on defence and aerospace
            work and being screened out before the conversation starts.
          </Typography>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* ── WHO RUNS IT ── */}
        <Box sx={{ mb: 10, maxWidth: 820 }}>
          <SectionHeading>Who Runs JOSCAR, and Who Recognises It</SectionHeading>
          <Typography sx={{ color: 'text.secondary', fontSize: '15px', lineHeight: 1.85, mb: 3 }}>
            JOSCAR was established by ADS Group, the trade association representing
            the UK aerospace, defence, security and space industries, and is
            administered by Hellios Information Ltd, which collects and maintains
            the supplier assurance data behind it.
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '15px', lineHeight: 1.85 }}>
            The register is used by buying organisations across those sectors,
            including major prime contractors, and the buyer community continues
            to grow across the UK and Australia.
          </Typography>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* ── ASSESSMENT SCOPE ── */}
        <Grid container spacing={{ xs: 6, md: 10 }} sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <SectionHeading>What the JOSCAR Assessment Covers</SectionHeading>
            <Typography sx={{ color: 'text.secondary', fontSize: '15px', lineHeight: 1.8, mb: 3 }}>
              Registration is not a single tick-box. The questionnaire covers the
              areas a buying organisation would otherwise audit itself.
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '15px', lineHeight: 1.8 }}>
              Registration runs in stages: an initial submission of basic company
              details, then the full compliance questionnaire, then validation of
              the responses. Submissions are valid for one year, after which
              renewal is required — so a registration is evidence of current
              standing, not a historical certificate.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ border: '1px solid', borderColor: 'divider', overflow: 'hidden' }}>
              <Box sx={{ px: 3, py: 1.5, bgcolor: 'text.primary', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }} />
                <Typography
                  sx={{
                    fontFamily: DISPLAY_FONT,
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: (t) => alpha(t.palette.common.white, 0.6),
                  }}
                >
                  Assessment Areas
                </Typography>
              </Box>
              {ASSESSMENT_SCOPE.map((item, i) => (
                <Box
                  key={item}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    px: 3,
                    py: 1.6,
                    bgcolor: i % 2 === 0 ? 'background.default' : (t) => alpha(t.palette.primary.main, 0.03),
                    borderBottom: i < ASSESSMENT_SCOPE.length - 1 ? '1px solid' : 'none',
                    borderColor: 'divider',
                  }}
                >
                  <CheckIcon sx={{ fontSize: 14, color: 'primary.main', flexShrink: 0 }} />
                  <Typography
                    sx={{
                      fontFamily: DISPLAY_FONT,
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'text.primary',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* ── WHAT IT MEANS FOR PROCUREMENT ── */}
        <Box sx={{ mb: 10 }}>
          <SectionHeading>What This Means for Your Procurement Team</SectionHeading>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            {PROCUREMENT_MEANING.map((item) => (
              <Grid size={{ xs: 12, md: 6 }} key={item.title}>
                <Box
                  sx={{
                    p: 3.5,
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderTop: '3px solid',
                    borderTopColor: 'primary.main',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: DISPLAY_FONT,
                      fontWeight: 800,
                      fontSize: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'text.primary',
                      mb: 1.25,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '15px', lineHeight: 1.75 }}>
                    {item.body}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* ── WHAT JOSCAR DOES NOT COVER ── */}
        <Box sx={{ mb: 10 }}>
          <SectionHeading>What JOSCAR Does Not Cover</SectionHeading>
          <Typography sx={{ color: 'text.secondary', fontSize: '15px', lineHeight: 1.85, mb: 4, maxWidth: 820 }}>
            Worth being clear about, because it is where suppliers tend to
            overclaim. JOSCAR assesses us as a business. It says nothing about
            whether a particular valve meets a particular specification.
          </Typography>
          <Grid container spacing={3}>
            {NOT_COVERED.map((item) => (
              <Grid size={{ xs: 12, md: 6 }} key={item.title}>
                <Box
                  sx={{
                    p: 3.5,
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'divider',
                    display: 'flex',
                    gap: 2,
                  }}
                >
                  <CloseIcon sx={{ fontSize: 20, color: 'text.secondary', flexShrink: 0, mt: 0.3 }} />
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: DISPLAY_FONT,
                        fontWeight: 800,
                        fontSize: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: 'text.primary',
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '15px', lineHeight: 1.75 }}>
                      {item.body}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Typography sx={{ color: 'text.secondary', fontSize: '15px', lineHeight: 1.85, mt: 4, maxWidth: 820 }}>
            If your specification calls for product-level compliance, that is on
            our{' '}
            <Box
              component={Link}
              href="/quality"
              sx={{ color: 'primary.main', fontWeight: 700, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
            >
              quality and compliance credentials
            </Box>{' '}
            rather than here — and we will supply the documentation with the
            quotation.
          </Typography>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* ── ALONGSIDE OTHER CREDENTIALS ── */}
        <Box sx={{ mb: 10 }}>
          <SectionHeading>JOSCAR Alongside Our Other Credentials</SectionHeading>
          <Typography sx={{ color: 'text.secondary', fontSize: '15px', lineHeight: 1.8, mb: 4, maxWidth: 820 }}>
            JOSCAR qualifies us as a supplier. The rest qualify what we supply —
            the company/product split is the useful distinction for a procurement
            reader.
          </Typography>

          <Box sx={{ border: '1px solid', borderColor: 'divider', overflow: 'hidden' }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1.2fr 1fr', md: '1.4fr 2fr 0.8fr' },
                px: 3,
                py: 1.5,
                bgcolor: 'text.primary',
                gap: 3,
              }}
            >
              {['Credential', 'What It Qualifies', 'Level'].map((h, i) => (
                <Typography
                  key={h}
                  sx={{
                    fontFamily: DISPLAY_FONT,
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: (t) => alpha(t.palette.common.white, 0.5),
                    display: i === 1 ? { xs: 'none', md: 'block' } : 'block',
                  }}
                >
                  {h}
                </Typography>
              ))}
            </Box>

            {CREDENTIALS.map((row, i) => (
              <Box
                key={row.credential}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1.2fr 1fr', md: '1.4fr 2fr 0.8fr' },
                  px: 3,
                  py: 2,
                  gap: 3,
                  alignItems: 'center',
                  bgcolor: i % 2 === 0 ? 'background.default' : (t) => alpha(t.palette.primary.main, 0.03),
                  borderBottom: i < CREDENTIALS.length - 1 ? '1px solid' : 'none',
                  borderColor: 'divider',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: DISPLAY_FONT,
                    fontSize: '13px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: 'primary.main',
                  }}
                >
                  {row.credential}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'text.primary',
                    display: { xs: 'none', md: 'block' },
                  }}
                >
                  {row.qualifies}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: DISPLAY_FONT,
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'text.secondary',
                  }}
                >
                  {row.level}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* ── FAQ ── */}
        <Box sx={{ mb: 10, maxWidth: 900 }}>
          <SectionHeading>Frequently Asked Questions</SectionHeading>
          <Box sx={{ mt: 3 }}>
            {FAQS.map((item, i) => (
              <Box
                key={item.q}
                sx={{
                  py: 3.5,
                  borderTop: i === 0 ? '1px solid' : 'none',
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: DISPLAY_FONT,
                    fontWeight: 800,
                    fontSize: '1.05rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    color: 'text.primary',
                    mb: 1.25,
                  }}
                >
                  {item.q}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '15px', lineHeight: 1.85 }}>
                  {item.a}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── CTA ── */}
        <Box sx={{ bgcolor: 'primary.main', p: { xs: 4, md: 6 }, textAlign: 'center' }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 900,
              fontSize: { xs: '1.8rem', md: '2.4rem' },
              textTransform: 'uppercase',
              color: '#fff',
              mb: 2,
            }}
          >
            Request a Quotation
          </Typography>
          <Typography sx={{ color: (t) => alpha(t.palette.common.white, 0.9), fontSize: '15px', lineHeight: 1.7, maxWidth: 620, mx: 'auto', mb: 4 }}>
            Send us the specification — line size, pressure class, material, media
            and any certification your programme requires — and we will come back
            with availability, pricing and the supporting documentation.
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', alignItems: 'center' }}>
            <Box
              component={Link}
              href="/contact"
              sx={{
                bgcolor: '#fff',
                color: 'text.primary',
                fontFamily: DISPLAY_FONT,
                fontWeight: 800,
                fontSize: '14px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                px: 4,
                py: 1.75,
                transition: 'transform 0.2s',
                '&:hover': { transform: 'translateY(-2px)' },
              }}
            >
              Request a Quotation
            </Box>
            <Box
              component={Link}
              href="/contact"
              sx={{
                color: '#fff',
                fontFamily: DISPLAY_FONT,
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
              }}
            >
              Apply for a trade credit account
            </Box>
          </Box>
        </Box>

        {/* ── RELATED / INTERNAL LINKS ── */}
        <Box sx={{ mt: 8 }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 800,
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'text.secondary',
              mb: 2,
            }}
          >
            Explore More From Valvenok
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1.5}>
            {[
              { label: 'Quality & compliance', href: '/quality' },
              { label: 'Hydrogen & cryogenic', href: '/hydrogen-cryogenic' },
              { label: 'Industrial valves', href: '/valves' },
              { label: 'Instrumentation', href: '/instrumentation' },
            ].map((r) => (
              <Box
                key={r.href}
                component={Link}
                href={r.href}
                sx={{
                  fontFamily: DISPLAY_FONT,
                  fontWeight: 700,
                  fontSize: '13px',
                  letterSpacing: '0.03em',
                  textDecoration: 'none',
                  color: 'primary.dark',
                  border: '1.5px solid',
                  borderColor: 'primary.light',
                  px: 2,
                  py: 1,
                  transition: '0.2s',
                  '&:hover': { borderColor: 'primary.main', bgcolor: 'primary.50' },
                }}
              >
                {r.label} →
              </Box>
            ))}
          </Stack>
        </Box>

        {/* ── SOURCE / OUTBOUND ── */}
        <Typography sx={{ mt: 5, fontSize: '13px', color: 'text.secondary', textAlign: 'center' }}>
          JOSCAR is administered by{' '}
          <Box
            component="a"
            href="https://www.hellios.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.4,
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            Hellios Information Ltd
            <OpenInNewIcon sx={{ fontSize: 13 }} />
          </Box>
          .
        </Typography>
      </Container>
    </Box>
  );
}
