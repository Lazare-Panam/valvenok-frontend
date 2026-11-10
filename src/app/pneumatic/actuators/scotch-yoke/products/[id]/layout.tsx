import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const model = decodeURIComponent(id);
  const title = `${model} Pneumatic Actuator — Specs & Price | Valvenok`;
  const description = `${model} scotch yoke / rack and pinion pneumatic actuator from Valvenok. View size, action and price, with CE, ATEX and SIL certification, then add to cart.`;
  return {
    alternates: { canonical: `/pneumatic/actuators/scotch-yoke/products/${id}` },
    title: { absolute: title },
    description,
    openGraph: { title, description, type: "website" },
  };
}

export default function ScotchYokeDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
