'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InventoryOutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import { alpha } from '@mui/material/styles';

const VALUES = [
  {
    icon: InventoryOutlinedIcon,
    title: 'Stock First',
    body: 'We invest in inventory so you don\'t have to wait. If it\'s on the website, it\'s in our warehouse.',
  },
  {
    icon: BoltOutlinedIcon,
    title: 'Fast Dispatch',
    body: 'All stocked orders are dispatched within 2–3 working days. No excuses, no delays, no minimum order.',
  },
  {
    icon: VerifiedOutlinedIcon,
    title: 'Traceable Quality',
    body: 'Every product is sourced from approved manufacturers with full material traceability and certificates on request.',
  },
  {
    icon: HandshakeOutlinedIcon,
    title: 'Straight Talking',
    body: 'We\'re engineers first. We give you straight answers, honest pricing, and no sales runaround.',
  },
];

export default function AboutValues() {
  return (
    <Box
      sx={{
        bgcolor: (t) => alpha(t.palette.text.primary, 0.03),
        py: { xs: 8, md: 12 },
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
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
            What We Stand For
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 900,
              fontSize: { xs: '2.2rem', md: '3rem' },
              lineHeight: 1.0,
              textTransform: 'uppercase',
              color: 'text.primary',
            }}
          >
            Our Values
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          {VALUES.map(({ icon: Icon, title, body }, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
              <Box
                sx={{
                  p: 3.5,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderTop: '3px solid',
                  borderTopColor: 'primary.main',
                  bgcolor: 'background.default',
                  transition: 'all 0.2s',
                  '&:hover': {
                    boxShadow: (t) => `0 8px 32px ${alpha(t.palette.text.primary, 0.08)}`,
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: (t) => alpha(t.palette.primary.main, 0.1),
                    mb: 2.5,
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
                <Typography sx={{ color: 'text.secondary', fontSize: '14px', lineHeight: 1.75 }}>
                  {body}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}