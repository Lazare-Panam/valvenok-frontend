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

export default function VSIPartnershipPage() {
  const comparisonRows = [
    {
      param: "Flow path",
      standard: "Fluid changes direction abruptly",
      atlas: "Axial linear path — zero direction change",
    },
    {
      param: "Pressure at the seat",
      standard: "Implosion downstream of the seat",
      atlas: "Static pressure kept below vapor pressure",
    },
    {
      param: "Erosion risk",
      standard: "Erosive fluid contacts metal surfaces",
      atlas: "Trim isolated — zero implosion zone",
    },
    {
      param: "Vibration",
      standard: "Flow-induced vibration",
      atlas: "Axisymmetric flow — no induced vibration",
    },
    {
      param: "Maintenance cycle",
      standard: "Replacement every 3–6 months",
      atlas: "Cycle exceeding 2 years",
    },
    {
      param: "Service",
      standard: "Full valve replacement",
      atlas: "Trim replacement only",
    },
  ];

  const models = [
    {
      name: "Atlas 15",
      size: '2" Valve',
      cv: "up to 70",
      rangeability: "up to 80:1",
    },
    {
      name: "Atlas 21",
      size: '3" Valve',
      cv: "up to 130",
      rangeability: "up to 58:1",
    },
    {
      name: "Atlas 32",
      size: '4" Valve',
      cv: "up to 300",
      rangeability: "up to 58:1",
    },
  ];

  const applications = [
    {
      title: "Natural gas production",
      desc: "Reliable control in fluid loaded with water and erosive solids.",
    },
    {
      title: "Injection pump control",
      desc: "Precise regulation that holds up in severe conditions.",
    },
    {
      title: "Storage blowdown",
      desc: "Rugged, repeatable flow control from 3,500 PSI to atmospheric.",
    },
    {
      title: "Pump test stands",
      desc: "Continuous choked flow without degradation or drift.",
    },
    {
      title: "Hydrocarbon refining",
      desc: "High-pressure differential control where margins are thin.",
    },
    {
      title: "High ΔP / high flow",
      desc: "Engineered for the most demanding conditions in the plant.",
    },
  ];

  const stats = [
    {
      value: "0–5,000",
      unit: "psid",
      label: "Pressure range — up to 10,000 psid with reduced trim",
    },
    { value: "700:1", unit: "", label: "Control range with ±3% accuracy" },
    { value: "<60", unit: "dB", label: "Noise level in choked flow" },
    {
      value: "2+",
      unit: "yrs",
      label: "Maintenance cycle vs. 3–6 months standard",
    },
    {
      value: "27",
      unit: "",
      label: "Atlas valves in service — trim replacement only",
    },
    {
      value: "2–4×",
      unit: "",
      label: "Longer valve life, near-zero unplanned downtime",
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
            Partnership Announcement
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
            Valvenok partners with VSI on the Atlas SSCV
          </Typography>
          <Typography
            variant="h5"
            sx={{ mt: 2, opacity: 0.85, fontStyle: "italic" }}
          >
            Putting a smarter answer to cavitation within reach of the operators
            who need it most
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
              "Valvenok has partnered with Valve Systems International (VSI) to represent and support the Atlas Severe Service Control Valve.",
              "The Atlas SSCV uses an axial linear flow path to eliminate cavitation at the source — not manage its symptoms.",
              "Field-proven across natural gas production, injection pump control, storage blowdown, and hydrocarbon refining.",
              "Maintenance cycles exceed 2 years vs. 3–6 months for standard valves, with trim replacement instead of full valve swap.",
              'Available in three sizes (2", 3", 4") — API 6A and ASME B16.34 compliant, with tungsten carbide trim for particulate service.',
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
            Valvenok has partnered with Valve Systems International (VSI) to
            represent and support the Atlas Severe Service Control Valve — a
            valve that doesn't just tolerate the toughest conditions in our
            industry, but is built specifically to thrive in them.
          </Typography>
          <Typography>
            This partnership is about more than adding a product line. It's
            about being able to give our customers a real, lasting answer to a
            problem many of you have lived with for years: the high-pressure,
            erosive, cavitating service that quietly chews through standard
            valves and budgets alike.
          </Typography>

          {/* HERO IMAGE */}
          <Box sx={{ my: 6, textAlign: "center" }}>
            <Box
              component="img"
              src="https://pblol2.blob.core.windows.net/valvenok-images/blogs/vsi.jpeg"
              alt="Valvenok × VSI — Atlas SSCV Partnership"
              sx={{
                width: "100%",
                maxWidth: 700,
                border: "1px solid",
                borderColor: "divider",
              }}
            />
          </Box>

          {/* ── WHY VSI ── */}
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
            Why We Partnered with VSI
          </Typography>
          <Typography>
            VSI shares something we care deeply about — solving the root cause,
            not selling around it. The Atlas wasn't built by tweaking an
            existing globe valve; it was designed from the ground up for severe
            service, and the field record backs that up. When we looked at how
            it performs and how the VSI team approaches engineering and support,
            the fit was obvious.
          </Typography>
          <Typography>
            The Atlas is made in the USA in Oklahoma and shipped worldwide, with
            field-proven results across demanding production, storage, and
            refining applications. Pairing that with our local relationships and
            service means you get a better valve and a partner who's right there
            with you through sizing, installation, and the long run.
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
              "Cavitation doesn't have to happen. It's a design choice."
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
              — The principle behind the Atlas SSCV
            </Typography>
          </Box>

          {/* ── THE PROBLEM ── */}
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
            The Problem the Atlas Was Built to Solve
          </Typography>
          <Typography>
            In high differential-pressure, erosive service, standard valves fail
            by design. Inside a conventional globe valve, fluid changes
            direction abruptly, accelerates through the seat, and its static
            pressure drops below vapor pressure. Vapor bubbles form and then
            implode against metal surfaces downstream — driving severe erosion,
            vibration, loss of control, and premature failure. No upgrade in
            materials fixes a geometry problem.
          </Typography>
          <Typography>
            The result operators know all too well: replacing the same valve
            every three to six months, recurring unplanned shutdowns, and
            collateral damage to surrounding piping and equipment. The cost is
            never just the valve — it's everything the valve takes down with it.
          </Typography>

          {/* ── HOW IT'S DIFFERENT ── */}
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
            How the Atlas Is Different
          </Typography>
          <Typography>
            The Atlas is the only severe service control valve engineered from
            first principles for this exact problem. Instead of forcing fluid to
            turn, it uses an axial, linear flow path with zero direction change
            and an axisymmetric trim that keeps static pressure controlled below
            vapor pressure — so the implosion zone simply never forms.
          </Typography>
          <Typography>
            Erosive trim surfaces are isolated from the high-velocity zones, and
            patented zero-backlash precision actuation delivers full-range
            positioning accuracy. The outcome is a valve that solves the root
            cause of cavitation rather than managing its symptoms — delivering
            reliability and performance no standard valve can match.
          </Typography>

          {/* STATS GRID */}
          <Box sx={{ bgcolor: "#1a2332", p: 4, my: 6 }}>
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontFamily: DISPLAY_FONT,
                fontWeight: 800,
                letterSpacing: "0.3em",
                display: "block",
                mb: 1,
              }}
            >
              Field-Proven Performance
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                fontFamily: DISPLAY_FONT,
                fontWeight: 800,
                mb: 4,
                textTransform: "uppercase",
              }}
            >
              Quantified Results from Real Operating Conditions
            </Typography>
            <Grid
              container
              spacing={0}
              sx={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              {stats.map((s, i) => (
                <Grid key={i} size={{ xs: 12, sm: 4 }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRight: {
                        sm:
                          i % 3 !== 2
                            ? "1px solid rgba(255,255,255,0.1)"
                            : "none",
                      },
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: DISPLAY_FONT,
                        fontWeight: 900,
                        fontSize: "2.2rem",
                        color: "primary.main",
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                      <span style={{ fontSize: "1.2rem" }}>{s.unit}</span>
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255,255,255,0.7)",
                        mt: 1,
                        lineHeight: 1.5,
                      }}
                    >
                      {s.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* ── COMPARISON TABLE ── */}
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 800,
              mb: 1,
              mt: 6,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            From Constant Failure to Predictable Performance
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Here's what changes when an Atlas takes the place of a standard
            severe service valve on your most punishing line.
          </Typography>
          <Box sx={{ border: "1px solid", borderColor: "divider", mb: 6 }}>
            {/* Header */}
            <Grid container sx={{ bgcolor: "#f5f0eb" }}>
              <Grid size={{ xs: 4 }}>
                <Box sx={{ p: 2 }} />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <Box sx={{ p: 2 }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "text.secondary",
                      fontSize: "0.9rem",
                    }}
                  >
                    Standard SSCV
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 4 }}>
                <Box sx={{ p: 2, bgcolor: "primary.main" }}>
                  <Typography
                    sx={{ fontWeight: 700, color: "white", fontSize: "0.9rem" }}
                  >
                    With Atlas
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            {comparisonRows.map((row, i) => (
              <Grid
                container
                key={i}
                sx={{
                  borderTop: "1px solid",
                  borderColor: "divider",
                  "&:hover": { bgcolor: "#fafafa" },
                }}
              >
                <Grid size={{ xs: 4 }}>
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ fontWeight: 700, fontSize: "0.9rem" }}>
                      {row.param}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 4 }}>
                  <Box sx={{ p: 2 }}>
                    <Typography
                      sx={{ color: "text.secondary", fontSize: "0.9rem" }}
                    >
                      {row.standard}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 4 }}>
                  <Box sx={{ p: 2 }}>
                    <Typography
                      sx={{
                        color: "primary.main",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                      }}
                    >
                      {row.atlas}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Box>

          {/* ── MODELS ── */}
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
            A Model for the Full Range of Severe Service
          </Typography>
          <Typography sx={{ mb: 4 }}>
            The Atlas comes in three sizes, all compliant with API 6A and ASME
            B16.34, with tungsten carbide trim available for particulate-laden
            service.
          </Typography>
          <Grid container spacing={3} sx={{ mb: 6 }}>
            {models.map((m, i) => (
              <Grid key={i} size={{ xs: 12, sm: 4 }}>
                <Box sx={{ p: 3, bgcolor: "#f5f0eb", height: "100%" }}>
                  <Typography
                    sx={{
                      fontFamily: DISPLAY_FONT,
                      fontWeight: 900,
                      fontSize: "1.4rem",
                      color: "primary.main",
                    }}
                  >
                    {m.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: DISPLAY_FONT,
                      fontWeight: 700,
                      color: "text.secondary",
                      mb: 2,
                    }}
                  >
                    {m.size}
                  </Typography>
                  <Stack spacing={1}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>
                        Capacity
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 700, color: "primary.main" }}
                      >
                        Cv {m.cv}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>
                        Rangeability
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 700, color: "primary.main" }}
                      >
                        {m.rangeability}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>

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
            Where It Makes the Biggest Difference
          </Typography>
          <Typography sx={{ mb: 4 }}>
            If any of these sound like a line you fight to keep running, the
            Atlas is worth a conversation.
          </Typography>
          <Grid container spacing={2} sx={{ mb: 6 }}>
            {applications.map((item, i) => (
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
                    {item.title}
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

          {/* INDUSTRY CHIPS */}
          <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ my: 4 }}>
            {[
              "Severe Service",
              "Control Valves",
              "Cavitation",
              "Atlas SSCV",
              "VSI Partnership",
            ].map((tag) => (
              <Chip
                key={tag}
                label={tag}
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

          {/* ── WHAT THIS MEANS ── */}
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 800,
              mb: 2,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            What This Means for You
          </Typography>
          <Typography>
            Our goal with this announcement is simple: we want the operators we
            work with to know that this option now exists, and that it's
            available through people you already trust. You don't have to keep
            budgeting around a valve that fails every six months. There's a
            design that was built to last — and now there's a local partner
            standing behind it.
          </Typography>
          <Typography>
            If you've got a line that costs you more than it should, we'd love
            to talk through whether the Atlas is the right fit. No pressure —
            just a real conversation about your conditions and what's possible.
          </Typography>

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
              variant="overline"
              sx={{
                fontFamily: DISPLAY_FONT,
                fontWeight: 800,
                letterSpacing: "0.3em",
                opacity: 0.8,
                display: "block",
                mb: 1,
              }}
            >
              Valvenok × VSI
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontFamily: DISPLAY_FONT,
                fontWeight: 800,
                mb: 2,
                color: "white",
              }}
            >
              THE ATLAS SSCV IS NOW AVAILABLE THROUGH VALVENOK
            </Typography>
            <Typography sx={{ color: "white !important", mb: 3, opacity: 0.9 }}>
              Reach out to learn more about the partnership and how the Atlas
              performs in your toughest service.
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
