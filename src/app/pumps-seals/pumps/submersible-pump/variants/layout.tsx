import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pumps-seals/pumps/submersible-pump/variants" },
  title: { absolute: "Submersible Pumps — PW_A & PW_E Series Model Range | Valvenok" },
  description:
    "PW_A and PW_E submersible pumps: standard, sea water, float switch, low suction and level regulator variants for 50Hz and 60Hz operation.",
  openGraph: {
    title: "Submersible Pumps — PW_A & PW_E Series Model Range | Valvenok",
    description:
      "PW_A and PW_E submersible pumps: standard, sea water, float switch, low suction and level regulator variants for 50Hz and 60Hz operation.",
    type: "website",
  },
};

export default function SubmersiblePumpProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
