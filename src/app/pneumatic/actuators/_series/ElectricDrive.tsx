"use client";

// Electric quarter-turn actuator, how it drives: the motor turns a double worm
// gear, the worm wheel turns the output 90°, and the dial shows the valve
// position. At each end the motor stops and the worm gear holds the valve
// (self-locking, no brake). Used by ITQ. Figures from the ITQ catalogue.

import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";
import { useInView } from "@/src/app/Common/LightMotion";

const BLUE = "#2F6FD1", BLUED = "#1F4F9C";
const CYCLE = "8s";

export default function ElectricDrive() {
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  const lbl = { fontSize: 15, fontWeight: 700, fill: T.body, fontFamily: "inherit" } as const;
  const run = (name: string, timing = "ease-in-out") => (on ? `${name} ${CYCLE} ${timing} infinite` : "none");
  // Output: 0° closed → 90° open → hold → back to 0° → hold
  const turn = { "0%,6%": { transform: "rotate(0deg)" }, "40%,56%": { transform: "rotate(90deg)" }, "90%,100%": { transform: "rotate(0deg)" } };
  return (
    <Box ref={ref}>
      <Box
        component="svg"
        viewBox="0 0 420 330"
        role="img"
        aria-label="Electric actuator drive: the motor turns a double worm gear, which turns the output shaft 90 degrees to open or close the valve; at each end the worm gear holds the valve in place without a brake"
        sx={{
          width: "100%", height: "auto", display: "block",
          "@keyframes edTurn": turn,
          "@keyframes edWheel": { "0%,6%": { transform: "rotate(0deg)" }, "40%,56%": { transform: "rotate(90deg)" }, "90%,100%": { transform: "rotate(0deg)" } },
          "@keyframes edWorm": { "0%,6%": { transform: "translateY(0)" }, "40%,56%": { transform: "translateY(-48px)" }, "90%,100%": { transform: "translateY(0)" } },
          "@keyframes edFan": { "0%,6%": { opacity: 0.15 }, "10%,36%": { opacity: 1 }, "40%,56%": { opacity: 0.15 }, "60%,86%": { opacity: 1 }, "90%,100%": { opacity: 0.15 } },
          "@keyframes edLock": { "0%,38%": { opacity: 0 }, "42%,54%": { opacity: 1 }, "58%,88%": { opacity: 0 }, "92%,100%": { opacity: 1 } },
          "@keyframes edOpen": { "0%,30%": { opacity: 0 }, "38%,56%": { opacity: 1 }, "62%,100%": { opacity: 0 } },
          "@keyframes edShut": { "0%,6%": { opacity: 1 }, "12%,84%": { opacity: 0 }, "92%,100%": { opacity: 1 } },
          "& .out, & .wheel": { transformBox: "fill-box", transformOrigin: "center" },
          "& .out": { animation: run("edTurn") },
          "& .wheel": { animation: run("edWheel") },
          "& .worm": { animation: run("edWorm") },
          "& .fan": { animation: run("edFan", "linear"), opacity: on ? undefined : 0.15 },
          "& .lock": { animation: run("edLock", "linear"), opacity: on ? undefined : 1 },
          "& .lOpen": { animation: run("edOpen", "linear"), opacity: on ? undefined : 0 },
          "& .lShut": { animation: run("edShut", "linear"), opacity: on ? undefined : 1 },
          "@media (prefers-reduced-motion: reduce)": { "& *": { animation: "none !important" } },
        }}
      >
        <defs>
          <pattern id="edThread" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(-25)">
            <rect width="12" height="12" fill="#B7C3CF" />
            <rect width="12" height="5" fill="#8C9AA8" />
          </pattern>
          <clipPath id="edWormClip"><rect x="166" y="64" width="34" height="128" rx="10" /></clipPath>
        </defs>

        <g transform="translate(0 24)">
        {/* housing */}
        <rect x="140" y="40" width="250" height="176" rx="22" fill="#EEF2F6" stroke="#C9D3DD" strokeWidth="2" />

        {/* motor */}
        <g>
          <rect x="24" y="96" width="112" height="64" rx="14" fill={BLUE} />
          <rect x="24" y="96" width="16" height="64" rx="6" fill={BLUED} />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} className="fan" x={50 + i * 16} y="106" width="6" height="44" rx="3" fill="#BFD4F5" />
          ))}
          <rect x="136" y="120" width="34" height="16" rx="3" fill="#7C8B9A" />
          <text x="80" y="184" textAnchor="middle" style={lbl}>Motor</text>
        </g>

        {/* worm (threads slide as it spins) */}
        <g clipPath="url(#edWormClip)">
          <rect x="166" y="64" width="34" height="128" rx="10" fill="#B7C3CF" />
          <g className="worm">
            <rect x="166" y="64" width="34" height="200" fill="url(#edThread)" />
          </g>
        </g>
        <rect x="166" y="64" width="34" height="128" rx="10" fill="none" stroke="#7C8B9A" strokeWidth="1.5" />

        {/* worm wheel */}
        <g className="wheel">
          <circle cx="262" cy="128" r="58" fill="#5C6B7A" />
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i / 24) * Math.PI * 2;
            return <rect key={i} x={262 + Math.cos(a) * 58 - 4} y={128 + Math.sin(a) * 58 - 4} width="8" height="8" rx="1.5" fill="#5C6B7A" transform={`rotate(${(i / 24) * 360} ${262 + Math.cos(a) * 58} ${128 + Math.sin(a) * 58})`} />;
          })}
          <circle cx="262" cy="128" r="40" fill="#6D7C8B" />
          <path d="M262 128 L262 92" stroke="#DCE3EA" strokeWidth="5" strokeLinecap="round" />
        </g>
        <circle cx="262" cy="128" r="14" fill="#3F4A55" />
        <text x="238" y="28" textAnchor="middle" style={lbl}>Double worm gear</text>

        {/* lock note at each end of travel */}
        <g className="lock">
          <rect x="330" y="6" width="82" height="24" rx="12" fill={T.greenSoft} stroke="#BFE3B4" />
          <path d="M343 16 v-3 a4 4 0 0 1 8 0 v3" fill="none" stroke={T.greenDark} strokeWidth="2" />
          <rect x="341" y="16" width="12" height="9" rx="2" fill={T.greenDark} />
          <text x="361" y="23" style={{ ...lbl, fontSize: 13, fill: T.greenDark }}>Holds</text>
        </g>

        {/* output shaft + valve position dial */}
        <g>
          <circle cx="262" cy="262" r="30" fill="#fff" stroke="#C9D3DD" strokeWidth="2" />
          <text className="lShut" x="222" y="266" textAnchor="end" style={{ ...lbl, fill: "#C2413B" }}>Shut</text>
          <text className="lOpen" x="222" y="266" textAnchor="end" style={{ ...lbl, fill: T.greenDark }}>Open</text>
          <g className="out">
            <rect x="238" y="257" width="48" height="10" rx="5" fill={T.ink} />
            <circle cx="262" cy="262" r="5" fill="#fff" />
          </g>
          <rect x="257" y="216" width="10" height="16" fill="#7C8B9A" />
          <text x="306" y="266" style={lbl}>90° output</text>
        </g>
        </g>
      </Box>
      <Box sx={{ mt: 1.5, display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2, fontSize: "0.8rem", fontWeight: 600, color: T.body }}>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: 2, bgcolor: BLUE }} /> Motor drives the worm
        </Box>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: 2, bgcolor: T.greenDark }} /> Worm gear holds the valve, no brake
        </Box>
      </Box>
    </Box>
  );
}
