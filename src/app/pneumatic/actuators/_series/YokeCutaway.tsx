"use client";

// Animated scotch yoke cut-away: air drives the pistons, the pin turns the yoke 90°.
// Shared by the pneumatic scotch yoke series pages (PDS, HD, MHD).

import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";
import { useInView } from "@/src/app/Common/LightMotion";

/* ── Animated cut-away: air drives the pistons, the yoke turns the shaft 90° ── */
export default function YokeCutaway({ travel = "Output shaft turns 90°" }: { travel?: string }) {
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  const lbl = { fontSize: 13, fontWeight: 700, fill: T.body, fontFamily: "inherit" } as const;
  return (
    <Box ref={ref}>
      <Box
        component="svg"
        viewBox="0 0 420 330"
        role="img"
        aria-label="Cut-away of a scotch yoke actuator: air pushes the pistons, the piston rod's pin slides in the yoke slot and turns the output shaft a quarter turn"
        sx={{
          width: "100%", height: "auto", display: "block",
          "@keyframes ykRod": { "0%,12%": { transform: "translateX(-46px)" }, "45%,62%": { transform: "translateX(46px)" }, "95%,100%": { transform: "translateX(-46px)" } },
          "@keyframes ykArm": { "0%,12%": { transform: "rotate(-45deg)" }, "45%,62%": { transform: "rotate(45deg)" }, "95%,100%": { transform: "rotate(-45deg)" } },
          "@keyframes ykAirL": { "0%,10%": { opacity: 0 }, "15%,40%": { opacity: 1 }, "48%,100%": { opacity: 0 } },
          "@keyframes ykAirR": { "0%,62%": { opacity: 0 }, "67%,90%": { opacity: 1 }, "96%,100%": { opacity: 0 } },
          "& .rod": { transformBox: "view-box", animation: on ? "ykRod 6s ease-in-out infinite" : "none", transform: "translateX(-46px)" },
          "& .arm": { transformBox: "view-box", transformOrigin: "210px 220px", animation: on ? "ykArm 6s ease-in-out infinite" : "none", transform: "rotate(-45deg)" },
          "& .ind": { transformBox: "view-box", transformOrigin: "210px 52px", animation: on ? "ykArm 6s ease-in-out infinite" : "none", transform: "rotate(-45deg)" },
          "& .airL": { animation: on ? "ykAirL 6s ease-in-out infinite" : "none", opacity: 0 },
          "& .airR": { animation: on ? "ykAirR 6s ease-in-out infinite" : "none", opacity: 0 },
        }}
      >
        <defs>
          <linearGradient id="ykSteel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F6F9FB" />
            <stop offset=".5" stopColor="#DCE3EA" />
            <stop offset="1" stopColor="#B7C3CF" />
          </linearGradient>
        </defs>
        {/* cylinders */}
        <rect x="20" y="118" width="130" height="64" rx="10" fill="url(#ykSteel)" stroke="#7C8B9A" strokeWidth="2" />
        <rect x="270" y="118" width="130" height="64" rx="10" fill="url(#ykSteel)" stroke="#7C8B9A" strokeWidth="2" />
        <rect x="28" y="126" width="114" height="48" fill="#fff" />
        <rect x="278" y="126" width="114" height="48" fill="#fff" />
        {/* centre body */}
        <rect x="150" y="104" width="120" height="160" rx="14" fill="#E2554F" opacity=".14" stroke="#C2413B" strokeWidth="2" />
        {/* air in */}
        <path className="airL" d="M34 150 h50" stroke="#7CB9F0" strokeWidth="6" strokeLinecap="round" strokeDasharray="8 7" />
        <path className="airR" d="M386 150 h-50" stroke="#7CB9F0" strokeWidth="6" strokeLinecap="round" strokeDasharray="8 7" />
        {/* yoke arm (behind rod), pivoting on the shaft */}
        <g className="arm">
          <path d="M200 220 L200 120 Q210 104 220 120 L220 220 Z" fill={T.greenDark} />
          <rect x="205" y="122" width="10" height="70" rx="5" fill="#fff" />
        </g>
        {/* pistons + rod + roller pin */}
        <g className="rod">
          <rect x="96" y="128" width="16" height="44" rx="3" fill="#5C6B7A" />
          <rect x="308" y="128" width="16" height="44" rx="3" fill="#5C6B7A" />
          <rect x="112" y="145" width="196" height="10" rx="5" fill="#9AA9B6" />
          <circle cx="210" cy="150" r="9" fill="#F4C95D" stroke="#A06F1E" strokeWidth="2" />
        </g>
        {/* output shaft */}
        <circle cx="210" cy="220" r="16" fill="#fff" stroke="#5C6B7A" strokeWidth="3" />
        <rect x="203" y="213" width="14" height="14" rx="2" fill="#5C6B7A" />
        {/* position indicator on top */}
        <circle cx="210" cy="52" r="26" fill="#fff" stroke="#9AA9B6" strokeWidth="2" />
        <rect className="ind" x="206" y="30" width="8" height="44" rx="4" fill={T.green} />
        <text x="250" y="50" style={lbl}>Position</text>
        <text x="250" y="66" style={lbl}>indicator</text>
        {/* labels */}
        <text x="20" y="108" style={lbl}>Cylinder</text>
        <text x="40" y="214" style={lbl}>Piston</text>
        <path d="M80 208 L102 172" stroke="#B9C4CE" strokeDasharray="3 3" />
        <text x="290" y="246" style={lbl}>Yoke</text>
        <path d="M288 242 L222 206" stroke="#B9C4CE" strokeDasharray="3 3" />
        <text x="250" y="96" style={lbl}>Roller pin</text>
        <path d="M262 100 L218 144" stroke="#B9C4CE" strokeDasharray="3 3" />
        <text x="210" y="296" textAnchor="middle" style={lbl}>{travel}</text>
        <path d="M210 238 V280" stroke="#B9C4CE" strokeDasharray="3 3" />
      </Box>
      <Box sx={{ mt: 1.5, display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2, fontSize: "0.8rem", fontWeight: 600, color: T.body }}>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 18, height: 4, borderRadius: 2, bgcolor: "#7CB9F0" }} /> Air drives the pistons
        </Box>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#F4C95D", border: "2px solid #A06F1E" }} /> The pin turns the yoke
        </Box>
      </Box>
    </Box>
  );
}

