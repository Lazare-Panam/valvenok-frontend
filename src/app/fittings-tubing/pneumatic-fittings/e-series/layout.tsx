import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "E-Series Push-In Pneumatic Fittings, 4–16mm",
  description:
    "E-Series push-in fittings for 4mm to 16mm tube: connectors, elbows, tees, Y-fittings, banjos, flow controls and hand valves with BSP and M5 threads. Prices in GBP.",
  path: "/fittings-tubing/pneumatic-fittings/e-series",
});

export default function FittingsTubingPneumaticFittingsESeriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
