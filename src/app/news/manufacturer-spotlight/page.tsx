'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
  Divider,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const manufacturers = [
  { initials: 'FE',  name: 'Fisher / Emerson',      img: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776071072/f6b8803c-7833-40b1-9311-228c31e14a92.png', spec: 'Control valves, regulators. Global Benchmark for precision process control.' },
  { initials: 'CAM', name: 'Cameron (SLB)',           img: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776251705/eb9a9389-dd35-478e-b4d7-fc7d905ebfcd.png', spec: 'Gate, ball, check valves. API 6D certified. Upstream Oil & Gas standard.' },
  { initials: 'AG',  name: 'Anderson Greenwood',      img: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776251732/21571155-0d7a-46b0-b79f-854a7bbedee8.png', spec: 'Pilot-operated relief valves. API 520/521. Refining & petrochemical.' },
  { initials: 'BH',  name: 'Baker Hughes',            img: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776069683/f64364c8-1094-47f2-882a-5cedb56a389c.png', spec: 'Subsea and surface valve systems. HPHT applications globally.' },
  { initials: 'BET', name: 'Bettis',                  img: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776251807/09d61023-3bd5-47c3-a85c-8682746457a0.png', spec: 'Actuators for quarter-turn and multi-turn valve automation.' },
  { initials: 'KUN', name: 'Kunkle Valve',            img: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776251856/e4f2f974-6400-4a0c-9166-484edab335ea.png', spec: 'ASME & NB certified safety relief. 2–6,000 PSI range.' },
  { initials: 'HYD', name: 'Hydroseal Valve Co.',     img: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776251883/f778d9b5-dcbb-4123-a3ca-8ce24bd1ecc8.png', spec: 'Gate, globe, check, ball for industrial and utility service.' },
  { initials: 'AQU', name: 'Aquatrol',                img: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776070644/23b997aa-777a-4b3a-a817-b5b76d9135c8.png', spec: 'Relief valves for water treatment, boilers, steam utility.' },
  { initials: 'TVT', name: 'Taylor Valve Tech',       img: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776069906/0dbb9e92-bdb4-4710-a165-11cedaafd289.png', spec: 'Fire-safe ball valves. API 607 & 6FA. Energy and pipeline sector.' },
  { initials: 'CW',  name: 'Curtiss-Wright',          img: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776069969/a725d89f-6c4a-41dc-9151-7a5d37ac0c0d.png', spec: 'Nuclear and defense-grade. ASME N-stamp. Extreme service.' },
  { initials: 'LES', name: 'Leser',                   img: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776251966/247a1fc2-d1ed-4fa3-859f-451c1d2e2959.png', spec: 'European safety valve authority. PED, TÜV, AD2000 certified.' },
  { initials: 'FHT', name: 'FHT Valves',              img: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776252496/51f84bd6-aa49-4920-a1ef-9f5957c5f015.png', spec: 'Industrial valve range for MRO and project procurement.' },
  { initials: 'MER', name: 'Mercer Valve Co.',        img: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776070145/68b0296b-8db9-4351-8706-b8d6e3a1223c.png', spec: 'Auto-seat technology. Safety & relief for industrial gas service.' },
  { initials: 'BAT', name: 'Batu Valve',              img: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1774530741/logo_i2lhxi.png', spec: 'Gate, globe, check, ball for oil & gas, water, and process.' },
  { initials: 'ATM', name: 'ATAM Valve',              img: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776252030/9cb32873-71eb-4bee-a40c-d253a2d1ef5b.png', spec: 'Valves, fittings, and boiler mountings for process & utilities.' },
  { initials: 'CRO', name: 'Crosby Valves',           img: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776252037/8b4d3f3f-7e9d-4266-a753-5ccf4206d714.png', spec: '150+ years of safety relief heritage. Global API RP 520 authority.' },
];

const categories = ['Control','Oil & Gas','Relief','Subsea','Actuation','Safety','Industrial','Utility','Ball','Nuclear','Safety','MRO','Gas','Gate/Globe','Fittings','Safety'];

const sidebarLinks = manufacturers.map(m => m.name);

const whyPoints = [
  'One RFQ returned with competitive options from multiple manufacturers simultaneously.',
  'Immediate alternative proposals when your primary brand has extended lead times — with full certification cross-reference.',
  'Competitive tension on project procurement: real pricing and availability data, not a single-brand list price.',
  'In-depth manufacturer knowledge: we know where each brand excels and where an alternative is the better specification fit.',
];

export default function ManufacturerSpotlightPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 10 }}>

      {/* HERO */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', pt: 15, pb: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="flex-start">

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, letterSpacing: '0.4em', opacity: 0.8 }}>
                Manufacturer Spotlight · Valvenok Partner Network
              </Typography>
              <Typography variant="h1" sx={{ fontFamily: '"Barlow Condensed"', fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, mt: 1, mb: 2 }}>
                The World's Best Valve Manufacturers, In One Place
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.85, fontStyle: 'italic', fontWeight: 300, mb: 4 }}>
                16 leading manufacturers. 6 continents. One procurement relationship.
              </Typography>
              <Stack direction="row" spacing={3} sx={{ opacity: 0.8 }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <PersonOutlineIcon fontSize="small" />
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>Kanchan</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <AccessTimeIcon fontSize="small" />
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>April 2026</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <AccessTimeIcon fontSize="small" />
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>8 min read</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* BODY */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={8} alignItems="flex-start">

          {/* Article */}
          <Grid size={{ xs: 12, md: 8 }}>

            <Typography sx={{ fontFamily: '"Barlow Condensed"', fontStyle: 'italic', fontSize: '1.4rem', lineHeight: 1.65, color: 'text.primary', mb: 3, fontWeight: 400 }}>
              When you source through Valvenok, you're not choosing from one catalogue — you're accessing 16 of the world's most trusted manufacturers simultaneously.
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2, fontSize: '1.05rem' }}>
              Each manufacturer in our network was selected on engineering pedigree, Global Certification credentials, and performance reliability in critical applications. Below are all 16, with a technical profile of each.
            </Typography>

            <Divider sx={{ my: 5 }} />

            <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 3, textTransform: 'uppercase', color: 'primary.main' }}>
              Our 16 Manufacturer Partners
            </Typography>

            {/* Cards */}
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', bgcolor: 'divider', border: '1px solid', borderColor: 'divider', borderRadius: 0, overflow: 'hidden', mb: 6 }}>
              {manufacturers.map((m, i) => (
                <Box
                  key={i}
                  sx={{
                    bgcolor: 'background.paper',
                    transition: 'background .2s',
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.02)' },
                  }}
                >
                  {/* Image */}
                  <Box sx={{ width: '100%', height: 100, bgcolor: 'grey.50', borderBottom: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <Box component="img" src={m.img} alt={m.name} sx={{ width: '100%', height: '100%', objectFit: 'contain', p: 2 }} />
                  </Box>
                  {/* Body */}
                  <Box sx={{ p: 2.5 }}>
                    <Typography variant="caption" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'primary.main', display: 'block', mb: 0.5, fontSize: '0.65rem' }}>
                      {categories[i]}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.75, fontSize: '0.875rem', fontFamily: '"Barlow Condensed"', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                      {m.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.disabled', lineHeight: 1.5, display: 'block' }}>
                      {m.spec}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            <Divider sx={{ my: 5 }} />

            <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase', color: 'primary.main' }}>
              Why Partner with Us?
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2, fontSize: '1.05rem' }}>
              Managing 16 manufacturer relationships individually means 16 purchase orders, 16 lead time negotiations, and 16 points of failure. Valvenok consolidates everything — one RFQ, all brands covered, the best option recommended.
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4, fontSize: '1.05rem' }}>
              This single-source model is particularly valuable in MRO procurement, where urgency and interchangeability often matter more than granular specification detail. Our team understands each manufacturer's product range in depth — we know where Fisher excels and where a Cameron or Taylor Valve alternative might be the better fit.
            </Typography>

            <Paper elevation={0} sx={{ p: 4, border: '1px solid', borderColor: 'divider', borderRadius: 0, mb: 6, borderLeft: '8px solid', borderLeftColor: 'primary.main' }}>
              <Typography variant="h4" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 900, mb: 3, textTransform: 'uppercase' }}>
                The Single-Source Advantage
              </Typography>
              <Grid container spacing={2}>
                {whyPoints.map((text, i) => (
                  <Grid key={i} size={{ xs: 12, sm: 6 }}>
                    <Stack direction="row" spacing={1} alignItems="flex-start">
                      <CheckCircleOutlineIcon sx={{ color: 'primary.main', fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>{text}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Paper>

            <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 5, textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2 }}>
                READY TO SOURCE FROM ALL 16 BRANDS?
              </Typography>
              <Typography sx={{ color: 'white !important', mb: 3, opacity: 0.9 }}>
                Send us your data sheet or RFQ — we'll return competitive options across our full manufacturer network.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="center" spacing={3}>
                {['sales@valvenok.com', '+44 7359 138 034', 'www.valvenok.com'].map((item, i) => (
                  <Typography key={i} variant="button" sx={{ fontWeight: 900, borderBottom: '2px solid', pb: 1, cursor: 'pointer' }}>
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Box>

          </Grid>

          {/* Sidebar */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: 'sticky', top: 88 }}>

              <Box sx={{ bgcolor: 'text.primary', p: 3, mb: 2, textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, textTransform: 'uppercase', color: 'white', mb: 1, letterSpacing: '0.05em' }}>
                  Need a Quote?
                </Typography>
                <Typography variant="caption" sx={{ color: '#666', display: 'block', mb: 2, lineHeight: 1.6 }}>
                  Send your data sheet and we'll return options from all 16 brands.
                </Typography>
                <Box component="a" href="mailto:sales@valvenok.com" sx={{ display: 'block', bgcolor: 'primary.main', color: 'white', textDecoration: 'none', p: 1.25, fontSize: '0.8rem', fontWeight: 700, fontFamily: '"Barlow Condensed"', textTransform: 'uppercase', letterSpacing: '0.08em', transition: 'opacity .2s', '&:hover': { opacity: 0.85 } }}>
                  Request a Quote ↗
                </Box>
              </Box>

              <Paper elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 0, overflow: 'hidden' }}>
                <Box sx={{ px: 2, py: 1.5, borderBottom: '1px solid', borderColor: 'divider', bgcolor: 'grey.50' }}>
                  <Typography variant="overline" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, letterSpacing: '0.2em', color: 'text.disabled', fontSize: '0.65rem' }}>
                    16 Manufacturer Partners
                  </Typography>
                </Box>
                {sidebarLinks.map((name, i) => (
                  <Box key={i} sx={{ px: 2, py: 1.1, borderBottom: i < sidebarLinks.length - 1 ? '1px solid' : 'none', borderColor: 'divider', fontSize: '0.8rem', color: 'text.secondary', cursor: 'pointer', transition: 'background .15s, color .15s', '&:hover': { bgcolor: 'rgba(0,0,0,0.02)', color: 'primary.main' } }}>
                    {name}
                  </Box>
                ))}
              </Paper>

            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}