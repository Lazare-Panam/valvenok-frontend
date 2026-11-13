'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import CheckIcon from '@mui/icons-material/Check';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { alpha } from '@mui/material/styles';

const PILLARS = [
  {
    icon: VerifiedOutlinedIcon,
    title: 'JOSCAR Registered',
    body: 'Valvenok is a JOSCAR-registered supplier, meeting the stringent compliance requirements of the UK defence and aerospace supply chain. Our registration is independently verified and regularly audited.',
  },
  {
    icon: GroupsOutlinedIcon,
    title: 'BVAA Member',
    body: 'Valvenok is a member of the British Valve & Actuator Association, the UK trade association for the valve and actuator industry, with access to its technical reports, guides and brand-independent training.',
  },
  {
    icon: EngineeringOutlinedIcon,
    title: 'Rigorous Product Selection',
    body: 'Products in our catalogue are sourced from established manufacturers. We evaluate technical specifications, material certifications, pressure ratings, and traceability before a product is listed for sale.',
  },
  {
    icon: InventoryOutlinedIcon,
    title: 'Traceable Supply',
    body: 'Material traceability documentation is available for applicable product lines. Certificates of conformity, material test reports, and pressure test records can be requested — availability varies by product.',
  },
  {
    icon: HandshakeOutlinedIcon,
    title: 'Trusted Manufacturer Partners',
    body: 'We work with established manufacturers and review their quality and certification documentation as part of supplier selection. Certification varies by manufacturer and model.',
  },
];

const STANDARDS = [
  'ISO 9001 Quality Management',
  'PED 2014/68/EU Pressure Equipment',
  'ATEX Directive Compliance',
  'BS EN 12266 Valve Testing',
  'NACE MR0175 / ISO 15156',
  'Material Certs to EN 10204 3.1 / 3.2',
  'Hydrogen Service (H₂-ready) Components',
  'JOSCAR Registered Supplier',
  'BVAA Member',
];

const MATERIALS = [
  { grade: 'SS316 / SS316L', use: 'Corrosion-resistant instrumentation and process valves' },
  { grade: 'SS304 / SS304L', use: 'General purpose stainless applications' },
  { grade: 'Carbon Steel (A105)', use: 'High-pressure pipeline and flanged components' },
  { grade: 'Duplex / Super Duplex', use: 'Offshore and subsea environments' },
  { grade: 'Hastelloy C276', use: 'Highly corrosive chemical service' },
  { grade: 'PTFE / PEEK', use: 'Seat and seal materials for aggressive media' },
  { grade: 'Inconel 625', use: 'High-temperature and cryogenic applications' },
];

export default function QualityPage() {
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
            Our Commitment
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
            Quality &amp; Standards
          </Typography>
          <Typography
            sx={{
              color: (t) => alpha(t.palette.common.white, 0.55),
              fontSize: '16px',
              lineHeight: 1.7,
              maxWidth: 580,
            }}
          >
            Every component we supply is selected, stored, and dispatched to meet the demands 
            of critical industrial applications — from oil and gas to defence and hydrogen energy.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>

        {/* Quality Pillars */}
        <Box sx={{ mb: 10 }}>
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
            How We Maintain Quality
          </Typography>

          <Grid container spacing={3}>
            {PILLARS.map(({ icon: Icon, title, body }, i) => (
              <Grid size={{ xs: 12, md: i === PILLARS.length - 1 && PILLARS.length % 2 ? 12 : 6 }} key={i}>
                <Box
                  sx={{
                    p: 3.5,
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
                      width: 40,
                      height: 40,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: (t) => alpha(t.palette.primary.main, 0.1),
                      mb: 2,
                    }}
                  >
                    <Icon sx={{ fontSize: 20, color: 'primary.main' }} />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontWeight: 800,
                      fontSize: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'text.primary',
                      mb: 1.5,
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '15px', lineHeight: 1.75 }}>
                    {body}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* Standards & Compliance */}
        <Grid container spacing={{ xs: 6, md: 10 }} sx={{ mb: 10 }}>
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
                mb: 2,
              }}
            >
              Standards &amp; Compliance
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '15px', lineHeight: 1.8, mb: 3 }}>
              Our products and processes align with internationally recognised standards across 
              pressure equipment, materials, and quality management. We maintain documentation 
              to support customer audits and regulatory submissions.
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '15px', lineHeight: 1.8 }}>
              Certificates of conformity and material test reports are available upon request 
              for all applicable product lines. Contact our technical team to discuss 
              project-specific documentation requirements.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                overflow: 'hidden',
              }}
            >
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
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: (t) => alpha(t.palette.common.white, 0.6),
                  }}
                >
                  Applicable Standards
                </Typography>
              </Box>
              {STANDARDS.map((std, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    px: 3,
                    py: 1.75,
                    bgcolor: i % 2 === 0 ? 'background.default' : (t) => alpha(t.palette.primary.main, 0.03),
                    borderBottom: i < STANDARDS.length - 1 ? '1px solid' : 'none',
                    borderColor: 'divider',
                    '&:hover': { bgcolor: (t) => alpha(t.palette.primary.main, 0.07) },
                    transition: 'background 0.15s',
                  }}
                >
                  <CheckIcon sx={{ fontSize: 14, color: 'primary.main', flexShrink: 0 }} />
                  <Typography
                    sx={{
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'text.primary',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {std}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* Materials */}
        <Box>
          <Typography
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 800,
              fontSize: '1.1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'primary.main',
              mb: 1.5,
            }}
          >
            Material Grades We Stock
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '15px', lineHeight: 1.8, mb: 4, maxWidth: 600 }}>
            We hold inventory across a wide range of material grades to support diverse 
            engineering applications. All materials are sourced with full traceability.
          </Typography>

          <Box sx={{ border: '1px solid', borderColor: 'divider', overflow: 'hidden' }}>
            {/* Table header */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                px: 3,
                py: 1.5,
                bgcolor: 'text.primary',
                gap: 3,
              }}
            >
              {['Material Grade', 'Typical Application'].map((h) => (
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

            {MATERIALS.map((mat, i) => (
              <Box
                key={i}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr',
                  px: 3,
                  py: 2,
                  gap: 3,
                  alignItems: 'center',
                  bgcolor: i % 2 === 0 ? 'background.default' : (t) => alpha(t.palette.primary.main, 0.03),
                  borderBottom: i < MATERIALS.length - 1 ? '1px solid' : 'none',
                  borderColor: 'divider',
                  transition: 'background 0.15s',
                  '&:hover': { bgcolor: (t) => alpha(t.palette.primary.main, 0.07) },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: '13px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'primary.main',
                  }}
                >
                  {mat.grade}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'text.primary',
                    letterSpacing: '0.02em',
                  }}
                >
                  {mat.use}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

      </Container>
    </Box>
  );
}