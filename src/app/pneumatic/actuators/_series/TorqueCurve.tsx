"use client";

// PDS hero visual: scotch yoke torque vs rack & pinion across the 90° stroke.
// The yoke curve uses real catalogue figures (PD100, 5.5 bar: 449 / 188 / 314 Nm
// at 0° / 45° / 90°); rack & pinion is drawn flat for comparison.

import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";
import { useInView } from "@/src/app/Common/LightMotion";

const X0 = 60, X1 = 380, Y0 = 250, YTOP = 40, MAXNM = 500;
const y = (nm: number) => Y0 - (nm / MAXNM) * (Y0 - YTOP);
const PTS = { a: y(449), b: y(188), c: y(314) };
// smooth U through the three catalogue points
const YOKE = `M${X0} ${PTS.a} C ${X0 + 70} ${PTS.b + 10}, ${X0 + 110} ${PTS.b}, ${(X0 + X1) / 2} ${PTS.b} S ${X1 - 70} ${PTS.c - 6}, ${X1} ${PTS.c}`;
const RP = y(260);

export default function TorqueCurve() {
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  const lbl = { fontSize: 12, fontWeight: 700, fill: T.body, fontFamily: "inherit" } as const;
  return (
    <Box ref={ref}>
      <Box
        component="svg"
        viewBox="0 0 420 310"
        role="img"
        aria-label="Torque across the 90 degree stroke: the PDS scotch yoke gives 449 Nm at 0 degrees, 188 at 45 and 314 at 90 (PD100 at 5.5 bar), more than a rack and pinion at both ends"
        sx={{
          width: "100%", height: "auto", display: "block",
          "@keyframes tcDraw": { "0%": { strokeDashoffset: 600 }, "40%,100%": { strokeDashoffset: 0 } },
          "@keyframes tcDot": { "0%,40%": { offsetDistance: "0%", opacity: 0 }, "42%": { opacity: 1 }, "88%": { offsetDistance: "100%", opacity: 1 }, "95%,100%": { offsetDistance: "100%", opacity: 0 } },
          "@keyframes tcPop": { "0%,30%": { opacity: 0, transform: "translateY(6px)" }, "40%,100%": { opacity: 1, transform: "none" } },
          "& .yoke": { strokeDasharray: 600, strokeDashoffset: on ? 0 : 600, animation: on ? "tcDraw 7s ease-out infinite" : "none" },
          "& .dot": { offsetPath: `path("${YOKE}")`, animation: on ? "tcDot 7s ease-in-out infinite" : "none", opacity: 0 },
          "& .pop": { transformBox: "fill-box", animation: on ? "tcPop 7s ease-out infinite" : "none", opacity: on ? 1 : 0 },
        }}
      >
        {/* grid + axes */}
        {[100, 200, 300, 400, 500].map((v) => (
          <g key={v}>
            <line x1={X0} x2={X1} y1={y(v)} y2={y(v)} stroke="#EEF2EF" />
            <text x={X0 - 8} y={y(v) + 4} textAnchor="end" style={{ ...lbl, fontWeight: 600, fill: T.muted, fontSize: 11 }}>{v}</text>
          </g>
        ))}
        <line x1={X0} x2={X0} y1={YTOP - 10} y2={Y0} stroke="#9AA9B6" strokeWidth="1.5" />
        <line x1={X0} x2={X1} y1={Y0} y2={Y0} stroke="#9AA9B6" strokeWidth="1.5" />
        {["0° closed", "45°", "90° open"].map((t, i) => (
          <text key={t} x={X0 + (i * (X1 - X0)) / 2} y={Y0 + 20} textAnchor={i === 0 ? "start" : i === 2 ? "end" : "middle"} style={lbl}>{t}</text>
        ))}
        <text x={14} y={24} style={{ ...lbl, fill: T.muted }}>Nm</text>

        {/* rack & pinion: flat */}
        <line x1={X0} x2={X1} y1={RP} y2={RP} stroke="#9AA9B6" strokeWidth="3" strokeDasharray="8 6" />
        {/* scotch yoke */}
        <path className="yoke" d={YOKE} fill="none" stroke={T.green} strokeWidth="5" strokeLinecap="round" />
        <circle className="dot" r="8" fill="#fff" stroke={T.greenDark} strokeWidth="3" />

        {/* end-of-stroke callouts */}
        <g className="pop">
          <rect x={X0 + 22} y={PTS.a - 24} width="126" height="22" rx="11" fill={T.greenDark} />
          <text x={X0 + 85} y={PTS.a - 9} textAnchor="middle" style={{ ...lbl, fill: "#fff" }}>449 Nm break-out</text>
          <rect x={X1 - 118} y={PTS.c - 34} width="114" height="22" rx="11" fill={T.greenDark} />
          <text x={X1 - 61} y={PTS.c - 19} textAnchor="middle" style={{ ...lbl, fill: "#fff" }}>314 Nm seating</text>
          <text x={(X0 + X1) / 2} y={PTS.b + 22} textAnchor="middle" style={lbl}>188 Nm mid-stroke</text>
        </g>
      </Box>
      <Box sx={{ mt: 1, display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2, fontSize: "0.8rem", fontWeight: 600, color: T.body }}>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 18, height: 4, borderRadius: 2, bgcolor: T.green }} /> PDS scotch yoke (PD100, 5.5 bar)
        </Box>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 18, height: 0, borderTop: "3px dashed #9AA9B6" }} />{"Rack & pinion: same all the way"}
        </Box>
      </Box>
    </Box>
  );
}
