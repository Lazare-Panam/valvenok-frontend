"use client";

// Manual bevel gear actuator on a rising-stem gate valve: the handwheel turns
// the input shaft and pinion, the spiral bevel gear turns the drive sleeve
// through a right angle, and the stem bush in the sleeve drives the stem up
// to lift the gate. The pinion is smaller than the gear, so the handwheel
// turns several times for each turn of the sleeve. Used by MAB.

import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";
import { useInView } from "@/src/app/Common/LightMotion";

const BLUE = "#2F6FD1", BLUED = "#1F4F9C", GOLD = "#E2A93B";
const CYCLE = "8s";

export default function BevelGear({ ratio = "4:1" }: { ratio?: string }) {
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  const lbl = { fontSize: 15, fontWeight: 700, fill: T.body, fontFamily: "inherit" } as const;
  const small = { ...lbl, fontSize: 12.5, fill: T.muted, fontWeight: 600 } as const;
  const run = (name: string, timing = "ease-in-out") => (on ? `${name} ${CYCLE} ${timing} infinite` : "none");
  const turns = Number(ratio.split(":")[0]) || 4;
  // 0–6 shut · 6–44 opening · 44–56 open · 56–94 closing · 94–100 shut
  const move = (to: string) => ({ "0%,6%": { transform: "none" }, "44%,56%": { transform: to }, "94%,100%": { transform: "none" } });
  return (
    <Box ref={ref}>
      <Box
        component="svg"
        viewBox="-40 0 460 380"
        role="img"
        aria-label={`Bevel gear actuator on a gate valve: the handwheel turns the pinion, the bevel gear turns the drive sleeve through a right angle, and the stem rises to lift the gate. At ${ratio}, the handwheel turns ${turns} times for each turn of the sleeve.`}
        sx={{
          width: "100%", height: "auto", display: "block",
          "@keyframes bgLift": move("translateY(-56px)"),
          "@keyframes bgWheel": move(`rotate(${360 * 4}deg)`),
          "@keyframes bgGear": move("translateX(-36px)"),
          "@keyframes bgPinion": move("translateY(-108px)"),
          "@keyframes bgFlow": { "0%,20%": { opacity: 0 }, "40%,60%": { opacity: 1 }, "80%,100%": { opacity: 0 } },
          "@keyframes bgOpen": { "0%,36%": { opacity: 0 }, "42%,58%": { opacity: 1 }, "64%,100%": { opacity: 0 } },
          "@keyframes bgShut": { "0%,6%": { opacity: 1 }, "12%,88%": { opacity: 0 }, "94%,100%": { opacity: 1 } },
          "& .lift": { animation: run("bgLift") },
          "& .wheel": { transformBox: "fill-box", transformOrigin: "center", animation: run("bgWheel") },
          "& .gear": { animation: run("bgGear") },
          "& .pin": { animation: run("bgPinion") },
          "& .flow": { animation: run("bgFlow", "linear"), opacity: on ? undefined : 0 },
          "& .sOpen": { animation: run("bgOpen", "linear"), opacity: on ? undefined : 0 },
          "& .sShut": { animation: run("bgShut", "linear"), opacity: on ? undefined : 1 },
          "@media (prefers-reduced-motion: reduce)": { "& *": { animation: "none !important" } },
        }}
      >
        <defs>
          <clipPath id="bgGearClip"><rect x="92" y="150" width="140" height="22" /></clipPath>
          <clipPath id="bgPinClip"><rect x="236" y="138" width="22" height="46" /></clipPath>
          <clipPath id="bgStemClip"><rect x="0" y="0" width="420" height="262" /></clipPath>
        </defs>

        {/* gate valve body and pipe */}
        <rect x="20" y="300" width="380" height="46" fill="#EEF2F6" />
        <rect x="20" y="296" width="380" height="4" fill="#C9D3DD" />
        <rect x="20" y="346" width="380" height="4" fill="#C9D3DD" />
        <path d="M118 262 H226 V354 H118 Z" fill={BLUE} opacity=".1" stroke={BLUED} strokeWidth="2" />
        <g className="flow"><path d="M34 323 H108 M236 323 H386" stroke="#7CB9F0" strokeWidth="6" strokeDasharray="10 8" strokeLinecap="round" /></g>

        {/* stem + gate (rise together) */}
        <g className="lift">
          <g clipPath="url(#bgStemClip)">
            <rect x="164" y="40" width="16" height="230" fill="#9AA9B6" />
            {Array.from({ length: 22 }, (_, k) => <path key={k} d={`M164 ${46 + k * 10} L180 ${52 + k * 10}`} stroke="#7C8B9A" strokeWidth="2" />)}
          </g>
          <rect x="140" y="262" width="64" height="84" rx="4" fill="#5C6B7A" />
        </g>

        {/* stem cover */}
        <rect x="154" y="22" width="36" height="100" rx="6" fill={BLUE} opacity=".18" stroke={BLUED} strokeWidth="2" />
        <text x="200" y="40" style={small}>Stem cover</text>

        {/* bottom housing, base flange */}
        <rect x="108" y="228" width="128" height="14" rx="3" fill="#B7C3CF" />
        <text x="-34" y="240" style={small}>ISO 5210 flange</text>
        <path d="M70 236 L106 236" stroke={T.muted} strokeWidth="1.5" />

        {/* housing (cut away) */}
        <path d="M80 228 V150 Q80 116 120 116 H224 Q252 116 252 150 V228 Z" fill="#F4F7FA" stroke={BLUED} strokeWidth="2.5" />
        {/* drive sleeve with stem bush */}
        <rect x="150" y="128" width="44" height="100" fill={GOLD} opacity=".9" />
        <rect x="158" y="128" width="28" height="100" fill="#F2D08A" />

        {/* spiral bevel gear: a ring on the sleeve, teeth slide past as it turns */}
        <rect x="92" y="150" width="140" height="22" fill="#C9D3DD" />
        <g clipPath="url(#bgGearClip)">
          <g className="gear">
            {Array.from({ length: 26 }, (_, k) => <rect key={k} x={92 + k * 9} y="150" width="5" height="22" fill="#7C8B9A" />)}
          </g>
        </g>
        <rect x="150" y="150" width="44" height="22" fill={GOLD} opacity=".55" />

        {/* pinion on the input shaft */}
        <rect x="236" y="138" width="22" height="46" rx="3" fill="#C9D3DD" />
        <g clipPath="url(#bgPinClip)">
          <g className="pin">
            {Array.from({ length: 18 }, (_, k) => <rect key={k} x="236" y={138 + k * 9} width="22" height="5" fill="#5C6B7A" />)}
          </g>
        </g>

        {/* input shaft and handwheel */}
        <rect x="258" y="156" width="70" height="10" fill="#9AA9B6" />
        <g className="wheel">
          <circle cx="352" cy="161" r="44" fill="none" stroke="#2C3136" strokeWidth="7" />
          {[0, 72, 144, 216, 288].map((a) => (
            <path key={a} d={`M352 161 L${352 + 42 * Math.cos((a * Math.PI) / 180)} ${161 + 42 * Math.sin((a * Math.PI) / 180)}`} stroke="#2C3136" strokeWidth="4" />
          ))}
          <circle cx="352" cy="161" r="7" fill="#2C3136" />
        </g>

        {/* labels */}
        <text x="352" y="104" textAnchor="middle" style={lbl}>Handwheel</text>
        <text x="-34" y="104" style={small}>Spiral bevel gear</text>
        <path d="M40 110 L96 152" stroke={T.muted} strokeWidth="1.5" />
        <text x="262" y="134" style={small}>Pinion</text>
        <text x="-34" y="200" style={small}>Drive sleeve</text>
        <path d="M50 196 L150 196" stroke={T.muted} strokeWidth="1.5" />

        {/* state captions */}
        <text className="sShut" x="20" y="374" style={lbl}>Gate shut</text>
        <text className="sOpen" x="20" y="374" style={lbl}>Stem risen, gate open</text>
        <text x="345" y="232" textAnchor="middle" style={lbl}>Ratio {ratio}</text>
        <text x="345" y="250" textAnchor="middle" style={small}>{turns} turns per sleeve turn</text>
      </Box>
      <Box sx={{ mt: 1.5, display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2, fontSize: "0.8rem", fontWeight: 600, color: T.body }}>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: 2, bgcolor: "#7C8B9A" }} /> Gears turn the drive through 90°
        </Box>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: 2, bgcolor: GOLD }} /> Sleeve and stem bush drive the stem
        </Box>
      </Box>
    </Box>
  );
}
