import ProductHero from "@/src/app/Common/Products_Page/ProductHero";
import TrustStrip from "@/src/app/Common/Products_Page/TrustStrip";
import ProductCard, { Category } from "@/src/app/Common/Products_Page/ProductCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/high-pressure/valves" },
};

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
