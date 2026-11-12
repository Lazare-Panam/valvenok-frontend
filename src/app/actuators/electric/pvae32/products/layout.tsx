import type { Metadata } from "next";
import { PVE_IMAGE } from "../pveData";

const TITLE = "Danfoss PVE Actuator Models: PVEO, PVEM, PVEA, PVEH, PVES | Valvenok";
const DESCRIPTION =
  "Danfoss PVE electrohydraulic actuators for PVG valves: on/off, proportional, PVED-CC CAN bus and PVE-EX explosion proof. Supply, reaction times and connectors. Request a quote.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric/pvae32/products" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [PVE_IMAGE] },
};

export default function PVEProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
