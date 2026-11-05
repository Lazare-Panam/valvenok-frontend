import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/src/app/Common/seo";
import { APPS, appBySlug } from "../data";
import AppView from "./AppView";

export const dynamicParams = false;

export function generateStaticParams() {
  return APPS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = appBySlug((await params).slug);
  if (!a) return {};
  return pageMetadata({ title: a.title, description: a.description, path: `/applications/${a.slug}` });
}

export default async function ApplicationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!appBySlug(slug)) notFound();
  return <AppView slug={slug} />;
}
