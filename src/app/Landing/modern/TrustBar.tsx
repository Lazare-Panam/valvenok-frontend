'use client'

import { Box, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import { T, textReset } from "./tokens";

// Same four items as the original DeliveryBanner ticker.
const ITEMS = [
  { icon: LocalShippingOutlinedIcon, title: "Free UK Delivery on Orders Over £150" },
  { icon: SupportAgentOutlinedIcon, title: "UK-Based Technical Support" },
  { icon: VerifiedOutlinedIcon, title: "JOSCAR Registered Supplier" },
  { icon: AccountBalanceOutlinedIcon, title: "Trade Credit Accounts Available" },
];

export default function TrustBar() {
  return (
    <Box sx={{ ...textReset, width: "100%", boxSizing: "border-box", maxWidth: T.maxWidth, mx: "auto", px: { xs: 2, md: 4 }, mt: { xs: -3, md: -6 }, position: "relative", zIndex: 1 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
          bgcolor: "#fff",
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
              py: { xs: 2, md: 2.75 },
              borderLeft: { md: i === 0 ? "none" : `1px solid ${T.border}` },
              borderTop: { xs: i > 1 ? `1px solid ${T.border}` : "none", md: "none" },
              borderRight: { xs: i % 2 === 0 ? `1px solid ${T.border}` : "none", md: "none" },
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
                bgcolor: T.greenSoft,
                color: T.greenDark,
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
