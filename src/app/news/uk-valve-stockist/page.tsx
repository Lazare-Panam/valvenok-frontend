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
import Link from "next/link";

const DISPLAY_FONT = '"Barlow Condensed"';

const ARTICLE_URL = "https://www.valvenok.com/news/uk-valve-stockist";

// Contextual internal links — descriptive anchors to real category pages
const RELATED = [
  { label: "Industrial & instrumentation valves", href: "/valves" },
  { label: "Hydrogen & cryogenic components", href: "/hydrogen-cryogenic" },
  { label: "Quality & compliance", href: "/quality" },
  { label: "JOSCAR registered supplier", href: "/joscar-registered" },
];

export default function UkValveStockistPage() {
  const ukBaseBenefits = [
    {
      label: "No Import Lead Time",
      desc: "What is on the shelf ships the same working day it is ordered. There is no customs clearance and no manufacturing lead time on stock items — the single biggest cause of project slippage on a common part.",
    },
    {
      label: "A Company You Can Verify",
      desc: "Valvenok Ltd is a registered UK company with a named address in Bicester, Oxfordshire and a phone number answered by people who know the product. Exactly what a procurement team checks before raising a first purchase order.",
    },
    {
      label: "Technical Answers In Your Timezone",
      desc: "Specification questions — line size, pressure class, material, media — get answered the same day, by an engineer, not overnight through a distant call centre.",
    },
    {
      label: "Sterling Pricing, No FX Exposure",
      desc: "Priced and invoiced in GBP, so there is no exchange-rate movement between quotation and invoice to reconcile.",
    },
    {
      label: "UK & EU Documentation",
      desc: "Material certificates, declarations of conformity, and test reports supplied to the standards UK and EU inspection teams expect.",
    },
    {
      label: "No Minimum Order",
      desc: "Single items are as welcome as scheduled supply against a frame contract. Source the quantity you actually need, not the quantity a distributor wants to sell.",
    },
  ];

  const stockCategories = [
    "Industrial valves — ball, gate, globe, butterfly, check and control",
    "Instrumentation valves, manifolds and double block and bleed",
    "Actuators — pneumatic, electric and hydraulic",
    "Instrumentation fittings and tubing, including SS316",
    "High-pressure valves, fittings and manifolds",
    "Hydrogen and cryogenic components",
    "Pumps, mechanical seals and pneumatics",
  ];

  const processSteps = [
    {
      num: "01",
      title: "Send the Part or the Specification",
      body: "Share a part number, a datasheet, or a full bill of materials. For the fastest answer, include line size, pressure rating, material, media, and any project requirement such as NACE MR0175 or hydrogen service.",
    },
    {
      num: "02",
      title: "Stock Check and Engineering Review",
      body: "Valvenok confirms what is held in UK stock and maps anything non-stock to an appropriate product. Where a spec is open, the engineering team recommends a fit rather than sending a catalogue link.",
    },
    {
      num: "03",
      title: "Quotation With Availability and Documentation",
      body: "You receive price, availability, and the documentation package — material certificates and declarations of conformity — for each line item, so vendor approval and inspection are not held up later.",
    },
    {
      num: "04",
      title: "Dispatch From UK Stock",
      body: "Stock items are dispatched from the UK warehouse. For urgent requirements, call before ordering and the team will tell you honestly whether it can be with you quickly.",
    },
  ];

  const faqs = [
    {
      q: "Where is Valvenok based?",
      a: "Valvenok Ltd is based at St. Edburgs Hall, Priory Road, Bicester, Oxfordshire, OX26 6BL. The company has operated from Bicester since 2018 and dispatches from UK stock.",
    },
    {
      q: "Do you supply valves across Oxfordshire and the rest of the UK?",
      a: "Yes. Bicester sits between Oxford, Milton Keynes and Banbury with quick access to the M40 and A34, so courier coverage across Oxfordshire and the surrounding counties is straightforward. Valvenok dispatches nationwide from the same UK stock.",
    },
    {
      q: "Is there a minimum order?",
      a: "No. Valvenok was founded specifically to solve the problem of sourcing quality components without minimum order quantities, so a single item is as welcome as scheduled supply against a frame contract.",
    },
    {
      q: "How many products do you hold in UK stock?",
      a: "Over 5,000 products across fittings, valves, adapters and components — built up deliberately so that a common item does not carry a manufacturing lead time.",
    },
    {
      q: "Can I speak to someone technical rather than a call centre?",
      a: "Yes. Specification questions go to people who know the products. Call +44 7775 132326 or email sales@valvenok.com with the line size, pressure class, material and media, and you will get a straight answer rather than a catalogue link.",
    },
    {
      q: "Why does buying from a UK stockist matter for lead time?",
      a: "On a stock item there is no import lead time and no customs clearance — what is on the shelf ships the same working day it is ordered. For a common part on a live project, that is the difference between a same-week fix and a multi-week wait on an overseas order.",
    },
    {
      q: "Is Valvenok a verified supplier for defence and aerospace work?",
      a: "Valvenok achieved JOSCAR registration in 2020, which opened the door to defence and aerospace supply chains. The company also works across oil and gas, energy, marine, chemical processing, water, power, and food and beverage applications.",
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

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Why Buy Valves From a UK Stockist",
    description:
      "No import lead time, no minimum order, and a company you can verify. Over 5,000 products held in UK stock from Bicester, Oxfordshire since 2018.",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/banner-images/ben-kupke-ew-p24CVLR0-unsplash.jpg",
    author: { "@type": "Organization", name: "Valvenok" },
    publisher: {
      "@type": "Organization",
      name: "Valvenok",
      logo: {
        "@type": "ImageObject",
        url: "https://pblol2.blob.core.windows.net/valvenok-images/logo-2.png",
      },
    },
    datePublished: "2026-09-11",
    dateModified: "2026-09-11",
    mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
  };

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", pb: 10 }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
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
            Buyer&apos;s Guide
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
            Why Buy Valves From a UK Stockist
          </Typography>
          <Typography
            variant="h5"
            sx={{ mt: 2, opacity: 0.85, fontStyle: "italic" }}
          >
            No import lead time, no minimum order, and a company you can verify —
            over 5,000 products held in UK stock from Bicester, Oxfordshire since
            2018.
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
                September 2026
              </Typography>
            </Stack>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, textTransform: "uppercase" }}
            >
              6 min read
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
              "A UK stockist removes import lead time and customs on stock items — what is on the shelf ships the same working day.",
              "Valvenok holds over 5,000 products in UK stock from Bicester, Oxfordshire, and has done since 2018.",
              "No minimum order — single items and scheduled frame-contract supply are treated the same.",
              "JOSCAR registered since 2020, supplying defence, aerospace, oil & gas, energy and process industries.",
              "A registered UK company with a named address and an engineer on the phone — verifiable before a first purchase order.",
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
            Industrial buyers rarely search for a valve by proximity — they
            search by product and specification. But when a common part is
            holding up a live project, where that part ships from suddenly
            matters a great deal. A valve on an overseas order carries a
            manufacturing lead time and customs clearance; the same valve on a UK
            shelf ships the same working day. That single difference is the case
            for buying from a UK-based stockist.
          </Typography>
          <Typography>
            Valvenok has been based in Bicester, Oxfordshire since 2018,
            supplying valves, actuators, instrumentation fittings, pumps and
            seals from UK stock to engineers and procurement teams across the
            country. This guide sets out what a UK base actually buys you — on
            lead time, on documentation, and on the simple question of whether
            you are dealing with a company you can verify.
          </Typography>

          {/* HERO IMAGE */}
          <Box sx={{ my: 6, textAlign: "center" }}>
            <Box
              component="img"
              src="https://pblol2.blob.core.windows.net/valvenok-images/banner-images/ben-kupke-ew-p24CVLR0-unsplash.jpg"
              alt="Industrial valves and fittings held in UK stock"
              sx={{
                width: "100%",
                maxWidth: 700,
                border: "1px solid",
                borderColor: "divider",
              }}
            />
          </Box>

          {/* ── WHY A UK BASE MATTERS ── */}
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
            Why Buying From a UK-Based Stockist Matters
          </Typography>
          <Typography>
            The advantage of a UK stockist is not one thing — it is a stack of
            small certainties that each remove a delay or a risk from the
            purchase. Taken together, they are why procurement teams keep a UK
            source on the approved vendor list even when an overseas price looks
            lower on paper.
          </Typography>

          <Grid container spacing={2} sx={{ my: 4 }}>
            {ukBaseBenefits.map((item, i) => (
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

          {/* ── WHAT WE HOLD ── */}
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
            What We Hold in UK Stock
          </Typography>
          <Typography>
            Valvenok&apos;s UK stockholding runs to over 5,000 products across
            fittings, valves, adapters and components — built up deliberately so
            that a common item does not carry a manufacturing lead time. The
            range spans:
          </Typography>
          <Box sx={{ pl: 3, mb: 4, mt: 2 }}>
            {stockCategories.map((item) => (
              <Typography
                key={item}
                sx={{ mb: 1, color: "#000", fontSize: "1.1rem" }}
              >
                • {item}
              </Typography>
            ))}
          </Box>
          <Typography>
            There is no minimum order. That was the reason the business was
            started — sourcing quality components in the quantity actually
            needed, rather than the quantity a distributor wanted to sell.
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
              &quot;On a stock item there is no import lead time and no customs —
              what is on the shelf ships the same working day it is ordered.&quot;
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

          {/* ── WHO WE SUPPLY ── */}
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
            Who We Supply
          </Typography>
          <Typography>
            Valvenok supplies engineers, procurement teams, maintenance
            departments, OEMs and system integrators — from single-item urgent
            spares to scheduled supply against a frame contract. JOSCAR
            registration, achieved in 2020, opened the door to defence and
            aerospace supply chains, and the company works across oil and gas,
            energy, marine, chemical processing, water, power, and food and
            beverage applications.
          </Typography>

          {/* ── DELIVERY ── */}
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
            Delivery Across Oxfordshire and the UK
          </Typography>
          <Typography>
            Bicester sits between Oxford, Milton Keynes and Banbury, within easy
            reach of the M40 and A34 — so courier coverage across Oxfordshire,
            Buckinghamshire, Northamptonshire and Warwickshire is
            straightforward, and Valvenok dispatches nationwide from the same UK
            stock. For urgent requirements, a quick call before ordering is
            usually the fastest way to confirm what can be with you and when.
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
            What to Expect When You Send an Enquiry
          </Typography>
          <Typography sx={{ mb: 4 }}>
            Valvenok operates as a technical extension of your procurement and
            design teams. A stock enquiry follows four clear steps.
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

          {/* INDUSTRY CHIPS */}
          <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ my: 4 }}>
            {[
              "Defence & Aerospace",
              "Oil & Gas",
              "Energy",
              "Marine",
              "Chemical Processing",
              "Water",
              "Power",
              "Food & Beverage",
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
              NEED SOMETHING FROM UK STOCK?
            </Typography>
            <Typography sx={{ color: "white !important", mb: 3, opacity: 0.9 }}>
              Send Valvenok the part or the specification and the team will
              confirm availability, price and dispatch. If it is urgent, call
              +44 7775 132326 — that is usually faster than a form.
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
                    "&:hover": { borderColor: "primary.main", bgcolor: "primary.50" },
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
