import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const part = decodeURIComponent(id);
  return pageMetadata({
    title: `${part} — PCV Check Valve: Specs & Quote`,
    description: `${part} PCV series stainless steel inline check valve from Valvenok. View specifications and connection options, then request a quote from our UK team.`,
    path: `/valves/instrumentation-valves/check-valves/${id}`,
  });
}

export default function PCVDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
