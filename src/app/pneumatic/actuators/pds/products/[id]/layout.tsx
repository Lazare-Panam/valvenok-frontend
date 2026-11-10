import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const model = decodeURIComponent(id);
  const title = `${model} Pneumatic Actuator — Specs & Quote | Valvenok`;
  const description = `${model} Panam pneumatic actuator from Valvenok. View torque, air consumption and mounting specifications, then request a quote from our UK team.`;
  return {
    alternates: { canonical: `/pneumatic/actuators/pds/products/${id}` },
    title: { absolute: title },
    description,
    openGraph: { title, description, type: "website" },
  };
}

export default function PDActuatorDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
