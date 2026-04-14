'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';

const COMPANY = 'Valvenok Limited';
const ADDRESS = 'Ground Floor, St Edburgs Hall, Priory Road, Bicester, OX26 6BL, United Kingdom';
const EMAIL = 'privacy@valvenok.co.uk';
const EFFECTIVE_DATE = '1 January 2025';

const SECTIONS = [
  {
    title: '1. Who We Are',
    content: `${COMPANY} is the data controller responsible for your personal data. We are registered in England and Wales and our registered address is ${ADDRESS}.

If you have any questions about how we use your personal data, please contact us at ${EMAIL}.`,
  },
  {
    title: '2. What Data We Collect',
    content: `We may collect and process the following personal data:

Name, job title, and company name
Email address, phone number, and postal address
Order history, billing, and payment information (we do not store card details)
IP address, browser type, and device information collected via cookies
Correspondence and enquiries sent to us directly
Any other information you voluntarily provide`,
  },
  {
    title: '3. How We Collect Your Data',
    content: `We collect data in the following ways:

Directly from you — when you place an order, register an account, submit an enquiry, or contact us
Automatically — through cookies and analytics tools when you use our website
From third parties — such as payment processors or logistics partners where necessary to fulfil your order`,
  },
  {
    title: '4. How We Use Your Data',
    content: `We use your personal data for the following purposes:

To process and fulfil your orders, including dispatch and delivery
To manage your account and customer relationship
To respond to enquiries and provide customer support
To send order confirmations, dispatch notifications, and service updates
To send marketing communications, where you have consented or where we have a legitimate interest
To improve our website and services through analytics
To comply with legal and regulatory obligations`,
  },
  {
    title: '5. Legal Basis for Processing',
    content: `We process your personal data on the following legal bases:

Contract — processing is necessary to fulfil your order or provide a service you have requested
Legitimate interests — for example, improving our website, preventing fraud, and direct marketing to existing customers
Legal obligation — where we are required to process data to comply with the law
Consent — where you have explicitly opted in, such as for marketing emails`,
  },
  {
    title: '6. Marketing Communications',
    content: `We may send you marketing emails about our products and services if you have opted in, or if you are an existing customer and have not opted out. You can unsubscribe at any time by clicking the unsubscribe link in any marketing email or by contacting us at ${EMAIL}.

We will never sell your personal data to third parties for marketing purposes.`,
  },
  {
    title: '7. Sharing Your Data',
    content: `We may share your personal data with:

Delivery and logistics partners to fulfil your orders
Payment processors to handle transactions securely
IT and software providers who support our business operations
Professional advisers including legal, financial, and compliance consultants
Regulatory authorities where required by law

All third parties we work with are required to process your data securely and only for the purposes we specify.`,
  },
  {
    title: '8. International Transfers',
    content: `Where we transfer personal data outside the UK, we ensure appropriate safeguards are in place in accordance with UK GDPR, including standard contractual clauses or transfers to countries with an adequacy decision from the UK government.`,
  },
  {
    title: '9. Data Retention',
    content: `We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements.

Order and transaction records are typically retained for seven years in line with HMRC requirements. Marketing preferences are retained until you withdraw consent or opt out.`,
  },
  {
    title: '10. Your Rights',
    content: `Under UK GDPR, you have the following rights in relation to your personal data:

Right of access — to request a copy of the data we hold about you
Right to rectification — to request correction of inaccurate data
Right to erasure — to request deletion of your data in certain circumstances
Right to restrict processing — to request we limit how we use your data
Right to data portability — to receive your data in a structured, machine-readable format
Right to object — to object to processing based on legitimate interests or for direct marketing
Rights in relation to automated decision-making and profiling

To exercise any of these rights, please contact us at ${EMAIL}. We will respond within one month. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.`,
  },
  {
    title: '11. Cookies',
    content: `We use cookies on our website to improve your experience and analyse site usage. For full details of the cookies we use and how to manage them, please see our Cookie Policy.`,
  },
  {
    title: '12. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. The current version will always be available on our website with the effective date shown. We will notify you of significant changes by email where appropriate.`,
  },
  {
    title: '13. Contact Us',
    content: `For any privacy-related queries or to exercise your rights, please contact us at:

${COMPANY}
${ADDRESS}
Email: ${EMAIL}`,
  },
];

export default function PrivacyPolicy() {
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
            Privacy Policy
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

      {/* Content */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>

        {/* Intro notice */}
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
            Your Privacy Matters
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '14px', lineHeight: 1.7 }}>
            {`This policy explains what personal data Valvenok Limited collects, why we collect it, and how we use and protect it. We are committed to handling your data responsibly and in compliance with UK GDPR and the Data Protection Act 2018.`}
          </Typography>
        </Box>

        {/* Sections */}
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