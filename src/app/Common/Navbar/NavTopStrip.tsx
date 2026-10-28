"use client";

import { Box, Container } from "@mui/material";
import PhoneIcon from "@mui/icons-material/PhoneOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

const BODY = "#4B5A50";

const linkSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 0.75,
  color: BODY,
  fontSize: "0.8rem",
  fontWeight: 500,
  textDecoration: "none",
  transition: "color 0.2s ease",
  "&:hover": { color: "#2E8B1E" },
};

export default function NavTopStrip() {
  return (
    <Box sx={{ bgcolor: "#F5F8F5", borderBottom: "1px solid #E5EBE6", display: { xs: "none", md: "block" } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 40, gap: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box sx={{ ...linkSx, "&:hover": {} }}>
              <LocalShippingOutlinedIcon sx={{ fontSize: 16, color: "#2E8B1E" }} />
              Free UK delivery on orders over £150
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box component="a" href="tel:+447368137917" sx={linkSx}>
              <PhoneIcon sx={{ fontSize: 15 }} />
              +44 7368 137917
            </Box>
            <Box component="a" href="mailto:sales@valvenok.com" sx={linkSx}>
              <EmailIcon sx={{ fontSize: 15 }} />
              sales@valvenok.com
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
