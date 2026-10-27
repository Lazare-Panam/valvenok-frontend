import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "S301E Wafer Gearbox Valve Models",
  description:
    "Compare SIRCA S301E gearbox-operated wafer butterfly valve sizes 1½\" to 12\" with EPDM or nitrile liner and ISO 5211 mounting. Request a quote.",
  path: "/valves/industrial-valves/butterfly-valves/s301e-wafer-butterfly-valve/products",
});

export default function ValvesIndustrialValvesButterflyValvesS301eWaferButterflyValveProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
