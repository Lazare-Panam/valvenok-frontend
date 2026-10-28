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
import HandshakeIcon from "@mui/icons-material/Handshake";

export default function ValvenokMarsPartnershipPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", pb: 10 }}>
      {/* HERO */}
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
            Partnership Announcement
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
            Valvenok Partners with Mars Valves to Expand Industrial Solutions
            Across the UK
          </Typography>
          <Typography
            variant="h5"
            sx={{ mt: 2, opacity: 0.85, fontStyle: "italic" }}
          >
            A strategic collaboration built on shared values of engineering
            excellence and reliable flow control.
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
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ mt: -5 }}>
        {/* KEY TAKEAWAYS */}
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
              "Valvenok and Mars Valves have entered a strategic partnership to expand industrial valve solutions across the UK.",
              "Mars Valves, headquartered in Taichung, Taiwan, is known for Direct Mount technology and API fire-safe certified products.",
              "The collaboration unlocks access to ball valves, actuated valves, cryogenic valves, sanitary valves, butterfly valves, and more.",
              "Customers gain enhanced technical support, improved supply availability, and a broader product portfolio.",
              "Together, both companies serve Oil & Gas, Chemical, Pharmaceutical, Water Treatment, Food & Beverage, and Power Generation sectors.",
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

        {/* BANNER IMAGE */}
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Box
            component="img"
            src="https://pblol2.blob.core.windows.net/valvenok-images/banner-images/mars-banner.jpeg"
            alt="Valvenok and Mars Valves Partnership"
            sx={{
              width: "100%",
              maxWidth: "100%",
              border: "1px solid",
              borderColor: "divider",
            }}
          />
        </Box>

        {/* BODY */}
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
            Valvenok is proud to announce a strategic partnership with Mars
            Valves, a globally recognised manufacturer of high-performance
            industrial valves and flow control solutions. This collaboration
            marks an important milestone in our continued commitment to
            delivering industry-leading products, technical expertise, and
            reliable solutions for the most demanding applications.
          </Typography>
          <Typography>
            As industries push for higher levels of efficiency, reliability, and
            performance, working with manufacturers who share those same values
            becomes essential. Mars Valves has earned an outstanding reputation
            for engineering excellence, innovative valve technology, and
            dependable products trusted across global industries.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* About Mars Valves */}
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
            About Mars Valves
          </Typography>
          <Typography>
            Headquartered in Taichung, Taiwan, Mars Valves is a leading
            manufacturer of industrial ball valves, actuated valves, sanitary
            valves, cryogenic valves, instrumentation valves, butterfly valves,
            and advanced flow control solutions. Known for its patented Direct
            Mount valve technology, API fire-safe certified products, and strict
            adherence to international quality standards, Mars Valves serves
            customers across multiple industries worldwide.
          </Typography>
          <Typography>
            Their Direct Mount designs improve reliability, simplify automation,
            reduce maintenance requirements, and lower overall operating costs —
            making them an ideal fit for the high-integrity builds Valvenok
            customers demand.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* Blockquote */}
          <Box
            sx={{
              borderLeft: "6px solid",
              borderColor: "primary.main",
              pl: 4,
              my: 6,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontStyle: "italic",
                fontWeight: 700,
                lineHeight: 1.6,
                color: "#000",
              }}
            >
              "Bringing together two companies that share a common goal:
              delivering high-quality valve solutions that help customers
              improve performance, reduce downtime, and operate with
              confidence."
            </Typography>
            <Typography
              variant="overline"
              sx={{
                display: "block",
                mt: 2,
                letterSpacing: "0.3em",
                fontWeight: 800,
              }}
            >
              — Valvenok, on the Partnership
            </Typography>
          </Box>

          <Divider sx={{ my: 6 }} />

          {/* More than a product range */}
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
            More Than an Expanded Product Range
          </Typography>
          <Typography>
            By partnering with Mars Valves, Valvenok can now offer access to a
            broader portfolio of premium industrial valves and automation
            solutions, backed by the same technical support and customer service
            our clients have come to rely on. This allows us to support a wider
            range of applications, industries, and project requirements without
            compromising on quality or reliability.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* Industries */}
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
            Industries We Serve Together
          </Typography>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {[
              "Oil & Gas",
              "Chemical",
              "Water Treatment",
              "Pharmaceutical",
              "Food & Beverage",
              "Power Generation",
            ].map((industry, i) => (
              <Grid key={i} size={{ xs: 6, sm: 4 }}>
                <Box
                  sx={{
                    p: 2,
                    border: "1px solid",
                    borderColor: "primary.main",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 800,
                      color: "primary.main",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {industry}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 6 }} />

          {/* Key Benefits */}
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
            Key Benefits for Our Customers
          </Typography>
          {[
            {
              num: "01",
              title: "Expanded Product Offering",
              body: "Access to an extensive range of industrial valve products, including ball valves, actuated valves, multi-port valves, sanitary valves, cryogenic valves, and specialist flow control solutions.",
            },
            {
              num: "02",
              title: "Innovative Valve Technology",
              body: "Mars Valves' patented Direct Mount valve designs improve reliability, simplify automation, reduce maintenance requirements, and lower overall operating costs.",
            },
            {
              num: "03",
              title: "Enhanced Technical Support",
              body: "The combined expertise of Valvenok and Mars Valves enables greater application knowledge, product selection guidance, and engineering support throughout the lifecycle of every project.",
            },
            {
              num: "04",
              title: "Improved Supply & Availability",
              body: "A strengthened ability to source and supply high-quality valve products efficiently, helping customers meet project timelines and operational requirements.",
            },
            {
              num: "05",
              title: "Long-Term Reliability",
              body: "Both companies are committed to delivering products that offer exceptional durability, performance, and value — helping customers maximise system uptime and reduce lifecycle costs.",
            },
          ].map((item, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                gap: 3,
                mb: 4,
                pb: 4,
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography
                variant="h1"
            component="h2"
                sx={{
                  fontFamily: '"Barlow Condensed"',
                  fontWeight: 900,
                  color: "primary.main",
                  minWidth: 48,
                }}
              >
                {item.num}
              </Typography>
              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: "0.25em",
                    color: "primary.main",
                    display: "block",
                    mb: 0.5,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography>{item.body}</Typography>
              </Box>
            </Box>
          ))}

          <Divider sx={{ my: 6 }} />

          {/* Looking Ahead */}
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
            A Stronger Platform for the Future
          </Typography>
          <Typography>
            This partnership represents an exciting opportunity for both
            Valvenok and Mars Valves. Together, we are building a stronger
            platform to deliver innovative valve technology, reliable flow
            control solutions, and exceptional customer support to customers
            across the UK and beyond.
          </Typography>
          <Typography>
            We look forward to helping our customers benefit from a wider range
            of world-class industrial valve solutions for years to come.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* CTA */}
          <Box
            sx={{
              bgcolor: "primary.main",
              color: "white",
              p: 5,
              mt: 8,
              textAlign: "center",
            }}
          >
            <HandshakeIcon sx={{ fontSize: 48, mb: 2, opacity: 0.9 }} />
            <Typography
              variant="h4"
              sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 2 }}
            >
              WANT TO KNOW MORE ABOUT THIS PARTNERSHIP?
            </Typography>
            <Typography sx={{ color: "white !important", mb: 3, opacity: 0.9 }}>
              Get in touch with our team to learn how the Valvenok and Mars
              Valves collaboration can benefit your next project.
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
              Contact Us Today
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
