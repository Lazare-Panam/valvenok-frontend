import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = pageMetadata({
  title: "Double Acting Pneumatic Actuators & 3/2 Valves",
  description:
    "Double acting pneumatic actuators and 3/2 actuator valves for industrial process control, with BSP 1/8\" connections.",
  path: "/pneumatic/actuators/sra",
});

export default function PneumaticActuatorsSraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/pneumatic/actuators/sra" /></>;
}
