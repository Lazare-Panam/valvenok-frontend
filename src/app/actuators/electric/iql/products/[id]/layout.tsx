import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const model = decodeURIComponent(id);
  const title = `${model} Electric Linear Actuator — Specs & Quote | Valvenok`;
  const description = `${model} IQL series electric linear actuator from Valvenok. View thrust, stroke, speed, enclosure and weight, then request a quote from our UK team.`;
  return {
    alternates: { canonical: `/actuators/electric/iql/products/${id}` },
    title: { absolute: title },
    description,
    openGraph: { title, description, url: `/actuators/electric/iql/products/${id}`, type: "website" },
  };
}

export default function IQLDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
