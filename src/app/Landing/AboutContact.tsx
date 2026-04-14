'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const CHECKLIST = [
  'JOSCAR Registered — approved for defence & aerospace procurement',
  '2–3 day UK dispatch on all stocked items',
  'Hydrogen-ready components for emerging energy applications',
  'PANAM Valves — exclusive UK distributor',
  'SS316, Duplex, Monel & Hastelloy material options',
  'Export documentation available for international orders',
];

const CONTACT_ITEMS = [
  {
    Icon: PhoneInTalkIcon,
    label: 'Call Us',
    value: '+44 7369 243459',
    href: 'tel:+447369243459',
  },
  {
    Icon: EmailIcon,
    label: 'Email Us',
    value: 'sales@valvenok.com',
    href: 'mailto:sales@valvenok.com',
  },
  {
    Icon: LocalShippingIcon,
    label: 'UK Delivery',
    value: '2–3 days · Free over £150',
    href: null,
  },
  {
    Icon: MilitaryTechIcon,
    label: 'JOSCAR Registered',
    value: 'Defence & Aerospace Approved',
    href: null,
  },
];

export default function AboutContact() {
  return (
    <Box
      component="section"
      sx={{ py: { xs: 7, md: 10 }, bgcolor: 'background.paper' }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 6, md: 8 },
            alignItems: 'center',
          }}
        >

          {/* ── LEFT: About Text ── */}
          <Box>
            <Typography
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'primary.main',
                mb: 1,
              }}
            >
              About Valvenok
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: { xs: '2rem', md: 'clamp(28px, 3vw, 42px)' },
                fontWeight: 900,
                textTransform: 'uppercase',
                color: 'text.primary',
                letterSpacing: '0.02em',
                lineHeight: 1.08,
                mb: 2.5,
              }}
            >
              Your UK Partner for Industrial Flow Control
            </Typography>

            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
              We're a UK-based supplier of hydraulic, pneumatic, instrumentation and
              hydrogen-ready components — built for engineers who need the right part, fast.
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
              Whether you're speccing a new system or sourcing a replacement under pressure,
              our team knows the products and can help you find exactly what you need.
            </Typography>

            {/* Checklist */}
            <Box
              component="ul"
              sx={{ listStyle: 'none', p: 0, m: 0, mb: 4 }}
            >
              {CHECKLIST.map((item) => (
                <Box
                  key={item}
                  component="li"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    py: 1.1,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    fontSize: '15px',
                    fontWeight: 500,
                    color: 'text.primary',
                    '&:last-child': { borderBottom: 'none' },
                  }}
                >
                  <CheckCircleIcon
                    sx={{ fontSize: 20, color: 'primary.main', flexShrink: 0 }}
                  />
                  {item}
                </Box>
              ))}
            </Box>

            <Button
              variant="contained"
              color="primary"
              href="/contact"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius:"0px",
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 800,
                fontSize: '15px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                px: 3.5,
                py: 1.5,
                boxShadow: 'none',
                '&:hover': { boxShadow: 'none' },
              }}
            >
              Get in Touch
            </Button>
          </Box>

          {/* ── RIGHT: Contact Card ── */}
          <Box
            sx={{
              bgcolor: 'primary.main',
              p: { xs: 4, md: '36px 36px' },
              color: '#fff',
            }}
          >
            <Typography
              component="h3"
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: '28px',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                color: '#fff',
                mb: 1,
              }}
            >
              Get in Touch
            </Typography>

            {/* Divider */}
            <Box
              sx={{
                width: 40,
                height: 3,
                bgcolor: 'rgba(255,255,255,0.35)',
                mb: 3,
              }}
            />

            {/* Contact Items */}
            {CONTACT_ITEMS.map(({ Icon, label, value, href }) => (
              <Box
                key={label}
                component={href ? 'a' : 'div'}
                href={href || undefined}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.75,
                  py: 1.75,
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  textDecoration: 'none',
                  '&:last-child': { borderBottom: 'none' },
                  ...(href && {
                    cursor: 'pointer',
                    transition: 'opacity 0.2s',
                    '&:hover': { opacity: 0.85 },
                  }),
                }}
              >
                {/* Icon box */}
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    bgcolor: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon sx={{ fontSize: 22, color: '#fff' }} />
                </Box>

                {/* Text */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'rgba(255,255,255,0.6)',
                      lineHeight: 1,
                      mb: '4px',
                    }}
                  >
                    {label}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#fff',
                      lineHeight: 1.3,
                    }}
                  >
                    {value}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

        </Box>
      </Container>
    </Box>
  );
}