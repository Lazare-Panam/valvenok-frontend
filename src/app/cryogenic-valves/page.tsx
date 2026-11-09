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
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Link from "next/link";

const DISPLAY_FONT = '"Barlow Condensed"';

const PAGE_URL = "https://www.valvenok.com/cryogenic-valves";

// Contextual internal links — descriptive anchors to real category pages
const RELATED = [
  { label: "Instrumentation & needle valves", href: "/instrumentation" },
  { label: "Manifolds & double block and bleed", href: "/dbb-manifolds" },
  { label: "Fittings & tubing", href: "/fittings-tubing" },
  { label: "High-pressure valves & fittings", href: "/high-pressure" },
  { label: "Hydrogen & cryogenic components", href: "/hydrogen-cryogenic" },
  { label: "Filters & sight glass", href: "/filters-sight-glass" },
  { label: "Quality & compliance", href: "/quality" },
];

export default function CryogenicValvesPage() {
  const engineeredFor = [
    {
      label: "Low-Temperature Embrittlement",
      desc: "Material selection engineered to resist embrittlement and thermal shock, so the valve stays ductile at the extreme low temperatures of LNG, liquid hydrogen and liquefied gases.",
    },
    {
      label: "Tight Shut-Off Under Cycling",
      desc: "Seat and closure designs that hold a reliable, bubble-tight shut-off through repeated temperature cycling — not just on the first cold cycle.",
    },
    {
      label: "Seat & Packing Performance",
      desc: "Packing and seat arrangements specified to accommodate the contraction and expansion of cold service without leak paths opening up as the line cools and warms.",
    },
    {
      label: "Safe Isolation & ESD",
      desc: "Configurations suited to safe isolation and emergency shutdown duty, where a cryogenic line has to be closed quickly and dependably.",
    },
  ];

  const integrationItems = [
    "Instrumentation valves, including needle valves for precise metering and isolation",
    "Floating ball valve solutions rated up to 10,000 psig for shut-off and diversion",
    "Uni-directional check valves to prevent backflow in transfer and loading systems",
    "Relief valve technologies for pressure surge protection in cold-service lines",
    "2-, 3- and 5-valve manifolds for transmitter isolation, equalisation and venting",
  ];

  const connectionItems = [
    "High-pressure tubing and tube fittings for instrumentation take-offs",
    "Stainless steel pipe fittings in NPT, BSPP, BSPT and ISO standards",
    "Precision stainless steel fittings and adaptors for tube-to-pipe transitions",
    "High-pressure cone & thread fittings and pipe fittings up to 60,000 psi",
    "Gauge connectors, dielectric unions and specialised connectors for critical infrastructure",
  ];

  const processSteps = [
    {
      num: "01",
      title: "Specification Review",
      body: "You share your datasheet, process conditions, or bill of materials. Valvenok's technical team reviews the pressure, temperature, media, standards and material requirements for the duty.",
    },
    {
      num: "02",
      title: "Application & Compatibility Check",
      body: "The team assesses duty conditions, corrosion considerations, any hydrogen or sour-service requirements, and applicable project standards such as NACE MR0175.",
    },
    {
      num: "03",
      title: "Product Recommendation & Sourcing",
      body: "Valvenok identifies suitable cryogenic valve solutions and matches them with compatible instrumentation, tubing and fittings — recommending a fit rather than sending a catalogue link.",
    },
    {
      num: "04",
      title: "Documentation & Traceability",
      body: "Every order is backed by full technical documentation and material traceability. Where applicable, heat-code traceability and certification are provided to support project and regulatory requirements.",
    },
    {
      num: "05",
      title: "Lead Time & Logistics",
      body: "Valvenok quotes instrumentation valves, manifolds, fittings and accessories together, with lead times confirmed on quotation. International shipping can be arranged for overseas and multi-site projects — contact us to confirm options.",
    },
  ];

  const faqs = [
    {
      q: "What are cryogenic valves used for?",
      a: "Cryogenic valves are designed for very low-temperature service, typically handling liquefied gases such as LNG, liquid hydrogen, nitrogen, oxygen or helium. They provide safe isolation, control and emergency shut-off while managing thermal contraction, tight shut-off and the material embrittlement associated with cryogenic conditions.",
    },
    {
      q: "Can Valvenok help me specify cryogenic valves for a new project?",
      a: "Yes. Valvenok offers engineering support to review your process conditions, materials and standards, then helps you identify suitable cryogenic valve solutions and compatible instrumentation, manifolds and connection products. Send a specification or bill of materials and the team will respond within 24 hours with guidance and options.",
    },
    {
      q: "Do you support cryogenic valve projects across the UK?",
      a: "Yes. Valvenok supports clients in Bicester, across the United Kingdom, and globally. From the Bicester office the team provides technical support, documentation and supply of associated instrumentation valves, fittings, manifolds and filters that interface with cryogenic valve installations.",
    },
    {
      q: "How do cryogenic valves integrate with instrumentation and safety systems?",
      a: "In most projects, cryogenic valves are part of a larger system that includes isolation valves, non-return devices, pressure relief and measurement points. Valvenok supplies needle valves, check valves, manifolds, filters and air headers that can be engineered to integrate with cryogenic duty valves and meet project standards for documentation and traceability.",
    },
    {
      q: "Can Valvenok support hydrogen and cryogenic service together?",
      a: "Yes. Valvenok supplies hydrogen product ranges and project support for electrolyser and refuelling infrastructure. Where hydrogen is stored or transferred at low temperatures, the team can align cryogenic valve requirements with hydrogen-compatible instrumentation valves, manifolds and fittings, and advise on materials and standards such as NACE MR0175.",
    },
    {
      q: "What information should I include when enquiring about cryogenic valves?",
      a: "Provide as much detail as possible: media, minimum and maximum temperatures, pressure range, line size, connection type, required standards, materials, and any project-specific documentation or testing requirements. A drawing, datasheet or full bill of materials helps the engineering team respond quickly and accurately.",
    },
    {
      q: "How quickly can Valvenok respond to a cryogenic valve enquiry in the UK?",
      a: "Valvenok targets a 24-hour response time for specification and bill-of-material enquiries, including those involving cryogenic valves. For urgent requirements, contact the team and lead times will be confirmed on quotation.",
    },
    {
      q: "Can Valvenok consolidate cryogenic valves with other industrial valve requirements?",
      a: "Yes. Valvenok supplies control, instrumentation and API valves, along with manifolds, filters, air headers and a comprehensive range of pipe fittings. This makes it possible to consolidate cryogenic valve sourcing with broader industrial valve and instrumentation packages under a single, documentation-rich supply chain.",
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
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Cryogenic valves",
        description:
          "Cryogenic valves for LNG, hydrogen and liquefied gases, with engineering support, documentation and integration with instrumentation packages.",
        about: { "@id": `${PAGE_URL}#service` },
        isPartOf: { "@id": "https://www.valvenok.com/#localbusiness" },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Cryogenic valves",
        description:
          "Engineering support and supply of cryogenic valves and associated instrumentation, manifolds, fittings and connection hardware for low-temperature service.",
        provider: { "@id": "https://www.valvenok.com/#localbusiness" },
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
            Low-Temperature Flow Control
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
            Cryogenic Valves
          </Typography>
          <Typography
            variant="h5"
            sx={{ mt: 2, opacity: 0.85, fontStyle: "italic" }}
          >
            Precision cryogenic valves for LNG, hydrogen and liquefied gases —
            with engineering support and full documentation,
            integrated with your instrumentation and fitting packages.
          </Typography>
          <Stack direction="row" spacing={3} sx={{ mt: 4, opacity: 0.8 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <AcUnitIcon fontSize="small" />
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700, textTransform: "uppercase" }}
              >
                LNG · H₂ · Liquefied Gases
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
              "Cryogenic valves handle LNG, liquid hydrogen, oxygen and nitrogen at extreme low temperatures, where material choice and construction are critical.",
              "Valvenok integrates cryogenic valve selection with matching instrumentation valves, manifolds, fittings and connection hardware.",
              "Materials such as SS316, Duplex, Monel and Hastelloy, with NACE MR0175 available on request across relevant ranges.",
              "Full technical documentation and material traceability — heat-code traceability and certification where applicable.",
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
            Looking for cryogenic valves for demanding low-temperature service?
            Valvenok is a UK supplier of precision instrumentation and
            flow-control solutions for hydrogen, oil &amp; gas, power,
            petrochemical and wider process industries. With extensive
            experience in high-pressure and specialist-service environments,
            Valvenok supports procurement and design teams who need technically
            compliant cryogenic valve solutions integrated with wider piping,
            manifold and instrumentation packages.
          </Typography>
          <Typography>
            Send your specification or bill of materials and the engineering
            team will respond within 24 hours with guidance, options and full
            technical documentation.
          </Typography>

          {/* HERO IMAGE */}
          <Box sx={{ my: 6, textAlign: "center" }}>
            <Box
              component="img"
              src="https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/ben-kupke-ew-p24cvlr0-unsplash.webp"
              alt="Cryogenic valves and instrumentation for low-temperature service"
              sx={{
                width: "100%",
                maxWidth: 700,
                border: "1px solid",
                borderColor: "divider",
              }}
            />
          </Box>

          {/* ── ENGINEERED PERFORMANCE ── */}
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
            Engineered Performance for Cryogenic Service
          </Typography>
          <Typography>
            Cryogenic valves are critical wherever media such as LNG, liquid
            hydrogen, liquid oxygen or liquid nitrogen are handled at extremely
            low temperatures. In these environments, valve selection, materials
            and construction must be engineered to manage the demands of cold
            service — not just the pressure rating on the datasheet.
          </Typography>

          <Grid container spacing={2} sx={{ my: 4 }}>
            {engineeredFor.map((item, i) => (
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
            Valvenok operates across high-pressure and specialist-service
            applications, supplying precision-engineered industrial valves and
            instrumentation products with material traceability and
            documentation. That focus makes Valvenok a strategic partner for
            procurement teams consolidating cryogenic service valves with
            associated instrumentation, manifolds and connection hardware under
            a single technical envelope.
          </Typography>

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
            Integration With Instrumentation &amp; Flow Control
          </Typography>
          <Typography>
            Cryogenic systems rarely operate in isolation. They are typically
            integrated with upstream and downstream instrumentation, isolation
            and safety components. Valvenok supports this broader system
            requirement with:
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
            For cryogenic duty, these components can be specified in materials
            such as SS316, Duplex, Monel or Hastelloy, with NACE MR0175 /
            MR-01-75 available on request across relevant ranges. This lets
            procurement and design teams align cryogenic valve selections with
            compatible instrumentation valves, pipe fittings, tube fittings,
            filters and air headers that share similar corrosion-resistance and
            documentation requirements.
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
              &quot;Cryogenic valves are rarely bought alone — they arrive with
              the instrumentation, manifolds and fittings around them. Sourcing
              the whole envelope from one documented supply chain is what keeps
              a cold-service project on schedule.&quot;
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

          {/* ── CONNECTION INTERFACES ── */}
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
            System Connection &amp; Piping Interfaces
          </Typography>
          <Typography>
            Selecting the correct pipeline and instrumentation interface is
            essential when specifying cryogenic valves. Valvenok offers an
            extensive portfolio of connection products to help build complete,
            traceable systems around specialist cryogenic equipment, including:
          </Typography>
          <Box sx={{ pl: 3, mb: 4, mt: 2 }}>
            {connectionItems.map((item) => (
              <Typography
                key={item}
                sx={{ mb: 1, color: "#000", fontSize: "1.1rem" }}
              >
                • {item}
              </Typography>
            ))}
          </Box>
          <Typography>
            This breadth of connection technology allows Valvenok to support
            cryogenic valve installations with compatible, documented interfaces
            from valve outlet through to instrumentation and control — including
            projects that combine cryogenic flow control with hydrogen
            infrastructure, offshore, subsea or power applications where
            specialist engineering input and rigorous qualification are
            required.
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
            What to Expect When You Send a Specification
          </Typography>
          <Typography sx={{ mb: 4 }}>
            Valvenok provides a structured, engineering-led response to enquiries
            involving cryogenic valves and associated equipment — five clear
            steps from datasheet to dispatch.
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
              "LNG Import / Export",
              "Liquid Hydrogen",
              "Electrolyser & Refuelling",
              "Industrial Gases",
              "Oil & Gas",
              "Petrochemical",
              "Power",
              "Offshore & Subsea",
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
            Cryogenic Valves in Bicester &amp; Global Projects
          </Typography>
          <Typography>
            Valvenok supports UK and international clients from its UK base at
            Ground Floor, St Edburgs Hall, Priory Road, Bicester, OX26 6BL. From
            Bicester, the team coordinates supply of instrumentation and
            industrial valves, and engineering support for
            cryogenic, hydrogen, oil &amp; gas, petrochemical, power, offshore,
            subsea and general process applications.
          </Typography>
          <Typography>
            Whether you are developing electrolyser or refuelling infrastructure,
            LNG import/export facilities, or low-temperature process units,
            Valvenok can work with your engineering team to align cryogenic valve
            requirements with compliant instrumentation valves, manifolds,
            filters, air headers and connection hardware.
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
            Frequently Asked Questions
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
              SPECIFYING CRYOGENIC VALVES?
            </Typography>
            <Typography sx={{ color: "white !important", mb: 3, opacity: 0.9 }}>
              Send Valvenok your specification or bill of materials for cryogenic
              valves and associated instrumentation, and the engineering team
              will respond within 24 hours with technical guidance, documentation
              options and delivery plans. If it is urgent, call +44 7775 132326.
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
