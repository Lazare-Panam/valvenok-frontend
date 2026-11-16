"use client";

// Hydraulic scotch yoke actuator (HRSDA / HRSSA), seen in section. Oil at port A
// pushes the piston; the rod's roller pin slides in the yoke slot and turns the
// yoke and the valve 90°. Double acting: oil at port B drives it back. Spring
// return: the spring cartridge drives it back when the pressure is released.
// Pin and yoke keyframes are computed together so the pin stays in the slot.

import { useState } from "react";
import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";
import { useInView } from "@/src/app/Common/LightMotion";

const OIL = "#E2A93B", STEEL = "#9AA9B6", DARK = "#5C6B7A", GREEN = "#2E7D32", RED = "#B7322A";
type Mode = "da" | "sr";
type Css = Record<string, string | number>;

// Geometry: pin runs along y = 150 from x 195 (shut) to 265 (open); the yoke
// pivots on the output shaft at (230, 185), 35 below the pin line.
const SX = 230, SY = 185, PIN0 = 195, TRAVEL = 70, ARM = SY - 150;
const ease = (u: number) => (1 - Math.cos(Math.PI * u)) / 2;

// Timeline: 0–8 shut · 8–40 opening · 40–56 open · 56–90 closing · 90–100 shut
function timeline(f: (s: number) => Css) {
  const out: Record<string, Css> = { "0%": f(0) };
  const phase = (from: number, to: number, a: number, b: number) => {
    for (let k = 0; k <= 8; k++) {
      const t = from + ((to - from) * k) / 8;
      out[`${+t.toFixed(2)}%`] = f(a + (b - a) * ease(k / 8));
    }
  };
  phase(8, 40, 0, 1);
  phase(56, 90, 1, 0);
  out["100%"] = f(0);
  return out;
}
const angle = (s: number) => (Math.atan((PIN0 + TRAVEL * s - SX) / ARM) * 180) / Math.PI;

export default function HydraulicScotchYoke({ pressure = "up to 200 bar" }: { pressure?: string }) {
  const [mode, setMode] = useState<Mode>("da");
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  const sr = mode === "sr";
  const lbl = { fontSize: 15, fontWeight: 700, fill: T.body, fontFamily: "inherit" } as const;
  const small = { ...lbl, fontSize: 12.5, fill: T.muted, fontWeight: 600 } as const;
  const run = (name: string) => (on ? `${name} 8s linear infinite` : "none");
  const op = (o: number) => ({ opacity: o });

  // Piston at x 25 when shut; chamber A from 18 to the piston, chamber B from the piston to 156
  const K: Record<string, Record<string, Css>> = {
    move: timeline((s) => ({ transform: `translateX(${TRAVEL * s}px)` })),
    arm: timeline((s) => ({ transform: `rotate(${angle(s).toFixed(2)}deg)` })),
    ptr: timeline((s) => ({ transform: `rotate(${(angle(s) + 45).toFixed(2)}deg)` })),
    chA: timeline((s) => ({ transform: `scaleX(${((7 + TRAVEL * s) / 77).toFixed(3)})` })),
    chB: timeline((s) => ({ transform: `scaleX(${((117 - TRAVEL * s) / 117).toFixed(3)})` })),
    spring: timeline((s) => ({ transform: `scaleX(${(1 - 0.7 * s).toFixed(3)})` })),
    inA: sr ? { "0%,8%": op(0), "11%,55%": op(1), "58%,88%": op(0.4), "92%,100%": op(0) } : { "0%,8%": op(0), "11%,55%": op(1), "58%,100%": op(0) },
    inB: { "0%,6%": op(1), "9%,56%": op(0), "59%,100%": op(1) },
    c1: { "0%,6%": op(1), "10%,100%": op(0) },
    c2: { "0%,8%": op(0), "11%,37%": op(1), "41%,100%": op(0) },
    c3: { "0%,39%": op(0), "42%,54%": op(1), "57%,100%": op(0) },
    c4: { "0%,56%": op(0), "59%,87%": op(1), "91%,100%": op(0) },
    c5: { "0%,90%": op(0), "94%,100%": op(1) },
  };
  const caps = sr
    ? ["Valve shut", "Oil in at port A: the spring compresses", "Turned 90°: open, held by pressure", "Pressure released: the spring drives back", "Valve shut: the fail-safe position"]
    : ["Valve shut", "Oil in at port A: the pin turns the yoke", "Turned 90°: valve open", "Oil in at port B: the piston drives back", "Valve shut"];

  return (
    <Box ref={ref}>
      <Box role="tablist" aria-label="Actuator type" sx={{ display: "flex", gap: 1, mb: 1.5, justifyContent: "center" }}>
        {(["da", "sr"] as Mode[]).map((m) => (
          <Box key={m} component="button" role="tab" aria-selected={mode === m} onClick={() => setMode(m)}
            sx={{ cursor: "pointer", font: "inherit", fontSize: "0.82rem", fontWeight: 700, px: 1.75, py: 0.75, borderRadius: 999, border: `1px solid ${mode === m ? T.greenDark : T.border}`, bgcolor: mode === m ? T.greenSoft : "#fff", color: mode === m ? T.greenDark : T.body }}>
            {m === "da" ? "Double acting" : "Spring return"}
          </Box>
        ))}
      </Box>
      <Box
        key={mode}
        component="svg"
        viewBox="0 0 420 330"
        role="img"
        aria-label={sr
          ? "Spring return hydraulic scotch yoke actuator: oil at port A pushes the piston, the roller pin slides in the yoke slot and turns the valve 90 degrees while compressing the spring; when the pressure is released the spring drives it back to the fail-safe position"
          : "Double acting hydraulic scotch yoke actuator: oil at port A pushes the piston, the roller pin slides in the yoke slot and turns the yoke and the valve 90 degrees; oil at port B drives it back to close"}
        sx={{
          width: "100%", height: "auto", display: "block",
          ...Object.fromEntries(Object.entries(K).map(([k, v]) => [`@keyframes sy${k}`, v])),
          "& .mv": { animation: run("symove") },
          "& .arm": { transformBox: "view-box", transformOrigin: `${SX}px ${SY}px`, animation: run("syarm"), transform: "rotate(-45deg)" },
          "& .ptr": { transformBox: "view-box", transformOrigin: `${SX}px 62px`, animation: run("syptr") },
          "& .chA": { transformBox: "fill-box", transformOrigin: "left center", animation: run("sychA"), transform: `scaleX(${7 / 77})` },
          "& .chB": { transformBox: "fill-box", transformOrigin: "right center", animation: run("sychB") },
          "& .spr": { transformBox: "fill-box", transformOrigin: "right center", animation: run("syspring") },
          "& .inA": { animation: run("syinA"), opacity: on ? undefined : 0 },
          "& .inB": { animation: run("syinB"), opacity: on ? undefined : 1 },
          ...Object.fromEntries([1, 2, 3, 4, 5].map((n) => [`& .c${n}`, { animation: run(`syc${n}`), opacity: on ? undefined : n === 1 ? 1 : 0 }])),
          "@media (prefers-reduced-motion: reduce)": { "& *": { animation: "none !important" } },
        }}
      >
        {/* hydraulic cylinder */}
        <rect x="10" y="118" width="150" height="64" rx="10" fill="#F1F5F9" stroke="#1F4F9C" strokeWidth="2.5" />
        <rect x="18" y="124" width="138" height="52" fill="#fff" />
        <g className="inA"><rect className="chA" x="18" y="124" width="77" height="52" fill={OIL} /></g>
        {!sr && <g className="inB"><rect className="chB" x="39" y="124" width="117" height="52" fill={OIL} /></g>}

        {/* centre body */}
        <rect x="160" y="104" width="140" height="132" rx="14" fill="#E9EEF3" stroke="#7C8B9A" strokeWidth="2" />

        {/* spring cartridge (spring return) */}
        {sr && (
          <>
            <rect x="300" y="118" width="116" height="64" rx="10" fill="#F1F5F9" stroke="#7C8B9A" strokeWidth="2" />
            <rect x="306" y="124" width="104" height="52" fill="#fff" />
            <g className="spr"><path d="M314 150 L322 128 L334 172 L346 128 L358 172 L370 128 L382 172 L394 128 L404 150" fill="none" stroke={GREEN} strokeWidth="3.5" /></g>
          </>
        )}

        {/* yoke, pivoting on the output shaft */}
        <g className="arm">
          <path d={`M${SX - 11} ${SY} L${SX - 11} 116 Q${SX} 104 ${SX + 11} 116 L${SX + 11} ${SY} Z`} fill={T.greenDark} />
          <rect x={SX - 5} y="118" width="10" height="56" rx="5" fill="#fff" />
        </g>

        {/* piston, rod, roller pin (and spring rod and plate) */}
        <g className="mv">
          <rect x="25" y="126" width="14" height="48" rx="3" fill={DARK} />
          <rect x="39" y="145" width={PIN0 - 39} height="10" rx="4" fill={STEEL} />
          {sr && (
            <>
              <rect x={PIN0} y="146" width="111" height="8" rx="4" fill={STEEL} />
              <rect x="306" y="128" width="8" height="44" rx="2" fill={DARK} />
            </>
          )}
          <circle cx={PIN0} cy="150" r="9" fill="#F4C95D" stroke="#A06F1E" strokeWidth="2" />
        </g>

        {/* output shaft */}
        <circle cx={SX} cy={SY} r="14" fill="#fff" stroke={DARK} strokeWidth="3" />
        <rect x={SX - 6} y={SY - 6} width="12" height="12" rx="2" fill={DARK} />

        {/* valve position indicator */}
        <circle cx={SX} cy="62" r="28" fill="#fff" stroke="#C7D1DA" strokeWidth="2" />
        <g className="ptr">
          <path d={`M${SX} 62 L${SX} 38`} stroke={RED} strokeWidth="5" strokeLinecap="round" />
          <circle cx={SX} cy="62" r="5" fill={RED} />
        </g>
        <text x={SX} y="24" textAnchor="middle" style={{ ...lbl, fill: RED }}>SHUT</text>
        <text x={SX + 38} y="67" style={{ ...lbl, fill: GREEN }}>OPEN</text>

        {/* ports and labels */}
        <rect x="20" y="182" width="14" height="16" fill={STEEL} />
        <text x="27" y="214" textAnchor="middle" style={lbl}>Port A</text>
        {!sr && (
          <>
            <rect x="114" y="182" width="14" height="16" fill={STEEL} />
            <text x="121" y="214" textAnchor="middle" style={lbl}>Port B</text>
          </>
        )}
        <text x="10" y="106" style={small}>Hydraulic cylinder</text>
        {sr && <text x="416" y="106" textAnchor="end" style={small}>Spring cartridge</text>}
        <text x="10" y="256" style={small}>Yoke turns the valve 90°</text>
        <text x="410" y="256" textAnchor="end" style={small}>Oil, {pressure}</text>

        {caps.map((c, k) => (
          <text key={k} className={`c${k + 1}`} x="10" y="298" style={{ ...lbl, fontSize: 14 }}>{c}</text>
        ))}
      </Box>
      <Box sx={{ mt: 1, display: "flex", justifyContent: "center", flexWrap: "wrap", columnGap: 2, rowGap: 0.75, fontSize: "0.8rem", fontWeight: 600, color: T.body }}>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: 2, bgcolor: OIL }} /> Oil under pressure
        </Box>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#F4C95D", border: "2px solid #A06F1E" }} /> Roller pin in the yoke slot
        </Box>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: 2, bgcolor: RED }} /> Valve position
        </Box>
      </Box>
    </Box>
  );
}
