"use client";

// ITS limit switch box: the actuator shaft turns 90°; the dome indicator turns with
// it (red = close, yellow = open) and two cams on the shaft press the switches:
// the red cam the close switch, the green cam the open switch (Susin I-Tork ITS
// catalogue p.5).

import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";
import { useInView } from "@/src/app/Common/LightMotion";

const RED = "#D9473F", YELLOW = "#F2C230", GREEN = "#2E9E44", DARK = "#5C6B7A";

export default function LimitSwitchBox() {
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  const lbl = { fontSize: 14, fontWeight: 700, fill: T.body, fontFamily: "inherit" } as const;
  const small = { ...lbl, fontSize: 12.5, fill: T.muted, fontWeight: 600 } as const;
  const run = (n: string) => (on ? `${n} 8s ease-in-out infinite` : "none");
  const op = (o: number) => ({ opacity: o });
  const rot = (d: number) => ({ transform: `rotate(${d}deg)` });
  // 0–10 closed · 10–40 opening · 40–60 open · 60–90 closing · 90–100 closed
  const K: Record<string, Record<string, Record<string, string | number>>> = {
    turn: { "0%,10%": rot(0), "40%,60%": rot(90), "90%,100%": rot(0) },
    lampC: { "0%,12%": op(1), "16%,86%": op(0.12), "90%,100%": op(1) },
    lampO: { "0%,36%": op(0.12), "40%,60%": op(1), "64%,100%": op(0.12) },
    txtC: { "0%,22%": op(1), "25%,75%": op(0), "78%,100%": op(1) },
    txtO: { "0%,25%": op(0), "28%,72%": op(1), "75%,100%": op(0) },
    c1: { "0%,8%": op(1), "11%,100%": op(0) },
    c2: { "0%,10%": op(0), "13%,37%": op(1), "40%,100%": op(0) },
    c3: { "0%,39%": op(0), "42%,58%": op(1), "61%,100%": op(0) },
    c4: { "0%,60%": op(0), "63%,87%": op(1), "90%,100%": op(0) },
    c5: { "0%,89%": op(0), "92%,100%": op(1) },
  };
  const caps = ["Valve closed: the red cam presses the close switch", "The actuator turns the shaft", "Turned 90°: the green cam presses the open switch", "Turning back to close", "Closed again: close switch on"];

  // Dome (top view) and the two cams, each turning on its own centre
  const D = { x: 110, y: 140, r: 74 };
  const cams = [
    { y: 92, color: RED, start: 0, label: "Close switch", lamp: "lampC" }, // lobe points right (at the switch) when closed
    { y: 196, color: GREEN, start: -90, label: "Open switch", lamp: "lampO" }, // lobe points up when closed, right when open
  ];
  const sector = (a0: number, a1: number, r: number) => {
    const p = (a: number) => `${D.x + r * Math.cos((a * Math.PI) / 180)} ${D.y + r * Math.sin((a * Math.PI) / 180)}`;
    return `M${D.x} ${D.y} L${p(a0)} A${r} ${r} 0 0 1 ${p(a1)} Z`;
  };

  return (
    <Box ref={ref}>
      <Box
        component="svg"
        viewBox="0 0 420 330"
        role="img"
        aria-label="Limit switch box: as the actuator turns the valve 90 degrees, the dome indicator changes from red (close) to yellow (open), and cams on the shaft press the close switch and then the open switch"
        sx={{
          width: "100%", height: "auto", display: "block",
          ...Object.fromEntries(Object.entries(K).map(([k, v]) => [`@keyframes ls${k}`, v])),
          "& .turn": { transformBox: "view-box", animation: run("lsturn") },
          "& .lampC": { animation: run("lslampC") },
          "& .lampO": { animation: run("lslampO"), opacity: on ? undefined : 0.12 },
          "& .txtC": { animation: run("lstxtC") },
          "& .txtO": { animation: run("lstxtO"), opacity: on ? undefined : 0 },
          ...Object.fromEntries([1, 2, 3, 4, 5].map((n) => [`& .c${n}`, { animation: run(`lsc${n}`), opacity: on ? undefined : n === 1 ? 1 : 0 }])),
          "@media (prefers-reduced-motion: reduce)": { "& *": { animation: "none !important" } },
        }}
      >
        {/* Dome indicator, seen from above: the disc turns, the window at the top shows its colour */}
        <text x={D.x} y="34" textAnchor="middle" style={lbl}>Dome indicator</text>
        <rect x={D.x - 92} y={D.y - 92} width="184" height="184" rx="22" fill="#2F3A44" />
        <circle cx={D.x} cy={D.y} r={D.r + 6} fill="#E6ECF1" />
        <g className="turn" style={{ transformOrigin: `${D.x}px ${D.y}px` }}>
          <circle cx={D.x} cy={D.y} r={D.r} fill={YELLOW} />
          <path d={sector(-135, -45, D.r)} fill={RED} />
          <path d={sector(45, 135, D.r)} fill={RED} />
          <circle cx={D.x} cy={D.y} r="16" fill={YELLOW} stroke="#fff" strokeWidth="3" />
        </g>
        {/* fixed marks on the housing */}
        <path d={`M${D.x} ${D.y - D.r - 14} l-7 -9 h14 Z`} fill="#fff" />
        <text className="txtC" x={D.x} y={D.y + D.r + 46} textAnchor="middle" style={{ ...lbl, fill: RED, fontSize: 18 }}>CLOSE</text>
        <text className="txtO" x={D.x} y={D.y + D.r + 46} textAnchor="middle" style={{ ...lbl, fill: "#B88A08", fontSize: 18 }}>OPEN</text>

        {/* Shaft with two cams (top view of each) and the two switches */}
        <text x="300" y="34" textAnchor="middle" style={lbl}>Cams and switches</text>
        <path d="M262 60 V240" stroke="#C7D1DA" strokeWidth="6" strokeLinecap="round" />
        {cams.map((c) => (
          <g key={c.label}>
            <g className="turn" style={{ transformOrigin: `262px ${c.y}px` }}>
              <g transform={`rotate(${c.start} 262 ${c.y})`}>
                <circle cx="262" cy={c.y} r="22" fill={c.color} opacity=".9" />
                <path d={`M262 ${c.y - 18} Q346 ${c.y} 262 ${c.y + 18} Z`} fill={c.color} />
                <circle cx="262" cy={c.y} r="7" fill="#fff" />
              </g>
            </g>
            {/* switch: plunger + body + lamp */}
            <rect x="306" y={c.y - 5} width="14" height="10" rx="2" fill={DARK} />
            <rect x="320" y={c.y - 18} width="58" height="36" rx="6" fill="#E9EEF3" stroke="#9AA9B6" strokeWidth="1.5" />
            <circle className={c.lamp} cx="392" cy={c.y} r="9" fill={c.color} />
            <text x="349" y={c.y + 34} textAnchor="middle" style={small}>{c.label}</text>
          </g>
        ))}

        {caps.map((t, k) => (
          <text key={k} className={`c${k + 1}`} x="210" y="314" textAnchor="middle" style={{ ...lbl, fontSize: 13.5 }}>{t}</text>
        ))}
      </Box>
      <Box sx={{ mt: 1, display: "flex", justifyContent: "center", flexWrap: "wrap", columnGap: 2, rowGap: 0.75, fontSize: "0.8rem", fontWeight: 600, color: T.body }}>
        {[[RED, "Red: close"], [YELLOW, "Yellow: open"], [GREEN, "Green cam: open switch"]].map(([c, t]) => (
          <Box key={t} component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
            <Box component="span" sx={{ width: 10, height: 10, borderRadius: 2, bgcolor: c }} /> {t}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
