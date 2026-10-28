import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/air-gun" },
  title: { absolute: "SPAC Pneumatic Air Blow Guns — Industrial Cleaning | Valvenok" },
  description:
    "SPAC pneumatic air blow guns for industrial cleaning and drying applications. Available in multiple nozzle configurations.",
  openGraph: {
    title: "SPAC Pneumatic Air Blow Guns — Industrial Cleaning | Valvenok",
    description:
      "SPAC pneumatic air blow guns for industrial cleaning and drying applications. Available in multiple nozzle configurations.",
    type: "website",
  },
};

export default function AirGunLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
