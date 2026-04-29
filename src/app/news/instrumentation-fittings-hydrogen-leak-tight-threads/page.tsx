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

export default function InstrumentationFittingsPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 10 }}>

      {/* --- HERO SECTION --- */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', pt: 15, pb: 10 }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, letterSpacing: '0.4em', opacity: 0.8 }}>
            Engineering Deep-Dive
          </Typography>
          <Typography variant="h1" sx={{ fontFamily: '"Barlow Condensed"', fontSize: { xs: '2.5rem', md: '4.5rem' }, fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, mt: 1 }}>
            Thread Truths & Leak-Tight Builds: Instrumentation Fittings For Hydrogen And High-Integrity Service
          </Typography>
          <Typography variant="h5" sx={{ mt: 2, opacity: 0.85, fontStyle: 'italic' }}>
            A Field Guide for Engineers
          </Typography>
          <Stack direction="row" spacing={3} sx={{ mt: 4, opacity: 0.8 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PersonOutlineIcon fontSize="small" />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>PANAM</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <AccessTimeIcon fontSize="small" />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>April 2026</Typography>
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
              "A single thread mismatch or wrong sealant can stall a skid start-up and consume days.",
              "Hydrogen service raises the stakes — micro-leaks and galling are real integrity risks.",
              "BSPP, BSPT, and NPT are not interchangeable — identification before assembly is non-negotiable.",
              "Turn-of-nut provides more consistent ferrule swaging than torque methods in the field.",
              "Helium leak testing is the recommended proxy for hydrogen due to similar molecular size."
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
            src="https://pblol2.blob.core.windows.net/valvenok-images/blogs/blog4.jpg"
            alt="Instrumentation Fittings for Hydrogen Service"
            sx={{ width: '100%', maxWidth: '100%', border: '1px solid', borderColor: 'divider' }}
          />
        </Box>

        {/* --- ARTICLE BODY --- */}
        <Box sx={{ '& p': { mb: 3, lineHeight: 1.8, color: 'text.secondary', fontSize: '1.1rem' } }}>

          {/* Intro */}
          <Typography>
            Commissioning season moves fast. A single thread mismatch or the wrong sealant on a dry-seal joint can stall a skid start-up and consume days. Hydrogen service raises the stakes, where micro-leaks and galling are not minor annoyances but real integrity risks.
          </Typography>
          <Typography>
            This field guide distils practical checks you can run at the bench and on-site. Thread identification, turn-of-nut vs torque, sealant selection, and ferrule design basics for hydrogen. Use it to prevent rework, keep project momentum, and achieve first-time-right assemblies.
          </Typography>
          <Typography>
            PANAM supports high-integrity builds with hydrogen-focused tube fittings, adapters, and pipe fittings engineered for leak-tight performance. Download the on-skid thread ID cheat sheet, and contact us for kitting support across line classes and instrument take-offs.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* What instrumentation fittings are and why they fail */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase', color: 'primary.main' }}>
            What Instrumentation Fittings Are and Why They Fail
          </Typography>
          <Typography>
            Instrumentation fittings create repeatable, leak-tight joints for small-bore tubing and instrument pipework. They join transmitters, gauges, regulators, manifolds, and sampling lines to the process with precise control of sealing surfaces and make-up. Failures typically trace to five root causes:
          </Typography>
          <List sx={{ mb: 3 }}>
            {[
              "Thread-form mismatch or wrong gender/handedness.",
              "Over-tightening or under-tightening caused by mixed torque guidance.",
              "Incorrect sealant on dry-seal or oxygen-cleaned joints.",
              "Galling on stainless steel nuts and bodies.",
              "Material or ferrule design that is not hydrogen-suitable, causing permeation-led leakage."
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'primary.main' }} /></ListItemIcon>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{text}</Typography>
              </ListItem>
            ))}
          </List>
          <Typography>
            Addressing these systematically prevents late-stage commissioning delays.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* Compression tube fittings vs threaded adapters */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase', color: 'primary.main' }}>
            Compression Tube Fittings vs Threaded Adapters
          </Typography>
          <Typography>
            Compression tube fittings create a mechanical grip and seal on tube OD using ferrules and a nut driving into a precision body. Two-ferrule designs are common for high-integrity service. Advantages include remarkable joints, predictable make-up using turn-of-nut, and no pipe thread sealant required at the tube end.
          </Typography>
          <Typography>
            Threaded adapters translate between tube compression ends and male or female pipe threads for instrument ports, manifolds, and valves. Select adapters to match the instrument port standard (NPT, BSPP, BSPT) and keep the compression side consistent across the skid's tubing standard. For hydrogen, prefer high-quality two-ferrule tube fittings with controlled surface finishes and hydrogen-suitable materials.
          </Typography>
          <Typography>
            Explore PANAM tube fittings, weld fittings, elbows and tees designed for leak-tight instrumentation service in demanding environments at PANAM's instrumentation fittings page.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* Thread forms */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase', color: 'primary.main' }}>
            Thread Forms in the Field: BSPP vs BSPT vs NPT
          </Typography>
          <Typography>
            You will encounter three primary thread families in instrumentation ports and pipework:
          </Typography>
          <List sx={{ mb: 3 }}>
            {[
              "BSPP (G): British Standard Pipe Parallel. 55 degree flank angle. Seals with a gasket, bonded washer, or captive cone seat. Threads do not provide the seal.",
              "BSPT (R): British Standard Pipe Taper. 55 degree flank angle. Tapered male engages tapered or parallel female; seal forms on the thread flanks with sealant.",
              "NPT: National Pipe Taper. 60 degree flank angle. Tapered male to tapered female; dry-seal when assembled correctly, often with sealant to fill spiral leak paths."
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'primary.main' }} /></ListItemIcon>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{text}</Typography>
              </ListItem>
            ))}
          </List>
          <Typography>
            Key differences: flank angle (BSP 55 degrees vs NPT 60 degrees), and sealing method (parallel BSPP needs a face seal, tapered BSPT/NPT seal on threads with sealant). BSPP ports often incorporate a 60 degree cone or flat-bottom undercut to accept bonded washers or metal cones.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* How to identify threads */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase', color: 'primary.main' }}>
            How to Identify Threads On-Site
          </Typography>
          <Typography>
            Start with three checks before you reach for sealant:
          </Typography>
          <List sx={{ mb: 3 }}>
            {[
              "Measure major diameter with calipers, then count threads over a 1 inch or 25 mm span. Compare a thread chart for likely sizes.",
              "Check taper. Run the first three threads into a known parallel gauge or visually sight for cone angle; tapered males show a visible taper.",
              "Confirm flank angle. A leaf gauge or a thread pitch gauge with the correct profile helps, but the faster method is to test-fit a known standard. An NPT male will not bite cleanly into a BSPT female without resistance and will feel loose then bind."
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'primary.main' }} /></ListItemIcon>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{text}</Typography>
              </ListItem>
            ))}
          </List>
          <Typography>
            Carry a compact thread chart, pitch gauges, and Go/No-Go ring or plug gauges for common NPT and BSP sizes. Mark your gauges clearly to prevent cross-use.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* Sealant best practice */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase', color: 'primary.main' }}>
            Sealant Best Practice
          </Typography>
          <List sx={{ mb: 3 }}>
            {[
              "NPT and BSPT: Use thread sealant. PTFE tape or anaerobic liquid sealants both work when used to spec. PTFE tape should be high-density, applied 2 to 3 wraps from the second thread, pulled tight with lay direction matching thread rotation. Anaerobic sealant cures in the absence of air between metal surfaces; select grades rated for hydrogen and temperature/pressure limits, and allow cure time as specified.",
              "Dry-seal tapered threads: Even with precision NPT, a compatible sealant is recommended to eliminate spiral leak paths.",
              "BSPP: Do not tape parallel threads. Seal on the face with bonded washers, O-rings, or metal cone seats as designed. Light oil on threads for torque smoothness is acceptable; it is not the seal.",
              "Oxygen or high-purity service: Use oxygen-compatible, non-hydrocarbon sealants, or go metal-to-metal with correctly specified face seals."
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'primary.main' }} /></ListItemIcon>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{text}</Typography>
              </ListItem>
            ))}
          </List>
          <Typography>
            Clean threads and surfaces, deburr gently, and avoid over-application that can extrude into the bore.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* Galling */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase', color: 'primary.main' }}>
            Galling Mitigation for Stainless Steel Assemblies
          </Typography>
          <Typography>
            Austenitic stainless steel fasteners and nuts are prone to adhesive wear under load. To reduce galling:
          </Typography>
          <List sx={{ mb: 3 }}>
            {[
              "Use compatible material pairings and high-finish threads.",
              "Apply a small amount of appropriate lubricant or anti-seize on non-sealing threads, unless cleanliness rules prohibit it.",
              "Avoid power tools and rapid runs; use steady hand torque.",
              "Follow staged tightening: snug, align, final make-up.",
              "For repeated make-ups, inspect threads and ferrules; replace suspect parts."
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'primary.main' }} /></ListItemIcon>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{text}</Typography>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 6 }} />

          {/* Torque vs turn-of-nut */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase', color: 'primary.main' }}>
            Torque vs Turn-of-Nut on Compression Fittings
          </Typography>
          <Typography>
            For two-ferrule tube fittings, the industry-accepted method is turn-of-nut:
          </Typography>
          <List sx={{ mb: 3 }}>
            {[
              "Insert tube to the shoulder, finger-tighten the nut.",
              "Mark the nut at 6 o'clock, then rotate a specified angle (often 1 and 1/4 turns for initial make-up on new sizes; follow the manufacturer's chart).",
              "For remakes, tighten to the previous mark, then add a small increment as specified."
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'primary.main' }} /></ListItemIcon>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{text}</Typography>
              </ListItem>
            ))}
          </List>
          <Typography>
            Torque methods are viable in controlled assembly lines with calibrated tools, but turn-of-nut generally provides more consistent ferrule swaging in the field. Never mix guidance between brands. For PANAM tube fittings, follow the supplied installation cards available to registered partners.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* Hydrogen-specific */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase', color: 'primary.main' }}>
            Hydrogen-Specific Considerations
          </Typography>
          <Typography>
            Hydrogen demands meticulous sealing. Material selection and ferrule geometry matter:
          </Typography>
          <List sx={{ mb: 3 }}>
            {[
              "Materials: Use high-quality 316/316L or proprietary hydrogen-resistant alloys with controlled sulfur content. Consider mitigation strategies for hydrogen embrittlement where relevant system conditions warrant it.",
              "Ferrule design: Two-ferrule systems with engineered back-ferrule spring loads support vibration resistance and micro-leak control. Smooth bore finishes and tight tolerances reduce permeation pathways.",
              "Surface cleanliness: Hydrocarbon-free assembly improves leak-tightness and safety.",
              "Testing: Helium leak testing is a realistic proxy for hydrogen due to similar molecular size. Apply vacuum or pressure-decay with helium, target leak rates aligned to your specification, then perform verification after pressure cycling."
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'primary.main' }} /></ListItemIcon>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{text}</Typography>
              </ListItem>
            ))}
          </List>
          <Typography>
            For projects building a green hydrogen system with tight integrity requirements, PANAM supplies hydrogen-ready fittings, valves, and manifolds designed to support rigorous testing and commissioning.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* Quick compatibility matrix */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 3, textTransform: 'uppercase', color: 'primary.main' }}>
            Quick Compatibility Matrix (Field View)
          </Typography>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {[
              { label: "Tube to tube", val: "Use matching-brand, matching-size compression tube fittings across the skid." },
              { label: "Tube to NPT port", val: "Compression adapter to male or female NPT, with sealant on the NPT side only." },
              { label: "Tube to BSPP port", val: "Compression adapter with BSPP and a bonded washer or cone seat; no thread tape." },
              { label: "NPT to BSPT", val: "Do not mix. Use a purpose-made adapter that translates standards." },
              { label: "Parallel to tapered within BSP", val: "Use R to G adapters designed for sealing at the face." }
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

          {/* Do and do not */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 3, textTransform: 'uppercase', color: 'primary.main' }}>
            Do and Do Not Checklist
          </Typography>
          <Grid container spacing={4} sx={{ mb: 4 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase' }}>Do</Typography>
              <List>
                {[
                  "Verify thread form with gauges before assembly.",
                  "Use the correct sealing method for the thread type.",
                  "Apply turn-of-nut for two-ferrule compression fittings.",
                  "Control lubrication to prevent galling where cleanliness allows.",
                  "Helium leak test critical hydrogen joints after pressure cycling."
                ].map((text, i) => (
                  <ListItem key={i} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'primary.main' }} /></ListItemIcon>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{text}</Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase' }}>Do Not</Typography>
              <List>
                {[
                  "Force NPT into BSP or vice versa.",
                  "Use PTFE tape on BSPP face-seal joints.",
                  "Mix ferrules, nuts, and bodies from different brands.",
                  "Exceed torque in pursuit of a stubborn seal; back out, clean, and re-make.",
                  "Ignore cure times for anaerobic sealants."
                ].map((text, i) => (
                  <ListItem key={i} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'error.main' }} /></ListItemIcon>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{text}</Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>

          <Divider sx={{ my: 6 }} />

          {/* FAQ */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 4, textTransform: 'uppercase', color: 'primary.main' }}>
            FAQ: Fast Answers for the Job Site
          </Typography>
          {[
            {
              q: "What are instrumentation fittings?",
              a: "Precision components that create repeatable, leak-tight joints for small-bore tubing and instrument pipe, connecting instruments to process lines with controlled sealing faces or ferrule swaging."
            },
            {
              q: "What types of tube fittings are common?",
              a: "Two-ferrule compression fittings are the standard for high-integrity service. You will also see single-ferrule variants, flare fittings, and weld fittings for permanent joints."
            },
            {
              q: "Are BSP and NPT interchangeable?",
              a: "No. BSP uses a 55 degree flank angle and different thread pitch series; NPT uses 60 degrees. They are not compatible and should be connected only through dedicated adapters."
            },
            {
              q: "How do I identify BSPP vs BSPT vs NPT?",
              a: "Check for taper, measure pitch and diameter, and confirm flank angle with gauges. BSPP is parallel and seals on a washer or cone. BSPT and NPT are tapered and seal on threads with sealant."
            },
            {
              q: "Do NPT or BSP threads need sealant?",
              a: "Tapered NPT and BSPT typically require sealant. Parallel BSPP does not seal on the threads and should use a bonded washer, O-ring, or metal cone as designed."
            }
          ].map((item, i) => (
            <Box key={i} sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 1, textTransform: 'uppercase' }}>
                {item.q}
              </Typography>
              <Typography>{item.a}</Typography>
            </Box>
          ))}

          <Divider sx={{ my: 6 }} />

          {/* Related components */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 3, textTransform: 'uppercase', color: 'primary.main' }}>
            Related Components That Complete the Build
          </Typography>
          <List sx={{ mb: 4 }}>
            {[
              "Instrument isolation and calibration: explore manifold valves for double block and bleed service to support safe venting and instrument maintenance.",
              "Skid accessories: see high pressure tubing and hoses for integrated assemblies, and review check valves where backflow control is required.",
              "Hydrogen projects: review PANAM solutions for hydrogen applications, including fittings, valves, and materials curated for hydrogen service."
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'primary.main' }} /></ListItemIcon>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{text}</Typography>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 6 }} />

          {/* Next steps */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 3, textTransform: 'uppercase', color: 'primary.main' }}>
            Next Steps
          </Typography>
          <List sx={{ mb: 4 }}>
            {[
              "Download the on-skid thread ID cheat sheet to cut identification time at the bench.",
              "Standardise your build: specify PANAM tube fittings, adapters, and pipe fittings for hydrogen across the project, and request kitting services by line class and instrument type.",
              "Register for partner access to centralised technical documentation and installation cards."
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'primary.main' }} /></ListItemIcon>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{text}</Typography>
              </ListItem>
            ))}
          </List>
          <Typography>
            Customers count on certainty. Build with clear thread identification, correct sealing methods, and hydrogen-ready fittings, and you typically avoid the delays that derail commissioning.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* Links */}
          <Typography variant="h4" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 3, textTransform: 'uppercase' }}>
            Links to Help You Plan
          </Typography>
          <List sx={{ mb: 4 }}>
            {[
              { text: "Explore PANAM tube fittings and adapters for instrumentation service", href: "https://www.panamvalve.com/products/instrumentation-fittings" },
              { text: "Hydrogen-ready components and guidance for a green hydrogen system", href: "https://www.panamvalve.com/products/hydrogen" },
              { text: "Manifold valves for isolation, calibration, and double block and bleed", href: "https://www.panamvalve.com/products/valve-manifolds" },
              { text: "High pressure tubing options for instrumentation skids", href: "https://www.panamvalve.com/products/tubing" }
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
              BUILDING A HYDROGEN-READY SKID?
            </Typography>
            <Typography sx={{ color: 'white !important', mb: 3, opacity: 0.9 }}>
              PANAM supports high-integrity builds with hydrogen-focused tube fittings, adapters, and pipe fittings engineered for leak-tight performance. Contact us for kitting support across line classes and instrument take-offs.
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