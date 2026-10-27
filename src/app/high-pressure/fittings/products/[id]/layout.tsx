import type { Metadata } from "next";

// Each fitting detail page canonicalises to itself, rather than inheriting the
// listing's canonical from the parent layout.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return {
    alternates: {
      canonical: `/high-pressure/fittings/products/${encodeURIComponent(id)}`,
    },
  };
}

export default function HighPressureFittingDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
