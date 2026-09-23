import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";

import ProcessValvesGrid from "../../valves/ProcessValvesGrid";

const UTAM_LOGO =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/utam-logo.png";

export const metadata: Metadata = {
  alternates: { canonical: "/brands/utam-valves" },
  title: "UTAM Syncercon Marine Valves",
  description:
    "Valvenok supplies the UTAM Syncercon marine valve range — bolted bonnet and union bonnet gate and globe valves in ASME Class 150/300, DN15 to DN600, Lloyd's Register approved for marine, shipbuilding and offshore seawater service.",
};

const UTAM_VALVE_SERIES: Category[] = [
  {
    code: "UTM-BBG",
    title: "Gate Valve — Bolted Bonnet",
    subtitle: "Bolted Bonnet Gate Valve — DN15 to DN600",
    description:
      "UTAM Syncercon bolted bonnet gate valve designed for marine and shipbuilding applications, offering reliable shut-off performance, leak-proof operation, and long service life in seawater and offshore environments. Available with rising and non-rising stem in ASME Class 150/300 across DN15 to DN600.",
    specs: [
      '½" to 24" (DN15 to DN600)',
      "ASME Class 150 / 300",
      "Bolted Bonnet",
      "Rising & Non-Rising Stem",
      "Handwheel & Gearbox Operated",
      "Lloyd's Register Approved",
    ],
    applications: "Marine, Shipbuilding, Offshore, Seawater Service",
    href: "/valves/gate-valves/utam-bolted-bonnet-gate-valve",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/bolted-gate-valve.png",
    logoUrl: UTAM_LOGO,
  },
  {
    code: "UTM-UBG",
    title: "Gate Valve — Union Bonnet",
    subtitle: "Union Bonnet Gate Valve — DN15 to DN100",
    description:
      "UTAM Syncercon union bonnet gate valve, a linear motion valve providing secure sealing and easy maintenance, used to start or stop fluid flow in marine and shipbuilding applications. Handwheel operated with rising stem, in ASME Class 150/300 & PN32 across DN15 to DN100.",
    specs: [
      '½" to 4" (DN15 to DN100)',
      "ASME Class 150 / 300 & PN32",
      "Union Bonnet",
      "Inside Screw, Rising Stem",
      "Handwheel Operated",
      "Lloyd's Register Approved",
    ],
    applications: "Marine, Shipbuilding, Offshore, Seawater Service",
    href: "/valves/gate-valves/utam-union-bonnet-gate-valve",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/union-bonnet-gate.png",
    logoUrl: UTAM_LOGO,
  },
  {
    code: "UTM-BBV",
    title: "Globe Valve — Bolted Bonnet",
    subtitle: "Bolted Bonnet Globe Valve — DN15 to DN600",
    description:
      "UTAM Syncercon globe valve designed for marine and shipbuilding applications, providing precise flow control and reliable performance in seawater and offshore environments. Bolted bonnet with outside screw & yoke, rising stem, in ASME Class 150/300 across DN15 to DN600.",
    specs: [
      '½" to 24" (DN15 to DN600)',
      "ASME Class 150 / 300",
      "Bolted Bonnet",
      "Outside Screw & Yoke, Rising Stem",
      "Handwheel & Gearbox Operated",
      "Lloyd's Register Approved",
    ],
    applications: "Marine, Shipbuilding, Offshore, Seawater Service",
    href: "/valves/industrial-valves/globe-valve/utam-bolted-bonnet-globe-valve",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/globe-bonnet-valve.png",
    logoUrl: UTAM_LOGO,
  },
  {
    code: "UTM-UBV",
    title: "Globe Valve — Union Bonnet",
    subtitle: "Union Bonnet Globe Valve — DN15 to DN100",
    description:
      "UTAM Syncercon globe valve, a linear motion valve with a union bonnet design, used to regulate or stop fluid flow with precise control in marine and shipbuilding applications. Handwheel operated with rising stem, in ASME Class 150/300 & PN32 across DN15 to DN100.",
    specs: [
      '½" to 4" (DN15 to DN100)',
      "ASME Class 150 / 300 & PN32",
      "Union Bonnet",
      "Inside Screw, Rising Stem",
      "Handwheel Operated",
      "Lloyd's Register Approved",
    ],
    applications: "Marine, Shipbuilding, Offshore, Seawater Service",
    href: "/valves/industrial-valves/globe-valve/utam-union-bonnet-globe-valve",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/bolted-bonnet-valve.png",
    logoUrl: UTAM_LOGO,
  },
];

const TRUST_POINTS = [
  { value: "CL 150 / 300", label: "Pressure Classes" },
  { value: "DN15 – DN600", label: "Size Range" },
  { value: "Gate & Globe", label: "Valve Types" },
  { value: "Bolted & Union Bonnet", label: "Design Options" },
  { value: "Lloyd's Register Approved", label: "Accreditation" },
];

export default function UtamValvesBrandPage() {
  return (
    <>
      <ProductHero
        title="UTAM Syncercon Marine Valves"
        subtitle="Marine & Shipbuilding Valve Range — Gate & Globe"
        description="The UTAM Syncercon marine valve range — bolted bonnet and union bonnet gate and globe valves engineered for reliable shut-off, precise flow control and long service life in seawater and offshore environments. ASME Class 150/300 across DN15 to DN600, Lloyd's Register approved and built for dependable, leak-tight performance in marine, shipbuilding and offshore service."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/bolted-gate-valve.png"
        imageAlt="UTAM Syncercon Marine Valves"
        breadcrumb="Products / Valves / UTAM Valves"
      />
      <ProcessValvesGrid families={UTAM_VALVE_SERIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
