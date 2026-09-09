import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/actuators/sra" },
};

export default function PneumaticActuatorsSraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
