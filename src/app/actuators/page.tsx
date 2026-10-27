"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import { Category } from "@/src/app/Common/Products_Page/ProductCard";
import ProcessValvesGrid from "../valves/ProcessValvesGrid";
import RelatedLinks from "@/src/app/Common/Products_Page/RelatedLinks";

const ACTUATOR_CATEGORIES: Category[] = [
  {
    code: "PA",
    title: "Pneumatic Actuators",
    subtitle: "Pneumatic Rotary & Linear Actuators",
    description:
      "A full range of pneumatic rotary and linear actuators engineered for reliable quarter-turn and linear valve control. Rack-and-pinion spring return for fail-safe process control, scotch yoke for high-torque heavy-duty automation — all with ISO 5211 direct-mount.",
    specs: [
      "Rack & Pinion",
      "Scotch Yoke",
      "Spring Return",
      "ISO 5211",
      "ATEX — Selected Models",
      "Double Acting",
    ],
    applications: "Oil & Gas, Petrochemical, Power Generation, Process Plants",
    href: "/pneumatic/actuators",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/actuators/AD-Series.jpeg",
  },
  {
    code: "EA",
    title: "Electric Actuators",
    subtitle: "Electric Rotary & Linear Actuators",
    description:
      "Precision electric actuators for quarter-turn and multi-turn valve automation. Intelligent torque control, modulating and on-off service, with integrated limit switches and positioners.",
    specs: [
      "Quarter-Turn",
      "Multi-Turn",
      "Modulating",
      "On-Off Service",
      "Limit Switches",
      "Positioners",
    ],
    applications: "Water Treatment, Power Generation, Chemical, Pharmaceutical",
    href: "/actuators/electric",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/ke-ac.jpeg",
  },
  {
    code: "HA",
    title: "Hydraulic Actuators",
    subtitle: "Hydraulic Rotary & Linear Actuators",
    description:
      "High-force hydraulic actuators built for subsea, offshore and pipeline applications where extreme torque and fail-safe operation are non-negotiable. Scotch yoke and rack-and-pinion configurations available.",
    specs: [
      "Scotch Yoke",
      "Rack & Pinion",
      "Spring Return",
      "Hydraulic Override",
      "Subsea Ready",
      "Fail-Safe",
    ],
    applications: "Subsea, Offshore, Pipeline & Transmission, FPSOs",
    href: "/actuators/hydraulic",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/hydraulic/adf.webp",
  },
  {
    code: "MA",
    title: "Mechanical Actuators",
    subtitle: "Gearboxes & Manual Actuators",
    description:
      "Manual gearboxes and mechanical actuators for quarter-turn and multi-turn valves. Worm gear, bevel gear, and spur gear designs provide reliable manual override and standalone valve operation.",
    specs: [
      "Worm Gear",
      "Bevel Gear",
      "Spur Gear",
      "Quarter-Turn",
      "Multi-Turn",
      "Manual Override",
    ],
    applications: "General Industrial, Pipeline, Process Plants, Marine",
    href: "/actuators/mechanical",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/mechanical/mab.webp",
  },
  {
    code: "LS",
    title: "Limit Switch Boxes",
    subtitle: "Valve Position Indicators",
    description:
      "Valve position indicators that detect open/closed valve status and transmit it to the control system. Built with a rugged aluminium housing, IECEx and KCs explosion-proof certified, with proximity and mechanical switch options across weatherproof and Ex-rated variants.",
    specs: [
      "IP67 / IP68",
      "IECEx Certified",
      "KCs Explosion Proof",
      "Mechanical & Proximity",
      "3-Way Indicator",
      "ALDC12 / SUS316L Body",
    ],
    applications:
      "Oil & Gas, Petrochemical, Process Safety Systems, Marine & Offshore",
    href: "/actuators/limit-switches",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/limit-switches/ks-limit-switch.jpg",
  },
];

export default function ActuatorsPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* ── Hero ── */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: "60vh", md: "80vh" },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://pblol2.blob.core.windows.net/panam-images/products/actuators/ac-hero.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{
              color: "#61D649",
              letterSpacing: 3,
              fontSize: 11,
              fontWeight: 700,
            }}
          >
            Actuation Solutions
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: 42, md: 72 },
              fontWeight: 800,
              color: "#fff",
              mt: 1,
              mb: 3,
              lineHeight: 1.1,
              maxWidth: 900,
              textShadow: "0px 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            Pneumatic, Electric, Hydraulic & Mechanical Actuators
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 18, md: 20 },
              color: "rgba(255,255,255,0.9)",
              maxWidth: 600,
              mb: 5,
              lineHeight: 1.7,
            }}
          >
            UK supplier of valve actuators across all technologies —
            pneumatic, electric, hydraulic and mechanical — for demanding
            industrial environments globally.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="mailto:sales@valvenok.com"
            sx={{
              bgcolor: "#61D649",
              color: "#000",
              borderRadius: 1,
              px: 5,
              py: 2,
              fontSize: "1rem",
              fontWeight: 700,
              textTransform: "none",
              "&:hover": { bgcolor: "#fff", color: "#000" },
            }}
          >
            Request Actuator Specs
          </Button>
        </Container>
      </Box>

      {/* ── Trust Bar ── */}
      <Box
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
          py: 1.5,
          bgcolor: "#fff",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            animation: "marquee 30s linear infinite",
            "&:hover": { animationPlayState: "paused" },
          }}
        >
          {[1, 2].map((i) => (
            <Box key={i} sx={{ display: "flex", gap: 6, pr: 6 }}>
              {[
                "ATEX / IECEx Options on Selected Models",
                "UK-Based Technical Support",
                "Pneumatic · Electric · Hydraulic · Mechanical",
                "ISO 5211 Mounting Standard",
                "Certification Varies by Model",
                "Spring Return & Double Acting",
              ].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontSize: 19,
                    fontWeight: 500,
                    color: "text.secondary",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      bgcolor: "#61D649",
                    }}
                  />
                  {item}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── Product Cards ── */}
      <ProcessValvesGrid families={ACTUATOR_CATEGORIES} />
      <RelatedLinks title="Guides" links={[{ label: "How to Choose a Valve Actuator", href: "/news/how-to-choose-a-valve-actuator" }]} />
    </Box>
  );
}
