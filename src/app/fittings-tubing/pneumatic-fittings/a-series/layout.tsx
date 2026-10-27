import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "SPAC A-Series Push-In Pneumatic Fittings",
  description:
    "SPAC A-Series grey push-in fittings for polyurethane and nylon tubing: connectors, elbows, tees and multi-connectors in BSP thread sizes.",
  path: "/fittings-tubing/pneumatic-fittings/a-series",
});

export default function FittingsTubingPneumaticFittingsASeriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
