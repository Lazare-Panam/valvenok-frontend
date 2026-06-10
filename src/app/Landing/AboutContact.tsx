"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
//
const JOSCAR_POINTS = [
  "Pre-qualified supplier recognised across the UK defence & aerospace sector",
  "Reduces procurement risk for Tier 1 contractors and MoD supply chains",
  "Demonstrates compliance with industry-standard due diligence requirements",
  "Accepted by BAE Systems, Rolls-Royce, Airbus, Leonardo and hundreds more",
  "Covers financial health, quality management, legal & ethical trading standards",
  "Annual audit process ensures ongoing compliance — not a one-time tick-box",
];

export default function AboutContact() {
  return (
    <Box
      component="section"
      sx={{ py: { xs: 7, md: 10 }, bgcolor: "background.paper" }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 6, md: 8 },
            alignItems: "center",
          }}
        >
          {/* ── LEFT: JOSCAR Text ── */}
          <Box>
            <Typography
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "primary.main",
                mb: 1,
              }}
            >
              JOSCAR Registered
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: { xs: "2rem", md: "clamp(28px, 3vw, 42px)" },
                fontWeight: 900,
                textTransform: "uppercase",
                color: "text.primary",
                letterSpacing: "0.02em",
                lineHeight: 1.08,
                mb: 2.5,
              }}
            >
              Why JOSCAR Matters for Your Supply Chain ?
            </Typography>

            <Typography
              sx={{
                color: "text.primary",
                lineHeight: 1.8,
                mb: 2,
                fontWeight: 600,
              }}
            >
              JOSCAR — the Joint Supply Chain Accreditation Register — is the
              defence and aerospace industry's single pre-qualification
              standard. It exists so that contractors don't have to run separate
              due diligence processes for every supplier they work with.
            </Typography>
            <Typography
              sx={{
                color: "text.primary",
                lineHeight: 1.8,
                mb: 3,
                fontWeight: 600,
              }}
            >
              By sourcing from a JOSCAR-registered supplier like Valvenok, your
              procurement team can move faster, reduce audit overhead, and
              demonstrate compliance throughout your supply chain — from frame
              contracts to urgent spares.
            </Typography>

            {/* Points */}
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, mb: 4 }}>
              {JOSCAR_POINTS.map((item) => (
                <Box
                  key={item}
                  component="li"
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.5,
                    py: 1.1,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "text.primary",
                    "&:last-child": { borderBottom: "none" },
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      fontSize: 20,
                      color: "primary.main",
                      flexShrink: 0,
                      mt: "2px",
                    }}
                  />
                  {item}
                </Box>
              ))}
            </Box>

            <Button
              variant="contained"
              color="primary"
              href="/contact"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: "0px",
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 800,
                fontSize: "15px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                px: 3.5,
                py: 1.5,
                boxShadow: "none",
                "&:hover": { boxShadow: "none" },
              }}
            >
              Request JOSCAR Documentation
            </Button>
          </Box>

          {/* ── RIGHT: JOSCAR Certificate Card ── */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {/* Certificate visual */}
            {/* Certificate Image */}
            <Box
              sx={{
                overflow: "hidden",
                position: "relative",
                bgcolor: (t) => alpha(t.palette.primary.main, 0.03),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 800,
              }}
            >
              <img
                src="https://pblol2.blob.core.windows.net/valvenok-images/certfiicates/Joscar_Cert"
                alt="Valvenok JOSCAR Accreditation Certificate"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                  transform: "scale(1.55)",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
