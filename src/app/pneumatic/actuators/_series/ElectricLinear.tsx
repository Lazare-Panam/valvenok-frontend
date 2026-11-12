"use client";

// Electric linear actuator on a globe valve: the motor drives the stem down at a
// steady speed; when the plug reaches the seat the disc springs compress and the
// force switch stops the motor at the set closing force. A display shows the
// position. Used by ITL. Figures from the ITL catalogue.

import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";
import { useInView } from "@/src/app/Common/LightMotion";

const RED = "#B7322A";
const CYCLE = "8s";

export default function ElectricLinear({ speed = "1.2 mm/s", display = "Position display" }: { speed?: string; display?: string }) {
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  const lbl = { fontSize: 15, fontWeight: 700, fill: T.body, fontFamily: "inherit" } as const;
  const run = (name: string, timing = "linear") => (on ? `${name} ${CYCLE} ${timing} infinite` : "none");
  // 0–6 open · 6–40 closing · 40–44 springs compress · 44–60 shut (force reached) · 60–94 opening · 94–100 open
  return (
    <Box ref={ref}>
      <Box
        component="svg"
        viewBox="0 0 420 360"
        role="img"
        aria-label="Electric linear actuator on a globe valve: the motor drives the stem down at a steady speed until the plug seats; the disc springs compress and the force switch stops the motor at the set closing force, then the stem drives back up to open"
        sx={{
          width: "100%", height: "auto", display: "block",
          "@keyframes elStem": { "0%,6%": { transform: "translateY(0)" }, "40%,60%": { transform: "translateY(54px)" }, "94%,100%": { transform: "translateY(0)" } },
          "@keyframes elForce": { "0%,42%": { opacity: 0 }, "45%,58%": { opacity: 1 }, "61%,100%": { opacity: 0 } },
          "@keyframes elFlow": { "0%,22%": { opacity: 1 }, "38%,64%": { opacity: 0 }, "80%,100%": { opacity: 1 } },
          "@keyframes elOpen": { "0%,4%": { opacity: 1 }, "10%,90%": { opacity: 0 }, "96%,100%": { opacity: 1 } },
          "@keyframes elMid": { "0%,8%": { opacity: 0 }, "12%,36%": { opacity: 1 }, "40%,62%": { opacity: 0 }, "66%,90%": { opacity: 1 }, "94%,100%": { opacity: 0 } },
          "@keyframes elShut": { "0%,38%": { opacity: 0 }, "42%,60%": { opacity: 1 }, "64%,100%": { opacity: 0 } },
          "& .stem": { animation: run("elStem", "ease-in-out") },
          "& .force": { animation: run("elForce"), opacity: on ? undefined : 0 },
          "& .flow": { animation: run("elFlow"), opacity: on ? undefined : 1 },
          "& .dOpen": { animation: run("elOpen"), opacity: on ? undefined : 1 },
          "& .dMid": { animation: run("elMid"), opacity: on ? undefined : 0 },
          "& .dShut": { animation: run("elShut"), opacity: on ? undefined : 0 },
          "@media (prefers-reduced-motion: reduce)": { "& *": { animation: "none !important" } },
        }}
      >
        {/* globe valve */}
        <rect x="20" y="276" width="380" height="50" fill="#EEF2F6" />
        <rect x="20" y="272" width="380" height="4" fill="#C9D3DD" />
        <rect x="20" y="326" width="380" height="4" fill="#C9D3DD" />
        <path d="M150 240 H270 V334 H150 Z" fill="#E2554F" opacity=".12" stroke="#C2413B" strokeWidth="2" />
        <rect x="190" y="322" width="40" height="6" rx="2" fill="#C2413B" />
        <g className="flow">
          <path d="M34 300 H140 M280 300 H386" stroke="#7CB9F0" strokeWidth="6" strokeDasharray="10 8" strokeLinecap="round" />
        </g>
        {/* pillars */}
        <rect x="166" y="124" width="10" height="110" rx="4" fill="#B7C3CF" />
        <rect x="244" y="124" width="10" height="110" rx="4" fill="#B7C3CF" />

        {/* moving stem + disc springs + plug */}
        <g className="stem">
          <rect x="203" y="70" width="14" height="114" fill="#9AA9B6" />
          <g>
            {[0, 1, 2, 3].map((k) => <path key={k} d={`M192 ${186 + k * 8} L228 ${186 + k * 8 + 4} M192 ${186 + k * 8 + 4} L228 ${186 + k * 8}`} stroke={T.green} strokeWidth="3" />)}
          </g>
          <rect x="203" y="218" width="14" height="38" fill="#9AA9B6" />
          <path d="M194 254 H226 L220 270 H200 Z" fill="#5C6B7A" />
        </g>
        <text x="284" y="200" style={lbl}>Disc springs</text>

        {/* actuator head with display */}
        <rect x="150" y="14" width="120" height="96" rx="26" fill={RED} />
        <rect x="150" y="84" width="120" height="40" rx="10" fill="#3A3F45" />
        <rect x="182" y="34" width="56" height="30" rx="6" fill="#2A2E33" />
        <g style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 18, fontWeight: 700 }}>
          <text className="dOpen" x="210" y="56" textAnchor="middle" fill="#F2F5F7">100</text>
          <text className="dMid" x="210" y="56" textAnchor="middle" fill="#F2F5F7">50</text>
          <text className="dShut" x="210" y="56" textAnchor="middle" fill="#F2F5F7">0</text>
        </g>
        <text x="284" y="44" style={lbl}>{display}</text>
        <text x="284" y="62" style={{ ...lbl, fontSize: 13, fill: T.muted, fontWeight: 600 }}>0–100%</text>

        {/* motor housing tag */}
        <rect x="80" y="70" width="58" height="28" rx="8" fill="#3A3F45" />
        <text x="109" y="89" textAnchor="middle" style={{ ...lbl, fontSize: 12, fill: "#fff" }}>Motor</text>
        <path d="M138 84 H150" stroke="#7C8B9A" strokeWidth="6" />

        {/* force switch note */}
        <g className="force">
          <rect x="18" y="186" width="136" height="28" rx="14" fill={T.greenSoft} stroke="#BFE3B4" />
          <text x="86" y="205" textAnchor="middle" style={{ ...lbl, fontSize: 13, fill: T.greenDark }}>Force switch: stop</text>
        </g>

        <text x="20" y="352" style={{ ...lbl, fontSize: 13, fill: T.muted, fontWeight: 600 }}>Globe valve</text>
        <text x="400" y="352" textAnchor="end" style={{ ...lbl, fontSize: 13, fill: T.muted, fontWeight: 600 }}>Stem moves at {speed}</text>
      </Box>
      <Box sx={{ mt: 1.5, display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2, fontSize: "0.8rem", fontWeight: 600, color: T.body }}>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: 2, bgcolor: "#9AA9B6" }} /> The stem moves in a straight line
        </Box>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: 2, bgcolor: T.green }} /> Springs set the seating force
        </Box>
      </Box>
    </Box>
  );
}
