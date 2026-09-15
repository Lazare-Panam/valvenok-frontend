"use client";

import { Box, Container, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/EmailOutlined";

const DARK_GREEN = "#61D649";
const ICON_WHITE = "#fff";

export default function NavTopStrip() {
  return (
    <Box
      sx={{
        bgcolor: DARK_GREEN,
        display: { xs: "none", md: "block" },
        borderBottomLeftRadius: "50vw",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            height: 40,
            gap: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
            <PhoneIcon sx={{ fontSize: 13, color: ICON_WHITE }} />
            <Typography
              component="a"
              href="tel:+447368 137917"
              sx={{
                color: "#fff",
                fontSize: "0.78rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "opacity 0.2s ease",
                "&:hover": { textDecoration: "underline", opacity: 0.85 },
              }}
            >
              +44 7368 137917
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
            <EmailIcon sx={{ fontSize: 13, color: ICON_WHITE }} />
            <Typography
              component="a"
              href="mailto:sales@valvenok.com"
              sx={{
                color: "#fff",
                fontSize: "0.78rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "opacity 0.2s ease",
                "&:hover": { textDecoration: "underline", opacity: 0.85 },
              }}
            >
              sales@valvenok.com
            </Typography>
          </Box>

          <Box
            component="a"
            href="/contact"
            sx={{
              px: 2,
              py: 0.4,
              border: "1px solid rgba(255,255,255,0.5)",
              color: "#fff",
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.2s",
              "&:hover": { bgcolor: "#fff", color: DARK_GREEN, borderColor: "#fff" },
            }}
          >
            Request a Quote
          </Box>
        </Box>
      </Container>
    </Box>
  );
}