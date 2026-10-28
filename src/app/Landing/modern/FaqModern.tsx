'use client'

import { useState } from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import AssignmentReturnOutlinedIcon from "@mui/icons-material/AssignmentReturnOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import { FAQS } from "../FAQSection";
import { T, textReset } from "./tokens";
import SectionHeader from "./SectionHeader";

// One icon per question, in the same order as FAQS.
const ICONS = [
  LocalShippingOutlinedIcon,
  TuneOutlinedIcon,
  Inventory2OutlinedIcon,
  PublicOutlinedIcon,
  ManageSearchOutlinedIcon,
  AssignmentReturnOutlinedIcon,
  AccountBalanceOutlinedIcon,
];

export default function FaqModern() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Box component="section" sx={{ ...textReset, bgcolor: T.surface, borderTop: `1px solid ${T.border}` }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
      <Box
        sx={{
          width: "100%",
          boxSizing: "border-box",
          maxWidth: T.maxWidth,
          mx: "auto",
          px: { xs: 2, md: 4 },
          py: { xs: 8, md: 12 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "0.75fr 1.25fr" },
          gap: { xs: 3, md: 8 },
          alignItems: "start",
        }}
      >
        <Box sx={{ position: { md: "sticky" }, top: { md: 180 } }}>
          <SectionHeader eyebrow="FAQ" title="Questions Procurement Teams Ask" />

          {/* Support card */}
          <Box
            sx={{
              mt: { xs: -1, md: -1 },
              p: 3.5,
              borderRadius: "20px",
              bgcolor: "#fff",
              border: `1px solid ${T.border}`,
              boxShadow: T.shadow,
              background: `linear-gradient(180deg, #fff 0%, ${T.greenSoft} 140%)`,
            }}
          >
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: "16px",
                display: "grid",
                placeItems: "center",
                color: "#fff",
                background: `linear-gradient(140deg, #3FAE2C 0%, ${T.greenDark} 100%)`,
                boxShadow: "0 10px 24px rgba(46,139,30,0.35)",
              }}
            >
              <SupportAgentRoundedIcon />
            </Box>
            <Typography sx={{ mt: 2.5, fontWeight: 700, fontSize: "1.1rem", color: T.ink }}>Can&apos;t find what you&apos;re looking for?</Typography>
            <Box
              component={Link}
              href="/contact"
              sx={{
                mt: 2.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                py: 1.4,
                borderRadius: "12px",
                bgcolor: T.green,
                color: T.greenDeep,
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                transition: "background-color .2s",
                "&:hover": { bgcolor: "#55C93E" },
                "& svg": { transition: "transform .2s" },
                "&:hover svg": { transform: "translateX(3px)" },
              }}
            >
              Ask our technical team <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "grid", gap: 1.5 }}>
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            const Icon = ICONS[i] ?? HelpOutlineRoundedIcon;
            return (
              <Box
                key={item.q}
                sx={{
                  bgcolor: "#fff",
                  border: `1px solid ${isOpen ? "#BFE3B4" : T.border}`,
                  borderRadius: "16px",
                  transition: "border-color .2s, box-shadow .2s",
                  boxShadow: isOpen ? T.shadow : "none",
                  "&:hover": { borderColor: "#BFE3B4" },
                }}
              >
                <Box
                  component="button"
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    px: 2.5,
                    py: 2,
                    border: 0,
                    bgcolor: "transparent",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <Box
                    sx={{
                      flexShrink: 0,
                      width: 44,
                      height: 44,
                      borderRadius: "12px",
                      display: "grid",
                      placeItems: "center",
                      bgcolor: isOpen ? T.greenSoft : T.surface,
                      color: T.greenDark,
                      transition: "background-color .2s",
                    }}
                  >
                    <Icon sx={{ fontSize: 22 }} />
                  </Box>
                  <Typography component="h3" sx={{ flex: 1, fontWeight: 600, fontSize: "1.02rem", color: T.ink }}>
                    {item.q}
                  </Typography>
                  <Box
                    sx={{
                      flexShrink: 0,
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      bgcolor: isOpen ? T.green : T.surface,
                      color: isOpen ? T.greenDeep : T.greenDark,
                      transition: "all .2s",
                      transform: isOpen ? "rotate(45deg)" : "none",
                    }}
                  >
                    <AddRoundedIcon sx={{ fontSize: 20 }} />
                  </Box>
                </Box>
                <Box sx={{ display: "grid", gridTemplateRows: isOpen ? "1fr" : "0fr", transition: "grid-template-rows .25s ease" }}>
                  <Box sx={{ overflow: "hidden" }}>
                    <Typography sx={{ pl: { xs: 2.5, md: 10 }, pr: 3, pb: 2.5, fontSize: "0.97rem", lineHeight: 1.75, color: T.body }}>{item.a}</Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
