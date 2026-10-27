import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cryogenic Butt Welded Butterfly Valve",
  description:
    "Value Valves cryogenic butterfly valves in double eccentric and triple offset designs, 2\" to 36\", for LNG, LPG and petrochemical service.",
  path: "/valves/industrial-valves/butterfly-valves/butt-welded-butterfly-valve",
});

export default function ValvesIndustrialValvesButterflyValvesButtWeldedButterflyValveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
