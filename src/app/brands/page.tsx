"use client";

// Brands we supply, in three groups:
// 1. Products on Valvenok: brands with a brand page or product pages on this site.
// 2. Group websites: brands sold through their own website (KOSAPLUS); group brands
//    that also have products here (Panam, Mars, Hiflux, SPAC) show a Website ↗ link in group 1.
// 3. Available to order: manufacturers we are associated with whose products are not
//    listed online yet; customers ask us for a quote.
// Danfoss and Walrus Pumps stay hidden (logged on the clean-up task vk-z1).

import * as React from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { KeepUnits } from "@/src/app/Common/KeepUnits";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { MotionRoot, LightBackdrop, Words, gradientText, Reveal, L, Blob } from "@/src/app/Common/LightMotion";
import { wrap, Kicker, H2, Lead, pillBtn } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";

const V = "https://pblol2.blob.core.windows.net/valvenok-images";

type Cat = "Valves" | "Actuators" | "Fittings" | "Hydrogen" | "Instrumentation";
type OnSite = { name: string; logo?: string; scale?: number; dark?: boolean; desc: string; cats: Cat[]; href: string; website?: string };

const ON_SITE: OnSite[] = [
  { name: "Susin I-Tork", scale: 1.15, logo: `${V}/logo/susin-logo.webp`, desc: "Pneumatic, electric, hydraulic and mechanical actuators, and limit switch boxes.", cats: ["Actuators"], href: "/brands/susin" },
  { name: "Panam", logo: "https://pblol2.blob.core.windows.net/panam-images/panam-resize_smallest.jpg", desc: "Instrumentation valves, manifolds and fittings for hydrogen, oil and gas and industrial applications.", cats: ["Valves", "Fittings", "Hydrogen"], href: "/valves/instrumentation-valves", website: "https://www.panamvalve.com/" },
  { name: "Mars Valves", scale: 1.6, logo: `${V}/brands/mars.png`, desc: "Ball valves: 2-piece, 3-piece, flanged, sanitary and fire-safe ranges.", cats: ["Valves"], href: "/brands/mars-valves", website: "https://www.marsvalvenok.com/" },
  { name: "Hiflux", logo: `${V}/products/hiflux/logo.png`, desc: "High-pressure valves, fittings and tubing rated to 150,000 psi.", cats: ["Hydrogen", "Fittings"], href: "/brands/hiflux", website: "https://www.hiflux.uk.com/" },
  { name: "Value Valves", logo: `${V}/products/valves/butterfly-valves/logo.svg`, desc: "Butterfly valves and flow control solutions for industrial piping systems.", cats: ["Valves"], href: "/brands/value-valves" },
  { name: "UTAM Valves", logo: `${V}/products/valves/utam-logo.png`, desc: "Industrial and marine valves, including bolted and union bonnet globe and gate valves.", cats: ["Valves"], href: "/brands/utam-valves" },
  { name: "Pietro Fiorentini", logo: `${V}/products/industrial-valves/logo.svg`, desc: "Gas distribution valves, control ball valves and pressure regulators for natural gas and hydrogen networks.", cats: ["Valves", "Instrumentation"], href: "/brands/pietro-fiorentini" },
  { name: "Youngdo", scale: 1.3, dark: true, logo: `${V}/products/cryogenic/top_logo.png`, desc: "Hydrogen, LPG and industrial gas cylinder valves for high-pressure gas storage and distribution.", cats: ["Hydrogen", "Valves"], href: "/brands/youngdo" },
  { name: "Adaptix", logo: `${V}/brands/Adaptix/adaptix-logo.png`, desc: "Sanitary tri-clamp fittings: clamps, ferrules, blind covers and sight glass end caps.", cats: ["Fittings"], href: "/fittings-tubing/sanitary-fittings" },
  { name: "SPAC", logo: "https://pblol2.blob.core.windows.net/spac-images/spac-logo.webp", desc: "Pneumatic push-in fittings and tubing here; rack & pinion actuators on their own website.", cats: ["Fittings"], href: "/fittings-tubing/pneumatic-fittings", website: "https://www.spacpneumatic.co.uk/" },
  { name: "ISIS Fluid Control", logo: `${V}/logo/logo-isis.svg`, desc: "S301E wafer and lugged butterfly valves.", cats: ["Valves"], href: "/valves/industrial-valves/butterfly-valves/s301e-wafer-butterfly-valve" },
  { name: "VSI", logo: `${V}/brands/vsi.png`, desc: "Atlas severe service control valves.", cats: ["Valves"], href: "/valves/industrial-valves/control-valves" },
  { name: "Cameron", logo: `${V}/brands/cameron-logo.png`, desc: "WKM 370D flanged ball valve.", cats: ["Valves"], href: "/valves/industrial-valves/ball-valves/cameron-wkm-370d" },
  { name: "Fisher", scale: 1.3, logo: `${V}/brands/fisher-logo.jpg`, desc: "Lined globe valve.", cats: ["Valves"], href: "/valves/industrial-valves/globe-valve/fisher-rss-lined" },
  { name: "Bettis", logo: `${V}/brands/bettis-logo.png`, desc: "Actuated ball valves.", cats: ["Valves", "Actuators"], href: "/valves/industrial-valves/ball-valves/bettis-rpx" },
  { name: "Velan", logo: `${V}/brands/velan-logo.png`, desc: "Cast steel swing check valves.", cats: ["Valves"], href: "/valves/industrial-valves/check-valves/velan-swing-check" },
  { name: "Anderson Greenwood", scale: 1.8, logo: `${V}/brands/anderson-greewood-logo.jpg`, desc: "Bolted bonnet check valves.", cats: ["Valves"], href: "/valves/industrial-valves/check-valves/ag-fasani-check" },
  { name: "Bonney Forge", desc: "Welded bonnet globe valves.", cats: ["Valves"], href: "/valves/industrial-valves/globe-valve/bonney-forge-welded-bonnet" },
];

const GROUP_ONLY = [
  { name: "KOSAPLUS", logo: `${V}/brands/kosaplus-logo.png`, scale: 2.2, desc: "Electric and pneumatic valve actuators and explosion-proof position indicators.", website: "https://www.kosaplus.co.uk/" },
];

// Associated manufacturers; descriptions as they were on this page before
const ON_REQUEST: { name: string; logo: string; desc: string; scale?: number }[] = [
  { name: "Baker Hughes", scale: 1.3, logo: `${V}/brands/baker-hughes-logo.png`, desc: "Energy technology and industrial equipment" },
  { name: "Siemens", logo: `${V}/brands/siemens-logo.png`, desc: "Industrial control technology" },
  { name: "Endress+Hauser", logo: `${V}/brands/endress-hauser.svg`, desc: "Process automation instrumentation" },
  { name: "Leser", logo: `${V}/brands/LESER-logo.png`, desc: "Safety valves" },
  { name: "Crosby", logo: `${V}/brands/crosby_logo.png`, desc: "Pressure relief valves" },
  { name: "Taylor Valve Technology", logo: `${V}/brands/taylor-valve-logo.png`, desc: "Safety relief and choke valves" },
  { name: "Mercer Valves", logo: `${V}/brands/mercer-logo.jpg`, desc: "Pressure relief valves" },
  { name: "Aquatrol", logo: `${V}/brands/aquatrol-logo.png`, desc: "Safety and relief valves" },
  { name: "Hydroseal", scale: 2.8, logo: `${V}/brands/hydroseal-logo.png`, desc: "Safety and relief valves" },
  { name: "FHT Valves", logo: `${V}/brands/fht-valves-logo.png`, desc: "Industrial ball valves" },
  { name: "Batu Valves", logo: `${V}/brands/batu-logo.png`, desc: "Flow control and boiler valves" },
  { name: "Knuckle Valves", scale: 2.6, logo: `${V}/brands/knuckle-valve-logo.png`, desc: "Specialised industrial valves" },
  { name: "Tormac", logo: `${V}/brands/tormac.svg`, desc: "Valves and flow control" },
];

const CATS: ("All" | Cat)[] = ["All", "Valves", "Actuators", "Fittings", "Hydrogen", "Instrumentation"];
const initials = (n: string) => n.split(" ").map((w) => w[0]).join("").slice(0, 3);

function Logo({ src, name, h = 120, scale, dark }: { src?: string; name: string; h?: number; scale?: number; dark?: boolean }) {
  return (
    <Box sx={{ height: { xs: Math.round(h * 0.7), sm: h }, display: "grid", placeItems: "center", px: { xs: 1.5, sm: 3 }, background: dark ? "linear-gradient(160deg, #1E2B24 0%, #0E1B12 100%)" : `linear-gradient(160deg, #fff 0%, ${T.surface} 100%)`, borderBottom: `1px solid ${T.border}`, overflow: "hidden" }}>
      {src ? (
        <Box component="img" src={src} alt={`${name} logo`} loading="lazy" sx={{ maxWidth: { xs: "80%", sm: "72%" }, maxHeight: { xs: h * 0.36, sm: h * 0.5 }, objectFit: "contain", transform: scale ? `scale(${scale})` : undefined, transition: "transform .3s" }} />
      ) : (
        <Box sx={{ width: 64, height: 64, borderRadius: "18px", bgcolor: L.mint, color: T.greenDark, display: "grid", placeItems: "center", fontWeight: 800, fontSize: "1.2rem" }}>{initials(name)}</Box>
      )}
    </Box>
  );
}

function FloatChip({ icon, title, sub, sx, delay = 0 }: { icon: React.ReactNode; title: string; sub: string; sx: object; delay?: number }) {
  return (
    <Box sx={{ position: "absolute", zIndex: 3, animation: `floaty 5s ease-in-out ${delay}s infinite`, ...sx }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 1.5, pr: 2.5, borderRadius: "18px", bgcolor: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", border: `1px solid ${T.border}`, boxShadow: T.shadowHover }}>
        <Box sx={{ width: 40, height: 40, borderRadius: "12px", bgcolor: L.mint, color: T.greenDark, display: "grid", placeItems: "center", animation: "pulseRing 2.4s ease-out infinite" }}>{icon}</Box>
        <Box>
          <Typography sx={{ fontWeight: 800, color: T.ink, lineHeight: 1.2, fontSize: "0.95rem" }}>{title}</Typography>
          <Typography sx={{ fontSize: "0.78rem", color: T.muted }}>{sub}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

// Hero visual: a tilted wall of the brand logos, each tile bobbing gently
function LogoWall() {
  const tiles = ON_SITE.filter((b) => b.logo && !b.dark).slice(0, 9);
  return (
    <Box sx={{ position: "relative", display: { xs: "none", md: "block" }, perspective: "1200px", pt: 7, pb: 7 }}>
      <Box sx={{ p: 2.5, borderRadius: "32px", bgcolor: "rgba(255,255,255,0.7)", backdropFilter: "blur(6px)", border: "6px solid #fff", boxShadow: "0 30px 70px rgba(46,139,30,0.16)", transform: "rotateX(6deg) rotateY(-10deg)", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1.5 }}>
        {tiles.map((b, i) => (
          <Box key={b.name} component={Link} href={b.href} aria-label={b.name}
            sx={{ height: 104, borderRadius: "18px", bgcolor: "#fff", border: `1px solid ${T.border}`, display: "grid", placeItems: "center", px: 1.5, animation: `floaty ${5 + (i % 3)}s ease-in-out ${i * 0.35}s infinite`, transition: "box-shadow .2s, border-color .2s", "&:hover": { boxShadow: T.shadowHover, borderColor: "#BFE3B4" } }}>
            <Box component="img" src={b.logo} alt="" sx={{ maxWidth: "80%", maxHeight: 46, objectFit: "contain", transform: b.scale ? `scale(${Math.min(b.scale, 1.4)})` : undefined }} />
          </Box>
        ))}
      </Box>
      <FloatChip icon={<WorkspacePremiumOutlinedIcon fontSize="small" />} title="JOSCAR" sub="Registered Supplier" sx={{ left: 8, bottom: 0 }} />
      <FloatChip icon={<GroupsOutlinedIcon fontSize="small" />} title="BVAA" sub="Member" delay={0.8} sx={{ right: 8, top: 0 }} />
    </Box>
  );
}

function Hero() {
  const stat = (n: number, label: string, href: string, tint: string) => (
    <Box component="a" href={href} sx={{ p: 2, borderRadius: "18px", textDecoration: "none", background: `linear-gradient(160deg, ${tint} 0%, #fff 100%)`, border: `1px solid ${T.border}`, transition: "transform .2s, box-shadow .2s", "&:hover": { transform: "translateY(-3px)", boxShadow: T.shadowHover } }}>
      <Box sx={{ fontSize: { xs: "1.7rem", md: "2.1rem" }, fontWeight: 800, color: T.ink, letterSpacing: "-0.03em", lineHeight: 1 }}>{n}</Box>
      <Box sx={{ mt: 0.75, fontSize: "0.8rem", fontWeight: 600, color: T.body, lineHeight: 1.35 }}>{label}</Box>
    </Box>
  );
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", background: `linear-gradient(180deg, ${L.cream} 0%, #F2FAEE 70%, #fff 100%)` }}>
      <LightBackdrop />
      <Box sx={{ ...wrap, position: "relative", pt: { xs: 6, md: 9 }, pb: { xs: 6, md: 10 }, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.05fr 1fr" }, gap: { xs: 5, md: 8 }, alignItems: "center" }}>
        <Box>
          <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, px: 1.5, py: 0.6, borderRadius: 999, bgcolor: "rgba(255,255,255,0.8)", border: `1px solid ${T.border}`, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.greenDark, animation: "wordIn .7s ease both" }}>
            <Box component="span" sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: T.green }} /> Our brands
          </Box>
          <Box component="h1" sx={{ m: 0, mt: 2.5, fontSize: { xs: "2.5rem", md: "4rem" }, fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.03, color: T.ink }}>
            <Words text="Leading manufacturers," />
            <Words text="one UK supplier" start={300} sx={gradientText} />
          </Box>
          <Typography sx={{ mt: 3, fontSize: { xs: "1.05rem", md: "1.15rem" }, lineHeight: 1.7, color: T.body, maxWidth: 560, animation: "wordIn .9s ease .5s both" }}>
            Browse the brands with products on Valvenok, visit our group brands’ own websites, or ask us about any of the other manufacturers we work with. Lead times are confirmed on every quotation.
          </Typography>
          <Box sx={{ mt: 4, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 1.25, maxWidth: 560, animation: "wordIn .9s ease .7s both" }}>
            {stat(ON_SITE.length, "Brands with products here", "#online", L.mint)}
            {stat(GROUP_ONLY.length + ON_SITE.filter((b) => b.website).length, "With their own website", "#group", "#E3F3FF")}
            {stat(ON_REQUEST.length, "More available to order", "#on-request", "#FFF5D6")}
          </Box>
        </Box>
        <LogoWall />
      </Box>
    </Box>
  );
}

// Shop by category: one tile per product type with its brand count and logos;
// a tile sets the brand filter below and scrolls to it.
const CAT_INFO: { cat: Cat; icon: React.ReactNode; tint: string; ink: string }[] = [
  { cat: "Valves", icon: <TuneOutlinedIcon />, tint: L.mint, ink: T.greenDark },
  { cat: "Actuators", icon: <SettingsOutlinedIcon />, tint: "#E3F3FF", ink: "#1F6FB2" },
  { cat: "Fittings", icon: <BuildOutlinedIcon />, tint: "#FFF5D6", ink: "#8A6100" },
  { cat: "Hydrogen", icon: <AcUnitOutlinedIcon />, tint: "#EEE9FF", ink: "#5B43B5" },
  { cat: "Instrumentation", icon: <SpeedOutlinedIcon />, tint: "#E6F7F2", ink: "#1E7D63" },
];

function ShopBar({ onPick }: { onPick: (c: Cat) => void }) {
  const perks: [React.ReactNode, string, string][] = [
    [<LocalShippingOutlinedIcon key="d" />, "Free UK delivery", "On orders over £150"],
    [<ScheduleOutlinedIcon key="l" />, "Lead times confirmed", "On every quotation"],
    [<WorkspacePremiumOutlinedIcon key="j" />, "JOSCAR registered", "Approved UK supplier"],
    [<BoltOutlinedIcon key="q" />, "Quick Order", "Know the part? Order it fast"],
  ];
  return (
    <Box component="section" aria-labelledby="h2-shop" sx={{ py: { xs: 6, md: 8 }, borderTop: `1px solid ${T.border}`, background: "linear-gradient(180deg, #fff 0%, #F7FBF5 100%)" }}>
      <Box sx={wrap}>
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 2, mb: 3 }}>
          <Box>
            <Kicker>Shop by category</Kicker>
            <H2 id="h2-shop">What Are You Looking For?</H2>
          </Box>
          <Box component={Link} href="/quick-order" sx={pillBtn(false)}>Quick Order <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} /></Box>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(5, 1fr)" }, gap: 1.5 }}>
          {CAT_INFO.map((c) => {
            const brands = ON_SITE.filter((b) => b.cats.includes(c.cat));
            const logos = brands.filter((b) => b.logo && !b.dark).slice(0, 4);
            return (
              <Box key={c.cat} component="button" onClick={() => onPick(c.cat)}
                sx={{ cursor: "pointer", font: "inherit", textAlign: "left", p: 2.25, borderRadius: "22px", border: `1px solid ${T.border}`, background: `linear-gradient(160deg, ${c.tint} 0%, #fff 75%)`, display: "flex", flexDirection: "column", gap: 1.25, transition: "transform .2s, box-shadow .2s", "&:hover": { transform: "translateY(-4px)", boxShadow: T.shadowHover }, "&:hover .go": { gap: 1 } }}>
                <Box sx={{ width: 44, height: 44, borderRadius: "14px", bgcolor: "#fff", color: c.ink, display: "grid", placeItems: "center", boxShadow: "0 4px 12px rgba(14,27,18,0.08)" }}>{c.icon}</Box>
                <Box>
                  <Box sx={{ fontSize: "1.08rem", fontWeight: 800, color: T.ink }}>{c.cat}</Box>
                  <Box sx={{ fontSize: "0.8rem", color: T.muted, fontWeight: 600 }}>{brands.length} brand{brands.length > 1 ? "s" : ""}</Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {logos.map((b, i) => (
                    <Box key={b.name} title={b.name} sx={{ width: 40, height: 40, ml: i ? -1 : 0, borderRadius: "50%", bgcolor: "#fff", border: `2px solid #fff`, boxShadow: "0 2px 6px rgba(14,27,18,0.12)", display: "grid", placeItems: "center", overflow: "hidden" }}>
                      <Box component="img" src={b.logo} alt="" sx={{ maxWidth: 30, maxHeight: 22, objectFit: "contain" }} />
                    </Box>
                  ))}
                  {brands.length > logos.length && <Box sx={{ ml: 1, fontSize: "0.78rem", fontWeight: 700, color: T.muted }}>+{brands.length - logos.length}</Box>}
                </Box>
                <Box className="go" sx={{ mt: "auto", display: "inline-flex", alignItems: "center", gap: 0.5, fontSize: "0.86rem", fontWeight: 700, color: c.ink, transition: "gap .2s" }}>
                  Shop {c.cat.toLowerCase()} <ArrowForwardRoundedIcon sx={{ fontSize: 17 }} />
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box sx={{ mt: 2.5, display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: 1, p: 1, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}` }}>
          {perks.map(([icon, t, d]) => (
            <Box key={t} sx={{ display: "flex", alignItems: "center", gap: 1.25, p: 1.25 }}>
              <Box sx={{ flexShrink: 0, width: 38, height: 38, borderRadius: "12px", bgcolor: L.mint, color: T.greenDark, display: "grid", placeItems: "center" }}>{icon}</Box>
              <Box sx={{ minWidth: 0 }}>
                <Box sx={{ fontSize: "0.88rem", fontWeight: 800, color: T.ink, lineHeight: 1.2 }}>{t}</Box>
                <Box sx={{ fontSize: "0.76rem", color: T.muted }}>{d}</Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function Online({ cat, setCat }: { cat: "All" | Cat; setCat: (c: "All" | Cat) => void }) {
  const [q, setQ] = React.useState("");
  const term = q.trim().toLowerCase();
  const list = ON_SITE.filter((b) => (cat === "All" || b.cats.includes(cat)) && (!term || `${b.name} ${b.desc} ${b.cats.join(" ")}`.toLowerCase().includes(term)));
  return (
    <Box component="section" id="online" aria-labelledby="h2-online" sx={{ py: { xs: 7, md: 10 }, scrollMarginTop: 120 }}>
      <Box sx={wrap}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
          <Box sx={{ width: 40, height: 40, borderRadius: "12px", bgcolor: L.mint, color: T.greenDark, display: "grid", placeItems: "center" }}><StorefrontOutlinedIcon /></Box>
          <Kicker>Products on Valvenok</Kicker>
        </Box>
        <H2 id="h2-online">Shop These Brands Here</H2>
        <Lead>Open a brand to see its products, specifications and catalogues, then request a quote. ↗ marks a group brand that also has its own website.</Lead>

        <Box sx={{ mt: 3, mb: 3.5, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1.5, justifyContent: "space-between" }}>
        <Box role="group" aria-label="Filter brands by product type" sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {CATS.map((c) => {
            const on = c === cat;
            const n = c === "All" ? ON_SITE.length : ON_SITE.filter((b) => b.cats.includes(c)).length;
            return (
              <Box key={c} component="button" aria-pressed={on} onClick={() => setCat(c)}
                sx={{ cursor: "pointer", font: "inherit", fontSize: "0.86rem", fontWeight: 700, px: 1.75, py: 0.8, borderRadius: 999, border: `1px solid ${on ? T.greenDark : T.border}`, bgcolor: on ? T.greenSoft : "#fff", color: on ? T.greenDark : T.body, transition: "all .15s" }}>
                {c} <Box component="span" sx={{ ml: 0.5, color: T.muted, fontWeight: 600 }}>{n}</Box>
              </Box>
            );
          })}
        </Box>
        <Box component="label" sx={{ display: "flex", alignItems: "center", gap: 1, px: 1.75, py: 0.9, width: { xs: "100%", sm: 280 }, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}`, "&:focus-within": { borderColor: T.greenDark, boxShadow: `0 0 0 3px ${T.greenSoft}` } }}>
          <SearchRoundedIcon sx={{ fontSize: 20, color: T.muted }} />
          <Box component="input" value={q} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQ(e.target.value)} placeholder="Search a brand or product" aria-label="Search brands"
            sx={{ border: 0, outline: 0, flex: 1, minWidth: 0, font: "inherit", fontSize: "0.9rem", color: T.ink, bgcolor: "transparent" }} />
        </Box>
        </Box>
        {list.length === 0 && (
          <Box sx={{ p: 3, borderRadius: "18px", bgcolor: T.surface, border: `1px dashed ${T.border}`, color: T.body, fontSize: "0.95rem" }}>
            No brand on this list matches “{q}”. It may still be one we can supply: <Box component={Link} href="/contact" sx={{ color: T.greenDark, fontWeight: 700 }}>ask us</Box>.
          </Box>
        )}

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }, gap: { xs: 1.25, sm: 2 } }}>
          {list.map((b, i) => (
            <Reveal key={b.name} delay={(i % 4) * 60}>
              <Box sx={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", borderRadius: "22px", overflow: "hidden", bgcolor: "#fff", border: `1px solid ${T.border}`, transition: "all .2s", "&:hover": { transform: "translateY(-4px)", boxShadow: T.shadowHover, borderColor: "#BFE3B4" }, "&:hover img": { transform: "scale(1.06)" } }}>
                <Box component={Link} href={b.href} aria-label={`${b.name}: view products`} sx={{ position: "absolute", inset: 0, zIndex: 0 }} />
                <Logo src={b.logo} name={b.name} scale={b.scale} dark={b.dark} />
                <Box sx={{ p: { xs: 1.5, sm: 2.25 }, display: "flex", flexDirection: "column", gap: 1, flex: 1 }}>
                  <Box sx={{ display: { xs: "none", sm: "flex" }, flexWrap: "wrap", gap: 0.5 }}>
                    {b.cats.map((c) => (
                      <Box key={c} component="span" sx={{ px: 1, py: 0.2, borderRadius: 999, fontSize: "0.7rem", fontWeight: 700, bgcolor: T.surface, color: T.body, border: `1px solid ${T.border}` }}>{c}</Box>
                    ))}
                  </Box>
                  <Typography component="h3" sx={{ fontSize: { xs: "0.95rem", sm: "1.1rem" }, fontWeight: 800, color: T.ink, lineHeight: 1.25 }}>{b.name}</Typography>
                  <Typography sx={{ fontSize: { xs: "0.78rem", sm: "0.88rem" }, color: T.body, lineHeight: 1.5 }}><KeepUnits text={b.desc} /></Typography>
                  <Box sx={{ mt: "auto", pt: 1.25, borderTop: `1px solid ${T.border}`, display: "flex", flexWrap: "wrap", columnGap: 2, rowGap: 0.5, position: "relative", zIndex: 1, "& a": { fontSize: { xs: "0.78rem", sm: "0.86rem" } } }}>
                    <Box component={Link} href={b.href} sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, fontSize: "0.86rem", fontWeight: 700, color: T.greenDark, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                      View products <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
                    </Box>
                    {b.website && (
                      <Box component="a" href={b.website} target="_blank" rel="noopener" sx={{ display: "inline-flex", alignItems: "center", gap: 0.4, fontSize: "0.86rem", fontWeight: 700, color: T.body, textDecoration: "none", "&:hover": { color: T.greenDark } }}>
                        Website <NorthEastRoundedIcon sx={{ fontSize: 14 }} />
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

// Full-width soft blue band (no card frame): text left, website logos right
function Group() {
  const ORDER = ["Panam", "Mars Valves", "Hiflux", "SPAC", "KOSAPLUS"];
  const sites = [...ON_SITE.filter((b) => b.website).map((b) => ({ name: b.name, logo: b.logo, scale: b.scale, website: b.website!, here: true })), ...GROUP_ONLY.map((g) => ({ name: g.name, logo: g.logo, scale: g.scale, website: g.website, here: false }))]
    .sort((x, y) => ORDER.indexOf(x.name) - ORDER.indexOf(y.name));
  return (
    <Box component="section" id="group" aria-labelledby="h2-group" sx={{ scrollMarginTop: 120, py: { xs: 7, md: 9 }, background: "linear-gradient(90deg, #EEF6FD 0%, #F5FAFF 50%, #F2FAEE 100%)", borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}` }}>
      <Box sx={{ ...wrap, display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.3fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
            <Box sx={{ width: 40, height: 40, borderRadius: "12px", bgcolor: "#DDF0FF", color: "#1F6FB2", display: "grid", placeItems: "center" }}><PublicOutlinedIcon /></Box>
            <Kicker>Also in our group</Kicker>
          </Box>
          <H2 id="h2-group">Brands With Their Own Website</H2>
          <Lead>Panam, Mars, Hiflux and SPAC products are listed here as well as on their own sites; KOSAPLUS is sold through its own website.</Lead>
        </Box>
        <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", display: "flex", flexWrap: "wrap", gap: 1.25 }}>
          {sites.map((g) => (
            <Box component="li" key={g.name} sx={{ flex: { xs: "1 1 calc(50% - 10px)", sm: "1 1 calc(33% - 10px)" } }}>
              <Box component="a" href={g.website} target="_blank" rel="noopener" aria-label={`${g.name} website (opens in a new tab)`}
                sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 1.25, pr: 1.75, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}`, textDecoration: "none", boxShadow: "0 1px 2px rgba(14,27,18,0.04)", transition: "all .2s", "&:hover": { borderColor: "#9CCBF0", boxShadow: "0 8px 20px rgba(31,111,178,0.12)" } }}>
                <Box sx={{ flexShrink: 0, width: 54, height: 40, borderRadius: 999, bgcolor: "#F7FAFC", display: "grid", placeItems: "center", overflow: "hidden" }}>
                  <Box component="img" src={g.logo} alt="" loading="lazy" sx={{ maxHeight: 26, maxWidth: 44, objectFit: "contain", transform: g.scale ? `scale(${Math.min(g.scale, 2.2)})` : undefined }} />
                </Box>
                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Box sx={{ fontSize: "0.9rem", fontWeight: 800, color: T.ink, lineHeight: 1.2 }}>{g.name}</Box>
                  <Box sx={{ fontSize: "0.72rem", color: T.muted }}>{g.here ? "Also listed here" : "Own website only"}</Box>
                </Box>
                <NorthEastRoundedIcon sx={{ fontSize: 16, color: "#1F6FB2" }} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

// Open section (no outer frame): a joined directory grid with hairline dividers
function OnRequest() {
  return (
    <Box component="section" id="on-request" aria-labelledby="h2-request" sx={{ scrollMarginTop: 120, py: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 3, mb: 4 }}>
          <Box sx={{ maxWidth: 680 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
              <Box sx={{ width: 40, height: 40, borderRadius: "12px", bgcolor: "#FFF0C2", color: "#8A6100", display: "grid", placeItems: "center" }}><RequestQuoteOutlinedIcon /></Box>
              <Kicker>Available to order</Kicker>
            </Box>
            <H2 id="h2-request">More Brands We Work With</H2>
            <Lead>We are associated with these manufacturers too. Their products aren’t listed online yet, so tell us the brand, model or part number and we’ll come back with price and lead time.</Lead>
          </Box>
          <Box sx={{ display: "flex", gap: 1.25, flexWrap: "wrap" }}>
            <Box component={Link} href="/contact" sx={pillBtn(true)}>Ask for a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} /></Box>
            <Box component={Link} href="/quick-order" sx={pillBtn(false)}>Quick Order</Box>
          </Box>
        </Box>

        <Box sx={{ borderRadius: "24px", overflow: "hidden", border: `1px solid ${T.border}`, bgcolor: "#fff", display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(5, 1fr)" } }}>
          {ON_REQUEST.map((b) => (
            <Box key={b.name} component={Link} href="/contact" aria-label={`Ask about ${b.name}`}
              sx={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 0.75, px: 1.5, py: 2.5, bgcolor: "#fff", outline: `1px solid ${T.border}`, outlineOffset: "-0.5px", textDecoration: "none", transition: "background .2s", "&:hover": { bgcolor: "#FBFDF8" }, "&:hover .ask": { opacity: 1, transform: "none" } }}>
              <Box sx={{ height: 52, width: "100%", display: "grid", placeItems: "center", overflow: "hidden" }}>
                <Box component="img" src={b.logo} alt="" loading="lazy" sx={{ maxHeight: 40, maxWidth: "78%", objectFit: "contain", transition: "transform .25s", transform: b.scale ? `scale(${b.scale})` : undefined }} />
              </Box>
              <Box sx={{ fontSize: "0.88rem", fontWeight: 800, color: T.ink, lineHeight: 1.2 }}>{b.name}</Box>
              <Box sx={{ fontSize: "0.74rem", color: T.muted, lineHeight: 1.35 }}>{b.desc}</Box>
              <Box className="ask" sx={{ mt: 0.5, display: "inline-flex", alignItems: "center", gap: 0.4, fontSize: "0.76rem", fontWeight: 700, color: T.greenDark, opacity: { xs: 1, md: 0 }, transform: { md: "translateY(4px)" }, transition: "opacity .2s, transform .2s" }}>
                Ask about this brand <ArrowForwardRoundedIcon sx={{ fontSize: 14 }} />
              </Box>
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: 3, p: { xs: 2, md: 2.5 }, borderRadius: "18px", bgcolor: "#FFF8E4", border: "1px dashed #E8C766", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 2 }}>
          <Box sx={{ flexShrink: 0, width: 44, height: 44, borderRadius: "14px", bgcolor: "#fff", color: "#8A6100", display: "grid", placeItems: "center" }}><SearchRoundedIcon /></Box>
          <Box sx={{ flex: 1, minWidth: 220 }}>
            <Box sx={{ fontSize: "1.02rem", fontWeight: 800, color: T.ink }}>Looking for a brand that isn’t listed?</Box>
            <Box sx={{ mt: 0.25, fontSize: "0.92rem", color: T.body }}>Ask us anyway and we’ll check whether we can supply it.</Box>
          </Box>
          <Box component={Link} href="/contact" sx={pillBtn(true)}>Ask about a brand <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} /></Box>
        </Box>
      </Box>
    </Box>
  );
}

// Full-width closing band, centred
function Cta() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", py: { xs: 8, md: 11 }, textAlign: "center", background: `linear-gradient(135deg, ${L.mint} 0%, #F7FCF4 40%, #EAF4FF 100%)`, borderTop: `1px solid ${T.border}` }}>
      <Blob color={L.lime} sx={{ top: -160, left: "10%", width: 360, height: 360 }} />
      <Blob color={L.sky} dur={22} delay={2} sx={{ bottom: -200, right: "8%", width: 380, height: 380 }} />
      <Box sx={{ ...wrap, position: "relative", maxWidth: 760 }}>
        <Box sx={{ mx: "auto", mb: 2, width: 52, height: 52, borderRadius: "16px", bgcolor: "#fff", color: T.greenDark, display: "grid", placeItems: "center", boxShadow: T.shadowHover }}><SupportAgentOutlinedIcon /></Box>
        <Box component="h2" sx={{ m: 0, fontSize: { xs: "2rem", md: "2.8rem" }, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, color: T.ink }}>
          One Order, <Box component="span" sx={gradientText}>Many Brands</Box>
        </Box>
        <Typography sx={{ mt: 2, fontSize: "1.08rem", lineHeight: 1.7, color: T.body }}>
          Send us your list with brands, models or part numbers and we’ll quote it in one go, with lead times confirmed on the quotation.
        </Typography>
        <Box sx={{ mt: 3.5, display: "flex", gap: 1.25, flexWrap: "wrap", justifyContent: "center" }}>
          <Box component={Link} href="/contact" sx={pillBtn(true)}>Request a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} /></Box>
          <Box component={Link} href="/quick-order" sx={pillBtn(false)}>Quick Order</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function BrandsPage() {
  const [cat, setCat] = React.useState<"All" | Cat>("All");
  const pick = (c: Cat) => { setCat(c); document.getElementById("online")?.scrollIntoView({ behavior: "smooth" }); };
  return (
    <MotionRoot sx={{ ...textReset, bgcolor: "#fff" }}>
      <Hero />
      <ShopBar onPick={pick} />
      <Online cat={cat} setCat={setCat} />
      <Group />
      <OnRequest />
      <Cta />
    </MotionRoot>
  );
}
