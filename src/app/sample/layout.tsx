import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/sample" },
};

export default function SampleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
