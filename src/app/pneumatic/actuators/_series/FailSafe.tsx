"use client";

// MPLDS hero visual: spring return fail-safe. Air under the piston lifts the stem
// and compresses the spring (valve open); when air is lost the spring drives the
// stem down and closes the valve.

import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";
import { useInView } from "@/src/app/Common/LightMotion";

export default function FailSafe() {
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  const lbl = { fontSize: 13, fontWeight: 700, fill: T.body, fontFamily: "inherit" } as const;
  const a = (n: string) => (on ? `${n} 7s ease-in-out infinite` : "none");
  // piston/stem: up (open) while air is on, down (closed) after air is lost
  return (
    <Box ref={ref}>
      <Box
        component="svg"
        viewBox="0 0 420 330"
        role="img"
        aria-label="Spring return fail-safe: air under the piston opens the valve and compresses the spring; when the air supply is lost the spring pushes the stem down and closes the valve"
        sx={{
          width: "100%", height: "auto", display: "block",
          "@keyframes fsMove": { "0%,8%": { transform: "translateY(0)" }, "22%,55%": { transform: "translateY(-46px)" }, "64%,100%": { transform: "translateY(0)" } },
          "@keyframes fsSpring": { "0%,8%": { transform: "scaleY(1)" }, "22%,55%": { transform: "scaleY(0.6)" }, "64%,100%": { transform: "scaleY(1)" } },
          "@keyframes fsAir": { "0%,8%": { opacity: 0 }, "12%,55%": { opacity: 1 }, "58%,100%": { opacity: 0 } },
          "@keyframes fsOpen": { "0%,18%": { opacity: 0 }, "24%,54%": { opacity: 1 }, "58%,100%": { opacity: 0 } },
          "@keyframes fsLost": { "0%,56%": { opacity: 0 }, "60%,96%": { opacity: 1 }, "100%": { opacity: 0 } },
          "& .mv": { transformBox: "view-box", animation: a("fsMove") },
          "& .spring": { transformBox: "view-box", transformOrigin: "210px 40px", animation: a("fsSpring") },
          "& .air": { animation: a("fsAir"), opacity: 0 },
          "& .open": { animation: a("fsOpen"), opacity: 0 },
          "& .lost": { animation: a("fsLost"), opacity: on ? 0 : 1 },
        }}
      >
        <defs>
          <linearGradient id="fsAl" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#E9EEF3" />
            <stop offset=".5" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#C9D3DC" />
          </linearGradient>
        </defs>
        {/* aluminium cylinder */}
        <rect x="130" y="28" width="160" height="12" rx="4" fill="#5C6B7A" />
        <rect x="130" y="176" width="160" height="12" rx="4" fill="#5C6B7A" />
        <rect x="140" y="40" width="140" height="136" fill="url(#fsAl)" stroke="#9AA9B6" strokeWidth="2" />
        {/* spring, above the piston */}
        <g className="spring">
          <path d="M210 40 l-44 10 l88 12 l-88 12 l88 12 l-88 12 l88 12 l-88 12 l44 6" fill="none" stroke="#C2413B" strokeWidth="3.5" strokeLinejoin="round" />
        </g>
        {/* air in under the piston */}
        <path className="air" d="M40 166 H150" stroke="#7CB9F0" strokeWidth="6" strokeLinecap="round" strokeDasharray="8 7" />
        <text className="air" x="40" y="154" style={lbl}>Air in</text>
        {/* piston + stem + plug */}
        <g className="mv">
          <rect x="146" y="140" width="128" height="18" rx="4" fill={T.greenDark} />
          <rect x="203" y="158" width="14" height="118" rx="3" fill="#9AA9B6" />
          <path d="M194 276 H226 L219 292 H201 Z" fill="#5C6B7A" />
        </g>
        {/* valve body */}
        <rect x="120" y="262" width="180" height="60" rx="12" fill="#E2554F" opacity=".12" stroke="#C2413B" strokeWidth="2" />
        <path d="M120 300 H192 L198 306 M300 300 H228 L222 306" stroke="#C2413B" strokeWidth="2" fill="none" />
        {/* labels */}
        <text x="300" y="80" style={lbl}>Spring</text>
        <path d="M296 76 L256 82" stroke="#B9C4CE" strokeDasharray="3 3" />
        <text x="300" y="152" style={lbl}>Piston</text>
        <text x="20" y="300" style={lbl}>Valve</text>
        {/* state badges */}
        <g className="open">
          <rect x="300" y="206" width="104" height="28" rx="14" fill={T.greenSoft} stroke={T.green} />
          <text x="352" y="224" textAnchor="middle" style={{ ...lbl, fill: T.greenDark }}>Air on: open</text>
        </g>
        <g className="lost">
          <rect x="296" y="206" width="112" height="28" rx="14" fill="#FDECEA" stroke="#E2554F" />
          <text x="352" y="224" textAnchor="middle" style={{ ...lbl, fill: "#C2413B" }}>Air lost: closed</text>
        </g>
      </Box>
      <Box sx={{ mt: 1.5, display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2, fontSize: "0.8rem", fontWeight: 600, color: T.body }}>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 18, height: 4, borderRadius: 2, bgcolor: "#7CB9F0" }} /> Air opens the valve
        </Box>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: "50%", border: "2px solid #E2554F" }} /> The spring closes it if air fails
        </Box>
      </Box>
    </Box>
  );
}
