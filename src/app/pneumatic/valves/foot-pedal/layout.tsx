import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/valves/foot-pedal" },
  title: { absolute: "Pneumatic Foot Pedal Valves — 3/2, 4/2 & 5/2 Way | Valvenok" },
  description:
    "Heavy-duty pneumatic foot pedal valves for hands-free machine control: 3/2, 4/2 and 5/2 way, BSP 1/4\" ports, with locking and guarded versions.",
  openGraph: {
    title: "Pneumatic Foot Pedal Valves — 3/2, 4/2 & 5/2 Way | Valvenok",
    description:
      "Heavy-duty pneumatic foot pedal valves for hands-free machine control: 3/2, 4/2 and 5/2 way, BSP 1/4\" ports, with locking and guarded versions.",
    type: "website",
  },
};

export default function FootPedalValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/pneumatic/valves/foot-pedal" /></>;
}
