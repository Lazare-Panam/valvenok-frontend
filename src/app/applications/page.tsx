import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";
import ApplicationsView from "./ApplicationsView";

export const metadata: Metadata = pageMetadata({
  title: "Applications: Valves and Fittings by Industry | Valvenok",
  description:
    "Valves, fittings, actuators and pumps for hydrogen, oil & gas, chemical, power, water, marine, LNG, instrumentation and automation. UK supply.",
  path: "/applications",
});

export default function ApplicationsPage() {
  return <ApplicationsView />;
}
