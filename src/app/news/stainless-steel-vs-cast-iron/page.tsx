'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Link
} from '@mui/material';
import Grid from '@mui/material/Grid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function SubmersiblePumpsPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 10 }}>

      {/* --- HERO SECTION --- */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', pt: 15, pb: 10 }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, letterSpacing: '0.4em', opacity: 0.8 }}>
            Engineering Deep-Dive
          </Typography>
          <Typography variant="h1" sx={{ fontFamily: '"Barlow Condensed"', fontSize: { xs: '2.5rem', md: '4.5rem' }, fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, mt: 1 }}>
            Stainless Steel vs Cast Iron: Choosing the Right Submersible Pump for Your Industry
          </Typography>
          <Typography variant="h5" sx={{ mt: 2, opacity: 0.85, fontStyle: 'italic' }}>
            A Complete Engineering Guide
          </Typography>
          <Stack direction="row" spacing={3} sx={{ mt: 4, opacity: 0.8 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PersonOutlineIcon fontSize="small" />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>Sejal Raina</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <AccessTimeIcon fontSize="small" />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>May 2026</Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ mt: -5 }}>

        {/* --- KEY TAKEAWAYS --- */}
        <Paper elevation={10} sx={{ p: 4, borderRadius: 0, borderLeft: '8px solid', borderColor: 'primary.main', mb: 8 }}>
          <Typography variant="h4" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 900, mb: 3, textTransform: 'uppercase' }}>
            Key Takeaways
          </Typography>
          <Grid container spacing={2}>
            {[
              "Water chemistry — not pump price — is the correct starting point for every submersible specification.",
              "PREN is the single number that tells you whether a stainless grade will survive your chloride load. 304 ≈ 19, 316 ≈ 26, 904L ≈ 35.",
              "Cast iron is not a compromise — it is the right answer for dewatering, irrigation, and high-flow municipal duty in fresh water.",
              "Never run a submersible dry. The pumped fluid is the bearing lubricant, the thrust-cushion film, and the motor coolant — all at once.",
              "The pump is a fraction of installed cost. The borewell retrieval is the rest. Specify against the borewell, not the budget line.",
              "904L returns 2–3× the mean time between overhauls of 316L in continuous brackish service."
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

        {/* --- BANNER IMAGE --- */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Box
            component="img"
            src="https://pblol2.blob.core.windows.net/valvenok-images/blogs/pumps-blog-hero.jpg"
            alt="Tormac Submersible Pump Range"
            sx={{ width: '100%', maxWidth: '100%', border: '1px solid', borderColor: 'divider' }}
          />
        </Box>

        {/* --- ARTICLE BODY --- */}
        <Box sx={{ '& p': { mb: 3, lineHeight: 1.8, color: 'text.secondary', fontSize: '1.1rem' } }}>

          {/* Intro */}
          <Typography>
            Choosing the wrong submersible pump material can quietly drain a project budget — through premature corrosion, unscheduled downtime, motor burnouts, and replacement labour in a borewell that is already cased and sealed.
          </Typography>
          <Typography>
            For most industrial buyers, the decision narrows to two metallurgies. At Panam Valve, our Tormac range is engineered in both configurations — the stainless steel TS / TN / 904L series in 4″, 6″, 8″ and 10″, and the heavy-duty cast iron TC / TB series in 6″ and 8″. Each was built for a specific service profile, water chemistry and lifecycle target. This guide breaks the engineering down so you can specify correctly the first time.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* 01 Material Construction */}
          <Typography variant="overline" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, letterSpacing: '0.3em', color: 'primary.main', fontSize: '0.8rem' }}>
            01 · Material Construction
          </Typography>
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase', color: 'primary.main' }}>
            What the Wetted Parts Actually Have to Survive
          </Typography>
          <Typography>
            A submersible pump operates fully immersed, often hundreds of metres below ground. The wetted components — impeller, diffuser, valve housing, shaft, cable guard and suction interconnector — are in continuous contact with the pumped fluid. The fluid itself sets the operating envelope. Every Tormac pump is rated for water that stays inside this window:
          </Typography>

          {/* Pumped Liquid Envelope Table */}
          <Grid container spacing={2} sx={{ mb: 4, mt: 1 }}>
            {[
              { label: "pH", val: "6.5 – 8.5", sub: "non-aggressive range" },
              { label: "Chloride Density", val: "≤ 500 ppm", sub: "max" },
              { label: "Dissolved Solids", val: "≤ 3000 ppm", sub: "allowable" },
              { label: "Permissible Sand", val: "≤ 50 g / m³", sub: "" },
              { label: "Turbidity", val: "≤ 50 ppm", sub: "silica scale" },
              { label: "Hardness", val: "≤ 300", sub: "drinking water" },
              { label: "Specific Gravity", val: "≤ 1.004", sub: "cold fresh water" },
              { label: "Temperature", val: "38 / 90 °C", sub: "NBR · VITON seals" },
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 6, sm: 3 }}>
                <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', height: '100%' }}>
                  <Typography variant="caption" sx={{ fontWeight: 800, color: 'primary.main', display: 'block', textTransform: 'uppercase' }}>{item.label}</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 900, display: 'block' }}>{item.val}</Typography>
                  {item.sub && <Typography variant="caption" sx={{ color: 'text.secondary' }}>{item.sub}</Typography>}
                </Box>
              </Grid>
            ))}
          </Grid>

          <Typography>
            The closer your field water sits to the upper limits — particularly on chloride content, abrasive sand load and dissolved solids — the more aggressively the wetted parts degrade. That degradation curve is what separates corrosion-resistant stainless steel from cost-effective cast iron.
          </Typography>

          <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase', mt: 4 }}>
            The Chemistry Behind Corrosion
          </Typography>
          <Typography>
            Stainless steels survive in water because a thin (~2 nm) chromium-oxide passive film re-forms continuously in the presence of oxygen. Chloride ions disrupt that film locally, initiating pitting corrosion — a micro-defect that progresses faster than uniform attack and is the single largest cause of premature stainless failure in coastal and brackish service. The threshold at which a given grade resists pitting is captured by its Pitting Resistance Equivalent Number (PREN):
          </Typography>

          {/* PREN callout */}
          <Grid container spacing={2} sx={{ mb: 4, mt: 1 }}>
            {[
              { grade: "AISI 304", pren: "PREN ≈ 19" },
              { grade: "AISI 316", pren: "PREN ≈ 26" },
              { grade: "AISI 904L", pren: "PREN ≈ 35" },
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 12, sm: 4 }}>
                <Box sx={{ p: 3, border: '2px solid', borderColor: 'primary.main', textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 900, textTransform: 'uppercase' }}>{item.grade}</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 900, color: 'primary.main' }}>{item.pren}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Typography>
            PREN = %Cr + 3.3 × %Mo + 16 × %N. Higher is harder to pit. Cast iron, by contrast, depends entirely on flow chemistry and cathodic protection — there is no passive film.
          </Typography>

          {/* Pull quote */}
          <Paper elevation={0} sx={{ p: 4, my: 5, borderLeft: '8px solid', borderColor: 'primary.main', bgcolor: 'action.hover' }}>
            <Typography variant="h6" sx={{ fontFamily: '"Barlow Condensed"', fontStyle: 'italic', fontWeight: 700, mb: 1 }}>
              "The pump itself is a fraction of installed cost. The retrieval is the rest. Specify against the borewell, not the budget line."
            </Typography>
            <Typography variant="caption" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em' }}>— Panam Engineering Desk</Typography>
          </Paper>

          <Divider sx={{ my: 6 }} />

          {/* 02 Anatomy */}
          <Typography variant="overline" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, letterSpacing: '0.3em', color: 'primary.main', fontSize: '0.8rem' }}>
            02 · Anatomy
          </Typography>
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase', color: 'primary.main' }}>
            How a Tormac Submersible Pump Is Built
          </Typography>
          <Typography>
            Whichever metallurgy you specify, every Tormac submersible inherits the same hydraulic and mechanical foundation: a multistage, single-suction centrifugal design driven by a NEMA-coupled submersible motor. Here are the six elements that define the platform:
          </Typography>

          <List sx={{ mb: 3 }}>
            {[
              { title: "Multistage Single-Suction Hydraulic", body: "Stages stacked on a common shaft generate head proportional to stage count. The single-suction design keeps thrust axially loaded onto the motor's thrust bearing — the bearing that defines the pump's service life." },
              { title: "Impeller & Diffuser", body: "The wetted hydraulic. Stainless variants use fabricated AISI 304, 316 or 904L sheet — not plated, not clad. Cast iron variants use bronze or AISI 304 impellers running in cast iron diffusers. The choice here dictates corrosion life." },
              { title: "Integral Check Valve", body: "Built into the valve housing, the check valve prevents reverse flow on shutdown — eliminating up-thrust, water hammer and rotor reverse-rotation, the three failure modes that kill submersibles within their first year of service." },
              { title: "NEMA Standard Coupling", body: "An AISI 329 (or 904L for super-duty) coupling that mates the pump to any NEMA-standard submersible motor — Tormac's own Eco, Esteem (resin-filled) or Elegant (oil-filled) ranges, or any compatible third-party unit." },
              { title: "Pump Shaft", body: "Stainless variants use AISI 304 / 431. Cast iron variants step up to AISI 410 / 431 for the additional torque carried by high-mass castings. The shaft is the single most stressed wetted component in the pump." },
              { title: "Suction Screen & Cable Guard", body: "Sized to maintain inflow while excluding sand and debris within the 50 g/m³ permissible-sand envelope. The cable guard protects the power lead during installation and over thirty years of thermal cycling in the borewell." },
            ].map((item, i) => (
              <ListItem key={i} sx={{ px: 0, alignItems: 'flex-start' }}>
                <ListItemIcon sx={{ minWidth: 32, mt: 0.3 }}><CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'primary.main' }} /></ListItemIcon>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 800, textTransform: 'uppercase' }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.secondary', mt: 0.5 }}>{item.body}</Typography>
                </Box>
              </ListItem>
            ))}
          </List>

          {/* Warning callout */}
          <Paper elevation={0} sx={{ p: 4, my: 5, borderLeft: '8px solid', borderColor: 'error.main', bgcolor: 'error.50' }}>
            <Typography variant="h6" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 900, textTransform: 'uppercase', color: 'error.main', mb: 1 }}>
              ⚠ Never Run a Submersible Dry
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              The pumped fluid is the bearing lubricant, the thrust-cushion film and the motor coolant — all at once. Even a few minutes of dry running glaze the bearing surfaces and shorten service life by years. Always protect the pump with a dry-run / low-water-level cut-off in the control panel.
            </Typography>
          </Paper>

          <Divider sx={{ my: 6 }} />

          {/* 03 Stainless Steel Range */}
          <Typography variant="overline" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, letterSpacing: '0.3em', color: 'primary.main', fontSize: '0.8rem' }}>
            03 · Stainless Steel Range
          </Typography>
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase', color: 'primary.main' }}>
            The TS, TN and 904L Series — Built for the Borewell That Cannot Be Re-Drilled
          </Typography>
          <Typography>
            Tormac stainless steel submersible pumps use complete stainless construction across every wetted component. This is not surface plating or a SS-clad cast core. Impellers and diffusers are fabricated from austenitic stainless steel sheet — AISI 304, AISI 316, or for the most aggressive duties, AISI 904L super-austenitic. The shaft is AISI 304 / 431, the coupling AISI 329, the integral NEMA-coupled check valve also stainless. The result resists galvanic and pitting corrosion and exceptionally extends lifespan over ferrous-bodied alternatives.
          </Typography>

          {/* Stainless spec cards */}
          <Grid container spacing={3} sx={{ mb: 4, mt: 2 }}>
            {[
              {
                title: '4″ Stainless Steel Submersible',
                series: 'TS / TN Series · 4″',
                specs: [
                  { label: 'Power', val: 'Up to 7.5 kW (3-PH) · Up to 2.2 kW 1-Phase' },
                  { label: 'Speed', val: '2900 RPM' },
                  { label: 'Flow', val: '7.2 – 317 lpm · 0.40 – 19 m³/h' },
                  { label: 'Head', val: '13 – 1754 ft · 4 – 535 m' },
                  { label: 'Delivery', val: '32, 40 & 50 mm' },
                  { label: 'Materials', val: 'Impeller · 304/316 · Diffuser · 304/316 · Shaft · 304/431 · Coupling · 329' },
                ]
              },
              {
                title: '6″ Stainless Steel Submersible',
                series: 'TS / TN / 904L Series · 6″',
                specs: [
                  { label: 'Power', val: '3 – 60 HP' },
                  { label: 'Speed', val: '3450 RPM' },
                  { label: 'Flow', val: '4.54 – 90 m³/h · 20 – 400 USGPM' },
                  { label: 'Head', val: '7 – 1960 ft · 2 – 588 m (deepest in catalogue)' },
                  { label: 'Delivery', val: '2″, 2½″, 3″ & 4″' },
                  { label: 'Materials', val: 'Impeller · 304/316/904L · Diffuser · 304/316/904L · Shaft · 304/431 · Coupling · 329/904L' },
                ]
              },
              {
                title: '8″ Stainless Steel Submersible',
                series: 'TS / TN / 904L Series · 8″',
                specs: [
                  { label: 'Power', val: '5.5 – 110 kW (10″ up to 220 kW)' },
                  { label: 'Speed', val: '2900 RPM' },
                  { label: 'Flow', val: '330 – 2100 lpm · 20 – 126 m³/h' },
                  { label: 'Head', val: '26.24 – 1561 ft · 8 – 437 m' },
                  { label: 'Delivery', val: '100 & 125 mm' },
                  { label: 'Materials', val: 'All wetted · 304/316/904L · Shaft · 304/431' },
                ]
              },
            ].map((card, i) => (
              <Grid key={i} size={{ xs: 12, sm: 4 }}>
                <Box sx={{ p: 3, border: '1px solid', borderColor: 'primary.main', height: '100%' }}>
                  <Typography variant="caption" sx={{ fontWeight: 900, color: 'primary.main', textTransform: 'uppercase', display: 'block', mb: 0.5 }}>{card.title}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 800, mb: 2, borderBottom: '1px solid', borderColor: 'divider', pb: 1 }}>{card.series}</Typography>
                  {card.specs.map((s, j) => (
                    <Box key={j} sx={{ mb: 1 }}>
                      <Typography variant="caption" sx={{ fontWeight: 800, color: 'text.secondary', textTransform: 'uppercase', display: 'block' }}>{s.label}</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>{s.val}</Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase', mt: 4 }}>
            What the 904L Upgrade Actually Buys You
          </Typography>
          <Typography>
            The "L" in 904L denotes low carbon — critical for avoiding sensitisation during welding of the fabricated wetted parts. The grade itself is a super-austenitic stainless designed for the most aggressive chloride-bearing service:
          </Typography>

          <Grid container spacing={2} sx={{ mb: 3, mt: 1 }}>
            {[
              { label: "Chromium · Cr", val: "~ 20.0 %", sub: "passive film former" },
              { label: "Nickel · Ni", val: "~ 25.0 %", sub: "austenite stabiliser" },
              { label: "Molybdenum · Mo", val: "~ 4.5 %", sub: "pitting resistance" },
              { label: "Copper · Cu", val: "~ 1.5 %", sub: "reducing-acid duty" },
              { label: "Carbon · C", val: "≤ 0.02 %", sub: "avoids sensitisation" },
              { label: "Nitrogen · N", val: "~ 0.10 %", sub: "PREN contributor" },
              { label: "PREN", val: "≈ 35", sub: "pitting resistance number" },
              { label: "MTBO Uplift", val: "2–3 ×", sub: "vs 316L in brackish duty" },
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 6, sm: 3 }}>
                <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', height: '100%' }}>
                  <Typography variant="caption" sx={{ fontWeight: 800, color: 'primary.main', display: 'block', textTransform: 'uppercase' }}>{item.label}</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 900 }}>{item.val}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>{item.sub}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Typography>
            Specify 904L when the duty involves seawater intake, brackish dewatering, sulphide-bearing mine water, or chemical-process makeup water that approaches the 500 ppm chloride ceiling. The upgrade typically returns 2–3× the Mean Time Between Overhauls of 316L in continuous brackish service.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* 04 Cast Iron Range */}
          <Typography variant="overline" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, letterSpacing: '0.3em', color: 'primary.main', fontSize: '0.8rem' }}>
            04 · Cast Iron Range
          </Typography>
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase', color: 'primary.main' }}>
            The TC and TB Series — Workhorses for Dewatering and Irrigation
          </Typography>
          <Typography>
            Cast iron submersible pumps are the right specification where mass, mechanical robustness and unit economics matter more than chloride resistance. The Tormac TC / TB series runs bronze or AISI 304 impellers in cast iron diffusers and cast iron valve housings, with an AISI 410 / 431 pump shaft and AISI 329 coupling. The high-mass cast iron body provides excellent vibration damping and rigidity for high-thrust, high-torque duty — and absorbs hydraulic shock from intermittent dry runs and abrasive ingress better than thin-walled stainless.
          </Typography>

          <Grid container spacing={3} sx={{ mb: 4, mt: 2 }}>
            {[
              {
                title: '6″ Cast Iron Submersible',
                series: 'TC / TB Series · 6″',
                specs: [
                  { label: 'Power', val: '3.7 – 26 kW' },
                  { label: 'Speed', val: '2900 RPM' },
                  { label: 'Flow', val: '133 – 1333 lpm · 8 – 80 m³/h' },
                  { label: 'Head', val: '6.5 – 902 ft · 2 – 275 m' },
                  { label: 'Delivery', val: '62, 75 & 100 mm' },
                  { label: 'Materials', val: 'Impeller · CI / Bronze / 304 · Diffuser · Cast Iron · Valve housing · Cast Iron · Shaft · 410/431' },
                ]
              },
              {
                title: '8″ Cast Iron Submersible',
                series: 'TC / TB Series · 8″',
                specs: [
                  { label: 'Power', val: '7.5 – 93 kW' },
                  { label: 'Speed', val: '2900 RPM' },
                  { label: 'Flow', val: '500 – 3000 lpm · 20 – 180 m³/h (highest in platform)' },
                  { label: 'Head', val: '6.5 – 1214 ft · 2 – 370 m' },
                  { label: 'Delivery', val: '80, 100, 125 & 150 mm' },
                  { label: 'Materials', val: 'Impeller · CI / Bronze / 304 · Diffuser · Cast Iron · Valve housing · Cast Iron · Shaft · 410/431' },
                ]
              },
            ].map((card, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6 }}>
                <Box sx={{ p: 3, border: '1px solid', borderColor: 'divider', height: '100%' }}>
                  <Typography variant="caption" sx={{ fontWeight: 900, color: 'primary.main', textTransform: 'uppercase', display: 'block', mb: 0.5 }}>{card.title}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 800, mb: 2, borderBottom: '1px solid', borderColor: 'divider', pb: 1 }}>{card.series}</Typography>
                  {card.specs.map((s, j) => (
                    <Box key={j} sx={{ mb: 1 }}>
                      <Typography variant="caption" sx={{ fontWeight: 800, color: 'text.secondary', textTransform: 'uppercase', display: 'block' }}>{s.label}</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>{s.val}</Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 6 }} />

          {/* Stainless vs Cast Iron Comparison */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 3, textTransform: 'uppercase', color: 'primary.main' }}>
            Stainless Steel vs Cast Iron: Quick Comparison
          </Typography>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {[
              { label: "Sizes available", ss: "4″, 6″, 8″, 10″", ci: "6″, 8″" },
              { label: "Max flow", ss: "126 m³/h (8″ SS)", ci: "180 m³/h (8″ CI — highest in platform)" },
              { label: "Max head", ss: "588 m (6″ SS — deepest in catalogue)", ci: "370 m (8″ CI)" },
              { label: "Corrosion resistance", ss: "Excellent — PREN 19 to 35 depending on grade", ci: "Moderate — fresh water and low-chloride service only" },
              { label: "Abrasion resistance", ss: "Good — thin-walled fabricated sheet", ci: "Excellent — high-mass casting absorbs hydraulic shock" },
              { label: "Dry-run tolerance", ss: "Low — like all submersibles, needs low-level cut-off", ci: "Marginally better — high thermal mass, but still damaging" },
              { label: "Best for", ss: "Coastal, brackish, chemical, pharmaceutical, food-grade, high-value boreholes", ci: "Dewatering, irrigation, municipal supply, construction, high-flow fresh water" },
              { label: "Relative cost", ss: "Higher capital — repaid in longer service life in aggressive water", ci: "Lower capital — most cost-effective for straightforward fresh water duty" },
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6 }}>
                <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="caption" sx={{ fontWeight: 800, color: 'primary.main', display: 'block', textTransform: 'uppercase' }}>{item.label}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>Stainless: {item.ss}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.secondary' }}>Cast Iron: {item.ci}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 6 }} />

          {/* Advantages and Limitations */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 3, textTransform: 'uppercase', color: 'primary.main' }}>
            Advantages and Limitations
          </Typography>
          <Grid container spacing={4} sx={{ mb: 4 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase' }}>Where Stainless Wins</Typography>
              <List>
                {[
                  "Passive chromium-oxide film provides continuous self-repair in oxygenated water — corrosion resistance does not wear away.",
                  "904L grade handles seawater chloride loads that destroy 316L in months.",
                  "Lighter weight than equivalent cast iron — easier to handle during installation and retrieval.",
                  "No risk of cast-iron graphitisation in soft, acidic water (a failure mode that leaves the pump looking intact while the iron has dissolved).",
                  "Approved for potable, food-grade and pharmaceutical water service with appropriate elastomers.",
                ].map((text, i) => (
                  <ListItem key={i} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'primary.main' }} /></ListItemIcon>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{text}</Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase' }}>Where Cast Iron Wins</Typography>
              <List>
                {[
                  "Lower capital cost — the right answer for high-volume dewatering and irrigation where water chemistry is known and benign.",
                  "Higher thermal mass absorbs shock loads from intermittent operation better than thin-walled stainless fabrications.",
                  "Available to 180 m³/h flow — the highest in the Tormac platform — for large-diameter municipal and mine dewatering boreholes.",
                  "Excellent vibration damping at high torque, reducing fatigue on the shaft and coupling over long service intervals.",
                  "Easier to repair in the field — cast sections can be re-machined or replaced without full cartridge replacement.",
                ].map((text, i) => (
                  <ListItem key={i} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'primary.main' }} /></ListItemIcon>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{text}</Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>

          <Divider sx={{ my: 6 }} />

          {/* Selection Guide */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 3, textTransform: 'uppercase', color: 'primary.main' }}>
            Selection Guide
          </Typography>
          <Typography>
            Work through these five questions in order. Skipping any of them is the most common cause of premature pump failure in the field.
          </Typography>
          <List sx={{ mb: 3 }}>
            {[
              "What is the water chemistry? Get a full analysis — pH, chloride content, dissolved solids, sand load, turbidity, hardness. This is the single most important input and the one most often skipped.",
              "What is the borewell diameter? This sets your pump size: 4″, 6″, 8″ or 10″. Do not assume — measure or pull the driller's log.",
              "What flow and head does the system demand? Work backwards from the peak demand, friction losses, and static head. Add a 10–15% margin for pipe fouling over the service life.",
              "What is the operating regime? Continuous duty, cyclic duty, or standby? Cyclic operation puts more fatigue on the shaft and more thermal shock on the motor — both push the specification toward stainless.",
              "What are the maintenance constraints? Is the pump retrievable for cartridge service, or is it a fixed installation that will run to failure? The harder to retrieve, the more important to specify correctly upfront.",
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'primary.main' }} /></ListItemIcon>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{text}</Typography>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 6 }} />

          {/* Industrial Applications */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 3, textTransform: 'uppercase', color: 'primary.main' }}>
            Industrial Applications
          </Typography>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {[
              { label: "Municipal Water Supply", val: "6″ and 8″ cast iron TC/TB for high-flow, low-cost fresh water extraction. Stainless where desalination blending or treated groundwater raises chloride content." },
              { label: "Agriculture & Irrigation", val: "Cast iron TB series for continuous high-volume duty from fresh water aquifers. Robust, low-cost, designed for the load profile of irrigation scheduling." },
              { label: "Construction Dewatering", val: "Cast iron TC series for heavy intermittent duty. High-mass construction tolerates the sand loads and intermittent dry events common on active construction sites." },
              { label: "Coastal & Brackish Duty", val: "Stainless 904L series only. Any chloride content above 250 ppm in a permanent installation demands 316L minimum; above 350 ppm, specify 904L." },
              { label: "Pharmaceutical & Food", val: "Stainless TS/TN with food-grade elastomers. 316L or 904L for process makeup water. Potable-water approvals available on request." },
              { label: "Mining & Industrial", val: "Cast iron for bulk dewatering — the 8″ TB at 180 m³/h is the workhorse. Stainless for sulphide-bearing or acid-mine drainage where ferrous bodies corrode within months." },
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6 }}>
                <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="caption" sx={{ fontWeight: 800, color: 'primary.main', display: 'block' }}>{item.label}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>{item.val}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 6 }} />

          {/* FAQ */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 4, textTransform: 'uppercase', color: 'primary.main' }}>
            FAQ: Fast Answers for the Job Site
          </Typography>
          {[
            {
              q: "What is the difference between stainless steel and cast iron submersible pumps?",
              a: "The wetted parts — impeller, diffuser, valve housing, shaft — are fabricated from different metallurgies. Stainless steel (AISI 304, 316, 904L) builds a self-repairing passive film in oxygenated water, resisting pitting and galvanic corrosion. Cast iron depends on flow chemistry and has no passive layer; in clean, non-aggressive fresh water it performs well, but it degrades rapidly in chloride-bearing or acidic service."
            },
            {
              q: "When should I specify 904L instead of 316L?",
              a: "When field water chloride content regularly exceeds 250–300 ppm, or when the duty involves seawater intake, brackish dewatering, sulphide-bearing mine water, or chemical makeup water approaching the 500 ppm ceiling. The 904L grade's PREN of ≈35 versus 316L's ≈26 is the quantified answer. In continuous brackish service, 904L typically returns 2–3× the Mean Time Between Overhauls of 316L."
            },
            {
              q: "Can a cast iron submersible pump handle salt water?",
              a: "No — not in permanent service. Cast iron has no passive film and corrodes in saline water through graphitisation and general attack. For any coastal, marine or brackish duty specify stainless steel, and choose the grade based on the chloride load. Cast iron is the right choice for clean fresh water with chloride content well below 100 ppm."
            },
            {
              q: "What happens if I run the pump dry?",
              a: "The pumped fluid lubricates the pump's radial bearings, cushions the thrust bearing and cools the motor. Lose it and all three functions fail simultaneously. Even a few minutes of dry running glaze the bearing surfaces and can shorten service life from years to weeks. Always fit a dry-run / low-water-level protection relay in the control panel."
            },
            {
              q: "What is PREN and why does it matter for pump selection?",
              a: "PREN (Pitting Resistance Equivalent Number) is a single-number summary of a stainless grade's resistance to pitting corrosion: PREN = %Cr + 3.3×%Mo + 16×%N. The higher the PREN, the harder the grade is to pit. For submersible pump selection: 304 (PREN ≈19) for low-chloride fresh water; 316 (PREN ≈26) for moderate chloride service; 904L (PREN ≈35) for brackish, coastal or chemically aggressive duty."
            },
            {
              q: "What is the maximum depth (head) available in the Tormac range?",
              a: "The 6″ stainless TS/TN/904L series reaches 588 m — the deepest in the Tormac catalogue. The 8″ stainless reaches 437 m; the 4″ reaches 535 m. Cast iron tops out at 370 m (8″ TB series). All figures are working head at the pump flange; subtract static lift and friction losses to find available head at the discharge point."
            },
          ].map((item, i) => (
            <Box key={i} sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 1, textTransform: 'uppercase' }}>
                {item.q}
              </Typography>
              <Typography>{item.a}</Typography>
            </Box>
          ))}

          <Divider sx={{ my: 6 }} />

          {/* Maintenance Best Practices */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 3, textTransform: 'uppercase', color: 'primary.main' }}>
            Maintenance Best Practices
          </Typography>
          <List sx={{ mb: 3 }}>
            {[
              "Always fit dry-run and low-water-level protection in the control panel before commissioning. This is non-negotiable — it is the single most effective service-life extender.",
              "Commission with the borewell flushed and sand-free. The first hours of operation are when abrasive ingress causes the most damage to impellers and bearings.",
              "Track motor current as a KPI. A rising current trend on a fixed-speed pump indicates impeller wear, partial blockage, or declining specific gravity — all actionable before failure.",
              "Pull and inspect the pump at every scheduled turnaround. Sand-worn impellers look intact but are running well off their design curve — costing energy and head long before they cause a trip.",
              "Replace shaft sleeves and bearings as a set, not individually. The dimensional stack-up in a worn assembly almost always causes a new component to fail early.",
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'primary.main' }} /></ListItemIcon>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{text}</Typography>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 6 }} />

          {/* Related Products */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 3, textTransform: 'uppercase', color: 'primary.main' }}>
            Related Products That Complete the Build
          </Typography>
          <List sx={{ mb: 4 }}>
            {[
              "Tormac submersible motors: Eco, Esteem (resin-filled) and Elegant (oil-filled) ranges — all NEMA-coupled to the TS/TN/TC/TB pump platform.",
              "Agitator mechanical seals: single and double cartridge seals for reactor and vessel shaft sealing — the AS91, AS92N and AS95.",
              "Process valves: manifold valves and instrumentation fittings for integrated pump and vessel skids.",
              "Panel and control: dry-run protection relays and variable-frequency drives for soft-start and energy optimisation.",
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'primary.main' }} /></ListItemIcon>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{text}</Typography>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 6 }} />

          {/* Next Steps */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 3, textTransform: 'uppercase', color: 'primary.main' }}>
            Next Steps
          </Typography>
          <List sx={{ mb: 4 }}>
            {[
              "Send us your borewell data — diameter, static water level, required flow and head, and a water chemistry report — and our application engineers will recommend a series, grade and motor within one working day.",
              "Standardise your platform: specify Tormac submersibles across a project and request kitting services by borewell class.",
              "Register for partner access to centralised technical documentation, pump curves, and installation cards.",
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'primary.main' }} /></ListItemIcon>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{text}</Typography>
              </ListItem>
            ))}
          </List>
          <Typography>
            The borewell is fixed. The pump is not. Specify the metallurgy against the water chemistry, protect the motor with dry-run cut-off, and track current as a leading indicator — and you avoid the failures that force retrieval before the project is complete.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* Links */}
          <Typography variant="h4" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 3, textTransform: 'uppercase' }}>
            Links to Help You Specify
          </Typography>
          <List sx={{ mb: 4 }}>
            {[
              
              { text: "Agitator mechanical seals for reactor and vessel service", href: "https://www.panamvalve.com/products/mechanical-seals" },
              { text: "Manifold valves for isolation, calibration, and double block and bleed", href: "https://www.panamvalve.com/products/valve-manifolds" },
              { text: "Instrumentation fittings for integrated process skids", href: "https://www.panamvalve.com/products/instrumentation-fittings" },
            ].map((item, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'primary.main' }} /></ListItemIcon>
                <Link href={item.href} underline="hover" sx={{ fontWeight: 600, fontSize: '0.875rem', color: 'primary.main' }}>
                  {item.text}
                </Link>
              </ListItem>
            ))}
          </List>

          {/* CALL TO ACTION */}
          <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 5, mt: 8, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2 }}>
              NEED TO SPECIFY A SUBMERSIBLE PUMP?
            </Typography>
            <Typography sx={{ color: 'white !important', mb: 3, opacity: 0.9 }}>
              PANAM supplies the full Tormac range — stainless steel TS/TN/904L and cast iron TC/TB — engineered for reliable borewell performance across industrial, municipal, agricultural and process service. Send us your borewell data and we will respond within one working day.
            </Typography>
            <Typography variant="button" sx={{ fontWeight: 900, borderBottom: '2px solid', pb: 1, cursor: 'pointer' }}>
              Contact Our Engineering Team
            </Typography>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}