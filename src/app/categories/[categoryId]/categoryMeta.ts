// Shared by the server layout (metadata) and the client page (intro copy).
export const categoryMetadata: Record<string, { title: string; description: string }> = {
  "instrumentation-fittings": {
    title: "Instrumentation Fittings — Tube & Compression Fittings | Valvenok",
    description:
      "UK-based supplier of instrumentation fittings and stainless steel fittings for high-pressure systems, with UK and international delivery for engineers and buyers.",
  },
  "actuators": {
    title: "Valve Actuators — Pneumatic & Electric Actuator Range | Valvenok",
    description:
      "Browse Valvenok's pneumatic and electric valve actuators, with torque options for automated valve control and UK-based technical support.",
  },
  "ball-valves": {
    title: "Ball Valves — Industrial & Instrumentation Ball Valves | Valvenok",
    description:
      "Browse Valvenok's range of industrial and instrumentation ball valves for process, oil & gas and utility service. Compare products and request a quote.",
  },
  "mechanical-seals": {
    title: "Mechanical Seals — Industrial Pump & Agitator Seals | Valvenok",
    description:
      "Browse Valvenok's range of mechanical seals for industrial pumps and agitators. Compare products and request a quote from our UK team.",
  },
};

export function categoryName(categoryId: string): string {
  return categoryId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function categoryDescription(categoryId: string): string {
  return (
    categoryMetadata[categoryId]?.description ??
    `Browse Valvenok's range of ${categoryId.replace(/-/g, " ")} for industrial flow-control systems. Compare products and request a quote from our UK team.`
  );
}
