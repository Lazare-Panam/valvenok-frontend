"use client";

// Hydrogen & High Pressure hub: one umbrella page for the whole menu tab,
// laid out like a Pumster category page (hero → intro → product families
// grouped by section → why us → guidance → FAQ). Content merged from the old
// /hydrogen-cryogenic and /high-pressure overview pages.

import * as React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { MotionRoot, LightBackdrop, Words, Reveal, gradientText, useInView, L } from "@/src/app/Common/LightMotion";
import { groupSite } from "@/src/app/Common/group";

export const IMG = {
  panamNeedle: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-nv.jpg",
  panamBall: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-bv.jpg",
  panamDbb: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-dbb.jpg",
  panamManifold: "https://pblol2.blob.core.windows.net/panam-images/products/needle-valves/cover-needle.jpg",
  panamFitting: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-adaptor.jpg",
  panamPipe: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/hex-nipples.jpg",
  panamGland: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-glands.png",
  panamNipple: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-cone.png",
  panamTubing: "https://pblol2.blob.core.windows.net/panam-images/products/tubing/tubing-1.jpg",
  hifluxCheck: "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/check-valve.png",
  hifluxAov: "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/air-operated-valve.png",
  hifluxNeedle: "https://pblol2.blob.core.windows.net/hiflux/updated%20images/images/needle%20valve.png",
  hifluxFitting: "https://pblol2.blob.core.windows.net/hiflux/updated%20images/images/rf.jpeg",
  hifluxTube: "https://pblol2.blob.core.windows.net/hiflux/updated%20images/lok/hiflux_tube.png",
  hifluxRelief: "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/relief-valve.png",
  hifluxSpecial: "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/Speical-valve.png",
  hifluxManifold: "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/manifold-block.png",
  vvCryo: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/butterfly-weld.jpg",
  vvTriple: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/butter-val.jpg",
  vvAnti: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/dpi-anti-condensation.jpg",
  pfRegulator: "https://pblol2.blob.core.windows.net/valvenok-images/products/gas-regulator/staflux-187.jpg",
  youngdoH2: "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/HE-700.png",
  youngdoLpg: "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YLC-2821.png",
  youngdoGas: "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOC-2820.png",
  cryo: "https://pblol2.blob.core.windows.net/valvenok-images/banner-images/ben-kupke-ew-p24CVLR0-unsplash.jpg",
  youngdoLogo: "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/top_logo.png",
};

/* ───────────────────────── data ───────────────────────── */

type Range = { title: string; brands: string; text: string; pressure: string; href: string; img?: string; cover?: boolean };
type Group = { key: string; label: string; kicker: string; title: string; intro: string; tint: string; ranges: Range[] };

export const GROUPS: Group[] = [
  {
    key: "valves",
    label: "Valves",
    kicker: "Hydrogen valves",
    title: "High-pressure valves",
    intro: "Needle, ball, check, air-operated, safety and double block & bleed valves in SS 316 for hydrogen, test and wellhead service.",
    tint: L.mint,
    ranges: [
      { title: "Needle valves", brands: "Panam · Hiflux", text: "HP to HP6 series, plus H70 hydrogen refuelling valves. Straight, angle and 3-way.", pressure: "10,000–60,000 psi", href: "/high-pressure/valves/needle-valves", img: IMG.panamNeedle },
      { title: "Ball valves", brands: "Panam · Hiflux", text: "2-way and 3-way, including trunnion-style with PEEK seats.", pressure: "10,000–60,000 psi", href: "/high-pressure/valves/ball-valves", img: IMG.panamBall },
      { title: "Check valves", brands: "Hiflux", text: "Ball-seal and O-ring-seal types with cone-and-thread connections.", pressure: "10,000–100,000 psi", href: "/high-pressure/valves/check-valves", img: IMG.hifluxCheck },
      { title: "Air operated valves", brands: "Hiflux", text: "Normally open or normally closed, for automated remote shut-off.", pressure: "10,000–60,000 psi", href: "/high-pressure/valves/aov", img: IMG.hifluxAov },
      { title: "Double block & bleed", brands: "Panam", text: "Ball-needle-ball and needle-needle with integral bleed.", pressure: "15,000–20,000 psi", href: "/high-pressure/valves/dbb-valves", img: IMG.panamDbb },
      { title: "Safety & relief valves", brands: "Hiflux", text: "Proportional, field-adjustable and factory-set relief valves, safety heads and rupture discs.", pressure: "1,000–60,000 psi", href: "/hydrogen-cryogenic/valves/products?type=Safety%20Valve", img: IMG.hifluxRelief },
      { title: "Special valves", brands: "Hiflux", text: "Wellhead gauge, bleed, control, high-temperature and DBB valves for upstream service.", pressure: "3,000–30,000 psi", href: "/hydrogen-cryogenic/valves/products?type=Special%20Valve", img: IMG.hifluxSpecial },
      { title: "2-valve manifolds", brands: "Panam", text: "For gauge and absolute pressure transmitter hook-ups.", pressure: "15,000–20,000 psi", href: "/high-pressure/manifolds", img: IMG.panamManifold },
    ],
  },
  {
    key: "fittings",
    label: "Fittings",
    kicker: "Hydrogen fittings",
    title: "Fittings, nipples and seals",
    intro: "Cone-and-thread and pipe fittings with metal-to-metal seals that don’t rely on a soft gasket.",
    tint: "#EAF4FF",
    ranges: [
      { title: "Cone & thread fittings", brands: "Panam · Hiflux", text: "Adapters, connectors, unions, elbows, tees, crosses, caps and plugs.", pressure: "Up to 150,000 psi", href: "/high-pressure/fittings", img: IMG.panamFitting },
      { title: "Pipe fittings", brands: "Panam", text: "Hex couplings, nipples, adapters, elbows and tees in NPT, ISO parallel and JIC.", pressure: "10,000–15,000 psi", href: "/high-pressure/pipe-fittings", img: IMG.panamPipe },
      { title: "Cone & threaded nipples", brands: "Panam", text: "MP and HP cone & thread nipples, ¼ to 1 inch OD.", pressure: "20,000–60,000 psi", href: "/high-pressure/cone-threaded-nipples", img: IMG.panamNipple },
      { title: "Manifold blocks", brands: "Hiflux", text: "Multi-port blocks for distributing high-pressure lines in test rigs and panels.", pressure: "15,000–60,000 psi", href: "/hydrogen-cryogenic/fittings/products?type=Manifold%20Block", img: IMG.hifluxManifold },
      { title: "Seals & glands", brands: "Panam", text: "Glands, collars and anti-vibration glands for medium and high pressure.", pressure: "20,000–60,000 psi", href: "/high-pressure/seals-glands", img: IMG.panamGland },
    ],
  },
  {
    key: "tubing",
    label: "Tubing",
    kicker: "Hydrogen tubing",
    title: "Tubing, tooling and supports",
    intro: "High-pressure tube, the tools to cone and thread it, and supports to hold the line.",
    tint: "#FFF7DD",
    ranges: [
      { title: "High-pressure tubing", brands: "Panam · Hiflux", text: "Seamless SS 316 tube for cone-and-thread systems.", pressure: "Up to 100,000 psi", href: "/high-pressure/tubing", img: IMG.panamTubing },
      { title: "Tubing & tooling", brands: "Hiflux", text: "Tubes, nipples and coning, threading and reseating tool sets.", pressure: "Up to 100,000 psi", href: "/hydrogen-cryogenic/tube", img: IMG.hifluxTube },
      { title: "Tube supports", brands: "Hiflux", text: "1, 2 and 3-line supports in STS 316 for ¼ to 9/16 inch tube.", pressure: "STS 316", href: "/high-pressure/tubing/tube-supports" },
    ],
  },
  {
    key: "gas",
    label: "Gas & cryogenic",
    kicker: "Gas & cryogenic",
    title: "Gas, cylinder and cryogenic valves",
    intro: "Cylinder valves for hydrogen, LPG and industrial gases, plus valves for liquefied gas service.",
    tint: "#F3EEFF",
    ranges: [
      { title: "Hydrogen cylinder valves", brands: "Youngdo", text: "35 and 70 MPa valves for storage, vehicles and tube trailers, with thermal relief options.", pressure: "Up to 70 MPa", href: "/hydrogen-cryogenic/hydrogen", img: IMG.youngdoH2 },
      { title: "LPG cylinder valves", brands: "Youngdo", text: "Cylinder, overfilling prevention (OPD) and piping valves.", pressure: "LPG service", href: "/hydrogen-cryogenic/lpg", img: IMG.youngdoLpg },
      { title: "Industrial gas valves", brands: "Youngdo", text: "Tapered, unified, non-return, acetylene, chlorine and tube-trailer types.", pressure: "CGA V-1 by model", href: "/hydrogen-cryogenic/industrial-gas", img: IMG.youngdoGas },
      { title: "All gas & cylinder valves", brands: "Youngdo", text: "Every Youngdo model in one grid. Filter by gas, category, series and approval.", pressure: "108 models", href: "/high-pressure/valves/gas-valves", img: IMG.youngdoH2 },
      { title: "Gas pressure regulators", brands: "Pietro Fiorentini", text: "Pressure regulators for natural gas networks, with hydrogen-ready versions on selected models.", pressure: "Hydrogen-ready options", href: "/instrumentation/gas-pressure-regulator", img: IMG.pfRegulator },
      { title: "Cryogenic butterfly valves", brands: "Value Valves", text: "Butt-welded double eccentric and triple offset designs, 2 to 36 inch, for LNG, LPG and petrochemical service.", pressure: "Cryogenic service", href: "/valves/industrial-valves/butterfly-valves/butt-welded-butterfly-valve", img: IMG.vvCryo },
      { title: "Triple offset butterfly valves", brands: "Value Valves", text: "Cryogenic version to BS 6364 for LNG, liquid nitrogen and other low-temperature service.", pressure: "Down to −100 °C", href: "/valves/industrial-valves/butterfly-valves/triple-offset-butterfly-valve", img: IMG.vvTriple },
      { title: "Anti-condensation butterfly valves", brands: "Value Valves", text: "VF-930 series with cryogenic options; stops condensation and icing on cold lines.", pressure: "Down to −100 °C", href: "/valves/industrial-valves/butterfly-valves/anti-condensation-butterfly-valve", img: IMG.vvAnti },
    ],
  },
];

const STATS = [
  { value: "150,000", unit: "psi", label: "Highest rated fittings (Hiflux)" },
  { value: "70", unit: "MPa", label: "Hydrogen cylinder valves (Youngdo)" },
  { value: "SS 316", unit: "", label: "Main body material" },
  { value: "3", unit: "brands", label: "Panam · Hiflux · Youngdo" },
];

const MAX_PSI = 150000;
const PRESSURE = [
  { name: "Youngdo cylinder valves", note: "3–70 MPa (≈ 435–10,150 psi)", from: 435, to: 10150, color: "#B7A6F0" },
  { name: "Panam valves & fittings", note: "10,000–60,000 psi", from: 10000, to: 60000, color: "#8FD47C" },
  { name: "Hiflux tubing", note: "Up to 100,000 psi", from: 10000, to: 100000, color: "#F4C95D" },
  { name: "Hiflux valves & fittings", note: "Up to 150,000 psi", from: 10000, to: 150000, color: "#7CB9F0" },
];

const SHOWCASE = [
  { key: "valves", label: "Hydrogen valves", img: IMG.panamNeedle, title: "Hydrogen valves", text: "Needle, ball, check, air-operated and double block & bleed valves in SS 316, from 10,000 psi up to 100,000 psi, including H70 refuelling needle valves for hydrogen stations.", href: "/high-pressure/valves" },
  { key: "fittings", label: "Hydrogen fittings", img: IMG.hifluxFitting, title: "Hydrogen fittings", text: "Cone & thread and pipe fittings, nipples, glands and collars. Metal-to-metal seals with no soft gasket, rated up to 150,000 psi.", href: "/high-pressure/fittings" },
  { key: "tubing", label: "Hydrogen tubing", img: IMG.panamTubing, title: "Hydrogen tubing", text: "Seamless SS 316 high-pressure tube up to 100,000 psi, the coning and threading tools to prepare it, and supports to hold the line.", href: "/high-pressure/tubing" },
  { key: "gas", label: "Gas & cryogenic", img: IMG.youngdoH2, title: "Gas & cryogenic", text: "Youngdo cylinder valves for hydrogen up to 70 MPa, LPG and industrial gases, plus cryogenic valves for liquefied gas service.", href: "/high-pressure/valves/gas-valves" },
];

const CIRCLES = [
  ["SS 316", "Stainless body"],
  ["Cone & thread", "Metal-to-metal seal"],
  ["Approved", "KGS · EC79 · R134 by model"],
  ["UK", "Support & delivery"],
];

const BENEFITS = [
  { icon: <HubOutlinedIcon />, title: "Rated up to 150,000 psi", text: "Hiflux fittings to 150,000 psi, Panam valves and fittings to 60,000 psi." },
  { icon: <VerifiedOutlinedIcon />, title: "Made for hydrogen service", text: "316 stainless, cone & thread connections and H70 refuelling valves. Certificates on request." },
  { icon: <Inventory2OutlinedIcon />, title: "The whole line on one order", text: "Valves, fittings, tubing, tooling and cylinder valves that work together." },
  { icon: <EngineeringOutlinedIcon />, title: "Help choosing the part", text: "Send pressure, media, connection and approvals, and we’ll match it." },
];

const BLOG = { label: "Read: leak-tight threads for hydrogen fittings", href: "/news/instrumentation-fittings-hydrogen-leak-tight-threads" };

const WHICH = [
  { app: "Hydrogen cylinders, vehicles or tube trailers", pick: "Youngdo hydrogen cylinder valves, 35 or 70 MPa", href: "/hydrogen-cryogenic/hydrogen", img: IMG.youngdoH2 },
  { app: "Hydrogen refuelling station pipework", pick: "High-pressure needle valves, including the H70 refuelling valve", href: "/high-pressure/valves/needle-valves", img: IMG.hifluxNeedle },
  { app: "Test rigs, labs and manifolds", pick: "Cone & thread fittings, tubing and needle valves", href: "/high-pressure/fittings", img: IMG.hifluxFitting },
  { app: "Oil & gas, subsea and wellhead", pick: "Panam SS 316 high-pressure valves and fittings to 60,000 psi", href: "/high-pressure/valves", img: IMG.panamBall },
  { app: "LPG or industrial gas cylinders", pick: "Youngdo gas and cylinder valves", href: "/high-pressure/valves/gas-valves", img: IMG.youngdoGas },
  { app: "Hazardous-area hydrogen service", pick: "IECEx-certified Youngdo YEX-1100", href: "/hydrogen-cryogenic/hydrogen", img: IMG.youngdoH2 },
  { app: "LNG, liquid nitrogen or other liquefied gases", pick: "Value Valves cryogenic butterfly valves", href: "/valves/industrial-valves/butterfly-valves/butt-welded-butterfly-valve", img: IMG.vvCryo },
];

const CHECKS = [
  ["Pressure class", "Most hydrogen storage and refuelling runs at 35 MPa (350 bar) or 70 MPa (700 bar). Choose a part rated above your maximum working pressure, not just equal to it."],
  ["Material", "Hydrogen can embrittle susceptible steels under pressure and cycling. Austenitic stainless steels such as 316 are widely used; confirm the grade on each datasheet."],
  ["Connection type", "At very high pressure, cone-and-thread connections are common because the metal-to-metal seal doesn’t rely on a soft gasket. Match the standard across valves, fittings and tube."],
  ["Thermal relief", "Cylinder valves often include a thermally activated relief device so the cylinder vents safely in a fire. Selected Youngdo models activate at around 105–110 °C."],
  ["Approvals", "Vehicle, refuelling and industrial gas uses each need different approvals. Check below and ask for the certificate with the order."],
];

const CERTS = [
  ["KGS", "Korea Gas Safety Corporation approval. DRV and YHT hydrogen cylinder valves are built to KS B 6214 / KGS AA311.", "Youngdo; selected Hiflux"],
  ["KC", "Korean product certification mark.", "Selected Hiflux"],
  ["EC79", "EU type-approval for hydrogen vehicle components, Regulation (EC) No 79/2009.", "Selected Youngdo"],
  ["R134", "UN ECE regulation on hydrogen and fuel cell vehicles and their storage parts.", "Selected Youngdo"],
  ["CGA V-1", "Compressed Gas Association standard for cylinder valve connections.", "Youngdo gas valves"],
  ["KHK", "Japanese High Pressure Gas Safety Institute approval.", "Selected Youngdo"],
  ["IECEx", "Certification for equipment in explosive atmospheres (IEC 60079).", "Youngdo YEX-1100"],
];

const FAQ_ICONS = [SpeedOutlinedIcon, ShowChartOutlinedIcon, VerifiedOutlinedIcon, MenuBookOutlinedIcon, BuildOutlinedIcon, DescriptionOutlinedIcon];

export const HUB_FAQ = [
  { q: "What pressure are hydrogen cylinder valves rated to?", a: "Our Youngdo hydrogen cylinder valves cover 3 MPa to 70 MPa. The 70 MPa (700 bar) and 35 MPa (350 bar) classes are the most common for vehicle and storage use." },
  { q: "What is the highest pressure you supply?", a: "Hiflux high-pressure fittings are rated up to 150,000 psi and Hiflux tubes up to 100,000 psi. Panam SS 316 high-pressure valves and fittings run from 10,000 to 60,000 psi. Ratings vary by part, so check each product table." },
  { q: "Which approval do I need for a hydrogen vehicle cylinder valve?", a: "It depends on where the vehicle is approved. UN ECE R134 and EC79 cover hydrogen vehicle components, and KGS covers Korean gas safety. Tell us the market and we’ll confirm which models qualify." },
  { q: "What is KGS AA311?", a: "It is the Korean gas safety standard, together with KS B 6214, that our DRV and YHT hydrogen cylinder valves are built to." },
  { q: "Can I use standard stainless fittings for hydrogen?", a: "Not automatically. Check the pressure rating, material grade and connection type for hydrogen service. Cone-and-thread fittings are the usual choice at very high pressure." },
  { q: "Do you supply certificates with the order?", a: "Yes. Ask for the relevant approval certificate or material certificate when you request a quote." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HUB_FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const BRAND_LOGO: Record<string, string> = {
  Panam: "https://pblol2.blob.core.windows.net/panam-images/panam-resize_smallest.jpg",
  Hiflux: "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/logo.png",
  Youngdo: IMG.youngdoLogo,
  "Value Valves": "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/logo.svg",
  "Pietro Fiorentini": "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/logo.svg",
};

const DARK_LOGO = new Set(["Youngdo"]);

/** Brand logos in a white pill (top-left of each range card) */
export function BrandBadge({ brands }: { brands: string }) {
  const names = brands.split("·").map((b) => b.trim()).filter((b) => BRAND_LOGO[b]);
  if (!names.length) return null;
  // Youngdo's logo is white lettering, so it sits on a dark pill
  const dark = names.some((n) => DARK_LOGO.has(n));
  return (
    <Box sx={{ position: "absolute", top: 12, left: 12, display: "flex", alignItems: "center", gap: 1, px: 1.25, py: 0.6, borderRadius: 999, bgcolor: dark ? T.greenDeep : "#fff", boxShadow: "0 1px 4px rgba(14,27,18,0.08)" }}>
      {names.map((n, i) => (
        <React.Fragment key={n}>
          {i > 0 && <Box component="span" sx={{ width: "1px", height: 14, bgcolor: T.border }} />}
          <Box component="img" src={BRAND_LOGO[n]} alt={n} title={n} sx={{ height: 24, maxWidth: 90, objectFit: "contain", display: "block" }} />
        </React.Fragment>
      ))}
    </Box>
  );
}

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "families", label: "Families" },
  { id: "ranges", label: "All products" },
  { id: "why", label: "Why Valvenok" },
  { id: "selector", label: "Find your range" },
  { id: "specifying", label: "Specifying" },
  { id: "approvals", label: "Approvals" },
  { id: "brands", label: "Brands" },
  { id: "faq", label: "FAQ" },
];

/** Sticky in-page menu with the current section highlighted */
function SectionNav() {
  const [active, setActive] = React.useState(SECTIONS[0].id);
  const bar = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    // Active = the last section whose top has passed just under the sticky bars
    const onScroll = () => {
      let cur = SECTIONS[0].id;
      for (const x of SECTIONS) {
        const el = document.getElementById(x.id);
        if (el && el.getBoundingClientRect().top <= 240) cur = x.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // keep the active pill in view on phones
  React.useEffect(() => {
    const el = bar.current?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (el && bar.current) bar.current.scrollTo({ left: el.offsetLeft - 16, behavior: "smooth" });
  }, [active]);
  // reading progress through the page, shown as a thin line inside the capsule
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const f = () => {
      const h = document.documentElement;
      setProgress(Math.min(1, h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)));
    };
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    // Floating capsule rather than a third full-width bar, so it reads as "this page" not more site menu
    <Box component="nav" aria-label="On this page" sx={{ position: "sticky", top: { xs: 84, md: 135 }, zIndex: 150, mt: { xs: 4, md: 6 }, px: { xs: 1.5, md: 4 }, pointerEvents: "none" }}>
      <Box sx={{ position: "relative", maxWidth: 1180, mx: "auto", display: "flex", alignItems: "center", gap: 1, pl: { xs: 0.75, md: 1 }, pr: 0.75, py: 0.6, borderRadius: 999, bgcolor: "rgba(255,255,255,0.82)", backdropFilter: "saturate(1.6) blur(14px)", border: "1px solid rgba(207,235,198,0.9)", boxShadow: "0 10px 30px -12px rgba(14,27,18,0.22)", overflow: "hidden", pointerEvents: "auto" }}>
        <Box sx={{ display: { xs: "none", md: "inline-flex" }, alignItems: "center", gap: 1, flexShrink: 0, pl: 0.5, pr: 1.75, mr: 0.5, borderRight: `1px solid ${T.border}` }}>
          <Box sx={{ width: 30, height: 30, borderRadius: "50%", background: `linear-gradient(135deg, ${T.green}, #9BEA7E)`, color: T.greenDeep, display: "grid", placeItems: "center", fontSize: "0.72rem", fontWeight: 800 }}>
            H₂
          </Box>
          <Box component="span" sx={{ fontSize: "0.86rem", fontWeight: 800, color: T.ink, whiteSpace: "nowrap" }}>Hydrogen &amp; High Pressure</Box>
        </Box>
        <Box ref={bar} sx={{ flex: 1, display: "flex", gap: 0.25, overflowX: "auto", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}>
          {SECTIONS.map((x) => {
            const on = x.id === active;
            return (
              <Box
                key={x.id}
                data-id={x.id}
                component="a"
                href={`#${x.id}`}
                aria-current={on ? "true" : undefined}
                sx={{ flexShrink: 0, px: 1.5, py: 0.7, borderRadius: 999, fontSize: "0.82rem", fontWeight: on ? 700 : 500, color: on ? "#fff" : T.body, bgcolor: on ? T.greenDark : "transparent", textDecoration: "none", transition: "all .2s", "&:hover": { color: on ? "#fff" : T.greenDark, bgcolor: on ? T.greenDark : T.greenSoft } }}
              >
                {x.label}
              </Box>
            );
          })}
        </Box>
        <Box aria-hidden sx={{ position: "absolute", left: 0, bottom: 0, height: 2, width: `${progress * 100}%`, background: `linear-gradient(90deg, ${T.green}, #9BEA7E)`, transition: "width .1s linear" }} />
      </Box>
    </Box>
  );
}

/* ───────────────────────── building blocks ───────────────────────── */

export const wrap = { maxWidth: 1240, mx: "auto", px: { xs: 2, md: 4 } } as const;

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <Box component="p" sx={{ m: 0, mb: 1.25, display: "inline-flex", alignItems: "center", gap: 1, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase !important", color: T.greenDark }}>
      <Box component="span" sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: T.green }} />
      {children}
    </Box>
  );
}

export function H2({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <Box component="h2" id={id} sx={{ m: 0, mb: 1.5, fontSize: { xs: "1.75rem", md: "2.4rem" }, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.12, color: T.ink }}>
      {children}
    </Box>
  );
}

export function Lead({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <Box component="p" sx={{ m: 0, maxWidth: 720, mx: center ? "auto" : 0, fontSize: { xs: "1rem", md: "1.08rem" }, lineHeight: 1.7, color: T.body }}>
      {children}
    </Box>
  );
}

export const pillBtn = (primary: boolean) =>
  ({
    display: "inline-flex",
    alignItems: "center",
    gap: 1,
    px: 3,
    py: 1.4,
    borderRadius: 999,
    fontWeight: 700,
    fontSize: "0.95rem",
    textDecoration: "none",
    transition: "all .2s",
    "& svg": { transition: "transform .2s" },
    "&:hover svg": { transform: "translateX(3px)" },
    ...(primary
      ? { bgcolor: T.green, color: T.greenDeep, "&:hover": { bgcolor: "#55C93E" } }
      : { bgcolor: "#fff", color: T.ink, border: `1px solid ${T.border}`, "&:hover": { borderColor: T.greenDark, color: T.greenDark } }),
  }) as const;

/* ───────────────────────── sections ───────────────────────── */

function Hero() {
  const panam = groupSite("Panam Valves");
  const hiflux = groupSite("Hiflux UK");
  // The 4 product groups; each opens the product list on that group's tab
  const tiles = [
    { key: "valves", img: IMG.panamNeedle, label: "Hydrogen valves" },
    { key: "fittings", img: IMG.hifluxFitting, label: "Hydrogen fittings" },
    { key: "tubing", img: IMG.hifluxTube, label: "Hydrogen tubing" },
    { key: "gas", img: IMG.youngdoH2, label: "Gas & cryogenic" },
  ].map((t) => ({ ...t, count: GROUPS.find((g) => g.key === t.key)!.ranges.length }));
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", bgcolor: L.cream, pt: { xs: 4, md: 9 }, pb: { xs: 6, md: 10 } }}>
      <LightBackdrop />
      <Box sx={{ ...wrap, position: "relative", display: "grid", gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "1.05fr 0.95fr" }, gap: { xs: 3.5, md: 7 }, alignItems: "center" }}>
        <Box>
          <Kicker>Products</Kicker>
          <Box component="h1" sx={{ m: 0, mb: 2.5, fontSize: { xs: "2.4rem", sm: "3rem", md: "3.9rem" }, fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.04, color: T.ink }}>
            <Words text="Hydrogen &" />
            <Words text="High Pressure" start={250} sx={gradientText} />
          </Box>
          <Lead>
            Valves, fittings, tubing and cylinder valves for hydrogen and other high-pressure gas service, from 3 MPa cylinder connections up to 150,000 psi test systems. Three specialist ranges, Panam, Hiflux and Youngdo, under one roof.
          </Lead>
          {/* one swipeable row on phones */}
          <Box sx={{ display: "flex", flexWrap: { xs: "nowrap", md: "wrap" }, gap: 1, mt: { xs: 2.5, md: 3 }, overflowX: { xs: "auto", md: "visible" }, mx: { xs: -2, md: 0 }, px: { xs: 2, md: 0 }, scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}>
            {["#hydrogen", "#cone-and-thread", "#SS316", "#70MPa", "#cylinder-valves", "#cryogenic"].map((t) => (
              <Box key={t} component="span" sx={{ flexShrink: 0, px: 1.5, py: 0.5, borderRadius: 999, fontSize: "0.8rem", fontWeight: 600, color: T.greenDark, bgcolor: "rgba(255,255,255,0.75)", border: "1px solid #D6EDCE" }}>
                {t}
              </Box>
            ))}
          </Box>
          {/* two equal buttons side by side on phones */}
          <Box sx={{ display: { xs: "grid", sm: "flex" }, gridTemplateColumns: "1fr 1fr", flexWrap: "wrap", gap: 1.25, mt: { xs: 3, md: 4 } }}>
            <Box component="a" href="#ranges" sx={{ ...pillBtn(true), justifyContent: "center", px: { xs: 1.5, sm: 3 }, fontSize: { xs: "0.9rem", sm: "0.95rem" } }}>
              Browse ranges <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box component={Link} href="/contact" sx={{ ...pillBtn(false), justifyContent: "center", px: { xs: 1.5, sm: 3 }, fontSize: { xs: "0.9rem", sm: "0.95rem" } }}>
              Get a quote
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", columnGap: 2.5, rowGap: 0.75, mt: { xs: 2, md: 3 }, fontSize: { xs: "0.82rem", md: "0.85rem" } }}>
            {[panam, hiflux].map((s) => (
              <Box key={s.url} component="a" href={s.url} target="_blank" rel="noopener" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: T.greenDark, fontWeight: 600, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>Visit&nbsp;</Box>
                {s.name} website <ArrowOutwardRoundedIcon sx={{ fontSize: 14 }} />
              </Box>
            ))}
          </Box>
        </Box>

        {/* phones: compact 2 × 2 (photo beside name); desktop: staggered 2 × 2 */}
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: { xs: 1, md: 2 } }}>
          {tiles.map((t, i) => (
            <Box
              key={t.key}
              component="a"
              href="#ranges"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                openGroup(t.key);
              }}
              sx={{
                textDecoration: "none",
                cursor: "pointer",
                transition: "border-color .2s, box-shadow .2s, transform .2s",
                "&:hover": { borderColor: "#BFE5B3", boxShadow: T.shadowHover, transform: "translateY(-4px)" },
                "&:hover .tile-go": { color: T.greenDark },
                bgcolor: "#fff",
                borderRadius: { xs: "16px", md: "22px" },
                border: `1px solid ${T.border}`,
                boxShadow: T.shadow,
                p: { xs: 0.75, md: 2 },
                display: { xs: "flex", md: "block" },
                alignItems: "center",
                gap: 1,
                minWidth: 0,
                mt: { xs: 0, md: i % 2 ? 5 : 0 },
                mb: { xs: 0, md: i % 2 ? 0 : 5 },

              }}
            >
              <Box sx={{ flexShrink: 0, width: { xs: 52, md: "auto" }, aspectRatio: "1 / 1", borderRadius: { xs: "12px", md: "16px" }, bgcolor: T.surface, display: "grid", placeItems: "center", overflow: "hidden" }}>
                <Box component="img" src={t.img} alt={t.label} loading="eager" sx={{ width: "78%", height: "78%", objectFit: "contain", mixBlendMode: "multiply" }} />
              </Box>
              <Box sx={{ mt: { xs: 0, md: 1.25 }, textAlign: { xs: "left", md: "center" }, minWidth: 0 }}>
                <Box component="p" sx={{ m: 0, fontSize: { xs: "0.8rem", md: "0.92rem" }, lineHeight: 1.25, fontWeight: 800, color: T.ink }}>{t.label}</Box>
                <Box component="p" className="tile-go" sx={{ m: 0, mt: 0.25, display: "inline-flex", alignItems: "center", gap: 0.25, fontSize: { xs: "0.72rem", md: "0.78rem" }, fontWeight: 600, color: T.muted, transition: "color .2s" }}>
                  {t.count} ranges <ArrowForwardRoundedIcon sx={{ fontSize: 13 }} />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function Stats() {
  return (
    <Box sx={{ ...wrap, mt: { xs: -3, md: -5 }, position: "relative", zIndex: 1 }}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 1.5, md: 2 } }}>
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <Box sx={{ height: "100%", boxSizing: "border-box", p: { xs: 2, md: 3 }, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow, borderTop: `4px solid ${[L.lime, L.sky, L.sun, "rgba(183,166,240,0.6)"][i]}` }}>
              <Box sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink, lineHeight: 1.1 }}>
                {s.value}
                {s.unit && (
                  <Box component="span" sx={{ fontSize: "0.5em", ml: 0.75, color: T.greenDark }}>{s.unit}</Box>
                )}
              </Box>
              <Box component="p" sx={{ m: 0, mt: 0.75, fontSize: "0.85rem", color: T.body, lineHeight: 1.4 }}>{s.label}</Box>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Box>
  );
}

const PARTS = [
  { k: "tube", n: 1, label: "Tube (SS 316)", x: 120, y: 104, px: 120, py: 140 },
  { k: "gland", n: 2, label: "Gland nut", x: 262, y: 62, px: 262, py: 94 },
  { k: "collar", n: 3, label: "Collar", x: 440, y: 286, px: 462, py: 192 },
  { k: "seal", n: 4, label: "Metal-to-metal seal", x: 540, y: 104, px: 499, py: 146 },
  { k: "body", n: 5, label: "Body", x: 596, y: 286, px: 590, py: 250 },
] as const;

/** Cut-away of a cone & thread connection: the "how it works" picture, like Pumster's Pascal diagram.
 *  Plays once when scrolled into view: the gland nut tightens, the seal lights up, then gas flows. */
function ConeThreadDiagram() {
  const [ref, on] = useInView<HTMLDivElement>(0.35);
  const [hover, setHover] = React.useState<string | null>(null);
  const dim = (k: string) => ({ opacity: hover && hover !== k ? 0.22 : 1, transition: "opacity .25s" });
  const teeth = (x0: number, x1: number, y: number, dir: 1 | -1, fill: string, shift = 0) => {
    const pts: string[] = [];
    for (let x = x0 + shift; x + 9 <= x1; x += 9) pts.push(`M${x} ${y} L${x + 4.5} ${y + 7 * dir} L${x + 9} ${y} Z`);
    return <path d={pts.join(" ")} fill={fill} />;
  };
  const lbl = { fontSize: 13, fontWeight: 800, fontFamily: "inherit" } as const;
  return (
    <Box ref={ref}>
      <Box
        component="svg"
        viewBox="0 30 640 280"
        role="img"
        aria-label="Cut-away of a cone and thread connection: the gland nut pushes the coned tube end into the conical seat in the body, making a metal-to-metal seal"
        sx={{
          width: "100%",
          height: "auto",
          display: "block",
          overflow: "visible",
          "@keyframes tighten": { from: { transform: "translateX(-34px)" }, to: { transform: "none" } },
          "@keyframes sealOn": { "0%": { opacity: 0 }, "60%": { opacity: 1 }, "100%": { opacity: 0.85 } },
          "@keyframes sealPulse": { "0%,100%": { opacity: 0.55 }, "50%": { opacity: 1 } },
          "@keyframes gas": { from: { transform: "translateX(610px)", opacity: 0 }, "8%": { opacity: 1 }, "92%": { opacity: 1 }, to: { transform: "translateX(24px)", opacity: 0 } },
          "& .moving": { animation: on ? "tighten 1.3s cubic-bezier(.3,.9,.3,1) both" : "none", transform: on ? undefined : "translateX(-34px)" },
          "& .seal": { opacity: 0, animation: on ? "sealOn .6s ease 1.3s forwards, sealPulse 2.4s ease-in-out 1.9s infinite" : "none" },
          "& .gas": { opacity: 0, animation: on ? "gas 3.6s linear infinite" : "none" },
        }}
      >
        <defs>
          <linearGradient id="hhSteel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#EEF3F8" />
            <stop offset=".45" stopColor="#C9D5E2" />
            <stop offset=".55" stopColor="#B7C6D6" />
            <stop offset="1" stopColor="#E3EAF2" />
          </linearGradient>
          <linearGradient id="hhBody" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F1F4F2" />
            <stop offset="1" stopColor="#DCE3DF" />
          </linearGradient>
          <linearGradient id="hhGland" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#E9F7E3" />
            <stop offset=".5" stopColor="#C6E8BA" />
            <stop offset="1" stopColor="#E3F4DC" />
          </linearGradient>
          <linearGradient id="hhBrass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFF0C2" />
            <stop offset=".5" stopColor="#F2CF6B" />
            <stop offset="1" stopColor="#FCE7A8" />
          </linearGradient>
          <pattern id="hhHatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="#C3CCC6" strokeWidth="1.2" />
          </pattern>
          <filter id="hhGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 5 · body (cut away, hatched) with threaded port, conical seat and bore */}
        <g style={dim("body")}>
          <rect x="300" y="40" width="320" height="220" rx="18" fill="url(#hhBody)" stroke="#9AA9A0" strokeWidth="2" />
          <rect x="300" y="40" width="320" height="220" rx="18" fill="url(#hhHatch)" opacity=".7" />
          <path d="M300 104 L450 104 L505 152 L620 152 L620 168 L505 168 L450 216 L300 216 Z" fill="#FBFCFB" stroke="#9AA9A0" strokeWidth="2" />
          {teeth(300, 450, 104, 1, "#B9C4BD")}
          {teeth(300, 450, 216, -1, "#B9C4BD")}
        </g>

        {/* parts that slide in as the gland nut is tightened */}
        <g className="moving">
          {/* 1 · tube with coned tip and bore */}
          <g style={dim("tube")}>
            <path d="M14 140 L491 140 L505 152 L505 168 L491 180 L14 180 Z" fill="url(#hhSteel)" stroke="#8DA1B5" strokeWidth="2" />
            <rect x="14" y="154" width="491" height="12" fill="#F6FAFD" />
            <path d="M14 140 L14 180" stroke="#8DA1B5" strokeWidth="2" />
          </g>
          {/* 2 · gland nut: hex head outside the body, threaded shank inside */}
          <g style={dim("gland")}>
            <rect x="222" y="94" width="80" height="132" rx="8" fill="url(#hhGland)" stroke="#7FB870" strokeWidth="2" />
            <path d="M222 120 L302 120 M222 200 L302 200" stroke="#9ACB8C" strokeWidth="1.5" />
            <rect x="300" y="111" width="152" height="98" rx="3" fill="url(#hhGland)" stroke="#7FB870" strokeWidth="2" />
            {teeth(300, 450, 111, -1, "#9ACB8C", 4.5)}
            {teeth(300, 450, 209, 1, "#9ACB8C", 4.5)}
            <rect x="222" y="140" width="232" height="40" fill="url(#hhSteel)" />
            <rect x="222" y="154" width="232" height="12" fill="#F6FAFD" />
          </g>
          {/* 3 · collar */}
          <g style={dim("collar")}>
            <rect x="454" y="128" width="16" height="64" rx="3" fill="url(#hhBrass)" stroke="#D9B44A" strokeWidth="2" />
          </g>
        </g>

        {/* 4 · metal-to-metal seal lines */}
        <g style={dim("seal")}>
          <path className="seal" d="M491 140 L505 152 M491 180 L505 168" stroke={T.green} strokeWidth="5" strokeLinecap="round" filter="url(#hhGlow)" />
        </g>

        {/* gas under pressure, once sealed */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <circle key={i} className="gas" cx="0" cy="160" r="4" fill={T.green} filter="url(#hhGlow)" style={{ animationDelay: `${1.9 + i * 0.6}s` }} />
        ))}

        {/* numbered callouts */}
        {PARTS.map((p) => (
          <g key={p.k} onMouseEnter={() => setHover(p.k)} onMouseLeave={() => setHover(null)} style={{ cursor: "default" }}>
            <line x1={p.x} y1={p.y} x2={p.px} y2={p.py} stroke={T.greenDark} strokeWidth="1.5" strokeDasharray="3 3" opacity={hover && hover !== p.k ? 0.25 : 0.7} />
            <circle cx={p.px} cy={p.py} r="3" fill={T.greenDark} opacity={hover && hover !== p.k ? 0.25 : 1} />
            <circle cx={p.x} cy={p.y} r="13" fill={hover === p.k ? T.greenDark : "#fff"} stroke={T.greenDark} strokeWidth="2" />
            <text x={p.x} y={p.y + 4.5} textAnchor="middle" style={{ ...lbl, fill: hover === p.k ? "#fff" : T.greenDark }}>{p.n}</text>
          </g>
        ))}
      </Box>

      {/* key: hover a name to highlight that part */}
      <Box component="ul" sx={{ listStyle: "none", m: 0, mt: 2, p: 0, display: "flex", flexWrap: "wrap", gap: 0.75, justifyContent: "center" }}>
        {PARTS.map((p) => (
          <Box
            key={p.k}
            component="li"
            tabIndex={0}
            onMouseEnter={() => setHover(p.k)}
            onMouseLeave={() => setHover(null)}
            onFocus={() => setHover(p.k)}
            onBlur={() => setHover(null)}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              pl: 0.5,
              pr: 1.25,
              py: 0.4,
              borderRadius: 999,
              fontSize: "0.8rem",
              fontWeight: 600,
              cursor: "default",
              border: `1px solid ${hover === p.k ? "#BFE5B3" : T.border}`,
              bgcolor: hover === p.k ? T.greenSoft : "#fff",
              color: T.ink,
              transition: "all .2s",
              outline: "none",
            }}
          >
            <Box component="span" sx={{ width: 20, height: 20, borderRadius: "50%", bgcolor: hover === p.k ? T.greenDark : T.greenSoft, color: hover === p.k ? "#fff" : T.greenDark, display: "grid", placeItems: "center", fontSize: "0.7rem", fontWeight: 800 }}>{p.n}</Box>
            {p.label}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function Intro() {
  return (
    <Box component="section" id="overview" aria-labelledby="h2-intro" sx={{ scrollMarginTop: 190, py: { xs: 8, md: 12 } }}>
      <Box sx={{ ...wrap, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" }, gap: { xs: 4, md: 8 }, alignItems: "center" }}>
        <Reveal from="left">
          <Box sx={{ p: { xs: 1.5, md: 3 }, borderRadius: "28px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
            <ConeThreadDiagram />
          </Box>
        </Reveal>
        <Reveal from="right">
          <Kicker>How it seals</Kicker>
          <H2 id="h2-intro">
            <Box component="span" sx={gradientText}>Small molecules,</Box> big pressures
          </H2>
          <Lead>
            Hydrogen is the smallest molecule there is, so it leaks where other gases don’t, and at high pressure it can weaken some metals. High-pressure systems answer this with SS 316 parts and the cone & thread connection: the gland nut pushes the coned tube end into a conical seat, so the seal is metal on metal, with no soft gasket to wear or leak. Valvenok supplies <Box component="strong" sx={{ color: T.ink }}>valves, fittings, tubing and cylinder valves</Box> built this way.
          </Lead>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: 3.5 }}>
            <Box component={Link} href={BLOG.href} sx={{ ...pillBtn(false), py: 1.1 }}>
              {BLOG.label} <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}

/** Pumster-style family switcher: vertical toggle, big product picture, big title */
function Showcase() {
  const [i, setI] = React.useState(0);
  const s = SHOWCASE[i];
  return (
    <Box component="section" id="families" aria-label="Product families" sx={{ scrollMarginTop: 190, position: "relative", overflow: "hidden", py: { xs: 6, md: 9 }, background: `linear-gradient(135deg, ${L.mint} 0%, #F3F7FB 60%, #FFF9E8 100%)` }}>
      <Box sx={{ ...wrap, position: "relative" }}>
        <Kicker>Product families · hover or tap to switch</Kicker>
        {/* vertical toggle */}
        <Box role="tablist" aria-label="Families" sx={{ display: "flex", gap: { xs: 1.5, md: 2.5 }, alignItems: "stretch", mb: { xs: 3, md: 2 } }}>
          <Box sx={{ position: "relative", width: 34, flexShrink: 0, borderRadius: 999, bgcolor: "#fff", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.08)", display: { xs: "none", sm: "block" } }}>
            <Box sx={{ position: "absolute", left: 4, width: 26, height: 26, borderRadius: "50%", bgcolor: T.green, top: `calc(4px + ${i} * (100% - 8px - 26px) / ${SHOWCASE.length - 1})`, transition: "top .25s cubic-bezier(.2,.8,.2,1)", boxShadow: "0 2px 6px rgba(46,139,30,0.35)" }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: { xs: "row", sm: "column" }, gap: { xs: 1, sm: 0.25 }, flexWrap: "wrap" }}>
            {SHOWCASE.map((x, k) => (
              <Box
                key={x.key}
                component="button"
                role="tab"
                aria-selected={k === i}
                onClick={() => setI(k)}
                onMouseEnter={() => setI(k)}
                onFocus={() => setI(k)}
                sx={{
                  textAlign: "left",
                  cursor: "pointer",
                  border: 0,
                  bgcolor: { xs: k === i ? "#fff" : "transparent", sm: "transparent" },
                  borderRadius: 999,
                  px: { xs: 1.5, sm: 0 },
                  py: { xs: 0.75, sm: 0.6 },
                  fontFamily: "inherit",
                  fontSize: { xs: "0.9rem", md: "1.1rem" },
                  fontWeight: k === i ? 700 : 500,
                  color: k === i ? T.greenDark : T.body,
                  transition: "color .2s",
                  "&:hover": { color: T.greenDark },
                }}
              >
                {x.label}
              </Box>
            ))}
          </Box>
        </Box>

        <Box key={s.key} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" }, gap: { xs: 3, md: 6 }, alignItems: "center", minHeight: { md: 420 } }}>
          <Box sx={{ display: "grid", placeItems: "center", height: { xs: 260, md: 420 }, borderRadius: "32px", bgcolor: "#fff", boxShadow: "0 30px 60px -30px rgba(14,27,18,0.18)", overflow: "hidden", animation: "wordIn .3s cubic-bezier(.2,.8,.2,1) both" }}>
            <Box component="img" src={s.img} alt={s.title} sx={{ maxWidth: "72%", maxHeight: "82%", objectFit: "contain" }} />
          </Box>
          <Box sx={{ animation: "wordIn .3s cubic-bezier(.2,.8,.2,1) .05s both" }}>
            <Box component="h2" sx={{ m: 0, mb: 2, fontSize: { xs: "2.4rem", md: "4rem" }, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, color: T.ink }}>{s.title}</Box>
            <Box component="p" sx={{ m: 0, mb: 3.5, maxWidth: 520, fontSize: { xs: "1rem", md: "1.12rem" }, lineHeight: 1.7, color: T.body }}>{s.text}</Box>
            <Box component={Link} href={s.href} sx={{ ...pillBtn(false), bgcolor: T.ink, color: "#fff", border: 0, "&:hover": { bgcolor: T.greenDark, color: "#fff" } }}>
              View products <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function PressureChart() {
  const [ref, on] = useInView<HTMLDivElement>(0.25);
  return (
    <Box ref={ref} sx={{ p: { xs: 2.5, md: 4 }, borderRadius: "24px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
      <Box component="h3" sx={{ m: 0, mb: 0.5, fontSize: "1.05rem", fontWeight: 800, color: T.ink }}>Pressure range at a glance</Box>
      <Box component="p" sx={{ m: 0, mb: 3, fontSize: "0.85rem", color: T.muted }}>Maximum ratings by range, 0 to 150,000 psi. Ratings vary by part.</Box>
      <Box sx={{ display: "grid", gap: 2.25 }}>
        {PRESSURE.map((p, i) => (
          <Box key={p.name}>
            <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", columnGap: 2, mb: 0.75, fontSize: "0.88rem" }}>
              <Box component="span" sx={{ fontWeight: 700, color: T.ink }}>{p.name}</Box>
              <Box component="span" sx={{ color: T.body }}>{p.note}</Box>
            </Box>
            <Box sx={{ position: "relative", height: 12, borderRadius: 999, bgcolor: T.surface, overflow: "hidden" }}>
              <Box sx={{ position: "absolute", top: 0, bottom: 0, left: `${(p.from / MAX_PSI) * 100}%`, width: on ? `${Math.max(((p.to - p.from) / MAX_PSI) * 100, 2)}%` : 0, borderRadius: 999, bgcolor: p.color, transition: `width 1.1s cubic-bezier(.2,.8,.2,1) ${i * 150}ms` }} />
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1.5, fontSize: "0.72rem", color: T.muted }}>
        <span>0</span>
        <span>50,000</span>
        <span>100,000</span>
        <span>150,000 psi</span>
      </Box>
    </Box>
  );
}

/** Pumster-style keyword circles joined by "+", then benefits with icons */
function Why() {
  return (
    <Box component="section" id="why" aria-labelledby="h2-why" sx={{ scrollMarginTop: 190, py: { xs: 8, md: 11 } }}>
      <Box sx={wrap}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Kicker>Buying from Valvenok</Kicker>
          <H2 id="h2-why">Built for pressure, ready to order</H2>
        </Box>
        <Box sx={{ display: { xs: "grid", md: "flex" }, gridTemplateColumns: "repeat(2, auto)", justifyContent: "center", alignItems: "center", gap: { xs: 1.5, md: 2 }, mb: { xs: 7, md: 10 } }}>
          {CIRCLES.map(([big, small], k) => (
            <React.Fragment key={big}>
              {k > 0 && <Box aria-hidden sx={{ display: { xs: "none", md: "block" }, fontSize: "2.4rem", fontWeight: 300, color: T.green, lineHeight: 1 }}>+</Box>}
              <Reveal from="zoom" delay={k * 120}>
                <Box sx={{ width: { xs: 132, sm: 160, md: 200 }, aspectRatio: "1 / 1", borderRadius: "50%", border: `1.5px solid ${T.ink}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", p: 2, boxSizing: "border-box", bgcolor: "#fff", transition: "all .25s", "&:hover": { bgcolor: T.greenSoft, borderColor: T.greenDark, transform: "translateY(-4px)" } }}>
                  <Box sx={{ fontSize: { xs: "1.05rem", md: "1.45rem" }, fontWeight: 800, letterSpacing: "-0.02em", color: T.ink, lineHeight: 1.1 }}>
                    {big}
                    <Box component="span" sx={{ color: T.green }}>.</Box>
                  </Box>
                  <Box sx={{ mt: 0.75, fontSize: { xs: "0.72rem", md: "0.85rem" }, color: T.body, lineHeight: 1.3 }}>{small}</Box>
                </Box>
              </Reveal>
            </React.Fragment>
          ))}
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 5, md: 8 }, alignItems: "center" }}>
          <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", display: "grid", gap: { xs: 3, md: 3.5 } }}>
            {BENEFITS.map((b, k) => (
              <Reveal key={b.title} from="left" delay={k * 100}>
                <Box component="li" sx={{ display: "flex", gap: 2.5, alignItems: "center" }}>
                  <Box sx={{ flexShrink: 0, width: 58, height: 58, borderRadius: "50%", bgcolor: T.greenSoft, border: "1px solid #CFEBC6", color: T.greenDark, display: "grid", placeItems: "center", "& svg": { fontSize: 28 } }}>{b.icon}</Box>
                  <Box>
                    <Box component="h3" sx={{ m: 0, fontSize: { xs: "1.15rem", md: "1.35rem" }, fontWeight: 700, color: T.ink, letterSpacing: "-0.01em" }}>{b.title}</Box>
                    <Box component="p" sx={{ m: 0, mt: 0.25, fontSize: "0.95rem", color: T.body, lineHeight: 1.55 }}>{b.text}</Box>
                  </Box>
                </Box>
              </Reveal>
            ))}
          </Box>
          <Reveal from="right">
            <PressureChart />
          </Reveal>
        </Box>
      </Box>
    </Box>
  );
}

function SupportsArt() {
  // Simple drawing for the tube supports card (no product photo yet)
  return (
    <Box component="svg" viewBox="0 0 160 110" aria-hidden sx={{ width: "62%", height: "auto" }}>
      {[30, 55, 80].map((y) => (
        <rect key={y} x="8" y={y - 5} width="144" height="10" rx="5" fill="#CFD8D2" />
      ))}
      <rect x="62" y="14" width="36" height="84" rx="8" fill="#fff" stroke="#9AA9A0" strokeWidth="3" />
      {[30, 55, 80].map((y) => (
        <circle key={y} cx="80" cy={y} r="7" fill="#E6ECE8" stroke="#9AA9A0" strokeWidth="2" />
      ))}
    </Box>
  );
}

export function RangeCard({ r, tint }: { r: Range; tint: string }) {
  return (
    <Box
      component={Link}
      href={r.href}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxSizing: "border-box",
        borderRadius: "22px",
        bgcolor: "#fff",
        border: `1px solid ${T.border}`,
        overflow: "hidden",
        textDecoration: "none",
        color: "inherit",
        transition: "transform .25s, box-shadow .25s, border-color .25s",
        "&:hover": { transform: "translateY(-4px)", boxShadow: T.shadowHover, borderColor: "#CFEBC6" },
        "&:hover .go": { bgcolor: T.green, color: T.greenDeep },
        "&:hover .go svg": { transform: "translateX(2px)" },
        "&:hover img": { transform: r.cover ? "scale(1.05)" : "scale(1.06)" },
      }}
    >
      <Box sx={{ position: "relative", height: 190, bgcolor: tint, display: "grid", placeItems: "center", overflow: "hidden" }}>
        {r.img ? (
          <Box
            component="img"
            src={r.img}
            alt={r.title}
            loading="lazy"
            sx={{
              transition: "transform .4s",
              ...(r.cover ? { width: "100%", height: "100%", objectFit: "cover" } : { maxWidth: "70%", maxHeight: "78%", objectFit: "contain", mixBlendMode: "multiply" }),
            }}
          />
        ) : (
          <SupportsArt />
        )}
        <BrandBadge brands={r.brands} />
      </Box>
      <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", flex: 1 }}>
        <Box component="h4" sx={{ m: 0, mb: 0.75, fontSize: "1.1rem", fontWeight: 800, color: T.ink, letterSpacing: "-0.01em" }}>{r.title}</Box>
        <Box component="p" sx={{ m: 0, mb: 2, fontSize: "0.9rem", lineHeight: 1.55, color: T.body, flex: 1 }}>{r.text}</Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 1 }}>
          <Box component="span" sx={{ px: 1.25, py: 0.5, borderRadius: 999, bgcolor: T.greenSoft, color: T.greenDark, fontSize: "0.78rem", fontWeight: 700, whiteSpace: "nowrap" }}>{r.pressure}</Box>
          <Box className="go" component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, whiteSpace: "nowrap", px: 1.5, py: 0.6, borderRadius: 999, border: `1px solid ${T.border}`, fontSize: "0.82rem", fontWeight: 700, color: T.ink, transition: "all .2s", "& svg": { transition: "transform .2s" } }}>
            View range <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

/** Open the product list on one group's tab and scroll to it (used by the hero tiles) */
function openGroup(key: string) {
  window.dispatchEvent(new CustomEvent("hub:group", { detail: key }));
  document.getElementById("ranges")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Ranges() {
  const [tab, setTab] = React.useState<string>("all");
  React.useEffect(() => {
    const on = (e: Event) => setTab((e as CustomEvent<string>).detail);
    window.addEventListener("hub:group", on);
    return () => window.removeEventListener("hub:group", on);
  }, []);
  const shown = tab === "all" ? GROUPS : GROUPS.filter((g) => g.key === tab);
  const tabs = [{ key: "all", label: "All products" }, ...GROUPS.map((g) => ({ key: g.key, label: g.label }))];
  return (
    <Box component="section" id="ranges" aria-labelledby="h2-ranges" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface, scrollMarginTop: 190 }}>
      <Box sx={wrap}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Kicker>Our ranges</Kicker>
          <H2 id="h2-ranges">Everything for hydrogen and high pressure</H2>
          <Lead center>Pick a family to see every series, size and model, with prices or a quote.</Lead>
        </Box>

        <Box role="tablist" aria-label="Product groups" sx={{ display: "flex", gap: 1, justifyContent: { xs: "flex-start", md: "center" }, overflowX: "auto", pb: 1, mb: { xs: 3, md: 5 }, scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}>
          {tabs.map((t) => {
            const on = t.key === tab;
            return (
              <Box
                key={t.key}
                component="button"
                role="tab"
                aria-selected={on}
                onClick={() => setTab(t.key)}
                sx={{
                  flexShrink: 0,
                  cursor: "pointer",
                  px: 2.25,
                  py: 1.1,
                  borderRadius: 999,
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  fontFamily: "inherit",
                  border: `1px solid ${on ? T.greenDark : T.border}`,
                  bgcolor: on ? T.greenDark : "#fff",
                  color: on ? "#fff" : T.ink,
                  transition: "all .2s",
                  "&:hover": { borderColor: T.greenDark },
                }}
              >
                {t.label}
              </Box>
            );
          })}
        </Box>

        <Box sx={{ display: "grid", gap: { xs: 6, md: 8 } }}>
          {shown.map((g) => (
            <Box key={g.key} component="section" aria-labelledby={`h3-${g.key}`}>
              {/* Group heading: picture + title with its description underneath, range count on the right */}
              <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1.5, md: 2.25 }, mb: 2.5, p: { xs: 1.5, md: 2 }, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}` }}>
                <Box sx={{ flexShrink: 0, width: { xs: 56, md: 72 }, height: { xs: 56, md: 72 }, borderRadius: "16px", bgcolor: g.tint, display: "grid", placeItems: "center", overflow: "hidden" }}>
                  <Box component="img" src={SHOWCASE.find((x) => x.key === g.key)?.img} alt="" sx={{ width: "74%", height: "74%", objectFit: "contain", mixBlendMode: "multiply" }} />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Box component="p" sx={{ m: 0, mb: 0.25, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase !important", color: T.greenDark }}>{g.kicker}</Box>
                  <Box component="h3" id={`h3-${g.key}`} sx={{ m: 0, mb: 0.5, fontSize: { xs: "1.2rem", md: "1.5rem" }, fontWeight: 800, color: T.ink, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{g.title}</Box>
                  <Box component="p" sx={{ m: 0, maxWidth: 720, fontSize: { xs: "0.85rem", md: "0.92rem" }, color: T.body, lineHeight: 1.55 }}>{g.intro}</Box>
                </Box>
                <Box component="span" sx={{ display: { xs: "none", sm: "inline-flex" }, flexShrink: 0, alignSelf: "center", px: 1.5, py: 0.6, borderRadius: 999, bgcolor: T.greenSoft, color: T.greenDark, fontSize: "0.8rem", fontWeight: 700 }}>
                  {g.ranges.length} ranges
                </Box>
              </Box>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(3, 1fr)" }, gap: { xs: 2, md: 2.5 } }}>
                {g.ranges.map((r, i) => (
                  <Reveal key={r.href + r.title} delay={(i % 3) * 80}>
                    <RangeCard r={r} tint={g.tint} />
                  </Reveal>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function Selector() {
  const [i, setI] = React.useState(0);
  const pick = WHICH[i];
  return (
    <Box component="section" id="selector" aria-labelledby="h2-which" sx={{ scrollMarginTop: 190, py: { xs: 8, md: 11 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Quick selector</Kicker>
          <H2 id="h2-which">Which range do I need?</H2>
          <Lead>Choose your application and we’ll point you to the right place to start.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 2.5, md: 4 }, alignItems: "stretch" }}>
          <Box sx={{ display: "grid", gap: 1 }}>
            {WHICH.map((w, k) => {
              const on = k === i;
              return (
                <Box
                  key={w.app}
                  component="button"
                  onClick={() => setI(k)}
                  aria-pressed={on}
                  sx={{
                    textAlign: "left",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: "0.95rem",
                    fontWeight: on ? 700 : 500,
                    px: 2.25,
                    py: 1.5,
                    borderRadius: "14px",
                    border: `1px solid ${on ? "#BFE5B3" : T.border}`,
                    bgcolor: on ? T.greenSoft : "#fff",
                    color: on ? T.greenDeep : T.ink,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    transition: "all .2s",
                    "&:hover": { borderColor: "#BFE5B3" },
                  }}
                >
                  <Box component="span" aria-hidden sx={{ flexShrink: 0, width: 18, height: 18, borderRadius: "50%", border: `2px solid ${on ? T.greenDark : "#C5D0C8"}`, display: "grid", placeItems: "center", transition: "border-color .2s" }}>
                    <Box component="span" sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: T.greenDark, transform: on ? "scale(1)" : "scale(0)", transition: "transform .2s" }} />
                  </Box>
                  <Box component="span" sx={{ flex: 1 }}>{w.app}</Box>
                </Box>
              );
            })}
          </Box>
          <Box key={i} sx={{ borderRadius: "24px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow, overflow: "hidden", display: "flex", flexDirection: "column", animation: "wordIn .45s cubic-bezier(.2,.8,.2,1) both" }}>
            <Box sx={{ height: { xs: 200, md: 260 }, bgcolor: L.mint, display: "grid", placeItems: "center", overflow: "hidden" }}>
              <Box component="img" src={pick.img} alt="" sx={pick.img === IMG.cryo ? { width: "100%", height: "100%", objectFit: "cover" } : { maxWidth: "60%", maxHeight: "80%", objectFit: "contain", mixBlendMode: "multiply" }} />
            </Box>
            <Box sx={{ p: { xs: 2.5, md: 3.5 } }}>
              <Box component="p" sx={{ m: 0, mb: 0.75, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase !important", color: T.muted }}>Start with</Box>
              <Box component="p" sx={{ m: 0, mb: 2.5, fontSize: { xs: "1.2rem", md: "1.4rem" }, fontWeight: 800, color: T.ink, lineHeight: 1.3 }}>{pick.pick}</Box>
              <Box component={Link} href={pick.href} sx={pillBtn(true)}>
                Go to the range <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Specifying() {
  return (
    <Box component="section" id="specifying" aria-labelledby="h2-spec" sx={{ py: { xs: 8, md: 11 }, scrollMarginTop: 190 }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Before you order</Kicker>
          <H2 id="h2-spec">Specifying for hydrogen service</H2>
          <Lead>Check these five points before you order. If you’re unsure, send us the details and we’ll match the part.</Lead>
        </Box>
        <Box component="ol" sx={{ m: 0, p: 0, listStyle: "none", display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
          {CHECKS.map(([k, v], i) => (
            <Box component="li" key={k} sx={{ display: "flex", gap: 2, p: 2.5, borderRadius: "18px", bgcolor: "#fff", border: `1px solid ${T.border}` }}>
              <Box sx={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", bgcolor: T.greenSoft, color: T.greenDark, fontWeight: 800, display: "grid", placeItems: "center" }}>{i + 1}</Box>
              <Box>
                <Box component="h3" sx={{ m: 0, mb: 0.5, fontSize: "1rem", fontWeight: 800, color: T.ink }}>{k}</Box>
                <Box component="p" sx={{ m: 0, color: T.body, lineHeight: 1.65, fontSize: "0.93rem" }}>{v}</Box>
              </Box>
            </Box>
          ))}
          <Box component="li" sx={{ display: "flex", gap: 2, p: 2.5, borderRadius: "18px", bgcolor: "#fff", border: `1px solid ${T.border}` }}>
            <Box sx={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", bgcolor: T.greenSoft, color: T.greenDark, display: "grid", placeItems: "center" }}>
              <AcUnitRoundedIcon sx={{ fontSize: 20 }} />
            </Box>
            <Box>
            <Box component="h3" sx={{ m: 0, mb: 0.5, fontSize: "1rem", fontWeight: 800, color: T.ink }}>Cryogenic service</Box>
            <Box component="p" sx={{ m: 0, color: T.body, lineHeight: 1.65, fontSize: "0.93rem" }}>
              LNG runs at about −162 °C, liquid nitrogen at −196 °C and liquid hydrogen at −253 °C. Cryogenic valves use materials that stay tough at these temperatures and an extended bonnet that keeps the stem packing warm enough to seal. See our{" "}
              <Box component={Link} href="/valves/industrial-valves/butterfly-valves/butt-welded-butterfly-valve" sx={{ color: T.greenDark, fontWeight: 700 }}>cryogenic butterfly valves</Box>, or read more about{" "}
              <Box component={Link} href="/cryogenic-valves" sx={{ color: T.greenDark, fontWeight: 700 }}>cryogenic valves</Box>.
            </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Certs() {
  return (
    <Box component="section" id="approvals" aria-labelledby="h2-certs" sx={{ scrollMarginTop: 190, py: { xs: 7, md: 10 }, bgcolor: T.surface }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Approvals</Kicker>
          <H2 id="h2-certs">Certifications explained</H2>
          <Lead>Certification varies by model, so check the product table for each part.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: 2 }}>
          {CERTS.map(([code, what, where], i) => (
            <Reveal key={code} delay={(i % 4) * 70}>
              <Box sx={{ height: "100%", boxSizing: "border-box", p: 2.5, borderRadius: "18px", bgcolor: "#fff", border: `1px solid ${T.border}` }}>
                <Box component="h3" sx={{ m: 0, mb: 1, fontSize: "1.35rem", fontWeight: 800, letterSpacing: "-0.02em", ...gradientText }}>{code}</Box>
                <Box component="p" sx={{ m: 0, mb: 1.5, fontSize: "0.9rem", lineHeight: 1.55, color: T.body }}>{what}</Box>
                <Box component="p" sx={{ m: 0, fontSize: "0.78rem", fontWeight: 700, color: T.muted }}>Where: {where}</Box>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function Brands() {
  const panam = groupSite("Panam Valves");
  const hiflux = groupSite("Hiflux UK");
  const list = [
    { name: "Panam", logo: panam.logo, text: "SS 316 high-pressure needle, ball and DBB valves, manifolds, cone & thread and pipe fittings, 10,000–60,000 psi.", links: [{ label: "Panam needle valves", href: "/high-pressure/valves/needle-valves/products?brand=Panam" }, { label: "Panam fittings", href: "/high-pressure/fittings/products?brand=Panam" }], site: panam },
    { name: "Hiflux", logo: hiflux.logo, text: "STS 316 valves, fittings and tubing for the highest pressures, up to 150,000 psi, plus tooling and tube supports.", links: [{ label: "About Hiflux", href: "/brands/hiflux" }, { label: "Hiflux valves", href: "/hydrogen-cryogenic/valves" }, { label: "Hiflux fittings", href: "/hydrogen-cryogenic/fittings" }, { label: "Hiflux tubing", href: "/hydrogen-cryogenic/tube" }], site: hiflux },
    { name: "Youngdo", logo: IMG.youngdoLogo, text: "Hydrogen, LPG and industrial gas cylinder valves to 70 MPa, with KGS, EC79, R134 and CGA approved models.", links: [{ label: "About Youngdo", href: "/brands/youngdo" }, { label: "All gas & cylinder valves", href: "/high-pressure/valves/gas-valves" }, { label: "Hydrogen cylinder valves", href: "/hydrogen-cryogenic/hydrogen" }] },
  ];
  return (
    <Box component="section" id="brands" aria-labelledby="h2-brands" sx={{ scrollMarginTop: 190, py: { xs: 8, md: 11 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Shop by brand</Kicker>
          <H2 id="h2-brands">The brands behind the range</H2>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2.5 }}>
          {list.map((b, i) => (
            <Reveal key={b.name} delay={i * 90}>
              <Box sx={{ height: "100%", boxSizing: "border-box", p: 3, borderRadius: "22px", bgcolor: "#fff", border: `1px solid ${T.border}`, display: "flex", flexDirection: "column" }}>
                <Box sx={{ height: 52, display: "flex", alignItems: "center", mb: 2 }}>
                  <Box sx={{ display: "inline-flex", alignItems: "center", ...(DARK_LOGO.has(b.name) ? { bgcolor: T.greenDeep, px: 2, py: 1.25, borderRadius: "12px" } : {}) }}>
                    <Box component="img" src={b.logo} alt={`${b.name} logo`} sx={{ maxHeight: DARK_LOGO.has(b.name) ? 28 : 44, maxWidth: 150, objectFit: "contain", display: "block" }} />
                  </Box>
                </Box>
                <Box component="p" sx={{ m: 0, mb: 2, fontSize: "0.93rem", lineHeight: 1.6, color: T.body, flex: 1 }}>{b.text}</Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {b.links.map((l) => (
                    <Box key={l.href} component={Link} href={l.href} sx={{ px: 1.5, py: 0.6, borderRadius: 999, bgcolor: T.greenSoft, border: "1px solid #CFEBC6", color: T.greenDark, fontSize: "0.82rem", fontWeight: 700, textDecoration: "none", "&:hover": { bgcolor: "#DDF3D6" } }}>
                      {l.label}
                    </Box>
                  ))}
                  {b.site && (
                    <Box component="a" href={b.site.url} target="_blank" rel="noopener" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, px: 1.5, py: 0.6, borderRadius: 999, border: `1px solid ${T.border}`, color: T.ink, fontSize: "0.82rem", fontWeight: 700, textDecoration: "none", "&:hover": { borderColor: T.greenDark, color: T.greenDark } }}>
                      Visit {b.site.name} website <ArrowOutwardRoundedIcon sx={{ fontSize: 14 }} />
                    </Box>
                  )}
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function Faq() {
  return (
    <Box component="section" id="faq" aria-labelledby="h2-faq" sx={{ scrollMarginTop: 190, py: { xs: 7, md: 10 }, bgcolor: T.surface }}>
      <Box sx={{ ...wrap, maxWidth: 900 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Kicker>FAQ</Kicker>
          <H2 id="h2-faq">Hydrogen and high-pressure questions</H2>
        </Box>
        <Box sx={{ display: "grid", gap: 1.25 }}>
          {HUB_FAQ.map((f, i) => (
            <Box
              component="details"
              key={f.q}
              open={i === 0}
              sx={{
                borderRadius: "16px",
                bgcolor: "#fff",
                border: `1px solid ${T.border}`,
                "& summary": { listStyle: "none", cursor: "pointer", px: 2.5, py: 2, fontWeight: 700, color: T.ink, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2 },
                "& summary::-webkit-details-marker": { display: "none" },
                "& summary::after": { content: '"+"', flexShrink: 0, width: 28, height: 28, borderRadius: "50%", bgcolor: T.greenSoft, color: T.greenDark, fontWeight: 800, display: "grid", placeItems: "center", lineHeight: "28px", textAlign: "center" },
                "&[open] summary::after": { content: '"–"' },
              }}
            >
              <Box component="summary">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.75 }}>
                  <Box sx={{ flexShrink: 0, width: 40, height: 40, borderRadius: "12px", bgcolor: T.greenSoft, color: T.greenDark, display: "grid", placeItems: "center" }}>
                    {React.createElement(FAQ_ICONS[i % FAQ_ICONS.length], { sx: { fontSize: 21 } })}
                  </Box>
                  <Box component="h3" sx={{ m: 0, font: "inherit" }}>{f.q}</Box>
                </Box>
              </Box>
              <Box component="p" sx={{ m: 0, pl: { xs: 2.5, sm: "78px" }, pr: 2.5, pb: 2.25, color: T.body, lineHeight: 1.7 }}>{f.a}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function Cta() {
  return (
    <Box component="section" aria-labelledby="h2-cta" sx={{ py: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ position: "relative", overflow: "hidden", p: { xs: 3.5, md: 6 }, borderRadius: "28px", background: `linear-gradient(120deg, ${L.mint} 0%, #EAF4FF 55%, #FFF7DD 100%)`, border: `1px solid ${T.border}`, display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { md: "center" }, justifyContent: "space-between", gap: 3 }}>
          <Box sx={{ position: "relative" }}>
            <Box component="h2" id="h2-cta" sx={{ m: 0, mb: 1, fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink }}>Need help choosing?</Box>
            <Box component="p" sx={{ m: 0, maxWidth: 620, lineHeight: 1.7, color: T.body }}>
              Send us the pressure, media, temperature, connection and approvals you need, and we’ll recommend the right part and quote it. Already have the part number? Use Quick Order.
            </Box>
          </Box>
          <Box sx={{ position: "relative", display: "flex", gap: 1.5, flexWrap: "wrap", flexShrink: 0 }}>
            <Box component={Link} href="/contact" sx={pillBtn(true)}>
              Request a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box component={Link} href="/quick-order" sx={pillBtn(false)}>
              Quick Order
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function HydrogenHub() {
  return (
    <MotionRoot sx={{ ...textReset, bgcolor: "#fff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Hero />
      <Stats />
      <SectionNav />
      <Intro />
      <Showcase />
      <Ranges />
      <Why />
      <Selector />
      <Specifying />
      <Certs />
      <Brands />
      <Faq />
      <Cta />
    </MotionRoot>
  );
}
