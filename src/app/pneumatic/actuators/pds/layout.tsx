import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/actuators/pds" },
  title: { absolute: "PDS Series Scotch Yoke Pneumatic Actuators, 10–4,000 Nm | Valvenok" },
  description:
    "Scotch-Yoke pneumatic actuators engineered for superior break-out torque. Double acting and spring return, 10–4,000 Nm, ATEX certified, SIL3 capable.",
  openGraph: {
    title: "PDS Series Scotch Yoke Pneumatic Actuators, 10–4,000 Nm | Valvenok",
    description:
      "Scotch-Yoke pneumatic actuators, 10–4,000 Nm torque, ATEX certified, SIL3 capable, double acting and spring return configurations.",
    type: "website",
  },
};

export default function PDSLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
