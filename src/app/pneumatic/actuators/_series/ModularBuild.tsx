"use client";

// HD hero visual: the modular build. The centre body and pneumatic cylinder are
// joined by a spring cartridge (spring return), then a hydraulic override,
// cycling through the configurations Susin I-Tork offers.

import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";
import { useInView } from "@/src/app/Common/LightMotion";

const RED = "#D9483B", REDD = "#A8322A";

export default function ModularBuild() {
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  const lbl = { fontSize: 12, fontWeight: 700, fill: T.body, fontFamily: "inherit" } as const;
  const anim = (name: string) => (on ? `${name} 9s ease-in-out infinite` : "none");
  return (
    <Box ref={ref}>
      <Box
        component="svg"
        viewBox="0 0 420 300"
        role="img"
        aria-label="Modular HD actuator: the pneumatic cylinder and centre body form a double acting actuator; adding a spring cartridge makes it spring return; adding a hydraulic cylinder gives a manual override"
        sx={{
          width: "100%", height: "auto", display: "block",
          "@keyframes mbCyl": { "0%": { transform: "translateX(-60px)", opacity: 0 }, "8%,100%": { transform: "none", opacity: 1 } },
          "@keyframes mbSpr": { "0%,30%": { transform: "translateX(70px)", opacity: 0 }, "38%,100%": { transform: "none", opacity: 1 } },
          "@keyframes mbHyd": { "0%,62%": { transform: "translateY(-60px)", opacity: 0 }, "70%,100%": { transform: "none", opacity: 1 } },
          "@keyframes mbCap1": { "0%,4%": { opacity: 0 }, "8%,28%": { opacity: 1 }, "32%,100%": { opacity: 0 } },
          "@keyframes mbCap2": { "0%,34%": { opacity: 0 }, "38%,60%": { opacity: 1 }, "64%,100%": { opacity: 0 } },
          "@keyframes mbCap3": { "0%,66%": { opacity: 0 }, "70%,96%": { opacity: 1 }, "100%": { opacity: 0 } },
          "& .cyl": { animation: anim("mbCyl") },
          "& .spr": { animation: anim("mbSpr"), opacity: on ? undefined : 1 },
          "& .hyd": { animation: anim("mbHyd"), opacity: on ? undefined : 1 },
          "& .c1": { animation: anim("mbCap1"), opacity: on ? undefined : 0 },
          "& .c2": { animation: anim("mbCap2"), opacity: on ? undefined : 0 },
          "& .c3": { animation: anim("mbCap3"), opacity: on ? undefined : 1 },
        }}
      >
        {/* hydraulic override (drops in last) */}
        <g className="hyd">
          <rect x="34" y="62" width="104" height="34" rx="8" fill="#5C6B7A" />
          <rect x="44" y="70" width="84" height="18" rx="4" fill="#8996A3" />
          <rect x="80" y="96" width="10" height="34" fill="#5C6B7A" />
          <text x="86" y="52" textAnchor="middle" style={lbl}>Hydraulic override</text>
        </g>
        {/* pneumatic cylinder */}
        <g className="cyl">
          <rect x="20" y="128" width="134" height="76" rx="14" fill={RED} />
          <rect x="20" y="128" width="14" height="76" rx="6" fill={REDD} />
          <rect x="140" y="128" width="14" height="76" rx="6" fill={REDD} />
          <text x="87" y="232" textAnchor="middle" style={lbl}>Pneumatic cylinder</text>
        </g>
        {/* centre body with yoke */}
        <g>
          <rect x="154" y="112" width="96" height="108" rx="12" fill="#3F4A55" />
          <circle cx="202" cy="166" r="22" fill="#56626E" />
          <path d="M202 166 L222 146" stroke={T.green} strokeWidth="8" strokeLinecap="round" />
          <circle cx="202" cy="166" r="6" fill="#fff" />
          <rect x="190" y="92" width="24" height="20" rx="4" fill="#3F4A55" />
          <text x="202" y="248" textAnchor="middle" style={lbl}>Centre body</text>
          <text x="202" y="263" textAnchor="middle" style={{ ...lbl, fill: T.muted, fontWeight: 600 }}>IS or IC yoke</text>
        </g>
        {/* spring cartridge */}
        <g className="spr">
          <rect x="250" y="124" width="150" height="84" rx="14" fill={RED} />
          <rect x="386" y="124" width="14" height="84" rx="6" fill={REDD} />
          <path d="M262 166 l10 -22 l10 44 l10 -44 l10 44 l10 -44 l10 44 l10 -44 l10 44 l10 -44 l10 44 l10 -22" fill="none" stroke="#FFE1DC" strokeWidth="3" strokeLinejoin="round" />
          <text x="325" y="232" textAnchor="middle" style={lbl}>Spring cartridge</text>
        </g>
        {/* captions */}
        <g style={{ ...lbl, fontSize: 14 }}>
          <text className="c1" x="210" y="290" textAnchor="middle" style={{ ...lbl, fontSize: 14, fill: T.ink }}>Double acting: cylinder + centre body</text>
          <text className="c2" x="210" y="290" textAnchor="middle" style={{ ...lbl, fontSize: 14, fill: T.ink }}>Spring return: add a spring cartridge</text>
          <text className="c3" x="210" y="290" textAnchor="middle" style={{ ...lbl, fontSize: 14, fill: T.ink }}>Manual override: add a hydraulic cylinder</text>
        </g>
      </Box>
      <Box sx={{ mt: 1, textAlign: "center", fontSize: "0.8rem", fontWeight: 600, color: T.body }}>
        Interchangeable modules, so one body covers every configuration
      </Box>
    </Box>
  );
}
