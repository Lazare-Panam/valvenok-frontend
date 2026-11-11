import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const model = decodeURIComponent(id);
  const title = `${model} Electric Actuator — Specs & Quote | Valvenok`;
  const description = `${model} ITQ series quarter-turn electric actuator from Valvenok. View torque, operating time, mounting, currents and weight, then request a quote from our UK team.`;
  return {
    alternates: { canonical: `/actuators/electric/itq/products/${id}` },
    title: { absolute: title },
    description,
    openGraph: { title, description, url: `/actuators/electric/itq/products/${id}`, type: "website" },
  };
}

export default function ITQDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
