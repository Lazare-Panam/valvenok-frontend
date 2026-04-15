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
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776243427/david-birozy-O01Y_baYOfo-unsplash_lbvtz9.jpg",
    upperTag: "AUTHORIZED DISTRIBUTOR",
    tag: "JUST ANNOUNCED",
    title: "16 NEW PUMP & VALVES",
    accent: "FROM LEADING MANUFACTURERS",
    description: "We're proud to announce that Valvenok has partnered with 16 world-class valve and process equipment manufacturers. From safety relief to control valves, subsea systems to nuclear-grade components — these brands bring the depth, certifications, and engineering pedigree our clients demand. All now available through a single, trusted source.",
    href: "/brands",
    btnText: "View Our Brands",
    alt: "Global engineering brand logos and components"
  },
  {
    id: 2,
    duration: 8000,
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776242864/the-blowup-qafbp6O0Rr0-unsplash_chxm7c.jpg",
    upperTag: "ESTABLISHED 1998",
    tag: "UK Industrial Supplier",
    title: "Precision Pumps & Valves",
    accent: "Sourced & Supplied",
    description: "High-performance Hydraulic and Pneumatic solutions. We leverage a Global Network to source and supply specialist instrumentation components for your specific requirements.",
    href: "/categories/mechanical-seals",
    btnText: "View Pumps",
    alt: "Industrial precision pump assembly"
  },
  {
    id: 3,
    duration: 8000,
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776242606/camara-negra-gdeNXROgblU-unsplash_xp501w.jpg",
    upperTag: "OFFSHORE SOLUTIONS",
    tag: "JOSCAR REGISTERED",
    title: "Marine Valves & Controls",
    accent: "Built for the Extremes",
    description: "Specialist valve solutions for marine and offshore applications. Corrosion-resistant materials engineered to perform in the harshest salt-water environments.",
    href: "/marine-valves",
    btnText: "View Marine Valves",
    alt: "Heavy duty marine grade valve system"
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
              background: "linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%)",
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
                    color: "#000",
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


{/* 7. HIGH-VISIBILITY JOSCAR BADGE (TOP RIGHT) */}
<Box
  component={motion.a}
  href="https://res.cloudinary.com/dm9rmmemx/image/upload/v1776244520/65058387-e24c-4e34-8fab-26245a2e0d2a_wdr0o5.jpg"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ y: -20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 1.2 }}
  sx={{
    position: "absolute",
    top: 40, 
    right: 80, // Tucked away from the center but clearly visible
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    bgcolor: "rgba(0,0,0,0.8)",
    backdropFilter: "blur(10px)",
    borderLeft: "4px solid #61D649", // Accent bar instead of full border
    p: "12px 20px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    "&:hover": {
      bgcolor: "rgba(0,0,0,1)",
      "& .logo-box": { transform: "scale(1.1)" }
    },
  }}
>
  <Stack direction="row" spacing={2} alignItems="center">
    <Box 
      className="logo-box"
      sx={{ 
        height: 50, 
        width: 50, 
        bgcolor: "#fff", 
        p: 0.5, 
        transition: "transform 0.3s ease" 
      }}
    >
      <Box 
        component="img" 
        src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1776244520/65058387-e24c-4e34-8fab-26245a2e0d2a_wdr0o5.jpg" 
        alt="JOSCAR"
        sx={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </Box>
    <Box>
      <Typography
        sx={{
          color: "#61D649",
          fontSize: "0.75rem",
          fontWeight: 900,
          letterSpacing: "0.2em",
          lineHeight: 1,
          fontFamily: '"Barlow Condensed", sans-serif',
        }}
      >
        ACTIVE REGISTRATION
      </Typography>
      <Typography
        sx={{
          color: "#fff",
          fontSize: "1.1rem",
          fontWeight: 700,
          fontFamily: '"Barlow Condensed", sans-serif',
        }}
      >
        JOSCAR REGISTERED
      </Typography>
    </Box>
  </Stack>
</Box>

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