"use client";

import { useRef, useState } from "react";
import { Box } from "@mui/material";

export default function MagneticWrap({
  children,
  strength = 0.25,
}: {
  children: React.ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate(0px, 0px)");
  const [transition, setTransition] = useState(
    "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
  );

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setTransition("transform 0.15s ease");
    setTransform(`translate(${x}px, ${y}px)`);
  };

  const handleLeave = () => {
    setTransition("transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)");
    setTransform("translate(0px, 0px)");
  };

  return (
    <Box
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      sx={{ display: "inline-block", transform, transition }}
    >
      {children}
    </Box>
  );
}
