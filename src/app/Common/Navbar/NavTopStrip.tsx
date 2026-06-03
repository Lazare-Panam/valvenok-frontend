"use client";

import { Box, Container, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/EmailOutlined";

const DARK_GREEN = "#1c6e2e";
const BRAND_GREEN = "#61D649";

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
            <PhoneIcon sx={{ fontSize: 13, color: BRAND_GREEN }} />
            <Typography
              component="a"
              href="tel:+447368557896"
              sx={{
                color: "#fff",
                fontSize: "0.78rem",
                fontWeight: 500,
                textDecoration: "none",
                "&:hover": { color: BRAND_GREEN },
              }}
            >
              +44 7368 557896
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
            <EmailIcon sx={{ fontSize: 13, color: BRAND_GREEN }} />
            <Typography
              component="a"
              href="mailto:sales@valvenok.com"
              sx={{
                color: "#fff",
                fontSize: "0.78rem",
                fontWeight: 500,
                textDecoration: "none",
                "&:hover": { color: BRAND_GREEN },
              }}
            >
              sales@valvenok.com
            </Typography>
          </Box>

          <Box
            component="a"
            href="/quote"
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
              "&:hover": { bgcolor: BRAND_GREEN, borderColor: BRAND_GREEN },
            }}
          >
            Request a Quote
          </Box>
        </Box>
      </Container>
    </Box>
  );
}