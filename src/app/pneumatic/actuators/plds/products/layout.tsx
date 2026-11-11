import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/actuators/plds/products" },
  title: { absolute: "PLDS Series Linear Pneumatic Actuator Models | Valvenok" },
  description:
    "Browse PLDS series linear pneumatic actuator models. Filter by model and stem size to find the configuration you need, then request a quote from Valvenok.",
  openGraph: {
    title: "PLDS Series Linear Pneumatic Actuator Models | Valvenok",
    description: "Browse PLDS series linear pneumatic actuator models. Filter by model and stem size to find the configuration you need, then request a quote from Valvenok.",
    type: "website",
  },
};

export default function PLDSActuatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
