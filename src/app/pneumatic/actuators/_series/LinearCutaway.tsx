"use client";

// Animated linear piston actuator cut-away: air on top drives the piston and stem
// down to close the valve, air underneath drives it back up. Used by PLDS (air)
// and HLDA (oil: the full bore closes, the rod side opens, so closing thrust is higher).

import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";
import { useInView } from "@/src/app/Common/LightMotion";

export default function LinearCutaway({ medium = "air" }: { medium?: "air" | "oil" }) {
  const oil = medium === "oil";
  const C = oil ? "#E2A93B" : "#7CB9F0";
  const M = oil ? "Oil" : "Air";
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  const lbl = { fontSize: 13, fontWeight: 700, fill: T.body, fontFamily: "inherit" } as const;
  return (
    <Box ref={ref}>
      <Box
        component="svg"
        viewBox="0 0 420 340"
        role="img"
        aria-label={`Cut-away of a linear piston actuator: ${M.toLowerCase()} above the piston pushes the stem down to close the valve, ${M.toLowerCase()} below lifts it to open`}
        sx={{
          width: "100%", height: "auto", display: "block",
          "@keyframes lnMove": { "0%,12%": { transform: "translateY(0)" }, "42%,62%": { transform: "translateY(52px)" }, "92%,100%": { transform: "translateY(0)" } },
          "@keyframes lnTop": { "0%,10%": { opacity: 0 }, "15%,38%": { opacity: 1 }, "45%,100%": { opacity: 0 } },
          "@keyframes lnBot": { "0%,62%": { opacity: 0 }, "67%,88%": { opacity: 1 }, "94%,100%": { opacity: 0 } },
          "& .mv": { transformBox: "view-box", animation: on ? "lnMove 6s ease-in-out infinite" : "none" },
          "& .airT": { animation: on ? "lnTop 6s ease-in-out infinite" : "none", opacity: 0 },
          "& .airB": { animation: on ? "lnBot 6s ease-in-out infinite" : "none", opacity: 0 },
        }}
      >
        <defs>
          <linearGradient id="lnSteel" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#DCE3EA" />
            <stop offset=".5" stopColor="#F8FAFC" />
            <stop offset="1" stopColor="#B7C3CF" />
          </linearGradient>
        </defs>
        {/* cylinder with flanges and tie rods */}
        <rect x="120" y="20" width="180" height="16" rx="4" fill="#5C6B7A" />
        <rect x="120" y="150" width="180" height="16" rx="4" fill="#5C6B7A" />
        <rect x="134" y="36" width="152" height="114" fill="url(#lnSteel)" stroke="#7C8B9A" strokeWidth="2" />
        <rect x="142" y="36" width="136" height="114" fill="#fff" />
        <rect x="126" y="36" width="5" height="114" fill="#9AA9B6" />
        <rect x="289" y="36" width="5" height="114" fill="#9AA9B6" />
        {/* air ports */}
        <path className="airT" d="M60 48 H142" stroke={C} strokeWidth="6" strokeLinecap="round" strokeDasharray="8 7" />
        <path className="airB" d="M360 138 H278" stroke={C} strokeWidth="6" strokeLinecap="round" strokeDasharray="8 7" />
        {/* yoke frame */}
        <path d="M150 166 L150 236 M270 166 L270 236" stroke="#9AA9B6" strokeWidth="8" strokeLinecap="round" />
        <rect x="140" y="232" width="140" height="12" rx="3" fill="#7C8B9A" />
        {/* piston + stem + plug, moving together */}
        <g className="mv">
          <rect x="144" y="52" width="132" height="22" rx="4" fill={T.greenDark} />
          <rect x="203" y="74" width="14" height="196" rx="3" fill="#9AA9B6" />
          <rect x="188" y="172" width="44" height="6" rx="2" fill={T.green} />
          <path d="M196 270 H224 L218 286 H202 Z" fill="#5C6B7A" />
        </g>
        {/* valve body */}
        <rect x="120" y="256" width="180" height="70" rx="12" fill="#E2554F" opacity=".12" stroke="#C2413B" strokeWidth="2" />
        <path d="M120 300 H192 L198 306 M300 300 H228 L222 306" stroke="#C2413B" strokeWidth="2" fill="none" />
        {/* labels */}
        <text x="310" y="64" style={lbl}>Piston</text>
        <path d="M306 60 L278 62" stroke="#B9C4CE" strokeDasharray="3 3" />
        <text x="16" y="40" style={lbl}>{M}: close</text>
        <text x="320" y="128" style={lbl}>{M}: open</text>
        <text x="300" y="186" style={lbl}>Stem &amp; travel</text>
        <text x="300" y="202" style={lbl}>indicator</text>
        <path d="M296 184 L234 176" stroke="#B9C4CE" strokeDasharray="3 3" />
        <text x="16" y="216" style={lbl}>Yoke</text>
        <path d="M54 212 L146 206" stroke="#B9C4CE" strokeDasharray="3 3" />
        <text x="16" y="296" style={lbl}>Valve</text>
      </Box>
      <Box sx={{ mt: 1.5, display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2, fontSize: "0.8rem", fontWeight: 600, color: T.body }}>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 18, height: 4, borderRadius: 2, bgcolor: C }} /> {M} drives the piston
        </Box>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: 2, bgcolor: T.greenDark }} /> The stem moves in a straight line
        </Box>
      </Box>
    </Box>
  );
}
