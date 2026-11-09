import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const part = decodeURIComponent(id);
  return pageMetadata({
    title: `${part} — Relief Valve: Specs & Quote`,
    description: `${part} instrumentation relief valve from Valvenok. View specifications, spring range and connection options, then request a quote from our UK team.`,
    path: `/valves/instrumentation-valves/relief-valves/${id}`,
  });
}

export default function ReliefValveDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
