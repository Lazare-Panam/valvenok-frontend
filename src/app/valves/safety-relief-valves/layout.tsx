import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Safety Valves & Pressure Relief Valves | Valvenok",
    description:
      "Pressure relief valves, high-pressure safety valves, rupture discs and thermal relief from partner brands, 50 to 60,000 psi, for gas, liquid and instrument lines.",
    path: "/valves/safety-relief-valves",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/reflief-valves/relief-no-bg.png",
  }),
  keywords: [
    "safety valves",
    "pressure relief valves",
    "safety relief valves",
    "relief valves UK",
    "high pressure relief valves",
    "rupture discs",
  ],
};

export default function SafetyReliefValvesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
