import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "High Pressure End Fittings",
  description:
    "Browse high pressure end fittings — filter by fitting type, pressure rating, thread type, and size to find the exact configuration you need.",
  openGraph: {
    title: "High Pressure End Fittings | Valvenok",
    description:
      "Browse high pressure end fittings — filter by fitting type, pressure rating, thread type, and size.",
    type: "website",
  },
};

export default function HPEndFittingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
