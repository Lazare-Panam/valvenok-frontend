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
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Link from "next/link";

const DISPLAY_FONT = '"Barlow Condensed"';

const PAGE_URL = "https://www.valvenok.com/globe-valve";

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

export default function GlobeValvePage() {
  const globeCharacteristics = [
    {
      label: "Fine Flow Control",
      desc: "The disc-and-seat geometry gives fine control of flow over a wide range, making the globe valve well suited to throttling and modulating duties.",
    },
    {
      label: "Good Shut-Off",
      desc: "Perpendicular disc movement onto the seat delivers good shut-off characteristics alongside its throttling ability — isolation and control in one valve.",
    },
    {
      label: "Predictable Behaviour",
      desc: "A predictable flow–pressure relationship makes globe valves dependable where system conditions vary and stable control is critical.",
    },
    {
      label: "Clean & Contaminated Media",
      desc: "Suitable for both clean and moderately contaminated media, widening the range of process and instrumentation lines they can serve.",
    },
  ];

  const alternatives = [
    "Needle valves for high-precision flow control and high-pressure instrumentation duty",
    "Floating ball valve assemblies for fast quarter-turn isolation and high flow coefficients",
    "Relief valves for over-pressure protection of pipelines, vessels and instrumentation",
    "Check valves and non-return valves for backflow prevention and system safety",
    "2-, 3- and 5-valve manifolds for DP transmitter isolation, equalisation and venting",
  ];

  const supportItems = [
    "Reviewing P&IDs, data sheets and service conditions",
    "Aligning globe valve materials with process media, temperature and pressure",
    "Matching end connections to existing tube fittings, flanges or BSP fittings",
    "Coordinating globe valves with associated instrumentation valves, manifolds and filters",
    "Providing full technical documentation and material traceability where applicable",
  ];

  const integrationItems = [
    "Control valve solutions where modulating performance, actuation and precise flow control are required",
    "High-pressure needle valves, manifolds and fittings supporting upstream and downstream isolation",
    "Relief valves providing over-pressure protection aligned with system set-points",
    "Check valve products to ensure uni-directional flow",
  ];

  const considerations = [
    {
      label: "Materials of Construction",
      desc: "Carbon steel, stainless steels (such as 316), Duplex and nickel alloys for corrosion resistance.",
    },
    {
      label: "Pressure & Temperature Rating",
      desc: "Aligned with the line design code and maximum operating conditions of the system.",
    },
    {
      label: "End Connections",
      desc: "NPT, BSPP, BSPT, flanged (ASME / EN), weld ends or tubing interfaces to match existing pipework.",
    },
    {
      label: "Seat & Packing Materials",
      desc: "PTFE, PEEK and other engineered polymers or metal seats, depending on process media and temperature.",
    },
    {
      label: "Compliance & Certification",
      desc: "Including requirements for material traceability and sour-service environments.",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Specification Review",
      body: "The engineering team reviews your data sheets, P&IDs or bill of materials, clarifying line sizes, pressure class, temperature and media.",
    },
    {
      num: "02",
      title: "Technical Alignment",
      body: "Where globe valves are specified, materials, connection types and functional requirements are cross-checked against your standards and project documentation.",
    },
    {
      num: "03",
      title: "Complementary Product Matching",
      body: "Associated instrumentation — needle valves, manifolds, filters, air headers and tube fittings — is aligned to create a cohesive package around each globe valve duty.",
    },
    {
      num: "04",
      title: "Quotation & Documentation",
      body: "You receive a detailed quotation with technical data, outline lead times and any applicable certifications and traceability information.",
    },
    {
      num: "05",
      title: "Dispatch & After-Sales Support",
      body: "Lead times are confirmed on quotation, with ongoing technical support for installation, commissioning and maintenance planning.",
    },
  ];

  const faqs = [
    {
      q: "Can Valvenok supply globe valves for UK projects?",
      a: "Yes. Valvenok can source and supply globe valves as part of wider instrumentation and piping packages, based on your specification or bill of materials, serving clients from its Bicester, United Kingdom location.",
    },
    {
      q: "Do you provide technical support for globe valve selection?",
      a: "Yes. The engineering team can review your duty conditions, piping specifications and existing standards to help align globe valve selection with pressure, temperature, material and connection requirements.",
    },
    {
      q: "Can globe valves be combined with manifolds and needle valves in one package?",
      a: "Yes. Valvenok regularly supplies integrated solutions including needle valves, manifolds, relief valves, filters and fittings. Globe valves can be specified alongside these components in a single coordinated package.",
    },
    {
      q: "How quickly can you respond to a globe valve enquiry in Bicester?",
      a: "Valvenok responds to specification and bill-of-material enquiries within 24 hours. This applies to globe valve requirements submitted through our UK contact point in Bicester as well as international projects.",
    },
    {
      q: "Do you offer documentation and traceability for globe valve packages?",
      a: "Yes. Every order is supported by technical documentation, and where applicable we provide full heat-code traceability and certification aligned with your project requirements.",
    },
    {
      q: "Can globe valves be used in hydrogen and offshore applications?",
      a: "Globe valves are widely used in hydrogen, oil & gas, offshore and power applications, provided that materials, pressure ratings and sealing systems are selected correctly. Valvenok has hydrogen product engineering capability and experience in critical infrastructure, and can align globe valve sourcing with these requirements.",
    },
    {
      q: "Do you also supply associated fittings and accessories for globe valve installations?",
      a: "Yes. Valvenok supplies a broad range of stainless steel fittings, high-pressure fittings, filters, air headers, condensate pots and quick couplings, ensuring compatible connection and isolation components around each globe valve location.",
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
        name: "Globe valve",
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
        name: "Globe valve sourcing and engineering support",
        description:
          "Engineering review, sourcing, and documentation support for globe valves within instrumentation and process piping systems.",
        provider: { "@id": "https://www.valvenok.com/#localbusiness" },
        areaServed: { "@type": "Place", name: "United Kingdom and worldwide" },
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
            Throttling & Isolation
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
            Globe Valve
          </Typography>
          <Typography
            variant="h5"
            sx={{ mt: 2, opacity: 0.85, fontStyle: "italic" }}
          >
            Globe valve engineering, sourcing and documentation for critical
            process and instrumentation duty — with clear quotations and
            UK-based engineering support.
          </Typography>
          <Stack direction="row" spacing={3} sx={{ mt: 4, opacity: 0.8 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <SettingsInputComponentIcon fontSize="small" />
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700, textTransform: "uppercase" }}
              >
                Control & Throttling
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
              "A globe valve is a linear-motion valve for on/off, throttling and flow regulation, giving fine control combined with good shut-off.",
              "Valvenok can source globe valves against a specification or bill of materials, as part of a wider instrumentation and piping package.",
              "Selection is compared against needle, ball, relief, check and manifold options so the right technology is applied at each location.",
              "Material, pressure class, end connection, seat/packing and certification are all reviewed against your actual duty.",
              "UK-based engineering support from Bicester, with lead times confirmed on quotation.",
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
            Looking for a globe valve solution for critical process or
            instrumentation duty? Valvenok is a specialist in
            precision-engineered industrial valves and fittings, supporting
            procurement and design teams with fast quotation, technical
            documentation and a 24-hour engineering response. Whether you require
            globe valves as part of a wider bill of materials or need to
            rationalise an existing specification, send us your enquiry and the
            team will support selection, sourcing and integration into your
            piping system.
          </Typography>
          <Typography>
            Valvenok operates within demanding environments across hydrogen, oil
            &amp; gas, power, petrochemical and wider process industries —
            supplying a wide range of valves, manifolds, filters and pipe
            fittings.
          </Typography>

          {/* HERO IMAGE */}
          <Box sx={{ my: 6, textAlign: "center" }}>
            <Box
              component="img"
              src="https://pblol2.blob.core.windows.net/valvenok-images/banner-images/ben-kupke-ew-p24CVLR0-unsplash.jpg"
              alt="Globe valves and instrumentation for process control systems"
              sx={{
                width: "100%",
                maxWidth: 700,
                border: "1px solid",
                borderColor: "divider",
              }}
            />
          </Box>

          {/* ── WHAT IS A GLOBE VALVE ── */}
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
            What Is a Globe Valve?
          </Typography>
          <Typography>
            A globe valve is a linear-motion valve designed for on/off,
            throttling and flow-regulation duties. Flow passes through a seat
            within a typically S-shaped body, and a disc or plug moves
            perpendicular to the seat to open, restrict or close the passage.
            This geometry gives globe valves a distinct set of characteristics:
          </Typography>

          <Grid container spacing={2} sx={{ my: 4 }}>
            {globeCharacteristics.map((item, i) => (
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
            In many process and instrumentation lines, globe valves are used
            where reliable throttling and isolation are required in combination —
            especially where system conditions vary and stable control is
            critical.
          </Typography>

          {/* ── VS ALTERNATIVES ── */}
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
            Globe Valve vs Alternative Valve Technologies
          </Typography>
          <Typography>
            Selecting a globe valve is often part of a broader valve strategy
            across an installation. Valvenok supports clients in comparing globe
            valve performance with alternative technologies from the portfolio,
            including:
          </Typography>
          <Box sx={{ pl: 3, mb: 4, mt: 2 }}>
            {alternatives.map((item) => (
              <Typography
                key={item}
                sx={{ mb: 1, color: "#000", fontSize: "1.1rem" }}
              >
                • {item}
              </Typography>
            ))}
          </Box>
          <Typography>
            Where globe valves are specified or preferred — for example on
            control lines, bypasses and modulating services — Valvenok can
            evaluate duty conditions alongside available needle, ball and
            manifold solutions to ensure the correct technology is applied in
            each location.
          </Typography>

          {/* ── HOW WE SUPPORT ── */}
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
            How Valvenok Supports Globe Valve Specifications
          </Typography>
          <Typography>
            Valvenok has extensive experience in industrial and instrumentation
            piping systems. Alongside a wide range of instrumentation valves,
            manifolds, stainless steel fittings and high-pressure components,
            Valvenok can source and supply almost any instrumentation valve or
            related component against a specification or bill of materials —
            including globe valves for critical infrastructure projects.
          </Typography>
          <Typography>
            Engineering and procurement support typically covers:
          </Typography>
          <Box sx={{ pl: 3, mb: 4, mt: 2 }}>
            {supportItems.map((item) => (
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
              &quot;Treat the globe valve as part of the entire flow and
              measurement chain — pressure ratings, materials, connection
              standards and maintenance strategy all have to line up across the
              installation, not just at one valve.&quot;
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
            Integration With Control &amp; Safety Functions
          </Typography>
          <Typography>
            In many systems, globe valves operate alongside a wider control and
            safety architecture. Valvenok&apos;s product range enables a complete
            instrumentation approach around globe valve duties, including:
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
            By treating the globe valve as part of the entire flow and
            measurement chain, Valvenok helps ensure compatibility of pressure
            ratings, materials, connection standards and maintenance strategies
            across the installation.
          </Typography>

          {/* ── MATERIALS, CONNECTIONS & STANDARDS ── */}
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
            Materials, Connections &amp; Standards to Consider
          </Typography>
          <Typography>
            When specifying globe valves for demanding service, typical
            engineering considerations include:
          </Typography>

          <Grid container spacing={2} sx={{ my: 4 }}>
            {considerations.map((item, i) => (
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
            Valvenok routinely works with these parameters across its
            instrumentation and high-pressure portfolios and can extend the same
            discipline to globe valve sourcing and validation.
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
            What to Expect When You Send a Globe Valve Enquiry
          </Typography>
          <Typography sx={{ mb: 4 }}>
            When you send Valvenok a globe valve or mixed-valve enquiry, the
            typical process follows five steps.
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

          {/* APPLICATION CHIPS */}
          <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ my: 4 }}>
            {[
              "Hydrogen",
              "Oil & Gas",
              "Power",
              "Petrochemical",
              "Process Control",
              "Offshore",
              "Bypass & Modulating",
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
            Globe Valve Support in Bicester &amp; Worldwide
          </Typography>
          <Typography>
            Valvenok supports UK and global projects from its UK presence at
            Ground Floor, St Edburgs Hall, Priory Road, Bicester, OX26 6BL. From
            Bicester, the team coordinates supply of a wide range of
            instrumentation valves, stainless steel pipe fittings, manifolds,
            filters and connection solutions for UK and international
            customers.
          </Typography>
          <Typography>
            Globe valve requirements can be integrated into wider instrumentation
            and piping packages, simplifying procurement and logistics for major
            projects in hydrogen, oil &amp; gas, power, petrochemical and process
            industries.
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
            FAQs — Globe Valve &amp; Valvenok
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
              SEND YOUR SPECIFICATION FOR GLOBE VALVE SUPPORT
            </Typography>
            <Typography sx={{ color: "white !important", mb: 3, opacity: 0.9 }}>
              To secure reliable sourcing, documentation and integration for any
              globe valve requirement, send Valvenok your specification or bill
              of materials and the team will respond within 24 hours to help
              engineer the right solution into your system. If it is urgent, call
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
