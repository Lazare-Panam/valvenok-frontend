import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const model = decodeURIComponent(id);
  const title = `${model} Compact Electric Actuator — Specs & Quote | Valvenok`;
  const description = `${model} ITQ Micro series compact quarter-turn electric actuator from Valvenok. View torque, operating time, mounting and weight, then request a quote from our UK team.`;
  return {
    alternates: { canonical: `/actuators/electric/itq-micro/products/${id}` },
    title: { absolute: title },
    description,
    openGraph: { title, description, url: `/actuators/electric/itq-micro/products/${id}`, type: "website" },
  };
}

export default function ITQMicroDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
