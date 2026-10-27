'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';

const COMPANY = 'Valvenok Limited';
const ADDRESS = 'Ground Floor, St Edburgs Hall, Priory Road, Bicester, OX26 6BL, United Kingdom';
const EMAIL = 'sales@valvenok.com';
const EFFECTIVE_DATE = '1 January 2025';

const SECTIONS = [
  {
    title: '1. Introduction',
    content: `These Terms and Conditions ("Terms") govern your use of the Valvenok Limited website and the purchase of products through it. By placing an order or using our website, you agree to be bound by these Terms. Please read them carefully before proceeding.

Valvenok Limited is a company registered in England and Wales. Our registered address is ${ADDRESS}.`,
  },
  {
    title: '2. Definitions',
    content: `"We", "Us", "Our" refers to Valvenok Limited.
"You", "Your" refers to the customer or website user.
"Products" refers to all goods listed for sale on our website.
"Order" refers to a request by you to purchase Products from us.
"Contract" means the legally binding agreement between you and us for the supply of Products.`,
  },
  {
    title: '3. Orders & Contract Formation',
    content: `All orders placed through our website are subject to acceptance by us. An order confirmation email does not constitute acceptance of your order — a contract is only formed when we dispatch the goods and send a dispatch confirmation.

We reserve the right to refuse or cancel any order at our discretion, including where Products are listed at an incorrect price due to a typographical error or system fault. In such cases, we will notify you promptly and issue a full refund if payment has been taken.`,
  },
  {
    title: '4. Pricing & Payment',
    content: `All prices are displayed in British Pounds Sterling (GBP) and are exclusive of VAT unless otherwise stated. VAT will be added at the applicable rate at checkout.

Payment is due in full at the time of ordering. We accept major credit and debit cards and other payment methods as displayed at checkout. We use secure payment processing and do not store card details on our servers.`,
  },
  {
    title: '5. Delivery',
    content: `We aim to dispatch all stocked items within 2–3 working days of order confirmation. Delivery timescales are estimates only and do not constitute a guarantee. We shall not be liable for delays caused by circumstances beyond our reasonable control.

Free standard UK delivery is available on orders over £150. Delivery charges for orders below this threshold, and for international orders, will be calculated and displayed at checkout. Title and risk in the Products passes to you upon delivery.`,
  },
  {
    title: '6. Returns & Cancellations',
    content: `You have the right to cancel your order within 14 days of receiving the goods under the Consumer Contracts Regulations 2013, without giving any reason. To exercise this right, you must notify us in writing within 14 days of receipt.

Returned items must be unused, in their original packaging, and in a resaleable condition. We reserve the right to deduct from your refund if goods have been handled beyond what is necessary to inspect them. Custom or special-order items may not be eligible for return unless faulty.

Refunds will be processed within 14 days of receiving the returned goods.`,
  },
  {
    title: '7. Warranty & Faulty Goods',
    content: `All Products are sold with the benefit of the manufacturer's warranty where applicable. Nothing in these Terms affects your statutory rights under the Consumer Rights Act 2015.

If goods arrive damaged or develop a fault within 30 days of delivery, please contact us for a replacement or full refund. After 30 days, we will assess faults and offer repair, replacement, or refund at our discretion in accordance with your statutory rights.`,
  },
  {
    title: '8. Limitation of Liability',
    content: `To the maximum extent permitted by law, our total liability to you in connection with any order shall not exceed the price paid for the Products in question.

We shall not be liable for any indirect, consequential, or special loss, including loss of profit, loss of data, or business interruption, arising from your use of our Products or website.

Nothing in these Terms limits our liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded by law.`,
  },
  {
    title: '9. Intellectual Property',
    content: `All content on this website — including text, images, logos, product descriptions, and design — is the property of Valvenok Limited or its licensors and is protected by copyright and other intellectual property laws.

You may not reproduce, distribute, or use any content from this website without our prior written consent.`,
  },
  {
    title: '10. Privacy & Data Protection',
    content: `We process your personal data in accordance with our Privacy Policy, which forms part of these Terms. By placing an order, you consent to the processing of your personal data as described therein.

We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.`,
  },
  {
    title: '11. Governing Law',
    content: `These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these Terms or your use of our website shall be subject to the exclusive jurisdiction of the courts of England and Wales.`,
  },
  {
    title: '12. Contact Us',
    content: `If you have any questions about these Terms, please contact us at:

${COMPANY}
${ADDRESS}
Email: ${EMAIL}`,
  },
];

export default function TermsAndConditions() {
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
            Terms &amp; Conditions
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
            Effective Date: {EFFECTIVE_DATE}
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
            Please Read Carefully
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '14px', lineHeight: 1.7 }}>
            These Terms and Conditions apply to all purchases made from Valvenok Limited. 
            By placing an order, you confirm that you have read, understood, and agree to be 
            bound by these Terms.
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