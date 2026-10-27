import type { Metadata } from "next";
import { detailRouteMetadata } from "@/src/app/Common/seo";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return detailRouteMetadata("/valves/industrial-valves/gate-valves", id, "Gate Valves");
}

export default function ValvesIndustrialValvesGateValvesIdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
