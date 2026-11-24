// Pages already on the new teal palette (23 Nov 2026). Shared parts (footer, floating
// quote button, scroll bar) turn teal on these and stay green elsewhere. Add a path here
// as each page moves over.
// (About went back to its original fresh green palette on 24 Nov 2026, by request.)
export const TEAL_PAGES = ["/"];

export const isTealPage = (pathname: string | null) => TEAL_PAGES.includes(pathname ?? "");
