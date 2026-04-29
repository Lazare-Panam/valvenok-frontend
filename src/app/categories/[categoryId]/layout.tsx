import { Metadata } from "next";

type Props = {
  params: Promise<{ categoryId: string }>;
};

const categoryMetadata: Record<string, { title: string; description: string }> = {
  "instrumentation-fittings": {
    title: "Instrumentation Fittings, Compression Fitting and Tube Fittings Range",
    description:
      "UK-based supplier of instrumentation fittings and stainless steel fittings for high-pressure systems, with fast global delivery for engineers and buyers.",
  },
  "actuators": {
    title: "Valve Actuators and Pneumatic Actuator Solutions for Industrial Use",
    description:
      "Browse Valvenok's pneumatic actuator and valve actuators range, with engineering-grade torque options for automated valve control and fast UK dispatch.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoryId = (await params).categoryId;

  const custom = categoryMetadata[categoryId];

  const title = custom?.title ?? categoryId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ") + " Collection";

  const description = custom?.description ??
    `Browse our professional range of ${categoryId.replace(/-/g, " ")}. High-performance industrial components from Valvenok UK.`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Valvenok Engineering`,
      description,
      url: `https://www.valvenok.com/categories/${categoryId}`,
    },
  };
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}