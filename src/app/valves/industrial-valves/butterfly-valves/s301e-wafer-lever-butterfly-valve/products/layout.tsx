import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "S301E Wafer Lever Valve Models",
  description:
    "Compare SIRCA S301E lever-operated wafer butterfly valve sizes 1½\" to 8\" with EPDM or nitrile liner and 10-position leverlock handle.",
  path: "/valves/industrial-valves/butterfly-valves/s301e-wafer-lever-butterfly-valve/products",
});

export default function ValvesIndustrialValvesButterflyValvesS301eWaferLeverButterflyValveProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
