// Brand shown on the shared series, model list and product pages. Susin I-Tork is the
// default; other brands (e.g. Danfoss) pass their own.
export type BrandInfo = { name: string; logo: string; href: string; about: string; external?: boolean };

export const BRANDS: Record<string, BrandInfo> = {
  Susin: { name: "Susin I-Tork", logo: "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp", href: "/brands/susin", about: "About Susin I-Tork" },
  Danfoss: {
    name: "Danfoss",
    logo: "https://pblol2.blob.core.windows.net/valvenok-images/products/danfoss/new-logo.svg",
    href: "https://www.danfoss.com/en/products/dps/hydraulic-valves/directional-control-valves/compensated-proportional-valves/pve-electrohydraulic-actuators/",
    about: "Danfoss PVE website",
    external: true,
  },
};

export const brandOf = (name?: string) => BRANDS[name ?? "Susin"] ?? BRANDS.Susin;
