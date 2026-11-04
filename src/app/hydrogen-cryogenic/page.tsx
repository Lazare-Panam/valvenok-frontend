import type { Metadata } from "next";
import HydrogenHub from "./components/HydrogenHub";

// One umbrella page for the "Hydrogen & High Pressure" menu tab. It replaces the
// separate Hydrogen & Cryogenic and High Pressure overview pages.
const TITLE = "Hydrogen & High Pressure Valves, Fittings, Tubing | Valvenok";
const DESCRIPTION =
  "Hydrogen and high-pressure valves, cone & thread fittings, tubing and cylinder valves from Panam, Hiflux and Youngdo, up to 150,000 psi. UK support.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/HE-700.png";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "https://www.valvenok.com/hydrogen-cryogenic" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/hydrogen-cryogenic", type: "website", images: [IMAGE] },
};

export default function HydrogenHighPressurePage() {
  return <HydrogenHub />;
}
