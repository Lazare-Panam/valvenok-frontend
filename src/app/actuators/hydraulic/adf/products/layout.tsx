import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Panam HRSDA & HRSSA Hydraulic Actuator Models",
  description:
    "Panam HRSDA double-acting and HRSSA spring-return hydraulic actuators at 100, 130 and 160 bar. Compare torque by series and request a quote.",
  path: "/actuators/hydraulic/adf/products",
});

export default function ActuatorsHydraulicAdfProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
