import { Metadata } from "next";

type Props = {
  params: Promise<{ categoryId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoryId = (await params).categoryId;

  // Format the ID for the title (e.g., ball-valves -> Ball Valves)
  const displayName = categoryId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${displayName} Collection`,
    description: `Browse our professional range of ${displayName}. High-performance industrial components from Valvenok UK.`,
    openGraph: {
      title: `${displayName} | Valvenok Engineering`,
      description: `Premium industrial ${displayName} for high-pressure systems.`,
      url: `https://www.valvenok.com/categories/${categoryId}`,
    },
  };
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}