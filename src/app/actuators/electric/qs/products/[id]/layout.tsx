import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const model = decodeURIComponent(id);
  const title = `${model} Fail-Safe Electric Actuator — Specs & Quote | Valvenok`;
  const description = `${model} QS series spring-return fail-safe electric actuator from Valvenok. View torque, spring speed, mounting and weight, then request a quote from our UK team.`;
  return {
    alternates: { canonical: `/actuators/electric/qs/products/${id}` },
    title: { absolute: title },
    description,
    openGraph: { title, description, url: `/actuators/electric/qs/products/${id}`, type: "website" },
  };
}

export default function QSDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
