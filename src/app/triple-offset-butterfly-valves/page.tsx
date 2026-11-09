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

const PAGE_URL = "https://www.valvenok.com/triple-offset-butterfly-valves";

// Contextual internal links — descriptive anchors to real category pages
const RELATED = [
  { label: "Industrial valves", href: "/valves" },
  { label: "Valve actuators & automation", href: "/actuators" },
  { label: "Instrumentation & needle valves", href: "/instrumentation" },
  { label: "Fittings & tubing", href: "/fittings-tubing" },
  { label: "High-pressure valves & fittings", href: "/high-pressure" },
  { label: "Hydrogen & cryogenic components", href: "/hydrogen-cryogenic" },
  { label: "Quality & compliance", href: "/quality" },
];

export default function TripleOffsetButterflyValvesPage() {
  const designPrinciples = [
    {
      label: "First & Second Offsets",
      desc: "The shaft is offset from the disc centreline and pipeline centreline to reduce friction during operation.",
    },
    {
      label: "Third Offset",
      desc: "The sealing surfaces are machined as a conical profile, producing a cam-like closing action and no rubbing between disc and seat.",
    },
    {
      label: "Metal-to-Metal Sealing",
      desc: "Commonly used for high-temperature and fire-safe applications where soft seats would degrade.",
    },
    {
      label: "Bidirectional Tight Shut-Off",
      desc: "Engineered for low leakage in either flow direction when correctly specified and installed.",
    },
  ];

  const comparisons = [
    {
      label: "Resilient-Seated Butterfly Valve",
      desc: "Common in water and general service, using elastomer seats. Cost-effective, but not ideal for elevated temperatures or certain chemicals.",
    },
    {
      label: "High-Performance Double-Offset Butterfly Valve",
      desc: "Introduces two offsets to reduce seat wear and increase pressure rating. Often used in HVAC, power, and process duties.",
    },
    {
      label: "Triple Offset Butterfly Valve",
      desc: "Adds a third offset and conical metal sealing surfaces. Suitable for more severe duties where tight shut-off, low leakage, and fire-safe performance are critical.",
    },
  ];

  const applicationItems = [
    "High-temperature process lines",
    "Hydrocarbon, petrochemical, and refinery services",
    "Steam and power generation applications",
    "Critical isolation points on pipelines and manifolds",
    "Services where fire-safe or metal-seated valves are specified",
  ];

  const actuationItems = [
    "Pneumatic actuators for on/off and modulating control",
    "Electric actuators for precise positioning and remote control",
    "Electro-hydraulic actuators for high-torque or safety-critical duties",
    "Manual gear operators for local isolation and emergency operation",
  ];

  const accessoryItems = [
    "Position feedback via limit switch boxes",
    "Solenoid-operated control using solenoid control valve products",
    "Pressure and flow control using dedicated pressure regulators and gauges",
  ];

  const processSteps = [
    {
      num: "01",
      title: "Application Review",
      body: "Share your datasheets, P&IDs, or outline duty (media, pressure, temperature, size, standards, end connections, and any fire-safe or emissions requirements). Our technical team will confirm whether a butterfly valve, triple-offset configuration, or an alternative industrial valve type is appropriate.",
    },
    {
      num: "02",
      title: "Options & Recommendations",
      body: "We identify suitable solutions from our industrial valve and automation partners, matching the specification as closely as possible. Where a triple-offset design is specified, we will advise on feasibility and available alternatives if an exact match is not immediately listed.",
    },
    {
      num: "03",
      title: "Component Integration",
      body: "If required, we combine valves with valve actuators, electric actuators, position feedback devices, and relevant manual valves or accessories to create a coordinated package.",
    },
    {
      num: "04",
      title: "Quotation & Lead Time",
      body: "You receive a clear proposal with part descriptions, technical references, and indicative lead times. Lead times vary by item and are confirmed on quotation; custom or hard-to-find parts are sourced via our wider network.",
    },
    {
      num: "05",
      title: "Ongoing Technical Support",
      body: "Our engineers remain available to support installation queries, interface questions, and subsequent sourcing of complementary items such as fittings, actuators, gauges, and ancillary hardware.",
    },
  ];

  const faqs = [
    {
      q: "Do Valvenok hold triple offset butterfly valves in UK stock?",
      a: "The exact items held in UK stock vary over time and by project demand. Valvenok focuses on supplying industrial valve solutions, including butterfly valve technologies and related components, and can source custom and hard-to-find parts through its manufacturer network. Contact the team with your specification and required standard so we can advise on current availability and options.",
    },
    {
      q: "Can Valvenok help specify whether I need a triple offset or other butterfly valve design?",
      a: "Yes. Our technical engineers can review your media, pressure, temperature, and isolation requirements and help you compare triple offset butterfly valves against alternative butterfly valve and industrial valve options, with the goal of matching performance, compliance, and lifecycle expectations.",
    },
    {
      q: "Are triple offset butterfly valves suitable for high-temperature service in the UK process industry?",
      a: "Triple offset butterfly valves are widely used in high-temperature and severe-duty applications because of their metal-to-metal, low-rubbing seat design. Suitability for a specific installation depends on the full operating envelope and applicable standards. Valvenok can review your duty conditions and help you assess whether a triple offset design is appropriate.",
    },
    {
      q: "Can I integrate a triple offset butterfly valve with pneumatic or electric actuators?",
      a: "Yes. Triple offset butterfly valves are typically automated using pneumatic, electric, or electro-hydraulic actuators, depending on torque requirements and control philosophy. Valvenok supplies a wide range of valve actuators and can help you match actuator sizing, mounting interface, and control accessories to your chosen valve.",
    },
    {
      q: "Do you support triple offset butterfly valve enquiries for projects outside the UK?",
      a: "Yes. While Valvenok is UK-based, we support procurement and engineering teams worldwide. Share your project location, standards (for example, EN, ISO, API), and valve specification, and we will confirm feasible options and logistics.",
    },
    {
      q: "Can Valvenok supply other components around my triple offset butterfly valve package?",
      a: "Yes. In addition to valves and actuators, Valvenok supplies a wide range of hydraulic, pneumatic, and instrumentation components, including stainless steel valves, instrumentation fittings, gauges, quick couplings, tubing, and manifolds. This allows you to consolidate related items for your skid, pipeline, or process upgrade.",
    },
    {
      q: "How do I request a quotation for triple offset butterfly valves in the UK?",
      a: "Email sales@valvenok.com with your datasheet or a summary of size, pressure class, temperature, end connection, materials, standards, and required quantity. Alternatively, call +44 7368557896. Our team will review your requirement, confirm whether triple offset butterfly valves are the right fit, and respond with recommended options and lead times.",
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
        name: "Triple offset butterfly valves",
        description:
          "Valvenok supplies triple offset butterfly valves with engineering-led support, valve automation packages, and worldwide project supply.",
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
        name: "Triple offset butterfly valves supply and technical support",
        description:
          "Engineering-led supply of triple offset butterfly valves, including technical selection support, automation packages, and sourcing of custom or hard-to-find components.",
        provider: { "@id": "https://www.valvenok.com/#localbusiness" },
        areaServed: [
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Place", name: "Worldwide" },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.valvenok.com/#localbusiness",
        name: "Valvenok Ltd.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "St. Edburgs Hall, Priory Rd",
          addressLocality: "Bicester",
          postalCode: "OX26 6BL",
          addressCountry: "United Kingdom",
        },
        telephone: "+44 7368557896",
        email: "sales@valvenok.com",
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
            Severe-Service Isolation
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
            Triple Offset Butterfly Valves
          </Typography>
          <Typography
            variant="h5"
            sx={{ mt: 2, opacity: 0.85, fontStyle: "italic" }}
          >
            High-performance quarter-turn valves for tight, low-leakage shut-off
            in high-temperature, high-pressure and fire-safe service — with UK
            engineering support, actuation packages and global project supply.
          </Typography>
          <Stack direction="row" spacing={3} sx={{ mt: 4, opacity: 0.8 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <TuneIcon fontSize="small" />
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700, textTransform: "uppercase" }}
              >
                Metal-Seated & Fire-Safe
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
              JOSCAR-Registered
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
              "A triple offset design adds a third, conical sealing surface so the disc only contacts the seat at the final degree of closing — giving tight, low-wear shut-off.",
              "Metal-to-metal, non-rubbing seats suit high-temperature, high-pressure, fire-safe and critical isolation duties where soft seats degrade.",
              "Bidirectional tight shut-off with lower operating torque and reduced seat wear versus many conventional metal-seated designs.",
              "Valvenok reviews your datasheet and duty to confirm whether a triple-offset design — or an alternative butterfly technology — is the right fit.",
              "UK-based, JOSCAR-registered supplier offering actuation packages and consolidated global project supply.",
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
            Looking for triple offset butterfly valves for demanding industrial
            service? Valvenok is a UK-based engineering supplier supporting
            engineers and procurement teams with fast access to high-performance
            industrial valve solutions, including butterfly valve technologies,
            actuation, and associated fittings. Our technical team can help you
            evaluate whether a triple-offset design is appropriate for your
            application and advise on suitable butterfly valve and automation
            packages from our partner network. Contact sales@valvenok.com or call
            +44 7368557896 to discuss your requirements.
          </Typography>

          <Box sx={{ pl: 3, mb: 4 }}>
            {[
              "UK-based, JOSCAR-registered engineering supplier",
              "Technical support for valve selection and specification",
              "Access to butterfly valve technologies through leading global brands",
              "Support for standard, custom and hard-to-find parts",
              "Integrated packages with valve actuators, manual valves, and controls",
            ].map((item) => (
              <Typography
                key={item}
                sx={{ mb: 1, color: "#000", fontSize: "1.1rem" }}
              >
                • {item}
              </Typography>
            ))}
          </Box>

          {/* HERO IMAGE */}
          <Box sx={{ my: 6, textAlign: "center" }}>
            <Box
              component="img"
              src="https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/ben-kupke-ew-p24cvlr0-unsplash.webp"
              alt="Triple offset butterfly valves for severe-service industrial process systems"
              sx={{
                width: "100%",
                maxWidth: 700,
                border: "1px solid",
                borderColor: "divider",
              }}
            />
          </Box>

          {/* ── WHAT IS A TRIPLE OFFSET BUTTERFLY VALVE ── */}
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
            What Is a Triple Offset Butterfly Valve?
          </Typography>
          <Typography>
            A triple offset butterfly valve is a high-performance quarter-turn
            valve designed for tight shut-off in challenging services such as
            high temperature, high pressure, or critical isolation. Compared with
            a standard butterfly valve, a triple offset design introduces three
            distinct shaft and seat geometry offsets so that the disc only
            contacts the seat at the final degree of closing.
          </Typography>
          <Typography>Key design principles typically include:</Typography>

          <Grid container spacing={2} sx={{ my: 4 }}>
            {designPrinciples.map((item, i) => (
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
            This geometry allows triple offset butterfly valves to achieve
            reliable isolation with lower operating torque and reduced seat wear
            compared with many conventional metal-seated designs.
          </Typography>

          {/* ── TRIPLE OFFSET VS OTHER DESIGNS ── */}
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
            Triple Offset vs Other Butterfly Valve Designs
          </Typography>
          <Typography>
            Valvenok supports engineers in selecting between different butterfly
            valve technologies, depending on media, pressure, temperature, and
            lifecycle expectations. Typical comparison points when considering
            triple offset butterfly valves include:
          </Typography>

          {comparisons.map((item, i) => (
            <Box key={i} sx={{ display: "flex", gap: 3, mb: 4, mt: i === 0 ? 4 : 0 }}>
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
                {String(i + 1).padStart(2, "0")}
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
                  {item.label}
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.8,
                    fontSize: "1rem",
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          ))}

          <Typography>
            If you are evaluating a specification that calls for a triple offset
            butterfly valve, our team can review the datasheet and help you
            compare options across butterfly valve and related stainless steel
            valves, high-pressure solutions, and actuation packages.
          </Typography>

          {/* ── APPLICATIONS ── */}
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
            Applications Where Triple Offset Butterfly Valves Are Considered
          </Typography>
          <Typography>
            Triple offset butterfly valves are typically selected for:
          </Typography>
          <Box sx={{ pl: 3, mb: 4, mt: 2 }}>
            {applicationItems.map((item) => (
              <Typography
                key={item}
                sx={{ mb: 1, color: "#000", fontSize: "1.1rem" }}
              >
                • {item}
              </Typography>
            ))}
          </Box>
          <Typography>
            Valvenok supplies components into oil and gas, petrochemical, marine,
            offshore, power generation, water treatment, chemical processing,
            pharmaceuticals, food and beverage, manufacturing, hydrogen, and
            other industrial sectors. Our engineering support can help ensure
            your butterfly valve choice aligns with the duty, standards, and
            lifecycle expectations of your plant.
          </Typography>

          {/* APPLICATION CHIPS */}
          <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ my: 4 }}>
            {[
              "Oil & Gas",
              "Petrochemical",
              "Refining",
              "Power Generation",
              "Steam",
              "Marine & Offshore",
              "Hydrogen",
              "Chemical Processing",
              "Pipeline Isolation",
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

          {/* ── AUTOMATION & CONTROL ── */}
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
            Valve Automation and Control Options
          </Typography>
          <Typography>
            Correct actuation is central to the performance of any
            high-specification butterfly valve, including triple offset designs.
            Through our automation partners, Valvenok supports:
          </Typography>
          <Box sx={{ pl: 3, mb: 4, mt: 2 }}>
            {actuationItems.map((item) => (
              <Typography
                key={item}
                sx={{ mb: 1, color: "#000", fontSize: "1.1rem" }}
              >
                • {item}
              </Typography>
            ))}
          </Box>
          <Typography>These can be combined with:</Typography>
          <Box sx={{ pl: 3, mb: 4, mt: 2 }}>
            {accessoryItems.map((item) => (
              <Typography
                key={item}
                sx={{ mb: 1, color: "#000", fontSize: "1.1rem" }}
              >
                • {item}
              </Typography>
            ))}
          </Box>
          <Typography>
            Our team can assist in assembling complete valves-and-actuators
            packages so that your butterfly valve, actuator, and accessories
            arrive configured for straightforward integration.
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
            What to Expect When You Contact Valvenok
          </Typography>
          <Typography sx={{ mb: 4 }}>
            When you engage Valvenok for support around triple offset butterfly
            valves or related butterfly valve solutions, you can expect a
            structured, engineering-led process.
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
              &quot;A triple-offset design is specified for a reason — tight,
              fire-safe, metal-seated shut-off. Confirming the duty against the
              geometry at enquiry stage is what avoids an expensive mismatch on
              site.&quot;
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
            Triple Offset Butterfly Valves in the UK
          </Typography>
          <Typography>
            Valvenok Ltd. is based in Bicester and supplies engineering
            components across the UK and worldwide. Our registered address is
            Valvenok Ltd., St. Edburgs Hall, Priory Rd, Bicester, OX26 6BL,
            United Kingdom.
          </Typography>
          <Typography>From this UK base, we support:</Typography>
          <Box sx={{ pl: 3, mb: 4, mt: 2 }}>
            {[
              "Engineers and project teams specifying butterfly valves and valve automation packages",
              "Procurement departments consolidating multi-product valve and fitting orders",
              "Organisations needing hydrogen-ready, high-pressure, and instrumentation-grade components alongside valve packages",
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
            Whether you are working on a UK process plant upgrade or an
            international project requiring consolidated shipments, Valvenok can
            coordinate valves, actuation, instrumentation fittings, and related
            hardware through a single source.
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
            FAQs: Triple Offset Butterfly Valves &amp; UK Supply
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
              DISCUSS YOUR TRIPLE OFFSET BUTTERFLY VALVE REQUIREMENTS
            </Typography>
            <Typography sx={{ color: "white !important", mb: 3, opacity: 0.9 }}>
              If you are specifying or sourcing triple offset butterfly valves
              for a project, contact Valvenok today with your application details
              so we can help you identify suitable butterfly valve and automation
              solutions for your system. Email sales@valvenok.com or call
              +44 7368557896.
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
