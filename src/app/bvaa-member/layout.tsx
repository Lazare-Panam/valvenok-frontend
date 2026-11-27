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
    images: [{ url: "https://www.valvenok.com/images/bvaa/valvenok-team-bvaa-plaque.jpg", alt: "The Valvenok team with our BVAA membership plaque" }],
    locale: "en_GB",
    type: "website",
  },
};

export default function BvaaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
