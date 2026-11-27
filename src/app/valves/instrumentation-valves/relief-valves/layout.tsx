import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Instrumentation Relief Valves, 50–15,000 psi",
  description:
    "RVL low pressure and RVH high pressure SS 316 instrumentation relief valves, plus PRVH-10K and PRVH-15K. NPT, BSPT and BSPP threads, spring ranges 50 to 15,000 psi.",
  path: "/valves/instrumentation-valves/relief-valves",
  image: "https://pblol2.blob.core.windows.net/panam-images/products/reflief-valves/relief-no-bg.png",
});

export default function ValvesInstrumentationValvesReliefValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
