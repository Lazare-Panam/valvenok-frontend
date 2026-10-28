import type { RangeCopyMap } from "./types";

// "About this range" copy for high pressure, hydrogen / gas, regulator and
// filtration listing pages. Facts are taken from the page data files only.
export const HIGH_PRESSURE_COPY: RangeCopyMap = {
  "/high-pressure/fittings/products": {
    heading: "About Panam and Hiflux Cone-and-Thread Fittings",
    paragraphs: [
      "This catalogue brings Panam and Hiflux high pressure fittings together in one table for tubing systems that run far beyond the limits of ordinary compression fittings. Most items use a cone-and-thread connection: the tube end is coned and threaded, a gland and collar are made up onto it, and the seal forms metal-to-metal where the cone seats in the fitting body. The thread holds the tube in place rather than sealing the fluid, so the joint can be broken and remade during maintenance.",
      "Panam fittings are SS 316 and cover 10,000 to 60,000 psi, with adapters, reducers, male and female connectors, elbows, tees, crosses, hex nipples, unions, reducing and bulkhead unions, caps and plugs in NPT, MP and HP cone connections. Hiflux fittings are cold-formed STS 316 and extend to 150,000 psi, alongside glands, sleeves, collars, collets and plugs, including anti-vibration accessory variants for high-vibration service. Typical uses include test rigs, chemical injection, waterjet equipment and laboratory high pressure systems.",
      "Use the brand, fitting type, pressure rating, size and material filters to narrow the list, then request a quote. Valvenok's UK team in Bicester can confirm part numbers and lead times before you order.",
    ],
    points: [
      "Pressure: pick a rating at or above the maximum working pressure of the line, including surges.",
      "Connection: cone-and-thread, MP, HP and NPT ends are not interchangeable, so keep them consistent.",
      "Size: the range runs from 1/8\" to 1\" and should match the tube outside diameter.",
    ],
  },

  "/high-pressure/pipe-fittings/adapters": {
    heading: "About High Pressure Size Adapters",
    paragraphs: [
      "A size adapter joins two threaded ports of different sizes without changing the thread form. The Panam high pressure adapters listed here are machined from SS 316 and keep the same standard at both ends: NPT to NPT, or ISO parallel (BSPP) to ISO parallel (BSPP). They are useful when a gauge, transducer, valve or pump port does not match the size of the pipework it has to connect to, and they avoid stacking several bushings in a high pressure line.",
      "Sizes run from 1/8\" to 1\" and ratings are 10,000 or 15,000 psi. The rating is shown on every row and is also built into the part number, where a suffix of 15K means 15,000 psi and 10K means 10,000 psi (for example PA-2N-4N-SS-15K is a 1/8\" NPT to 1/4\" NPT adapter rated to 15,000 psi). When a line mixes ratings, the lowest-rated component sets the limit for the whole assembly.",
      "Thread form matters for sealing. NPT is tapered and seals on the thread flanks with a suitable sealant, while ISO parallel threads need a bonded seal or similar face seal to hold pressure.",
    ],
    points: [
      "Confirm both port sizes and whether each end is NPT or ISO parallel (BSPP).",
      "Check the rating against the maximum system pressure.",
      "Filter by thread, size and pressure rating, then request a quote from Valvenok's UK team.",
    ],
  },

  "/high-pressure/pipe-fittings/elbows": {
    heading: "About High Pressure Pipe Elbows",
    paragraphs: [
      "Pipe elbows turn a threaded high pressure line through 90 degrees, so pipework can follow the shape of a skid, panel or machine frame without bending tube under load. This Panam range is SS 316 throughout and covers five styles: male elbows (PME), female elbows (PFE), street elbows (PSE) with one male and one female end, swivel male elbows and swivel union elbows (PUE).",
      "Fixed elbows are offered in NPT and ISO parallel (BSPP) threads from 1/8\" to 1\". Most 1/8\" to 1/2\" sizes are rated to 15,000 psi and most 3/4\" and 1\" sizes to 10,000 psi, so check the rating on each row. The swivel versions use an ISO parallel swivel end, run from 1/8\" up to 1 1/2\" and are rated to 10,000 psi. A swivel end lets the elbow be aligned after it is tightened, which helps where a fixed elbow would end up pointing the wrong way.",
      "Typical uses include hydraulic power units, test benches, pump outlets and instrument connections where space is tight.",
    ],
    points: [
      "Choose male, female or street ends to suit the mating components.",
      "Match NPT or ISO parallel (BSPP) threads at both ports.",
      "Use a swivel style when final orientation matters.",
      "Filter by type, pressure, thread and size, then request a quote from Valvenok.",
    ],
  },

  "/high-pressure/pipe-fittings/end-connections": {
    heading: "About High Pressure Plugs and Caps",
    paragraphs: [
      "Plugs and caps close off the end of a high pressure line or an unused port. They are used to blank spare outlets on manifolds and pump bodies, to seal test points between readings, and to isolate branches during pressure testing or commissioning. This page lists three Panam styles, all in SS 316.",
      "Hex plugs (PHP) screw into a female port and are offered in NPT and ISO parallel threads from 1/8\" up to 2\". Pipe caps (PPC) fit over a male thread in NPT or ISO parallel, from 1/8\" to 1\". Tube plugs (PTP) close a 37° JIC flare connection and run from 1/4\" to 1\". Ratings are 10,000 or 15,000 psi depending on size and type, and the part number suffix (15K or 10K) shows which applies.",
      "Because a plug or cap carries the full line pressure on its face, it should be rated at least as high as the system it closes. Parallel ISO threads also need a suitable sealing washer, whereas NPT relies on the taper and a thread sealant.",
    ],
    points: [
      "Female port: hex plug. Male thread: pipe cap. 37° JIC flare: tube plug.",
      "Match the thread standard and size exactly.",
      "Check the pressure rating against the system maximum.",
      "Filter the table and request a quote from Valvenok's UK team.",
    ],
  },

  "/high-pressure/pipe-fittings/hex-coupling": {
    heading: "About High Pressure Hex Couplings",
    paragraphs: [
      "A hex coupling is a short female-to-female fitting used to join two male-threaded parts, such as a pair of hex nipples, a valve and a pipe, or a gauge and a manifold stub. The hex body gives a spanner flat so the joint can be held while the mating parts are tightened. A reducing hex coupling does the same job while changing size from one end to the other.",
      "This Panam range is SS 316 and includes hex couplings (PHC) and reducing hex couplings (PRHC) in NPT and ISO parallel threads, from 1/8\" to 1\", rated to 10,000 or 15,000 psi. Each row shows the size and thread at both ports, so you can confirm whether you need an equal coupling or a reducing one. For example, PRHC-8G-16G-SS-10K joins a 1/2\" ISO parallel thread to a 1\" ISO parallel thread at 10,000 psi.",
      "Couplings are common in hydraulic test equipment, pump discharge lines and instrument hook-ups where a straight connection is needed between components with male ends.",
    ],
    points: [
      "Equal or reducing: compare the P1 and P2 sizes.",
      "Thread: NPT tapered or ISO parallel (BSPP).",
      "Pressure: 10,000 or 15,000 psi, shown per part number.",
      "Narrow the table with the filters and request a quote from Valvenok.",
    ],
  },

  "/high-pressure/pipe-fittings/hex-nipples": {
    heading: "About High Pressure Hex Nipples",
    paragraphs: [
      "A hex nipple is a male-to-male fitting with a hex in the middle, used to connect two female ports, for example a valve to a manifold or a gauge to a tee. It is one of the most frequently used pieces in a threaded high pressure system, and the variants listed here cover several jobs in one range.",
      "Panam hex nipples are SS 316 and rated to 10,000 or 15,000 psi, with sizes from 1/8\" to 2\". Standard hex nipples (PHN) come in equal and unequal sizes, including thread-changing combinations between NPT, ISO parallel (BSPP) and 37° JIC, which makes them useful as adapters when equipment from different regions meets in one system. Reducing hex nipples (PRHN) handle NPT-to-NPT size reductions. Swivel hex nipples have an ISO parallel swivel end and are rated to 10,000 psi, so they can be aligned after fitting.",
      "Before ordering, check the thread and size at each end against both mating ports, and confirm the rating meets the highest pressure the line will see.",
    ],
    points: [
      "Same thread, same size: standard hex nipple.",
      "Smaller NPT on one end: reducing hex nipple (PRHN).",
      "Different thread forms: choose a thread-changing PHN.",
      "Filter by type, pressure, thread and size, then request a quote from Valvenok's UK team.",
    ],
  },

  "/high-pressure/pipe-fittings/tees-cross": {
    heading: "About High Pressure Tees and Crosses",
    paragraphs: [
      "Tees and crosses split or combine flow in a threaded high pressure line. A tee has three ports and is used to take a branch off a main line, for example to a gauge, relief valve or sample point. A cross has four ports and is useful where several instruments or outlets need to share one connection point without building up a stack of tees.",
      "This Panam range is SS 316 and includes female tees (PFT), male tees (PMT), swivel union tees and female crosses (PFC). Female and male tees and crosses are offered in NPT and ISO parallel (BSPP) threads, while swivel union tees use ISO parallel swivel ends that can be aligned after assembly. Sizes run from 1/8\" to 1 1/4\" and ratings are 10,000 or 15,000 psi, with the rating shown on every row and in the part number suffix.",
      "Typical applications include hydraulic test rigs, pressure gauge take-offs, pump manifolds and instrument panels where branches must be made in a compact space.",
    ],
    points: [
      "Count the ports you need: three for a tee, four for a cross.",
      "Choose female or male ends to suit the mating parts.",
      "Match NPT or ISO parallel threads and check the rating.",
      "Filter the table and request a quote from Valvenok.",
    ],
  },

  "/hydrogen-cryogenic/fittings/products": {
    heading: "About Hiflux High Pressure Fittings and Accessories",
    paragraphs: [
      "This page lists Hiflux high pressure fittings and the parts that go with them: reducing fittings, straight fittings, fitting accessories, manifold blocks, tube caps and an oil-based thread lubricant. Hiflux describes the range for industrial, hydrogen and wellhead applications. Certification varies by product, so confirm what a specific item carries before specifying it for a regulated service.",
      "Products are grouped by pressure class from about 15,000 psi through 20,000, 30,000 and 60,000 psi up to 100,000 and 150,000 psi. Most use UNF connections, the threaded form used with coned-and-threaded high pressure tubing, while some 15,000 psi fittings and manifold blocks are offered with PT female or NPT female ports for connection to standard pipe threads. Accessories at 20,000 and 60,000 psi include anti-vibration versions for lines exposed to pump pulsation or machine vibration.",
      "Manifold blocks distribute one supply to several outlets, and tube caps seal off unused lines. The Blue Lube thread lubricant is intended to prevent galling and seizing when stainless steel threads are tightened.",
    ],
    points: [
      "Select the pressure class at or above the system rating.",
      "Choose UNF for coned-and-threaded tubing, or PT or NPT female for pipe threads.",
      "Consider anti-vibration accessories where the line vibrates.",
      "Filter by type, pressure and connection, then request a quote from Valvenok's UK team.",
    ],
  },

  "/hydrogen-cryogenic/gas-valves": {
    heading: "About the Youngdo Gas Valve Catalogue",
    paragraphs: [
      "A cylinder valve is the shut-off and connection point on top of a gas cylinder. It screws into the cylinder neck through its inlet thread, provides an outlet connection for the regulator or filling equipment, and in many designs carries a pressure relief device. Because inlet and outlet threads differ by gas and by country, the right valve depends on the cylinder, the gas and the market it will be used in.",
      "This catalogue combines Youngdo hydrogen, LPG and industrial gas valves in one table. Hydrogen cylinder valves run to 70 MPa, with certifications such as KGS, EC79, R134, CSEL, KHK and IECEx depending on model. LPG products include cylinder valves, OPD overfilling prevention devices and piping valves, with KGS, KS, CGA V-1 or UL listed by model. Industrial gas valves cover tapered and unified inlet threads, non-return valves, acetylene, chlorine and ammonia, tube trailers and piping connections, referencing standards such as CGA V-1, BS 341, DIN 477 and ISO 10297.",
      "Use the gas type, category, series and certification filters to shortlist models, then open each row for threads, working pressure and standards.",
    ],
    points: [
      "Confirm the cylinder inlet thread and the outlet connection standard.",
      "Check working pressure against the cylinder service pressure.",
      "Check which certification your market requires; it varies by model.",
      "Request a quote from Valvenok's UK team.",
    ],
  },

  "/hydrogen-cryogenic/hydrogen/products": {
    heading: "About Youngdo Hydrogen Cylinder Valves",
    paragraphs: [
      "Hydrogen cylinder valves control the flow of compressed hydrogen in and out of a storage cylinder. At these pressures the valve body usually integrates protective functions as well as shut-off: the Youngdo models here list thermally activated relief elements, with fuse metal and glass bulb activation temperatures of 110°C ±5°C on the 70 MPa and DRV models, and a 105°C ±5°C glass bulb on the YHT models.",
      "The table covers 13 models across the HC, HE, HK, HS, HSL, EP, DRV, YHT and YEX series. The HC, HE, HK, HS, HSL and EP models list 70.0 MPa / 35.0 MPa working pressure and reference ECE R134. DRV-350 is a 35 MPa valve with an M18x1.5P inlet and quick-on outlet, the YHT models are rated 45 MPa with KGS certification, and YEX-1100 is a 3.0 MPa IECEx-certified unit to IEC 60079. Inlet threads include 1 1/2\"-12UNF, M35x2.0P and M18x1.5P, and outlets include 9/16\"-18UNF and M12x1.5P.",
      "Certification varies by model and includes KGS, EC79, R134, CSEL and KHK, so check the row for the approval your application requires.",
    ],
    points: [
      "Working pressure: 70 MPa, 45 MPa, 35 MPa or 3 MPa.",
      "Threads: confirm inlet against the cylinder and outlet against the connected equipment.",
      "Approval: match KGS, EC79, R134 or other listings to your market.",
      "Filter by series and request a quote from Valvenok.",
    ],
  },

  "/hydrogen-cryogenic/industrial-gas/products": {
    heading: "About Youngdo Industrial Gas Cylinder Valves",
    paragraphs: [
      "Industrial gas cylinder valves are fitted to cylinders of oxygen, nitrogen, argon, carbon dioxide, acetylene, chlorine, ammonia and similar gases. Outlet connections are deliberately different from gas to gas so that equipment for one gas cannot be connected to a cylinder of another, which is why the outlet thread or CGA number is as important as the pressure rating.",
      "The 75 Youngdo models in this table fall into seven categories. Tapered inlet thread valves use W28-14th, 3/4-14 NGT or 1\"-11 1/2 NGT inlets with working pressures of 11.8, 14.7 or 19.6 MPa. Unified inlet thread valves include models with CGA 320, 326, 350, 540 and 580 outlets, BS 341 and DIN 477 outlets. Non-return valves reference ISO 15996 and ISO 10297. Acetylene valves cover CGA 200, 510 and 520 outlets, chlorine and ammonia valves include CGA 820, and tube trailer valves use W39-12th inlets at up to 25 MPa. Piping connection valves complete the range.",
      "Certification (KGS, KS) and design standards vary by model, and some rows list standards only, so check each entry against your requirements.",
    ],
    points: [
      "Identify the gas and the outlet connection standard first.",
      "Confirm the cylinder inlet thread and working pressure.",
      "Check the listed standard and certification for your market.",
      "Filter by category and request a quote from Valvenok's UK team.",
    ],
  },

  "/hydrogen-cryogenic/lpg/products": {
    heading: "About Youngdo LPG Valves and OPD Devices",
    paragraphs: [
      "LPG valves control liquefied petroleum gas at the cylinder and in the supply pipework. Because LPG is stored as a liquid under its own vapour pressure, cylinder valves typically include a spring-loaded relief function, and some designs add a fusible element that releases pressure if the cylinder is exposed to heat. This range lists spring working pressures such as 1.96 to 2.35 MPa or 375 psi depending on model, and fuse metal temperatures of 97.8°C to 105.7°C where fitted.",
      "The table covers 20 Youngdo models. Cylinder valves in the YLC and LP series use W28-14th or W20-14th inlets with W22.5-14th-LH outlets at about 1.82 MPa, referencing KS B 6212 and KGS AA312. Models such as YLC-2821 and MT-2000 use 3/4-14 NGT inlets with a CGA 510 outlet at 250 psi to CGA V-1, and YBC valves use a quick-on outlet. OPD overfilling prevention devices, including OPD-3000 with a CGA 791 outlet, shut off filling before the cylinder is overfilled and reference UL 2227. YLG piping valves are rated 2.35 MPa with PT threads.",
      "Certification varies by model across KGS, KS, CGA V-1 and UL.",
    ],
    points: [
      "Cylinder, OPD or piping valve: start with the category filter.",
      "Match inlet and outlet threads to the cylinder and regulator.",
      "Check the certification required in your market, then request a quote from Valvenok.",
    ],
  },

  "/hydrogen-cryogenic/valves/products": {
    heading: "About Hiflux High Pressure Valve Models",
    paragraphs: [
      "This table lists Hiflux valves for high and ultra-high pressure systems, grouped by function. Needle valves give fine flow control and isolation from 3,000 psi pipe-style versions up to 150,000 psi, including 3-way 2-stem designs for multi-port control. Check valves allow flow in one direction only, from 15,000 to 100,000 psi. Ball valves provide quick quarter-turn shut-off at 15,000 or 20,000 psi, with manual and pneumatically actuated options.",
      "Air operated valves are offered normally closed or normally open at 15,000, 20,000 and 60,000 psi for remote or automated switching. Safety products include proportional and field-adjustable relief valves for liquid and water service, factory-set relief valves from 3,000 to 60,000 psi, KC certified proportional gas relief valves, rupture discs and safety heads. Special valves cover control valves, a 20,000 psi double block and bleed valve, bleed valves, a wellhead gauge valve and a high temperature valve. A hydrogen refuelling needle valve is listed as KGS-certified; certification for other models varies.",
      "Most valves use UNF high pressure connections, with some 15,000 psi versions in PT female or NPT female threads.",
    ],
    points: [
      "Define the function: isolate, throttle, prevent backflow, relieve or automate.",
      "Select a pressure class above the maximum system pressure.",
      "Match the connection type to the tubing or pipework.",
      "Filter by type, pressure and connection, then request a quote from Valvenok.",
    ],
  },

  "/instrumentation/gas-pressure-regulator/products": {
    heading: "About Pietro Fiorentini Direct-Operated Regulators",
    paragraphs: [
      "A gas pressure regulator reduces a higher, variable inlet pressure to a steady outlet pressure for the equipment downstream. In a direct-operated regulator the outlet pressure acts on a diaphragm that is balanced against a spring or counter-pressure, moving the valve plug without a separate pilot. That makes the design compact and quick to respond. All four Pietro Fiorentini models here are direct operated, fail open, rated for -20°C to +60°C, with accuracy class up to AC 5 and lock-up class up to SG 10.",
      "Dival 160 AP is a 1\" regulator for inlet pressures of 1.4 to 85 bar and outlet pressures of 0.85 to 4.5 bar. Staflux 185 comes in 1\", 2\" and 3\" sizes with 2 to 85 bar inlet and 1 to 75 bar outlet. Staflux 187 handles inlet pressures up to 250 bar with ASME B16.5 Class 1500 flanges. ATF 15 is a compact spring-loaded unit with 1\" NPT and Rp 1/4\" connections and an anti-freeze design, used for instrument gas, actuator supply and pilot feeding.",
      "Dival 160 AP, Staflux 187 and ATF 15 are listed as hydrogen ready for natural gas and hydrogen blends.",
    ],
    points: [
      "Inlet and outlet pressure range.",
      "Connection size and flange class.",
      "Hydrogen blending requirements.",
      "Filter by type or hydrogen readiness and request a quote from Valvenok's UK team.",
    ],
  },

  "/filters-sight-glass/filtration": {
    heading: "About Hydraulic Filters and Suction Strainers",
    paragraphs: [
      "Hydraulic filters remove particles from oil so that pumps, valves and actuators wear less and run more reliably. Where a filter sits in the circuit decides the type you need. Pressure-line filters protect sensitive components downstream of the pump, return-line filters clean oil on its way back to the tank, and suction strainers protect the pump inlet from larger debris.",
      "The range on this page covers six groups. High pressure filters include the HP-06 (3/4\"), HP-08 (1\") and HP-10 series plus the modular HPM, in several housing lengths. Aluminium filters in the DHP and DHHP series run from 1/2\" to 2\". Return-line filters include RFTD models with BSP threads, RF, FPA and FPF models with PT threads, and SPR, PR and BPR models with NPT threads, with maximum pressures listed from 6.8 to 25 bar depending on model. Duplex filters (DFM-12 and DMPH-12, 1 1/2\") use two filter chambers so one element can be changed while the other stays in service. Suction strainers come in threaded KSS and flanged FSS versions.",
      "Clogging indicators, in visual and electrical DIN versions, show when an element needs changing.",
    ],
    points: [
      "Position in the circuit: pressure, return or suction.",
      "Thread connection and size.",
      "Maximum pressure and housing length.",
      "Filter by category and housing length, then request a quote from Valvenok.",
    ],
  },

  "/filters-sight-glass/sight-glass": {
    heading: "About BAG-FL Flanged Sight Glasses",
    paragraphs: [
      "A sight glass is a window in a pipeline that lets operators see what is happening inside without opening the line. It is used to confirm that flow is present, check the colour or clarity of a liquid, spot gas bubbles or foaming, and verify that a line has drained. Fitted after a pump, it gives a quick visual check that the pump is delivering. Fitted before a filter or heat exchanger, it shows when product quality changes.",
      "The BAG-FL sight glasses listed here are double-glass designs, with a window on each side so light passes through the flow for a clear view. The page lists a GG25 cast iron body, borosilicate glass and PTFE seals, with flanged ends to EN 558 and EN 1092-1/2. They are described as suitable for water, food, chemicals, air and other gases.",
      "Sizes run from DN15 to DN150 (1/2\" to 6\") in PN16 and PN40 ratings. Choose a rating that matches the flanges and the maximum operating pressure of the line, and check that the glass and seal materials suit the fluid and temperature. Part numbers differ between the PN16 and PN40 versions, so confirm the body material for your rating when you ask for a quote.",
    ],
    points: [
      "Match the DN size to the pipeline.",
      "Select PN16 or PN40 to suit the flanges and pressure.",
      "Use the size and pressure rating filters, then request a quote from Valvenok's UK team.",
    ],
  },
};
