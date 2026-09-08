import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KE Series",
  description:
    "KE001 through KE120, each available in standard or reduced-torque (#) variants, covering 4–1200 Nm.",
  openGraph: {
    title: "KE Series | Valvenok",
    description:
      "KE001 through KE120, each available in standard or reduced-torque (#) variants, covering 4–1200 Nm.",
    type: "website",
  },
};

export default function KESeriesProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
