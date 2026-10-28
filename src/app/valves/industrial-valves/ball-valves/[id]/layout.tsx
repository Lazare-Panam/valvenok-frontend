import type { Metadata } from "next";
import { detailRouteMetadata } from "@/src/app/Common/seo";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return detailRouteMetadata("/valves/industrial-valves/ball-valves", id, "Industrial Ball Valves");
}

export default async function ValvesIndustrialValvesBallValvesIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      {children}
      <RangeCopy path={`/valves/industrial-valves/ball-valves/${id}`} />
    </>
  );
}
