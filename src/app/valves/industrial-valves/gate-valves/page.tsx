import type { Metadata } from "next";
import ProductHero from "@/src/app/Common/Products_Page/ProductHero";
import TrustStrip from "@/src/app/Common/Products_Page/TrustStrip";
import { Category } from "@/src/app/Common/Products_Page/ProductCard";
import ProcessValvesGrid from "../../ProcessValvesGrid";
import { pageMetadata } from "@/src/app/Common/seo";
import RelatedLinks from "@/src/app/Common/Products_Page/RelatedLinks";

export const metadata: Metadata = pageMetadata({
  title: "Industrial Gate Valves — Bolted & Union Bonnet | Valvenok",
  description:
    "Bolted bonnet and union bonnet gate valves from UTAM Syncercon for reliable shut-off and isolation in marine, shipbuilding and industrial service.",
  path: "/valves/industrial-valves/gate-valves",
});

const GATE_VALVE_SERIES: Category[] = [
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
    href: "/valves/industrial-valves/gate-valves/utam-bolted-bonnet-gate-valve",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/bolted-gate-valve.png",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/utam-logo.png",
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
    href: "/valves/industrial-valves/gate-valves/utam-union-bonnet-gate-valve",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/union-bonnet-gate.png",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/utam-logo.png",
  },
];

const TRUST_POINTS = [
  { value: "CL 150 / 300", label: "Pressure Classes" },
  { value: "DN15–DN600", label: "Size Range" },
  { value: "Bolted & Union Bonnet", label: "Design Options" },
  { value: "UTAM Syncercon", label: "Manufacturer" },
  { value: "Lloyd's Register Approved", label: "Accreditation" },
];

export default function GateValvesIndexPage() {
  return (
    <>
      <ProductHero
        title="Gate Valves"
        subtitle="Industrial Gate Valve Range — UTAM Syncercon"
        description="Valvenok supplies bolted bonnet and union bonnet gate valves engineered for reliable shut-off performance, leak-proof operation and long service life in marine, shipbuilding and offshore environments. From bolted bonnet designs rated to DN600 to compact union bonnet valves for smaller-bore isolation duty — every valve sourced from UTAM Syncercon and built for dependable, leak-tight shut-off."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/bolted-gate-valve.png"
        imageAlt="Industrial Gate Valves"
        breadcrumb="Products / Valves / Gate Valves"
      />
      <ProcessValvesGrid families={GATE_VALVE_SERIES} />
      <RelatedLinks links={[{ label: "Gate Valve Sourcing & Specification Support", href: "/gate-valves" }]} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
