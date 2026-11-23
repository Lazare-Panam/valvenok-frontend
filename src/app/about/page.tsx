import AboutModern from "./AboutModern";
import SEOButtons from "./SEOButtons";
import GroupSites from "../Common/GroupSites";

export const metadata = {
  alternates: { canonical: '/about' },
  title: "About Us",
  description:
    "Valvenok is a UK industrial supplier of valves, fittings, and fluid control components. JOSCAR registered, with UK-based technical support.",
  openGraph: {
    title: "About Us | Valvenok",
    description: "Valvenok is a UK industrial supplier of valves, fittings, and fluid control components. JOSCAR registered, with UK-based technical support.",
    url: "/about",
    siteName: "Valvenok",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutModern>
        <GroupSites
          teal
          title="Our group"
          subtitle="Valvenok works alongside specialist websites across the group. Each one focuses on a single range, so you can go straight to the experts for that product."
        />
      </AboutModern>
      <SEOButtons />
    </>
  );
}
