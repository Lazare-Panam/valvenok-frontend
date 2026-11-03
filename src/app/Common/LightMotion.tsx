"use client";

// Shared light, animated look used by the About and Contact pages: soft
// pastel blobs, word-by-word headline, shimmering gradient text, scroll
// reveals. Wrap a page in <MotionRoot> to get the keyframes and the
// reduced-motion fallback.

import * as React from "react";
import { Box } from "@mui/material";
import { T } from "../Landing/modern/tokens";

export const L = {
  mint: "#EAF8E4",
  lime: "rgba(97,214,73,0.28)",
  sky: "rgba(140,205,255,0.30)",
  sun: "rgba(255,225,130,0.32)",
  cream: "#FBFDF8",
};

export const KF = {
  "@keyframes drift": {
    "0%": { transform: "translate(0,0) scale(1)", borderRadius: "42% 58% 60% 40% / 45% 45% 55% 55%" },
    "33%": { transform: "translate(40px,-30px) scale(1.08)", borderRadius: "60% 40% 35% 65% / 55% 60% 40% 45%" },
    "66%": { transform: "translate(-30px,25px) scale(0.95)", borderRadius: "38% 62% 55% 45% / 40% 55% 45% 60%" },
    "100%": { transform: "translate(0,0) scale(1)", borderRadius: "42% 58% 60% 40% / 45% 45% 55% 55%" },
  },
  "@keyframes floaty": { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
  "@keyframes wordIn": { from: { opacity: 0, transform: "translateY(0.5em)" }, to: { opacity: 1, transform: "none" } },
  "@keyframes shine": { "0%": { backgroundPosition: "0% 50%" }, "100%": { backgroundPosition: "200% 50%" } },
  "@keyframes draw": { from: { strokeDashoffset: 320 }, to: { strokeDashoffset: 0 } },
  "@keyframes spin": { to: { transform: "rotate(360deg)" } },
  "@keyframes marquee": { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
  "@keyframes pulseRing": { "0%": { boxShadow: "0 0 0 0 rgba(97,214,73,0.45)" }, "100%": { boxShadow: "0 0 0 14px rgba(97,214,73,0)" } },
  "@keyframes bgShift": { "0%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" }, "100%": { backgroundPosition: "0% 50%" } },
  "@keyframes sweep": { from: { transform: "translateX(-120%) skewX(-20deg)" }, to: { transform: "translateX(220%) skewX(-20deg)" } },
  "@keyframes wiggle": { "0%,100%": { transform: "rotate(0)" }, "25%": { transform: "rotate(-12deg)" }, "75%": { transform: "rotate(10deg)" } },
} as const;

export const gradientText = {
  background: `linear-gradient(90deg, ${T.greenDark}, #4CC23A, #7FD9A8, ${T.greenDark})`,
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  animation: "shine 4s linear infinite",
} as const;

export function MotionRoot({ children, sx }: { children: React.ReactNode; sx?: object }) {
  return (
    <Box
      sx={{
        ...KF,
        overflowX: "clip",
        "@media (prefers-reduced-motion: reduce)": { "& *": { animation: "none !important", transition: "none !important" } },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export function useInView<E extends Element>(threshold = 0.2) {
  const ref = React.useRef<E>(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return setOn(true);
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setOn(true), io.disconnect()), { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, on] as const;
}

type From = "up" | "left" | "right" | "zoom";
const FROM: Record<From, string> = { up: "translateY(28px)", left: "translateX(-40px)", right: "translateX(40px)", zoom: "scale(0.9)" };

export function Reveal({ children, delay = 0, from = "up" }: { children: React.ReactNode; delay?: number; from?: From }) {
  const [ref, on] = useInView<HTMLDivElement>(0.15);
  return (
    <Box
      ref={ref}
      sx={{
        height: "100%",
        opacity: on ? 1 : 0,
        transform: on ? "none" : FROM[from],
        transition: `opacity .7s cubic-bezier(.2,.8,.2,1) ${delay}ms, transform .8s cubic-bezier(.2,.8,.2,1) ${delay}ms`,
      }}
    >
      {children}
    </Box>
  );
}

export function Blob({ sx, color, dur = 18, delay = 0 }: { sx: object; color: string; dur?: number; delay?: number }) {
  return (
    <Box
      aria-hidden
      sx={{ position: "absolute", width: 420, height: 420, background: color, filter: "blur(60px)", animation: `drift ${dur}s ease-in-out ${delay}s infinite`, pointerEvents: "none", ...sx }}
    />
  );
}

/** Headline words that slide/blur in one after another */
export function Words({ text, start = 0, sx }: { text: string; start?: number; sx?: object }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <React.Fragment key={i}>
          <Box component="span" sx={{ display: "inline-block", animation: `wordIn .8s cubic-bezier(.2,.8,.2,1) ${start + i * 110}ms both`, ...sx }}>
            {w}
          </Box>{" "}
        </React.Fragment>
      ))}
    </>
  );
}

/** Hand-drawn underline that draws itself under the parent inline-block */
export function Squiggle({ delay = 0.9 }: { delay?: number }) {
  return (
    <Box component="svg" aria-hidden viewBox="0 0 300 20" preserveAspectRatio="none" sx={{ position: "absolute", left: 0, bottom: { xs: -8, md: -12 }, width: "100%", height: { xs: 12, md: 18 } }}>
      <path d="M4 14 C 60 2, 120 18, 180 8 S 270 4, 296 12" fill="none" stroke={T.green} strokeWidth="5" strokeLinecap="round" strokeDasharray="320" style={{ animation: `draw 1.2s ease ${delay}s both` }} />
    </Box>
  );
}

/** Pastel blobs + dot grid behind a hero */
export function LightBackdrop() {
  return (
    <>
      <Blob color={L.lime} sx={{ top: -140, left: -120 }} />
      <Blob color={L.sky} dur={22} delay={2} sx={{ top: 40, right: -160 }} />
      <Blob color={L.sun} dur={26} delay={4} sx={{ bottom: -200, left: "35%", width: 360, height: 360 }} />
      <Box aria-hidden sx={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(46,139,30,0.14) 1px, transparent 1px)", backgroundSize: "22px 22px", maskImage: "linear-gradient(180deg, black, transparent 85%)", pointerEvents: "none" }} />
    </>
  );
}
