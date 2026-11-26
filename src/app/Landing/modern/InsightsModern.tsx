'use client'

import Link from "next/link";
import { Box, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
// Newest first, straight from the News page list, so the latest article always shows here
import { POSTS } from "@/src/app/news/posts";
import { CARD, CARD_HOVER, T, textReset } from "./homeTokens";
import SectionHeader from "./HomeSectionHeader";
import PillButton from "./HomeButtons";
import { swipeRow } from "./swipeRow";
import { ACCENT } from "@/src/theme/brand";

export default function InsightsModern() {
  return (
    <Box component="section" sx={{ ...textReset, width: "100%", boxSizing: "border-box", maxWidth: T.maxWidth, mx: "auto", px: { xs: 2, md: 4 }, py: { xs: 8, md: 11 } }}>
      <SectionHeader
        eyebrow="Engineering Insights"
        title="Valve Selection Guides and Technical Articles"
        action={
          <PillButton href="/news" variant="secondary">
            View All Articles
          </PillButton>
        }
      />
      <Box sx={swipeRow({ sm: "1fr 1fr", lg: "repeat(4, 1fr)" })}>
        {POSTS.slice(0, 4).map((post) => (
          <Box
            key={post.link}
            component={Link}
            href={post.link}
            aria-label={post.title}
            sx={{
              display: "flex",
              flexDirection: "column",
              ...CARD,
              "&:hover": CARD_HOVER,
              "&:hover img": { transform: "scale(1.04)" },
              "&:hover .read": { color: T.brandDark },
            }}
          >
            <Box sx={{ height: 170, overflow: "hidden", bgcolor: T.surface }}>
              <Box
                component="img"
                src={post.thumbnail}
                alt={post.title}
                loading="lazy"
                sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .4s ease" }}
              />
            </Box>
            <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", flex: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, fontSize: "0.75rem" }}>
                <Box component="span" sx={{ px: 1, py: 0.25, borderRadius: 999, bgcolor: ACCENT.light, color: ACCENT.text, fontWeight: 600 }}>
                  {post.category}
                </Box>
                <Box component="span" sx={{ color: T.muted }}>
                  {post.date}
                </Box>
              </Box>
              <Typography component="h3" sx={{ mt: 1.5, fontWeight: 700, fontSize: "1rem", lineHeight: 1.4, color: T.ink }}>
                {post.title}
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  flex: 1,
                  fontSize: "0.88rem",
                  lineHeight: 1.6,
                  color: T.body,
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {post.desc}
              </Typography>
              <Box
                className="read"
                sx={{ mt: 2, display: "inline-flex", alignItems: "center", gap: 0.5, fontWeight: 600, fontSize: "0.88rem", color: T.ink, transition: "color .2s" }}
              >
                Read article <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
