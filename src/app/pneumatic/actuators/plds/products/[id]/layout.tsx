import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const model = decodeURIComponent(id);
  const title = `${model} PLDS Linear Pneumatic Actuator — Specs & Quote | Valvenok`;
  const description = `${model} Panam PLDS linear pneumatic actuator from Valvenok. View piston area, stem size and travel specifications, then request a quote from our UK team.`;
  return {
    alternates: { canonical: `/pneumatic/actuators/plds/products/${id}` },
    title: { absolute: title },
    description,
    openGraph: { title, description, type: "website" },
  };
}

export default function PLDSDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
