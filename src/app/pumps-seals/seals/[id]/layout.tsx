import type { Metadata } from "next";
import { detailRouteMetadata } from "@/src/app/Common/seo";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return detailRouteMetadata("/pumps-seals/seals", id, "Mechanical Seals");
}

export default function PumpsSealsSealsIdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
