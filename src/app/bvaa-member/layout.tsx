import { Metadata } from "next";

const TITLE = "BVAA Member | British Valve & Actuator Association | Valvenok";
const DESCRIPTION =
  "Valvenok is a member of the BVAA, the British Valve & Actuator Association: what the association does, what membership involves, and what it means when you buy valves and actuators from us.";

export const metadata: Metadata = {
  alternates: { canonical: "/bvaa-member" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.valvenok.com/bvaa-member",
    siteName: "Valvenok",
    images: [{ url: "https://pblol2.blob.core.windows.net/valvenok-images/certfiicates/bvaa-logo.png", alt: "BVAA member" }],
    locale: "en_GB",
    type: "website",
  },
};

export default function BvaaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
