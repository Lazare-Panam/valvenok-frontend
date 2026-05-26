'use client';

import React from 'react';
import {
  Box, Container, Typography, Stack, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper,
  Divider, Chip, Button
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { alpha } from '@mui/material/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const DISPLAY_FONT = 'var(--font-display)';

export default function BallValveVsGateValvePage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 10 }}>

      {/* ── HERO ── */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', pt: 15, pb: 10 }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, letterSpacing: '0.4em', opacity: 0.8 }}>
            Technical Guide
          </Typography>
          <Typography variant="h1" sx={{ fontFamily: DISPLAY_FONT, fontSize: { xs: '2.5rem', md: '4.5rem' }, fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, mt: 1 }}>
            Ball Valve vs Gate Valve
          </Typography>
          <Typography variant="h5" sx={{ mt: 2, opacity: 0.85, fontStyle: 'italic' }}>
            Key Differences, Real-World Uses &amp; How to Choose
          </Typography>
          <Stack direction="row" spacing={3} sx={{ mt: 4, opacity: 0.8 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <AccessTimeIcon fontSize="small" />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>7 min read</Typography>
            </Stack>
            {['Ball Valves', 'Gate Valves', 'Flow Control', 'Industrial Applications'].map(tag => (
              <Chip key={tag} label={tag} size="small" sx={{ bgcolor: 'rgba(255,255,255,0.15)', color: 'white', fontWeight: 700, fontSize: '11px', borderRadius: 0, height: 26 }} />
            ))}
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ mt: -5 }}>

        {/* ── KEY TAKEAWAYS ── */}
        <Paper elevation={10} sx={{ p: 4, borderRadius: 0, borderLeft: '8px solid', borderColor: 'primary.main', mb: 8 }}>
          <Typography variant="h4" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 900, mb: 3, textTransform: 'uppercase' }}>
            Key Takeaways
          </Typography>
          <Grid container spacing={2}>
            {[
              'Ball valves use a quarter-turn mechanism for instant, bubble-tight shut-off — gate valves require 10–15 full turns.',
              'PTFE seats give ball valves ANSI Class VI sealing — making them the default choice for gas and hazardous fluid isolation.',
              'Gate valves retain a role in large-diameter (DN300+) low-cycle water applications where upfront cost is the primary driver.',
              'Ball valves are actuator-ready by design — quarter-turn output matches pneumatic actuator output directly.',
              'Never throttle a standard ball valve — partial opening causes irreversible seat erosion.',
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
            Ball valves and gate valves are both isolation valves — but their mechanisms, performance characteristics, and ideal use cases differ significantly. Choosing the wrong one doesn't just cost you money; it can affect system safety, longevity, and efficiency. This guide cuts through the basics and gets into what actually matters in practice.
          </Typography>

          {/* ── WHAT IS A BALL VALVE ── */}
          <Typography variant="h3" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, mt: 6, textTransform: 'uppercase', color: 'primary.main' }}>
            What Is a Ball Valve?
          </Typography>
          <Typography>
            A <strong>ball valve</strong> is a quarter-turn rotary valve that uses a drilled, hollow ball — the <strong>closure element</strong> — to control fluid flow. When the bore through the ball aligns with the pipeline, flow passes unobstructed. A 90° rotation perpendicular to the pipe creates a complete seal.
          </Typography>
          <Typography>
            Unlike globe or needle valves, ball valves are not designed for <strong>throttling</strong>. Their power lies in <strong>tight, fast, repeatable shut-off</strong> — which is why they dominate in applications where isolation speed and reliability are non-negotiable.
          </Typography>
          <Typography>
            The sealing mechanism is what sets them apart. Ball valves use <strong>soft seats</strong> — typically PTFE or Nylon — that press against the ball surface to form a <strong>bubble-tight seal</strong> (to ANSI Class VI leakage standards). This makes them particularly suitable for gas systems, where even minor leakage is unacceptable.
          </Typography>

          {/* IMAGE PLACEHOLDER */}
          <Box sx={{ my: 5, textAlign: 'center' }}>
  <Box
    component="img"
    src="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/apollo-valves-88a10a01.webp"
    alt="Quarter-turn operation: 90° rotation moves from full open to full closed"
    sx={{ width: '100%', maxWidth: 700, border: '1px solid', borderColor: 'divider' }}
  />
  <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'text.secondary', fontStyle: 'italic' }}>
    Quarter-turn operation: 90° rotation moves from full open to full closed.
  </Typography>
</Box>

          <Typography variant="h4" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, mt: 4, textTransform: 'uppercase' }}>
            The Role of Seat Material
          </Typography>
          <Typography>
            Seat material directly dictates performance limits. <strong>PTFE seats</strong> are the most common — chemically inert, low friction, and suitable up to around 180°C. For higher temperatures or abrasive media, <strong>metal-seated ball valves</strong> (typically stainless or tungsten carbide-coated) extend operating range considerably, used in steam, high-temperature gas, and power generation applications.
          </Typography>

          <Typography variant="h4" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, mt: 4, textTransform: 'uppercase' }}>
            The Significance of Bore Size
          </Typography>
          <Typography>
            A <strong>full-bore (full-port) ball valve</strong> has a bore diameter equal to the pipe — meaning flow coefficient (Cv) remains essentially unchanged and pressure drop is negligible. A <strong>reduced-bore valve</strong> creates a minor restriction but is more compact and lower cost. In custody transfer metering, pipeline integrity testing, and pigging operations, full-bore is often a contractual requirement.
          </Typography>

          <Typography variant="h4" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, mt: 4, textTransform: 'uppercase' }}>
            How Ball Valves Perform in Practice
          </Typography>
          <Typography>
            The quarter-turn operation isn't just convenient — it has direct operational implications. In emergency isolation scenarios, a ball valve can be manually closed in under a second, or actuated pneumatically in <strong>under 0.5 seconds</strong> with a spring-return actuator. This speed is critical in gas systems, chemical dosing lines, and safety interlock circuits.
          </Typography>

          {/* EXPANDABLE CARDS */}
          {[
            {
              title: 'Gas Distribution Networks',
              body: 'Ball valves are the standard isolation valve in natural gas distribution. Their bubble-tight PTFE seats meet the leakage requirements of standards like BS EN 331 (gas appliance valves) and ASME B16.34. The quarter-turn operation allows rapid manual isolation during emergency scenarios, and the lever handle position provides instant visual confirmation of valve state — a critical safety advantage over multi-turn valves where position is ambiguous.',
            },
            {
              title: 'Chemical Processing Plants',
              body: 'In chemical plants handling corrosive media — acids, solvents, caustic fluids — ball valves fitted with PTFE-lined bodies and seats are widely specified. The self-wiping action of the rotating ball means the seat stays clean on every cycle, reducing buildup that would compromise sealing over time. Gate valves, by contrast, have a static wedge-seat interface that is highly susceptible to corrosion and scale in these environments.',
            },
            {
              title: 'HVAC and Building Services',
              body: 'In commercial HVAC systems, ball valves are used for zone isolation, commissioning, and balancing. Their compact form factor fits easily into crowded plant rooms, and the quarter-turn operation means commissioning engineers can cycle valves rapidly without the fatigue associated with multi-turn gate valves. According to Flowflex, ball valves are now the default choice for building services applications precisely because of these handling advantages.',
            },
          ].map((card, i) => (
            <Box key={i} sx={{ border: '1.5px solid', borderColor: 'primary.light', mb: 2, p: 3 }}>
              <Typography sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'primary.dark', mb: 1.5 }}>
                ▶ {card.title}
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1rem', mb: 0 }}>
                {card.body}
              </Typography>
            </Box>
          ))}

          {/* ── WHAT IS A GATE VALVE ── */}
          <Typography variant="h3" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, mt: 6, textTransform: 'uppercase', color: 'primary.main' }}>
            What Is a Gate Valve?
          </Typography>
          <Typography>
            A <strong>gate valve</strong> uses a flat or wedge-shaped gate (disc) that moves linearly — perpendicular to flow — to open or close the valve. Operated by a <strong>rising or non-rising stem</strong> with a handwheel, full operation typically requires <strong>10–15 complete turns</strong>. When fully open, the gate retracts entirely into the bonnet, leaving the full bore unobstructed.
          </Typography>
          <Typography>
            This is the gate valve's core advantage: <strong>minimal flow resistance when fully open</strong>. There is no ball, disc, or plug in the flow path — fluid passes straight through with near-zero turbulence. In large-diameter water transmission mains, irrigation networks, and municipal water systems, this characteristic makes gate valves an appropriate and cost-effective choice.
          </Typography>
          <Box sx={{ borderLeft: '4px solid', borderColor: 'primary.main', bgcolor: (theme) => alpha(theme.palette.primary.light, 0.2), px: 3, py: 2.5, mb: 3 }}>
            <Typography sx={{ color: 'text.primary', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500 }}>
              <strong>Critical limitation:</strong> Gate valves should never be used for throttling. Operating a gate valve in a partially open position causes the gate and seats to vibrate under flow turbulence, accelerating wear and leading to premature failure. They are designed to be either <strong>fully open or fully closed</strong> — nothing in between.
            </Typography>
          </Box>

          {/* ── COMPARISON TABLE ── */}
          <Typography variant="h3" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 3, mt: 6, textTransform: 'uppercase', color: 'primary.main' }}>
            Ball Valve vs Gate Valve: Technical Comparison
          </Typography>

          <Box sx={{ display: 'flex', gap: 3, mb: 4, flexDirection: { xs: 'column', sm: 'row' } }}>
  <Box sx={{ flex: 1, textAlign: 'center' }}>
    <Box
      component="img"
      src="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/apollo-valves-88a10a01.webp"
      alt="Gate Valve"
      sx={{ width: '100%', border: '1px solid', borderColor: 'divider' }}
    />
    <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'text.secondary', fontStyle: 'italic' }}>
      Gate Valve
    </Typography>
  </Box>
  <Box sx={{ flex: 1, textAlign: 'center' }}>
    <Box
      component="img"
      src="https://pblol2.blob.core.windows.net/panam-images/products/ball-valves/PBV-2-S-04-FF-1.png"
      alt="Ball Valve"
      sx={{ width: '100%', border: '1px solid', borderColor: 'divider' }}
    />
    <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'text.secondary', fontStyle: 'italic' }}>
      Ball Valve
    </Typography>
  </Box>
</Box>

          <TableContainer component={Paper} elevation={0} sx={{ border: '1.5px solid', borderColor: 'primary.light', borderRadius: 0, mb: 4 }}>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ bgcolor: (theme) => alpha(theme.palette.primary.light, 0.3) }}>
                  {['Feature', 'Ball Valve', 'Gate Valve'].map(h => (
                    <TableCell key={h} sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'text.primary', borderColor: 'primary.light' }}>
                      {h}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  { f: 'Operation',         b: 'Quarter-turn (90°)',                       g: 'Multi-turn (multiple rotations)' },
                  { f: 'Shut-off speed',    b: 'Instant',                                  g: 'Slow — 10–15 full turns typical' },
                  { f: 'Sealing quality',   b: 'Excellent — bubble-tight shut-off',        g: 'Degrades over time with wear' },
                  { f: 'Flow restriction',  b: 'Near zero (full-bore option)',              g: 'Minimal when fully open' },
                  { f: 'Throttling',        b: 'Not suitable — causes seat erosion',       g: 'Poor — not designed for it either' },
                  { f: 'Pressure range',    b: 'Up to 700 bar (trunnion type)',             g: 'Moderate — lower pressure ratings' },
                  { f: 'Temperature range', b: '-29°C to +180°C (PTFE seats)',             g: 'Wider range with metal seats' },
                  { f: 'Maintenance',       b: 'Low — self-cleaning ball action',          g: 'Higher — wedge & seat wear' },
                  { f: 'Actuator-ready',    b: 'Yes — quarter-turn actuators standard',    g: 'Possible but less common' },
                  { f: 'Best for',          b: 'On/off isolation, gas, chemical, HVAC',    g: 'Long-term isolation, water mains' },
                  { f: 'Typical cost',      b: 'Lower to moderate',                        g: 'Lower for large diameter' },
                ].map((row, i) => (
                  <TableRow key={i} sx={{ '&:nth-of-type(even)': { bgcolor: (theme) => alpha(theme.palette.primary.light, 0.08) } }}>
                    <TableCell sx={{ fontWeight: 700, fontSize: '0.85rem', color: 'text.primary', borderColor: 'primary.light', whiteSpace: 'nowrap' }}>{row.f}</TableCell>
                    <TableCell sx={{ fontSize: '0.85rem', color: 'text.secondary', borderColor: 'primary.light' }}>{row.b}</TableCell>
                    <TableCell sx={{ fontSize: '0.85rem', color: 'text.secondary', borderColor: 'primary.light' }}>{row.g}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ borderLeft: '4px solid', borderColor: 'primary.main', bgcolor: (theme) => alpha(theme.palette.primary.light, 0.2), px: 3, py: 2.5, mb: 3 }}>
            <Typography sx={{ color: 'text.primary', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500 }}>
              <strong>The key takeaway:</strong> Ball valves offer superior sealing, faster operation, and lower long-term maintenance — making them the preferred choice in the majority of modern industrial, commercial, and utility applications. Gate valves retain a role in large-diameter, low-cycle applications where upfront cost and unrestricted flow are the primary drivers.
            </Typography>
          </Box>

          {/* ── INDUSTRY BY INDUSTRY ── */}
          <Typography variant="h3" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, mt: 6, textTransform: 'uppercase', color: 'primary.main' }}>
            Where Ball Valves Are Used — Industry by Industry
          </Typography>

          <Typography variant="h4" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, mt: 4, textTransform: 'uppercase' }}>Oil &amp; Gas</Typography>
          <Typography>
            Ball valves are the <strong>dominant isolation valve</strong> in upstream, midstream, and downstream oil and gas. Full-bore trunnion-mounted ball valves are specified on trunk pipelines to allow <strong>pigging</strong> (pipeline inspection and cleaning) — a requirement that gate valves, with their cavity between the ball and body, cannot reliably satisfy. High-pressure subsea wellhead systems routinely use <strong>metal-seated trunnion ball valves</strong> rated to ASME 2500# class (approximately 425 bar at ambient temperature).
          </Typography>

          <Typography variant="h4" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, mt: 4, textTransform: 'uppercase' }}>Water &amp; Wastewater</Typography>
          <Typography>
            For <strong>smaller-diameter isolations</strong> — service connections, meter isolation, pump protection — ball valves are standard. For <strong>large-diameter mains</strong> (DN300 and above), gate valves (or butterfly valves) are typically more cost-effective. Tameson notes that in water treatment, <strong>ball valves are preferred for clean water isolation</strong> while gate valves are more common in raw water and large-bore distribution mains where cost per DN is a primary factor.
          </Typography>

          <Typography variant="h4" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, mt: 4, textTransform: 'uppercase' }}>Chemical &amp; Pharmaceutical</Typography>
          <Typography>
            Ball valves dominate in chemical processing due to their <strong>chemical compatibility</strong> (PTFE seats, PFA-lined bodies, Hastelloy or duplex stainless trim) and <strong>clean bore design</strong> that minimises dead legs where contamination can accumulate. In pharmaceutical manufacturing (GMP environments), <strong>top-entry ball valves</strong> are specified because they can be maintained in-line — the ball and seats are accessible without removing the valve body from the pipeline, reducing contamination risk.
          </Typography>

          <Typography variant="h4" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, mt: 4, textTransform: 'uppercase' }}>Fire Protection &amp; Safety Systems</Typography>
          <Typography>
            OS&amp;Y (Outside Screw &amp; Yoke) gate valves are still widely used as control valves on wet sprinkler systems, as their <strong>open stem position</strong> provides a visible indication of valve state required by NFPA 13. However, <strong>UL/FM-listed ball valves</strong> are increasingly used in the same role — particularly in retrofit projects — as their compact form factor and faster operation offer installation and maintenance advantages in confined ceiling voids.
          </Typography>

          <Typography variant="h4" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, mt: 4, textTransform: 'uppercase' }}>Power Generation</Typography>
          <Typography>
            High-pressure steam and feedwater systems in power plants often use <strong>metal-seated ball valves</strong> that can handle temperatures above 300°C and pressures above 150 bar. The <strong>fire-safe design</strong> requirement (API 607 or API 6FA) — where the valve maintains isolation even if soft seats are destroyed by fire — is a standard specification in power and refining applications, and ball valves can be designed to this standard.
          </Typography>

          {/* ── TYPES TABLE ── */}
          <Typography variant="h3" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, mt: 6, textTransform: 'uppercase', color: 'primary.main' }}>
            Types of Ball Valves: Which Do You Need?
          </Typography>
          <Typography>
            The ball valve family covers a wide range of designs. Selecting the right type isn't just about matching pressure and temperature — it's about understanding the mechanical demands of the specific application.
          </Typography>

          <TableContainer component={Paper} elevation={0} sx={{ border: '1.5px solid', borderColor: 'primary.light', borderRadius: 0, mb: 3, mt: 3 }}>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ bgcolor: (theme) => alpha(theme.palette.primary.light, 0.3) }}>
                  {['Type', 'Key Feature', 'Typical Application'].map(h => (
                    <TableCell key={h} sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'text.primary', borderColor: 'primary.light' }}>
                      {h}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  { t: 'Full Bore / Full Port',    f: 'Bore matches pipe diameter',              a: 'Oil & gas pipelines, high-flow industrial systems where pressure drop must be minimised' },
                  { t: 'Reduced Bore',             f: 'Bore ~75% of pipe diameter',              a: 'General industrial use where some pressure drop is acceptable — compact and cost-effective' },
                  { t: 'Floating Ball',            f: 'Ball held in place by seat pressure',     a: 'Standard pressure applications: water, compressed air, HVAC, chemical dosing systems' },
                  { t: 'Trunnion Mounted',         f: 'Ball anchored top and bottom',            a: 'High-pressure/high-torque: subsea pipelines, LNG terminals, large-bore gas transmission lines' },
                  { t: 'V-Port / Characterized',  f: 'V-shaped ball bore for flow shaping',     a: 'Where precise throttling is needed: process control, mixing, slurry handling' },
                  { t: '3-Way Ball Valve',         f: 'L or T-shaped bore for flow diversion',  a: 'Mixing or diverting flows: tank switching, heating circuits, multi-port systems' },
                ].map((row, i) => (
                  <TableRow key={i} sx={{ '&:nth-of-type(even)': { bgcolor: (theme) => alpha(theme.palette.primary.light, 0.08) } }}>
                    <TableCell sx={{ fontWeight: 700, fontSize: '0.85rem', color: 'text.primary', borderColor: 'primary.light', whiteSpace: 'nowrap' }}>{row.t}</TableCell>
                    <TableCell sx={{ fontSize: '0.85rem', color: 'text.secondary', borderColor: 'primary.light' }}>{row.f}</TableCell>
                    <TableCell sx={{ fontSize: '0.85rem', color: 'text.secondary', borderColor: 'primary.light' }}>{row.a}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ borderLeft: '4px solid', borderColor: 'primary.main', bgcolor: (theme) => alpha(theme.palette.primary.light, 0.2), px: 3, py: 2.5, mb: 3 }}>
            <Typography sx={{ color: 'text.primary', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500 }}>
              <strong>Note on V-Port valves:</strong> V-port and characterized ball valves are the exception to the "no throttling" rule. Their shaped bore creates a predictable flow characteristic (equal percentage or linear) as the valve opens, making them suitable for control valve duty. Standard ball valves should still never be used for throttling.
            </Typography>
          </Box>

          {/* ── ADVANTAGES ── */}
          <Typography variant="h3" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 3, mt: 6, textTransform: 'uppercase', color: 'primary.main' }}>
            Advantages of Ball Valves
          </Typography>
          {[
            { bold: 'Bubble-tight sealing', text: ' — PTFE seats achieve ANSI Class VI (zero detectable leakage under test conditions), making them suitable for gas and hazardous fluid isolation' },
            { bold: 'Fast operation', text: ' — quarter-turn manual or automated operation; compatible with Pneumatic, Hydraulic, and electric actuators without modification' },
            { bold: 'Self-cleaning', text: ' — the rotation of the ball wipes the seat surface on every cycle, reducing particle build-up and maintaining sealing performance over time' },
            { bold: 'Low torque requirement', text: ' — especially in full-bore designs, operating torque is low, reducing actuator sizing and cost' },
            { bold: 'Compact and lightweight', text: ' — compared to gate valves of equivalent rating, ball valves are significantly shorter face-to-face and lighter — important in offshore and elevated piping' },
            { bold: 'Versatile orientation', text: ' — can be installed in any pipeline orientation including vertical — gate valves are often restricted to horizontal installation' },
            { bold: 'Actuator compatibility', text: ' — quarter-turn output directly matches pneumatic actuator output, making automation straightforward and cost-effective' },
          ].map((item, i) => (
            <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start" sx={{ mb: 2 }}>
              <Box sx={{ width: 8, height: 8, bgcolor: 'primary.main', mt: '10px', flexShrink: 0 }} />
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.05rem' }}>
                <strong>{item.bold}</strong>{item.text}
              </Typography>
            </Stack>
          ))}

          {/* ── LIMITATIONS ── */}
          <Typography variant="h3" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, mt: 6, textTransform: 'uppercase', color: 'primary.main' }}>
            Limitations &amp; Where Gate Valves Still Win
          </Typography>

          <Box sx={{ borderLeft: '4px solid', borderColor: 'primary.main', bgcolor: (theme) => alpha(theme.palette.primary.light, 0.2), px: 3, py: 2.5, mb: 3 }}>
            <Typography sx={{ color: 'text.primary', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500 }}>
              <strong>Throttling damage:</strong> Operating a standard ball valve in a partially open position causes the soft seats to be eroded by the high-velocity jet passing through the restricted bore. This typically manifests as visible scoring on the ball surface and leakage past the downstream seat. The damage is often irreversible.
            </Typography>
          </Box>

          <Typography variant="h4" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, mt: 4, textTransform: 'uppercase' }}>Water Hammer</Typography>
          <Typography>
            The same quarter-turn speed that makes ball valves excellent for isolation creates a risk of <strong>water hammer</strong> in liquid-filled systems. Rapidly stopping flow in a pipe causes a pressure wave that can stress pipework, joints, and connected equipment. In high-velocity water systems, a <strong>slow-close actuator</strong> (3–5 second close time) or a pipeline surge arrestor should be specified alongside the ball valve.
          </Typography>

          <Typography variant="h4" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, mt: 4, textTransform: 'uppercase' }}>Large Diameter Cost</Typography>
          <Typography>
            For valves above DN200–250, the cost of a full-bore ball valve with trunnion mounting escalates significantly. In large-diameter water transmission mains — typically DN300 to DN1200 — <strong>gate valves or butterfly valves</strong> often provide a more economical solution where the operating cycle frequency is low (once or twice per year). According to Arranps and Flowmag, this is the primary reason gate valves remain prevalent in municipal water infrastructure despite their technical limitations.
          </Typography>

          <Typography variant="h4" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, mt: 4, textTransform: 'uppercase' }}>Cavity Trapping</Typography>
          <Typography>
            The body cavity of a ball valve — the space between the ball and the body — can trap fluid. In services handling <strong>liquids that vaporise</strong> or <strong>thermally expand</strong> (LPG, cryogenic fluids, condensate), this trapped fluid can create dangerous over-pressurisation. <strong>Double-block-and-bleed (DBB) ball valves</strong> or cavity relief valves are specified to manage this risk in such services.
          </Typography>

          {/* ── DECISION FRAMEWORK ── */}
          <Typography variant="h3" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 3, mt: 6, textTransform: 'uppercase', color: 'primary.main' }}>
            How to Choose: A Decision Framework
          </Typography>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box sx={{ border: '1.5px solid', borderColor: 'primary.main', p: 3, height: '100%' }}>
                <Typography sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'primary.dark', mb: 2 }}>
                  Choose a Ball Valve when:
                </Typography>
                {[
                  'You need fast, reliable on/off isolation',
                  'The fluid is gas, LPG, chemical, or anything where leakage is unacceptable',
                  'The valve will be automated or remotely operated',
                  'Installation space is limited',
                  'The valve will be cycled frequently',
                  'You need fire-safe design or compliance with ASME, API, or BS EN standards',
                ].map((item, i) => (
                  <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start" sx={{ mb: 1.5 }}>
                    <Box sx={{ width: 7, height: 7, bgcolor: 'primary.main', mt: '8px', flexShrink: 0 }} />
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7 }}>{item}</Typography>
                  </Stack>
                ))}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box sx={{ border: '1.5px solid', borderColor: 'primary.light', p: 3, height: '100%' }}>
                <Typography sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'text.primary', mb: 2 }}>
                  Gate Valves may still be appropriate when:
                </Typography>
                {[
                  'The pipe diameter is large (DN300+) and cost is a primary driver',
                  'The valve will rarely be operated (once or twice per year)',
                  'You need the absolute lowest pressure drop when fully open',
                  'The application is water mains or irrigation where valve cavity is not a risk',
                  'The system requires a rising stem as a visual open/close indicator (e.g. sprinkler OS&Y)',
                ].map((item, i) => (
                  <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start" sx={{ mb: 1.5 }}>
                    <Box sx={{ width: 7, height: 7, bgcolor: 'primary.light', mt: '8px', flexShrink: 0 }} />
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7 }}>{item}</Typography>
                  </Stack>
                ))}
              </Box>
            </Grid>
          </Grid>

          {/* ── FINAL THOUGHTS ── */}
          <Typography variant="h3" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, mt: 6, textTransform: 'uppercase', color: 'primary.main' }}>
            Final Thoughts
          </Typography>
          <Typography>
            The <strong>ball valve vs gate valve</strong> question looks simple on the surface — but in practice it sits at the intersection of fluid mechanics, materials science, safety standards, and lifecycle economics. Ball valves have, over the past two decades, displaced gate valves across most industrial and commercial applications, not because they're universally superior, but because they're <strong>more reliable, faster to operate, easier to automate, and cheaper to maintain</strong> in the applications that matter most.
          </Typography>
          <Typography>
            Gate valves retain a place in large-diameter utility work and low-cycle applications — but that window is narrowing as trunnion ball valve costs continue to fall and <strong>tighter leakage requirements</strong> become more common across water, gas, and process industries.
          </Typography>

          {/* ── CTA ── */}
          <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 5, mt: 8, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, color: 'white' }}>
              Need Help Specifying the Right Valve?
            </Typography>
            <Typography sx={{ color: 'white !important', mb: 3, opacity: 0.9 }}>
              Talk to our technical team. Whether you're looking at an isolation duty in a gas system, a chemical processing application, or a high-cycle automated line — we'll help you select the right valve type, material, and end connection for your exact conditions.
            </Typography>
            <Button
              variant="outlined"
              href="/contact"
              sx={{ borderColor: 'white', color: 'white', borderRadius: 0, px: 5, py: 1.5, fontWeight: 800, fontSize: '15px', letterSpacing: '0.08em', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', borderColor: 'white' } }}
            >
              TALK TO OUR TEAM
            </Button>
          </Box>

          {/* ── REFERENCES ── */}
          <Divider sx={{ borderColor: 'primary.light', mt: 8, mb: 4 }} />
          <Typography sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'text.secondary', mb: 2 }}>
            References
          </Typography>
          <Stack spacing={1}>
            {[
              { label: 'Tameson — Gate Valve vs Ball Valve', href: 'https://tameson.co.uk/pages/gate-valve-vs-ball-valve' },
              { label: 'YKY Valve — Gate Valve vs Ball Valve Difference', href: 'https://www.ykyvalve.com/blog/gate-valve/gate-valve-vs-ball-valve-difference/' },
              { label: 'Onero Valve — 9 Key Differences', href: 'https://www.onerovalve.com/blog/comparison/gate-valve-vs-ball-valve-9-key-differences/' },
              { label: 'Arranps — Ball vs Gate Valves: Which Should You Choose?', href: 'https://arranps.co.uk/ball-vs-gate-valves-which-should-you-choose' },
              { label: 'Flowmag — Which One Is Right for Your System?', href: 'https://flowmag.co.uk/ball-valves-or-gate-valves-which-one-is-right-for-your-system/' },
              { label: 'Flowflex — Gate Valves vs Ball Valves', href: 'https://flowflex.com/en/knowledge-base/gate-valves-vs-ball-valves' },
             
            ].map((ref, i) => (
              <Typography key={i} variant="body2" sx={{ color: 'text.secondary', fontSize: '0.88rem' }}>
                •{' '}
                <Box component="a" href={ref.href} target="_blank" rel="noopener noreferrer"
                  sx={{ color: 'primary.dark', fontWeight: 600, textDecoration: 'underline', '&:hover': { color: 'primary.main' } }}
                >
                  {ref.label}
                </Box>
              </Typography>
            ))}
          </Stack>

        </Box>
      </Container>
    </Box>
  );
}