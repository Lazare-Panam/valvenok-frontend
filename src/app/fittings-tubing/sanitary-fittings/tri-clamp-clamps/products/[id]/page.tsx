import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CLAMPS, CLAMP_BASE } from "../../clamps";
import ClampDetail from "./ClampDetail";

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return CLAMPS.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const c = CLAMPS.find((x) => x.id === id);
  if (!c) return {};
  const title = `${c.partNumber} ${c.type} Tri-Clamp, ${c.short} | Valvenok`;
  const description = `Adaptix ${c.type.toLowerCase()} tri-clamp ${c.partNumber} (${c.typeCode}), ${c.size}. ${c.pressure} working pressure, stainless steel, EN 10204 3.1 certificate.`;
  return {
    alternates: { canonical: `${CLAMP_BASE}/products/${c.id}` },
    title: { absolute: title },
    description,
    openGraph: { title, description, type: "website", images: [c.img] },
  };
}

export default async function ClampModelPage({ params }: Props) {
  const { id } = await params;
  if (!CLAMPS.some((x) => x.id === id)) notFound();
  return <ClampDetail id={id} />;
}
