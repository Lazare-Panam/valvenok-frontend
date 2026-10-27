import type { Metadata } from "next";
import { detailRouteMetadata } from "@/src/app/Common/seo";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return detailRouteMetadata("/valves/industrial-valves/globe-valve", id, "Globe Valves");
}

export default function ValvesIndustrialValvesGlobeValveIdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
