import ProductHero from "@/src/app/Common/Products_Page/ProductHero";
import TrustStrip from "@/src/app/Common/Products_Page/TrustStrip";
import ProductCard, { Category } from "@/src/app/Common/Products_Page/ProductCard";
import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "High Pressure Valves — Needle, Ball, Check & Gas",
  description: "High pressure needle, ball, check, DBB and air-operated valves plus hydrogen gas valves from Panam, Hiflux and Youngdo. Request a quote from Valvenok.",
  path: "/high-pressure/valves",
});

const VALVE_CATEGORIES: Category[] = [
  {
    code: "NV",
    title: "Needle Valves",
    subtitle: "Panam & Hiflux — High Pressure & Hydrogen",
    description:
      "Precision needle valves from Panam and Hiflux — SS 316 HP–HP6 (10,000–60,000 psi) plus Hiflux Vee/Regulating stem valves and H70 (70 MPa) hydrogen fuel-station valves. Straight, angle, 3-way and 2-stem manifold patterns.",
    specs: [
      "Panam · Hiflux",
      "10,000 – 60,000 psi",
      "H70 Hydrogen",
      "Straight · Angle · 3-Way",
      "NPT · MP/HP Cone",
    ],
    applications: "High Pressure Instrumentation, Hydrogen Refuelling, Flow Metering, Isolation",
    href: "/high-pressure/valves/needle-valves",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-nv.jpg",
  },
  {
    code: "BV",
    title: "Ball Valves",
    subtitle: "Panam & Hiflux — High Pressure Trunnion",
    description:
      "High-pressure ball valves from Panam and Hiflux — Panam SS 316 HP–HP2 (10,000–20,000 psi) and Hiflux trunnion-style STS 316 with PEEK seats from 10,000 to 60,000 psi. 2-way and 3-way, cone-and-thread, NPT and PT connections.",
    specs: [
      "Panam · Hiflux",
      "10,000 – 60,000 psi",
      "Trunnion Ball",
      "2-Way · 3-Way",
      "Cone · NPT · PT",
    ],
    applications: "High Pressure Shut-off, Diverter Service, Hydrogen, Wellhead",
    href: "/high-pressure/valves/ball-valves",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-bv.jpg",
  },
  {
    code: "GAS",
    title: "Gas & Cylinder Valves",
    subtitle: "Youngdo — Hydrogen · LPG · Industrial Gas",
    description:
      "Youngdo hydrogen, LPG and industrial gas cylinder valves in one filterable grid — 81 models to 70 MPa across cylinder, OPD, piping, tapered, unified, non-return, acetylene, chlorine and tube-trailer categories. KGS, EC79, CGA, BS 341 and ISO certified.",
    specs: [
      "Youngdo",
      "70 MPa Max",
      "81 Models",
      "H₂ · LPG · Industrial Gas",
      "KGS · CGA · ISO",
    ],
    applications: "Hydrogen, LPG & Industrial Gas Cylinders",
    href: "/high-pressure/valves/gas-valves",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/HE-700.png",
  },
  {
    code: "CV",
    title: "Check Valves",
    subtitle: "Hiflux — High Pressure Anti-Backflow",
    description:
      "Hiflux high-pressure check valves — ball-seal and O-ring-seal types in STS 316 from 10,000 to 100,000 psi. One-directional flow prevention with cone-and-thread connections.",
    specs: ["Hiflux", "10,000 – 100,000 psi", "Ball · O-Ring Seal", "STS 316", "Cone & Thread"],
    applications: "Backflow Prevention, Hydrogen, High Pressure Systems",
    href: "/high-pressure/valves/check-valves",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/check-valve.png",
  },
  {
    code: "AOV",
    title: "Air Operated Valves",
    subtitle: "Hiflux — Pneumatic Remote Control",
    description:
      "Hiflux pneumatically actuated valves — normally-open and normally-closed in STS 316 from 10,000 to 60,000 psi. Straight, angle and 3-way patterns for automated remote control.",
    specs: ["Hiflux", "10,000 – 60,000 psi", "Normal Open · Closed", "STS 316", "Straight · Angle · 3-Way"],
    applications: "Automated Shut-off, Remote Control, Hydrogen",
    href: "/high-pressure/valves/aov",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/air-operated-valve.png",
  },
  {
    code: "DBB",
    title: "Double Block & Bleed",
    subtitle: "Panam — High Pressure Isolation + Bleed",
    description:
      "Panam HP double block & bleed valves in SS 316 to 20,000 psi — Ball-Needle-Ball and Needle-Needle configurations with integral bleed and NPT or MP Cone & Thread connections.",
    specs: ["Panam", "15,000 & 20,000 psi", "BNB · NN", "SS 316", "NPT · MP Cone"],
    applications: "Instrument Isolation, Transmitter Hook-up, High Pressure Bleed",
    href: "/high-pressure/valves/dbb-valves",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-dbb.jpg",
  },
];

const TRUST_POINTS = [
  { value: "Panam · Hiflux", label: "Brands" },
  { value: "60,000 psi", label: "Max Pressure" },
  { value: "H70", label: "Hydrogen Service" },
  { value: "SS 316", label: "Body Material" },
];

export default function HighPressureValvesPage() {
  return (
    <>
      <ProductHero
        title="High Pressure Valves"
        subtitle="Needle & Ball Valves — Panam & Hiflux"
        description="High-pressure and hydrogen valves from Panam and Hiflux — needle and ball valves rated to 60,000 psi with H70 hydrogen fuel-station options, in stainless steel with cone-and-thread, NPT and PT connections."
        imageSrc="https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-nv.jpg"
        imageAlt="High Pressure Valves"
        breadcrumb="Products / High Pressure / Valves"
      />

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {VALVE_CATEGORIES.map((c) => (
            <ProductCard key={c.code} category={c} />
          ))}
        </div>
      </section>

      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
