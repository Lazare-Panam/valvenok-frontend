// Applications: one entry per industry. Copy only uses facts already on the
// product pages it links to; every product link points at an existing page
// (one home per product: these pages link to products, they don't copy them).

import * as React from "react";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import OilBarrelOutlinedIcon from "@mui/icons-material/OilBarrelOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import DirectionsBoatOutlinedIcon from "@mui/icons-material/DirectionsBoatOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import LocalDrinkOutlinedIcon from "@mui/icons-material/LocalDrinkOutlined";

const BLOB = "https://pblol2.blob.core.windows.net/valvenok-images/banner-images";
// Industry photos in blob storage (folder "Applications", capital A)
const APP_IMG = "https://pblol2.blob.core.windows.net/valvenok-images/Applications";

export type Product = { name: string; why: string; href: string; img?: string };
export type App = {
  slug: string;
  name: string;
  short: string; // card line
  title: string; // meta title
  description: string; // meta description
  intro: string;
  image: string;
  imageAlt: string;
  tint: string;
  Icon: React.ElementType;
  facts: { value: string; label: string }[];
  products: Product[];
  checks: { title: string; text: string }[];
  guides?: { label: string; href: string }[];
};

export const APPS: App[] = [
  {
    slug: "hydrogen",
    name: "Hydrogen & refuelling",
    short: "Valves, fittings and tube for hydrogen storage, refuelling and test.",
    title: "Hydrogen Valves & Fittings for Refuelling and Storage | Valvenok",
    description: "Needle valves, cone & thread fittings, high-pressure tubing and hydrogen cylinder valves for refuelling stations, storage and test rigs. UK supply.",
    intro: "Hydrogen leaks where other gases don’t and can weaken some metals under pressure, so hydrogen systems use SS 316 parts, metal-to-metal cone & thread connections and pressure ratings with headroom. We supply the whole line, from cylinder valves to the pipework at the dispenser.",
    image: `${BLOB}/process-pipework-valves.jpg`,
    imageAlt: "Stainless steel process pipework with valves",
    tint: "#EAF4FF",
    Icon: LocalGasStationOutlinedIcon,
    facts: [
      { value: "70 MPa", label: "Hydrogen cylinder valves" },
      { value: "150,000 psi", label: "Highest rated fittings" },
      { value: "H70", label: "Refuelling needle valves" },
    ],
    products: [
      { name: "Hydrogen & High Pressure range", why: "Every hydrogen valve, fitting, tube and cylinder valve on one page.", href: "/hydrogen-cryogenic", img: "https://pblol2.blob.core.windows.net/hiflux/updated%20images/lok/hiflux_tube.png" },
      { name: "Needle valves", why: "Panam and Hiflux, 10,000–60,000 psi, plus H70 fuel-station valves.", href: "/high-pressure/valves/needle-valves", img: "https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/needle-valve.webp" },
      { name: "Cone & thread fittings", why: "Metal-to-metal seals, up to 150,000 psi.", href: "/high-pressure/fittings", img: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-adaptor.jpg" },
      { name: "High-pressure tubing", why: "Seamless SS 316 tube for cone & thread systems.", href: "/high-pressure/tubing", img: "https://pblol2.blob.core.windows.net/panam-images/products/tubing/tubing-1.jpg" },
      { name: "Hydrogen cylinder valves", why: "Youngdo 35 and 70 MPa valves with thermal relief options.", href: "/hydrogen-cryogenic/hydrogen", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/HE-700.png" },
      { name: "Safety & relief valves", why: "Overpressure protection from 1,000 to 60,000 psi.", href: "/hydrogen-cryogenic/valves/products?type=Safety%20Valve", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/relief-valve.png" },
    ],
    checks: [
      { title: "Pressure class", text: "Most storage and refuelling runs at 35 or 70 MPa. Choose parts rated above your maximum working pressure." },
      { title: "Material", text: "Austenitic stainless such as 316 is widely used; confirm the grade on each datasheet." },
      { title: "Connections", text: "Cone & thread connections seal metal to metal at very high pressure. Keep one standard across the line." },
      { title: "Approvals", text: "Vehicle, refuelling and industrial gas uses need different approvals. Ask for the certificate with the order." },
    ],
    guides: [{ label: "Leak-tight threads for hydrogen fittings", href: "/news/instrumentation-fittings-hydrogen-leak-tight-threads" }],
  },
  {
    slug: "oil-gas",
    name: "Oil & gas, offshore & wellhead",
    short: "Isolation, high-pressure and wellhead valves for upstream and offshore.",
    title: "Valves for Oil & Gas, Offshore and Wellhead | Valvenok",
    description: "Double block & bleed valves, high-pressure and wellhead valves, ball and gate valves and actuators for oil & gas and offshore service. UK supply and support.",
    intro: "Upstream and offshore lines need positive isolation, high pressure ratings and valves that can be actuated and certified. We supply isolation and instrument valves, high-pressure valves for wellhead service, and the actuators to automate them.",
    image: `${BLOB}/ben-wicks-Ej2FQy1W7z4-unsplash.jpg`,
    imageAlt: "Offshore drilling rigs at sunset",
    tint: "#FFF4E0",
    Icon: OilBarrelOutlinedIcon,
    facts: [
      { value: "60,000 psi", label: "High-pressure valves" },
      { value: "DBB", label: "Double block & bleed" },
      { value: "Actuated", label: "Pneumatic and electric" },
    ],
    products: [
      { name: "Double block & bleed valves", why: "Two isolation points and a bleed in one body.", href: "/dbb-manifolds", img: "https://pblol2.blob.core.windows.net/panam-images/products/DBB/DBB_fxp.jpg" },
      { name: "High-pressure valves", why: "Needle, ball, check and air-operated valves to 60,000 psi and beyond.", href: "/high-pressure/valves", img: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-dbb.jpg" },
      { name: "Wellhead & special valves", why: "Hiflux wellhead gauge, bleed and control valves.", href: "/hydrogen-cryogenic/valves/products?type=Special%20Valve", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/Speical-valve.png" },
      { name: "Industrial ball valves", why: "Floating and trunnion ball valves for process isolation.", href: "/valves/industrial-valves/ball-valves", img: "https://pblol2.blob.core.windows.net/mars-valves/ball-valves/series90D.jpg" },
      { name: "Gate valves", why: "Full-bore isolation for pipelines and process lines.", href: "/valves/industrial-valves/gate-valves", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/bolted-gate-valve.png" },
      { name: "Actuators", why: "Pneumatic, electric and hydraulic actuators to automate the valves.", href: "/actuators", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/hd.webp" },
    ],
    checks: [
      { title: "Isolation", text: "For instruments and maintenance, double block & bleed gives two seals and a safe vent in one body." },
      { title: "Fire-safe", text: "On flammable service, ask for fire-safe certified valves." },
      { title: "Actuation", text: "Size the actuator from the valve’s torque and state the fail position you need." },
      { title: "Documents", text: "List material certificates and pressure test records at enquiry, not after the order." },
    ],
    guides: [
      { label: "Valve actuator sizing explained", href: "/news/valve-actuator-sizing-torque-guide" },
      { label: "Ball valve vs gate valve", href: "/news/ball-valve-vs-gate-valve" },
    ],
  },
  {
    slug: "chemical",
    name: "Chemical, petrochemical & refining",
    short: "Lined, sealed and control valves for corrosive and hazardous media.",
    title: "Valves for Chemical, Petrochemical and Refining | Valvenok",
    description: "PTFE and PFA lined butterfly valves, bellows sealed globe valves, control and ball valves and mechanical seals for chemical and refinery service.",
    intro: "Corrosive and hazardous media need the right wetted materials and leak-tight stem seals. We supply lined and bellows-sealed valves, control valves, and the mechanical seals that keep pumps tight.",
    image: `${APP_IMG}/chemical-refining.jpg`,
    imageAlt: "Refinery with storage tanks and pipework at sunset",
    tint: "#F3EEFF",
    Icon: ScienceOutlinedIcon,
    facts: [
      { value: "PTFE / PFA", label: "Lined butterfly valves" },
      { value: "Bellows", label: "Sealed globe valves" },
      { value: "Seals", label: "Mechanical pump seals" },
    ],
    products: [
      { name: "PTFE / PFA lined butterfly valves", why: "A full lining keeps corrosive media off the body.", href: "/valves/industrial-valves/butterfly-valves/ptfe-lined-butterfly-valve", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/ptfe_lined_butterfly.png" },
      { name: "Bellows sealed globe valves", why: "A metal bellows seals the stem, for zero-leak service.", href: "/valves/sealed-valves", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/din-standard-bellows-sealed-globe-valve-plus.jpg" },
      { name: "Control valves", why: "Flow and pressure control for process lines.", href: "/valves/industrial-valves/control-valves", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/Atlas-15.png" },
      { name: "Industrial ball valves", why: "Quarter-turn isolation in stainless and carbon steel.", href: "/valves/industrial-valves/ball-valves", img: "https://pblol2.blob.core.windows.net/mars-valves/ball-valves/series90D.jpg" },
      { name: "Mechanical seals", why: "Sealflex seals for pumps and agitators.", href: "/pumps-seals/seals", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/mechanical-seals/AS103.jpg" },
    ],
    checks: [
      { title: "Media", text: "Give the chemical, concentration and temperature so wetted materials can be checked." },
      { title: "Stem sealing", text: "For toxic or valuable media, a bellows seal stops stem leakage." },
      { title: "Fire-safe", text: "On flammable service, specify fire-safe certification." },
      { title: "Seal elastomer", text: "Match pump seal elastomers to the fluid and temperature." },
    ],
    guides: [{ label: "Guide to mechanical seals", href: "/news/mechanical-seals-guide" }],
  },
  {
    slug: "food-dairy-pharma",
    name: "Food, dairy & pharma",
    short: "Hygienic tri-clamp clamps, ferrules and end caps for clean process lines.",
    title: "Tri-Clamp Fittings for Food, Dairy and Pharma | Valvenok",
    description: "Adaptix tri-clamp clamps, ferrules, blind covers and sight glass end caps for dairy, food, pharma and biotech lines. ISO 2852 / DIN 32676 / BS 4825, 3.1 certificate.",
    intro: "Dairy, food, pharma and biotech lines are cleaned in place and often sterilised with steam, so every joint has to open quickly and leave a smooth bore with nowhere for product to collect. We supply Adaptix tri-clamp fittings for these lines: clamps, weld-on ferrules, blind covers and sight glass end caps, DN 6 to DN 300.",
    image: `${APP_IMG}/food-dairy-pharma.jpg`,
    imageAlt: "Polished stainless steel process tanks and hygienic pipework",
    tint: "#EEF9EA",
    Icon: LocalDrinkOutlinedIcon,
    facts: [
      { value: "Ra < 0.4 µm", label: "Inside finish, ferrules and caps" },
      { value: "150 °C", label: "Sterilising temperature" },
      { value: "DN 6–300", label: "Tri-clamp sizes" },
    ],
    products: [
      { name: "Sanitary fittings", why: "How a tri-clamp joint works and the whole Adaptix range on one page.", href: "/fittings-tubing/sanitary-fittings", img: "https://pblol2.blob.core.windows.net/valvenok-images/brands/Adaptix/tri-clamps-range.jpg" },
      { name: "Tri-clamp clamps", why: "Single pin (up to 50 bar) and double-bolted clamps, 38 sizes.", href: "/fittings-tubing/sanitary-fittings/tri-clamp-clamps", img: "https://pblol2.blob.core.windows.net/valvenok-images/brands/Adaptix/single-pin-clamp.jpg" },
      { name: "Ferrules", why: "Weld-on ferrules for 60 tube sizes, 6.35 to 323.9 mm OD.", href: "/fittings-tubing/sanitary-fittings/ferrules-end-caps/products?type=ferrule", img: "https://pblol2.blob.core.windows.net/valvenok-images/brands/Adaptix/ferrules.jpg" },
      { name: "Blind covers", why: "Close off unused ports and cleaning points, 10–25 bar.", href: "/fittings-tubing/sanitary-fittings/ferrules-end-caps/products?type=blind", img: "https://pblol2.blob.core.windows.net/valvenok-images/brands/Adaptix/blind-cover.jpg" },
      { name: "Sight glass end caps", why: "See product, level or cleaning inside a line or vessel, 1–16 bar.", href: "/fittings-tubing/sanitary-fittings/ferrules-end-caps/products?type=sight", img: "https://pblol2.blob.core.windows.net/valvenok-images/brands/Adaptix/sight-glass-end-cap.jpg" },
    ],
    checks: [
      { title: "Size & standard", text: "Give the tube OD and wall, or the ISO 2852, DIN 32676 or BS 4825 size you need to match." },
      { title: "Material & finish", text: "Choose 316L, 316, 304, 304L or duplex, and mechanically polished, mirror polished or electropolished." },
      { title: "Pressure", text: "Single pin clamps take 9–50 bar depending on size; use double-bolted where the joint must not be opened by hand." },
      { title: "Certificates", text: "Every delivery comes with an EN 10204 3.1 material certificate." },
    ],
  },
  {
    slug: "power",
    name: "Power generation",
    short: "High-temperature butterfly, globe, gate and check valves with actuation.",
    title: "Valves for Power Generation | Valvenok",
    description: "Triple offset butterfly valves, globe, gate, check and control valves and electric actuators for power stations and high-temperature service.",
    intro: "Steam, cooling water and fuel lines in power plants need valves that hold at high temperature and can be automated. We supply triple offset butterfly valves, globe, gate and check valves, control valves and electric actuators.",
    image: `${BLOB}/sergei-wing-fFRtvdWqyLk-unsplash.jpg`,
    imageAlt: "Plant room with insulated pipework and valves",
    tint: "#FFF7DD",
    Icon: BoltOutlinedIcon,
    facts: [
      { value: "+760 °C", label: "Metal-seated triple offset" },
      { value: "ANSI 150–600", label: "Triple offset classes" },
      { value: "Electric", label: "Actuation available" },
    ],
    products: [
      { name: "Triple offset butterfly valves", why: "Metal-seated, bubble-tight shut-off at high temperature.", href: "/valves/industrial-valves/butterfly-valves/triple-offset-butterfly-valve", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/butter-val.jpg" },
      { name: "Globe valves", why: "Throttling and isolation for steam and water.", href: "/valves/industrial-valves/globe-valve", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/featured/globe-valve.png" },
      { name: "Gate valves", why: "Full-bore isolation.", href: "/valves/industrial-valves/gate-valves", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/bolted-gate-valve.png" },
      { name: "Check valves", why: "Stop backflow on pump and boiler feed lines.", href: "/valves/industrial-valves/check-valves", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/featured/API-594-cast-steel-swing-check.png" },
      { name: "Control valves", why: "Flow and pressure control.", href: "/valves/industrial-valves/control-valves", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/Atlas-15.png" },
      { name: "Electric actuators", why: "Rotary, linear and multi-turn actuators.", href: "/actuators/electric", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itq.webp" },
    ],
    checks: [
      { title: "Temperature", text: "Check both the body and the seat rating at your maximum temperature." },
      { title: "Shut-off class", text: "State the leakage class you need, especially on steam isolation." },
      { title: "Actuation", text: "Give supply voltage, enclosure rating and fail position for automated valves." },
      { title: "Documents", text: "Ask for material and pressure test certificates up front." },
    ],
    guides: [{ label: "How to choose a valve actuator", href: "/news/how-to-choose-a-valve-actuator" }],
  },
  {
    slug: "water",
    name: "Water & wastewater",
    short: "Butterfly and check valves, pumps and meters for water networks.",
    title: "Valves and Pumps for Water and Wastewater | Valvenok",
    description: "AWWA and centric butterfly valves, check valves, WALRUS pumps, water meters and actuators for water supply, treatment and wastewater.",
    intro: "Water networks and treatment works need large-bore isolation, backflow protection, reliable pumping and metering. We supply butterfly and check valves, WALRUS pumps, water meters and actuators.",
    image: `${BLOB}/pumps-banner.jpg`,
    imageAlt: "Blue industrial pumps in a pump house",
    tint: "#E6F6FA",
    Icon: WaterDropOutlinedIcon,
    facts: [
      { value: "AWWA C504", label: "Double flanged butterfly" },
      { value: "WALRUS", label: "Pump range" },
      { value: "Meters", label: "Water metering" },
    ],
    products: [
      { name: "AWWA double flanged butterfly valves", why: "Large-bore isolation to AWWA C504 and C516.", href: "/valves/industrial-valves/butterfly-valves/awwa-c504-double-flanged-butterfly-valve", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/awwaa.jpg" },
      { name: "Centric butterfly valves", why: "Economical isolation for general water service.", href: "/valves/industrial-valves/butterfly-valves/centric-butterfly-valve", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/CENTRIC__25C11iulkk.jpg" },
      { name: "Check valves", why: "Backflow protection on pump discharge.", href: "/valves/industrial-valves/check-valves", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/featured/API-594-cast-steel-swing-check.png" },
      { name: "WALRUS pumps", why: "Booster, multistage, submersible and immersible pumps.", href: "/pumps-seals/pumps", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/WQ_B.webp" },
      { name: "Water meters", why: "Metering for supply and distribution.", href: "/instrumentation/water-meter", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/water-meter/mj-cold.webp" },
    ],
    checks: [
      { title: "Pressure & size", text: "Give the pipe size, pressure class and flange standard." },
      { title: "Potable water", text: "For drinking water, ask for materials suitable for potable service." },
      { title: "Pump material", text: "Cast iron for clean fresh water; stainless or bronze where water is salty or chlorinated." },
      { title: "Automation", text: "State whether valves are manual, gearbox or actuated." },
    ],
    guides: [{ label: "Pump materials compared", href: "/news/pump-materials-comparison" }],
  },
  {
    slug: "marine",
    name: "Marine & shipbuilding",
    short: "Ship-building butterfly valves, marine valves and seawater pumps.",
    title: "Marine and Shipbuilding Valves | Valvenok",
    description: "Ship-building butterfly valves, marine valves, check valves and seawater-capable pumps for shipbuilding and marine service. UK supply.",
    intro: "Ships and offshore vessels need compact valves that resist seawater and meet shipbuilding standards. We supply ship-building butterfly valves, marine valves, check valves and pumps for seawater duty.",
    image: `${APP_IMG}/marine-shipbuilding.jpg`,
    imageAlt: "Container ship being loaded by gantry cranes",
    tint: "#E8F1FB",
    Icon: DirectionsBoatOutlinedIcon,
    facts: [
      { value: "DN50–DN600", label: "Ship-building butterfly" },
      { value: "Seawater", label: "Service options" },
      { value: "Marine", label: "Valve range" },
    ],
    products: [
      { name: "Ship-building butterfly valves", why: "Flanged marine butterfly valves, DN50–DN600.", href: "/valves/industrial-valves/butterfly-valves/ship-building-butterfly-valve", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/vf-265-ship-building.jpg" },
      { name: "Marine valves", why: "Valves for shipboard systems.", href: "/valves/marine-valves", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/apollo-valves-88a10a01.webp" },
      { name: "Check valves", why: "Backflow protection on cooling and bilge lines.", href: "/valves/industrial-valves/check-valves", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/featured/API-594-cast-steel-swing-check.png" },
      { name: "Pumps for seawater", why: "WALRUS pumps with seawater-ready variants.", href: "/pumps-seals/pumps", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/WQ_B.webp" },
    ],
    checks: [
      { title: "Seawater", text: "Choose bronze, 316 or better for wetted parts in permanent seawater service." },
      { title: "Standards", text: "Give the shipbuilding standard and class society you need to meet." },
      { title: "Space", text: "Wafer and lug butterfly valves save weight and length on board." },
      { title: "Certificates", text: "List class and material certificates at enquiry." },
    ],
    guides: [{ label: "Pump materials compared", href: "/news/pump-materials-comparison" }],
  },
  {
    slug: "lng-cryogenic",
    name: "LNG & cryogenic",
    short: "Cryogenic butterfly valves and gas cylinder valves for liquefied gases.",
    title: "Cryogenic and LNG Valves | Valvenok",
    description: "Cryogenic butt-welded, triple offset and anti-condensation butterfly valves and gas cylinder valves for LNG, LPG and other liquefied gases.",
    intro: "Liquefied gases run far below ambient: LNG at about −162 °C and liquid nitrogen at about −196 °C. Valves need materials that stay tough and stems that keep the packing warm enough to seal. We supply cryogenic butterfly valves and gas cylinder valves.",
    image: `${APP_IMG}/lng-cryogenic.jpg`,
    imageAlt: "LNG tanks on a barge with a crane",
    tint: "#EEF2FF",
    Icon: AcUnitOutlinedIcon,
    facts: [
      { value: "−100 °C", label: "Triple offset cryogenic" },
      { value: "BS 6364", label: "Cryogenic standard" },
      { value: "2–36 in", label: "Cryogenic butterfly" },
    ],
    products: [
      { name: "Cryogenic butterfly valves", why: "Butt-welded double eccentric and triple offset, 2–36 inch.", href: "/valves/industrial-valves/butterfly-valves/butt-welded-butterfly-valve", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/butterfly-weld.jpg" },
      { name: "Triple offset butterfly valves", why: "Cryogenic version to BS 6364, down to −100 °C.", href: "/valves/industrial-valves/butterfly-valves/triple-offset-butterfly-valve", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/butter-val.jpg" },
      { name: "Anti-condensation butterfly valves", why: "Stops condensation and icing on cold lines.", href: "/valves/industrial-valves/butterfly-valves/anti-condensation-butterfly-valve", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/dpi-anti-condensation.jpg" },
      { name: "Gas & cylinder valves", why: "Youngdo valves for hydrogen, LPG and industrial gases.", href: "/high-pressure/valves/gas-valves", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/EP-70PQ.png" },
    ],
    checks: [
      { title: "Temperature", text: "Give the minimum design temperature; it decides materials and testing." },
      { title: "Extended bonnet", text: "An extended bonnet keeps the stem packing warm enough to seal." },
      { title: "Testing", text: "Ask for cryogenic testing where the duty requires it." },
      { title: "Icing", text: "On cold lines, anti-condensation designs stop ice building on the valve." },
    ],
    guides: [{ label: "About cryogenic valves", href: "/cryogenic-valves" }],
  },
  {
    slug: "instrumentation",
    name: "Instrumentation & test",
    short: "Tube fittings, needle valves, manifolds and regulators for instrument lines.",
    title: "Instrumentation Fittings, Valves and Manifolds | Valvenok",
    description: "Tube and pipe fittings, instrumentation needle valves, 2, 3 and 5-valve manifolds and gas pressure regulators for instrument and test lines.",
    intro: "Instrument and sampling lines need small, leak-tight connections and valves that isolate a gauge or transmitter safely. We supply tube and pipe fittings, needle valves, manifolds and regulators.",
    image: `${BLOB}/patrick-0RQRyVBAhlI-unsplash.jpg`,
    imageAlt: "Close-up of stainless steel instrumentation fittings",
    tint: "#EEF9EA",
    Icon: SpeedOutlinedIcon,
    facts: [
      { value: "2 · 3 · 5", label: "Valve manifolds" },
      { value: "Two-ferrule", label: "Tube fittings" },
      { value: "SS 316", label: "Standard material" },
    ],
    products: [
      { name: "Tube fittings", why: "Two-ferrule compression fittings for instrument tube.", href: "/fittings-tubing/instrumentation-fittings/tube-fittings", img: "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male_adaptor.jpg" },
      { name: "Pipe fittings", why: "NPT and BSP pipe fittings in stainless.", href: "/fittings-tubing/instrumentation-fittings/pipe-fittings", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/pipe-fittings/adaptors.jpg" },
      { name: "Instrumentation needle valves", why: "Isolation and fine control for gauges and sampling.", href: "/valves/instrumentation-valves/needle-valves", img: "https://pblol2.blob.core.windows.net/panam-images/products/needle-valves/hp.jpg" },
      { name: "Valve manifolds", why: "2, 3 and 5-valve manifolds for pressure transmitters.", href: "/dbb-manifolds/manifolds", img: "https://pblol2.blob.core.windows.net/panam-images/products/valve-manifolds/5VM/5VM_Cover.jpg" },
      { name: "Gas pressure regulators", why: "Pietro Fiorentini regulators for gas networks.", href: "/instrumentation/gas-pressure-regulator", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/gas-regulator/staflux-187.jpg" },
    ],
    checks: [
      { title: "Tube size", text: "Match fittings to the tube OD and wall thickness, metric or imperial." },
      { title: "Threads", text: "NPT and BSP don’t seal together; state which you need." },
      { title: "Manifold type", text: "2-valve for gauges, 3- and 5-valve for differential pressure transmitters." },
      { title: "Material", text: "316 stainless is standard; give the media for anything aggressive." },
    ],
    guides: [{ label: "Leak-tight threads for hydrogen fittings", href: "/news/instrumentation-fittings-hydrogen-leak-tight-threads" }],
  },
  {
    slug: "automation",
    name: "Automation & pneumatics",
    short: "Actuators, cylinders, valves and fittings for automated plant and machines.",
    title: "Valve Automation and Pneumatics | Valvenok",
    description: "Pneumatic and electric valve actuators, limit switches, pneumatic cylinders, valves and fittings for plant automation and machine building.",
    intro: "Automating a valve or a machine needs the right actuator, feedback and air supply parts. We supply pneumatic and electric actuators, limit switch boxes, pneumatic cylinders, valves and fittings.",
    image: `${BLOB}/ben-kupke-ew-p24CVLR0-unsplash.jpg`,
    imageAlt: "Pneumatic hoses and fittings on a machine",
    tint: "#FFF4E0",
    Icon: PrecisionManufacturingOutlinedIcon,
    facts: [
      { value: "Pneumatic", label: "Rack & pinion, scotch yoke" },
      { value: "Electric", label: "Rotary, linear, multi-turn" },
      { value: "Feedback", label: "Limit switch boxes" },
    ],
    products: [
      { name: "Pneumatic actuators", why: "Rack & pinion and scotch yoke, double acting or spring return.", href: "/pneumatic/actuators", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/pdf.webp" },
      { name: "Electric actuators", why: "Rotary, linear and multi-turn electric actuators.", href: "/actuators/electric", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itq.webp" },
      { name: "Limit switch boxes", why: "Position feedback for automated valves.", href: "/actuators/limit-switches", img: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/limit-switches/ks-limit-switch.jpg" },
      { name: "Pneumatic cylinders", why: "Cylinders for machine and process automation.", href: "/pneumatic/cylinders", img: "https://pblol2.blob.core.windows.net/spac-images/products/cylinder/SDNC/SDNC_no_bg.png" },
      { name: "Pneumatic valves", why: "Air control valves, including foot-pedal valves.", href: "/pneumatic/valves", img: "https://pblol2.blob.core.windows.net/spac-images/products/pneumatic-valves/pneumatic-valves.png" },
      { name: "Pneumatic fittings", why: "Push-in fittings and tubing for air lines.", href: "/fittings-tubing/pneumatic-fittings", img: "https://pblol2.blob.core.windows.net/spac-images/products/fitting/a-series.png" },
    ],
    checks: [
      { title: "Torque", text: "Size the actuator from the valve’s breakaway torque plus a safety factor." },
      { title: "Fail position", text: "Spring-return actuators need a defined fail-open or fail-closed position." },
      { title: "Air supply", text: "Size at the lowest air pressure the actuator will really see." },
      { title: "Feedback", text: "Add a limit switch box where the control system needs to know the position." },
    ],
    guides: [
      { label: "How to choose a valve actuator", href: "/news/how-to-choose-a-valve-actuator" },
      { label: "Valve actuator sizing explained", href: "/news/valve-actuator-sizing-torque-guide" },
    ],
  },
];

export const appBySlug = (slug: string) => APPS.find((a) => a.slug === slug);
