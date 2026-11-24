"use client";

import {
  ArticleLayout,
  Lead,
  H2,
  H3,
  P,
  A,
  UL,
  OL,
  KeyTakeaways,
  FAQ,
  CTA,
  RelatedLinks,
  Stepper,
  Finder,
  Toggle,
} from "../components/Article";

const SLUG = "/news/instrumentation-fittings-hydrogen-leak-tight-threads";

const TAKEAWAYS = [
  "A single thread mismatch or wrong sealant can stall a skid start-up and consume days.",
  "Hydrogen service raises the stakes — micro-leaks and galling are real integrity risks.",
  "BSPP, BSPT, and NPT are not interchangeable — identification before assembly is non-negotiable.",
  "Turn-of-nut provides more consistent ferrule swaging than torque methods in the field.",
  "Helium is a safe, inert tracer gas for leak testing, but hydrogen molecules are smaller and leak more easily, so a helium pass does not guarantee a hydrogen pass.",
];

const MATRIX = [
  {
    label: "Tube to tube",
    val: "Use matching-brand, matching-size compression tube fittings across the skid.",
  },
  {
    label: "Tube to NPT port",
    val: "Compression adapter to male or female NPT, with sealant on the NPT side only.",
  },
  {
    label: "Tube to BSPP port",
    val: "Compression adapter with BSPP and a bonded washer or cone seat; no thread tape.",
  },
  {
    label: "NPT to BSPT",
    val: "Do not mix. Use a purpose-made adapter that translates standards.",
  },
  {
    label: "Parallel to tapered within BSP",
    val: "Use R to G adapters designed for sealing at the face.",
  },
];

const FAQS = [
  {
    q: "What are instrumentation fittings?",
    a: "Precision components that create repeatable, leak-tight joints for small-bore tubing and instrument pipe, connecting instruments to process lines with controlled sealing faces or ferrule swaging.",
  },
  {
    q: "What types of tube fittings are common?",
    a: "Two-ferrule compression fittings are the standard for high-integrity service. You will also see single-ferrule variants, flare fittings, and weld fittings for permanent joints.",
  },
  {
    q: "Are BSP and NPT interchangeable?",
    a: "No. BSP uses a 55 degree flank angle and different thread pitch series; NPT uses 60 degrees. They are not compatible and should be connected only through dedicated adapters.",
  },
  {
    q: "How do I identify BSPP vs BSPT vs NPT?",
    a: "Check for taper, measure pitch and diameter, and confirm flank angle with gauges. BSPP is parallel and seals on a washer or cone. BSPT and NPT are tapered and seal on threads with sealant.",
  },
  {
    q: "Do NPT or BSP threads need sealant?",
    a: "Tapered NPT and BSPT typically require sealant. Parallel BSPP does not seal on the threads and should use a bonded washer, O-ring, or metal cone as designed.",
  },
];

const PLAN_LINKS = [
  {
    text: "Explore PANAM tube fittings and adapters for instrumentation service",
    href: "https://www.panamvalve.com/products/instrumentation-fittings",
  },
  {
    text: "Hydrogen-ready components and guidance for a green hydrogen system",
    href: "https://www.panamvalve.com/products/hydrogen",
  },
  {
    text: "Manifold valves for isolation, calibration, and double block and bleed",
    href: "https://www.panamvalve.com/products/valve-manifolds",
  },
  {
    text: "High pressure tubing options for instrumentation skids",
    href: "https://www.panamvalve.com/products/tubing",
  },
];

export default function InstrumentationFittingsPage() {
  return (
    <ArticleLayout
      meta={{
        slug: SLUG,
        category: "Engineering Deep-Dive",
        title: "Leak-Tight Instrumentation Fittings for Hydrogen Service",
        dek: "A Field Guide for Engineers",
        author: "PANAM",
        date: "April 2026",
        cover: "https://pblol2.blob.core.windows.net/valvenok-images/blogs/blog4.jpg",
        coverAlt: "Instrumentation Fittings for Hydrogen Service",
      }}
    >
      <Lead>
        Commissioning season moves fast. A single thread mismatch or the wrong sealant on a dry-seal joint can stall a
        skid start-up and consume days. Hydrogen service raises the stakes, where micro-leaks and galling are not minor
        annoyances but real integrity risks.
      </Lead>

      <KeyTakeaways title="Key Takeaways" items={TAKEAWAYS} />

      <P>
        This field guide distils practical checks you can run at the bench and on-site. Thread identification,
        turn-of-nut vs torque, sealant selection, and ferrule design basics for hydrogen. Use it to prevent rework, keep
        project momentum, and achieve first-time-right assemblies.
      </P>
      <P>
        PANAM supports high-integrity builds with hydrogen-focused tube fittings, adapters, and pipe fittings engineered
        for leak-tight performance. Contact us for kitting support across line classes and instrument take-offs.
      </P>

      <H2>What Instrumentation Fittings Are and Why They Fail</H2>
      <P>
        Instrumentation fittings create repeatable, leak-tight joints for small-bore tubing and instrument pipework.
        They join transmitters, gauges, regulators, manifolds, and sampling lines to the process with precise control of
        sealing surfaces and make-up. Failures typically trace to five root causes:
      </P>
      <UL
        items={[
          "Thread-form mismatch or wrong gender/handedness.",
          "Over-tightening or under-tightening caused by mixed torque guidance.",
          "Incorrect sealant on dry-seal or oxygen-cleaned joints.",
          "Galling on stainless steel nuts and bodies.",
          "Material or ferrule design that is not suitable for hydrogen service.",
        ]}
      />
      <P>Addressing these systematically prevents late-stage commissioning delays.</P>

      <H2>Compression Tube Fittings vs Threaded Adapters</H2>
      <P>
        Compression tube fittings create a mechanical grip and seal on tube OD using ferrules and a nut driving into a
        precision body. Two-ferrule designs are common for high-integrity service. Advantages include reliable joints,
        predictable make-up using turn-of-nut, and no pipe thread sealant required at the tube end.
      </P>
      <P>
        Threaded adapters translate between tube compression ends and male or female pipe threads for instrument ports,
        manifolds, and valves. Select adapters to match the instrument port standard (NPT, BSPP, BSPT) and keep the
        compression side consistent across the skid&apos;s tubing standard. For hydrogen, prefer high-quality
        two-ferrule tube fittings with controlled surface finishes and hydrogen-suitable materials.
      </P>
      <P>
        Explore PANAM tube fittings, weld fittings, elbows and tees designed for leak-tight instrumentation service in
        demanding environments at PANAM&apos;s instrumentation fittings page.
      </P>

      <H2>Thread Forms in the Field: BSPP vs BSPT vs NPT</H2>
      <P>You will encounter three primary thread families in instrumentation ports and pipework:</P>
      <UL
        items={[
          "BSPP (G): British Standard Pipe Parallel. 55 degree flank angle. Seals with a gasket, bonded washer, or captive cone seat. Threads do not provide the seal.",
          "BSPT (R): British Standard Pipe Taper. 55 degree flank angle. Tapered male engages tapered or parallel female; seal forms on the thread flanks with sealant.",
          "NPT: National Pipe Taper. 60 degree flank angle. Tapered male to tapered female; dry-seal when assembled correctly, often with sealant to fill spiral leak paths.",
        ]}
      />
      <P>
        Key differences: flank angle (BSP 55 degrees vs NPT 60 degrees), and sealing method (parallel BSPP needs a face
        seal, tapered BSPT/NPT seal on threads with sealant). BSPP ports often incorporate a 60 degree cone or
        flat-bottom undercut to accept bonded washers or metal cones.
      </P>

      <H2>How to Identify Threads On-Site</H2>
      <P>Start with three checks before you reach for sealant:</P>
      <Stepper
        kicker="Thread ID at the bench"
        title="Three checks before you reach for sealant"
        steps={[
          {
            title: "Measure diameter and pitch",
            body: "Measure major diameter with calipers, then count threads over a 1 inch or 25 mm span. Compare a thread chart for likely sizes.",
          },
          {
            title: "Check taper",
            body: "Check taper. Run the first three threads into a known parallel gauge or visually sight for cone angle; tapered males show a visible taper.",
          },
          {
            title: "Confirm flank angle",
            body: "Confirm the flank angle with a thread pitch gauge of the correct profile (55 degrees for BSP, 60 degrees for NPT), then check with Go/No-Go gauges. Do not judge by feel: mismatched threads can partly engage and seem fine, then leak in service.",
          },
        ]}
      />
      <P>
        Carry a compact thread chart, pitch gauges, and Go/No-Go ring or plug gauges for common NPT and BSP sizes. Mark
        your gauges clearly to prevent cross-use.
      </P>

      <H2>Sealant Best Practice</H2>
      <UL
        items={[
          "NPT and BSPT: Use thread sealant. PTFE tape or anaerobic liquid sealants both work when used to spec. PTFE tape should be high-density, applied 2 to 3 wraps from the second thread, pulled tight with lay direction matching thread rotation. Anaerobic sealant cures in the absence of air between metal surfaces; select grades rated for hydrogen and temperature/pressure limits, and allow cure time as specified.",
          "Dry-seal tapered threads: Even with precision NPT, a compatible sealant is recommended to eliminate spiral leak paths.",
          "BSPP: Do not tape parallel threads. Seal on the face with bonded washers, O-rings, or metal cone seats as designed. Light oil on threads for torque smoothness is acceptable; it is not the seal.",
          "Oxygen or high-purity service: Use oxygen-compatible, non-hydrocarbon sealants, or go metal-to-metal with correctly specified face seals.",
        ]}
      />
      <P>Clean threads and surfaces, deburr gently, and avoid over-application that can extrude into the bore.</P>

      <H2>Galling Mitigation for Stainless Steel Assemblies</H2>
      <P>Austenitic stainless steel fasteners and nuts are prone to adhesive wear under load. To reduce galling:</P>
      <UL
        items={[
          "Use compatible material pairings and high-finish threads.",
          "Apply a small amount of appropriate lubricant or anti-seize on non-sealing threads, unless cleanliness rules prohibit it.",
          "Avoid power tools and rapid runs; use steady hand torque.",
          "Follow staged tightening: snug, align, final make-up.",
          "For repeated make-ups, inspect threads and ferrules; replace suspect parts.",
        ]}
      />

      <H2>Torque vs Turn-of-Nut on Compression Fittings</H2>
      <P>For two-ferrule tube fittings, the industry-accepted method is turn-of-nut:</P>
      <OL
        items={[
          "Insert tube to the shoulder, finger-tighten the nut.",
          "Mark the nut at 6 o'clock, then rotate a specified angle (often 1 and 1/4 turns for initial make-up on new sizes; follow the manufacturer's chart).",
          "For remakes, tighten to the previous mark, then add a small increment as specified.",
        ]}
      />
      <P>
        Torque methods are viable in controlled assembly lines with calibrated tools, but turn-of-nut generally provides
        more consistent ferrule swaging in the field. Never mix guidance between brands. For PANAM tube fittings, follow
        the manufacturer&apos;s installation instructions supplied with the fittings.
      </P>

      <H2>Hydrogen-Specific Considerations</H2>
      <P>Hydrogen demands meticulous sealing. Material selection and ferrule geometry matter:</P>
      <UL
        items={[
          "Materials: For 316/316L in hydrogen, the factor that matters is nickel content (typically 12% or more) and a stable austenitic structure, which resists hydrogen embrittlement. Specify it on the order and check it on the material certificate.",
          "Ferrule design: Two-ferrule systems with engineered back-ferrule spring loads support vibration resistance and micro-leak control at the tube grip.",
          "Leakage vs permeation: Leaks in fittings happen at the seals and threads. Permeation of hydrogen through the metal wall is negligible by comparison, so put your effort into thread identification, make-up and sealing.",
          "Surface cleanliness: Hydrocarbon-free assembly improves leak-tightness and safety.",
          "Testing: Helium is used because it is a small, inert and safe tracer gas, not because it behaves like hydrogen. Hydrogen molecules are smaller and leak more easily, so a helium pass does not guarantee a hydrogen pass. Set acceptance leak rates with that margin in mind, test with helium by vacuum or pressure-decay, then verify again after pressure cycling.",
        ]}
      />
      <H2>Standards and Pressure Ratings</H2>
      <P>
        &quot;Hydrogen-ready&quot; should mean something you can check. In this guide it means a fitting whose material,
        design and pressure rating are documented for hydrogen service, and that is tested and certified to the
        standard your project calls for.
      </P>
      <UL
        items={[
          "ISO 19880-3: Valves for gaseous hydrogen fuelling stations, covering design, testing and marking.",
          "EC 79 (Regulation (EC) No 79/2009): Type approval of hydrogen-powered motor vehicles, including their hydrogen components.",
          "SAE J2600: Compressed hydrogen fuelling connection devices for road vehicles.",
        ]}
      />
      <P>
        Working pressure is set by the tube as much as the fitting: for a given material, the rating falls as tube OD
        rises and rises with wall thickness. Vehicle refuelling works at nominal 350 bar (H35) and 700 bar (H70), with
        a maximum operating pressure of 125% of nominal. Check the manufacturer&apos;s pressure table for your exact
        tube size and wall before you specify, and use the lower of the tube and fitting ratings.
      </P>
      <P>
        For projects building a green hydrogen system with tight integrity requirements, PANAM supplies hydrogen-ready
        fittings, valves, and manifolds designed to support rigorous testing and commissioning.
      </P>

      <H2>Quick Compatibility Matrix (Field View)</H2>
      <Finder
        kicker="Field view"
        title="What are you connecting?"
        hint="Pick the joint to see how to make it."
        options={MATRIX.map((m) => ({ label: m.label, result: m.val }))}
      />

      <H2>Do and Do Not Checklist</H2>
      <Toggle
        kicker="Installer checklist"
        title="Before you make up the joint"
        a={{
          label: "Do",
          content: (
            <UL
              items={[
                "Verify thread form with gauges before assembly.",
                "Use the correct sealing method for the thread type.",
                "Apply turn-of-nut for two-ferrule compression fittings.",
                "Control lubrication to prevent galling where cleanliness allows.",
                "Helium leak test critical hydrogen joints after pressure cycling.",
              ]}
            />
          ),
        }}
        b={{
          label: "Do Not",
          content: (
            <UL
              items={[
                "Force NPT into BSP or vice versa.",
                "Use PTFE tape on BSPP face-seal joints.",
                "Mix ferrules, nuts, and bodies from different brands.",
                "Exceed torque in pursuit of a stubborn seal; back out, clean, and re-make.",
                "Ignore cure times for anaerobic sealants.",
              ]}
            />
          ),
        }}
      />

      <FAQ title="FAQ: Fast Answers for the Job Site" items={FAQS} />

      <H2>Related Components That Complete the Build</H2>
      <UL
        items={[
          "Instrument isolation and calibration: explore manifold valves for double block and bleed service to support safe venting and instrument maintenance.",
          "Skid accessories: see high pressure tubing and hoses for integrated assemblies, and review check valves where backflow control is required.",
          "Hydrogen projects: review PANAM solutions for hydrogen applications, including fittings, valves, and materials curated for hydrogen service.",
        ]}
      />

      <H2>Next Steps</H2>
      <OL
        items={[
          "Carry pitch gauges and Go/No-Go gauges for your common NPT and BSP sizes to cut identification time at the bench.",
          "Standardise your build: specify PANAM tube fittings, adapters, and pipe fittings for hydrogen across the project, and request kitting services by line class and instrument type.",
          "Ask for material certificates and pressure ratings with your quote, so every joint can be traced to its specification.",
        ]}
      />
      <P>
        Customers count on certainty. Build with clear thread identification, correct sealing methods, and
        hydrogen-ready fittings, and you typically avoid the delays that derail commissioning.
      </P>

      <H3>Links to Help You Plan</H3>
      <UL
        items={PLAN_LINKS.map((l) => (
          <A key={l.href} href={l.href}>
            {l.text}
          </A>
        ))}
      />

      <CTA
        title="BUILDING A HYDROGEN-READY SKID?"
        body="PANAM supports high-integrity builds with hydrogen-focused tube fittings, adapters, and pipe fittings engineered for leak-tight performance. Contact us for kitting support across line classes and instrument take-offs."
        primary={{ label: "Contact Our Engineering Team", href: "/contact" }}
      />

      <RelatedLinks
        title="Related"
        links={[
          {
            label: "Instrumentation fittings",
            href: "/fittings-tubing/instrumentation-fittings",
          },
          { label: "Hydrogen & cryogenic", href: "/hydrogen-cryogenic" },
          {
            label: "Hydrogen instrumentation fittings at Panam Valves",
            href: "https://www.panamvalve.com/",
          },
          {
            label: "High-pressure fittings at Hiflux UK",
            href: "https://www.hiflux.uk.com/",
          },
        ]}
      />
    </ArticleLayout>
  );
}
