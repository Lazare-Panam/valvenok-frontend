import type { Metadata } from "next";

const TITLE = "ITM Actuators | Valvenok";
const DESCRIPTION =
  "ITM pneumatic and electric valve actuators across multiple body types and models.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/logo-2.png";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    images: [IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

export default function ITMActuatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
