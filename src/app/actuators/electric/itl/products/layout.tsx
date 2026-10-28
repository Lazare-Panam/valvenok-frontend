import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric/itl/products" },
  title: { absolute: "ITL Series Electric Linear Actuators — Models | Valvenok" },
  description:
    "Browse ITL series electric linear valve actuators. Filter by series and model to find the configuration you need, then request a quote from Valvenok.",
  openGraph: {
    title: "ITL Series Electric Linear Actuators — Models | Valvenok",
    description:
      "Browse ITL series electric linear valve actuators. Filter by series and model to find the configuration you need, then request a quote from Valvenok.",
    type: "website",
  },
};

export default function ElectricActuatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/actuators/electric/itl/products" /></>;
}
