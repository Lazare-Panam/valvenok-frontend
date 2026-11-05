import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";
import HydrogenValves from "@/src/app/hydrogen-cryogenic/components/HydrogenValves";

// Hydrogen Valves section page (menu: Hydrogen & High Pressure › Hydrogen Valves).
// Stays on its indexed URL for now; the tab moves to clean URLs with 301s later.
export const metadata: Metadata = pageMetadata({
  title: "Hydrogen & High Pressure Valves | Panam & Hiflux",
  description:
    "Hydrogen and high-pressure needle, ball, check, air-operated, DBB, safety and special valves from Panam and Hiflux, 1,000 to 100,000 psi. Get a quote.",
  path: "/high-pressure/valves",
});

export default function HydrogenValvesPage() {
  return <HydrogenValves />;
}
