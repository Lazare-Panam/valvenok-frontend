"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// ─── EDIT THESE MESSAGES ─────────────────────────────────────────
const PROMO_MESSAGES = [
  "FREE UK DELIVERY ON ORDERS OVER £150+VAT",
  "FOLLOW THE LATEST ON OUR LINKEDIN",
  "PRODUCTS BY LEADING MANUFACTURERS",
];
// ─────────────────────────────────────────────────────────────────

export default function PromoBar() {
  // Duplicate the messages so the marquee loops seamlessly
  const loop = [...PROMO_MESSAGES, ...PROMO_MESSAGES, ...PROMO_MESSAGES, ...PROMO_MESSAGES];

  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "primary.contrastText",
        overflow: "hidden",
        py: 1,
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box
        sx={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "promo-scroll 40s linear infinite",
          "@keyframes promo-scroll": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
        }}
      >
        {loop.map((msg, i) => (
          <Box
            key={i}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              px: 4,
            }}
          >
            <Typography
              component="span"
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              {msg}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: "12px",
                fontWeight: 700,
                ml: 4,
                opacity: 0.5,
              }}
            >
              —
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}