import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/categories" },
};

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
