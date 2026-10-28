import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/actuators/pds/products" },
  title: { absolute: "PDS Series Scotch Yoke Pneumatic Actuator Models | Valvenok" },
  description:
    "Browse PDS series scotch yoke pneumatic actuator models. Filter by series, model and angle to find the configuration you need, then request a quote.",
  openGraph: {
    title: "PDS Series Scotch Yoke Pneumatic Actuator Models | Valvenok",
    description:
      "Browse PDS series scotch yoke pneumatic actuator models. Filter by series, model and angle to find the configuration you need, then request a quote.",
    type: "website",
  },
};

export default function PDActuatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/pneumatic/actuators/pds/products" /></>;
}
