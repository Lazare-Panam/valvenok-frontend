"use client";

import React from "react";
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
  Link,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function MechanicalSealsPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", pb: 10 }}>
      {/* --- HERO SECTION --- */}
      <Box sx={{ bgcolor: "primary.main", color: "white", pt: 15, pb: 10 }}>
        <Container maxWidth="md">
          <Typography
            variant="overline"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontWeight: 800,
              letterSpacing: "0.4em",
              opacity: 0.8,
            }}
          >
            Engineering Deep-Dive
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontSize: { xs: "2.5rem", md: "4.5rem" },
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1,
              mt: 1,
            }}
          >
            Single Agitator Mechanical Seals: Design, Working Principle &
            Industrial Applications
          </Typography>
          <Typography
            variant="h5"
            sx={{ mt: 2, opacity: 0.85, fontStyle: "italic" }}
          >
            A Complete Engineering Guide
          </Typography>
          <Stack direction="row" spacing={3} sx={{ mt: 4, opacity: 0.8 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PersonOutlineIcon fontSize="small" />
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700, textTransform: "uppercase" }}
              >
                Sejal Raina
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <AccessTimeIcon fontSize="small" />
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700, textTransform: "uppercase" }}
              >
                May 2026
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ mt: -5 }}>
        {/* --- KEY TAKEAWAYS --- */}
        <Paper
          elevation={10}
          sx={{
            p: 4,
            borderRadius: 0,
            borderLeft: "8px solid",
            borderColor: "primary.main",
            mb: 8,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontWeight: 900,
              mb: 3,
              textTransform: "uppercase",
            }}
          >
            Key Takeaways
          </Typography>
          <Grid container spacing={2}>
            {[
              "Cartridge construction is non-negotiable for agitator shafts — field-assembled components cannot tolerate 0.25–0.5 mm of shaft run-out.",
              "The seal is the liquid film between the faces. Lose it for thirty seconds and you lose the seal.",
              "Secondary O-ring material is as critical as face pairing — the wrong elastomer fails before the faces do.",
              "Single seal is the cost-effective default for non-toxic service. Double seal only when hazardous, sterile, or above 20 bar.",
              "Heat checking is the most common failure mode — and the most preventable.",
            ].map((text, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6 }}>
                <Stack direction="row" spacing={1} alignItems="flex-start">
                  <CheckCircleOutlineIcon
                    sx={{ color: "primary.main", fontSize: 20, mt: 0.3 }}
                  />
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {text}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* --- BANNER IMAGE --- */}
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Box
            component="img"
            src="https://pblol2.blob.core.windows.net/valvenok-images/blogs/blog4.jpg"
            alt="Single Agitator Mechanical Seal AS91"
            sx={{
              width: "100%",
              maxWidth: "100%",
              border: "1px solid",
              borderColor: "divider",
            }}
          />
        </Box>

        {/* --- ARTICLE BODY --- */}
        <Box
          sx={{
            "& p": {
              mb: 3,
              lineHeight: 1.8,
              color: "#000000",
              fontSize: "1.1rem",
            },
          }}
        >
          {/* Intro */}
          <Typography>
            Commissioning season moves fast. A reactor that goes down because of
            a failed shaft seal does not wait for the next scheduled turnaround.
            Agitator seals fail in patterns that are almost entirely preventable
            — if you understand how they work.
          </Typography>
          <Typography>
            This guide covers everything an engineer or maintenance lead needs:
            what a single agitator mechanical seal actually is, how it keeps
            your vessel leak-free, the operating envelope you can rely on, where
            it belongs and where it does not, how to choose one correctly, and
            how to keep it running.
          </Typography>
          <Typography>
            PANAM supplies single and double agitator mechanical seals, reactor
            sealing solutions, and process equipment for demanding industrial
            service. Contact us with your data sheet and our application
            engineers will recommend a face pair, elastomer, and flush plan
            within one working day.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* What it is */}
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontWeight: 800,
              mb: 2,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            What Is a Single Agitator Mechanical Seal?
          </Typography>
          <Typography>
            A single agitator mechanical seal is a cartridge-style, end-face
            seal designed specifically for the slow-rotating, side-loaded shafts
            found on industrial mixing vessels, reactors, and agitator tanks.
            Unlike pump seals — which run on stiff, well-supported shafts at
            high RPM — agitator seals must tolerate substantial radial run-out,
            axial movement, and shaft deflection while maintaining a leak-tight
            barrier between the process fluid and the atmosphere.
          </Typography>
          <Typography>
            The word <em>single</em> refers to one pair of seal faces as the
            primary leak path. A double agitator seal uses two pairs in series
            with a pressurised barrier fluid between them — necessary when the
            process media is toxic, sterile, or otherwise hazardous. For the
            broad middle ground of moderate chemical, food, pharma, and refinery
            duties, a well-engineered single agitator seal is the most
            cost-effective and easiest-to-maintain choice.
          </Typography>
          <Typography>
            The AS91 is a cartridge assembly — every part is pre-assembled,
            pre-aligned, and pressure-tested at the factory, then dropped onto
            the shaft as one unit. Agitator shafts overhang into the vessel,
            sometimes by a metre or more, describing a small orbit even when
            well aligned — typically 0.25–0.5 mm of total run-out. A cartridge
            seal absorbs this inside the assembly so the shaft sleeve, faces,
            and springs all move as one rigid system.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* Design and components */}
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontWeight: 800,
              mb: 2,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            Design and Components
          </Typography>
          <Typography>
            A typical AS91-style seal has seven functional groups working
            together:
          </Typography>
          <List sx={{ mb: 3 }}>
            {[
              "Gland / housing — bolts to the vessel nozzle, locates the stationary parts, and contains process pressure.",
              "Rotary face — typically resin-impregnated carbon. Rotates with the sleeve and carries one half of the seal interface.",
              "Spring — pre-loads the rotary face against the stationary face, keeping contact during axial play and start-up.",
              "Grease / barrier port — lets you pre-charge a small grease reservoir to lubricate the faces during dry start.",
              "Shaft sleeve — a hardened, ground sleeve that protects the agitator shaft and carries the rotating components.",
              "Stationary face — silicon carbide, tungsten carbide, or ceramic. Lapped flat to within 1–2 light bands.",
              "Secondary seals — elastomer O-rings (Viton, EPDM, FFKM) that close every static gap inside the cartridge.",
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon
                    sx={{ fontSize: 18, color: "primary.main" }}
                  />
                </ListItemIcon>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {text}
                </Typography>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 6 }} />

          {/* Working principle */}
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontWeight: 800,
              mb: 2,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            Mechanical Seal Working Principle
          </Typography>
          <Typography>
            Stripped to its essence: take two perfectly flat rings, press them
            together hard enough that nothing leaks across the joint, and let
            one rotate while the other stays still. The rest of the assembly
            exists to make that happen reliably for thousands of hours.
          </Typography>
          <List sx={{ mb: 3 }}>
            {[
              "Spring pre-load — before any pressure or rotation, the spring pushes the rotary face firmly against the stationary face. This closing force holds the seal shut at start-up and during vacuum service.",
              "Hydraulic load — once process pressure builds inside the vessel, it also pushes on the back of the rotary face, adding to the closing force. Closing force always exceeds opening force by a controlled balance ratio.",
              "Liquid film formation — when the shaft starts to rotate, a microscopic layer of process liquid (0.5–2 microns thick) is dragged into the gap between the faces. This film is the actual seal — and the lubricant.",
              "Heat generation — friction in that film generates heat. The cooler face draws heat from the warmer one through the liquid; the housing dissipates it to atmosphere or a flush. Lose the heat path and the film flashes to vapour.",
              "Controlled vapour escape — a tiny fraction of the liquid film evaporates at the outer edge of the faces. This is the only leakage — usually a few drops a day, often invisible.",
              "Equilibrium — closing force, opening force, film thickness, heat generation, and heat dissipation settle into a stable equilibrium. As long as that balance holds, the seal runs.",
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon
                    sx={{ fontSize: 18, color: "primary.main" }}
                  />
                </ListItemIcon>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {text}
                </Typography>
              </ListItem>
            ))}
          </List>
          <Typography>
            This is why face flatness, surface finish, and material pairing
            matter so much. A face that is even 1 micron out of flat will leak
            measurably. And why running an agitator seal dry, even for thirty
            seconds, is often fatal: lose the film and you lose the seal.
          </Typography>
          <Typography>
            The two seal faces handle the dynamic, rotating leak path. But the
            cartridge has plenty of static leak paths too — between the sleeve
            and the shaft, between the gland and the vessel nozzle, between each
            face and its holder. These are closed by elastomer O-rings. Pick the
            wrong elastomer and the static seals fail long before the faces do.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* Operating envelope */}
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontWeight: 800,
              mb: 2,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            Operating Envelope
          </Typography>
          <Typography>
            Within the AS91 line, a single agitator mechanical seal runs
            reliably across the following ranges:
          </Typography>
          <List sx={{ mb: 3 }}>
            {[
              "Shaft diameter: 20 mm to 150 mm",
              "Pressure: vacuum to 20 bar (max)",
              "Temperature: ambient to 180 °C",
              "Shaft speed: up to 600 RPM",
              "Applications: chemical, pharma, food, refineries, petrochemical",
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon
                    sx={{ fontSize: 18, color: "primary.main" }}
                  />
                </ListItemIcon>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {text}
                </Typography>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 6 }} />

          {/* Single vs Double comparison */}
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontWeight: 800,
              mb: 3,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            Single vs Double Agitator Seal: Quick Comparison
          </Typography>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {[
              {
                label: "Shaft diameter",
                single: "20 mm to 150 mm",
                double: "25 mm to 150 mm",
              },
              {
                label: "Pressure",
                single: "Vacuum to 20 bar",
                double: "Vacuum to 10 bar",
              },
              {
                label: "Temperature",
                single: "Ambient to 180 °C",
                double: "Ambient to 250 °C",
              },
              {
                label: "Shaft speed",
                single: "Up to 600 RPM",
                double: "Up to 600 RPM",
              },
              {
                label: "Containment",
                single: "Single face — small process emissions possible",
                double:
                  "Two faces with pressurised barrier — zero process emissions",
              },
              {
                label: "Best for",
                single:
                  "Non-toxic chemicals, food, refinery side streams, pharma utilities",
                double:
                  "Toxic, sterile, hazardous or fugitive-emission-controlled service",
              },
              {
                label: "Relative cost",
                single: "Lower capital, lower running cost",
                double: "Higher capital, requires barrier fluid system",
              },
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6 }}>
                <Box sx={{ p: 2, border: "1px solid", borderColor: "divider" }}>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 800,
                      color: "primary.main",
                      display: "block",
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    Single: {item.single}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 700, color: "text.secondary" }}
                  >
                    Double: {item.double}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 6 }} />

          {/* Materials */}
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontWeight: 800,
              mb: 2,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            Materials of Construction
          </Typography>
          <Typography>
            Material selection is application-driven, not catalogue-driven. The
            AS91 is built from:
          </Typography>
          <List sx={{ mb: 3 }}>
            {[
              "Primary seal faces: carbon, tungsten carbide, silicon carbide, ceramic, or stellite. The two faces are always a pair — typically a softer carbon running against a harder ceramic or carbide.",
              "Secondary seal rings: Viton, EPDM, neoprene, nitrile, or silicone — chosen for chemical compatibility and temperature.",
              "Hardware: SS 304 or SS 316 as standard; Hastelloy, Alloy 20, or duplex stainless on request.",
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon
                    sx={{ fontSize: 18, color: "primary.main" }}
                  />
                </ListItemIcon>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {text}
                </Typography>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 6 }} />

          {/* Industrial applications */}
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontWeight: 800,
              mb: 3,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            Industrial Applications
          </Typography>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {[
              {
                label: "Chemical Processing",
                val: "Reactors for resins, dyes, intermediates, acids and bases at moderate temperature. The standard duty for which the AS91 was designed.",
              },
              {
                label: "Pharmaceutical",
                val: "API reactors, crystallisers, and blending vessels. FDA-compliant elastomer options keep the seal in line with cGMP requirements.",
              },
              {
                label: "Food & Beverage",
                val: "Mixers, fermenters, and storage tanks. Food-grade elastomers and 316L wetted parts allow CIP and SIP cycles up to 180 °C.",
              },
              {
                label: "Refineries",
                val: "Side-stream blending, additive injection vessels, and lube-oil reactors. Handles light hydrocarbon vapours at elevated temperatures.",
              },
              {
                label: "Petrochemical",
                val: "Polymerisation vessels, monomer storage agitators, and catalyst slurry tanks. Carbide-on-carbide face pairings handle abrasive duty.",
              },
              {
                label: "Specialty & Process",
                val: "Paint, ink, adhesive, cosmetic, and biotechnology mixing — wherever a clean, low-emission shaft seal at under 20 bar is required.",
              },
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6 }}>
                <Box sx={{ p: 2, border: "1px solid", borderColor: "divider" }}>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 800,
                      color: "primary.main",
                      display: "block",
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    {item.val}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 6 }} />

          {/* Advantages and limitations */}
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontWeight: 800,
              mb: 3,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            Advantages and Limitations
          </Typography>
          <Grid container spacing={4} sx={{ mb: 4 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"Barlow Condensed"',
                  fontWeight: 800,
                  mb: 2,
                  textTransform: "uppercase",
                }}
              >
                Where It Wins
              </Typography>
              <List>
                {[
                  "Lower capital cost than a double seal — fewer faces, no barrier fluid system, simpler gland.",
                  "No barrier fluid management. Just a small grease reservoir at start-up; nothing to monitor, top up, or recirculate.",
                  "Easier installation. A single cartridge, four to eight gland bolts, one set-screw collar — usually under an hour of fitter time.",
                  "Better visibility into seal health. A single leak path means a single failure mode to diagnose.",
                  "Smaller axial footprint than equivalent double seals — useful on retrofit projects where vessel nozzle height is fixed.",
                ].map((text, i) => (
                  <ListItem key={i} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckCircleOutlineIcon
                        sx={{ fontSize: 18, color: "primary.main" }}
                      />
                    </ListItemIcon>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {text}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"Barlow Condensed"',
                  fontWeight: 800,
                  mb: 2,
                  textTransform: "uppercase",
                }}
              >
                When to Choose Something Else
              </Typography>
              <List>
                {[
                  "Toxic or carcinogenic media — go to a double agitator seal (AS92N or AS95) with a pressurised barrier.",
                  "Sterile, aseptic, or pyrogen-controlled service — a double seal with sterile barrier fluid is mandatory.",
                  "Pressures above 20 bar — step up to a high-pressure agitator seal (AS97).",
                  "Temperatures above 180 °C — a double seal with cooling barrier handles up to 250 °C.",
                  "Hard vacuum with abrasive solids — consider a glass-lined reactor double seal (AS105).",
                ].map((text, i) => (
                  <ListItem key={i} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckCircleOutlineIcon
                        sx={{ fontSize: 18, color: "error.main" }}
                      />
                    </ListItemIcon>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {text}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>

          <Divider sx={{ my: 6 }} />

          {/* Common failure modes */}
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontWeight: 800,
              mb: 3,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            Common Failure Modes
          </Typography>
          <Typography>
            A correctly specified, correctly installed, and correctly operated
            seal will routinely run 18–36 months between overhauls. When it
            fails earlier, the cause almost always falls into one of four
            categories:
          </Typography>
          <Grid container spacing={2} sx={{ mb: 4, mt: 1 }}>
            {[
              {
                label: "Heat checking",
                tag: "Most common — preventable",
                val: "Hairline radial cracks on a hard face caused by repeated thermal shock. Trace it to a dry-start event, an interrupted flush, or barrier grease that was never topped up. Add a low-flow flush or restore the grease port routine.",
              },
              {
                label: "Blistering of the carbon face",
                tag: "Material mismatch",
                val: "Pin-head bubbles on the carbon caused by light hydrocarbons absorbing into the resin binder, then flashing on shut-down. Specify an antimony-impregnated carbon or move to a non-resin grade.",
              },
              {
                label: "O-ring extrusion",
                tag: "Pressure or material",
                val: "Elastomer pushed into the clearance gap between mating components. Indicates a pressure spike beyond 20 bar, an incompatible elastomer that has swollen and softened, or worn anti-extrusion rings.",
              },
              {
                label: "Hang-up on the sleeve",
                tag: "Solids in service",
                val: "The spring-loaded face cannot follow the stationary face because product has built up between the rotary face and the sleeve. Common in sticky polymers and crystallising salts. Solution: a steam quench or external flush at the gland.",
              },
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{
                    p: 2,
                    border: "1px solid",
                    borderColor: "divider",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 800,
                      color: "primary.main",
                      display: "block",
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                      color: "error.main",
                      display: "block",
                      mb: 0.5,
                    }}
                  >
                    {item.tag}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {item.val}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 6 }} />

          {/* Selection guide */}
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontWeight: 800,
              mb: 3,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            Selection Guide
          </Typography>
          <Typography>
            Work through these five questions in order. Skipping any of them is
            the single most common cause of premature seal failure in the field.
          </Typography>
          <List sx={{ mb: 3 }}>
            {[
              "What is the process media? Get the full chemistry — not 'solvent mixture' but the actual components, percentages, and any trace contaminants. This drives face material and elastomer choice.",
              "What is the operating envelope? Maximum pressure, maximum temperature, vacuum during evacuation, and the worst-case excursion (CIP at 130 °C? Steam-out at 150 °C?).",
              "What is the shaft diameter and run-out? Measure the actual run-out at the seal location — manufacturers' drawings are often optimistic.",
              "What flush, barrier, or quench is available? Sometimes the answer is nothing — and that is fine, but it changes the seal selection.",
              "What are the maintenance constraints? Cartridge replacement on a turnaround? Or quick swap-out without draining the vessel?",
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon
                    sx={{ fontSize: 18, color: "primary.main" }}
                  />
                </ListItemIcon>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {text}
                </Typography>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 6 }} />

          {/* Maintenance best practices */}
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontWeight: 800,
              mb: 3,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            Maintenance Best Practices
          </Typography>
          <List sx={{ mb: 3 }}>
            {[
              "Pre-charge the grease port before commissioning and at every restart after a shutdown longer than 24 hours. The seal faces should never see first rotation without lubrication present.",
              "Never run dry, even briefly. If the vessel is empty, lock out the agitator drive. Thirty seconds of dry running can crack a face.",
              "Track seal leakage as a KPI. A few drops per shift is normal. A visible weep is end-of-life. Trend the data; do not wait for a puddle.",
              "Always replace the seal as a cartridge. Re-using components from a failed seal almost never works — the dimensional stack-up changes.",
              "Inspect the shaft sleeve at every overhaul. A worn sleeve will eat a new seal in weeks.",
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon
                    sx={{ fontSize: 18, color: "primary.main" }}
                  />
                </ListItemIcon>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {text}
                </Typography>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 6 }} />

          {/* FAQ */}
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontWeight: 800,
              mb: 4,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            FAQ: Fast Answers for the Job Site
          </Typography>
          {[
            {
              q: "What is the difference between a single and a double agitator mechanical seal?",
              a: "A single seal uses one pair of faces and relies on the process fluid as the lubricating film; small process-side emissions are possible. A double seal uses two pairs in series with a pressurised, clean barrier fluid in between — barrier always migrates into the process, never out, so process emissions are effectively zero. Choose double for toxic, sterile, or hazardous duty; choose single for everything else.",
            },
            {
              q: "Can a single agitator seal handle vacuum?",
              a: "Yes. The AS91 is rated from full vacuum to 20 bar. Spring pre-load keeps the faces closed when there is no positive process pressure to do it — exactly the condition during vessel evacuation.",
            },
            {
              q: "What faces should I specify — carbon vs silicon carbide?",
              a: "For general chemical service, a carbon-vs-silicon-carbide pair is the default — the soft carbon polishes itself in against the hard SiC, and the pair tolerates moderate abrasive content. For heavy abrasives, polymerising service, or hot-oil duty, go to silicon-carbide-vs-silicon-carbide. Avoid carbon-vs-ceramic for anything above 120 °C.",
            },
            {
              q: "How long does a single agitator mechanical seal last?",
              a: "A correctly specified and installed seal in clean, non-abrasive service will routinely run 18–36 months between overhauls. Abrasive slurries, frequent thermal cycling, or marginal flush conditions can drop that to 6–12 months. Track leakage as a leading indicator and plan replacement before catastrophic failure.",
            },
            {
              q: "Do I need a flush plan for a single agitator seal?",
              a: "Not always. For clean, non-polymerising, non-crystallising service at moderate temperature, the grease-port reservoir at start-up is sufficient. For sticky, hot, or solids-laden service, an external flush (API Plan 32) or a quench (API Plan 62) significantly extends seal life.",
            },
            {
              q: "What does the AS91 model designation mean?",
              a: "AS91 is the catalogue code for a single agitator cartridge mechanical seal: AS for agitator seal, 9-series for top-entry agitator service, 1 for single-face. The companion AS92N is the same family with a double-face configuration; AS97 is the high-pressure version.",
            },
          ].map((item, i) => (
            <Box key={i} sx={{ mb: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"Barlow Condensed"',
                  fontWeight: 800,
                  mb: 1,
                  textTransform: "uppercase",
                }}
              >
                {item.q}
              </Typography>
              <Typography>{item.a}</Typography>
            </Box>
          ))}

          <Divider sx={{ my: 6 }} />

          {/* Related components */}
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontWeight: 800,
              mb: 3,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            Related Components That Complete the Build
          </Typography>
          <List sx={{ mb: 4 }}>
            {[
              "Double agitator seals: explore the AS92N and AS95 for toxic, sterile, and hazardous reactor service with zero process emissions.",
              "High-pressure service: see the AS97 for applications above 20 bar.",
              "Reactor accessories: review manifold valves and instrument fittings for integrated skid assemblies.",
              "Process valves: see PANAM valve solutions for chemical, pharma, and refinery service.",
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon
                    sx={{ fontSize: 18, color: "primary.main" }}
                  />
                </ListItemIcon>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {text}
                </Typography>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 6 }} />

          {/* Next steps */}
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontWeight: 800,
              mb: 3,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            Next Steps
          </Typography>
          <List sx={{ mb: 4 }}>
            {[
              "Send us your data sheet — process chemistry, operating envelope, shaft size — and our application engineers will recommend a face pair, elastomer, and flush plan within one working day.",
              "Standardise your build: specify PANAM agitator seals across the project and request kitting services by vessel class and instrument type.",
              "Register for partner access to centralised technical documentation and installation cards.",
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon
                    sx={{ fontSize: 18, color: "primary.main" }}
                  />
                </ListItemIcon>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {text}
                </Typography>
              </ListItem>
            ))}
          </List>
          <Typography>
            Customers count on certainty. Specify the right seal for the
            service, install it as a cartridge, never run it dry, and track
            leakage as a KPI — and you typically avoid the failures that derail
            production.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* Links */}
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontWeight: 800,
              mb: 3,
              textTransform: "uppercase",
            }}
          >
            Links to Help You Plan
          </Typography>
          <List sx={{ mb: 4 }}>
            {[
              {
                text: "Explore PANAM agitator mechanical seals for reactor and vessel service",
                href: "https://www.panamvalve.com/products/mechanical-seals",
              },
              {
                text: "Double agitator seals for toxic, sterile, and hazardous applications",
                href: "https://www.panamvalve.com/products/mechanical-seals/double-agitator",
              },
              {
                text: "Manifold valves for isolation, calibration, and double block and bleed",
                href: "https://www.panamvalve.com/products/valve-manifolds",
              },
              {
                text: "Instrumentation fittings for integrated process skids",
                href: "https://www.panamvalve.com/products/instrumentation-fittings",
              },
            ].map((item, i) => (
              <ListItem key={i} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon
                    sx={{ fontSize: 18, color: "primary.main" }}
                  />
                </ListItemIcon>
                <Link
                  href={item.href}
                  underline="hover"
                  sx={{
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    color: "primary.main",
                  }}
                >
                  {item.text}
                </Link>
              </ListItem>
            ))}
          </List>

          {/* CALL TO ACTION */}
          <Box
            sx={{
              bgcolor: "primary.main",
              color: "white",
              p: 5,
              mt: 8,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2 }}
            >
              NEED TO SEAL A REACTOR OR MIXING VESSEL?
            </Typography>
            <Typography sx={{ color: "white !important", mb: 3, opacity: 0.9 }}>
              PANAM supplies single and double agitator mechanical seals
              engineered for leak-tight performance across chemical, pharma,
              food, refinery, and petrochemical service. Send us your data sheet
              and we will respond within one working day.
            </Typography>
            <Typography
              variant="button"
              sx={{
                fontWeight: 900,
                borderBottom: "2px solid",
                pb: 1,
                cursor: "pointer",
              }}
            >
              Contact Our Engineering Team
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
