// Live websites in the Valvenok group. Used by the footer, About, Contact and
// product pages, and the Organization schema, so every placement stays in sync.
// `operatedByValvenok` is true only where the site itself states it is run by
// Valvenok Ltd; the others are separate companies.
export interface GroupSite {
  name: string;
  url: string;
  desc: string;
  operatedByValvenok: boolean;
  legalName: string;
  /** Logo shown on the "Our group" cards */
  logo: string;
  /** Some logo files have wide margins; scale them up to look the same size */
  logoScale?: number;
}

export const GROUP_SITES: GroupSite[] = [
  {
    name: "Panam Valves",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/panam-logo.png",
    url: "https://www.panamvalve.com/",
    desc: "Instrumentation valves, manifolds and fittings for hydrogen, oil and gas and industrial applications.",
    operatedByValvenok: false,
    legalName: "Panam Valves Ltd",
  },
  {
    name: "Mars Valve",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/mars.png",
    url: "https://www.marsvalvenok.com/",
    desc: "Authorised UK distributor of MARS ball valves: 2-piece, 3-piece, flanged, sanitary and fire-safe ranges.",
    operatedByValvenok: true,
    legalName: "Valvenok Ltd",
  },
  {
    name: "Hiflux UK",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/hiflux-logo.png",
    url: "https://www.hiflux.uk.com/",
    desc: "Authorised UK and EU distributor of HIFLUX high-pressure valves, fittings and tubing rated to 150,000 psi.",
    operatedByValvenok: false,
    legalName: "Hiflux Hydrogen Ltd",
  },
  {
    name: "SPAC Pneumatic",
    logo: "https://pblol2.blob.core.windows.net/spac-images/spac-logo.webp",
    url: "https://www.spacpneumatic.co.uk/",
    desc: "Pneumatic cylinders, valves, FRL units and fittings for industrial automation.",
    operatedByValvenok: false,
    legalName: "SPAC Pneumatic Ltd",
  },
  {
    name: "KOSAPLUS UK",
    logo: "https://pblol2.blob.core.windows.net/kosaplus/logo/kosaplus-official-logo.svg",
    url: "https://www.kosaplus.co.uk/",
    desc: "Authorised UK distributor of KOSAPLUS pneumatic and electric valve actuators.",
    operatedByValvenok: true,
    legalName: "Valvenok Ltd",
  },
];

export const groupSite = (name: GroupSite["name"]) => GROUP_SITES.find((s) => s.name === name)!;
