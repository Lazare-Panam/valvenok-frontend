'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';

const COMPANY = 'Valvenok Limited';
const EMAIL = 'sales@valvenok.com';
const EFFECTIVE_DATE = '1 January 2025';

const COOKIE_TYPES = [
  {
    type: 'Strictly Necessary',
    canOptOut: false,
    description: 'These cookies are essential for the website to function and cannot be switched off. They are usually set in response to actions you take such as logging in, adding items to your basket, or filling in forms.',
    examples: 'Session cookies, authentication tokens, shopping cart state',
  },
  {
    type: 'Performance & Analytics',
    canOptOut: true,
    description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our website. All information collected is aggregated and anonymous.',
    examples: 'Google Analytics (_ga, _gid), page view tracking',
  },
  {
    type: 'Functional',
    canOptOut: true,
    description: 'These cookies enable the website to provide enhanced functionality and personalisation, such as remembering your preferences or previously viewed products.',
    examples: 'Preference cookies, recently viewed items',
  },
  {
    type: 'Targeting & Marketing',
    canOptOut: true,
    description: 'These cookies may be set through our site by advertising partners. They may be used to build a profile of your interests and show you relevant adverts on other sites.',
    examples: 'Google Ads, retargeting pixels',
  },
];

const SECTIONS = [
  {
    title: '1. What Are Cookies',
    content: `Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work more efficiently, remember your preferences, and provide information to website owners.

Cookies do not contain personally identifiable information on their own, but personal data we store about you may be linked to information obtained from cookies.`,
  },
  {
    title: '2. How We Use Cookies',
    content: `We use cookies to:

Ensure the website functions correctly and securely
Remember items in your basket and your account login
Analyse how visitors use our website so we can improve it
Understand the effectiveness of our marketing activity
Personalise content and remember your preferences`,
  },
  {
    title: '3. Third-Party Cookies',
    content: `Some cookies on our website are set by third-party services we use, such as Google Analytics. These third parties may use cookies to track your activity across multiple websites. We do not control these cookies and recommend you review the privacy policies of these third parties directly.`,
  },
  {
    title: '4. Managing Cookies',
    content: `You can control and manage cookies in several ways:

Browser settings — most browsers allow you to block or delete cookies through their settings menu. Note that blocking all cookies may affect the functionality of our website.
Cookie consent — when you first visit our website, you will be presented with a cookie banner allowing you to accept or decline non-essential cookies.
Opt-out tools — for analytics cookies, you can opt out via the Google Analytics opt-out browser add-on at tools.google.com/dlpage/gaoptout.`,
  },
  {
    title: '5. Cookie Retention',
    content: `Different cookies are retained for different periods:

Session cookies — deleted automatically when you close your browser
Persistent cookies — remain on your device for a set period, typically between 30 days and 2 years, depending on their purpose

You can delete all cookies at any time through your browser settings.`,
  },
  {
    title: '6. Changes to This Policy',
    content: `We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our use of cookies. The current version will always be available on our website.`,
  },
  {
    title: '7. Contact Us',
    content: `If you have any questions about our use of cookies, please contact us at ${EMAIL}.`,
  },
];

export default function CookiePolicy() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>

      {/* Header */}
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
            Legal
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
            Cookie Policy
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: (t) => alpha(t.palette.common.white, 0.45),
            }}
          >
            {`Effective Date: ${EFFECTIVE_DATE}`}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>

        {/* Intro */}
        <Box
          sx={{
            p: 3,
            mb: 6,
            border: '1px solid',
            borderColor: 'primary.main',
            borderLeft: '4px solid',
            borderLeftColor: 'primary.main',
            bgcolor: (t) => alpha(t.palette.primary.main, 0.05),
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'primary.main',
              mb: 0.5,
            }}
          >
            About This Policy
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '14px', lineHeight: 1.7 }}>
            {`This Cookie Policy explains how Valvenok Limited uses cookies and similar tracking technologies on our website. By continuing to use our site, you consent to the use of strictly necessary cookies. You can manage your preferences for all other cookies at any time.`}
          </Typography>
        </Box>

        {/* Cookie types table */}
        <Box sx={{ mb: 8 }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 800,
              fontSize: '1.2rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'text.primary',
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              '&::after': {
                content: '""',
                flex: 1,
                height: '1px',
                bgcolor: 'divider',
              },
            }}
          >
            Cookie Types We Use
          </Typography>

          <Box sx={{ border: '1px solid', borderColor: 'divider', overflow: 'hidden' }}>
            {/* Table header */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr 100px',
                px: 3,
                py: 1.5,
                bgcolor: 'text.primary',
                gap: 2,
              }}
            >
              {['Type', 'Purpose', 'Optional'].map((h) => (
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

            {COOKIE_TYPES.map((cookie, i) => (
              <Box
                key={i}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '180px 1fr 100px',
                  px: 3,
                  py: 2.5,
                  gap: 2,
                  alignItems: 'start',
                  bgcolor: i % 2 === 0 ? 'background.default' : (t) => alpha(t.palette.primary.main, 0.03),
                  borderBottom: i < COOKIE_TYPES.length - 1 ? '1px solid' : 'none',
                  borderColor: 'divider',
                  transition: 'background 0.15s',
                  '&:hover': { bgcolor: (t) => alpha(t.palette.primary.main, 0.07) },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontSize: '13px',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'primary.main',
                      mb: 0.5,
                    }}
                  >
                    {cookie.type}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'text.secondary',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {`e.g. ${cookie.examples}`}
                  </Typography>
                </Box>
                <Typography sx={{ color: 'text.secondary', fontSize: '14px', lineHeight: 1.7 }}>
                  {cookie.description}
                </Typography>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 1.5,
                    py: 0.5,
                    bgcolor: cookie.canOptOut
                      ? (t) => alpha(t.palette.primary.main, 0.1)
                      : (t) => alpha(t.palette.text.primary, 0.08),
                    border: '1px solid',
                    borderColor: cookie.canOptOut ? 'primary.main' : 'divider',
                    alignSelf: 'start',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: cookie.canOptOut ? 'primary.main' : 'text.secondary',
                    }}
                  >
                    {cookie.canOptOut ? 'Yes' : 'Required'}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Remaining sections */}
        {SECTIONS.map((section, i) => (
          <Box key={i} sx={{ mb: 5 }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 800,
                fontSize: '1.2rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'text.primary',
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                '&::after': {
                  content: '""',
                  flex: 1,
                  height: '1px',
                  bgcolor: 'divider',
                },
              }}
            >
              {section.title}
            </Typography>
            {section.content.split('\n\n').map((para, j) => (
              <Typography
                key={j}
                sx={{
                  color: 'text.secondary',
                  fontSize: '15px',
                  lineHeight: 1.8,
                  mb: 1.5,
                  whiteSpace: 'pre-line',
                }}
              >
                {para}
              </Typography>
            ))}
          </Box>
        ))}

        <Divider sx={{ my: 6 }} />

        <Typography
          sx={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'text.secondary',
            textAlign: 'center',
          }}
        >
          {`© ${new Date().getFullYear()} ${COMPANY} · All Rights Reserved · Registered in England & Wales`}
        </Typography>
      </Container>
    </Box>
  );
}