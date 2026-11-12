"use client";

// Electric spring-return (fail-safe) actuator, from the QS catalogue: in normal
// running the motor turns only the reducer, which opens the valve; a magnetic
// brake holds the spiral spring wound. When power is lost the brake releases and
// the spring alone returns the valve to its safe position in 1.8 s.

import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";
import { useInView } from "@/src/app/Common/LightMotion";

const BLUE = "#2F6FD1", BLUED = "#1F4F9C", RED = "#D9483B";
const CYCLE = "9s";

// Spiral path for the spring, centred on (cx, cy)
const spiral = (cx: number, cy: number, turns: number, r0: number, r1: number) => {
  const pts: string[] = [];
  const n = turns * 40;
  for (let k = 0; k <= n; k++) {
    const a = (k / 40) * Math.PI * 2;
    const r = r0 + ((r1 - r0) * k) / n;
    pts.push(`${(cx + Math.cos(a) * r).toFixed(1)} ${(cy + Math.sin(a) * r).toFixed(1)}`);
  }
  return `M${pts.join(" L")}`;
};

export default function SpringFailSafe({ motorTime = "21 s", springTime = "1.8 s" }: { motorTime?: string; springTime?: string }) {
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  const lbl = { fontSize: 15, fontWeight: 700, fill: T.body, fontFamily: "inherit" } as const;
  const run = (name: string, timing = "linear") => (on ? `${name} ${CYCLE} ${timing} infinite` : "none");
  // 0–8%   powered, shut
  // 8–48%  motor opens the valve slowly (and winds nothing: the spring is independent)
  // 48–62% open, power on, brake holds the spring
  // 62%    power lost
  // 64–70% spring snaps the valve shut
  // 70–100% shut, safe
  return (
    <Box ref={ref}>
      <Box
        component="svg"
        viewBox="0 0 420 330"
        role="img"
        aria-label="Fail-safe electric actuator: with power on, the motor turns the reducer and opens the valve slowly while a magnetic brake holds the spiral spring; when power is lost the brake releases and the spring returns the valve to its safe position in under two seconds"
        sx={{
          width: "100%", height: "auto", display: "block",
          "@keyframes sfOut": { "0%,8%": { transform: "rotate(0deg)" }, "48%,62%": { transform: "rotate(90deg)" }, "68%,100%": { transform: "rotate(0deg)" } },
          "@keyframes sfFan": { "0%,8%": { opacity: 0.2 }, "10%,46%": { opacity: 1 }, "48%,100%": { opacity: 0.2 } },
          "@keyframes sfSpring": { "0%,62%": { transform: "rotate(0deg)" }, "68%,100%": { transform: "rotate(-300deg)" } },
          "@keyframes sfPowerOn": { "0%,61%": { opacity: 1 }, "62%,96%": { opacity: 0 }, "100%": { opacity: 1 } },
          "@keyframes sfPowerOff": { "0%,61%": { opacity: 0 }, "62%,96%": { opacity: 1 }, "100%": { opacity: 0 } },
          "@keyframes sfBrake": { "0%,61%": { opacity: 1 }, "62%,96%": { opacity: 0.25 }, "100%": { opacity: 1 } },
          "@keyframes sfCapMotor": { "0%,8%": { opacity: 0 }, "12%,46%": { opacity: 1 }, "50%,100%": { opacity: 0 } },
          "@keyframes sfCapSpring": { "0%,62%": { opacity: 0 }, "64%,94%": { opacity: 1 }, "98%,100%": { opacity: 0 } },
          "@keyframes sfOpen": { "0%,40%": { opacity: 0 }, "46%,62%": { opacity: 1 }, "66%,100%": { opacity: 0 } },
          "@keyframes sfShut": { "0%,8%": { opacity: 1 }, "14%,64%": { opacity: 0 }, "68%,100%": { opacity: 1 } },
          "& .out, & .spr": { transformBox: "fill-box", transformOrigin: "center" },
          "& .out": { animation: run("sfOut", "ease-in-out") },
          "& .spr": { animation: run("sfSpring", "ease-out") },
          "& .fan": { animation: run("sfFan"), opacity: on ? undefined : 0.2 },
          "& .pOn": { animation: run("sfPowerOn"), opacity: on ? undefined : 1 },
          "& .pOff": { animation: run("sfPowerOff"), opacity: on ? undefined : 0 },
          "& .brk": { animation: run("sfBrake"), opacity: on ? undefined : 1 },
          "& .cM": { animation: run("sfCapMotor"), opacity: on ? undefined : 0 },
          "& .cS": { animation: run("sfCapSpring"), opacity: on ? undefined : 0 },
          "& .lOpen": { animation: run("sfOpen"), opacity: on ? undefined : 0 },
          "& .lShut": { animation: run("sfShut"), opacity: on ? undefined : 1 },
          "@media (prefers-reduced-motion: reduce)": { "& *": { animation: "none !important" } },
        }}
      >
        {/* power status */}
        <g className="pOn">
          <rect x="20" y="10" width="112" height="28" rx="14" fill={T.greenSoft} stroke="#BFE3B4" />
          <circle cx="38" cy="24" r="5" fill={T.green} />
          <text x="50" y="29" style={{ ...lbl, fontSize: 13, fill: T.greenDark }}>Power on</text>
        </g>
        <g className="pOff">
          <rect x="20" y="10" width="124" height="28" rx="14" fill="#FDECEA" stroke="#F3B9B3" />
          <circle cx="38" cy="24" r="5" fill={RED} />
          <text x="50" y="29" style={{ ...lbl, fontSize: 13, fill: "#B3362B" }}>Power lost</text>
        </g>

        {/* motor */}
        <rect x="20" y="78" width="96" height="58" rx="12" fill={BLUE} />
        <rect x="20" y="78" width="14" height="58" rx="5" fill={BLUED} />
        {[0, 1, 2, 3].map((k) => <rect key={k} className="fan" x={44 + k * 16} y="88" width="6" height="38" rx="3" fill="#BFD4F5" />)}
        <rect x="116" y="100" width="22" height="14" rx="3" fill="#7C8B9A" />
        <text x="68" y="160" textAnchor="middle" style={lbl}>Motor</text>

        {/* reducer */}
        <rect x="138" y="70" width="104" height="74" rx="12" fill="#5C6B7A" />
        <rect x="150" y="82" width="80" height="50" rx="8" fill="#6D7C8B" />
        <text x="190" y="60" textAnchor="middle" style={lbl}>Reducer</text>

        {/* spring housing with spiral spring and magnetic brake */}
        <rect x="270" y="56" width="132" height="132" rx="20" fill="#FFF4E8" stroke="#F1D2AE" strokeWidth="2" />
        <g className="spr">
          <path d={spiral(336, 122, 4, 8, 50)} fill="none" stroke="#E0952F" strokeWidth="4" strokeLinecap="round" />
        </g>
        <circle cx="336" cy="122" r="8" fill="#B8741F" />
        <g className="brk">
          <rect x="364" y="62" width="34" height="20" rx="6" fill={T.ink} />
          <text x="381" y="77" textAnchor="middle" style={{ ...lbl, fontSize: 11, fill: "#fff" }}>BRK</text>
        </g>
        <text x="336" y="212" textAnchor="middle" style={lbl}>Spiral spring</text>
        <path d="M242 107 H270" stroke="#7C8B9A" strokeWidth="8" />

        {/* output to the valve */}
        <rect x="185" y="144" width="10" height="70" fill="#7C8B9A" />
        <circle cx="190" cy="250" r="32" fill="#fff" stroke="#C9D3DD" strokeWidth="2" />
        <g className="out">
          <rect x="164" y="245" width="52" height="10" rx="5" fill={T.ink} />
          <circle cx="190" cy="250" r="5" fill="#fff" />
        </g>
        <text className="lShut" x="146" y="255" textAnchor="end" style={{ ...lbl, fill: T.greenDark }}>Safe position</text>
        <text className="lOpen" x="146" y="255" textAnchor="end" style={lbl}>Open</text>

        {/* captions */}
        <text className="cM" x="236" y="256" style={{ ...lbl, fill: BLUED }}>Motor opens · {motorTime}</text>
        <text className="cS" x="236" y="256" style={{ ...lbl, fill: "#B8741F" }}>Spring returns · {springTime}</text>
      </Box>
      <Box sx={{ mt: 1.5, display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2, fontSize: "0.8rem", fontWeight: 600, color: T.body }}>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: 2, bgcolor: BLUE }} /> Motor drives only the reducer
        </Box>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: 2, bgcolor: "#E0952F" }} /> Spring works only on power loss
        </Box>
      </Box>
    </Box>
  );
}
