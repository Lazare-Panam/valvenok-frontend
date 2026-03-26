import { Box } from "@mui/material";
import { useRef, useState } from "react";

const GlassMagnifier = ({ src, alt }: { src: string; alt: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Change: Use React.MouseEvent instead of the native MouseEvent
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Logic remains the same
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    
    setPosition({ x, y });
  };

  return (
    <Box
      ref={containerRef}
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        cursor: "crosshair",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "white",
        overflow: "hidden"
      }}
    >
      <Box 
        component="img" 
        src={src} 
        alt={alt} 
        sx={{ maxWidth: "80%", maxHeight: "80%", objectFit: "contain" }} 
      />
      {showMagnifier && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            backgroundImage: `url(${src})`,
            backgroundPosition: `${position.x}% ${position.y}%`,
            backgroundSize: "250%",
            backgroundRepeat: "no-repeat",
            bgcolor: "white"
          }}
        />
      )}
    </Box>
  );
};

export default GlassMagnifier;