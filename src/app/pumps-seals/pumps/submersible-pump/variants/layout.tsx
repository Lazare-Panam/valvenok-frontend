import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pumps-seals/pumps/submersible-pump/variants" },
  title: "Submersible Pumps",
  description:
    "PW_A and PW_E series pumps across standard, sea water, float ball switch, low suction and level regulator variants, 50Hz and 60Hz operation.",
  openGraph: {
    title: "Submersible Pumps | Valvenok",
    description:
      "PW_A and PW_E series pumps across standard, sea water, float ball switch, low suction and level regulator variants, 50Hz and 60Hz operation.",
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
