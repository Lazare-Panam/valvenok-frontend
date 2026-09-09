import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/track-order" },
};

export default function TrackOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
