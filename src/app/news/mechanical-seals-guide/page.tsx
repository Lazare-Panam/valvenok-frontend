'use client';

import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Stack, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon
} from '@mui/material';
import Grid from '@mui/material/Grid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function MechanicalSealsPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 10 }}>

      {/* --- HERO SECTION --- */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', pt: 15, pb: 10 }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, letterSpacing: '0.4em', opacity: 0.8 }}>
            Engineering Deep-Dive
          </Typography>
          <Typography variant="h1" sx={{ fontFamily: '"Barlow Condensed"', fontSize: { xs: '2.5rem', md: '4.5rem' }, fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, mt: 1 }}>
            Unlocking the Secrets of Sealflex Mechanical Seals
          </Typography>
          <Typography variant="h5" sx={{ mt: 2, opacity: 0.85, fontStyle: 'italic' }}>
            A Guide for Engineers
          </Typography>
          <Stack direction="row" spacing={3} sx={{ mt: 4, opacity: 0.8 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PersonOutlineIcon fontSize="small" />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>Sejal Raina</Typography>
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
        <Paper elevation={10} sx={{ p: 4, borderRadius: 0, borderLeft: '8px solid',  mb: 8 }}>
          <Typography variant="h4" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 900, mb: 3, textTransform: 'uppercase' }}>
            Key Takeaways
          </Typography>
          <Grid container spacing={2}>
            {[
              "Seaflex seals prevent fluid leakage across pressures from vacuum to 140 Bar and -60°C to 350°C.",
              "35+ seal types cover every application from clean water pumps to pharmaceutical reactors.",
              "Material selection — rubber bellow, PTFE, or metal bellow — is as critical as seal type.",
              "Cartridge seals reduce installation errors and cut shutdown time dramatically.",
              "Correct API flush plans are essential for maximising seal life in demanding service."
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

        {/* --- ARTICLE BODY --- */}
        <Box sx={{ '& p': { mb: 3, lineHeight: 1.8, color: 'text.secondary', fontSize: '1.1rem' } }}>

          {/* Intro */}
          <Typography>
            Ever wondered what keeps industrial systems running smoothly without leaking a drop? The unsung hero is the mechanical seal. From water pumps to pharmaceutical reactors and oil refineries, Sealflex mechanical seals from Valvenok are the precision components that prevent leaks, protect equipment, and keep operations running. So, what makes them so essential — and how do they perform under pressures up to 140 Bar and temperatures from -60°C to 350°C?
          </Typography>

          {/* MAIN PRODUCT IMAGE */}


          {/* Understanding Mechanical Seals */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase', color: 'primary.main' }}>
            Understanding Mechanical Seals and Their Importance
          </Typography>
          <Typography>
            Seaflex mechanical seals from Valvenok serve as the precision barrier between process fluid and the outside world. They prevent leaks that could cause production losses, safety incidents, or environmental violations — and they do it reliably across some of the most demanding conditions in industry. Whether it's a rubber bellow seal on a water treatment pump or a double agitator seal on a hazardous chemical reactor, the right seal keeps operations safe, clean, and efficient.
          </Typography>

         <Box sx={{ my: 6, textAlign: 'center' }}>
            <Box
              component="img"
              src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1775566047/9b937e8a-702e-4c91-aaf0-4395b77b1257.png"
              alt="Seaflex BS11 Series"
              sx={{ width: '100%', maxWidth: 700, border: '1px solid', borderColor: 'divider' }}
            />
          </Box>

          <Typography variant="h4" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, mt: 4, textTransform: 'uppercase' }}>
            Why Seal Failure Is So Costly
          </Typography>
          <Typography>
            A failed seal means unplanned downtime — and in industrial settings, that cost is almost always far greater than the seal itself. Beyond the repair bill, there is lost production, potential product contamination, environmental clean-up, and in serious cases, regulatory consequences. This is why engineers specify Seaflex seals with pressure ratings matched to the maximum credible operating condition — not just the normal operating point.
          </Typography>

          {/* Anatomy */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, mt: 6, textTransform: 'uppercase', color: 'primary.main' }}>
            The Anatomy of a Seaflex Mechanical Seal
          </Typography>

          <TableContainer component={Paper} elevation={0} sx={{ mb: 4, border: '1px solid', borderColor: 'divider', borderRadius: 0 }}>
            <Table size="small">
              <TableHead sx={{ bgcolor: 'grey.100' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 800, py: 2 }}>COMPONENT</TableCell>
                  <TableCell sx={{ fontWeight: 800 }}>STANDARD MATERIALS</TableCell>
                  <TableCell sx={{ fontWeight: 800 }}>HIGH-PERFORMANCE OPTIONS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  { c: "Seal Faces", s: "Carbon, Ceramic", h: "Silicon Carbide, Tungsten Carbide" },
                  { c: "Secondary Seals", s: "Nitrile, Neoprene", h: "Viton®, EPDM, PTFE, Silicone" },
                  { c: "Hardware", s: "SS 304", h: "SS 316, Alloy 20, Hastelloy-C" },
                  { c: "Springs", s: "SS 304", h: "SS 316" }
                ].map((row, i) => (
                  <TableRow key={i}>
                    <TableCell sx={{ fontWeight: 700 }}>{row.c}</TableCell>
                    <TableCell>{row.s}</TableCell>
                    <TableCell>{row.h}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography>
            The right material combination is as important as the seal type. Viton O-rings handle petroleum and chemicals to 200°C; PTFE bellows resist virtually all acids and solvents; and welded metal bellows (BS14) push capability to 350°C where no elastomer can survive.
          </Typography>

          {/* How They Work */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, mt: 6, textTransform: 'uppercase', color: 'primary.main' }}>
            How Seaflex Mechanical Seals Work
          </Typography>
          <Typography>
            Two precision-lapped faces — one rotating, one stationary — are held in controlled contact by spring force and system pressure. A microscopic fluid film between them provides lubrication while forming the seal. The spring keeps the faces together during low-pressure start-up; as system pressure rises, it adds to the closing force. The result is a self-adjusting seal that delivers near-zero leakage across a wide operating range.
          </Typography>
          <Typography>
            Heat generated by face friction is the key engineering challenge. The <strong>PV value</strong> — contact pressure multiplied by sliding velocity — governs heat generation. Silicon carbide face materials, correct spring loading, and the right API flush plan keep the PV value within safe limits, ensuring long service life even at speeds up to 4,500 RPM.
          </Typography>

          {/* CARTRIDGE IMAGE */}
          <Box sx={{ my: 6, textAlign: 'center' }}>
            <Box
              component="img"
              src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1775566104/ea2a7d16-ebdd-40e4-946e-1f4b0d72ff9b.png"
              alt="Seaflex CS52 Cartridge Seal"
              sx={{ width: '40%', maxWidth: 500 }}
            />
          </Box>

          {/* Seal Range */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 3, textTransform: 'uppercase', color: 'primary.main' }}>
            The Seaflex Seal Range: Types and Applications
          </Typography>

          <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 1, textTransform: 'uppercase' }}>
            Rubber Bellow Seals — Series BS11
          </Typography>
          <Typography>
            The most widely used general-purpose seal. Operating up to 4,500 RPM, 12 Bar, and 180°C across shaft diameters from 12–100 mm. Tolerant of crystallising fluids thanks to the bellow design. Used in water treatment, pharmaceuticals, power generation, and pulp and paper.
          </Typography>

          <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 1, mt: 3, textTransform: 'uppercase' }}>
            Spring Seals — PS36, PS40, PS34
          </Typography>
          <Typography>
            The multi spring seal PS36 is the Seaflex workhorse for high-pressure duty — rated to 35 Bar and -60°C to 200°C, ideal for petrochemical, chemical, and refinery service. The wave spring PS40 suits slurry and chemical applications to 180°C. The bi-direction PS34 handles applications with shaft rotation in both directions, rated to 14 Bar and 200°C.
          </Typography>

          <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 1, mt: 3, textTransform: 'uppercase' }}>
            PTFE & Metal Bellow Seals — BS13, BS14
          </Typography>
          <Typography>
            For corrosive duty, the PTFE bellow seal BS13 is chemically inert to virtually all acids, alkalis, and solvents. For high-temperature service, the metal bellow seal BS14 eliminates all elastomers, enabling reliable operation to 350°C in petroleum refineries and petrochemical plants.
          </Typography>

          <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 1, mt: 3, textTransform: 'uppercase' }}>
            Cartridge Seals — CS52, CS53
          </Typography>
          <Typography>
            Pre-assembled and pre-set at the factory, cartridge seals eliminate installation error — the leading cause of premature seal failure. Rated to 15 Bar and 220°C for slurry, pulp and paper, and food processing. The double cartridge CS53 adds a pressurised barrier fluid between two face sets, providing ultimate protection for hazardous or toxic process fluids.
          </Typography>

          <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 1, mt: 3, textTransform: 'uppercase' }}>
            Agitator Seals — AS91 to AS105
          </Typography>
          <Typography>
            Purpose-built for vertical shaft mixing equipment — reactors, blenders, and process vessels. The range spans from the single agitator AS91 (vacuum to 20 Bar, 180°C) and double agitator AS92N (vacuum to 10 Bar, 250°C) to the high-pressure AS97 (vacuum to 35 Bar, 250°C). Specialised variants include the ANFD reactor seal AS103, glass-lined reactor double seal AS105, and the dry running seal DS71 for zero-contamination food and pharmaceutical service.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* Selecting */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase', color: 'primary.main' }}>
            Selecting the Right Seaflex Seal
          </Typography>
          <Typography>
            The right seal starts with answering five key questions: What fluid are you sealing? What is the maximum pressure — including spikes? What is the temperature range? What is the shaft diameter and speed? And are there regulatory requirements (food-grade, zero-emission, pharmaceutical)?
          </Typography>

          <Typography variant="h4" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, mt: 4, textTransform: 'uppercase' }}>
            Quick Selection Guide
          </Typography>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {[
              { label: "Clean water / general service", val: "Rubber Bellow BS11 (up to 12 Bar, 180°C)" },
              { label: "Corrosive acid or solvent", val: "PTFE Bellow BS13" },
              { label: "Petrochemical / refinery", val: "Multi Spring PS36 (up to 35 Bar, 200°C)" },
              { label: "High temperature (up to 350°C)", val: "Metal Bellow BS14" },
              { label: "Fast installation / low maintenance", val: "Cartridge CS52 or CS53" },
              { label: "Reactor or agitator vessel", val: "Agitator Series AS91 / AS92N / AS97" },
              { label: "Boiler feed pump (up to 140 Bar)", val: "Boiler Feed Cartridge PS38" },
              { label: "Food or pharma — zero contamination", val: "Dry Running Seal DS71" }
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6 }}>
                <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="caption" sx={{ fontWeight: 800, color: 'primary.main', display: 'block' }}>{item.label}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>{item.val}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Typography>
            And don't overlook the flush plan. API plans such as Plan 11 (recirculation for clean fluids), Plan 23 (cooled recirculation for hot applications), Plan 32 (external clean flush for abrasive fluids), and Plan 53A (pressurised barrier for double seals on hazardous fluids) are essential for maximising Seaflex seal life in demanding service.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* Installation & Maintenance */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 3, textTransform: 'uppercase', color: 'primary.main' }}>
            Installation, Troubleshooting & Maintenance
          </Typography>

          <Typography variant="h4" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase' }}>
            Get Installation Right
          </Typography>
          <Typography>
            Most premature seal failures trace back to installation errors — not seal defects. Clean the shaft and housing thoroughly, handle seal faces without touching the lapped surfaces, lubricate O-rings with a compatible grease, and never start the pump without fluid prime or flush supply. For cartridge seals, installation is even simpler: slide on, bolt down, remove the setting clips — done.
          </Typography>

          <Typography variant="h4" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, mt: 4, textTransform: 'uppercase' }}>
            Spot the Warning Signs Early
          </Typography>
          <List sx={{ mb: 4 }}>
            {[
              "Visible weeping at the gland — act promptly before it becomes a flood.",
              "Elevated gland temperature — check flush flow immediately; may indicate dry running.",
              "Increased vibration or noise — check shaft alignment and bearing condition.",
              "Rapid face wear on removed seals — indicates abrasive contamination or incorrect materials."
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'primary.main' }} /></ListItemIcon>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{text}</Typography>
              </ListItem>
            ))}
          </List>

          <Typography variant="h4" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase' }}>
            Maintain Proactively
          </Typography>
          <Typography>
            Weekly visual checks, monthly flush system verification, and quarterly vibration analysis keep small problems from becoming big ones. Stock critical spare seals for essential equipment — the cost of holding a spare is a fraction of an unplanned shutdown. And for double agitator and double cartridge seals, the Valvenok Thermosyphon Pot System (TSP100) keeps barrier fluid circulating, cooled, and clean, extending seal life significantly in refinery, chemical, and petrochemical service.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* Summary */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2, textTransform: 'uppercase', color: 'primary.main' }}>
            Summary
          </Typography>
          <Typography>
            Seaflex mechanical seals from Valvenok are the reliability foundation of pumps, agitators, reactors, and rotating equipment across industry worldwide. With over 35 configurations covering pressures from vacuum to 140 Bar, temperatures from -60°C to 350°C, and shaft sizes from 12 mm to 200 mm, there is a Seaflex seal for every application. Select the right type, specify the right materials, install it correctly, and support it with the right flush plan — and your Seaflex seal will deliver years of leak-free, reliable performance.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* FAQ */}
          <Typography variant="h3" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 4, textTransform: 'uppercase', color: 'primary.main' }}>
            Frequently Asked Questions
          </Typography>

          {[
            {
              q: "What are the main types of Seaflex mechanical seals?",
              a: "The Seaflex range spans rubber bellow seals (BS11 — general water and chemical service), spring seals (PS36 multi spring, PS40 wave spring, PS34 bi-direction), PTFE bellow seals (BS13 — corrosive service), metal bellow seals (BS14 — high-temperature petroleum), cartridge seals (CS52 single, CS53 double — fast installation), dry running seals (DS71 — food and pharma), and agitator seals (AS91 through AS105 — reactors and mixing vessels). Each is engineered for a defined range of pressure, temperature, and fluid conditions."
            },
            {
              q: "What is the difference between single and double cartridge seals?",
              a: "A single cartridge seal (CS52) provides one set of precision faces sealing the process fluid from atmosphere. A double cartridge seal (CS53) adds a second face set with pressurised barrier fluid between them — so even if the inboard seal fails, process fluid cannot escape. Double cartridge seals are required for toxic, hazardous, or high-value fluids."
            },
            {
              q: "How long do Seaflex mechanical seals last?",
              a: "Under correct operating conditions with the right flush plan, Seaflex seals are designed for service life measured in years. The main causes of shortened life are dry running, installation errors, shaft misalignment, incorrect material selection, and operation outside rated limits. For critical applications, Valvenok recommends planned replacement at every major shutdown rather than running to failure."
            },
            {
              q: "Why are mechanical seals better than gland packing?",
              a: "Traditional gland packing is designed to leak slightly — it must, to lubricate the shaft. Seaflex mechanical seals achieve near-zero leakage through precision face contact, eliminating product waste, shaft wear, and ongoing leakage that creates housekeeping and compliance problems. The payback on upgrading from packing to a Seaflex mechanical seal is typically very rapid."
            }
          ].map((item, i) => (
            <Box key={i} sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 1, textTransform: 'uppercase' }}>
                {item.q}
              </Typography>
              <Typography>{item.a}</Typography>
            </Box>
          ))}

          {/* CALL TO ACTION */}
          <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 5, mt: 8, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2 }}>
              UPGRADING FROM GLAND PACKING?
            </Typography>
            <Typography sx={{ color: 'white !important', mb: 3, opacity: 0.9 }}>
              Seaflex mechanical seals achieve near-zero leakage, eliminating product waste and shaft wear. The payback on upgrading from packing to a Seaflex mechanical seal is typically very rapid.
            </Typography>
            <Typography variant="button" sx={{ fontWeight: 900, borderBottom: '2px solid', pb: 1, cursor: 'pointer' }}>
              Consult our Engineering Team
            </Typography>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}