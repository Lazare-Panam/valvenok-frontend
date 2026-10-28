import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/instrumentation-fittings/tube-fittings/die-electric" },
  title: { absolute: "Dielectric Tube Fittings & Thread Sealing Gaskets | Valvenok" },
  description:
    "Stainless steel dielectric tube fittings for electrical isolation, plus precision sealing gaskets for parallel and internal threads. Request a quote.",
  openGraph: {
    title: "Dielectric Tube Fittings & Thread Sealing Gaskets | Valvenok",
    description:
      "Stainless steel dielectric tube fittings for electrical isolation, plus precision sealing gaskets for parallel and internal threads. Request a quote.",
    type: "website",
  },
};

export default function DielectricGasketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/fittings-tubing/instrumentation-fittings/tube-fittings/die-electric" /></>;
}
