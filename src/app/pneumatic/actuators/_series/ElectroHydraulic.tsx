"use client";

// Electro-hydraulic part-turn actuator (PANDA, PA), drawn as a schematic like
// the brochure's: a motor drives the pump, oil goes through the control valve
// to the actuator, which turns the valve 90°.
// Double acting: a reversible pump drives oil one way to open and the other
// way to close. Spring return: oil opens against the spring, the solenoid
// valve holds the position, and when it releases the spring closes the valve
// and the oil returns to the tank.

import { useState } from "react";
import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";
import { useInView } from "@/src/app/Common/LightMotion";

const RED = "#C8352B", REDD = "#9E2A22", OIL = "#E2A93B", GREEN = "#2E7D32";
type Mode = "da" | "sr";
type Frames = Record<string, Record<string, string | number>>;

export default function ElectroHydraulic({ pressure = "max 8 bar" }: { pressure?: string }) {
  const [mode, setMode] = useState<Mode>("da");
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  const sr = mode === "sr";
  const lbl = { fontSize: 15, fontWeight: 700, fill: T.body, fontFamily: "inherit" } as const;
  const small = { ...lbl, fontSize: 12.5, fill: T.muted, fontWeight: 600 } as const;
  const run = (name: string, timing = "ease-in-out") => (on ? `${name} 9s ${timing} infinite` : "none");
  const op = (o: number) => ({ opacity: o });
  const rot = (d: number) => ({ transform: `rotate(${d}deg)` });

  // 0–8 shut · 8–40 opening · 40–56 open, held · 56–90 closing · 90–100 shut
  const K: Record<string, Frames> = {
    turn: { "0%,8%": rot(0), "40%,56%": rot(90), "90%,100%": rot(0) },
    spring: { "0%,8%": { transform: "scaleX(1)" }, "40%,56%": { transform: "scaleX(.55)" }, "90%,100%": { transform: "scaleX(1)" } },
    pump: sr
      ? { "0%,8%": rot(0), "40%": rot(1080), "40.01%,100%": rot(1080) }
      : { "0%,8%": rot(0), "40%,56%": rot(1080), "90%,100%": rot(0) },
    flowA: { "0%,8%": op(0), "10%,38%": op(1), "41%,100%": op(0) },
    flowB: sr ? { "0%,100%": op(0) } : { "0%,56%": op(0), "58%,88%": op(1), "91%,100%": op(0) },
    flowR: sr ? { "0%,56%": op(0), "58%,88%": op(1), "91%,100%": op(0) } : { "0%,100%": op(0) },
    motor: sr ? { "0%,8%": op(0), "10%,38%": op(1), "41%,100%": op(0) } : { "0%,8%": op(0), "10%,38%": op(1), "41%,56%": op(0), "58%,88%": op(1), "91%,100%": op(0) },
    c1: { "0%,6%": op(1), "8%,100%": op(0) },
    c2: { "0%,8.5%": op(0), "10.5%,36%": op(1), "38%,100%": op(0) },
    c3: { "0%,38.5%": op(0), "40.5%,53%": op(1), "55%,100%": op(0) },
    c4: { "0%,55.5%": op(0), "57.5%,87%": op(1), "89%,100%": op(0) },
    c5: { "0%,89.5%": op(0), "91.5%,100%": op(1) },
  };
  const caps = sr
    ? ["Valve shut", "Motor runs: oil opens the valve and loads the spring", "Open: the solenoid valve holds it", "Solenoid releases: the spring shuts the valve", "Valve shut"]
    : ["Valve shut", "Pump forward: oil opens the valve", "Open: motor stops, the position holds", "Pump reverses: oil closes the valve", "Valve shut"];

  const PX = 70, PY = 176; // pump
  const AX = 300, AY = 150; // actuator output
  const VX = 316, VY = 300; // valve disc

  return (
    <Box ref={ref}>
      <Box role="tablist" aria-label="Actuator type" sx={{ display: "flex", gap: 1, mb: 1.5, justifyContent: "center" }}>
        {(["da", "sr"] as Mode[]).map((m) => (
          <Box
            key={m}
            component="button"
            role="tab"
            aria-selected={mode === m}
            onClick={() => setMode(m)}
            sx={{ cursor: "pointer", font: "inherit", fontSize: "0.82rem", fontWeight: 700, px: 1.75, py: 0.75, borderRadius: 999, border: `1px solid ${mode === m ? T.greenDark : T.border}`, bgcolor: mode === m ? T.greenSoft : "#fff", color: mode === m ? T.greenDark : T.body }}
          >
            {m === "da" ? "Double acting" : "Spring return"}
          </Box>
        ))}
      </Box>
      <Box
        key={mode}
        component="svg"
        viewBox="0 0 420 372"
        role="img"
        aria-label={
          sr
            ? "Spring return electro-hydraulic actuator: the motor and pump send oil to open the valve and load the spring; the solenoid valve holds it open; when it releases, the spring closes the valve and the oil returns to the tank"
            : "Double acting electro-hydraulic actuator: the reversible pump sends oil one way to open the valve 90 degrees, then reverses to close it"
        }
        sx={{
          width: "100%", height: "auto", display: "block",
          ...Object.fromEntries(Object.entries(K).map(([k, v]) => [`@keyframes eh${k}`, v])),
          "& .turn": { transformBox: "view-box", transformOrigin: `${AX}px ${AY}px`, animation: run("ehturn") },
          "& .disc": { transformBox: "view-box", transformOrigin: `${VX}px ${VY}px`, animation: run("ehturn") },
          "& .spring": { transformBox: "fill-box", transformOrigin: "right center", animation: run("ehspring") },
          "& .pump": { transformBox: "view-box", transformOrigin: `${PX}px ${PY}px`, animation: run("ehpump") },
          "& .fA": { animation: run("ehflowA", "linear") }, "& .fB": { animation: run("ehflowB", "linear") }, "& .fR": { animation: run("ehflowR", "linear") },
          "& .motorOn": { animation: run("ehmotor", "linear") },
          "& .dash": { strokeDasharray: "8 7", animation: on ? "ehDash .6s linear infinite" : "none" },
          "@keyframes ehDash": { to: { strokeDashoffset: -15 } },
          ...Object.fromEntries([1, 2, 3, 4, 5].map((n) => [`& .c${n}`, { animation: run(`ehc${n}`, "linear"), opacity: on ? undefined : n === 1 ? 1 : 0 }])),
          "@media (prefers-reduced-motion: reduce)": { "& *": { animation: "none !important" } },
        }}
      >
        {/* motor */}
        <rect x="20" y="24" width="100" height="64" rx="10" fill={RED} />
        <path d="M34 40 H106 M34 52 H106 M34 64 H106 M34 76 H106" stroke={REDD} strokeWidth="3" />
        <text x="128" y="62" style={small}>Motor</text>
        <circle className="motorOn" cx="112" cy="30" r="6" fill="#7EE06A" opacity="0" />
        <rect x="64" y="88" width="12" height="62" fill="#9AA9B6" />

        {/* pump */}
        <circle cx={PX} cy={PY} r="26" fill="#fff" stroke="#5C6B7A" strokeWidth="3" />
        <g className="pump">{[0, 60, 120].map((a) => <path key={a} d={`M${PX - 18} ${PY} L${PX + 18} ${PY}`} transform={`rotate(${a} ${PX} ${PY})`} stroke="#5C6B7A" strokeWidth="5" strokeLinecap="round" />)}</g>
        <text x={PX - 30} y={PY + 4} textAnchor="end" style={small}>Pump</text>

        {/* tank */}
        <rect x="20" y="226" width="100" height="66" rx="8" fill="#fff" stroke="#9AA9B6" strokeWidth="2.5" />
        <rect x="23" y="246" width="94" height="43" rx="5" fill={OIL} opacity=".55" />
        <text x="70" y="310" textAnchor="middle" style={small}>Oil tank</text>
        <path d={`M${PX} ${PY + 26} V226`} stroke={OIL} strokeWidth="6" />

        {/* control / solenoid valve */}
        <rect x="140" y="150" width="58" height="52" rx="8" fill="#3A3F45" />
        <rect x="150" y="160" width="38" height="12" rx="3" fill="#7C8B9A" />
        <rect x="150" y="180" width="38" height="12" rx="3" fill="#7C8B9A" />
        <text x="172" y="238" textAnchor="middle" style={small}>{sr ? "Solenoid valve" : "Valve block"}</text>
        <path d={`M${PX + 26} ${PY} H140`} stroke={OIL} strokeWidth="6" />

        {/* oil lines to the actuator */}
        <path d="M198 166 H228 V120 H246" fill="none" stroke="#E8D3A8" strokeWidth="6" />
        <path className="fA dash" d="M198 166 H228 V120 H246" fill="none" stroke={OIL} strokeWidth="6" opacity="0" />
        {!sr && (
          <>
            <path d="M198 186 H236 V182 H246" fill="none" stroke="#E8D3A8" strokeWidth="6" />
            <path className="fB dash" d="M198 186 H236 V182 H246" fill="none" stroke={OIL} strokeWidth="6" opacity="0" />
          </>
        )}
        {sr && (
          <>
            <path d="M156 202 V214 H100 V226" fill="none" stroke="#E8D3A8" strokeWidth="6" />
            <path className="fR dash" d="M156 202 V214 H100 V226" fill="none" stroke={OIL} strokeWidth="6" opacity="0" />
          </>
        )}
        <text x="169" y="140" textAnchor="middle" style={{ ...small, fontSize: 11.5 }}>Oil, {pressure}</text>

        {/* actuator body with output shaft */}
        <rect x="246" y="96" width="112" height="110" rx="14" fill={RED} />
        <circle cx={AX} cy={AY} r="34" fill="#fff" />
        <g className="turn">
          <rect x={AX - 5} y={AY - 30} width="10" height="60" rx="5" fill="#2C3136" />
          <path d={`M${AX - 7} ${AY - 22} L${AX} ${AY - 34} L${AX + 7} ${AY - 22} Z`} fill={RED} />
        </g>
        <circle cx={AX} cy={AY} r="5" fill="#fff" />
        <text x={AX - 2} y="88" textAnchor="middle" style={small}>Part-turn actuator</text>

        {/* spring pack (spring return) */}
        {sr && (
          <g>
            <rect x="358" y="118" width="54" height="64" rx="8" fill="#F1F5F9" stroke="#9AA9B6" strokeWidth="2" />
            <g className="spring">
              <path d="M362 150 L368 132 L374 168 L380 132 L386 168 L392 132 L398 168 L404 150" fill="none" stroke={GREEN} strokeWidth="3" />
            </g>
            <text x="385" y="198" textAnchor="middle" style={small}>Spring</text>
          </g>
        )}

        {/* valve disc in the pipe */}
        <rect x="246" y="276" width="140" height="48" fill="#EAF3FD" />
        <path d="M246 276 H386 M246 324 H386" stroke="#C9D3DD" strokeWidth="3" />
        <path d={`M${AX} 206 V276`} stroke="#9AA9B6" strokeWidth="8" />
        <g className="disc"><rect x={VX - 20} y={VY - 5} width="40" height="10" rx="5" fill="#5C6B7A" transform={`rotate(90 ${VX} ${VY})`} /></g>
        <text x="238" y={VY + 4} textAnchor="end" style={small}>Valve</text>

        {/* captions */}
        {caps.map((c, k) => (
          <text key={k} className={`c${k + 1}`} x="20" y="358" style={{ ...lbl, fontSize: 14.5 }}>{c}</text>
        ))}
      </Box>
      <Box sx={{ mt: 1, display: "flex", justifyContent: "center", flexWrap: "wrap", columnGap: 2, rowGap: 0.75, fontSize: "0.8rem", fontWeight: 600, color: T.body }}>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: 2, bgcolor: OIL }} /> Oil flowing
        </Box>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: 2, bgcolor: "#7EE06A" }} /> Motor running
        </Box>
      </Box>
    </Box>
  );
}
