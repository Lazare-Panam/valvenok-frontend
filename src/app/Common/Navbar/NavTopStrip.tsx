"use client";

import { Box, Container } from "@mui/material";
import PhoneIcon from "@mui/icons-material/PhoneOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { NAV } from "./navTheme";

const BODY = NAV.hover;

const linkSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 0.75,
  color: BODY,
  fontSize: "0.8rem",
  fontWeight: 500,
  textDecoration: "none",
  transition: "color 0.2s ease",
  "&:hover": { color: NAV.deep },
};

export default function NavTopStrip() {
  return (
    <Box sx={{ bgcolor: NAV.wash, borderBottom: `1px solid ${NAV.border}`, display: { xs: "none", md: "block" } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 40, gap: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box sx={{ ...linkSx, "&:hover": {} }}>
              <LocalShippingOutlinedIcon sx={{ fontSize: 16, color: NAV.main }} />
              Free UK delivery on orders over £150
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box component="a" href="tel:+447368137917" sx={linkSx}>
              <PhoneIcon sx={{ fontSize: 15, color: NAV.main }} />
              +44 7368 137917
            </Box>
            <Box component="a" href="mailto:sales@valvenok.com" sx={linkSx}>
              <EmailIcon sx={{ fontSize: 15, color: NAV.main }} />
              sales@valvenok.com
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
