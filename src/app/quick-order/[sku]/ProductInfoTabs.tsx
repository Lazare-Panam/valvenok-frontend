"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { ProductContent } from "../product-content";

interface Props {
  content: ProductContent;
}

type TabKey = "description" | "delivery";

// ─── CONTACT DETAILS ───────────────────────────────────────────
const CONTACT_PHONE = "+44 7368 137917";
const CONTACT_EMAIL = "sales@valvenok.com";
const CONTACT_ADDRESS = "St. Edburgs Hall, Priory Rd, Bicester, OX26 6BL, United Kingdom";
// ───────────────────────────────────────────────────────────────

// ─── BRAND ACCENT COLOR (green) ────────────────────────────────
const ACCENT = "#2e7d32"; // green — change here if you want a different shade
const ACCENT_BG = "rgba(46, 125, 50, 0.08)";
// ───────────────────────────────────────────────────────────────

export default function ProductInfoTabs({ content }: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>("description");

  const tabs: { key: TabKey; label: string }[] = [
    { key: "description", label: "Product Description" },
    { key: "delivery", label: "Delivery & Returns" },
  ];

  return (
    <Box sx={{ mt: 6 }}>
      {/* ─── TAB BAR ─────────────────────────────────────────── */}
      <Box
        sx={{
          display: "flex",
          gap: 0,
          alignItems: "flex-end",
        }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <Box
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              sx={{
                px: { xs: 3, md: 5 },
                py: 2.5,
                cursor: "pointer",
                position: "relative",
                bgcolor: isActive
                  ? "background.paper"
                  : (t) => alpha(t.palette.text.primary, 0.04),
                border: "1px solid",
                borderColor: "divider",
                borderBottom: isActive ? "none" : "1px solid",
                borderBottomColor: "divider",
                mb: isActive ? "-1px" : 0,
                borderTop: isActive ? `4px solid ${ACCENT}` : "1px solid",
                borderTopColor: isActive ? ACCENT : "divider",
                marginRight: "-1px",
                transition: "background-color 0.15s ease",
                "&:hover": {
                  bgcolor: isActive
                    ? "background.paper"
                    : (t) => alpha(t.palette.text.primary, 0.06),
                },
                zIndex: isActive ? 2 : 1,
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: { xs: "16px", md: "18px" },
                  fontWeight: 900,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: isActive ? "primary.main" : "text.secondary",
                  whiteSpace: "nowrap",
                }}
              >
                {tab.label}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* ─── CONTENT PANEL ────────────────────────────────────── */}
      <Box
        sx={{
          border: "1px solid",
          borderColor: "divider",
          p: { xs: 3, md: 4 },
          bgcolor: "background.paper",
          position: "relative",
          zIndex: 1,
        }}
      >
        {activeTab === "description" && <DescriptionPanel content={content} />}
        {activeTab === "delivery" && <DeliveryPanel />}
      </Box>
    </Box>
  );
}

// ─── DESCRIPTION PANEL ──────────────────────────────────────────
function DescriptionPanel({ content }: { content: ProductContent }) {
  return (
    <Box>
      {/* longDescription — short opening line */}
      <Typography
        sx={{
          fontFamily: '"Barlow Condensed", sans-serif',
          fontSize: "30px",
          fontWeight: 600,
          lineHeight: 1.6,
          color: "text.primary",
          mb: 3,
        }}
      >
        {content.longDescription}
      </Typography>

      {/* metaDescription — long SEO paragraph, visible to humans + Google */}
      {content.metaDescription && (
        <Typography
          sx={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontSize: "23px",
            fontWeight: 400,
            lineHeight: 1.7,
            color: "text.primary",
            mb: 4,
          }}
        >
          {content.metaDescription}
        </Typography>
      )}

      {content.keyFeatures.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "text.secondary",
              mb: 2,
            }}
          >
            Key Features
          </Typography>
          <Box component="ul" sx={{ pl: 0, m: 0, listStyle: "none" }}>
            {content.keyFeatures.map((feature, i) => (
              <Box
                component="li"
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.5,
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    color: ACCENT,
                    fontWeight: 900,
                    flexShrink: 0,
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: "16px",
                    lineHeight: 1.6,
                  }}
                >
                  ▸
                </Box>
                <Typography
                  sx={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: "18px",
                    fontWeight: 500,
                    lineHeight: 1.6,
                    color: "text.primary",
                  }}
                >
                  {feature}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {content.applications && (
        <Box>
          <Typography
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "text.secondary",
              mb: 2,
            }}
          >
            Applications
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: "15px",
              fontWeight: 500,
              lineHeight: 1.6,
              color: "text.primary",
            }}
          >
            {content.applications}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
// ─── DELIVERY PANEL ─────────────────────────────────────────────
function DeliveryPanel() {
  return (
    <Box>
      {/* Important Notice */}
      <Box
        sx={{
          p: 2.5,
          mb: 3,
          bgcolor: ACCENT_BG,
          borderLeft: `3px solid ${ACCENT}`,
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontSize: "20px",
            fontWeight: 700,
            color: "text.primary",
            mb: 1,
          }}
        >
          <span style={{ color: "#d32f2f", marginRight: 6 }}>❗</span>
          Please Note – UK Stock & Lead Times
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: 1.6,
            color: "text.primary",
            mb: 1,
          }}
        >
          <strong>All products are stocked in the UK</strong> — we hold inventory at our facility for fast dispatch.
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: 1.6,
            color: "text.primary",
          }}
        >
          We work hard to get orders out as quickly as possible, but for any urgent requirements or specific questions about availability, please call our team on{" "}
          <strong>{CONTACT_PHONE}</strong> before placing your order.
        </Typography>
      </Box>

      {/* Two-column: Delivery Info | Returns Policy */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box
          sx={{
            p: 3,
            borderRight: { xs: "none", md: "1px solid" },
            borderBottom: { xs: "1px solid", md: "none" },
            borderColor: "divider",
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: "18px",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: ACCENT,
              mb: 2,
              textDecoration: "underline",
            }}
          >
            Delivery Info
          </Typography>
          <Box component="ul" sx={{ pl: 0, m: 0, listStyle: "none" }}>
            {[
              "Standard delivery in 1–3 working days",
              "Orders placed before 2pm are usually dispatched same day",
              "Larger or made-to-order items may take longer",
              "Shipping costs calculated at checkout",
              "Free UK delivery on orders over £150+VAT",
            ].map((item, i) => (
              <Box component="li" key={i} sx={{ display: "flex", gap: 1, mb: 0.75 }}>
                <Box sx={{ color: "text.secondary", flexShrink: 0 }}>–</Box>
                <Typography
                  sx={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: "18px",
                    fontWeight: 500,
                    lineHeight: 1.5,
                    color: "text.primary",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ p: 3 }}>
          <Typography
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: "18px",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: ACCENT,
              mb: 2,
              textDecoration: "underline",
            }}
          >
            Returns Policy
          </Typography>
          <Box component="ul" sx={{ pl: 0, m: 0, listStyle: "none" }}>
            {[
              "14-day returns on most items",
              "Items must be unused and in original packaging",
              "Custom-made products are non-returnable",
              "A standard re-stocking fee of 30% applies",
            ].map((item, i) => (
              <Box component="li" key={i} sx={{ display: "flex", gap: 1, mb: 0.75 }}>
                <Box sx={{ color: "text.secondary", flexShrink: 0 }}>–</Box>
                <Typography
                  sx={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: "18px",
                    fontWeight: 500,
                    lineHeight: 1.5,
                    color: "text.primary",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
              <Box sx={{ color: "text.secondary", flexShrink: 0 }}>–</Box>
              <Typography
                sx={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: 1.5,
                  color: "text.primary",
                }}
              >
                Email us at{" "}
                <Box
                  component="a"
                  href={`mailto:${CONTACT_EMAIL}`}
                  sx={{
                    color: ACCENT,
                    textDecoration: "underline",
                    fontWeight: 700,
                  }}
                >
                  {CONTACT_EMAIL}
                </Box>{" "}
                to start a return
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Need Help / Contact */}
      <Box
        sx={{
          mt: 3,
          p: 2.5,
          bgcolor: (t) => alpha(t.palette.text.primary, 0.02),
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontSize: "18px",
            fontWeight: 800,
            color: "text.primary",
            mb: 1,
          }}
        >
          Need Help?
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontSize: "18px",
            fontWeight: 500,
            color: "text.primary",
            mb: 0.5,
          }}
        >
          Call us on <strong>{CONTACT_PHONE}</strong> or email{" "}
          <Box
            component="a"
            href={`mailto:${CONTACT_EMAIL}`}
            sx={{
              color: ACCENT,
              textDecoration: "underline",
              fontWeight: 700,
            }}
          >
            {CONTACT_EMAIL}
          </Box>{" "}
          — we're happy to assist.
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontSize: "18px",
            fontWeight: 500,
            color: "text.secondary",
            mt: 1,
          }}
        >
          {CONTACT_ADDRESS}
        </Typography>
      </Box>
    </Box>
  );
}