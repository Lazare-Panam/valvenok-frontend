import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric/iql/products" },
  title: { absolute: "IQL Series Electric Linear Actuators — Models | Valvenok" },
  description:
    "Browse IQL series electric linear actuator models. Filter by model and stroke size to find the configuration you need, then request a quote from Valvenok.",
  openGraph: {
    title: "IQL Series Electric Linear Actuators — Models | Valvenok",
    description:
      "Browse IQL series electric linear actuator models. Filter by model and stroke size to find the configuration you need, then request a quote from Valvenok.",
    type: "website",
  },
};

export default function IQLActuatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/actuators/electric/iql/products" /></>;
}
