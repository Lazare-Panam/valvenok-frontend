"use client";

import { useState, useRef, MouseEvent } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import { alpha } from "@mui/material/styles";

interface Props {
  imageUrl: string | null | undefined;
  alt: string;
}

export default function ProductImageZoom({ imageUrl, alt }: Props) {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [modalOpen, setModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const ZOOM_LEVEL = 2.5; // how much to zoom on hover

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  if (!imageUrl) {
    return (
      <Box
        sx={{
          width: { xs: "100%", md: 360 },
          flexShrink: 0,
          border: "1px solid",
          borderColor: "divider",
          aspectRatio: "1 / 1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: (t) => alpha(t.palette.text.primary, 0.02),
          p: 4,
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontSize: "12px",
            color: "text.secondary",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          No Image
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Box
        ref={containerRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
        onClick={() => setModalOpen(true)}
        sx={{
          width: { xs: "100%", md: 360 },
          flexShrink: 0,
          border: "1px solid",
          borderColor: "divider",
          aspectRatio: "1 / 1",
          position: "relative",
          overflow: "hidden",
          bgcolor: (t) => alpha(t.palette.text.primary, 0.02),
          cursor: isHovering ? "zoom-in" : "pointer",
          "&:hover": {
            borderColor: "primary.main",
          },
        }}
      >
        {/* The image — scales up on hover, transform-origin follows cursor */}
        <Box
          component="img"
          src={imageUrl}
          alt={alt}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            padding: "32px", // matches your existing p: 4
            transition: isHovering ? "none" : "transform 0.3s ease",
            transform: isHovering ? `scale(${ZOOM_LEVEL})` : "scale(1)",
            transformOrigin: `${position.x}% ${position.y}%`,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />

        {/* Magnifier icon — top right corner */}
        <Box
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            width: 36,
            height: 36,
            borderRadius: "50%",
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
            opacity: isHovering ? 0 : 1,
            transition: "opacity 0.2s ease",
            pointerEvents: "none",
          }}
        >
          <MagnifierIcon />
        </Box>

        {/* Hover hint — bottom of image */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: "rgba(0,0,0,0.7)",
            color: "white",
            py: 0.75,
            textAlign: "center",
            opacity: isHovering ? 1 : 0,
            transition: "opacity 0.2s ease",
            pointerEvents: "none",
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Click to view full size
          </Typography>
        </Box>
      </Box>

      {/* ─── FULLSCREEN MODAL ──────────────────────────────────── */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 2, md: 6 },
        }}
      >
        <Box
          onClick={() => setModalOpen(false)}
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "zoom-out",
            outline: "none",
          }}
        >
          <Box
            component="img"
            src={imageUrl}
            alt={alt}
            onClick={(e: MouseEvent) => e.stopPropagation()}
            sx={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              bgcolor: "background.paper",
              p: 4,
              border: "1px solid",
              borderColor: "divider",
              cursor: "default",
            }}
          />

          {/* Close button */}
          <IconButton
            onClick={() => setModalOpen(false)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              "&:hover": {
                bgcolor: "background.paper",
                borderColor: "primary.main",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
    </>
  );
}

// ─── INLINE SVG ICONS (no extra deps) ──────────────────────────
function MagnifierIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}