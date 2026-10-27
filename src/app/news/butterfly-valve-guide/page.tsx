"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
  Divider,
  Chip,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const DISPLAY_FONT = '"Barlow Condensed"';

export default function ButterflyValvePage() {
  const integrationItems = [
    {
      label: "Instrumentation Valves",
      desc: "Needle, ball, check, relief, gauge root, purge and toggle valves for high-pressure and standard-pressure circuits around butterfly valve installations.",
    },
    {
      label: "2-, 3- and 5-Valve Manifolds",
      desc: "For transmitter isolation and equalisation in differential pressure, level, and flow measurement loops.",
    },
    {
      label: "High-Pressure Fittings",
      desc: "Pipe fittings and cone & thread fittings from 10,000 to 60,000 psi for secure, traceable connections.",
    },
    {
      label: "Air Headers and Filters",
      desc: "Up to 20 outlets for distributing instrument air to multiple actuated butterfly valves, with inline filtration for air preparation.",
    },
    {
      label: "Relief and Check Valves",
      desc: "Overpressure protection and backflow prevention for pneumatic, hydraulic, and process circuits.",
    },
    {
      label: "Stainless Steel Tube and Pipe Fittings",
      desc: "Unions, reducers, gauge connectors, dielectric fittings, and adaptors for complete skid or system builds.",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Specification or BOM Submission",
      body: "Share a datasheet, valve list, or complete bill of materials covering butterfly valves, associated instrumentation, and connection requirements.",
    },
    {
      num: "02",
      title: "Engineering Review and Product Mapping",
      body: "Valvenok's engineering team maps your requirements to appropriate instrumentation valves, manifolds, pipe fittings, air headers, and filters — taking into account pressure class, line size, media compatibility, required standards, NACE MR0175, and environmental conditions.",
    },
    {
      num: "03",
      title: "Technical and Documentation Package",
      body: "For each proposed product, Valvenok provides technical datasheets and supports full heat-code traceability across valves and fittings — designed to streamline end-client documentation, vendor approval, and inspection.",
    },
    {
      num: "04",
      title: "Availability and Delivery Planning",
      body: "Lead times and shipment options are confirmed for every line item on the quotation, so you can plan around project schedules and retrofit windows.",
    },
  ];

  const faqs = [
    {
      q: "Does Valvenok supply butterfly valves directly?",
      a: "Valvenok is focused on precision instrumentation valves, high-pressure valves, fittings, manifolds, and related components. The team can source and supply almost any instrumentation valve, fitting, manifold, or related component against a specification or bill of materials, and can support projects where butterfly valves are part of the overall valve and instrumentation package.",
    },
    {
      q: "How does Valvenok support triple offset butterfly valve installations?",
      a: "For triple offset butterfly valve applications, Valvenok provides the surrounding high-integrity instrumentation — needle valves, control valve solutions, manifolds, filters, and high-pressure fittings. This ensures that measurement, venting, equalisation, and overpressure protection around the triple offset valve meet the same performance and documentation standards as the primary isolation.",
    },
    {
      q: "Can Valvenok help with a pneumatic actuator butterfly valve system in the UK?",
      a: "Yes. Valvenok can support pneumatic actuator butterfly valve systems with air headers, isolation valves, filters, relief valves, and the necessary stainless steel tubing and fittings. Lead times for these items are confirmed on quotation.",
    },
    {
      q: "What information should I provide for a butterfly valve and instrumentation enquiry?",
      a: "For the fastest response, include line size, pressure rating, media, temperature, end connection standards, and any project-specific requirements such as NACE MR0175, hydrogen service, or offshore use. A full valve list or bill of materials enables the engineering team to map each butterfly valve to its associated instrumentation and connection hardware.",
    },
    {
      q: "Do you offer documentation and traceability for valves installed around a butterfly valve?",
      a: "Yes. Valvenok provides technical datasheets on every order and offers full heat-code material traceability across instrumentation valves, manifolds, and fittings — simplifying end-user documentation, inspection, and long-term asset management.",
    },
    {
      q: "Can Valvenok support hydrogen projects that use butterfly valves?",
      a: "Yes. Valvenok provides dedicated hydrogen product engineering and project support for large-scale electrolyser and refuelling infrastructure. Where butterfly valves are used for isolation or flow control, Valvenok can supply hydrogen-compatible instrumentation valves, manifolds, filters, and fittings, backed by appropriate material selection and documentation.",
    },
    {
      q: "What other valve types can Valvenok supply alongside butterfly valves?",
      a: "The range includes needle valves, floating stainless steel ball valve solutions, check valves, relief valves, manifolds, and high-pressure control valve technologies, as well as gate valves, globe valves, and bellows valve options — enabling a cohesive valve strategy around any butterfly valve population.",
    },
    {
      q: "How quickly can Valvenok respond to a butterfly valve enquiry?",
      a: "Valvenok aims to respond within 24 hours to specification or bill-of-material enquiries, including those that involve butterfly valve circuits. Lead times are confirmed on the quotation so proposals can be aligned with project schedules and required-on-site dates.",
    },
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", pb: 10 }}>
      {/* ── HERO ── */}
      <Box sx={{ bgcolor: "primary.main", color: "white", pt: 15, pb: 10 }}>
        <Container maxWidth="md">
          <Typography
            variant="overline"
            sx={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 800,
              letterSpacing: "0.4em",
              opacity: 0.8,
            }}
          >
            Technical Guide
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: DISPLAY_FONT,
              fontSize: { xs: "2.5rem", md: "4.5rem" },
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1,
              mt: 1,
            }}
          >
            Butterfly Valve Instrumentation and Connection Packages
          </Typography>
          <Typography
            variant="h5"
            sx={{ mt: 2, opacity: 0.85, fontStyle: "italic" }}
          >
            Triple offset, pneumatically actuated, and process butterfly valves
            — fully engineered from the primary isolation to the instrumentation
            layer
          </Typography>
          <Stack direction="row" spacing={3} sx={{ mt: 4, opacity: 0.8 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PersonOutlineIcon fontSize="small" />
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700, textTransform: "uppercase" }}
              >
                Valvenok Team
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <AccessTimeIcon fontSize="small" />
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700, textTransform: "uppercase" }}
              >
                June 2026
              </Typography>
            </Stack>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, textTransform: "uppercase" }}
            >
              7 min read
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ mt: -5 }}>
        {/* ── KEY TAKEAWAYS ── */}
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
              fontFamily: DISPLAY_FONT,
              fontWeight: 900,
              mb: 3,
              textTransform: "uppercase",
            }}
          >
            Key Takeaways
          </Typography>
          <Grid container spacing={2}>
            {[
              "Butterfly valves are widely used for quarter-turn shut-off and throttling in oil & gas, power, petrochemical, and hydrogen applications.",
              "The reliability of any butterfly valve installation depends on the surrounding instrumentation — manifolds, needle valves, fittings, filters, and air headers.",
              "Valvenok supplies the complete instrumentation layer around butterfly valve installations, from triple offset to pneumatically actuated variants.",
              "Lead times for instrumentation valves, manifolds, fittings and accessories are confirmed on every quotation.",
              "Full heat-code material traceability and NACE MR0175 available — documentation-ready support for critical projects.",
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

        {/* ── ARTICLE BODY ── */}
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
          {/* INTRO */}
          <Typography>
            Butterfly valves are widely used as quarter-turn shut-off and
            throttling devices in oil and gas, power, petrochemical, hydrogen,
            and general process applications. While the butterfly disc provides
            the primary isolation, the overall reliability of the circuit
            depends on the surrounding instrumentation valves, manifolds, pipe
            fittings, and connection hardware.
          </Typography>
          <Typography>
            Valvenok focuses on this critical instrumentation layer — supplying
            high-integrity valves, manifolds, fittings, and auxiliaries that
            integrate seamlessly around any butterfly valve installation,
            whether for on/off isolation, flow control, or emergency shutdown.
            The UK-based engineering team typically responds within 24 hours.
          </Typography>

          {/* HERO IMAGE */}
          <Box sx={{ my: 6, textAlign: "center" }}>
            <Box
              component="img"
              src="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/ptfe_lined_butterfly.png"
              alt="Butterfly Valve — PTFE Lined"
              sx={{
                width: "100%",
                maxWidth: 700,
                border: "1px solid",
                borderColor: "divider",
              }}
            />
          </Box>

          {/* ── INTEGRATED SOLUTIONS ── */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 800,
              mb: 2,
              mt: 6,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            Integrated Solutions Around Butterfly Valves
          </Typography>
          <Typography>
            Valvenok supplies the instrumentation layer that surrounds and
            supports butterfly valve installations across a wide range of
            industries and pressure classes. The product range covers everything
            needed to engineer a fully documented assembly around any butterfly
            valve.
          </Typography>

          <Grid container spacing={2} sx={{ my: 4 }}>
            {integrationItems.map((item, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{
                    p: 3,
                    border: "1.5px solid",
                    borderColor: "primary.light",
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: DISPLAY_FONT,
                      fontWeight: 800,
                      fontSize: "1rem",
                      textTransform: "uppercase",
                      color: "primary.dark",
                      mb: 1,
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", lineHeight: 1.7 }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* ── TRIPLE OFFSET ── */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 800,
              mb: 2,
              mt: 6,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            Triple Offset Butterfly Valve Applications
          </Typography>
          <Typography>
            Triple offset butterfly valves are typically specified where tight
            shut-off, high-cycle performance, and fire-safe characteristics are
            required — hydrocarbon, hydrogen, and power applications being the
            most common. Valvenok supports these projects by providing the
            surrounding high-integrity instrumentation layer:
          </Typography>
          <Box sx={{ pl: 3, mb: 4, mt: 2 }}>
            {[
              "High-pressure needle valves, including HP series up to 60,000 psi, for precise isolation and metering",
              "Manifolds for differential pressure, level, and flow measurement across the butterfly valve",
              "Inline and T-type filters to protect downstream instrumentation from particulate contamination",
              "Control valve solutions in associated instrumentation circuits",
            ].map((item) => (
              <Typography
                key={item}
                sx={{ mb: 1, color: "#000", fontSize: "1.1rem" }}
              >
                • {item}
              </Typography>
            ))}
          </Box>
          <Typography>
            By pairing triple offset butterfly valve technology with Valvenok's
            instrumentation packages, engineering teams can align process
            isolation hardware with high-integrity measurement, venting, and
            protection systems — all from a single, traceable source.
          </Typography>

          {/* PULL QUOTE */}
          <Box
            sx={{
              borderLeft: "4px solid",
              borderColor: "primary.main",
              bgcolor: "primary.50",
              px: 3,
              py: 2.5,
              mb: 6,
              mt: 4,
            }}
          >
            <Typography
              sx={{
                color: "text.primary",
                lineHeight: 1.8,
                fontSize: "1.1rem",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              "The reliability of a butterfly valve installation isn't just
              about the disc — it's about everything around it."
            </Typography>
            <Typography
              variant="caption"
              sx={{
                fontFamily: DISPLAY_FONT,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "text.secondary",
                mt: 1,
                display: "block",
              }}
            >
              — Valvenok Engineering Team
            </Typography>
          </Box>

          {/* ── PNEUMATIC ACTUATOR ── */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 800,
              mb: 2,
              mt: 6,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            Pneumatic Actuator Butterfly Valve Interfaces
          </Typography>
          <Typography>
            Pneumatically actuated butterfly valves are widely used for
            automated on/off and modulating service. Around a pneumatic actuator
            butterfly valve, Valvenok supplies the high-pressure auxiliaries
            needed to complete the circuit:
          </Typography>
          <Box sx={{ pl: 3, mb: 4, mt: 2 }}>
            {[
              "Precision needle valves and manifolds for actuator supply isolation and venting",
              "Air headers with up to 20 outlets for distributing instrument air to multiple actuated butterfly valves",
              "Filters for air preparation ahead of the actuator",
              "Relief valves and check valves to protect pneumatic and hydraulic actuation systems",
              "Pipe fittings, tube fittings, and adaptors to tie in control cabinets, solenoid panels, and field junction boxes",
            ].map((item) => (
              <Typography
                key={item}
                sx={{ mb: 1, color: "#000", fontSize: "1.1rem" }}
              >
                • {item}
              </Typography>
            ))}
          </Box>

          {/* ── PROCESS ── */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 800,
              mb: 2,
              mt: 6,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            What to Expect When You Send a Specification
          </Typography>
          <Typography sx={{ mb: 4 }}>
            Valvenok operates as a technical extension of your procurement and
            design teams. For projects where a butterfly valve forms part of a
            wider package, the process follows four clear steps.
          </Typography>

          {processSteps.map((item, i) => (
            <Box key={i} sx={{ display: "flex", gap: 3, mb: 4 }}>
              <Typography
                sx={{
                  fontFamily: DISPLAY_FONT,
                  fontWeight: 900,
                  fontSize: "2rem",
                  color: "primary.main",
                  minWidth: 48,
                  lineHeight: 1,
                }}
              >
                {item.num}
              </Typography>
              <Box>
                <Typography
                  sx={{
                    fontFamily: DISPLAY_FONT,
                    fontWeight: 800,
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "text.primary",
                    mb: 0.75,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.8,
                    fontSize: "1rem",
                  }}
                >
                  {item.body}
                </Typography>
              </Box>
            </Box>
          ))}

          {/* ── VALVE PORTFOLIO ── */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 800,
              mb: 2,
              mt: 6,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            Instrumentation and Valve Technologies Supported
          </Typography>
          <Typography>
            Although the primary isolation may be a butterfly valve, most
            projects also require a wide matrix of specialist valves. Valvenok's
            portfolio covers:
          </Typography>

          <Grid container spacing={2} sx={{ my: 4 }}>
            {[
              "Instrumentation needle valves up to 20,000 psig",
              "Floating ball valve solutions (2-way and 3-way) up to 10,000 psig",
              "Relief valves for overpressure protection in liquid and gas services",
              "Check valves and non-return valves for backflow prevention",
              "2-, 3-, and 5-valve manifolds for DP transmitters and gauge isolation",
              "High-pressure pipe and cone & thread fittings from 10,000 to 60,000 psi",
              "Stainless steel tube fittings, unions, reducers, gauge connectors, and dielectric fittings",
              "Gate valves, globe valves, and bellows valve options",
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6 }}>
                <Stack direction="row" spacing={1} alignItems="flex-start">
                  <CheckCircleOutlineIcon
                    sx={{ color: "primary.main", fontSize: 18, mt: 0.3 }}
                  />
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {item}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>

          {/* INDUSTRY CHIPS */}
          <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ my: 4 }}>
            {[
              "Oil & Gas",
              "Power Generation",
              "Hydrogen",
              "Petrochemical",
              "Offshore Energy",
              "Water Treatment",
              "Industrial Process",
            ].map((ind) => (
              <Chip
                key={ind}
                label={ind}
                size="small"
                sx={{
                  fontFamily: DISPLAY_FONT,
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  borderRadius: 0,
                  height: 28,
                  bgcolor: "primary.main",
                  color: "white",
                }}
              />
            ))}
          </Stack>

          <Divider sx={{ my: 6 }} />

          {/* ── FAQ ── */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 800,
              mb: 4,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Stack spacing={4} sx={{ mb: 6 }}>
            {faqs.map((item) => (
              <Box key={item.q}>
                <Typography
                  sx={{
                    fontFamily: DISPLAY_FONT,
                    fontWeight: 800,
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    mb: 0.75,
                  }}
                >
                  {item.q}
                </Typography>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
                  {item.a}
                </Typography>
              </Box>
            ))}
          </Stack>

          <Divider sx={{ my: 6 }} />

          {/* ── CTA ── */}
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
              sx={{
                fontFamily: DISPLAY_FONT,
                fontWeight: 800,
                mb: 2,
                color: "white",
              }}
            >
              READY TO ENGINEER YOUR BUTTERFLY VALVE PACKAGE?
            </Typography>
            <Typography sx={{ color: "white !important", mb: 3, opacity: 0.9 }}>
              Send Valvenok your specification or bill of materials and the
              engineering team will respond within 24 hours with a technically
              robust, documentation-ready solution built around your butterfly
              valve requirements.
            </Typography>
            <Typography
              variant="button"
              sx={{
                fontWeight: 900,
                borderBottom: "2px solid white",
                pb: 1,
                cursor: "pointer",
                color: "white",
              }}
            >
              Get in Touch with Valvenok
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
