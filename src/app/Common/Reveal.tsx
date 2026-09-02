"use client";

import { useEffect, useRef, useState } from "react";
import { Box, type SxProps, type Theme } from "@mui/material";

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  sx,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  sx?: SxProps<Theme>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={[
        {
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : `translateY(${y}px)`,
          transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  );
}
