import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/actuators/pds" },
  title: { absolute: "PDS Scotch Yoke Pneumatic Actuators, up to 4,635 Nm | Valvenok" },
  description:
    "Susin PDS scotch yoke pneumatic actuators, PDS 45 to PDS 200. Double acting up to 4,635 Nm or spring return, ISO 5211 F03–F16, 2.8–8 bar air. Compare models and get a quote.",
  openGraph: {
    title: "PDS Scotch Yoke Pneumatic Actuators, up to 4,635 Nm | Valvenok",
    description:
      "Susin PDS scotch yoke pneumatic actuators: double acting up to 4,635 Nm or spring return, 10 sizes, ISO 5211 mounting.",
    type: "website",
  },
};

export default function PDSLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
