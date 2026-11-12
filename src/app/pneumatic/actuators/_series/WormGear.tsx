"use client";

// Quarter-turn worm gear operator, seen from above: the handwheel turns the
// worm shaft, the worm turns the worm wheel and the valve drive 90° from shut
// to open, and stop bolts set the end positions. A small inset shows the
// valve disc turning with it. Used by MAW.
// With `declutch` (ITG): in Auto the worm is out of mesh and the actuator on
// top turns the valve; moving the lever to Manual engages the worm so the
// handwheel can turn it.

import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";
import { useInView } from "@/src/app/Common/LightMotion";

const BLUED = "#1F4F9C", GOLD = "#E2A93B", RED = "#B7322A", GREEN = "#2E7D32", BODY = "#F1F5F9";
const CX = 160, CY = 140; // worm wheel centre
const HX = 372, HY = 238; // handwheel centre
const VX = 350, VY = 72; // valve disc centre (inset)

type Frames = Record<string, Record<string, string | number>>;

export default function WormGear({ declutch = false }: { declutch?: boolean }) {
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  const lbl = { fontSize: 15, fontWeight: 700, fill: T.body, fontFamily: "inherit" } as const;
  const small = { ...lbl, fontSize: 12.5, fill: T.muted, fontWeight: 600 } as const;
  const cycle = declutch ? "12s" : "8s";
  const run = (name: string, timing = "ease-in-out") => (on ? `${name} ${cycle} ${timing} infinite` : "none");
  const rot = (d: number) => ({ transform: `rotate(${d}deg)` });
  const tx = (x: number) => ({ transform: `translateX(${x}px)` });
  const op = (o: number) => ({ opacity: o });

  // MAW: 0–8 shut · 8–42 opening · 42–58 open · 58–92 closing
  // ITG: 0–42 Auto (actuator opens 4–20, closes 26–42) · 42–48 lever to Manual ·
  //      48–94 Manual (handwheel opens 48–70, closes 76–94) · 94–100 back to Auto
  const K: Record<"wheel" | "worm" | "hw" | "mesh" | "lever" | "a" | "b", Frames> = declutch
    ? {
        wheel: { "0%,4%": rot(0), "20%,26%": rot(90), "42%,48%": rot(0), "70%,76%": rot(90), "94%,100%": rot(0) },
        worm: { "0%,48%": tx(0), "70%,76%": tx(-54), "94%,100%": tx(0) },
        hw: { "0%,48%": rot(0), "70%,76%": rot(1440), "94%,100%": rot(0) },
        mesh: { "0%,42%": { transform: "translateY(9px)" }, "48%,94%": { transform: "translateY(0)" }, "100%": { transform: "translateY(9px)" } },
        lever: { "0%,42%": rot(30), "48%,94%": rot(-30), "100%": rot(30) },
        a: { "0%,40%": op(1), "44%,96%": op(0), "100%": op(1) },
        b: { "0%,44%": op(0), "48%,92%": op(1), "96%,100%": op(0) },
      }
    : {
        wheel: { "0%,8%": rot(0), "42%,58%": rot(90), "92%,100%": rot(0) },
        worm: { "0%,8%": tx(0), "42%,58%": tx(-54), "92%,100%": tx(0) },
        hw: { "0%,8%": rot(0), "42%,58%": rot(1440), "92%,100%": rot(0) },
        mesh: { "0%,100%": { transform: "none" } },
        lever: { "0%,100%": rot(0) },
        a: { "0%,6%": op(1), "12%,88%": op(0), "94%,100%": op(1) },
        b: { "0%,36%": op(0), "42%,58%": op(1), "64%,100%": op(0) },
      };

  const teeth = Array.from({ length: 40 }, (_, k) => {
    const a = (k / 40) * 2 * Math.PI;
    const r1 = 58, r2 = 72;
    return <path key={k} d={`M${CX + r1 * Math.cos(a)} ${CY + r1 * Math.sin(a)} L${CX + r2 * Math.cos(a)} ${CY + r2 * Math.sin(a)}`} stroke="#8796A5" strokeWidth="5" strokeLinecap="round" />;
  });

  return (
    <Box ref={ref}>
      <Box
        component="svg"
        viewBox="-40 0 460 372"
        role="img"
        aria-label={
          declutch
            ? "Declutchable worm gear seen from above: in Auto the worm is out of mesh and the actuator on top turns the valve 90 degrees; with the lever in Manual the worm engages and the handwheel turns the valve open and shut"
            : "Worm gear operator seen from above: the handwheel turns the worm, the worm turns the worm wheel and the valve 90 degrees from shut to open, against adjustable stop bolts"
        }
        sx={{
          width: "100%", height: "auto", display: "block",
          "@keyframes wgWheel": K.wheel,
          "@keyframes wgWorm": K.worm,
          "@keyframes wgHw": K.hw,
          "@keyframes wgMesh": K.mesh,
          "@keyframes wgLever": K.lever,
          "@keyframes wgA": K.a,
          "@keyframes wgB": K.b,
          "& .wheel": { transformBox: "view-box", transformOrigin: `${CX}px ${CY}px`, animation: run("wgWheel") },
          "& .disc": { transformBox: "view-box", transformOrigin: `${VX}px ${VY}px`, animation: run("wgWheel") },
          "& .thread": { animation: run("wgWorm") },
          "& .hw": { transformBox: "view-box", transformOrigin: `${HX}px ${HY}px`, animation: run("wgHw") },
          "& .mesh": { animation: run("wgMesh") },
          "& .lever": { transformBox: "view-box", transformOrigin: "40px 252px", animation: run("wgLever") },
          "& .capA": { animation: run("wgA", "linear"), opacity: on ? undefined : 1 },
          "& .capB": { animation: run("wgB", "linear"), opacity: on ? undefined : 0 },
          "@media (prefers-reduced-motion: reduce)": { "& *": { animation: "none !important" } },
        }}
      >
        <defs>
          <clipPath id="wgWormClip"><rect x="98" y="222" width="124" height="32" rx="8" /></clipPath>
          <clipPath id="wgPipeClip"><rect x="296" y="48" width="108" height="48" /></clipPath>
        </defs>

        {/* one casting: worm shaft tube joined to the round gear housing */}
        <rect x="40" y="212" width="262" height="52" rx="14" fill={BODY} stroke={BLUED} strokeWidth="2.5" />
        <circle cx={CX} cy={CY} r="92" fill={BODY} />
        <path d={`M${CX - 72} ${CY + 57} A92 92 0 1 1 ${CX + 72} ${CY + 57}`} fill="none" stroke={BLUED} strokeWidth="2.5" />

        {/* stop bolts */}
        <rect x={CX - 6} y={CY - 108} width="12" height="20" rx="3" fill="#7C8B9A" />
        <rect x={CX + 88} y={CY - 6} width="20" height="12" rx="3" fill="#7C8B9A" />

        {/* worm wheel, drive bush and position pointer: turn 90° together */}
        <g className="wheel">
          <circle cx={CX} cy={CY} r="74" fill="#E3EAF1" />
          {teeth}
          <circle cx={CX} cy={CY} r="52" fill="#fff" stroke="#D5DEE7" strokeWidth="2" />
          <circle cx={CX} cy={CY} r="28" fill={GOLD} />
          <rect x={CX - 10} y={CY - 10} width="20" height="20" rx="2" fill="#5C6B7A" />
          <path d={`M${CX} ${CY - 14} L${CX} ${CY - 40}`} stroke={RED} strokeWidth="6" strokeLinecap="round" />
          <path d={`M${CX - 9} ${CY - 36} L${CX} ${CY - 50} L${CX + 9} ${CY - 36} Z`} fill={RED} />
        </g>
        <text x={CX} y={CY - 116} textAnchor="middle" style={{ ...lbl, fill: RED }}>SHUT</text>
        <text x={CX + 116} y={CY + 5} style={{ ...lbl, fill: GREEN }}>OPEN</text>

        {/* worm, meshing under the wheel (slides out of mesh on ITG in Auto) */}
        <g className="mesh">
          <rect x="98" y="222" width="124" height="32" rx="8" fill="#C9D3DD" />
          <g clipPath="url(#wgWormClip)">
            <g className="thread">
              {Array.from({ length: 24 }, (_, k) => <path key={k} d={`M${90 + k * 9} 256 L${102 + k * 9} 220`} stroke="#5C6B7A" strokeWidth="4.5" />)}
            </g>
          </g>
          <rect x="222" y="234" width="114" height="8" fill="#9AA9B6" />
          {/* handwheel (drawn face-on) */}
          <g className="hw">
            <circle cx={HX} cy={HY} r="36" fill="none" stroke="#2C3136" strokeWidth="6" />
            {[0, 72, 144, 216, 288].map((a) => (
              <path key={a} d={`M${HX} ${HY} L${HX + 34 * Math.cos((a * Math.PI) / 180)} ${HY + 34 * Math.sin((a * Math.PI) / 180)}`} stroke="#2C3136" strokeWidth="4" />
            ))}
            <circle cx={HX + 36} cy={HY} r="5" fill={RED} />
          </g>
          <circle cx={HX} cy={HY} r="6" fill="#2C3136" />
        </g>

        {/* valve inset: the disc turns with the drive */}
        <rect x="296" y="22" width="108" height="92" rx="14" fill="#fff" stroke="#D5DEE7" strokeWidth="1.5" />
        <text x={VX} y="40" textAnchor="middle" style={small}>Valve disc</text>
        <g clipPath="url(#wgPipeClip)">
          <rect x="296" y="54" width="108" height="36" fill="#EAF3FD" />
          <path d="M296 54 H404 M296 90 H404" stroke="#C9D3DD" strokeWidth="3" />
        </g>
        <g className="disc"><rect x={VX - 4} y={VY - 17} width="8" height="34" rx="4" fill="#5C6B7A" /></g>
        <circle cx={VX} cy={VY} r="3" fill="#fff" />

        {/* declutch lever and actuator state (ITG) */}
        {declutch && (
          <g>
            <g className="lever">
              <path d="M40 252 L40 300" stroke="#2C3136" strokeWidth="6" strokeLinecap="round" />
              <circle cx="40" cy="302" r="8" fill={RED} />
            </g>
            <circle cx="40" cy="252" r="7" fill="#2C3136" />
            <text x="-4" y="326" textAnchor="middle" style={small}>Auto</text>
            <text x="88" y="326" textAnchor="middle" style={small}>Manual</text>
            <g className="capA">
              <rect x="-34" y="18" width="128" height="30" rx="15" fill="#E8F5E9" stroke="#BFE3B4" />
              <text x="30" y="38" textAnchor="middle" style={{ ...small, fill: GREEN, fontWeight: 700 }}>Actuator driving</text>
            </g>
            <g className="capB">
              <rect x="-34" y="18" width="128" height="30" rx="15" fill="#FDF3E3" stroke="#F2D3A0" />
              <text x="30" y="38" textAnchor="middle" style={{ ...small, fill: "#B8741F", fontWeight: 700 }}>Handwheel driving</text>
            </g>
          </g>
        )}

        {/* labels */}
        {!declutch && (
          <>
            <text x="-34" y="78" style={small}>Worm wheel</text>
            <path d="M48 82 L98 104" stroke={T.muted} strokeWidth="1.5" />
          </>
        )}
        <text x={CX + 18} y={CY - 96} style={small}>Stop bolts ±5°</text>
        <text x={CX} y="286" textAnchor="middle" style={small}>Worm</text>
        <text x={HX} y="316" textAnchor="middle" style={small}>Handwheel</text>

        {/* captions */}
        {declutch ? (
          <>
            <text className="capA" x="-34" y="360" style={lbl}>Auto: worm out of mesh, the actuator turns the valve</text>
            <text className="capB" x="-34" y="360" style={lbl}>Manual: worm engaged, the handwheel turns the valve</text>
          </>
        ) : (
          <>
            <text className="capA" x="-34" y="360" style={lbl}>Valve shut</text>
            <text className="capB" x="-34" y="360" style={lbl}>Turned 90°: valve open</text>
          </>
        )}
      </Box>
      <Box sx={{ mt: 1, display: "flex", justifyContent: "center", flexWrap: "wrap", columnGap: 2, rowGap: 0.75, fontSize: "0.8rem", fontWeight: 600, color: T.body }}>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: 2, bgcolor: "#5C6B7A" }} /> Many handwheel turns, one quarter turn out
        </Box>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: 2, bgcolor: RED }} /> {declutch ? "Lever: Auto or Manual" : "Pointer shows the valve position"}
        </Box>
      </Box>
    </Box>
  );
}
