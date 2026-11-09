import type { Metadata } from "next";
import ElectricActuatorsView from "./ElectricActuatorsView";

const TITLE = "Electric Actuators: Quarter-Turn, Multi-Turn & Linear | Valvenok";
const DESCRIPTION =
  "Electric valve actuators from Susin, KOSAPLUS and Danfoss: quarter-turn 8–9,000 Nm, multi-turn, linear up to 25 kN and fail-safe spring return. Request a quote.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/actuators/electric",
    siteName: "Valvenok",
    type: "website",
    images: ["https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itq.webp"],
  },
};

export default function ElectricActuatorsPage() {
  return <ElectricActuatorsView />;
}
