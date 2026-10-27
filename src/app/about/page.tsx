import AboutCTA from "./AboutCTA";
import AboutHero from "./AboutHero";
import AboutStory from "./AboutStory";
import AboutValues from "./AboutValves";
import AboutStats from "./AboutStats";
import SEOButtons from "./SEOButtons";

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
      <AboutHero />
      <AboutStats />
      <AboutStory />
      <AboutCTA />
      <AboutValues />
      <SEOButtons />
    </>
  );
}
