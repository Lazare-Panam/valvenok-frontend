import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/valves/tg" },
  title: { absolute: "TG Series 2/2, 3/2 & 5/2 Way Solenoid Valves | Valvenok" },
  description:
    "TG series pneumatic solenoid valves in 2/2, 3/2, 5/2 and 5/3 way configurations. Compare models to find the valve you need, then request a quote.",
  openGraph: {
    title: "TG Series 2/2, 3/2 & 5/2 Way Solenoid Valves | Valvenok",
    description:
      "TG series pneumatic solenoid valves in 2/2, 3/2, 5/2 and 5/3 way configurations. Compare models to find the valve you need, then request a quote.",
    type: "website",
  },
};

export default function TGValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/pneumatic/valves/tg" /></>;
}
