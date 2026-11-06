import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ENDS, ENDS_BASE } from "../../ends";
import EndDetail from "./EndDetail";

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return ENDS.map((e) => ({ id: e.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const e = ENDS.find((x) => x.id === id);
  if (!e) return {};
  const what = e.slug === "ferrule" ? `Tri-Clamp Ferrule, Tube ${e.tubeOd} mm` : e.slug === "blind" ? `Tri-Clamp Blind Cover, ${e.short}` : `Sight Glass End Cap, ${e.short}`;
  const title = `${e.partNumber} ${what} | Valvenok`;
  const description = `Adaptix ${e.kind.toLowerCase()} ${e.partNumber}: ${e.dims}, fits the ${e.clampA} mm tri-clamp (${e.size}). Stainless steel, EN 10204 3.1 certificate.`;
  return {
    alternates: { canonical: `${ENDS_BASE}/products/${e.id}` },
    title: { absolute: title },
    description,
    openGraph: { title, description, type: "website", images: [e.img] },
  };
}

export default async function EndModelPage({ params }: Props) {
  const { id } = await params;
  if (!ENDS.some((x) => x.id === id)) notFound();
  return <EndDetail id={id} />;
}
