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

export default function KosaPartnershipPage() {
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
            Valvenok Announces Strategic Partnership with Kosa Plus
          </Typography>
          <Typography
            variant="h5"
            sx={{ mt: 2, opacity: 0.85, fontStyle: "italic" }}
          >
            British engineering expertise meets South Korean manufacturing
            excellence
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
              4 min read
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
              "Valvenok and Kosa Plus join forces to deliver a broader range of high-quality valve automation solutions.",
              "The partnership expands Valvenok's offering to include pneumatic actuators, electric actuators, positioners, limit switch boxes, solenoid valves, and automation accessories.",
              "Kosa Plus products are trusted across international markets, backed by rigorous South Korean manufacturing standards.",
              "Customers gain access to complete valve automation packages — from actuator selection through to commissioning support.",
              "The collaboration strengthens supply chain resilience and improves product availability for UK and global customers.",
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
            Valvenok is pleased to announce a new strategic partnership with
            Kosa Plus, a leading manufacturer of valve automation products based
            in South Korea. This partnership brings together Valvenok's
            engineering expertise and customer-focused approach with Kosa Plus's
            extensive manufacturing capabilities and proven product portfolio —
            creating new opportunities to deliver enhanced solutions to
            customers across a wide range of industries.
          </Typography>

          {/* HERO IMAGE */}
          <Box sx={{ my: 6, textAlign: "center" }}>
            <Box
              component="img"
              src="https://pblol2.blob.core.windows.net/valvenok-images/blogs/kosa_plus.jpeg"
              alt="Valvenok × Kosa Plus Partnership"
              sx={{
                width: "100%",
                maxWidth: 700,
                border: "1px solid",
                borderColor: "divider",
              }}
            />
          </Box>

          {/* ── ABOUT THE PARTNERSHIP ── */}
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
            A New Strategic Alliance
          </Typography>
          <Typography>
            The valve automation market demands products that combine precision
            engineering with long-term reliability. Kosa Plus has built exactly
            that reputation over decades of manufacturing — supplying actuators,
            positioners, and automation accessories to customers across oil and
            gas, chemical processing, water treatment, pharmaceutical, power
            generation, and industrial automation sectors worldwide.
          </Typography>
          <Typography>
            For Valvenok, this partnership is a natural extension of our core
            mission: to supply engineers and procurement teams with the right
            product for the application, backed by real technical knowledge. By
            adding the full Kosa Plus product range to our portfolio, we can now
            offer customers a complete valve automation package — from valve
            selection through to actuator, controls, and commissioning support —
            from a single trusted source.
          </Typography>

          {/* ── EXPANDING PORTFOLIO ── */}
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
            Expanding Our Automation Portfolio
          </Typography>
          <Typography>
            As part of this collaboration, Valvenok is expanding its valve
            automation offering to include the full Kosa Plus product range —
            complementing our existing solutions for demanding industrial
            applications.
          </Typography>

          {/* PRODUCT GRID */}
          <Grid container spacing={2} sx={{ my: 4 }}>
            {[
              {
                label: "Pneumatic Actuators",
                desc: "Quarter-turn and multi-turn pneumatic actuators for automated valve control in process plant and utilities.",
              },
              {
                label: "Electric Actuators",
                desc: "Compact, reliable electric actuators for applications where pneumatic supply is unavailable or impractical.",
              },
              {
                label: "Positioners",
                desc: "Smart and analogue positioners for precise control valve positioning in modulating duty.",
              },
              {
                label: "Limit Switch Boxes",
                desc: "Valve position monitoring and feedback for safety systems and control room indication.",
              },
              {
                label: "Solenoid Valves",
                desc: "Pilot solenoid valves for pneumatic actuator control — available in a wide range of voltages and protection ratings.",
              },
              {
                label: "Valve Automation Accessories",
                desc: "Mounting kits, manual overrides, speed controllers, and ancillaries for complete automation packages.",
              },
            ].map((item, i) => (
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

          {/* PULL QUOTE */}
          <Box
            sx={{
              borderLeft: "4px solid",
              borderColor: "primary.main",
              bgcolor: "primary.50",
              px: 3,
              py: 2.5,
              mb: 6,
              mt: 2,
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
              "Together, both companies share a commitment to innovation,
              quality, reliability, and long-term customer success."
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
              — Valvenok, on the Kosa Plus Partnership
            </Typography>
          </Box>

          {/* ── VALUE FOR CUSTOMERS ── */}
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
            What This Means for Customers
          </Typography>
          <Typography>
            This is not just an expansion of the product catalogue. It
            represents a genuine uplift in what we can offer — technically,
            commercially, and logistically.
          </Typography>

          {[
            {
              num: "01",
              title: "Expanded Product Portfolio",
              body: "Access to a broader range of high-quality valve automation solutions, carefully selected to meet the needs of demanding industrial applications across multiple sectors.",
            },
            {
              num: "02",
              title: "Enhanced Automation Solutions",
              body: "Greater capability to specify and supply complete valve automation packages — from actuator selection through to installation and commissioning support.",
            },
            {
              num: "03",
              title: "Trusted Quality & Reliability",
              body: "Kosa Plus products are trusted across international markets, backed by rigorous quality standards and a proven manufacturing track record spanning decades.",
            },
            {
              num: "04",
              title: "Technical Expertise & Application Support",
              body: "Combined knowledge from both organisations ensures customers receive the right product for their application, with full lifecycle support from specification to commissioning.",
            },
            {
              num: "05",
              title: "Improved Supply Capabilities",
              body: "Strengthened supply chain relationships — helping customers plan around project deadlines and reduce unplanned downtime.",
            },
            {
              num: "06",
              title: "Innovative Process Solutions",
              body: "Access to cutting-edge valve automation technology that drives efficiency, reduces maintenance requirements, and improves long-term operational performance.",
            },
          ].map((item, i) => (
            <Box
              key={i}
              sx={{ display: "flex", gap: 3, mb: 4, mt: i === 0 ? 4 : 0 }}
            >
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
                    mb: 0,
                  }}
                >
                  {item.body}
                </Typography>
              </Box>
            </Box>
          ))}

          <Divider sx={{ my: 6 }} />

          {/* ── ABOUT KOSA PLUS ── */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 800,
              mb: 2,
              mt: 2,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            South Korean Manufacturing Excellence
          </Typography>
          <Typography>
            Kosa Plus has built a strong reputation for manufacturing
            high-quality valve automation products that are trusted across
            international markets. Their manufacturing facilities operate to
            rigorous quality standards, with a product portfolio that has been
            proven across oil and gas, chemical processing, water treatment,
            pharmaceutical, power generation, and industrial automation
            applications globally.
          </Typography>
          <Typography>
            By combining Kosa Plus's manufacturing excellence with Valvenok's
            industry knowledge and customer support capabilities, the
            partnership creates a strong platform for future growth — serving
            customers across the UK and beyond.
          </Typography>

          {/* INDUSTRY CHIPS */}
          <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ my: 4 }}>
            {[
              "Oil & Gas",
              "Chemical Processing",
              "Water Treatment",
              "Pharmaceutical",
              "Power Generation",
              "Industrial Automation",
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

          {/* ── LOOKING AHEAD ── */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 800,
              mb: 2,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            A Milestone Built on Shared Vision
          </Typography>
          <Typography>
            This partnership marks an exciting milestone for both organisations
            and reflects a shared vision for delivering greater value to
            customers. Valvenok looks forward to introducing the Kosa Plus
            product range to both existing and new customers, and to supporting
            businesses with an even broader range of valve automation solutions.
          </Typography>
          <Typography>
            If you would like to learn more about the Kosa Plus product range,
            or discuss how these products could support your application, our
            team would be delighted to arrange a conversation and explore the
            opportunities available.
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
              variant="h4"
              sx={{
                fontFamily: DISPLAY_FONT,
                fontWeight: 800,
                mb: 2,
                color: "white",
              }}
            >
              INTERESTED IN KOSA PLUS PRODUCTS?
            </Typography>
            <Typography sx={{ color: "white !important", mb: 3, opacity: 0.9 }}>
              Talk to our team about how the Kosa Plus range can support your
              valve automation requirements — from single actuator supply
              through to complete turnkey automation packages.
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
