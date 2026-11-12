"use client";

// Danfoss PVE on a PVG valve section: the control signal sets the spool
// position. From the PVE control specification: neutral at 50% of supply
// voltage, flow P → A as the signal falls to 25%, P → B as it rises to 75%.
// An LVDT feeds the spool position back so the actuator holds it there.

import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";
import { useInView } from "@/src/app/Common/LightMotion";

const CYCLE = "9s";

export default function SpoolControl() {
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  const lbl = { fontSize: 15, fontWeight: 700, fill: T.body, fontFamily: "inherit" } as const;
  const run = (name: string, timing = "ease-in-out") => (on ? `${name} ${CYCLE} ${timing} infinite` : "none");
  // 0–14 neutral · 18–40 P→A · 44–58 neutral · 62–84 P→B · 88–100 neutral
  const spool = { "0%,14%": { transform: "translateX(0)" }, "20%,40%": { transform: "translateX(-46px)" }, "46%,58%": { transform: "translateX(0)" }, "64%,84%": { transform: "translateX(46px)" }, "90%,100%": { transform: "translateX(0)" } };
  const needle = { "0%,14%": { transform: "rotate(0deg)" }, "20%,40%": { transform: "rotate(-60deg)" }, "46%,58%": { transform: "rotate(0deg)" }, "64%,84%": { transform: "rotate(60deg)" }, "90%,100%": { transform: "rotate(0deg)" } };
  return (
    <Box ref={ref}>
      <Box
        component="svg"
        viewBox="0 0 420 340"
        role="img"
        aria-label="Danfoss PVE actuator on a PVG valve section: at 50 percent signal the spool sits in neutral; lowering the signal towards 25 percent moves the spool to send flow from P to A; raising it towards 75 percent sends flow from P to B"
        sx={{
          width: "100%", height: "auto", display: "block",
          "@keyframes scSpool": spool,
          "@keyframes scNeedle": needle,
          "@keyframes scA": { "0%,16%": { opacity: 0 }, "22%,38%": { opacity: 1 }, "44%,100%": { opacity: 0 } },
          "@keyframes scB": { "0%,60%": { opacity: 0 }, "66%,82%": { opacity: 1 }, "88%,100%": { opacity: 0 } },
          "@keyframes scN": { "0%,14%": { opacity: 1 }, "18%,42%": { opacity: 0 }, "46%,58%": { opacity: 1 }, "62%,86%": { opacity: 0 }, "90%,100%": { opacity: 1 } },
          "& .spool": { animation: run("scSpool") },
          "& .needle": { transformBox: "view-box", transformOrigin: "84px 118px", animation: run("scNeedle") },
          "& .fa": { animation: run("scA", "linear"), opacity: on ? undefined : 0 },
          "& .fb": { animation: run("scB", "linear"), opacity: on ? undefined : 0 },
          "& .fn": { animation: run("scN", "linear"), opacity: on ? undefined : 1 },
          "@media (prefers-reduced-motion: reduce)": { "& *": { animation: "none !important" } },
        }}
      >
        {/* control signal gauge */}
        <path d="M30 118 A54 54 0 0 1 138 118" fill="none" stroke="#E3EAE5" strokeWidth="12" strokeLinecap="round" />
        <path d="M30 118 A54 54 0 0 1 57 71" fill="none" stroke="#7CB9F0" strokeWidth="12" strokeLinecap="round" />
        <path d="M111 71 A54 54 0 0 1 138 118" fill="none" stroke="#F2B35B" strokeWidth="12" strokeLinecap="round" />
        <g className="needle"><path d="M84 118 L84 72" stroke={T.ink} strokeWidth="4" strokeLinecap="round" /></g>
        <circle cx="84" cy="118" r="7" fill={T.ink} />
        <text x="22" y="142" style={{ ...lbl, fontSize: 12 }}>25%</text>
        <text x="72" y="58" style={{ ...lbl, fontSize: 12 }}>50%</text>
        <text x="124" y="142" style={{ ...lbl, fontSize: 12 }}>75%</text>
        <text x="84" y="164" textAnchor="middle" style={lbl}>Control signal</text>
        <text x="84" y="181" textAnchor="middle" style={{ ...lbl, fontSize: 12, fill: T.muted, fontWeight: 600 }}>% of supply voltage</text>

        {/* PVE actuator block */}
        <rect x="200" y="22" width="190" height="62" rx="12" fill="#2C3136" />
        <text x="295" y="50" textAnchor="middle" style={{ ...lbl, fill: "#fff" }}>PVE actuator</text>
        <text x="295" y="70" textAnchor="middle" style={{ ...lbl, fontSize: 12, fill: "#AEB8C2", fontWeight: 600 }}>LVDT feeds back spool position</text>
        <path d="M150 104 C175 104 175 54 200 54" fill="none" stroke="#B7C3CF" strokeWidth="3" strokeDasharray="5 5" />
        <rect x="285" y="84" width="20" height="22" fill="#5C6B7A" />

        {/* PVG valve section with spool */}
        <rect x="200" y="106" width="190" height="64" rx="10" fill="#EEF2F6" stroke="#C9D3DD" strokeWidth="2" />
        <g className="spool">
          <rect x="222" y="126" width="146" height="24" rx="12" fill="#8C9AA8" />
          <rect x="258" y="122" width="16" height="32" rx="4" fill="#5C6B7A" />
          <rect x="316" y="122" width="16" height="32" rx="4" fill="#5C6B7A" />
        </g>
        <text x="194" y="204" textAnchor="end" style={lbl}>PVG spool</text>

        {/* ports */}
        <text x="232" y="236" textAnchor="middle" style={{ ...lbl, fill: "#2F6FD1" }}>A</text>
        <text x="295" y="236" textAnchor="middle" style={lbl}>P</text>
        <text x="358" y="236" textAnchor="middle" style={{ ...lbl, fill: "#B8741F" }}>B</text>
        <path d="M295 214 V170" stroke="#C9D3DD" strokeWidth="6" />
        <path d="M232 214 V170" stroke="#C9D3DD" strokeWidth="6" />
        <path d="M358 214 V170" stroke="#C9D3DD" strokeWidth="6" />

        {/* flow and state captions */}
        <g className="fa">
          <path d="M295 212 V176 M290 176 H238 M232 178 V214" stroke="#7CB9F0" strokeWidth="5" strokeDasharray="8 6" fill="none" strokeLinecap="round" />
          <text x="295" y="280" textAnchor="middle" style={{ ...lbl, fill: "#2F6FD1" }}>Signal to 25%: flow P → A</text>
        </g>
        <g className="fb">
          <path d="M295 212 V176 M300 176 H352 M358 178 V214" stroke="#F2B35B" strokeWidth="5" strokeDasharray="8 6" fill="none" strokeLinecap="round" />
          <text x="295" y="280" textAnchor="middle" style={{ ...lbl, fill: "#B8741F" }}>Signal to 75%: flow P → B</text>
        </g>
        <text className="fn" x="295" y="280" textAnchor="middle" style={lbl}>Signal at 50%: spool in neutral</text>
        <text x="210" y="320" textAnchor="middle" style={{ ...lbl, fontSize: 12, fill: T.muted, fontWeight: 600 }}>Proportional PVEM, PVEA, PVEH and PVES</text>
      </Box>
      <Box sx={{ mt: 1.5, display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2, fontSize: "0.8rem", fontWeight: 600, color: T.body }}>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: 2, bgcolor: "#7CB9F0" }} /> P → A
        </Box>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: 2, bgcolor: "#F2B35B" }} /> P → B
        </Box>
      </Box>
    </Box>
  );
}
