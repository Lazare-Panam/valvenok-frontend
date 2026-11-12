"use client";

// Multi-turn electric actuator on a rising-stem gate valve: the motor drives a
// worm gear, the drive sleeve turns many times, the threaded stem rises and
// lifts the gate out of the flow. A Hall encoder counts the turns. Used by ITM.

import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";
import { useInView } from "@/src/app/Common/LightMotion";

const BLUE = "#2F6FD1", BLUED = "#1F4F9C";
const CYCLE = "8s";

export default function MultiTurnDrive() {
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  const lbl = { fontSize: 15, fontWeight: 700, fill: T.body, fontFamily: "inherit" } as const;
  const run = (name: string, timing = "ease-in-out") => (on ? `${name} ${CYCLE} ${timing} infinite` : "none");
  // 0–6 shut · 6–44 opening · 44–56 open · 56–94 closing · 94–100 shut
  const lift = { "0%,6%": { transform: "translateY(0)" }, "44%,56%": { transform: "translateY(-58px)" }, "94%,100%": { transform: "translateY(0)" } };
  return (
    <Box ref={ref}>
      <Box
        component="svg"
        viewBox="0 0 420 372"
        role="img"
        aria-label="Multi-turn actuator on a gate valve: the motor drives a worm gear, the drive sleeve turns many times, and the threaded stem rises to lift the gate out of the flow; it turns back to lower the gate and close the valve"
        sx={{
          width: "100%", height: "auto", display: "block",
          "@keyframes mtLift": lift,
          "@keyframes mtThread": { "0%,6%": { transform: "translateY(0)" }, "44%,56%": { transform: "translateY(-120px)" }, "94%,100%": { transform: "translateY(0)" } },
          "@keyframes mtSpin": { "0%,6%": { transform: "rotate(0deg)" }, "44%,56%": { transform: "rotate(1440deg)" }, "94%,100%": { transform: "rotate(0deg)" } },
          "@keyframes mtFan": { "0%,6%": { opacity: 0.2 }, "8%,42%": { opacity: 1 }, "44%,56%": { opacity: 0.2 }, "58%,92%": { opacity: 1 }, "94%,100%": { opacity: 0.2 } },
          "@keyframes mtFlow": { "0%,20%": { opacity: 0 }, "40%,60%": { opacity: 1 }, "80%,100%": { opacity: 0 } },
          "@keyframes mtOpen": { "0%,36%": { opacity: 0 }, "42%,58%": { opacity: 1 }, "64%,100%": { opacity: 0 } },
          "@keyframes mtShut": { "0%,6%": { opacity: 1 }, "12%,88%": { opacity: 0 }, "94%,100%": { opacity: 1 } },
          "& .lift": { animation: run("mtLift") },
          "& .thr": { animation: run("mtThread") },
          "& .spin": { transformBox: "fill-box", transformOrigin: "center", animation: run("mtSpin") },
          "& .fan": { animation: run("mtFan", "linear"), opacity: on ? undefined : 0.2 },
          "& .flow": { animation: run("mtFlow", "linear"), opacity: on ? undefined : 0 },
          "& .lOpen": { animation: run("mtOpen", "linear"), opacity: on ? undefined : 0 },
          "& .lShut": { animation: run("mtShut", "linear"), opacity: on ? undefined : 1 },
          "@media (prefers-reduced-motion: reduce)": { "& *": { animation: "none !important" } },
        }}
      >
        <defs>
          <pattern id="mtThreadP" width="14" height="10" patternUnits="userSpaceOnUse" patternTransform="skewY(-18)">
            <rect width="14" height="10" fill="#C3CDD6" />
            <rect width="14" height="4" fill="#8C9AA8" />
          </pattern>
          <clipPath id="mtStemClip"><rect x="203" y="0" width="14" height="236" /></clipPath>
        </defs>

        {/* handwheel on top, turns with the sleeve */}
        <ellipse cx="210" cy="30" rx="58" ry="12" fill="none" stroke={T.ink} strokeWidth="5" />
        <path d="M152 30 H268" stroke={T.ink} strokeWidth="3" />
        <rect x="205" y="30" width="10" height="16" fill="#3F4A55" />

        {/* threaded stem rising */}
        <g clipPath="url(#mtStemClip)">
          <g className="lift">
            <rect x="203" y="40" width="14" height="200" fill="#C3CDD6" />
            <g className="thr"><rect x="203" y="0" width="14" height="380" fill="url(#mtThreadP)" opacity=".7" /></g>
          </g>
        </g>
        {/* actuator body */}
        <rect x="150" y="46" width="120" height="78" rx="16" fill="#5C6B7A" />
        <rect x="162" y="58" width="96" height="54" rx="10" fill="#6D7C8B" />
        {/* drive sleeve: turning marker */}
        <g className="spin">
          <circle cx="210" cy="85" r="20" fill="#8C9AA8" />
          <rect x="207" y="66" width="6" height="14" rx="2" fill="#fff" />
        </g>
        <text x="282" y="72" style={lbl}>Drive sleeve</text>
        <text x="282" y="90" style={{ ...lbl, fontSize: 13, fill: T.muted, fontWeight: 600 }}>turns many times</text>

        {/* motor */}
        <rect x="40" y="62" width="96" height="48" rx="12" fill={BLUE} />
        <rect x="40" y="62" width="14" height="48" rx="5" fill={BLUED} />
        {[0, 1, 2, 3].map((k) => <rect key={k} className="fan" x={64 + k * 16} y="70" width="6" height="32" rx="3" fill="#BFD4F5" />)}
        <rect x="136" y="80" width="14" height="12" fill="#7C8B9A" />
        <text x="88" y="134" textAnchor="middle" style={lbl}>Motor</text>

        {/* yoke */}
        <path d="M172 124 L172 206 M248 124 L248 206" stroke="#9AA9B6" strokeWidth="8" strokeLinecap="round" />

        <text x="282" y="166" style={lbl}>Rising stem</text>

        {/* valve body + pipe */}
        <rect x="20" y="236" width="380" height="58" fill="#EEF2F6" />
        <rect x="20" y="232" width="380" height="4" fill="#C9D3DD" />
        <rect x="20" y="294" width="380" height="4" fill="#C9D3DD" />
        <rect x="150" y="206" width="120" height="118" rx="16" fill="#E2554F" opacity=".14" stroke="#C2413B" strokeWidth="2" />
        <g className="flow">
          <path d="M34 265 H140 M280 265 H386" stroke="#7CB9F0" strokeWidth="6" strokeDasharray="10 8" strokeLinecap="round" />
        </g>
        {/* gate */}
        <g className="lift">
          <rect x="188" y="230" width="44" height="72" rx="6" fill="#5C6B7A" />
        </g>
        <text className="lShut" x="210" y="354" textAnchor="middle" style={{ ...lbl, fill: "#C2413B" }}>Gate down: shut</text>
        <text className="lOpen" x="210" y="354" textAnchor="middle" style={{ ...lbl, fill: T.greenDark }}>Gate lifted: open</text>
      </Box>
      <Box sx={{ mt: 1.5, display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2, fontSize: "0.8rem", fontWeight: 600, color: T.body }}>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: 2, bgcolor: BLUE }} /> Motor drives a worm gear
        </Box>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: 2, bgcolor: "#5C6B7A" }} /> Hall encoder counts every turn
        </Box>
      </Box>
    </Box>
  );
}
