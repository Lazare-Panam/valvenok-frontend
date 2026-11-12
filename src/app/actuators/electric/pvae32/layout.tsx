import type { Metadata } from "next";
import { PVE_IMAGE } from "./pveData";

const TITLE = "Danfoss PVE Electrohydraulic Actuators for PVG Valves | Valvenok";
const DESCRIPTION =
  "Danfoss PVE actuators for PVG proportional valves: on/off PVEO, proportional PVEM, PVEA, PVEH and PVES, PVED-CC CAN bus and PVE-EX explosion proof. 9–32 VDC, −40 to +90 °C.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric/pvae32" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [PVE_IMAGE] },
};

export default function PVELayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
