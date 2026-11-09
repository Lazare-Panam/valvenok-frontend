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
import TuneIcon from "@mui/icons-material/Tune";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Link from "next/link";

const DISPLAY_FONT = '"Barlow Condensed"';

const PAGE_URL = "https://www.valvenok.com/gate-valves";

// Contextual internal links — descriptive anchors to real category pages
const RELATED = [
  { label: "Instrumentation & needle valves", href: "/instrumentation" },
  { label: "Manifolds & double block and bleed", href: "/dbb-manifolds" },
  { label: "Fittings & tubing", href: "/fittings-tubing" },
  { label: "High-pressure valves & fittings", href: "/high-pressure" },
  { label: "Filters & sight glass", href: "/filters-sight-glass" },
  { label: "Hydrogen & cryogenic components", href: "/hydrogen-cryogenic" },
  { label: "Quality & compliance", href: "/quality" },
];

export default function GateValvesPage() {
  const experienceAreas = [
    {
      label: "High-Pressure & Severe Service",
      desc: "Extensive experience across high-pressure and severe-service valve applications, where pressure class and material selection drive long-term reliability and system safety.",
    },
    {
      label: "Complex Instrumentation & Piping",
      desc: "Support for complex instrumentation and piping systems, aligning gate valve end connections with existing manifolds, fittings and take-off points.",
    },
    {
      label: "Hydrogen & Sour-Service Materials",
      desc: "Material compatibility review for hydrogen and sour-service duties, so the right alloy is specified for the media rather than defaulting to a catalogue standard.",
    },
    {
      label: "Documentation & Traceability",
      desc: "Documentation, traceability and compliance support on every order, aligned with your project and client specifications.",
    },
  ];

  const recommendationItems = [
    "Stainless steel vs brass gate valves for corrosion resistance",
    "Pressure class selection for upstream and downstream systems",
    "End connections to match existing pipe fittings or manifolds",
    "Integration with block-and-bleed or double-isolation strategies",
  ];

  const integrationItems = [
    "Instrumentation valves and manifolds for measurement and control",
    "Stainless steel fittings, tube fittings and stainless steel pipe fittings",
    "High-pressure valves and fittings for critical upstream sections",
    "Filters, air headers, quick couplings and condensate pots for ancillary systems",
  ];

  const processSteps = [
    {
      num: "01",
      title: "Review of Specification or Bill of Materials",
      body: "Submit line lists, P&IDs or individual datasheets. Valvenok's engineers check media, pressure, temperature, end connections and material requirements alongside any site or client specifications.",
    },
    {
      num: "02",
      title: "Application & Compatibility Check",
      body: "For hydrogen, oil & gas, power, petrochemical or process duty, the team evaluates whether a gate valve is the correct isolation solution — or whether needle or ball valve assemblies are more suitable at instrumentation take-off points.",
    },
    {
      num: "03",
      title: "Material & Design Recommendations",
      body: "Depending on your requirement, recommendations cover stainless steel vs brass, pressure class, end connections and integration with block-and-bleed or double-isolation strategies.",
    },
    {
      num: "04",
      title: "Documentation & Compliance Detail",
      body: "Technical documentation is provided on every order. For gate valve packages this can extend to material certificates and heat-code traceability where available from manufacturers, aligned with project specifications.",
    },
    {
      num: "05",
      title: "Quotation & Lead-Time Visibility",
      body: "Valvenok can often consolidate gate valves with manifolds, check valves and stainless-steel pipe fittings in a single quotation, with lead times confirmed before you order.",
    },
  ];

  const faqs = [
    {
      q: "Can Valvenok supply gate valves for projects in Bicester and across the UK?",
      a: "Yes. Valvenok can work from your specification or bill of materials to source and supply gate valves as part of a wider industrial and instrumentation package for projects in Bicester and throughout the United Kingdom.",
    },
    {
      q: "Do you handle enquiries for brass gate valves as well as stainless steel options?",
      a: "Yes. If your duty conditions allow for brass construction, Valvenok can review your brass gate valve requirement and advise on suitability versus stainless steel or other alloys, ensuring alignment with media, pressure, temperature and site standards.",
    },
    {
      q: "How quickly can you respond to a gate valve enquiry in the UK?",
      a: "Valvenok aims to respond to all valve, fitting and manifold enquiries within 24 hours, including gate valve and brass gate valve requests from UK-based procurement and design teams.",
    },
    {
      q: "Can you match gate valves to existing pipework and fittings?",
      a: "Yes. By reviewing your line sizes, pressure classes and existing standards for pipe fittings and flanges, Valvenok can help align gate valve end connections with your current piping specification to reduce site rework.",
    },
    {
      q: "Do you provide technical documentation and material traceability for gate valves?",
      a: "Valvenok supplies technical documentation on every order and, where available from manufacturers, can include test reports and material certificates for gate valves — complementing the full heat-code traceability offered across its own instrumentation valve and fitting ranges.",
    },
    {
      q: "Are gate valves suitable for hydrogen and other critical applications?",
      a: "In hydrogen, oil & gas, power and other critical applications, valve selection depends on detailed media, pressure and temperature review. Valvenok's hydrogen product engineering capability can help assess whether gate valves, or alternative instrumentation solutions, are appropriate for specific points in the system.",
    },
    {
      q: "Can Valvenok consolidate gate valves with other instrumentation products for shipment?",
      a: "Yes. Valvenok regularly consolidates valve and fitting packages, combining sourced gate valves with instrumentation products such as needle valves, manifolds, filters and stainless steel fittings to streamline logistics and reduce handling for project sites.",
    },
    {
      q: "How do I start a gate valve enquiry with Valvenok?",
      a: "Share your datasheets, specification or bill of materials, specifying the required gate valves, associated materials, end connections and standards. The engineering team will review and revert with clarifications, options and a proposal.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Gate Valves for Industrial & Process Applications | Valvenok",
        description:
          "Gate valves for industrial and instrumentation projects with engineering support and international shipping from Bicester-based Valvenok.",
        inLanguage: "en-GB",
        about: { "@id": `${PAGE_URL}#service` },
        isPartOf: {
          "@type": "WebSite",
          name: "Valvenok",
          url: "https://www.valvenok.com/",
        },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Gate valve sourcing and specification support",
        description:
          "Valvenok provides engineering review, material and design recommendations, documentation, and consolidated supply for gate valves and brass gate valves in industrial and process applications.",
        provider: { "@id": "https://www.valvenok.com/#localbusiness" },
        areaServed: [
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Europe" },
          { "@type": "Place", name: "Global" },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.valvenok.com/#localbusiness",
        name: "Valvenok",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ground Floor, St Edburgs Hall, Priory Road",
          addressLocality: "Bicester",
          postalCode: "OX26 6BL",
          addressCountry: "United Kingdom",
        },
      },
    ],
  };

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", pb: 10 }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
            Isolation & Flow Control
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
            Gate Valves
          </Typography>
          <Typography
            variant="h5"
            sx={{ mt: 2, opacity: 0.85, fontStyle: "italic" }}
          >
            Gate valves and brass gate valves for industrial and instrumentation
            projects — with engineering support and full documentation,
            consolidated with your wider valve and piping package.
          </Typography>
          <Stack direction="row" spacing={3} sx={{ mt: 4, opacity: 0.8 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <TuneIcon fontSize="small" />
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700, textTransform: "uppercase" }}
              >
                Stainless & Brass
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PlaceOutlinedIcon fontSize="small" />
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700, textTransform: "uppercase" }}
              >
                Bicester, UK
              </Typography>
            </Stack>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, textTransform: "uppercase" }}
            >
              24-Hour Response
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
              "Gate valves remain a core isolation solution where a straight-through flow path and low pressure drop are required.",
              "Correct configuration, material and pressure class are critical to long-term reliability and system safety.",
              "Valvenok sources gate valves — stainless or brass — as part of a complete instrumentation and piping package.",
              "Material, pressure-class and end-connection recommendations are made against your actual media and duty, not a catalogue default.",
              "UK-based technical support from Bicester, with lead times confirmed on quotation.",
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
            Looking for gate valves for critical industrial or instrumentation
            projects? Valvenok is a specialist in precision-engineered flow
            control, supporting procurement and design teams with rapid
            specification support, documentation and sourcing for complex valve
            and piping requirements. Send your gate valve or brass gate valve
            specification, datasheet or bill of materials and the engineering
            team will review and respond within 24 hours.
          </Typography>
          <Typography>
            Valvenok focuses on high-integrity instrument and industrial valves,
            fittings, manifolds and high-pressure components for hydrogen, oil
            &amp; gas, power, petrochemical and wider process industries, with
            lead times confirmed on every quotation.
          </Typography>

          {/* HERO IMAGE */}
          <Box sx={{ my: 6, textAlign: "center" }}>
            <Box
              component="img"
              src="https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/ben-kupke-ew-p24cvlr0-unsplash.webp"
              alt="Gate valves and instrumentation for industrial process systems"
              sx={{
                width: "100%",
                maxWidth: 700,
                border: "1px solid",
                borderColor: "divider",
              }}
            />
          </Box>

          {/* ── GATE VALVES FOR INDUSTRIAL & PROCESS ── */}
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 800,
              mb: 2,
              mt: 6,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            Gate Valves for Industrial &amp; Process Applications
          </Typography>
          <Typography>
            Gate valves remain a core isolation solution in many process,
            utility and pipeline systems, where a straight-through flow path and
            low pressure drop are required. In these environments, selecting the
            correct gate valve configuration, material and pressure class is
            critical to long-term reliability and system safety.
          </Typography>
          <Typography>
            Valvenok is an instrumentation and industrial valve specialist with
            extensive experience across:
          </Typography>

          <Grid container spacing={2} sx={{ my: 4 }}>
            {experienceAreas.map((item, i) => (
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

          <Typography>
            While Valvenok&apos;s published catalogue is centred on
            instrumentation valves — needle, ball, relief, check and manifolds —
            and associated industrial valves, the engineering team can work from
            your specification to source and supply gate valves and associated
            components as part of a complete instrumentation and piping package.
          </Typography>
          <Typography>
            Where brass gate valves are appropriate — for selected utility,
            low-pressure or non-corrosive duties — Valvenok can review your
            media, temperature and pressure requirements and advise whether
            brass is suitable, or whether stainless steel or another alloy gives
            better lifecycle performance.
          </Typography>

          {/* ── PROCESS ── */}
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 800,
              mb: 2,
              mt: 6,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            What to Expect When You Send a Gate Valve Enquiry
          </Typography>
          <Typography sx={{ mb: 4 }}>
            Valvenok is structured to support procurement and design teams who
            need fast, accurate responses on multi-line valve and fitting
            packages. For gate valves this typically follows five steps.
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

          {/* MATERIAL & DESIGN RECOMMENDATIONS */}
          <Typography
            sx={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 800,
              fontSize: "1.15rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "primary.dark",
              mt: 5,
              mb: 1.5,
            }}
          >
            Typical Material &amp; Design Recommendations
          </Typography>
          <Box sx={{ pl: 3, mb: 4 }}>
            {recommendationItems.map((item) => (
              <Typography
                key={item}
                sx={{ mb: 1, color: "#000", fontSize: "1.1rem" }}
              >
                • {item}
              </Typography>
            ))}
          </Box>

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
              &quot;Brass or stainless is not a default — it is a decision made
              against your media, temperature and pressure. Getting that right
              at enquiry stage is what avoids a lifecycle problem on site.&quot;
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
              — Valvenok Team
            </Typography>
          </Box>

          {/* ── INTEGRATION ── */}
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 800,
              mb: 2,
              mt: 6,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            Integration With Instrumentation &amp; Piping Systems
          </Typography>
          <Typography>
            Gate valves rarely operate in isolation. They typically sit within
            broader networks of process piping, branches and instrument take-off
            points. Valvenok supports complete system thinking by combining gate
            valve sourcing with:
          </Typography>
          <Box sx={{ pl: 3, mb: 4, mt: 2 }}>
            {integrationItems.map((item) => (
              <Typography
                key={item}
                sx={{ mb: 1, color: "#000", fontSize: "1.1rem" }}
              >
                • {item}
              </Typography>
            ))}
          </Box>
          <Typography>
            This system-level support helps design and procurement teams
            standardise on proven connection technologies and minimise interface
            risk between gate valves, instrumentation and associated components.
          </Typography>

          {/* APPLICATION CHIPS */}
          <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ my: 4 }}>
            {[
              "Hydrogen",
              "Oil & Gas",
              "Power",
              "Petrochemical",
              "Process & Utility",
              "Offshore",
              "Pipeline Isolation",
              "Critical Infrastructure",
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

          {/* ── LOCATION ── */}
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 800,
              mb: 2,
              mt: 6,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            Gate Valves in Bicester, United Kingdom
          </Typography>
          <Typography>
            Valvenok supports UK and European projects from its UK location at
            Ground Floor, St Edburgs Hall, Priory Road, Bicester, OX26 6BL. From
            Bicester, the team coordinates supply of core instrumentation
            valves, manifolds and fittings; responses (typically within 24 hours) on gate valve and brass gate
            valve enquiries; and consolidated consignments for international
            projects requiring both gate valves and specialist instrumentation
            packages.
          </Typography>
          <Typography>
            Valvenok serves hydrogen, oil &amp; gas, power, petrochemical,
            process, offshore and other critical infrastructure projects across
            the UK and globally from this base.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* ── FAQ ── */}
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 800,
              mb: 4,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            FAQs About Gate Valves &amp; Brass Gate Valves
          </Typography>
          <Stack spacing={4} sx={{ mb: 6 }}>
            {faqs.map((item) => (
              <Box key={item.q}>
                <Typography
                  component="h3"
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
              SEND US YOUR GATE VALVE SPECIFICATION
            </Typography>
            <Typography sx={{ color: "white !important", mb: 3, opacity: 0.9 }}>
              To discuss gate valves or brass gate valves for your next project,
              send Valvenok your specification or bill of materials and the team
              will respond within 24 hours with technical guidance, documentation
              options and consolidated supply routes. If it is urgent, call
              +44 7775 132326.
            </Typography>
            <Box
              component={Link}
              href="/contact"
              sx={{
                display: "inline-block",
                fontFamily: DISPLAY_FONT,
                fontWeight: 900,
                borderBottom: "2px solid white",
                pb: 1,
                cursor: "pointer",
                color: "white",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Request a Quotation
            </Box>
          </Box>

          {/* ── RELATED / INTERNAL LINKS ── */}
          <Box sx={{ mt: 8 }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: DISPLAY_FONT,
                fontWeight: 800,
                fontSize: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "text.secondary",
                mb: 2,
              }}
            >
              Explore More From Valvenok
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1.5}>
              {RELATED.map((r) => (
                <Box
                  key={r.href}
                  component={Link}
                  href={r.href}
                  sx={{
                    fontFamily: DISPLAY_FONT,
                    fontWeight: 700,
                    fontSize: "13px",
                    letterSpacing: "0.03em",
                    textDecoration: "none",
                    color: "primary.dark",
                    border: "1.5px solid",
                    borderColor: "primary.light",
                    px: 2,
                    py: 1,
                    transition: "0.2s",
                    "&:hover": {
                      borderColor: "primary.main",
                      bgcolor: "primary.50",
                    },
                  }}
                >
                  {r.label} →
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
