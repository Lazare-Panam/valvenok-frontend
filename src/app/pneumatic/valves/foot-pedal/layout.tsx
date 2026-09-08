import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foot Pedal Valves",
  description:
    'Heavy-duty pneumatic foot pedal valves for hands-free machine control. 3/2, 4/2 and 5/2 way configurations with BSP 1/4" connections, plus locking and guard variants.',
  openGraph: {
    title: "Foot Pedal Valves | Valvenok",
    description:
      "Heavy-duty pneumatic foot pedal valves for hands-free machine control, 3/2, 4/2 and 5/2 way configurations.",
    type: "website",
  },
};

export default function FootPedalValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
