import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/high-pressure/cone-threaded-nipples" },
};

export default function HighPressureConeThreadedNipplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
