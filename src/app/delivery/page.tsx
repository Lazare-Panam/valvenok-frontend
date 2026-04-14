'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import CheckIcon from '@mui/icons-material/Check';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import { alpha } from '@mui/material/styles';

const UK_DELIVERY = [
  { service: 'Standard UK Delivery',    time: '3–5 Working Days', cost: 'From £6.95' },
  { service: 'Express UK Delivery',     time: '1–2 Working Days', cost: 'From £12.95' },
  { service: 'Next Day (order by 2pm)', time: 'Next Working Day', cost: 'From £18.95' },
  { service: 'Free UK Delivery',        time: '3–5 Working Days', cost: 'Free on orders over £150' },
];

const INCLUDED = [
  'All stocked items dispatched within 2–3 working days',
  'Order confirmation and dispatch notification by email',
  'Tracking number provided on dispatch',
  'Signature required on delivery for orders over £200',
  'Saturday delivery available on request — contact us for pricing',
];

const FAQS = [
  {
    q: 'What happens if my item is out of stock?',
    a: 'If an item is temporarily out of stock, we will contact you within one working day with an estimated lead time. You may choose to wait, substitute for an alternative, or receive a full refund.',
  },
  {
    q: 'Can I collect my order?',
    a: 'Collection is available from our Bicester office by prior arrangement. Please contact us before placing your order to confirm availability and arrange a collection time.',
  },
  {
    q: 'Do you deliver internationally?',
    a: 'Yes — we ship to Europe, the Middle East, and worldwide. International orders are quoted individually based on weight, destination, and service level. Contact us with your requirements for a shipping quote.',
  },
  {
    q: 'What if my delivery arrives damaged?',
    a: 'Please inspect goods upon delivery and note any damage with the courier before signing. Contact us within 48 hours of receipt with photos and we will arrange a replacement or refund promptly.',
  },
  {
    q: 'Are there items that cannot be shipped via standard courier?',
    a: 'Certain oversized or heavy items may require pallet delivery. We will advise you at the time of order if this applies and provide a separate delivery quote.',
  },
];

const PILLARS = [
  {
    icon: WarehouseOutlinedIcon,
    title: 'UK Stock',
    body: 'Over 5,000 products held in UK stock, ready for immediate dispatch. No waiting on overseas lead times.',
  },
  {
    icon: LocalShippingOutlinedIcon,
    title: '2–3 Day Dispatch',
    body: 'All stocked orders are picked, packed, and dispatched within 2–3 working days of order confirmation.',
  },
  {
    icon: PublicOutlinedIcon,
    title: 'Worldwide Shipping',
    body: 'We supply engineers and procurement teams across Europe, the Middle East, and globally. Contact us for international freight.',
  },
  {
    icon: SupportAgentOutlinedIcon,
    title: 'Dedicated Support',
    body: 'Our team is on hand to help with urgent requirements, large orders, or any delivery queries. Call or email us directly.',
  },
];

export default function DeliveryInformationPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>

      {/* Page Header */}
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
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'primary.main',
              mb: 1.5,
            }}
          >
            Shipping
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 900,
              fontSize: { xs: '2.4rem', md: '3.5rem' },
              lineHeight: 1.0,
              textTransform: 'uppercase',
              color: '#ffffff',
              mb: 2,
            }}
          >
            Delivery Information
          </Typography>
          <Typography
            sx={{
              color: (t) => alpha(t.palette.common.white, 0.55),
              fontSize: '16px',
              lineHeight: 1.7,
              maxWidth: 520,
            }}
          >
            Fast, reliable delivery across the UK and worldwide. All orders dispatched
            from our UK warehouse within 2–3 working days.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>

        {/* Pillars */}
        <Grid container spacing={2.5} sx={{ mb: 10 }}>
          {PILLARS.map(({ icon: Icon, title, body }, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderTop: '3px solid',
                  borderTopColor: 'primary.main',
                  transition: 'border-color 0.2s',
                  '&:hover': {
                    borderColor: (t) => alpha(t.palette.primary.main, 0.4),
                    borderTopColor: 'primary.main',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: (t) => alpha(t.palette.primary.main, 0.1),
                    mb: 2,
                  }}
                >
                  <Icon sx={{ fontSize: 18, color: 'primary.main' }} />
                </Box>
                <Typography
                  sx={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'text.primary',
                    mb: 1,
                  }}
                >
                  {title}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '14px', lineHeight: 1.7 }}>
                  {body}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* UK Delivery Table + What's Included */}
        <Grid container spacing={{ xs: 6, md: 10 }} sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 800,
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'primary.main',
                mb: 3,
              }}
            >
              UK Delivery Options
            </Typography>

            <Box sx={{ border: '1px solid', borderColor: 'divider', overflow: 'hidden' }}>
              {/* Header row */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 140px 160px',
                  px: 3,
                  py: 1.5,
                  bgcolor: 'text.primary',
                  gap: 2,
                }}
              >
                {['Service', 'Timescale', 'Cost'].map((h) => (
                  <Typography
                    key={h}
                    sx={{
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: (t) => alpha(t.palette.common.white, 0.5),
                    }}
                  >
                    {h}
                  </Typography>
                ))}
              </Box>

              {UK_DELIVERY.map((row, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 140px 160px',
                    px: 3,
                    py: 2,
                    gap: 2,
                    alignItems: 'center',
                    bgcolor: i % 2 === 0 ? 'background.default' : (t) => alpha(t.palette.primary.main, 0.03),
                    borderBottom: i < UK_DELIVERY.length - 1 ? '1px solid' : 'none',
                    borderColor: 'divider',
                    transition: 'background 0.15s',
                    '&:hover': { bgcolor: (t) => alpha(t.palette.primary.main, 0.07) },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: 'text.primary',
                    }}
                  >
                    {row.service}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'text.secondary',
                    }}
                  >
                    {row.time}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'primary.main',
                    }}
                  >
                    {row.cost}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 800,
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'primary.main',
                mb: 3,
              }}
            >
              {'What\'s Included'}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {INCLUDED.map((item, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <CheckIcon sx={{ fontSize: 14, color: 'primary.main', mt: '3px', flexShrink: 0 }} />
                  <Typography sx={{ color: 'text.secondary', fontSize: '15px', lineHeight: 1.7 }}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* FAQs */}
        <Box sx={{ mb: 8 }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 800,
              fontSize: '1.1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'primary.main',
              mb: 4,
            }}
          >
            Frequently Asked Questions
          </Typography>

          {FAQS.map((faq, i) => (
            <Box
              key={i}
              sx={{
                py: 3,
                borderBottom: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontWeight: 800,
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: 'text.primary',
                  mb: 1,
                }}
              >
                {faq.q}
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '15px', lineHeight: 1.75 }}>
                {faq.a}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Contact strip */}
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            bgcolor: 'text.primary',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { md: 'center' },
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 800,
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#ffffff',
                mb: 0.5,
              }}
            >
              Need a Freight Quote or Have a Delivery Query?
            </Typography>
            <Typography
              sx={{
                color: (t) => alpha(t.palette.common.white, 0.5),
                fontSize: '14px',
              }}
            >
              Our team responds within one working day.
            </Typography>
          </Box>
          <Box
            component="a"
            href="mailto:sales@valvenok.co.uk"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              px: 3,
              py: 1.5,
              bgcolor: 'primary.main',
              color: 'text.primary',
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 800,
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              textDecoration: 'none',
              flexShrink: 0,
              transition: 'opacity 0.2s',
              '&:hover': { opacity: 0.85 },
            }}
          >
            Contact Us
          </Box>
        </Box>

      </Container>
    </Box>
  );
}