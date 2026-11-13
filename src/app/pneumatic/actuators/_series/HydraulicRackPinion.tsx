"use client";

// Hydraulic rack & pinion actuator (PA-HX), seen in section: oil at 80–160 bar
// pushes the two pistons apart, their racks turn the pinion and the valve 90°.
// Double acting: oil to the other port drives them back. Spring return: the
// springs behind the pistons drive them back when the pressure is released,
// to close (SC) or to open (SO).

import { useState } from "react";
import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";
import { useInView } from "@/src/app/Common/LightMotion";

const OIL = "#E2A93B", STEEL = "#9AA9B6", DARK = "#5C6B7A", GREEN = "#2E7D32";
type Mode = "da" | "sr";
type Frames = Record<string, Record<string, string | number>>;

export default function HydraulicRackPinion({ pressure = "80 – 160 bar" }: { pressure?: string }) {
  const [mode, setMode] = useState<Mode>("da");
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  const sr = mode === "sr";
  const lbl = { fontSize: 15, fontWeight: 700, fill: T.body, fontFamily: "inherit" } as const;
  const small = { ...lbl, fontSize: 12.5, fill: T.muted, fontWeight: 600 } as const;
  const run = (name: string, timing = "ease-in-out") => (on ? `${name} 8s ${timing} infinite` : "none");
  const op = (o: number) => ({ opacity: o });
  const tx = (x: number) => ({ transform: `translateX(${x}px)` });
  const rot = (d: number) => ({ transform: `rotate(${d}deg)` });

  // 0–8 shut · 8–40 opening · 40–56 open · 56–90 closing · 90–100 shut
  const K: Record<string, Frames> = {
    left: { "0%,8%": tx(0), "40%,56%": tx(-52), "90%,100%": tx(0) },
    right: { "0%,8%": tx(0), "40%,56%": tx(52), "90%,100%": tx(0) },
    turn: { "0%,8%": rot(0), "40%,56%": rot(90), "90%,100%": rot(0) },
    springL: { "0%,8%": { transform: "scaleX(1)" }, "40%,56%": { transform: "scaleX(.45)" }, "90%,100%": { transform: "scaleX(1)" } },
    springR: { "0%,8%": { transform: "scaleX(1)" }, "40%,56%": { transform: "scaleX(.45)" }, "90%,100%": { transform: "scaleX(1)" } },
    inA: { "0%,8%": op(0), "10%,38%": op(1), "41%,100%": op(0) },
    inB: { "0%,56%": op(0), "58%,88%": op(1), "91%,100%": op(0) },
    c1: { "0%,6%": op(1), "10%,100%": op(0) },
    c2: { "0%,8%": op(0), "11%,37%": op(1), "41%,100%": op(0) },
    c3: { "0%,39%": op(0), "42%,54%": op(1), "57%,100%": op(0) },
    c4: { "0%,56%": op(0), "59%,87%": op(1), "91%,100%": op(0) },
    c5: { "0%,90%": op(0), "94%,100%": op(1) },
  };
  const caps = sr
    ? ["Valve shut", "Oil in at port A: pistons move apart and compress the springs", "Turned 90°: valve open, held by pressure", "Pressure released: the springs drive the pistons back", "Valve shut: the fail-safe position"]
    : ["Valve shut", "Oil in at port A: pistons move apart, the pinion turns", "Turned 90°: valve open", "Oil in at port B: pistons move back", "Valve shut"];

  const CX = 210, CY = 150; // pinion
  const teeth = Array.from({ length: 16 }, (_, k) => {
    const a = (k / 16) * 2 * Math.PI;
    return <path key={k} d={`M${CX + 22 * Math.cos(a)} ${CY + 22 * Math.sin(a)} L${CX + 31 * Math.cos(a)} ${CY + 31 * Math.sin(a)}`} stroke={DARK} strokeWidth="5" strokeLinecap="round" />;
  });

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
          ? "Spring return hydraulic rack and pinion actuator: oil at port A pushes the pistons apart against the springs and turns the valve 90 degrees; when the pressure is released the springs drive them back to the fail-safe position"
          : "Double acting hydraulic rack and pinion actuator: oil at port A pushes the pistons apart and the racks turn the pinion and the valve 90 degrees; oil at port B drives them back to close"}
        sx={{
          width: "100%", height: "auto", display: "block",
          ...Object.fromEntries(Object.entries(K).map(([k, v]) => [`@keyframes rp${k}`, v])),
          "& .pl": { animation: run("rpleft") },
          "& .pr": { animation: run("rpright") },
          "& .turn": { transformBox: "view-box", transformOrigin: `${CX}px ${CY}px`, animation: run("rpturn") },
          "& .sl": { transformBox: "fill-box", transformOrigin: "left center", animation: run("rpspringL") },
          "& .sr": { transformBox: "fill-box", transformOrigin: "right center", animation: run("rpspringR") },
          "& .inA": { animation: run("rpinA", "linear"), opacity: on ? undefined : 0 },
          "& .inB": { animation: run("rpinB", "linear"), opacity: on ? undefined : 0 },
          ...Object.fromEntries([1, 2, 3, 4, 5].map((n) => [`& .c${n}`, { animation: run(`rpc${n}`, "linear"), opacity: on ? undefined : n === 1 ? 1 : 0 }])),
          "@media (prefers-reduced-motion: reduce)": { "& *": { animation: "none !important" } },
        }}
      >
        <defs>
          <clipPath id="rpBore"><rect x="40" y="112" width="340" height="76" rx="10" /></clipPath>
        </defs>

        {/* body */}
        <rect x="28" y="100" width="364" height="100" rx="18" fill="#F1F5F9" stroke="#1F4F9C" strokeWidth="2.5" />

        {/* oil chambers: centre (port A) between the pistons, ends (port B) */}
        <g clipPath="url(#rpBore)">
          <rect className="inA" x="120" y="112" width="180" height="76" fill={OIL} opacity="0" />
          {!sr && <g className="inB"><rect x="40" y="112" width="80" height="76" fill={OIL} /><rect x="300" y="112" width="80" height="76" fill={OIL} /></g>}
          {/* springs in the end caps (spring return) */}
          {sr && (
            <>
              <g className="sl"><path d="M40 150 L48 128 L58 172 L68 128 L78 172 L88 128 L98 172 L106 150" fill="none" stroke={GREEN} strokeWidth="3.5" /></g>
              <g className="sr"><path d="M314 150 L322 128 L332 172 L342 128 L352 172 L362 128 L372 172 L380 150" fill="none" stroke={GREEN} strokeWidth="3.5" /></g>
            </>
          )}
          {/* left piston + rack (top) */}
          <g className="pl">
            <rect x="106" y="114" width="18" height="72" rx="4" fill={DARK} />
            <rect x="124" y="114" width="96" height="14" fill={STEEL} />
            {Array.from({ length: 10 }, (_, k) => <rect key={k} x={128 + k * 9} y="126" width="5" height="7" fill={DARK} />)}
          </g>
          {/* right piston + rack (bottom) */}
          <g className="pr">
            <rect x="296" y="114" width="18" height="72" rx="4" fill={DARK} />
            <rect x="200" y="172" width="96" height="14" fill={STEEL} />
            {Array.from({ length: 10 }, (_, k) => <rect key={k} x={204 + k * 9} y="167" width="5" height="7" fill={DARK} />)}
          </g>
        </g>

        {/* pinion (turns 90°) and the output pointer above the body */}
        <g className="turn">
          <circle cx={CX} cy={CY} r="24" fill="#DDE5EC" />
          {teeth}
          <circle cx={CX} cy={CY} r="9" fill={DARK} />
          <path d={`M${CX} ${CY} L${CX} ${CY - 80}`} stroke="#B7322A" strokeWidth="5" strokeLinecap="round" />
          <path d={`M${CX - 8} ${CY - 72} L${CX} ${CY - 86} L${CX + 8} ${CY - 72} Z`} fill="#B7322A" />
        </g>
        <text x={CX} y="40" textAnchor="middle" style={{ ...lbl, fill: "#B7322A" }}>SHUT</text>
        <text x={CX + 96} y={CY - 70} style={{ ...lbl, fill: GREEN }}>OPEN</text>

        {/* ports */}
        <rect x={CX - 8} y="200" width="16" height="22" fill={STEEL} />
        <text x={CX} y="238" textAnchor="middle" style={lbl}>Port A</text>
        {!sr && (
          <>
            <rect x="52" y="200" width="16" height="22" fill={STEEL} />
            <text x="60" y="238" textAnchor="middle" style={lbl}>Port B</text>
          </>
        )}
        <text x="392" y="238" textAnchor="end" style={small}>Oil, {pressure}</text>
        <text x="28" y="264" style={small}>{sr ? "Springs behind the pistons" : "Pistons and racks"}</text>

        {caps.map((c, k) => (
          <text key={k} className={`c${k + 1}`} x="28" y="300" style={{ ...lbl, fontSize: 14.5 }}>{c}</text>
        ))}
      </Box>
      <Box sx={{ mt: 1, display: "flex", justifyContent: "center", flexWrap: "wrap", columnGap: 2, rowGap: 0.75, fontSize: "0.8rem", fontWeight: 600, color: T.body }}>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: 2, bgcolor: OIL }} /> Oil under pressure
        </Box>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: 2, bgcolor: "#B7322A" }} /> Valve position
        </Box>
      </Box>
    </Box>
  );
}
