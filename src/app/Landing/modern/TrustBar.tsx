'use client'

import { Box, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { T, textReset } from "./homeTokens";
import { BRAND } from "@/src/theme/brand";

// Delivery, support and JOSCAR. (“Trade Credit Accounts Available” removed 17 Nov 2026: not offered.)
const ITEMS = [
  { icon: LocalShippingOutlinedIcon, title: "Free UK Delivery on Orders Over £150" },
  { icon: SupportAgentOutlinedIcon, title: "UK-Based Technical Support" },
  { icon: VerifiedOutlinedIcon, title: "JOSCAR Registered Supplier" },
];

export default function TrustBar() {
  return (
    <Box sx={{ ...textReset, width: "100%", boxSizing: "border-box", maxWidth: T.maxWidth, mx: "auto", px: { xs: 2, md: 4 }, mt: { xs: -3, md: -6 }, position: "relative", zIndex: 1 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
          bgcolor: BRAND.white,
          border: `1px solid ${T.border}`,
          borderRadius: T.radius,
          boxShadow: T.shadow,
          overflow: "hidden",
        }}
      >
        {ITEMS.map(({ icon: Icon, title }, i) => (
          <Box
            key={title}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.75,
              px: { xs: 2, md: 3 },
              py: { xs: 1.5, md: 2.75 },
              borderLeft: { sm: i === 0 ? "none" : `1px solid ${T.border}` },
              borderTop: { xs: i > 0 ? `1px solid ${T.border}` : "none", sm: "none" },
            }}
          >
            <Box
              sx={{
                flexShrink: 0,
                width: 42,
                height: 42,
                borderRadius: "12px",
                display: "grid",
                placeItems: "center",
                bgcolor: T.brandSoft,
                color: T.brandDark,
              }}
            >
              <Icon fontSize="small" />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: "0.93rem", color: T.ink, lineHeight: 1.35 }}>{title}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
