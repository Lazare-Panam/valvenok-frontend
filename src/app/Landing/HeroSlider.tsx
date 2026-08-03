"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { motion, AnimatePresence } from "framer-motion";

// ── CONFIGURATION (Updated with custom btnText) ──────────────────────────────
const SLIDES = [
  {
    id: 1,
    duration: 12000,
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/certfiicates/walurs-pumps-banner.webp",
    upperTag: "AUTHORIZED DISTRIBUTOR",
    title: "TAIWAN PRECISION",
    accent: "DIRECTLY TO YOU ",
    description:
      "As an authorized distributor of Taiwan's leading valve manufacturers, Valvenok brings you precision-engineered solutions — directly, without the middleman. From safety relief to control valves, subsea systems to nuclear-grade components, our curated portfolio of 32 world-class brands delivers the certifications and engineering pedigree your projects demand. One trusted source. Zero compromise.",
    href: "/brands",
    btnText: "View Our Brands",
    alt: "Global engineering brand logos and components",
  },
  {
    id: 2,
    duration: 8000,
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/banner-images/Process-valves.jpeg",
    upperTag: "ESTABLISHED 1998",
    tag: "UK Industrial Supplier",
    title: "Precision Pumps & Valves",
    accent: "Sourced & Supplied",
    description:
      "High-performance Hydraulic and Pneumatic solutions. We leverage a Global Network to source and supply specialist instrumentation components for your specific requirements.",
    href: "/categories/mechanical-seals",
    btnText: "View Pumps",
    alt: "Industrial precision pump assembly",
  },
  {
    id: 3,
    duration: 8000,
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/banner-images/Mars.jpeg",
    upperTag: "PROCESS SOLUTIONS",
    tag: "INDUSTRIAL FLOW CONTROL",
    title: "Process Valves",
    accent: "Precision Under Pressure",
    description:
      "Comprehensive process valve solutions for industrial applications. Designed for reliable flow control, isolation, and regulation across demanding manufacturing, chemical, energy, and processing environments.",
    href: "/valves",
    btnText: "View Process Valves",
    alt: "Industrial process valve installation",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDES[index].duration);
    return () => clearInterval(timer);
  }, [nextSlide, index]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "85vh",
        minHeight: "700px",
        overflow: "hidden",
        bgcolor: "#000",
      }}
    >
      <AnimatePresence mode="wait">
        <Box
          key={index}
          sx={{ width: "100%", height: "100%", position: "relative" }}
        >
          {/* 1. BACKGROUND IMAGE WITH AGGRESSIVE ZOOM */}
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1.25, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              scale: { duration: 10, ease: "linear" },
              opacity: { duration: 1 },
            }}
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${SLIDES[index].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",
            }}
          />

          {/* 2. OVERLAY GRADIENTS */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%)",
              zIndex: 1,
            }}
          />

          {/* 4. CONTENT LAYER */}
          <Container
            maxWidth="lg"
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              position: "relative",
              zIndex: 5,
            }}
          >
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              sx={{ maxWidth: 850 }}
            >
              {/* Upper Tag */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Typography
                  sx={{
                    color: "#61D649",
                    fontSize: "16px",
                    fontWeight: 800,
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    mb: 1,
                    fontFamily: '"Barlow Condensed", sans-serif',
                  }}
                >
                  {SLIDES[index].upperTag}
                </Typography>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontWeight: 900,
                    fontSize: { xs: "3.5rem", md: "6rem" },
                    color: "#fff",
                    lineHeight: 0.85,
                    textTransform: "uppercase",
                    mb: 3,
                  }}
                >
                  {SLIDES[index].title} <br />
                  <Box
                    component="span"
                    sx={{
                      color: "#61D649",
                      textShadow: "0px 0px 20px rgba(97, 214, 73, 0.3)",
                    }}
                  >
                    {SLIDES[index].accent}
                  </Box>
                </Typography>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "1.4rem",
                    mb: 5,
                    maxWidth: 650,
                    lineHeight: 1.4,
                    fontWeight: 300,
                    borderLeft: "2px solid #61D649",
                    pl: 3,
                  }}
                >
                  {SLIDES[index].description}
                </Typography>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: 1 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  href={SLIDES[index].href}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: "#61D649",
                    color: "#ffffff",
                    fontWeight: 900,
                    fontFamily: '"Barlow Condensed"',
                    px: 6,
                    py: 2.5,
                    fontSize: "1.2rem",
                    borderRadius: 0,
                    "&:hover": { bgcolor: "#fff", color: "#000" },
                  }}
                >
                  {/* Dynamically rendered custom text */}
                  {SLIDES[index].btnText}
                </Button>
              </motion.div>
            </Box>
          </Container>
        </Box>
      </AnimatePresence>

      {/* 5. NAVIGATION CONTROLS */}
      <Stack
        direction="row"
        sx={{ position: "absolute", bottom: 0, right: 0, zIndex: 10 }}
      >
        <IconButton
          onClick={prevSlide}
          sx={{
            width: 80,
            height: 80,
            borderRadius: 0,
            color: "#fff",
            bgcolor: "rgba(255,255,255,0.05)",
            "&:hover": { bgcolor: "#61D649", color: "#000" },
          }}
        >
          <ChevronLeftIcon fontSize="large" />
        </IconButton>

        <IconButton
          onClick={nextSlide}
          sx={{
            width: 80,
            height: 80,
            borderRadius: 0,
            color: "#fff",
            bgcolor: "rgba(255,255,255,0.1)",
            "&:hover": { bgcolor: "#61D649", color: "#000" },
          }}
        >
          <ChevronRightIcon fontSize="large" />
        </IconButton>
      </Stack>

      {/* 6. VERTICAL INDICATORS */}
      <Stack
        direction="column"
        spacing={2}
        sx={{
          position: "absolute",
          right: 40,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      >
        {SLIDES.map((_, i) => (
          <Box
            key={i}
            onClick={() => setIndex(i)}
            sx={{
              width: "4px",
              height: index === i ? 40 : 20,
              bgcolor: index === i ? "#61D649" : "rgba(255,255,255,0.2)",
              cursor: "pointer",
              transition: "all 0.4s ease",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}
