"use client";

import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { LATEST_INSIGHTS } from "./LatestInsightsData";
import Reveal from "@/src/app/Common/Reveal";

export default function LatestInsights() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "grey.50" }}>
      <Container maxWidth="lg">
        <Reveal>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
              mb: { xs: 3, md: 5 },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "primary.main",
                  mb: 0.5,
                }}
              >
                Engineering Insights ——
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontWeight: 900,
                  fontSize: { xs: 32, sm: 40, md: 56 },
                  lineHeight: 0.88,
                  textTransform: "uppercase",
                  color: "text.primary",
                }}
              >
                Latest From The Team
              </Typography>
            </Box>

            <Box
              component={Link}
              href="/news"
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: ".15em",
                textTransform: "uppercase",
                px: 3.5,
                py: 1.2,
                display: "inline-block",
                border: "1px solid",
                borderColor: "divider",
                color: "text.secondary",
                textDecoration: "none",
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "primary.main",
                  color: "primary.dark",
                },
              }}
            >
              View All Articles →
            </Box>
          </Box>
        </Reveal>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 2,
          }}
        >
          {LATEST_INSIGHTS.map((post, i) => (
            <Reveal key={post.link} delay={Math.min(i * 80, 320)}>
              <Box
                component={Link}
                href={post.link}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  bgcolor: "#fff",
                  border: "1px solid",
                  borderColor: "divider",
                  textDecoration: "none",
                  color: "inherit",
                  transition:
                    "transform 0.2s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                  "&:hover": {
                    borderColor: "primary.main",
                    transform: "translateY(-4px)",
                    boxShadow: "0 16px 36px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: 160,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={post.thumbnail}
                    alt={post.title}
                    loading="lazy"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      bgcolor: "primary.main",
                      color: "#fff",
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontWeight: 800,
                      fontSize: "10px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      px: 1,
                      py: 0.3,
                    }}
                  >
                    {post.category}
                  </Typography>
                </Box>

                <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <Typography
                    sx={{
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      lineHeight: 1.25,
                      color: "text.primary",
                      mb: 1,
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                      mb: 2,
                      flexGrow: 1,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {post.desc}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, opacity: 0.6 }}>
                    <AccessTimeIcon sx={{ fontSize: 13 }} />
                    <Typography
                      sx={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {post.date}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
