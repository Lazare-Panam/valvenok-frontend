import type { Metadata } from "next";
import { detailRouteMetadata } from "@/src/app/Common/seo";
import { BALL_VALVES } from "./data";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const valve = BALL_VALVES.find((v) => v.id === id);
  return detailRouteMetadata(
    "/valves/industrial-valves/ball-valves",
    id,
    "Industrial Ball Valves",
    valve?.thumbnail,
  );
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
