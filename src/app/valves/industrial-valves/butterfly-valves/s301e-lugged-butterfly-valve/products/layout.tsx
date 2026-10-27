import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "S301E Lugged Butterfly Valve Models",
  description:
    "Compare SIRCA S301E lugged butterfly valve sizes 1½\" to 8\" with EPDM or nitrile liner, gearbox operated, ISO 5211 mounting. Request a quote.",
  path: "/valves/industrial-valves/butterfly-valves/s301e-lugged-butterfly-valve/products",
});

export default function ValvesIndustrialValvesButterflyValvesS301eLuggedButterflyValveProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
