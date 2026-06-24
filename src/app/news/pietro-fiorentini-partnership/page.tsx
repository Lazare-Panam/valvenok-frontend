'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
  Divider,
  Chip,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const DISPLAY_FONT = '"Barlow Condensed"';

export default function PietroFiorentiniPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 10 }}>

      {/* ── HERO ── */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', pt: 15, pb: 10 }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, letterSpacing: '0.4em', opacity: 0.8 }}>
            Partnership Announcement
          </Typography>
          <Typography variant="h1" sx={{ fontFamily: DISPLAY_FONT, fontSize: { xs: '2.5rem', md: '4.5rem' }, fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, mt: 1 }}>
            Italian Innovation. Delivered Through Valvenok.
          </Typography>
          <Typography variant="h5" sx={{ mt: 2, opacity: 0.85, fontStyle: 'italic' }}>
            Valvenok is proud to be an Authorized Representative of Pietro Fiorentini
          </Typography>
          <Stack direction="row" spacing={3} sx={{ mt: 4, opacity: 0.8 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PersonOutlineIcon fontSize="small" />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>Valvenok Team</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <AccessTimeIcon fontSize="small" />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>June 19, 2026</Typography>
            </Stack>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>4 min read</Typography>
          </Stack>
        </Container>
      </Box>

      {/* HERO IMAGE */}
      <Box sx={{ textAlign: 'center', bgcolor: 'background.default' }}>
        <Box
          component="img"
          src="https://pblol2.blob.core.windows.net/valvenok-images/blogs/pf.jpeg"
          alt="Pietro Fiorentini and Valvenok Partnership"
          sx={{ width: '100%', maxWidth: 700, border: '1px solid', borderColor: 'divider', my: 6 }}
        />
      </Box>

      <Container maxWidth="md" sx={{ mt: -5 }}>

        {/* ── KEY TAKEAWAYS ── */}
        <Paper elevation={10} sx={{ p: 4, borderRadius: 0, borderLeft: '8px solid', borderColor: 'primary.main', mb: 8 }}>
          <Typography variant="h4" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 900, mb: 3, textTransform: 'uppercase' }}>
            Key Takeaways
          </Typography>
          <Grid container spacing={2}>
            {[
              'Valvenok is now an Authorized Representative of Pietro Fiorentini — a globally recognised leader in flow control, pressure management, and valve technologies.',
              "The partnership gives customers access to Pietro Fiorentini's full range of industrial valves, pressure regulators, flow-control solutions, and actuation technologies.",
              'Pietro Fiorentini products are trusted across the global energy chain — backed by decades of Italian engineering excellence.',
              'Customers benefit from world-class product quality combined with responsive local support from the Valvenok team.',
              'Key products now available include the Dival 160 AP pressure regulator, Butterfly Valve BF31, Starflux 185, and the VS/AM 58 Relief Valve.',
            ].map((text, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6 }}>
                <Stack direction="row" spacing={1} alignItems="flex-start">
                  <CheckCircleOutlineIcon sx={{ color: 'primary.main', fontSize: 20, mt: 0.3 }} />
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>{text}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* ── ARTICLE BODY ── */}
        <Box sx={{ '& p': { mb: 3, lineHeight: 1.8, color: '#000000', fontSize: '1.1rem' } }}>

          {/* INTRO */}
          <Typography>
            Valvenok is proud to announce a new partnership with Pietro Fiorentini, a globally recognised leader in flow control, pressure management, and valve technologies for the energy and industrial sectors. As an Authorized Representative of Pietro Fiorentini, Valvenok is now able to bring world-class Italian engineering directly to customers across the UK and beyond — backed by our local technical expertise and support.
          </Typography>

          {/* ── ABOUT PIETRO FIORENTINI ── */}
          <Typography variant="h3" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, mt: 6, textTransform: 'uppercase', color: 'primary.main' }}>
            A Shared Commitment to Quality and Innovation
          </Typography>
          <Typography>
            For decades, Pietro Fiorentini has built a reputation for engineering excellence, innovation, and reliability. Headquartered in Italy and serving customers around the world, the company is known for delivering advanced technologies that support safe, efficient, and sustainable operations across a wide range of industries.
          </Typography>
          <Typography>
            By partnering with Pietro Fiorentini, Valvenok strengthens its ability to provide customers with proven solutions that meet the highest standards of performance and reliability. This partnership marks an exciting milestone for Valvenok as we continue to expand our portfolio of premium industrial solutions.
          </Typography>

          {/* ITALY CALLOUT */}
          <Box sx={{ borderLeft: '4px solid', borderColor: 'primary.main', bgcolor: 'primary.50', px: 3, py: 2.5, mb: 6, mt: 2 }}>
            <Typography sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'primary.main', mb: 1 }}>
              Italy
            </Typography>
            <Typography sx={{ color: 'text.primary', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500, mb: 0 }}>
              Where quality, innovation, and reliability begin. For decades, Pietro Fiorentini has engineered technologies trusted across the global energy chain.
            </Typography>
          </Box>

          {/* ── EXPANDING ACCESS ── */}
          <Typography variant="h3" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, mt: 6, textTransform: 'uppercase', color: 'primary.main' }}>
            Expanding Access to Industry-Leading Solutions
          </Typography>
          <Typography>
            Customers can now access a comprehensive range of Pietro Fiorentini products through Valvenok. This expanded offering enables customers to benefit from world-class Italian engineering while receiving responsive local support from the Valvenok team.
          </Typography>

          {/* PRODUCT CATEGORIES */}
          <Grid container spacing={2} sx={{ my: 4 }}>
            {[
              { label: 'Industrial Valves', desc: 'High-performance valves engineered for demanding industrial and energy applications.' },
              { label: 'Pressure Regulators', desc: 'Direct and pilot-operated regulators for high- and medium-pressure gas networks.' },
              { label: 'Flow-Control Solutions', desc: 'Advanced flow control technologies for transmission, distribution, and process duty.' },
              { label: 'Actuation & Automation', desc: 'Actuation technologies that integrate seamlessly with Pietro Fiorentini valve products.' },
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6 }}>
                <Box sx={{ p: 3, border: '1.5px solid', borderColor: 'primary.light', height: '100%' }}>
                  <Typography sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, fontSize: '1rem', textTransform: 'uppercase', color: 'primary.dark', mb: 1 }}>
                    {item.label}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* ── PRODUCT SPOTLIGHT ── */}
          <Typography variant="h3" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 1, mt: 6, textTransform: 'uppercase', color: 'primary.main' }}>
            Now Available Through Valvenok
          </Typography>
          <Typography variant="h4" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 700, mb: 4, color: 'text.primary' }}>
            A Selection of the Pietro Fiorentini Range
          </Typography>

          <Grid container spacing={3} sx={{ mb: 6 }}>
            {[
              {
                category: 'Pressure Regulator',
                name: 'Dival 160 AP',
                image: 'https://pblol2.blob.core.windows.net/valvenok-images/blogs/dival-160-ap.jpg',
                desc: 'Direct-operated gas pressure regulator for high- and medium-pressure networks rated up to 85 Barg.',
              },
              {
                category: 'Industrial Valve',
                name: 'Butterfly Valve BF31',
                image: 'https://pblol2.blob.core.windows.net/valvenok-images/blogs/bf-31.jpg',
                desc: 'Hermetic-seal butterfly valve with a 360° self-cleaning spherical seat and low control torque.',
              },
              {
                category: 'Flow Control',
                name: 'Starflux 185',
                image: 'https://pblol2.blob.core.windows.net/valvenok-images/blogs/staflux-185.jpg',
                desc: 'High-performance pressure regulator built for demanding transmission and distribution duty.',
              },
              {
                category: 'Safety / Relief',
                name: 'VS/AM 58 Relief Valve',
                image: 'https://pblol2.blob.core.windows.net/valvenok-images/blogs/vs-am-58.jpg',
                desc: 'Compact relief and monitor valve that safeguards downstream systems against overpressure.',
              },
            ].map((product, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6 }}>
                <Box sx={{ border: '1.5px solid', borderColor: 'divider', height: '100%' }}>
                  <Box
                    component="img"
                    src={product.image}
                    alt={product.name}
                    sx={{ width: '100%', height: 220, objectFit: 'contain', bgcolor: '#f9f9f9', borderBottom: '1px solid', borderColor: 'divider', p: 2 }}
                  />
                  <Box sx={{ p: 3 }}>
                    <Typography sx={{ fontFamily: DISPLAY_FONT, fontWeight: 700, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'primary.main', mb: 1 }}>
                      {product.category}
                    </Typography>
                    <Typography sx={{ fontFamily: DISPLAY_FONT, fontWeight: 900, fontSize: '1.3rem', color: 'text.primary', mb: 1, lineHeight: 1.1 }}>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      {product.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 6 }} />

          {/* ── DELIVERING VALUE ── */}
          <Typography variant="h3" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, textTransform: 'uppercase', color: 'primary.main' }}>
            Delivering Value Through Partnership
          </Typography>
          <Typography>
            At Valvenok, our focus has always been on helping customers find reliable, high-performance solutions that improve operational efficiency and long-term performance. The partnership with Pietro Fiorentini reflects our commitment to working with leading global manufacturers and bringing the best technologies to the markets we serve.
          </Typography>
          <Typography>
            Together, Valvenok and Pietro Fiorentini combine international expertise with local service — creating greater value for customers and supporting the evolving needs of the industrial and energy sectors.
          </Typography>

          {/* PILLARS */}
          <Grid container spacing={2} sx={{ my: 4 }}>
            {[
              { label: 'Premium', desc: "World-class products from one of Italy's most respected engineering manufacturers." },
              { label: 'Global', desc: 'Pietro Fiorentini technologies trusted by customers across the global energy chain.' },
              { label: 'Complete', desc: 'Full product range from pressure regulation to flow control and actuation.' },
              { label: 'Local Support', desc: 'Responsive technical support and application expertise from the Valvenok team.' },
            ].map((pillar, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box sx={{ p: 3, border: '1.5px solid', borderColor: 'primary.light', textAlign: 'center', height: '100%' }}>
                  <Typography sx={{ fontFamily: DISPLAY_FONT, fontWeight: 900, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'primary.main', mb: 1 }}>
                    {pillar.label}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {pillar.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 6 }} />

          {/* ── LOOKING AHEAD ── */}
          <Typography variant="h3" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, textTransform: 'uppercase', color: 'primary.main' }}>
            Looking Ahead
          </Typography>
          <Typography>
            We are excited about the opportunities this partnership creates and look forward to supporting our customers with Pietro Fiorentini's innovative product portfolio. To learn more about the Pietro Fiorentini range now available through Valvenok, contact our team or visit our website.
          </Typography>

          {/* INDUSTRY CHIPS */}
          <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ my: 4 }}>
            {['Oil & Gas', 'Energy', 'Chemical Processing', 'Water Treatment', 'Power Generation', 'Industrial Automation'].map(ind => (
              <Chip key={ind} label={ind} size="small" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 700, fontSize: '11px', letterSpacing: '0.08em', borderRadius: 0, height: 28, bgcolor: 'primary.main', color: 'white' }} />
            ))}
          </Stack>

          {/* ── CTA ── */}
          <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 5, mt: 8, textAlign: 'center' }}>
            <Typography variant="overline" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 700, letterSpacing: '0.3em', opacity: 0.8, display: 'block', mb: 1 }}>
              Italian Innovation. Delivered Through Valvenok.
            </Typography>
            <Typography variant="h4" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 900, mb: 2, color: 'white', textTransform: 'uppercase' }}>
              World-Class Engineering, Backed by Local Service.
            </Typography>
            <Typography sx={{ color: 'white !important', mb: 3, opacity: 0.9 }}>
              Talk to our team about the Pietro Fiorentini range — pressure regulators, industrial valves, flow-control solutions, and actuation technologies, all available through Valvenok.
            </Typography>
            <Typography variant="button" sx={{ fontWeight: 900, borderBottom: '2px solid white', pb: 1, cursor: 'pointer', color: 'white' }}>
              Contact Valvenok → sales@valvenok.com
            </Typography>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}