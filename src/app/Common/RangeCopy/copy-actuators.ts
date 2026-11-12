import type { RangeCopyMap } from "./types";

export const ACTUATOR_COPY: RangeCopyMap = {
  "/actuators/electric/ke-series/variants": {
    heading: "Understanding KE Series Models and Torque Variants",
    paragraphs: [
      "KE actuators are electric quarter-turn actuators: the motor drives the output through 90 degrees to open or close a ball valve, butterfly valve or damper. This page lists every size from the KE001 to the KE120 so you can compare torque, operating time, current draw and mounting side by side.",
      "Most sizes come in a standard version and one or two reduced-torque versions, marked with a # prefix and the reduced torque in the code, for example #KE010-80N. Reducing the output torque shortens the operating time on many sizes, so the reduced variants suit small valves that need to move faster rather than harder. Standard maximum torque ranges from 8 Nm on the KE001 to 1,200 Nm on the KE120. From the KE010 upwards, torque is also given at 0°, 45° and 90°, which helps when a valve's torque peaks at break-out or seating.",
      "Supply options vary by size. Current draw is shown for 110V and 220V AC on every model, 380V and 440V from the KE016 upwards, and 24V DC on the KE002 to KE040. ISO 5211 flange and drive square are listed for each model, with alternative mountings on many sizes.",
      "Filter by model size or torque variant, then request a quote from Valvenok's UK team.",
    ],
    points: [
      "Choose torque at least equal to the valve's break-out torque plus a safety margin.",
      "Check operating time at 50/60 Hz against your process requirements.",
      "Match the flange and drive square to the valve top-work.",
    ],
  },

  "/actuators/mechanical/itg/products": {
    heading: "Selecting an ITG Gear Actuator",
    paragraphs: [
      "ITG units are gear actuators for quarter-turn valves such as ball, butterfly and plug valves. A handwheel turns a worm gear that drives the output through 90 degrees, multiplying the operator's effort so large valves can be opened by hand. The ITG range can also sit between a valve and an automated actuator, using ISO 5211 mounting on both sides.",
      "This page lists 29 models in three configurations. The Standard models, ITG-012 to ITG-3200, cover output torque from 60 Nm to 28,000 Nm with gear ratios between 30:1 and 68:1. The 1S models, from ITG-400-1S, add a reduction stage for ratios between 130:1 and 248:1, and the 2S models, from ITG-900-2S, add a second stage for ratios up to 992:1.",
      "Higher ratios mean less rim pull on the handwheel but more turns to stroke the valve. For example, the ITG-3200 needs 302 kg rim pull over 14.5 turns, while the ITG-3200-2S needs about 21 kg over 232 turns. Valve and actuator mounting flanges run from F05 to F35, with an optional alternative listed for most models.",
      "Filter by sub-series and model, check the full table for handwheel diameter and weight, then request a quote from Valvenok's UK team.",
    ],
    points: [
      "Pick a model whose output torque exceeds the valve's maximum operating torque.",
      "Use 1S or 2S versions where rim pull on a Standard model is too high for one operator.",
      "Confirm the valve-side and actuator-side flange sizes before ordering.",
    ],
  },

  "/actuators/mechanical/mab/products": {
    heading: "How to Choose an MAB Bevel Gearbox",
    paragraphs: [
      "A bevel gearbox turns the handwheel input through a right angle and reduces it, so an operator can drive a multi-turn valve such as a gate, globe or plug valve with less effort. Unlike quarter-turn gearboxes, MAB units also carry axial thrust from a rising stem, which is why the table lists both maximum torque and maximum thrust for each model.",
      "Standard models run from the MAB-075 to the MAB-2500, with maximum torque from 250 Nm to 18,000 Nm, maximum thrust from 75 kN to 2,500 kN and gear ratios from 2.5:1 to 7.5:1. The 1S versions, from MAB-125-1S, add a reduction stage for ratios from 7:1 to 30:1. The 2S versions, from MAB-150-2S, go up to 151.87:1. Valve mounting follows ISO 5210, with standard flanges from F10 to F48 and optional alternatives listed for every model.",
      "The mechanical advantage column helps compare effort. A higher figure means less force on the handwheel, but the valve takes more handwheel turns to stroke. The maximum stem diameter column gives the bore and keyway the gearbox can accept, which needs to suit the valve stem.",
      "Filter by sub-series and model, expand a row for handwheel diameter and weight, and request a quote from Valvenok's UK team.",
    ],
    points: [
      "Check both torque and thrust: rising-stem valves can be limited by either.",
      "Confirm the stem diameter and keyway fit inside the listed maximum.",
      "Choose 1S or 2S where handwheel effort on a Standard model is too high.",
    ],
  },

  "/actuators/mechanical/maw/products": {
    heading: "About the MAW Worm Gearbox Range",
    paragraphs: [
      "MAW gearboxes are manual worm gear operators for quarter-turn valves, including ball, butterfly and plug valves and dampers. The worm and wheel multiplies handwheel effort and turns the output through 90 degrees. Because a worm gear is self-locking, the valve holds position when the handwheel is released, which helps with butterfly valves that can be pushed by line flow.",
      "The table lists 30 models across three configurations. Standard models run from the MAW-012 at 125 Nm to the MAW-3200 at 32,000 Nm, with ratios between 32:1 and 68:1 and handwheels from 100 mm to 900 mm diameter. The 1S versions, MAW-300-1S upwards, add a reduction stage for ratios of 102:1 to 248:1. The 2S versions, MAW-900-2S upwards, reach 992:1.",
      "The trade-off is effort against turns. The MAW-1800 needs about 206 kg rim pull and 15.5 turns, while the MAW-1800-2S needs about 14 kg over 248 turns. Valve mounting follows ISO 5211, with standard flanges from F05 to F35 and an optional alternative listed for each model.",
      "Filter by sub-series and model, compare rim pull and weight in the table, and request a quote from Valvenok's UK team for your valve size.",
    ],
    points: [
      "Output torque should exceed the valve's highest operating torque.",
      "Rim pull shows the force needed at the handwheel rim; lower is easier to operate.",
      "Check the flange and stem connection on the valve before ordering.",
    ],
  },

  // PDS and PLDS model lists: the range text now sits in the page header (about), not here.

  "/pneumatic/actuators/scotch-yoke/products": {
    heading: "Scotch Yoke or Rack and Pinion: Which to Choose",
    paragraphs: [
      "Both actuator types on this page turn a valve through 90 degrees using compressed air, but they produce torque in different ways. A scotch yoke uses a sliding yoke on the piston rod, giving the most torque at the start and end of travel and less mid-stroke. That suits valves with high break-out torque, such as larger ball and plug valves. A rack and pinion actuator uses a toothed rack on each piston driving a pinion gear, so torque stays constant across the stroke. Rack and pinion units are usually a compact choice for smaller valves.",
      "Three series are listed. The AD series is a double-acting scotch yoke, from AD50 to AD300. The AS series is a spring-return scotch yoke over the same sizes, AS50 to AS300. The RD series is a double-acting rack and pinion, from RD32 to RD210. The model number gives the size in millimetres.",
      "Double acting means air is supplied to drive the actuator both ways. Spring return means air drives one way and an internal spring returns the valve to its safe position if air is lost. CE, ATEX and SIL certification is listed for the range, but it varies by model, so check the requirement for your application.",
      "Use the actuator type and action filters to narrow the list. Prices are shown in GBP and you can add items to your basket, or contact Valvenok's UK team for help with sizing.",
    ],
  },

  "/pneumatic/actuators/sra": {
    heading: "About the SRA Actuators and 3/2 Actuator Valves",
    paragraphs: [
      "This page lists two related groups of pneumatic components. The first is the SRA double-acting actuator range, in five sizes: SRA-052, SRA-063, SRA-075, SRA-083 and SRA-092. In a double-acting actuator, compressed air is supplied to one port to drive the actuator in one direction and to the other port to drive it back, so there is no return spring and the actuator does not move to a set fail position on air loss.",
      "The second group is a pair of 3/2 actuator valves with BSP 1/8 inch connections: the G321TB, operated by turning, and the G321LB, operated by a lever. A 3/2 valve has three ports and two positions. In one position it connects the supply to the outlet, and in the other it vents the outlet to exhaust. That makes it a simple way to switch air to a single-acting device or to give manual control of an air line.",
      "Larger SRA sizes generally suit larger valves or heavier loads, but the right size depends on the torque or force your equipment needs and the air pressure available. If you are unsure, contact Valvenok's UK team before ordering and we can help check the selection.",
      "The table is short, so there are no filters. Each row shows the part number, description and price in GBP. Expand a row for its details, then add it to your basket or ask the team for a quote on larger quantities.",
    ],
  },

  "/pneumatic/air-gun": {
    heading: "Choosing a Pneumatic Air Blow Gun",
    paragraphs: [
      "An air blow gun is a hand-held valve that releases a jet of compressed air when its trigger is pressed. In workshops and production areas it is used to clear swarf and dust from machined parts, dry components after washing, clean fixtures and moulds, and blow debris out of holes and recesses. The gun connects to the compressed air line, and the nozzle shapes the airflow.",
      "The SPAC blow guns on this page include metal-body versions and a choice of nozzle types: short, small, angled and bead nozzles. Nozzle choice affects reach and how the air is directed. A short nozzle keeps the tool compact for general bench use, while an angled nozzle helps reach awkward surfaces without twisting the wrist. A small nozzle concentrates the airflow on a smaller area, and a bead nozzle has a rounded tip.",
      "Each row shows the part number, description and price. Use the column headers to sort by part number, description or price, and expand a row for its specifications and image. You can add items straight to your basket.",
      "When using compressed air for cleaning, follow your site's safety rules for air pressure, eye protection and directing air away from people and skin. If you need help matching a blow gun to your air supply fittings, or want a quote for larger quantities, contact Valvenok's UK team.",
    ],
  },

  "/pneumatic/cylinders/esc": {
    heading: "About ESC Tie Rod Cylinders",
    paragraphs: [
      "The ESC series is a range of SPAC double-acting pneumatic cylinders with a standard tie rod profile. In a tie rod cylinder, the end caps are clamped to the barrel by external rods, a simple and robust construction that can be serviced and suits heavy industrial use. Double acting means compressed air drives the piston out on one port and back on the other, so force is available in both directions.",
      "The range covers bore sizes from 32 mm up to 250 mm and strokes from 25 mm to 1000 mm, so it can handle tasks from light pushing and clamping up to heavy-duty lifting and pressing. Larger bores give more force at the same supply pressure.",
      "Two options set ESC apart from the other cylinder series. First, through-rod versions have a piston rod coming out of both end caps. This gives equal effective area, and so equal force, in both directions, and lets you mount a load, stop or sensor on the rear rod. Second, magnetic and non-magnetic versions are available. A magnetic piston lets you fit cylinder switches to sense the end positions, while a non-magnetic version suits applications that do not need position sensing.",
      "Use the bore size, stroke, rod type and magnetic filters to narrow the configurations. Prices are shown in GBP and you can add items to your basket, or contact Valvenok's UK team for help with sizing.",
    ],
  },

  "/pneumatic/cylinders/esnc": {
    heading: "About the ESNC ISO 15552 Tie Rod Range",
    paragraphs: [
      "ESNC cylinders are double-acting pneumatic cylinders with a tie rod profile built to ISO 15552. That standard fixes the mounting dimensions, rod thread and port positions for a given bore. In practice, an ISO 15552 cylinder can usually replace another ISO 15552 cylinder of the same bore and stroke without changing the brackets, which makes replacement simpler.",
      "Every model in this series has a non-magnetic piston. This suits machines that do not need end-of-stroke sensing on the cylinder itself, or that already detect position another way. If you need to fit reed or magnetic cylinder switches, look at a magnetic series instead.",
      "The table lists 200 configurations. Bore sizes are 32, 40, 50, 63, 80, 100, 125, 160 and 200 mm. Strokes run from 25 mm to 1000 mm, in 50 mm steps above 200 mm. Part numbers follow the pattern ESNC plus bore plus stroke, so ESNC32X100 is a 32 mm bore with a 100 mm stroke. The series page also lists adjustable cushioning, which slows the piston at the end of travel to reduce impact and noise.",
      "Filter by bore size and stroke to find your configuration. Prices are shown in GBP and you can add items to your basket, or contact Valvenok's UK team for help with sizing.",
    ],
    points: [
      "Choose bore size from the force needed at your supply pressure.",
      "Allow a little extra stroke so the piston does not bottom out under load.",
    ],
  },

  "/pneumatic/cylinders/sdnc": {
    heading: "About SDNC ISO 15552 Profile Cylinders",
    paragraphs: [
      "SDNC cylinders are double-acting pneumatic cylinders built to ISO 15552 with a profile barrel. Instead of external tie rods, the barrel is an extruded profile with the end caps fixed to it. The result is a clean outer shape that is easy to wipe down, and slots in the profile can be used to mount sensors. Because mounting dimensions follow ISO 15552, they can usually replace other ISO 15552 cylinders of the same bore and stroke.",
      "The table lists 265 configurations across bore sizes of 32, 40, 50, 63, 80, 100 and 125 mm, with strokes from 25 mm to 1000 mm. Adjustable cushioning is listed for the series, letting you slow the piston at the end of travel to reduce shock on the machine and load.",
      "The main choice on this page is magnetic or non-magnetic. Magnetic versions have a magnet in the piston, so cylinder switches can detect when the piston reaches each end of its stroke. This is useful for PLC interlocks and sequencing on packaging and assembly machines. Non-magnetic versions suit applications where position is not sensed at the cylinder. Magnetic part numbers end in S, for example SDNC40X200S.",
      "Filter by bore size, stroke and magnetic option to narrow the list. Prices are shown in GBP and you can add items to your basket, or contact Valvenok's UK team for help with sizing.",
    ],
    points: [
      "Larger bores give more force at the same supply pressure.",
      "Choose a magnetic piston if you plan to fit end-of-stroke sensors.",
    ],
  },

  "/pneumatic/cylinders/sdnu": {
    heading: "About SDNU Stainless Round Body Cylinders",
    paragraphs: [
      "SDNU cylinders are compact, double-acting pneumatic cylinders built to ISO 6432, the standard for small round-body cylinders. The barrel is stainless steel, which suits washdown areas, food and packaging lines, and other places where corrosion resistance and easy cleaning matter. ISO 6432 sets the mounting and rod dimensions, so these cylinders can usually replace other ISO 6432 cylinders of the same bore and stroke.",
      "The range is small: bore sizes are 12, 16, 20 and 25 mm, with strokes of 25, 50, 75, 100, 125, 150, 175 and 200 mm, giving 56 configurations in total. These bores suit light tasks such as pushing, ejecting, sorting, gating and small clamping duties, where a larger ISO 15552 cylinder would be oversized.",
      "Every SDNU cylinder has a magnetic piston, so cylinder switches can be fitted to sense the end positions. The choice on this page is cushioning. Standard versions have fixed ends, while versions with adjustable end-of-stroke cushioning let you set how the piston slows down at the end of travel. That reduces impact and noise at higher speeds or with heavier loads. Cushioned part numbers end in -S-C, for example SDNU25X200-S-C.",
      "Filter by bore size, stroke and cushioning to find your configuration. Prices are shown in GBP and you can add items to your basket, or contact Valvenok's UK team for help with sizing.",
    ],
  },

  "/pneumatic/valves/fg": {
    heading: "Selecting an FG Series 5/2 or 5/3 Way Valve",
    paragraphs: [
      "FG valves are solenoid-operated directional control valves for steering compressed air to double-acting cylinders and actuators. The numbers describe the function. A 5/2 way valve has five ports, namely supply, two outlets and two exhausts, and two positions: one outlet is pressurised while the other vents, and switching the valve reverses them. A 5/3 way valve adds a third, centre position.",
      "The 5/2 valves come in single and double solenoid versions. A single solenoid valve is energised to switch and normally returns to its rest position when power is removed. A double solenoid valve has a coil at each end. A short pulse switches it and it stays in that position until the opposite coil is energised, which is useful where the cylinder should hold its last commanded position.",
      "The 5/3 valves on this page are double solenoid with a closed centre (CL). In the centre position all ports are blocked, so the cylinder is held where it stopped, which is useful for mid-stroke stopping.",
      "Port sizes are BSP 1/8, 1/4, 3/8, 1/2, 3/4 and 1 inch, and the part number shows the size: 06, 08, 10, 15, 20 and 25. Single solenoid 5/2 valves are listed from 1/8 inch, double solenoid 5/2 valves from 1/4 inch, and 5/3 valves from 1/8 inch.",
      "Filter by valve type, port size, control and working mode, then request a quote from Valvenok's UK team. Confirm coil voltage when you enquire.",
    ],
  },

  "/pneumatic/valves/foot-pedal": {
    heading: "Choosing a Pneumatic Foot Pedal Valve",
    paragraphs: [
      "A foot pedal valve is a manually operated pneumatic valve that the operator presses with a foot, leaving both hands free to load parts or guide work. It is used to control clamps, presses, jigs, riveting and assembly tools, and other workstation equipment driven by compressed air. All the valves on this page have BSP 1/4 inch connections.",
      "The way type sets the function. A 3/2 way valve (TG23J-08) has three ports and two positions, so it switches air on to one outlet and exhausts it when released. It suits single-acting cylinders and air tools. The 4/2 way (TG24J-08) and 5/2 way (TG25J-08) valves have two outlets that alternate between pressure and exhaust, so they drive a double-acting cylinder out and back. A 5/2 valve has separate exhausts for each outlet, while a 4/2 valve shares one.",
      "Four 5/2 way versions are listed. Beyond the standard pedal, the lock version (TG25J-08L) holds the valve in its operated position, so the operator does not have to keep their foot down. The guard version (TG25J-08G) has a cover over the pedal to reduce the chance of accidental operation. The lock and guard version (TG25J-08LG) combines both features.",
      "Consider whether a guard is needed as part of your machine risk assessment. Expand a row for details, then request a quote from Valvenok's UK team.",
    ],
  },

  "/pneumatic/valves/tg": {
    heading: "Guide to TG Series Valve Configurations",
    paragraphs: [
      "The TG series covers solenoid-operated pneumatic valves for most everyday control tasks. The way type is the first choice. A 2/2 way valve is a simple on/off valve with two ports, used to open or shut an air supply. A 3/2 way valve has three ports: it pressurises an outlet and then vents it to exhaust, and is used to drive single-acting cylinders or pilot other valves. A 5/2 way valve has two outlets that alternate, and is the usual choice for double-acting cylinders. A 5/3 way valve adds a centre position.",
      "Within those types, the table lists several configurations. Single solenoid valves switch while the coil is energised and return when it is not. Double solenoid 5/2 valves stay in their last position until the opposite coil is energised. The 5/3 valves are centre closed, so all ports block in the centre position and a cylinder can be held mid-stroke. Two 3/2 high-pressure valves are also listed, in BSP 1/4 and 1/2 inch.",
      "Ports run from BSP 1/8 inch to 1/2 inch, and the part number suffix gives the size: 06, 08, 10 or 15. In general, a larger port allows more flow, which helps a bigger cylinder move faster.",
      "Use the way type buttons to narrow the list, expand a row for details, and request a quote from Valvenok's UK team. Confirm the coil voltage and working pressure when you enquire.",
    ],
  },
};
